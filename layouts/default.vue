<template>
  <div class="font text-base">
    <MainNav
      class="sticky top-0 z-40"
      :user-info="userInfo"
      @showMenu="showMenu = !showMenu"
    />

    <div class="flex lg:pt-4 lg:pr-4 bg-v-gray-light">
      <SideNav
        :class="[
          showMenu ? 'block' : 'hidden lg:block',
          'fixed lg:relative top-12 lg:top-0 left-12 lg:left-0 w-48 lg:w-1/6 p-4 rounded lg:rounded-none bg-white lg:bg-transparent shadow-2xl lg:shadow-none z-50 lg:z-0',
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
import axios from 'axios'

export default {
  components: {
    MainNav: () => import('@/components/layout/mainNav/index.vue'),
    SideNav: () => import('@/components/layout/sideNav/index.vue'),
  },

  data() {
    return {
      showMenu: false,
      userInfo: {},
    }
  },

  async fetch() {
    const request = await axios.get(
      'https://simple-api-123a.herokuapp.com/data'
    )

    // console.log(request)
    this.userInfo = request.data
    this.$store.dispatch('user/profile/updateUserInfo', this.userInfo)
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
