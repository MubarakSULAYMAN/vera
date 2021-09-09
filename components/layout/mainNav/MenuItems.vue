<template>
  <nav class="flex h-full">
    <button
      v-for="(option, index) in options"
      :key="option.route"
      :class="[
        [0, 1, 2].includes(index) ? 'hidden lg:flex' : '',
        'menu-link flex items-center h-full px-2 md:px-3',
      ]"
    >
      <ItemWrapper
        v-if="option.route === options[4].route"
        class="
          w-8
          h-8
          mr-1
          md:mr-2
          text-sm text-v-green
          uppercase
          border-2 border-v-green
          bg-v-green-olive
        "
      >
        {{ userInfo.name.slice(0, 2) || 'Do' }}
      </ItemWrapper>

      <span v-if="index === 4" class="hidden lg:inline-block">
        {{ profileName || 'Dooshima Onmbayugh' }}
      </span>

      <span v-else class="hidden lg:inline-block">{{ option.name }}</span>

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
        <img src="~/assets/icons/info.svg" alt="Resources Information" />
      </ItemWrapper>

      <div
        v-if="option.route === options[2].route"
        class="
          relative
          flex
          items-center
          w-24
          h-8
          ml-2
          p-2
          rounded
          bg-v-gray-light
        "
      >
        <img
          src="~/assets/icons/currencies/usa.png"
          alt="USD"
          class="h-3"
        />

        <div class="w-12 px-2 text-black text-sm font-normal">USD</div>

        <img
          src="~/assets/icons/arrow-down-black.svg"
          alt="Selct currency"
          class="w-3"
          @click="isDropdown = !isDropdown"
        />

        <div
          v-if="isDropdown"
          class="
            absolute
            top-6
            right-1
            flex
            items-center
            w-20
            p-1
            border border-v-gray-dark
            rounded
            bg-v-gray-light
          "
        >
          <div
            class="
              flex
              justify-between
              items-center
              w-full
              px-1
              rounded
              border-b
              hover:bg-white
            "
            @click="isDropdown = !isDropdown"
          >
            <img
              src="~/assets/icons/currencies/usa.png"
              alt="USD"
              class="h-3"
            />
            <div class="text-black text-sm font-normal">USD</div>
          </div>
        </div>
      </div>

      <div v-if="option.route === options[3].route" class="relative md:ml-2">
        <IconBase width="20" height="20" :icon-name="option.name" class="mr-2">
          <IconCart />
        </IconBase>

        <ItemWrapper class="absolute bottom-3 left-3 text-xs bg-v-red">
          {{ cartCount }}
        </ItemWrapper>
      </div>

      <img
        v-if="option.route === options[4].route"
        src="~/assets/icons/arrow-down-white.svg"
        alt="User profile options"
        class="w-3 md:ml-2"
      />
    </button>
  </nav>
</template>

<script>
export default {
  components: {
    ItemWrapper: () => import('@/components/layout/ItemWrapper.vue'),
    IconBase: () => import('@/components/IconBase.vue'),
    IconCart: () => import('@/components/icons/IconCart.vue'),
  },

  props: {
    userInfo: {
      type: Object,
      required: true,
    },
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
      isDropdown: false,
    }
  },

  computed: {
    profileName() {
      const profileName = this.userInfo.name
      return profileName.length <= 18 ? profileName : `${profileName.slice(0, 18)}...`
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .menu-link {
    border-left: 1px solid #e5e5e550;
  }
}
</style>
