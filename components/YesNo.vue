<template>
  <div>
    <p>test</p>
    <button class="yes" @click="callYes">Yes</button>
    <button class="no" @click="callNo">No</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'YesNo',
  props: {
    callMe: {
      type: Function,
    },
  },
  methods: {
    callYes() {
      this.callMe('yes')
    },
    callNo() {
      this.callMe('no')
    },
  },
})
</script>

<style scoped></style>
