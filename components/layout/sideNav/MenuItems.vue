<template>
  <nav class="flex flex-col items-center">
    <nuxt-link
      v-for="option in options"
      :key="option.name"
      :to="option.route"
      class="flex items-center w-full mb-2 last:mb-0 px-4 py-2 rounded-md"
    >
      <IconBase width="16" height="16" :icon-name="option.name" class="mr-2">
        <component :is="option.icon"></component>
      </IconBase>
      {{ option.name }}
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  components: {
    IconBase: () => import('@/components/IconBase.vue'),
    IconBookmark: () => import('@/components/icons/IconBookmark.vue'),
    IconClock: () => import('@/components/icons/IconClock.vue'),
    IconHome: () => import('@/components/icons/IconHome.vue'),
    IconOrders: () => import('@/components/icons/IconOrders.vue'),
    IconReferral: () => import('@/components/icons/IconReferral.vue'),
    IconSettings: () => import('@/components/icons/IconSettings.vue'),
    IconWallet: () => import('@/components/icons/IconWallet.vue'),
  },

  data() {
    return {
      options: [
        {
          name: 'Home',
          icon: 'IconHome',
          route: '/',
        },

        {
          name: 'Wallet',
          icon: 'IconWallet',
          route: '/',
        },

        {
          name: 'Shipments',
          icon: 'IconBookmark',
          route: '/',
        },

        {
          name: 'Orders',
          icon: 'IconOrders',
          route: '/',
        },

        {
          name: 'Pickups',
          icon: 'IconClock',
          route: '/',
        },

        {
          name: 'Settings',
          icon: 'IconSettings',
          route: '/settings',
        },

        {
          name: 'Promotions',
          icon: 'IconReferral',
          route: '/',
        },
      ],
    }
  },
}
</script>

<style scoped>
a:hover,
a.nuxt-link-exact-active {
  color: var(--black);
  /* background-color: var(--white); */
  background-color: white;
  transition: all 0.3s ease-in-out;
}

a path {
  transition: all 0.3s ease-in-out;
}

a:hover path,
a.nuxt-link-exact-active path {
  color: var(--black);
  fill: var(--black);
  background: var(--black);
}

@media screen and (max-width: 768px) {
  a:hover,
  a.nuxt-link-exact-active {
    /* background-color: var(--gray-light); */
    background-color: #f6f6f6;
  }
}
</style>
