<template>
  <div class="relative w-60">
    <input
      id="nav-search"
      type="search"
      name="search"
      placeholder="Search"
      class="w-full px-2 py-1 text-black rounded focus:outline-none"
    />
    <ItemWrapper class="absolute top-2 right-2 bg-v-yellow">
      <img
        src="~/assets/images/icons/chevron-right.svg"
        alt="Send Query"
        class="h-3"
      />
    </ItemWrapper>
  </div>
</template>

<script>
export default {
  components: {
    ItemWrapper: () => import('@/components/layout/ItemWrapper.vue'),
  },
}
</script>

<style scoped>
</style>
