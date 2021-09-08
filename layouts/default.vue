<template>
  <div class="font text-base">
    <TheNav />

    <div class="flex pt-4 pr-4 bg-v-gray">
      <SideNav class="w-1/6 p-4" />
      <Nuxt class="w-5/6 min-h-screen px-32 py-16 rounded-t-md bg-white" />
    </div>
  </div>
</template>

<script>
import TheNav from '@/components/layout/theNav/index.vue'
import SideNav from '@/components/layout/sideNav/index.vue'

export default {
  components: {
    TheNav,
    SideNav,
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
