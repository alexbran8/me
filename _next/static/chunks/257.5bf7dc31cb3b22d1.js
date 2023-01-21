'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [257],
  {
    257: function (e, t, s) {
      s.r(t)
      var i = s(5893),
        n = s(7294),
        a = s(1576),
        d = s.n(a)
      let o = (e) => {
        let { frontMatter: t } = e,
          [s, a] = (0, n.useState)(!0)
        return (0, i.jsxs)('div', {
          className: 'pt-6 pb-6 text-center text-gray-700 dark:text-gray-300',
          children: [
            s &&
              (0, i.jsx)('button', {
                onClick: function () {
                  if (
                    (a(!1),
                    (window.disqus_config = function () {
                      ;(this.page.url = window.location.href), (this.page.identifier = t.slug)
                    }),
                    void 0 === window.DISQUS)
                  ) {
                    let e = document.createElement('script')
                    ;(e.src =
                      'https://' + d().comment.disqusConfig.shortname + '.disqus.com/embed.js'),
                      e.setAttribute('data-timestamp', +new Date()),
                      e.setAttribute('crossorigin', 'anonymous'),
                      (e.async = !0),
                      document.body.appendChild(e)
                  } else window.DISQUS.reset({ reload: !0 })
                },
                children: 'Load Comments',
              }),
            (0, i.jsx)('div', { className: 'disqus-frame', id: 'disqus_thread' }),
          ],
        })
      }
      t.default = o
    },
  },
])
