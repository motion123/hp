<template>
  <b-container>
    <Posts :posts="posts"></Posts>
  </b-container>
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

<style></style>
