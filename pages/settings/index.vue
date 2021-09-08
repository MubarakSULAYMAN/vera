<template>
  <div>
    <ItemWrapper
      class="
        lg:hidden
        w-12
        h-12
        mx-auto
        mb-2
        text-xl text-v-green
        bg-v-green-olive
      "
    >
      {{ userInitials }}
    </ItemWrapper>
    <h3 class="text-xl text-center lg:text-left">Name</h3>

    <div class="mb-8 text-sm text-center lg:text-left">
      <address class="inline-block">
        <a href="mailto:webmaster@example.com">dfghnlk</a>
      </address>

      <span class="hidden md:inline-block mx-2 font-bold">&middot;</span>

      <p class="md:inline-block">
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
    ItemWrapper: () => import('@/components/layout/ItemWrapper.vue'),
    CardItems: () => import('@/pages/settings/CardItems.vue'),
  },

  data() {
    return {
      userInitials: 'DO',
    }
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
