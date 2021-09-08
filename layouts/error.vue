<template>
  <div class="container">
    <div v-if="error.statusCode === 404" class="mt-12 text-center">
      <h1 class="text-9xl font-black text-v-gray-dark">404</h1>
      <h3 class="text-3xl font-bold">{{ pageNotFound }}</h3>
    </div>

    <div v-else class="mt-12 text-center">
      <h1 class="text-6xl font-black text-v-gray-dark">An error occurred</h1>
      <h3 class="text-2xl font-bold">{{ otherError }}</h3>
    </div>

    <h3 class="mt-12 text-xl text-center">
      We can help you get to a safe place, (<NuxtLink
        to="/"
        class="font-bold text-v-yellow"
      >
        Home
      </NuxtLink>
      ).
    </h3>
  </div>
</template>

<script>
export default {
  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      pageNotFound: 'Page not found',
      otherError: 'An error occurred',
    }
  },

  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
