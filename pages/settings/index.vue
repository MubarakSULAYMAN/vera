<template>
  <div v-if="userInfo">
    <ItemWrapper
      class="
        lg:hidden
        w-12
        h-12
        mx-auto
        mb-2
        text-xl text-v-green
        uppercase
        bg-v-green-olive
      "
    >
      {{ userInfo.name.slice(0, 2) || 'Do' }}
    </ItemWrapper>
    <h3
      class="text-xl text-center lg:text-left"
      :v-html="userInfo.name || 'Dooshima Onmbayugh'"
    ></h3>

    <div class="mb-8 text-sm text-center lg:text-left">
      <address class="inline-block">
        <a :href="`mailto:${userInfo.email}`">
          {{ userInfo.email || 'dooshimaonmbayugh@gmail.com' }}
        </a>
      </address>

      <span class="hidden md:inline-block mx-2 font-bold">&middot;</span>

      <p class="md:inline-block">
        <span class="mr-1 text-v-gray-dark">Shipping since</span>
        <time>{{ userInfo.date || 'November 2018' }}</time>
      </p>
    </div>
    <CardItems />
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Settings',

  components: {
    ItemWrapper: () => import('@/components/layout/ItemWrapper.vue'),
    CardItems: () => import('@/pages/settings/CardItems.vue'),
  },

  // props: {
  //   userInfo: {
  //     type: Object,
  //     required: true,
  //   },
  // },

  // data() {
  //   return {
  //     userInfo: null,
  //   }
  // },

  computed: {
    userInfo() {
      return this.$store.state.user.userProfile.userInfo
      // this.$store.dispatch( 'notification/failureSnackbar', 'Profile updated' )return this.$store.state.notification.showNotification
    },
  },

  // async fetch() {
  //   const request = await axios.get(
  //     'https://simple-api-123a.herokuapp.com/data'
  //   )

  //   console.log(request)
  //   this.userInfo = request.data
  // },

  created() {
    return this.$route.name
  },
}
</script>

<style scoped>
address {
  font-style: normal;
}
</style>
