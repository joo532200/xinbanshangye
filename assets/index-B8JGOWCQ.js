const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/index-Dv8SPHfJ.js", "assets/index-CnNRYrpz.js", "assets/index-D6bpPgN2.css", "assets/index-tcw88Kaf.css", "assets/index-BmygqGhB.js", "assets/index-Bavo-htr.css"]))) => i.map(i => d[i]);
function qp(f, i) {
    for (var s = 0; s < i.length; s++) {
        const c = i[s];
        if (typeof c != "string" && !Array.isArray(c)) {
            for (const r in c)
                if (r !== "default" && !(r in f)) {
                    const d = Object.getOwnPropertyDescriptor(c, r);
                    d && Object.defineProperty(f, r, d.get ? d : {
                        enumerable: !0,
                        get: () => c[r]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        c(r);
    new MutationObserver(r => {
        for (const d of r)
            if (d.type === "childList")
                for (const m of d.addedNodes)
                    m.tagName === "LINK" && m.rel === "modulepreload" && c(m)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(r) {
        const d = {};
        return r.integrity && (d.integrity = r.integrity),
        r.referrerPolicy && (d.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? d.credentials = "include" : r.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
        d
    }
    function c(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const d = s(r);
        fetch(r.href, d)
    }
}
)();
var M0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yp(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f
}
var ws = {
    exports: {}
}
  , Ln = {};
var oh;
function Vp() {
    if (oh)
        return Ln;
    oh = 1;
    var f = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.fragment");
    function s(c, r, d) {
        var m = null;
        if (d !== void 0 && (m = "" + d),
        r.key !== void 0 && (m = "" + r.key),
        "key"in r) {
            d = {};
            for (var p in r)
                p !== "key" && (d[p] = r[p])
        } else
            d = r;
        return r = d.ref,
        {
            $$typeof: f,
            type: c,
            key: m,
            ref: r !== void 0 ? r : null,
            props: d
        }
    }
    return Ln.Fragment = i,
    Ln.jsx = s,
    Ln.jsxs = s,
    Ln
}
var dh;
function Gp() {
    return dh || (dh = 1,
    ws.exports = Vp()),
    ws.exports
}
var Pt = Gp()
  , qs = {
    exports: {}
}
  , P = {};
var hh;
function Xp() {
    if (hh)
        return P;
    hh = 1;
    var f = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , c = Symbol.for("react.strict_mode")
      , r = Symbol.for("react.profiler")
      , d = Symbol.for("react.consumer")
      , m = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , y = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , T = Symbol.for("react.lazy")
      , S = Symbol.for("react.activity")
      , D = Symbol.iterator;
    function B(b) {
        return b === null || typeof b != "object" ? null : (b = D && b[D] || b["@@iterator"],
        typeof b == "function" ? b : null)
    }
    var H = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , G = Object.assign
      , Y = {};
    function V(b, M, w) {
        this.props = b,
        this.context = M,
        this.refs = Y,
        this.updater = w || H
    }
    V.prototype.isReactComponent = {},
    V.prototype.setState = function(b, M) {
        if (typeof b != "object" && typeof b != "function" && b != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, b, M, "setState")
    }
    ,
    V.prototype.forceUpdate = function(b) {
        this.updater.enqueueForceUpdate(this, b, "forceUpdate")
    }
    ;
    function q() {}
    q.prototype = V.prototype;
    function K(b, M, w) {
        this.props = b,
        this.context = M,
        this.refs = Y,
        this.updater = w || H
    }
    var ut = K.prototype = new q;
    ut.constructor = K,
    G(ut, V.prototype),
    ut.isPureReactComponent = !0;
    var st = Array.isArray;
    function pt() {}
    var F = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , At = Object.prototype.hasOwnProperty;
    function Ot(b, M, w) {
        var X = w.ref;
        return {
            $$typeof: f,
            type: b,
            key: M,
            ref: X !== void 0 ? X : null,
            props: w
        }
    }
    function Ct(b, M) {
        return Ot(b.type, M, b.props)
    }
    function be(b) {
        return typeof b == "object" && b !== null && b.$$typeof === f
    }
    function Ft(b) {
        var M = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + b.replace(/[=:]/g, function(w) {
            return M[w]
        })
    }
    var Vt = /\/+/g;
    function Mt(b, M) {
        return typeof b == "object" && b !== null && b.key != null ? Ft("" + b.key) : M.toString(36)
    }
    function ee(b) {
        switch (b.status) {
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            switch (typeof b.status == "string" ? b.then(pt, pt) : (b.status = "pending",
            b.then(function(M) {
                b.status === "pending" && (b.status = "fulfilled",
                b.value = M)
            }, function(M) {
                b.status === "pending" && (b.status = "rejected",
                b.reason = M)
            })),
            b.status) {
            case "fulfilled":
                return b.value;
            case "rejected":
                throw b.reason
            }
        }
        throw b
    }
    function _(b, M, w, X, I) {
        var lt = typeof b;
        (lt === "undefined" || lt === "boolean") && (b = null);
        var gt = !1;
        if (b === null)
            gt = !0;
        else
            switch (lt) {
            case "bigint":
            case "string":
            case "number":
                gt = !0;
                break;
            case "object":
                switch (b.$$typeof) {
                case f:
                case i:
                    gt = !0;
                    break;
                case T:
                    return gt = b._init,
                    _(gt(b._payload), M, w, X, I)
                }
            }
        if (gt)
            return I = I(b),
            gt = X === "" ? "." + Mt(b, 0) : X,
            st(I) ? (w = "",
            gt != null && (w = gt.replace(Vt, "$&/") + "/"),
            _(I, M, w, "", function(Ya) {
                return Ya
            })) : I != null && (be(I) && (I = Ct(I, w + (I.key == null || b && b.key === I.key ? "" : ("" + I.key).replace(Vt, "$&/") + "/") + gt)),
            M.push(I)),
            1;
        gt = 0;
        var It = X === "" ? "." : X + ":";
        if (st(b))
            for (var Ut = 0; Ut < b.length; Ut++)
                X = b[Ut],
                lt = It + Mt(X, Ut),
                gt += _(X, M, w, lt, I);
        else if (Ut = B(b),
        typeof Ut == "function")
            for (b = Ut.call(b),
            Ut = 0; !(X = b.next()).done; )
                X = X.value,
                lt = It + Mt(X, Ut++),
                gt += _(X, M, w, lt, I);
        else if (lt === "object") {
            if (typeof b.then == "function")
                return _(ee(b), M, w, X, I);
            throw M = String(b),
            Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.")
        }
        return gt
    }
    function j(b, M, w) {
        if (b == null)
            return b;
        var X = []
          , I = 0;
        return _(b, X, "", "", function(lt) {
            return M.call(w, lt, I++)
        }),
        X
    }
    function $(b) {
        if (b._status === -1) {
            var M = b._result;
            M = M(),
            M.then(function(w) {
                (b._status === 0 || b._status === -1) && (b._status = 1,
                b._result = w)
            }, function(w) {
                (b._status === 0 || b._status === -1) && (b._status = 2,
                b._result = w)
            }),
            b._status === -1 && (b._status = 0,
            b._result = M)
        }
        if (b._status === 1)
            return b._result.default;
        throw b._result
    }
    var rt = typeof reportError == "function" ? reportError : function(b) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var M = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
                error: b
            });
            if (!window.dispatchEvent(M))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", b);
            return
        }
        console.error(b)
    }
      , mt = {
        map: j,
        forEach: function(b, M, w) {
            j(b, function() {
                M.apply(this, arguments)
            }, w)
        },
        count: function(b) {
            var M = 0;
            return j(b, function() {
                M++
            }),
            M
        },
        toArray: function(b) {
            return j(b, function(M) {
                return M
            }) || []
        },
        only: function(b) {
            if (!be(b))
                throw Error("React.Children.only expected to receive a single React element child.");
            return b
        }
    };
    return P.Activity = S,
    P.Children = mt,
    P.Component = V,
    P.Fragment = s,
    P.Profiler = r,
    P.PureComponent = K,
    P.StrictMode = c,
    P.Suspense = y,
    P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F,
    P.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(b) {
            return F.H.useMemoCache(b)
        }
    },
    P.cache = function(b) {
        return function() {
            return b.apply(null, arguments)
        }
    }
    ,
    P.cacheSignal = function() {
        return null
    }
    ,
    P.cloneElement = function(b, M, w) {
        if (b == null)
            throw Error("The argument must be a React element, but you passed " + b + ".");
        var X = G({}, b.props)
          , I = b.key;
        if (M != null)
            for (lt in M.key !== void 0 && (I = "" + M.key),
            M)
                !At.call(M, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && M.ref === void 0 || (X[lt] = M[lt]);
        var lt = arguments.length - 2;
        if (lt === 1)
            X.children = w;
        else if (1 < lt) {
            for (var gt = Array(lt), It = 0; It < lt; It++)
                gt[It] = arguments[It + 2];
            X.children = gt
        }
        return Ot(b.type, I, X)
    }
    ,
    P.createContext = function(b) {
        return b = {
            $$typeof: m,
            _currentValue: b,
            _currentValue2: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        b.Provider = b,
        b.Consumer = {
            $$typeof: d,
            _context: b
        },
        b
    }
    ,
    P.createElement = function(b, M, w) {
        var X, I = {}, lt = null;
        if (M != null)
            for (X in M.key !== void 0 && (lt = "" + M.key),
            M)
                At.call(M, X) && X !== "key" && X !== "__self" && X !== "__source" && (I[X] = M[X]);
        var gt = arguments.length - 2;
        if (gt === 1)
            I.children = w;
        else if (1 < gt) {
            for (var It = Array(gt), Ut = 0; Ut < gt; Ut++)
                It[Ut] = arguments[Ut + 2];
            I.children = It
        }
        if (b && b.defaultProps)
            for (X in gt = b.defaultProps,
            gt)
                I[X] === void 0 && (I[X] = gt[X]);
        return Ot(b, lt, I)
    }
    ,
    P.createRef = function() {
        return {
            current: null
        }
    }
    ,
    P.forwardRef = function(b) {
        return {
            $$typeof: p,
            render: b
        }
    }
    ,
    P.isValidElement = be,
    P.lazy = function(b) {
        return {
            $$typeof: T,
            _payload: {
                _status: -1,
                _result: b
            },
            _init: $
        }
    }
    ,
    P.memo = function(b, M) {
        return {
            $$typeof: g,
            type: b,
            compare: M === void 0 ? null : M
        }
    }
    ,
    P.startTransition = function(b) {
        var M = F.T
          , w = {};
        F.T = w;
        try {
            var X = b()
              , I = F.S;
            I !== null && I(w, X),
            typeof X == "object" && X !== null && typeof X.then == "function" && X.then(pt, rt)
        } catch (lt) {
            rt(lt)
        } finally {
            M !== null && w.types !== null && (M.types = w.types),
            F.T = M
        }
    }
    ,
    P.unstable_useCacheRefresh = function() {
        return F.H.useCacheRefresh()
    }
    ,
    P.use = function(b) {
        return F.H.use(b)
    }
    ,
    P.useActionState = function(b, M, w) {
        return F.H.useActionState(b, M, w)
    }
    ,
    P.useCallback = function(b, M) {
        return F.H.useCallback(b, M)
    }
    ,
    P.useContext = function(b) {
        return F.H.useContext(b)
    }
    ,
    P.useDebugValue = function() {}
    ,
    P.useDeferredValue = function(b, M) {
        return F.H.useDeferredValue(b, M)
    }
    ,
    P.useEffect = function(b, M) {
        return F.H.useEffect(b, M)
    }
    ,
    P.useEffectEvent = function(b) {
        return F.H.useEffectEvent(b)
    }
    ,
    P.useId = function() {
        return F.H.useId()
    }
    ,
    P.useImperativeHandle = function(b, M, w) {
        return F.H.useImperativeHandle(b, M, w)
    }
    ,
    P.useInsertionEffect = function(b, M) {
        return F.H.useInsertionEffect(b, M)
    }
    ,
    P.useLayoutEffect = function(b, M) {
        return F.H.useLayoutEffect(b, M)
    }
    ,
    P.useMemo = function(b, M) {
        return F.H.useMemo(b, M)
    }
    ,
    P.useOptimistic = function(b, M) {
        return F.H.useOptimistic(b, M)
    }
    ,
    P.useReducer = function(b, M, w) {
        return F.H.useReducer(b, M, w)
    }
    ,
    P.useRef = function(b) {
        return F.H.useRef(b)
    }
    ,
    P.useState = function(b) {
        return F.H.useState(b)
    }
    ,
    P.useSyncExternalStore = function(b, M, w) {
        return F.H.useSyncExternalStore(b, M, w)
    }
    ,
    P.useTransition = function() {
        return F.H.useTransition()
    }
    ,
    P.version = "19.2.3",
    P
}
var mh;
function tf() {
    return mh || (mh = 1,
    qs.exports = Xp()),
    qs.exports
}
var N = tf();
const Qp = Yp(N)
  , U0 = qp({
    __proto__: null,
    default: Qp
}, [N]);
var Ys = {
    exports: {}
}
  , Hn = {}
  , Vs = {
    exports: {}
}
  , Gs = {};
var gh;
function Zp() {
    return gh || (gh = 1,
    (function(f) {
        function i(_, j) {
            var $ = _.length;
            _.push(j);
            t: for (; 0 < $; ) {
                var rt = $ - 1 >>> 1
                  , mt = _[rt];
                if (0 < r(mt, j))
                    _[rt] = j,
                    _[$] = mt,
                    $ = rt;
                else
                    break t
            }
        }
        function s(_) {
            return _.length === 0 ? null : _[0]
        }
        function c(_) {
            if (_.length === 0)
                return null;
            var j = _[0]
              , $ = _.pop();
            if ($ !== j) {
                _[0] = $;
                t: for (var rt = 0, mt = _.length, b = mt >>> 1; rt < b; ) {
                    var M = 2 * (rt + 1) - 1
                      , w = _[M]
                      , X = M + 1
                      , I = _[X];
                    if (0 > r(w, $))
                        X < mt && 0 > r(I, w) ? (_[rt] = I,
                        _[X] = $,
                        rt = X) : (_[rt] = w,
                        _[M] = $,
                        rt = M);
                    else if (X < mt && 0 > r(I, $))
                        _[rt] = I,
                        _[X] = $,
                        rt = X;
                    else
                        break t
                }
            }
            return j
        }
        function r(_, j) {
            var $ = _.sortIndex - j.sortIndex;
            return $ !== 0 ? $ : _.id - j.id
        }
        if (f.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            f.unstable_now = function() {
                return d.now()
            }
        } else {
            var m = Date
              , p = m.now();
            f.unstable_now = function() {
                return m.now() - p
            }
        }
        var y = []
          , g = []
          , T = 1
          , S = null
          , D = 3
          , B = !1
          , H = !1
          , G = !1
          , Y = !1
          , V = typeof setTimeout == "function" ? setTimeout : null
          , q = typeof clearTimeout == "function" ? clearTimeout : null
          , K = typeof setImmediate < "u" ? setImmediate : null;
        function ut(_) {
            for (var j = s(g); j !== null; ) {
                if (j.callback === null)
                    c(g);
                else if (j.startTime <= _)
                    c(g),
                    j.sortIndex = j.expirationTime,
                    i(y, j);
                else
                    break;
                j = s(g)
            }
        }
        function st(_) {
            if (G = !1,
            ut(_),
            !H)
                if (s(y) !== null)
                    H = !0,
                    pt || (pt = !0,
                    Ft());
                else {
                    var j = s(g);
                    j !== null && ee(st, j.startTime - _)
                }
        }
        var pt = !1
          , F = -1
          , At = 5
          , Ot = -1;
        function Ct() {
            return Y ? !0 : !(f.unstable_now() - Ot < At)
        }
        function be() {
            if (Y = !1,
            pt) {
                var _ = f.unstable_now();
                Ot = _;
                var j = !0;
                try {
                    t: {
                        H = !1,
                        G && (G = !1,
                        q(F),
                        F = -1),
                        B = !0;
                        var $ = D;
                        try {
                            e: {
                                for (ut(_),
                                S = s(y); S !== null && !(S.expirationTime > _ && Ct()); ) {
                                    var rt = S.callback;
                                    if (typeof rt == "function") {
                                        S.callback = null,
                                        D = S.priorityLevel;
                                        var mt = rt(S.expirationTime <= _);
                                        if (_ = f.unstable_now(),
                                        typeof mt == "function") {
                                            S.callback = mt,
                                            ut(_),
                                            j = !0;
                                            break e
                                        }
                                        S === s(y) && c(y),
                                        ut(_)
                                    } else
                                        c(y);
                                    S = s(y)
                                }
                                if (S !== null)
                                    j = !0;
                                else {
                                    var b = s(g);
                                    b !== null && ee(st, b.startTime - _),
                                    j = !1
                                }
                            }
                            break t
                        } finally {
                            S = null,
                            D = $,
                            B = !1
                        }
                        j = void 0
                    }
                } finally {
                    j ? Ft() : pt = !1
                }
            }
        }
        var Ft;
        if (typeof K == "function")
            Ft = function() {
                K(be)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Vt = new MessageChannel
              , Mt = Vt.port2;
            Vt.port1.onmessage = be,
            Ft = function() {
                Mt.postMessage(null)
            }
        } else
            Ft = function() {
                V(be, 0)
            }
            ;
        function ee(_, j) {
            F = V(function() {
                _(f.unstable_now())
            }, j)
        }
        f.unstable_IdlePriority = 5,
        f.unstable_ImmediatePriority = 1,
        f.unstable_LowPriority = 4,
        f.unstable_NormalPriority = 3,
        f.unstable_Profiling = null,
        f.unstable_UserBlockingPriority = 2,
        f.unstable_cancelCallback = function(_) {
            _.callback = null
        }
        ,
        f.unstable_forceFrameRate = function(_) {
            0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : At = 0 < _ ? Math.floor(1e3 / _) : 5
        }
        ,
        f.unstable_getCurrentPriorityLevel = function() {
            return D
        }
        ,
        f.unstable_next = function(_) {
            switch (D) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = D
            }
            var $ = D;
            D = j;
            try {
                return _()
            } finally {
                D = $
            }
        }
        ,
        f.unstable_requestPaint = function() {
            Y = !0
        }
        ,
        f.unstable_runWithPriority = function(_, j) {
            switch (_) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                _ = 3
            }
            var $ = D;
            D = _;
            try {
                return j()
            } finally {
                D = $
            }
        }
        ,
        f.unstable_scheduleCallback = function(_, j, $) {
            var rt = f.unstable_now();
            switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
            $ = typeof $ == "number" && 0 < $ ? rt + $ : rt) : $ = rt,
            _) {
            case 1:
                var mt = -1;
                break;
            case 2:
                mt = 250;
                break;
            case 5:
                mt = 1073741823;
                break;
            case 4:
                mt = 1e4;
                break;
            default:
                mt = 5e3
            }
            return mt = $ + mt,
            _ = {
                id: T++,
                callback: j,
                priorityLevel: _,
                startTime: $,
                expirationTime: mt,
                sortIndex: -1
            },
            $ > rt ? (_.sortIndex = $,
            i(g, _),
            s(y) === null && _ === s(g) && (G ? (q(F),
            F = -1) : G = !0,
            ee(st, $ - rt))) : (_.sortIndex = mt,
            i(y, _),
            H || B || (H = !0,
            pt || (pt = !0,
            Ft()))),
            _
        }
        ,
        f.unstable_shouldYield = Ct,
        f.unstable_wrapCallback = function(_) {
            var j = D;
            return function() {
                var $ = D;
                D = j;
                try {
                    return _.apply(this, arguments)
                } finally {
                    D = $
                }
            }
        }
    }
    )(Gs)),
    Gs
}
var ph;
function Kp() {
    return ph || (ph = 1,
    Vs.exports = Zp()),
    Vs.exports
}
var Xs = {
    exports: {}
}
  , Wt = {};
var yh;
function Jp() {
    if (yh)
        return Wt;
    yh = 1;
    var f = tf();
    function i(y) {
        var g = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var T = 2; T < arguments.length; T++)
                g += "&args[]=" + encodeURIComponent(arguments[T])
        }
        return "Minified React error #" + y + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function s() {}
    var c = {
        d: {
            f: s,
            r: function() {
                throw Error(i(522))
            },
            D: s,
            C: s,
            L: s,
            m: s,
            X: s,
            S: s,
            M: s
        },
        p: 0,
        findDOMNode: null
    }
      , r = Symbol.for("react.portal");
    function d(y, g, T) {
        var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: r,
            key: S == null ? null : "" + S,
            children: y,
            containerInfo: g,
            implementation: T
        }
    }
    var m = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(y, g) {
        if (y === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c,
    Wt.createPortal = function(y, g) {
        var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(i(299));
        return d(y, g, null, T)
    }
    ,
    Wt.flushSync = function(y) {
        var g = m.T
          , T = c.p;
        try {
            if (m.T = null,
            c.p = 2,
            y)
                return y()
        } finally {
            m.T = g,
            c.p = T,
            c.d.f()
        }
    }
    ,
    Wt.preconnect = function(y, g) {
        typeof y == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        c.d.C(y, g))
    }
    ,
    Wt.prefetchDNS = function(y) {
        typeof y == "string" && c.d.D(y)
    }
    ,
    Wt.preinit = function(y, g) {
        if (typeof y == "string" && g && typeof g.as == "string") {
            var T = g.as
              , S = p(T, g.crossOrigin)
              , D = typeof g.integrity == "string" ? g.integrity : void 0
              , B = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            T === "style" ? c.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: S,
                integrity: D,
                fetchPriority: B
            }) : T === "script" && c.d.X(y, {
                crossOrigin: S,
                integrity: D,
                fetchPriority: B,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    Wt.preinitModule = function(y, g) {
        if (typeof y == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var T = p(g.as, g.crossOrigin);
                    c.d.M(y, {
                        crossOrigin: T,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && c.d.M(y)
    }
    ,
    Wt.preload = function(y, g) {
        if (typeof y == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var T = g.as
              , S = p(T, g.crossOrigin);
            c.d.L(y, T, {
                crossOrigin: S,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    Wt.preloadModule = function(y, g) {
        if (typeof y == "string")
            if (g) {
                var T = p(g.as, g.crossOrigin);
                c.d.m(y, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: T,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                c.d.m(y)
    }
    ,
    Wt.requestFormReset = function(y) {
        c.d.r(y)
    }
    ,
    Wt.unstable_batchedUpdates = function(y, g) {
        return y(g)
    }
    ,
    Wt.useFormState = function(y, g, T) {
        return m.H.useFormState(y, g, T)
    }
    ,
    Wt.useFormStatus = function() {
        return m.H.useHostTransitionStatus()
    }
    ,
    Wt.version = "19.2.3",
    Wt
}
var vh;
function $p() {
    if (vh)
        return Xs.exports;
    vh = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (i) {
                console.error(i)
            }
    }
    return f(),
    Xs.exports = Jp(),
    Xs.exports
}
var Sh;
function kp() {
    if (Sh)
        return Hn;
    Sh = 1;
    var f = Kp()
      , i = tf()
      , s = $p();
    function c(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                e += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function d(t) {
        var e = t
          , l = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (l = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? l : null
    }
    function m(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function p(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function y(t) {
        if (d(t) !== t)
            throw Error(c(188))
    }
    function g(t) {
        var e = t.alternate;
        if (!e) {
            if (e = d(t),
            e === null)
                throw Error(c(188));
            return e !== t ? null : t
        }
        for (var l = t, a = e; ; ) {
            var n = l.return;
            if (n === null)
                break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return,
                a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u; ) {
                    if (u === l)
                        return y(n),
                        t;
                    if (u === a)
                        return y(n),
                        e;
                    u = u.sibling
                }
                throw Error(c(188))
            }
            if (l.return !== a.return)
                l = n,
                a = u;
            else {
                for (var o = !1, h = n.child; h; ) {
                    if (h === l) {
                        o = !0,
                        l = n,
                        a = u;
                        break
                    }
                    if (h === a) {
                        o = !0,
                        a = n,
                        l = u;
                        break
                    }
                    h = h.sibling
                }
                if (!o) {
                    for (h = u.child; h; ) {
                        if (h === l) {
                            o = !0,
                            l = u,
                            a = n;
                            break
                        }
                        if (h === a) {
                            o = !0,
                            a = u,
                            l = n;
                            break
                        }
                        h = h.sibling
                    }
                    if (!o)
                        throw Error(c(189))
                }
            }
            if (l.alternate !== a)
                throw Error(c(190))
        }
        if (l.tag !== 3)
            throw Error(c(188));
        return l.stateNode.current === l ? t : e
    }
    function T(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = T(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var S = Object.assign
      , D = Symbol.for("react.element")
      , B = Symbol.for("react.transitional.element")
      , H = Symbol.for("react.portal")
      , G = Symbol.for("react.fragment")
      , Y = Symbol.for("react.strict_mode")
      , V = Symbol.for("react.profiler")
      , q = Symbol.for("react.consumer")
      , K = Symbol.for("react.context")
      , ut = Symbol.for("react.forward_ref")
      , st = Symbol.for("react.suspense")
      , pt = Symbol.for("react.suspense_list")
      , F = Symbol.for("react.memo")
      , At = Symbol.for("react.lazy")
      , Ot = Symbol.for("react.activity")
      , Ct = Symbol.for("react.memo_cache_sentinel")
      , be = Symbol.iterator;
    function Ft(t) {
        return t === null || typeof t != "object" ? null : (t = be && t[be] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var Vt = Symbol.for("react.client.reference");
    function Mt(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === Vt ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case G:
            return "Fragment";
        case V:
            return "Profiler";
        case Y:
            return "StrictMode";
        case st:
            return "Suspense";
        case pt:
            return "SuspenseList";
        case Ot:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case H:
                return "Portal";
            case K:
                return t.displayName || "Context";
            case q:
                return (t._context.displayName || "Context") + ".Consumer";
            case ut:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case F:
                return e = t.displayName || null,
                e !== null ? e : Mt(t.type) || "Memo";
            case At:
                e = t._payload,
                t = t._init;
                try {
                    return Mt(t(e))
                } catch {}
            }
        return null
    }
    var ee = Array.isArray
      , _ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , j = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , $ = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , rt = []
      , mt = -1;
    function b(t) {
        return {
            current: t
        }
    }
    function M(t) {
        0 > mt || (t.current = rt[mt],
        rt[mt] = null,
        mt--)
    }
    function w(t, e) {
        mt++,
        rt[mt] = t.current,
        t.current = e
    }
    var X = b(null)
      , I = b(null)
      , lt = b(null)
      , gt = b(null);
    function It(t, e) {
        switch (w(lt, e),
        w(I, t),
        w(X, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? Ld(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = Ld(e),
                t = Hd(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        M(X),
        w(X, t)
    }
    function Ut() {
        M(X),
        M(I),
        M(lt)
    }
    function Ya(t) {
        t.memoizedState !== null && w(gt, t);
        var e = X.current
          , l = Hd(e, t.type);
        e !== l && (w(I, t),
        w(X, l))
    }
    function Zn(t) {
        I.current === t && (M(X),
        M(I)),
        gt.current === t && (M(gt),
        Nn._currentValue = $)
    }
    var bi, ff;
    function Ul(t) {
        if (bi === void 0)
            try {
                throw Error()
            } catch (l) {
                var e = l.stack.trim().match(/\n( *(at )?)/);
                bi = e && e[1] || "",
                ff = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + bi + t + ff
    }
    var Ei = !1;
    function Ti(t, e) {
        if (!t || Ei)
            return "";
        Ei = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var L = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(L.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(L, [])
                                } catch (z) {
                                    var A = z
                                }
                                Reflect.construct(t, [], L)
                            } else {
                                try {
                                    L.call()
                                } catch (z) {
                                    A = z
                                }
                                t.call(L.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (z) {
                                A = z
                            }
                            (L = t()) && typeof L.catch == "function" && L.catch(function() {})
                        }
                    } catch (z) {
                        if (z && A && typeof z.stack == "string")
                            return [z.stack, A.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot()
              , o = u[0]
              , h = u[1];
            if (o && h) {
                var v = o.split(`
`)
                  , x = h.split(`
`);
                for (n = a = 0; a < v.length && !v[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; n < x.length && !x[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                if (a === v.length || n === x.length)
                    for (a = v.length - 1,
                    n = x.length - 1; 1 <= a && 0 <= n && v[a] !== x[n]; )
                        n--;
                for (; 1 <= a && 0 <= n; a--,
                n--)
                    if (v[a] !== x[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--,
                                n--,
                                0 > n || v[a] !== x[n]) {
                                    var C = `
` + v[a].replace(" at new ", " at ");
                                    return t.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", t.displayName)),
                                    C
                                }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            Ei = !1,
            Error.prepareStackTrace = l
        }
        return (l = t ? t.displayName || t.name : "") ? Ul(l) : ""
    }
    function pm(t, e) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return Ul(t.type);
        case 16:
            return Ul("Lazy");
        case 13:
            return t.child !== e && e !== null ? Ul("Suspense Fallback") : Ul("Suspense");
        case 19:
            return Ul("SuspenseList");
        case 0:
        case 15:
            return Ti(t.type, !1);
        case 11:
            return Ti(t.type.render, !1);
        case 1:
            return Ti(t.type, !0);
        case 31:
            return Ul("Activity");
        default:
            return ""
        }
    }
    function rf(t) {
        try {
            var e = ""
              , l = null;
            do
                e += pm(t, l),
                l = t,
                t = t.return;
            while (t);
            return e
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var Oi = Object.prototype.hasOwnProperty
      , Ri = f.unstable_scheduleCallback
      , xi = f.unstable_cancelCallback
      , ym = f.unstable_shouldYield
      , vm = f.unstable_requestPaint
      , fe = f.unstable_now
      , Sm = f.unstable_getCurrentPriorityLevel
      , of = f.unstable_ImmediatePriority
      , df = f.unstable_UserBlockingPriority
      , Kn = f.unstable_NormalPriority
      , bm = f.unstable_LowPriority
      , hf = f.unstable_IdlePriority
      , Em = f.log
      , Tm = f.unstable_setDisableYieldValue
      , Va = null
      , re = null;
    function cl(t) {
        if (typeof Em == "function" && Tm(t),
        re && typeof re.setStrictMode == "function")
            try {
                re.setStrictMode(Va, t)
            } catch {}
    }
    var oe = Math.clz32 ? Math.clz32 : xm
      , Om = Math.log
      , Rm = Math.LN2;
    function xm(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (Om(t) / Rm | 0) | 0
    }
    var Jn = 256
      , $n = 262144
      , kn = 4194304;
    function Ll(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function Fn(t, e, l) {
        var a = t.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0
          , u = t.suspendedLanes
          , o = t.pingedLanes;
        t = t.warmLanes;
        var h = a & 134217727;
        return h !== 0 ? (a = h & ~u,
        a !== 0 ? n = Ll(a) : (o &= h,
        o !== 0 ? n = Ll(o) : l || (l = h & ~t,
        l !== 0 && (n = Ll(l))))) : (h = a & ~u,
        h !== 0 ? n = Ll(h) : o !== 0 ? n = Ll(o) : l || (l = a & ~t,
        l !== 0 && (n = Ll(l)))),
        n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n,
        l = e & -e,
        u >= l || u === 32 && (l & 4194048) !== 0) ? e : n
    }
    function Ga(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function Am(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function mf() {
        var t = kn;
        return kn <<= 1,
        (kn & 62914560) === 0 && (kn = 4194304),
        t
    }
    function Ai(t) {
        for (var e = [], l = 0; 31 > l; l++)
            e.push(t);
        return e
    }
    function Xa(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function zm(t, e, l, a, n, u) {
        var o = t.pendingLanes;
        t.pendingLanes = l,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= l,
        t.entangledLanes &= l,
        t.errorRecoveryDisabledLanes &= l,
        t.shellSuspendCounter = 0;
        var h = t.entanglements
          , v = t.expirationTimes
          , x = t.hiddenUpdates;
        for (l = o & ~l; 0 < l; ) {
            var C = 31 - oe(l)
              , L = 1 << C;
            h[C] = 0,
            v[C] = -1;
            var A = x[C];
            if (A !== null)
                for (x[C] = null,
                C = 0; C < A.length; C++) {
                    var z = A[C];
                    z !== null && (z.lane &= -536870913)
                }
            l &= ~L
        }
        a !== 0 && gf(t, a, 0),
        u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(o & ~e))
    }
    function gf(t, e, l) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var a = 31 - oe(e);
        t.entangledLanes |= e,
        t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930
    }
    function pf(t, e) {
        var l = t.entangledLanes |= e;
        for (t = t.entanglements; l; ) {
            var a = 31 - oe(l)
              , n = 1 << a;
            n & e | t[a] & e && (t[a] |= e),
            l &= ~n
        }
    }
    function yf(t, e) {
        var l = e & -e;
        return l = (l & 42) !== 0 ? 1 : zi(l),
        (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    }
    function zi(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function _i(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function vf() {
        var t = j.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : nh(t.type))
    }
    function Sf(t, e) {
        var l = j.p;
        try {
            return j.p = t,
            e()
        } finally {
            j.p = l
        }
    }
    var sl = Math.random().toString(36).slice(2)
      , Qt = "__reactFiber$" + sl
      , le = "__reactProps$" + sl
      , Pl = "__reactContainer$" + sl
      , Ci = "__reactEvents$" + sl
      , _m = "__reactListeners$" + sl
      , Cm = "__reactHandles$" + sl
      , bf = "__reactResources$" + sl
      , Qa = "__reactMarker$" + sl;
    function Ni(t) {
        delete t[Qt],
        delete t[le],
        delete t[Ci],
        delete t[_m],
        delete t[Cm]
    }
    function Il(t) {
        var e = t[Qt];
        if (e)
            return e;
        for (var l = t.parentNode; l; ) {
            if (e = l[Pl] || l[Qt]) {
                if (l = e.alternate,
                e.child !== null || l !== null && l.child !== null)
                    for (t = Gd(t); t !== null; ) {
                        if (l = t[Qt])
                            return l;
                        t = Gd(t)
                    }
                return e
            }
            t = l,
            l = t.parentNode
        }
        return null
    }
    function ta(t) {
        if (t = t[Qt] || t[Pl]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function Za(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(c(33))
    }
    function ea(t) {
        var e = t[bf];
        return e || (e = t[bf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function Gt(t) {
        t[Qa] = !0
    }
    var Ef = new Set
      , Tf = {};
    function Hl(t, e) {
        la(t, e),
        la(t + "Capture", e)
    }
    function la(t, e) {
        for (Tf[t] = e,
        t = 0; t < e.length; t++)
            Ef.add(e[t])
    }
    var Nm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Of = {}
      , Rf = {};
    function Dm(t) {
        return Oi.call(Rf, t) ? !0 : Oi.call(Of, t) ? !1 : Nm.test(t) ? Rf[t] = !0 : (Of[t] = !0,
        !1)
    }
    function Wn(t, e, l) {
        if (Dm(e))
            if (l === null)
                t.removeAttribute(e);
            else {
                switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var a = e.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + l)
            }
    }
    function Pn(t, e, l) {
        if (l === null)
            t.removeAttribute(e);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + l)
        }
    }
    function Ve(t, e, l, a) {
        if (a === null)
            t.removeAttribute(l);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(l);
                return
            }
            t.setAttributeNS(e, l, "" + a)
        }
    }
    function Ee(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function xf(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function Mm(t, e, l) {
        var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get
              , u = a.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(o) {
                    l = "" + o,
                    u.call(this, o)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(o) {
                    l = "" + o
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function Di(t) {
        if (!t._valueTracker) {
            var e = xf(t) ? "checked" : "value";
            t._valueTracker = Mm(t, e, "" + t[e])
        }
    }
    function Af(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var l = e.getValue()
          , a = "";
        return t && (a = xf(t) ? t.checked ? "true" : "false" : t.value),
        t = a,
        t !== l ? (e.setValue(t),
        !0) : !1
    }
    function In(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var Um = /[\n"\\]/g;
    function Te(t) {
        return t.replace(Um, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function Mi(t, e, l, a, n, u, o, h) {
        t.name = "",
        o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.type = o : t.removeAttribute("type"),
        e != null ? o === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ee(e)) : t.value !== "" + Ee(e) && (t.value = "" + Ee(e)) : o !== "submit" && o !== "reset" || t.removeAttribute("value"),
        e != null ? Ui(t, o, Ee(e)) : l != null ? Ui(t, o, Ee(l)) : a != null && t.removeAttribute("value"),
        n == null && u != null && (t.defaultChecked = !!u),
        n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"),
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + Ee(h) : t.removeAttribute("name")
    }
    function zf(t, e, l, a, n, u, o, h) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u),
        e != null || l != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) {
                Di(t);
                return
            }
            l = l != null ? "" + Ee(l) : "",
            e = e != null ? "" + Ee(e) : l,
            h || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        a = a ?? n,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        t.checked = h ? t.checked : !!a,
        t.defaultChecked = !!a,
        o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.name = o),
        Di(t)
    }
    function Ui(t, e, l) {
        e === "number" && In(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l)
    }
    function aa(t, e, l, a) {
        if (t = t.options,
        e) {
            e = {};
            for (var n = 0; n < l.length; n++)
                e["$" + l[n]] = !0;
            for (l = 0; l < t.length; l++)
                n = e.hasOwnProperty("$" + t[l].value),
                t[l].selected !== n && (t[l].selected = n),
                n && a && (t[l].defaultSelected = !0)
        } else {
            for (l = "" + Ee(l),
            e = null,
            n = 0; n < t.length; n++) {
                if (t[n].value === l) {
                    t[n].selected = !0,
                    a && (t[n].defaultSelected = !0);
                    return
                }
                e !== null || t[n].disabled || (e = t[n])
            }
            e !== null && (e.selected = !0)
        }
    }
    function _f(t, e, l) {
        if (e != null && (e = "" + Ee(e),
        e !== t.value && (t.value = e),
        l == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = l != null ? "" + Ee(l) : ""
    }
    function Cf(t, e, l, a) {
        if (e == null) {
            if (a != null) {
                if (l != null)
                    throw Error(c(92));
                if (ee(a)) {
                    if (1 < a.length)
                        throw Error(c(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""),
            e = l
        }
        l = Ee(e),
        t.defaultValue = l,
        a = t.textContent,
        a === l && a !== "" && a !== null && (t.value = a),
        Di(t)
    }
    function na(t, e) {
        if (e) {
            var l = t.firstChild;
            if (l && l === t.lastChild && l.nodeType === 3) {
                l.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var Lm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Nf(t, e, l) {
        var a = e.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Lm.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px"
    }
    function Df(t, e, l) {
        if (e != null && typeof e != "object")
            throw Error(c(62));
        if (t = t.style,
        l != null) {
            for (var a in l)
                !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var n in e)
                a = e[n],
                e.hasOwnProperty(n) && l[n] !== a && Nf(t, n, a)
        } else
            for (var u in e)
                e.hasOwnProperty(u) && Nf(t, u, e[u])
    }
    function Li(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Hm = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Bm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function tu(t) {
        return Bm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function Ge() {}
    var Hi = null;
    function Bi(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var ua = null
      , ia = null;
    function Mf(t) {
        var e = ta(t);
        if (e && (t = e.stateNode)) {
            var l = t[le] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (Mi(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                e = l.name,
                l.type === "radio" && e != null) {
                    for (l = t; l.parentNode; )
                        l = l.parentNode;
                    for (l = l.querySelectorAll('input[name="' + Te("" + e) + '"][type="radio"]'),
                    e = 0; e < l.length; e++) {
                        var a = l[e];
                        if (a !== t && a.form === t.form) {
                            var n = a[le] || null;
                            if (!n)
                                throw Error(c(90));
                            Mi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                        }
                    }
                    for (e = 0; e < l.length; e++)
                        a = l[e],
                        a.form === t.form && Af(a)
                }
                break t;
            case "textarea":
                _f(t, l.value, l.defaultValue);
                break t;
            case "select":
                e = l.value,
                e != null && aa(t, !!l.multiple, e, !1)
            }
        }
    }
    var ji = !1;
    function Uf(t, e, l) {
        if (ji)
            return t(e, l);
        ji = !0;
        try {
            var a = t(e);
            return a
        } finally {
            if (ji = !1,
            (ua !== null || ia !== null) && (Vu(),
            ua && (e = ua,
            t = ia,
            ia = ua = null,
            Mf(e),
            t)))
                for (e = 0; e < t.length; e++)
                    Mf(t[e])
        }
    }
    function Ka(t, e) {
        var l = t.stateNode;
        if (l === null)
            return null;
        var a = l[le] || null;
        if (a === null)
            return null;
        l = a[e];
        t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (t = t.type,
            a = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !a;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (l && typeof l != "function")
            throw Error(c(231, e, typeof l));
        return l
    }
    var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , wi = !1;
    if (Xe)
        try {
            var Ja = {};
            Object.defineProperty(Ja, "passive", {
                get: function() {
                    wi = !0
                }
            }),
            window.addEventListener("test", Ja, Ja),
            window.removeEventListener("test", Ja, Ja)
        } catch {
            wi = !1
        }
    var fl = null
      , qi = null
      , eu = null;
    function Lf() {
        if (eu)
            return eu;
        var t, e = qi, l = e.length, a, n = "value"in fl ? fl.value : fl.textContent, u = n.length;
        for (t = 0; t < l && e[t] === n[t]; t++)
            ;
        var o = l - t;
        for (a = 1; a <= o && e[l - a] === n[u - a]; a++)
            ;
        return eu = n.slice(t, 1 < a ? 1 - a : void 0)
    }
    function lu(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function au() {
        return !0
    }
    function Hf() {
        return !1
    }
    function ae(t) {
        function e(l, a, n, u, o) {
            this._reactName = l,
            this._targetInst = n,
            this.type = a,
            this.nativeEvent = u,
            this.target = o,
            this.currentTarget = null;
            for (var h in t)
                t.hasOwnProperty(h) && (l = t[h],
                this[h] = l ? l(u) : u[h]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? au : Hf,
            this.isPropagationStopped = Hf,
            this
        }
        return S(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                this.isDefaultPrevented = au)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                this.isPropagationStopped = au)
            },
            persist: function() {},
            isPersistent: au
        }),
        e
    }
    var Bl = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, nu = ae(Bl), $a = S({}, Bl, {
        view: 0,
        detail: 0
    }), jm = ae($a), Yi, Vi, ka, uu = S({}, $a, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Xi,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== ka && (ka && t.type === "mousemove" ? (Yi = t.screenX - ka.screenX,
            Vi = t.screenY - ka.screenY) : Vi = Yi = 0,
            ka = t),
            Yi)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Vi
        }
    }), Bf = ae(uu), wm = S({}, uu, {
        dataTransfer: 0
    }), qm = ae(wm), Ym = S({}, $a, {
        relatedTarget: 0
    }), Gi = ae(Ym), Vm = S({}, Bl, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Gm = ae(Vm), Xm = S({}, Bl, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), Qm = ae(Xm), Zm = S({}, Bl, {
        data: 0
    }), jf = ae(Zm), Km = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Jm = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, $m = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function km(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = $m[t]) ? !!e[t] : !1
    }
    function Xi() {
        return km
    }
    var Fm = S({}, $a, {
        key: function(t) {
            if (t.key) {
                var e = Km[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = lu(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Jm[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Xi,
        charCode: function(t) {
            return t.type === "keypress" ? lu(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? lu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Wm = ae(Fm)
      , Pm = S({}, uu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , wf = ae(Pm)
      , Im = S({}, $a, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Xi
    })
      , tg = ae(Im)
      , eg = S({}, Bl, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , lg = ae(eg)
      , ag = S({}, uu, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , ng = ae(ag)
      , ug = S({}, Bl, {
        newState: 0,
        oldState: 0
    })
      , ig = ae(ug)
      , cg = [9, 13, 27, 32]
      , Qi = Xe && "CompositionEvent"in window
      , Fa = null;
    Xe && "documentMode"in document && (Fa = document.documentMode);
    var sg = Xe && "TextEvent"in window && !Fa
      , qf = Xe && (!Qi || Fa && 8 < Fa && 11 >= Fa)
      , Yf = " "
      , Vf = !1;
    function Gf(t, e) {
        switch (t) {
        case "keyup":
            return cg.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Xf(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var ca = !1;
    function fg(t, e) {
        switch (t) {
        case "compositionend":
            return Xf(e);
        case "keypress":
            return e.which !== 32 ? null : (Vf = !0,
            Yf);
        case "textInput":
            return t = e.data,
            t === Yf && Vf ? null : t;
        default:
            return null
        }
    }
    function rg(t, e) {
        if (ca)
            return t === "compositionend" || !Qi && Gf(t, e) ? (t = Lf(),
            eu = qi = fl = null,
            ca = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return qf && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var og = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Qf(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!og[t.type] : e === "textarea"
    }
    function Zf(t, e, l, a) {
        ua ? ia ? ia.push(a) : ia = [a] : ua = a,
        e = $u(e, "onChange"),
        0 < e.length && (l = new nu("onChange","change",null,l,a),
        t.push({
            event: l,
            listeners: e
        }))
    }
    var Wa = null
      , Pa = null;
    function dg(t) {
        _d(t, 0)
    }
    function iu(t) {
        var e = Za(t);
        if (Af(e))
            return t
    }
    function Kf(t, e) {
        if (t === "change")
            return e
    }
    var Jf = !1;
    if (Xe) {
        var Zi;
        if (Xe) {
            var Ki = "oninput"in document;
            if (!Ki) {
                var $f = document.createElement("div");
                $f.setAttribute("oninput", "return;"),
                Ki = typeof $f.oninput == "function"
            }
            Zi = Ki
        } else
            Zi = !1;
        Jf = Zi && (!document.documentMode || 9 < document.documentMode)
    }
    function kf() {
        Wa && (Wa.detachEvent("onpropertychange", Ff),
        Pa = Wa = null)
    }
    function Ff(t) {
        if (t.propertyName === "value" && iu(Pa)) {
            var e = [];
            Zf(e, Pa, t, Bi(t)),
            Uf(dg, e)
        }
    }
    function hg(t, e, l) {
        t === "focusin" ? (kf(),
        Wa = e,
        Pa = l,
        Wa.attachEvent("onpropertychange", Ff)) : t === "focusout" && kf()
    }
    function mg(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return iu(Pa)
    }
    function gg(t, e) {
        if (t === "click")
            return iu(e)
    }
    function pg(t, e) {
        if (t === "input" || t === "change")
            return iu(e)
    }
    function yg(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var de = typeof Object.is == "function" ? Object.is : yg;
    function Ia(t, e) {
        if (de(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var l = Object.keys(t)
          , a = Object.keys(e);
        if (l.length !== a.length)
            return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!Oi.call(e, n) || !de(t[n], e[n]))
                return !1
        }
        return !0
    }
    function Wf(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Pf(t, e) {
        var l = Wf(t);
        t = 0;
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (a = t + l.textContent.length,
                t <= e && a >= e)
                    return {
                        node: l,
                        offset: e - t
                    };
                t = a
            }
            t: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break t
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = Wf(l)
        }
    }
    function If(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? If(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function tr(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = In(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var l = typeof e.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                t = e.contentWindow;
            else
                break;
            e = In(t.document)
        }
        return e
    }
    function Ji(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var vg = Xe && "documentMode"in document && 11 >= document.documentMode
      , sa = null
      , $i = null
      , tn = null
      , ki = !1;
    function er(t, e, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        ki || sa == null || sa !== In(a) || (a = sa,
        "selectionStart"in a && Ji(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        tn && Ia(tn, a) || (tn = a,
        a = $u($i, "onSelect"),
        0 < a.length && (e = new nu("onSelect","select",null,e,l),
        t.push({
            event: e,
            listeners: a
        }),
        e.target = sa)))
    }
    function jl(t, e) {
        var l = {};
        return l[t.toLowerCase()] = e.toLowerCase(),
        l["Webkit" + t] = "webkit" + e,
        l["Moz" + t] = "moz" + e,
        l
    }
    var fa = {
        animationend: jl("Animation", "AnimationEnd"),
        animationiteration: jl("Animation", "AnimationIteration"),
        animationstart: jl("Animation", "AnimationStart"),
        transitionrun: jl("Transition", "TransitionRun"),
        transitionstart: jl("Transition", "TransitionStart"),
        transitioncancel: jl("Transition", "TransitionCancel"),
        transitionend: jl("Transition", "TransitionEnd")
    }
      , Fi = {}
      , lr = {};
    Xe && (lr = document.createElement("div").style,
    "AnimationEvent"in window || (delete fa.animationend.animation,
    delete fa.animationiteration.animation,
    delete fa.animationstart.animation),
    "TransitionEvent"in window || delete fa.transitionend.transition);
    function wl(t) {
        if (Fi[t])
            return Fi[t];
        if (!fa[t])
            return t;
        var e = fa[t], l;
        for (l in e)
            if (e.hasOwnProperty(l) && l in lr)
                return Fi[t] = e[l];
        return t
    }
    var ar = wl("animationend")
      , nr = wl("animationiteration")
      , ur = wl("animationstart")
      , Sg = wl("transitionrun")
      , bg = wl("transitionstart")
      , Eg = wl("transitioncancel")
      , ir = wl("transitionend")
      , cr = new Map
      , Wi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Wi.push("scrollEnd");
    function Me(t, e) {
        cr.set(t, e),
        Hl(e, [t])
    }
    var cu = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , Oe = []
      , ra = 0
      , Pi = 0;
    function su() {
        for (var t = ra, e = Pi = ra = 0; e < t; ) {
            var l = Oe[e];
            Oe[e++] = null;
            var a = Oe[e];
            Oe[e++] = null;
            var n = Oe[e];
            Oe[e++] = null;
            var u = Oe[e];
            if (Oe[e++] = null,
            a !== null && n !== null) {
                var o = a.pending;
                o === null ? n.next = n : (n.next = o.next,
                o.next = n),
                a.pending = n
            }
            u !== 0 && sr(l, n, u)
        }
    }
    function fu(t, e, l, a) {
        Oe[ra++] = t,
        Oe[ra++] = e,
        Oe[ra++] = l,
        Oe[ra++] = a,
        Pi |= a,
        t.lanes |= a,
        t = t.alternate,
        t !== null && (t.lanes |= a)
    }
    function Ii(t, e, l, a) {
        return fu(t, e, l, a),
        ru(t)
    }
    function ql(t, e) {
        return fu(t, null, null, e),
        ru(t)
    }
    function sr(t, e, l) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, u = t.return; u !== null; )
            u.childLanes |= l,
            a = u.alternate,
            a !== null && (a.childLanes |= l),
            u.tag === 22 && (t = u.stateNode,
            t === null || t._visibility & 1 || (n = !0)),
            t = u,
            u = u.return;
        return t.tag === 3 ? (u = t.stateNode,
        n && e !== null && (n = 31 - oe(l),
        t = u.hiddenUpdates,
        a = t[n],
        a === null ? t[n] = [e] : a.push(e),
        e.lane = l | 536870912),
        u) : null
    }
    function ru(t) {
        if (50 < On)
            throw On = 0,
            ss = null,
            Error(c(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var oa = {};
    function Tg(t, e, l, a) {
        this.tag = t,
        this.key = l,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function he(t, e, l, a) {
        return new Tg(t,e,l,a)
    }
    function tc(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function Qe(t, e) {
        var l = t.alternate;
        return l === null ? (l = he(t.tag, e, t.key, t.mode),
        l.elementType = t.elementType,
        l.type = t.type,
        l.stateNode = t.stateNode,
        l.alternate = t,
        t.alternate = l) : (l.pendingProps = e,
        l.type = t.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
        l.flags = t.flags & 65011712,
        l.childLanes = t.childLanes,
        l.lanes = t.lanes,
        l.child = t.child,
        l.memoizedProps = t.memoizedProps,
        l.memoizedState = t.memoizedState,
        l.updateQueue = t.updateQueue,
        e = t.dependencies,
        l.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        l.sibling = t.sibling,
        l.index = t.index,
        l.ref = t.ref,
        l.refCleanup = t.refCleanup,
        l
    }
    function fr(t, e) {
        t.flags &= 65011714;
        var l = t.alternate;
        return l === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = l.childLanes,
        t.lanes = l.lanes,
        t.child = l.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = l.memoizedProps,
        t.memoizedState = l.memoizedState,
        t.updateQueue = l.updateQueue,
        t.type = l.type,
        e = l.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function ou(t, e, l, a, n, u) {
        var o = 0;
        if (a = t,
        typeof t == "function")
            tc(t) && (o = 1);
        else if (typeof t == "string")
            o = zp(t, l, X.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case Ot:
                return t = he(31, l, e, n),
                t.elementType = Ot,
                t.lanes = u,
                t;
            case G:
                return Yl(l.children, n, u, e);
            case Y:
                o = 8,
                n |= 24;
                break;
            case V:
                return t = he(12, l, e, n | 2),
                t.elementType = V,
                t.lanes = u,
                t;
            case st:
                return t = he(13, l, e, n),
                t.elementType = st,
                t.lanes = u,
                t;
            case pt:
                return t = he(19, l, e, n),
                t.elementType = pt,
                t.lanes = u,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case K:
                        o = 10;
                        break t;
                    case q:
                        o = 9;
                        break t;
                    case ut:
                        o = 11;
                        break t;
                    case F:
                        o = 14;
                        break t;
                    case At:
                        o = 16,
                        a = null;
                        break t
                    }
                o = 29,
                l = Error(c(130, t === null ? "null" : typeof t, "")),
                a = null
            }
        return e = he(o, l, e, n),
        e.elementType = t,
        e.type = a,
        e.lanes = u,
        e
    }
    function Yl(t, e, l, a) {
        return t = he(7, t, a, e),
        t.lanes = l,
        t
    }
    function ec(t, e, l) {
        return t = he(6, t, null, e),
        t.lanes = l,
        t
    }
    function rr(t) {
        var e = he(18, null, null, 0);
        return e.stateNode = t,
        e
    }
    function lc(t, e, l) {
        return e = he(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = l,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var or = new WeakMap;
    function Re(t, e) {
        if (typeof t == "object" && t !== null) {
            var l = or.get(t);
            return l !== void 0 ? l : (e = {
                value: t,
                source: e,
                stack: rf(e)
            },
            or.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: rf(e)
        }
    }
    var da = []
      , ha = 0
      , du = null
      , en = 0
      , xe = []
      , Ae = 0
      , rl = null
      , He = 1
      , Be = "";
    function Ze(t, e) {
        da[ha++] = en,
        da[ha++] = du,
        du = t,
        en = e
    }
    function dr(t, e, l) {
        xe[Ae++] = He,
        xe[Ae++] = Be,
        xe[Ae++] = rl,
        rl = t;
        var a = He;
        t = Be;
        var n = 32 - oe(a) - 1;
        a &= ~(1 << n),
        l += 1;
        var u = 32 - oe(e) + n;
        if (30 < u) {
            var o = n - n % 5;
            u = (a & (1 << o) - 1).toString(32),
            a >>= o,
            n -= o,
            He = 1 << 32 - oe(e) + n | l << n | a,
            Be = u + t
        } else
            He = 1 << u | l << n | a,
            Be = t
    }
    function ac(t) {
        t.return !== null && (Ze(t, 1),
        dr(t, 1, 0))
    }
    function nc(t) {
        for (; t === du; )
            du = da[--ha],
            da[ha] = null,
            en = da[--ha],
            da[ha] = null;
        for (; t === rl; )
            rl = xe[--Ae],
            xe[Ae] = null,
            Be = xe[--Ae],
            xe[Ae] = null,
            He = xe[--Ae],
            xe[Ae] = null
    }
    function hr(t, e) {
        xe[Ae++] = He,
        xe[Ae++] = Be,
        xe[Ae++] = rl,
        He = e.id,
        Be = e.overflow,
        rl = t
    }
    var Zt = null
      , Rt = null
      , ft = !1
      , ol = null
      , ze = !1
      , uc = Error(c(519));
    function dl(t) {
        var e = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw ln(Re(e, t)),
        uc
    }
    function mr(t) {
        var e = t.stateNode
          , l = t.type
          , a = t.memoizedProps;
        switch (e[Qt] = t,
        e[le] = a,
        l) {
        case "dialog":
            nt("cancel", e),
            nt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            nt("load", e);
            break;
        case "video":
        case "audio":
            for (l = 0; l < xn.length; l++)
                nt(xn[l], e);
            break;
        case "source":
            nt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            nt("error", e),
            nt("load", e);
            break;
        case "details":
            nt("toggle", e);
            break;
        case "input":
            nt("invalid", e),
            zf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            nt("invalid", e);
            break;
        case "textarea":
            nt("invalid", e),
            Cf(e, a.value, a.defaultValue, a.children)
        }
        l = a.children,
        typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || Md(e.textContent, l) ? (a.popover != null && (nt("beforetoggle", e),
        nt("toggle", e)),
        a.onScroll != null && nt("scroll", e),
        a.onScrollEnd != null && nt("scrollend", e),
        a.onClick != null && (e.onclick = Ge),
        e = !0) : e = !1,
        e || dl(t, !0)
    }
    function gr(t) {
        for (Zt = t.return; Zt; )
            switch (Zt.tag) {
            case 5:
            case 31:
            case 13:
                ze = !1;
                return;
            case 27:
            case 3:
                ze = !0;
                return;
            default:
                Zt = Zt.return
            }
    }
    function ma(t) {
        if (t !== Zt)
            return !1;
        if (!ft)
            return gr(t),
            ft = !0,
            !1;
        var e = t.tag, l;
        if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type,
        l = !(l !== "form" && l !== "button") || Os(t.type, t.memoizedProps)),
        l = !l),
        l && Rt && dl(t),
        gr(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(c(317));
            Rt = Vd(t)
        } else if (e === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(c(317));
            Rt = Vd(t)
        } else
            e === 27 ? (e = Rt,
            Al(t.type) ? (t = _s,
            _s = null,
            Rt = t) : Rt = e) : Rt = Zt ? Ce(t.stateNode.nextSibling) : null;
        return !0
    }
    function Vl() {
        Rt = Zt = null,
        ft = !1
    }
    function ic() {
        var t = ol;
        return t !== null && (ce === null ? ce = t : ce.push.apply(ce, t),
        ol = null),
        t
    }
    function ln(t) {
        ol === null ? ol = [t] : ol.push(t)
    }
    var cc = b(null)
      , Gl = null
      , Ke = null;
    function hl(t, e, l) {
        w(cc, e._currentValue),
        e._currentValue = l
    }
    function Je(t) {
        t._currentValue = cc.current,
        M(cc)
    }
    function sc(t, e, l) {
        for (; t !== null; ) {
            var a = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
            t === l)
                break;
            t = t.return
        }
    }
    function fc(t, e, l, a) {
        var n = t.child;
        for (n !== null && (n.return = t); n !== null; ) {
            var u = n.dependencies;
            if (u !== null) {
                var o = n.child;
                u = u.firstContext;
                t: for (; u !== null; ) {
                    var h = u;
                    u = n;
                    for (var v = 0; v < e.length; v++)
                        if (h.context === e[v]) {
                            u.lanes |= l,
                            h = u.alternate,
                            h !== null && (h.lanes |= l),
                            sc(u.return, l, t),
                            a || (o = null);
                            break t
                        }
                    u = h.next
                }
            } else if (n.tag === 18) {
                if (o = n.return,
                o === null)
                    throw Error(c(341));
                o.lanes |= l,
                u = o.alternate,
                u !== null && (u.lanes |= l),
                sc(o, l, t),
                o = null
            } else
                o = n.child;
            if (o !== null)
                o.return = n;
            else
                for (o = n; o !== null; ) {
                    if (o === t) {
                        o = null;
                        break
                    }
                    if (n = o.sibling,
                    n !== null) {
                        n.return = o.return,
                        o = n;
                        break
                    }
                    o = o.return
                }
            n = o
        }
    }
    function ga(t, e, l, a) {
        t = null;
        for (var n = e, u = !1; n !== null; ) {
            if (!u) {
                if ((n.flags & 524288) !== 0)
                    u = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var o = n.alternate;
                if (o === null)
                    throw Error(c(387));
                if (o = o.memoizedProps,
                o !== null) {
                    var h = n.type;
                    de(n.pendingProps.value, o.value) || (t !== null ? t.push(h) : t = [h])
                }
            } else if (n === gt.current) {
                if (o = n.alternate,
                o === null)
                    throw Error(c(387));
                o.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Nn) : t = [Nn])
            }
            n = n.return
        }
        t !== null && fc(e, t, l, a),
        e.flags |= 262144
    }
    function hu(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!de(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Xl(t) {
        Gl = t,
        Ke = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function Kt(t) {
        return pr(Gl, t)
    }
    function mu(t, e) {
        return Gl === null && Xl(t),
        pr(t, e)
    }
    function pr(t, e) {
        var l = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: l,
            next: null
        },
        Ke === null) {
            if (t === null)
                throw Error(c(308));
            Ke = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            Ke = Ke.next = e;
        return l
    }
    var Og = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(l, a) {
                t.push(a)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(l) {
                return l()
            })
        }
    }
      , Rg = f.unstable_scheduleCallback
      , xg = f.unstable_NormalPriority
      , Bt = {
        $$typeof: K,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function rc() {
        return {
            controller: new Og,
            data: new Map,
            refCount: 0
        }
    }
    function an(t) {
        t.refCount--,
        t.refCount === 0 && Rg(xg, function() {
            t.controller.abort()
        })
    }
    var nn = null
      , oc = 0
      , pa = 0
      , ya = null;
    function Ag(t, e) {
        if (nn === null) {
            var l = nn = [];
            oc = 0,
            pa = ms(),
            ya = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    l.push(a)
                }
            }
        }
        return oc++,
        e.then(yr, yr),
        e
    }
    function yr() {
        if (--oc === 0 && nn !== null) {
            ya !== null && (ya.status = "fulfilled");
            var t = nn;
            nn = null,
            pa = 0,
            ya = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function zg(t, e) {
        var l = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(n) {
                l.push(n)
            }
        };
        return t.then(function() {
            a.status = "fulfilled",
            a.value = e;
            for (var n = 0; n < l.length; n++)
                (0,
                l[n])(e)
        }, function(n) {
            for (a.status = "rejected",
            a.reason = n,
            n = 0; n < l.length; n++)
                (0,
                l[n])(void 0)
        }),
        a
    }
    var vr = _.S;
    _.S = function(t, e) {
        ld = fe(),
        typeof e == "object" && e !== null && typeof e.then == "function" && Ag(t, e),
        vr !== null && vr(t, e)
    }
    ;
    var Ql = b(null);
    function dc() {
        var t = Ql.current;
        return t !== null ? t : Tt.pooledCache
    }
    function gu(t, e) {
        e === null ? w(Ql, Ql.current) : w(Ql, e.pool)
    }
    function Sr() {
        var t = dc();
        return t === null ? null : {
            parent: Bt._currentValue,
            pool: t
        }
    }
    var va = Error(c(460))
      , hc = Error(c(474))
      , pu = Error(c(542))
      , yu = {
        then: function() {}
    };
    function br(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function Er(t, e, l) {
        switch (l = t[l],
        l === void 0 ? t.push(e) : l !== e && (e.then(Ge, Ge),
        e = l),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            Or(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(Ge, Ge);
            else {
                if (t = Tt,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(c(482));
                t = e,
                t.status = "pending",
                t.then(function(a) {
                    if (e.status === "pending") {
                        var n = e;
                        n.status = "fulfilled",
                        n.value = a
                    }
                }, function(a) {
                    if (e.status === "pending") {
                        var n = e;
                        n.status = "rejected",
                        n.reason = a
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                Or(t),
                t
            }
            throw Kl = e,
            va
        }
    }
    function Zl(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (l) {
            throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Kl = l,
            va) : l
        }
    }
    var Kl = null;
    function Tr() {
        if (Kl === null)
            throw Error(c(459));
        var t = Kl;
        return Kl = null,
        t
    }
    function Or(t) {
        if (t === va || t === pu)
            throw Error(c(483))
    }
    var Sa = null
      , un = 0;
    function vu(t) {
        var e = un;
        return un += 1,
        Sa === null && (Sa = []),
        Er(Sa, t, e)
    }
    function cn(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function Su(t, e) {
        throw e.$$typeof === D ? Error(c(525)) : (t = Object.prototype.toString.call(e),
        Error(c(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function Rr(t) {
        function e(O, E) {
            if (t) {
                var R = O.deletions;
                R === null ? (O.deletions = [E],
                O.flags |= 16) : R.push(E)
            }
        }
        function l(O, E) {
            if (!t)
                return null;
            for (; E !== null; )
                e(O, E),
                E = E.sibling;
            return null
        }
        function a(O) {
            for (var E = new Map; O !== null; )
                O.key !== null ? E.set(O.key, O) : E.set(O.index, O),
                O = O.sibling;
            return E
        }
        function n(O, E) {
            return O = Qe(O, E),
            O.index = 0,
            O.sibling = null,
            O
        }
        function u(O, E, R) {
            return O.index = R,
            t ? (R = O.alternate,
            R !== null ? (R = R.index,
            R < E ? (O.flags |= 67108866,
            E) : R) : (O.flags |= 67108866,
            E)) : (O.flags |= 1048576,
            E)
        }
        function o(O) {
            return t && O.alternate === null && (O.flags |= 67108866),
            O
        }
        function h(O, E, R, U) {
            return E === null || E.tag !== 6 ? (E = ec(R, O.mode, U),
            E.return = O,
            E) : (E = n(E, R),
            E.return = O,
            E)
        }
        function v(O, E, R, U) {
            var J = R.type;
            return J === G ? C(O, E, R.props.children, U, R.key) : E !== null && (E.elementType === J || typeof J == "object" && J !== null && J.$$typeof === At && Zl(J) === E.type) ? (E = n(E, R.props),
            cn(E, R),
            E.return = O,
            E) : (E = ou(R.type, R.key, R.props, null, O.mode, U),
            cn(E, R),
            E.return = O,
            E)
        }
        function x(O, E, R, U) {
            return E === null || E.tag !== 4 || E.stateNode.containerInfo !== R.containerInfo || E.stateNode.implementation !== R.implementation ? (E = lc(R, O.mode, U),
            E.return = O,
            E) : (E = n(E, R.children || []),
            E.return = O,
            E)
        }
        function C(O, E, R, U, J) {
            return E === null || E.tag !== 7 ? (E = Yl(R, O.mode, U, J),
            E.return = O,
            E) : (E = n(E, R),
            E.return = O,
            E)
        }
        function L(O, E, R) {
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return E = ec("" + E, O.mode, R),
                E.return = O,
                E;
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case B:
                    return R = ou(E.type, E.key, E.props, null, O.mode, R),
                    cn(R, E),
                    R.return = O,
                    R;
                case H:
                    return E = lc(E, O.mode, R),
                    E.return = O,
                    E;
                case At:
                    return E = Zl(E),
                    L(O, E, R)
                }
                if (ee(E) || Ft(E))
                    return E = Yl(E, O.mode, R, null),
                    E.return = O,
                    E;
                if (typeof E.then == "function")
                    return L(O, vu(E), R);
                if (E.$$typeof === K)
                    return L(O, mu(O, E), R);
                Su(O, E)
            }
            return null
        }
        function A(O, E, R, U) {
            var J = E !== null ? E.key : null;
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
                return J !== null ? null : h(O, E, "" + R, U);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case B:
                    return R.key === J ? v(O, E, R, U) : null;
                case H:
                    return R.key === J ? x(O, E, R, U) : null;
                case At:
                    return R = Zl(R),
                    A(O, E, R, U)
                }
                if (ee(R) || Ft(R))
                    return J !== null ? null : C(O, E, R, U, null);
                if (typeof R.then == "function")
                    return A(O, E, vu(R), U);
                if (R.$$typeof === K)
                    return A(O, E, mu(O, R), U);
                Su(O, R)
            }
            return null
        }
        function z(O, E, R, U, J) {
            if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
                return O = O.get(R) || null,
                h(E, O, "" + U, J);
            if (typeof U == "object" && U !== null) {
                switch (U.$$typeof) {
                case B:
                    return O = O.get(U.key === null ? R : U.key) || null,
                    v(E, O, U, J);
                case H:
                    return O = O.get(U.key === null ? R : U.key) || null,
                    x(E, O, U, J);
                case At:
                    return U = Zl(U),
                    z(O, E, R, U, J)
                }
                if (ee(U) || Ft(U))
                    return O = O.get(R) || null,
                    C(E, O, U, J, null);
                if (typeof U.then == "function")
                    return z(O, E, R, vu(U), J);
                if (U.$$typeof === K)
                    return z(O, E, R, mu(E, U), J);
                Su(E, U)
            }
            return null
        }
        function Q(O, E, R, U) {
            for (var J = null, ot = null, Z = E, et = E = 0, ct = null; Z !== null && et < R.length; et++) {
                Z.index > et ? (ct = Z,
                Z = null) : ct = Z.sibling;
                var dt = A(O, Z, R[et], U);
                if (dt === null) {
                    Z === null && (Z = ct);
                    break
                }
                t && Z && dt.alternate === null && e(O, Z),
                E = u(dt, E, et),
                ot === null ? J = dt : ot.sibling = dt,
                ot = dt,
                Z = ct
            }
            if (et === R.length)
                return l(O, Z),
                ft && Ze(O, et),
                J;
            if (Z === null) {
                for (; et < R.length; et++)
                    Z = L(O, R[et], U),
                    Z !== null && (E = u(Z, E, et),
                    ot === null ? J = Z : ot.sibling = Z,
                    ot = Z);
                return ft && Ze(O, et),
                J
            }
            for (Z = a(Z); et < R.length; et++)
                ct = z(Z, O, et, R[et], U),
                ct !== null && (t && ct.alternate !== null && Z.delete(ct.key === null ? et : ct.key),
                E = u(ct, E, et),
                ot === null ? J = ct : ot.sibling = ct,
                ot = ct);
            return t && Z.forEach(function(Dl) {
                return e(O, Dl)
            }),
            ft && Ze(O, et),
            J
        }
        function k(O, E, R, U) {
            if (R == null)
                throw Error(c(151));
            for (var J = null, ot = null, Z = E, et = E = 0, ct = null, dt = R.next(); Z !== null && !dt.done; et++,
            dt = R.next()) {
                Z.index > et ? (ct = Z,
                Z = null) : ct = Z.sibling;
                var Dl = A(O, Z, dt.value, U);
                if (Dl === null) {
                    Z === null && (Z = ct);
                    break
                }
                t && Z && Dl.alternate === null && e(O, Z),
                E = u(Dl, E, et),
                ot === null ? J = Dl : ot.sibling = Dl,
                ot = Dl,
                Z = ct
            }
            if (dt.done)
                return l(O, Z),
                ft && Ze(O, et),
                J;
            if (Z === null) {
                for (; !dt.done; et++,
                dt = R.next())
                    dt = L(O, dt.value, U),
                    dt !== null && (E = u(dt, E, et),
                    ot === null ? J = dt : ot.sibling = dt,
                    ot = dt);
                return ft && Ze(O, et),
                J
            }
            for (Z = a(Z); !dt.done; et++,
            dt = R.next())
                dt = z(Z, O, et, dt.value, U),
                dt !== null && (t && dt.alternate !== null && Z.delete(dt.key === null ? et : dt.key),
                E = u(dt, E, et),
                ot === null ? J = dt : ot.sibling = dt,
                ot = dt);
            return t && Z.forEach(function(wp) {
                return e(O, wp)
            }),
            ft && Ze(O, et),
            J
        }
        function Et(O, E, R, U) {
            if (typeof R == "object" && R !== null && R.type === G && R.key === null && (R = R.props.children),
            typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case B:
                    t: {
                        for (var J = R.key; E !== null; ) {
                            if (E.key === J) {
                                if (J = R.type,
                                J === G) {
                                    if (E.tag === 7) {
                                        l(O, E.sibling),
                                        U = n(E, R.props.children),
                                        U.return = O,
                                        O = U;
                                        break t
                                    }
                                } else if (E.elementType === J || typeof J == "object" && J !== null && J.$$typeof === At && Zl(J) === E.type) {
                                    l(O, E.sibling),
                                    U = n(E, R.props),
                                    cn(U, R),
                                    U.return = O,
                                    O = U;
                                    break t
                                }
                                l(O, E);
                                break
                            } else
                                e(O, E);
                            E = E.sibling
                        }
                        R.type === G ? (U = Yl(R.props.children, O.mode, U, R.key),
                        U.return = O,
                        O = U) : (U = ou(R.type, R.key, R.props, null, O.mode, U),
                        cn(U, R),
                        U.return = O,
                        O = U)
                    }
                    return o(O);
                case H:
                    t: {
                        for (J = R.key; E !== null; ) {
                            if (E.key === J)
                                if (E.tag === 4 && E.stateNode.containerInfo === R.containerInfo && E.stateNode.implementation === R.implementation) {
                                    l(O, E.sibling),
                                    U = n(E, R.children || []),
                                    U.return = O,
                                    O = U;
                                    break t
                                } else {
                                    l(O, E);
                                    break
                                }
                            else
                                e(O, E);
                            E = E.sibling
                        }
                        U = lc(R, O.mode, U),
                        U.return = O,
                        O = U
                    }
                    return o(O);
                case At:
                    return R = Zl(R),
                    Et(O, E, R, U)
                }
                if (ee(R))
                    return Q(O, E, R, U);
                if (Ft(R)) {
                    if (J = Ft(R),
                    typeof J != "function")
                        throw Error(c(150));
                    return R = J.call(R),
                    k(O, E, R, U)
                }
                if (typeof R.then == "function")
                    return Et(O, E, vu(R), U);
                if (R.$$typeof === K)
                    return Et(O, E, mu(O, R), U);
                Su(O, R)
            }
            return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R,
            E !== null && E.tag === 6 ? (l(O, E.sibling),
            U = n(E, R),
            U.return = O,
            O = U) : (l(O, E),
            U = ec(R, O.mode, U),
            U.return = O,
            O = U),
            o(O)) : l(O, E)
        }
        return function(O, E, R, U) {
            try {
                un = 0;
                var J = Et(O, E, R, U);
                return Sa = null,
                J
            } catch (Z) {
                if (Z === va || Z === pu)
                    throw Z;
                var ot = he(29, Z, null, O.mode);
                return ot.lanes = U,
                ot.return = O,
                ot
            }
        }
    }
    var Jl = Rr(!0)
      , xr = Rr(!1)
      , ml = !1;
    function mc(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function gc(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function gl(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function pl(t, e, l) {
        var a = t.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (ht & 2) !== 0) {
            var n = a.pending;
            return n === null ? e.next = e : (e.next = n.next,
            n.next = e),
            a.pending = e,
            e = ru(t),
            sr(t, null, l),
            e
        }
        return fu(t, a, e, l),
        ru(t)
    }
    function sn(t, e, l) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (l & 4194048) !== 0)) {
            var a = e.lanes;
            a &= t.pendingLanes,
            l |= a,
            e.lanes = l,
            pf(t, l)
        }
    }
    function pc(t, e) {
        var l = t.updateQueue
          , a = t.alternate;
        if (a !== null && (a = a.updateQueue,
        l === a)) {
            var n = null
              , u = null;
            if (l = l.firstBaseUpdate,
            l !== null) {
                do {
                    var o = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? n = u = o : u = u.next = o,
                    l = l.next
                } while (l !== null);
                u === null ? n = u = e : u = u.next = e
            } else
                n = u = e;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            },
            t.updateQueue = l;
            return
        }
        t = l.lastBaseUpdate,
        t === null ? l.firstBaseUpdate = e : t.next = e,
        l.lastBaseUpdate = e
    }
    var yc = !1;
    function fn() {
        if (yc) {
            var t = ya;
            if (t !== null)
                throw t
        }
    }
    function rn(t, e, l, a) {
        yc = !1;
        var n = t.updateQueue;
        ml = !1;
        var u = n.firstBaseUpdate
          , o = n.lastBaseUpdate
          , h = n.shared.pending;
        if (h !== null) {
            n.shared.pending = null;
            var v = h
              , x = v.next;
            v.next = null,
            o === null ? u = x : o.next = x,
            o = v;
            var C = t.alternate;
            C !== null && (C = C.updateQueue,
            h = C.lastBaseUpdate,
            h !== o && (h === null ? C.firstBaseUpdate = x : h.next = x,
            C.lastBaseUpdate = v))
        }
        if (u !== null) {
            var L = n.baseState;
            o = 0,
            C = x = v = null,
            h = u;
            do {
                var A = h.lane & -536870913
                  , z = A !== h.lane;
                if (z ? (it & A) === A : (a & A) === A) {
                    A !== 0 && A === pa && (yc = !0),
                    C !== null && (C = C.next = {
                        lane: 0,
                        tag: h.tag,
                        payload: h.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var Q = t
                          , k = h;
                        A = e;
                        var Et = l;
                        switch (k.tag) {
                        case 1:
                            if (Q = k.payload,
                            typeof Q == "function") {
                                L = Q.call(Et, L, A);
                                break t
                            }
                            L = Q;
                            break t;
                        case 3:
                            Q.flags = Q.flags & -65537 | 128;
                        case 0:
                            if (Q = k.payload,
                            A = typeof Q == "function" ? Q.call(Et, L, A) : Q,
                            A == null)
                                break t;
                            L = S({}, L, A);
                            break t;
                        case 2:
                            ml = !0
                        }
                    }
                    A = h.callback,
                    A !== null && (t.flags |= 64,
                    z && (t.flags |= 8192),
                    z = n.callbacks,
                    z === null ? n.callbacks = [A] : z.push(A))
                } else
                    z = {
                        lane: A,
                        tag: h.tag,
                        payload: h.payload,
                        callback: h.callback,
                        next: null
                    },
                    C === null ? (x = C = z,
                    v = L) : C = C.next = z,
                    o |= A;
                if (h = h.next,
                h === null) {
                    if (h = n.shared.pending,
                    h === null)
                        break;
                    z = h,
                    h = z.next,
                    z.next = null,
                    n.lastBaseUpdate = z,
                    n.shared.pending = null
                }
            } while (!0);
            C === null && (v = L),
            n.baseState = v,
            n.firstBaseUpdate = x,
            n.lastBaseUpdate = C,
            u === null && (n.shared.lanes = 0),
            El |= o,
            t.lanes = o,
            t.memoizedState = L
        }
    }
    function Ar(t, e) {
        if (typeof t != "function")
            throw Error(c(191, t));
        t.call(e)
    }
    function zr(t, e) {
        var l = t.callbacks;
        if (l !== null)
            for (t.callbacks = null,
            t = 0; t < l.length; t++)
                Ar(l[t], e)
    }
    var ba = b(null)
      , bu = b(0);
    function _r(t, e) {
        t = ll,
        w(bu, t),
        w(ba, e),
        ll = t | e.baseLanes
    }
    function vc() {
        w(bu, ll),
        w(ba, ba.current)
    }
    function Sc() {
        ll = bu.current,
        M(ba),
        M(bu)
    }
    var me = b(null)
      , _e = null;
    function yl(t) {
        var e = t.alternate;
        w(Lt, Lt.current & 1),
        w(me, t),
        _e === null && (e === null || ba.current !== null || e.memoizedState !== null) && (_e = t)
    }
    function bc(t) {
        w(Lt, Lt.current),
        w(me, t),
        _e === null && (_e = t)
    }
    function Cr(t) {
        t.tag === 22 ? (w(Lt, Lt.current),
        w(me, t),
        _e === null && (_e = t)) : vl()
    }
    function vl() {
        w(Lt, Lt.current),
        w(me, me.current)
    }
    function ge(t) {
        M(me),
        _e === t && (_e = null),
        M(Lt)
    }
    var Lt = b(0);
    function Eu(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var l = e.memoizedState;
                if (l !== null && (l = l.dehydrated,
                l === null || As(l) || zs(l)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var $e = 0
      , tt = null
      , St = null
      , jt = null
      , Tu = !1
      , Ea = !1
      , $l = !1
      , Ou = 0
      , on = 0
      , Ta = null
      , _g = 0;
    function Nt() {
        throw Error(c(321))
    }
    function Ec(t, e) {
        if (e === null)
            return !1;
        for (var l = 0; l < e.length && l < t.length; l++)
            if (!de(t[l], e[l]))
                return !1;
        return !0
    }
    function Tc(t, e, l, a, n, u) {
        return $e = u,
        tt = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        _.H = t === null || t.memoizedState === null ? ho : jc,
        $l = !1,
        u = l(a, n),
        $l = !1,
        Ea && (u = Dr(e, l, a, n)),
        Nr(t),
        u
    }
    function Nr(t) {
        _.H = mn;
        var e = St !== null && St.next !== null;
        if ($e = 0,
        jt = St = tt = null,
        Tu = !1,
        on = 0,
        Ta = null,
        e)
            throw Error(c(300));
        t === null || wt || (t = t.dependencies,
        t !== null && hu(t) && (wt = !0))
    }
    function Dr(t, e, l, a) {
        tt = t;
        var n = 0;
        do {
            if (Ea && (Ta = null),
            on = 0,
            Ea = !1,
            25 <= n)
                throw Error(c(301));
            if (n += 1,
            jt = St = null,
            t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            _.H = mo,
            u = e(l, a)
        } while (Ea);
        return u
    }
    function Cg() {
        var t = _.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? dn(e) : e,
        t = t.useState()[0],
        (St !== null ? St.memoizedState : null) !== t && (tt.flags |= 1024),
        e
    }
    function Oc() {
        var t = Ou !== 0;
        return Ou = 0,
        t
    }
    function Rc(t, e, l) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~l
    }
    function xc(t) {
        if (Tu) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            Tu = !1
        }
        $e = 0,
        jt = St = tt = null,
        Ea = !1,
        on = Ou = 0,
        Ta = null
    }
    function te() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return jt === null ? tt.memoizedState = jt = t : jt = jt.next = t,
        jt
    }
    function Ht() {
        if (St === null) {
            var t = tt.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = St.next;
        var e = jt === null ? tt.memoizedState : jt.next;
        if (e !== null)
            jt = e,
            St = t;
        else {
            if (t === null)
                throw tt.alternate === null ? Error(c(467)) : Error(c(310));
            St = t,
            t = {
                memoizedState: St.memoizedState,
                baseState: St.baseState,
                baseQueue: St.baseQueue,
                queue: St.queue,
                next: null
            },
            jt === null ? tt.memoizedState = jt = t : jt = jt.next = t
        }
        return jt
    }
    function Ru() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function dn(t) {
        var e = on;
        return on += 1,
        Ta === null && (Ta = []),
        t = Er(Ta, t, e),
        e = tt,
        (jt === null ? e.memoizedState : jt.next) === null && (e = e.alternate,
        _.H = e === null || e.memoizedState === null ? ho : jc),
        t
    }
    function xu(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return dn(t);
            if (t.$$typeof === K)
                return Kt(t)
        }
        throw Error(c(438, String(t)))
    }
    function Ac(t) {
        var e = null
          , l = tt.updateQueue;
        if (l !== null && (e = l.memoCache),
        e == null) {
            var a = tt.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (e = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        l === null && (l = Ru(),
        tt.updateQueue = l),
        l.memoCache = e,
        l = e.data[e.index],
        l === void 0)
            for (l = e.data[e.index] = Array(t),
            a = 0; a < t; a++)
                l[a] = Ct;
        return e.index++,
        l
    }
    function ke(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function Au(t) {
        var e = Ht();
        return zc(e, St, t)
    }
    function zc(t, e, l) {
        var a = t.queue;
        if (a === null)
            throw Error(c(311));
        a.lastRenderedReducer = l;
        var n = t.baseQueue
          , u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var o = n.next;
                n.next = u.next,
                u.next = o
            }
            e.baseQueue = n = u,
            a.pending = null
        }
        if (u = t.baseState,
        n === null)
            t.memoizedState = u;
        else {
            e = n.next;
            var h = o = null
              , v = null
              , x = e
              , C = !1;
            do {
                var L = x.lane & -536870913;
                if (L !== x.lane ? (it & L) === L : ($e & L) === L) {
                    var A = x.revertLane;
                    if (A === 0)
                        v !== null && (v = v.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: x.action,
                            hasEagerState: x.hasEagerState,
                            eagerState: x.eagerState,
                            next: null
                        }),
                        L === pa && (C = !0);
                    else if (($e & A) === A) {
                        x = x.next,
                        A === pa && (C = !0);
                        continue
                    } else
                        L = {
                            lane: 0,
                            revertLane: x.revertLane,
                            gesture: null,
                            action: x.action,
                            hasEagerState: x.hasEagerState,
                            eagerState: x.eagerState,
                            next: null
                        },
                        v === null ? (h = v = L,
                        o = u) : v = v.next = L,
                        tt.lanes |= A,
                        El |= A;
                    L = x.action,
                    $l && l(u, L),
                    u = x.hasEagerState ? x.eagerState : l(u, L)
                } else
                    A = {
                        lane: L,
                        revertLane: x.revertLane,
                        gesture: x.gesture,
                        action: x.action,
                        hasEagerState: x.hasEagerState,
                        eagerState: x.eagerState,
                        next: null
                    },
                    v === null ? (h = v = A,
                    o = u) : v = v.next = A,
                    tt.lanes |= L,
                    El |= L;
                x = x.next
            } while (x !== null && x !== e);
            if (v === null ? o = u : v.next = h,
            !de(u, t.memoizedState) && (wt = !0,
            C && (l = ya,
            l !== null)))
                throw l;
            t.memoizedState = u,
            t.baseState = o,
            t.baseQueue = v,
            a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0),
        [t.memoizedState, a.dispatch]
    }
    function _c(t) {
        var e = Ht()
          , l = e.queue;
        if (l === null)
            throw Error(c(311));
        l.lastRenderedReducer = t;
        var a = l.dispatch
          , n = l.pending
          , u = e.memoizedState;
        if (n !== null) {
            l.pending = null;
            var o = n = n.next;
            do
                u = t(u, o.action),
                o = o.next;
            while (o !== n);
            de(u, e.memoizedState) || (wt = !0),
            e.memoizedState = u,
            e.baseQueue === null && (e.baseState = u),
            l.lastRenderedState = u
        }
        return [u, a]
    }
    function Mr(t, e, l) {
        var a = tt
          , n = Ht()
          , u = ft;
        if (u) {
            if (l === void 0)
                throw Error(c(407));
            l = l()
        } else
            l = e();
        var o = !de((St || n).memoizedState, l);
        if (o && (n.memoizedState = l,
        wt = !0),
        n = n.queue,
        Dc(Hr.bind(null, a, n, t), [t]),
        n.getSnapshot !== e || o || jt !== null && jt.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            Oa(9, {
                destroy: void 0
            }, Lr.bind(null, a, n, l, e), null),
            Tt === null)
                throw Error(c(349));
            u || ($e & 127) !== 0 || Ur(a, e, l)
        }
        return l
    }
    function Ur(t, e, l) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: l
        },
        e = tt.updateQueue,
        e === null ? (e = Ru(),
        tt.updateQueue = e,
        e.stores = [t]) : (l = e.stores,
        l === null ? e.stores = [t] : l.push(t))
    }
    function Lr(t, e, l, a) {
        e.value = l,
        e.getSnapshot = a,
        Br(e) && jr(t)
    }
    function Hr(t, e, l) {
        return l(function() {
            Br(e) && jr(t)
        })
    }
    function Br(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var l = e();
            return !de(t, l)
        } catch {
            return !0
        }
    }
    function jr(t) {
        var e = ql(t, 2);
        e !== null && se(e, t, 2)
    }
    function Cc(t) {
        var e = te();
        if (typeof t == "function") {
            var l = t;
            if (t = l(),
            $l) {
                cl(!0);
                try {
                    l()
                } finally {
                    cl(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ke,
            lastRenderedState: t
        },
        e
    }
    function wr(t, e, l, a) {
        return t.baseState = l,
        zc(t, St, typeof a == "function" ? a : ke)
    }
    function Ng(t, e, l, a, n) {
        if (Cu(t))
            throw Error(c(485));
        if (t = e.action,
        t !== null) {
            var u = {
                payload: n,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(o) {
                    u.listeners.push(o)
                }
            };
            _.T !== null ? l(!0) : u.isTransition = !1,
            a(u),
            l = e.pending,
            l === null ? (u.next = e.pending = u,
            qr(e, u)) : (u.next = l.next,
            e.pending = l.next = u)
        }
    }
    function qr(t, e) {
        var l = e.action
          , a = e.payload
          , n = t.state;
        if (e.isTransition) {
            var u = _.T
              , o = {};
            _.T = o;
            try {
                var h = l(n, a)
                  , v = _.S;
                v !== null && v(o, h),
                Yr(t, e, h)
            } catch (x) {
                Nc(t, e, x)
            } finally {
                u !== null && o.types !== null && (u.types = o.types),
                _.T = u
            }
        } else
            try {
                u = l(n, a),
                Yr(t, e, u)
            } catch (x) {
                Nc(t, e, x)
            }
    }
    function Yr(t, e, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
            Vr(t, e, a)
        }, function(a) {
            return Nc(t, e, a)
        }) : Vr(t, e, l)
    }
    function Vr(t, e, l) {
        e.status = "fulfilled",
        e.value = l,
        Gr(e),
        t.state = l,
        e = t.pending,
        e !== null && (l = e.next,
        l === e ? t.pending = null : (l = l.next,
        e.next = l,
        qr(t, l)))
    }
    function Nc(t, e, l) {
        var a = t.pending;
        if (t.pending = null,
        a !== null) {
            a = a.next;
            do
                e.status = "rejected",
                e.reason = l,
                Gr(e),
                e = e.next;
            while (e !== a)
        }
        t.action = null
    }
    function Gr(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function Xr(t, e) {
        return e
    }
    function Qr(t, e) {
        if (ft) {
            var l = Tt.formState;
            if (l !== null) {
                t: {
                    var a = tt;
                    if (ft) {
                        if (Rt) {
                            e: {
                                for (var n = Rt, u = ze; n.nodeType !== 8; ) {
                                    if (!u) {
                                        n = null;
                                        break e
                                    }
                                    if (n = Ce(n.nextSibling),
                                    n === null) {
                                        n = null;
                                        break e
                                    }
                                }
                                u = n.data,
                                n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                Rt = Ce(n.nextSibling),
                                a = n.data === "F!";
                                break t
                            }
                        }
                        dl(a)
                    }
                    a = !1
                }
                a && (e = l[0])
            }
        }
        return l = te(),
        l.memoizedState = l.baseState = e,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Xr,
            lastRenderedState: e
        },
        l.queue = a,
        l = fo.bind(null, tt, a),
        a.dispatch = l,
        a = Cc(!1),
        u = Bc.bind(null, tt, !1, a.queue),
        a = te(),
        n = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        a.queue = n,
        l = Ng.bind(null, tt, n, u, l),
        n.dispatch = l,
        a.memoizedState = t,
        [e, l, !1]
    }
    function Zr(t) {
        var e = Ht();
        return Kr(e, St, t)
    }
    function Kr(t, e, l) {
        if (e = zc(t, e, Xr)[0],
        t = Au(ke)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var a = dn(e)
            } catch (o) {
                throw o === va ? pu : o
            }
        else
            a = e;
        e = Ht();
        var n = e.queue
          , u = n.dispatch;
        return l !== e.memoizedState && (tt.flags |= 2048,
        Oa(9, {
            destroy: void 0
        }, Dg.bind(null, n, l), null)),
        [a, u, t]
    }
    function Dg(t, e) {
        t.action = e
    }
    function Jr(t) {
        var e = Ht()
          , l = St;
        if (l !== null)
            return Kr(e, l, t);
        Ht(),
        e = e.memoizedState,
        l = Ht();
        var a = l.queue.dispatch;
        return l.memoizedState = t,
        [e, a, !1]
    }
    function Oa(t, e, l, a) {
        return t = {
            tag: t,
            create: l,
            deps: a,
            inst: e,
            next: null
        },
        e = tt.updateQueue,
        e === null && (e = Ru(),
        tt.updateQueue = e),
        l = e.lastEffect,
        l === null ? e.lastEffect = t.next = t : (a = l.next,
        l.next = t,
        t.next = a,
        e.lastEffect = t),
        t
    }
    function $r() {
        return Ht().memoizedState
    }
    function zu(t, e, l, a) {
        var n = te();
        tt.flags |= t,
        n.memoizedState = Oa(1 | e, {
            destroy: void 0
        }, l, a === void 0 ? null : a)
    }
    function _u(t, e, l, a) {
        var n = Ht();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        St !== null && a !== null && Ec(a, St.memoizedState.deps) ? n.memoizedState = Oa(e, u, l, a) : (tt.flags |= t,
        n.memoizedState = Oa(1 | e, u, l, a))
    }
    function kr(t, e) {
        zu(8390656, 8, t, e)
    }
    function Dc(t, e) {
        _u(2048, 8, t, e)
    }
    function Mg(t) {
        tt.flags |= 4;
        var e = tt.updateQueue;
        if (e === null)
            e = Ru(),
            tt.updateQueue = e,
            e.events = [t];
        else {
            var l = e.events;
            l === null ? e.events = [t] : l.push(t)
        }
    }
    function Fr(t) {
        var e = Ht().memoizedState;
        return Mg({
            ref: e,
            nextImpl: t
        }),
        function() {
            if ((ht & 2) !== 0)
                throw Error(c(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function Wr(t, e) {
        return _u(4, 2, t, e)
    }
    function Pr(t, e) {
        return _u(4, 4, t, e)
    }
    function Ir(t, e) {
        if (typeof e == "function") {
            t = t();
            var l = e(t);
            return function() {
                typeof l == "function" ? l() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function to(t, e, l) {
        l = l != null ? l.concat([t]) : null,
        _u(4, 4, Ir.bind(null, e, t), l)
    }
    function Mc() {}
    function eo(t, e) {
        var l = Ht();
        e = e === void 0 ? null : e;
        var a = l.memoizedState;
        return e !== null && Ec(e, a[1]) ? a[0] : (l.memoizedState = [t, e],
        t)
    }
    function lo(t, e) {
        var l = Ht();
        e = e === void 0 ? null : e;
        var a = l.memoizedState;
        if (e !== null && Ec(e, a[1]))
            return a[0];
        if (a = t(),
        $l) {
            cl(!0);
            try {
                t()
            } finally {
                cl(!1)
            }
        }
        return l.memoizedState = [a, e],
        a
    }
    function Uc(t, e, l) {
        return l === void 0 || ($e & 1073741824) !== 0 && (it & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l,
        t = nd(),
        tt.lanes |= t,
        El |= t,
        l)
    }
    function ao(t, e, l, a) {
        return de(l, e) ? l : ba.current !== null ? (t = Uc(t, l, a),
        de(t, e) || (wt = !0),
        t) : ($e & 42) === 0 || ($e & 1073741824) !== 0 && (it & 261930) === 0 ? (wt = !0,
        t.memoizedState = l) : (t = nd(),
        tt.lanes |= t,
        El |= t,
        e)
    }
    function no(t, e, l, a, n) {
        var u = j.p;
        j.p = u !== 0 && 8 > u ? u : 8;
        var o = _.T
          , h = {};
        _.T = h,
        Bc(t, !1, e, l);
        try {
            var v = n()
              , x = _.S;
            if (x !== null && x(h, v),
            v !== null && typeof v == "object" && typeof v.then == "function") {
                var C = zg(v, a);
                hn(t, e, C, ve(t))
            } else
                hn(t, e, a, ve(t))
        } catch (L) {
            hn(t, e, {
                then: function() {},
                status: "rejected",
                reason: L
            }, ve())
        } finally {
            j.p = u,
            o !== null && h.types !== null && (o.types = h.types),
            _.T = o
        }
    }
    function Ug() {}
    function Lc(t, e, l, a) {
        if (t.tag !== 5)
            throw Error(c(476));
        var n = uo(t).queue;
        no(t, n, e, $, l === null ? Ug : function() {
            return io(t),
            l(a)
        }
        )
    }
    function uo(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: $,
            baseState: $,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ke,
                lastRenderedState: $
            },
            next: null
        };
        var l = {};
        return e.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ke,
                lastRenderedState: l
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function io(t) {
        var e = uo(t);
        e.next === null && (e = t.alternate.memoizedState),
        hn(t, e.next.queue, {}, ve())
    }
    function Hc() {
        return Kt(Nn)
    }
    function co() {
        return Ht().memoizedState
    }
    function so() {
        return Ht().memoizedState
    }
    function Lg(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var l = ve();
                t = gl(l);
                var a = pl(e, t, l);
                a !== null && (se(a, e, l),
                sn(a, e, l)),
                e = {
                    cache: rc()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function Hg(t, e, l) {
        var a = ve();
        l = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Cu(t) ? ro(e, l) : (l = Ii(t, e, l, a),
        l !== null && (se(l, t, a),
        oo(l, e, a)))
    }
    function fo(t, e, l) {
        var a = ve();
        hn(t, e, l, a)
    }
    function hn(t, e, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Cu(t))
            ro(e, n);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer,
            u !== null))
                try {
                    var o = e.lastRenderedState
                      , h = u(o, l);
                    if (n.hasEagerState = !0,
                    n.eagerState = h,
                    de(h, o))
                        return fu(t, e, n, 0),
                        Tt === null && su(),
                        !1
                } catch {}
            if (l = Ii(t, e, n, a),
            l !== null)
                return se(l, t, a),
                oo(l, e, a),
                !0
        }
        return !1
    }
    function Bc(t, e, l, a) {
        if (a = {
            lane: 2,
            revertLane: ms(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Cu(t)) {
            if (e)
                throw Error(c(479))
        } else
            e = Ii(t, l, a, 2),
            e !== null && se(e, t, 2)
    }
    function Cu(t) {
        var e = t.alternate;
        return t === tt || e !== null && e === tt
    }
    function ro(t, e) {
        Ea = Tu = !0;
        var l = t.pending;
        l === null ? e.next = e : (e.next = l.next,
        l.next = e),
        t.pending = e
    }
    function oo(t, e, l) {
        if ((l & 4194048) !== 0) {
            var a = e.lanes;
            a &= t.pendingLanes,
            l |= a,
            e.lanes = l,
            pf(t, l)
        }
    }
    var mn = {
        readContext: Kt,
        use: xu,
        useCallback: Nt,
        useContext: Nt,
        useEffect: Nt,
        useImperativeHandle: Nt,
        useLayoutEffect: Nt,
        useInsertionEffect: Nt,
        useMemo: Nt,
        useReducer: Nt,
        useRef: Nt,
        useState: Nt,
        useDebugValue: Nt,
        useDeferredValue: Nt,
        useTransition: Nt,
        useSyncExternalStore: Nt,
        useId: Nt,
        useHostTransitionStatus: Nt,
        useFormState: Nt,
        useActionState: Nt,
        useOptimistic: Nt,
        useMemoCache: Nt,
        useCacheRefresh: Nt
    };
    mn.useEffectEvent = Nt;
    var ho = {
        readContext: Kt,
        use: xu,
        useCallback: function(t, e) {
            return te().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: Kt,
        useEffect: kr,
        useImperativeHandle: function(t, e, l) {
            l = l != null ? l.concat([t]) : null,
            zu(4194308, 4, Ir.bind(null, e, t), l)
        },
        useLayoutEffect: function(t, e) {
            return zu(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            zu(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var l = te();
            e = e === void 0 ? null : e;
            var a = t();
            if ($l) {
                cl(!0);
                try {
                    t()
                } finally {
                    cl(!1)
                }
            }
            return l.memoizedState = [a, e],
            a
        },
        useReducer: function(t, e, l) {
            var a = te();
            if (l !== void 0) {
                var n = l(e);
                if ($l) {
                    cl(!0);
                    try {
                        l(e)
                    } finally {
                        cl(!1)
                    }
                }
            } else
                n = e;
            return a.memoizedState = a.baseState = n,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: n
            },
            a.queue = t,
            t = t.dispatch = Hg.bind(null, tt, t),
            [a.memoizedState, t]
        },
        useRef: function(t) {
            var e = te();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = Cc(t);
            var e = t.queue
              , l = fo.bind(null, tt, e);
            return e.dispatch = l,
            [t.memoizedState, l]
        },
        useDebugValue: Mc,
        useDeferredValue: function(t, e) {
            var l = te();
            return Uc(l, t, e)
        },
        useTransition: function() {
            var t = Cc(!1);
            return t = no.bind(null, tt, t.queue, !0, !1),
            te().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, l) {
            var a = tt
              , n = te();
            if (ft) {
                if (l === void 0)
                    throw Error(c(407));
                l = l()
            } else {
                if (l = e(),
                Tt === null)
                    throw Error(c(349));
                (it & 127) !== 0 || Ur(a, e, l)
            }
            n.memoizedState = l;
            var u = {
                value: l,
                getSnapshot: e
            };
            return n.queue = u,
            kr(Hr.bind(null, a, u, t), [t]),
            a.flags |= 2048,
            Oa(9, {
                destroy: void 0
            }, Lr.bind(null, a, u, l, e), null),
            l
        },
        useId: function() {
            var t = te()
              , e = Tt.identifierPrefix;
            if (ft) {
                var l = Be
                  , a = He;
                l = (a & ~(1 << 32 - oe(a) - 1)).toString(32) + l,
                e = "_" + e + "R_" + l,
                l = Ou++,
                0 < l && (e += "H" + l.toString(32)),
                e += "_"
            } else
                l = _g++,
                e = "_" + e + "r_" + l.toString(32) + "_";
            return t.memoizedState = e
        },
        useHostTransitionStatus: Hc,
        useFormState: Qr,
        useActionState: Qr,
        useOptimistic: function(t) {
            var e = te();
            e.memoizedState = e.baseState = t;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = l,
            e = Bc.bind(null, tt, !0, l),
            l.dispatch = e,
            [t, e]
        },
        useMemoCache: Ac,
        useCacheRefresh: function() {
            return te().memoizedState = Lg.bind(null, tt)
        },
        useEffectEvent: function(t) {
            var e = te()
              , l = {
                impl: t
            };
            return e.memoizedState = l,
            function() {
                if ((ht & 2) !== 0)
                    throw Error(c(440));
                return l.impl.apply(void 0, arguments)
            }
        }
    }
      , jc = {
        readContext: Kt,
        use: xu,
        useCallback: eo,
        useContext: Kt,
        useEffect: Dc,
        useImperativeHandle: to,
        useInsertionEffect: Wr,
        useLayoutEffect: Pr,
        useMemo: lo,
        useReducer: Au,
        useRef: $r,
        useState: function() {
            return Au(ke)
        },
        useDebugValue: Mc,
        useDeferredValue: function(t, e) {
            var l = Ht();
            return ao(l, St.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Au(ke)[0]
              , e = Ht().memoizedState;
            return [typeof t == "boolean" ? t : dn(t), e]
        },
        useSyncExternalStore: Mr,
        useId: co,
        useHostTransitionStatus: Hc,
        useFormState: Zr,
        useActionState: Zr,
        useOptimistic: function(t, e) {
            var l = Ht();
            return wr(l, St, t, e)
        },
        useMemoCache: Ac,
        useCacheRefresh: so
    };
    jc.useEffectEvent = Fr;
    var mo = {
        readContext: Kt,
        use: xu,
        useCallback: eo,
        useContext: Kt,
        useEffect: Dc,
        useImperativeHandle: to,
        useInsertionEffect: Wr,
        useLayoutEffect: Pr,
        useMemo: lo,
        useReducer: _c,
        useRef: $r,
        useState: function() {
            return _c(ke)
        },
        useDebugValue: Mc,
        useDeferredValue: function(t, e) {
            var l = Ht();
            return St === null ? Uc(l, t, e) : ao(l, St.memoizedState, t, e)
        },
        useTransition: function() {
            var t = _c(ke)[0]
              , e = Ht().memoizedState;
            return [typeof t == "boolean" ? t : dn(t), e]
        },
        useSyncExternalStore: Mr,
        useId: co,
        useHostTransitionStatus: Hc,
        useFormState: Jr,
        useActionState: Jr,
        useOptimistic: function(t, e) {
            var l = Ht();
            return St !== null ? wr(l, St, t, e) : (l.baseState = t,
            [t, l.queue.dispatch])
        },
        useMemoCache: Ac,
        useCacheRefresh: so
    };
    mo.useEffectEvent = Fr;
    function wc(t, e, l, a) {
        e = t.memoizedState,
        l = l(a, e),
        l = l == null ? e : S({}, e, l),
        t.memoizedState = l,
        t.lanes === 0 && (t.updateQueue.baseState = l)
    }
    var qc = {
        enqueueSetState: function(t, e, l) {
            t = t._reactInternals;
            var a = ve()
              , n = gl(a);
            n.payload = e,
            l != null && (n.callback = l),
            e = pl(t, n, a),
            e !== null && (se(e, t, a),
            sn(e, t, a))
        },
        enqueueReplaceState: function(t, e, l) {
            t = t._reactInternals;
            var a = ve()
              , n = gl(a);
            n.tag = 1,
            n.payload = e,
            l != null && (n.callback = l),
            e = pl(t, n, a),
            e !== null && (se(e, t, a),
            sn(e, t, a))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var l = ve()
              , a = gl(l);
            a.tag = 2,
            e != null && (a.callback = e),
            e = pl(t, a, l),
            e !== null && (se(e, t, l),
            sn(e, t, l))
        }
    };
    function go(t, e, l, a, n, u, o) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, o) : e.prototype && e.prototype.isPureReactComponent ? !Ia(l, a) || !Ia(n, u) : !0
    }
    function po(t, e, l, a) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a),
        e.state !== t && qc.enqueueReplaceState(e, e.state, null)
    }
    function kl(t, e) {
        var l = e;
        if ("ref"in e) {
            l = {};
            for (var a in e)
                a !== "ref" && (l[a] = e[a])
        }
        if (t = t.defaultProps) {
            l === e && (l = S({}, l));
            for (var n in t)
                l[n] === void 0 && (l[n] = t[n])
        }
        return l
    }
    function yo(t) {
        cu(t)
    }
    function vo(t) {
        console.error(t)
    }
    function So(t) {
        cu(t)
    }
    function Nu(t, e) {
        try {
            var l = t.onUncaughtError;
            l(e.value, {
                componentStack: e.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function bo(t, e, l) {
        try {
            var a = t.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function Yc(t, e, l) {
        return l = gl(l),
        l.tag = 3,
        l.payload = {
            element: null
        },
        l.callback = function() {
            Nu(t, e)
        }
        ,
        l
    }
    function Eo(t) {
        return t = gl(t),
        t.tag = 3,
        t
    }
    function To(t, e, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            t.payload = function() {
                return n(u)
            }
            ,
            t.callback = function() {
                bo(e, l, a)
            }
        }
        var o = l.stateNode;
        o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
            bo(e, l, a),
            typeof n != "function" && (Tl === null ? Tl = new Set([this]) : Tl.add(this));
            var h = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: h !== null ? h : ""
            })
        }
        )
    }
    function Bg(t, e, l, a, n) {
        if (l.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (e = l.alternate,
            e !== null && ga(e, l, n, !0),
            l = me.current,
            l !== null) {
                switch (l.tag) {
                case 31:
                case 13:
                    return _e === null ? Gu() : l.alternate === null && Dt === 0 && (Dt = 3),
                    l.flags &= -257,
                    l.flags |= 65536,
                    l.lanes = n,
                    a === yu ? l.flags |= 16384 : (e = l.updateQueue,
                    e === null ? l.updateQueue = new Set([a]) : e.add(a),
                    os(t, a, n)),
                    !1;
                case 22:
                    return l.flags |= 65536,
                    a === yu ? l.flags |= 16384 : (e = l.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    l.updateQueue = e) : (l = e.retryQueue,
                    l === null ? e.retryQueue = new Set([a]) : l.add(a)),
                    os(t, a, n)),
                    !1
                }
                throw Error(c(435, l.tag))
            }
            return os(t, a, n),
            Gu(),
            !1
        }
        if (ft)
            return e = me.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = n,
            a !== uc && (t = Error(c(422), {
                cause: a
            }),
            ln(Re(t, l)))) : (a !== uc && (e = Error(c(423), {
                cause: a
            }),
            ln(Re(e, l))),
            t = t.current.alternate,
            t.flags |= 65536,
            n &= -n,
            t.lanes |= n,
            a = Re(a, l),
            n = Yc(t.stateNode, a, n),
            pc(t, n),
            Dt !== 4 && (Dt = 2)),
            !1;
        var u = Error(c(520), {
            cause: a
        });
        if (u = Re(u, l),
        Tn === null ? Tn = [u] : Tn.push(u),
        Dt !== 4 && (Dt = 2),
        e === null)
            return !0;
        a = Re(a, l),
        l = e;
        do {
            switch (l.tag) {
            case 3:
                return l.flags |= 65536,
                t = n & -n,
                l.lanes |= t,
                t = Yc(l.stateNode, a, t),
                pc(l, t),
                !1;
            case 1:
                if (e = l.type,
                u = l.stateNode,
                (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Tl === null || !Tl.has(u))))
                    return l.flags |= 65536,
                    n &= -n,
                    l.lanes |= n,
                    n = Eo(n),
                    To(n, t, l, a),
                    pc(l, n),
                    !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var Vc = Error(c(461))
      , wt = !1;
    function Jt(t, e, l, a) {
        e.child = t === null ? xr(e, null, l, a) : Jl(e, t.child, l, a)
    }
    function Oo(t, e, l, a, n) {
        l = l.render;
        var u = e.ref;
        if ("ref"in a) {
            var o = {};
            for (var h in a)
                h !== "ref" && (o[h] = a[h])
        } else
            o = a;
        return Xl(e),
        a = Tc(t, e, l, o, u, n),
        h = Oc(),
        t !== null && !wt ? (Rc(t, e, n),
        Fe(t, e, n)) : (ft && h && ac(e),
        e.flags |= 1,
        Jt(t, e, a, n),
        e.child)
    }
    function Ro(t, e, l, a, n) {
        if (t === null) {
            var u = l.type;
            return typeof u == "function" && !tc(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15,
            e.type = u,
            xo(t, e, u, a, n)) : (t = ou(l.type, null, a, e, e.mode, n),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (u = t.child,
        !kc(t, n)) {
            var o = u.memoizedProps;
            if (l = l.compare,
            l = l !== null ? l : Ia,
            l(o, a) && t.ref === e.ref)
                return Fe(t, e, n)
        }
        return e.flags |= 1,
        t = Qe(u, a),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function xo(t, e, l, a, n) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (Ia(u, a) && t.ref === e.ref)
                if (wt = !1,
                e.pendingProps = a = u,
                kc(t, n))
                    (t.flags & 131072) !== 0 && (wt = !0);
                else
                    return e.lanes = t.lanes,
                    Fe(t, e, n)
        }
        return Gc(t, e, l, a, n)
    }
    function Ao(t, e, l, a) {
        var n = a.children
          , u = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | l : l,
                t !== null) {
                    for (a = e.child = t.child,
                    n = 0; a !== null; )
                        n = n | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = n & ~u
                } else
                    a = 0,
                    e.child = null;
                return zo(t, e, u, l, a)
            }
            if ((l & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && gu(e, u !== null ? u.cachePool : null),
                u !== null ? _r(e, u) : vc(),
                Cr(e);
            else
                return a = e.lanes = 536870912,
                zo(t, e, u !== null ? u.baseLanes | l : l, l, a)
        } else
            u !== null ? (gu(e, u.cachePool),
            _r(e, u),
            vl(),
            e.memoizedState = null) : (t !== null && gu(e, null),
            vc(),
            vl());
        return Jt(t, e, n, l),
        e.child
    }
    function gn(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function zo(t, e, l, a, n) {
        var u = dc();
        return u = u === null ? null : {
            parent: Bt._currentValue,
            pool: u
        },
        e.memoizedState = {
            baseLanes: l,
            cachePool: u
        },
        t !== null && gu(e, null),
        vc(),
        Cr(e),
        t !== null && ga(t, e, a, !0),
        e.childLanes = n,
        null
    }
    function Du(t, e) {
        return e = Uu({
            mode: e.mode,
            children: e.children
        }, t.mode),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function _o(t, e, l) {
        return Jl(e, t.child, null, l),
        t = Du(e, e.pendingProps),
        t.flags |= 2,
        ge(e),
        e.memoizedState = null,
        t
    }
    function jg(t, e, l) {
        var a = e.pendingProps
          , n = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        t === null) {
            if (ft) {
                if (a.mode === "hidden")
                    return t = Du(e, a),
                    e.lanes = 536870912,
                    gn(null, t);
                if (bc(e),
                (t = Rt) ? (t = Yd(t, ze),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: rl !== null ? {
                        id: He,
                        overflow: Be
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = rr(t),
                l.return = e,
                e.child = l,
                Zt = e,
                Rt = null)) : t = null,
                t === null)
                    throw dl(e);
                return e.lanes = 536870912,
                null
            }
            return Du(e, a)
        }
        var u = t.memoizedState;
        if (u !== null) {
            var o = u.dehydrated;
            if (bc(e),
            n)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = _o(t, e, l);
                else if (e.memoizedState !== null)
                    e.child = t.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(c(558));
            else if (wt || ga(t, e, l, !1),
            n = (l & t.childLanes) !== 0,
            wt || n) {
                if (a = Tt,
                a !== null && (o = yf(a, l),
                o !== 0 && o !== u.retryLane))
                    throw u.retryLane = o,
                    ql(t, o),
                    se(a, t, o),
                    Vc;
                Gu(),
                e = _o(t, e, l)
            } else
                t = u.treeContext,
                Rt = Ce(o.nextSibling),
                Zt = e,
                ft = !0,
                ol = null,
                ze = !1,
                t !== null && hr(e, t),
                e = Du(e, a),
                e.flags |= 4096;
            return e
        }
        return t = Qe(t.child, {
            mode: a.mode,
            children: a.children
        }),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function Mu(t, e) {
        var l = e.ref;
        if (l === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(c(284));
            (t === null || t.ref !== l) && (e.flags |= 4194816)
        }
    }
    function Gc(t, e, l, a, n) {
        return Xl(e),
        l = Tc(t, e, l, a, void 0, n),
        a = Oc(),
        t !== null && !wt ? (Rc(t, e, n),
        Fe(t, e, n)) : (ft && a && ac(e),
        e.flags |= 1,
        Jt(t, e, l, n),
        e.child)
    }
    function Co(t, e, l, a, n, u) {
        return Xl(e),
        e.updateQueue = null,
        l = Dr(e, a, l, n),
        Nr(t),
        a = Oc(),
        t !== null && !wt ? (Rc(t, e, u),
        Fe(t, e, u)) : (ft && a && ac(e),
        e.flags |= 1,
        Jt(t, e, l, u),
        e.child)
    }
    function No(t, e, l, a, n) {
        if (Xl(e),
        e.stateNode === null) {
            var u = oa
              , o = l.contextType;
            typeof o == "object" && o !== null && (u = Kt(o)),
            u = new l(a,u),
            e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = qc,
            e.stateNode = u,
            u._reactInternals = e,
            u = e.stateNode,
            u.props = a,
            u.state = e.memoizedState,
            u.refs = {},
            mc(e),
            o = l.contextType,
            u.context = typeof o == "object" && o !== null ? Kt(o) : oa,
            u.state = e.memoizedState,
            o = l.getDerivedStateFromProps,
            typeof o == "function" && (wc(e, l, o, a),
            u.state = e.memoizedState),
            typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (o = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            o !== u.state && qc.enqueueReplaceState(u, u.state, null),
            rn(e, a, u, n),
            fn(),
            u.state = e.memoizedState),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            a = !0
        } else if (t === null) {
            u = e.stateNode;
            var h = e.memoizedProps
              , v = kl(l, h);
            u.props = v;
            var x = u.context
              , C = l.contextType;
            o = oa,
            typeof C == "object" && C !== null && (o = Kt(C));
            var L = l.getDerivedStateFromProps;
            C = typeof L == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            h = e.pendingProps !== h,
            C || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || x !== o) && po(e, u, a, o),
            ml = !1;
            var A = e.memoizedState;
            u.state = A,
            rn(e, a, u, n),
            fn(),
            x = e.memoizedState,
            h || A !== x || ml ? (typeof L == "function" && (wc(e, l, L, a),
            x = e.memoizedState),
            (v = ml || go(e, l, v, a, A, x, o)) ? (C || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = a,
            e.memoizedState = x),
            u.props = a,
            u.state = x,
            u.context = o,
            a = v) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            a = !1)
        } else {
            u = e.stateNode,
            gc(t, e),
            o = e.memoizedProps,
            C = kl(l, o),
            u.props = C,
            L = e.pendingProps,
            A = u.context,
            x = l.contextType,
            v = oa,
            typeof x == "object" && x !== null && (v = Kt(x)),
            h = l.getDerivedStateFromProps,
            (x = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o !== L || A !== v) && po(e, u, a, v),
            ml = !1,
            A = e.memoizedState,
            u.state = A,
            rn(e, a, u, n),
            fn();
            var z = e.memoizedState;
            o !== L || A !== z || ml || t !== null && t.dependencies !== null && hu(t.dependencies) ? (typeof h == "function" && (wc(e, l, h, a),
            z = e.memoizedState),
            (C = ml || go(e, l, C, a, A, z, v) || t !== null && t.dependencies !== null && hu(t.dependencies)) ? (x || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, v),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, z, v)),
            typeof u.componentDidUpdate == "function" && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || o === t.memoizedProps && A === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = a,
            e.memoizedState = z),
            u.props = a,
            u.state = z,
            u.context = v,
            a = C) : (typeof u.componentDidUpdate != "function" || o === t.memoizedProps && A === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024),
            a = !1)
        }
        return u = a,
        Mu(t, e),
        a = (e.flags & 128) !== 0,
        u || a ? (u = e.stateNode,
        l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(),
        e.flags |= 1,
        t !== null && a ? (e.child = Jl(e, t.child, null, n),
        e.child = Jl(e, null, l, n)) : Jt(t, e, l, n),
        e.memoizedState = u.state,
        t = e.child) : t = Fe(t, e, n),
        t
    }
    function Do(t, e, l, a) {
        return Vl(),
        e.flags |= 256,
        Jt(t, e, l, a),
        e.child
    }
    var Xc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Qc(t) {
        return {
            baseLanes: t,
            cachePool: Sr()
        }
    }
    function Zc(t, e, l) {
        return t = t !== null ? t.childLanes & ~l : 0,
        e && (t |= ye),
        t
    }
    function Mo(t, e, l) {
        var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, o;
        if ((o = u) || (o = t !== null && t.memoizedState === null ? !1 : (Lt.current & 2) !== 0),
        o && (n = !0,
        e.flags &= -129),
        o = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (ft) {
                if (n ? yl(e) : vl(),
                (t = Rt) ? (t = Yd(t, ze),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: rl !== null ? {
                        id: He,
                        overflow: Be
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = rr(t),
                l.return = e,
                e.child = l,
                Zt = e,
                Rt = null)) : t = null,
                t === null)
                    throw dl(e);
                return zs(t) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var h = a.children;
            return a = a.fallback,
            n ? (vl(),
            n = e.mode,
            h = Uu({
                mode: "hidden",
                children: h
            }, n),
            a = Yl(a, n, l, null),
            h.return = e,
            a.return = e,
            h.sibling = a,
            e.child = h,
            a = e.child,
            a.memoizedState = Qc(l),
            a.childLanes = Zc(t, o, l),
            e.memoizedState = Xc,
            gn(null, a)) : (yl(e),
            Kc(e, h))
        }
        var v = t.memoizedState;
        if (v !== null && (h = v.dehydrated,
        h !== null)) {
            if (u)
                e.flags & 256 ? (yl(e),
                e.flags &= -257,
                e = Jc(t, e, l)) : e.memoizedState !== null ? (vl(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (vl(),
                h = a.fallback,
                n = e.mode,
                a = Uu({
                    mode: "visible",
                    children: a.children
                }, n),
                h = Yl(h, n, l, null),
                h.flags |= 2,
                a.return = e,
                h.return = e,
                a.sibling = h,
                e.child = a,
                Jl(e, t.child, null, l),
                a = e.child,
                a.memoizedState = Qc(l),
                a.childLanes = Zc(t, o, l),
                e.memoizedState = Xc,
                e = gn(null, a));
            else if (yl(e),
            zs(h)) {
                if (o = h.nextSibling && h.nextSibling.dataset,
                o)
                    var x = o.dgst;
                o = x,
                a = Error(c(419)),
                a.stack = "",
                a.digest = o,
                ln({
                    value: a,
                    source: null,
                    stack: null
                }),
                e = Jc(t, e, l)
            } else if (wt || ga(t, e, l, !1),
            o = (l & t.childLanes) !== 0,
            wt || o) {
                if (o = Tt,
                o !== null && (a = yf(o, l),
                a !== 0 && a !== v.retryLane))
                    throw v.retryLane = a,
                    ql(t, a),
                    se(o, t, a),
                    Vc;
                As(h) || Gu(),
                e = Jc(t, e, l)
            } else
                As(h) ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = v.treeContext,
                Rt = Ce(h.nextSibling),
                Zt = e,
                ft = !0,
                ol = null,
                ze = !1,
                t !== null && hr(e, t),
                e = Kc(e, a.children),
                e.flags |= 4096);
            return e
        }
        return n ? (vl(),
        h = a.fallback,
        n = e.mode,
        v = t.child,
        x = v.sibling,
        a = Qe(v, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = v.subtreeFlags & 65011712,
        x !== null ? h = Qe(x, h) : (h = Yl(h, n, l, null),
        h.flags |= 2),
        h.return = e,
        a.return = e,
        a.sibling = h,
        e.child = a,
        gn(null, a),
        a = e.child,
        h = t.child.memoizedState,
        h === null ? h = Qc(l) : (n = h.cachePool,
        n !== null ? (v = Bt._currentValue,
        n = n.parent !== v ? {
            parent: v,
            pool: v
        } : n) : n = Sr(),
        h = {
            baseLanes: h.baseLanes | l,
            cachePool: n
        }),
        a.memoizedState = h,
        a.childLanes = Zc(t, o, l),
        e.memoizedState = Xc,
        gn(t.child, a)) : (yl(e),
        l = t.child,
        t = l.sibling,
        l = Qe(l, {
            mode: "visible",
            children: a.children
        }),
        l.return = e,
        l.sibling = null,
        t !== null && (o = e.deletions,
        o === null ? (e.deletions = [t],
        e.flags |= 16) : o.push(t)),
        e.child = l,
        e.memoizedState = null,
        l)
    }
    function Kc(t, e) {
        return e = Uu({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function Uu(t, e) {
        return t = he(22, t, null, e),
        t.lanes = 0,
        t
    }
    function Jc(t, e, l) {
        return Jl(e, t.child, null, l),
        t = Kc(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function Uo(t, e, l) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e),
        sc(t.return, e, l)
    }
    function $c(t, e, l, a, n, u) {
        var o = t.memoizedState;
        o === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: n,
            treeForkCount: u
        } : (o.isBackwards = e,
        o.rendering = null,
        o.renderingStartTime = 0,
        o.last = a,
        o.tail = l,
        o.tailMode = n,
        o.treeForkCount = u)
    }
    function Lo(t, e, l) {
        var a = e.pendingProps
          , n = a.revealOrder
          , u = a.tail;
        a = a.children;
        var o = Lt.current
          , h = (o & 2) !== 0;
        if (h ? (o = o & 1 | 2,
        e.flags |= 128) : o &= 1,
        w(Lt, o),
        Jt(t, e, a, l),
        a = ft ? en : 0,
        !h && t !== null && (t.flags & 128) !== 0)
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && Uo(t, l, e);
                else if (t.tag === 19)
                    Uo(t, l, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (n) {
        case "forwards":
            for (l = e.child,
            n = null; l !== null; )
                t = l.alternate,
                t !== null && Eu(t) === null && (n = l),
                l = l.sibling;
            l = n,
            l === null ? (n = e.child,
            e.child = null) : (n = l.sibling,
            l.sibling = null),
            $c(e, !1, n, l, u, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (l = null,
            n = e.child,
            e.child = null; n !== null; ) {
                if (t = n.alternate,
                t !== null && Eu(t) === null) {
                    e.child = n;
                    break
                }
                t = n.sibling,
                n.sibling = l,
                l = n,
                n = t
            }
            $c(e, !0, l, null, u, a);
            break;
        case "together":
            $c(e, !1, null, null, void 0, a);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function Fe(t, e, l) {
        if (t !== null && (e.dependencies = t.dependencies),
        El |= e.lanes,
        (l & e.childLanes) === 0)
            if (t !== null) {
                if (ga(t, e, l, !1),
                (l & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(c(153));
        if (e.child !== null) {
            for (t = e.child,
            l = Qe(t, t.pendingProps),
            e.child = l,
            l.return = e; t.sibling !== null; )
                t = t.sibling,
                l = l.sibling = Qe(t, t.pendingProps),
                l.return = e;
            l.sibling = null
        }
        return e.child
    }
    function kc(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && hu(t)))
    }
    function wg(t, e, l) {
        switch (e.tag) {
        case 3:
            It(e, e.stateNode.containerInfo),
            hl(e, Bt, t.memoizedState.cache),
            Vl();
            break;
        case 27:
        case 5:
            Ya(e);
            break;
        case 4:
            It(e, e.stateNode.containerInfo);
            break;
        case 10:
            hl(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                bc(e),
                null;
            break;
        case 13:
            var a = e.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (yl(e),
                e.flags |= 128,
                null) : (l & e.child.childLanes) !== 0 ? Mo(t, e, l) : (yl(e),
                t = Fe(t, e, l),
                t !== null ? t.sibling : null);
            yl(e);
            break;
        case 19:
            var n = (t.flags & 128) !== 0;
            if (a = (l & e.childLanes) !== 0,
            a || (ga(t, e, l, !1),
            a = (l & e.childLanes) !== 0),
            n) {
                if (a)
                    return Lo(t, e, l);
                e.flags |= 128
            }
            if (n = e.memoizedState,
            n !== null && (n.rendering = null,
            n.tail = null,
            n.lastEffect = null),
            w(Lt, Lt.current),
            a)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            Ao(t, e, l, e.pendingProps);
        case 24:
            hl(e, Bt, t.memoizedState.cache)
        }
        return Fe(t, e, l)
    }
    function Ho(t, e, l) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                wt = !0;
            else {
                if (!kc(t, l) && (e.flags & 128) === 0)
                    return wt = !1,
                    wg(t, e, l);
                wt = (t.flags & 131072) !== 0
            }
        else
            wt = !1,
            ft && (e.flags & 1048576) !== 0 && dr(e, en, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                var a = e.pendingProps;
                if (t = Zl(e.elementType),
                e.type = t,
                typeof t == "function")
                    tc(t) ? (a = kl(t, a),
                    e.tag = 1,
                    e = No(null, e, t, a, l)) : (e.tag = 0,
                    e = Gc(null, e, t, a, l));
                else {
                    if (t != null) {
                        var n = t.$$typeof;
                        if (n === ut) {
                            e.tag = 11,
                            e = Oo(null, e, t, a, l);
                            break t
                        } else if (n === F) {
                            e.tag = 14,
                            e = Ro(null, e, t, a, l);
                            break t
                        }
                    }
                    throw e = Mt(t) || t,
                    Error(c(306, e, ""))
                }
            }
            return e;
        case 0:
            return Gc(t, e, e.type, e.pendingProps, l);
        case 1:
            return a = e.type,
            n = kl(a, e.pendingProps),
            No(t, e, a, n, l);
        case 3:
            t: {
                if (It(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(c(387));
                a = e.pendingProps;
                var u = e.memoizedState;
                n = u.element,
                gc(t, e),
                rn(e, a, null, l);
                var o = e.memoizedState;
                if (a = o.cache,
                hl(e, Bt, a),
                a !== u.cache && fc(e, [Bt], l, !0),
                fn(),
                a = o.element,
                u.isDehydrated)
                    if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: o.cache
                    },
                    e.updateQueue.baseState = u,
                    e.memoizedState = u,
                    e.flags & 256) {
                        e = Do(t, e, a, l);
                        break t
                    } else if (a !== n) {
                        n = Re(Error(c(424)), e),
                        ln(n),
                        e = Do(t, e, a, l);
                        break t
                    } else
                        for (t = e.stateNode.containerInfo,
                        t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t,
                        Rt = Ce(t.firstChild),
                        Zt = e,
                        ft = !0,
                        ol = null,
                        ze = !0,
                        l = xr(e, null, a, l),
                        e.child = l; l; )
                            l.flags = l.flags & -3 | 4096,
                            l = l.sibling;
                else {
                    if (Vl(),
                    a === n) {
                        e = Fe(t, e, l);
                        break t
                    }
                    Jt(t, e, a, l)
                }
                e = e.child
            }
            return e;
        case 26:
            return Mu(t, e),
            t === null ? (l = Kd(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : ft || (l = e.type,
            t = e.pendingProps,
            a = ku(lt.current).createElement(l),
            a[Qt] = e,
            a[le] = t,
            $t(a, l, t),
            Gt(a),
            e.stateNode = a) : e.memoizedState = Kd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return Ya(e),
            t === null && ft && (a = e.stateNode = Xd(e.type, e.pendingProps, lt.current),
            Zt = e,
            ze = !0,
            n = Rt,
            Al(e.type) ? (_s = n,
            Rt = Ce(a.firstChild)) : Rt = n),
            Jt(t, e, e.pendingProps.children, l),
            Mu(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && ft && ((n = a = Rt) && (a = mp(a, e.type, e.pendingProps, ze),
            a !== null ? (e.stateNode = a,
            Zt = e,
            Rt = Ce(a.firstChild),
            ze = !1,
            n = !0) : n = !1),
            n || dl(e)),
            Ya(e),
            n = e.type,
            u = e.pendingProps,
            o = t !== null ? t.memoizedProps : null,
            a = u.children,
            Os(n, u) ? a = null : o !== null && Os(n, o) && (e.flags |= 32),
            e.memoizedState !== null && (n = Tc(t, e, Cg, null, null, l),
            Nn._currentValue = n),
            Mu(t, e),
            Jt(t, e, a, l),
            e.child;
        case 6:
            return t === null && ft && ((t = l = Rt) && (l = gp(l, e.pendingProps, ze),
            l !== null ? (e.stateNode = l,
            Zt = e,
            Rt = null,
            t = !0) : t = !1),
            t || dl(e)),
            null;
        case 13:
            return Mo(t, e, l);
        case 4:
            return It(e, e.stateNode.containerInfo),
            a = e.pendingProps,
            t === null ? e.child = Jl(e, null, a, l) : Jt(t, e, a, l),
            e.child;
        case 11:
            return Oo(t, e, e.type, e.pendingProps, l);
        case 7:
            return Jt(t, e, e.pendingProps, l),
            e.child;
        case 8:
            return Jt(t, e, e.pendingProps.children, l),
            e.child;
        case 12:
            return Jt(t, e, e.pendingProps.children, l),
            e.child;
        case 10:
            return a = e.pendingProps,
            hl(e, e.type, a.value),
            Jt(t, e, a.children, l),
            e.child;
        case 9:
            return n = e.type._context,
            a = e.pendingProps.children,
            Xl(e),
            n = Kt(n),
            a = a(n),
            e.flags |= 1,
            Jt(t, e, a, l),
            e.child;
        case 14:
            return Ro(t, e, e.type, e.pendingProps, l);
        case 15:
            return xo(t, e, e.type, e.pendingProps, l);
        case 19:
            return Lo(t, e, l);
        case 31:
            return jg(t, e, l);
        case 22:
            return Ao(t, e, l, e.pendingProps);
        case 24:
            return Xl(e),
            a = Kt(Bt),
            t === null ? (n = dc(),
            n === null && (n = Tt,
            u = rc(),
            n.pooledCache = u,
            u.refCount++,
            u !== null && (n.pooledCacheLanes |= l),
            n = u),
            e.memoizedState = {
                parent: a,
                cache: n
            },
            mc(e),
            hl(e, Bt, n)) : ((t.lanes & l) !== 0 && (gc(t, e),
            rn(e, null, null, l),
            fn()),
            n = t.memoizedState,
            u = e.memoizedState,
            n.parent !== a ? (n = {
                parent: a,
                cache: a
            },
            e.memoizedState = n,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n),
            hl(e, Bt, a)) : (a = u.cache,
            hl(e, Bt, a),
            a !== n.cache && fc(e, [Bt], l, !0))),
            Jt(t, e, e.pendingProps.children, l),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(c(156, e.tag))
    }
    function We(t) {
        t.flags |= 4
    }
    function Fc(t, e, l, a, n) {
        if ((e = (t.mode & 32) !== 0) && (e = !1),
        e) {
            if (t.flags |= 16777216,
            (n & 335544128) === n)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (sd())
                    t.flags |= 8192;
                else
                    throw Kl = yu,
                    hc
        } else
            t.flags &= -16777217
    }
    function Bo(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !Wd(e))
            if (sd())
                t.flags |= 8192;
            else
                throw Kl = yu,
                hc
    }
    function Lu(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? mf() : 536870912,
        t.lanes |= e,
        za |= e)
    }
    function pn(t, e) {
        if (!ft)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var l = null; e !== null; )
                    e.alternate !== null && (l = e),
                    e = e.sibling;
                l === null ? t.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = t.tail;
                for (var a = null; l !== null; )
                    l.alternate !== null && (a = l),
                    l = l.sibling;
                a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
            }
    }
    function xt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , l = 0
          , a = 0;
        if (e)
            for (var n = t.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags & 65011712,
                a |= n.flags & 65011712,
                n.return = t,
                n = n.sibling;
        else
            for (n = t.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags,
                a |= n.flags,
                n.return = t,
                n = n.sibling;
        return t.subtreeFlags |= a,
        t.childLanes = l,
        e
    }
    function qg(t, e, l) {
        var a = e.pendingProps;
        switch (nc(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return xt(e),
            null;
        case 1:
            return xt(e),
            null;
        case 3:
            return l = e.stateNode,
            a = null,
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            Je(Bt),
            Ut(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (t === null || t.child === null) && (ma(e) ? We(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            ic())),
            xt(e),
            null;
        case 26:
            var n = e.type
              , u = e.memoizedState;
            return t === null ? (We(e),
            u !== null ? (xt(e),
            Bo(e, u)) : (xt(e),
            Fc(e, n, null, a, l))) : u ? u !== t.memoizedState ? (We(e),
            xt(e),
            Bo(e, u)) : (xt(e),
            e.flags &= -16777217) : (t = t.memoizedProps,
            t !== a && We(e),
            xt(e),
            Fc(e, n, t, a, l)),
            null;
        case 27:
            if (Zn(e),
            l = lt.current,
            n = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== a && We(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(c(166));
                    return xt(e),
                    null
                }
                t = X.current,
                ma(e) ? mr(e) : (t = Xd(n, a, l),
                e.stateNode = t,
                We(e))
            }
            return xt(e),
            null;
        case 5:
            if (Zn(e),
            n = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== a && We(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(c(166));
                    return xt(e),
                    null
                }
                if (u = X.current,
                ma(e))
                    mr(e);
                else {
                    var o = ku(lt.current);
                    switch (u) {
                    case 1:
                        u = o.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        u = o.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            u = o.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            u = o.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            u = o.createElement("div"),
                            u.innerHTML = "<script><\/script>",
                            u = u.removeChild(u.firstChild);
                            break;
                        case "select":
                            u = typeof a.is == "string" ? o.createElement("select", {
                                is: a.is
                            }) : o.createElement("select"),
                            a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                            break;
                        default:
                            u = typeof a.is == "string" ? o.createElement(n, {
                                is: a.is
                            }) : o.createElement(n)
                        }
                    }
                    u[Qt] = e,
                    u[le] = a;
                    t: for (o = e.child; o !== null; ) {
                        if (o.tag === 5 || o.tag === 6)
                            u.appendChild(o.stateNode);
                        else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                            o.child.return = o,
                            o = o.child;
                            continue
                        }
                        if (o === e)
                            break t;
                        for (; o.sibling === null; ) {
                            if (o.return === null || o.return === e)
                                break t;
                            o = o.return
                        }
                        o.sibling.return = o.return,
                        o = o.sibling
                    }
                    e.stateNode = u;
                    t: switch ($t(u, n, a),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break t;
                    case "img":
                        a = !0;
                        break t;
                    default:
                        a = !1
                    }
                    a && We(e)
                }
            }
            return xt(e),
            Fc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== a && We(e);
            else {
                if (typeof a != "string" && e.stateNode === null)
                    throw Error(c(166));
                if (t = lt.current,
                ma(e)) {
                    if (t = e.stateNode,
                    l = e.memoizedProps,
                    a = null,
                    n = Zt,
                    n !== null)
                        switch (n.tag) {
                        case 27:
                        case 5:
                            a = n.memoizedProps
                        }
                    t[Qt] = e,
                    t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Md(t.nodeValue, l)),
                    t || dl(e, !0)
                } else
                    t = ku(t).createTextNode(a),
                    t[Qt] = e,
                    e.stateNode = t
            }
            return xt(e),
            null;
        case 31:
            if (l = e.memoizedState,
            t === null || t.memoizedState !== null) {
                if (a = ma(e),
                l !== null) {
                    if (t === null) {
                        if (!a)
                            throw Error(c(318));
                        if (t = e.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(c(557));
                        t[Qt] = e
                    } else
                        Vl(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    xt(e),
                    t = !1
                } else
                    l = ic(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l),
                    t = !0;
                if (!t)
                    return e.flags & 256 ? (ge(e),
                    e) : (ge(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(c(558))
            }
            return xt(e),
            null;
        case 13:
            if (a = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (n = ma(e),
                a !== null && a.dehydrated !== null) {
                    if (t === null) {
                        if (!n)
                            throw Error(c(318));
                        if (n = e.memoizedState,
                        n = n !== null ? n.dehydrated : null,
                        !n)
                            throw Error(c(317));
                        n[Qt] = e
                    } else
                        Vl(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    xt(e),
                    n = !1
                } else
                    n = ic(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
                    n = !0;
                if (!n)
                    return e.flags & 256 ? (ge(e),
                    e) : (ge(e),
                    null)
            }
            return ge(e),
            (e.flags & 128) !== 0 ? (e.lanes = l,
            e) : (l = a !== null,
            t = t !== null && t.memoizedState !== null,
            l && (a = e.child,
            n = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool),
            u = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048)),
            l !== t && l && (e.child.flags |= 8192),
            Lu(e, e.updateQueue),
            xt(e),
            null);
        case 4:
            return Ut(),
            t === null && vs(e.stateNode.containerInfo),
            xt(e),
            null;
        case 10:
            return Je(e.type),
            xt(e),
            null;
        case 19:
            if (M(Lt),
            a = e.memoizedState,
            a === null)
                return xt(e),
                null;
            if (n = (e.flags & 128) !== 0,
            u = a.rendering,
            u === null)
                if (n)
                    pn(a, !1);
                else {
                    if (Dt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (u = Eu(t),
                            u !== null) {
                                for (e.flags |= 128,
                                pn(a, !1),
                                t = u.updateQueue,
                                e.updateQueue = t,
                                Lu(e, t),
                                e.subtreeFlags = 0,
                                t = l,
                                l = e.child; l !== null; )
                                    fr(l, t),
                                    l = l.sibling;
                                return w(Lt, Lt.current & 1 | 2),
                                ft && Ze(e, a.treeForkCount),
                                e.child
                            }
                            t = t.sibling
                        }
                    a.tail !== null && fe() > qu && (e.flags |= 128,
                    n = !0,
                    pn(a, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!n)
                    if (t = Eu(u),
                    t !== null) {
                        if (e.flags |= 128,
                        n = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        Lu(e, t),
                        pn(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !u.alternate && !ft)
                            return xt(e),
                            null
                    } else
                        2 * fe() - a.renderingStartTime > qu && l !== 536870912 && (e.flags |= 128,
                        n = !0,
                        pn(a, !1),
                        e.lanes = 4194304);
                a.isBackwards ? (u.sibling = e.child,
                e.child = u) : (t = a.last,
                t !== null ? t.sibling = u : e.child = u,
                a.last = u)
            }
            return a.tail !== null ? (t = a.tail,
            a.rendering = t,
            a.tail = t.sibling,
            a.renderingStartTime = fe(),
            t.sibling = null,
            l = Lt.current,
            w(Lt, n ? l & 1 | 2 : l & 1),
            ft && Ze(e, a.treeForkCount),
            t) : (xt(e),
            null);
        case 22:
        case 23:
            return ge(e),
            Sc(),
            a = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192),
            a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (xt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : xt(e),
            l = e.updateQueue,
            l !== null && Lu(e, l.retryQueue),
            l = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
            a = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            a !== l && (e.flags |= 2048),
            t !== null && M(Ql),
            null;
        case 24:
            return l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            Je(Bt),
            xt(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(c(156, e.tag))
    }
    function Yg(t, e) {
        switch (nc(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return Je(Bt),
            Ut(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return Zn(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (ge(e),
                e.alternate === null)
                    throw Error(c(340));
                Vl()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 13:
            if (ge(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(c(340));
                Vl()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return M(Lt),
            null;
        case 4:
            return Ut(),
            null;
        case 10:
            return Je(e.type),
            null;
        case 22:
        case 23:
            return ge(e),
            Sc(),
            t !== null && M(Ql),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return Je(Bt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function jo(t, e) {
        switch (nc(e),
        e.tag) {
        case 3:
            Je(Bt),
            Ut();
            break;
        case 26:
        case 27:
        case 5:
            Zn(e);
            break;
        case 4:
            Ut();
            break;
        case 31:
            e.memoizedState !== null && ge(e);
            break;
        case 13:
            ge(e);
            break;
        case 19:
            M(Lt);
            break;
        case 10:
            Je(e.type);
            break;
        case 22:
        case 23:
            ge(e),
            Sc(),
            t !== null && M(Ql);
            break;
        case 24:
            Je(Bt)
        }
    }
    function yn(t, e) {
        try {
            var l = e.updateQueue
              , a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & t) === t) {
                        a = void 0;
                        var u = l.create
                          , o = l.inst;
                        a = u(),
                        o.destroy = a
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (h) {
            vt(e, e.return, h)
        }
    }
    function Sl(t, e, l) {
        try {
            var a = e.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        var o = a.inst
                          , h = o.destroy;
                        if (h !== void 0) {
                            o.destroy = void 0,
                            n = e;
                            var v = l
                              , x = h;
                            try {
                                x()
                            } catch (C) {
                                vt(n, v, C)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (C) {
            vt(e, e.return, C)
        }
    }
    function wo(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var l = t.stateNode;
            try {
                zr(e, l)
            } catch (a) {
                vt(t, t.return, a)
            }
        }
    }
    function qo(t, e, l) {
        l.props = kl(t.type, t.memoizedProps),
        l.state = t.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            vt(t, e, a)
        }
    }
    function vn(t, e) {
        try {
            var l = t.ref;
            if (l !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var a = t.stateNode;
                    break;
                case 30:
                    a = t.stateNode;
                    break;
                default:
                    a = t.stateNode
                }
                typeof l == "function" ? t.refCleanup = l(a) : l.current = a
            }
        } catch (n) {
            vt(t, e, n)
        }
    }
    function je(t, e) {
        var l = t.ref
          , a = t.refCleanup;
        if (l !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    vt(t, e, n)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (n) {
                    vt(t, e, n)
                }
            else
                l.current = null
    }
    function Yo(t) {
        var e = t.type
          , l = t.memoizedProps
          , a = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                l.autoFocus && a.focus();
                break t;
            case "img":
                l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (n) {
            vt(t, t.return, n)
        }
    }
    function Wc(t, e, l) {
        try {
            var a = t.stateNode;
            sp(a, t.type, l, e),
            a[le] = e
        } catch (n) {
            vt(t, t.return, n)
        }
    }
    function Vo(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Al(t.type) || t.tag === 4
    }
    function Pc(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || Vo(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && Al(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Ic(t, e, l) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
            e.appendChild(t),
            l = l._reactRootContainer,
            l != null || e.onclick !== null || (e.onclick = Ge));
        else if (a !== 4 && (a === 27 && Al(t.type) && (l = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Ic(t, e, l),
            t = t.sibling; t !== null; )
                Ic(t, e, l),
                t = t.sibling
    }
    function Hu(t, e, l) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            e ? l.insertBefore(t, e) : l.appendChild(t);
        else if (a !== 4 && (a === 27 && Al(t.type) && (l = t.stateNode),
        t = t.child,
        t !== null))
            for (Hu(t, e, l),
            t = t.sibling; t !== null; )
                Hu(t, e, l),
                t = t.sibling
    }
    function Go(t) {
        var e = t.stateNode
          , l = t.memoizedProps;
        try {
            for (var a = t.type, n = e.attributes; n.length; )
                e.removeAttributeNode(n[0]);
            $t(e, a, l),
            e[Qt] = t,
            e[le] = l
        } catch (u) {
            vt(t, t.return, u)
        }
    }
    var Pe = !1
      , qt = !1
      , ts = !1
      , Xo = typeof WeakSet == "function" ? WeakSet : Set
      , Xt = null;
    function Vg(t, e) {
        if (t = t.containerInfo,
        Es = li,
        t = tr(t),
        Ji(t)) {
            if ("selectionStart"in t)
                var l = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    l = (l = t.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset
                          , u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType,
                            u.nodeType
                        } catch {
                            l = null;
                            break t
                        }
                        var o = 0
                          , h = -1
                          , v = -1
                          , x = 0
                          , C = 0
                          , L = t
                          , A = null;
                        e: for (; ; ) {
                            for (var z; L !== l || n !== 0 && L.nodeType !== 3 || (h = o + n),
                            L !== u || a !== 0 && L.nodeType !== 3 || (v = o + a),
                            L.nodeType === 3 && (o += L.nodeValue.length),
                            (z = L.firstChild) !== null; )
                                A = L,
                                L = z;
                            for (; ; ) {
                                if (L === t)
                                    break e;
                                if (A === l && ++x === n && (h = o),
                                A === u && ++C === a && (v = o),
                                (z = L.nextSibling) !== null)
                                    break;
                                L = A,
                                A = L.parentNode
                            }
                            L = z
                        }
                        l = h === -1 || v === -1 ? null : {
                            start: h,
                            end: v
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (Ts = {
            focusedElem: t,
            selectionRange: l
        },
        li = !1,
        Xt = e; Xt !== null; )
            if (e = Xt,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                Xt = t;
            else
                for (; Xt !== null; ) {
                    switch (e = Xt,
                    u = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (l = 0; l < t.length; l++)
                                n = t[l],
                                n.ref.impl = n.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && u !== null) {
                            t = void 0,
                            l = e,
                            n = u.memoizedProps,
                            u = u.memoizedState,
                            a = l.stateNode;
                            try {
                                var Q = kl(l.type, n);
                                t = a.getSnapshotBeforeUpdate(Q, u),
                                a.__reactInternalSnapshotBeforeUpdate = t
                            } catch (k) {
                                vt(l, l.return, k)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            l = t.nodeType,
                            l === 9)
                                xs(t);
                            else if (l === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    xs(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(c(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        Xt = t;
                        break
                    }
                    Xt = e.return
                }
    }
    function Qo(t, e, l) {
        var a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            tl(t, l),
            a & 4 && yn(5, l);
            break;
        case 1:
            if (tl(t, l),
            a & 4)
                if (t = l.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (o) {
                        vt(l, l.return, o)
                    }
                else {
                    var n = kl(l.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (o) {
                        vt(l, l.return, o)
                    }
                }
            a & 64 && wo(l),
            a & 512 && vn(l, l.return);
            break;
        case 3:
            if (tl(t, l),
            a & 64 && (t = l.updateQueue,
            t !== null)) {
                if (e = null,
                l.child !== null)
                    switch (l.child.tag) {
                    case 27:
                    case 5:
                        e = l.child.stateNode;
                        break;
                    case 1:
                        e = l.child.stateNode
                    }
                try {
                    zr(t, e)
                } catch (o) {
                    vt(l, l.return, o)
                }
            }
            break;
        case 27:
            e === null && a & 4 && Go(l);
        case 26:
        case 5:
            tl(t, l),
            e === null && a & 4 && Yo(l),
            a & 512 && vn(l, l.return);
            break;
        case 12:
            tl(t, l);
            break;
        case 31:
            tl(t, l),
            a & 4 && Jo(t, l);
            break;
        case 13:
            tl(t, l),
            a & 4 && $o(t, l),
            a & 64 && (t = l.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (l = Fg.bind(null, l),
            pp(t, l))));
            break;
        case 22:
            if (a = l.memoizedState !== null || Pe,
            !a) {
                e = e !== null && e.memoizedState !== null || qt,
                n = Pe;
                var u = qt;
                Pe = a,
                (qt = e) && !u ? el(t, l, (l.subtreeFlags & 8772) !== 0) : tl(t, l),
                Pe = n,
                qt = u
            }
            break;
        case 30:
            break;
        default:
            tl(t, l)
        }
    }
    function Zo(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        Zo(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && Ni(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var zt = null
      , ne = !1;
    function Ie(t, e, l) {
        for (l = l.child; l !== null; )
            Ko(t, e, l),
            l = l.sibling
    }
    function Ko(t, e, l) {
        if (re && typeof re.onCommitFiberUnmount == "function")
            try {
                re.onCommitFiberUnmount(Va, l)
            } catch {}
        switch (l.tag) {
        case 26:
            qt || je(l, e),
            Ie(t, e, l),
            l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
            break;
        case 27:
            qt || je(l, e);
            var a = zt
              , n = ne;
            Al(l.type) && (zt = l.stateNode,
            ne = !1),
            Ie(t, e, l),
            zn(l.stateNode),
            zt = a,
            ne = n;
            break;
        case 5:
            qt || je(l, e);
        case 6:
            if (a = zt,
            n = ne,
            zt = null,
            Ie(t, e, l),
            zt = a,
            ne = n,
            zt !== null)
                if (ne)
                    try {
                        (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(l.stateNode)
                    } catch (u) {
                        vt(l, e, u)
                    }
                else
                    try {
                        zt.removeChild(l.stateNode)
                    } catch (u) {
                        vt(l, e, u)
                    }
            break;
        case 18:
            zt !== null && (ne ? (t = zt,
            wd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode),
            Ha(t)) : wd(zt, l.stateNode));
            break;
        case 4:
            a = zt,
            n = ne,
            zt = l.stateNode.containerInfo,
            ne = !0,
            Ie(t, e, l),
            zt = a,
            ne = n;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Sl(2, l, e),
            qt || Sl(4, l, e),
            Ie(t, e, l);
            break;
        case 1:
            qt || (je(l, e),
            a = l.stateNode,
            typeof a.componentWillUnmount == "function" && qo(l, e, a)),
            Ie(t, e, l);
            break;
        case 21:
            Ie(t, e, l);
            break;
        case 22:
            qt = (a = qt) || l.memoizedState !== null,
            Ie(t, e, l),
            qt = a;
            break;
        default:
            Ie(t, e, l)
        }
    }
    function Jo(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                Ha(t)
            } catch (l) {
                vt(e, e.return, l)
            }
        }
    }
    function $o(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Ha(t)
            } catch (l) {
                vt(e, e.return, l)
            }
    }
    function Gg(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new Xo),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new Xo),
            e;
        default:
            throw Error(c(435, t.tag))
        }
    }
    function Bu(t, e) {
        var l = Gg(t);
        e.forEach(function(a) {
            if (!l.has(a)) {
                l.add(a);
                var n = Wg.bind(null, t, a);
                a.then(n, n)
            }
        })
    }
    function ue(t, e) {
        var l = e.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a]
                  , u = t
                  , o = e
                  , h = o;
                t: for (; h !== null; ) {
                    switch (h.tag) {
                    case 27:
                        if (Al(h.type)) {
                            zt = h.stateNode,
                            ne = !1;
                            break t
                        }
                        break;
                    case 5:
                        zt = h.stateNode,
                        ne = !1;
                        break t;
                    case 3:
                    case 4:
                        zt = h.stateNode.containerInfo,
                        ne = !0;
                        break t
                    }
                    h = h.return
                }
                if (zt === null)
                    throw Error(c(160));
                Ko(u, o, n),
                zt = null,
                ne = !1,
                u = n.alternate,
                u !== null && (u.return = null),
                n.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                ko(e, t),
                e = e.sibling
    }
    var Ue = null;
    function ko(t, e) {
        var l = t.alternate
          , a = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ue(e, t),
            ie(t),
            a & 4 && (Sl(3, t, t.return),
            yn(3, t),
            Sl(5, t, t.return));
            break;
        case 1:
            ue(e, t),
            ie(t),
            a & 512 && (qt || l === null || je(l, l.return)),
            a & 64 && Pe && (t = t.updateQueue,
            t !== null && (a = t.callbacks,
            a !== null && (l = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
            break;
        case 26:
            var n = Ue;
            if (ue(e, t),
            ie(t),
            a & 512 && (qt || l === null || je(l, l.return)),
            a & 4) {
                var u = l !== null ? l.memoizedState : null;
                if (a = t.memoizedState,
                l === null)
                    if (a === null)
                        if (t.stateNode === null) {
                            t: {
                                a = t.type,
                                l = t.memoizedProps,
                                n = n.ownerDocument || n;
                                e: switch (a) {
                                case "title":
                                    u = n.getElementsByTagName("title")[0],
                                    (!u || u[Qa] || u[Qt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a),
                                    n.head.insertBefore(u, n.querySelector("head > title"))),
                                    $t(u, a, l),
                                    u[Qt] = t,
                                    Gt(u),
                                    a = u;
                                    break t;
                                case "link":
                                    var o = kd("link", "href", n).get(a + (l.href || ""));
                                    if (o) {
                                        for (var h = 0; h < o.length; h++)
                                            if (u = o[h],
                                            u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                o.splice(h, 1);
                                                break e
                                            }
                                    }
                                    u = n.createElement(a),
                                    $t(u, a, l),
                                    n.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (o = kd("meta", "content", n).get(a + (l.content || ""))) {
                                        for (h = 0; h < o.length; h++)
                                            if (u = o[h],
                                            u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                o.splice(h, 1);
                                                break e
                                            }
                                    }
                                    u = n.createElement(a),
                                    $t(u, a, l),
                                    n.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(c(468, a))
                                }
                                u[Qt] = t,
                                Gt(u),
                                a = u
                            }
                            t.stateNode = a
                        } else
                            Fd(n, t.type, t.stateNode);
                    else
                        t.stateNode = $d(n, a, t.memoizedProps);
                else
                    u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode,
                    l.parentNode.removeChild(l)) : u.count--,
                    a === null ? Fd(n, t.type, t.stateNode) : $d(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && Wc(t, t.memoizedProps, l.memoizedProps)
            }
            break;
        case 27:
            ue(e, t),
            ie(t),
            a & 512 && (qt || l === null || je(l, l.return)),
            l !== null && a & 4 && Wc(t, t.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (ue(e, t),
            ie(t),
            a & 512 && (qt || l === null || je(l, l.return)),
            t.flags & 32) {
                n = t.stateNode;
                try {
                    na(n, "")
                } catch (Q) {
                    vt(t, t.return, Q)
                }
            }
            a & 4 && t.stateNode != null && (n = t.memoizedProps,
            Wc(t, n, l !== null ? l.memoizedProps : n)),
            a & 1024 && (ts = !0);
            break;
        case 6:
            if (ue(e, t),
            ie(t),
            a & 4) {
                if (t.stateNode === null)
                    throw Error(c(162));
                a = t.memoizedProps,
                l = t.stateNode;
                try {
                    l.nodeValue = a
                } catch (Q) {
                    vt(t, t.return, Q)
                }
            }
            break;
        case 3:
            if (Pu = null,
            n = Ue,
            Ue = Fu(e.containerInfo),
            ue(e, t),
            Ue = n,
            ie(t),
            a & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    Ha(e.containerInfo)
                } catch (Q) {
                    vt(t, t.return, Q)
                }
            ts && (ts = !1,
            Fo(t));
            break;
        case 4:
            a = Ue,
            Ue = Fu(t.stateNode.containerInfo),
            ue(e, t),
            ie(t),
            Ue = a;
            break;
        case 12:
            ue(e, t),
            ie(t);
            break;
        case 31:
            ue(e, t),
            ie(t),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Bu(t, a)));
            break;
        case 13:
            ue(e, t),
            ie(t),
            t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (wu = fe()),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Bu(t, a)));
            break;
        case 22:
            n = t.memoizedState !== null;
            var v = l !== null && l.memoizedState !== null
              , x = Pe
              , C = qt;
            if (Pe = x || n,
            qt = C || v,
            ue(e, t),
            qt = C,
            Pe = x,
            ie(t),
            a & 8192)
                t: for (e = t.stateNode,
                e._visibility = n ? e._visibility & -2 : e._visibility | 1,
                n && (l === null || v || Pe || qt || Fl(t)),
                l = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (l === null) {
                            v = l = e;
                            try {
                                if (u = v.stateNode,
                                n)
                                    o = u.style,
                                    typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                                else {
                                    h = v.stateNode;
                                    var L = v.memoizedProps.style
                                      , A = L != null && L.hasOwnProperty("display") ? L.display : null;
                                    h.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim()
                                }
                            } catch (Q) {
                                vt(v, v.return, Q)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (l === null) {
                            v = e;
                            try {
                                v.stateNode.nodeValue = n ? "" : v.memoizedProps
                            } catch (Q) {
                                vt(v, v.return, Q)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (l === null) {
                            v = e;
                            try {
                                var z = v.stateNode;
                                n ? qd(z, !0) : qd(v.stateNode, !1)
                            } catch (Q) {
                                vt(v, v.return, Q)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        l === e && (l = null),
                        e = e.return
                    }
                    l === e && (l = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a & 4 && (a = t.updateQueue,
            a !== null && (l = a.retryQueue,
            l !== null && (a.retryQueue = null,
            Bu(t, l))));
            break;
        case 19:
            ue(e, t),
            ie(t),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Bu(t, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ue(e, t),
            ie(t)
        }
    }
    function ie(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var l, a = t.return; a !== null; ) {
                    if (Vo(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null)
                    throw Error(c(160));
                switch (l.tag) {
                case 27:
                    var n = l.stateNode
                      , u = Pc(t);
                    Hu(t, u, n);
                    break;
                case 5:
                    var o = l.stateNode;
                    l.flags & 32 && (na(o, ""),
                    l.flags &= -33);
                    var h = Pc(t);
                    Hu(t, h, o);
                    break;
                case 3:
                case 4:
                    var v = l.stateNode.containerInfo
                      , x = Pc(t);
                    Ic(t, x, v);
                    break;
                default:
                    throw Error(c(161))
                }
            } catch (C) {
                vt(t, t.return, C)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function Fo(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                Fo(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function tl(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Qo(t, e.alternate, e),
                e = e.sibling
    }
    function Fl(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Sl(4, e, e.return),
                Fl(e);
                break;
            case 1:
                je(e, e.return);
                var l = e.stateNode;
                typeof l.componentWillUnmount == "function" && qo(e, e.return, l),
                Fl(e);
                break;
            case 27:
                zn(e.stateNode);
            case 26:
            case 5:
                je(e, e.return),
                Fl(e);
                break;
            case 22:
                e.memoizedState === null && Fl(e);
                break;
            case 30:
                Fl(e);
                break;
            default:
                Fl(e)
            }
            t = t.sibling
        }
    }
    function el(t, e, l) {
        for (l = l && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var a = e.alternate
              , n = t
              , u = e
              , o = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                el(n, u, l),
                yn(4, u);
                break;
            case 1:
                if (el(n, u, l),
                a = u,
                n = a.stateNode,
                typeof n.componentDidMount == "function")
                    try {
                        n.componentDidMount()
                    } catch (x) {
                        vt(a, a.return, x)
                    }
                if (a = u,
                n = a.updateQueue,
                n !== null) {
                    var h = a.stateNode;
                    try {
                        var v = n.shared.hiddenCallbacks;
                        if (v !== null)
                            for (n.shared.hiddenCallbacks = null,
                            n = 0; n < v.length; n++)
                                Ar(v[n], h)
                    } catch (x) {
                        vt(a, a.return, x)
                    }
                }
                l && o & 64 && wo(u),
                vn(u, u.return);
                break;
            case 27:
                Go(u);
            case 26:
            case 5:
                el(n, u, l),
                l && a === null && o & 4 && Yo(u),
                vn(u, u.return);
                break;
            case 12:
                el(n, u, l);
                break;
            case 31:
                el(n, u, l),
                l && o & 4 && Jo(n, u);
                break;
            case 13:
                el(n, u, l),
                l && o & 4 && $o(n, u);
                break;
            case 22:
                u.memoizedState === null && el(n, u, l),
                vn(u, u.return);
                break;
            case 30:
                break;
            default:
                el(n, u, l)
            }
            e = e.sibling
        }
    }
    function es(t, e) {
        var l = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== l && (t != null && t.refCount++,
        l != null && an(l))
    }
    function ls(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && an(t))
    }
    function Le(t, e, l, a) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Wo(t, e, l, a),
                e = e.sibling
    }
    function Wo(t, e, l, a) {
        var n = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Le(t, e, l, a),
            n & 2048 && yn(9, e);
            break;
        case 1:
            Le(t, e, l, a);
            break;
        case 3:
            Le(t, e, l, a),
            n & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && an(t)));
            break;
        case 12:
            if (n & 2048) {
                Le(t, e, l, a),
                t = e.stateNode;
                try {
                    var u = e.memoizedProps
                      , o = u.id
                      , h = u.onPostCommit;
                    typeof h == "function" && h(o, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (v) {
                    vt(e, e.return, v)
                }
            } else
                Le(t, e, l, a);
            break;
        case 31:
            Le(t, e, l, a);
            break;
        case 13:
            Le(t, e, l, a);
            break;
        case 23:
            break;
        case 22:
            u = e.stateNode,
            o = e.alternate,
            e.memoizedState !== null ? u._visibility & 2 ? Le(t, e, l, a) : Sn(t, e) : u._visibility & 2 ? Le(t, e, l, a) : (u._visibility |= 2,
            Ra(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
            n & 2048 && es(o, e);
            break;
        case 24:
            Le(t, e, l, a),
            n & 2048 && ls(e.alternate, e);
            break;
        default:
            Le(t, e, l, a)
        }
    }
    function Ra(t, e, l, a, n) {
        for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var u = t
              , o = e
              , h = l
              , v = a
              , x = o.flags;
            switch (o.tag) {
            case 0:
            case 11:
            case 15:
                Ra(u, o, h, v, n),
                yn(8, o);
                break;
            case 23:
                break;
            case 22:
                var C = o.stateNode;
                o.memoizedState !== null ? C._visibility & 2 ? Ra(u, o, h, v, n) : Sn(u, o) : (C._visibility |= 2,
                Ra(u, o, h, v, n)),
                n && x & 2048 && es(o.alternate, o);
                break;
            case 24:
                Ra(u, o, h, v, n),
                n && x & 2048 && ls(o.alternate, o);
                break;
            default:
                Ra(u, o, h, v, n)
            }
            e = e.sibling
        }
    }
    function Sn(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var l = t
                  , a = e
                  , n = a.flags;
                switch (a.tag) {
                case 22:
                    Sn(l, a),
                    n & 2048 && es(a.alternate, a);
                    break;
                case 24:
                    Sn(l, a),
                    n & 2048 && ls(a.alternate, a);
                    break;
                default:
                    Sn(l, a)
                }
                e = e.sibling
            }
    }
    var bn = 8192;
    function xa(t, e, l) {
        if (t.subtreeFlags & bn)
            for (t = t.child; t !== null; )
                Po(t, e, l),
                t = t.sibling
    }
    function Po(t, e, l) {
        switch (t.tag) {
        case 26:
            xa(t, e, l),
            t.flags & bn && t.memoizedState !== null && _p(l, Ue, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            xa(t, e, l);
            break;
        case 3:
        case 4:
            var a = Ue;
            Ue = Fu(t.stateNode.containerInfo),
            xa(t, e, l),
            Ue = a;
            break;
        case 22:
            t.memoizedState === null && (a = t.alternate,
            a !== null && a.memoizedState !== null ? (a = bn,
            bn = 16777216,
            xa(t, e, l),
            bn = a) : xa(t, e, l));
            break;
        default:
            xa(t, e, l)
        }
    }
    function Io(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function En(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var a = e[l];
                    Xt = a,
                    ed(a, t)
                }
            Io(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                td(t),
                t = t.sibling
    }
    function td(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            En(t),
            t.flags & 2048 && Sl(9, t, t.return);
            break;
        case 3:
            En(t);
            break;
        case 12:
            En(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            ju(t)) : En(t);
            break;
        default:
            En(t)
        }
    }
    function ju(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var a = e[l];
                    Xt = a,
                    ed(a, t)
                }
            Io(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Sl(8, e, e.return),
                ju(e);
                break;
            case 22:
                l = e.stateNode,
                l._visibility & 2 && (l._visibility &= -3,
                ju(e));
                break;
            default:
                ju(e)
            }
            t = t.sibling
        }
    }
    function ed(t, e) {
        for (; Xt !== null; ) {
            var l = Xt;
            switch (l.tag) {
            case 0:
            case 11:
            case 15:
                Sl(8, l, e);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var a = l.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                an(l.memoizedState.cache)
            }
            if (a = l.child,
            a !== null)
                a.return = l,
                Xt = a;
            else
                t: for (l = t; Xt !== null; ) {
                    a = Xt;
                    var n = a.sibling
                      , u = a.return;
                    if (Zo(a),
                    a === l) {
                        Xt = null;
                        break t
                    }
                    if (n !== null) {
                        n.return = u,
                        Xt = n;
                        break t
                    }
                    Xt = u
                }
        }
    }
    var Xg = {
        getCacheForType: function(t) {
            var e = Kt(Bt)
              , l = e.data.get(t);
            return l === void 0 && (l = t(),
            e.data.set(t, l)),
            l
        },
        cacheSignal: function() {
            return Kt(Bt).controller.signal
        }
    }
      , Qg = typeof WeakMap == "function" ? WeakMap : Map
      , ht = 0
      , Tt = null
      , at = null
      , it = 0
      , yt = 0
      , pe = null
      , bl = !1
      , Aa = !1
      , as = !1
      , ll = 0
      , Dt = 0
      , El = 0
      , Wl = 0
      , ns = 0
      , ye = 0
      , za = 0
      , Tn = null
      , ce = null
      , us = !1
      , wu = 0
      , ld = 0
      , qu = 1 / 0
      , Yu = null
      , Tl = null
      , Yt = 0
      , Ol = null
      , _a = null
      , al = 0
      , is = 0
      , cs = null
      , ad = null
      , On = 0
      , ss = null;
    function ve() {
        return (ht & 2) !== 0 && it !== 0 ? it & -it : _.T !== null ? ms() : vf()
    }
    function nd() {
        if (ye === 0)
            if ((it & 536870912) === 0 || ft) {
                var t = $n;
                $n <<= 1,
                ($n & 3932160) === 0 && ($n = 262144),
                ye = t
            } else
                ye = 536870912;
        return t = me.current,
        t !== null && (t.flags |= 32),
        ye
    }
    function se(t, e, l) {
        (t === Tt && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null) && (Ca(t, 0),
        Rl(t, it, ye, !1)),
        Xa(t, l),
        ((ht & 2) === 0 || t !== Tt) && (t === Tt && ((ht & 2) === 0 && (Wl |= l),
        Dt === 4 && Rl(t, it, ye, !1)),
        we(t))
    }
    function ud(t, e, l) {
        if ((ht & 6) !== 0)
            throw Error(c(327));
        var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ga(t, e)
          , n = a ? Jg(t, e) : rs(t, e, !0)
          , u = a;
        do {
            if (n === 0) {
                Aa && !a && Rl(t, e, 0, !1);
                break
            } else {
                if (l = t.current.alternate,
                u && !Zg(l)) {
                    n = rs(t, e, !1),
                    u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = e,
                    t.errorRecoveryDisabledLanes & u)
                        var o = 0;
                    else
                        o = t.pendingLanes & -536870913,
                        o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
                    if (o !== 0) {
                        e = o;
                        t: {
                            var h = t;
                            n = Tn;
                            var v = h.current.memoizedState.isDehydrated;
                            if (v && (Ca(h, o).flags |= 256),
                            o = rs(h, o, !1),
                            o !== 2) {
                                if (as && !v) {
                                    h.errorRecoveryDisabledLanes |= u,
                                    Wl |= u,
                                    n = 4;
                                    break t
                                }
                                u = ce,
                                ce = n,
                                u !== null && (ce === null ? ce = u : ce.push.apply(ce, u))
                            }
                            n = o
                        }
                        if (u = !1,
                        n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    Ca(t, 0),
                    Rl(t, e, 0, !0);
                    break
                }
                t: {
                    switch (a = t,
                    u = n,
                    u) {
                    case 0:
                    case 1:
                        throw Error(c(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        Rl(a, e, ye, !bl);
                        break t;
                    case 2:
                        ce = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(c(329))
                    }
                    if ((e & 62914560) === e && (n = wu + 300 - fe(),
                    10 < n)) {
                        if (Rl(a, e, ye, !bl),
                        Fn(a, 0, !0) !== 0)
                            break t;
                        al = e,
                        a.timeoutHandle = Bd(id.bind(null, a, l, ce, Yu, us, e, ye, Wl, za, bl, u, "Throttled", -0, 0), n);
                        break t
                    }
                    id(a, l, ce, Yu, us, e, ye, Wl, za, bl, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        we(t)
    }
    function id(t, e, l, a, n, u, o, h, v, x, C, L, A, z) {
        if (t.timeoutHandle = -1,
        L = e.subtreeFlags,
        L & 8192 || (L & 16785408) === 16785408) {
            L = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Ge
            },
            Po(e, u, L);
            var Q = (u & 62914560) === u ? wu - fe() : (u & 4194048) === u ? ld - fe() : 0;
            if (Q = Cp(L, Q),
            Q !== null) {
                al = u,
                t.cancelPendingCommit = Q(md.bind(null, t, e, u, l, a, n, o, h, v, C, L, null, A, z)),
                Rl(t, u, o, !x);
                return
            }
        }
        md(t, e, u, l, a, n, o, h, v)
    }
    function Zg(t) {
        for (var e = t; ; ) {
            var l = e.tag;
            if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue,
            l !== null && (l = l.stores,
            l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a]
                      , u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!de(u(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = e.child,
            e.subtreeFlags & 16384 && l !== null)
                l.return = e,
                e = l;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function Rl(t, e, l, a) {
        e &= ~ns,
        e &= ~Wl,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        a && (t.warmLanes |= e),
        a = t.expirationTimes;
        for (var n = e; 0 < n; ) {
            var u = 31 - oe(n)
              , o = 1 << u;
            a[u] = -1,
            n &= ~o
        }
        l !== 0 && gf(t, l, e)
    }
    function Vu() {
        return (ht & 6) === 0 ? (Rn(0),
        !1) : !0
    }
    function fs() {
        if (at !== null) {
            if (yt === 0)
                var t = at.return;
            else
                t = at,
                Ke = Gl = null,
                xc(t),
                Sa = null,
                un = 0,
                t = at;
            for (; t !== null; )
                jo(t.alternate, t),
                t = t.return;
            at = null
        }
    }
    function Ca(t, e) {
        var l = t.timeoutHandle;
        l !== -1 && (t.timeoutHandle = -1,
        op(l)),
        l = t.cancelPendingCommit,
        l !== null && (t.cancelPendingCommit = null,
        l()),
        al = 0,
        fs(),
        Tt = t,
        at = l = Qe(t.current, null),
        it = e,
        yt = 0,
        pe = null,
        bl = !1,
        Aa = Ga(t, e),
        as = !1,
        za = ye = ns = Wl = El = Dt = 0,
        ce = Tn = null,
        us = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var a = t.entangledLanes;
        if (a !== 0)
            for (t = t.entanglements,
            a &= e; 0 < a; ) {
                var n = 31 - oe(a)
                  , u = 1 << n;
                e |= t[n],
                a &= ~u
            }
        return ll = e,
        su(),
        l
    }
    function cd(t, e) {
        tt = null,
        _.H = mn,
        e === va || e === pu ? (e = Tr(),
        yt = 3) : e === hc ? (e = Tr(),
        yt = 4) : yt = e === Vc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        pe = e,
        at === null && (Dt = 1,
        Nu(t, Re(e, t.current)))
    }
    function sd() {
        var t = me.current;
        return t === null ? !0 : (it & 4194048) === it ? _e === null : (it & 62914560) === it || (it & 536870912) !== 0 ? t === _e : !1
    }
    function fd() {
        var t = _.H;
        return _.H = mn,
        t === null ? mn : t
    }
    function rd() {
        var t = _.A;
        return _.A = Xg,
        t
    }
    function Gu() {
        Dt = 4,
        bl || (it & 4194048) !== it && me.current !== null || (Aa = !0),
        (El & 134217727) === 0 && (Wl & 134217727) === 0 || Tt === null || Rl(Tt, it, ye, !1)
    }
    function rs(t, e, l) {
        var a = ht;
        ht |= 2;
        var n = fd()
          , u = rd();
        (Tt !== t || it !== e) && (Yu = null,
        Ca(t, e)),
        e = !1;
        var o = Dt;
        t: do
            try {
                if (yt !== 0 && at !== null) {
                    var h = at
                      , v = pe;
                    switch (yt) {
                    case 8:
                        fs(),
                        o = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        me.current === null && (e = !0);
                        var x = yt;
                        if (yt = 0,
                        pe = null,
                        Na(t, h, v, x),
                        l && Aa) {
                            o = 0;
                            break t
                        }
                        break;
                    default:
                        x = yt,
                        yt = 0,
                        pe = null,
                        Na(t, h, v, x)
                    }
                }
                Kg(),
                o = Dt;
                break
            } catch (C) {
                cd(t, C)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        Ke = Gl = null,
        ht = a,
        _.H = n,
        _.A = u,
        at === null && (Tt = null,
        it = 0,
        su()),
        o
    }
    function Kg() {
        for (; at !== null; )
            od(at)
    }
    function Jg(t, e) {
        var l = ht;
        ht |= 2;
        var a = fd()
          , n = rd();
        Tt !== t || it !== e ? (Yu = null,
        qu = fe() + 500,
        Ca(t, e)) : Aa = Ga(t, e);
        t: do
            try {
                if (yt !== 0 && at !== null) {
                    e = at;
                    var u = pe;
                    e: switch (yt) {
                    case 1:
                        yt = 0,
                        pe = null,
                        Na(t, e, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (br(u)) {
                            yt = 0,
                            pe = null,
                            dd(e);
                            break
                        }
                        e = function() {
                            yt !== 2 && yt !== 9 || Tt !== t || (yt = 7),
                            we(t)
                        }
                        ,
                        u.then(e, e);
                        break t;
                    case 3:
                        yt = 7;
                        break t;
                    case 4:
                        yt = 5;
                        break t;
                    case 7:
                        br(u) ? (yt = 0,
                        pe = null,
                        dd(e)) : (yt = 0,
                        pe = null,
                        Na(t, e, u, 7));
                        break;
                    case 5:
                        var o = null;
                        switch (at.tag) {
                        case 26:
                            o = at.memoizedState;
                        case 5:
                        case 27:
                            var h = at;
                            if (o ? Wd(o) : h.stateNode.complete) {
                                yt = 0,
                                pe = null;
                                var v = h.sibling;
                                if (v !== null)
                                    at = v;
                                else {
                                    var x = h.return;
                                    x !== null ? (at = x,
                                    Xu(x)) : at = null
                                }
                                break e
                            }
                        }
                        yt = 0,
                        pe = null,
                        Na(t, e, u, 5);
                        break;
                    case 6:
                        yt = 0,
                        pe = null,
                        Na(t, e, u, 6);
                        break;
                    case 8:
                        fs(),
                        Dt = 6;
                        break t;
                    default:
                        throw Error(c(462))
                    }
                }
                $g();
                break
            } catch (C) {
                cd(t, C)
            }
        while (!0);
        return Ke = Gl = null,
        _.H = a,
        _.A = n,
        ht = l,
        at !== null ? 0 : (Tt = null,
        it = 0,
        su(),
        Dt)
    }
    function $g() {
        for (; at !== null && !ym(); )
            od(at)
    }
    function od(t) {
        var e = Ho(t.alternate, t, ll);
        t.memoizedProps = t.pendingProps,
        e === null ? Xu(t) : at = e
    }
    function dd(t) {
        var e = t
          , l = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = Co(l, e, e.pendingProps, e.type, void 0, it);
            break;
        case 11:
            e = Co(l, e, e.pendingProps, e.type.render, e.ref, it);
            break;
        case 5:
            xc(e);
        default:
            jo(l, e),
            e = at = fr(e, ll),
            e = Ho(l, e, ll)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? Xu(t) : at = e
    }
    function Na(t, e, l, a) {
        Ke = Gl = null,
        xc(e),
        Sa = null,
        un = 0;
        var n = e.return;
        try {
            if (Bg(t, n, e, l, it)) {
                Dt = 1,
                Nu(t, Re(l, t.current)),
                at = null;
                return
            }
        } catch (u) {
            if (n !== null)
                throw at = n,
                u;
            Dt = 1,
            Nu(t, Re(l, t.current)),
            at = null;
            return
        }
        e.flags & 32768 ? (ft || a === 1 ? t = !0 : Aa || (it & 536870912) !== 0 ? t = !1 : (bl = t = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = me.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        hd(e, t)) : Xu(e)
    }
    function Xu(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                hd(e, bl);
                return
            }
            t = e.return;
            var l = qg(e.alternate, e, ll);
            if (l !== null) {
                at = l;
                return
            }
            if (e = e.sibling,
            e !== null) {
                at = e;
                return
            }
            at = e = t
        } while (e !== null);
        Dt === 0 && (Dt = 5)
    }
    function hd(t, e) {
        do {
            var l = Yg(t.alternate, t);
            if (l !== null) {
                l.flags &= 32767,
                at = l;
                return
            }
            if (l = t.return,
            l !== null && (l.flags |= 32768,
            l.subtreeFlags = 0,
            l.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                at = t;
                return
            }
            at = t = l
        } while (t !== null);
        Dt = 6,
        at = null
    }
    function md(t, e, l, a, n, u, o, h, v) {
        t.cancelPendingCommit = null;
        do
            Qu();
        while (Yt !== 0);
        if ((ht & 6) !== 0)
            throw Error(c(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(c(177));
            if (u = e.lanes | e.childLanes,
            u |= Pi,
            zm(t, l, u, o, h, v),
            t === Tt && (at = Tt = null,
            it = 0),
            _a = e,
            Ol = t,
            al = l,
            is = u,
            cs = n,
            ad = a,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            Pg(Kn, function() {
                return Sd(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            a = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || a) {
                a = _.T,
                _.T = null,
                n = j.p,
                j.p = 2,
                o = ht,
                ht |= 4;
                try {
                    Vg(t, e, l)
                } finally {
                    ht = o,
                    j.p = n,
                    _.T = a
                }
            }
            Yt = 1,
            gd(),
            pd(),
            yd()
        }
    }
    function gd() {
        if (Yt === 1) {
            Yt = 0;
            var t = Ol
              , e = _a
              , l = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || l) {
                l = _.T,
                _.T = null;
                var a = j.p;
                j.p = 2;
                var n = ht;
                ht |= 4;
                try {
                    ko(e, t);
                    var u = Ts
                      , o = tr(t.containerInfo)
                      , h = u.focusedElem
                      , v = u.selectionRange;
                    if (o !== h && h && h.ownerDocument && If(h.ownerDocument.documentElement, h)) {
                        if (v !== null && Ji(h)) {
                            var x = v.start
                              , C = v.end;
                            if (C === void 0 && (C = x),
                            "selectionStart"in h)
                                h.selectionStart = x,
                                h.selectionEnd = Math.min(C, h.value.length);
                            else {
                                var L = h.ownerDocument || document
                                  , A = L && L.defaultView || window;
                                if (A.getSelection) {
                                    var z = A.getSelection()
                                      , Q = h.textContent.length
                                      , k = Math.min(v.start, Q)
                                      , Et = v.end === void 0 ? k : Math.min(v.end, Q);
                                    !z.extend && k > Et && (o = Et,
                                    Et = k,
                                    k = o);
                                    var O = Pf(h, k)
                                      , E = Pf(h, Et);
                                    if (O && E && (z.rangeCount !== 1 || z.anchorNode !== O.node || z.anchorOffset !== O.offset || z.focusNode !== E.node || z.focusOffset !== E.offset)) {
                                        var R = L.createRange();
                                        R.setStart(O.node, O.offset),
                                        z.removeAllRanges(),
                                        k > Et ? (z.addRange(R),
                                        z.extend(E.node, E.offset)) : (R.setEnd(E.node, E.offset),
                                        z.addRange(R))
                                    }
                                }
                            }
                        }
                        for (L = [],
                        z = h; z = z.parentNode; )
                            z.nodeType === 1 && L.push({
                                element: z,
                                left: z.scrollLeft,
                                top: z.scrollTop
                            });
                        for (typeof h.focus == "function" && h.focus(),
                        h = 0; h < L.length; h++) {
                            var U = L[h];
                            U.element.scrollLeft = U.left,
                            U.element.scrollTop = U.top
                        }
                    }
                    li = !!Es,
                    Ts = Es = null
                } finally {
                    ht = n,
                    j.p = a,
                    _.T = l
                }
            }
            t.current = e,
            Yt = 2
        }
    }
    function pd() {
        if (Yt === 2) {
            Yt = 0;
            var t = Ol
              , e = _a
              , l = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || l) {
                l = _.T,
                _.T = null;
                var a = j.p;
                j.p = 2;
                var n = ht;
                ht |= 4;
                try {
                    Qo(t, e.alternate, e)
                } finally {
                    ht = n,
                    j.p = a,
                    _.T = l
                }
            }
            Yt = 3
        }
    }
    function yd() {
        if (Yt === 4 || Yt === 3) {
            Yt = 0,
            vm();
            var t = Ol
              , e = _a
              , l = al
              , a = ad;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Yt = 5 : (Yt = 0,
            _a = Ol = null,
            vd(t, t.pendingLanes));
            var n = t.pendingLanes;
            if (n === 0 && (Tl = null),
            _i(l),
            e = e.stateNode,
            re && typeof re.onCommitFiberRoot == "function")
                try {
                    re.onCommitFiberRoot(Va, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                e = _.T,
                n = j.p,
                j.p = 2,
                _.T = null;
                try {
                    for (var u = t.onRecoverableError, o = 0; o < a.length; o++) {
                        var h = a[o];
                        u(h.value, {
                            componentStack: h.stack
                        })
                    }
                } finally {
                    _.T = e,
                    j.p = n
                }
            }
            (al & 3) !== 0 && Qu(),
            we(t),
            n = t.pendingLanes,
            (l & 261930) !== 0 && (n & 42) !== 0 ? t === ss ? On++ : (On = 0,
            ss = t) : On = 0,
            Rn(0)
        }
    }
    function vd(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        an(e)))
    }
    function Qu() {
        return gd(),
        pd(),
        yd(),
        Sd()
    }
    function Sd() {
        if (Yt !== 5)
            return !1;
        var t = Ol
          , e = is;
        is = 0;
        var l = _i(al)
          , a = _.T
          , n = j.p;
        try {
            j.p = 32 > l ? 32 : l,
            _.T = null,
            l = cs,
            cs = null;
            var u = Ol
              , o = al;
            if (Yt = 0,
            _a = Ol = null,
            al = 0,
            (ht & 6) !== 0)
                throw Error(c(331));
            var h = ht;
            if (ht |= 4,
            td(u.current),
            Wo(u, u.current, o, l),
            ht = h,
            Rn(0, !1),
            re && typeof re.onPostCommitFiberRoot == "function")
                try {
                    re.onPostCommitFiberRoot(Va, u)
                } catch {}
            return !0
        } finally {
            j.p = n,
            _.T = a,
            vd(t, e)
        }
    }
    function bd(t, e, l) {
        e = Re(l, e),
        e = Yc(t.stateNode, e, 2),
        t = pl(t, e, 2),
        t !== null && (Xa(t, 2),
        we(t))
    }
    function vt(t, e, l) {
        if (t.tag === 3)
            bd(t, t, l);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    bd(e, t, l);
                    break
                } else if (e.tag === 1) {
                    var a = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Tl === null || !Tl.has(a))) {
                        t = Re(l, t),
                        l = Eo(2),
                        a = pl(e, l, 2),
                        a !== null && (To(l, a, e, t),
                        Xa(a, 2),
                        we(a));
                        break
                    }
                }
                e = e.return
            }
    }
    function os(t, e, l) {
        var a = t.pingCache;
        if (a === null) {
            a = t.pingCache = new Qg;
            var n = new Set;
            a.set(e, n)
        } else
            n = a.get(e),
            n === void 0 && (n = new Set,
            a.set(e, n));
        n.has(l) || (as = !0,
        n.add(l),
        t = kg.bind(null, t, e, l),
        e.then(t, t))
    }
    function kg(t, e, l) {
        var a = t.pingCache;
        a !== null && a.delete(e),
        t.pingedLanes |= t.suspendedLanes & l,
        t.warmLanes &= ~l,
        Tt === t && (it & l) === l && (Dt === 4 || Dt === 3 && (it & 62914560) === it && 300 > fe() - wu ? (ht & 2) === 0 && Ca(t, 0) : ns |= l,
        za === it && (za = 0)),
        we(t)
    }
    function Ed(t, e) {
        e === 0 && (e = mf()),
        t = ql(t, e),
        t !== null && (Xa(t, e),
        we(t))
    }
    function Fg(t) {
        var e = t.memoizedState
          , l = 0;
        e !== null && (l = e.retryLane),
        Ed(t, l)
    }
    function Wg(t, e) {
        var l = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var a = t.stateNode
              , n = t.memoizedState;
            n !== null && (l = n.retryLane);
            break;
        case 19:
            a = t.stateNode;
            break;
        case 22:
            a = t.stateNode._retryCache;
            break;
        default:
            throw Error(c(314))
        }
        a !== null && a.delete(e),
        Ed(t, l)
    }
    function Pg(t, e) {
        return Ri(t, e)
    }
    var Zu = null
      , Da = null
      , ds = !1
      , Ku = !1
      , hs = !1
      , xl = 0;
    function we(t) {
        t !== Da && t.next === null && (Da === null ? Zu = Da = t : Da = Da.next = t),
        Ku = !0,
        ds || (ds = !0,
        tp())
    }
    function Rn(t, e) {
        if (!hs && Ku) {
            hs = !0;
            do
                for (var l = !1, a = Zu; a !== null; ) {
                    if (t !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0)
                            var u = 0;
                        else {
                            var o = a.suspendedLanes
                              , h = a.pingedLanes;
                            u = (1 << 31 - oe(42 | t) + 1) - 1,
                            u &= n & ~(o & ~h),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (l = !0,
                        xd(a, u))
                    } else
                        u = it,
                        u = Fn(a, a === Tt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (u & 3) === 0 || Ga(a, u) || (l = !0,
                        xd(a, u));
                    a = a.next
                }
            while (l);
            hs = !1
        }
    }
    function Ig() {
        Td()
    }
    function Td() {
        Ku = ds = !1;
        var t = 0;
        xl !== 0 && rp() && (t = xl);
        for (var e = fe(), l = null, a = Zu; a !== null; ) {
            var n = a.next
              , u = Od(a, e);
            u === 0 ? (a.next = null,
            l === null ? Zu = n : l.next = n,
            n === null && (Da = l)) : (l = a,
            (t !== 0 || (u & 3) !== 0) && (Ku = !0)),
            a = n
        }
        Yt !== 0 && Yt !== 5 || Rn(t),
        xl !== 0 && (xl = 0)
    }
    function Od(t, e) {
        for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
            var o = 31 - oe(u)
              , h = 1 << o
              , v = n[o];
            v === -1 ? ((h & l) === 0 || (h & a) !== 0) && (n[o] = Am(h, e)) : v <= e && (t.expiredLanes |= h),
            u &= ~h
        }
        if (e = Tt,
        l = it,
        l = Fn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a = t.callbackNode,
        l === 0 || t === e && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null)
            return a !== null && a !== null && xi(a),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((l & 3) === 0 || Ga(t, l)) {
            if (e = l & -l,
            e === t.callbackPriority)
                return e;
            switch (a !== null && xi(a),
            _i(l)) {
            case 2:
            case 8:
                l = df;
                break;
            case 32:
                l = Kn;
                break;
            case 268435456:
                l = hf;
                break;
            default:
                l = Kn
            }
            return a = Rd.bind(null, t),
            l = Ri(l, a),
            t.callbackPriority = e,
            t.callbackNode = l,
            e
        }
        return a !== null && a !== null && xi(a),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function Rd(t, e) {
        if (Yt !== 0 && Yt !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var l = t.callbackNode;
        if (Qu() && t.callbackNode !== l)
            return null;
        var a = it;
        return a = Fn(t, t === Tt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a === 0 ? null : (ud(t, a, e),
        Od(t, fe()),
        t.callbackNode != null && t.callbackNode === l ? Rd.bind(null, t) : null)
    }
    function xd(t, e) {
        if (Qu())
            return null;
        ud(t, e, !0)
    }
    function tp() {
        dp(function() {
            (ht & 6) !== 0 ? Ri(of, Ig) : Td()
        })
    }
    function ms() {
        if (xl === 0) {
            var t = pa;
            t === 0 && (t = Jn,
            Jn <<= 1,
            (Jn & 261888) === 0 && (Jn = 256)),
            xl = t
        }
        return xl
    }
    function Ad(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : tu("" + t)
    }
    function zd(t, e) {
        var l = e.ownerDocument.createElement("input");
        return l.name = e.name,
        l.value = e.value,
        t.id && l.setAttribute("form", t.id),
        e.parentNode.insertBefore(l, e),
        t = new FormData(t),
        l.parentNode.removeChild(l),
        t
    }
    function ep(t, e, l, a, n) {
        if (e === "submit" && l && l.stateNode === n) {
            var u = Ad((n[le] || null).action)
              , o = a.submitter;
            o && (e = (e = o[le] || null) ? Ad(e.formAction) : o.getAttribute("formAction"),
            e !== null && (u = e,
            o = null));
            var h = new nu("action","action",null,a,n);
            t.push({
                event: h,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (xl !== 0) {
                                var v = o ? zd(n, o) : new FormData(n);
                                Lc(l, {
                                    pending: !0,
                                    data: v,
                                    method: n.method,
                                    action: u
                                }, null, v)
                            }
                        } else
                            typeof u == "function" && (h.preventDefault(),
                            v = o ? zd(n, o) : new FormData(n),
                            Lc(l, {
                                pending: !0,
                                data: v,
                                method: n.method,
                                action: u
                            }, u, v))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var gs = 0; gs < Wi.length; gs++) {
        var ps = Wi[gs]
          , lp = ps.toLowerCase()
          , ap = ps[0].toUpperCase() + ps.slice(1);
        Me(lp, "on" + ap)
    }
    Me(ar, "onAnimationEnd"),
    Me(nr, "onAnimationIteration"),
    Me(ur, "onAnimationStart"),
    Me("dblclick", "onDoubleClick"),
    Me("focusin", "onFocus"),
    Me("focusout", "onBlur"),
    Me(Sg, "onTransitionRun"),
    Me(bg, "onTransitionStart"),
    Me(Eg, "onTransitionCancel"),
    Me(ir, "onTransitionEnd"),
    la("onMouseEnter", ["mouseout", "mouseover"]),
    la("onMouseLeave", ["mouseout", "mouseover"]),
    la("onPointerEnter", ["pointerout", "pointerover"]),
    la("onPointerLeave", ["pointerout", "pointerover"]),
    Hl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Hl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Hl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Hl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Hl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Hl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var xn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , np = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn));
    function _d(t, e) {
        e = (e & 4) !== 0;
        for (var l = 0; l < t.length; l++) {
            var a = t[l]
              , n = a.event;
            a = a.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var o = a.length - 1; 0 <= o; o--) {
                        var h = a[o]
                          , v = h.instance
                          , x = h.currentTarget;
                        if (h = h.listener,
                        v !== u && n.isPropagationStopped())
                            break t;
                        u = h,
                        n.currentTarget = x;
                        try {
                            u(n)
                        } catch (C) {
                            cu(C)
                        }
                        n.currentTarget = null,
                        u = v
                    }
                else
                    for (o = 0; o < a.length; o++) {
                        if (h = a[o],
                        v = h.instance,
                        x = h.currentTarget,
                        h = h.listener,
                        v !== u && n.isPropagationStopped())
                            break t;
                        u = h,
                        n.currentTarget = x;
                        try {
                            u(n)
                        } catch (C) {
                            cu(C)
                        }
                        n.currentTarget = null,
                        u = v
                    }
            }
        }
    }
    function nt(t, e) {
        var l = e[Ci];
        l === void 0 && (l = e[Ci] = new Set);
        var a = t + "__bubble";
        l.has(a) || (Cd(e, t, 2, !1),
        l.add(a))
    }
    function ys(t, e, l) {
        var a = 0;
        e && (a |= 4),
        Cd(l, t, a, e)
    }
    var Ju = "_reactListening" + Math.random().toString(36).slice(2);
    function vs(t) {
        if (!t[Ju]) {
            t[Ju] = !0,
            Ef.forEach(function(l) {
                l !== "selectionchange" && (np.has(l) || ys(l, !1, t),
                ys(l, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Ju] || (e[Ju] = !0,
            ys("selectionchange", !1, e))
        }
    }
    function Cd(t, e, l, a) {
        switch (nh(e)) {
        case 2:
            var n = Mp;
            break;
        case 8:
            n = Up;
            break;
        default:
            n = Us
        }
        l = n.bind(null, e, l, t),
        n = void 0,
        !wi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0),
        a ? n !== void 0 ? t.addEventListener(e, l, {
            capture: !0,
            passive: n
        }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
            passive: n
        }) : t.addEventListener(e, l, !1)
    }
    function Ss(t, e, l, a, n) {
        var u = a;
        if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
            t: for (; ; ) {
                if (a === null)
                    return;
                var o = a.tag;
                if (o === 3 || o === 4) {
                    var h = a.stateNode.containerInfo;
                    if (h === n)
                        break;
                    if (o === 4)
                        for (o = a.return; o !== null; ) {
                            var v = o.tag;
                            if ((v === 3 || v === 4) && o.stateNode.containerInfo === n)
                                return;
                            o = o.return
                        }
                    for (; h !== null; ) {
                        if (o = Il(h),
                        o === null)
                            return;
                        if (v = o.tag,
                        v === 5 || v === 6 || v === 26 || v === 27) {
                            a = u = o;
                            continue t
                        }
                        h = h.parentNode
                    }
                }
                a = a.return
            }
        Uf(function() {
            var x = u
              , C = Bi(l)
              , L = [];
            t: {
                var A = cr.get(t);
                if (A !== void 0) {
                    var z = nu
                      , Q = t;
                    switch (t) {
                    case "keypress":
                        if (lu(l) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        z = Wm;
                        break;
                    case "focusin":
                        Q = "focus",
                        z = Gi;
                        break;
                    case "focusout":
                        Q = "blur",
                        z = Gi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        z = Gi;
                        break;
                    case "click":
                        if (l.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        z = Bf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        z = qm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        z = tg;
                        break;
                    case ar:
                    case nr:
                    case ur:
                        z = Gm;
                        break;
                    case ir:
                        z = lg;
                        break;
                    case "scroll":
                    case "scrollend":
                        z = jm;
                        break;
                    case "wheel":
                        z = ng;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        z = Qm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        z = wf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        z = ig
                    }
                    var k = (e & 4) !== 0
                      , Et = !k && (t === "scroll" || t === "scrollend")
                      , O = k ? A !== null ? A + "Capture" : null : A;
                    k = [];
                    for (var E = x, R; E !== null; ) {
                        var U = E;
                        if (R = U.stateNode,
                        U = U.tag,
                        U !== 5 && U !== 26 && U !== 27 || R === null || O === null || (U = Ka(E, O),
                        U != null && k.push(An(E, U, R))),
                        Et)
                            break;
                        E = E.return
                    }
                    0 < k.length && (A = new z(A,Q,null,l,C),
                    L.push({
                        event: A,
                        listeners: k
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (A = t === "mouseover" || t === "pointerover",
                    z = t === "mouseout" || t === "pointerout",
                    A && l !== Hi && (Q = l.relatedTarget || l.fromElement) && (Il(Q) || Q[Pl]))
                        break t;
                    if ((z || A) && (A = C.window === C ? C : (A = C.ownerDocument) ? A.defaultView || A.parentWindow : window,
                    z ? (Q = l.relatedTarget || l.toElement,
                    z = x,
                    Q = Q ? Il(Q) : null,
                    Q !== null && (Et = d(Q),
                    k = Q.tag,
                    Q !== Et || k !== 5 && k !== 27 && k !== 6) && (Q = null)) : (z = null,
                    Q = x),
                    z !== Q)) {
                        if (k = Bf,
                        U = "onMouseLeave",
                        O = "onMouseEnter",
                        E = "mouse",
                        (t === "pointerout" || t === "pointerover") && (k = wf,
                        U = "onPointerLeave",
                        O = "onPointerEnter",
                        E = "pointer"),
                        Et = z == null ? A : Za(z),
                        R = Q == null ? A : Za(Q),
                        A = new k(U,E + "leave",z,l,C),
                        A.target = Et,
                        A.relatedTarget = R,
                        U = null,
                        Il(C) === x && (k = new k(O,E + "enter",Q,l,C),
                        k.target = R,
                        k.relatedTarget = Et,
                        U = k),
                        Et = U,
                        z && Q)
                            e: {
                                for (k = up,
                                O = z,
                                E = Q,
                                R = 0,
                                U = O; U; U = k(U))
                                    R++;
                                U = 0;
                                for (var J = E; J; J = k(J))
                                    U++;
                                for (; 0 < R - U; )
                                    O = k(O),
                                    R--;
                                for (; 0 < U - R; )
                                    E = k(E),
                                    U--;
                                for (; R--; ) {
                                    if (O === E || E !== null && O === E.alternate) {
                                        k = O;
                                        break e
                                    }
                                    O = k(O),
                                    E = k(E)
                                }
                                k = null
                            }
                        else
                            k = null;
                        z !== null && Nd(L, A, z, k, !1),
                        Q !== null && Et !== null && Nd(L, Et, Q, k, !0)
                    }
                }
                t: {
                    if (A = x ? Za(x) : window,
                    z = A.nodeName && A.nodeName.toLowerCase(),
                    z === "select" || z === "input" && A.type === "file")
                        var ot = Kf;
                    else if (Qf(A))
                        if (Jf)
                            ot = pg;
                        else {
                            ot = mg;
                            var Z = hg
                        }
                    else
                        z = A.nodeName,
                        !z || z.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? x && Li(x.elementType) && (ot = Kf) : ot = gg;
                    if (ot && (ot = ot(t, x))) {
                        Zf(L, ot, l, C);
                        break t
                    }
                    Z && Z(t, A, x),
                    t === "focusout" && x && A.type === "number" && x.memoizedProps.value != null && Ui(A, "number", A.value)
                }
                switch (Z = x ? Za(x) : window,
                t) {
                case "focusin":
                    (Qf(Z) || Z.contentEditable === "true") && (sa = Z,
                    $i = x,
                    tn = null);
                    break;
                case "focusout":
                    tn = $i = sa = null;
                    break;
                case "mousedown":
                    ki = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ki = !1,
                    er(L, l, C);
                    break;
                case "selectionchange":
                    if (vg)
                        break;
                case "keydown":
                case "keyup":
                    er(L, l, C)
                }
                var et;
                if (Qi)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var ct = "onCompositionStart";
                            break t;
                        case "compositionend":
                            ct = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            ct = "onCompositionUpdate";
                            break t
                        }
                        ct = void 0
                    }
                else
                    ca ? Gf(t, l) && (ct = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ct = "onCompositionStart");
                ct && (qf && l.locale !== "ko" && (ca || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && ca && (et = Lf()) : (fl = C,
                qi = "value"in fl ? fl.value : fl.textContent,
                ca = !0)),
                Z = $u(x, ct),
                0 < Z.length && (ct = new jf(ct,t,null,l,C),
                L.push({
                    event: ct,
                    listeners: Z
                }),
                et ? ct.data = et : (et = Xf(l),
                et !== null && (ct.data = et)))),
                (et = sg ? fg(t, l) : rg(t, l)) && (ct = $u(x, "onBeforeInput"),
                0 < ct.length && (Z = new jf("onBeforeInput","beforeinput",null,l,C),
                L.push({
                    event: Z,
                    listeners: ct
                }),
                Z.data = et)),
                ep(L, t, x, l, C)
            }
            _d(L, e)
        })
    }
    function An(t, e, l) {
        return {
            instance: t,
            listener: e,
            currentTarget: l
        }
    }
    function $u(t, e) {
        for (var l = e + "Capture", a = []; t !== null; ) {
            var n = t
              , u = n.stateNode;
            if (n = n.tag,
            n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ka(t, l),
            n != null && a.unshift(An(t, n, u)),
            n = Ka(t, e),
            n != null && a.push(An(t, n, u))),
            t.tag === 3)
                return a;
            t = t.return
        }
        return []
    }
    function up(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function Nd(t, e, l, a, n) {
        for (var u = e._reactName, o = []; l !== null && l !== a; ) {
            var h = l
              , v = h.alternate
              , x = h.stateNode;
            if (h = h.tag,
            v !== null && v === a)
                break;
            h !== 5 && h !== 26 && h !== 27 || x === null || (v = x,
            n ? (x = Ka(l, u),
            x != null && o.unshift(An(l, x, v))) : n || (x = Ka(l, u),
            x != null && o.push(An(l, x, v)))),
            l = l.return
        }
        o.length !== 0 && t.push({
            event: e,
            listeners: o
        })
    }
    var ip = /\r\n?/g
      , cp = /\u0000|\uFFFD/g;
    function Dd(t) {
        return (typeof t == "string" ? t : "" + t).replace(ip, `
`).replace(cp, "")
    }
    function Md(t, e) {
        return e = Dd(e),
        Dd(t) === e
    }
    function bt(t, e, l, a, n, u) {
        switch (l) {
        case "children":
            typeof a == "string" ? e === "body" || e === "textarea" && a === "" || na(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && na(t, "" + a);
            break;
        case "className":
            Pn(t, "class", a);
            break;
        case "tabIndex":
            Pn(t, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Pn(t, l, a);
            break;
        case "style":
            Df(t, a, u);
            break;
        case "data":
            if (e !== "object") {
                Pn(t, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (e !== "a" || l !== "href")) {
                t.removeAttribute(l);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(l);
                break
            }
            a = tu("" + a),
            t.setAttribute(l, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (l === "formAction" ? (e !== "input" && bt(t, e, "name", n.name, n, null),
                bt(t, e, "formEncType", n.formEncType, n, null),
                bt(t, e, "formMethod", n.formMethod, n, null),
                bt(t, e, "formTarget", n.formTarget, n, null)) : (bt(t, e, "encType", n.encType, n, null),
                bt(t, e, "method", n.method, n, null),
                bt(t, e, "target", n.target, n, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(l);
                break
            }
            a = tu("" + a),
            t.setAttribute(l, a);
            break;
        case "onClick":
            a != null && (t.onclick = Ge);
            break;
        case "onScroll":
            a != null && nt("scroll", t);
            break;
        case "onScrollEnd":
            a != null && nt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(c(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(c(60));
                    t.innerHTML = l
                }
            }
            break;
        case "multiple":
            t.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            t.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            l = tu("" + a),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
            break;
        case "capture":
        case "download":
            a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
            break;
        case "popover":
            nt("beforetoggle", t),
            nt("toggle", t),
            Wn(t, "popover", a);
            break;
        case "xlinkActuate":
            Ve(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Ve(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Ve(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Ve(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Ve(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Ve(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Ve(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Ve(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Ve(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Wn(t, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Hm.get(l) || l,
            Wn(t, l, a))
        }
    }
    function bs(t, e, l, a, n, u) {
        switch (l) {
        case "style":
            Df(t, a, u);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(c(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(c(60));
                    t.innerHTML = l
                }
            }
            break;
        case "children":
            typeof a == "string" ? na(t, a) : (typeof a == "number" || typeof a == "bigint") && na(t, "" + a);
            break;
        case "onScroll":
            a != null && nt("scroll", t);
            break;
        case "onScrollEnd":
            a != null && nt("scrollend", t);
            break;
        case "onClick":
            a != null && (t.onclick = Ge);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Tf.hasOwnProperty(l))
                t: {
                    if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"),
                    e = l.slice(2, n ? l.length - 7 : void 0),
                    u = t[le] || null,
                    u = u != null ? u[l] : null,
                    typeof u == "function" && t.removeEventListener(e, u, n),
                    typeof a == "function")) {
                        typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)),
                        t.addEventListener(e, a, n);
                        break t
                    }
                    l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Wn(t, l, a)
                }
        }
    }
    function $t(t, e, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            nt("error", t),
            nt("load", t);
            var a = !1, n = !1, u;
            for (u in l)
                if (l.hasOwnProperty(u)) {
                    var o = l[u];
                    if (o != null)
                        switch (u) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(c(137, e));
                        default:
                            bt(t, e, u, o, l, null)
                        }
                }
            n && bt(t, e, "srcSet", l.srcSet, l, null),
            a && bt(t, e, "src", l.src, l, null);
            return;
        case "input":
            nt("invalid", t);
            var h = u = o = n = null
              , v = null
              , x = null;
            for (a in l)
                if (l.hasOwnProperty(a)) {
                    var C = l[a];
                    if (C != null)
                        switch (a) {
                        case "name":
                            n = C;
                            break;
                        case "type":
                            o = C;
                            break;
                        case "checked":
                            v = C;
                            break;
                        case "defaultChecked":
                            x = C;
                            break;
                        case "value":
                            u = C;
                            break;
                        case "defaultValue":
                            h = C;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (C != null)
                                throw Error(c(137, e));
                            break;
                        default:
                            bt(t, e, a, C, l, null)
                        }
                }
            zf(t, u, h, v, x, o, n, !1);
            return;
        case "select":
            nt("invalid", t),
            a = o = u = null;
            for (n in l)
                if (l.hasOwnProperty(n) && (h = l[n],
                h != null))
                    switch (n) {
                    case "value":
                        u = h;
                        break;
                    case "defaultValue":
                        o = h;
                        break;
                    case "multiple":
                        a = h;
                    default:
                        bt(t, e, n, h, l, null)
                    }
            e = u,
            l = o,
            t.multiple = !!a,
            e != null ? aa(t, !!a, e, !1) : l != null && aa(t, !!a, l, !0);
            return;
        case "textarea":
            nt("invalid", t),
            u = n = a = null;
            for (o in l)
                if (l.hasOwnProperty(o) && (h = l[o],
                h != null))
                    switch (o) {
                    case "value":
                        a = h;
                        break;
                    case "defaultValue":
                        n = h;
                        break;
                    case "children":
                        u = h;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (h != null)
                            throw Error(c(91));
                        break;
                    default:
                        bt(t, e, o, h, l, null)
                    }
            Cf(t, a, n, u);
            return;
        case "option":
            for (v in l)
                l.hasOwnProperty(v) && (a = l[v],
                a != null) && (v === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : bt(t, e, v, a, l, null));
            return;
        case "dialog":
            nt("beforetoggle", t),
            nt("toggle", t),
            nt("cancel", t),
            nt("close", t);
            break;
        case "iframe":
        case "object":
            nt("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < xn.length; a++)
                nt(xn[a], t);
            break;
        case "image":
            nt("error", t),
            nt("load", t);
            break;
        case "details":
            nt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            nt("error", t),
            nt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (x in l)
                if (l.hasOwnProperty(x) && (a = l[x],
                a != null))
                    switch (x) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(c(137, e));
                    default:
                        bt(t, e, x, a, l, null)
                    }
            return;
        default:
            if (Li(e)) {
                for (C in l)
                    l.hasOwnProperty(C) && (a = l[C],
                    a !== void 0 && bs(t, e, C, a, l, void 0));
                return
            }
        }
        for (h in l)
            l.hasOwnProperty(h) && (a = l[h],
            a != null && bt(t, e, h, a, l, null))
    }
    function sp(t, e, l, a) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var n = null
              , u = null
              , o = null
              , h = null
              , v = null
              , x = null
              , C = null;
            for (z in l) {
                var L = l[z];
                if (l.hasOwnProperty(z) && L != null)
                    switch (z) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        v = L;
                    default:
                        a.hasOwnProperty(z) || bt(t, e, z, null, a, L)
                    }
            }
            for (var A in a) {
                var z = a[A];
                if (L = l[A],
                a.hasOwnProperty(A) && (z != null || L != null))
                    switch (A) {
                    case "type":
                        u = z;
                        break;
                    case "name":
                        n = z;
                        break;
                    case "checked":
                        x = z;
                        break;
                    case "defaultChecked":
                        C = z;
                        break;
                    case "value":
                        o = z;
                        break;
                    case "defaultValue":
                        h = z;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (z != null)
                            throw Error(c(137, e));
                        break;
                    default:
                        z !== L && bt(t, e, A, z, a, L)
                    }
            }
            Mi(t, o, h, v, x, C, u, n);
            return;
        case "select":
            z = o = h = A = null;
            for (u in l)
                if (v = l[u],
                l.hasOwnProperty(u) && v != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        z = v;
                    default:
                        a.hasOwnProperty(u) || bt(t, e, u, null, a, v)
                    }
            for (n in a)
                if (u = a[n],
                v = l[n],
                a.hasOwnProperty(n) && (u != null || v != null))
                    switch (n) {
                    case "value":
                        A = u;
                        break;
                    case "defaultValue":
                        h = u;
                        break;
                    case "multiple":
                        o = u;
                    default:
                        u !== v && bt(t, e, n, u, a, v)
                    }
            e = h,
            l = o,
            a = z,
            A != null ? aa(t, !!l, A, !1) : !!a != !!l && (e != null ? aa(t, !!l, e, !0) : aa(t, !!l, l ? [] : "", !1));
            return;
        case "textarea":
            z = A = null;
            for (h in l)
                if (n = l[h],
                l.hasOwnProperty(h) && n != null && !a.hasOwnProperty(h))
                    switch (h) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        bt(t, e, h, null, a, n)
                    }
            for (o in a)
                if (n = a[o],
                u = l[o],
                a.hasOwnProperty(o) && (n != null || u != null))
                    switch (o) {
                    case "value":
                        A = n;
                        break;
                    case "defaultValue":
                        z = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null)
                            throw Error(c(91));
                        break;
                    default:
                        n !== u && bt(t, e, o, n, a, u)
                    }
            _f(t, A, z);
            return;
        case "option":
            for (var Q in l)
                A = l[Q],
                l.hasOwnProperty(Q) && A != null && !a.hasOwnProperty(Q) && (Q === "selected" ? t.selected = !1 : bt(t, e, Q, null, a, A));
            for (v in a)
                A = a[v],
                z = l[v],
                a.hasOwnProperty(v) && A !== z && (A != null || z != null) && (v === "selected" ? t.selected = A && typeof A != "function" && typeof A != "symbol" : bt(t, e, v, A, a, z));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var k in l)
                A = l[k],
                l.hasOwnProperty(k) && A != null && !a.hasOwnProperty(k) && bt(t, e, k, null, a, A);
            for (x in a)
                if (A = a[x],
                z = l[x],
                a.hasOwnProperty(x) && A !== z && (A != null || z != null))
                    switch (x) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (A != null)
                            throw Error(c(137, e));
                        break;
                    default:
                        bt(t, e, x, A, a, z)
                    }
            return;
        default:
            if (Li(e)) {
                for (var Et in l)
                    A = l[Et],
                    l.hasOwnProperty(Et) && A !== void 0 && !a.hasOwnProperty(Et) && bs(t, e, Et, void 0, a, A);
                for (C in a)
                    A = a[C],
                    z = l[C],
                    !a.hasOwnProperty(C) || A === z || A === void 0 && z === void 0 || bs(t, e, C, A, a, z);
                return
            }
        }
        for (var O in l)
            A = l[O],
            l.hasOwnProperty(O) && A != null && !a.hasOwnProperty(O) && bt(t, e, O, null, a, A);
        for (L in a)
            A = a[L],
            z = l[L],
            !a.hasOwnProperty(L) || A === z || A == null && z == null || bt(t, e, L, A, a, z)
    }
    function Ud(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function fp() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
                var n = l[a]
                  , u = n.transferSize
                  , o = n.initiatorType
                  , h = n.duration;
                if (u && h && Ud(o)) {
                    for (o = 0,
                    h = n.responseEnd,
                    a += 1; a < l.length; a++) {
                        var v = l[a]
                          , x = v.startTime;
                        if (x > h)
                            break;
                        var C = v.transferSize
                          , L = v.initiatorType;
                        C && Ud(L) && (v = v.responseEnd,
                        o += C * (v < h ? 1 : (h - x) / (v - x)))
                    }
                    if (--a,
                    e += 8 * (u + o) / (n.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var Es = null
      , Ts = null;
    function ku(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function Ld(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Hd(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function Os(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Rs = null;
    function rp() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Rs ? !1 : (Rs = t,
        !0) : (Rs = null,
        !1)
    }
    var Bd = typeof setTimeout == "function" ? setTimeout : void 0
      , op = typeof clearTimeout == "function" ? clearTimeout : void 0
      , jd = typeof Promise == "function" ? Promise : void 0
      , dp = typeof queueMicrotask == "function" ? queueMicrotask : typeof jd < "u" ? function(t) {
        return jd.resolve(null).then(t).catch(hp)
    }
    : Bd;
    function hp(t) {
        setTimeout(function() {
            throw t
        })
    }
    function Al(t) {
        return t === "head"
    }
    function wd(t, e) {
        var l = e
          , a = 0;
        do {
            var n = l.nextSibling;
            if (t.removeChild(l),
            n && n.nodeType === 8)
                if (l = n.data,
                l === "/$" || l === "/&") {
                    if (a === 0) {
                        t.removeChild(n),
                        Ha(e);
                        return
                    }
                    a--
                } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
                    a++;
                else if (l === "html")
                    zn(t.ownerDocument.documentElement);
                else if (l === "head") {
                    l = t.ownerDocument.head,
                    zn(l);
                    for (var u = l.firstChild; u; ) {
                        var o = u.nextSibling
                          , h = u.nodeName;
                        u[Qa] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u),
                        u = o
                    }
                } else
                    l === "body" && zn(t.ownerDocument.body);
            l = n
        } while (l);
        Ha(e)
    }
    function qd(t, e) {
        var l = t;
        t = 0;
        do {
            var a = l.nextSibling;
            if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display,
            l.style.display = "none") : (l.style.display = l._stashedDisplay || "",
            l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue,
            l.nodeValue = "") : l.nodeValue = l._stashedText || ""),
            a && a.nodeType === 8)
                if (l = a.data,
                l === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
            l = a
        } while (l)
    }
    function xs(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var l = e;
            switch (e = e.nextSibling,
            l.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                xs(l),
                Ni(l);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (l.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(l)
        }
    }
    function mp(t, e, l, a) {
        for (; t.nodeType === 1; ) {
            var n = l;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (a) {
                if (!t[Qa])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"),
                        u === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"),
                        (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && t.getAttribute("name") === u)
                    return t
            } else
                return t;
            if (t = Ce(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function gp(t, e, l) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ce(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function Yd(t, e) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ce(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function As(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function zs(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function pp(t, e) {
        var l = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = e;
        else if (t.data !== "$?" || l.readyState !== "loading")
            e();
        else {
            var a = function() {
                e(),
                l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a),
            t._reactRetry = a
        }
    }
    function Ce(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return t
    }
    var _s = null;
    function Vd(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === "/$" || l === "/&") {
                    if (e === 0)
                        return Ce(t.nextSibling);
                    e--
                } else
                    l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }
    function Gd(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    l !== "/$" && l !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function Xd(t, e, l) {
        switch (e = ku(l),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(c(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(c(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(c(454));
            return t;
        default:
            throw Error(c(451))
        }
    }
    function zn(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        Ni(t)
    }
    var Ne = new Map
      , Qd = new Set;
    function Fu(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var nl = j.d;
    j.d = {
        f: yp,
        r: vp,
        D: Sp,
        C: bp,
        L: Ep,
        m: Tp,
        X: Rp,
        S: Op,
        M: xp
    };
    function yp() {
        var t = nl.f()
          , e = Vu();
        return t || e
    }
    function vp(t) {
        var e = ta(t);
        e !== null && e.tag === 5 && e.type === "form" ? io(e) : nl.r(t)
    }
    var Ma = typeof document > "u" ? null : document;
    function Zd(t, e, l) {
        var a = Ma;
        if (a && typeof e == "string" && e) {
            var n = Te(e);
            n = 'link[rel="' + t + '"][href="' + n + '"]',
            typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
            Qd.has(n) || (Qd.add(n),
            t = {
                rel: t,
                crossOrigin: l,
                href: e
            },
            a.querySelector(n) === null && (e = a.createElement("link"),
            $t(e, "link", t),
            Gt(e),
            a.head.appendChild(e)))
        }
    }
    function Sp(t) {
        nl.D(t),
        Zd("dns-prefetch", t, null)
    }
    function bp(t, e) {
        nl.C(t, e),
        Zd("preconnect", t, e)
    }
    function Ep(t, e, l) {
        nl.L(t, e, l);
        var a = Ma;
        if (a && t && e) {
            var n = 'link[rel="preload"][as="' + Te(e) + '"]';
            e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Te(l.imageSrcSet) + '"]',
            typeof l.imageSizes == "string" && (n += '[imagesizes="' + Te(l.imageSizes) + '"]')) : n += '[href="' + Te(t) + '"]';
            var u = n;
            switch (e) {
            case "style":
                u = Ua(t);
                break;
            case "script":
                u = La(t)
            }
            Ne.has(u) || (t = S({
                rel: "preload",
                href: e === "image" && l && l.imageSrcSet ? void 0 : t,
                as: e
            }, l),
            Ne.set(u, t),
            a.querySelector(n) !== null || e === "style" && a.querySelector(_n(u)) || e === "script" && a.querySelector(Cn(u)) || (e = a.createElement("link"),
            $t(e, "link", t),
            Gt(e),
            a.head.appendChild(e)))
        }
    }
    function Tp(t, e) {
        nl.m(t, e);
        var l = Ma;
        if (l && t) {
            var a = e && typeof e.as == "string" ? e.as : "script"
              , n = 'link[rel="modulepreload"][as="' + Te(a) + '"][href="' + Te(t) + '"]'
              , u = n;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = La(t)
            }
            if (!Ne.has(u) && (t = S({
                rel: "modulepreload",
                href: t
            }, e),
            Ne.set(u, t),
            l.querySelector(n) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (l.querySelector(Cn(u)))
                        return
                }
                a = l.createElement("link"),
                $t(a, "link", t),
                Gt(a),
                l.head.appendChild(a)
            }
        }
    }
    function Op(t, e, l) {
        nl.S(t, e, l);
        var a = Ma;
        if (a && t) {
            var n = ea(a).hoistableStyles
              , u = Ua(t);
            e = e || "default";
            var o = n.get(u);
            if (!o) {
                var h = {
                    loading: 0,
                    preload: null
                };
                if (o = a.querySelector(_n(u)))
                    h.loading = 5;
                else {
                    t = S({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, l),
                    (l = Ne.get(u)) && Cs(t, l);
                    var v = o = a.createElement("link");
                    Gt(v),
                    $t(v, "link", t),
                    v._p = new Promise(function(x, C) {
                        v.onload = x,
                        v.onerror = C
                    }
                    ),
                    v.addEventListener("load", function() {
                        h.loading |= 1
                    }),
                    v.addEventListener("error", function() {
                        h.loading |= 2
                    }),
                    h.loading |= 4,
                    Wu(o, e, a)
                }
                o = {
                    type: "stylesheet",
                    instance: o,
                    count: 1,
                    state: h
                },
                n.set(u, o)
            }
        }
    }
    function Rp(t, e) {
        nl.X(t, e);
        var l = Ma;
        if (l && t) {
            var a = ea(l).hoistableScripts
              , n = La(t)
              , u = a.get(n);
            u || (u = l.querySelector(Cn(n)),
            u || (t = S({
                src: t,
                async: !0
            }, e),
            (e = Ne.get(n)) && Ns(t, e),
            u = l.createElement("script"),
            Gt(u),
            $t(u, "link", t),
            l.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function xp(t, e) {
        nl.M(t, e);
        var l = Ma;
        if (l && t) {
            var a = ea(l).hoistableScripts
              , n = La(t)
              , u = a.get(n);
            u || (u = l.querySelector(Cn(n)),
            u || (t = S({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Ne.get(n)) && Ns(t, e),
            u = l.createElement("script"),
            Gt(u),
            $t(u, "link", t),
            l.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function Kd(t, e, l, a) {
        var n = (n = lt.current) ? Fu(n) : null;
        if (!n)
            throw Error(c(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ua(l.href),
            l = ea(n).hoistableStyles,
            a = l.get(e),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            l.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                t = Ua(l.href);
                var u = ea(n).hoistableStyles
                  , o = u.get(t);
                if (o || (n = n.ownerDocument || n,
                o = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(t, o),
                (u = n.querySelector(_n(t))) && !u._p && (o.instance = u,
                o.state.loading = 5),
                Ne.has(t) || (l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy
                },
                Ne.set(t, l),
                u || Ap(n, t, l, o.state))),
                e && a === null)
                    throw Error(c(528, ""));
                return o
            }
            if (e && a !== null)
                throw Error(c(529, ""));
            return null;
        case "script":
            return e = l.async,
            l = l.src,
            typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = La(l),
            l = ea(n).hoistableScripts,
            a = l.get(e),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            l.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(c(444, t))
        }
    }
    function Ua(t) {
        return 'href="' + Te(t) + '"'
    }
    function _n(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function Jd(t) {
        return S({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function Ap(t, e, l, a) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"),
        a.preload = e,
        e.addEventListener("load", function() {
            return a.loading |= 1
        }),
        e.addEventListener("error", function() {
            return a.loading |= 2
        }),
        $t(e, "link", l),
        Gt(e),
        t.head.appendChild(e))
    }
    function La(t) {
        return '[src="' + Te(t) + '"]'
    }
    function Cn(t) {
        return "script[async]" + t
    }
    function $d(t, e, l) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var a = t.querySelector('style[data-href~="' + Te(l.href) + '"]');
                if (a)
                    return e.instance = a,
                    Gt(a),
                    a;
                var n = S({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return a = (t.ownerDocument || t).createElement("style"),
                Gt(a),
                $t(a, "style", n),
                Wu(a, l.precedence, t),
                e.instance = a;
            case "stylesheet":
                n = Ua(l.href);
                var u = t.querySelector(_n(n));
                if (u)
                    return e.state.loading |= 4,
                    e.instance = u,
                    Gt(u),
                    u;
                a = Jd(l),
                (n = Ne.get(n)) && Cs(a, n),
                u = (t.ownerDocument || t).createElement("link"),
                Gt(u);
                var o = u;
                return o._p = new Promise(function(h, v) {
                    o.onload = h,
                    o.onerror = v
                }
                ),
                $t(u, "link", a),
                e.state.loading |= 4,
                Wu(u, l.precedence, t),
                e.instance = u;
            case "script":
                return u = La(l.src),
                (n = t.querySelector(Cn(u))) ? (e.instance = n,
                Gt(n),
                n) : (a = l,
                (n = Ne.get(u)) && (a = S({}, l),
                Ns(a, n)),
                t = t.ownerDocument || t,
                n = t.createElement("script"),
                Gt(n),
                $t(n, "link", a),
                t.head.appendChild(n),
                e.instance = n);
            case "void":
                return null;
            default:
                throw Error(c(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance,
            e.state.loading |= 4,
            Wu(a, l.precedence, t));
        return e.instance
    }
    function Wu(t, e, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, o = 0; o < a.length; o++) {
            var h = a[o];
            if (h.dataset.precedence === e)
                u = h;
            else if (u !== n)
                break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l,
        e.insertBefore(t, e.firstChild))
    }
    function Cs(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function Ns(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var Pu = null;
    function kd(t, e, l) {
        if (Pu === null) {
            var a = new Map
              , n = Pu = new Map;
            n.set(l, a)
        } else
            n = Pu,
            a = n.get(l),
            a || (a = new Map,
            n.set(l, a));
        if (a.has(t))
            return a;
        for (a.set(t, null),
        l = l.getElementsByTagName(t),
        n = 0; n < l.length; n++) {
            var u = l[n];
            if (!(u[Qa] || u[Qt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var o = u.getAttribute(e) || "";
                o = t + o;
                var h = a.get(o);
                h ? h.push(u) : a.set(o, [u])
            }
        }
        return a
    }
    function Fd(t, e, l) {
        t = t.ownerDocument || t,
        t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null)
    }
    function zp(t, e, l) {
        if (l === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            return e.rel === "stylesheet" ? (t = e.disabled,
            typeof e.precedence == "string" && t == null) : !0;
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function Wd(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function _p(t, e, l, a) {
        if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = Ua(a.href)
                  , u = e.querySelector(_n(n));
                if (u) {
                    e = u._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                    t = Iu.bind(t),
                    e.then(t, t)),
                    l.state.loading |= 4,
                    l.instance = u,
                    Gt(u);
                    return
                }
                u = e.ownerDocument || e,
                a = Jd(a),
                (n = Ne.get(n)) && Cs(a, n),
                u = u.createElement("link"),
                Gt(u);
                var o = u;
                o._p = new Promise(function(h, v) {
                    o.onload = h,
                    o.onerror = v
                }
                ),
                $t(u, "link", a),
                l.instance = u
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(l, e),
            (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++,
            l = Iu.bind(t),
            e.addEventListener("load", l),
            e.addEventListener("error", l))
        }
    }
    var Ds = 0;
    function Cp(t, e) {
        return t.stylesheets && t.count === 0 && ei(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(l) {
            var a = setTimeout(function() {
                if (t.stylesheets && ei(t, t.stylesheets),
                t.unsuspend) {
                    var u = t.unsuspend;
                    t.unsuspend = null,
                    u()
                }
            }, 6e4 + e);
            0 < t.imgBytes && Ds === 0 && (Ds = 62500 * fp());
            var n = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && ei(t, t.stylesheets),
                t.unsuspend)) {
                    var u = t.unsuspend;
                    t.unsuspend = null,
                    u()
                }
            }, (t.imgBytes > Ds ? 50 : 800) + e);
            return t.unsuspend = l,
            function() {
                t.unsuspend = null,
                clearTimeout(a),
                clearTimeout(n)
            }
        }
        : null
    }
    function Iu() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                ei(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var ti = null;
    function ei(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        ti = new Map,
        e.forEach(Np, t),
        ti = null,
        Iu.call(t))
    }
    function Np(t, e) {
        if (!(e.state.loading & 4)) {
            var l = ti.get(t);
            if (l)
                var a = l.get(null);
            else {
                l = new Map,
                ti.set(t, l);
                for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var o = n[u];
                    (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (l.set(o.dataset.precedence, o),
                    a = o)
                }
                a && l.set(null, a)
            }
            n = e.instance,
            o = n.getAttribute("data-precedence"),
            u = l.get(o) || a,
            u === a && l.set(null, n),
            l.set(o, n),
            this.count++,
            a = Iu.bind(this),
            n.addEventListener("load", a),
            n.addEventListener("error", a),
            u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(n, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Nn = {
        $$typeof: K,
        Provider: null,
        Consumer: null,
        _currentValue: $,
        _currentValue2: $,
        _threadCount: 0
    };
    function Dp(t, e, l, a, n, u, o, h, v) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Ai(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Ai(0),
        this.hiddenUpdates = Ai(null),
        this.identifierPrefix = a,
        this.onUncaughtError = n,
        this.onCaughtError = u,
        this.onRecoverableError = o,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = v,
        this.incompleteTransitions = new Map
    }
    function Pd(t, e, l, a, n, u, o, h, v, x, C, L) {
        return t = new Dp(t,e,l,o,v,x,C,L,h),
        e = 1,
        u === !0 && (e |= 24),
        u = he(3, null, null, e),
        t.current = u,
        u.stateNode = t,
        e = rc(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        u.memoizedState = {
            element: a,
            isDehydrated: l,
            cache: e
        },
        mc(u),
        t
    }
    function Id(t) {
        return t ? (t = oa,
        t) : oa
    }
    function th(t, e, l, a, n, u) {
        n = Id(n),
        a.context === null ? a.context = n : a.pendingContext = n,
        a = gl(e),
        a.payload = {
            element: l
        },
        u = u === void 0 ? null : u,
        u !== null && (a.callback = u),
        l = pl(t, a, e),
        l !== null && (se(l, t, e),
        sn(l, t, e))
    }
    function eh(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var l = t.retryLane;
            t.retryLane = l !== 0 && l < e ? l : e
        }
    }
    function Ms(t, e) {
        eh(t, e),
        (t = t.alternate) && eh(t, e)
    }
    function lh(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = ql(t, 67108864);
            e !== null && se(e, t, 67108864),
            Ms(t, 67108864)
        }
    }
    function ah(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = ve();
            e = zi(e);
            var l = ql(t, e);
            l !== null && se(l, t, e),
            Ms(t, e)
        }
    }
    var li = !0;
    function Mp(t, e, l, a) {
        var n = _.T;
        _.T = null;
        var u = j.p;
        try {
            j.p = 2,
            Us(t, e, l, a)
        } finally {
            j.p = u,
            _.T = n
        }
    }
    function Up(t, e, l, a) {
        var n = _.T;
        _.T = null;
        var u = j.p;
        try {
            j.p = 8,
            Us(t, e, l, a)
        } finally {
            j.p = u,
            _.T = n
        }
    }
    function Us(t, e, l, a) {
        if (li) {
            var n = Ls(a);
            if (n === null)
                Ss(t, e, a, ai, l),
                uh(t, a);
            else if (Hp(n, t, e, l, a))
                a.stopPropagation();
            else if (uh(t, a),
            e & 4 && -1 < Lp.indexOf(t)) {
                for (; n !== null; ) {
                    var u = ta(n);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var o = Ll(u.pendingLanes);
                                if (o !== 0) {
                                    var h = u;
                                    for (h.pendingLanes |= 2,
                                    h.entangledLanes |= 2; o; ) {
                                        var v = 1 << 31 - oe(o);
                                        h.entanglements[1] |= v,
                                        o &= ~v
                                    }
                                    we(u),
                                    (ht & 6) === 0 && (qu = fe() + 500,
                                    Rn(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            h = ql(u, 2),
                            h !== null && se(h, u, 2),
                            Vu(),
                            Ms(u, 2)
                        }
                    if (u = Ls(a),
                    u === null && Ss(t, e, a, ai, l),
                    u === n)
                        break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else
                Ss(t, e, a, null, l)
        }
    }
    function Ls(t) {
        return t = Bi(t),
        Hs(t)
    }
    var ai = null;
    function Hs(t) {
        if (ai = null,
        t = Il(t),
        t !== null) {
            var e = d(t);
            if (e === null)
                t = null;
            else {
                var l = e.tag;
                if (l === 13) {
                    if (t = m(e),
                    t !== null)
                        return t;
                    t = null
                } else if (l === 31) {
                    if (t = p(e),
                    t !== null)
                        return t;
                    t = null
                } else if (l === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return ai = t,
        null
    }
    function nh(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Sm()) {
            case of:
                return 2;
            case df:
                return 8;
            case Kn:
            case bm:
                return 32;
            case hf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Bs = !1
      , zl = null
      , _l = null
      , Cl = null
      , Dn = new Map
      , Mn = new Map
      , Nl = []
      , Lp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function uh(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            zl = null;
            break;
        case "dragenter":
        case "dragleave":
            _l = null;
            break;
        case "mouseover":
        case "mouseout":
            Cl = null;
            break;
        case "pointerover":
        case "pointerout":
            Dn.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Mn.delete(e.pointerId)
        }
    }
    function Un(t, e, l, a, n, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [n]
        },
        e !== null && (e = ta(e),
        e !== null && lh(e)),
        t) : (t.eventSystemFlags |= a,
        e = t.targetContainers,
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t)
    }
    function Hp(t, e, l, a, n) {
        switch (e) {
        case "focusin":
            return zl = Un(zl, t, e, l, a, n),
            !0;
        case "dragenter":
            return _l = Un(_l, t, e, l, a, n),
            !0;
        case "mouseover":
            return Cl = Un(Cl, t, e, l, a, n),
            !0;
        case "pointerover":
            var u = n.pointerId;
            return Dn.set(u, Un(Dn.get(u) || null, t, e, l, a, n)),
            !0;
        case "gotpointercapture":
            return u = n.pointerId,
            Mn.set(u, Un(Mn.get(u) || null, t, e, l, a, n)),
            !0
        }
        return !1
    }
    function ih(t) {
        var e = Il(t.target);
        if (e !== null) {
            var l = d(e);
            if (l !== null) {
                if (e = l.tag,
                e === 13) {
                    if (e = m(l),
                    e !== null) {
                        t.blockedOn = e,
                        Sf(t.priority, function() {
                            ah(l)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = p(l),
                    e !== null) {
                        t.blockedOn = e,
                        Sf(t.priority, function() {
                            ah(l)
                        });
                        return
                    }
                } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function ni(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var l = Ls(t.nativeEvent);
            if (l === null) {
                l = t.nativeEvent;
                var a = new l.constructor(l.type,l);
                Hi = a,
                l.target.dispatchEvent(a),
                Hi = null
            } else
                return e = ta(l),
                e !== null && lh(e),
                t.blockedOn = l,
                !1;
            e.shift()
        }
        return !0
    }
    function ch(t, e, l) {
        ni(t) && l.delete(e)
    }
    function Bp() {
        Bs = !1,
        zl !== null && ni(zl) && (zl = null),
        _l !== null && ni(_l) && (_l = null),
        Cl !== null && ni(Cl) && (Cl = null),
        Dn.forEach(ch),
        Mn.forEach(ch)
    }
    function ui(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        Bs || (Bs = !0,
        f.unstable_scheduleCallback(f.unstable_NormalPriority, Bp)))
    }
    var ii = null;
    function sh(t) {
        ii !== t && (ii = t,
        f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
            ii === t && (ii = null);
            for (var e = 0; e < t.length; e += 3) {
                var l = t[e]
                  , a = t[e + 1]
                  , n = t[e + 2];
                if (typeof a != "function") {
                    if (Hs(a || l) === null)
                        continue;
                    break
                }
                var u = ta(l);
                u !== null && (t.splice(e, 3),
                e -= 3,
                Lc(u, {
                    pending: !0,
                    data: n,
                    method: l.method,
                    action: a
                }, a, n))
            }
        }))
    }
    function Ha(t) {
        function e(v) {
            return ui(v, t)
        }
        zl !== null && ui(zl, t),
        _l !== null && ui(_l, t),
        Cl !== null && ui(Cl, t),
        Dn.forEach(e),
        Mn.forEach(e);
        for (var l = 0; l < Nl.length; l++) {
            var a = Nl[l];
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < Nl.length && (l = Nl[0],
        l.blockedOn === null); )
            ih(l),
            l.blockedOn === null && Nl.shift();
        if (l = (t.ownerDocument || t).$$reactFormReplay,
        l != null)
            for (a = 0; a < l.length; a += 3) {
                var n = l[a]
                  , u = l[a + 1]
                  , o = n[le] || null;
                if (typeof u == "function")
                    o || sh(l);
                else if (o) {
                    var h = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u,
                        o = u[le] || null)
                            h = o.formAction;
                        else if (Hs(n) !== null)
                            continue
                    } else
                        h = o.action;
                    typeof h == "function" ? l[a + 1] = h : (l.splice(a, 3),
                    a -= 3),
                    sh(l)
                }
            }
    }
    function fh() {
        function t(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(o) {
                        return n = o
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            n !== null && (n(),
            n = null),
            a || setTimeout(l, 20)
        }
        function l() {
            if (!a && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , n = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(l, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                n !== null && (n(),
                n = null)
            }
        }
    }
    function js(t) {
        this._internalRoot = t
    }
    ci.prototype.render = js.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(c(409));
        var l = e.current
          , a = ve();
        th(l, a, t, e, null, null)
    }
    ,
    ci.prototype.unmount = js.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            th(t.current, 2, null, t, null, null),
            Vu(),
            e[Pl] = null
        }
    }
    ;
    function ci(t) {
        this._internalRoot = t
    }
    ci.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = vf();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var l = 0; l < Nl.length && e !== 0 && e < Nl[l].priority; l++)
                ;
            Nl.splice(l, 0, t),
            l === 0 && ih(t)
        }
    }
    ;
    var rh = i.version;
    if (rh !== "19.2.3")
        throw Error(c(527, rh, "19.2.3"));
    j.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","),
            Error(c(268, t)));
        return t = g(e),
        t = t !== null ? T(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var jp = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: _,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!si.isDisabled && si.supportsFiber)
            try {
                Va = si.inject(jp),
                re = si
            } catch {}
    }
    return Hn.createRoot = function(t, e) {
        if (!r(t))
            throw Error(c(299));
        var l = !1
          , a = ""
          , n = yo
          , u = vo
          , o = So;
        return e != null && (e.unstable_strictMode === !0 && (l = !0),
        e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
        e.onCaughtError !== void 0 && (u = e.onCaughtError),
        e.onRecoverableError !== void 0 && (o = e.onRecoverableError)),
        e = Pd(t, 1, !1, null, null, l, a, null, n, u, o, fh),
        t[Pl] = e.current,
        vs(t),
        new js(e)
    }
    ,
    Hn.hydrateRoot = function(t, e, l) {
        if (!r(t))
            throw Error(c(299));
        var a = !1
          , n = ""
          , u = yo
          , o = vo
          , h = So
          , v = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0),
        l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
        l.onCaughtError !== void 0 && (o = l.onCaughtError),
        l.onRecoverableError !== void 0 && (h = l.onRecoverableError),
        l.formState !== void 0 && (v = l.formState)),
        e = Pd(t, 1, !0, e, l ?? null, a, n, v, u, o, h, fh),
        e.context = Id(null),
        l = e.current,
        a = ve(),
        a = zi(a),
        n = gl(a),
        n.callback = null,
        pl(l, n, a),
        l = a,
        e.current.lanes = l,
        Xa(e, l),
        we(e),
        t[Pl] = e.current,
        vs(t),
        new ci(e)
    }
    ,
    Hn.version = "19.2.3",
    Hn
}
var bh;
function Fp() {
    if (bh)
        return Ys.exports;
    bh = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (i) {
                console.error(i)
            }
    }
    return f(),
    Ys.exports = kp(),
    Ys.exports
}
var Wp = Fp();
var Eh = "popstate";
function Pp(f={}) {
    function i(c, r) {
        let {pathname: d, search: m, hash: p} = c.location;
        return ks("", {
            pathname: d,
            search: m,
            hash: p
        }, r.state && r.state.usr || null, r.state && r.state.key || "default")
    }
    function s(c, r) {
        return typeof r == "string" ? r : Vn(r)
    }
    return ty(i, s, null, f)
}
function _t(f, i) {
    if (f === !1 || f === null || typeof f > "u")
        throw new Error(i)
}
function De(f, i) {
    if (!f) {
        typeof console < "u" && console.warn(i);
        try {
            throw new Error(i)
        } catch {}
    }
}
function Ip() {
    return Math.random().toString(36).substring(2, 10)
}
function Th(f, i) {
    return {
        usr: f.state,
        key: f.key,
        idx: i
    }
}
function ks(f, i, s=null, c) {
    return {
        pathname: typeof f == "string" ? f : f.pathname,
        search: "",
        hash: "",
        ...typeof i == "string" ? ja(i) : i,
        state: s,
        key: i && i.key || c || Ip()
    }
}
function Vn({pathname: f="/", search: i="", hash: s=""}) {
    return i && i !== "?" && (f += i.charAt(0) === "?" ? i : "?" + i),
    s && s !== "#" && (f += s.charAt(0) === "#" ? s : "#" + s),
    f
}
function ja(f) {
    let i = {};
    if (f) {
        let s = f.indexOf("#");
        s >= 0 && (i.hash = f.substring(s),
        f = f.substring(0, s));
        let c = f.indexOf("?");
        c >= 0 && (i.search = f.substring(c),
        f = f.substring(0, c)),
        f && (i.pathname = f)
    }
    return i
}
function ty(f, i, s, c={}) {
    let {window: r=document.defaultView, v5Compat: d=!1} = c
      , m = r.history
      , p = "POP"
      , y = null
      , g = T();
    g == null && (g = 0,
    m.replaceState({
        ...m.state,
        idx: g
    }, ""));
    function T() {
        return (m.state || {
            idx: null
        }).idx
    }
    function S() {
        p = "POP";
        let Y = T()
          , V = Y == null ? null : Y - g;
        g = Y,
        y && y({
            action: p,
            location: G.location,
            delta: V
        })
    }
    function D(Y, V) {
        p = "PUSH";
        let q = ks(G.location, Y, V);
        g = T() + 1;
        let K = Th(q, g)
          , ut = G.createHref(q);
        try {
            m.pushState(K, "", ut)
        } catch (st) {
            if (st instanceof DOMException && st.name === "DataCloneError")
                throw st;
            r.location.assign(ut)
        }
        d && y && y({
            action: p,
            location: G.location,
            delta: 1
        })
    }
    function B(Y, V) {
        p = "REPLACE";
        let q = ks(G.location, Y, V);
        g = T();
        let K = Th(q, g)
          , ut = G.createHref(q);
        m.replaceState(K, "", ut),
        d && y && y({
            action: p,
            location: G.location,
            delta: 0
        })
    }
    function H(Y) {
        return ey(Y)
    }
    let G = {
        get action() {
            return p
        },
        get location() {
            return f(r, m)
        },
        listen(Y) {
            if (y)
                throw new Error("A history only accepts one active listener");
            return r.addEventListener(Eh, S),
            y = Y,
            () => {
                r.removeEventListener(Eh, S),
                y = null
            }
        },
        createHref(Y) {
            return i(r, Y)
        },
        createURL: H,
        encodeLocation(Y) {
            let V = H(Y);
            return {
                pathname: V.pathname,
                search: V.search,
                hash: V.hash
            }
        },
        push: D,
        replace: B,
        go(Y) {
            return m.go(Y)
        }
    };
    return G
}
function ey(f, i=!1) {
    let s = "http://localhost";
    typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href),
    _t(s, "No window.location.(origin|href) available to create URL");
    let c = typeof f == "string" ? f : Vn(f);
    return c = c.replace(/ $/, "%20"),
    !i && c.startsWith("//") && (c = s + c),
    new URL(c,s)
}
function Xh(f, i, s="/") {
    return ly(f, i, s, !1)
}
function ly(f, i, s, c) {
    let r = typeof i == "string" ? ja(i) : i
      , d = il(r.pathname || "/", s);
    if (d == null)
        return null;
    let m = Qh(f);
    ay(m);
    let p = null;
    for (let y = 0; p == null && y < m.length; ++y) {
        let g = my(d);
        p = dy(m[y], g, c)
    }
    return p
}
function Qh(f, i=[], s=[], c="", r=!1) {
    let d = (m, p, y=r, g) => {
        let T = {
            relativePath: g === void 0 ? m.path || "" : g,
            caseSensitive: m.caseSensitive === !0,
            childrenIndex: p,
            route: m
        };
        if (T.relativePath.startsWith("/")) {
            if (!T.relativePath.startsWith(c) && y)
                return;
            _t(T.relativePath.startsWith(c), `Absolute route path "${T.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            T.relativePath = T.relativePath.slice(c.length)
        }
        let S = ul([c, T.relativePath])
          , D = s.concat(T);
        m.children && m.children.length > 0 && (_t(m.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${S}".`),
        Qh(m.children, i, D, S, y)),
        !(m.path == null && !m.index) && i.push({
            path: S,
            score: ry(S, m.index),
            routesMeta: D
        })
    }
    ;
    return f.forEach( (m, p) => {
        if (m.path === "" || !m.path?.includes("?"))
            d(m, p);
        else
            for (let y of Zh(m.path))
                d(m, p, !0, y)
    }
    ),
    i
}
function Zh(f) {
    let i = f.split("/");
    if (i.length === 0)
        return [];
    let[s,...c] = i
      , r = s.endsWith("?")
      , d = s.replace(/\?$/, "");
    if (c.length === 0)
        return r ? [d, ""] : [d];
    let m = Zh(c.join("/"))
      , p = [];
    return p.push(...m.map(y => y === "" ? d : [d, y].join("/"))),
    r && p.push(...m),
    p.map(y => f.startsWith("/") && y === "" ? "/" : y)
}
function ay(f) {
    f.sort( (i, s) => i.score !== s.score ? s.score - i.score : oy(i.routesMeta.map(c => c.childrenIndex), s.routesMeta.map(c => c.childrenIndex)))
}
var ny = /^:[\w-]+$/
  , uy = 3
  , iy = 2
  , cy = 1
  , sy = 10
  , fy = -2
  , Oh = f => f === "*";
function ry(f, i) {
    let s = f.split("/")
      , c = s.length;
    return s.some(Oh) && (c += fy),
    i && (c += iy),
    s.filter(r => !Oh(r)).reduce( (r, d) => r + (ny.test(d) ? uy : d === "" ? cy : sy), c)
}
function oy(f, i) {
    return f.length === i.length && f.slice(0, -1).every( (c, r) => c === i[r]) ? f[f.length - 1] - i[i.length - 1] : 0
}
function dy(f, i, s=!1) {
    let {routesMeta: c} = f
      , r = {}
      , d = "/"
      , m = [];
    for (let p = 0; p < c.length; ++p) {
        let y = c[p]
          , g = p === c.length - 1
          , T = d === "/" ? i : i.slice(d.length) || "/"
          , S = hi({
            path: y.relativePath,
            caseSensitive: y.caseSensitive,
            end: g
        }, T)
          , D = y.route;
        if (!S && g && s && !c[c.length - 1].route.index && (S = hi({
            path: y.relativePath,
            caseSensitive: y.caseSensitive,
            end: !1
        }, T)),
        !S)
            return null;
        Object.assign(r, S.params),
        m.push({
            params: r,
            pathname: ul([d, S.pathname]),
            pathnameBase: vy(ul([d, S.pathnameBase])),
            route: D
        }),
        S.pathnameBase !== "/" && (d = ul([d, S.pathnameBase]))
    }
    return m
}
function hi(f, i) {
    typeof f == "string" && (f = {
        path: f,
        caseSensitive: !1,
        end: !0
    });
    let[s,c] = hy(f.path, f.caseSensitive, f.end)
      , r = i.match(s);
    if (!r)
        return null;
    let d = r[0]
      , m = d.replace(/(.)\/+$/, "$1")
      , p = r.slice(1);
    return {
        params: c.reduce( (g, {paramName: T, isOptional: S}, D) => {
            if (T === "*") {
                let H = p[D] || "";
                m = d.slice(0, d.length - H.length).replace(/(.)\/+$/, "$1")
            }
            const B = p[D];
            return S && !B ? g[T] = void 0 : g[T] = (B || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: d,
        pathnameBase: m,
        pattern: f
    }
}
function hy(f, i=!1, s=!0) {
    De(f === "*" || !f.endsWith("*") || f.endsWith("/*"), `Route path "${f}" will be treated as if it were "${f.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${f.replace(/\*$/, "/*")}".`);
    let c = []
      , r = "^" + f.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (m, p, y) => (c.push({
        paramName: p,
        isOptional: y != null
    }),
    y ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return f.endsWith("*") ? (c.push({
        paramName: "*"
    }),
    r += f === "*" || f === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? r += "\\/*$" : f !== "" && f !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r,i ? void 0 : "i"), c]
}
function my(f) {
    try {
        return f.split("/").map(i => decodeURIComponent(i).replace(/\//g, "%2F")).join("/")
    } catch (i) {
        return De(!1, `The URL path "${f}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),
        f
    }
}
function il(f, i) {
    if (i === "/")
        return f;
    if (!f.toLowerCase().startsWith(i.toLowerCase()))
        return null;
    let s = i.endsWith("/") ? i.length - 1 : i.length
      , c = f.charAt(s);
    return c && c !== "/" ? null : f.slice(s) || "/"
}
var Kh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , gy = f => Kh.test(f);
function py(f, i="/") {
    let {pathname: s, search: c="", hash: r=""} = typeof f == "string" ? ja(f) : f, d;
    if (s)
        if (gy(s))
            d = s;
        else {
            if (s.includes("//")) {
                let m = s;
                s = s.replace(/\/\/+/g, "/"),
                De(!1, `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${s}`)
            }
            s.startsWith("/") ? d = Rh(s.substring(1), "/") : d = Rh(s, i)
        }
    else
        d = i;
    return {
        pathname: d,
        search: Sy(c),
        hash: by(r)
    }
}
function Rh(f, i) {
    let s = i.replace(/\/+$/, "").split("/");
    return f.split("/").forEach(r => {
        r === ".." ? s.length > 1 && s.pop() : r !== "." && s.push(r)
    }
    ),
    s.length > 1 ? s.join("/") : "/"
}
function Qs(f, i, s, c) {
    return `Cannot include a '${f}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function yy(f) {
    return f.filter( (i, s) => s === 0 || i.route.path && i.route.path.length > 0)
}
function ef(f) {
    let i = yy(f);
    return i.map( (s, c) => c === i.length - 1 ? s.pathname : s.pathnameBase)
}
function lf(f, i, s, c=!1) {
    let r;
    typeof f == "string" ? r = ja(f) : (r = {
        ...f
    },
    _t(!r.pathname || !r.pathname.includes("?"), Qs("?", "pathname", "search", r)),
    _t(!r.pathname || !r.pathname.includes("#"), Qs("#", "pathname", "hash", r)),
    _t(!r.search || !r.search.includes("#"), Qs("#", "search", "hash", r)));
    let d = f === "" || r.pathname === "", m = d ? "/" : r.pathname, p;
    if (m == null)
        p = s;
    else {
        let S = i.length - 1;
        if (!c && m.startsWith("..")) {
            let D = m.split("/");
            for (; D[0] === ".."; )
                D.shift(),
                S -= 1;
            r.pathname = D.join("/")
        }
        p = S >= 0 ? i[S] : "/"
    }
    let y = py(r, p)
      , g = m && m !== "/" && m.endsWith("/")
      , T = (d || m === ".") && s.endsWith("/");
    return !y.pathname.endsWith("/") && (g || T) && (y.pathname += "/"),
    y
}
var ul = f => f.join("/").replace(/\/\/+/g, "/")
  , vy = f => f.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Sy = f => !f || f === "?" ? "" : f.startsWith("?") ? f : "?" + f
  , by = f => !f || f === "#" ? "" : f.startsWith("#") ? f : "#" + f
  , Ey = class {
    constructor(f, i, s, c=!1) {
        this.status = f,
        this.statusText = i || "",
        this.internal = c,
        s instanceof Error ? (this.data = s.toString(),
        this.error = s) : this.data = s
    }
}
;
function Ty(f) {
    return f != null && typeof f.status == "number" && typeof f.statusText == "string" && typeof f.internal == "boolean" && "data"in f
}
function Oy(f) {
    return f.map(i => i.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var Jh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function $h(f, i) {
    let s = f;
    if (typeof s != "string" || !Kh.test(s))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: s
        };
    let c = s
      , r = !1;
    if (Jh)
        try {
            let d = new URL(window.location.href)
              , m = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s)
              , p = il(m.pathname, i);
            m.origin === d.origin && p != null ? s = p + m.search + m.hash : r = !0
        } catch {
            De(!1, `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: c,
        isExternal: r,
        to: s
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var kh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(kh);
var Ry = ["GET", ...kh];
new Set(Ry);
var wa = N.createContext(null);
wa.displayName = "DataRouter";
var yi = N.createContext(null);
yi.displayName = "DataRouterState";
var xy = N.createContext(!1)
  , Fh = N.createContext({
    isTransitioning: !1
});
Fh.displayName = "ViewTransition";
var Ay = N.createContext(new Map);
Ay.displayName = "Fetchers";
var zy = N.createContext(null);
zy.displayName = "Await";
var Se = N.createContext(null);
Se.displayName = "Navigation";
var Xn = N.createContext(null);
Xn.displayName = "Location";
var Ye = N.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Ye.displayName = "Route";
var af = N.createContext(null);
af.displayName = "RouteError";
var Wh = "REACT_ROUTER_ERROR"
  , _y = "REDIRECT"
  , Cy = "ROUTE_ERROR_RESPONSE";
function Ny(f) {
    if (f.startsWith(`${Wh}:${_y}:{`))
        try {
            let i = JSON.parse(f.slice(28));
            if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.location == "string" && typeof i.reloadDocument == "boolean" && typeof i.replace == "boolean")
                return i
        } catch {}
}
function Dy(f) {
    if (f.startsWith(`${Wh}:${Cy}:{`))
        try {
            let i = JSON.parse(f.slice(40));
            if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string")
                return new Ey(i.status,i.statusText,i.data)
        } catch {}
}
function My(f, {relative: i}={}) {
    _t(qa(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: s, navigator: c} = N.useContext(Se)
      , {hash: r, pathname: d, search: m} = Qn(f, {
        relative: i
    })
      , p = d;
    return s !== "/" && (p = d === "/" ? s : ul([s, d])),
    c.createHref({
        pathname: p,
        search: m,
        hash: r
    })
}
function qa() {
    return N.useContext(Xn) != null
}
function Ml() {
    return _t(qa(), "useLocation() may be used only in the context of a <Router> component."),
    N.useContext(Xn).location
}
var Ph = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ih(f) {
    N.useContext(Se).static || N.useLayoutEffect(f)
}
function tm() {
    let {isDataRoute: f} = N.useContext(Ye);
    return f ? Zy() : Uy()
}
function Uy() {
    _t(qa(), "useNavigate() may be used only in the context of a <Router> component.");
    let f = N.useContext(wa)
      , {basename: i, navigator: s} = N.useContext(Se)
      , {matches: c} = N.useContext(Ye)
      , {pathname: r} = Ml()
      , d = JSON.stringify(ef(c))
      , m = N.useRef(!1);
    return Ih( () => {
        m.current = !0
    }
    ),
    N.useCallback( (y, g={}) => {
        if (De(m.current, Ph),
        !m.current)
            return;
        if (typeof y == "number") {
            s.go(y);
            return
        }
        let T = lf(y, JSON.parse(d), r, g.relative === "path");
        f == null && i !== "/" && (T.pathname = T.pathname === "/" ? i : ul([i, T.pathname])),
        (g.replace ? s.replace : s.push)(T, g.state, g)
    }
    , [i, s, d, r, f])
}
N.createContext(null);
function Qn(f, {relative: i}={}) {
    let {matches: s} = N.useContext(Ye)
      , {pathname: c} = Ml()
      , r = JSON.stringify(ef(s));
    return N.useMemo( () => lf(f, JSON.parse(r), c, i === "path"), [f, r, c, i])
}
function Ly(f, i) {
    return em(f, i)
}
function em(f, i, s, c, r) {
    _t(qa(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: d} = N.useContext(Se)
      , {matches: m} = N.useContext(Ye)
      , p = m[m.length - 1]
      , y = p ? p.params : {}
      , g = p ? p.pathname : "/"
      , T = p ? p.pathnameBase : "/"
      , S = p && p.route;
    {
        let q = S && S.path || "";
        am(g, !S || q.endsWith("*") || q.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q === "/" ? "*" : `${q}/*`}">.`)
    }
    let D = Ml(), B;
    if (i) {
        let q = typeof i == "string" ? ja(i) : i;
        _t(T === "/" || q.pathname?.startsWith(T), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${q.pathname}" was given in the \`location\` prop.`),
        B = q
    } else
        B = D;
    let H = B.pathname || "/"
      , G = H;
    if (T !== "/") {
        let q = T.replace(/^\//, "").split("/");
        G = "/" + H.replace(/^\//, "").split("/").slice(q.length).join("/")
    }
    let Y = Xh(f, {
        pathname: G
    });
    De(S || Y != null, `No routes matched location "${B.pathname}${B.search}${B.hash}" `),
    De(Y == null || Y[Y.length - 1].route.element !== void 0 || Y[Y.length - 1].route.Component !== void 0 || Y[Y.length - 1].route.lazy !== void 0, `Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let V = qy(Y && Y.map(q => Object.assign({}, q, {
        params: Object.assign({}, y, q.params),
        pathname: ul([T, d.encodeLocation ? d.encodeLocation(q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : q.pathname]),
        pathnameBase: q.pathnameBase === "/" ? T : ul([T, d.encodeLocation ? d.encodeLocation(q.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : q.pathnameBase])
    })), m, s, c, r);
    return i && V ? N.createElement(Xn.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...B
            },
            navigationType: "POP"
        }
    }, V) : V
}
function Hy() {
    let f = Qy()
      , i = Ty(f) ? `${f.status} ${f.statusText}` : f instanceof Error ? f.message : JSON.stringify(f)
      , s = f instanceof Error ? f.stack : null
      , c = "rgba(200,200,200, 0.5)"
      , r = {
        padding: "0.5rem",
        backgroundColor: c
    }
      , d = {
        padding: "2px 4px",
        backgroundColor: c
    }
      , m = null;
    return console.error("Error handled by React Router default ErrorBoundary:", f),
    m = N.createElement(N.Fragment, null, N.createElement("p", null, "💿 Hey developer 👋"), N.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", N.createElement("code", {
        style: d
    }, "ErrorBoundary"), " or", " ", N.createElement("code", {
        style: d
    }, "errorElement"), " prop on your route.")),
    N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, i), s ? N.createElement("pre", {
        style: r
    }, s) : null, m)
}
var By = N.createElement(Hy, null)
  , lm = class extends N.Component {
    constructor(f) {
        super(f),
        this.state = {
            location: f.location,
            revalidation: f.revalidation,
            error: f.error
        }
    }
    static getDerivedStateFromError(f) {
        return {
            error: f
        }
    }
    static getDerivedStateFromProps(f, i) {
        return i.location !== f.location || i.revalidation !== "idle" && f.revalidation === "idle" ? {
            error: f.error,
            location: f.location,
            revalidation: f.revalidation
        } : {
            error: f.error !== void 0 ? f.error : i.error,
            location: i.location,
            revalidation: f.revalidation || i.revalidation
        }
    }
    componentDidCatch(f, i) {
        this.props.onError ? this.props.onError(f, i) : console.error("React Router caught the following error during render", f)
    }
    render() {
        let f = this.state.error;
        if (this.context && typeof f == "object" && f && "digest"in f && typeof f.digest == "string") {
            const s = Dy(f.digest);
            s && (f = s)
        }
        let i = f !== void 0 ? N.createElement(Ye.Provider, {
            value: this.props.routeContext
        }, N.createElement(af.Provider, {
            value: f,
            children: this.props.component
        })) : this.props.children;
        return this.context ? N.createElement(jy, {
            error: f
        }, i) : i
    }
}
;
lm.contextType = xy;
var Zs = new WeakMap;
function jy({children: f, error: i}) {
    let {basename: s} = N.useContext(Se);
    if (typeof i == "object" && i && "digest"in i && typeof i.digest == "string") {
        let c = Ny(i.digest);
        if (c) {
            let r = Zs.get(i);
            if (r)
                throw r;
            let d = $h(c.location, s);
            if (Jh && !Zs.get(i))
                if (d.isExternal || c.reloadDocument)
                    window.location.href = d.absoluteURL || d.to;
                else {
                    const m = Promise.resolve().then( () => window.__reactRouterDataRouter.navigate(d.to, {
                        replace: c.replace
                    }));
                    throw Zs.set(i, m),
                    m
                }
            return N.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${d.absoluteURL || d.to}`
            })
        }
    }
    return f
}
function wy({routeContext: f, match: i, children: s}) {
    let c = N.useContext(wa);
    return c && c.static && c.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = i.route.id),
    N.createElement(Ye.Provider, {
        value: f
    }, s)
}
function qy(f, i=[], s=null, c=null, r=null) {
    if (f == null) {
        if (!s)
            return null;
        if (s.errors)
            f = s.matches;
        else if (i.length === 0 && !s.initialized && s.matches.length > 0)
            f = s.matches;
        else
            return null
    }
    let d = f
      , m = s?.errors;
    if (m != null) {
        let T = d.findIndex(S => S.route.id && m?.[S.route.id] !== void 0);
        _t(T >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),
        d = d.slice(0, Math.min(d.length, T + 1))
    }
    let p = !1
      , y = -1;
    if (s)
        for (let T = 0; T < d.length; T++) {
            let S = d[T];
            if ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (y = T),
            S.route.id) {
                let {loaderData: D, errors: B} = s
                  , H = S.route.loader && !D.hasOwnProperty(S.route.id) && (!B || B[S.route.id] === void 0);
                if (S.route.lazy || H) {
                    p = !0,
                    y >= 0 ? d = d.slice(0, y + 1) : d = [d[0]];
                    break
                }
            }
        }
    let g = s && c ? (T, S) => {
        c(T, {
            location: s.location,
            params: s.matches?.[0]?.params ?? {},
            unstable_pattern: Oy(s.matches),
            errorInfo: S
        })
    }
    : void 0;
    return d.reduceRight( (T, S, D) => {
        let B, H = !1, G = null, Y = null;
        s && (B = m && S.route.id ? m[S.route.id] : void 0,
        G = S.route.errorElement || By,
        p && (y < 0 && D === 0 ? (am("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        H = !0,
        Y = null) : y === D && (H = !0,
        Y = S.route.hydrateFallbackElement || null)));
        let V = i.concat(d.slice(0, D + 1))
          , q = () => {
            let K;
            return B ? K = G : H ? K = Y : S.route.Component ? K = N.createElement(S.route.Component, null) : S.route.element ? K = S.route.element : K = T,
            N.createElement(wy, {
                match: S,
                routeContext: {
                    outlet: T,
                    matches: V,
                    isDataRoute: s != null
                },
                children: K
            })
        }
        ;
        return s && (S.route.ErrorBoundary || S.route.errorElement || D === 0) ? N.createElement(lm, {
            location: s.location,
            revalidation: s.revalidation,
            component: G,
            error: B,
            children: q(),
            routeContext: {
                outlet: null,
                matches: V,
                isDataRoute: !0
            },
            onError: g
        }) : q()
    }
    , null)
}
function nf(f) {
    return `${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Yy(f) {
    let i = N.useContext(wa);
    return _t(i, nf(f)),
    i
}
function Vy(f) {
    let i = N.useContext(yi);
    return _t(i, nf(f)),
    i
}
function Gy(f) {
    let i = N.useContext(Ye);
    return _t(i, nf(f)),
    i
}
function uf(f) {
    let i = Gy(f)
      , s = i.matches[i.matches.length - 1];
    return _t(s.route.id, `${f} can only be used on routes that contain a unique "id"`),
    s.route.id
}
function Xy() {
    return uf("useRouteId")
}
function Qy() {
    let f = N.useContext(af)
      , i = Vy("useRouteError")
      , s = uf("useRouteError");
    return f !== void 0 ? f : i.errors?.[s]
}
function Zy() {
    let {router: f} = Yy("useNavigate")
      , i = uf("useNavigate")
      , s = N.useRef(!1);
    return Ih( () => {
        s.current = !0
    }
    ),
    N.useCallback(async (r, d={}) => {
        De(s.current, Ph),
        s.current && (typeof r == "number" ? await f.navigate(r) : await f.navigate(r, {
            fromRouteId: i,
            ...d
        }))
    }
    , [f, i])
}
var xh = {};
function am(f, i, s) {
    !i && !xh[f] && (xh[f] = !0,
    De(!1, s))
}
N.memo(Ky);
function Ky({routes: f, future: i, state: s, onError: c}) {
    return em(f, void 0, s, c, i)
}
function Ah({to: f, replace: i, state: s, relative: c}) {
    _t(qa(), "<Navigate> may be used only in the context of a <Router> component.");
    let {static: r} = N.useContext(Se);
    De(!r, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let {matches: d} = N.useContext(Ye)
      , {pathname: m} = Ml()
      , p = tm()
      , y = lf(f, ef(d), m, c === "path")
      , g = JSON.stringify(y);
    return N.useEffect( () => {
        p(JSON.parse(g), {
            replace: i,
            state: s,
            relative: c
        })
    }
    , [p, g, c, i, s]),
    null
}
function wn(f) {
    _t(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function Jy({basename: f="/", children: i=null, location: s, navigationType: c="POP", navigator: r, static: d=!1, unstable_useTransitions: m}) {
    _t(!qa(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let p = f.replace(/^\/*/, "/")
      , y = N.useMemo( () => ({
        basename: p,
        navigator: r,
        static: d,
        unstable_useTransitions: m,
        future: {}
    }), [p, r, d, m]);
    typeof s == "string" && (s = ja(s));
    let {pathname: g="/", search: T="", hash: S="", state: D=null, key: B="default"} = s
      , H = N.useMemo( () => {
        let G = il(g, p);
        return G == null ? null : {
            location: {
                pathname: G,
                search: T,
                hash: S,
                state: D,
                key: B
            },
            navigationType: c
        }
    }
    , [p, g, T, S, D, B, c]);
    return De(H != null, `<Router basename="${p}"> is not able to match the URL "${g}${T}${S}" because it does not start with the basename, so the <Router> won't render anything.`),
    H == null ? null : N.createElement(Se.Provider, {
        value: y
    }, N.createElement(Xn.Provider, {
        children: i,
        value: H
    }))
}
function $y({children: f, location: i}) {
    return Ly(Fs(f), i)
}
function Fs(f, i=[]) {
    let s = [];
    return N.Children.forEach(f, (c, r) => {
        if (!N.isValidElement(c))
            return;
        let d = [...i, r];
        if (c.type === N.Fragment) {
            s.push.apply(s, Fs(c.props.children, d));
            return
        }
        _t(c.type === wn, `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        _t(!c.props.index || !c.props.children, "An index route cannot have child routes.");
        let m = {
            id: c.props.id || d.join("-"),
            caseSensitive: c.props.caseSensitive,
            element: c.props.element,
            Component: c.props.Component,
            index: c.props.index,
            path: c.props.path,
            middleware: c.props.middleware,
            loader: c.props.loader,
            action: c.props.action,
            hydrateFallbackElement: c.props.hydrateFallbackElement,
            HydrateFallback: c.props.HydrateFallback,
            errorElement: c.props.errorElement,
            ErrorBoundary: c.props.ErrorBoundary,
            hasErrorBoundary: c.props.hasErrorBoundary === !0 || c.props.ErrorBoundary != null || c.props.errorElement != null,
            shouldRevalidate: c.props.shouldRevalidate,
            handle: c.props.handle,
            lazy: c.props.lazy
        };
        c.props.children && (m.children = Fs(c.props.children, d)),
        s.push(m)
    }
    ),
    s
}
var oi = "get"
  , di = "application/x-www-form-urlencoded";
function vi(f) {
    return typeof HTMLElement < "u" && f instanceof HTMLElement
}
function ky(f) {
    return vi(f) && f.tagName.toLowerCase() === "button"
}
function Fy(f) {
    return vi(f) && f.tagName.toLowerCase() === "form"
}
function Wy(f) {
    return vi(f) && f.tagName.toLowerCase() === "input"
}
function Py(f) {
    return !!(f.metaKey || f.altKey || f.ctrlKey || f.shiftKey)
}
function Iy(f, i) {
    return f.button === 0 && (!i || i === "_self") && !Py(f)
}
var fi = null;
function tv() {
    if (fi === null)
        try {
            new FormData(document.createElement("form"),0),
            fi = !1
        } catch {
            fi = !0
        }
    return fi
}
var ev = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Ks(f) {
    return f != null && !ev.has(f) ? (De(!1, `"${f}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${di}"`),
    null) : f
}
function lv(f, i) {
    let s, c, r, d, m;
    if (Fy(f)) {
        let p = f.getAttribute("action");
        c = p ? il(p, i) : null,
        s = f.getAttribute("method") || oi,
        r = Ks(f.getAttribute("enctype")) || di,
        d = new FormData(f)
    } else if (ky(f) || Wy(f) && (f.type === "submit" || f.type === "image")) {
        let p = f.form;
        if (p == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let y = f.getAttribute("formaction") || p.getAttribute("action");
        if (c = y ? il(y, i) : null,
        s = f.getAttribute("formmethod") || p.getAttribute("method") || oi,
        r = Ks(f.getAttribute("formenctype")) || Ks(p.getAttribute("enctype")) || di,
        d = new FormData(p,f),
        !tv()) {
            let {name: g, type: T, value: S} = f;
            if (T === "image") {
                let D = g ? `${g}.` : "";
                d.append(`${D}x`, "0"),
                d.append(`${D}y`, "0")
            } else
                g && d.append(g, S)
        }
    } else {
        if (vi(f))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        s = oi,
        c = null,
        r = di,
        m = f
    }
    return d && r === "text/plain" && (m = d,
    d = void 0),
    {
        action: c,
        method: s.toLowerCase(),
        encType: r,
        formData: d,
        body: m
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function cf(f, i) {
    if (f === !1 || f === null || typeof f > "u")
        throw new Error(i)
}
function av(f, i, s) {
    let c = typeof f == "string" ? new URL(f,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : f;
    return c.pathname === "/" ? c.pathname = `_root.${s}` : i && il(c.pathname, i) === "/" ? c.pathname = `${i.replace(/\/$/, "")}/_root.${s}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${s}`,
    c
}
async function nv(f, i) {
    if (f.id in i)
        return i[f.id];
    try {
        let s = await import(f.module);
        return i[f.id] = s,
        s
    } catch (s) {
        return console.error(`Error loading route module \`${f.module}\`, reloading page...`),
        console.error(s),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function uv(f) {
    return f == null ? !1 : f.href == null ? f.rel === "preload" && typeof f.imageSrcSet == "string" && typeof f.imageSizes == "string" : typeof f.rel == "string" && typeof f.href == "string"
}
async function iv(f, i, s) {
    let c = await Promise.all(f.map(async r => {
        let d = i.routes[r.route.id];
        if (d) {
            let m = await nv(d, s);
            return m.links ? m.links() : []
        }
        return []
    }
    ));
    return rv(c.flat(1).filter(uv).filter(r => r.rel === "stylesheet" || r.rel === "preload").map(r => r.rel === "stylesheet" ? {
        ...r,
        rel: "prefetch",
        as: "style"
    } : {
        ...r,
        rel: "prefetch"
    }))
}
function zh(f, i, s, c, r, d) {
    let m = (y, g) => s[g] ? y.route.id !== s[g].route.id : !0
      , p = (y, g) => s[g].pathname !== y.pathname || s[g].route.path?.endsWith("*") && s[g].params["*"] !== y.params["*"];
    return d === "assets" ? i.filter( (y, g) => m(y, g) || p(y, g)) : d === "data" ? i.filter( (y, g) => {
        let T = c.routes[y.route.id];
        if (!T || !T.hasLoader)
            return !1;
        if (m(y, g) || p(y, g))
            return !0;
        if (y.route.shouldRevalidate) {
            let S = y.route.shouldRevalidate({
                currentUrl: new URL(r.pathname + r.search + r.hash,window.origin),
                currentParams: s[0]?.params || {},
                nextUrl: new URL(f,window.origin),
                nextParams: y.params,
                defaultShouldRevalidate: !0
            });
            if (typeof S == "boolean")
                return S
        }
        return !0
    }
    ) : []
}
function cv(f, i, {includeHydrateFallback: s}={}) {
    return sv(f.map(c => {
        let r = i.routes[c.route.id];
        if (!r)
            return [];
        let d = [r.module];
        return r.clientActionModule && (d = d.concat(r.clientActionModule)),
        r.clientLoaderModule && (d = d.concat(r.clientLoaderModule)),
        s && r.hydrateFallbackModule && (d = d.concat(r.hydrateFallbackModule)),
        r.imports && (d = d.concat(r.imports)),
        d
    }
    ).flat(1))
}
function sv(f) {
    return [...new Set(f)]
}
function fv(f) {
    let i = {}
      , s = Object.keys(f).sort();
    for (let c of s)
        i[c] = f[c];
    return i
}
function rv(f, i) {
    let s = new Set;
    return new Set(i),
    f.reduce( (c, r) => {
        let d = JSON.stringify(fv(r));
        return s.has(d) || (s.add(d),
        c.push({
            key: d,
            link: r
        })),
        c
    }
    , [])
}
function nm() {
    let f = N.useContext(wa);
    return cf(f, "You must render this element inside a <DataRouterContext.Provider> element"),
    f
}
function ov() {
    let f = N.useContext(yi);
    return cf(f, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    f
}
var sf = N.createContext(void 0);
sf.displayName = "FrameworkContext";
function um() {
    let f = N.useContext(sf);
    return cf(f, "You must render this element inside a <HydratedRouter> element"),
    f
}
function dv(f, i) {
    let s = N.useContext(sf)
      , [c,r] = N.useState(!1)
      , [d,m] = N.useState(!1)
      , {onFocus: p, onBlur: y, onMouseEnter: g, onMouseLeave: T, onTouchStart: S} = i
      , D = N.useRef(null);
    N.useEffect( () => {
        if (f === "render" && m(!0),
        f === "viewport") {
            let G = V => {
                V.forEach(q => {
                    m(q.isIntersecting)
                }
                )
            }
              , Y = new IntersectionObserver(G,{
                threshold: .5
            });
            return D.current && Y.observe(D.current),
            () => {
                Y.disconnect()
            }
        }
    }
    , [f]),
    N.useEffect( () => {
        if (c) {
            let G = setTimeout( () => {
                m(!0)
            }
            , 100);
            return () => {
                clearTimeout(G)
            }
        }
    }
    , [c]);
    let B = () => {
        r(!0)
    }
      , H = () => {
        r(!1),
        m(!1)
    }
    ;
    return s ? f !== "intent" ? [d, D, {}] : [d, D, {
        onFocus: Bn(p, B),
        onBlur: Bn(y, H),
        onMouseEnter: Bn(g, B),
        onMouseLeave: Bn(T, H),
        onTouchStart: Bn(S, B)
    }] : [!1, D, {}]
}
function Bn(f, i) {
    return s => {
        f && f(s),
        s.defaultPrevented || i(s)
    }
}
function hv({page: f, ...i}) {
    let {router: s} = nm()
      , c = N.useMemo( () => Xh(s.routes, f, s.basename), [s.routes, f, s.basename]);
    return c ? N.createElement(gv, {
        page: f,
        matches: c,
        ...i
    }) : null
}
function mv(f) {
    let {manifest: i, routeModules: s} = um()
      , [c,r] = N.useState([]);
    return N.useEffect( () => {
        let d = !1;
        return iv(f, i, s).then(m => {
            d || r(m)
        }
        ),
        () => {
            d = !0
        }
    }
    , [f, i, s]),
    c
}
function gv({page: f, matches: i, ...s}) {
    let c = Ml()
      , {manifest: r, routeModules: d} = um()
      , {basename: m} = nm()
      , {loaderData: p, matches: y} = ov()
      , g = N.useMemo( () => zh(f, i, y, r, c, "data"), [f, i, y, r, c])
      , T = N.useMemo( () => zh(f, i, y, r, c, "assets"), [f, i, y, r, c])
      , S = N.useMemo( () => {
        if (f === c.pathname + c.search + c.hash)
            return [];
        let H = new Set
          , G = !1;
        if (i.forEach(V => {
            let q = r.routes[V.route.id];
            !q || !q.hasLoader || (!g.some(K => K.route.id === V.route.id) && V.route.id in p && d[V.route.id]?.shouldRevalidate || q.hasClientLoader ? G = !0 : H.add(V.route.id))
        }
        ),
        H.size === 0)
            return [];
        let Y = av(f, m, "data");
        return G && H.size > 0 && Y.searchParams.set("_routes", i.filter(V => H.has(V.route.id)).map(V => V.route.id).join(",")),
        [Y.pathname + Y.search]
    }
    , [m, p, c, r, g, i, f, d])
      , D = N.useMemo( () => cv(T, r), [T, r])
      , B = mv(T);
    return N.createElement(N.Fragment, null, S.map(H => N.createElement("link", {
        key: H,
        rel: "prefetch",
        as: "fetch",
        href: H,
        ...s
    })), D.map(H => N.createElement("link", {
        key: H,
        rel: "modulepreload",
        href: H,
        ...s
    })), B.map( ({key: H, link: G}) => N.createElement("link", {
        key: H,
        nonce: s.nonce,
        ...G
    })))
}
function pv(...f) {
    return i => {
        f.forEach(s => {
            typeof s == "function" ? s(i) : s != null && (s.current = i)
        }
        )
    }
}
var yv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    yv && (window.__reactRouterVersion = "7.11.0")
} catch {}
function vv({basename: f, children: i, unstable_useTransitions: s, window: c}) {
    let r = N.useRef();
    r.current == null && (r.current = Pp({
        window: c,
        v5Compat: !0
    }));
    let d = r.current
      , [m,p] = N.useState({
        action: d.action,
        location: d.location
    })
      , y = N.useCallback(g => {
        s === !1 ? p(g) : N.startTransition( () => p(g))
    }
    , [s]);
    return N.useLayoutEffect( () => d.listen(y), [d, y]),
    N.createElement(Jy, {
        basename: f,
        children: i,
        location: m.location,
        navigationType: m.action,
        navigator: d,
        unstable_useTransitions: s
    })
}
var im = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , cm = N.forwardRef(function({onClick: i, discover: s="render", prefetch: c="none", relative: r, reloadDocument: d, replace: m, state: p, target: y, to: g, preventScrollReset: T, viewTransition: S, unstable_defaultShouldRevalidate: D, ...B}, H) {
    let {basename: G, unstable_useTransitions: Y} = N.useContext(Se)
      , V = typeof g == "string" && im.test(g)
      , q = $h(g, G);
    g = q.to;
    let K = My(g, {
        relative: r
    })
      , [ut,st,pt] = dv(c, B)
      , F = Tv(g, {
        replace: m,
        state: p,
        target: y,
        preventScrollReset: T,
        relative: r,
        viewTransition: S,
        unstable_defaultShouldRevalidate: D,
        unstable_useTransitions: Y
    });
    function At(Ct) {
        i && i(Ct),
        Ct.defaultPrevented || F(Ct)
    }
    let Ot = N.createElement("a", {
        ...B,
        ...pt,
        href: q.absoluteURL || K,
        onClick: q.isExternal || d ? i : At,
        ref: pv(H, st),
        target: y,
        "data-discover": !V && s === "render" ? "true" : void 0
    });
    return ut && !V ? N.createElement(N.Fragment, null, Ot, N.createElement(hv, {
        page: K
    })) : Ot
});
cm.displayName = "Link";
var Sv = N.forwardRef(function({"aria-current": i="page", caseSensitive: s=!1, className: c="", end: r=!1, style: d, to: m, viewTransition: p, children: y, ...g}, T) {
    let S = Qn(m, {
        relative: g.relative
    })
      , D = Ml()
      , B = N.useContext(yi)
      , {navigator: H, basename: G} = N.useContext(Se)
      , Y = B != null && zv(S) && p === !0
      , V = H.encodeLocation ? H.encodeLocation(S).pathname : S.pathname
      , q = D.pathname
      , K = B && B.navigation && B.navigation.location ? B.navigation.location.pathname : null;
    s || (q = q.toLowerCase(),
    K = K ? K.toLowerCase() : null,
    V = V.toLowerCase()),
    K && G && (K = il(K, G) || K);
    const ut = V !== "/" && V.endsWith("/") ? V.length - 1 : V.length;
    let st = q === V || !r && q.startsWith(V) && q.charAt(ut) === "/", pt = K != null && (K === V || !r && K.startsWith(V) && K.charAt(V.length) === "/"), F = {
        isActive: st,
        isPending: pt,
        isTransitioning: Y
    }, At = st ? i : void 0, Ot;
    typeof c == "function" ? Ot = c(F) : Ot = [c, st ? "active" : null, pt ? "pending" : null, Y ? "transitioning" : null].filter(Boolean).join(" ");
    let Ct = typeof d == "function" ? d(F) : d;
    return N.createElement(cm, {
        ...g,
        "aria-current": At,
        className: Ot,
        ref: T,
        style: Ct,
        to: m,
        viewTransition: p
    }, typeof y == "function" ? y(F) : y)
});
Sv.displayName = "NavLink";
var bv = N.forwardRef( ({discover: f="render", fetcherKey: i, navigate: s, reloadDocument: c, replace: r, state: d, method: m=oi, action: p, onSubmit: y, relative: g, preventScrollReset: T, viewTransition: S, unstable_defaultShouldRevalidate: D, ...B}, H) => {
    let {unstable_useTransitions: G} = N.useContext(Se)
      , Y = xv()
      , V = Av(p, {
        relative: g
    })
      , q = m.toLowerCase() === "get" ? "get" : "post"
      , K = typeof p == "string" && im.test(p)
      , ut = st => {
        if (y && y(st),
        st.defaultPrevented)
            return;
        st.preventDefault();
        let pt = st.nativeEvent.submitter
          , F = pt?.getAttribute("formmethod") || m
          , At = () => Y(pt || st.currentTarget, {
            fetcherKey: i,
            method: F,
            navigate: s,
            replace: r,
            state: d,
            relative: g,
            preventScrollReset: T,
            viewTransition: S,
            unstable_defaultShouldRevalidate: D
        });
        G && s !== !1 ? N.startTransition( () => At()) : At()
    }
    ;
    return N.createElement("form", {
        ref: H,
        method: q,
        action: V,
        onSubmit: c ? y : ut,
        ...B,
        "data-discover": !K && f === "render" ? "true" : void 0
    })
}
);
bv.displayName = "Form";
function Ev(f) {
    return `${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function sm(f) {
    let i = N.useContext(wa);
    return _t(i, Ev(f)),
    i
}
function Tv(f, {target: i, replace: s, state: c, preventScrollReset: r, relative: d, viewTransition: m, unstable_defaultShouldRevalidate: p, unstable_useTransitions: y}={}) {
    let g = tm()
      , T = Ml()
      , S = Qn(f, {
        relative: d
    });
    return N.useCallback(D => {
        if (Iy(D, i)) {
            D.preventDefault();
            let B = s !== void 0 ? s : Vn(T) === Vn(S)
              , H = () => g(f, {
                replace: B,
                state: c,
                preventScrollReset: r,
                relative: d,
                viewTransition: m,
                unstable_defaultShouldRevalidate: p
            });
            y ? N.startTransition( () => H()) : H()
        }
    }
    , [T, g, S, s, c, i, f, r, d, m, p, y])
}
var Ov = 0
  , Rv = () => `__${String(++Ov)}__`;
function xv() {
    let {router: f} = sm("useSubmit")
      , {basename: i} = N.useContext(Se)
      , s = Xy()
      , c = f.fetch
      , r = f.navigate;
    return N.useCallback(async (d, m={}) => {
        let {action: p, method: y, encType: g, formData: T, body: S} = lv(d, i);
        if (m.navigate === !1) {
            let D = m.fetcherKey || Rv();
            await c(D, s, m.action || p, {
                unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
                preventScrollReset: m.preventScrollReset,
                formData: T,
                body: S,
                formMethod: m.method || y,
                formEncType: m.encType || g,
                flushSync: m.flushSync
            })
        } else
            await r(m.action || p, {
                unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
                preventScrollReset: m.preventScrollReset,
                formData: T,
                body: S,
                formMethod: m.method || y,
                formEncType: m.encType || g,
                replace: m.replace,
                state: m.state,
                fromRouteId: s,
                flushSync: m.flushSync,
                viewTransition: m.viewTransition
            })
    }
    , [c, r, i, s])
}
function Av(f, {relative: i}={}) {
    let {basename: s} = N.useContext(Se)
      , c = N.useContext(Ye);
    _t(c, "useFormAction must be used inside a RouteContext");
    let[r] = c.matches.slice(-1)
      , d = {
        ...Qn(f || ".", {
            relative: i
        })
    }
      , m = Ml();
    if (f == null) {
        d.search = m.search;
        let p = new URLSearchParams(d.search)
          , y = p.getAll("index");
        if (y.some(T => T === "")) {
            p.delete("index"),
            y.filter(S => S).forEach(S => p.append("index", S));
            let T = p.toString();
            d.search = T ? `?${T}` : ""
        }
    }
    return (!f || f === ".") && r.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (d.pathname = d.pathname === "/" ? s : ul([s, d.pathname])),
    Vn(d)
}
function zv(f, {relative: i}={}) {
    let s = N.useContext(Fh);
    _t(s != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: c} = sm("useViewTransitionState")
      , r = Qn(f, {
        relative: i
    });
    if (!s.isTransitioning)
        return !1;
    let d = il(s.currentLocation.pathname, c) || s.currentLocation.pathname
      , m = il(s.nextLocation.pathname, c) || s.nextLocation.pathname;
    return hi(r.pathname, m) != null || hi(r.pathname, d) != null
}
const _v = "modulepreload"
  , Cv = function(f) {
    return "/" + f
}
  , _h = {}
  , fm = function(i, s, c) {
    let r = Promise.resolve();
    if (s && s.length > 0) {
        let y = function(g) {
            return Promise.all(g.map(T => Promise.resolve(T).then(S => ({
                status: "fulfilled",
                value: S
            }), S => ({
                status: "rejected",
                reason: S
            }))))
        };
        document.getElementsByTagName("link");
        const m = document.querySelector("meta[property=csp-nonce]")
          , p = m?.nonce || m?.getAttribute("nonce");
        r = y(s.map(g => {
            if (g = Cv(g),
            g in _h)
                return;
            _h[g] = !0;
            const T = g.endsWith(".css")
              , S = T ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${g}"]${S}`))
                return;
            const D = document.createElement("link");
            if (D.rel = T ? "stylesheet" : _v,
            T || (D.as = "script"),
            D.crossOrigin = "",
            D.href = g,
            p && D.setAttribute("nonce", p),
            document.head.appendChild(D),
            T)
                return new Promise( (B, H) => {
                    D.addEventListener("load", B),
                    D.addEventListener("error", () => H(new Error(`Unable to preload CSS for ${g}`)))
                }
                )
        }
        ))
    }
    function d(m) {
        const p = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (p.payload = m,
        window.dispatchEvent(p),
        !p.defaultPrevented)
            throw m
    }
    return r.then(m => {
        for (const p of m || [])
            p.status === "rejected" && d(p.reason);
        return i().catch(d)
    }
    )
}
  , Nv = () => Pt.jsx("div", {
    style: {
        textAlign: "center",
        marginTop: "50px"
    }
})
  , Dv = N.lazy( () => fm( () => import("./index-Dv8SPHfJ.js"), __vite__mapDeps([0, 1, 2, 3])))
  , Mv = N.lazy( () => fm( () => import("./index-BmygqGhB.js"), __vite__mapDeps([4, 1, 2, 5])))
  , Uv = () => Pt.jsx(N.Suspense, {
    fallback: Pt.jsx(Nv, {}),
    children: Pt.jsxs($y, {
        children: [Pt.jsx(wn, {
            path: "/",
            element: Pt.jsx(Ah, {
                to: "/home",
                replace: !0
            })
        }), Pt.jsx(wn, {
            path: "/home",
            element: Pt.jsx(Dv, {})
        }), Pt.jsx(wn, {
            path: "/buyback",
            element: Pt.jsx(Mv, {})
        }), Pt.jsx(wn, {
            path: "*",
            element: Pt.jsx(Ah, {
                to: "/home",
                replace: !0
            })
        })]
    })
});
function Lv() {
    return Pt.jsx(vv, {
        children: Pt.jsx(Uv, {})
    })
}
const W = f => typeof f == "string"
  , jn = () => {
    let f, i;
    const s = new Promise( (c, r) => {
        f = c,
        i = r
    }
    );
    return s.resolve = f,
    s.reject = i,
    s
}
  , Ch = f => f == null ? "" : "" + f
  , Hv = (f, i, s) => {
    f.forEach(c => {
        i[c] && (s[c] = i[c])
    }
    )
}
  , Bv = /###/g
  , Nh = f => f && f.indexOf("###") > -1 ? f.replace(Bv, ".") : f
  , Dh = f => !f || W(f)
  , qn = (f, i, s) => {
    const c = W(i) ? i.split(".") : i;
    let r = 0;
    for (; r < c.length - 1; ) {
        if (Dh(f))
            return {};
        const d = Nh(c[r]);
        !f[d] && s && (f[d] = new s),
        Object.prototype.hasOwnProperty.call(f, d) ? f = f[d] : f = {},
        ++r
    }
    return Dh(f) ? {} : {
        obj: f,
        k: Nh(c[r])
    }
}
  , Mh = (f, i, s) => {
    const {obj: c, k: r} = qn(f, i, Object);
    if (c !== void 0 || i.length === 1) {
        c[r] = s;
        return
    }
    let d = i[i.length - 1]
      , m = i.slice(0, i.length - 1)
      , p = qn(f, m, Object);
    for (; p.obj === void 0 && m.length; )
        d = `${m[m.length - 1]}.${d}`,
        m = m.slice(0, m.length - 1),
        p = qn(f, m, Object),
        p?.obj && typeof p.obj[`${p.k}.${d}`] < "u" && (p.obj = void 0);
    p.obj[`${p.k}.${d}`] = s
}
  , jv = (f, i, s, c) => {
    const {obj: r, k: d} = qn(f, i, Object);
    r[d] = r[d] || [],
    r[d].push(s)
}
  , mi = (f, i) => {
    const {obj: s, k: c} = qn(f, i);
    if (s && Object.prototype.hasOwnProperty.call(s, c))
        return s[c]
}
  , wv = (f, i, s) => {
    const c = mi(f, s);
    return c !== void 0 ? c : mi(i, s)
}
  , rm = (f, i, s) => {
    for (const c in i)
        c !== "__proto__" && c !== "constructor" && (c in f ? W(f[c]) || f[c]instanceof String || W(i[c]) || i[c]instanceof String ? s && (f[c] = i[c]) : rm(f[c], i[c], s) : f[c] = i[c]);
    return f
}
  , Ba = f => f.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var qv = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const Yv = f => W(f) ? f.replace(/[&<>"'\/]/g, i => qv[i]) : f;
class Vv {
    constructor(i) {
        this.capacity = i,
        this.regExpMap = new Map,
        this.regExpQueue = []
    }
    getRegExp(i) {
        const s = this.regExpMap.get(i);
        if (s !== void 0)
            return s;
        const c = new RegExp(i);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(i, c),
        this.regExpQueue.push(i),
        c
    }
}
const Gv = [" ", ",", "?", "!", ";"]
  , Xv = new Vv(20)
  , Qv = (f, i, s) => {
    i = i || "",
    s = s || "";
    const c = Gv.filter(m => i.indexOf(m) < 0 && s.indexOf(m) < 0);
    if (c.length === 0)
        return !0;
    const r = Xv.getRegExp(`(${c.map(m => m === "?" ? "\\?" : m).join("|")})`);
    let d = !r.test(f);
    if (!d) {
        const m = f.indexOf(s);
        m > 0 && !r.test(f.substring(0, m)) && (d = !0)
    }
    return d
}
  , Ws = (f, i, s=".") => {
    if (!f)
        return;
    if (f[i])
        return Object.prototype.hasOwnProperty.call(f, i) ? f[i] : void 0;
    const c = i.split(s);
    let r = f;
    for (let d = 0; d < c.length; ) {
        if (!r || typeof r != "object")
            return;
        let m, p = "";
        for (let y = d; y < c.length; ++y)
            if (y !== d && (p += s),
            p += c[y],
            m = r[p],
            m !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof m) > -1 && y < c.length - 1)
                    continue;
                d += y - d + 1;
                break
            }
        r = m
    }
    return r
}
  , Gn = f => f?.replace("_", "-")
  , Zv = {
    type: "logger",
    log(f) {
        this.output("log", f)
    },
    warn(f) {
        this.output("warn", f)
    },
    error(f) {
        this.output("error", f)
    },
    output(f, i) {
        console?.[f]?.apply?.(console, i)
    }
};
class gi {
    constructor(i, s={}) {
        this.init(i, s)
    }
    init(i, s={}) {
        this.prefix = s.prefix || "i18next:",
        this.logger = i || Zv,
        this.options = s,
        this.debug = s.debug
    }
    log(...i) {
        return this.forward(i, "log", "", !0)
    }
    warn(...i) {
        return this.forward(i, "warn", "", !0)
    }
    error(...i) {
        return this.forward(i, "error", "")
    }
    deprecate(...i) {
        return this.forward(i, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(i, s, c, r) {
        return r && !this.debug ? null : (W(i[0]) && (i[0] = `${c}${this.prefix} ${i[0]}`),
        this.logger[s](i))
    }
    create(i) {
        return new gi(this.logger,{
            prefix: `${this.prefix}:${i}:`,
            ...this.options
        })
    }
    clone(i) {
        return i = i || this.options,
        i.prefix = i.prefix || this.prefix,
        new gi(this.logger,i)
    }
}
var qe = new gi;
class Si {
    constructor() {
        this.observers = {}
    }
    on(i, s) {
        return i.split(" ").forEach(c => {
            this.observers[c] || (this.observers[c] = new Map);
            const r = this.observers[c].get(s) || 0;
            this.observers[c].set(s, r + 1)
        }
        ),
        this
    }
    off(i, s) {
        if (this.observers[i]) {
            if (!s) {
                delete this.observers[i];
                return
            }
            this.observers[i].delete(s)
        }
    }
    emit(i, ...s) {
        this.observers[i] && Array.from(this.observers[i].entries()).forEach( ([r,d]) => {
            for (let m = 0; m < d; m++)
                r(...s)
        }
        ),
        this.observers["*"] && Array.from(this.observers["*"].entries()).forEach( ([r,d]) => {
            for (let m = 0; m < d; m++)
                r.apply(r, [i, ...s])
        }
        )
    }
}
class Uh extends Si {
    constructor(i, s={
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(),
        this.data = i || {},
        this.options = s,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(i) {
        this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
    }
    removeNamespaces(i) {
        const s = this.options.ns.indexOf(i);
        s > -1 && this.options.ns.splice(s, 1)
    }
    getResource(i, s, c, r={}) {
        const d = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator
          , m = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let p;
        i.indexOf(".") > -1 ? p = i.split(".") : (p = [i, s],
        c && (Array.isArray(c) ? p.push(...c) : W(c) && d ? p.push(...c.split(d)) : p.push(c)));
        const y = mi(this.data, p);
        return !y && !s && !c && i.indexOf(".") > -1 && (i = p[0],
        s = p[1],
        c = p.slice(2).join(".")),
        y || !m || !W(c) ? y : Ws(this.data?.[i]?.[s], c, d)
    }
    addResource(i, s, c, r, d={
        silent: !1
    }) {
        const m = d.keySeparator !== void 0 ? d.keySeparator : this.options.keySeparator;
        let p = [i, s];
        c && (p = p.concat(m ? c.split(m) : c)),
        i.indexOf(".") > -1 && (p = i.split("."),
        r = s,
        s = p[1]),
        this.addNamespaces(s),
        Mh(this.data, p, r),
        d.silent || this.emit("added", i, s, c, r)
    }
    addResources(i, s, c, r={
        silent: !1
    }) {
        for (const d in c)
            (W(c[d]) || Array.isArray(c[d])) && this.addResource(i, s, d, c[d], {
                silent: !0
            });
        r.silent || this.emit("added", i, s, c)
    }
    addResourceBundle(i, s, c, r, d, m={
        silent: !1,
        skipCopy: !1
    }) {
        let p = [i, s];
        i.indexOf(".") > -1 && (p = i.split("."),
        r = c,
        c = s,
        s = p[1]),
        this.addNamespaces(s);
        let y = mi(this.data, p) || {};
        m.skipCopy || (c = JSON.parse(JSON.stringify(c))),
        r ? rm(y, c, d) : y = {
            ...y,
            ...c
        },
        Mh(this.data, p, y),
        m.silent || this.emit("added", i, s, c)
    }
    removeResourceBundle(i, s) {
        this.hasResourceBundle(i, s) && delete this.data[i][s],
        this.removeNamespaces(s),
        this.emit("removed", i, s)
    }
    hasResourceBundle(i, s) {
        return this.getResource(i, s) !== void 0
    }
    getResourceBundle(i, s) {
        return s || (s = this.options.defaultNS),
        this.getResource(i, s)
    }
    getDataByLanguage(i) {
        return this.data[i]
    }
    hasLanguageSomeTranslations(i) {
        const s = this.getDataByLanguage(i);
        return !!(s && Object.keys(s) || []).find(r => s[r] && Object.keys(s[r]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var om = {
    processors: {},
    addPostProcessor(f) {
        this.processors[f.name] = f
    },
    handle(f, i, s, c, r) {
        return f.forEach(d => {
            i = this.processors[d]?.process(i, s, c, r) ?? i
        }
        ),
        i
    }
};
const dm = Symbol("i18next/PATH_KEY");
function Kv() {
    const f = []
      , i = Object.create(null);
    let s;
    return i.get = (c, r) => (s?.revoke?.(),
    r === dm ? f : (f.push(r),
    s = Proxy.revocable(c, i),
    s.proxy)),
    Proxy.revocable(Object.create(null), i).proxy
}
function Ps(f, i) {
    const {[dm]: s} = f(Kv());
    return s.join(i?.keySeparator ?? ".")
}
const Lh = {}
  , Js = f => !W(f) && typeof f != "boolean" && typeof f != "number";
class pi extends Si {
    constructor(i, s={}) {
        super(),
        Hv(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], i, this),
        this.options = s,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = qe.create("translator")
    }
    changeLanguage(i) {
        i && (this.language = i)
    }
    exists(i, s={
        interpolation: {}
    }) {
        const c = {
            ...s
        };
        if (i == null)
            return !1;
        const r = this.resolve(i, c);
        if (r?.res === void 0)
            return !1;
        const d = Js(r.res);
        return !(c.returnObjects === !1 && d)
    }
    extractFromKey(i, s) {
        let c = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
        c === void 0 && (c = ":");
        const r = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
        let d = s.ns || this.options.defaultNS || [];
        const m = c && i.indexOf(c) > -1
          , p = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !Qv(i, c, r);
        if (m && !p) {
            const y = i.match(this.interpolator.nestingRegexp);
            if (y && y.length > 0)
                return {
                    key: i,
                    namespaces: W(d) ? [d] : d
                };
            const g = i.split(c);
            (c !== r || c === r && this.options.ns.indexOf(g[0]) > -1) && (d = g.shift()),
            i = g.join(r)
        }
        return {
            key: i,
            namespaces: W(d) ? [d] : d
        }
    }
    translate(i, s, c) {
        let r = typeof s == "object" ? {
            ...s
        } : s;
        if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)),
        typeof r == "object" && (r = {
            ...r
        }),
        r || (r = {}),
        i == null)
            return "";
        typeof i == "function" && (i = Ps(i, {
            ...this.options,
            ...r
        })),
        Array.isArray(i) || (i = [String(i)]);
        const d = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails
          , m = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator
          , {key: p, namespaces: y} = this.extractFromKey(i[i.length - 1], r)
          , g = y[y.length - 1];
        let T = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
        T === void 0 && (T = ":");
        const S = r.lng || this.language
          , D = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (S?.toLowerCase() === "cimode")
            return D ? d ? {
                res: `${g}${T}${p}`,
                usedKey: p,
                exactUsedKey: p,
                usedLng: S,
                usedNS: g,
                usedParams: this.getUsedParamsDetails(r)
            } : `${g}${T}${p}` : d ? {
                res: p,
                usedKey: p,
                exactUsedKey: p,
                usedLng: S,
                usedNS: g,
                usedParams: this.getUsedParamsDetails(r)
            } : p;
        const B = this.resolve(i, r);
        let H = B?.res;
        const G = B?.usedKey || p
          , Y = B?.exactUsedKey || p
          , V = ["[object Number]", "[object Function]", "[object RegExp]"]
          , q = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays
          , K = !this.i18nFormat || this.i18nFormat.handleAsObject
          , ut = r.count !== void 0 && !W(r.count)
          , st = pi.hasDefaultValue(r)
          , pt = ut ? this.pluralResolver.getSuffix(S, r.count, r) : ""
          , F = r.ordinal && ut ? this.pluralResolver.getSuffix(S, r.count, {
            ordinal: !1
        }) : ""
          , At = ut && !r.ordinal && r.count === 0
          , Ot = At && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${pt}`] || r[`defaultValue${F}`] || r.defaultValue;
        let Ct = H;
        K && !H && st && (Ct = Ot);
        const be = Js(Ct)
          , Ft = Object.prototype.toString.apply(Ct);
        if (K && Ct && be && V.indexOf(Ft) < 0 && !(W(q) && Array.isArray(Ct))) {
            if (!r.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const Vt = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(G, Ct, {
                    ...r,
                    ns: y
                }) : `key '${p} (${this.language})' returned an object instead of string.`;
                return d ? (B.res = Vt,
                B.usedParams = this.getUsedParamsDetails(r),
                B) : Vt
            }
            if (m) {
                const Vt = Array.isArray(Ct)
                  , Mt = Vt ? [] : {}
                  , ee = Vt ? Y : G;
                for (const _ in Ct)
                    if (Object.prototype.hasOwnProperty.call(Ct, _)) {
                        const j = `${ee}${m}${_}`;
                        st && !H ? Mt[_] = this.translate(j, {
                            ...r,
                            defaultValue: Js(Ot) ? Ot[_] : void 0,
                            joinArrays: !1,
                            ns: y
                        }) : Mt[_] = this.translate(j, {
                            ...r,
                            joinArrays: !1,
                            ns: y
                        }),
                        Mt[_] === j && (Mt[_] = Ct[_])
                    }
                H = Mt
            }
        } else if (K && W(q) && Array.isArray(H))
            H = H.join(q),
            H && (H = this.extendTranslation(H, i, r, c));
        else {
            let Vt = !1
              , Mt = !1;
            !this.isValidLookup(H) && st && (Vt = !0,
            H = Ot),
            this.isValidLookup(H) || (Mt = !0,
            H = p);
            const _ = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Mt ? void 0 : H
              , j = st && Ot !== H && this.options.updateMissing;
            if (Mt || Vt || j) {
                if (this.logger.log(j ? "updateKey" : "missingKey", S, g, p, j ? Ot : H),
                m) {
                    const b = this.resolve(p, {
                        ...r,
                        keySeparator: !1
                    });
                    b && b.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let $ = [];
                const rt = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && rt && rt[0])
                    for (let b = 0; b < rt.length; b++)
                        $.push(rt[b]);
                else
                    this.options.saveMissingTo === "all" ? $ = this.languageUtils.toResolveHierarchy(r.lng || this.language) : $.push(r.lng || this.language);
                const mt = (b, M, w) => {
                    const X = st && w !== H ? w : _;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(b, g, M, X, j, r) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(b, g, M, X, j, r),
                    this.emit("missingKey", b, g, M, H)
                }
                ;
                this.options.saveMissing && (this.options.saveMissingPlurals && ut ? $.forEach(b => {
                    const M = this.pluralResolver.getSuffixes(b, r);
                    At && r[`defaultValue${this.options.pluralSeparator}zero`] && M.indexOf(`${this.options.pluralSeparator}zero`) < 0 && M.push(`${this.options.pluralSeparator}zero`),
                    M.forEach(w => {
                        mt([b], p + w, r[`defaultValue${w}`] || Ot)
                    }
                    )
                }
                ) : mt($, p, Ot))
            }
            H = this.extendTranslation(H, i, r, B, c),
            Mt && H === p && this.options.appendNamespaceToMissingKey && (H = `${g}${T}${p}`),
            (Mt || Vt) && this.options.parseMissingKeyHandler && (H = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${g}${T}${p}` : p, Vt ? H : void 0, r))
        }
        return d ? (B.res = H,
        B.usedParams = this.getUsedParamsDetails(r),
        B) : H
    }
    extendTranslation(i, s, c, r, d) {
        if (this.i18nFormat?.parse)
            i = this.i18nFormat.parse(i, {
                ...this.options.interpolation.defaultVariables,
                ...c
            }, c.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
                resolved: r
            });
        else if (!c.skipInterpolation) {
            c.interpolation && this.interpolator.init({
                ...c,
                interpolation: {
                    ...this.options.interpolation,
                    ...c.interpolation
                }
            });
            const y = W(i) && (c?.interpolation?.skipOnVariables !== void 0 ? c.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let g;
            if (y) {
                const S = i.match(this.interpolator.nestingRegexp);
                g = S && S.length
            }
            let T = c.replace && !W(c.replace) ? c.replace : c;
            if (this.options.interpolation.defaultVariables && (T = {
                ...this.options.interpolation.defaultVariables,
                ...T
            }),
            i = this.interpolator.interpolate(i, T, c.lng || this.language || r.usedLng, c),
            y) {
                const S = i.match(this.interpolator.nestingRegexp)
                  , D = S && S.length;
                g < D && (c.nest = !1)
            }
            !c.lng && r && r.res && (c.lng = this.language || r.usedLng),
            c.nest !== !1 && (i = this.interpolator.nest(i, (...S) => d?.[0] === S[0] && !c.context ? (this.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${s[0]}`),
            null) : this.translate(...S, s), c)),
            c.interpolation && this.interpolator.reset()
        }
        const m = c.postProcess || this.options.postProcess
          , p = W(m) ? [m] : m;
        return i != null && p?.length && c.applyPostProcessor !== !1 && (i = om.handle(p, i, s, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...r,
                usedParams: this.getUsedParamsDetails(c)
            },
            ...c
        } : c, this)),
        i
    }
    resolve(i, s={}) {
        let c, r, d, m, p;
        return W(i) && (i = [i]),
        i.forEach(y => {
            if (this.isValidLookup(c))
                return;
            const g = this.extractFromKey(y, s)
              , T = g.key;
            r = T;
            let S = g.namespaces;
            this.options.fallbackNS && (S = S.concat(this.options.fallbackNS));
            const D = s.count !== void 0 && !W(s.count)
              , B = D && !s.ordinal && s.count === 0
              , H = s.context !== void 0 && (W(s.context) || typeof s.context == "number") && s.context !== ""
              , G = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
            S.forEach(Y => {
                this.isValidLookup(c) || (p = Y,
                !Lh[`${G[0]}-${Y}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(p) && (Lh[`${G[0]}-${Y}`] = !0,
                this.logger.warn(`key "${r}" for languages "${G.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                G.forEach(V => {
                    if (this.isValidLookup(c))
                        return;
                    m = V;
                    const q = [T];
                    if (this.i18nFormat?.addLookupKeys)
                        this.i18nFormat.addLookupKeys(q, T, V, Y, s);
                    else {
                        let ut;
                        D && (ut = this.pluralResolver.getSuffix(V, s.count, s));
                        const st = `${this.options.pluralSeparator}zero`
                          , pt = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (D && (s.ordinal && ut.indexOf(pt) === 0 && q.push(T + ut.replace(pt, this.options.pluralSeparator)),
                        q.push(T + ut),
                        B && q.push(T + st)),
                        H) {
                            const F = `${T}${this.options.contextSeparator || "_"}${s.context}`;
                            q.push(F),
                            D && (s.ordinal && ut.indexOf(pt) === 0 && q.push(F + ut.replace(pt, this.options.pluralSeparator)),
                            q.push(F + ut),
                            B && q.push(F + st))
                        }
                    }
                    let K;
                    for (; K = q.pop(); )
                        this.isValidLookup(c) || (d = K,
                        c = this.getResource(V, Y, K, s))
                }
                ))
            }
            )
        }
        ),
        {
            res: c,
            usedKey: r,
            exactUsedKey: d,
            usedLng: m,
            usedNS: p
        }
    }
    isValidLookup(i) {
        return i !== void 0 && !(!this.options.returnNull && i === null) && !(!this.options.returnEmptyString && i === "")
    }
    getResource(i, s, c, r={}) {
        return this.i18nFormat?.getResource ? this.i18nFormat.getResource(i, s, c, r) : this.resourceStore.getResource(i, s, c, r)
    }
    getUsedParamsDetails(i={}) {
        const s = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
          , c = i.replace && !W(i.replace);
        let r = c ? i.replace : i;
        if (c && typeof i.count < "u" && (r.count = i.count),
        this.options.interpolation.defaultVariables && (r = {
            ...this.options.interpolation.defaultVariables,
            ...r
        }),
        !c) {
            r = {
                ...r
            };
            for (const d of s)
                delete r[d]
        }
        return r
    }
    static hasDefaultValue(i) {
        const s = "defaultValue";
        for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c) && s === c.substring(0, s.length) && i[c] !== void 0)
                return !0;
        return !1
    }
}
class Hh {
    constructor(i) {
        this.options = i,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = qe.create("languageUtils")
    }
    getScriptPartFromCode(i) {
        if (i = Gn(i),
        !i || i.indexOf("-") < 0)
            return null;
        const s = i.split("-");
        return s.length === 2 || (s.pop(),
        s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"))
    }
    getLanguagePartFromCode(i) {
        if (i = Gn(i),
        !i || i.indexOf("-") < 0)
            return i;
        const s = i.split("-");
        return this.formatLanguageCode(s[0])
    }
    formatLanguageCode(i) {
        if (W(i) && i.indexOf("-") > -1) {
            let s;
            try {
                s = Intl.getCanonicalLocales(i)[0]
            } catch {}
            return s && this.options.lowerCaseLng && (s = s.toLowerCase()),
            s || (this.options.lowerCaseLng ? i.toLowerCase() : i)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? i.toLowerCase() : i
    }
    isSupportedCode(i) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (i = this.getLanguagePartFromCode(i)),
        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(i) > -1
    }
    getBestMatchFromCodes(i) {
        if (!i)
            return null;
        let s;
        return i.forEach(c => {
            if (s)
                return;
            const r = this.formatLanguageCode(c);
            (!this.options.supportedLngs || this.isSupportedCode(r)) && (s = r)
        }
        ),
        !s && this.options.supportedLngs && i.forEach(c => {
            if (s)
                return;
            const r = this.getScriptPartFromCode(c);
            if (this.isSupportedCode(r))
                return s = r;
            const d = this.getLanguagePartFromCode(c);
            if (this.isSupportedCode(d))
                return s = d;
            s = this.options.supportedLngs.find(m => {
                if (m === d)
                    return m;
                if (!(m.indexOf("-") < 0 && d.indexOf("-") < 0) && (m.indexOf("-") > 0 && d.indexOf("-") < 0 && m.substring(0, m.indexOf("-")) === d || m.indexOf(d) === 0 && d.length > 1))
                    return m
            }
            )
        }
        ),
        s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]),
        s
    }
    getFallbackCodes(i, s) {
        if (!i)
            return [];
        if (typeof i == "function" && (i = i(s)),
        W(i) && (i = [i]),
        Array.isArray(i))
            return i;
        if (!s)
            return i.default || [];
        let c = i[s];
        return c || (c = i[this.getScriptPartFromCode(s)]),
        c || (c = i[this.formatLanguageCode(s)]),
        c || (c = i[this.getLanguagePartFromCode(s)]),
        c || (c = i.default),
        c || []
    }
    toResolveHierarchy(i, s) {
        const c = this.getFallbackCodes((s === !1 ? [] : s) || this.options.fallbackLng || [], i)
          , r = []
          , d = m => {
            m && (this.isSupportedCode(m) ? r.push(m) : this.logger.warn(`rejecting language code not found in supportedLngs: ${m}`))
        }
        ;
        return W(i) && (i.indexOf("-") > -1 || i.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && d(this.formatLanguageCode(i)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && d(this.getScriptPartFromCode(i)),
        this.options.load !== "currentOnly" && d(this.getLanguagePartFromCode(i))) : W(i) && d(this.formatLanguageCode(i)),
        c.forEach(m => {
            r.indexOf(m) < 0 && d(this.formatLanguageCode(m))
        }
        ),
        r
    }
}
const Bh = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
}
  , jh = {
    select: f => f === 1 ? "one" : "other",
    resolvedOptions: () => ({
        pluralCategories: ["one", "other"]
    })
};
class Jv {
    constructor(i, s={}) {
        this.languageUtils = i,
        this.options = s,
        this.logger = qe.create("pluralResolver"),
        this.pluralRulesCache = {}
    }
    addRule(i, s) {
        this.rules[i] = s
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(i, s={}) {
        const c = Gn(i === "dev" ? "en" : i)
          , r = s.ordinal ? "ordinal" : "cardinal"
          , d = JSON.stringify({
            cleanedCode: c,
            type: r
        });
        if (d in this.pluralRulesCache)
            return this.pluralRulesCache[d];
        let m;
        try {
            m = new Intl.PluralRules(c,{
                type: r
            })
        } catch {
            if (!Intl)
                return this.logger.error("No Intl support, please use an Intl polyfill!"),
                jh;
            if (!i.match(/-|_/))
                return jh;
            const y = this.languageUtils.getLanguagePartFromCode(i);
            m = this.getRule(y, s)
        }
        return this.pluralRulesCache[d] = m,
        m
    }
    needsPlural(i, s={}) {
        let c = this.getRule(i, s);
        return c || (c = this.getRule("dev", s)),
        c?.resolvedOptions().pluralCategories.length > 1
    }
    getPluralFormsOfKey(i, s, c={}) {
        return this.getSuffixes(i, c).map(r => `${s}${r}`)
    }
    getSuffixes(i, s={}) {
        let c = this.getRule(i, s);
        return c || (c = this.getRule("dev", s)),
        c ? c.resolvedOptions().pluralCategories.sort( (r, d) => Bh[r] - Bh[d]).map(r => `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : []
    }
    getSuffix(i, s, c={}) {
        const r = this.getRule(i, c);
        return r ? `${this.options.prepend}${c.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(s)}` : (this.logger.warn(`no plural rule found for: ${i}`),
        this.getSuffix("dev", s, c))
    }
}
const wh = (f, i, s, c=".", r=!0) => {
    let d = wv(f, i, s);
    return !d && r && W(s) && (d = Ws(f, s, c),
    d === void 0 && (d = Ws(i, s, c))),
    d
}
  , $s = f => f.replace(/\$/g, "$$$$");
class qh {
    constructor(i={}) {
        this.logger = qe.create("interpolator"),
        this.options = i,
        this.format = i?.interpolation?.format || (s => s),
        this.init(i)
    }
    init(i={}) {
        i.interpolation || (i.interpolation = {
            escapeValue: !0
        });
        const {escape: s, escapeValue: c, useRawValueToEscape: r, prefix: d, prefixEscaped: m, suffix: p, suffixEscaped: y, formatSeparator: g, unescapeSuffix: T, unescapePrefix: S, nestingPrefix: D, nestingPrefixEscaped: B, nestingSuffix: H, nestingSuffixEscaped: G, nestingOptionsSeparator: Y, maxReplaces: V, alwaysFormat: q} = i.interpolation;
        this.escape = s !== void 0 ? s : Yv,
        this.escapeValue = c !== void 0 ? c : !0,
        this.useRawValueToEscape = r !== void 0 ? r : !1,
        this.prefix = d ? Ba(d) : m || "{{",
        this.suffix = p ? Ba(p) : y || "}}",
        this.formatSeparator = g || ",",
        this.unescapePrefix = T ? "" : S || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : T || "",
        this.nestingPrefix = D ? Ba(D) : B || Ba("$t("),
        this.nestingSuffix = H ? Ba(H) : G || Ba(")"),
        this.nestingOptionsSeparator = Y || ",",
        this.maxReplaces = V || 1e3,
        this.alwaysFormat = q !== void 0 ? q : !1,
        this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const i = (s, c) => s?.source === c ? (s.lastIndex = 0,
        s) : new RegExp(c,"g");
        this.regexp = i(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
        this.regexpUnescape = i(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
        this.nestingRegexp = i(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
    }
    interpolate(i, s, c, r) {
        let d, m, p;
        const y = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}
          , g = B => {
            if (B.indexOf(this.formatSeparator) < 0) {
                const V = wh(s, y, B, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(V, void 0, c, {
                    ...r,
                    ...s,
                    interpolationkey: B
                }) : V
            }
            const H = B.split(this.formatSeparator)
              , G = H.shift().trim()
              , Y = H.join(this.formatSeparator).trim();
            return this.format(wh(s, y, G, this.options.keySeparator, this.options.ignoreJSONStructure), Y, c, {
                ...r,
                ...s,
                interpolationkey: G
            })
        }
        ;
        this.resetRegExp();
        const T = r?.missingInterpolationHandler || this.options.missingInterpolationHandler
          , S = r?.interpolation?.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: B => $s(B)
        }, {
            regex: this.regexp,
            safeValue: B => this.escapeValue ? $s(this.escape(B)) : $s(B)
        }].forEach(B => {
            for (p = 0; d = B.regex.exec(i); ) {
                const H = d[1].trim();
                if (m = g(H),
                m === void 0)
                    if (typeof T == "function") {
                        const Y = T(i, d, r);
                        m = W(Y) ? Y : ""
                    } else if (r && Object.prototype.hasOwnProperty.call(r, H))
                        m = "";
                    else if (S) {
                        m = d[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${H} for interpolating ${i}`),
                        m = "";
                else
                    !W(m) && !this.useRawValueToEscape && (m = Ch(m));
                const G = B.safeValue(m);
                if (i = i.replace(d[0], G),
                S ? (B.regex.lastIndex += m.length,
                B.regex.lastIndex -= d[0].length) : B.regex.lastIndex = 0,
                p++,
                p >= this.maxReplaces)
                    break
            }
        }
        ),
        i
    }
    nest(i, s, c={}) {
        let r, d, m;
        const p = (y, g) => {
            const T = this.nestingOptionsSeparator;
            if (y.indexOf(T) < 0)
                return y;
            const S = y.split(new RegExp(`${T}[ ]*{`));
            let D = `{${S[1]}`;
            y = S[0],
            D = this.interpolate(D, m);
            const B = D.match(/'/g)
              , H = D.match(/"/g);
            ((B?.length ?? 0) % 2 === 0 && !H || H.length % 2 !== 0) && (D = D.replace(/'/g, '"'));
            try {
                m = JSON.parse(D),
                g && (m = {
                    ...g,
                    ...m
                })
            } catch (G) {
                return this.logger.warn(`failed parsing options string in nesting for key ${y}`, G),
                `${y}${T}${D}`
            }
            return m.defaultValue && m.defaultValue.indexOf(this.prefix) > -1 && delete m.defaultValue,
            y
        }
        ;
        for (; r = this.nestingRegexp.exec(i); ) {
            let y = [];
            m = {
                ...c
            },
            m = m.replace && !W(m.replace) ? m.replace : m,
            m.applyPostProcessor = !1,
            delete m.defaultValue;
            const g = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
            if (g !== -1 && (y = r[1].slice(g).split(this.formatSeparator).map(T => T.trim()).filter(Boolean),
            r[1] = r[1].slice(0, g)),
            d = s(p.call(this, r[1].trim(), m), m),
            d && r[0] === i && !W(d))
                return d;
            W(d) || (d = Ch(d)),
            d || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${i}`),
            d = ""),
            y.length && (d = y.reduce( (T, S) => this.format(T, S, c.lng, {
                ...c,
                interpolationkey: r[1].trim()
            }), d.trim())),
            i = i.replace(r[0], d),
            this.regexp.lastIndex = 0
        }
        return i
    }
}
const $v = f => {
    let i = f.toLowerCase().trim();
    const s = {};
    if (f.indexOf("(") > -1) {
        const c = f.split("(");
        i = c[0].toLowerCase().trim();
        const r = c[1].substring(0, c[1].length - 1);
        i === "currency" && r.indexOf(":") < 0 ? s.currency || (s.currency = r.trim()) : i === "relativetime" && r.indexOf(":") < 0 ? s.range || (s.range = r.trim()) : r.split(";").forEach(m => {
            if (m) {
                const [p,...y] = m.split(":")
                  , g = y.join(":").trim().replace(/^'+|'+$/g, "")
                  , T = p.trim();
                s[T] || (s[T] = g),
                g === "false" && (s[T] = !1),
                g === "true" && (s[T] = !0),
                isNaN(g) || (s[T] = parseInt(g, 10))
            }
        }
        )
    }
    return {
        formatName: i,
        formatOptions: s
    }
}
  , Yh = f => {
    const i = {};
    return (s, c, r) => {
        let d = r;
        r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (d = {
            ...d,
            [r.interpolationkey]: void 0
        });
        const m = c + JSON.stringify(d);
        let p = i[m];
        return p || (p = f(Gn(c), r),
        i[m] = p),
        p(s)
    }
}
  , kv = f => (i, s, c) => f(Gn(s), c)(i);
class Fv {
    constructor(i={}) {
        this.logger = qe.create("formatter"),
        this.options = i,
        this.init(i)
    }
    init(i, s={
        interpolation: {}
    }) {
        this.formatSeparator = s.interpolation.formatSeparator || ",";
        const c = s.cacheInBuiltFormats ? Yh : kv;
        this.formats = {
            number: c( (r, d) => {
                const m = new Intl.NumberFormat(r,{
                    ...d
                });
                return p => m.format(p)
            }
            ),
            currency: c( (r, d) => {
                const m = new Intl.NumberFormat(r,{
                    ...d,
                    style: "currency"
                });
                return p => m.format(p)
            }
            ),
            datetime: c( (r, d) => {
                const m = new Intl.DateTimeFormat(r,{
                    ...d
                });
                return p => m.format(p)
            }
            ),
            relativetime: c( (r, d) => {
                const m = new Intl.RelativeTimeFormat(r,{
                    ...d
                });
                return p => m.format(p, d.range || "day")
            }
            ),
            list: c( (r, d) => {
                const m = new Intl.ListFormat(r,{
                    ...d
                });
                return p => m.format(p)
            }
            )
        }
    }
    add(i, s) {
        this.formats[i.toLowerCase().trim()] = s
    }
    addCached(i, s) {
        this.formats[i.toLowerCase().trim()] = Yh(s)
    }
    format(i, s, c, r={}) {
        const d = s.split(this.formatSeparator);
        if (d.length > 1 && d[0].indexOf("(") > 1 && d[0].indexOf(")") < 0 && d.find(p => p.indexOf(")") > -1)) {
            const p = d.findIndex(y => y.indexOf(")") > -1);
            d[0] = [d[0], ...d.splice(1, p)].join(this.formatSeparator)
        }
        return d.reduce( (p, y) => {
            const {formatName: g, formatOptions: T} = $v(y);
            if (this.formats[g]) {
                let S = p;
                try {
                    const D = r?.formatParams?.[r.interpolationkey] || {}
                      , B = D.locale || D.lng || r.locale || r.lng || c;
                    S = this.formats[g](p, B, {
                        ...T,
                        ...r,
                        ...D
                    })
                } catch (D) {
                    this.logger.warn(D)
                }
                return S
            } else
                this.logger.warn(`there was no format function for ${g}`);
            return p
        }
        , i)
    }
}
const Wv = (f, i) => {
    f.pending[i] !== void 0 && (delete f.pending[i],
    f.pendingCount--)
}
;
class Pv extends Si {
    constructor(i, s, c, r={}) {
        super(),
        this.backend = i,
        this.store = s,
        this.services = c,
        this.languageUtils = c.languageUtils,
        this.options = r,
        this.logger = qe.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = r.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5,
        this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        this.backend?.init?.(c, r.backend, r)
    }
    queueLoad(i, s, c, r) {
        const d = {}
          , m = {}
          , p = {}
          , y = {};
        return i.forEach(g => {
            let T = !0;
            s.forEach(S => {
                const D = `${g}|${S}`;
                !c.reload && this.store.hasResourceBundle(g, S) ? this.state[D] = 2 : this.state[D] < 0 || (this.state[D] === 1 ? m[D] === void 0 && (m[D] = !0) : (this.state[D] = 1,
                T = !1,
                m[D] === void 0 && (m[D] = !0),
                d[D] === void 0 && (d[D] = !0),
                y[S] === void 0 && (y[S] = !0)))
            }
            ),
            T || (p[g] = !0)
        }
        ),
        (Object.keys(d).length || Object.keys(m).length) && this.queue.push({
            pending: m,
            pendingCount: Object.keys(m).length,
            loaded: {},
            errors: [],
            callback: r
        }),
        {
            toLoad: Object.keys(d),
            pending: Object.keys(m),
            toLoadLanguages: Object.keys(p),
            toLoadNamespaces: Object.keys(y)
        }
    }
    loaded(i, s, c) {
        const r = i.split("|")
          , d = r[0]
          , m = r[1];
        s && this.emit("failedLoading", d, m, s),
        !s && c && this.store.addResourceBundle(d, m, c, void 0, void 0, {
            skipCopy: !0
        }),
        this.state[i] = s ? -1 : 2,
        s && c && (this.state[i] = 0);
        const p = {};
        this.queue.forEach(y => {
            jv(y.loaded, [d], m),
            Wv(y, i),
            s && y.errors.push(s),
            y.pendingCount === 0 && !y.done && (Object.keys(y.loaded).forEach(g => {
                p[g] || (p[g] = {});
                const T = y.loaded[g];
                T.length && T.forEach(S => {
                    p[g][S] === void 0 && (p[g][S] = !0)
                }
                )
            }
            ),
            y.done = !0,
            y.errors.length ? y.callback(y.errors) : y.callback())
        }
        ),
        this.emit("loaded", p),
        this.queue = this.queue.filter(y => !y.done)
    }
    read(i, s, c, r=0, d=this.retryTimeout, m) {
        if (!i.length)
            return m(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: i,
                ns: s,
                fcName: c,
                tried: r,
                wait: d,
                callback: m
            });
            return
        }
        this.readingCalls++;
        const p = (g, T) => {
            if (this.readingCalls--,
            this.waitingReads.length > 0) {
                const S = this.waitingReads.shift();
                this.read(S.lng, S.ns, S.fcName, S.tried, S.wait, S.callback)
            }
            if (g && T && r < this.maxRetries) {
                setTimeout( () => {
                    this.read.call(this, i, s, c, r + 1, d * 2, m)
                }
                , d);
                return
            }
            m(g, T)
        }
          , y = this.backend[c].bind(this.backend);
        if (y.length === 2) {
            try {
                const g = y(i, s);
                g && typeof g.then == "function" ? g.then(T => p(null, T)).catch(p) : p(null, g)
            } catch (g) {
                p(g)
            }
            return
        }
        return y(i, s, p)
    }
    prepareLoading(i, s, c={}, r) {
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            r && r();
        W(i) && (i = this.languageUtils.toResolveHierarchy(i)),
        W(s) && (s = [s]);
        const d = this.queueLoad(i, s, c, r);
        if (!d.toLoad.length)
            return d.pending.length || r(),
            null;
        d.toLoad.forEach(m => {
            this.loadOne(m)
        }
        )
    }
    load(i, s, c) {
        this.prepareLoading(i, s, {}, c)
    }
    reload(i, s, c) {
        this.prepareLoading(i, s, {
            reload: !0
        }, c)
    }
    loadOne(i, s="") {
        const c = i.split("|")
          , r = c[0]
          , d = c[1];
        this.read(r, d, "read", void 0, void 0, (m, p) => {
            m && this.logger.warn(`${s}loading namespace ${d} for language ${r} failed`, m),
            !m && p && this.logger.log(`${s}loaded namespace ${d} for language ${r}`, p),
            this.loaded(i, m, p)
        }
        )
    }
    saveMissing(i, s, c, r, d, m={}, p= () => {}
    ) {
        if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(s)) {
            this.logger.warn(`did not save key "${c}" as the namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(c == null || c === "")) {
            if (this.backend?.create) {
                const y = {
                    ...m,
                    isUpdate: d
                }
                  , g = this.backend.create.bind(this.backend);
                if (g.length < 6)
                    try {
                        let T;
                        g.length === 5 ? T = g(i, s, c, r, y) : T = g(i, s, c, r),
                        T && typeof T.then == "function" ? T.then(S => p(null, S)).catch(p) : p(null, T)
                    } catch (T) {
                        p(T)
                    }
                else
                    g(i, s, c, r, p, y)
            }
            !i || !i[0] || this.store.addResource(i[0], s, c, r)
        }
    }
}
const Vh = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: f => {
        let i = {};
        if (typeof f[1] == "object" && (i = f[1]),
        W(f[1]) && (i.defaultValue = f[1]),
        W(f[2]) && (i.tDescription = f[2]),
        typeof f[2] == "object" || typeof f[3] == "object") {
            const s = f[3] || f[2];
            Object.keys(s).forEach(c => {
                i[c] = s[c]
            }
            )
        }
        return i
    }
    ,
    interpolation: {
        escapeValue: !0,
        format: f => f,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0
    },
    cacheInBuiltFormats: !0
})
  , Gh = f => (W(f.ns) && (f.ns = [f.ns]),
W(f.fallbackLng) && (f.fallbackLng = [f.fallbackLng]),
W(f.fallbackNS) && (f.fallbackNS = [f.fallbackNS]),
f.supportedLngs?.indexOf?.("cimode") < 0 && (f.supportedLngs = f.supportedLngs.concat(["cimode"])),
typeof f.initImmediate == "boolean" && (f.initAsync = f.initImmediate),
f)
  , ri = () => {}
  , Iv = f => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(f)).forEach(s => {
        typeof f[s] == "function" && (f[s] = f[s].bind(f))
    }
    )
}
;
class Yn extends Si {
    constructor(i={}, s) {
        if (super(),
        this.options = Gh(i),
        this.services = {},
        this.logger = qe,
        this.modules = {
            external: []
        },
        Iv(this),
        s && !this.isInitialized && !i.isClone) {
            if (!this.options.initAsync)
                return this.init(i, s),
                this;
            setTimeout( () => {
                this.init(i, s)
            }
            , 0)
        }
    }
    init(i={}, s) {
        this.isInitializing = !0,
        typeof i == "function" && (s = i,
        i = {}),
        i.defaultNS == null && i.ns && (W(i.ns) ? i.defaultNS = i.ns : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
        const c = Vh();
        this.options = {
            ...c,
            ...this.options,
            ...Gh(i)
        },
        this.options.interpolation = {
            ...c.interpolation,
            ...this.options.interpolation
        },
        i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator),
        i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator),
        typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = c.overloadTranslationOptionHandler);
        const r = g => g ? typeof g == "function" ? new g : g : null;
        if (!this.options.isClone) {
            this.modules.logger ? qe.init(r(this.modules.logger), this.options) : qe.init(null, this.options);
            let g;
            this.modules.formatter ? g = this.modules.formatter : g = Fv;
            const T = new Hh(this.options);
            this.store = new Uh(this.options.resources,this.options);
            const S = this.services;
            S.logger = qe,
            S.resourceStore = this.store,
            S.languageUtils = T,
            S.pluralResolver = new Jv(T,{
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            this.options.interpolation.format && this.options.interpolation.format !== c.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),
            g && (!this.options.interpolation.format || this.options.interpolation.format === c.interpolation.format) && (S.formatter = r(g),
            S.formatter.init && S.formatter.init(S, this.options),
            this.options.interpolation.format = S.formatter.format.bind(S.formatter)),
            S.interpolator = new qh(this.options),
            S.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            S.backendConnector = new Pv(r(this.modules.backend),S.resourceStore,S,this.options),
            S.backendConnector.on("*", (B, ...H) => {
                this.emit(B, ...H)
            }
            ),
            this.modules.languageDetector && (S.languageDetector = r(this.modules.languageDetector),
            S.languageDetector.init && S.languageDetector.init(S, this.options.detection, this.options)),
            this.modules.i18nFormat && (S.i18nFormat = r(this.modules.i18nFormat),
            S.i18nFormat.init && S.i18nFormat.init(this)),
            this.translator = new pi(this.services,this.options),
            this.translator.on("*", (B, ...H) => {
                this.emit(B, ...H)
            }
            ),
            this.modules.external.forEach(B => {
                B.init && B.init(this)
            }
            )
        }
        if (this.format = this.options.interpolation.format,
        s || (s = ri),
        this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(g => {
            this[g] = (...T) => this.store[g](...T)
        }
        ),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(g => {
            this[g] = (...T) => (this.store[g](...T),
            this)
        }
        );
        const p = jn()
          , y = () => {
            const g = (T, S) => {
                this.isInitializing = !1,
                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                this.isInitialized = !0,
                this.options.isClone || this.logger.log("initialized", this.options),
                this.emit("initialized", this.options),
                p.resolve(S),
                s(T, S)
            }
            ;
            if (this.languages && !this.isInitialized)
                return g(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, g)
        }
        ;
        return this.options.resources || !this.options.initAsync ? y() : setTimeout(y, 0),
        p
    }
    loadResources(i, s=ri) {
        let c = s;
        const r = W(i) ? i : this.language;
        if (typeof i == "function" && (c = i),
        !this.options.resources || this.options.partialBundledLanguages) {
            if (r?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return c();
            const d = []
              , m = p => {
                if (!p || p === "cimode")
                    return;
                this.services.languageUtils.toResolveHierarchy(p).forEach(g => {
                    g !== "cimode" && d.indexOf(g) < 0 && d.push(g)
                }
                )
            }
            ;
            r ? m(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(y => m(y)),
            this.options.preload?.forEach?.(p => m(p)),
            this.services.backendConnector.load(d, this.options.ns, p => {
                !p && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                c(p)
            }
            )
        } else
            c(null)
    }
    reloadResources(i, s, c) {
        const r = jn();
        return typeof i == "function" && (c = i,
        i = void 0),
        typeof s == "function" && (c = s,
        s = void 0),
        i || (i = this.languages),
        s || (s = this.options.ns),
        c || (c = ri),
        this.services.backendConnector.reload(i, s, d => {
            r.resolve(),
            c(d)
        }
        ),
        r
    }
    use(i) {
        if (!i)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!i.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return i.type === "backend" && (this.modules.backend = i),
        (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i),
        i.type === "languageDetector" && (this.modules.languageDetector = i),
        i.type === "i18nFormat" && (this.modules.i18nFormat = i),
        i.type === "postProcessor" && om.addPostProcessor(i),
        i.type === "formatter" && (this.modules.formatter = i),
        i.type === "3rdParty" && this.modules.external.push(i),
        this
    }
    setResolvedLanguage(i) {
        if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1)) {
            for (let s = 0; s < this.languages.length; s++) {
                const c = this.languages[s];
                if (!(["cimode", "dev"].indexOf(c) > -1) && this.store.hasLanguageSomeTranslations(c)) {
                    this.resolvedLanguage = c;
                    break
                }
            }
            !this.resolvedLanguage && this.languages.indexOf(i) < 0 && this.store.hasLanguageSomeTranslations(i) && (this.resolvedLanguage = i,
            this.languages.unshift(i))
        }
    }
    changeLanguage(i, s) {
        this.isLanguageChangingTo = i;
        const c = jn();
        this.emit("languageChanging", i);
        const r = p => {
            this.language = p,
            this.languages = this.services.languageUtils.toResolveHierarchy(p),
            this.resolvedLanguage = void 0,
            this.setResolvedLanguage(p)
        }
          , d = (p, y) => {
            y ? this.isLanguageChangingTo === i && (r(y),
            this.translator.changeLanguage(y),
            this.isLanguageChangingTo = void 0,
            this.emit("languageChanged", y),
            this.logger.log("languageChanged", y)) : this.isLanguageChangingTo = void 0,
            c.resolve( (...g) => this.t(...g)),
            s && s(p, (...g) => this.t(...g))
        }
          , m = p => {
            !i && !p && this.services.languageDetector && (p = []);
            const y = W(p) ? p : p && p[0]
              , g = this.store.hasLanguageSomeTranslations(y) ? y : this.services.languageUtils.getBestMatchFromCodes(W(p) ? [p] : p);
            g && (this.language || r(g),
            this.translator.language || this.translator.changeLanguage(g),
            this.services.languageDetector?.cacheUserLanguage?.(g)),
            this.loadResources(g, T => {
                d(T, g)
            }
            )
        }
        ;
        return !i && this.services.languageDetector && !this.services.languageDetector.async ? m(this.services.languageDetector.detect()) : !i && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(m) : this.services.languageDetector.detect(m) : m(i),
        c
    }
    getFixedT(i, s, c) {
        const r = (d, m, ...p) => {
            let y;
            typeof m != "object" ? y = this.options.overloadTranslationOptionHandler([d, m].concat(p)) : y = {
                ...m
            },
            y.lng = y.lng || r.lng,
            y.lngs = y.lngs || r.lngs,
            y.ns = y.ns || r.ns,
            y.keyPrefix !== "" && (y.keyPrefix = y.keyPrefix || c || r.keyPrefix);
            const g = this.options.keySeparator || ".";
            let T;
            return y.keyPrefix && Array.isArray(d) ? T = d.map(S => (typeof S == "function" && (S = Ps(S, {
                ...this.options,
                ...m
            })),
            `${y.keyPrefix}${g}${S}`)) : (typeof d == "function" && (d = Ps(d, {
                ...this.options,
                ...m
            })),
            T = y.keyPrefix ? `${y.keyPrefix}${g}${d}` : d),
            this.t(T, y)
        }
        ;
        return W(i) ? r.lng = i : r.lngs = i,
        r.ns = s,
        r.keyPrefix = c,
        r
    }
    t(...i) {
        return this.translator?.translate(...i)
    }
    exists(...i) {
        return this.translator?.exists(...i)
    }
    setDefaultNamespace(i) {
        this.options.defaultNS = i
    }
    hasLoadedNamespace(i, s={}) {
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
            !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
            !1;
        const c = s.lng || this.resolvedLanguage || this.languages[0]
          , r = this.options ? this.options.fallbackLng : !1
          , d = this.languages[this.languages.length - 1];
        if (c.toLowerCase() === "cimode")
            return !0;
        const m = (p, y) => {
            const g = this.services.backendConnector.state[`${p}|${y}`];
            return g === -1 || g === 0 || g === 2
        }
        ;
        if (s.precheck) {
            const p = s.precheck(this, m);
            if (p !== void 0)
                return p
        }
        return !!(this.hasResourceBundle(c, i) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || m(c, i) && (!r || m(d, i)))
    }
    loadNamespaces(i, s) {
        const c = jn();
        return this.options.ns ? (W(i) && (i = [i]),
        i.forEach(r => {
            this.options.ns.indexOf(r) < 0 && this.options.ns.push(r)
        }
        ),
        this.loadResources(r => {
            c.resolve(),
            s && s(r)
        }
        ),
        c) : (s && s(),
        Promise.resolve())
    }
    loadLanguages(i, s) {
        const c = jn();
        W(i) && (i = [i]);
        const r = this.options.preload || []
          , d = i.filter(m => r.indexOf(m) < 0 && this.services.languageUtils.isSupportedCode(m));
        return d.length ? (this.options.preload = r.concat(d),
        this.loadResources(m => {
            c.resolve(),
            s && s(m)
        }
        ),
        c) : (s && s(),
        Promise.resolve())
    }
    dir(i) {
        if (i || (i = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)),
        !i)
            return "rtl";
        try {
            const r = new Intl.Locale(i);
            if (r && r.getTextInfo) {
                const d = r.getTextInfo();
                if (d && d.direction)
                    return d.direction
            }
        } catch {}
        const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
          , c = this.services?.languageUtils || new Hh(Vh());
        return i.toLowerCase().indexOf("-latn") > 1 ? "ltr" : s.indexOf(c.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(i={}, s) {
        const c = new Yn(i,s);
        return c.createInstance = Yn.createInstance,
        c
    }
    cloneInstance(i={}, s=ri) {
        const c = i.forkResourceStore;
        c && delete i.forkResourceStore;
        const r = {
            ...this.options,
            ...i,
            isClone: !0
        }
          , d = new Yn(r);
        if ((i.debug !== void 0 || i.prefix !== void 0) && (d.logger = d.logger.clone(i)),
        ["store", "services", "language"].forEach(p => {
            d[p] = this[p]
        }
        ),
        d.services = {
            ...this.services
        },
        d.services.utils = {
            hasLoadedNamespace: d.hasLoadedNamespace.bind(d)
        },
        c) {
            const p = Object.keys(this.store.data).reduce( (y, g) => (y[g] = {
                ...this.store.data[g]
            },
            y[g] = Object.keys(y[g]).reduce( (T, S) => (T[S] = {
                ...y[g][S]
            },
            T), y[g]),
            y), {});
            d.store = new Uh(p,r),
            d.services.resourceStore = d.store
        }
        return i.interpolation && (d.services.interpolator = new qh(r)),
        d.translator = new pi(d.services,r),
        d.translator.on("*", (p, ...y) => {
            d.emit(p, ...y)
        }
        ),
        d.init(r, s),
        d.translator.options = r,
        d.translator.backendConnector.services.utils = {
            hasLoadedNamespace: d.hasLoadedNamespace.bind(d)
        },
        d
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const kt = Yn.createInstance();
kt.createInstance;
kt.dir;
kt.init;
kt.loadResources;
kt.reloadResources;
kt.use;
kt.changeLanguage;
kt.getFixedT;
kt.t;
kt.exists;
kt.setDefaultNamespace;
kt.hasLoadedNamespace;
kt.loadNamespaces;
kt.loadLanguages;
const t0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
  , e0 = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
}
  , l0 = f => e0[f]
  , a0 = f => f.replace(t0, l0);
let Is = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: a0,
    transDefaultProps: void 0
};
const n0 = (f={}) => {
    Is = {
        ...Is,
        ...f
    }
}
  , L0 = () => Is;
let hm;
const u0 = f => {
    hm = f
}
  , H0 = () => hm
  , i0 = {
    type: "3rdParty",
    init(f) {
        n0(f.options.react),
        u0(f)
    }
}
  , c0 = {
    learn_more: "Learn More"
}
  , s0 = {
    home: "Home",
    developer: "Developer",
    docs: "Docs",
    github: "Github",
    sun_dao: "SUN DAO",
    dao_governance: "DAO Governance",
    dao_rights: "Governance Rights",
    buyback: "SUN Burn",
    forum: "Forum",
    community: "Community",
    telegram: "Telegram",
    twitter: "X",
    discord: "Discord"
}
  , f0 = {
    wukong: "SUN",
    ecosystem_title: "The TRON Financial Ecosystem",
    ecosystem_subtitle: "Co-building an Open, Free Future on Chain",
    wukong_card_title: "SunX",
    wukong_card_desc: "Decentralized Perpetual Futures. Transparent.Borderless. Truly Free",
    swap_card_title: "SunSwap",
    swap_card_desc: "The First Integrated Platform for Swap, Farming and Self-Governance on TRON",
    launchpad_card_title: "SunPump",
    launchpad_card_desc: "Discover or launch fun meme tokens — PUMP TO THE SUN"
}
  , r0 = {
    title: "SunX",
    subtitle: "Decentralized Perpetual Futures",
    description: "Unlock instant access to ultimate trading",
    button: "SunX",
    bottom_title: "TRON's first perpetual futures DEX",
    feature_transparent: "Transparent&Borderless",
    feature_free: "Truly Free"
}
  , o0 = {
    title: "SunSwap",
    subtitle: "Decentralized AMM Trading",
    tvl: "Total Value Locked",
    volume_7d: "Volume(7d)",
    button: "SunSwap",
    bottom_desc: "The First Integrated Platform for Swap, Farming and Self-Governance on TRON"
}
  , d0 = {
    title: "SunPump",
    subtitle: "Meme Launchpad",
    description: "Discover or launch fun meme tokens — PUMP TO THE SUN",
    button: "SunPump",
    bottom_desc: "The First Meme Fair Launch Platform on TRON"
}
  , h0 = {
    title: "Ecosystem Partners",
    list: {
        tusd: {
            title: "TUSD",
            desc: "Fully collateralized, transparently attested USD stablecoin"
        },
        mexc: {
            title: "MEXC",
            desc: "Simple, secure crypto platform with low fees"
        },
        btt: {
            title: "BitTorrent Chain",
            desc: "High-performance cross‑chain scalability network"
        },
        htx: {
            title: "HTX DAO",
            desc: "Community-driven governance and innovation for HTX"
        },
        nft: {
            title: "APENFT",
            desc: "Foundation bridging fine art and the NFT economy"
        },
        symbiosis: {
            title: "Symbiosis",
            desc: "Bridge EVM and non-EVM liquidity"
        },
        btfs: {
            title: "BTFS",
            desc: "Decentralized storage network powering Web3 data"
        },
        trx: {
            title: "TRON",
            desc: "Scalable, energy‑efficient Layer 1 blockchain infrastructure"
        },
        jst: {
            title: "JustLend DAO",
            desc: "TRON’s native decentralized lending and borrowing protocol"
        },
        aintf: {
            title: "AINFT",
            desc: "AI infrastructure of TRON ecosystem"
        },
        usdd: {
            title: "USDD",
            desc: "Decentralized, over‑collateralized USD‑pegged stablecoin on TRON"
        },
        win: {
            title: "WINkLink",
            desc: "Decentralized oracle network delivering real‑world data on‑chain"
        },
        tronscan: {
            title: "TRONSCAN",
            desc: "Comprehensive TRON blockchain explorer and analytics portal"
        },
        tronlink: {
            title: "TronLink Wallet",
            desc: "Official TRON wallet for secure assets and DApps"
        }
    },
    more: "View More",
    hide: "Hide"
}
  , m0 = {
    title: "SUN Ecosystem"
}
  , g0 = {
    title: "SUN Token",
    sub_title: "The Core Utility Token of SUN.io and SunPump",
    loading: "Refreshing...",
    day: {
        date: "Updated: {{value}}（SGT）",
        name1: "Price",
        name2: "Market Cap",
        name3: "Volume (24h)"
    },
    core: {
        list: [{
            name: "Boosted Yield & Incentives",
            desc: "Stake SUN to enhance liquidity mining rewards and share profits from Curve pools."
        }, {
            name: "Governance Participation",
            desc: "Use SUN to vote on reward allocations, protocol changes, and centralized exchange listing proposals."
        }, {
            name: "Deflationary Mechanism via Buyback",
            desc: "100% of SunPump protocol revenue is used to buy back and burn $SUN, supporting long-term value."
        }]
    },
    burn: {
        title1: "SUN Buyback & Burn",
        desc1: "Buy back and burn tokens to empower the community",
        title2: "To Be Burned  (Est.)",
        title3: "Total Burned",
        btn: "SUN DAO"
    }
}
  , p0 = {
    twitter: "X",
    telegram: "Telegram",
    medium: "#Medium",
    github: "#GitHub",
    docs: "#Docs",
    contracts: "#Contracts",
    wechat: "Wechat",
    help_center: "Sun.io Help Center",
    swap_help_center: "SunSwap Help Center",
    pool_contract: "Stablecoin Pool Contract",
    token_contract: "Token Contract",
    btfs: "BTFS",
    about: "About Us",
    support: "Support",
    forum: "Forum",
    white_paper: "Whitepaper",
    white_paper_mica: "Whitepaper(Mica)",
    accept_tips: "Choosing to connect indicates that you have accepted",
    service: "Terms of Service",
    privacy: "Privacy Policy",
    service_new: "《Terms of Service》",
    privacy_new: "《Privacy Policy》",
    risks: "Risks",
    airdrop: "Airdrop",
    sun_swap: "SUN Swap",
    repurchase: "Burn SUN",
    century_mining: "Century Mining",
    documents: "Developers"
}
  , y0 = {
    hero: {
        title: "SUN Buyback & Burn",
        subtitle1: "Transparent token burn verification & tracking.",
        subtitle2: "Building long-term value through systematic supply reduction."
    },
    stats: {
        cumulativeBurned: "CUMULATIVE BURNED",
        sun: "SUN",
        totalSupplyBurned: "Total Supply Burned",
        burns: "BURNS",
        avgBurn: "AVG / BURN",
        sources: "SOURCES",
        pendingBurn: "PENDING BURN",
        accumulating: "Accumulating",
        nextBurn: "Next burn ~{{n}} days",
        quarterlyBurn: "Quarterly Buyback & Burn",
        lastBurn: "Last burn:",
        destroyed: "destroyed"
    },
    burnProcess: {
        title: "Burn Process",
        subtitle: "SUN implements a systematic buyback & burn mechanism. Protocol revenue purchases SUN on the open market, then permanently destroys it.",
        step1: {
            title: "Initiate Buyback",
            desc: "Collect protocol revenue from all product lines"
        },
        step2: {
            title: "Market Buyback",
            desc: "Purchase SUN tokens on the secondary market"
        },
        step3: {
            title: "Permanent Burn",
            desc: "Send tokens to the dead address irreversibly"
        },
        step4: {
            title: "Result Announcement",
            desc: "Publish burn report with full on-chain proof"
        },
        feature1: {
            title: "Multi-Source Revenue",
            desc: "Revenue is collected from multiple product lines to maximize buyback volume."
        },
        feature2: {
            title: "Smart Contract Execution",
            desc: "All buybacks are executed via audited on-chain contracts (SunMarker & SunBar)."
        },
        feature3: {
            title: "Irreversible Burns",
            desc: "Burned tokens are sent to a dead address and permanently removed from circulation."
        },
        feature4: {
            title: "Transparent Reporting",
            desc: "Every burn is verified on-chain with full transaction hashes publicly available."
        }
    },
    valueCapture: {
        title: "Value Capture",
        subtitle: "Revenue from each product line flows into the buyback & burn mechanism through audited smart contracts.",
        tab: {
            sunswap: "SunSwap",
            sunpump: "SunPump",
            sunx: "SunX"
        },
        sunswap: {
            name: "SunSwap V2",
            desc: "V2 protocol revenue for SUN buyback & burn"
        },
        suncurve: {
            name: "SunCurve",
            desc: "Protocol revenue for SUN buyback & burn"
        },
        sunpump: {
            name: "SunPump",
            desc: "100% of platform revenue for SUN buyback & burn"
        },
        sunbar: {
            name: "SunBar",
            desc: "Burn contract for executing permanent token burns"
        },
        sunx: {
            name: "SunX",
            desc: "50% of net revenue (after maker costs, rebates & mining fees)"
        }
    },
    burnRecords: {
        title: "Burn Records",
        subtitle: "Complete and verifiable on-chain record of every SUN token burn event.",
        totalBurned: "Total Burned",
        buybackAnnouncement: "Buyback Announcement",
        forum: "Forum",
        col: {
            burnTime: "Burn Time",
            source: "Source",
            sunAmount: "SUN Amount",
            value: "Value",
            transaction: "Transaction"
        }
    }
}
  , v0 = {
    header: c0,
    nav: s0,
    hero: f0,
    wukong_section: r0,
    swap_section: o0,
    launchpad_section: d0,
    partner: h0,
    sunEcosystem: m0,
    sunToken: g0,
    footer: p0,
    buyback: y0
}
  , S0 = {
    learn_more: "查看更多"
}
  , b0 = {
    home: "首页",
    developer: "开发者",
    docs: "开发文档",
    github: "Github",
    sun_dao: "悟空道",
    dao_governance: "DAO治理",
    dao_rights: "DAO权益",
    buyback: "SUN回购销毁",
    forum: "论坛",
    community: "社区",
    telegram: "Telegram",
    twitter: "X",
    discord: "Discord"
}
  , E0 = {
    wukong: "孙悟空",
    ecosystem_title: "TRON链上金融生态",
    ecosystem_subtitle: "共建开放自由的链上未来",
    wukong_card_title: "孙悟空",
    wukong_card_desc: "去中心化永续合约交易，透明无界，交易自由",
    swap_card_title: "悟空兑换",
    swap_card_desc: "TRON 首个集兑换、质押挖矿及自治为一体的平台",
    launchpad_card_title: "悟空发射台",
    launchpad_card_desc: "发现或发行有趣的 meme 代币"
}
  , T0 = {
    title: "孙悟空",
    subtitle: "去中心化永续合约交易",
    description: "即刻享极致交易",
    button: "孙悟空",
    bottom_title: "TRON链上首个永续合约DEX",
    feature_transparent: "透明无界",
    feature_free: "交易自由"
}
  , O0 = {
    title: "悟空兑换",
    subtitle: "去中心化AMM交易",
    tvl: "总锁仓价值",
    volume_7d: "交易量(7日)",
    button: "悟空兑换",
    bottom_desc: "TRON 首个集兑换、质押挖矿及自治为一体的平台"
}
  , R0 = {
    title: "悟空发射台",
    subtitle: "Meme发射平台",
    description: "发现或发行有趣的 meme 代币",
    button: "悟空发射台",
    bottom_desc: "TRON 首个 Meme 公平发射平台"
}
  , x0 = {
    title: "合作伙伴",
    list: {
        tusd: {
            title: "TUSD",
            desc: "全额抵押美元稳定币"
        },
        mexc: {
            title: "MEXC",
            desc: "简单、安全且手续费低的加密货币平台"
        },
        btt: {
            title: "BitTorrent Chain",
            desc: "跨链扩容网络"
        },
        htx: {
            title: "HTX DAO",
            desc: "HTX 社区治理组织"
        },
        nft: {
            title: "APENFT",
            desc: "连接艺术与 NFT 基金会"
        },
        symbiosis: {
            title: "Symbiosis",
            desc: "打通EVM和非EVM流动性"
        },
        btfs: {
            title: "BTFS",
            desc: "去中心化存储网络"
        },
        trx: {
            title: "TRON",
            desc: "可扩展高效 Layer1 公链"
        },
        jst: {
            title: "JustLend DAO",
            desc: "TRON 借贷协议"
        },
        aintf: {
            title: "AINFT",
            desc: "波场生态的 AI 基础设施"
        },
        usdd: {
            title: "USDD",
            desc: "去中心化超额抵押稳定币"
        },
        win: {
            title: "WINkLink",
            desc: "去中心化预言机网络"
        },
        tronscan: {
            title: "TRONSCAN",
            desc: "TRON 区块链浏览器"
        },
        tronlink: {
            title: "TronLink Wallet",
            desc: "官方 TRON 钱包"
        }
    },
    more: "查看更多",
    hide: "收起"
}
  , A0 = {
    title: "孙悟空生态"
}
  , z0 = {
    title: "SUN代币",
    sub_title: "SUN.io 和 SunPump 的核心代币",
    loading: "刷新中...",
    day: {
        date: "更新于：{{value}}（新加坡时间）",
        name1: "价格",
        name2: "市值",
        name3: "24小时成交量"
    },
    core: {
        list: [{
            name: "提升收益 & 激励机制",
            desc: "质押 SUN 可提升流动性挖矿奖励，并分享 Curve 流动池利润。"
        }, {
            name: "参与治理",
            desc: "使用 SUN代币 对奖励分配、协议变更及中心化交易所上线提案进行投票。"
        }, {
            name: "通过回购实现通缩机制",
            desc: "100% 的 SunPump 协议收入将用于回购并销毁 $SUN，以支持长期价值。"
        }]
    },
    burn: {
        title1: "SUN 回购与销毁",
        desc1: "回购并销毁代币以赋能社区",
        title2: "待销毁（预估）",
        title3: "累计销毁",
        btn: "悟空道"
    }
}
  , _0 = {
    twitter: "X",
    telegram: "电报",
    medium: "#Medium",
    github: "#GitHub",
    docs: "#Docs",
    contracts: "#Contracts",
    wechat: "微信",
    help_center: "Sun.io帮助中心",
    swap_help_center: "SunSwap帮助中心",
    pool_contract: "稳定币池合约",
    token_contract: "代币合约",
    btfs: "BTFS",
    about: "关于我们",
    support: "支持",
    forum: "论坛",
    white_paper: "白皮书",
    white_paper_mica: "白皮书(Mica)",
    accept_tips: "连接则代表您已接受",
    service: "服务条款",
    privacy: "隐私协议",
    service_new: "《服务条款》",
    privacy_new: "《隐私协议》",
    risks: "风险",
    airdrop: "空投",
    sun_swap: "SUN兑换",
    repurchase: "SUN销毁",
    century_mining: "世纪挖矿",
    documents: "开发者"
}
  , C0 = {
    hero: {
        title: "SUN 回购与销毁",
        subtitle1: "透明的代币销毁验证与追踪。",
        subtitle2: "通过系统性减少供应量构建长期价值。"
    },
    stats: {
        cumulativeBurned: "累计已销毁",
        sun: "SUN",
        totalSupplyBurned: "总供应量已销毁",
        burns: "销毁次数",
        avgBurn: "平均 / 次",
        sources: "来源数",
        pendingBurn: "待销毁",
        accumulating: "积累中",
        nextBurn: "下次销毁约 {{n}} 天",
        quarterlyBurn: "季度回购与销毁",
        lastBurn: "上次销毁：",
        destroyed: "已销毁"
    },
    burnProcess: {
        title: "销毁流程",
        subtitle: "SUN 实行系统化的回购销毁机制。协议收入在公开市场购买 SUN，然后永久销毁。",
        step1: {
            title: "发起回购",
            desc: "从所有产品线收集协议收入"
        },
        step2: {
            title: "市场回购",
            desc: "在二级市场购买 SUN 代币"
        },
        step3: {
            title: "永久销毁",
            desc: "将代币不可逆地发送至黑洞地址"
        },
        step4: {
            title: "结果公告",
            desc: "发布附带完整链上证明的销毁报告"
        },
        feature1: {
            title: "多源收入",
            desc: "从多条产品线收集收入以最大化回购量。"
        },
        feature2: {
            title: "智能合约执行",
            desc: "所有回购均通过审计的链上合约（SunMarker 和 SunBar）执行。"
        },
        feature3: {
            title: "不可逆销毁",
            desc: "销毁的代币被发送至黑洞地址，从流通中永久移除。"
        },
        feature4: {
            title: "透明报告",
            desc: "每次销毁均在链上验证，完整交易哈希公开可查。"
        }
    },
    valueCapture: {
        title: "价值捕获",
        subtitle: "各产品线的收入通过审计的智能合约流入回购销毁机制。",
        tab: {
            sunswap: "SunSwap",
            sunpump: "SunPump",
            sunx: "SunX"
        },
        sunswap: {
            name: "SunSwap V2",
            desc: "V2 协议收入用于 SUN 回购销毁"
        },
        suncurve: {
            name: "SunCurve",
            desc: "协议收入用于 SUN 回购销毁"
        },
        sunpump: {
            name: "SunPump",
            desc: "100% 的平台收入用于 SUN 回购销毁"
        },
        sunbar: {
            name: "SunBar",
            desc: "执行永久代币销毁的销毁合约"
        },
        sunx: {
            name: "SunX",
            desc: "50% 的净收入（扣除做市成本、返佣及挖矿费用后）"
        }
    },
    burnRecords: {
        title: "销毁记录",
        subtitle: "每次 SUN 代币销毁事件的完整可验证链上记录。",
        totalBurned: "总计已销毁",
        buybackAnnouncement: "回购公告",
        forum: "论坛",
        col: {
            burnTime: "销毁时间",
            source: "来源",
            sunAmount: "SUN 数量",
            value: "价值",
            transaction: "交易"
        }
    }
}
  , N0 = {
    header: S0,
    nav: b0,
    hero: E0,
    wukong_section: T0,
    swap_section: O0,
    launchpad_section: R0,
    partner: x0,
    sunEcosystem: A0,
    sunToken: z0,
    footer: _0,
    buyback: C0
}
  , mm = localStorage.getItem("sunwukong-landing-lang") || "zh"
  , D0 = {
    en: {
        translation: v0
    },
    zh: {
        translation: N0
    }
}
  , gm = f => {
    if (typeof document > "u")
        return;
    const i = document.documentElement;
    i.classList.remove("lang-zh", "lang-en"),
    (f === "zh" || f === "en") && i.classList.add(`lang-${f}`)
}
;
kt.use(i0).init({
    resources: D0,
    lng: mm,
    fallbackLng: "zh",
    interpolation: {
        escapeValue: !1
    }
});
gm(kt.language || mm);
kt.on("languageChanged", f => {
    gm(f)
}
);
Wp.createRoot(document.getElementById("root")).render(Pt.jsx(N.StrictMode, {
    children: Pt.jsx(Lv, {})
}));
export {U0 as R, N as a, tf as b, M0 as c, Qp as d, H0 as e, L0 as f, Yp as g, kt as i, Pt as j, $p as r, Ml as u};
