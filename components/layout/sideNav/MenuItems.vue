<template>
  <nav class="flex flex-col items-center">
    <nuxt-link
      v-for="option in options"
      :key="option.route"
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
          route: '/home',
        },

        {
          name: 'Wallet',
          icon: 'IconWallet',
          route: '/wallet',
        },

        {
          name: 'Shipments',
          icon: 'IconBookmark',
          route: '/shipments',
        },

        {
          name: 'Orders',
          icon: 'IconOrders',
          route: '/orders',
        },

        {
          name: 'Pickups',
          icon: 'IconClock',
          route: '/pickups',
        },

        {
          name: 'Settings',
          icon: 'IconSettings',
          route: '/settings',
        },

        {
          name: 'Promotions',
          icon: 'IconReferral',
          route: '/promotions',
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
  background-color: var(--white);
  transition: all 0.3s ease-in-out;
}

a path {
  transition: all 0.3s ease-in-out;
}

a:hover path,
a.nuxt-link-exact-active path {
  fill: var(--black);
  color: var(--black);
}

@media screen and (max-width: 768px) {
  a:hover,
  a.nuxt-link-exact-active {
    /* color: var(--black); */
    background-color: var(--gray);
    /* transition: all 0.3s ease-in-out; */
  }
}
</style>
