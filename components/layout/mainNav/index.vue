<template>
  <div class="flex flex-row h-16 pl-4 md:pl-8 text-white bg-black">
    <div class="flex flex-row items-center">
      <AppLogo class="hidden lg:block mr-8" />
      <img
        src="~/assets/images/icons/menu-line.svg"
        alt="Menu"
        class="block lg:hidden mr-12"
        @click="$emit('showMenu')"
      />

      <div class="mr-20">{{ currentPage }}</div>
    </div>

    <div class="flex flex-row justify-end md:justify-between items-center w-full">
      <SearchInput class="hidden md:block mr-8" />
      <MenuItems :user-info="userInfo" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SearchInput: () => import('@/components/layout/SearchInput.vue'),
    MenuItems: () => import('@/components/layout/mainNav/MenuItems.vue'),
  },

  props: {
    userInfo: {
      type: Object,
      required: true,
    },
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
