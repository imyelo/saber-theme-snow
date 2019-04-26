<template>
  <div class="page">
    <h1>404</h1>
    <p>Not Found</p>
    <div class="to-home"><saber-link to="/">&lt; Back to Home</saber-link></div>
  </div>
</template>

<script>
import fecha from 'fecha'
import '../global.css'

export default {
  head () {
    return {
      title: `404 Not Found - ${this.$siteConfig.title}`
    }
  },
}
</script>

<style lang="postcss" scoped>
.page {
  width: 48rem;
  max-width: 100%;
  margin: 8rem auto;
  padding: 0 1rem;
  .to-home {
    margin: 8rem 0;
    padding: 2rem 0;
    border-top: 1px solid hsla(60,1%,0%,0.04);
    a {
      text-decoration: none;
    }
  }
}
</style>
