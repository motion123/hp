<template>
  <input v-model="quantity" type="text" @keydown.prevent="onKeydown" />
</template>

<script>
import Vue from 'vue'

const KEY_DOWN = 40
const KEY_UP = 38
const ESCAPE = 27

export default Vue.extend({
  name: 'Key',
  data() {
    return {
      quantity: 0,
    }
  },
  watch: {
    quantity(newValue) {
      this.$emit('input', newValue)
    },
  },
  methods: {
    increment() {
      this.quantity += 1
    },
    decrement() {
      this.quantity -= 1
    },
    clear() {
      this.quantity = 0
    },
    onKeydown(e) {
      if (e.keyCode === ESCAPE) {
        this.clear()
      }
      if (e.keyCode === KEY_DOWN) {
        this.decrement()
      }
      if (e.keyCode === KEY_UP) {
        this.increment()
      }
      if (e.key === 'a') {
        this.quantity = 13
      }
    },
  },
})
</script>

<style scoped></style>
