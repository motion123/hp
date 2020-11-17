<template>
  <div>
    <h1 class="title">{{ postData.title }}</h1>
    <p class="time-display">
      {{ $dayjs(postData.createdAt).format('YYYY/MM/DD') }}
    </p>
    <div v-html="toHtmlString(postData.content)"></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IPost } from '~/types/data'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default Vue.extend({
  name: 'PostContent',
  props: {
    postData: Object as PropType<IPost>,
  },
  methods: {
    toHtmlString(obj: any) {
      return documentToHtmlString(obj)
    },
  },
})
</script>

<style scoped>
.title {
  font-size: 2rem;
  font-weight: bold;
}
.time-display {
  font-size: 1.3rem;
}
</style>
