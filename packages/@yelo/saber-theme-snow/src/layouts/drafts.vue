<template>
  <PostsPage title="Drafts" :posts="page.drafts" />
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
