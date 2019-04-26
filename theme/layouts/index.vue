<template>
  <div class="page">
    <header>
      <div class="avatar"><img src="/avatar.jpg" /></div>
      <h1>{{ $siteConfig.title }}</h1>
    </header>
    <section class="recent-posts" v-if="page.posts">
      <h2>Recent Posts</h2>
      <ul>
        <li v-for="post in page.posts" :key="post.permalink">
          <h3>
            <div class="left">
              <span class="date">
                {{ post.attributes.createdAt | date }}
              </span>
              <span class="divider"> - </span>
            </div>
            <div class="right">
              <saber-link class="title" :to="post.attributes.permalink">
                {{ post.attributes.title }}
              </saber-link>
              <span class="category" v-if="post.attributes.category">#{{ post.attributes.category }}</span>
            </div>
          </h3>
        </li>
      </ul>
    </section>
    <section class="catch-me">
      <h2>Catch me</h2>
      <ul>
        <li v-for="(me, index) in page.attributes.catchMe" v-show="!me.hide" :key="index">
          <a v-if="me.email" @click="mail(me.url)">{{ me.name }}</a>
          <a v-else :href="me.url" target="_blank">{{ me.name }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import fecha from 'fecha'
import '../global.css'

export default {
  props: ['page'],
  head () {
    return {
      title: this.$siteConfig.title
    }
  },
  methods: {
    mail (url) {
      window.open(`mailto:${Buffer.from(url, 'base64').toString()}`)
    },
  },
  filters: {
    date: (v) => fecha.format(new Date(v), 'YYYY/MM/DD'),
  },
}
</script>

<style lang="postcss" scoped>
.page {
  width: 560px;
  max-width: 100%;
  margin: 8rem auto 16rem;
  padding: 0 1rem;
  box-sizing: border-box;
  header {
    margin: 16rem 0;
    text-align: center;
    .avatar {
      display: block;
      width: 64px;
      height: 64px;
      margin: 0 auto 1em;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
        max-width: 100%;
      }
    }
    h1 {
      display: inline-block;
      margin: 0;
      padding: 0 1em;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
      background-color: hsl(60,1%,10%);
    }
  }
  section {
    h2 {
      margin: 8rem 0 2rem;
      font-size: 1rem;
      font-weight: bold;
      color: hsl(60,1%,10%);
      border-left: 2px solid hsl(60,1%,10%);
      padding-left: 1em;
    }
  }

  /** sections **/
  .recent-posts {
    ul, li {
      display: block;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    h3 {
      margin: 1rem 0;
      font-size: 1rem;
      font-weight: normal;
      color: hsl(60,1%,35%);
      display: flex;
      .left {
        color: hsl(60,1%,40%);
        .divider {
          padding: 0 2em;
        }
      }
      .right {
        flex: 1;
        .category {
          padding-left: 0.5em;
          color: hsl(60,1%,80%);
          font-style: italic;
        }
      }
    }
  }
  .catch-me {
    ul, li {
      display: block;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      display: inline-block;
      border-right: 1px solid hsl(60,1%,90%);
      padding-right: 1em;
      margin-right: 1em;
      line-height: 1em;
      &:last-child {
        border-right: none;
      }
    }
  }
}

</style>
