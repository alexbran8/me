;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [712],
  {
    9618: function (e, t, r) {
      var a = {
        './AuthorLayout': 4856,
        './AuthorLayout.js': 4856,
        './ListLayout': 6055,
        './ListLayout.js': 6055,
        './PostLayout': 5067,
        './PostLayout.js': 5067,
        './PostSimple': 3168,
        './PostSimple.js': 3168,
        './siteMetadata': 8332,
        './siteMetadata.js': 8332,
      }
      function s(e) {
        return r(i(e))
      }
      function i(e) {
        if (!r.o(a, e)) {
          var t = Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return a[e]
      }
      ;(s.keys = function () {
        return Object.keys(a)
      }),
        (s.resolve = i),
        (e.exports = s),
        (s.id = 9618)
    },
    7661: function (e, t, r) {
      'use strict'
      var a = r(5893),
        s = r(5675),
        i = r.n(s)
      let l = (e) => {
        let { ...t } = e
        return (0, a.jsx)(i(), { ...t })
      }
      t.Z = l
    },
    1712: function (e, t, r) {
      'use strict'
      r.d(t, {
        J: function () {
          return m
        },
      })
      var a = r(5893),
        s = r(7294),
        i = r(3194),
        l = r(7661),
        n = r(7233)
      let c = (e) => {
          let {
              toc: t,
              indentDepth: r = 3,
              fromHeading: s = 1,
              toHeading: i = 6,
              asDisclosure: l = !1,
              exclude: n = '',
            } = e,
            c = Array.isArray(n)
              ? RegExp('^(' + n.join('|') + ')$', 'i')
              : RegExp('^(' + n + ')$', 'i'),
            d = t.filter((e) => e.depth >= s && e.depth <= i && !c.test(e.value)),
            o = (0, a.jsx)('ul', {
              children: d.map((e) =>
                (0, a.jsx)(
                  'li',
                  {
                    className: ''.concat(e.depth >= r && 'ml-6'),
                    children: (0, a.jsx)('a', { href: e.url, children: e.value }),
                  },
                  e.value
                )
              ),
            })
          return (0, a.jsx)(a.Fragment, {
            children: l
              ? (0, a.jsxs)('details', {
                  open: !0,
                  children: [
                    (0, a.jsx)('summary', {
                      className: 'ml-6 pt-2 pb-2 text-xl font-bold',
                      children: 'Table of Contents',
                    }),
                    (0, a.jsx)('div', { className: 'ml-6', children: o }),
                  ],
                })
              : o,
          })
        },
        d = (e) => {
          let t = (0, s.useRef)(null),
            [r, i] = (0, s.useState)(!1),
            [l, n] = (0, s.useState)(!1),
            c = () => {
              i(!0)
            },
            d = () => {
              i(!1), n(!1)
            },
            o = () => {
              n(!0),
                navigator.clipboard.writeText(t.current.textContent),
                setTimeout(() => {
                  n(!1)
                }, 2e3)
            }
          return (0, a.jsxs)('div', {
            ref: t,
            onMouseEnter: c,
            onMouseLeave: d,
            className: 'relative',
            children: [
              r &&
                (0, a.jsx)('button', {
                  'aria-label': 'Copy code',
                  type: 'button',
                  className:
                    'absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 '.concat(
                      l
                        ? 'border-green-400 focus:border-green-400 focus:outline-none'
                        : 'border-gray-300'
                    ),
                  onClick: o,
                  children: (0, a.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    fill: 'none',
                    className: l ? 'text-green-400' : 'text-gray-300',
                    children: l
                      ? (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                          }),
                        })
                      : (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                          }),
                        }),
                  }),
                }),
              (0, a.jsx)('pre', { children: e.children }),
            ],
          })
        }
      var o = r(7726)
      let x = {
          Image: l.Z,
          TOCInline: c,
          a: n.Z,
          pre: d,
          BlogNewsletterForm: o.w,
          wrapper(e) {
            let { components: t, layout: s, ...i } = e
            console.log(i)
            let l = r(9618)('./'.concat(s)).default
            return (0, a.jsx)(l, { ...i })
          },
        },
        m = (e) => {
          let { layout: t, mdxSource: r, ...l } = e,
            n = (0, s.useMemo)(() => (0, i.getMDXComponent)(r), [r])
          return (0, a.jsx)(n, { layout: t, components: x, ...l })
        }
    },
    7726: function (e, t, r) {
      'use strict'
      r.d(t, {
        w: function () {
          return c
        },
      })
      var a = r(5893),
        s = r(7294),
        i = r(1576),
        l = r.n(i)
      let n = (e) => {
        let { title: t = 'Subscribe to the newsletter' } = e,
          r = (0, s.useRef)(null),
          [i, n] = (0, s.useState)(!1),
          [c, d] = (0, s.useState)(''),
          [o, x] = (0, s.useState)(!1),
          m = async (e) => {
            e.preventDefault()
            let t = await fetch('/api/'.concat(l().newsletter.provider), {
                body: JSON.stringify({ email: r.current.value }),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
              }),
              { error: a } = await t.json()
            if (a) {
              n(!0), d('Your e-mail address is invalid or you are already subscribed!')
              return
            }
            ;(r.current.value = ''),
              n(!1),
              x(!0),
              d('Successfully! \uD83C\uDF89 You are now subscribed.')
          }
        return (0, a.jsxs)('div', {
          children: [
            (0, a.jsx)('div', {
              className: 'pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100',
              children: t,
            }),
            (0, a.jsxs)('form', {
              className: 'flex flex-col sm:flex-row',
              onSubmit: m,
              children: [
                (0, a.jsxs)('div', {
                  children: [
                    (0, a.jsx)('label', {
                      className: 'sr-only',
                      htmlFor: 'email-input',
                      children: 'Email address',
                    }),
                    (0, a.jsx)('input', {
                      autoComplete: 'email',
                      className:
                        'w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black',
                      id: 'email-input',
                      name: 'email',
                      placeholder: o ? "You're subscribed !  \uD83C\uDF89" : 'Enter your email',
                      ref: r,
                      required: !0,
                      type: 'email',
                      disabled: o,
                    }),
                  ],
                }),
                (0, a.jsx)('div', {
                  className: 'mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3',
                  children: (0, a.jsx)('button', {
                    className:
                      'w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 '.concat(
                        o ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400',
                        ' focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black'
                      ),
                    type: 'submit',
                    disabled: o,
                    children: o ? 'Thank you!' : 'Sign up',
                  }),
                }),
              ],
            }),
            i &&
              (0, a.jsx)('div', {
                className: 'w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96',
                children: c,
              }),
          ],
        })
      }
      t.Z = n
      let c = (e) => {
        let { title: t } = e
        return (0, a.jsx)('div', {
          className: 'flex items-center justify-center',
          children: (0, a.jsx)('div', {
            className: 'bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8',
            children: (0, a.jsx)(n, { title: t }),
          }),
        })
      }
    },
    920: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return s
        },
      })
      var a = r(5893)
      function s(e) {
        let { children: t } = e
        return (0, a.jsx)('h1', {
          className:
            'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14',
          children: t,
        })
      }
    },
    9831: function (e, t, r) {
      'use strict'
      r.d(t, {
        $t: function () {
          return x
        },
        TQ: function () {
          return o
        },
        Uy: function () {
          return m
        },
      })
      var a = r(5893),
        s = r(9008),
        i = r.n(s),
        l = r(1163),
        n = r(1576),
        c = r.n(n)
      let d = (e) => {
          let { title: t, description: r, ogType: s, ogImage: n, twImage: d, canonicalUrl: o } = e,
            x = (0, l.useRouter)()
          return (0, a.jsxs)(i(), {
            children: [
              (0, a.jsx)('title', { children: t }),
              (0, a.jsx)('meta', { name: 'robots', content: 'follow, index' }),
              (0, a.jsx)('meta', { name: 'description', content: r }),
              (0, a.jsx)('meta', {
                property: 'og:url',
                content: ''.concat(c().siteUrl).concat(x.asPath),
              }),
              (0, a.jsx)('meta', { property: 'og:type', content: s }),
              (0, a.jsx)('meta', { property: 'og:site_name', content: c().title }),
              (0, a.jsx)('meta', { property: 'og:description', content: r }),
              (0, a.jsx)('meta', { property: 'og:title', content: t }),
              'Array' === n.constructor.name
                ? n.map((e) => {
                    let { url: t } = e
                    return (0, a.jsx)('meta', { property: 'og:image', content: t }, t)
                  })
                : (0, a.jsx)('meta', { property: 'og:image', content: n }, n),
              (0, a.jsx)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, a.jsx)('meta', { name: 'twitter:site', content: c().twitter }),
              (0, a.jsx)('meta', { name: 'twitter:title', content: t }),
              (0, a.jsx)('meta', { name: 'twitter:description', content: r }),
              (0, a.jsx)('meta', { name: 'twitter:image', content: d }),
              (0, a.jsx)('link', {
                rel: 'canonical',
                href: o || ''.concat(c().siteUrl).concat(x.asPath),
              }),
            ],
          })
        },
        o = (e) => {
          let { title: t, description: r } = e,
            s = c().siteUrl + c().socialBanner,
            i = c().siteUrl + c().socialBanner
          return (0, a.jsx)(d, {
            title: t,
            description: r,
            ogType: 'website',
            ogImage: s,
            twImage: i,
          })
        },
        x = (e) => {
          let { title: t, description: r } = e,
            s = c().siteUrl + c().socialBanner,
            n = c().siteUrl + c().socialBanner,
            o = (0, l.useRouter)()
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(d, {
                title: t,
                description: r,
                ogType: 'website',
                ogImage: s,
                twImage: n,
              }),
              (0, a.jsx)(i(), {
                children: (0, a.jsx)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(r, ' - RSS feed'),
                  href: ''.concat(c().siteUrl).concat(o.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        m = (e) => {
          let t,
            {
              authorDetails: r,
              title: s,
              summary: n,
              date: o,
              lastmod: x,
              url: m,
              images: u = [],
              canonicalUrl: h,
            } = e
          ;(0, l.useRouter)()
          let p = new Date(o).toISOString(),
            g = new Date(x || o).toISOString(),
            y = 0 === u.length ? [c().socialBanner] : 'string' == typeof u ? [u] : u,
            j = y.map((e) => ({
              '@type': 'ImageObject',
              url: e.includes('http') ? e : c().siteUrl + e,
            }))
          t = r
            ? r.map((e) => ({ '@type': 'Person', name: e.name }))
            : { '@type': 'Person', name: c().author }
          let v = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': m },
              headline: s,
              image: j,
              datePublished: p,
              dateModified: g,
              author: t,
              publisher: {
                '@type': 'Organization',
                name: c().author,
                logo: { '@type': 'ImageObject', url: ''.concat(c().siteUrl).concat(c().siteLogo) },
              },
              description: n,
            },
            f = j[0].url
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(d, {
                title: s,
                description: n,
                ogType: 'article',
                ogImage: j,
                twImage: f,
                canonicalUrl: h,
              }),
              (0, a.jsxs)(i(), {
                children: [
                  o && (0, a.jsx)('meta', { property: 'article:published_time', content: p }),
                  x && (0, a.jsx)('meta', { property: 'article:modified_time', content: g }),
                  (0, a.jsx)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(v, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    7175: function (e, t, r) {
      'use strict'
      var a = r(5893),
        s = r(1576),
        i = r.n(s),
        l = r(7294)
      let n = () => {
        let [e, t] = (0, l.useState)(!1)
        ;(0, l.useEffect)(() => {
          let e = () => {
            window.scrollY > 50 ? t(!0) : t(!1)
          }
          return window.addEventListener('scroll', e), () => window.removeEventListener('scroll', e)
        }, [])
        let r = () => {
            window.scrollTo({ top: 0 })
          },
          s = () => {
            document.getElementById('comment').scrollIntoView()
          }
        return (0, a.jsxs)('div', {
          className: 'fixed right-8 bottom-8 hidden flex-col gap-3 '.concat(
            e ? 'md:flex' : 'md:hidden'
          ),
          children: [
            i().comment.provider &&
              (0, a.jsx)('button', {
                'aria-label': 'Scroll To Comment',
                type: 'button',
                onClick: s,
                className:
                  'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
                children: (0, a.jsx)('svg', {
                  className: 'h-5 w-5',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  children: (0, a.jsx)('path', {
                    fillRule: 'evenodd',
                    d: 'M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z',
                    clipRule: 'evenodd',
                  }),
                }),
              }),
            (0, a.jsx)('button', {
              'aria-label': 'Scroll To Top',
              type: 'button',
              onClick: r,
              className:
                'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
              children: (0, a.jsx)('svg', {
                className: 'h-5 w-5',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                children: (0, a.jsx)('path', {
                  fillRule: 'evenodd',
                  d: 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z',
                  clipRule: 'evenodd',
                }),
              }),
            }),
          ],
        })
      }
      t.Z = n
    },
    9019: function (e, t, r) {
      'use strict'
      var a = r(5893),
        s = r(1664),
        i = r.n(s),
        l = r(4871)
      let n = (e) => {
        let { text: t } = e
        return (0, a.jsx)(i(), {
          href: '/tags/'.concat((0, l.Z)(t)),
          legacyBehavior: !0,
          children: (0, a.jsx)('a', {
            className:
              'mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
            children: t.split(' ').join('-'),
          }),
        })
      }
      t.Z = n
    },
    896: function (e, t, r) {
      'use strict'
      var a = r(5893),
        s = r(1576),
        i = r.n(s),
        l = r(5152),
        n = r.n(l)
      let c = n()(() => r.e(806).then(r.bind(r, 8806)), {
          loadableGenerated: { webpack: () => [8806] },
          ssr: !1,
        }),
        d = n()(() => r.e(732).then(r.bind(r, 732)), {
          loadableGenerated: { webpack: () => [732] },
          ssr: !1,
        }),
        o = n()(() => r.e(257).then(r.bind(r, 257)), {
          loadableGenerated: { webpack: () => [257] },
          ssr: !1,
        }),
        x = (e) => {
          let { frontMatter: t } = e,
            r = null === i() || void 0 === i() ? void 0 : i().comment
          return r && 0 !== Object.keys(r).length
            ? (0, a.jsxs)('div', {
                id: 'comment',
                children: [
                  i().comment && 'giscus' === i().comment.provider && (0, a.jsx)(d, {}),
                  i().comment && 'utterances' === i().comment.provider && (0, a.jsx)(c, {}),
                  i().comment &&
                    'disqus' === i().comment.provider &&
                    (0, a.jsx)(o, { frontMatter: t }),
                ],
              })
            : (0, a.jsx)(a.Fragment, {})
        }
      t.Z = x
    },
    4856: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return o
          },
        })
      var a = r(5893),
        s = r(811),
        i = r(7661),
        l = r(9831),
        n = r(1752),
        c = r.n(n)
      let { publicRuntimeConfig: d } = c()()
      function o(e) {
        let { children: t, frontMatter: r } = e,
          {
            name: n,
            avatar: c,
            occupation: o,
            company: x,
            email: m,
            twitter: u,
            linkedin: h,
            github: p,
            rss: g,
          } = r
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(l.TQ, { title: 'About - '.concat(n), description: 'About me - '.concat(n) }),
            (0, a.jsxs)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, a.jsx)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: (0, a.jsx)('h1', {
                    className:
                      'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                    children: 'About',
                  }),
                }),
                (0, a.jsxs)('div', {
                  className: 'items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex flex-col items-center pt-8',
                      children: [
                        (0, a.jsx)(i.Z, {
                          src: ''.concat(d.basePath).concat(c),
                          alt: 'avatar',
                          width: '192',
                          height: '192',
                          className: 'h-48 w-48 rounded-full',
                        }),
                        (0, a.jsx)('h3', {
                          className: 'pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight',
                          children: n,
                        }),
                        (0, a.jsx)('div', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: o,
                        }),
                        (0, a.jsx)('div', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: x,
                        }),
                        (0, a.jsxs)('div', {
                          className: 'flex space-x-3 pt-6',
                          children: [
                            (0, a.jsx)(s.Z, { kind: 'mail', href: 'mailto:'.concat(m) }),
                            (0, a.jsx)(s.Z, { kind: 'github', href: p }),
                            (0, a.jsx)(s.Z, { kind: 'linkedin', href: h }),
                            (0, a.jsx)(s.Z, { kind: 'twitter', href: u }),
                            (0, a.jsx)(s.Z, { kind: 'rss', href: g }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      className: 'prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2',
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
    },
    6055: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return d
          },
        })
      var a = r(5893),
        s = r(7233),
        i = r(9019)
      r(1576)
      var l = r(7294)
      function n(e) {
        let { totalPages: t, currentPage: r } = e,
          i = parseInt(r) - 1 > 0,
          l = parseInt(r) + 1 <= parseInt(t)
        return (0, a.jsx)('div', {
          className: 'space-y-2 pt-6 pb-8 md:space-y-5',
          children: (0, a.jsxs)('nav', {
            className: 'flex justify-between',
            children: [
              !i &&
                (0, a.jsx)('button', {
                  rel: 'previous',
                  className: 'cursor-auto disabled:opacity-50',
                  disabled: !i,
                  children: 'Previous',
                }),
              i &&
                (0, a.jsx)(s.Z, {
                  href: r - 1 == 1 ? '/blog/' : '/blog/page/'.concat(r - 1),
                  children: (0, a.jsx)('button', { rel: 'previous', children: 'Previous' }),
                }),
              (0, a.jsxs)('span', { children: [r, ' of ', t] }),
              !l &&
                (0, a.jsx)('button', {
                  rel: 'next',
                  className: 'cursor-auto disabled:opacity-50',
                  disabled: !l,
                  children: 'Next',
                }),
              l &&
                (0, a.jsx)(s.Z, {
                  href: '/blog/page/'.concat(r + 1),
                  children: (0, a.jsx)('button', { rel: 'next', children: 'Next' }),
                }),
            ],
          }),
        })
      }
      var c = r(6232)
      function d(e) {
        let { posts: t, title: r, initialDisplayPosts: d = [], pagination: o } = e,
          [x, m] = (0, l.useState)(''),
          u = t.filter((e) => {
            let t = e.title + e.summary + e.tags.join(' ')
            return t.toLowerCase().includes(x.toLowerCase())
          }),
          h = d.length > 0 && !x ? d : u
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, a.jsxs)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: [
                    (0, a.jsx)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: r,
                    }),
                    (0, a.jsxs)('div', {
                      className: 'relative max-w-lg',
                      children: [
                        (0, a.jsx)('input', {
                          'aria-label': 'Search articles',
                          type: 'text',
                          onChange: (e) => m(e.target.value),
                          placeholder: 'Search articles',
                          className:
                            'block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100',
                        }),
                        (0, a.jsx)('svg', {
                          className:
                            'absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300',
                          xmlns: 'http://www.w3.org/2000/svg',
                          fill: 'none',
                          viewBox: '0 0 24 24',
                          stroke: 'currentColor',
                          children: (0, a.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)('ul', {
                  children: [
                    !u.length && 'No posts found.',
                    h.map((e) => {
                      let { slug: t, date: r, title: l, summary: n, tags: d } = e
                      return (0, a.jsx)(
                        'li',
                        {
                          className: 'py-4',
                          children: (0, a.jsxs)('article', {
                            className:
                              'space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0',
                            children: [
                              (0, a.jsxs)('dl', {
                                children: [
                                  (0, a.jsx)('dt', {
                                    className: 'sr-only',
                                    children: 'Published on',
                                  }),
                                  (0, a.jsx)('dd', {
                                    className:
                                      'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                    children: (0, a.jsx)('time', {
                                      dateTime: r,
                                      children: (0, c.Z)(r),
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)('div', {
                                className: 'space-y-3 xl:col-span-3',
                                children: [
                                  (0, a.jsxs)('div', {
                                    children: [
                                      (0, a.jsx)('h3', {
                                        className: 'text-2xl font-bold leading-8 tracking-tight',
                                        children: (0, a.jsx)(s.Z, {
                                          href: '/blog/'.concat(t),
                                          className: 'text-gray-900 dark:text-gray-100',
                                          children: l,
                                        }),
                                      }),
                                      (0, a.jsx)('div', {
                                        className: 'flex flex-wrap',
                                        children: d.map((e) => (0, a.jsx)(i.Z, { text: e }, e)),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)('div', {
                                    className: 'prose max-w-none text-gray-500 dark:text-gray-400',
                                    children: n,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    }),
                  ],
                }),
              ],
            }),
            o &&
              o.totalPages > 1 &&
              !x &&
              (0, a.jsx)(n, { currentPage: o.currentPage, totalPages: o.totalPages }),
          ],
        })
      }
    },
    5067: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return y
          },
        })
      var a = r(5893),
        s = r(7233),
        i = r(920),
        l = r(890),
        n = r(9831),
        c = r(7661),
        d = r(9019),
        o = r(1576),
        x = r.n(o),
        m = r(896),
        u = r(7175)
      let h = (e) => ''.concat(x().siteRepo, '/blob/master/data/blog/').concat(e),
        p = (e) =>
          'https://mobile.twitter.com/search?q='.concat(
            encodeURIComponent(''.concat(x().siteUrl, '/blog/').concat(e))
          ),
        g = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      function y(e) {
        let { frontMatter: t, authorDetails: r, next: o, prev: y, children: j } = e,
          { slug: v, fileName: f, date: b, title: w, images: N, tags: k } = t
        return (0, a.jsxs)(l.Z, {
          children: [
            (0, a.jsx)(n.Uy, {
              url: ''.concat(x().siteUrl, '/blog/').concat(v),
              authorDetails: r,
              ...t,
            }),
            (0, a.jsx)(u.Z, {}),
            (0, a.jsx)('article', {
              children: (0, a.jsxs)('div', {
                className: 'xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700',
                children: [
                  (0, a.jsx)('header', {
                    className: 'pt-6 xl:pb-6',
                    children: (0, a.jsxs)('div', {
                      className: 'space-y-1 text-center',
                      children: [
                        (0, a.jsx)('dl', {
                          className: 'space-y-10',
                          children: (0, a.jsxs)('div', {
                            children: [
                              (0, a.jsx)('dt', { className: 'sr-only', children: 'Published on' }),
                              (0, a.jsx)('dd', {
                                className:
                                  'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                children: (0, a.jsx)('time', {
                                  dateTime: b,
                                  children: new Date(b).toLocaleDateString(x().locale, g),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)('div', { children: (0, a.jsx)(i.Z, { children: w }) }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)('div', {
                    className:
                      'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0',
                    style: { gridTemplateRows: 'auto 1fr' },
                    children: [
                      (0, a.jsxs)('dl', {
                        className:
                          'pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700',
                        children: [
                          (0, a.jsx)('dt', { className: 'sr-only', children: 'Authors' }),
                          (0, a.jsx)('dd', {
                            children: (0, a.jsx)('ul', {
                              className:
                                'flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8',
                              children: r.map((e) =>
                                (0, a.jsxs)(
                                  'li',
                                  {
                                    className: 'flex items-center space-x-2',
                                    children: [
                                      e.avatar &&
                                        (0, a.jsx)(c.Z, {
                                          src: e.avatar,
                                          width: '38',
                                          height: '38',
                                          alt: 'avatar',
                                          className: 'h-10 w-10 rounded-full',
                                        }),
                                      (0, a.jsxs)('dl', {
                                        className:
                                          'whitespace-nowrap text-sm font-medium leading-5',
                                        children: [
                                          (0, a.jsx)('dt', {
                                            className: 'sr-only',
                                            children: 'Name',
                                          }),
                                          (0, a.jsx)('dd', {
                                            className: 'text-gray-900 dark:text-gray-100',
                                            children: e.name,
                                          }),
                                          (0, a.jsx)('dt', {
                                            className: 'sr-only',
                                            children: 'Twitter',
                                          }),
                                          (0, a.jsx)('dd', {
                                            children:
                                              e.twitter &&
                                              (0, a.jsx)(s.Z, {
                                                href: e.twitter,
                                                className:
                                                  'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                                children: e.twitter.replace(
                                                  'https://twitter.com/',
                                                  '@'
                                                ),
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.name
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'prose max-w-none pt-10 pb-8 dark:prose-dark',
                            children: j,
                          }),
                          (0, a.jsxs)('div', {
                            className: 'pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300',
                            children: [
                              (0, a.jsx)(s.Z, {
                                href: p(v),
                                rel: 'nofollow',
                                children: 'Discuss on Twitter',
                              }),
                              ' • ',
                              (0, a.jsx)(s.Z, { href: h(f), children: 'View on GitHub' }),
                            ],
                          }),
                          (0, a.jsx)(m.Z, { frontMatter: t }),
                        ],
                      }),
                      (0, a.jsxs)('footer', {
                        children: [
                          (0, a.jsxs)('div', {
                            className:
                              'divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y',
                            children: [
                              k &&
                                (0, a.jsxs)('div', {
                                  className: 'py-4 xl:py-8',
                                  children: [
                                    (0, a.jsx)('h2', {
                                      className:
                                        'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                      children: 'Tags',
                                    }),
                                    (0, a.jsx)('div', {
                                      className: 'flex flex-wrap',
                                      children: k.map((e) => (0, a.jsx)(d.Z, { text: e }, e)),
                                    }),
                                  ],
                                }),
                              (o || y) &&
                                (0, a.jsxs)('div', {
                                  className:
                                    'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8',
                                  children: [
                                    y &&
                                      (0, a.jsxs)('div', {
                                        children: [
                                          (0, a.jsx)('h2', {
                                            className:
                                              'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                            children: 'Previous Article',
                                          }),
                                          (0, a.jsx)('div', {
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: (0, a.jsx)(s.Z, {
                                              href: '/blog/'.concat(y.slug),
                                              children: y.title,
                                            }),
                                          }),
                                        ],
                                      }),
                                    o &&
                                      (0, a.jsxs)('div', {
                                        children: [
                                          (0, a.jsx)('h2', {
                                            className:
                                              'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                            children: 'Next Article',
                                          }),
                                          (0, a.jsx)('div', {
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: (0, a.jsx)(s.Z, {
                                              href: '/blog/'.concat(o.slug),
                                              children: o.title,
                                            }),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                            ],
                          }),
                          (0, a.jsx)('div', {
                            className: 'pt-4 xl:pt-8',
                            children: (0, a.jsx)(s.Z, {
                              href: '/blog',
                              className:
                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                              children: '← Back to the blog',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      }
    },
    3168: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return u
          },
        })
      var a = r(5893),
        s = r(7233),
        i = r(920),
        l = r(890),
        n = r(9831),
        c = r(1576),
        d = r.n(c),
        o = r(6232),
        x = r(896),
        m = r(7175)
      function u(e) {
        let { frontMatter: t, authorDetails: r, next: c, prev: u, children: h } = e,
          { date: p, title: g } = t
        return (0, a.jsxs)(l.Z, {
          children: [
            (0, a.jsx)(n.Uy, { url: ''.concat(d().siteUrl, '/blog/').concat(t.slug), ...t }),
            (0, a.jsx)(m.Z, {}),
            (0, a.jsx)('article', {
              children: (0, a.jsxs)('div', {
                children: [
                  (0, a.jsx)('header', {
                    children: (0, a.jsxs)('div', {
                      className:
                        'space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700',
                      children: [
                        (0, a.jsx)('dl', {
                          children: (0, a.jsxs)('div', {
                            children: [
                              (0, a.jsx)('dt', { className: 'sr-only', children: 'Published on' }),
                              (0, a.jsx)('dd', {
                                className:
                                  'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                children: (0, a.jsx)('time', {
                                  dateTime: p,
                                  children: (0, o.Z)(p),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)('div', { children: (0, a.jsx)(i.Z, { children: g }) }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)('div', {
                    className: 'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ',
                    style: { gridTemplateRows: 'auto 1fr' },
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                        children: (0, a.jsx)('div', {
                          className: 'prose max-w-none pt-10 pb-8 dark:prose-dark',
                          children: h,
                        }),
                      }),
                      (0, a.jsx)(x.Z, { frontMatter: t }),
                      (0, a.jsx)('footer', {
                        children: (0, a.jsxs)('div', {
                          className:
                            'flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base',
                          children: [
                            u &&
                              (0, a.jsx)('div', {
                                className: 'pt-4 xl:pt-8',
                                children: (0, a.jsxs)(s.Z, {
                                  href: '/blog/'.concat(u.slug),
                                  className:
                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                  children: ['← ', u.title],
                                }),
                              }),
                            c &&
                              (0, a.jsx)('div', {
                                className: 'pt-4 xl:pt-8',
                                children: (0, a.jsxs)(s.Z, {
                                  href: '/blog/'.concat(c.slug),
                                  className:
                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                  children: [c.title, ' →'],
                                }),
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      }
    },
    8332: function (e, t, r) {
      'use strict'
      var a = r(4155)
      let s = {
        title: 'Next.js Starter Blog',
        author: 'Tails Azimuth',
        headerTitle: 'CyclingCodeBlog',
        description: 'A blog created with Next.js and Tailwind.css',
        language: 'en-us',
        theme: 'system',
        siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
        siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
        siteLogo: ''.concat(a.env.BASE_PATH, '/static/images/logo.png'),
        image: ''.concat(a.env.BASE_PATH, '/static/images/.png'),
        socialBanner: ''.concat(a.env.BASE_PATH, '/static/images/twitter-card.png'),
        email: 'address@yoursite.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        locale: 'en-US',
        analytics: {
          plausibleDataDomain: '',
          simpleAnalytics: !1,
          umamiWebsiteId: '',
          googleAnalyticsId: '',
          posthogAnalyticsId: '',
        },
        newsletter: { provider: 'buttondown' },
        comment: {
          provider: 'giscus',
          giscusConfig: {
            repo: a.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: a.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: a.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: a.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
            mapping: 'pathname',
            reactions: '1',
            metadata: '0',
            theme: 'light',
            inputPosition: 'bottom',
            lang: 'en',
            darkTheme: 'transparent_dark',
            themeURL: '',
          },
          utterancesConfig: {
            repo: a.env.NEXT_PUBLIC_UTTERANCES_REPO,
            issueTerm: '',
            label: '',
            theme: '',
            darkTheme: '',
          },
          disqusConfig: { shortname: a.env.NEXT_PUBLIC_DISQUS_SHORTNAME },
        },
      }
      e.exports = s
    },
    6232: function (e, t, r) {
      'use strict'
      var a = r(1576),
        s = r.n(a)
      let i = (e) => {
        let t = new Date(e).toLocaleDateString(s().locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
        return t
      }
      t.Z = i
    },
    4871: function (e, t, r) {
      'use strict'
      var a = r(9671)
      let s = (e) => (0, a.slug)(e)
      t.Z = s
    },
  },
])
