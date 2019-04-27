<template>
  <div class="page">
    <h1>Drafts</h1>
    <ul v-if="page.drafts && page.drafts.length > 0">
      <li v-for="draft in page.drafts" :key="draft.permalink">
        <saber-link class="title" :to="draft.attributes.permalink">
          {{ draft.attributes.title }}
        </saber-link>
      </li>
    </ul>
    <p v-else>Nothing here.</p>
    <div class="to-home"><saber-link to="/">&lt; Back to Home</saber-link></div>
  </div>
</template>

<script>
import '../global.css'

export default {
  props: ['page'],
  head () {
    return {
      title: this.$siteConfig.title
    }
  },
}
</script>

<style lang="postcss" scoped>
.page {
  width: 48rem;
  max-width: 100%;
  margin: 8rem auto 16rem;
  padding: 0 1rem;
  box-sizing: border-box;
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
