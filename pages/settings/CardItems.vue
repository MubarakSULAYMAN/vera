<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="(option, index) in options"
      :key="option.name"
      class="card-item h-40 p-4 rounded-md"
    >
      <ItemWrapper
        :class="[
          ++index % 2 === 0 ? 'bg-v-yellow' : '',
          'icon-wrapper w-8 h-8 mb-2 bg-black',
        ]"
      >
        <img
          :src="require(`~/assets/icons/${option.icon}.svg`)"
          :alt="`${option.name} icon`"
          class="h-4"
        />
      </ItemWrapper>
      <h5 class="mb-1">{{ option.name }}</h5>
      <p class="text-sm text-v-gray">{{ option.description }}</p>
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
          icon: 'user',
        },

        {
          name: 'Login & Security',
          description: 'Update your password. Keep your account safe. ',
          icon: 'lock',
        },

        {
          name: 'Address Book',
          description: 'Edit, delete and add new addresses.',
          icon: 'booklet',
        },

        {
          name: 'General Preferences',
          description: 'Set your notifications and other preferences.',
          icon: 'filter',
        },

        {
          name: 'Help & Support',
          description: 'Visit our help center. We are always happy to help.',
          icon: 'help',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card-item {
  box-shadow: 0px 2px 7px 5px rgba(0, 0, 0, 0.04);
}

.card-item:hover {
  box-shadow: 0px 4px 28px 20px rgba(0, 0, 0, 0.04);
}
</style>
