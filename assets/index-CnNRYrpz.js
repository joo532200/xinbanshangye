import {a as M, b as _n, e as Xn, f as Zn, g as $n, j as m, u as dn, i as er} from "./index-B8JG0WCQ.js";
const tr = (e, t, n, r) => {
    const s = [n, {
        code: t,
        ...r || {}
    }];
    if (e?.services?.logger?.forward)
        return e.services.logger.forward(s, "warn", "react-i18next::", !0);
    Re(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
    e?.services?.logger?.warn ? e.services.logger.warn(...s) : console?.warn && console.warn(...s)
}
  , Dt = {}
  , hn = (e, t, n, r) => {
    Re(n) && Dt[n] || (Re(n) && (Dt[n] = new Date),
    tr(e, t, n, r))
}
  , An = (e, t) => () => {
    if (e.isInitialized)
        t();
    else {
        const n = () => {
            setTimeout( () => {
                e.off("initialized", n)
            }
            , 0),
            t()
        }
        ;
        e.on("initialized", n)
    }
}
  , Bt = (e, t, n) => {
    e.loadNamespaces(t, An(e, n))
}
  , Ft = (e, t, n, r) => {
    if (Re(n) && (n = [n]),
    e.options.preload && e.options.preload.indexOf(t) > -1)
        return Bt(e, n, r);
    n.forEach(s => {
        e.options.ns.indexOf(s) < 0 && e.options.ns.push(s)
    }
    ),
    e.loadLanguages(t, An(e, r))
}
  , nr = (e, t, n={}) => !t.languages || !t.languages.length ? (hn(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
    languages: t.languages
}),
!0) : t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (r, s) => {
        if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !s(r.isLanguageChangingTo, e))
            return !1
    }
})
  , Re = e => typeof e == "string"
  , rr = e => typeof e == "object" && e !== null
  , sr = M.createContext();
class or {
    constructor() {
        this.usedNamespaces = {}
    }
    addUsedNamespaces(t) {
        t.forEach(n => {
            this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
        }
        )
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces)
    }
}
var mt = {
    exports: {}
}
  , gt = {};
var Wt;
function ir() {
    if (Wt)
        return gt;
    Wt = 1;
    var e = _n();
    function t(v, R) {
        return v === R && (v !== 0 || 1 / v === 1 / R) || v !== v && R !== R
    }
    var n = typeof Object.is == "function" ? Object.is : t
      , r = e.useState
      , s = e.useEffect
      , i = e.useLayoutEffect
      , c = e.useDebugValue;
    function u(v, R) {
        var L = R()
          , y = r({
            inst: {
                value: L,
                getSnapshot: R
            }
        })
          , I = y[0].inst
          , O = y[1];
        return i(function() {
            I.value = L,
            I.getSnapshot = R,
            E(I) && O({
                inst: I
            })
        }, [v, L, R]),
        s(function() {
            return E(I) && O({
                inst: I
            }),
            v(function() {
                E(I) && O({
                    inst: I
                })
            })
        }, [v]),
        c(L),
        L
    }
    function E(v) {
        var R = v.getSnapshot;
        v = v.value;
        try {
            var L = R();
            return !n(v, L)
        } catch {
            return !0
        }
    }
    function C(v, R) {
        return R()
    }
    var N = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? C : u;
    return gt.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : N,
    gt
}
var Jt;
function ar() {
    return Jt || (Jt = 1,
    mt.exports = ir()),
    mt.exports
}
var cr = ar();
const lr = (e, t) => Re(t) ? t : rr(t) && Re(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e
  , ur = {
    t: lr,
    ready: !1
}
  , fr = () => () => {}
  , Te = (e, t={}) => {
    const {i18n: n} = t
      , {i18n: r, defaultNS: s} = M.useContext(sr) || {}
      , i = n || r || Xn();
    i && !i.reportNamespaces && (i.reportNamespaces = new or),
    i || hn(i, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const c = M.useMemo( () => ({
        ...Zn(),
        ...i?.options?.react,
        ...t
    }), [i, t])
      , {useSuspense: u, keyPrefix: E} = c
      , C = s || i?.options?.defaultNS
      , N = Re(C) ? [C] : C || ["translation"]
      , v = M.useMemo( () => N, N);
    i?.reportNamespaces?.addUsedNamespaces?.(v);
    const R = M.useRef(0)
      , L = M.useCallback(a => {
        if (!i)
            return fr;
        const {bindI18n: l, bindI18nStore: h} = c
          , f = () => {
            R.current += 1,
            a()
        }
        ;
        return l && i.on(l, f),
        h && i.store.on(h, f),
        () => {
            l && l.split(" ").forEach(p => i.off(p, f)),
            h && h.split(" ").forEach(p => i.store.off(p, f))
        }
    }
    , [i, c])
      , y = M.useRef()
      , I = M.useCallback( () => {
        if (!i)
            return ur;
        const a = !!(i.isInitialized || i.initializedStoreOnce) && v.every(d => nr(d, i, c))
          , l = t.lng || i.language
          , h = R.current
          , f = y.current;
        if (f && f.ready === a && f.lng === l && f.keyPrefix === E && f.revision === h)
            return f;
        const S = {
            t: i.getFixedT(l, c.nsMode === "fallback" ? v : v[0], E),
            ready: a,
            lng: l,
            keyPrefix: E,
            revision: h
        };
        return y.current = S,
        S
    }
    , [i, v, E, c, t.lng])
      , [O,Y] = M.useState(0)
      , {t: w, ready: j} = cr.useSyncExternalStore(L, I, I);
    M.useEffect( () => {
        if (i && !j && !u) {
            const a = () => Y(l => l + 1);
            t.lng ? Ft(i, t.lng, v, a) : Bt(i, v, a)
        }
    }
    , [i, t.lng, v, j, u, O]);
    const U = i || {}
      , J = M.useRef(null)
      , G = M.useRef()
      , Q = a => {
        const l = Object.getOwnPropertyDescriptors(a);
        l.__original && delete l.__original;
        const h = Object.create(Object.getPrototypeOf(a), l);
        if (!Object.prototype.hasOwnProperty.call(h, "__original"))
            try {
                Object.defineProperty(h, "__original", {
                    value: a,
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                })
            } catch {}
        return h
    }
      , o = M.useMemo( () => {
        const a = U
          , l = a?.language;
        let h = a;
        a && (J.current && J.current.__original === a ? G.current !== l ? (h = Q(a),
        J.current = h,
        G.current = l) : h = J.current : (h = Q(a),
        J.current = h,
        G.current = l));
        const f = [w, h, j];
        return f.t = w,
        f.i18n = h,
        f.ready = j,
        f
    }
    , [w, U, j, U.resolvedLanguage, U.language, U.languages]);
    if (i && u && !j)
        throw new Promise(a => {
            const l = () => a();
            t.lng ? Ft(i, t.lng, v, l) : Bt(i, v, l)
        }
        );
    return o
}
;
var wt = {
    exports: {}
};
var zt;
function dr() {
    return zt || (zt = 1,
    (function(e) {
        (function() {
            var t = {}.hasOwnProperty;
            function n() {
                for (var i = "", c = 0; c < arguments.length; c++) {
                    var u = arguments[c];
                    u && (i = s(i, r(u)))
                }
                return i
            }
            function r(i) {
                if (typeof i == "string" || typeof i == "number")
                    return i;
                if (typeof i != "object")
                    return "";
                if (Array.isArray(i))
                    return n.apply(null, i);
                if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
                    return i.toString();
                var c = "";
                for (var u in i)
                    t.call(i, u) && i[u] && (c = s(c, u));
                return c
            }
            function s(i, c) {
                return c ? i ? i + " " + c : i + c : i
            }
            e.exports ? (n.default = n,
            e.exports = n) : window.classNames = n
        }
        )()
    }
    )(wt)),
    wt.exports
}
var hr = dr();
const Z = $n(hr);
var Ot = new Map, Ge = new WeakMap, Yt = 0, Ar;
function pr(e) {
    return e ? (Ge.has(e) || (Yt += 1,
    Ge.set(e, Yt.toString())),
    Ge.get(e)) : "0"
}
function mr(e) {
    return Object.keys(e).sort().filter(t => e[t] !== void 0).map(t => `${t}_${t === "root" ? pr(e.root) : e[t]}`).toString()
}
function gr(e) {
    const t = mr(e);
    let n = Ot.get(t);
    if (!n) {
        const r = new Map;
        let s;
        const i = new IntersectionObserver(c => {
            c.forEach(u => {
                var E;
                const C = u.isIntersecting && s.some(N => u.intersectionRatio >= N);
                e.trackVisibility && typeof u.isVisible > "u" && (u.isVisible = C),
                (E = r.get(u.target)) == null || E.forEach(N => {
                    N(C, u)
                }
                )
            }
            )
        }
        ,e);
        s = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]),
        n = {
            id: t,
            observer: i,
            elements: r
        },
        Ot.set(t, n)
    }
    return n
}
function wr(e, t, n={}, r=Ar) {
    if (typeof window.IntersectionObserver > "u" && r !== void 0) {
        const E = e.getBoundingClientRect();
        return t(r, {
            isIntersecting: r,
            target: e,
            intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
            time: 0,
            boundingClientRect: E,
            intersectionRect: E,
            rootBounds: E
        }),
        () => {}
    }
    const {id: s, observer: i, elements: c} = gr(n)
      , u = c.get(e) || [];
    return c.has(e) || c.set(e, u),
    u.push(t),
    i.observe(e),
    function() {
        u.splice(u.indexOf(t), 1),
        u.length === 0 && (c.delete(e),
        i.unobserve(e)),
        c.size === 0 && (i.disconnect(),
        Ot.delete(s))
    }
}
function Sr({threshold: e, delay: t, trackVisibility: n, rootMargin: r, root: s, triggerOnce: i, skip: c, initialInView: u, fallbackInView: E, onChange: C}={}) {
    var N;
    const [v,R] = M.useState(null)
      , L = M.useRef(C)
      , y = M.useRef(u)
      , [I,O] = M.useState({
        inView: !!u,
        entry: void 0
    });
    L.current = C,
    M.useEffect( () => {
        if (y.current === void 0 && (y.current = u),
        c || !v)
            return;
        let U;
        return U = wr(v, (J, G) => {
            const Q = y.current;
            y.current = J,
            !(Q === void 0 && !J) && (O({
                inView: J,
                entry: G
            }),
            L.current && L.current(J, G),
            G.isIntersecting && i && U && (U(),
            U = void 0))
        }
        , {
            root: s,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t
        }, E),
        () => {
            U && U()
        }
    }
    , [Array.isArray(e) ? e.toString() : e, v, s, r, i, c, n, E, t]);
    const Y = (N = I.entry) == null ? void 0 : N.target
      , w = M.useRef(void 0);
    !v && Y && !i && !c && w.current !== Y && (w.current = Y,
    O({
        inView: !!u,
        entry: void 0
    }),
    y.current = u);
    const j = [R, I.inView, I.entry];
    return j.ref = j[0],
    j.inView = j[1],
    j.entry = j[2],
    j
}
var br = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i
  , St = Math.ceil
  , Ae = Math.floor
  , le = "[BigNumber Error] "
  , Gt = le + "Number primitive has more than 15 significant digits: "
  , me = 1e14
  , D = 14
  , bt = 9007199254740991
  , xt = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13]
  , Ne = 1e7
  , ne = 1e9;
function pn(e) {
    var t, n, r, s = w.prototype = {
        constructor: w,
        toString: null,
        valueOf: null
    }, i = new w(1), c = 20, u = 4, E = -7, C = 21, N = -1e7, v = 1e7, R = !1, L = 1, y = 0, I = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: " ",
        suffix: ""
    }, O = "0123456789abcdefghijklmnopqrstuvwxyz", Y = !0;
    function w(o, a) {
        var l, h, f, p, S, d, A, b, g = this;
        if (!(g instanceof w))
            return new w(o,a);
        if (a == null) {
            if (o && o._isBigNumber === !0) {
                g.s = o.s,
                !o.c || o.e > v ? g.c = g.e = null : o.e < N ? g.c = [g.e = 0] : (g.e = o.e,
                g.c = o.c.slice());
                return
            }
            if ((d = typeof o == "number") && o * 0 == 0) {
                if (g.s = 1 / o < 0 ? (o = -o,
                -1) : 1,
                o === ~~o) {
                    for (p = 0,
                    S = o; S >= 10; S /= 10,
                    p++)
                        ;
                    p > v ? g.c = g.e = null : (g.e = p,
                    g.c = [o]);
                    return
                }
                b = String(o)
            } else {
                if (!br.test(b = String(o)))
                    return r(g, b, d);
                g.s = b.charCodeAt(0) == 45 ? (b = b.slice(1),
                -1) : 1
            }
            (p = b.indexOf(".")) > -1 && (b = b.replace(".", "")),
            (S = b.search(/e/i)) > 0 ? (p < 0 && (p = S),
            p += +b.slice(S + 1),
            b = b.substring(0, S)) : p < 0 && (p = b.length)
        } else {
            if ($(a, 2, O.length, "Base"),
            a == 10 && Y)
                return g = new w(o),
                G(g, c + g.e + 1, u);
            if (b = String(o),
            d = typeof o == "number") {
                if (o * 0 != 0)
                    return r(g, b, d, a);
                if (g.s = 1 / o < 0 ? (b = b.slice(1),
                -1) : 1,
                w.DEBUG && b.replace(/^0\.0*|\./, "").length > 15)
                    throw Error(Gt + o)
            } else
                g.s = b.charCodeAt(0) === 45 ? (b = b.slice(1),
                -1) : 1;
            for (l = O.slice(0, a),
            p = S = 0,
            A = b.length; S < A; S++)
                if (l.indexOf(h = b.charAt(S)) < 0) {
                    if (h == ".") {
                        if (S > p) {
                            p = A;
                            continue
                        }
                    } else if (!f && (b == b.toUpperCase() && (b = b.toLowerCase()) || b == b.toLowerCase() && (b = b.toUpperCase()))) {
                        f = !0,
                        S = -1,
                        p = 0;
                        continue
                    }
                    return r(g, String(o), d, a)
                }
            d = !1,
            b = n(b, a, 10, g.s),
            (p = b.indexOf(".")) > -1 ? b = b.replace(".", "") : p = b.length
        }
        for (S = 0; b.charCodeAt(S) === 48; S++)
            ;
        for (A = b.length; b.charCodeAt(--A) === 48; )
            ;
        if (b = b.slice(S, ++A)) {
            if (A -= S,
            d && w.DEBUG && A > 15 && (o > bt || o !== Ae(o)))
                throw Error(Gt + g.s * o);
            if ((p = p - S - 1) > v)
                g.c = g.e = null;
            else if (p < N)
                g.c = [g.e = 0];
            else {
                if (g.e = p,
                g.c = [],
                S = (p + 1) % D,
                p < 0 && (S += D),
                S < A) {
                    for (S && g.c.push(+b.slice(0, S)),
                    A -= D; S < A; )
                        g.c.push(+b.slice(S, S += D));
                    S = D - (b = b.slice(S)).length
                } else
                    S -= A;
                for (; S--; b += "0")
                    ;
                g.c.push(+b)
            }
        } else
            g.c = [g.e = 0]
    }
    w.clone = pn,
    w.ROUND_UP = 0,
    w.ROUND_DOWN = 1,
    w.ROUND_CEIL = 2,
    w.ROUND_FLOOR = 3,
    w.ROUND_HALF_UP = 4,
    w.ROUND_HALF_DOWN = 5,
    w.ROUND_HALF_EVEN = 6,
    w.ROUND_HALF_CEIL = 7,
    w.ROUND_HALF_FLOOR = 8,
    w.EUCLID = 9,
    w.config = w.set = function(o) {
        var a, l;
        if (o != null)
            if (typeof o == "object") {
                if (o.hasOwnProperty(a = "DECIMAL_PLACES") && (l = o[a],
                $(l, 0, ne, a),
                c = l),
                o.hasOwnProperty(a = "ROUNDING_MODE") && (l = o[a],
                $(l, 0, 8, a),
                u = l),
                o.hasOwnProperty(a = "EXPONENTIAL_AT") && (l = o[a],
                l && l.pop ? ($(l[0], -ne, 0, a),
                $(l[1], 0, ne, a),
                E = l[0],
                C = l[1]) : ($(l, -ne, ne, a),
                E = -(C = l < 0 ? -l : l))),
                o.hasOwnProperty(a = "RANGE"))
                    if (l = o[a],
                    l && l.pop)
                        $(l[0], -ne, -1, a),
                        $(l[1], 1, ne, a),
                        N = l[0],
                        v = l[1];
                    else if ($(l, -ne, ne, a),
                    l)
                        N = -(v = l < 0 ? -l : l);
                    else
                        throw Error(le + a + " cannot be zero: " + l);
                if (o.hasOwnProperty(a = "CRYPTO"))
                    if (l = o[a],
                    l === !!l)
                        if (l)
                            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                                R = l;
                            else
                                throw R = !l,
                                Error(le + "crypto unavailable");
                        else
                            R = l;
                    else
                        throw Error(le + a + " not true or false: " + l);
                if (o.hasOwnProperty(a = "MODULO_MODE") && (l = o[a],
                $(l, 0, 9, a),
                L = l),
                o.hasOwnProperty(a = "POW_PRECISION") && (l = o[a],
                $(l, 0, ne, a),
                y = l),
                o.hasOwnProperty(a = "FORMAT"))
                    if (l = o[a],
                    typeof l == "object")
                        I = l;
                    else
                        throw Error(le + a + " not an object: " + l);
                if (o.hasOwnProperty(a = "ALPHABET"))
                    if (l = o[a],
                    typeof l == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(l))
                        Y = l.slice(0, 10) == "0123456789",
                        O = l;
                    else
                        throw Error(le + a + " invalid: " + l)
            } else
                throw Error(le + "Object expected: " + o);
        return {
            DECIMAL_PLACES: c,
            ROUNDING_MODE: u,
            EXPONENTIAL_AT: [E, C],
            RANGE: [N, v],
            CRYPTO: R,
            MODULO_MODE: L,
            POW_PRECISION: y,
            FORMAT: I,
            ALPHABET: O
        }
    }
    ,
    w.isBigNumber = function(o) {
        if (!o || o._isBigNumber !== !0)
            return !1;
        if (!w.DEBUG)
            return !0;
        var a, l, h = o.c, f = o.e, p = o.s;
        e: if ({}.toString.call(h) == "[object Array]") {
            if ((p === 1 || p === -1) && f >= -ne && f <= ne && f === Ae(f)) {
                if (h[0] === 0) {
                    if (f === 0 && h.length === 1)
                        return !0;
                    break e
                }
                if (a = (f + 1) % D,
                a < 1 && (a += D),
                String(h[0]).length == a) {
                    for (a = 0; a < h.length; a++)
                        if (l = h[a],
                        l < 0 || l >= me || l !== Ae(l))
                            break e;
                    if (l !== 0)
                        return !0
                }
            }
        } else if (h === null && f === null && (p === null || p === 1 || p === -1))
            return !0;
        throw Error(le + "Invalid BigNumber: " + o)
    }
    ,
    w.maximum = w.max = function() {
        return U(arguments, -1)
    }
    ,
    w.minimum = w.min = function() {
        return U(arguments, 1)
    }
    ,
    w.random = (function() {
        var o = 9007199254740992
          , a = Math.random() * o & 2097151 ? function() {
            return Ae(Math.random() * o)
        }
        : function() {
            return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
        }
        ;
        return function(l) {
            var h, f, p, S, d, A = 0, b = [], g = new w(i);
            if (l == null ? l = c : $(l, 0, ne),
            S = St(l / D),
            R)
                if (crypto.getRandomValues) {
                    for (h = crypto.getRandomValues(new Uint32Array(S *= 2)); A < S; )
                        d = h[A] * 131072 + (h[A + 1] >>> 11),
                        d >= 9e15 ? (f = crypto.getRandomValues(new Uint32Array(2)),
                        h[A] = f[0],
                        h[A + 1] = f[1]) : (b.push(d % 1e14),
                        A += 2);
                    A = S / 2
                } else if (crypto.randomBytes) {
                    for (h = crypto.randomBytes(S *= 7); A < S; )
                        d = (h[A] & 31) * 281474976710656 + h[A + 1] * 1099511627776 + h[A + 2] * 4294967296 + h[A + 3] * 16777216 + (h[A + 4] << 16) + (h[A + 5] << 8) + h[A + 6],
                        d >= 9e15 ? crypto.randomBytes(7).copy(h, A) : (b.push(d % 1e14),
                        A += 7);
                    A = S / 7
                } else
                    throw R = !1,
                    Error(le + "crypto unavailable");
            if (!R)
                for (; A < S; )
                    d = a(),
                    d < 9e15 && (b[A++] = d % 1e14);
            for (S = b[--A],
            l %= D,
            S && l && (d = xt[D - l],
            b[A] = Ae(S / d) * d); b[A] === 0; b.pop(),
            A--)
                ;
            if (A < 0)
                b = [p = 0];
            else {
                for (p = -1; b[0] === 0; b.splice(0, 1),
                p -= D)
                    ;
                for (A = 1,
                d = b[0]; d >= 10; d /= 10,
                A++)
                    ;
                A < D && (p -= D - A)
            }
            return g.e = p,
            g.c = b,
            g
        }
    }
    )(),
    w.sum = function() {
        for (var o = 1, a = arguments, l = new w(a[0]); o < a.length; )
            l = l.plus(a[o++]);
        return l
    }
    ,
    n = (function() {
        var o = "0123456789";
        function a(l, h, f, p) {
            for (var S, d = [0], A, b = 0, g = l.length; b < g; ) {
                for (A = d.length; A--; d[A] *= h)
                    ;
                for (d[0] += p.indexOf(l.charAt(b++)),
                S = 0; S < d.length; S++)
                    d[S] > f - 1 && (d[S + 1] == null && (d[S + 1] = 0),
                    d[S + 1] += d[S] / f | 0,
                    d[S] %= f)
            }
            return d.reverse()
        }
        return function(l, h, f, p, S) {
            var d, A, b, g, B, T, k, W, q = l.indexOf("."), X = c, z = u;
            for (q >= 0 && (g = y,
            y = 0,
            l = l.replace(".", ""),
            W = new w(h),
            T = W.pow(l.length - q),
            y = g,
            W.c = a(Ce(he(T.c), T.e, "0"), 10, f, o),
            W.e = W.c.length),
            k = a(l, h, f, S ? (d = O,
            o) : (d = o,
            O)),
            b = g = k.length; k[--g] == 0; k.pop())
                ;
            if (!k[0])
                return d.charAt(0);
            if (q < 0 ? --b : (T.c = k,
            T.e = b,
            T.s = p,
            T = t(T, W, X, z, f),
            k = T.c,
            B = T.r,
            b = T.e),
            A = b + X + 1,
            q = k[A],
            g = f / 2,
            B = B || A < 0 || k[A + 1] != null,
            B = z < 4 ? (q != null || B) && (z == 0 || z == (T.s < 0 ? 3 : 2)) : q > g || q == g && (z == 4 || B || z == 6 && k[A - 1] & 1 || z == (T.s < 0 ? 8 : 7)),
            A < 1 || !k[0])
                l = B ? Ce(d.charAt(1), -X, d.charAt(0)) : d.charAt(0);
            else {
                if (k.length = A,
                B)
                    for (--f; ++k[--A] > f; )
                        k[A] = 0,
                        A || (++b,
                        k = [1].concat(k));
                for (g = k.length; !k[--g]; )
                    ;
                for (q = 0,
                l = ""; q <= g; l += d.charAt(k[q++]))
                    ;
                l = Ce(l, b, d.charAt(0))
            }
            return l
        }
    }
    )(),
    t = (function() {
        function o(h, f, p) {
            var S, d, A, b, g = 0, B = h.length, T = f % Ne, k = f / Ne | 0;
            for (h = h.slice(); B--; )
                A = h[B] % Ne,
                b = h[B] / Ne | 0,
                S = k * A + b * T,
                d = T * A + S % Ne * Ne + g,
                g = (d / p | 0) + (S / Ne | 0) + k * b,
                h[B] = d % p;
            return g && (h = [g].concat(h)),
            h
        }
        function a(h, f, p, S) {
            var d, A;
            if (p != S)
                A = p > S ? 1 : -1;
            else
                for (d = A = 0; d < p; d++)
                    if (h[d] != f[d]) {
                        A = h[d] > f[d] ? 1 : -1;
                        break
                    }
            return A
        }
        function l(h, f, p, S) {
            for (var d = 0; p--; )
                h[p] -= d,
                d = h[p] < f[p] ? 1 : 0,
                h[p] = d * S + h[p] - f[p];
            for (; !h[0] && h.length > 1; h.splice(0, 1))
                ;
        }
        return function(h, f, p, S, d) {
            var A, b, g, B, T, k, W, q, X, z, K, se, Ye, At, pt, be, Pe, de = h.s == f.s ? 1 : -1, ie = h.c, ee = f.c;
            if (!ie || !ie[0] || !ee || !ee[0])
                return new w(!h.s || !f.s || (ie ? ee && ie[0] == ee[0] : !ee) ? NaN : ie && ie[0] == 0 || !ee ? de * 0 : de / 0);
            for (q = new w(de),
            X = q.c = [],
            b = h.e - f.e,
            de = p + b + 1,
            d || (d = me,
            b = pe(h.e / D) - pe(f.e / D),
            de = de / D | 0),
            g = 0; ee[g] == (ie[g] || 0); g++)
                ;
            if (ee[g] > (ie[g] || 0) && b--,
            de < 0)
                X.push(1),
                B = !0;
            else {
                for (At = ie.length,
                be = ee.length,
                g = 0,
                de += 2,
                T = Ae(d / (ee[0] + 1)),
                T > 1 && (ee = o(ee, T, d),
                ie = o(ie, T, d),
                be = ee.length,
                At = ie.length),
                Ye = be,
                z = ie.slice(0, be),
                K = z.length; K < be; z[K++] = 0)
                    ;
                Pe = ee.slice(),
                Pe = [0].concat(Pe),
                pt = ee[0],
                ee[1] >= d / 2 && pt++;
                do {
                    if (T = 0,
                    A = a(ee, z, be, K),
                    A < 0) {
                        if (se = z[0],
                        be != K && (se = se * d + (z[1] || 0)),
                        T = Ae(se / pt),
                        T > 1)
                            for (T >= d && (T = d - 1),
                            k = o(ee, T, d),
                            W = k.length,
                            K = z.length; a(k, z, W, K) == 1; )
                                T--,
                                l(k, be < W ? Pe : ee, W, d),
                                W = k.length,
                                A = 1;
                        else
                            T == 0 && (A = T = 1),
                            k = ee.slice(),
                            W = k.length;
                        if (W < K && (k = [0].concat(k)),
                        l(z, k, K, d),
                        K = z.length,
                        A == -1)
                            for (; a(ee, z, be, K) < 1; )
                                T++,
                                l(z, be < K ? Pe : ee, K, d),
                                K = z.length
                    } else
                        A === 0 && (T++,
                        z = [0]);
                    X[g++] = T,
                    z[0] ? z[K++] = ie[Ye] || 0 : (z = [ie[Ye]],
                    K = 1)
                } while ((Ye++ < At || z[0] != null) && de--);
                B = z[0] != null,
                X[0] || X.splice(0, 1)
            }
            if (d == me) {
                for (g = 1,
                de = X[0]; de >= 10; de /= 10,
                g++)
                    ;
                G(q, p + (q.e = g + b * D - 1) + 1, S, B)
            } else
                q.e = b,
                q.r = +B;
            return q
        }
    }
    )();
    function j(o, a, l, h) {
        var f, p, S, d, A;
        if (l == null ? l = u : $(l, 0, 8),
        !o.c)
            return o.toString();
        if (f = o.c[0],
        S = o.e,
        a == null)
            A = he(o.c),
            A = h == 1 || h == 2 && (S <= E || S >= C) ? Qe(A, S) : Ce(A, S, "0");
        else if (o = G(new w(o), a, l),
        p = o.e,
        A = he(o.c),
        d = A.length,
        h == 1 || h == 2 && (a <= p || p <= E)) {
            for (; d < a; A += "0",
            d++)
                ;
            A = Qe(A, p)
        } else if (a -= S + (h === 2 && p > S),
        A = Ce(A, p, "0"),
        p + 1 > d) {
            if (--a > 0)
                for (A += "."; a--; A += "0")
                    ;
        } else if (a += p - d,
        a > 0)
            for (p + 1 == d && (A += "."); a--; A += "0")
                ;
        return o.s < 0 && f ? "-" + A : A
    }
    function U(o, a) {
        for (var l, h, f = 1, p = new w(o[0]); f < o.length; f++)
            h = new w(o[f]),
            (!h.s || (l = ye(p, h)) === a || l === 0 && p.s === a) && (p = h);
        return p
    }
    function J(o, a, l) {
        for (var h = 1, f = a.length; !a[--f]; a.pop())
            ;
        for (f = a[0]; f >= 10; f /= 10,
        h++)
            ;
        return (l = h + l * D - 1) > v ? o.c = o.e = null : l < N ? o.c = [o.e = 0] : (o.e = l,
        o.c = a),
        o
    }
    r = (function() {
        var o = /^(-?)0([xbo])(?=\w[\w.]*$)/i
          , a = /^([^.]+)\.$/
          , l = /^\.([^.]+)$/
          , h = /^-?(Infinity|NaN)$/
          , f = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(p, S, d, A) {
            var b, g = d ? S : S.replace(f, "");
            if (h.test(g))
                p.s = isNaN(g) ? null : g < 0 ? -1 : 1;
            else {
                if (!d && (g = g.replace(o, function(B, T, k) {
                    return b = (k = k.toLowerCase()) == "x" ? 16 : k == "b" ? 2 : 8,
                    !A || A == b ? T : B
                }),
                A && (b = A,
                g = g.replace(a, "$1").replace(l, "0.$1")),
                S != g))
                    return new w(g,b);
                if (w.DEBUG)
                    throw Error(le + "Not a" + (A ? " base " + A : "") + " number: " + S);
                p.s = null
            }
            p.c = p.e = null
        }
    }
    )();
    function G(o, a, l, h) {
        var f, p, S, d, A, b, g, B = o.c, T = xt;
        if (B) {
            e: {
                for (f = 1,
                d = B[0]; d >= 10; d /= 10,
                f++)
                    ;
                if (p = a - f,
                p < 0)
                    p += D,
                    S = a,
                    A = B[b = 0],
                    g = Ae(A / T[f - S - 1] % 10);
                else if (b = St((p + 1) / D),
                b >= B.length)
                    if (h) {
                        for (; B.length <= b; B.push(0))
                            ;
                        A = g = 0,
                        f = 1,
                        p %= D,
                        S = p - D + 1
                    } else
                        break e;
                else {
                    for (A = d = B[b],
                    f = 1; d >= 10; d /= 10,
                    f++)
                        ;
                    p %= D,
                    S = p - D + f,
                    g = S < 0 ? 0 : Ae(A / T[f - S - 1] % 10)
                }
                if (h = h || a < 0 || B[b + 1] != null || (S < 0 ? A : A % T[f - S - 1]),
                h = l < 4 ? (g || h) && (l == 0 || l == (o.s < 0 ? 3 : 2)) : g > 5 || g == 5 && (l == 4 || h || l == 6 && (p > 0 ? S > 0 ? A / T[f - S] : 0 : B[b - 1]) % 10 & 1 || l == (o.s < 0 ? 8 : 7)),
                a < 1 || !B[0])
                    return B.length = 0,
                    h ? (a -= o.e + 1,
                    B[0] = T[(D - a % D) % D],
                    o.e = -a || 0) : B[0] = o.e = 0,
                    o;
                if (p == 0 ? (B.length = b,
                d = 1,
                b--) : (B.length = b + 1,
                d = T[D - p],
                B[b] = S > 0 ? Ae(A / T[f - S] % T[S]) * d : 0),
                h)
                    for (; ; )
                        if (b == 0) {
                            for (p = 1,
                            S = B[0]; S >= 10; S /= 10,
                            p++)
                                ;
                            for (S = B[0] += d,
                            d = 1; S >= 10; S /= 10,
                            d++)
                                ;
                            p != d && (o.e++,
                            B[0] == me && (B[0] = 1));
                            break
                        } else {
                            if (B[b] += d,
                            B[b] != me)
                                break;
                            B[b--] = 0,
                            d = 1
                        }
                for (p = B.length; B[--p] === 0; B.pop())
                    ;
            }
            o.e > v ? o.c = o.e = null : o.e < N && (o.c = [o.e = 0])
        }
        return o
    }
    function Q(o) {
        var a, l = o.e;
        return l === null ? o.toString() : (a = he(o.c),
        a = l <= E || l >= C ? Qe(a, l) : Ce(a, l, "0"),
        o.s < 0 ? "-" + a : a)
    }
    return s.absoluteValue = s.abs = function() {
        var o = new w(this);
        return o.s < 0 && (o.s = 1),
        o
    }
    ,
    s.comparedTo = function(o, a) {
        return ye(this, new w(o,a))
    }
    ,
    s.decimalPlaces = s.dp = function(o, a) {
        var l, h, f, p = this;
        if (o != null)
            return $(o, 0, ne),
            a == null ? a = u : $(a, 0, 8),
            G(new w(p), o + p.e + 1, a);
        if (!(l = p.c))
            return null;
        if (h = ((f = l.length - 1) - pe(this.e / D)) * D,
        f = l[f])
            for (; f % 10 == 0; f /= 10,
            h--)
                ;
        return h < 0 && (h = 0),
        h
    }
    ,
    s.dividedBy = s.div = function(o, a) {
        return t(this, new w(o,a), c, u)
    }
    ,
    s.dividedToIntegerBy = s.idiv = function(o, a) {
        return t(this, new w(o,a), 0, 1)
    }
    ,
    s.exponentiatedBy = s.pow = function(o, a) {
        var l, h, f, p, S, d, A, b, g, B = this;
        if (o = new w(o),
        o.c && !o.isInteger())
            throw Error(le + "Exponent not an integer: " + Q(o));
        if (a != null && (a = new w(a)),
        d = o.e > 14,
        !B.c || !B.c[0] || B.c[0] == 1 && !B.e && B.c.length == 1 || !o.c || !o.c[0])
            return g = new w(Math.pow(+Q(B), d ? o.s * (2 - He(o)) : +Q(o))),
            a ? g.mod(a) : g;
        if (A = o.s < 0,
        a) {
            if (a.c ? !a.c[0] : !a.s)
                return new w(NaN);
            h = !A && B.isInteger() && a.isInteger(),
            h && (B = B.mod(a))
        } else {
            if (o.e > 9 && (B.e > 0 || B.e < -1 || (B.e == 0 ? B.c[0] > 1 || d && B.c[1] >= 24e7 : B.c[0] < 8e13 || d && B.c[0] <= 9999975e7)))
                return p = B.s < 0 && He(o) ? -0 : 0,
                B.e > -1 && (p = 1 / p),
                new w(A ? 1 / p : p);
            y && (p = St(y / D + 2))
        }
        for (d ? (l = new w(.5),
        A && (o.s = 1),
        b = He(o)) : (f = Math.abs(+Q(o)),
        b = f % 2),
        g = new w(i); ; ) {
            if (b) {
                if (g = g.times(B),
                !g.c)
                    break;
                p ? g.c.length > p && (g.c.length = p) : h && (g = g.mod(a))
            }
            if (f) {
                if (f = Ae(f / 2),
                f === 0)
                    break;
                b = f % 2
            } else if (o = o.times(l),
            G(o, o.e + 1, 1),
            o.e > 14)
                b = He(o);
            else {
                if (f = +Q(o),
                f === 0)
                    break;
                b = f % 2
            }
            B = B.times(B),
            p ? B.c && B.c.length > p && (B.c.length = p) : h && (B = B.mod(a))
        }
        return h ? g : (A && (g = i.div(g)),
        a ? g.mod(a) : p ? G(g, y, u, S) : g)
    }
    ,
    s.integerValue = function(o) {
        var a = new w(this);
        return o == null ? o = u : $(o, 0, 8),
        G(a, a.e + 1, o)
    }
    ,
    s.isEqualTo = s.eq = function(o, a) {
        return ye(this, new w(o,a)) === 0
    }
    ,
    s.isFinite = function() {
        return !!this.c
    }
    ,
    s.isGreaterThan = s.gt = function(o, a) {
        return ye(this, new w(o,a)) > 0
    }
    ,
    s.isGreaterThanOrEqualTo = s.gte = function(o, a) {
        return (a = ye(this, new w(o,a))) === 1 || a === 0
    }
    ,
    s.isInteger = function() {
        return !!this.c && pe(this.e / D) > this.c.length - 2
    }
    ,
    s.isLessThan = s.lt = function(o, a) {
        return ye(this, new w(o,a)) < 0
    }
    ,
    s.isLessThanOrEqualTo = s.lte = function(o, a) {
        return (a = ye(this, new w(o,a))) === -1 || a === 0
    }
    ,
    s.isNaN = function() {
        return !this.s
    }
    ,
    s.isNegative = function() {
        return this.s < 0
    }
    ,
    s.isPositive = function() {
        return this.s > 0
    }
    ,
    s.isZero = function() {
        return !!this.c && this.c[0] == 0
    }
    ,
    s.minus = function(o, a) {
        var l, h, f, p, S = this, d = S.s;
        if (o = new w(o,a),
        a = o.s,
        !d || !a)
            return new w(NaN);
        if (d != a)
            return o.s = -a,
            S.plus(o);
        var A = S.e / D
          , b = o.e / D
          , g = S.c
          , B = o.c;
        if (!A || !b) {
            if (!g || !B)
                return g ? (o.s = -a,
                o) : new w(B ? S : NaN);
            if (!g[0] || !B[0])
                return B[0] ? (o.s = -a,
                o) : new w(g[0] ? S : u == 3 ? -0 : 0)
        }
        if (A = pe(A),
        b = pe(b),
        g = g.slice(),
        d = A - b) {
            for ((p = d < 0) ? (d = -d,
            f = g) : (b = A,
            f = B),
            f.reverse(),
            a = d; a--; f.push(0))
                ;
            f.reverse()
        } else
            for (h = (p = (d = g.length) < (a = B.length)) ? d : a,
            d = a = 0; a < h; a++)
                if (g[a] != B[a]) {
                    p = g[a] < B[a];
                    break
                }
        if (p && (f = g,
        g = B,
        B = f,
        o.s = -o.s),
        a = (h = B.length) - (l = g.length),
        a > 0)
            for (; a--; g[l++] = 0)
                ;
        for (a = me - 1; h > d; ) {
            if (g[--h] < B[h]) {
                for (l = h; l && !g[--l]; g[l] = a)
                    ;
                --g[l],
                g[h] += me
            }
            g[h] -= B[h]
        }
        for (; g[0] == 0; g.splice(0, 1),
        --b)
            ;
        return g[0] ? J(o, g, b) : (o.s = u == 3 ? -1 : 1,
        o.c = [o.e = 0],
        o)
    }
    ,
    s.modulo = s.mod = function(o, a) {
        var l, h, f = this;
        return o = new w(o,a),
        !f.c || !o.s || o.c && !o.c[0] ? new w(NaN) : !o.c || f.c && !f.c[0] ? new w(f) : (L == 9 ? (h = o.s,
        o.s = 1,
        l = t(f, o, 0, 3),
        o.s = h,
        l.s *= h) : l = t(f, o, 0, L),
        o = f.minus(l.times(o)),
        !o.c[0] && L == 1 && (o.s = f.s),
        o)
    }
    ,
    s.multipliedBy = s.times = function(o, a) {
        var l, h, f, p, S, d, A, b, g, B, T, k, W, q, X, z = this, K = z.c, se = (o = new w(o,a)).c;
        if (!K || !se || !K[0] || !se[0])
            return !z.s || !o.s || K && !K[0] && !se || se && !se[0] && !K ? o.c = o.e = o.s = null : (o.s *= z.s,
            !K || !se ? o.c = o.e = null : (o.c = [0],
            o.e = 0)),
            o;
        for (h = pe(z.e / D) + pe(o.e / D),
        o.s *= z.s,
        A = K.length,
        B = se.length,
        A < B && (W = K,
        K = se,
        se = W,
        f = A,
        A = B,
        B = f),
        f = A + B,
        W = []; f--; W.push(0))
            ;
        for (q = me,
        X = Ne,
        f = B; --f >= 0; ) {
            for (l = 0,
            T = se[f] % X,
            k = se[f] / X | 0,
            S = A,
            p = f + S; p > f; )
                b = K[--S] % X,
                g = K[S] / X | 0,
                d = k * b + g * T,
                b = T * b + d % X * X + W[p] + l,
                l = (b / q | 0) + (d / X | 0) + k * g,
                W[p--] = b % q;
            W[p] = l
        }
        return l ? ++h : W.splice(0, 1),
        J(o, W, h)
    }
    ,
    s.negated = function() {
        var o = new w(this);
        return o.s = -o.s || null,
        o
    }
    ,
    s.plus = function(o, a) {
        var l, h = this, f = h.s;
        if (o = new w(o,a),
        a = o.s,
        !f || !a)
            return new w(NaN);
        if (f != a)
            return o.s = -a,
            h.minus(o);
        var p = h.e / D
          , S = o.e / D
          , d = h.c
          , A = o.c;
        if (!p || !S) {
            if (!d || !A)
                return new w(f / 0);
            if (!d[0] || !A[0])
                return A[0] ? o : new w(d[0] ? h : f * 0)
        }
        if (p = pe(p),
        S = pe(S),
        d = d.slice(),
        f = p - S) {
            for (f > 0 ? (S = p,
            l = A) : (f = -f,
            l = d),
            l.reverse(); f--; l.push(0))
                ;
            l.reverse()
        }
        for (f = d.length,
        a = A.length,
        f - a < 0 && (l = A,
        A = d,
        d = l,
        a = f),
        f = 0; a; )
            f = (d[--a] = d[a] + A[a] + f) / me | 0,
            d[a] = me === d[a] ? 0 : d[a] % me;
        return f && (d = [f].concat(d),
        ++S),
        J(o, d, S)
    }
    ,
    s.precision = s.sd = function(o, a) {
        var l, h, f, p = this;
        if (o != null && o !== !!o)
            return $(o, 1, ne),
            a == null ? a = u : $(a, 0, 8),
            G(new w(p), o, a);
        if (!(l = p.c))
            return null;
        if (f = l.length - 1,
        h = f * D + 1,
        f = l[f]) {
            for (; f % 10 == 0; f /= 10,
            h--)
                ;
            for (f = l[0]; f >= 10; f /= 10,
            h++)
                ;
        }
        return o && p.e + 1 > h && (h = p.e + 1),
        h
    }
    ,
    s.shiftedBy = function(o) {
        return $(o, -bt, bt),
        this.times("1e" + o)
    }
    ,
    s.squareRoot = s.sqrt = function() {
        var o, a, l, h, f, p = this, S = p.c, d = p.s, A = p.e, b = c + 4, g = new w("0.5");
        if (d !== 1 || !S || !S[0])
            return new w(!d || d < 0 && (!S || S[0]) ? NaN : S ? p : 1 / 0);
        if (d = Math.sqrt(+Q(p)),
        d == 0 || d == 1 / 0 ? (a = he(S),
        (a.length + A) % 2 == 0 && (a += "0"),
        d = Math.sqrt(+a),
        A = pe((A + 1) / 2) - (A < 0 || A % 2),
        d == 1 / 0 ? a = "5e" + A : (a = d.toExponential(),
        a = a.slice(0, a.indexOf("e") + 1) + A),
        l = new w(a)) : l = new w(d + ""),
        l.c[0]) {
            for (A = l.e,
            d = A + b,
            d < 3 && (d = 0); ; )
                if (f = l,
                l = g.times(f.plus(t(p, f, b, 1))),
                he(f.c).slice(0, d) === (a = he(l.c)).slice(0, d))
                    if (l.e < A && --d,
                    a = a.slice(d - 3, d + 1),
                    a == "9999" || !h && a == "4999") {
                        if (!h && (G(f, f.e + c + 2, 0),
                        f.times(f).eq(p))) {
                            l = f;
                            break
                        }
                        b += 4,
                        d += 4,
                        h = 1
                    } else {
                        (!+a || !+a.slice(1) && a.charAt(0) == "5") && (G(l, l.e + c + 2, 1),
                        o = !l.times(l).eq(p));
                        break
                    }
        }
        return G(l, l.e + c + 1, u, o)
    }
    ,
    s.toExponential = function(o, a) {
        return o != null && ($(o, 0, ne),
        o++),
        j(this, o, a, 1)
    }
    ,
    s.toFixed = function(o, a) {
        return o != null && ($(o, 0, ne),
        o = o + this.e + 1),
        j(this, o, a)
    }
    ,
    s.toFormat = function(o, a, l) {
        var h, f = this;
        if (l == null)
            o != null && a && typeof a == "object" ? (l = a,
            a = null) : o && typeof o == "object" ? (l = o,
            o = a = null) : l = I;
        else if (typeof l != "object")
            throw Error(le + "Argument not an object: " + l);
        if (h = f.toFixed(o, a),
        f.c) {
            var p, S = h.split("."), d = +l.groupSize, A = +l.secondaryGroupSize, b = l.groupSeparator || "", g = S[0], B = S[1], T = f.s < 0, k = T ? g.slice(1) : g, W = k.length;
            if (A && (p = d,
            d = A,
            A = p,
            W -= p),
            d > 0 && W > 0) {
                for (p = W % d || d,
                g = k.substr(0, p); p < W; p += d)
                    g += b + k.substr(p, d);
                A > 0 && (g += b + k.slice(p)),
                T && (g = "-" + g)
            }
            h = B ? g + (l.decimalSeparator || "") + ((A = +l.fractionGroupSize) ? B.replace(new RegExp("\\d{" + A + "}\\B","g"), "$&" + (l.fractionGroupSeparator || "")) : B) : g
        }
        return (l.prefix || "") + h + (l.suffix || "")
    }
    ,
    s.toFraction = function(o) {
        var a, l, h, f, p, S, d, A, b, g, B, T, k = this, W = k.c;
        if (o != null && (d = new w(o),
        !d.isInteger() && (d.c || d.s !== 1) || d.lt(i)))
            throw Error(le + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + Q(d));
        if (!W)
            return new w(k);
        for (a = new w(i),
        b = l = new w(i),
        h = A = new w(i),
        T = he(W),
        p = a.e = T.length - k.e - 1,
        a.c[0] = xt[(S = p % D) < 0 ? D + S : S],
        o = !o || d.comparedTo(a) > 0 ? p > 0 ? a : b : d,
        S = v,
        v = 1 / 0,
        d = new w(T),
        A.c[0] = 0; g = t(d, a, 0, 1),
        f = l.plus(g.times(h)),
        f.comparedTo(o) != 1; )
            l = h,
            h = f,
            b = A.plus(g.times(f = b)),
            A = f,
            a = d.minus(g.times(f = a)),
            d = f;
        return f = t(o.minus(l), h, 0, 1),
        A = A.plus(f.times(b)),
        l = l.plus(f.times(h)),
        A.s = b.s = k.s,
        p = p * 2,
        B = t(b, h, p, u).minus(k).abs().comparedTo(t(A, l, p, u).minus(k).abs()) < 1 ? [b, h] : [A, l],
        v = S,
        B
    }
    ,
    s.toNumber = function() {
        return +Q(this)
    }
    ,
    s.toPrecision = function(o, a) {
        return o != null && $(o, 1, ne),
        j(this, o, a, 2)
    }
    ,
    s.toString = function(o) {
        var a, l = this, h = l.s, f = l.e;
        return f === null ? h ? (a = "Infinity",
        h < 0 && (a = "-" + a)) : a = "NaN" : (o == null ? a = f <= E || f >= C ? Qe(he(l.c), f) : Ce(he(l.c), f, "0") : o === 10 && Y ? (l = G(new w(l), c + f + 1, u),
        a = Ce(he(l.c), l.e, "0")) : ($(o, 2, O.length, "Base"),
        a = n(Ce(he(l.c), f, "0"), 10, o, h, !0)),
        h < 0 && l.c[0] && (a = "-" + a)),
        a
    }
    ,
    s.valueOf = s.toJSON = function() {
        return Q(this)
    }
    ,
    s._isBigNumber = !0,
    s[Symbol.toStringTag] = "BigNumber",
    s[Symbol.for("nodejs.util.inspect.custom")] = s.valueOf,
    e != null && w.set(e),
    w
}
function pe(e) {
    var t = e | 0;
    return e > 0 || e === t ? t : t - 1
}
function he(e) {
    for (var t, n, r = 1, s = e.length, i = e[0] + ""; r < s; ) {
        for (t = e[r++] + "",
        n = D - t.length; n--; t = "0" + t)
            ;
        i += t
    }
    for (s = i.length; i.charCodeAt(--s) === 48; )
        ;
    return i.slice(0, s + 1 || 1)
}
function ye(e, t) {
    var n, r, s = e.c, i = t.c, c = e.s, u = t.s, E = e.e, C = t.e;
    if (!c || !u)
        return null;
    if (n = s && !s[0],
    r = i && !i[0],
    n || r)
        return n ? r ? 0 : -u : c;
    if (c != u)
        return c;
    if (n = c < 0,
    r = E == C,
    !s || !i)
        return r ? 0 : !s ^ n ? 1 : -1;
    if (!r)
        return E > C ^ n ? 1 : -1;
    for (u = (E = s.length) < (C = i.length) ? E : C,
    c = 0; c < u; c++)
        if (s[c] != i[c])
            return s[c] > i[c] ^ n ? 1 : -1;
    return E == C ? 0 : E > C ^ n ? 1 : -1
}
function $(e, t, n, r) {
    if (e < t || e > n || e !== Ae(e))
        throw Error(le + (r || "Argument") + (typeof e == "number" ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
}
function He(e) {
    var t = e.c.length - 1;
    return pe(e.e / D) == t && e.c[t] % 2 != 0
}
function Qe(e, t) {
    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
}
function Ce(e, t, n) {
    var r, s;
    if (t < 0) {
        for (s = n + "."; ++t; s += n)
            ;
        e = s + e
    } else if (r = e.length,
    ++t > r) {
        for (s = n,
        t -= r; --t; s += n)
            ;
        e += s
    } else
        t < r && (e = e.slice(0, t) + "." + e.slice(t));
    return e
}
var Ca = pn();
const ae = {
    SBC: "https://sbc.endjgfsv.link",
    ABC: "https://abc.endjgfsv.link",
    GREY: "https://tmapi.endjgfsv.link",
    TEST: "https://tnapi.endjgfsv.link",
    TESTV1: "https://tnv1.endjgfsv.link"
}
  , xr = {
    env: "test",
    sunioLinkUrl: "https://tn.sun.io",
    footer: {
        fileLink: "https://sun.io/docs/",
        sunioHelpCenterLink: "https://sunio.zendesk.com/hc/",
        swapHelpCenterLink: "https://sunswap.zendesk.com/hc/",
        justLink: "https://just.tronscan.io/",
        justSwap: "https://sunswap.com/",
        swapRepurchaseUrl: "https://sunswap.com/#/repurchase",
        centuryMining: "https://sun.io/mining/#/home",
        storage3Link: "https://storage3.btfs.io/#/landing",
        github: "https://github.com/sun-protocol",
        whitePaperMica: "https://sf.sun.io/sun_mica_whitepaper_2025_10_28_1.pdf"
    },
    sunBurnLogHost: ae.TESTV1,
    getBurnLogPath: "/swap/v2/burnLog",
    sunTokenStatHost: ae.TEST,
    sunTokenStat: "/home/sunTokenStat",
    noticeListService: {
        host: ae.TEST,
        path: "/notice/get"
    },
    getAllLiquidityVolumeService: {
        host: ae.TEST,
        path: "/home/getAllLiquidityVolume"
    },
    volumeAllService: {
        host: ae.TEST,
        path: "/home/volumeAll"
    },
    tronscanUrl: "https://nile.tronscan.io",
    chain: {
        privateKey: "0000000000000000000000000000000000000000000000000000000000000001",
        fullHost: "https://api.nileex.io"
    }
}
  , Cr = {
    env: "pre",
    sunioLinkUrl: "https://tm.sun.io",
    footer: {
        fileLink: "https://sun.io/docs/",
        sunioHelpCenterLink: "https://sunio.zendesk.com/hc/",
        swapHelpCenterLink: "https://sunswap.zendesk.com/hc/",
        justLink: "https://just.tronscan.io/",
        justSwap: "https://sunswap.com/",
        swapRepurchaseUrl: "https://sunswap.com/#/repurchase",
        centuryMining: "https://sun.io/mining/#/home",
        storage3Link: "https://storage3.btfs.io/#/landing",
        github: "https://github.com/sun-protocol",
        whitePaperMica: "https://sf.sun.io/sun_mica_whitepaper_2025_10_28_1.pdf"
    },
    sunBurnLogHost: ae.ABC,
    getBurnLogPath: "/swap/v2/burnLog",
    sunTokenStatHost: ae.SBC,
    sunTokenStat: "/home/sunTokenStat",
    noticeListService: {
        host: ae.SBC,
        path: "/notice/get"
    },
    getAllLiquidityVolumeService: {
        host: ae.GREY,
        path: "/home/getAllLiquidityVolume"
    },
    volumeAllService: {
        host: ae.GREY,
        path: "/home/volumeAll"
    },
    tronscanUrl: "https://tronscan.org",
    chain: {
        privateKey: "0000000000000000000000000000000000000000000000000000000000000001",
        fullHost: "https://sunhptg.endjgfsv.link"
    }
}
  , Er = {
    env: "prod",
    sunioLinkUrl: "https://sun.io",
    footer: {
        fileLink: "https://sun.io/docs/",
        sunioHelpCenterLink: "https://sunio.zendesk.com/hc/",
        swapHelpCenterLink: "https://sunswap.zendesk.com/hc/",
        justLink: "https://just.tronscan.io/",
        justSwap: "https://sunswap.com/",
        swapRepurchaseUrl: "https://sunswap.com/#/repurchase",
        centuryMining: "https://sun.io/mining/#/home",
        storage3Link: "https://storage3.btfs.io/#/landing",
        github: "https://github.com/sun-protocol",
        whitePaperMica: "https://sf.sun.io/sun_mica_whitepaper_2025_10_28_1.pdf"
    },
    sunBurnLogHost: ae.ABC,
    getBurnLogPath: "/swap/v2/burnLog",
    sunTokenStatHost: ae.SBC,
    sunTokenStat: "/home/sunTokenStat",
    noticeListService: {
        host: ae.SBC,
        path: "/notice/get"
    },
    getAllLiquidityVolumeService: {
        host: ae.SBC,
        path: "/home/getAllLiquidityVolume"
    },
    volumeAllService: {
        host: ae.SBC,
        path: "/home/volumeAll"
    },
    tronscanUrl: "https://tronscan.org",
    chain: {
        privateKey: "0000000000000000000000000000000000000000000000000000000000000001",
        fullHost: "https://sunhptg.endjgfsv.link"
    }
}
  , Ht = {
    test: xr,
    pre: Cr,
    prod: Er
}
  , Nr = "prod"
  , yr = Nr
  , re = Ht[yr] ?? Ht.prod;
function mn(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: vr} = Object.prototype
  , {getPrototypeOf: Ut} = Object
  , {iterator: lt, toStringTag: gn} = Symbol
  , ut = (e => t => {
    const n = vr.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Se = e => (e = e.toLowerCase(),
t => ut(t) === e)
  , ft = e => t => typeof t === e
  , {isArray: Me} = Array
  , Ue = ft("undefined");
function Fe(e) {
    return e !== null && !Ue(e) && e.constructor !== null && !Ue(e.constructor) && ue(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const wn = Se("ArrayBuffer");
function Br(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wn(e.buffer),
    t
}
const Or = ft("string")
  , ue = ft("function")
  , Sn = ft("number")
  , We = e => e !== null && typeof e == "object"
  , Rr = e => e === !0 || e === !1
  , _e = e => {
    if (ut(e) !== "object")
        return !1;
    const t = Ut(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(gn in e) && !(lt in e)
}
  , Ir = e => {
    if (!We(e) || Fe(e))
        return !1;
    try {
        return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype
    } catch {
        return !1
    }
}
  , jr = Se("Date")
  , kr = Se("File")
  , Ur = Se("Blob")
  , Tr = Se("FileList")
  , Mr = e => We(e) && ue(e.pipe)
  , Lr = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || ue(e.append) && ((t = ut(e)) === "formdata" || t === "object" && ue(e.toString) && e.toString() === "[object FormData]"))
}
  , Pr = Se("URLSearchParams")
  , [Dr,Fr,Wr,Jr] = ["ReadableStream", "Request", "Response", "Headers"].map(Se)
  , zr = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Je(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, s;
    if (typeof e != "object" && (e = [e]),
    Me(e))
        for (r = 0,
        s = e.length; r < s; r++)
            t.call(null, e[r], r, e);
    else {
        if (Fe(e))
            return;
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , c = i.length;
        let u;
        for (r = 0; r < c; r++)
            u = i[r],
            t.call(null, e[u], u, e)
    }
}
function bn(e, t) {
    if (Fe(e))
        return null;
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, s;
    for (; r-- > 0; )
        if (s = n[r],
        t === s.toLowerCase())
            return s;
    return null
}
const ve = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , xn = e => !Ue(e) && e !== ve;
function Rt() {
    const {caseless: e, skipUndefined: t} = xn(this) && this || {}
      , n = {}
      , r = (s, i) => {
        const c = e && bn(n, i) || i;
        _e(n[c]) && _e(s) ? n[c] = Rt(n[c], s) : _e(s) ? n[c] = Rt({}, s) : Me(s) ? n[c] = s.slice() : (!t || !Ue(s)) && (n[c] = s)
    }
    ;
    for (let s = 0, i = arguments.length; s < i; s++)
        arguments[s] && Je(arguments[s], r);
    return n
}
const Yr = (e, t, n, {allOwnKeys: r}={}) => (Je(t, (s, i) => {
    n && ue(s) ? e[i] = mn(s, n) : e[i] = s
}
, {
    allOwnKeys: r
}),
e)
  , Gr = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , Hr = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , Qr = (e, t, n, r) => {
    let s, i, c;
    const u = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (s = Object.getOwnPropertyNames(e),
        i = s.length; i-- > 0; )
            c = s[i],
            (!r || r(c, e, t)) && !u[c] && (t[c] = e[c],
            u[c] = !0);
        e = n !== !1 && Ut(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , Vr = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , Kr = e => {
    if (!e)
        return null;
    if (Me(e))
        return e;
    let t = e.length;
    if (!Sn(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , qr = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Ut(Uint8Array))
  , _r = (e, t) => {
    const r = (e && e[lt]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
        const i = s.value;
        t.call(e, i[0], i[1])
    }
}
  , Xr = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , Zr = Se("HTMLFormElement")
  , $r = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
    return r.toUpperCase() + s
})
  , Qt = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , es = Se("RegExp")
  , Cn = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    Je(n, (s, i) => {
        let c;
        (c = t(s, i, e)) !== !1 && (r[i] = c || s)
    }
    ),
    Object.defineProperties(e, r)
}
  , ts = e => {
    Cn(e, (t, n) => {
        if (ue(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (ue(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , ns = (e, t) => {
    const n = {}
      , r = s => {
        s.forEach(i => {
            n[i] = !0
        }
        )
    }
    ;
    return Me(e) ? r(e) : r(String(e).split(t)),
    n
}
  , rs = () => {}
  , ss = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function os(e) {
    return !!(e && ue(e.append) && e[gn] === "FormData" && e[lt])
}
const is = e => {
    const t = new Array(10)
      , n = (r, s) => {
        if (We(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (Fe(r))
                return r;
            if (!("toJSON"in r)) {
                t[s] = r;
                const i = Me(r) ? [] : {};
                return Je(r, (c, u) => {
                    const E = n(c, s + 1);
                    !Ue(E) && (i[u] = E)
                }
                ),
                t[s] = void 0,
                i
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , as = Se("AsyncFunction")
  , cs = e => e && (We(e) || ue(e)) && ue(e.then) && ue(e.catch)
  , En = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (ve.addEventListener("message", ({source: s, data: i}) => {
    s === ve && i === n && r.length && r.shift()()
}
, !1),
s => {
    r.push(s),
    ve.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", ue(ve.postMessage))
  , ls = typeof queueMicrotask < "u" ? queueMicrotask.bind(ve) : typeof process < "u" && process.nextTick || En
  , us = e => e != null && ue(e[lt])
  , x = {
    isArray: Me,
    isArrayBuffer: wn,
    isBuffer: Fe,
    isFormData: Lr,
    isArrayBufferView: Br,
    isString: Or,
    isNumber: Sn,
    isBoolean: Rr,
    isObject: We,
    isPlainObject: _e,
    isEmptyObject: Ir,
    isReadableStream: Dr,
    isRequest: Fr,
    isResponse: Wr,
    isHeaders: Jr,
    isUndefined: Ue,
    isDate: jr,
    isFile: kr,
    isBlob: Ur,
    isRegExp: es,
    isFunction: ue,
    isStream: Mr,
    isURLSearchParams: Pr,
    isTypedArray: qr,
    isFileList: Tr,
    forEach: Je,
    merge: Rt,
    extend: Yr,
    trim: zr,
    stripBOM: Gr,
    inherits: Hr,
    toFlatObject: Qr,
    kindOf: ut,
    kindOfTest: Se,
    endsWith: Vr,
    toArray: Kr,
    forEachEntry: _r,
    matchAll: Xr,
    isHTMLForm: Zr,
    hasOwnProperty: Qt,
    hasOwnProp: Qt,
    reduceDescriptors: Cn,
    freezeMethods: ts,
    toObjectSet: ns,
    toCamelCase: $r,
    noop: rs,
    toFiniteNumber: ss,
    findKey: bn,
    global: ve,
    isContextDefined: xn,
    isSpecCompliantForm: os,
    toJSONObject: is,
    isAsyncFn: as,
    isThenable: cs,
    setImmediate: En,
    asap: ls,
    isIterable: us
};
function F(e, t, n, r, s) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s,
    this.status = s.status ? s.status : null)
}
x.inherits(F, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: x.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Nn = F.prototype
  , yn = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    yn[e] = {
        value: e
    }
}
);
Object.defineProperties(F, yn);
Object.defineProperty(Nn, "isAxiosError", {
    value: !0
});
F.from = (e, t, n, r, s, i) => {
    const c = Object.create(Nn);
    x.toFlatObject(e, c, function(N) {
        return N !== Error.prototype
    }, C => C !== "isAxiosError");
    const u = e && e.message ? e.message : "Error"
      , E = t == null && e ? e.code : t;
    return F.call(c, u, E, n, r, s),
    e && c.cause == null && Object.defineProperty(c, "cause", {
        value: e,
        configurable: !0
    }),
    c.name = e && e.name || "Error",
    i && Object.assign(c, i),
    c
}
;
const fs = null;
function It(e) {
    return x.isPlainObject(e) || x.isArray(e)
}
function vn(e) {
    return x.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Vt(e, t, n) {
    return e ? e.concat(t).map(function(s, i) {
        return s = vn(s),
        !n && i ? "[" + s + "]" : s
    }).join(n ? "." : "") : t
}
function ds(e) {
    return x.isArray(e) && !e.some(It)
}
const hs = x.toFlatObject(x, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function dt(e, t, n) {
    if (!x.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = x.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(I, O) {
        return !x.isUndefined(O[I])
    });
    const r = n.metaTokens
      , s = n.visitor || N
      , i = n.dots
      , c = n.indexes
      , E = (n.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(t);
    if (!x.isFunction(s))
        throw new TypeError("visitor must be a function");
    function C(y) {
        if (y === null)
            return "";
        if (x.isDate(y))
            return y.toISOString();
        if (x.isBoolean(y))
            return y.toString();
        if (!E && x.isBlob(y))
            throw new F("Blob is not supported. Use a Buffer instead.");
        return x.isArrayBuffer(y) || x.isTypedArray(y) ? E && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y
    }
    function N(y, I, O) {
        let Y = y;
        if (y && !O && typeof y == "object") {
            if (x.endsWith(I, "{}"))
                I = r ? I : I.slice(0, -2),
                y = JSON.stringify(y);
            else if (x.isArray(y) && ds(y) || (x.isFileList(y) || x.endsWith(I, "[]")) && (Y = x.toArray(y)))
                return I = vn(I),
                Y.forEach(function(j, U) {
                    !(x.isUndefined(j) || j === null) && t.append(c === !0 ? Vt([I], U, i) : c === null ? I : I + "[]", C(j))
                }),
                !1
        }
        return It(y) ? !0 : (t.append(Vt(O, I, i), C(y)),
        !1)
    }
    const v = []
      , R = Object.assign(hs, {
        defaultVisitor: N,
        convertValue: C,
        isVisitable: It
    });
    function L(y, I) {
        if (!x.isUndefined(y)) {
            if (v.indexOf(y) !== -1)
                throw Error("Circular reference detected in " + I.join("."));
            v.push(y),
            x.forEach(y, function(Y, w) {
                (!(x.isUndefined(Y) || Y === null) && s.call(t, Y, x.isString(w) ? w.trim() : w, I, R)) === !0 && L(Y, I ? I.concat(w) : [w])
            }),
            v.pop()
        }
    }
    if (!x.isObject(e))
        throw new TypeError("data must be an object");
    return L(e),
    t
}
function Kt(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function Tt(e, t) {
    this._pairs = [],
    e && dt(e, this, t)
}
const Bn = Tt.prototype;
Bn.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Bn.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Kt)
    }
    : Kt;
    return this._pairs.map(function(s) {
        return n(s[0]) + "=" + n(s[1])
    }, "").join("&")
}
;
function As(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function On(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || As;
    x.isFunction(n) && (n = {
        serialize: n
    });
    const s = n && n.serialize;
    let i;
    if (s ? i = s(t, n) : i = x.isURLSearchParams(t) ? t.toString() : new Tt(t,n).toString(r),
    i) {
        const c = e.indexOf("#");
        c !== -1 && (e = e.slice(0, c)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + i
    }
    return e
}
class qt {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        x.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Rn = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , ps = typeof URLSearchParams < "u" ? URLSearchParams : Tt
  , ms = typeof FormData < "u" ? FormData : null
  , gs = typeof Blob < "u" ? Blob : null
  , ws = {
    isBrowser: !0,
    classes: {
        URLSearchParams: ps,
        FormData: ms,
        Blob: gs
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Mt = typeof window < "u" && typeof document < "u"
  , jt = typeof navigator == "object" && navigator || void 0
  , Ss = Mt && (!jt || ["ReactNative", "NativeScript", "NS"].indexOf(jt.product) < 0)
  , bs = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , xs = Mt && window.location.href || "http://localhost"
  , Cs = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Mt,
    hasStandardBrowserEnv: Ss,
    hasStandardBrowserWebWorkerEnv: bs,
    navigator: jt,
    origin: xs
}, Symbol.toStringTag, {
    value: "Module"
}))
  , oe = {
    ...Cs,
    ...ws
};
function Es(e, t) {
    return dt(e, new oe.classes.URLSearchParams, {
        visitor: function(n, r, s, i) {
            return oe.isNode && x.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : i.defaultVisitor.apply(this, arguments)
        },
        ...t
    })
}
function Ns(e) {
    return x.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function ys(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const s = n.length;
    let i;
    for (r = 0; r < s; r++)
        i = n[r],
        t[i] = e[i];
    return t
}
function In(e) {
    function t(n, r, s, i) {
        let c = n[i++];
        if (c === "__proto__")
            return !0;
        const u = Number.isFinite(+c)
          , E = i >= n.length;
        return c = !c && x.isArray(s) ? s.length : c,
        E ? (x.hasOwnProp(s, c) ? s[c] = [s[c], r] : s[c] = r,
        !u) : ((!s[c] || !x.isObject(s[c])) && (s[c] = []),
        t(n, r, s[c], i) && x.isArray(s[c]) && (s[c] = ys(s[c])),
        !u)
    }
    if (x.isFormData(e) && x.isFunction(e.entries)) {
        const n = {};
        return x.forEachEntry(e, (r, s) => {
            t(Ns(r), s, n, 0)
        }
        ),
        n
    }
    return null
}
function vs(e, t, n) {
    if (x.isString(e))
        try {
            return (t || JSON.parse)(e),
            x.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const ze = {
    transitional: Rn,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , s = r.indexOf("application/json") > -1
          , i = x.isObject(t);
        if (i && x.isHTMLForm(t) && (t = new FormData(t)),
        x.isFormData(t))
            return s ? JSON.stringify(In(t)) : t;
        if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t) || x.isReadableStream(t))
            return t;
        if (x.isArrayBufferView(t))
            return t.buffer;
        if (x.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let u;
        if (i) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Es(t, this.formSerializer).toString();
            if ((u = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const E = this.env && this.env.FormData;
                return dt(u ? {
                    "files[]": t
                } : t, E && new E, this.formSerializer)
            }
        }
        return i || s ? (n.setContentType("application/json", !1),
        vs(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || ze.transitional
          , r = n && n.forcedJSONParsing
          , s = this.responseType === "json";
        if (x.isResponse(t) || x.isReadableStream(t))
            return t;
        if (t && x.isString(t) && (r && !this.responseType || s)) {
            const c = !(n && n.silentJSONParsing) && s;
            try {
                return JSON.parse(t, this.parseReviver)
            } catch (u) {
                if (c)
                    throw u.name === "SyntaxError" ? F.from(u, F.ERR_BAD_RESPONSE, this, null, this.response) : u
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: oe.classes.FormData,
        Blob: oe.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    ze.headers[e] = {}
}
);
const Bs = x.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , Os = e => {
    const t = {};
    let n, r, s;
    return e && e.split(`
`).forEach(function(c) {
        s = c.indexOf(":"),
        n = c.substring(0, s).trim().toLowerCase(),
        r = c.substring(s + 1).trim(),
        !(!n || t[n] && Bs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , _t = Symbol("internals");
function De(e) {
    return e && String(e).trim().toLowerCase()
}
function Xe(e) {
    return e === !1 || e == null ? e : x.isArray(e) ? e.map(Xe) : String(e)
}
function Rs(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const Is = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ct(e, t, n, r, s) {
    if (x.isFunction(r))
        return r.call(this, t, n);
    if (s && (t = n),
    !!x.isString(t)) {
        if (x.isString(r))
            return t.indexOf(r) !== -1;
        if (x.isRegExp(r))
            return r.test(t)
    }
}
function js(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function ks(e, t) {
    const n = x.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(s, i, c) {
                return this[r].call(this, t, s, i, c)
            },
            configurable: !0
        })
    }
    )
}
let fe = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const s = this;
        function i(u, E, C) {
            const N = De(E);
            if (!N)
                throw new Error("header name must be a non-empty string");
            const v = x.findKey(s, N);
            (!v || s[v] === void 0 || C === !0 || C === void 0 && s[v] !== !1) && (s[v || E] = Xe(u))
        }
        const c = (u, E) => x.forEach(u, (C, N) => i(C, N, E));
        if (x.isPlainObject(t) || t instanceof this.constructor)
            c(t, n);
        else if (x.isString(t) && (t = t.trim()) && !Is(t))
            c(Os(t), n);
        else if (x.isObject(t) && x.isIterable(t)) {
            let u = {}, E, C;
            for (const N of t) {
                if (!x.isArray(N))
                    throw TypeError("Object iterator must return a key-value pair");
                u[C = N[0]] = (E = u[C]) ? x.isArray(E) ? [...E, N[1]] : [E, N[1]] : N[1]
            }
            c(u, n)
        } else
            t != null && i(n, t, r);
        return this
    }
    get(t, n) {
        if (t = De(t),
        t) {
            const r = x.findKey(this, t);
            if (r) {
                const s = this[r];
                if (!n)
                    return s;
                if (n === !0)
                    return Rs(s);
                if (x.isFunction(n))
                    return n.call(this, s, r);
                if (x.isRegExp(n))
                    return n.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = De(t),
        t) {
            const r = x.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Ct(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let s = !1;
        function i(c) {
            if (c = De(c),
            c) {
                const u = x.findKey(r, c);
                u && (!n || Ct(r, r[u], u, n)) && (delete r[u],
                s = !0)
            }
        }
        return x.isArray(t) ? t.forEach(i) : i(t),
        s
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , s = !1;
        for (; r--; ) {
            const i = n[r];
            (!t || Ct(this, this[i], i, t, !0)) && (delete this[i],
            s = !0)
        }
        return s
    }
    normalize(t) {
        const n = this
          , r = {};
        return x.forEach(this, (s, i) => {
            const c = x.findKey(r, i);
            if (c) {
                n[c] = Xe(s),
                delete n[i];
                return
            }
            const u = t ? js(i) : String(i).trim();
            u !== i && delete n[i],
            n[u] = Xe(s),
            r[u] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return x.forEach(this, (r, s) => {
            r != null && r !== !1 && (n[s] = t && x.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(s => r.set(s)),
        r
    }
    static accessor(t) {
        const r = (this[_t] = this[_t] = {
            accessors: {}
        }).accessors
          , s = this.prototype;
        function i(c) {
            const u = De(c);
            r[u] || (ks(s, c),
            r[u] = !0)
        }
        return x.isArray(t) ? t.forEach(i) : i(t),
        this
    }
}
;
fe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(fe.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
x.freezeMethods(fe);
function Et(e, t) {
    const n = this || ze
      , r = t || n
      , s = fe.from(r.headers);
    let i = r.data;
    return x.forEach(e, function(u) {
        i = u.call(n, i, s.normalize(), t ? t.status : void 0)
    }),
    s.normalize(),
    i
}
function jn(e) {
    return !!(e && e.__CANCEL__)
}
function Le(e, t, n) {
    F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
x.inherits(Le, F, {
    __CANCEL__: !0
});
function kn(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new F("Request failed with status code " + n.status,[F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function Us(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Ts(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let s = 0, i = 0, c;
    return t = t !== void 0 ? t : 1e3,
    function(E) {
        const C = Date.now()
          , N = r[i];
        c || (c = C),
        n[s] = E,
        r[s] = C;
        let v = i
          , R = 0;
        for (; v !== s; )
            R += n[v++],
            v = v % e;
        if (s = (s + 1) % e,
        s === i && (i = (i + 1) % e),
        C - c < t)
            return;
        const L = N && C - N;
        return L ? Math.round(R * 1e3 / L) : void 0
    }
}
function Ms(e, t) {
    let n = 0, r = 1e3 / t, s, i;
    const c = (C, N=Date.now()) => {
        n = N,
        s = null,
        i && (clearTimeout(i),
        i = null),
        e(...C)
    }
    ;
    return [ (...C) => {
        const N = Date.now()
          , v = N - n;
        v >= r ? c(C, N) : (s = C,
        i || (i = setTimeout( () => {
            i = null,
            c(s)
        }
        , r - v)))
    }
    , () => s && c(s)]
}
const et = (e, t, n=3) => {
    let r = 0;
    const s = Ts(50, 250);
    return Ms(i => {
        const c = i.loaded
          , u = i.lengthComputable ? i.total : void 0
          , E = c - r
          , C = s(E)
          , N = c <= u;
        r = c;
        const v = {
            loaded: c,
            total: u,
            progress: u ? c / u : void 0,
            bytes: E,
            rate: C || void 0,
            estimated: C && u && N ? (u - c) / C : void 0,
            event: i,
            lengthComputable: u != null,
            [t ? "download" : "upload"]: !0
        };
        e(v)
    }
    , n)
}
  , Xt = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , Zt = e => (...t) => x.asap( () => e(...t))
  , Ls = oe.hasStandardBrowserEnv ? ( (e, t) => n => (n = new URL(n,oe.origin),
e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(oe.origin), oe.navigator && /(msie|trident)/i.test(oe.navigator.userAgent)) : () => !0
  , Ps = oe.hasStandardBrowserEnv ? {
    write(e, t, n, r, s, i, c) {
        if (typeof document > "u")
            return;
        const u = [`${e}=${encodeURIComponent(t)}`];
        x.isNumber(n) && u.push(`expires=${new Date(n).toUTCString()}`),
        x.isString(r) && u.push(`path=${r}`),
        x.isString(s) && u.push(`domain=${s}`),
        i === !0 && u.push("secure"),
        x.isString(c) && u.push(`SameSite=${c}`),
        document.cookie = u.join("; ")
    },
    read(e) {
        if (typeof document > "u")
            return null;
        const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
        return t ? decodeURIComponent(t[1]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5, "/")
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function Ds(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Fs(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Un(e, t, n) {
    let r = !Ds(t);
    return e && (r || n == !1) ? Fs(e, t) : t
}
const $t = e => e instanceof fe ? {
    ...e
} : e;
function Ie(e, t) {
    t = t || {};
    const n = {};
    function r(C, N, v, R) {
        return x.isPlainObject(C) && x.isPlainObject(N) ? x.merge.call({
            caseless: R
        }, C, N) : x.isPlainObject(N) ? x.merge({}, N) : x.isArray(N) ? N.slice() : N
    }
    function s(C, N, v, R) {
        if (x.isUndefined(N)) {
            if (!x.isUndefined(C))
                return r(void 0, C, v, R)
        } else
            return r(C, N, v, R)
    }
    function i(C, N) {
        if (!x.isUndefined(N))
            return r(void 0, N)
    }
    function c(C, N) {
        if (x.isUndefined(N)) {
            if (!x.isUndefined(C))
                return r(void 0, C)
        } else
            return r(void 0, N)
    }
    function u(C, N, v) {
        if (v in t)
            return r(C, N);
        if (v in e)
            return r(void 0, C)
    }
    const E = {
        url: i,
        method: i,
        data: i,
        baseURL: c,
        transformRequest: c,
        transformResponse: c,
        paramsSerializer: c,
        timeout: c,
        timeoutMessage: c,
        withCredentials: c,
        withXSRFToken: c,
        adapter: c,
        responseType: c,
        xsrfCookieName: c,
        xsrfHeaderName: c,
        onUploadProgress: c,
        onDownloadProgress: c,
        decompress: c,
        maxContentLength: c,
        maxBodyLength: c,
        beforeRedirect: c,
        transport: c,
        httpAgent: c,
        httpsAgent: c,
        cancelToken: c,
        socketPath: c,
        responseEncoding: c,
        validateStatus: u,
        headers: (C, N, v) => s($t(C), $t(N), v, !0)
    };
    return x.forEach(Object.keys({
        ...e,
        ...t
    }), function(N) {
        const v = E[N] || s
          , R = v(e[N], t[N], N);
        x.isUndefined(R) && v !== u || (n[N] = R)
    }),
    n
}
const Tn = e => {
    const t = Ie({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: c, auth: u} = t;
    if (t.headers = c = fe.from(c),
    t.url = On(Un(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer),
    u && c.set("Authorization", "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))),
    x.isFormData(n)) {
        if (oe.hasStandardBrowserEnv || oe.hasStandardBrowserWebWorkerEnv)
            c.setContentType(void 0);
        else if (x.isFunction(n.getHeaders)) {
            const E = n.getHeaders()
              , C = ["content-type", "content-length"];
            Object.entries(E).forEach( ([N,v]) => {
                C.includes(N.toLowerCase()) && c.set(N, v)
            }
            )
        }
    }
    if (oe.hasStandardBrowserEnv && (r && x.isFunction(r) && (r = r(t)),
    r || r !== !1 && Ls(t.url))) {
        const E = s && i && Ps.read(i);
        E && c.set(s, E)
    }
    return t
}
  , Ws = typeof XMLHttpRequest < "u"
  , Js = Ws && function(e) {
    return new Promise(function(n, r) {
        const s = Tn(e);
        let i = s.data;
        const c = fe.from(s.headers).normalize();
        let {responseType: u, onUploadProgress: E, onDownloadProgress: C} = s, N, v, R, L, y;
        function I() {
            L && L(),
            y && y(),
            s.cancelToken && s.cancelToken.unsubscribe(N),
            s.signal && s.signal.removeEventListener("abort", N)
        }
        let O = new XMLHttpRequest;
        O.open(s.method.toUpperCase(), s.url, !0),
        O.timeout = s.timeout;
        function Y() {
            if (!O)
                return;
            const j = fe.from("getAllResponseHeaders"in O && O.getAllResponseHeaders())
              , J = {
                data: !u || u === "text" || u === "json" ? O.responseText : O.response,
                status: O.status,
                statusText: O.statusText,
                headers: j,
                config: e,
                request: O
            };
            kn(function(Q) {
                n(Q),
                I()
            }, function(Q) {
                r(Q),
                I()
            }, J),
            O = null
        }
        "onloadend"in O ? O.onloadend = Y : O.onreadystatechange = function() {
            !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(Y)
        }
        ,
        O.onabort = function() {
            O && (r(new F("Request aborted",F.ECONNABORTED,e,O)),
            O = null)
        }
        ,
        O.onerror = function(U) {
            const J = U && U.message ? U.message : "Network Error"
              , G = new F(J,F.ERR_NETWORK,e,O);
            G.event = U || null,
            r(G),
            O = null
        }
        ,
        O.ontimeout = function() {
            let U = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
            const J = s.transitional || Rn;
            s.timeoutErrorMessage && (U = s.timeoutErrorMessage),
            r(new F(U,J.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,e,O)),
            O = null
        }
        ,
        i === void 0 && c.setContentType(null),
        "setRequestHeader"in O && x.forEach(c.toJSON(), function(U, J) {
            O.setRequestHeader(J, U)
        }),
        x.isUndefined(s.withCredentials) || (O.withCredentials = !!s.withCredentials),
        u && u !== "json" && (O.responseType = s.responseType),
        C && ([R,y] = et(C, !0),
        O.addEventListener("progress", R)),
        E && O.upload && ([v,L] = et(E),
        O.upload.addEventListener("progress", v),
        O.upload.addEventListener("loadend", L)),
        (s.cancelToken || s.signal) && (N = j => {
            O && (r(!j || j.type ? new Le(null,e,O) : j),
            O.abort(),
            O = null)
        }
        ,
        s.cancelToken && s.cancelToken.subscribe(N),
        s.signal && (s.signal.aborted ? N() : s.signal.addEventListener("abort", N)));
        const w = Us(s.url);
        if (w && oe.protocols.indexOf(w) === -1) {
            r(new F("Unsupported protocol " + w + ":",F.ERR_BAD_REQUEST,e));
            return
        }
        O.send(i || null)
    }
    )
}
  , zs = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, s;
        const i = function(C) {
            if (!s) {
                s = !0,
                u();
                const N = C instanceof Error ? C : this.reason;
                r.abort(N instanceof F ? N : new Le(N instanceof Error ? N.message : N))
            }
        };
        let c = t && setTimeout( () => {
            c = null,
            i(new F(`timeout ${t} of ms exceeded`,F.ETIMEDOUT))
        }
        , t);
        const u = () => {
            e && (c && clearTimeout(c),
            c = null,
            e.forEach(C => {
                C.unsubscribe ? C.unsubscribe(i) : C.removeEventListener("abort", i)
            }
            ),
            e = null)
        }
        ;
        e.forEach(C => C.addEventListener("abort", i));
        const {signal: E} = r;
        return E.unsubscribe = () => x.asap(u),
        E
    }
}
  , Ys = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let r = 0, s;
    for (; r < n; )
        s = r + t,
        yield e.slice(r, s),
        r = s
}
  , Gs = async function*(e, t) {
    for await(const n of Hs(e))
        yield*Ys(n, t)
}
  , Hs = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , en = (e, t, n, r) => {
    const s = Gs(e, t);
    let i = 0, c, u = E => {
        c || (c = !0,
        r && r(E))
    }
    ;
    return new ReadableStream({
        async pull(E) {
            try {
                const {done: C, value: N} = await s.next();
                if (C) {
                    u(),
                    E.close();
                    return
                }
                let v = N.byteLength;
                if (n) {
                    let R = i += v;
                    n(R)
                }
                E.enqueue(new Uint8Array(N))
            } catch (C) {
                throw u(C),
                C
            }
        },
        cancel(E) {
            return u(E),
            s.return()
        }
    },{
        highWaterMark: 2
    })
}
  , tn = 64 * 1024
  , {isFunction: Ve} = x
  , Qs = ( ({Request: e, Response: t}) => ({
    Request: e,
    Response: t
}))(x.global)
  , {ReadableStream: nn, TextEncoder: rn} = x.global
  , sn = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , Vs = e => {
    e = x.merge.call({
        skipUndefined: !0
    }, Qs, e);
    const {fetch: t, Request: n, Response: r} = e
      , s = t ? Ve(t) : typeof fetch == "function"
      , i = Ve(n)
      , c = Ve(r);
    if (!s)
        return !1;
    const u = s && Ve(nn)
      , E = s && (typeof rn == "function" ? (y => I => y.encode(I))(new rn) : async y => new Uint8Array(await new n(y).arrayBuffer()))
      , C = i && u && sn( () => {
        let y = !1;
        const I = new n(oe.origin,{
            body: new nn,
            method: "POST",
            get duplex() {
                return y = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return y && !I
    }
    )
      , N = c && u && sn( () => x.isReadableStream(new r("").body))
      , v = {
        stream: N && (y => y.body)
    };
    s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(y => {
        !v[y] && (v[y] = (I, O) => {
            let Y = I && I[y];
            if (Y)
                return Y.call(I);
            throw new F(`Response type '${y}' is not supported`,F.ERR_NOT_SUPPORT,O)
        }
        )
    }
    );
    const R = async y => {
        if (y == null)
            return 0;
        if (x.isBlob(y))
            return y.size;
        if (x.isSpecCompliantForm(y))
            return (await new n(oe.origin,{
                method: "POST",
                body: y
            }).arrayBuffer()).byteLength;
        if (x.isArrayBufferView(y) || x.isArrayBuffer(y))
            return y.byteLength;
        if (x.isURLSearchParams(y) && (y = y + ""),
        x.isString(y))
            return (await E(y)).byteLength
    }
      , L = async (y, I) => {
        const O = x.toFiniteNumber(y.getContentLength());
        return O ?? R(I)
    }
    ;
    return async y => {
        let {url: I, method: O, data: Y, signal: w, cancelToken: j, timeout: U, onDownloadProgress: J, onUploadProgress: G, responseType: Q, headers: o, withCredentials: a="same-origin", fetchOptions: l} = Tn(y)
          , h = t || fetch;
        Q = Q ? (Q + "").toLowerCase() : "text";
        let f = zs([w, j && j.toAbortSignal()], U)
          , p = null;
        const S = f && f.unsubscribe && ( () => {
            f.unsubscribe()
        }
        );
        let d;
        try {
            if (G && C && O !== "get" && O !== "head" && (d = await L(o, Y)) !== 0) {
                let k = new n(I,{
                    method: "POST",
                    body: Y,
                    duplex: "half"
                }), W;
                if (x.isFormData(Y) && (W = k.headers.get("content-type")) && o.setContentType(W),
                k.body) {
                    const [q,X] = Xt(d, et(Zt(G)));
                    Y = en(k.body, tn, q, X)
                }
            }
            x.isString(a) || (a = a ? "include" : "omit");
            const A = i && "credentials"in n.prototype
              , b = {
                ...l,
                signal: f,
                method: O.toUpperCase(),
                headers: o.normalize().toJSON(),
                body: Y,
                duplex: "half",
                credentials: A ? a : void 0
            };
            p = i && new n(I,b);
            let g = await (i ? h(p, l) : h(I, b));
            const B = N && (Q === "stream" || Q === "response");
            if (N && (J || B && S)) {
                const k = {};
                ["status", "statusText", "headers"].forEach(z => {
                    k[z] = g[z]
                }
                );
                const W = x.toFiniteNumber(g.headers.get("content-length"))
                  , [q,X] = J && Xt(W, et(Zt(J), !0)) || [];
                g = new r(en(g.body, tn, q, () => {
                    X && X(),
                    S && S()
                }
                ),k)
            }
            Q = Q || "text";
            let T = await v[x.findKey(v, Q) || "text"](g, y);
            return !B && S && S(),
            await new Promise( (k, W) => {
                kn(k, W, {
                    data: T,
                    headers: fe.from(g.headers),
                    status: g.status,
                    statusText: g.statusText,
                    config: y,
                    request: p
                })
            }
            )
        } catch (A) {
            throw S && S(),
            A && A.name === "TypeError" && /Load failed|fetch/i.test(A.message) ? Object.assign(new F("Network Error",F.ERR_NETWORK,y,p), {
                cause: A.cause || A
            }) : F.from(A, A && A.code, y, p)
        }
    }
}
  , Ks = new Map
  , Mn = e => {
    let t = e && e.env || {};
    const {fetch: n, Request: r, Response: s} = t
      , i = [r, s, n];
    let c = i.length, u = c, E, C, N = Ks;
    for (; u--; )
        E = i[u],
        C = N.get(E),
        C === void 0 && N.set(E, C = u ? new Map : Vs(t)),
        N = C;
    return C
}
;
Mn();
const Lt = {
    http: fs,
    xhr: Js,
    fetch: {
        get: Mn
    }
};
x.forEach(Lt, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const on = e => `- ${e}`
  , qs = e => x.isFunction(e) || e === null || e === !1;
function _s(e, t) {
    e = x.isArray(e) ? e : [e];
    const {length: n} = e;
    let r, s;
    const i = {};
    for (let c = 0; c < n; c++) {
        r = e[c];
        let u;
        if (s = r,
        !qs(r) && (s = Lt[(u = String(r)).toLowerCase()],
        s === void 0))
            throw new F(`Unknown adapter '${u}'`);
        if (s && (x.isFunction(s) || (s = s.get(t))))
            break;
        i[u || "#" + c] = s
    }
    if (!s) {
        const c = Object.entries(i).map( ([E,C]) => `adapter ${E} ` + (C === !1 ? "is not supported by the environment" : "is not available in the build"));
        let u = n ? c.length > 1 ? `since :
` + c.map(on).join(`
`) : " " + on(c[0]) : "as no adapter specified";
        throw new F("There is no suitable adapter to dispatch the request " + u,"ERR_NOT_SUPPORT")
    }
    return s
}
const Ln = {
    getAdapter: _s,
    adapters: Lt
};
function Nt(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new Le(null,e)
}
function an(e) {
    return Nt(e),
    e.headers = fe.from(e.headers),
    e.data = Et.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ln.getAdapter(e.adapter || ze.adapter, e)(e).then(function(r) {
        return Nt(e),
        r.data = Et.call(e, e.transformResponse, r),
        r.headers = fe.from(r.headers),
        r
    }, function(r) {
        return jn(r) || (Nt(e),
        r && r.response && (r.response.data = Et.call(e, e.transformResponse, r.response),
        r.response.headers = fe.from(r.response.headers))),
        Promise.reject(r)
    })
}
const Pn = "1.13.2"
  , ht = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    ht[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const cn = {};
ht.transitional = function(t, n, r) {
    function s(i, c) {
        return "[Axios v" + Pn + "] Transitional option '" + i + "'" + c + (r ? ". " + r : "")
    }
    return (i, c, u) => {
        if (t === !1)
            throw new F(s(c, " has been removed" + (n ? " in " + n : "")),F.ERR_DEPRECATED);
        return n && !cn[c] && (cn[c] = !0,
        console.warn(s(c, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(i, c, u) : !0
    }
}
;
ht.spelling = function(t) {
    return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`),
    !0)
}
;
function Xs(e, t, n) {
    if (typeof e != "object")
        throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0; ) {
        const i = r[s]
          , c = t[i];
        if (c) {
            const u = e[i]
              , E = u === void 0 || c(u, i, e);
            if (E !== !0)
                throw new F("option " + i + " must be " + E,F.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new F("Unknown option " + i,F.ERR_BAD_OPTION)
    }
}
const Ze = {
    assertOptions: Xs,
    validators: ht
}
  , xe = Ze.validators;
let Oe = class {
    constructor(t) {
        this.defaults = t || {},
        this.interceptors = {
            request: new qt,
            response: new qt
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let s = {};
                Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error;
                const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Ie(this.defaults, n);
        const {transitional: r, paramsSerializer: s, headers: i} = n;
        r !== void 0 && Ze.assertOptions(r, {
            silentJSONParsing: xe.transitional(xe.boolean),
            forcedJSONParsing: xe.transitional(xe.boolean),
            clarifyTimeoutError: xe.transitional(xe.boolean)
        }, !1),
        s != null && (x.isFunction(s) ? n.paramsSerializer = {
            serialize: s
        } : Ze.assertOptions(s, {
            encode: xe.function,
            serialize: xe.function
        }, !0)),
        n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0),
        Ze.assertOptions(n, {
            baseUrl: xe.spelling("baseURL"),
            withXsrfToken: xe.spelling("withXSRFToken")
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let c = i && x.merge(i.common, i[n.method]);
        i && x.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => {
            delete i[y]
        }
        ),
        n.headers = fe.concat(c, i);
        const u = [];
        let E = !0;
        this.interceptors.request.forEach(function(I) {
            typeof I.runWhen == "function" && I.runWhen(n) === !1 || (E = E && I.synchronous,
            u.unshift(I.fulfilled, I.rejected))
        });
        const C = [];
        this.interceptors.response.forEach(function(I) {
            C.push(I.fulfilled, I.rejected)
        });
        let N, v = 0, R;
        if (!E) {
            const y = [an.bind(this), void 0];
            for (y.unshift(...u),
            y.push(...C),
            R = y.length,
            N = Promise.resolve(n); v < R; )
                N = N.then(y[v++], y[v++]);
            return N
        }
        R = u.length;
        let L = n;
        for (; v < R; ) {
            const y = u[v++]
              , I = u[v++];
            try {
                L = y(L)
            } catch (O) {
                I.call(this, O);
                break
            }
        }
        try {
            N = an.call(this, L)
        } catch (y) {
            return Promise.reject(y)
        }
        for (v = 0,
        R = C.length; v < R; )
            N = N.then(C[v++], C[v++]);
        return N
    }
    getUri(t) {
        t = Ie(this.defaults, t);
        const n = Un(t.baseURL, t.url, t.allowAbsoluteUrls);
        return On(n, t.params, t.paramsSerializer)
    }
}
;
x.forEach(["delete", "get", "head", "options"], function(t) {
    Oe.prototype[t] = function(n, r) {
        return this.request(Ie(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
x.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(i, c, u) {
            return this.request(Ie(u || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: i,
                data: c
            }))
        }
    }
    Oe.prototype[t] = n(),
    Oe.prototype[t + "Form"] = n(!0)
});
let Zs = class Dn {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(i) {
            n = i
        }
        );
        const r = this;
        this.promise.then(s => {
            if (!r._listeners)
                return;
            let i = r._listeners.length;
            for (; i-- > 0; )
                r._listeners[i](s);
            r._listeners = null
        }
        ),
        this.promise.then = s => {
            let i;
            const c = new Promise(u => {
                r.subscribe(u),
                i = u
            }
            ).then(s);
            return c.cancel = function() {
                r.unsubscribe(i)
            }
            ,
            c
        }
        ,
        t(function(i, c, u) {
            r.reason || (r.reason = new Le(i,c,u),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r => {
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new Dn(function(s) {
                t = s
            }
            ),
            cancel: t
        }
    }
}
;
function $s(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function eo(e) {
    return x.isObject(e) && e.isAxiosError === !0
}
const kt = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(kt).forEach( ([e,t]) => {
    kt[t] = e
}
);
function Fn(e) {
    const t = new Oe(e)
      , n = mn(Oe.prototype.request, t);
    return x.extend(n, Oe.prototype, t, {
        allOwnKeys: !0
    }),
    x.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(s) {
        return Fn(Ie(e, s))
    }
    ,
    n
}
const te = Fn(ze);
te.Axios = Oe;
te.CanceledError = Le;
te.CancelToken = Zs;
te.isCancel = jn;
te.VERSION = Pn;
te.toFormData = dt;
te.AxiosError = F;
te.Cancel = te.CanceledError;
te.all = function(t) {
    return Promise.all(t)
}
;
te.spread = $s;
te.isAxiosError = eo;
te.mergeConfig = Ie;
te.AxiosHeaders = fe;
te.formToJSON = e => In(x.isHTMLForm(e) ? new FormData(e) : e);
te.getAdapter = Ln.getAdapter;
te.HttpStatusCode = kt;
te.default = te;
const {Axios: ya, AxiosError: va, CanceledError: Ba, isCancel: Oa, CancelToken: Ra, VERSION: Ia, all: ja, Cancel: ka, isAxiosError: Ua, spread: Ta, toFormData: Ma, AxiosHeaders: La, HttpStatusCode: Pa, formToJSON: Da, getAdapter: Fa, mergeConfig: Wa} = te
  , Wn = te.create({
    timeout: 3e4
});
Wn.interceptors.response.use(e => e.data);
function Be(e) {
    const [t,n] = M.useState( () => typeof window < "u" ? window.matchMedia(e).matches : !1);
    return M.useEffect( () => {
        if (typeof window > "u")
            return;
        const r = window.matchMedia(e);
        n(r.matches);
        const s = i => {
            n(i.matches)
        }
        ;
        return r.addEventListener ? (r.addEventListener("change", s),
        () => r.removeEventListener("change", s)) : (r.addListener(s),
        () => r.removeListener(s))
    }
    , [e]),
    t
}
const to = {
    mobile: "(max-width: 899px)",
    tablet: "(min-width: 900px) and (max-width: 1279px)",
    desktop: "(min-width: 1280px) and (max-width: 1919px)",
    xl: "(min-width: 1920px)"
};
function no(e=to) {
    return {
        isMobile: Be(e.mobile),
        isTablet: Be(e.tablet),
        isDesktop: Be(e.desktop),
        isXl: Be(e.xl)
    }
}
const ro = "sunwukong-landing-lang";
function Pt() {
    const {i18n: e} = Te()
      , t = e.language || "en"
      , n = M.useCallback(i => {
        e.changeLanguage(i),
        localStorage.setItem(ro, i)
    }
    , [e]);
    return {
        locale: t,
        changeLocale: n,
        isZh: t === "zh",
        isEn: t === "en"
    }
}
const Jn = "/assets/languageSwitch-BUj2QVS8.svg"
  , tt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%207.38642L6.6526%2010.8676C6.73024%2010.9416%206.85244%2010.9412%206.92956%2010.8666L13%205'%20stroke='%23FFE45B'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e"
  , so = "_langSwitch_1pb8b_1"
  , oo = "_trigger_1pb8b_5"
  , io = "_languageIcon_1pb8b_26"
  , ao = "_currentLang_1pb8b_32"
  , co = "_dropdown_1pb8b_38"
  , lo = "_option_1pb8b_70"
  , uo = "_active_1pb8b_92"
  , fo = "_checkmark_1pb8b_97"
  , ce = {
    langSwitch: so,
    trigger: oo,
    languageIcon: io,
    currentLang: ao,
    dropdown: co,
    option: lo,
    active: uo,
    checkmark: fo
}
  , ho = ({className: e}) => {
    const {isZh: t, isEn: n} = Pt()
      , [r,s] = M.useState(!1)
      , i = M.useRef(null)
      , c = M.useRef(null)
      , u = () => {
        c.current && (clearTimeout(c.current),
        c.current = null)
    }
      , E = () => {
        u(),
        c.current = setTimeout( () => {
            s(!1)
        }
        , 150)
    }
      , C = () => {
        u(),
        s(!0)
    }
      , N = y => {
        const I = y.relatedTarget
          , O = i.current?.querySelector(`.${ce.dropdown}`);
        O && I && (O.contains(I) || O === I) || E()
    }
      , v = () => {
        u(),
        s(!0)
    }
      , R = y => {
        const I = y.relatedTarget
          , O = i.current?.querySelector(`.${ce.trigger}`);
        O && I && (O.contains(I) || O === I) || E()
    }
    ;
    M.useEffect( () => () => {
        u()
    }
    , []);
    const L = y => {
        if (t && y === "zh" || n && y === "en") {
            s(!1);
            return
        }
        s(!1),
        localStorage.setItem("sunwukong-landing-lang", y),
        sessionStorage.setItem("sunwukong-lang-just-changed", "true"),
        window.scrollTo(0, 0),
        window.location.reload()
    }
    ;
    return m.jsxs("div", {
        className: Z(ce.langSwitch, e),
        ref: i,
        onMouseEnter: C,
        onMouseLeave: N,
        children: [m.jsxs("button", {
            className: Z(ce.trigger, {
                [ce.open]: r
            }),
            "aria-label": "Change language",
            children: [m.jsx("img", {
                src: Jn,
                alt: "Language",
                className: ce.languageIcon
            }), m.jsx("span", {
                className: ce.currentLang,
                children: t ? "简体中文" : "English"
            })]
        }), r && m.jsxs("div", {
            className: ce.dropdown,
            onMouseEnter: v,
            onMouseLeave: R,
            children: [m.jsxs("button", {
                className: Z(ce.option, {
                    [ce.active]: n
                }),
                onClick: () => L("en"),
                children: [m.jsx("span", {
                    children: "English"
                }), n && m.jsx("img", {
                    src: tt,
                    alt: "Selected",
                    className: ce.checkmark
                })]
            }), m.jsxs("button", {
                className: Z(ce.option, {
                    [ce.active]: t
                }),
                onClick: () => L("zh"),
                children: [m.jsx("span", {
                    children: "简体中文"
                }), t && m.jsx("img", {
                    src: tt,
                    alt: "Selected",
                    className: ce.checkmark
                })]
            })]
        })]
    })
}
  , ln = "data:image/svg+xml,%3csvg%20width='8'%20height='5'%20viewBox='0%200%208%205'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.7'%20d='M2.88078%204.29289L0.294997%201.70711C-0.334967%201.07714%200.111199%200%201.0021%200L6.17368%200C7.06458%200%207.51075%201.07714%206.88079%201.70711L4.295%204.29289C3.90447%204.68342%203.27131%204.68342%202.88078%204.29289Z'%20fill='white'/%3e%3c/svg%3e"
  , Ao = "_navItem_733yu_1"
  , po = "_link_733yu_6"
  , mo = "_active_733yu_22"
  , go = "_hasDropdown_733yu_31"
  , wo = "_dropdownArrow_733yu_31"
  , So = "_open_733yu_40"
  , bo = "_dropdown_733yu_31"
  , ge = {
    navItem: Ao,
    link: po,
    active: mo,
    hasDropdown: go,
    dropdownArrow: wo,
    open: So,
    dropdown: bo
}
  , Ke = ({label: e, href: t, children: n, className: r}) => {
    const s = dn()
      , [i,c] = M.useState(!1)
      , u = M.useRef(null)
      , E = M.useRef(null);
    M.useEffect( () => {
        const w = j => {
            u.current && !u.current.contains(j.target) && c(!1)
        }
        ;
        return i && document.addEventListener("mousedown", w),
        () => {
            document.removeEventListener("mousedown", w)
        }
    }
    , [i]);
    const C = () => {
        E.current && (clearTimeout(E.current),
        E.current = null)
    }
      , N = () => {
        C(),
        E.current = setTimeout( () => {
            c(!1)
        }
        , 150)
    }
      , v = () => {
        C(),
        n && c(!0)
    }
      , R = w => {
        const j = w.relatedTarget
          , U = u.current?.querySelector(`.${ge.dropdown}`);
        U && j && j instanceof Node && (U.contains(j) || U === j) || N()
    }
      , L = () => {
        C(),
        c(!0)
    }
      , y = w => {
        const j = w.relatedTarget
          , U = u.current?.querySelector(`.${ge.link}`);
        U && j && j instanceof Node && (U.contains(j) || U === j) || N()
    }
    ;
    M.useEffect( () => () => {
        C()
    }
    , []);
    const I = w => {
        if (!t)
            return;
        const j = t === "/" || t === "/home"
          , U = s.pathname === "/" || s.pathname === "/home";
        j && U && w.preventDefault()
    }
      , O = t && (t === "/" || t === "/home") && (s.pathname === "/" || s.pathname === "/home")
      , Y = t ? m.jsxs("a", {
        href: t,
        className: Z(ge.link, {
            [ge.active]: O
        }),
        onClick: I,
        children: [e, n && m.jsx("img", {
            src: ln,
            alt: "",
            className: ge.dropdownArrow
        })]
    }) : m.jsxs("span", {
        className: ge.link,
        children: [e, n && m.jsx("img", {
            src: ln,
            alt: "",
            className: ge.dropdownArrow
        })]
    });
    return m.jsxs("li", {
        ref: u,
        className: Z(ge.navItem, r, {
            [ge.hasDropdown]: !!n,
            [ge.open]: i
        }),
        onMouseEnter: v,
        onMouseLeave: R,
        children: [Y, n && i && m.jsx("div", {
            className: ge.dropdown,
            onMouseEnter: L,
            onMouseLeave: y,
            children: n
        })]
    })
}
  , xo = "_menuTitle_2rc4h_1"
  , Co = "_verticalLine_2rc4h_9"
  , Eo = "_label_2rc4h_17"
  , yt = {
    menuTitle: xo,
    verticalLine: Co,
    label: Eo
}
  , No = ({label: e, className: t}) => m.jsxs("div", {
    className: Z(yt.menuTitle, t),
    children: [m.jsx("div", {
        className: yt.verticalLine
    }), m.jsx("span", {
        className: yt.label,
        children: e
    })]
})
  , yo = "_navIcon_1hhrg_1"
  , vo = "_icon_1hhrg_17"
  , vt = {
    navIcon: yo,
    icon: vo
}
  , Bo = ({icon: e, className: t, size: n=40}) => {
    const r = {
        width: `${n}px`,
        height: `${n}px`
    };
    return m.jsx("div", {
        className: Z(vt.navIcon, t),
        children: typeof e == "string" ? m.jsx("img", {
            src: e,
            alt: "",
            className: vt.icon,
            style: r
        }) : m.jsx("div", {
            className: vt.icon,
            style: r,
            children: e
        })
    })
}
  , zn = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.7253%203.33333C10.5485%203.33331%2010.379%203.26306%2010.254%203.13804C10.129%203.01301%2010.0588%202.84346%2010.0588%202.66667C10.0588%202.48987%2010.129%202.32032%2010.254%202.1953C10.379%202.07028%2010.5485%202.00003%2010.7253%202H12.4453C13.304%202%2014%202.696%2014%203.556V5.356C14%205.53279%2013.9297%205.70234%2013.8047%205.82734C13.6797%205.95234%2013.5101%206.02256%2013.3333%206.02256C13.1565%206.02256%2012.987%205.95234%2012.862%205.82734C12.7369%205.70234%2012.6667%205.53279%2012.6667%205.356V3.556C12.6667%203.49695%2012.6432%203.44031%2012.6014%203.39855C12.5597%203.35679%2012.5031%203.33333%2012.444%203.33333H10.724H10.7253ZM12.6667%208.03467C12.6667%207.94711%2012.6839%207.86041%2012.7174%207.77951C12.7509%207.69862%2012.8%207.62511%2012.8619%207.5632C12.9238%207.50128%2012.9973%207.45216%2013.0782%207.41865C13.1591%207.38515%2013.2458%207.3679%2013.3333%207.3679C13.4209%207.3679%2013.5076%207.38515%2013.5885%207.41865C13.6694%207.45216%2013.7429%207.50128%2013.8048%207.5632C13.8667%207.62511%2013.9158%207.69862%2013.9493%207.77951C13.9828%207.86041%2014%207.94711%2014%208.03467V12.444C14%2013.304%2013.304%2014%2012.444%2014H3.556C3.14332%2014%202.74755%2013.8361%202.45574%2013.5443C2.16394%2013.2525%202%2012.8567%202%2012.444V3.556C2%202.696%202.696%202%203.556%202H8.012C8.18879%202.00003%208.35834%202.07028%208.48334%202.1953C8.60834%202.32032%208.67857%202.48987%208.67857%202.66667C8.67857%202.84346%208.60834%203.01301%208.48334%203.13804C8.35834%203.26306%208.18879%203.33331%208.012%203.33333H3.556C3.49695%203.33333%203.44031%203.35679%203.39855%203.39855C3.35679%203.44031%203.33333%203.49695%203.33333%203.556V12.444C3.33333%2012.5667%203.43333%2012.6667%203.556%2012.6667H12.444C12.5031%2012.6667%2012.5597%2012.6432%2012.6014%2012.6014C12.6432%2012.5597%2012.6667%2012.5031%2012.6667%2012.444V8.03467Z'%20fill='white'/%3e%3cpath%20d='M8.47364%208.47165L13.2816%203.68365C13.3437%203.62184%2013.393%203.54841%2013.4267%203.46755C13.4604%203.3867%2013.4778%203.3%2013.478%203.2124C13.4782%203.1248%2013.4611%203.03803%2013.4278%202.95703C13.3944%202.87603%2013.3454%202.80239%2013.2836%202.74032C13.2218%202.67825%2013.1484%202.62896%2013.0675%202.59526C12.9867%202.56157%2012.9%202.54413%2012.8124%202.54395C12.7248%202.54376%2012.638%202.56083%2012.557%202.59418C12.476%202.62753%2012.4024%202.67651%2012.3403%202.73832L7.5323%207.52765C7.46855%207.58906%207.41766%207.66255%207.38261%207.74384C7.34756%207.82512%207.32905%207.91257%207.32816%208.00109C7.32727%208.0896%207.34401%208.17741%207.37742%208.25938C7.41082%208.34136%207.46022%208.41586%207.52272%208.47854C7.58523%208.54122%207.65959%208.59083%207.74147%208.62447C7.82335%208.6581%207.91111%208.6751%207.99962%208.67445C8.08814%208.67381%208.17564%208.65555%208.25703%208.62073C8.33841%208.58591%208.41205%208.53523%208.47364%208.47165Z'%20fill='white'/%3e%3c/svg%3e"
  , Oo = "_menuItem_16ydg_1"
  , Ro = "_iconPlaceholder_16ydg_25"
  , Io = "_labelWrapper_16ydg_33"
  , jo = "_label_16ydg_33"
  , ko = "_externalIcon_16ydg_44"
  , je = {
    menuItem: Oo,
    iconPlaceholder: Ro,
    labelWrapper: Io,
    label: jo,
    externalIcon: ko
}
  , ke = ({label: e, href: t, icon: n, className: r, onClick: s, showExternalIcon: i=!1}) => {
    const c = m.jsxs(m.Fragment, {
        children: [n ? m.jsx(Bo, {
            icon: n
        }) : m.jsx("div", {
            className: je.iconPlaceholder
        }), m.jsxs("div", {
            className: je.labelWrapper,
            children: [m.jsx("span", {
                className: je.label,
                children: e
            }), i && m.jsx("img", {
                src: zn,
                alt: "External link",
                className: je.externalIcon
            })]
        })]
    });
    if (t) {
        const u = t.startsWith("http://") || t.startsWith("https://")
          , E = i || u;
        return m.jsx("a", {
            href: t,
            className: Z(je.menuItem, r),
            onClick: s,
            target: E ? "_blank" : void 0,
            rel: E ? "noopener noreferrer" : void 0,
            children: c
        })
    }
    return m.jsx("div", {
        className: Z(je.menuItem, r),
        onClick: s,
        role: "button",
        tabIndex: 0,
        children: c
    })
}
  , Uo = "_menuSection_1gbg9_1"
  , To = "_items_1gbg9_33"
  , un = {
    menuSection: Uo,
    items: To
}
  , qe = ({title: e, items: t, className: n}) => m.jsxs("div", {
    className: Z(un.menuSection, n),
    children: [m.jsx(No, {
        label: e
    }), m.jsx("div", {
        className: un.items,
        children: t.map( (r, s) => m.jsx(ke, {
            label: r.label,
            href: r.href,
            icon: r.icon
        }, s))
    })]
});
var H = (e => (e.SUNX_DOCS = "sunx_docs",
e.SUNX_GITHUB = "sunx_github",
e.SUNX_TELEGRAM = "sunx_telegram",
e.SUNX_TWITTER = "sunx_twitter",
e.SUNX_DISCORD = "sunx_discord",
e.SUNX_BUTTON = "sunx_button",
e.SUNSWAP_DOCS = "sunswap_docs",
e.SUNSWAP_GITHUB = "sunswap_github",
e.SUNSWAP_TELEGRAM = "sunswap_telegram",
e.SUNSWAP_TWITTER = "sunswap_twitter",
e.SUNSWAP_DISCORD = "sunswap_discord",
e.SUNSWAP_BUTTON = "sunswap_button",
e.SUN_DAO = "sun_dao",
e.DAO_GOVERNANCE = "dao_governance",
e.DAO_RIGHTS = "dao_rights",
e.BUYBACK = "buyback",
e.FORUM = "forum",
e.SUNPUMP_BUTTON = "sunpump_button",
e))(H || {});
const Mo = {
    sunx_docs: {
        zh: "https://sunx.gitbook.io/sunx-cn/",
        en: "https://sunx.gitbook.io/sunx"
    },
    sunx_github: {
        zh: "https://github.com/SunX-DEX/SunX-contracts",
        en: "https://github.com/SunX-DEX/SunX-contracts"
    },
    sunx_telegram: {
        zh: "https://t.me/SunX_DEX",
        en: "https://t.me/SunX_DEX"
    },
    sunx_twitter: {
        zh: "https://x.com/SunX_DEX",
        en: "https://x.com/SunX_DEX"
    },
    sunx_discord: {
        zh: "https://discord.com/invite/Az4jUBGf3E",
        en: "https://discord.com/invite/Az4jUBGf3E"
    },
    sunx_button: {
        zh: "https://www.sunx.io/zh-cn/",
        en: "https://www.sunx.io/"
    },
    sunswap_docs: {
        zh: "https://docs-zh.sun.io/",
        en: "https://docs.sun.io/"
    },
    sunswap_github: {
        zh: "https://github.com/sun-protocol",
        en: "https://github.com/sun-protocol"
    },
    sunswap_telegram: {
        zh: "https://t.me/officialsunecosystem",
        en: "https://t.me/officialsunecosystem"
    },
    sunswap_twitter: {
        zh: "https://x.com/SUNWUKONG_ZH",
        en: "https://x.com/SUNWUKONG_ZH"
    },
    sunswap_discord: {
        zh: "https://discord.com/invite/fFNgs75wgV",
        en: "https://discord.com/invite/fFNgs75wgV"
    },
    sunswap_button: {
        zh: "https://sun.io/?lang=zh-CN#/home",
        en: "https://sun.io/?lang=en-US#/home"
    },
    sun_dao: {
        zh: "https://sun.io/?lang=zh-CN#/dao",
        en: "https://sun.io/?lang=en-US#/dao"
    },
    dao_governance: {
        zh: "https://sun.io/?lang=zh-CN#/dao_governance",
        en: "https://sun.io/?lang=en-US#/dao_governance"
    },
    dao_rights: {
        zh: "https://sun.io/?lang=zh-CN#/dao_rights",
        en: "https://sun.io/?lang=en-US#/dao_rights"
    },
    buyback: {
        zh: "/buyback",
        en: "/buyback"
    },
    forum: {
        zh: "https://forum.sun.io/",
        en: "https://forum.sun.io/"
    },
    sunpump_button: {
        zh: "https://sunpump.meme/",
        en: "https://sunpump.meme/"
    }
};
function Lo(e, t="en") {
    const n = Mo[e];
    return n ? n[t] || n.en : (console.warn(`Link type ${e} not found`),
    "#")
}
function V(e) {
    const t = er.language
      , n = t === "zh" || t.startsWith("zh") ? "zh" : "en";
    return Lo(e, n)
}
const nt = "data:image/png;base64,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"
  , rt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA3OSURBVHgB7V0LcFTVGf7PvXcfeW0gS8IjxAArGCCEAR+Y0HaGiiDSdtoCYUSnVkqEdcYBiVpHoKCC07ETwNpxtaHWqYhjoNZxsPIQ1FESoHZ4JRAegTzAhATy2BB2s/fce3rOfe2DAAm5u3SG/eDmvs4999xv//O/zrm7CG6Ar9aA4MOQjZAlTZbFBI5AAoBAz2Bga4FuYox7uFIvowJxAiIyJte/U3h5IgsEcYD0+6jAING/fA/XsfpljGV2DZFBu/bautRzAgq/V3h57RpR4LFXBGjpugrNhRvAB9cB6ulg2XOQkGKD3G6A1LpGaKuqg67KOvCVn4MA3AGYOgos2elg+3EuDMxwQlJyIrR0dEBNT0ReQ+CeFfZsL/aPPN4A7W/vgEsXWpUP/o7GugUwePIIwSkjfGb2OqgLPRdG4J6VNleHX8p+7Z+45tAdIm29xaSRYF01R3DZ7bju0bVQox83VMrnVPKuEGnE2jJ8Nk7etWhqB+lUo+ydOkYY+ZtpVnnLt7iDHefYH6bzBAt2rf0oTt6NwLhhvVMGPJJxxo4pBKYmWF1HalFrnLybg3F09BxqT0m25LJ9xJjkLcKDc97A1RBHr5CZBvy7zwg5SQL+mkty2jMueFEXxNFrMM+kpgm1+bAtm+O6pYyD1WIrxNEnVJ/nriAkp3GE51PO1oEIcfQJ+092+wnYEjmEeMudEmGYCWZMkEDsHMTRL8QJ7CfiBPYLfJzA/kFiBPIQx62CSaAAcfQDHGCI4xYh0JR8XAf2A5j+E/4furDb7Xa43YsLMjMz8202a5bdbh+PEOfgOM6h5HwJQSIWKyUsea/6rlZduHChwuN5t9zj8XjhNkKivRd9sS5t5qwVrUfhNmDfN7sLJt//wHK7PSGfssT+hw8xsD11KIqAnj1HoA9OIb/fX95QX182JmdCGdwGUO7yBMIBgRjjVPWRwlEjsot5wZKlcCProbjBTbAwCTnAyJMJAoQIO2638gWj7x5VEOhuL649V1cyJmdizInkkNzzyFw0sP3Tj8cHfJd2jXaN2MgLaDjVIpQGiahruhA6fkVovyCMULova9vGvojU8xipx5TyxMJB1mhX9saA//IBj2d9FsQQXKyG3OpqDhfNfnT6LgsPuQYZkYtBqKSRJWqEYlDP6wQr5VTJVYkk7DglcviS3z25v/F8VTHEAjw1ITwffSvS3nJ6Y6ojpZA+rK7RtG7IuiOQYDdVDYZ2WajeC9eF4b2GXcfq0kvCkHRn8eWmEw7nkLGrIcoQoj3q2958fGNqSsI8tYsSFNRvSJkWAAQFyQjXxsjgkGgbxDhGt3SySXgd2oG0ASmLOlqqHanpOc9BFCFEM5LraD62wZGSOI9KnmY7kfJwykkSFCtFGpVjuvRFCiFRpQxpZXQJDhHSYGHNyFA4km3zaRsgNWNC1EiMWizcWFte7Ei2z1fJY3pL0VNIxgGvjEWvagiYHgvTcar+U3Vf6HawDFuDYlz0ba2MpjNlrZxWlrWBtQWihKhEIhV7P8wfkj6w2FD4MjYe8OB/Dj3Fp4zJeWfTB1NO15xZJsmBBvW8REIfXCVDMxDG9ZgYZNKFfRDNF5tK9u//7xyUOHoYW+sGJXShbVn+HW0TmA2BB/TvNzJmPPoilXMTgTsOH+B5PktR7CHqSZZlL++YmBNZvv7Ul4syh6YXS1ju9AcCVTiA60URe2VqLTj6j2pKsFkFh2AR7rJbrZkWizC+qbl1/atr/1LqeW9rWDQieQ9XcxzviLgFoVHM+WeXr3s4snx/8MUfh+YJiONN9QMbz3xZzHMy88VIRHRBAoFAZU/X3DVm+ia62gS9hHvhPMf1iMA4UG8VhFztgzP0Is+jrDUvLy6i15WASWBBiOldOD0tsVDpjlIgpDtqXVA2J/VzIymScbfX0J26b0nU/UGDkosY+WASWBDCsQmGYBJqDpUV8jQqCBoERWcRRZdR8iy8HPUogeeJQ9WlEYaHLjTscrz8/OPzwSywdJY6Y9McZGUNWqTO/jQaTh8kYFhOniNZ7oW/ME0CIsHqViId3XKDbnSChA5yJs8EE2FaF/asfy7LwpFc45NXSGRr5qmrlripuaXE895nUUtBsbpbWy+XhtxT/fDUdig9wW5BBaytYBI4s4zIjJ/k5auxquZ+EBz05+hDSFJ3w9B75pimwK8H56hfrZYwdY2Y9Ks9AQxfUYulH1Laag44GSQZTMAgZ1JBaCMNR1fz7c6euxB18nQ0NjZvUvWu4YSj0OTEYGeyeQSaJYFWC01PEc1o6N2GaF2Hrvd8930FxAivb9zycbgzLZKgPsRgt3G5YBKoFZZMscIWnmSpOkcMppw0CZSlgNe9/J0GiBE87+3wSri7wWgLa5e6KPs8kkwxZMwPNM2R5hF1UYzsip5aUquWZFwPMYYodjfwvHW4shMxVMC8ATABSOaRAKaNKmHN74/MrDAxl1Ih1lAkD0U3224ie5q+A51E0BKcGqGSac56b0HDSYfRpiCM/BiYBI5w5jyconMgMqOi6kDWvd1PTIuaA90TqE7ODTEiEOJUA9XJnWAKWCQim6MDZRl3GOkngkNdCMWleX7xTx+BGGHfv14oiEx9aU61koMMdPsrwSRwYNKYCB3wPh7SYGI4sZolHDYsqRBihNyxgwqD+UNRzTXqcTndl2TRlGjI1GxMZ7u3Skuaal1YUknUfS8rKvjuk2fNT2pGYN+2pQWOJGtheCJBb5MaE//Q3LYDTABC1IkBk7D9y2M7FIdVdVr1DHSoU03yJw//u2ftL6OWkWF1T5k8dINxXxCJ1guC3RmYU3/SNKfeNALdKz9t8Hd3V1DJQwaRxraqvDmQHEWP3bfNs/ZnppPIyCtacP82JZlr6GAJhRoPtmb+ofv3W01z6jlCzDPp3o7OCoUwPQuibyOFROVheJoTXPLElAON379o2kBPXXlx0dOPTdpNI4wsIwujJzaUD1Ey2lN7/rKpMTmHLOal9Nds3FsqS7hT6TqUMJoVOf/Mqs9ynlnx2djmS50lGrGKIh/itBfjMysPXD70/Cvb/1Y4HvoIJsWNB4uLpZpVJ+4akvQKx0kpmuoAbR0ieeo2a9ueb0+bGJObPEfas/l7b/PljlJd77Hu9Nbq6bvzcpypg+/7U0n9D22rg9KpnB+e5rAWzZ529+7AqZcOHP2i6KbJzopPfpuPT790YMmCvANDnLZiDrEoR58vE+IF6LGvbMTCwNrmXrndtO7LfGjTx0Re/fNXVApFXQoVEp8unLDbs3ZmVvaP3iptbe8sDabbWVdT9aXP5y/Pm1W682b15//6/YorXf4Kw0WSQ31OUZugpEmhWreyL0qBhk93VZs6e4vlEUyf4uvZfNR74szFpeqnrubkqJQ45j/iWsTOr9zwTYk/0F0etJKsnIS2fHJ0fW/v8dH2oyXaYH1E6j5SEiVj8L22/lKJe+VOczNCGKIzyTx31gc7W71XS0MfLjWZm++el+dgBCeMe3Pu/kMX5jQ3d65vbuksqTrV8pT7lb29fjj3yr0NIhbPq5Jm6DoSZrj0hCq9f2vr1U1jpr9v/txBgc1Q9UycOct9JCozVAPHl+yyCGi8nk7ydokfp07eZMo8Fd+xom12G5+vZC5u4EeIEqm0jntnBkQBlLs8ToriNP2lr381VxQDVbokOhLR/MCxhbv2bfl5AfQXRnzLHHfxmukcis+HA5VLV5fPhagBR3d+oGfzSS90w9w3/zBlm0Xgc1kWyWJBuQWTnNuk4096JYkoiVZfQKpKvffDvkmmrOUflZlayhySkCQVAb8olS9/7eBCz9aTURsFJBybIR3l+YHsAawT/jGjtb2rNFRXcSDTMVw5ly3WWxhwJ/rQqZG2DyYu2jq6/pqQ98HcaJLHoMxMiNWbXs78stVn69uXSSJT/qEPzr6SCffZmUdhzrJibYmExYb9h5rnpD24dQ3ECFQCY/eunOuR7WXPvnbw4aZLV0okSWwAQ4puQQ+rPiBSIwzR23Tp6npWd/7jO2M2+gc8H90Zqj3Bs/Wcly4lnhUTyx4qyMgfMSxxESJ9z4oHusXzNPatvNyOd776dnUpqxdiDQlu33tK7nVHmN/Hllvyz1LzP18Gtxt8/IXrfoOD+Puu/UJcAvsF9rqrEH9j/ZYhKBJ4x3+/Yj8Q/9KJfoEQmXAcJ/gmjR1ghTj6hEmTBlgRz0mcTMD3YO5AO8TRJ4zPSrYgDJ00WUzaXDnJyRBHnzD1AWeaBOgiZ3PZanOykgZmZibEzXEfkJGenNTlJc3ctGlfY97CdSxdMHIQxNErrHth3GBbAmkpXF7hU6xwZxKpHDsmbUDcmNwc944baJk80em8aifKVyErBBYWUiYT5HOrl40fxQpAHD2CcbNq6TiX1S+dYZyxY4YfOPuJ8jo7b2lYtTTPFSfxWijkFee5GEcPLSqv049fkwn+fHNBtiALriPV3tYXXz98Ee5wDHcmcO7F96RPyElJ5QNS7ewQ8hh6/jGCsvyERL/NhUWS3tjY1bXvSFPruaquwL7jbXfEd61OvXegJW9iRkJOZlKya4RjoMBzXm+i75jebUNxw7EIRmRSICGDxzBY5nAy4nmLETozp4dlZGlaW5IJkpGovPEUOWWYzR8JPab/pAXhEEEoOJM/7LcuetoOvW9oAyJ/I0PS6paDdSttQDxCMj1Bwy+4EWhd9FIfJ0o+JKA2Ww3UTlvz9XXHHP4H5sxNnd1gdTcAAAAASUVORK5CYII="
  , Yn = "data:image/png;base64,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"
  , Gn = "data:image/png;base64,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"
  , Hn = "data:image/png;base64,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"
  , Qn = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='40'%20height='40'%20rx='6'%20fill='black'%20fill-opacity='0.1'/%3e%3crect%20x='0.25'%20y='0.25'%20width='39.5'%20height='39.5'%20rx='5.75'%20stroke='url(%23paint0_linear_169_1640)'%20stroke-opacity='0.2'%20stroke-width='0.5'/%3e%3cpath%20d='M28.3335%2021.4354C28.3335%2020.374%2027.7548%2018.0275%2026.4984%2015.6554C26.4761%2016.4482%2025.8335%2018.3696%2025.3603%2018.8811C25.0438%2017.9859%2024.9639%2012.0109%2017.0835%2010C17.563%2015.9431%2011.6455%2015.8568%2011.6455%2022.2698C11.6455%2025.6777%2013.6883%2028.6093%2016.6135%2029.9105C15.9454%2025.9783%2019.8296%2025.4731%2019.2031%2021.4226C23.2951%2023.8715%2024.2574%2026.7359%2023.1513%2030C26.4185%2028.6317%2028.5956%2025.2078%2028.3335%2021.4354Z'%20fill='url(%23paint1_linear_169_1640)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_169_1640'%20x1='20'%20y1='0'%20x2='20'%20y2='40'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAA00'/%3e%3cstop%20offset='1'%20stop-color='%23FFE45B'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_169_1640'%20x1='20.0002'%20y1='10.0003'%20x2='20.0002'%20y2='30.0003'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23FFD34E'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
  , Vn = "data:image/png;base64,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"
  , st = "data:image/png;base64,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"
  , ot = "data:image/png;base64,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"
  , it = "data:image/png;base64,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"
  , Po = "_pcNav_fwj41_1"
  , Do = "_navList_fwj41_7"
  , Fo = "_developerMenu_fwj41_16"
  , Wo = "_communityMenu_fwj41_17"
  , Jo = "_columns_fwj41_25"
  , zo = "_column_fwj41_25"
  , Yo = "_daoMenu_fwj41_50"
  , we = {
    pcNav: Po,
    navList: Do,
    developerMenu: Fo,
    communityMenu: Wo,
    columns: Jo,
    column: zo,
    daoMenu: Yo
}
  , Go = () => {
    const {t: e} = Te();
    return m.jsx("nav", {
        className: we.pcNav,
        children: m.jsxs("ul", {
            className: we.navList,
            children: [m.jsx(Ke, {
                label: e("nav.home"),
                href: "/"
            }), m.jsx(Ke, {
                label: e("nav.developer"),
                children: m.jsx("div", {
                    className: we.developerMenu,
                    children: m.jsxs("div", {
                        className: we.columns,
                        children: [m.jsx("div", {
                            className: we.column,
                            children: m.jsx(qe, {
                                title: e("hero.wukong"),
                                items: [{
                                    label: e("nav.docs"),
                                    href: V(H.SUNX_DOCS),
                                    icon: nt
                                }, {
                                    label: e("nav.github"),
                                    href: V(H.SUNX_GITHUB),
                                    icon: rt
                                }]
                            })
                        }), m.jsx("div", {
                            className: we.column,
                            children: m.jsx(qe, {
                                title: e("swap_section.title"),
                                items: [{
                                    label: e("nav.docs"),
                                    href: V(H.SUNSWAP_DOCS),
                                    icon: nt
                                }, {
                                    label: e("nav.github"),
                                    href: V(H.SUNSWAP_GITHUB),
                                    icon: rt
                                }]
                            })
                        })]
                    })
                })
            }), m.jsx(Ke, {
                label: e("nav.sun_dao"),
                children: m.jsxs("div", {
                    className: we.daoMenu,
                    children: [m.jsx(ke, {
                        label: e("nav.sun_dao"),
                        href: V(H.SUN_DAO),
                        icon: Yn
                    }), m.jsx(ke, {
                        label: e("nav.dao_governance"),
                        href: V(H.DAO_GOVERNANCE),
                        icon: Gn
                    }), m.jsx(ke, {
                        label: e("nav.dao_rights"),
                        href: V(H.DAO_RIGHTS),
                        icon: Hn
                    }), m.jsx(ke, {
                        label: e("nav.buyback"),
                        href: V(H.BUYBACK),
                        icon: Qn
                    }), m.jsx(ke, {
                        label: e("nav.forum"),
                        href: V(H.FORUM),
                        icon: Vn,
                        showExternalIcon: !0
                    })]
                })
            }), m.jsx(Ke, {
                label: e("nav.community"),
                children: m.jsx("div", {
                    className: we.communityMenu,
                    children: m.jsxs("div", {
                        className: we.columns,
                        children: [m.jsx("div", {
                            className: we.column,
                            children: m.jsx(qe, {
                                title: e("hero.wukong"),
                                items: [{
                                    label: e("nav.telegram"),
                                    href: V(H.SUNX_TELEGRAM),
                                    icon: st
                                }, {
                                    label: e("nav.twitter"),
                                    href: V(H.SUNX_TWITTER),
                                    icon: ot
                                }, {
                                    label: e("nav.discord"),
                                    href: V(H.SUNX_DISCORD),
                                    icon: it
                                }]
                            })
                        }), m.jsx("div", {
                            className: we.column,
                            children: m.jsx(qe, {
                                title: e("swap_section.title"),
                                items: [{
                                    label: e("nav.telegram"),
                                    href: V(H.SUNSWAP_TELEGRAM),
                                    icon: st
                                }, {
                                    label: e("nav.twitter"),
                                    href: V(H.SUNSWAP_TWITTER),
                                    icon: ot
                                }, {
                                    label: e("nav.discord"),
                                    href: V(H.SUNSWAP_DISCORD),
                                    icon: it
                                }]
                            })
                        })]
                    })
                })
            })]
        })
    })
}
  , at = "/assets/logo_zh-C5WWwwcs.png"
  , ct = "/assets/logo_en-DY_4Vc7f.png"
  , Ho = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dPhCYAgEIbhswkc4UZpxDZrBNvkOsEfISLcl/77HjgKol4TFCEi2i3NHppZ9kuWyAdTegThMfUpFlfaQoeOSfP0UYnT9m5MXaXhf6iCALa1wDEg+j8WiK6LddF7ELuXxz7R3EXrfeicotGrzd4YEW3xAu3iSk13/S0RAAAAAElFTkSuQmCC"
  , Qo = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6371%2010.9497H8.65793C8.18256%2010.9497%207.79688%2010.564%207.79688%2010.0886C7.79688%209.61322%208.18256%209.22754%208.65793%209.22754H16.6371C17.1124%209.22754%2017.4981%209.61322%2017.4981%2010.0886C17.4981%2010.564%2017.1124%2010.9497%2016.6371%2010.9497Z'%20fill='%23131414'/%3e%3cpath%20d='M14.4099%2014.1767C14.1892%2014.1767%2013.9686%2014.0924%2013.8018%2013.9237C13.4645%2013.5865%2013.4645%2013.0429%2013.8018%2012.7057L17.0289%209.47852C17.3662%209.14127%2017.9097%209.14127%2018.247%209.47852C18.5842%209.81577%2018.5842%2010.3593%2018.247%2010.6966L15.018%2013.9237C14.8512%2014.0924%2014.6305%2014.1767%2014.4099%2014.1767Z'%20fill='white'/%3e%3cpath%20d='M17.6371%2010.9493C17.4164%2010.9493%2017.1958%2010.865%2017.0289%2010.6963L13.8018%207.47097C13.4645%207.13372%2013.4645%206.59018%2013.8018%206.25294C14.139%205.91569%2014.6826%205.91569%2015.0198%206.25294L18.247%209.4801C18.5842%209.81735%2018.5842%2010.3609%2018.247%2010.6981C18.0783%2010.865%2017.8577%2010.9493%2017.6371%2010.9493Z'%20fill='white'/%3e%3crect%20x='7.5'%20y='9.16309'%20width='9'%20height='2'%20rx='1'%20fill='white'/%3e%3cpath%20d='M9.5%2015C10.0523%2015%2010.5%2015.4477%2010.5%2016C10.5%2016.5523%2010.0523%2017%209.5%2017H3.5C2.39543%2017%201.5%2016.1046%201.5%2015V5C1.5%203.89543%202.39543%203%203.5%203H9.5C10.0523%203%2010.5%203.44772%2010.5%204C10.5%204.55228%2010.0523%205%209.5%205H3.5V15H9.5Z'%20fill='white'/%3e%3c/svg%3e"
  , Vo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACmSURBVHgB7ZM9DoMwDEadru1M9+49EKdgJzPiKFyFU8AMO3OwpQwRIsYGITH4SZ+iyEqe8mMAwzCMu3FcMYTwxuEDmg2dm9g65GUFDg3mCzpmTIXiZa/4Yhb+T8iIIq4FrbDHsNeTgU44glYYr8QrpSTz3Duyn4ZQvOWhTCQUSkUysTCR1pjfpjRgWolMJYxS6ssmkZLM51rgsjCRlnHaaWSGYTyDFZcYL7xWHFo4AAAAAElFTkSuQmCC"
  , Ko = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB4SURBVHgB7dPRCcAgDEXRpBM4QkboKN2sozlCVnCDNFChUlBMq5RCDrxfL4gCOOd+R0SCbs8LMFOORbnEaVE9mG6xMkowUo6x1PGwaEdsXNQQex99ECuj1Ye0NJqrjsCOdBtYyfkFWOy4da3YESawSYiYwDnnPnMArB1LS4KZRMsAAAAASUVORK5CYII="
  , qo = "_mobileNav_1mnc7_1"
  , _o = "_topBar_1mnc7_13"
  , Xo = "_logo_1mnc7_21"
  , Zo = "_logoIcon_1mnc7_26"
  , $o = "_topRight_1mnc7_32"
  , ei = "_langSwitchWrapper_1mnc7_38"
  , ti = "_langPill_1mnc7_44"
  , ni = "_langIcon_1mnc7_84"
  , ri = "_langText_1mnc7_90"
  , si = "_langArrow_1mnc7_97"
  , oi = "_open_1mnc7_104"
  , ii = "_langDropdown_1mnc7_108"
  , ai = "_langOption_1mnc7_139"
  , ci = "_active_1mnc7_159"
  , li = "_checkmark_1mnc7_163"
  , ui = "_closeButton_1mnc7_169"
  , fi = "_closeIcon_1mnc7_193"
  , di = "_menuContent_1mnc7_198"
  , hi = "_menuSection_1mnc7_204"
  , Ai = "_menuItem_1mnc7_212"
  , pi = "_menuItemLabel_1mnc7_236"
  , mi = "_expanded_1mnc7_243"
  , gi = "_menuArrow_1mnc7_248"
  , wi = "_expandedContent_1mnc7_257"
  , Si = "_group_1mnc7_261"
  , bi = "_groupWithoutTitle_1mnc7_264"
  , xi = "_groupTitle_1mnc7_268"
  , Ci = "_groupTitleLine_1mnc7_276"
  , Ei = "_groupTitleText_1mnc7_284"
  , Ni = "_groupItems_1mnc7_291"
  , yi = "_highlightCard_1mnc7_296"
  , vi = "_navItem_1mnc7_329"
  , Bi = "_itemIcon_1mnc7_377"
  , Oi = "_itemLabel_1mnc7_385"
  , Ri = "_externalIcon_1mnc7_392"
  , Ii = "_groupDivider_1mnc7_400"
  , P = {
    mobileNav: qo,
    topBar: _o,
    logo: Xo,
    logoIcon: Zo,
    topRight: $o,
    langSwitchWrapper: ei,
    langPill: ti,
    langIcon: ni,
    langText: ri,
    langArrow: si,
    open: oi,
    langDropdown: ii,
    langOption: ai,
    active: ci,
    checkmark: li,
    closeButton: ui,
    closeIcon: fi,
    menuContent: di,
    menuSection: hi,
    menuItem: Ai,
    menuItemLabel: pi,
    expanded: mi,
    menuArrow: gi,
    expandedContent: wi,
    group: Si,
    groupWithoutTitle: bi,
    groupTitle: xi,
    groupTitleLine: Ci,
    groupTitleText: Ei,
    groupItems: Ni,
    highlightCard: yi,
    navItem: vi,
    itemIcon: Bi,
    itemLabel: Oi,
    externalIcon: Ri,
    groupDivider: Ii
}
  , ji = ({open: e, onClose: t}) => {
    const {t: n, i18n: r} = Te()
      , s = dn()
      , i = r.language === "zh" || r.language.startsWith("zh")
      , [c,u] = M.useState(!1)
      , [E,C] = M.useState(new Set)
      , N = M.useRef(null)
      , v = M.useRef(null)
      , R = i ? at : ct
      , L = i ? "简体中文" : "English"
      , y = [{
        key: "home",
        title: n("nav.home"),
        href: "/"
    }, {
        key: "dev",
        title: n("nav.developer"),
        groups: [{
            title: n("hero.wukong"),
            items: [{
                label: n("nav.docs"),
                href: V(H.SUNX_DOCS),
                icon: nt,
                highlight: !0
            }, {
                label: n("nav.github"),
                href: V(H.SUNX_GITHUB),
                icon: rt
            }]
        }, {
            title: n("swap_section.title"),
            items: [{
                label: n("nav.docs"),
                href: V(H.SUNSWAP_DOCS),
                icon: nt
            }, {
                label: n("nav.github"),
                href: V(H.SUNSWAP_GITHUB),
                icon: rt
            }]
        }]
    }, {
        key: "dao",
        title: n("nav.sun_dao"),
        groups: [{
            title: "",
            items: [{
                label: n("nav.sun_dao"),
                href: V(H.SUN_DAO),
                icon: Yn
            }, {
                label: n("nav.dao_governance"),
                href: V(H.DAO_GOVERNANCE),
                icon: Gn
            }, {
                label: n("nav.dao_rights"),
                href: V(H.DAO_RIGHTS),
                icon: Hn
            }, {
                label: n("nav.buyback"),
                href: V(H.BUYBACK),
                icon: Qn
            }, {
                label: n("nav.forum"),
                href: V(H.FORUM),
                icon: Vn,
                external: !0
            }]
        }]
    }, {
        key: "community",
        title: n("nav.community"),
        groups: [{
            title: n("hero.wukong"),
            items: [{
                label: n("nav.telegram"),
                href: V(H.SUNX_TELEGRAM),
                icon: st
            }, {
                label: n("nav.twitter"),
                href: V(H.SUNX_TWITTER),
                icon: ot
            }, {
                label: n("nav.discord"),
                href: V(H.SUNX_DISCORD),
                icon: it
            }]
        }, {
            title: n("swap_section.title"),
            items: [{
                label: n("nav.telegram"),
                href: V(H.SUNSWAP_TELEGRAM),
                icon: st
            }, {
                label: n("nav.twitter"),
                href: V(H.SUNSWAP_TWITTER),
                icon: ot
            }, {
                label: n("nav.discord"),
                href: V(H.SUNSWAP_DISCORD),
                icon: it
            }]
        }]
    }];
    M.useEffect( () => {
        if (e) {
            const w = document.body.style.overflow;
            return document.body.style.overflow = "hidden",
            () => {
                document.body.style.overflow = w
            }
        }
    }
    , [e]),
    M.useEffect( () => {
        if (!e)
            return;
        const w = j => {
            j.key === "Escape" && (c ? u(!1) : t())
        }
        ;
        return window.addEventListener("keydown", w),
        () => window.removeEventListener("keydown", w)
    }
    , [e, c, t]),
    M.useEffect( () => {
        if (!c)
            return;
        const w = j => {
            N.current && !N.current.contains(j.target) && u(!1)
        }
        ;
        return document.addEventListener("mousedown", w),
        () => document.removeEventListener("mousedown", w)
    }
    , [c]);
    const I = M.useCallback(w => {
        C(j => {
            const U = new Set(j);
            return U.has(w) ? U.delete(w) : U.add(w),
            U
        }
        )
    }
    , [])
      , O = w => {
        if (i && w === "zh" || !i && w === "en") {
            u(!1);
            return
        }
        u(!1),
        localStorage.setItem("sunwukong-landing-lang", w),
        sessionStorage.setItem("sunwukong-lang-just-changed", "true"),
        window.scrollTo(0, 0),
        window.location.reload()
    }
      , Y = (w, j) => {
        w && (t(),
        j || w.startsWith("http://") || w.startsWith("https://") ? setTimeout( () => {
            if (w.includes("x.com/") || w.includes("twitter.com/")) {
                const U = document.createElement("a");
                U.href = w,
                U.target = "_blank",
                U.rel = "noopener noreferrer",
                U.style.display = "none",
                document.body.appendChild(U),
                U.click(),
                document.body.removeChild(U)
            } else
                window.open(w, "_blank", "noopener,noreferrer")
        }
        , 100) : window.location.href = w)
    }
    ;
    return e ? m.jsxs("div", {
        className: P.mobileNav,
        ref: v,
        children: [m.jsxs("div", {
            className: P.topBar,
            children: [m.jsx("div", {
                className: P.logo,
                children: m.jsx("img", {
                    src: R,
                    alt: "Logo",
                    className: P.logoIcon
                })
            }), m.jsxs("div", {
                className: P.topRight,
                children: [m.jsxs("div", {
                    className: P.langSwitchWrapper,
                    ref: N,
                    children: [m.jsxs("button", {
                        className: Z(P.langPill, {
                            [P.open]: c
                        }),
                        onClick: () => u(!c),
                        "aria-label": "Change language",
                        children: [m.jsx("img", {
                            src: Jn,
                            alt: "Language",
                            className: P.langIcon
                        }), m.jsx("span", {
                            className: P.langText,
                            children: L
                        }), m.jsx("img", {
                            src: Ho,
                            alt: "",
                            className: P.langArrow
                        })]
                    }), c && m.jsxs("div", {
                        className: P.langDropdown,
                        children: [m.jsxs("button", {
                            className: Z(P.langOption, {
                                [P.active]: !i
                            }),
                            onClick: () => O("en"),
                            children: [m.jsx("span", {
                                children: "English"
                            }), !i && m.jsx("img", {
                                src: tt,
                                alt: "Selected",
                                className: P.checkmark
                            })]
                        }), m.jsxs("button", {
                            className: Z(P.langOption, {
                                [P.active]: i
                            }),
                            onClick: () => O("zh"),
                            children: [m.jsx("span", {
                                children: "简体中文"
                            }), i && m.jsx("img", {
                                src: tt,
                                alt: "Selected",
                                className: P.checkmark
                            })]
                        })]
                    })]
                }), m.jsx("button", {
                    className: P.closeButton,
                    onClick: t,
                    "aria-label": "Close menu",
                    children: m.jsx("img", {
                        src: Qo,
                        alt: "Close",
                        className: P.closeIcon
                    })
                })]
            })]
        }), m.jsx("div", {
            className: P.menuContent,
            children: y.map(w => {
                const j = ( () => {
                    const J = s.pathname;
                    return w.href ? J === "/" || J === "/home" || J === w.href : !1
                }
                )();
                if (w.href)
                    return m.jsx("div", {
                        className: Z(P.menuSection, P.menuSectionWithBorder),
                        children: m.jsx("a", {
                            href: w.href,
                            className: P.menuItem,
                            onClick: J => {
                                J.preventDefault(),
                                Y(w.href)
                            }
                            ,
                            children: m.jsx("span", {
                                className: Z(P.menuItemLabel, {
                                    [P.active]: j
                                }),
                                children: w.title
                            })
                        })
                    }, w.key);
                const U = E.has(w.key);
                return m.jsxs("div", {
                    className: P.menuSection,
                    children: [m.jsxs("button", {
                        className: Z(P.menuItem, {
                            [P.expanded]: U
                        }),
                        onClick: () => I(w.key),
                        children: [m.jsx("span", {
                            className: Z(P.menuItemLabel, {
                                [P.active]: j,
                                [P.expanded]: U
                            }),
                            children: w.title
                        }), m.jsx("img", {
                            src: U ? Ko : Vo,
                            alt: "",
                            className: P.menuArrow
                        })]
                    }), U && w.groups && m.jsx("div", {
                        className: P.expandedContent,
                        children: w.groups.map( (J, G) => {
                            const Q = J.title && J.title.trim();
                            return m.jsxs("div", {
                                className: Z(P.group, {
                                    [P.groupWithoutTitle]: !Q
                                }),
                                children: [Q && m.jsxs("div", {
                                    className: P.groupTitle,
                                    children: [m.jsx("span", {
                                        className: P.groupTitleLine
                                    }), m.jsx("span", {
                                        className: P.groupTitleText,
                                        children: J.title
                                    })]
                                }), m.jsx("div", {
                                    className: P.groupItems,
                                    children: J.items.map( (o, a) => {
                                        const l = o.highlight
                                          , h = o.external || o.href?.startsWith("http://") || o.href?.startsWith("https://");
                                        return m.jsx("div", {
                                            children: l ? m.jsxs("div", {
                                                className: P.highlightCard,
                                                onClick: () => Y(o.href, h),
                                                children: [o.icon && m.jsx("img", {
                                                    src: o.icon,
                                                    alt: "",
                                                    className: P.itemIcon
                                                }), m.jsx("span", {
                                                    className: P.itemLabel,
                                                    children: o.label
                                                })]
                                            }) : m.jsxs("a", {
                                                href: o.href || "#",
                                                className: P.navItem,
                                                onClick: f => {
                                                    f.preventDefault(),
                                                    Y(o.href, h)
                                                }
                                                ,
                                                target: h ? "_blank" : void 0,
                                                rel: h ? "noopener noreferrer" : void 0,
                                                children: [o.icon && m.jsx("img", {
                                                    src: o.icon,
                                                    alt: "",
                                                    className: P.itemIcon
                                                }), m.jsx("span", {
                                                    className: P.itemLabel,
                                                    children: o.label
                                                }), o.external && m.jsx("img", {
                                                    src: zn,
                                                    alt: "External link",
                                                    className: P.externalIcon
                                                })]
                                            })
                                        }, a)
                                    }
                                    )
                                }), G < w.groups.length - 1 && m.jsx("div", {
                                    className: P.groupDivider
                                })]
                            }, G)
                        }
                        )
                    })]
                }, w.key)
            }
            )
        })]
    }) : null
}
  , ki = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB8SURBVHgB7dXRCYAgEIDhswlqgzZrhkZoUtsgNzB7CzskMRXi/0CEQ/DefhEAP+O9X8I5fHv2+jvexygL2nDN0oczxkz3waA8GqUfFw+0BddwdmnvWm4TAEAaLU6jxSVoMQC88WGLrdbWXLVb/GhrrtotdlKoZotpK4DgBNGyZMWWA09GAAAAAElFTkSuQmCC"
  , Ui = "_pc_header_wrap_1jmp6_1"
  , Ti = "_header_1jmp6_24"
  , Mi = "_container_1jmp6_36"
  , Li = "_logo_1jmp6_71"
  , Pi = "_rightActions_1jmp6_85"
  , Di = "_logoIcon_1jmp6_102"
  , Fi = "_menuButton_1jmp6_115"
  , Wi = "_menuIcon_1jmp6_139"
  , Ee = {
    pc_header_wrap: Ui,
    header: Ti,
    container: Mi,
    logo: Li,
    rightActions: Pi,
    logoIcon: Di,
    menuButton: Fi,
    menuIcon: Wi
}
  , Ji = ({className: e}) => {
    const {isMobile: t} = no()
      , n = Be("(max-width: 899px)")
      , {i18n: r} = Te()
      , [s,i] = M.useState(!1)
      , [c,u] = M.useState(!1)
      , E = r.language === "en" ? ct : at;
    M.useEffect( () => {
        const v = () => {
            u(window.scrollY > 20)
        }
        ;
        return window.addEventListener("scroll", v),
        () => window.removeEventListener("scroll", v)
    }
    , []);
    const C = () => {
        i(!s)
    }
      , N = () => {
        i(!1)
    }
    ;
    return m.jsxs("div", {
        className: Ee.pc_header_wrap,
        children: [m.jsx("div", {
            className: Z(Ee.header, e, {
                [Ee.scrolled]: c
            }),
            children: m.jsxs("div", {
                className: Ee.container,
                children: [m.jsx("a", {
                    href: "/",
                    className: Ee.logo,
                    children: m.jsx("img", {
                        src: E,
                        alt: "Logo",
                        className: Ee.logoIcon
                    })
                }), t ? m.jsx("button", {
                    className: Ee.menuButton,
                    onClick: C,
                    "aria-label": "Toggle menu",
                    children: m.jsx("img", {
                        src: ki,
                        alt: "Menu",
                        className: Ee.menuIcon
                    })
                }) : m.jsx(Go, {}), m.jsx("div", {
                    className: Ee.rightActions,
                    children: !n && m.jsx(ho, {})
                })]
            })
        }), n && m.jsx(ji, {
            open: s,
            onClose: N
        })]
    })
}
  , Kn = async () => {
    const {noticeListService: e} = re
      , {host: t, path: n} = e;
    return Wn.get(`${t}${n}?type=sunio`)
}
  , zi = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%205L5%2015M5%205L15%2015'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
  , Yi = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%202.625C9.57746%202.625%2011.6667%204.71421%2011.6667%207.29167V10.5H11.8125C11.9285%2010.5%2012.0398%2010.5461%2012.1219%2010.6281C12.2039%2010.7102%2012.25%2010.8215%2012.25%2010.9375C12.25%2011.0535%2012.2039%2011.1648%2012.1219%2011.2469C12.0398%2011.3289%2011.9285%2011.375%2011.8125%2011.375L9.16358%2011.3753C8.98913%2011.8061%208.69001%2012.1751%208.30455%2012.4349C7.91908%2012.6947%207.46483%2012.8335%207%2012.8335C6.53517%2012.8335%206.08092%2012.6947%205.69545%2012.4349C5.30999%2012.1751%205.01087%2011.8061%204.83642%2011.3753L2.1875%2011.375C2.07147%2011.375%201.96019%2011.3289%201.87814%2011.2469C1.79609%2011.1648%201.75%2011.0535%201.75%2010.9375C1.75%2010.8215%201.79609%2010.7102%201.87814%2010.6281C1.96019%2010.5461%202.07147%2010.5%202.1875%2010.5H2.33333V7.29167C2.33333%204.71421%204.42254%202.625%207%202.625ZM8.16667%2011.3753H5.83333C5.96908%2011.5565%206.14521%2011.7035%206.34773%2011.8047C6.55026%2011.906%206.77359%2011.9585%207%2011.9583C7.22641%2011.9585%207.44974%2011.906%207.65227%2011.8047C7.85479%2011.7035%208.03092%2011.5565%208.16667%2011.3753ZM7%203.5C4.93587%203.5%203.25704%205.14937%203.2095%207.20212L3.20833%207.29167V10.5H10.7917V7.29167C10.7917%205.1975%209.09417%203.5%207%203.5ZM7.91146%201.16667C8.21363%201.16667%208.45833%201.36267%208.45833%201.60417C8.45833%201.84567%208.21333%202.04167%207.91146%202.04167H6.08854C5.78638%202.04167%205.54167%201.84567%205.54167%201.60417C5.54167%201.36267%205.78667%201.16667%206.08854%201.16667H7.91146Z'%20fill='white'/%3e%3cpath%20d='M7.5565%204.8203C7.51631%204.86136%207.48461%204.90994%207.4632%204.96326C7.41994%205.0709%207.4212%205.19131%207.46671%205.29803C7.51221%205.40474%207.59824%205.48901%207.70587%205.5323C8.05713%205.67343%208.35813%205.91646%208.5701%206.2301C8.78207%206.54375%208.89533%206.91366%208.89528%207.29222C8.89528%207.40825%208.94138%207.51953%209.02342%207.60158C9.10547%207.68362%209.21675%207.72972%209.33278%207.72972C9.44882%207.72972%209.56009%207.68362%209.64214%207.60158C9.72419%207.51953%209.77028%207.40825%209.77028%207.29222C9.77036%206.73901%209.60487%206.19845%209.29512%205.7401C8.98538%205.28174%208.54555%204.92657%208.03224%204.7203C7.97892%204.69889%207.92191%204.68819%207.86446%204.68881C7.80701%204.68943%207.75024%204.70136%207.6974%204.72392C7.64456%204.74648%207.59668%204.77923%207.5565%204.8203Z'%20fill='%23FFE45B'/%3e%3c/svg%3e"
  , Gi = e => {
    switch (e) {
    case "zh":
        return "cn";
    case "en":
        return "en";
    default:
        return "en"
    }
}
  , $e = M.memo( ({dataList: e}) => {
    const {locale: t} = Pt()
      , n = Gi(t)
      , {t: r} = Te();
    return m.jsx(m.Fragment, {
        children: e.map( (s, i) => {
            const c = s[`toast_${n}`]
              , u = s[`link_${n}`];
            return c ? m.jsx("li", {
                children: m.jsxs("a", {
                    href: u,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "notice-link",
                    children: [m.jsx("img", {
                        className: "header-notice-icon",
                        src: Yi,
                        alt: "notice"
                    }), m.jsx("span", {
                        children: c
                    }), m.jsx("span", {
                        className: "link",
                        children: r("header.learn_more")
                    })]
                })
            }, `${c}-${i}`) : null
        }
        )
    })
}
);
$e.displayName = "NoticeItem";
const qn = M.memo( ({toastStatus: e, onToastChange: t, className: n, noticeDataReady: r=!1, preloadedData: s=[]}) => {
    const [i,c] = M.useState([])
      , [u,E] = M.useState(!1)
      , C = Be("(max-width: 899px)");
    Pt(),
    M.useEffect( () => {
        if (s.length > 0) {
            const R = s.slice(0, 3);
            c(R)
        }
    }
    , [s]),
    M.useEffect( () => {
        e === "1" && !i.length && r && s.length === 0 && Kn().then(R => {
            const L = R?.data || []
              , y = Array.isArray(L) ? L.slice(0, 3) : [];
            c(y)
        }
        ).catch(R => {
            console.warn("fetch notice list error", R)
        }
        )
    }
    , [e, i.length, r, s.length]);
    const N = () => {
        t && t("0")
    }
      , v = R => {
        E(R)
    }
    ;
    return !e || e === "0" ? null : i.length ? m.jsxs("div", {
        className: `header-toast ${n || ""}`,
        onMouseEnter: C ? void 0 : () => v(!0),
        onMouseLeave: C ? void 0 : () => v(!1),
        children: [m.jsx("div", {
            className: "toast-text",
            children: m.jsxs("ul", {
                className: Z("animate", {
                    paused: !C && u
                }),
                children: [m.jsx($e, {
                    dataList: i
                }), m.jsx($e, {
                    dataList: i
                }), m.jsx($e, {
                    dataList: i
                })]
            })
        }), m.jsx("img", {
            src: zi,
            className: "white-close",
            onClick: N,
            alt: "Close",
            role: "button",
            tabIndex: 0,
            onKeyDown: R => {
                (R.key === "Enter" || R.key === " ") && N()
            }
        })]
    }) : m.jsx("div", {
        className: `header-toast ${n || ""}`,
        style: {
            visibility: "hidden",
            pointerEvents: "none"
        },
        children: m.jsx("div", {
            className: "toast-text",
            children: m.jsx("ul", {
                children: m.jsx("li", {
                    style: {
                        height: "40px"
                    }
                })
            })
        })
    })
}
);
qn.displayName = "NoticeList";
const Hi = "_mainHeaderWrap_16sdd_177"
  , Qi = "_mainHeaderInner_16sdd_201"
  , fn = {
    mainHeaderWrap: Hi,
    mainHeaderInner: Qi
}
  , Ja = ({className: e, defaultNoticeStatus: t="1"}) => {
    const n = Be("(max-width: 899px)")
      , r = M.useRef(null)
      , s = () => sessionStorage.getItem("notice-closed") === "true" ? "0" : t
      , [i,c] = M.useState(s())
      , [u,E] = M.useState([])
      , [C,N] = M.useState(!1)
      , v = R => {
        c(R),
        R === "0" ? sessionStorage.setItem("notice-closed", "true") : sessionStorage.removeItem("notice-closed")
    }
    ;
    return M.useEffect( () => {
        t === "1" ? Kn().then(R => {
            const L = R?.data || []
              , y = Array.isArray(L) ? L.slice(0, 3) : [];
            E(y),
            N(!0)
        }
        ).catch(R => {
            console.warn("fetch notice list error", R),
            N(!0)
        }
        ) : N(!0)
    }
    , [t]),
    M.useLayoutEffect( () => {
        if (!n)
            return;
        const R = r.current;
        if (!R)
            return;
        let L = 0;
        const y = () => {
            cancelAnimationFrame(L),
            L = requestAnimationFrame( () => {
                const O = Math.ceil(R.getBoundingClientRect().height);
                document.documentElement.style.setProperty("--mainHeaderH", `${O}px`)
            }
            )
        }
        ;
        y();
        const I = new ResizeObserver( () => y());
        return I.observe(R),
        window.addEventListener("resize", y),
        window.addEventListener("load", y),
        () => {
            cancelAnimationFrame(L),
            I.disconnect(),
            window.removeEventListener("resize", y),
            window.removeEventListener("load", y)
        }
    }
    , [n, i, C, u.length]),
    m.jsxs("div", {
        ref: r,
        className: Z(fn.mainHeaderWrap, e),
        children: [m.jsx("div", {
            className: fn.mainHeaderInner,
            children: m.jsx(qn, {
                toastStatus: i,
                onToastChange: v,
                noticeDataReady: C,
                preloadedData: u
            })
        }), m.jsx(Ji, {})]
    })
}
  , Vi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMACQX1g9/8iPnopkDU47ycTCW0j3NiXBPQwauXZ1dRG+zcx6GURx4Q8cw52K8qem0VDTUwsbX4Qb0AAAOnSURBVGje7dppk5pAEAbgFhAFBUHFC+/7WHWNef//X0uVbmWC2jATgVQSno9bW1A9NT3T3UiFQqFQKBT+JqX9ealRnFa7VqJ0TYJGzwQwpBgdAGZ9EazTinTVquNLWSPez/+qt7zS228dD3QIcSGPAaH6MXrj3dpqsYWQEHIPUVvb0+h3fJ4cPAuoe/WGlXAxaLrzudscLMLKeXz9JA/PLGNCqvZ2Fa/oOlT+bg5qpMRGapqkwEOKOiStVEaKrC7JqiBVDZJ0rCJdNZLTR8oOGsnoIHUGSdhYSF11rbKzct5fnzoyYPr5BizY+QYsmMd8AxY+cg5Y+JZvwMJ3itHVkRlzTbwTMlQh3gwZmmrEqSFTnWwLHt48562VnFFnZKzBluQZm9JL38DIugYykLllvistOPTCBIys93WAWM68PzMRr9zvl9WPzQ/wdMO/JfpwBtb0tL4tXNsC70BPtC1Y7oS+lCpg2F36smmAt1Y5p22NhKGJV1qS+TFSKAHmGpN1fGGzAKdFj1wwqj5F7ZIbwlJZ/qKYghFKNM8nejBkw9Aoag2On1wuVDfyW3X/NCxizOjJEg/6CsnZlj2oF/RkJNEMtsEYUFQTDEOiQhoq9Lo9inISl0a4JicneWBsH/Y/3ok4UOnuo5nnq5QrIzabhDY4V8kDs05PWhIztAE4Y9m5x4SbDwt6Sf48QltyZVCRuE6GCgOcZfzqCdtu8qlefghZq8vONgfgNSWq75C/6uKPubl0vbKq4pVzZKFN8HZPVx2vIVYyqHL5rjEbJj5N6ohV7txfXXNjHji+v3q1S3gW/eqABLrbWH44iDVthmHTQgKLflVGbrbMHZG5Kv3KQn4kTzj8My/W/9TmsvJtUYVDpp8hpI/M78hNP88JFz9MXYJR3o9cKOuP9jO5Qt3g3rshIr9iQcG05RPRZibVL5a4kG3/VlGMmzqkVN2RduvFFiZzxV4oqsakshlOxE8FEsxC7/7YzyVzbTsePbk0uKMmPNLdOrB7zBPNw+Ds052/1Ln129ArKwcM16Of/PHJntedLW5067AbGKOjJpoXFwxrTIxNS8ST3JddJuuNwtTKDLvE85m+1im9+9G7eaR4tR1eCEjaCC/0VpSs4zBNLS+hVLYCkqIFdX7cm2yPqMOwRNJWLvtFMlkkL/seqbnaJjPFSnRxxO9PvpG6SXsnOlolq6+d0Z7QbzoaM3GdqC122TjSW/bGhpRdjD0VCoVCoVAoFP5bPwDbfAhmMyFUQAAAAABJRU5ErkJggg=="
  , Ki = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAbFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8+T+BWAAAAI3RSTlMAkm1Qvo4atpt5Lfjs3JNrVTw5Ig3x1woGzciup6OBZFhLEOv7bx8AAAEHSURBVGje7drJjoJAFEbhBrqgBBEUHHp0uO//jsbEmGgcLsmtMppzdgzJt2JB5f8gIiKie81GLjk0vfG8TbS5tNSzeSHH0htvJDIg32vdsZjCsljq4EKMYZmo3KmYw5Jr4FEAuNXALgDcaOAkAJwCAwMDAwMDAwNr4PIvfwq8rmS8jQ/3v3LIrSLDZX28/u6iwk11ujHP4sG7n/MfsFUkeFbLeV9dFDit5LL5Jjz8X8i1vA8DKwIGBgYGBgYGBgYGBgYGBga2h+tPm7Lhpz5GAQNfwj6zqXuZ7xj4PWEn9jW6WZV9rW5IZl+unM5ZN1GPBW1bLPXzSMt8P2wQqkg5CCUiIqJH7QGU2TtFnNtoQwAAAABJRU5ErkJggg=="
  , qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMA+wWeavg8y7Ru7Tb16eTcY0omFQsJ8sV9TzIRroYiHtW/dlkb4JkO0bepUy4r5tlxXkOiko2yu4hiEnBtAAAEoElEQVRo3u2a2XraMBCFJa8FDNjBuAZTVkOAhB2Szvu/WHcK8sDIktKb8l/z5UQLM2eOYA8ePPhfaT/V9p2dE04ir9tn/wSr5hwXUw4XuMPel90T+0i6408J3KBxCAfsQ3g9rYHA37ZMq7bGc5CBLyaWQdnB0QVpGpW2Idknm0Mp6ukz0yebcShN1dHWDeughF/Tu8mfQRU+09hvxwUNmqqLfl6CHnyrVqaaoM1bVl43CsAAw9JldMfBCI1VOd0xmKLqldH9AuZw9/K6WzBJ0pU+XzBLXdIlRBwMM81ldFcBGMe3JHzcED6AIy1sC7vkz9dggBeyDcI1rz98TzQr0RzdN8d7ZuyrcLUJF9wPhJJ3vnEjkGIexr9LvXjM94U/wTUndqYmIe1H7EwDrrlrSjog0GEXvJz/VrDe+O9L2+69+836uWmvd+yCpVg771jfeAoCg+sObYPr244XC953P15uOByy++X+UKJEc0u8Aze/kPGK2j3wbrr2AAQaOvMOiIzke1JTQ3gFskvOEqPCT1BgwVBSpK9obrUI2iCtKhTRGIM6UGTJEF4AYaUuXMHKKeY63wBBYwZaSv69FgeEnrow2lc+YzuDYasL+4BRdEHoeLaJ1YX7CSCkhUEJ22m3yzSYAABdvSJAGDMtbGwt4hf0hI0flmZ0gu2iaO+xUGfLmPklfxGOGJt6Yu3YhpNfqBr6v2nTQ5ZDTy2evnAIRVrUeJhYBpI5bD3UnrwxA2ygQEhd6q0J4RkU+MouWaNDhz5jqvwH6FnoE1JmAO8j+kSI8aLqR2ZCuEZUkPwfCs+veicU6X/QVm+ufA8UwSNQ/Z7sU2ccmRCuEGdsAVph9PlCjRMu6fPUGFHGtQnI3KSP5VIB0DsUyfWFPczXkCZloi+cksFTijpRbZrkxNgB4iMksnMgj0mrAIfyUvR0MpQYsXjf/NUCm0jWyFNWjWMdqUeIsZ7twXgVH/MAg3d1owg6wGoARnOg/CxZB4yZ5MbAVNEB1aqA0mEie8Cpv6ro7gNASWKG7DVOVcHnhi7g2KUeuXp5ySFxBLfwiAhQIHHKtMJUWC7Zahd/bdGuW3PmVw5tm8n+bmMKAuRYtBd8XhjABcFM4pZ5SxfuUI2JZOpz61fwuxbq+/HlTryfT2bUU3dK1pp69MtuN0BkiOcEmd0EkiCTaGNH62f5SUDA9dQfflOpgWMUowU3lIk7cBp3MuhDIRE4IaYYpSVsTjkPlyfiBy1fNr9OCd3PxCAtfjJvSKbI7SrcIyC6zaLw2vXkC72FyvFwKuw+ebWQsFnOHw+zbkt1fjUXFXGk0OSd0NlFfcJjwW3WeSn3fyz/GIDDqSRHfBXZKzwGqL+pxL7iz1YWcIMTkyP7a4hdanITvbneRDKYwpneSle4VyKN7TcvC8m49iwnTOrS5HOhhW+G82lQURC2S6bPGTbpKQifyscXtgFh12EKOFxXuFFTnG+besLvLaZIPNMQDhytEHSqKjzSjBPaaaAiPDWQVQ0OvKxwkrZN/cC6jHA9zZgpBqe6RHdbwnc2lTYziTV551WiX7zwxPaYeSyy6sZt9uDB/8s3I94sB5E6xpoAAAAASUVORK5CYII="
  , _i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMABfr1VY90DMisnSDo49g0vIJkw3sXEAnw7LexTUhDI9POaVst3piHOjAqHRSnoW4+k0U5hBK91gAAAqhJREFUaN7t2elymzAUBeAjFuMFG+843pc4ju04S3vf/9k6pfEIRwaU9krTH/p+M8AgzkHMheM4juM4juM4/zkRzGK/Podlj+EDZaxeOerX6WoDa56bPuVEsGJU69CtMyxYNDz6KoVprV6bVG2YJYIu3TWDQTI8qiEUJsKjWkIyGB7VGJK58Kg6kAyGR/UKyWR4qBHUKG8L2AjP5ggMKS+xER6/Jr5e1xMWwjNtAQjpRt18eOIdAHGhWyE4vJSEpzkGECkrvzMcns57dmPqIqwYw6PyeiI7Rn0eE8bwqAYn/PYYk2LKHh5pskXmfUKqHnd4pMYImblPd8x5wyO1r2fue3TPiDM8khdG+GNId+3NfHk2CT59FK0DU3jUYs6IBhWo8YRHLeZMVHz4O194ZDFfjTZUKIImsasIjyzmq9WeCq2haV61srKYr45x2f1BT42kimK+Wk6oRB9aziSVFrMUlEfuCC1HksqKWdpWBE5AT5NUajFLPSo3gK6gXlnMkniiCiH0rWqD0mKW0gZVCfAtL/2ZX1TM0nhAlVr4rih4fVCLOW+0pkoP+Bti+dFWirmsrji3PUlvLYs5L4lJwxAFNF82rznGrR8+6Vjg36SQZF1peAGvN9KzB68DabqAk2iSrjcwSmek7RmMBqTNS8EnIn0bMDqTvicwOpK+PhgtSd8JjALS5oPTlrR1wWlI2g7gFJK2AJxeSdsZnGYkdZM1FYsBQ405TZE+UaEZWHXkiUUWr4mlQURMny4CmVbdziDCU34/xcHGIGJ8r/+XsflBxOruL9FoanwQkRR0Us2jL7ZgtSh6X5M93UrAale4hRtflEEEpzdqL1Cg75NUB6/zSaDQKdegISzKN+gSNskGXcO2Vjfb9SSw7+ehEa7gOI7jOI7jOLDvFwOnQYGy6mYTAAAAAElFTkSuQmCC"
  , Xi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAqFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8j1z1tAAAAN3RSTlMAtvv59i7tBRMLCPFnKY+JQyAX5H5bG+HXxqiWTjk0JOjb0sq+g1VIPg/Owqx4c27eumCxnaOgtdhcTgAAA89JREFUaN7tmtly6jAMhkVYQsIedij7vkOh9fu/2ZkINx7rhDQkdq/8XXTGnWASW7+k+AcMBoPBYDAYDIa/o5YJYwJxaeP1gx28Sz7LQuhDTOr4cWsD73NiYZwgFpUCXl2GJPRZCNk8xKB4xYtrkIhJjoUwt+FX3Oc9HyEhZdymjzxn3I37GAO8cOFAUm7+5w8iYHA+a/SrIPC6rgeJ6RQwnsiMMyfGQrFSBVLQluPJneOcw2ghWbgudUjFEePJJeLeRAmpxIWUjuLUn6UajM84a7MIr/BEBKbjA+cR67bE8eClkBZcSOl54CPugNN4ruQ6amtY34X0OF35Eds4dcGLENLVAxVscbI2yQ6Z10IqVEANVZytE8Rb81XYbixUXx0U4fb8+ZYkgZUaQMg/t/8TlDHGJznLS8AO4UJagUJaJIH1mHQniLPgQlOJjZPubTmBZaUgugshKaSSk9PRifE7Ics/K4JiLpj4t8H4QPbzIoSkmCWWWJLArLEspC2oRXzTVzD+ZD49V4eQEPJNa5KVsW51mlRISrmTBDb9qVvOnvHV0IOHfdBNJEj23HYupIMLulgzn0swHuL4WwhJG1/+N+QCyTg9FlCYgEZ2TZE2RA7nQtJKnURvi3HaoJkh6ej7DGmBbpwZtjaO/HqVbYB2RritD9LsLEE/K+bzQarhBbRj7+Um05tyjWlFNAEZ0vEvbNDOmTSZQ92BLTcBuYkc6dkxaKdRkhd3ZPHSrJ0yWdwWL836ycgJzF7wjkwX5BFnJIFdHdDMmj0ZksV/gF5G+HxyAsvwsU4aU/bDtCj6Ij7Wx673rAv4904S2BG0Yd+Yz80eklb6oacjIPPPd+Bc8S1ZJLArb3/1cHrubSNIWH1Sqm9AUCmk3BgHNZLAVqR6KBeSxVXjzuXqYO+l6qFeSGe5NPdc+S26D6op9ugR6on848LdA7XYy/8PuPrkTPVG3AMlfD+F5BD3QDpT7RSEe6C2IjU7YaX5SMK+BupoCyFJ3EgC++KlWhXbrBAScQ/kY75dl5dqNUwKL/v2Njnm21o80lVQnEV4EUcW5phslAjpQIRE3ANZQ/acR7qikwC2dyLdA+qYDCA1KyGkqFJJHZO1GiGVItLRrhvmmBQ8JULa/O4e0ASWgTRUhJAi3YMwx6ScXkjVGO4BdUwwrSRCGMH3mO4BdUwOEI5KI7jFwhyTcyohdb3Y7gF1TLKVxCfFKKT47gHL/ZAl7gGi5RcVFxbGKrGQyu+5BxRrDG/ivf2LikaJERIdUbQyPlV4g3UmjDUYDAaDwWAwGAx/xD8HjRRIYYb4JQAAAABJRU5ErkJggg=="
  , Zi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMAtjioCXqIs9okkvRtR8sO+gTpix3ix5kZEPzvpYFoLBTQwVNOMdy6c1yuYLSeQdMgdOo5AAACNElEQVRo3u3YiW7iQAyAYZcjQO6DJEAI4aZA2/X7P91uUVfthIbMDA5pJf8v8GkAC8vAcRzHcRzHcRxRwWY+tJAsPz7YSxl3s0fyrDyodSNspPVSzqXP7d3+nLGx0ltusMfGmhVyD6bv9QY8xwYLg2p4iE02qoYtbLJONYyN5jDM8EcMXzdbDVJDvhERvD4vQS0SeOUAQAtwGkArsA3QCmzApd42mj/p1zWPUzX4Bd7zDAvvzU8nCrB/mYtdjBRljjwcXVyLahfbSsPvD17GSJVVSMIu/CtFug6ScA4AE590J5KDjwCwQMoikN7ZuqTwCqR/WwkpHErC9As4wwz/NNiyxz21JseQAt6Aejv/fjgEndb3w3+04NP9sD/WcL2Q4DtOluruiWScrENXrafsd88xw78JnrUFh23BiR78uu2o5US+COda8DOotxXhQgfOQCdXgKUO1m8leKUFd0V4EtbDxxJseRpusBdh6GS1cL8E4zxQhw0swVDUTkpShnEY9dUyXLyCofcc18gj+jn+qGPnprlGoVlq/q9DD3/NFt0zfPZI+AztwAsQS0jdTIQrXfqLQBVsQ7kFKWyKcLVLf/X5mnPzz8ckdNff7/r9a5X4sjcCMcdCRP+795LeMrM3KDeKXswdVFXsSdy4ANW8nOZerVFva8wHKg1L7mIKj2nqivAYqqKXZWF6WRaml2VherklGDxXEaaXrQAem5fgpRPIRC/HE3h4wWJwyD3gOI7juNr+AkB7wfGuH08AAAAAAElFTkSuQmCC"
  , $i = "/assets/footer_bg-evCQ92OT.png"
  , ea = "/assets/footer_bg_m-ckgnJlhY.png"
  , ta = "_footerWrapper_127lu_177"
  , na = "_footerNoBg_127lu_185"
  , ra = "_footerWrapperActive_127lu_189"
  , sa = "_footer_bg_127lu_189"
  , oa = "_footer_bg_pc_127lu_201"
  , ia = "_footer_bg_mobile_127lu_205"
  , aa = "_footerInner_127lu_210"
  , ca = "_footer_127lu_177"
  , la = "_footer_l_127lu_221"
  , ua = "_footer_item_127lu_226"
  , fa = "_footer_item_title_127lu_229"
  , da = "_footer_item_list_127lu_235"
  , ha = "_footer_item_list_item_127lu_235"
  , Aa = "_footer_item_share_127lu_255"
  , pa = "_footer_r_share_127lu_259"
  , ma = "_footer_r_share_item_title_127lu_287"
  , ga = "_logo_127lu_305"
  , wa = "_copyright_127lu_315"
  , Sa = "_copyright_mobile_127lu_323"
  , ba = "_footer_r_127lu_259"
  , _ = {
    footerWrapper: ta,
    footerNoBg: na,
    footerWrapperActive: ra,
    footer_bg: sa,
    footer_bg_pc: oa,
    footer_bg_mobile: ia,
    footerInner: aa,
    footer: ca,
    footer_l: la,
    footer_item: ua,
    footer_item_title: fa,
    footer_item_list: da,
    footer_item_list_item: ha,
    footer_item_share: Aa,
    footer_r_share: pa,
    footer_r_share_item_title: ma,
    logo: ga,
    copyright: wa,
    copyright_mobile: Sa,
    footer_r: ba
}
  , za = ({showBg: e=!0}) => {
    const {t, i18n: n} = Te()
      , r = n.language === "zh"
      , [s,i] = Sr({
        threshold: 0,
        triggerOnce: !1,
        rootMargin: "0px"
    })
      , c = [{
        title: t("footer.support"),
        list: [{
            text: t("footer.service"),
            href: `${re.footer.fileLink}SUN_Terms_of_Use_${r ? "cn" : "en"}.pdf`,
            blank: !0
        }, {
            text: t("footer.privacy"),
            href: `${re.footer.fileLink}SUN_Privacy_Policy_${r ? "cn" : "en"}.pdf`,
            blank: !0
        }, {
            text: t("footer.risks"),
            href: `${re.sunioLinkUrl}/?lang=${r ? "zh-CN" : "en-US"}#/risks`,
            blank: !0
        }, {
            text: t("footer.help_center"),
            href: `${re.footer.sunioHelpCenterLink}${r ? "zh-cn" : "en-us"}`,
            blank: !0
        }, {
            text: t("footer.swap_help_center"),
            href: `${re.footer.swapHelpCenterLink}${r ? "zh-cn" : "en-us"}`,
            blank: !0
        }, {
            text: t("footer.forum"),
            href: "https://forum.sun.io/",
            blank: !0
        }]
    }, {
        title: "App",
        list: [{
            text: t("footer.airdrop"),
            href: `${re.sunioLinkUrl}?lang=${r ? "zh-CN" : "en-US"}#/claim`,
            blank: !0
        }, {
            text: "WTRX",
            href: `${re.footer.justLink}?lang=${r ? "zh-CN" : "en-US"}#/trans`,
            blank: !0
        }, {
            text: "WBTT",
            href: `${re.footer.justLink}?lang=${r ? "zh-CN" : "en-US"}#/wbtt`,
            blank: !0
        }, {
            text: t("footer.sun_swap"),
            href: `${re.footer.justSwap}?lang=${r ? "zh-CN" : "en-US"}#/sun`,
            blank: !0
        }, {
            text: t("footer.repurchase"),
            href: `${re.footer.swapRepurchaseUrl}?lang=${r ? "zh-CN" : "en-US"}#/`,
            blank: !0
        }, {
            text: t("footer.century_mining"),
            href: `${re.footer.centuryMining.replace("#", `?lang=${r ? "zh-CN" : "en-US"}#`)}`,
            blank: !0
        }]
    }, {
        title: t("footer.about"),
        list: [{
            text: t("footer.documents"),
            href: `${re.sunioLinkUrl}?lang=${r ? "zh-CN" : "en-US"}#/documents`,
            blank: !0
        }, {
            text: t("footer.white_paper"),
            href: `${re.footer.fileLink}SUN_V3_Whitepaper_${r ? "cn" : "en"}.pdf`,
            blank: !0
        }, {
            text: t("footer.white_paper_mica"),
            href: re.footer.whitePaperMica,
            blank: !0
        }, {
            text: "Storage3",
            href: re.footer.storage3Link,
            blank: !0
        }, {
            text: "Github",
            href: re.footer.github,
            blank: !0
        }]
    }]
      , u = [{
        title: "Telegram",
        logo: _i,
        url: "https://t.me/officialsunecosystem "
    }, {
        title: "X",
        logo: Xi,
        url: "https://x.com/SUNWUKONG_ZH"
    }, {
        title: "Forum",
        logo: Zi,
        url: "https://forum.sun.io/"
    }, {
        title: "Docs",
        logo: Ki,
        url: "https://docs.sun.io/"
    }, {
        title: "GitHub",
        logo: qi,
        url: "https://github.com/sun-protocol"
    }, {
        title: "Discord",
        logo: Vi,
        url: "https://discord.com/invite/fFNgs75wgV"
    }];
    return m.jsxs("div", {
        className: Z(_.footerWrapper, {
            [_.footerWrapperActive]: i,
            [_.footerNoBg]: !e
        }),
        ref: s,
        children: [e && m.jsxs("div", {
            className: _.footer_bg,
            children: [m.jsx("img", {
                className: _.footer_bg_pc,
                src: $i,
                alt: "footer"
            }), m.jsx("img", {
                className: _.footer_bg_mobile,
                src: ea,
                alt: "footer"
            })]
        }), m.jsxs("div", {
            className: _.footerInner,
            children: [m.jsxs("div", {
                className: _.footer,
                children: [m.jsxs("div", {
                    className: _.footer_l,
                    children: [c.map( (E, C) => m.jsxs("div", {
                        className: _.footer_item,
                        children: [m.jsx("div", {
                            className: _.footer_item_title,
                            children: E.title
                        }), m.jsx("div", {
                            className: _.footer_item_list,
                            children: E.list.map( (N, v) => m.jsx("div", {
                                className: _.footer_item_list_item,
                                children: m.jsx("a", {
                                    href: N.href,
                                    target: N.blank ? "_blank" : "_self",
                                    rel: "noreferrer",
                                    children: N.text
                                })
                            }, v))
                        })]
                    }, C)), m.jsxs("div", {
                        className: Z(_.footer_item, _.footer_item_share),
                        children: [m.jsx("div", {
                            className: _.footer_r_share,
                            children: u.map( (E, C) => m.jsxs("a", {
                                href: E.url,
                                target: "_blank",
                                rel: "noreferrer",
                                className: _.footer_r_share_item,
                                children: [m.jsx("img", {
                                    src: E.logo,
                                    alt: E.title
                                }), m.jsx("div", {
                                    className: _.footer_r_share_item_title,
                                    children: E.title
                                })]
                            }, C))
                        }), m.jsx("div", {
                            className: _.logo,
                            children: m.jsx("img", {
                                src: r ? at : ct,
                                alt: "SUN"
                            })
                        })]
                    })]
                }), m.jsxs("div", {
                    className: _.footer_r,
                    children: [m.jsx("div", {
                        className: _.footer_r_share,
                        children: u.map( (E, C) => m.jsxs("a", {
                            href: E.url,
                            target: "_blank",
                            rel: "noreferrer",
                            className: _.footer_r_share_item,
                            children: [m.jsx("img", {
                                src: E.logo,
                                alt: E.title
                            }), m.jsx("div", {
                                className: _.footer_r_share_item_title,
                                children: E.title
                            })]
                        }, C))
                    }), m.jsx("div", {
                        className: _.logo,
                        children: m.jsx("img", {
                            src: r ? at : ct,
                            alt: "SUN"
                        })
                    }), m.jsx("div", {
                        className: _.copyright,
                        children: "©2014-2034 Macromedia, Inc. All rights reserved."
                    })]
                })]
            }), m.jsx("div", {
                className: _.copyright_mobile,
                children: "©2014-2034 Macromedia, Inc. All rights reserved."
            })]
        })]
    })
}
;
export {Ca as B, za as F, H as L, Ja as M, te as a, Z as b, re as c, Sr as d, Be as e, V as g, Wn as i, ar as r, Te as u};
