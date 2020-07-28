<template>
  <h1>Hello</h1>
  <Yoo msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import Yoo from "./components/Yoo.vue";
export default {
  name: "App",
  components: {
    Yoo,
  },
};
</script>
