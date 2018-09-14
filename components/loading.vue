<template>
  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 50%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
}
</style>