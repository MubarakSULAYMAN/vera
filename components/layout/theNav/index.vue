<template>
  <div class="flex flex-row h-16 pl-8 text-white bg-black">
    <div class="flex flex-row items-center">
      <AppLogo class="mr-8" />

      <div class="mr-20">{{ currentPage }}</div>
    </div>

    <div class="flex flex-row justify-between items-center w-full">
      <SearchInput />
      <MenuItems />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNav',

  components: {
    SearchInput: () => import('@/components/layout/SearchInput.vue'),
    MenuItems: () => import('@/components/layout/theNav/MenuItems.vue'),
  },

  data() {
    return {
      currentPage: 'Settings',
    }
  },
}
</script>

<style scoped>
</style>
