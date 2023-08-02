const { marked } = require('marked')

const ID = 'copyright'

exports.name = ID

exports.apply = (api, options = {}) => {
  api.hooks.onCreatePages.tap(ID, () => injectCopyright())

  function injectCopyright () {
    for (const page of api.pages.values()) {
      if (typeof page.copyright === 'undefined' && options.copyright) {
        page.copyright = parse(options.copyright)
        continue
      }
      if (page.copyright) {
        page.copyright = parse(page.copyright)
        continue
      }
    }
  }
}

function parse (copyright) {
  return marked.parse(copyright)
}
