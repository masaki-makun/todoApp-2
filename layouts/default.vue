<template>
  <div>
    <transition name="page">
      <Nuxt />
    </transition>
  </div>
</template>

<style labg="scss">
html {
  font-family: "Arial", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* transition */
</style>
<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>
