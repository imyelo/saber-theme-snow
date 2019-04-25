<template>
  <div>
    <nav class="home"><saber-link to="/">&lt; Back to Home</saber-link></nav>
    <div class="page">
      <h1>{{ page.attributes.title }}</h1>
      <div class="author">
        <div class="avatar">
          <img v-if="page.attributes.avatar" :src="page.attributes.avatar" />
          <img v-else src="/avatar.jpg" />
        </div>
        <div class="name">{{ page.attributes.author || $siteConfig.author }}</div>
      </div>
      <div class="post">
        <slot name="default" />
      </div>
    </div>
    <nav class="siblings">
      <ul>
        <li class="previous" v-if="page.prevPost">
          <router-link :to="page.prevPost.attributes.permalink">
            &lt; {{ page.prevPost.attributes.title }}
          </router-link>
        </li>
        <li class="next" v-if="page.nextPost">
          <router-link :to="page.nextPost.attributes.permalink">
            {{ page.nextPost.attributes.title }} &gt;
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="bottom">
      <span class="to-top" @click="toTop"><span class="symbol"></span></span>
    </div>
  </div>
</template>

<script>
import '../global.css'
import 'prismjs/themes/prism.css'
import scroll from 'scroll'
import scrollDoc from 'scroll-doc'

export default {
  props: ['page'],
  head () {
    const pageTitle = this.page.attributes.title
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` :
        this.$siteConfig.title
    }
  },
  methods: {
    toTop () {
      scroll.top(scrollDoc(), 0)
    },
  },
}
</script>

<style lang="postcss" scoped>
.home {
  padding: 1rem;
  line-height: 1em;
  a {
    text-decoration: none;
  }
}

.page {
  width: 560px;
  max-width: 100%;
  margin: calc(8rem - 3rem) auto;
  padding: 0 1rem;
  box-sizing: border-box;
  .author {
    margin: 1rem 0 4rem;
    line-height: 2em;
    display: flex;
    justify-content: left;
    align-items: center;
    .avatar {
      width: 2em;
      height: 2em;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
        max-width: 100%;
      }
    }
    .name {
      font-size: 1rem;
      padding-left: 0.5em;
    }
  }
}

.siblings {
  margin: 8rem auto;
  padding: 2rem 1rem 0;
  width: 100%;
  max-width: 640px;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  li {
    color: #ccc;
    line-height: 2em;
    &.next {
      margin-left: auto;
    }
    a {
      text-decoration: none;
      transition: 200ms all ease;
      &:hover {
        color: #333;
      }
    }
  }
}

.bottom {
  margin: 8rem 0;
  text-align: center;
  .to-top {
    display: inline-block;
    padding: 1em;
    &:hover .symbol {
      border-bottom-color: hsl(0,0%,0%);
    }
    .symbol {
      display: inline-block;
      width: 0;
      height: 0;
      font-size: 4px;
      border-style: solid;
      border-width: 0 1em 1.5em 1em;
      border-color: transparent;
      border-bottom-color: hsl(0,0%,40%);
      transition: 200ms all ease;
    }
  }
}
</style>
