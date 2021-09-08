<template>
  <div>
    <h3 class="text-xl">Name</h3>

    <div class="mb-8 text-sm">
      <address class="inline-block">
        <a href="mailto:webmaster@example.com">dfghnlk</a>
      </address>

      <span class="mx-2 font-bold">&middot;</span>

      <p class="inline-block">
        <span class="mr-1 text-v-gray-dark">Shipping since</span>
        <time>10:00</time>
      </p>
    </div>
    <CardItems />
  </div>
</template>

<script>
export default {
  components: {
    CardItems: () => import('@/pages/settings/CardItems.vue'),
  },

  created() {
    return this.$route.name
  },
}
</script>

<style scoped>
address {
  font-style: normal;
}
</style>
