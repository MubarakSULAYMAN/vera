<template>
  <div class="font text-base">
    <MainNav @showMenu="showMenu = !showMenu" />

    <div class="flex lg:pt-4 lg:pr-4 bg-v-gray">
      <SideNav
        :class="[
          showMenu ? 'block' : 'hidden lg:block',
          'absolute lg:relative top-12 lg:top-0 left-12 lg:left-0 w-48 lg:w-1/6 p-4 rounded lg:rounded-none bg-white lg:bg-transparent shadow-2xl lg:shadow-none',
        ]"
      />
      <Nuxt
        class="
          w-full
          lg:w-5/6
          min-h-screen
          p-8
          lg:px-32
          lg:py-16
          lg:rounded-t-md
          bg-white
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MainNav: () => import('@/components/layout/mainNav/index.vue'),
    SideNav: () => import('@/components/layout/sideNav/index.vue'),
  },

  data() {
    return {
      showMenu: false,
    }
  },
}
</script>

<style scoped>
/* .app-main,
.app-wrapper {
  min-height: 100vh;
  background-color: red;
}

.app-wrapper {

} */
</style>
