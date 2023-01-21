;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    2010: function (e, t, n) {
      'use strict'
      n.d(t, {
        F: function () {
          return c
        },
        f: function () {
          return u
        },
      })
      var r = n(7294)
      let a = ['light', 'dark'],
        o = '(prefers-color-scheme: dark)',
        l = 'undefined' == typeof window,
        s = (0, r.createContext)(void 0),
        i = { setTheme(e) {}, themes: [] },
        c = () => {
          var e
          return null !== (e = (0, r.useContext)(s)) && void 0 !== e ? e : i
        },
        u = (e) =>
          (0, r.useContext)(s)
            ? r.createElement(r.Fragment, null, e.children)
            : r.createElement(f, e),
        d = ['light', 'dark'],
        f = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: n = !0,
          enableColorScheme: l = !0,
          storageKey: i = 'theme',
          themes: c = d,
          defaultTheme: u = n ? 'system' : 'light',
          attribute: f = 'data-theme',
          value: v,
          children: y,
          nonce: x,
        }) => {
          let [w, b] = (0, r.useState)(() => p(i, u)),
            [j, _] = (0, r.useState)(() => p(i)),
            E = v ? Object.values(v) : c,
            k = (0, r.useCallback)((e) => {
              let r = e
              if (!r) return
              'system' === e && n && (r = g())
              let o = v ? v[r] : r,
                s = t ? m() : null,
                i = document.documentElement
              if (
                ('class' === f
                  ? (i.classList.remove(...E), o && i.classList.add(o))
                  : o
                  ? i.setAttribute(f, o)
                  : i.removeAttribute(f),
                l)
              ) {
                let c = a.includes(u) ? u : null,
                  d = a.includes(r) ? r : c
                i.style.colorScheme = d
              }
              null == s || s()
            }, []),
            O = (0, r.useCallback)(
              (e) => {
                b(e)
                try {
                  localStorage.setItem(i, e)
                } catch (t) {}
              },
              [e]
            ),
            C = (0, r.useCallback)(
              (t) => {
                let r = g(t)
                _(r), 'system' === w && n && !e && k('system')
              },
              [w, e]
            )
          ;(0, r.useEffect)(() => {
            let e = window.matchMedia(o)
            return e.addListener(C), C(e), () => e.removeListener(C)
          }, [C]),
            (0, r.useEffect)(() => {
              let e = (e) => {
                e.key === i && O(e.newValue || u)
              }
              return (
                window.addEventListener('storage', e),
                () => window.removeEventListener('storage', e)
              )
            }, [O]),
            (0, r.useEffect)(() => {
              k(null != e ? e : w)
            }, [e, w])
          let T = (0, r.useMemo)(
            () => ({
              theme: w,
              setTheme: O,
              forcedTheme: e,
              resolvedTheme: 'system' === w ? j : w,
              themes: n ? [...c, 'system'] : c,
              systemTheme: n ? j : void 0,
            }),
            [w, O, e, j, n, c]
          )
          return r.createElement(
            s.Provider,
            { value: T },
            r.createElement(h, {
              forcedTheme: e,
              disableTransitionOnChange: t,
              enableSystem: n,
              enableColorScheme: l,
              storageKey: i,
              themes: c,
              defaultTheme: u,
              attribute: f,
              value: v,
              children: y,
              attrs: E,
              nonce: x,
            }),
            y
          )
        },
        h = (0, r.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: n,
            enableSystem: l,
            enableColorScheme: s,
            defaultTheme: i,
            value: c,
            attrs: u,
            nonce: d,
          }) => {
            let f = 'system' === i,
              h =
                'class' === n
                  ? `var d=document.documentElement,c=d.classList;c.remove(${u
                      .map((e) => `'${e}'`)
                      .join(',')});`
                  : `var d=document.documentElement,n='${n}',s='setAttribute';`,
              p = s
                ? a.includes(i) && i
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : '',
              m = (e, t = !1, r = !0) => {
                let o = c ? c[e] : e,
                  l = t ? e + "|| ''" : `'${o}'`,
                  i = ''
                return (
                  s && r && !t && a.includes(e) && (i += `d.style.colorScheme = '${e}';`),
                  'class' === n
                    ? (i += t || o ? `c.add(${l})` : 'null')
                    : o && (i += `d[s](n,${l})`),
                  i
                )
              },
              g = e
                ? `!function(){${h}${m(e)}}()`
                : l
                ? `!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m(
                    'dark'
                  )}}else{${m('light')}}}else if(e){${c ? `var x=${JSON.stringify(c)};` : ''}${m(
                    c ? 'x[e]' : 'e',
                    !0
                  )}}${f ? '' : 'else{' + m(i, !1, !1) + '}'}${p}}catch(e){}}()`
                : `!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${
                    c ? `var x=${JSON.stringify(c)};` : ''
                  }${m(c ? 'x[e]' : 'e', !0)}}else{${m(i, !1, !1)};}${p}}catch(t){}}();`
            return r.createElement('script', { nonce: d, dangerouslySetInnerHTML: { __html: g } })
          },
          () => !0
        ),
        p = (e, t) => {
          let n
          if (!l) {
            try {
              n = localStorage.getItem(e) || void 0
            } catch (r) {}
            return n || t
          }
        },
        m = () => {
          let e = document.createElement('style')
          return (
            e.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e)
                }, 1)
            }
          )
        },
        g = (e) => (e || (e = window.matchMedia(o)), e.matches ? 'dark' : 'light')
    },
    1118: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(218)
        },
      ])
    },
    7233: function (e, t, n) {
      'use strict'
      var r = n(5893),
        a = n(1664),
        o = n.n(a)
      let l = (e) => {
        let { href: t, ...n } = e,
          a = t && t.startsWith('/'),
          l = t && t.startsWith('#')
        return a
          ? (0, r.jsx)(o(), { href: t, legacyBehavior: !0, children: (0, r.jsx)('a', { ...n }) })
          : l
          ? (0, r.jsx)('a', { href: t, ...n })
          : (0, r.jsx)('a', { target: '_blank', rel: 'noopener noreferrer', href: t, ...n })
      }
      t.Z = l
    },
    890: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return a
        },
      })
      var r = n(5893)
      function a(e) {
        let { children: t } = e
        return (0, r.jsx)('div', {
          className: 'mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0',
          children: t,
        })
      }
    },
    811: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return _
        },
      })
      var r,
        a,
        o,
        l,
        s,
        i,
        c,
        u,
        d,
        f = n(5893),
        h = n(7294)
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
      }
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
      }
      function g() {
        return (g = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
      }
      function v() {
        return (v = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
      }
      function y() {
        return (y = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
      }
      function w() {
        return (w = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
      }
      let b = {
          mail: function (e) {
            return h.createElement(
              'svg',
              p({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, e),
              r ||
                (r = h.createElement('path', {
                  d: 'M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z',
                })),
              a ||
                (a = h.createElement('path', {
                  d: 'm18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z',
                }))
            )
          },
          github: function (e) {
            return h.createElement(
              'svg',
              m({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
              o ||
                (o = h.createElement('path', {
                  d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
                }))
            )
          },
          facebook: function (e) {
            return h.createElement(
              'svg',
              g({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              l ||
                (l = h.createElement('path', {
                  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                }))
            )
          },
          youtube: function (e) {
            return h.createElement(
              'svg',
              v({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              s ||
                (s = h.createElement('path', {
                  d: 'M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z',
                }))
            )
          },
          linkedin: function (e) {
            return h.createElement(
              'svg',
              y({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
              i ||
                (i = h.createElement('path', {
                  d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                }))
            )
          },
          twitter: function (e) {
            return h.createElement(
              'svg',
              x({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              c ||
                (c = h.createElement('path', {
                  d: 'M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z',
                }))
            )
          },
          rss: function (e) {
            return h.createElement(
              'svg',
              w({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, e),
              u ||
                (u = h.createElement('path', {
                  d: 'M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z',
                })),
              d ||
                (d = h.createElement('path', {
                  d: 'm18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z',
                }))
            )
          },
        },
        j = (e) => {
          let { kind: t, href: n, size: r = 8 } = e
          if (!n || ('mail' === t && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n)))
            return null
          let a = b[t]
          return (0, f.jsxs)('a', {
            className: 'text-sm text-gray-500 transition hover:text-gray-600',
            target: '_blank',
            rel: 'noopener noreferrer',
            href: n,
            children: [
              (0, f.jsx)('span', { className: 'sr-only', children: t }),
              (0, f.jsx)(a, {
                className:
                  'fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-'
                    .concat(r, ' w-')
                    .concat(r),
              }),
            ],
          })
        }
      var _ = j
    },
    1576: function (e, t, n) {
      'use strict'
      var r = n(4155)
      let a = {
        title: 'Next.js Starter Blog',
        author: 'Tails Azimuth',
        headerTitle: 'CyclingCodeBlog',
        description: 'A blog created with Next.js and Tailwind.css',
        language: 'en-us',
        theme: 'system',
        siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
        siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
        siteLogo: ''.concat(r.env.BASE_PATH, '/static/images/logo.png'),
        image: ''.concat(r.env.BASE_PATH, '/static/images/avatar.png'),
        socialBanner: ''.concat(r.env.BASE_PATH, '/static/images/twitter-card.png'),
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
            repo: r.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: r.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
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
            repo: r.env.NEXT_PUBLIC_UTTERANCES_REPO,
            issueTerm: '',
            label: '',
            theme: '',
            darkTheme: '',
          },
          disqusConfig: { shortname: r.env.NEXT_PUBLIC_DISQUS_SHORTNAME },
        },
      }
      e.exports = a
    },
    227: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getDomainLocale = function (e, t, n, r) {
          return !1
        }),
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default))
    },
    1551: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = n(2648).Z,
        a = n(7273).Z,
        o = r(n(7294)),
        l = n(1003),
        s = n(7795),
        i = n(4465),
        c = n(2692),
        u = n(8245),
        d = n(9246),
        f = n(227),
        h = n(3468)
      let p = new Set()
      function m(e, t, n, r) {
        if (l.isLocalURL(t)) {
          if (!r.bypassPrefetchedCheck) {
            let a = void 0 !== r.locale ? r.locale : 'locale' in e ? e.locale : void 0,
              o = t + '%' + n + '%' + a
            if (p.has(o)) return
            p.add(o)
          }
          Promise.resolve(e.prefetch(t, n, r)).catch((e) => {})
        }
      }
      function g(e) {
        return 'string' == typeof e ? e : s.formatUrl(e)
      }
      let v = o.default.forwardRef(function (e, t) {
        let n, r
        let {
            href: s,
            as: p,
            children: v,
            prefetch: y,
            passHref: x,
            replace: w,
            shallow: b,
            scroll: j,
            locale: _,
            onClick: E,
            onMouseEnter: k,
            onTouchStart: O,
            legacyBehavior: C = !1,
          } = e,
          T = a(e, [
            'href',
            'as',
            'children',
            'prefetch',
            'passHref',
            'replace',
            'shallow',
            'scroll',
            'locale',
            'onClick',
            'onMouseEnter',
            'onTouchStart',
            'legacyBehavior',
          ])
        ;(n = v),
          C &&
            ('string' == typeof n || 'number' == typeof n) &&
            (n = o.default.createElement('a', null, n))
        let S = !1 !== y,
          N = o.default.useContext(c.RouterContext),
          M = o.default.useContext(u.AppRouterContext),
          z = null != N ? N : M,
          P = !N,
          { href: I, as: A } = o.default.useMemo(() => {
            if (!N) {
              let e = g(s)
              return { href: e, as: p ? g(p) : e }
            }
            let [t, n] = l.resolveHref(N, s, !0)
            return { href: t, as: p ? l.resolveHref(N, p) : n || t }
          }, [N, s, p]),
          L = o.default.useRef(I),
          B = o.default.useRef(A)
        C && (r = o.default.Children.only(n))
        let R = C ? r && 'object' == typeof r && r.ref : t,
          [$, U, H] = d.useIntersection({ rootMargin: '200px' }),
          D = o.default.useCallback(
            (e) => {
              ;(B.current !== A || L.current !== I) && (H(), (B.current = A), (L.current = I)),
                $(e),
                R && ('function' == typeof R ? R(e) : 'object' == typeof R && (R.current = e))
            },
            [A, R, I, H, $]
          )
        o.default.useEffect(() => {
          z && U && S && m(z, I, A, { locale: _ })
        }, [A, I, U, _, S, null == N ? void 0 : N.locale, z])
        let Z = {
          ref: D,
          onClick(e) {
            C || 'function' != typeof E || E(e),
              C && r.props && 'function' == typeof r.props.onClick && r.props.onClick(e),
              z &&
                !e.defaultPrevented &&
                (function (e, t, n, r, a, s, i, c, u, d) {
                  let { nodeName: f } = e.currentTarget,
                    h = 'A' === f.toUpperCase()
                  if (
                    h &&
                    ((function (e) {
                      let { target: t } = e.currentTarget
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) ||
                      !l.isLocalURL(n))
                  )
                    return
                  e.preventDefault()
                  let p = () => {
                    'beforePopState' in t
                      ? t[a ? 'replace' : 'push'](n, r, { shallow: s, locale: c, scroll: i })
                      : t[a ? 'replace' : 'push'](r || n, { forceOptimisticNavigation: !d })
                  }
                  u ? o.default.startTransition(p) : p()
                })(e, z, I, A, w, b, j, _, P, S)
          },
          onMouseEnter(e) {
            C || 'function' != typeof k || k(e),
              C && r.props && 'function' == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
              z && (S || !P) && m(z, I, A, { locale: _, priority: !0, bypassPrefetchedCheck: !0 })
          },
          onTouchStart(e) {
            C || 'function' != typeof O || O(e),
              C && r.props && 'function' == typeof r.props.onTouchStart && r.props.onTouchStart(e),
              z && (S || !P) && m(z, I, A, { locale: _, priority: !0, bypassPrefetchedCheck: !0 })
          },
        }
        if (!C || x || ('a' === r.type && !('href' in r.props))) {
          let F = void 0 !== _ ? _ : null == N ? void 0 : N.locale,
            V =
              (null == N ? void 0 : N.isLocaleDomain) &&
              f.getDomainLocale(
                A,
                F,
                null == N ? void 0 : N.locales,
                null == N ? void 0 : N.domainLocales
              )
          Z.href = V || h.addBasePath(i.addLocale(A, F, null == N ? void 0 : N.defaultLocale))
        }
        return C
          ? o.default.cloneElement(r, Z)
          : o.default.createElement('a', Object.assign({}, T, Z), n)
      })
      ;(t.default = v),
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default))
    },
    9246: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: n, disabled: i } = e,
            c = i || !o,
            [u, d] = r.useState(!1),
            [f, h] = r.useState(null)
          r.useEffect(() => {
            if (o) {
              if (!c && !u && f && f.tagName) {
                let e = (function (e, t, n) {
                  let {
                    id: r,
                    observer: a,
                    elements: o,
                  } = (function (e) {
                    let t
                    let n = { root: e.root || null, margin: e.rootMargin || '' },
                      r = s.find((e) => e.root === n.root && e.margin === n.margin)
                    if (r && (t = l.get(r))) return t
                    let a = new Map(),
                      o = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = a.get(e.target),
                            n = e.isIntersecting || e.intersectionRatio > 0
                          t && n && t(n)
                        })
                      }, e)
                    return (t = { id: n, observer: o, elements: a }), s.push(n), l.set(n, t), t
                  })(n)
                  return (
                    o.set(e, t),
                    a.observe(e),
                    function () {
                      if ((o.delete(e), a.unobserve(e), 0 === o.size)) {
                        a.disconnect(), l.delete(r)
                        let t = s.findIndex((e) => e.root === r.root && e.margin === r.margin)
                        t > -1 && s.splice(t, 1)
                      }
                    }
                  )
                })(f, (e) => e && d(e), { root: null == t ? void 0 : t.current, rootMargin: n })
                return e
              }
            } else if (!u) {
              let r = a.requestIdleCallback(() => d(!0))
              return () => a.cancelIdleCallback(r)
            }
          }, [f, c, n, t, u])
          let p = r.useCallback(() => {
            d(!1)
          }, [])
          return [h, u, p]
        })
      var r = n(7294),
        a = n(4686)
      let o = 'function' == typeof IntersectionObserver,
        l = new Map(),
        s = []
      ;('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default))
    },
    218: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function () {
            return A
          },
        })
      var r,
        a,
        o,
        l,
        s = n(5893)
      n(5837), n(9785), n(3941), n(8102)
      var i = n(2010),
        c = n(9008),
        u = n.n(c),
        d = n(1576),
        f = n.n(d),
        h = n(4298),
        p = n.n(h)
      let m = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(p(), {
                strategy: 'lazyOnload',
                src: 'https://www.googletagmanager.com/gtag/js?id='.concat(
                  f().analytics.googleAnalyticsId
                ),
              }),
              (0, s.jsx)(p(), {
                strategy: 'lazyOnload',
                id: 'ga-script',
                children:
                  "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(
                    f().analytics.googleAnalyticsId,
                    "', {\n              page_path: window.location.pathname,\n            });\n        "
                  ),
              }),
            ],
          }),
        g = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(p(), {
                strategy: 'lazyOnload',
                'data-domain': f().analytics.plausibleDataDomain,
                src: 'https://plausible.io/js/plausible.js',
              }),
              (0, s.jsx)(p(), {
                strategy: 'lazyOnload',
                id: 'plausible-script',
                children:
                  '\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        ',
              }),
            ],
          }),
        v = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(p(), {
                strategy: 'lazyOnload',
                id: 'sa-script',
                children:
                  '\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        ',
              }),
              (0, s.jsx)(p(), {
                strategy: 'lazyOnload',
                src: 'https://scripts.simpleanalyticscdn.com/latest.js',
              }),
            ],
          }),
        y = () =>
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(p(), {
              async: !0,
              defer: !0,
              'data-website-id': f().analytics.umamiWebsiteId,
              src: 'https://umami.example.com/umami.js',
            }),
          }),
        x = () =>
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(p(), {
              strategy: 'lazyOnload',
              id: 'posthog-script',
              children:
                '\n            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);\n            posthog.init(\''.concat(
                  f().analytics.posthogAnalyticsId,
                  "',{api_host:'https://app.posthog.com'})\n        "
                ),
            }),
          }),
        w = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              f().analytics.plausibleDataDomain && (0, s.jsx)(g, {}),
              f().analytics.simpleAnalytics && (0, s.jsx)(v, {}),
              f().analytics.umamiWebsiteId && (0, s.jsx)(y, {}),
              f().analytics.googleAnalyticsId && (0, s.jsx)(m, {}),
              f().analytics.posthogAnalyticsId && (0, s.jsx)(x, {}),
            ],
          })
      var b = [
          { href: '/blog', title: 'Blog' },
          { href: '/tags', title: 'Tags' },
          { href: '/projects', title: 'Projects' },
          { href: '/about', title: 'About' },
        ],
        j = n(7294)
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
      }
      var E = function (e) {
          return j.createElement(
            'svg',
            _(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                viewBox: '344.564 330.278 111.737 91.218',
                width: 53.87,
                height: 43.61,
              },
              e
            ),
            j.createElement(
              'defs',
              null,
              j.createElement(
                'linearGradient',
                {
                  id: 'logo_svg__b',
                  gradientUnits: 'userSpaceOnUse',
                  x1: 420.97,
                  y1: 331.28,
                  x2: 420.97,
                  y2: 418.5,
                },
                j.createElement('stop', {
                  style: { stopColor: '#06b6d4', stopOpacity: 1 },
                  offset: '0%',
                }),
                j.createElement('stop', {
                  style: { stopColor: '#67e8f9', stopOpacity: 1 },
                  offset: '100%',
                })
              ),
              j.createElement(
                'linearGradient',
                {
                  id: 'logo_svg__d',
                  gradientUnits: 'userSpaceOnUse',
                  x1: 377.89,
                  y1: 331.28,
                  x2: 377.89,
                  y2: 418.5,
                },
                j.createElement('stop', {
                  style: { stopColor: '#06b6d4', stopOpacity: 1 },
                  offset: '0%',
                }),
                j.createElement('stop', {
                  style: { stopColor: '#67e8f9', stopOpacity: 1 },
                  offset: '100%',
                })
              ),
              r ||
                (r = j.createElement('path', {
                  d: 'M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z',
                  id: 'logo_svg__a',
                })),
              a ||
                (a = j.createElement('path', {
                  d: 'M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z',
                  id: 'logo_svg__c',
                }))
            ),
            o ||
              (o = j.createElement('use', {
                xlinkHref: '#logo_svg__a',
                fill: 'url(#logo_svg__b)',
              })),
            l ||
              (l = j.createElement('use', { xlinkHref: '#logo_svg__c', fill: 'url(#logo_svg__d)' }))
          )
        },
        k = n(7233),
        O = n(890),
        C = n(811)
      function T() {
        return (0, s.jsx)('footer', {
          children: (0, s.jsxs)('div', {
            className: 'mt-16 flex flex-col items-center',
            children: [
              (0, s.jsxs)('div', {
                className: 'mb-3 flex space-x-4',
                children: [
                  (0, s.jsx)(C.Z, { kind: 'mail', href: 'mailto:'.concat(f().email), size: '6' }),
                  (0, s.jsx)(C.Z, { kind: 'github', href: f().github, size: '6' }),
                  (0, s.jsx)(C.Z, { kind: 'facebook', href: f().facebook, size: '6' }),
                  (0, s.jsx)(C.Z, { kind: 'youtube', href: f().youtube, size: '6' }),
                  (0, s.jsx)(C.Z, { kind: 'linkedin', href: f().linkedin, size: '6' }),
                  (0, s.jsx)(C.Z, { kind: 'twitter', href: f().twitter, size: '6' }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400',
                children: [
                  (0, s.jsx)('div', { children: f().author }),
                  (0, s.jsx)('div', { children: ' • ' }),
                  (0, s.jsx)('div', { children: '\xa9 '.concat(new Date().getFullYear()) }),
                  (0, s.jsx)('div', { children: ' • ' }),
                  (0, s.jsx)(k.Z, { href: '/', children: f().title }),
                ],
              }),
              (0, s.jsx)('div', {
                className: 'mb-8 text-sm text-gray-500 dark:text-gray-400',
                children: (0, s.jsx)(k.Z, {
                  href: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
                  children: 'Tailwind Nextjs Theme',
                }),
              }),
            ],
          }),
        })
      }
      let S = () => {
          let [e, t] = (0, j.useState)(!1),
            n = () => {
              t(
                (e) => (
                  e
                    ? (document.body.style.overflow = 'auto')
                    : (document.body.style.overflow = 'hidden'),
                  !e
                )
              )
            }
          return (0, s.jsxs)('div', {
            className: 'sm:hidden',
            children: [
              (0, s.jsx)('button', {
                type: 'button',
                className: 'ml-1 mr-1 h-8 w-8 rounded py-1',
                'aria-label': 'Toggle Menu',
                onClick: n,
                children: (0, s.jsx)('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  className: 'text-gray-900 dark:text-gray-100',
                  children: (0, s.jsx)('path', {
                    fillRule: 'evenodd',
                    d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                    clipRule: 'evenodd',
                  }),
                }),
              }),
              (0, s.jsxs)('div', {
                className:
                  'fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 '.concat(
                    e ? 'translate-x-0' : 'translate-x-full'
                  ),
                children: [
                  (0, s.jsx)('div', {
                    className: 'flex justify-end',
                    children: (0, s.jsx)('button', {
                      type: 'button',
                      className: 'mr-5 mt-11 h-8 w-8 rounded',
                      'aria-label': 'Toggle Menu',
                      onClick: n,
                      children: (0, s.jsx)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 20 20',
                        fill: 'currentColor',
                        className: 'text-gray-900 dark:text-gray-100',
                        children: (0, s.jsx)('path', {
                          fillRule: 'evenodd',
                          d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                          clipRule: 'evenodd',
                        }),
                      }),
                    }),
                  }),
                  (0, s.jsx)('nav', {
                    className: 'fixed mt-8 h-full',
                    children: b.map((e) =>
                      (0, s.jsx)(
                        'div',
                        {
                          className: 'px-12 py-4',
                          children: (0, s.jsx)(k.Z, {
                            href: e.href,
                            className:
                              'text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100',
                            onClick: n,
                            children: e.title,
                          }),
                        },
                        e.title
                      )
                    ),
                  }),
                ],
              }),
            ],
          })
        },
        N = () => {
          let [e, t] = (0, j.useState)(!1),
            { theme: n, setTheme: r, resolvedTheme: a } = (0, i.F)()
          return (
            (0, j.useEffect)(() => t(!0), []),
            (0, s.jsx)('button', {
              'aria-label': 'Toggle Dark Mode',
              type: 'button',
              className: 'ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4',
              onClick: () => r('dark' === n || 'dark' === a ? 'light' : 'dark'),
              children: (0, s.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                className: 'text-gray-900 dark:text-gray-100',
                children:
                  e && ('dark' === n || 'dark' === a)
                    ? (0, s.jsx)('path', {
                        fillRule: 'evenodd',
                        d: 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z',
                        clipRule: 'evenodd',
                      })
                    : (0, s.jsx)('path', {
                        d: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z',
                      }),
              }),
            })
          )
        },
        M = (e) => {
          let { children: t } = e
          return (0, s.jsx)(O.Z, {
            children: (0, s.jsxs)('div', {
              className: 'flex h-screen flex-col justify-between',
              children: [
                (0, s.jsxs)('header', {
                  className: 'flex items-center justify-between py-10',
                  children: [
                    (0, s.jsx)('div', {
                      children: (0, s.jsx)(k.Z, {
                        href: '/',
                        'aria-label': f().headerTitle,
                        children: (0, s.jsxs)('div', {
                          className: 'flex items-center justify-between',
                          children: [
                            (0, s.jsx)('div', { className: 'mr-3', children: (0, s.jsx)(E, {}) }),
                            'string' == typeof f().headerTitle
                              ? (0, s.jsx)('div', {
                                  className: 'hidden h-6 text-2xl font-semibold sm:block',
                                  children: f().headerTitle,
                                })
                              : f().headerTitle,
                          ],
                        }),
                      }),
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex items-center text-base leading-5',
                      children: [
                        (0, s.jsx)('div', {
                          className: 'hidden sm:block',
                          children: b.map((e) =>
                            (0, s.jsx)(
                              k.Z,
                              {
                                href: e.href,
                                className:
                                  'p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4',
                                children: e.title,
                              },
                              e.title
                            )
                          ),
                        }),
                        (0, s.jsx)(N, {}),
                        (0, s.jsx)(S, {}),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)('main', { className: 'mb-auto', children: t }),
                (0, s.jsx)(T, {}),
              ],
            }),
          })
        }
      var z = n(1163),
        P = n(5800)
      n(4155).env.SOCKET
      let I = (e) => {
        let { error: t, resetErrorBoundary: n } = e
        return (0, s.jsxs)('div', {
          role: 'alert',
          children: [
            (0, s.jsx)('p', { children: 'Something went wrong:' }),
            (0, s.jsx)('pre', { children: t.message }),
            (0, s.jsx)('button', { onClick: n, children: 'Try again' }),
          ],
        })
      }
      function A(e) {
        let { Component: t, pageProps: n } = e
        return (0, s.jsx)(P.ErrorBoundary, {
          FallbackComponent: I,
          children: (0, s.jsxs)(i.f, {
            attribute: 'class',
            defaultTheme: f().theme,
            children: [
              (0, s.jsx)(u(), {
                children: (0, s.jsx)('meta', {
                  content: 'width=device-width, initial-scale=1',
                  name: 'viewport',
                }),
              }),
              !1,
              (0, s.jsx)(w, {}),
              (0, s.jsx)(M, { children: (0, s.jsx)(t, { ...n }) }),
            ],
          }),
        })
      }
    },
    8102: function () {},
    3941: function () {},
    9785: function () {},
    5837: function () {},
    9008: function (e, t, n) {
      e.exports = n(3121)
    },
    1664: function (e, t, n) {
      e.exports = n(1551)
    },
    1163: function (e, t, n) {
      e.exports = n(880)
    },
    4298: function (e, t, n) {
      e.exports = n(3573)
    },
    4155: function (e) {
      var t,
        n,
        r,
        a = (e.exports = {})
      function o() {
        throw Error('setTimeout has not been defined')
      }
      function l() {
        throw Error('clearTimeout has not been defined')
      }
      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0)
        if ((t === o || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0)
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }
      !(function () {
        try {
          t = 'function' == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          n = 'function' == typeof clearTimeout ? clearTimeout : l
        } catch (r) {
          n = l
        }
      })()
      var i = [],
        c = !1,
        u = -1
      function d() {
        c && r && ((c = !1), r.length ? (i = r.concat(i)) : (u = -1), i.length && f())
      }
      function f() {
        if (!c) {
          var e = s(d)
          c = !0
          for (var t = i.length; t; ) {
            for (r = i, i = []; ++u < t; ) r && r[u].run()
            ;(u = -1), (t = i.length)
          }
          ;(r = null),
            (c = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e)
              if ((n === l || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e)
              try {
                n(e)
              } catch (r) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            })(e)
        }
      }
      function h(e, t) {
        ;(this.fun = e), (this.array = t)
      }
      function p() {}
      ;(a.nextTick = function (e) {
        var t = Array(arguments.length - 1)
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        i.push(new h(e, t)), 1 !== i.length || c || s(f)
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array)
        }),
        (a.title = 'browser'),
        (a.browser = !0),
        (a.env = {}),
        (a.argv = []),
        (a.version = ''),
        (a.versions = {}),
        (a.on = p),
        (a.addListener = p),
        (a.once = p),
        (a.off = p),
        (a.removeListener = p),
        (a.removeAllListeners = p),
        (a.emit = p),
        (a.prependListener = p),
        (a.prependOnceListener = p),
        (a.listeners = function (e) {
          return []
        }),
        (a.binding = function (e) {
          throw Error('process.binding is not supported')
        }),
        (a.cwd = function () {
          return '/'
        }),
        (a.chdir = function (e) {
          throw Error('process.chdir is not supported')
        }),
        (a.umask = function () {
          return 0
        })
    },
    5800: function (e, t, n) {
      !(function (e, t) {
        'use strict'
        var n = (function (e) {
          if (e && e.__esModule) return e
          var t = Object.create(null)
          return (
            e &&
              Object.keys(e).forEach(function (n) {
                if ('default' !== n) {
                  var r = Object.getOwnPropertyDescriptor(e, n)
                  Object.defineProperty(
                    t,
                    n,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[n]
                          },
                        }
                  )
                }
              }),
            (t.default = e),
            Object.freeze(t)
          )
        })(t)
        function r(e, t) {
          return (r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        var a = { error: null },
          o = (function (e) {
            function t() {
              for (var t, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o]
              return (
                ((t = e.call.apply(e, [this].concat(r)) || this).state = a),
                (t.resetErrorBoundary = function () {
                  for (var e, n = arguments.length, r = Array(n), a = 0; a < n; a++)
                    r[a] = arguments[a]
                  null == t.props.onReset || (e = t.props).onReset.apply(e, r), t.reset()
                }),
                t
              )
            }
            ;((o = t).prototype = Object.create(e.prototype)),
              (o.prototype.constructor = o),
              r(o, e),
              (t.getDerivedStateFromError = function (e) {
                return { error: e }
              })
            var o,
              l = t.prototype
            return (
              (l.reset = function () {
                this.setState(a)
              }),
              (l.componentDidCatch = function (e, t) {
                var n, r
                null == (n = (r = this.props).onError) || n.call(r, e, t)
              }),
              (l.componentDidUpdate = function (e, t) {
                var n,
                  r,
                  a,
                  o,
                  l = this.state.error,
                  s = this.props.resetKeys
                null !== l &&
                  null !== t.error &&
                  (void 0 === (n = e.resetKeys) && (n = []),
                  void 0 === (r = s) && (r = []),
                  n.length !== r.length ||
                    n.some(function (e, t) {
                      return !Object.is(e, r[t])
                    })) &&
                  (null == (a = (o = this.props).onResetKeysChange) || a.call(o, e.resetKeys, s),
                  this.reset())
              }),
              (l.render = function () {
                var e = this.state.error,
                  t = this.props,
                  r = t.fallbackRender,
                  a = t.FallbackComponent,
                  o = t.fallback
                if (null !== e) {
                  var l = { error: e, resetErrorBoundary: this.resetErrorBoundary }
                  if (n.isValidElement(o)) return o
                  if ('function' == typeof r) return r(l)
                  if (a) return n.createElement(a, l)
                  throw Error(
                    'react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop'
                  )
                }
                return this.props.children
              }),
              t
            )
          })(n.Component)
        ;(e.ErrorBoundary = o),
          (e.useErrorHandler = function (e) {
            var t = n.useState(null),
              r = t[0],
              a = t[1]
            if (null != e) throw e
            if (null != r) throw r
            return a
          }),
          (e.withErrorBoundary = function (e, t) {
            var r = function (r) {
                return n.createElement(o, t, n.createElement(e, r))
              },
              a = e.displayName || e.name || 'Unknown'
            return (r.displayName = 'withErrorBoundary(' + a + ')'), r
          }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      })(t, n(7294))
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t))
    }
    e.O(0, [774, 179], function () {
      return t(1118), t(880)
    }),
      (_N_E = e.O())
  },
])
