'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [806],
  {
    8806: function (e, t, n) {
      n.r(t)
      var r = n(5893),
        s = n(7294),
        c = n(2010),
        a = n(1576),
        u = n.n(a)
      let m = () => {
        let [e, t] = (0, s.useState)(!0),
          { theme: n, resolvedTheme: a } = (0, c.F)(),
          m =
            'dark' === n || 'dark' === a
              ? u().comment.utterancesConfig.darkTheme
              : u().comment.utterancesConfig.theme,
          i = 'comments-container',
          o = (0, s.useCallback)(() => {
            t(!1)
            let e = document.createElement('script')
            ;(e.src = 'https://utteranc.es/client.js'),
              e.setAttribute('repo', u().comment.utterancesConfig.repo),
              e.setAttribute('issue-term', u().comment.utterancesConfig.issueTerm),
              e.setAttribute('label', u().comment.utterancesConfig.label),
              e.setAttribute('theme', m),
              e.setAttribute('crossorigin', 'anonymous'),
              (e.async = !0)
            let n = document.getElementById(i)
            return (
              n && n.appendChild(e),
              () => {
                let e = document.getElementById(i)
                e && (e.innerHTML = '')
              }
            )
          }, [m])
        return (
          (0, s.useEffect)(() => {
            let e = document.querySelector('iframe.utterances-frame')
            e && o()
          }, [o]),
          (0, r.jsxs)('div', {
            className: 'pt-6 pb-6 text-center text-gray-700 dark:text-gray-300',
            children: [
              e && (0, r.jsx)('button', { onClick: o, children: 'Load Comments' }),
              (0, r.jsx)('div', { className: 'utterances-frame relative', id: i }),
            ],
          })
        )
      }
      t.default = m
    },
  },
])