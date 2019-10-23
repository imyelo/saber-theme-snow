exports.onCreatePages = function() {
  /**
   * fork siblings navigating from:
   * - https://saber.land/tutorial/tutorial.html#showing-previous-and-next-post
   */
  // Pages are read into the `this.pages` Map
  // Sort posts by createdAt (date) from new to old
  const posts = [...this.pages.values()]
    .filter(page => page.attributes.type === 'post' && !page.attributes.draft)
    .sort((a, b) => {
      return a.attributes.createdAt > b.attributes.createdAt ? 1 : -1
    })
  for (const [index, post] of posts.entries()) {
    post.prevPost = this.pages.getPagePublicFields(posts[index - 1])
    post.nextPost = this.pages.getPagePublicFields(posts[index + 1])
  }
}
