const ID = 'query-drafts'

exports.name = ID

exports.apply = api => {
  if (process.env.NODE_ENV === 'production') {
    return
  }

  api.hooks.onCreatePages.tap(ID, () => injectDrafts())

  function injectDrafts() {
    const injectDraftsToPages = new Set()
    const drafts = []
    for (const page of api.pages.values()) {
      if (page.attributes.draft) {
        drafts.push({
          attributes: page.attributes,
          contentType: page.contentType,
        })
      }
      if (page.attributes.injectAllDrafts) {
        injectDraftsToPages.add(page)
      }
    }
    for (const page of injectDraftsToPages) {
      page.drafts = drafts
    }
  }
}
