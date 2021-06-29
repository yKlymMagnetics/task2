export const StoreLoggerPlugin = store => {
    store.subscribe((mutation, state) => {
        const {type, payload} = mutation;
        if(type === 'SET_USERS_MUTATION') {
            console.log('Users loaded: ', payload);
        }
    })
  }