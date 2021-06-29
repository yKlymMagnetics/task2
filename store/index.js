import {StoreLoggerPlugin} from './plugins/logger';

export const state = () => ({
    users: null
});

export const plugins = [StoreLoggerPlugin];

export const mutations = {
    SET_USERS_MUTATION: (state, users) => {
        state.users = users
    }
}

export const getters = {
    getUserById: (state) => (id) => state.users.find(user => user.id.toString() === id)
}

export const actions = {
    loadUsers: async ({ commit }) => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const parsedUsers = await users.json();
        commit('SET_USERS_MUTATION', parsedUsers);
    },
    setUsers: ({ commit }, users) => commit('SET_USERS_MUTATION', users)
};