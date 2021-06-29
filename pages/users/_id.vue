<template>
  <div>
    <h1 v-if="user">{{ user.name }}</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  data: () => ({
    user: null,
  }),
  async fetch() {
    const params = this.$route.params;
    if (!this.users) {
      await this.loadUsers()
    }
    this.user = this.getUser(params.id)
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
    ...mapGetters({
      getUser: 'getUserById',
    }),
  },
  watch: {
    users(newUsers) {
      if (newUsers && newUsers.length) {
        this.user = this.getUser(this.$route.params.id)
      }
    },
  },
  methods: {
    ...mapActions({
      loadUsers: 'loadUsers',
    }),
  },
}
</script>