<template>
  <article class="post-wrapper">
    <div>
      <h2 class="title">{{ postData.title }}</h2>
    </div>

    <div v-html="toHtmlString(postData.content)"></div>
    <div>
      <p class="time-display">
        {{ $dayjs(postData.createdAt).format('YYYY/MM/DD') }}
      </p>
    </div>
  </article>
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

<style scoped lang="scss">
.title {
  font-size: 2rem;
  font-weight: bold;
}
.time-display {
  font-size: 0.8rem;
  text-align: right;
  margin: 0;
}
.post-wrapper {
  padding: 1rem;
  background-color: $secondaryBackgroundColor;
  border-radius: 1rem;
}
</style>
