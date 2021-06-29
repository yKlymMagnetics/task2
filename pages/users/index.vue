<template>
  <div>
    <div>Users page</div>
    <ul v-if="users && users.length">
      <UserListItem v-for="(user, idx) in users" :key="idx" :user="user" />
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UserListItem from '@/components/UserListItem.vue'

export default {
  components: {
    UserListItem,
  },
  async fetch() {
    if (!this.users) {
      await this.loadUsers()
    }
  },
  computed: {
    ...mapState({
      users: (state) => state.users
    }),
  },
  methods: {
    ...mapActions({
      loadUsers: 'loadUsers',
    }),
  },
}
</script>


<style scoped>
ul {
  list-style-type: none;
}
</style>