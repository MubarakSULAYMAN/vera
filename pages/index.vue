<template>
  <h1 class="pt-12 text-xl md:text-6xl font-black text-v-gray text-center">
    Redirecting...
  </h1>
</template>

<script>
export default {
  created() {
    this.$router.push('/settings')
  },
}
</script>
