<template>
  <PostsPage :title="`#${page.tag}`" :posts="page.posts" />
</template>

<script>
import PostsPage from '../components/posts-page.vue'

export default {
  components: {
    PostsPage,
  },
  props: ['page'],
}
</script>
