<template>
  <div class="text-v-gray-dark">
    <MenuItems />
    <TheFooter class="mt-20 lg:mt-48 text-sm" />
  </div>
</template>

<script>
export default {
  components: {
    MenuItems: () => import('@/components/layout/sideNav/MenuItems.vue'),
    TheFooter: () => import('@/components/layout/TheFooter.vue'),
  },
}
</script>

<style scoped>
</style>
