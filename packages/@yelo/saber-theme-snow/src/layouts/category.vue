<template>
  <PostsPage :title="`~${page.category}`" :posts="page.posts" />
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
