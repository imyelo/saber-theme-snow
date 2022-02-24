<template>
  <div class="page">
    <h2>{{ title }}</h2>
    <ul v-if="posts && posts.length > 0">
      <li v-for="post in posts" :key="post.permalink">
        <saber-link class="title" :to="post.attributes.permalink">
          {{ post.attributes.title }}
        </saber-link>
        <span class="date">{{ post.attributes.createdAt | date }}</span>
      </li>
    </ul>
    <p v-else>Nothing here.</p>
    <div class="to-home"><saber-link to="/">&lt; Back to Home</saber-link></div>
  </div>
</template>

<script>
import fecha from 'fecha'

export default {
  props: ['title', 'posts'],
  head () {
    return {
      title: `${this.title} - ${this.$siteConfig.title}`,
    }
  },
  filters: {
    date: (v) => fecha.format(new Date(v), 'YYYY/MM/DD'),
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
  .date {
    margin-left: 1em;
    font-style: italic;
    color: hsl(60,1%,80%);
  }
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
