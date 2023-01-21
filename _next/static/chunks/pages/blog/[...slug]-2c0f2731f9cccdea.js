;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [94],
  {
    5706: function (n, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/blog/[...slug]',
        function () {
          return r(9662)
        },
      ])
    },
    9662: function (n, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return i
          },
          default: function () {
            return s
          },
        })
      var e = r(5893),
        u = r(920),
        o = r(1712),
        i = !0
      function s(n) {
        let { post: t, authorDetails: r, prev: i, next: s } = n,
          { mdxSource: c, toc: a, frontMatter: l } = t
        return (0, e.jsx)(e.Fragment, {
          children:
            !0 !== l.draft
              ? (0, e.jsx)(o.J, {
                  layout: l.layout || 'PostLayout',
                  toc: a,
                  mdxSource: c,
                  frontMatter: l,
                  authorDetails: r,
                  prev: i,
                  next: s,
                })
              : (0, e.jsx)('div', {
                  className: 'mt-24 text-center',
                  children: (0, e.jsxs)(u.Z, {
                    children: [
                      'Under Construction',
                      ' ',
                      (0, e.jsx)('span', {
                        role: 'img',
                        'aria-label': 'roadwork sign',
                        children: '\uD83D\uDEA7',
                      }),
                    ],
                  }),
                }),
        })
      }
    },
  },
  function (n) {
    n.O(0, [938, 410, 712, 774, 888, 179], function () {
      return n((n.s = 5706))
    }),
      (_N_E = n.O())
  },
])
