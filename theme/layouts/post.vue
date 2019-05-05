<template>
  <div>
    <nav class="top">
      <saber-link v-if="page.attributes.draft" class="to-home" to="/drafts">&lt; Back to Drafts-List</saber-link>
      <saber-link v-else class="to-home" to="/">&lt; Back to Home</saber-link>
    </nav>
    <div class="page">
      <h1>{{ page.attributes.title }}</h1>
      <div class="author">
        <div class="avatar">
          <img v-if="page.attributes.avatar" :src="page.attributes.avatar" />
          <img v-else src="/avatar.jpg" />
        </div>
        <span class="name">{{ page.attributes.author || $siteConfig.author }}</span>
        <span class="divider">-</span>
        <span class="date">{{ page.attributes.date | date }}</span>
      </div>
      <div class="post">
        <slot name="default" />
      </div>
      <div class="copyright" v-if="page.copyright" v-html="page.copyright" />
      <div class="updated" v-if="page.attributes.updated">
        - Last updated on {{ page.attributes.updated | date }}
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
import fecha from 'fecha'
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
  filters: {
    date: (v) => fecha.format(new Date(v), 'YYYY/MM/DD'),
  },
}
</script>

<style lang="postcss" scoped>
.top {
  padding: 1rem;
  line-height: 1em;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
}

.page {
  width: 48rem;
  max-width: 100%;
  margin: calc(8rem - 3rem) auto;
  padding: 0 1rem;
  box-sizing: border-box;
  .author {
    margin: 1rem 0 8rem;
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
        margin: 0;
        width: 100%;
        max-width: 100%;
      }
    }
    .name {
      font-size: 1em;
      padding: 0 1em;
    }
    .divider, .date {
      color: hsl(60,1%,60%);
    }
    .date {
      padding: 0 1em;
      font-style: italic;
      letter-spacing: 1px;
    }
  }
  .copyright {
    margin: 8rem auto 0;
    padding-left: 1em;
    border-left: 4px solid hsl(60,1%,20%);
    box-sizing: border-box;
    width: 100%;
    max-width: 48rem;
    color: hsl(60,1%,40%);
    & >>> a {
      padding: 0 0.5em;
      text-decoration: none;
    }
  }
  .updated {
    margin: 8rem auto 0;
    padding: 0 0.5em;
    letter-spacing: 1px;
    text-align: right;
    font-style: italic;
    color: hsl(60,1%,60%);
  }
}


.siblings {
  margin: 8rem auto;
  padding: 2rem 0 0;
  width: 100%;
  max-width: 48rem;
  box-sizing: border-box;
  border-top: 1px solid hsl(60,1%,0%,0.04);
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
    color: hsl(60,1%,60%);
    line-height: 2em;
    &.next {
      margin-left: auto;
    }
    a {
      text-decoration: none;
      transition: 200ms all ease;
    }
  }
}

.bottom {
  margin: 8rem 0;
  text-align: center;
  .to-top {
    display: inline-block;
    padding: 1em;
    cursor: pointer;
    &:hover .symbol {
      border-bottom-color: hsl(60,1%,0%);
    }
    .symbol {
      display: inline-block;
      width: 0;
      height: 0;
      transform: scale(0.5);
      border-style: solid;
      border-width: 0 1em 1.5em 1em;
      border-color: transparent;
      border-bottom-color: hsl(60,1%,30%);
      transition: 200ms all ease;
    }
  }
}
</style>
