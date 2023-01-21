;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    9182: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/projects',
        function () {
          return r(2806)
        },
      ])
    },
    7661: function (e, t, r) {
      'use strict'
      var i = r(5893),
        n = r(5675),
        a = r.n(n)
      let s = (e) => {
        let { ...t } = e
        return (0, i.jsx)(a(), { ...t })
      }
      t.Z = s
    },
    9831: function (e, t, r) {
      'use strict'
      r.d(t, {
        $t: function () {
          return m
        },
        TQ: function () {
          return h
        },
        Uy: function () {
          return d
        },
      })
      var i = r(5893),
        n = r(9008),
        a = r.n(n),
        s = r(1163),
        o = r(1576),
        c = r.n(o)
      let l = (e) => {
          let { title: t, description: r, ogType: n, ogImage: o, twImage: l, canonicalUrl: h } = e,
            m = (0, s.useRouter)()
          return (0, i.jsxs)(a(), {
            children: [
              (0, i.jsx)('title', { children: t }),
              (0, i.jsx)('meta', { name: 'robots', content: 'follow, index' }),
              (0, i.jsx)('meta', { name: 'description', content: r }),
              (0, i.jsx)('meta', {
                property: 'og:url',
                content: ''.concat(c().siteUrl).concat(m.asPath),
              }),
              (0, i.jsx)('meta', { property: 'og:type', content: n }),
              (0, i.jsx)('meta', { property: 'og:site_name', content: c().title }),
              (0, i.jsx)('meta', { property: 'og:description', content: r }),
              (0, i.jsx)('meta', { property: 'og:title', content: t }),
              'Array' === o.constructor.name
                ? o.map((e) => {
                    let { url: t } = e
                    return (0, i.jsx)('meta', { property: 'og:image', content: t }, t)
                  })
                : (0, i.jsx)('meta', { property: 'og:image', content: o }, o),
              (0, i.jsx)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, i.jsx)('meta', { name: 'twitter:site', content: c().twitter }),
              (0, i.jsx)('meta', { name: 'twitter:title', content: t }),
              (0, i.jsx)('meta', { name: 'twitter:description', content: r }),
              (0, i.jsx)('meta', { name: 'twitter:image', content: l }),
              (0, i.jsx)('link', {
                rel: 'canonical',
                href: h || ''.concat(c().siteUrl).concat(m.asPath),
              }),
            ],
          })
        },
        h = (e) => {
          let { title: t, description: r } = e,
            n = c().siteUrl + c().socialBanner,
            a = c().siteUrl + c().socialBanner
          return (0, i.jsx)(l, {
            title: t,
            description: r,
            ogType: 'website',
            ogImage: n,
            twImage: a,
          })
        },
        m = (e) => {
          let { title: t, description: r } = e,
            n = c().siteUrl + c().socialBanner,
            o = c().siteUrl + c().socialBanner,
            h = (0, s.useRouter)()
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(l, {
                title: t,
                description: r,
                ogType: 'website',
                ogImage: n,
                twImage: o,
              }),
              (0, i.jsx)(a(), {
                children: (0, i.jsx)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(r, ' - RSS feed'),
                  href: ''.concat(c().siteUrl).concat(h.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        d = (e) => {
          let t,
            {
              authorDetails: r,
              title: n,
              summary: o,
              date: h,
              lastmod: m,
              url: d,
              images: p = [],
              canonicalUrl: g,
            } = e
          ;(0, s.useRouter)()
          let u = new Date(h).toISOString(),
            x = new Date(m || h).toISOString(),
            b = 0 === p.length ? [c().socialBanner] : 'string' == typeof p ? [p] : p,
            y = b.map((e) => ({
              '@type': 'ImageObject',
              url: e.includes('http') ? e : c().siteUrl + e,
            }))
          t = r
            ? r.map((e) => ({ '@type': 'Person', name: e.name }))
            : { '@type': 'Person', name: c().author }
          let j = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': d },
              headline: n,
              image: y,
              datePublished: u,
              dateModified: x,
              author: t,
              publisher: {
                '@type': 'Organization',
                name: c().author,
                logo: { '@type': 'ImageObject', url: ''.concat(c().siteUrl).concat(c().siteLogo) },
              },
              description: o,
            },
            f = y[0].url
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(l, {
                title: n,
                description: o,
                ogType: 'article',
                ogImage: y,
                twImage: f,
                canonicalUrl: g,
              }),
              (0, i.jsxs)(a(), {
                children: [
                  h && (0, i.jsx)('meta', { property: 'article:published_time', content: u }),
                  m && (0, i.jsx)('meta', { property: 'article:modified_time', content: x }),
                  (0, i.jsx)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(j, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    2806: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return u
          },
        })
      var i = r(5893),
        n = r(1576),
        a = r.n(n),
        s = r(1752),
        o = r.n(s)
      let { publicRuntimeConfig: c } = o()(),
        l = [
          {
            title: 'THE WALL',
            description: 'object detection',
            status: 'WIP',
            URL: 'https://alexbran8.github.io/react-tensorflow-wall-project/',
            technologies: 'PWA react & tensorflow.JS',
            href: '/blog/the-wall',
          },
          {
            title: 'ME',
            description: 'this was me',
            status: 'WIP',
            URL: 'https://alexbran8.github.io/me',
            technologies: 'react',
            href: 'https://github.com/alexbran8/me',
          },
          {
            title: 'UI Projects',
            description: 'Templates for UI',
            status: 'WIP',
            URL: 'https://alexbran8.github.io/ui_projects/',
            technologies: 'react',
            href: 'https://github.com/alexbran8/ui_projects',
          },
          {
            title: 'Serverless',
            description: 'Blueprint for Backend MicroServices',
            status: 'WIP',
            URL: '',
            technologies: 'node, serverless',
            href: '',
          },
          {
            title: 'BASH-RELEASE',
            description: 'semantic versioning',
            status: 'WIP',
            URL: '',
            technologies: 'bash',
            href: '',
          },
          {
            title: 'Tech Blog',
            description: 'My experience on  how to start a tech blog',
            status: 'WIP',
            URL: 'https://alexbran8.github.io/me/#/blog',
            technologies: 'next.JS',
            href: 'https://github.com/alexbran8/blog',
          },
          {
            title: 'webservices.ro',
            description: 'I did this only to overcome new challenges',
            status: 'WIP',
            URL: 'https://webservices.ro/',
            technologies: 'next.JS',
            href: 'https://github.com/alexbran8/webservices',
          },
          {
            title: 'React Blueprint',
            description: 'I did this only to overcome be much more organized...',
            status: 'WIP',
            URL: 'https://github.com/alexbran8/react-blueprint',
            technologies: 'react',
            href: 'https://github.com/alexbran8/react-blueprint',
          },
          {
            title: 'Security Testing 101',
            description: 'I did this only to develop my security testing skills',
            status: 'WIP',
            URL: 'https://github.com/alexbran8/security-tests',
            technologies: 'react',
            href: 'https://github.com/alexbran8/security-tests',
          },
          {
            title: 'A Search Engine',
            description:
              "What if you could look up any information in the world? Webpages, images, videos\n    and more. Google has many features to help you find exactly what you're looking\n    for.",
            imgSrc: ''.concat(c.basePath, '/static/images/google.png'),
            href: 'https://www.google.com',
          },
          {
            title: 'The Time Machine',
            description:
              'Imagine being able to travel back in time or to the future. Simple turn the knob\n    to the desired date and press "Go". No more worrying about lost keys or\n    forgotten headphones with this simple yet affordable solution.',
            imgSrc: ''.concat(c.basePath, '/static/images/time-machine.jpg'),
            href: '/blog/the-time-machine',
          },
        ]
      var h = r(7661),
        m = r(7233)
      let { publicRuntimeConfig: d } = o()(),
        p = (e) => {
          let { title: t, description: r, imgSrc: n, href: a } = e
          return (0, i.jsx)('div', {
            className: 'md p-4 md:w-1/2',
            style: { maxWidth: '544px' },
            children: (0, i.jsxs)('div', {
              className: ''.concat(
                n && 'h-full',
                '  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'
              ),
              children: [
                n &&
                  (a
                    ? (0, i.jsx)(m.Z, {
                        href: a,
                        'aria-label': 'Link to '.concat(t),
                        children: (0, i.jsx)(h.Z, {
                          alt: t,
                          src: n,
                          className: 'object-cover object-center md:h-36 lg:h-48',
                          width: 544,
                          height: 306,
                        }),
                      })
                    : (0, i.jsx)(h.Z, {
                        alt: t,
                        src: n,
                        className: 'object-cover object-center md:h-36 lg:h-48',
                        width: 544,
                        height: 306,
                      })),
                (0, i.jsxs)('div', {
                  className: 'p-6',
                  children: [
                    (0, i.jsx)('h2', {
                      className: 'mb-3 text-2xl font-bold leading-8 tracking-tight',
                      children: a
                        ? (0, i.jsx)(m.Z, {
                            href: a,
                            'aria-label': 'Link to '.concat(t),
                            children: t,
                          })
                        : t,
                    }),
                    (0, i.jsx)('p', {
                      className: 'prose mb-3 max-w-none text-gray-500 dark:text-gray-400',
                      children: r,
                    }),
                    a &&
                      (0, i.jsx)(m.Z, {
                        href: a,
                        className:
                          'text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                        'aria-label': 'Link to '.concat(t),
                        children: 'Learn more →',
                      }),
                  ],
                }),
              ],
            }),
          })
        }
      var g = r(9831)
      function u() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(g.TQ, {
              title: 'Projects - '.concat(a().author),
              description: a().description,
            }),
            (0, i.jsxs)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, i.jsxs)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: [
                    (0, i.jsx)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: 'Projects',
                    }),
                    (0, i.jsx)('p', {
                      className: 'text-lg leading-7 text-gray-500 dark:text-gray-400',
                      children: 'Never stop exploring',
                    }),
                  ],
                }),
                (0, i.jsx)('div', {
                  className: 'container py-12',
                  children: (0, i.jsx)('div', {
                    className: '-m-4 flex flex-wrap',
                    children: l.map((e) =>
                      (0, i.jsx)(
                        p,
                        {
                          title: e.title,
                          description: e.description,
                          imgSrc: ''.concat(e.imgSrc),
                          alt: 'alternative text',
                          href: e.href,
                        },
                        e.title
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        })
      }
    },
  },
  function (e) {
    e.O(0, [938, 774, 888, 179], function () {
      return e((e.s = 9182))
    }),
      (_N_E = e.O())
  },
])
