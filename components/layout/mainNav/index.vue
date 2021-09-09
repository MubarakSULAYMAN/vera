<template>
  <div class="flex flex-row h-16 text-white bg-black">
    <div
      class="flex flex-row items-center w-1/6 md:w-1/3 lg:w-1/6 pl-4 md:pl-8"
    >
      <AppLogo class="hidden lg:block" />
      <img
        src="~/assets/images/icons/menu-line.svg"
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
        md:w-2/3
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
/*
'v-black': '#000000',
'v-black-light': '#212b36',
'v-gray-dark': '#666666',
'v-gray': '#979797',
'v-gray-light': '#f6f6f6',
*/
</style>
