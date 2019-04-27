const ID = 'copyright'

exports.name = ID

exports.apply = (api, options = {}) => {
  api.hooks.onCreatePages.tap(ID, () => injectCopyright())

  function injectCopyright () {
    for (const page of api.pages.values()) {
      if (typeof page.attributes.copyright === 'undefined' && options.copyright) {
        api.pages.extendPageProp(page.internal.id, {
          copyright: options.copyright,
          // copyright: api.markdown(options.copyright),
        })
        continue
      }
      if (page.attributes.copyright) {
        api.pages.extendPageProp(page.internal.id, {
          copyright: page.attributes.copyright,
          // copyright: api.markdown(page.attributes.copyright),
        })
        continue
      }
    }
  }
}
