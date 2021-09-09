<template>
  <div class="flex flex-row h-16 text-white bg-black">
    <div
      class="flex flex-row items-center w-1/6 md:w-1/5 lg:w-1/6 pl-4 md:pl-8"
    >
      <AppLogo class="hidden lg:block" />
      <img
        src="~/assets/icons/menu-line.svg"
        alt="Menu"
        class="block lg:hidden"
        @click="$emit('showMenu')"
      />

      <div class="ml-8">{{ currentPage }}</div>
    </div>

    <div
      class="
        flex flex-row
        justify-end
        md:justify-between
        items-center
        w-5/6
        lg:w-5/6
      "
    >
      <SearchInput class="hidden md:block" />
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
