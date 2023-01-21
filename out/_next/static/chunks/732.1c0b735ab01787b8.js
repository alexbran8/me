'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [732],
  {
    732: function (t, e, a) {
      a.r(e)
      var s = a(5893),
        i = a(7294),
        n = a(2010),
        r = a(1576),
        c = a.n(r)
      let u = () => {
        let [t, e] = (0, i.useState)(!0),
          { theme: a, resolvedTheme: r } = (0, n.F)(),
          u =
            '' === c().comment.giscusConfig.themeURL
              ? 'dark' === a || 'dark' === r
                ? c().comment.giscusConfig.darkTheme
                : c().comment.giscusConfig.theme
              : c().comment.giscusConfig.themeURL,
          d = 'comments-container',
          o = (0, i.useCallback)(() => {
            var t
            e(!1)
            let {
                repo: a,
                repositoryId: s,
                category: i,
                categoryId: n,
                mapping: r,
                reactions: o,
                metadata: m,
                inputPosition: l,
                lang: g,
              } = null === c() || void 0 === c()
                ? void 0
                : null === (t = c().comment) || void 0 === t
                ? void 0
                : t.giscusConfig,
              b = document.createElement('script')
            ;(b.src = 'https://giscus.app/client.js'),
              b.setAttribute('data-repo', a),
              b.setAttribute('data-repo-id', s),
              b.setAttribute('data-category', i),
              b.setAttribute('data-category-id', n),
              b.setAttribute('data-mapping', r),
              b.setAttribute('data-reactions-enabled', o),
              b.setAttribute('data-emit-metadata', m),
              b.setAttribute('data-input-position', l),
              b.setAttribute('data-lang', g),
              b.setAttribute('data-theme', u),
              b.setAttribute('crossorigin', 'anonymous'),
              (b.async = !0)
            let p = document.getElementById(d)
            return (
              p && p.appendChild(b),
              () => {
                let t = document.getElementById(d)
                t && (t.innerHTML = '')
              }
            )
          }, [u])
        return (
          (0, i.useEffect)(() => {
            let t = document.querySelector('iframe.giscus-frame')
            t && o()
          }, [o]),
          (0, s.jsxs)('div', {
            className: 'pt-6 pb-6 text-center text-gray-700 dark:text-gray-300',
            children: [
              t && (0, s.jsx)('button', { onClick: o, children: 'Load Comments' }),
              (0, s.jsx)('div', { className: 'giscus', id: d }),
            ],
          })
        )
      }
      e.default = u
    },
  },
])
