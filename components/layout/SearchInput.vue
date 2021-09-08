<template>
  <div class="relative w-60">
    <input
      id="nav-search"
      type="search"
      name="search"
      placeholder="Search"
      class="w-full px-2 py-1 text-black rounded focus:outline-none"
    />
    <ItemWrapper class="query-button absolute right-2 h-6 w-6 bg-v-yellow">
      <img
        src="~/assets/images/icons/chevron-right.svg"
        alt="Send Query"
        class="h-3"
      />
    </ItemWrapper>
  </div>
</template>

<script>
// import ItemWrapper from '@/components/layout/ItemWrapper.vue'

export default {
  components: {
    ItemWrapper: () => import('@/components/layout/ItemWrapper.vue'),
  },
}
</script>

<style scoped>
.query-button {
  top: 5px;
}
</style>
