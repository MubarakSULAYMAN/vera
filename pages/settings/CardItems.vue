<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="(option, index) in options"
      :key="option.name"
      class="h-40 p-4 rounded-md shadow-md hover:shadow-xl"
    >
      <ItemWrapper
        :class="[
          ++index % 2 === 0 ? 'bg-v-yellow' : '',
          'icon-wrapper w-8 h-8 mb-2 bg-black',
        ]"
      >
        <img
          :src="require(`~/assets/images/icons/${option.icon}.svg`)"
          :alt="`${option.name} icon`"
          class="h-4"
        />
      </ItemWrapper>
      <h5 class="mb-1">{{ option.name }}</h5>
      <p class="text-sm text-v-gray-dark">{{ option.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ItemWrapper: () => import('@/components/layout/ItemWrapper.vue'),
  },

  data() {
    return {
      options: [
        {
          name: 'Personal Information',
          description: 'Edit your name, phone number and other personal info.',
          // icon: '@/assets/images/icons/user.svg',
          icon: 'user',
        },

        {
          name: 'Login & Security',
          description: 'Update your password. Keep your account safe. ',
          // icon: '@/assets/images/icons/lock.svg',
          icon: 'lock',
        },

        {
          name: 'Address Book',
          description: 'Edit, delete and add new addresses.',
          // icon: '@/assets/images/icons/booklet.svg',
          icon: 'booklet',
        },

        {
          name: 'General Preferences',
          description: 'Set your notifications and other preferences.',
          // icon: '@/assets/images/icons/filter.svg',
          icon: 'filter',
        },

        {
          name: 'Help & Support',
          description: 'Visit our help center. We are always happy to help.',
          // icon: '@/assets/images/icons/help.svg',
          icon: 'help',
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>
