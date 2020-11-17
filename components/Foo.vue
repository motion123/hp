<template>
  <button @click="fetchResult"></button>
</template>

<script lang="ts">
import Vue from 'vue'

import axios from 'axios'

export default Vue.extend({
  name: 'Foo',
  data() {
    return {
      value: null,
    }
  },
  methods: {
    async fetchResult() {
      const response = await axios.get('mock/service')
      this.value = response.data
    },
  },
})
</script>

<style scoped></style>
