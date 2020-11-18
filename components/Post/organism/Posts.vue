<template>
  <div class="posts-box">
    <b-row>
      <b-col :key="post.title" v-for="post in sortPost" cols="12" sm="6" md="4">
        <PostContent :postData="post" />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IPost } from '~/types/data'
import PostContent from '~/components/Post/molecules/PostContent.vue'

export default Vue.extend({
  props: {
    posts: Array as PropType<IPost[]>,
  },
  computed: {
    sortPost(): IPost[] {
      return [...this.posts].sort(function (a, b) {
        if (a.createdAt < b.createdAt) return -1
        else return 1
      })
    },
  },
  components: {
    PostContent,
  },
})
</script>

<style scoped lang="scss"></style>
