<template>
  <div>
    <PostContent :key="post.title" v-for="post in sortPost" :postData="post" />
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

<style scoped></style>
