<template>
  <li>
    <NuxtLink :to='"/users/" + user.id'>{{ user.name }}</NuxtLink>
  </li>
</template>

<script>
export default {
  props: ["user"], //eslint-disable-line
};
</script>
