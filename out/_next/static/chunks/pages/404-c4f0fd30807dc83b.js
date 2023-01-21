;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    394: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return n(614)
        },
      ])
    },
    9831: function (t, e, n) {
      'use strict'
      n.d(e, {
        $t: function () {
          return d
        },
        TQ: function () {
          return m
        },
        Uy: function () {
          return p
        },
      })
      var r = n(5893),
        a = n(9008),
        i = n.n(a),
        o = n(1163),
        s = n(1576),
        l = n.n(s)
      let c = (t) => {
          let { title: e, description: n, ogType: a, ogImage: s, twImage: c, canonicalUrl: m } = t,
            d = (0, o.useRouter)()
          return (0, r.jsxs)(i(), {
            children: [
              (0, r.jsx)('title', { children: e }),
              (0, r.jsx)('meta', { name: 'robots', content: 'follow, index' }),
              (0, r.jsx)('meta', { name: 'description', content: n }),
              (0, r.jsx)('meta', {
                property: 'og:url',
                content: ''.concat(l().siteUrl).concat(d.asPath),
              }),
              (0, r.jsx)('meta', { property: 'og:type', content: a }),
              (0, r.jsx)('meta', { property: 'og:site_name', content: l().title }),
              (0, r.jsx)('meta', { property: 'og:description', content: n }),
              (0, r.jsx)('meta', { property: 'og:title', content: e }),
              'Array' === s.constructor.name
                ? s.map((t) => {
                    let { url: e } = t
                    return (0, r.jsx)('meta', { property: 'og:image', content: e }, e)
                  })
                : (0, r.jsx)('meta', { property: 'og:image', content: s }, s),
              (0, r.jsx)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, r.jsx)('meta', { name: 'twitter:site', content: l().twitter }),
              (0, r.jsx)('meta', { name: 'twitter:title', content: e }),
              (0, r.jsx)('meta', { name: 'twitter:description', content: n }),
              (0, r.jsx)('meta', { name: 'twitter:image', content: c }),
              (0, r.jsx)('link', {
                rel: 'canonical',
                href: m || ''.concat(l().siteUrl).concat(d.asPath),
              }),
            ],
          })
        },
        m = (t) => {
          let { title: e, description: n } = t,
            a = l().siteUrl + l().socialBanner,
            i = l().siteUrl + l().socialBanner
          return (0, r.jsx)(c, {
            title: e,
            description: n,
            ogType: 'website',
            ogImage: a,
            twImage: i,
          })
        },
        d = (t) => {
          let { title: e, description: n } = t,
            a = l().siteUrl + l().socialBanner,
            s = l().siteUrl + l().socialBanner,
            m = (0, o.useRouter)()
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(c, {
                title: e,
                description: n,
                ogType: 'website',
                ogImage: a,
                twImage: s,
              }),
              (0, r.jsx)(i(), {
                children: (0, r.jsx)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(n, ' - RSS feed'),
                  href: ''.concat(l().siteUrl).concat(m.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        p = (t) => {
          let e,
            {
              authorDetails: n,
              title: a,
              summary: s,
              date: m,
              lastmod: d,
              url: p,
              images: u = [],
              canonicalUrl: x,
            } = t
          ;(0, o.useRouter)()
          let g = new Date(m).toISOString(),
            h = new Date(d || m).toISOString(),
            j = 0 === u.length ? [l().socialBanner] : 'string' == typeof u ? [u] : u,
            y = j.map((t) => ({
              '@type': 'ImageObject',
              url: t.includes('http') ? t : l().siteUrl + t,
            }))
          e = n
            ? n.map((t) => ({ '@type': 'Person', name: t.name }))
            : { '@type': 'Person', name: l().author }
          let f = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': p },
              headline: a,
              image: y,
              datePublished: g,
              dateModified: h,
              author: e,
              publisher: {
                '@type': 'Organization',
                name: l().author,
                logo: { '@type': 'ImageObject', url: ''.concat(l().siteUrl).concat(l().siteLogo) },
              },
              description: s,
            },
            b = y[0].url
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(c, {
                title: a,
                description: s,
                ogType: 'article',
                ogImage: y,
                twImage: b,
                canonicalUrl: x,
              }),
              (0, r.jsxs)(i(), {
                children: [
                  m && (0, r.jsx)('meta', { property: 'article:published_time', content: g }),
                  d && (0, r.jsx)('meta', { property: 'article:modified_time', content: h }),
                  (0, r.jsx)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(f, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    614: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          default: function () {
            return l
          },
        })
      var r = n(5893),
        a = n(7233),
        i = n(9831),
        o = n(1576),
        s = n.n(o)
      function l() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.TQ, { title: 'Page Not Found - '.concat(s().title) }),
            (0, r.jsxs)('div', {
              className:
                'flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6',
              children: [
                (0, r.jsx)('div', {
                  className: 'space-x-2 pt-6 pb-8 md:space-y-5',
                  children: (0, r.jsx)('h1', {
                    className:
                      'text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14',
                    children: '404',
                  }),
                }),
                (0, r.jsxs)('div', {
                  className: 'max-w-md',
                  children: [
                    (0, r.jsx)('p', {
                      className: 'mb-4 text-xl font-bold leading-normal md:text-2xl',
                      children: "Sorry we couldn't find this page.",
                    }),
                    (0, r.jsx)('p', {
                      className: 'mb-8',
                      children:
                        'But dont worry, you can find plenty of other things on our homepage.',
                    }),
                    (0, r.jsx)(a.Z, {
                      href: '/',
                      children: (0, r.jsx)('button', {
                        className:
                          'focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500',
                        children: 'Back to homepage',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
    },
  },
  function (t) {
    t.O(0, [774, 888, 179], function () {
      return t((t.s = 394))
    }),
      (_N_E = t.O())
  },
])
