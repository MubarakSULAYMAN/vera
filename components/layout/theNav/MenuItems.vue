<template>
  <nav class="flex h-full">
    <nuxt-link
      v-for="option in options"
      :key="option.route"
      :to="option.route !== options[4].route ? option.route : ''"
      class="menu-link flex items-center h-full px-3"
    >
      <ItemWrapper
        v-if="option.route === options[4].route"
        class="
          w-8
          h-8
          mr-2
          text-sm text-v-gray-dark
          border-2 border-v-green
          bg-v-green-olive
        "
      >
        {{ userInitials }}
      </ItemWrapper>

      {{ option.name }}

      <ItemWrapper
        v-if="option.route === options[0].route"
        class="ml-2 text-xs bg-v-red"
      >
        {{ newCount }}
      </ItemWrapper>

      <ItemWrapper
        v-if="option.route === options[1].route"
        class="ml-2 bg-white"
      >
        <img src="~/assets/images/icons/info.svg" alt="Resources Information" />
      </ItemWrapper>

      <ItemWrapper
        v-if="option.route === options[3].route"
        class="ml-2 text-xs bg-v-red"
      >
        {{ newCount }}
      </ItemWrapper>

      <img
        v-if="option.route === options[4].route"
        src="~/assets/images/icons/arrow-down-white.svg"
        alt="User profile options"
        class="h-2 ml-2"
      />
    </nuxt-link>
  </nav>
</template>

<script>
// import ItemWrapper from '@/components/layout/ItemWrapper.vue'

export default {
  // name: 'MenuItem',

  components: {
    ItemWrapper: () => import('@/components/layout/ItemWrapper.vue'),
  },

  data() {
    return {
      options: [
        {
          name: "What's new?",
          route: '/what-is-new',
        },

        {
          name: 'Resources',
          route: '/resources',
        },

        {
          name: 'Currency',
          route: '/currency',
        },

        {
          name: 'Cart',
          route: '/cart',
        },

        {
          name: 'Dooshima',
          route: '/settings/profile/dooshima',
        },
      ],

      newCount: 2,
      cartCount: 3,
      userInitials: 'DO',
    }
  },
}
</script>

<style scoped>
.menu-link {
  border-left: 1px solid #e5e5e550;
  /* rgba(0, 0, 0, 0.05) */
}
</style>
