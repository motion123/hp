<template>
  <div class="container">
    <Posts :posts="posts"></Posts>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Posts from '~/components/Post/organism/Posts.vue'
import { IPost } from '~/types/data'
import { Context } from '~/node_modules/@nuxt/types'

export default Vue.extend({
  async asyncData(ctx: Context) {
    const posts = await ctx.$ctfGetEntries<IPost>('blogPost').then((data) => {
      return data.items.map((post) => post.fields)
    })
    return {
      posts,
    }
  },
  components: {
    Posts,
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
