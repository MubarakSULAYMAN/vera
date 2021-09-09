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
    <h3 class="mb-2 text-xl text-center lg:text-left">
      {{ userInfo.name || 'Dooshima Onmbayugh' }}
    </h3>

    <div class="mb-8 text-sm text-center lg:text-left">
      <address class="inline-block">
        <a :href="`mailto:${userInfo.email}`">
          {{ userInfo.email || 'dooshimaonmbayugh@gmail.com' }}
        </a>
      </address>

      <span class="hidden md:inline-block mx-2 text-v-gray font-bold">&middot;</span>

      <p class="md:inline-block">
        <span class="mr-1 text-v-gray">Shipping since</span>
        <time>{{ arrivalDate || 'November 2018' }}</time>
      </p>
    </div>
    <CardItems />
  </div>
</template>

<script>
export default {
  components: {
    ItemWrapper: () => import('@/components/layout/ItemWrapper.vue'),
    CardItems: () => import('@/pages/settings/CardItems.vue'),
  },

  computed: {
    userInfo() {
      return this.$store.state.user.profile.userInfo
    },

    arrivalDate() {
      const localDate = new Date(this.userInfo.date).toLocaleString()
      return `${localDate.slice(-8)} of ${localDate.slice(0, -10)}`
    },
  },
}
</script>

<style scoped>
address {
  font-style: normal;
}
</style>
