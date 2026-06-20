(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const f of o)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && r(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(o) {
        const f = {};
        return o.integrity && (f.integrity = o.integrity),
        o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? f.credentials = "include" : o.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const f = s(o);
        fetch(o.href, f)
    }
}
)();
var jc = {
    exports: {}
}
  , jl = {};
var _y;
function jx() {
    if (_y)
        return jl;
    _y = 1;
    var n = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.fragment");
    function s(r, o, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f),
        o.key !== void 0 && (d = "" + o.key),
        "key"in o) {
            f = {};
            for (var h in o)
                h !== "key" && (f[h] = o[h])
        } else
            f = o;
        return o = f.ref,
        {
            $$typeof: n,
            type: r,
            key: d,
            ref: o !== void 0 ? o : null,
            props: f
        }
    }
    return jl.Fragment = i,
    jl.jsx = s,
    jl.jsxs = s,
    jl
}
var jy;
function zx() {
    return jy || (jy = 1,
    jc.exports = jx()),
    jc.exports
}
var M = zx()
  , zc = {
    exports: {}
}
  , ut = {};
var zy;
function Lx() {
    if (zy)
        return ut;
    zy = 1;
    var n = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , r = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , h = Symbol.for("react.forward_ref")
      , y = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , v = Symbol.for("react.activity")
      , S = Symbol.iterator;
    function w(R) {
        return R === null || typeof R != "object" ? null : (R = S && R[S] || R["@@iterator"],
        typeof R == "function" ? R : null)
    }
    var x = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , C = Object.assign
      , T = {};
    function _(R, q, Z) {
        this.props = R,
        this.context = q,
        this.refs = T,
        this.updater = Z || x
    }
    _.prototype.isReactComponent = {},
    _.prototype.setState = function(R, q) {
        if (typeof R != "object" && typeof R != "function" && R != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, R, q, "setState")
    }
    ,
    _.prototype.forceUpdate = function(R) {
        this.updater.enqueueForceUpdate(this, R, "forceUpdate")
    }
    ;
    function k() {}
    k.prototype = _.prototype;
    function U(R, q, Z) {
        this.props = R,
        this.context = q,
        this.refs = T,
        this.updater = Z || x
    }
    var X = U.prototype = new k;
    X.constructor = U,
    C(X, _.prototype),
    X.isPureReactComponent = !0;
    var P = Array.isArray;
    function I() {}
    var K = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , J = Object.prototype.hasOwnProperty;
    function at(R, q, Z) {
        var $ = Z.ref;
        return {
            $$typeof: n,
            type: R,
            key: q,
            ref: $ !== void 0 ? $ : null,
            props: Z
        }
    }
    function tt(R, q) {
        return at(R.type, q, R.props)
    }
    function dt(R) {
        return typeof R == "object" && R !== null && R.$$typeof === n
    }
    function ht(R) {
        var q = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + R.replace(/[=:]/g, function(Z) {
            return q[Z]
        })
    }
    var zt = /\/+/g;
    function At(R, q) {
        return typeof R == "object" && R !== null && R.key != null ? ht("" + R.key) : q.toString(36)
    }
    function xt(R) {
        switch (R.status) {
        case "fulfilled":
            return R.value;
        case "rejected":
            throw R.reason;
        default:
            switch (typeof R.status == "string" ? R.then(I, I) : (R.status = "pending",
            R.then(function(q) {
                R.status === "pending" && (R.status = "fulfilled",
                R.value = q)
            }, function(q) {
                R.status === "pending" && (R.status = "rejected",
                R.reason = q)
            })),
            R.status) {
            case "fulfilled":
                return R.value;
            case "rejected":
                throw R.reason
            }
        }
        throw R
    }
    function L(R, q, Z, $, rt) {
        var pt = typeof R;
        (pt === "undefined" || pt === "boolean") && (R = null);
        var Rt = !1;
        if (R === null)
            Rt = !0;
        else
            switch (pt) {
            case "bigint":
            case "string":
            case "number":
                Rt = !0;
                break;
            case "object":
                switch (R.$$typeof) {
                case n:
                case i:
                    Rt = !0;
                    break;
                case g:
                    return Rt = R._init,
                    L(Rt(R._payload), q, Z, $, rt)
                }
            }
        if (Rt)
            return rt = rt(R),
            Rt = $ === "" ? "." + At(R, 0) : $,
            P(rt) ? (Z = "",
            Rt != null && (Z = Rt.replace(zt, "$&/") + "/"),
            L(rt, q, Z, "", function(ki) {
                return ki
            })) : rt != null && (dt(rt) && (rt = tt(rt, Z + (rt.key == null || R && R.key === rt.key ? "" : ("" + rt.key).replace(zt, "$&/") + "/") + Rt)),
            q.push(rt)),
            1;
        Rt = 0;
        var fe = $ === "" ? "." : $ + ":";
        if (P(R))
            for (var Xt = 0; Xt < R.length; Xt++)
                $ = R[Xt],
                pt = fe + At($, Xt),
                Rt += L($, q, Z, pt, rt);
        else if (Xt = w(R),
        typeof Xt == "function")
            for (R = Xt.call(R),
            Xt = 0; !($ = R.next()).done; )
                $ = $.value,
                pt = fe + At($, Xt++),
                Rt += L($, q, Z, pt, rt);
        else if (pt === "object") {
            if (typeof R.then == "function")
                return L(xt(R), q, Z, $, rt);
            throw q = String(R),
            Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Rt
    }
    function Q(R, q, Z) {
        if (R == null)
            return R;
        var $ = []
          , rt = 0;
        return L(R, $, "", "", function(pt) {
            return q.call(Z, pt, rt++)
        }),
        $
    }
    function F(R) {
        if (R._status === -1) {
            var q = R._result;
            q = q(),
            q.then(function(Z) {
                (R._status === 0 || R._status === -1) && (R._status = 1,
                R._result = Z)
            }, function(Z) {
                (R._status === 0 || R._status === -1) && (R._status = 2,
                R._result = Z)
            }),
            R._status === -1 && (R._status = 0,
            R._result = q)
        }
        if (R._status === 1)
            return R._result.default;
        throw R._result
    }
    var ot = typeof reportError == "function" ? reportError : function(R) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var q = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
                error: R
            });
            if (!window.dispatchEvent(q))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", R);
            return
        }
        console.error(R)
    }
      , mt = {
        map: Q,
        forEach: function(R, q, Z) {
            Q(R, function() {
                q.apply(this, arguments)
            }, Z)
        },
        count: function(R) {
            var q = 0;
            return Q(R, function() {
                q++
            }),
            q
        },
        toArray: function(R) {
            return Q(R, function(q) {
                return q
            }) || []
        },
        only: function(R) {
            if (!dt(R))
                throw Error("React.Children.only expected to receive a single React element child.");
            return R
        }
    };
    return ut.Activity = v,
    ut.Children = mt,
    ut.Component = _,
    ut.Fragment = s,
    ut.Profiler = o,
    ut.PureComponent = U,
    ut.StrictMode = r,
    ut.Suspense = y,
    ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K,
    ut.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(R) {
            return K.H.useMemoCache(R)
        }
    },
    ut.cache = function(R) {
        return function() {
            return R.apply(null, arguments)
        }
    }
    ,
    ut.cacheSignal = function() {
        return null
    }
    ,
    ut.cloneElement = function(R, q, Z) {
        if (R == null)
            throw Error("The argument must be a React element, but you passed " + R + ".");
        var $ = C({}, R.props)
          , rt = R.key;
        if (q != null)
            for (pt in q.key !== void 0 && (rt = "" + q.key),
            q)
                !J.call(q, pt) || pt === "key" || pt === "__self" || pt === "__source" || pt === "ref" && q.ref === void 0 || ($[pt] = q[pt]);
        var pt = arguments.length - 2;
        if (pt === 1)
            $.children = Z;
        else if (1 < pt) {
            for (var Rt = Array(pt), fe = 0; fe < pt; fe++)
                Rt[fe] = arguments[fe + 2];
            $.children = Rt
        }
        return at(R.type, rt, $)
    }
    ,
    ut.createContext = function(R) {
        return R = {
            $$typeof: d,
            _currentValue: R,
            _currentValue2: R,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        R.Provider = R,
        R.Consumer = {
            $$typeof: f,
            _context: R
        },
        R
    }
    ,
    ut.createElement = function(R, q, Z) {
        var $, rt = {}, pt = null;
        if (q != null)
            for ($ in q.key !== void 0 && (pt = "" + q.key),
            q)
                J.call(q, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (rt[$] = q[$]);
        var Rt = arguments.length - 2;
        if (Rt === 1)
            rt.children = Z;
        else if (1 < Rt) {
            for (var fe = Array(Rt), Xt = 0; Xt < Rt; Xt++)
                fe[Xt] = arguments[Xt + 2];
            rt.children = fe
        }
        if (R && R.defaultProps)
            for ($ in Rt = R.defaultProps,
            Rt)
                rt[$] === void 0 && (rt[$] = Rt[$]);
        return at(R, pt, rt)
    }
    ,
    ut.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ut.forwardRef = function(R) {
        return {
            $$typeof: h,
            render: R
        }
    }
    ,
    ut.isValidElement = dt,
    ut.lazy = function(R) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: R
            },
            _init: F
        }
    }
    ,
    ut.memo = function(R, q) {
        return {
            $$typeof: m,
            type: R,
            compare: q === void 0 ? null : q
        }
    }
    ,
    ut.startTransition = function(R) {
        var q = K.T
          , Z = {};
        K.T = Z;
        try {
            var $ = R()
              , rt = K.S;
            rt !== null && rt(Z, $),
            typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(I, ot)
        } catch (pt) {
            ot(pt)
        } finally {
            q !== null && Z.types !== null && (q.types = Z.types),
            K.T = q
        }
    }
    ,
    ut.unstable_useCacheRefresh = function() {
        return K.H.useCacheRefresh()
    }
    ,
    ut.use = function(R) {
        return K.H.use(R)
    }
    ,
    ut.useActionState = function(R, q, Z) {
        return K.H.useActionState(R, q, Z)
    }
    ,
    ut.useCallback = function(R, q) {
        return K.H.useCallback(R, q)
    }
    ,
    ut.useContext = function(R) {
        return K.H.useContext(R)
    }
    ,
    ut.useDebugValue = function() {}
    ,
    ut.useDeferredValue = function(R, q) {
        return K.H.useDeferredValue(R, q)
    }
    ,
    ut.useEffect = function(R, q) {
        return K.H.useEffect(R, q)
    }
    ,
    ut.useEffectEvent = function(R) {
        return K.H.useEffectEvent(R)
    }
    ,
    ut.useId = function() {
        return K.H.useId()
    }
    ,
    ut.useImperativeHandle = function(R, q, Z) {
        return K.H.useImperativeHandle(R, q, Z)
    }
    ,
    ut.useInsertionEffect = function(R, q) {
        return K.H.useInsertionEffect(R, q)
    }
    ,
    ut.useLayoutEffect = function(R, q) {
        return K.H.useLayoutEffect(R, q)
    }
    ,
    ut.useMemo = function(R, q) {
        return K.H.useMemo(R, q)
    }
    ,
    ut.useOptimistic = function(R, q) {
        return K.H.useOptimistic(R, q)
    }
    ,
    ut.useReducer = function(R, q, Z) {
        return K.H.useReducer(R, q, Z)
    }
    ,
    ut.useRef = function(R) {
        return K.H.useRef(R)
    }
    ,
    ut.useState = function(R) {
        return K.H.useState(R)
    }
    ,
    ut.useSyncExternalStore = function(R, q, Z) {
        return K.H.useSyncExternalStore(R, q, Z)
    }
    ,
    ut.useTransition = function() {
        return K.H.useTransition()
    }
    ,
    ut.version = "19.2.5",
    ut
}
var Ly;
function qf() {
    return Ly || (Ly = 1,
    zc.exports = Lx()),
    zc.exports
}
var A = qf()
  , Lc = {
    exports: {}
}
  , zl = {}
  , Vc = {
    exports: {}
}
  , Uc = {};
var Vy;
function Vx() {
    return Vy || (Vy = 1,
    (function(n) {
        function i(L, Q) {
            var F = L.length;
            L.push(Q);
            t: for (; 0 < F; ) {
                var ot = F - 1 >>> 1
                  , mt = L[ot];
                if (0 < o(mt, Q))
                    L[ot] = Q,
                    L[F] = mt,
                    F = ot;
                else
                    break t
            }
        }
        function s(L) {
            return L.length === 0 ? null : L[0]
        }
        function r(L) {
            if (L.length === 0)
                return null;
            var Q = L[0]
              , F = L.pop();
            if (F !== Q) {
                L[0] = F;
                t: for (var ot = 0, mt = L.length, R = mt >>> 1; ot < R; ) {
                    var q = 2 * (ot + 1) - 1
                      , Z = L[q]
                      , $ = q + 1
                      , rt = L[$];
                    if (0 > o(Z, F))
                        $ < mt && 0 > o(rt, Z) ? (L[ot] = rt,
                        L[$] = F,
                        ot = $) : (L[ot] = Z,
                        L[q] = F,
                        ot = q);
                    else if ($ < mt && 0 > o(rt, F))
                        L[ot] = rt,
                        L[$] = F,
                        ot = $;
                    else
                        break t
                }
            }
            return Q
        }
        function o(L, Q) {
            var F = L.sortIndex - Q.sortIndex;
            return F !== 0 ? F : L.id - Q.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , h = d.now();
            n.unstable_now = function() {
                return d.now() - h
            }
        }
        var y = []
          , m = []
          , g = 1
          , v = null
          , S = 3
          , w = !1
          , x = !1
          , C = !1
          , T = !1
          , _ = typeof setTimeout == "function" ? setTimeout : null
          , k = typeof clearTimeout == "function" ? clearTimeout : null
          , U = typeof setImmediate < "u" ? setImmediate : null;
        function X(L) {
            for (var Q = s(m); Q !== null; ) {
                if (Q.callback === null)
                    r(m);
                else if (Q.startTime <= L)
                    r(m),
                    Q.sortIndex = Q.expirationTime,
                    i(y, Q);
                else
                    break;
                Q = s(m)
            }
        }
        function P(L) {
            if (C = !1,
            X(L),
            !x)
                if (s(y) !== null)
                    x = !0,
                    I || (I = !0,
                    ht());
                else {
                    var Q = s(m);
                    Q !== null && xt(P, Q.startTime - L)
                }
        }
        var I = !1
          , K = -1
          , J = 5
          , at = -1;
        function tt() {
            return T ? !0 : !(n.unstable_now() - at < J)
        }
        function dt() {
            if (T = !1,
            I) {
                var L = n.unstable_now();
                at = L;
                var Q = !0;
                try {
                    t: {
                        x = !1,
                        C && (C = !1,
                        k(K),
                        K = -1),
                        w = !0;
                        var F = S;
                        try {
                            e: {
                                for (X(L),
                                v = s(y); v !== null && !(v.expirationTime > L && tt()); ) {
                                    var ot = v.callback;
                                    if (typeof ot == "function") {
                                        v.callback = null,
                                        S = v.priorityLevel;
                                        var mt = ot(v.expirationTime <= L);
                                        if (L = n.unstable_now(),
                                        typeof mt == "function") {
                                            v.callback = mt,
                                            X(L),
                                            Q = !0;
                                            break e
                                        }
                                        v === s(y) && r(y),
                                        X(L)
                                    } else
                                        r(y);
                                    v = s(y)
                                }
                                if (v !== null)
                                    Q = !0;
                                else {
                                    var R = s(m);
                                    R !== null && xt(P, R.startTime - L),
                                    Q = !1
                                }
                            }
                            break t
                        } finally {
                            v = null,
                            S = F,
                            w = !1
                        }
                        Q = void 0
                    }
                } finally {
                    Q ? ht() : I = !1
                }
            }
        }
        var ht;
        if (typeof U == "function")
            ht = function() {
                U(dt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var zt = new MessageChannel
              , At = zt.port2;
            zt.port1.onmessage = dt,
            ht = function() {
                At.postMessage(null)
            }
        } else
            ht = function() {
                _(dt, 0)
            }
            ;
        function xt(L, Q) {
            K = _(function() {
                L(n.unstable_now())
            }, Q)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(L) {
            L.callback = null
        }
        ,
        n.unstable_forceFrameRate = function(L) {
            0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < L ? Math.floor(1e3 / L) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        n.unstable_next = function(L) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var Q = 3;
                break;
            default:
                Q = S
            }
            var F = S;
            S = Q;
            try {
                return L()
            } finally {
                S = F
            }
        }
        ,
        n.unstable_requestPaint = function() {
            T = !0
        }
        ,
        n.unstable_runWithPriority = function(L, Q) {
            switch (L) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                L = 3
            }
            var F = S;
            S = L;
            try {
                return Q()
            } finally {
                S = F
            }
        }
        ,
        n.unstable_scheduleCallback = function(L, Q, F) {
            var ot = n.unstable_now();
            switch (typeof F == "object" && F !== null ? (F = F.delay,
            F = typeof F == "number" && 0 < F ? ot + F : ot) : F = ot,
            L) {
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
            return mt = F + mt,
            L = {
                id: g++,
                callback: Q,
                priorityLevel: L,
                startTime: F,
                expirationTime: mt,
                sortIndex: -1
            },
            F > ot ? (L.sortIndex = F,
            i(m, L),
            s(y) === null && L === s(m) && (C ? (k(K),
            K = -1) : C = !0,
            xt(P, F - ot))) : (L.sortIndex = mt,
            i(y, L),
            x || w || (x = !0,
            I || (I = !0,
            ht()))),
            L
        }
        ,
        n.unstable_shouldYield = tt,
        n.unstable_wrapCallback = function(L) {
            var Q = S;
            return function() {
                var F = S;
                S = Q;
                try {
                    return L.apply(this, arguments)
                } finally {
                    S = F
                }
            }
        }
    }
    )(Uc)),
    Uc
}
var Uy;
function Ux() {
    return Uy || (Uy = 1,
    Vc.exports = Vx()),
    Vc.exports
}
var Bc = {
    exports: {}
}
  , ue = {};
var By;
function Bx() {
    if (By)
        return ue;
    By = 1;
    var n = qf();
    function i(y) {
        var m = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var g = 2; g < arguments.length; g++)
                m += "&args[]=" + encodeURIComponent(arguments[g])
        }
        return "Minified React error #" + y + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function s() {}
    var r = {
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
      , o = Symbol.for("react.portal");
    function f(y, m, g) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: v == null ? null : "" + v,
            children: y,
            containerInfo: m,
            implementation: g
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(y, m) {
        if (y === "font")
            return "";
        if (typeof m == "string")
            return m === "use-credentials" ? m : ""
    }
    return ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
    ue.createPortal = function(y, m) {
        var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            throw Error(i(299));
        return f(y, m, null, g)
    }
    ,
    ue.flushSync = function(y) {
        var m = d.T
          , g = r.p;
        try {
            if (d.T = null,
            r.p = 2,
            y)
                return y()
        } finally {
            d.T = m,
            r.p = g,
            r.d.f()
        }
    }
    ,
    ue.preconnect = function(y, m) {
        typeof y == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        r.d.C(y, m))
    }
    ,
    ue.prefetchDNS = function(y) {
        typeof y == "string" && r.d.D(y)
    }
    ,
    ue.preinit = function(y, m) {
        if (typeof y == "string" && m && typeof m.as == "string") {
            var g = m.as
              , v = h(g, m.crossOrigin)
              , S = typeof m.integrity == "string" ? m.integrity : void 0
              , w = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            g === "style" ? r.d.S(y, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: w
            }) : g === "script" && r.d.X(y, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: w,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }
    ,
    ue.preinitModule = function(y, m) {
        if (typeof y == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var g = h(m.as, m.crossOrigin);
                    r.d.M(y, {
                        crossOrigin: g,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else
                m == null && r.d.M(y)
    }
    ,
    ue.preload = function(y, m) {
        if (typeof y == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var g = m.as
              , v = h(g, m.crossOrigin);
            r.d.L(y, g, {
                crossOrigin: v,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }
    ,
    ue.preloadModule = function(y, m) {
        if (typeof y == "string")
            if (m) {
                var g = h(m.as, m.crossOrigin);
                r.d.m(y, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: g,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else
                r.d.m(y)
    }
    ,
    ue.requestFormReset = function(y) {
        r.d.r(y)
    }
    ,
    ue.unstable_batchedUpdates = function(y, m) {
        return y(m)
    }
    ,
    ue.useFormState = function(y, m, g) {
        return d.H.useFormState(y, m, g)
    }
    ,
    ue.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    ue.version = "19.2.5",
    ue
}
var Hy;
function Hx() {
    if (Hy)
        return Bc.exports;
    Hy = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (i) {
                console.error(i)
            }
    }
    return n(),
    Bc.exports = Bx(),
    Bc.exports
}
var ky;
function kx() {
    if (ky)
        return zl;
    ky = 1;
    var n = Ux()
      , i = qf()
      , s = Hx();
    function r(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                e += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function f(t) {
        var e = t
          , a = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (a = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? a : null
    }
    function d(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function h(t) {
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
        if (f(t) !== t)
            throw Error(r(188))
    }
    function m(t) {
        var e = t.alternate;
        if (!e) {
            if (e = f(t),
            e === null)
                throw Error(r(188));
            return e !== t ? null : t
        }
        for (var a = t, l = e; ; ) {
            var u = a.return;
            if (u === null)
                break;
            var c = u.alternate;
            if (c === null) {
                if (l = u.return,
                l !== null) {
                    a = l;
                    continue
                }
                break
            }
            if (u.child === c.child) {
                for (c = u.child; c; ) {
                    if (c === a)
                        return y(u),
                        t;
                    if (c === l)
                        return y(u),
                        e;
                    c = c.sibling
                }
                throw Error(r(188))
            }
            if (a.return !== l.return)
                a = u,
                l = c;
            else {
                for (var p = !1, b = u.child; b; ) {
                    if (b === a) {
                        p = !0,
                        a = u,
                        l = c;
                        break
                    }
                    if (b === l) {
                        p = !0,
                        l = u,
                        a = c;
                        break
                    }
                    b = b.sibling
                }
                if (!p) {
                    for (b = c.child; b; ) {
                        if (b === a) {
                            p = !0,
                            a = c,
                            l = u;
                            break
                        }
                        if (b === l) {
                            p = !0,
                            l = c,
                            a = u;
                            break
                        }
                        b = b.sibling
                    }
                    if (!p)
                        throw Error(r(189))
                }
            }
            if (a.alternate !== l)
                throw Error(r(190))
        }
        if (a.tag !== 3)
            throw Error(r(188));
        return a.stateNode.current === a ? t : e
    }
    function g(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = g(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var v = Object.assign
      , S = Symbol.for("react.element")
      , w = Symbol.for("react.transitional.element")
      , x = Symbol.for("react.portal")
      , C = Symbol.for("react.fragment")
      , T = Symbol.for("react.strict_mode")
      , _ = Symbol.for("react.profiler")
      , k = Symbol.for("react.consumer")
      , U = Symbol.for("react.context")
      , X = Symbol.for("react.forward_ref")
      , P = Symbol.for("react.suspense")
      , I = Symbol.for("react.suspense_list")
      , K = Symbol.for("react.memo")
      , J = Symbol.for("react.lazy")
      , at = Symbol.for("react.activity")
      , tt = Symbol.for("react.memo_cache_sentinel")
      , dt = Symbol.iterator;
    function ht(t) {
        return t === null || typeof t != "object" ? null : (t = dt && t[dt] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var zt = Symbol.for("react.client.reference");
    function At(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === zt ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case C:
            return "Fragment";
        case _:
            return "Profiler";
        case T:
            return "StrictMode";
        case P:
            return "Suspense";
        case I:
            return "SuspenseList";
        case at:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case x:
                return "Portal";
            case U:
                return t.displayName || "Context";
            case k:
                return (t._context.displayName || "Context") + ".Consumer";
            case X:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case K:
                return e = t.displayName || null,
                e !== null ? e : At(t.type) || "Memo";
            case J:
                e = t._payload,
                t = t._init;
                try {
                    return At(t(e))
                } catch {}
            }
        return null
    }
    var xt = Array.isArray
      , L = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , F = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ot = []
      , mt = -1;
    function R(t) {
        return {
            current: t
        }
    }
    function q(t) {
        0 > mt || (t.current = ot[mt],
        ot[mt] = null,
        mt--)
    }
    function Z(t, e) {
        mt++,
        ot[mt] = t.current,
        t.current = e
    }
    var $ = R(null)
      , rt = R(null)
      , pt = R(null)
      , Rt = R(null);
    function fe(t, e) {
        switch (Z(pt, e),
        Z(rt, t),
        Z($, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? ey(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = ey(e),
                t = ny(e, t);
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
        q($),
        Z($, t)
    }
    function Xt() {
        q($),
        q(rt),
        q(pt)
    }
    function ki(t) {
        t.memoizedState !== null && Z(Rt, t);
        var e = $.current
          , a = ny(e, t.type);
        e !== a && (Z(rt, t),
        Z($, a))
    }
    function ls(t) {
        rt.current === t && (q($),
        q(rt)),
        Rt.current === t && (q(Rt),
        Dl._currentValue = F)
    }
    var po, Nd;
    function fa(t) {
        if (po === void 0)
            try {
                throw Error()
            } catch (a) {
                var e = a.stack.trim().match(/\n( *(at )?)/);
                po = e && e[1] || "",
                Nd = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + po + t + Nd
    }
    var yo = !1;
    function go(t, e) {
        if (!t || yo)
            return "";
        yo = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var Y = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(Y.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Y, [])
                                } catch (B) {
                                    var z = B
                                }
                                Reflect.construct(t, [], Y)
                            } else {
                                try {
                                    Y.call()
                                } catch (B) {
                                    z = B
                                }
                                t.call(Y.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (B) {
                                z = B
                            }
                            (Y = t()) && typeof Y.catch == "function" && Y.catch(function() {})
                        }
                    } catch (B) {
                        if (B && z && typeof B.stack == "string")
                            return [B.stack, z.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = l.DetermineComponentFrameRoot()
              , p = c[0]
              , b = c[1];
            if (p && b) {
                var E = p.split(`
`)
                  , j = b.split(`
`);
                for (u = l = 0; l < E.length && !E[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; u < j.length && !j[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                if (l === E.length || u === j.length)
                    for (l = E.length - 1,
                    u = j.length - 1; 1 <= l && 0 <= u && E[l] !== j[u]; )
                        u--;
                for (; 1 <= l && 0 <= u; l--,
                u--)
                    if (E[l] !== j[u]) {
                        if (l !== 1 || u !== 1)
                            do
                                if (l--,
                                u--,
                                0 > u || E[l] !== j[u]) {
                                    var H = `
` + E[l].replace(" at new ", " at ");
                                    return t.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", t.displayName)),
                                    H
                                }
                            while (1 <= l && 0 <= u);
                        break
                    }
            }
        } finally {
            yo = !1,
            Error.prepareStackTrace = a
        }
        return (a = t ? t.displayName || t.name : "") ? fa(a) : ""
    }
    function cb(t, e) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return fa(t.type);
        case 16:
            return fa("Lazy");
        case 13:
            return t.child !== e && e !== null ? fa("Suspense Fallback") : fa("Suspense");
        case 19:
            return fa("SuspenseList");
        case 0:
        case 15:
            return go(t.type, !1);
        case 11:
            return go(t.type.render, !1);
        case 1:
            return go(t.type, !0);
        case 31:
            return fa("Activity");
        default:
            return ""
        }
    }
    function _d(t) {
        try {
            var e = ""
              , a = null;
            do
                e += cb(t, a),
                a = t,
                t = t.return;
            while (t);
            return e
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var vo = Object.prototype.hasOwnProperty
      , bo = n.unstable_scheduleCallback
      , So = n.unstable_cancelCallback
      , fb = n.unstable_shouldYield
      , db = n.unstable_requestPaint
      , we = n.unstable_now
      , hb = n.unstable_getCurrentPriorityLevel
      , jd = n.unstable_ImmediatePriority
      , zd = n.unstable_UserBlockingPriority
      , ss = n.unstable_NormalPriority
      , mb = n.unstable_LowPriority
      , Ld = n.unstable_IdlePriority
      , pb = n.log
      , yb = n.unstable_setDisableYieldValue
      , qi = null
      , Re = null;
    function Ln(t) {
        if (typeof pb == "function" && yb(t),
        Re && typeof Re.setStrictMode == "function")
            try {
                Re.setStrictMode(qi, t)
            } catch {}
    }
    var Ce = Math.clz32 ? Math.clz32 : bb
      , gb = Math.log
      , vb = Math.LN2;
    function bb(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (gb(t) / vb | 0) | 0
    }
    var rs = 256
      , os = 262144
      , us = 4194304;
    function da(t) {
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
    function cs(t, e, a) {
        var l = t.pendingLanes;
        if (l === 0)
            return 0;
        var u = 0
          , c = t.suspendedLanes
          , p = t.pingedLanes;
        t = t.warmLanes;
        var b = l & 134217727;
        return b !== 0 ? (l = b & ~c,
        l !== 0 ? u = da(l) : (p &= b,
        p !== 0 ? u = da(p) : a || (a = b & ~t,
        a !== 0 && (u = da(a))))) : (b = l & ~c,
        b !== 0 ? u = da(b) : p !== 0 ? u = da(p) : a || (a = l & ~t,
        a !== 0 && (u = da(a)))),
        u === 0 ? 0 : e !== 0 && e !== u && (e & c) === 0 && (c = u & -u,
        a = e & -e,
        c >= a || c === 32 && (a & 4194048) !== 0) ? e : u
    }
    function Gi(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function Sb(t, e) {
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
    function Vd() {
        var t = us;
        return us <<= 1,
        (us & 62914560) === 0 && (us = 4194304),
        t
    }
    function xo(t) {
        for (var e = [], a = 0; 31 > a; a++)
            e.push(t);
        return e
    }
    function Yi(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function xb(t, e, a, l, u, c) {
        var p = t.pendingLanes;
        t.pendingLanes = a,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= a,
        t.entangledLanes &= a,
        t.errorRecoveryDisabledLanes &= a,
        t.shellSuspendCounter = 0;
        var b = t.entanglements
          , E = t.expirationTimes
          , j = t.hiddenUpdates;
        for (a = p & ~a; 0 < a; ) {
            var H = 31 - Ce(a)
              , Y = 1 << H;
            b[H] = 0,
            E[H] = -1;
            var z = j[H];
            if (z !== null)
                for (j[H] = null,
                H = 0; H < z.length; H++) {
                    var B = z[H];
                    B !== null && (B.lane &= -536870913)
                }
            a &= ~Y
        }
        l !== 0 && Ud(t, l, 0),
        c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(p & ~e))
    }
    function Ud(t, e, a) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var l = 31 - Ce(e);
        t.entangledLanes |= e,
        t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930
    }
    function Bd(t, e) {
        var a = t.entangledLanes |= e;
        for (t = t.entanglements; a; ) {
            var l = 31 - Ce(a)
              , u = 1 << l;
            u & e | t[l] & e && (t[l] |= e),
            a &= ~u
        }
    }
    function Hd(t, e) {
        var a = e & -e;
        return a = (a & 42) !== 0 ? 1 : To(a),
        (a & (t.suspendedLanes | e)) !== 0 ? 0 : a
    }
    function To(t) {
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
    function Eo(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function kd() {
        var t = Q.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : wy(t.type))
    }
    function qd(t, e) {
        var a = Q.p;
        try {
            return Q.p = t,
            e()
        } finally {
            Q.p = a
        }
    }
    var Vn = Math.random().toString(36).slice(2)
      , ne = "__reactFiber$" + Vn
      , ye = "__reactProps$" + Vn
      , ka = "__reactContainer$" + Vn
      , Ao = "__reactEvents$" + Vn
      , Tb = "__reactListeners$" + Vn
      , Eb = "__reactHandles$" + Vn
      , Gd = "__reactResources$" + Vn
      , Xi = "__reactMarker$" + Vn;
    function wo(t) {
        delete t[ne],
        delete t[ye],
        delete t[Ao],
        delete t[Tb],
        delete t[Eb]
    }
    function qa(t) {
        var e = t[ne];
        if (e)
            return e;
        for (var a = t.parentNode; a; ) {
            if (e = a[ka] || a[ne]) {
                if (a = e.alternate,
                e.child !== null || a !== null && a.child !== null)
                    for (t = uy(t); t !== null; ) {
                        if (a = t[ne])
                            return a;
                        t = uy(t)
                    }
                return e
            }
            t = a,
            a = t.parentNode
        }
        return null
    }
    function Ga(t) {
        if (t = t[ne] || t[ka]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function Pi(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(r(33))
    }
    function Ya(t) {
        var e = t[Gd];
        return e || (e = t[Gd] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function te(t) {
        t[Xi] = !0
    }
    var Yd = new Set
      , Xd = {};
    function ha(t, e) {
        Xa(t, e),
        Xa(t + "Capture", e)
    }
    function Xa(t, e) {
        for (Xd[t] = e,
        t = 0; t < e.length; t++)
            Yd.add(e[t])
    }
    var Ab = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Pd = {}
      , Kd = {};
    function wb(t) {
        return vo.call(Kd, t) ? !0 : vo.call(Pd, t) ? !1 : Ab.test(t) ? Kd[t] = !0 : (Pd[t] = !0,
        !1)
    }
    function fs(t, e, a) {
        if (wb(e))
            if (a === null)
                t.removeAttribute(e);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var l = e.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + a)
            }
    }
    function ds(t, e, a) {
        if (a === null)
            t.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + a)
        }
    }
    function yn(t, e, a, l) {
        if (l === null)
            t.removeAttribute(a);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(a);
                return
            }
            t.setAttributeNS(e, a, "" + l)
        }
    }
    function Ue(t) {
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
    function Qd(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function Rb(t, e, a) {
        var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var u = l.get
              , c = l.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(p) {
                    a = "" + p,
                    c.call(this, p)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(p) {
                    a = "" + p
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function Ro(t) {
        if (!t._valueTracker) {
            var e = Qd(t) ? "checked" : "value";
            t._valueTracker = Rb(t, e, "" + t[e])
        }
    }
    function Zd(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var a = e.getValue()
          , l = "";
        return t && (l = Qd(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== a ? (e.setValue(t),
        !0) : !1
    }
    function hs(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var Cb = /[\n"\\]/g;
    function Be(t) {
        return t.replace(Cb, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function Co(t, e, a, l, u, c, p, b) {
        t.name = "",
        p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.type = p : t.removeAttribute("type"),
        e != null ? p === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ue(e)) : t.value !== "" + Ue(e) && (t.value = "" + Ue(e)) : p !== "submit" && p !== "reset" || t.removeAttribute("value"),
        e != null ? Mo(t, p, Ue(e)) : a != null ? Mo(t, p, Ue(a)) : l != null && t.removeAttribute("value"),
        u == null && c != null && (t.defaultChecked = !!c),
        u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + Ue(b) : t.removeAttribute("name")
    }
    function Fd(t, e, a, l, u, c, p, b) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c),
        e != null || a != null) {
            if (!(c !== "submit" && c !== "reset" || e != null)) {
                Ro(t);
                return
            }
            a = a != null ? "" + Ue(a) : "",
            e = e != null ? "" + Ue(e) : a,
            b || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        l = l ?? u,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        t.checked = b ? t.checked : !!l,
        t.defaultChecked = !!l,
        p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.name = p),
        Ro(t)
    }
    function Mo(t, e, a) {
        e === "number" && hs(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
    }
    function Pa(t, e, a, l) {
        if (t = t.options,
        e) {
            e = {};
            for (var u = 0; u < a.length; u++)
                e["$" + a[u]] = !0;
            for (a = 0; a < t.length; a++)
                u = e.hasOwnProperty("$" + t[a].value),
                t[a].selected !== u && (t[a].selected = u),
                u && l && (t[a].defaultSelected = !0)
        } else {
            for (a = "" + Ue(a),
            e = null,
            u = 0; u < t.length; u++) {
                if (t[u].value === a) {
                    t[u].selected = !0,
                    l && (t[u].defaultSelected = !0);
                    return
                }
                e !== null || t[u].disabled || (e = t[u])
            }
            e !== null && (e.selected = !0)
        }
    }
    function Jd(t, e, a) {
        if (e != null && (e = "" + Ue(e),
        e !== t.value && (t.value = e),
        a == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = a != null ? "" + Ue(a) : ""
    }
    function $d(t, e, a, l) {
        if (e == null) {
            if (l != null) {
                if (a != null)
                    throw Error(r(92));
                if (xt(l)) {
                    if (1 < l.length)
                        throw Error(r(93));
                    l = l[0]
                }
                a = l
            }
            a == null && (a = ""),
            e = a
        }
        a = Ue(e),
        t.defaultValue = a,
        l = t.textContent,
        l === a && l !== "" && l !== null && (t.value = l),
        Ro(t)
    }
    function Ka(t, e) {
        if (e) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var Mb = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Wd(t, e, a) {
        var l = e.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || Mb.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px"
    }
    function Id(t, e, a) {
        if (e != null && typeof e != "object")
            throw Error(r(62));
        if (t = t.style,
        a != null) {
            for (var l in a)
                !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var u in e)
                l = e[u],
                e.hasOwnProperty(u) && a[u] !== l && Wd(t, u, l)
        } else
            for (var c in e)
                e.hasOwnProperty(c) && Wd(t, c, e[c])
    }
    function Do(t) {
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
    var Db = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Ob = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ms(t) {
        return Ob.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function gn() {}
    var Oo = null;
    function No(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Qa = null
      , Za = null;
    function th(t) {
        var e = Ga(t);
        if (e && (t = e.stateNode)) {
            var a = t[ye] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (Co(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                e = a.name,
                a.type === "radio" && e != null) {
                    for (a = t; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + Be("" + e) + '"][type="radio"]'),
                    e = 0; e < a.length; e++) {
                        var l = a[e];
                        if (l !== t && l.form === t.form) {
                            var u = l[ye] || null;
                            if (!u)
                                throw Error(r(90));
                            Co(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                        }
                    }
                    for (e = 0; e < a.length; e++)
                        l = a[e],
                        l.form === t.form && Zd(l)
                }
                break t;
            case "textarea":
                Jd(t, a.value, a.defaultValue);
                break t;
            case "select":
                e = a.value,
                e != null && Pa(t, !!a.multiple, e, !1)
            }
        }
    }
    var _o = !1;
    function eh(t, e, a) {
        if (_o)
            return t(e, a);
        _o = !0;
        try {
            var l = t(e);
            return l
        } finally {
            if (_o = !1,
            (Qa !== null || Za !== null) && (er(),
            Qa && (e = Qa,
            t = Za,
            Za = Qa = null,
            th(e),
            t)))
                for (e = 0; e < t.length; e++)
                    th(t[e])
        }
    }
    function Ki(t, e) {
        var a = t.stateNode;
        if (a === null)
            return null;
        var l = a[ye] || null;
        if (l === null)
            return null;
        a = l[e];
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
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (a && typeof a != "function")
            throw Error(r(231, e, typeof a));
        return a
    }
    var vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , jo = !1;
    if (vn)
        try {
            var Qi = {};
            Object.defineProperty(Qi, "passive", {
                get: function() {
                    jo = !0
                }
            }),
            window.addEventListener("test", Qi, Qi),
            window.removeEventListener("test", Qi, Qi)
        } catch {
            jo = !1
        }
    var Un = null
      , zo = null
      , ps = null;
    function nh() {
        if (ps)
            return ps;
        var t, e = zo, a = e.length, l, u = "value"in Un ? Un.value : Un.textContent, c = u.length;
        for (t = 0; t < a && e[t] === u[t]; t++)
            ;
        var p = a - t;
        for (l = 1; l <= p && e[a - l] === u[c - l]; l++)
            ;
        return ps = u.slice(t, 1 < l ? 1 - l : void 0)
    }
    function ys(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function gs() {
        return !0
    }
    function ah() {
        return !1
    }
    function ge(t) {
        function e(a, l, u, c, p) {
            this._reactName = a,
            this._targetInst = u,
            this.type = l,
            this.nativeEvent = c,
            this.target = p,
            this.currentTarget = null;
            for (var b in t)
                t.hasOwnProperty(b) && (a = t[b],
                this[b] = a ? a(c) : c[b]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? gs : ah,
            this.isPropagationStopped = ah,
            this
        }
        return v(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = gs)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = gs)
            },
            persist: function() {},
            isPersistent: gs
        }),
        e
    }
    var ma = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, vs = ge(ma), Zi = v({}, ma, {
        view: 0,
        detail: 0
    }), Nb = ge(Zi), Lo, Vo, Fi, bs = v({}, Zi, {
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
        getModifierState: Bo,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== Fi && (Fi && t.type === "mousemove" ? (Lo = t.screenX - Fi.screenX,
            Vo = t.screenY - Fi.screenY) : Vo = Lo = 0,
            Fi = t),
            Lo)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Vo
        }
    }), ih = ge(bs), _b = v({}, bs, {
        dataTransfer: 0
    }), jb = ge(_b), zb = v({}, Zi, {
        relatedTarget: 0
    }), Uo = ge(zb), Lb = v({}, ma, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Vb = ge(Lb), Ub = v({}, ma, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), Bb = ge(Ub), Hb = v({}, ma, {
        data: 0
    }), lh = ge(Hb), kb = {
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
    }, qb = {
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
    }, Gb = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Yb(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = Gb[t]) ? !!e[t] : !1
    }
    function Bo() {
        return Yb
    }
    var Xb = v({}, Zi, {
        key: function(t) {
            if (t.key) {
                var e = kb[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = ys(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? qb[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Bo,
        charCode: function(t) {
            return t.type === "keypress" ? ys(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? ys(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Pb = ge(Xb)
      , Kb = v({}, bs, {
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
      , sh = ge(Kb)
      , Qb = v({}, Zi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Bo
    })
      , Zb = ge(Qb)
      , Fb = v({}, ma, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Jb = ge(Fb)
      , $b = v({}, bs, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Wb = ge($b)
      , Ib = v({}, ma, {
        newState: 0,
        oldState: 0
    })
      , tS = ge(Ib)
      , eS = [9, 13, 27, 32]
      , Ho = vn && "CompositionEvent"in window
      , Ji = null;
    vn && "documentMode"in document && (Ji = document.documentMode);
    var nS = vn && "TextEvent"in window && !Ji
      , rh = vn && (!Ho || Ji && 8 < Ji && 11 >= Ji)
      , oh = " "
      , uh = !1;
    function ch(t, e) {
        switch (t) {
        case "keyup":
            return eS.indexOf(e.keyCode) !== -1;
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
    function fh(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var Fa = !1;
    function aS(t, e) {
        switch (t) {
        case "compositionend":
            return fh(e);
        case "keypress":
            return e.which !== 32 ? null : (uh = !0,
            oh);
        case "textInput":
            return t = e.data,
            t === oh && uh ? null : t;
        default:
            return null
        }
    }
    function iS(t, e) {
        if (Fa)
            return t === "compositionend" || !Ho && ch(t, e) ? (t = nh(),
            ps = zo = Un = null,
            Fa = !1,
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
            return rh && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var lS = {
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
    function dh(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!lS[t.type] : e === "textarea"
    }
    function hh(t, e, a, l) {
        Qa ? Za ? Za.push(l) : Za = [l] : Qa = l,
        e = or(e, "onChange"),
        0 < e.length && (a = new vs("onChange","change",null,a,l),
        t.push({
            event: a,
            listeners: e
        }))
    }
    var $i = null
      , Wi = null;
    function sS(t) {
        Fp(t, 0)
    }
    function Ss(t) {
        var e = Pi(t);
        if (Zd(e))
            return t
    }
    function mh(t, e) {
        if (t === "change")
            return e
    }
    var ph = !1;
    if (vn) {
        var ko;
        if (vn) {
            var qo = "oninput"in document;
            if (!qo) {
                var yh = document.createElement("div");
                yh.setAttribute("oninput", "return;"),
                qo = typeof yh.oninput == "function"
            }
            ko = qo
        } else
            ko = !1;
        ph = ko && (!document.documentMode || 9 < document.documentMode)
    }
    function gh() {
        $i && ($i.detachEvent("onpropertychange", vh),
        Wi = $i = null)
    }
    function vh(t) {
        if (t.propertyName === "value" && Ss(Wi)) {
            var e = [];
            hh(e, Wi, t, No(t)),
            eh(sS, e)
        }
    }
    function rS(t, e, a) {
        t === "focusin" ? (gh(),
        $i = e,
        Wi = a,
        $i.attachEvent("onpropertychange", vh)) : t === "focusout" && gh()
    }
    function oS(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Ss(Wi)
    }
    function uS(t, e) {
        if (t === "click")
            return Ss(e)
    }
    function cS(t, e) {
        if (t === "input" || t === "change")
            return Ss(e)
    }
    function fS(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Me = typeof Object.is == "function" ? Object.is : fS;
    function Ii(t, e) {
        if (Me(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var a = Object.keys(t)
          , l = Object.keys(e);
        if (a.length !== l.length)
            return !1;
        for (l = 0; l < a.length; l++) {
            var u = a[l];
            if (!vo.call(e, u) || !Me(t[u], e[u]))
                return !1
        }
        return !0
    }
    function bh(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Sh(t, e) {
        var a = bh(t);
        t = 0;
        for (var l; a; ) {
            if (a.nodeType === 3) {
                if (l = t + a.textContent.length,
                t <= e && l >= e)
                    return {
                        node: a,
                        offset: e - t
                    };
                t = l
            }
            t: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break t
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = bh(a)
        }
    }
    function xh(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? xh(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Th(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = hs(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var a = typeof e.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                t = e.contentWindow;
            else
                break;
            e = hs(t.document)
        }
        return e
    }
    function Go(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var dS = vn && "documentMode"in document && 11 >= document.documentMode
      , Ja = null
      , Yo = null
      , tl = null
      , Xo = !1;
    function Eh(t, e, a) {
        var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Xo || Ja == null || Ja !== hs(l) || (l = Ja,
        "selectionStart"in l && Go(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        tl && Ii(tl, l) || (tl = l,
        l = or(Yo, "onSelect"),
        0 < l.length && (e = new vs("onSelect","select",null,e,a),
        t.push({
            event: e,
            listeners: l
        }),
        e.target = Ja)))
    }
    function pa(t, e) {
        var a = {};
        return a[t.toLowerCase()] = e.toLowerCase(),
        a["Webkit" + t] = "webkit" + e,
        a["Moz" + t] = "moz" + e,
        a
    }
    var $a = {
        animationend: pa("Animation", "AnimationEnd"),
        animationiteration: pa("Animation", "AnimationIteration"),
        animationstart: pa("Animation", "AnimationStart"),
        transitionrun: pa("Transition", "TransitionRun"),
        transitionstart: pa("Transition", "TransitionStart"),
        transitioncancel: pa("Transition", "TransitionCancel"),
        transitionend: pa("Transition", "TransitionEnd")
    }
      , Po = {}
      , Ah = {};
    vn && (Ah = document.createElement("div").style,
    "AnimationEvent"in window || (delete $a.animationend.animation,
    delete $a.animationiteration.animation,
    delete $a.animationstart.animation),
    "TransitionEvent"in window || delete $a.transitionend.transition);
    function ya(t) {
        if (Po[t])
            return Po[t];
        if (!$a[t])
            return t;
        var e = $a[t], a;
        for (a in e)
            if (e.hasOwnProperty(a) && a in Ah)
                return Po[t] = e[a];
        return t
    }
    var wh = ya("animationend")
      , Rh = ya("animationiteration")
      , Ch = ya("animationstart")
      , hS = ya("transitionrun")
      , mS = ya("transitionstart")
      , pS = ya("transitioncancel")
      , Mh = ya("transitionend")
      , Dh = new Map
      , Ko = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Ko.push("scrollEnd");
    function Je(t, e) {
        Dh.set(t, e),
        ha(e, [t])
    }
    var xs = typeof reportError == "function" ? reportError : function(t) {
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
      , He = []
      , Wa = 0
      , Qo = 0;
    function Ts() {
        for (var t = Wa, e = Qo = Wa = 0; e < t; ) {
            var a = He[e];
            He[e++] = null;
            var l = He[e];
            He[e++] = null;
            var u = He[e];
            He[e++] = null;
            var c = He[e];
            if (He[e++] = null,
            l !== null && u !== null) {
                var p = l.pending;
                p === null ? u.next = u : (u.next = p.next,
                p.next = u),
                l.pending = u
            }
            c !== 0 && Oh(a, u, c)
        }
    }
    function Es(t, e, a, l) {
        He[Wa++] = t,
        He[Wa++] = e,
        He[Wa++] = a,
        He[Wa++] = l,
        Qo |= l,
        t.lanes |= l,
        t = t.alternate,
        t !== null && (t.lanes |= l)
    }
    function Zo(t, e, a, l) {
        return Es(t, e, a, l),
        As(t)
    }
    function ga(t, e) {
        return Es(t, null, null, e),
        As(t)
    }
    function Oh(t, e, a) {
        t.lanes |= a;
        var l = t.alternate;
        l !== null && (l.lanes |= a);
        for (var u = !1, c = t.return; c !== null; )
            c.childLanes |= a,
            l = c.alternate,
            l !== null && (l.childLanes |= a),
            c.tag === 22 && (t = c.stateNode,
            t === null || t._visibility & 1 || (u = !0)),
            t = c,
            c = c.return;
        return t.tag === 3 ? (c = t.stateNode,
        u && e !== null && (u = 31 - Ce(a),
        t = c.hiddenUpdates,
        l = t[u],
        l === null ? t[u] = [e] : l.push(e),
        e.lane = a | 536870912),
        c) : null
    }
    function As(t) {
        if (50 < Tl)
            throw Tl = 0,
            ac = null,
            Error(r(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Ia = {};
    function yS(t, e, a, l) {
        this.tag = t,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function De(t, e, a, l) {
        return new yS(t,e,a,l)
    }
    function Fo(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function bn(t, e) {
        var a = t.alternate;
        return a === null ? (a = De(t.tag, e, t.key, t.mode),
        a.elementType = t.elementType,
        a.type = t.type,
        a.stateNode = t.stateNode,
        a.alternate = t,
        t.alternate = a) : (a.pendingProps = e,
        a.type = t.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = t.flags & 65011712,
        a.childLanes = t.childLanes,
        a.lanes = t.lanes,
        a.child = t.child,
        a.memoizedProps = t.memoizedProps,
        a.memoizedState = t.memoizedState,
        a.updateQueue = t.updateQueue,
        e = t.dependencies,
        a.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        a.sibling = t.sibling,
        a.index = t.index,
        a.ref = t.ref,
        a.refCleanup = t.refCleanup,
        a
    }
    function Nh(t, e) {
        t.flags &= 65011714;
        var a = t.alternate;
        return a === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = a.childLanes,
        t.lanes = a.lanes,
        t.child = a.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = a.memoizedProps,
        t.memoizedState = a.memoizedState,
        t.updateQueue = a.updateQueue,
        t.type = a.type,
        e = a.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function ws(t, e, a, l, u, c) {
        var p = 0;
        if (l = t,
        typeof t == "function")
            Fo(t) && (p = 1);
        else if (typeof t == "string")
            p = xx(t, a, $.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case at:
                return t = De(31, a, e, u),
                t.elementType = at,
                t.lanes = c,
                t;
            case C:
                return va(a.children, u, c, e);
            case T:
                p = 8,
                u |= 24;
                break;
            case _:
                return t = De(12, a, e, u | 2),
                t.elementType = _,
                t.lanes = c,
                t;
            case P:
                return t = De(13, a, e, u),
                t.elementType = P,
                t.lanes = c,
                t;
            case I:
                return t = De(19, a, e, u),
                t.elementType = I,
                t.lanes = c,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case U:
                        p = 10;
                        break t;
                    case k:
                        p = 9;
                        break t;
                    case X:
                        p = 11;
                        break t;
                    case K:
                        p = 14;
                        break t;
                    case J:
                        p = 16,
                        l = null;
                        break t
                    }
                p = 29,
                a = Error(r(130, t === null ? "null" : typeof t, "")),
                l = null
            }
        return e = De(p, a, e, u),
        e.elementType = t,
        e.type = l,
        e.lanes = c,
        e
    }
    function va(t, e, a, l) {
        return t = De(7, t, l, e),
        t.lanes = a,
        t
    }
    function Jo(t, e, a) {
        return t = De(6, t, null, e),
        t.lanes = a,
        t
    }
    function _h(t) {
        var e = De(18, null, null, 0);
        return e.stateNode = t,
        e
    }
    function $o(t, e, a) {
        return e = De(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = a,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var jh = new WeakMap;
    function ke(t, e) {
        if (typeof t == "object" && t !== null) {
            var a = jh.get(t);
            return a !== void 0 ? a : (e = {
                value: t,
                source: e,
                stack: _d(e)
            },
            jh.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: _d(e)
        }
    }
    var ti = []
      , ei = 0
      , Rs = null
      , el = 0
      , qe = []
      , Ge = 0
      , Bn = null
      , sn = 1
      , rn = "";
    function Sn(t, e) {
        ti[ei++] = el,
        ti[ei++] = Rs,
        Rs = t,
        el = e
    }
    function zh(t, e, a) {
        qe[Ge++] = sn,
        qe[Ge++] = rn,
        qe[Ge++] = Bn,
        Bn = t;
        var l = sn;
        t = rn;
        var u = 32 - Ce(l) - 1;
        l &= ~(1 << u),
        a += 1;
        var c = 32 - Ce(e) + u;
        if (30 < c) {
            var p = u - u % 5;
            c = (l & (1 << p) - 1).toString(32),
            l >>= p,
            u -= p,
            sn = 1 << 32 - Ce(e) + u | a << u | l,
            rn = c + t
        } else
            sn = 1 << c | a << u | l,
            rn = t
    }
    function Wo(t) {
        t.return !== null && (Sn(t, 1),
        zh(t, 1, 0))
    }
    function Io(t) {
        for (; t === Rs; )
            Rs = ti[--ei],
            ti[ei] = null,
            el = ti[--ei],
            ti[ei] = null;
        for (; t === Bn; )
            Bn = qe[--Ge],
            qe[Ge] = null,
            rn = qe[--Ge],
            qe[Ge] = null,
            sn = qe[--Ge],
            qe[Ge] = null
    }
    function Lh(t, e) {
        qe[Ge++] = sn,
        qe[Ge++] = rn,
        qe[Ge++] = Bn,
        sn = e.id,
        rn = e.overflow,
        Bn = t
    }
    var ae = null
      , Lt = null
      , St = !1
      , Hn = null
      , Ye = !1
      , tu = Error(r(519));
    function kn(t) {
        var e = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw nl(ke(e, t)),
        tu
    }
    function Vh(t) {
        var e = t.stateNode
          , a = t.type
          , l = t.memoizedProps;
        switch (e[ne] = t,
        e[ye] = l,
        a) {
        case "dialog":
            gt("cancel", e),
            gt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            gt("load", e);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Al.length; a++)
                gt(Al[a], e);
            break;
        case "source":
            gt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            gt("error", e),
            gt("load", e);
            break;
        case "details":
            gt("toggle", e);
            break;
        case "input":
            gt("invalid", e),
            Fd(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            gt("invalid", e);
            break;
        case "textarea":
            gt("invalid", e),
            $d(e, l.value, l.defaultValue, l.children)
        }
        a = l.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || Ip(e.textContent, a) ? (l.popover != null && (gt("beforetoggle", e),
        gt("toggle", e)),
        l.onScroll != null && gt("scroll", e),
        l.onScrollEnd != null && gt("scrollend", e),
        l.onClick != null && (e.onclick = gn),
        e = !0) : e = !1,
        e || kn(t, !0)
    }
    function Uh(t) {
        for (ae = t.return; ae; )
            switch (ae.tag) {
            case 5:
            case 31:
            case 13:
                Ye = !1;
                return;
            case 27:
            case 3:
                Ye = !0;
                return;
            default:
                ae = ae.return
            }
    }
    function ni(t) {
        if (t !== ae)
            return !1;
        if (!St)
            return Uh(t),
            St = !0,
            !1;
        var e = t.tag, a;
        if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type,
        a = !(a !== "form" && a !== "button") || vc(t.type, t.memoizedProps)),
        a = !a),
        a && Lt && kn(t),
        Uh(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(r(317));
            Lt = oy(t)
        } else if (e === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(r(317));
            Lt = oy(t)
        } else
            e === 27 ? (e = Lt,
            ta(t.type) ? (t = Ec,
            Ec = null,
            Lt = t) : Lt = e) : Lt = ae ? Pe(t.stateNode.nextSibling) : null;
        return !0
    }
    function ba() {
        Lt = ae = null,
        St = !1
    }
    function eu() {
        var t = Hn;
        return t !== null && (xe === null ? xe = t : xe.push.apply(xe, t),
        Hn = null),
        t
    }
    function nl(t) {
        Hn === null ? Hn = [t] : Hn.push(t)
    }
    var nu = R(null)
      , Sa = null
      , xn = null;
    function qn(t, e, a) {
        Z(nu, e._currentValue),
        e._currentValue = a
    }
    function Tn(t) {
        t._currentValue = nu.current,
        q(nu)
    }
    function au(t, e, a) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
            t === a)
                break;
            t = t.return
        }
    }
    function iu(t, e, a, l) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null; ) {
            var c = u.dependencies;
            if (c !== null) {
                var p = u.child;
                c = c.firstContext;
                t: for (; c !== null; ) {
                    var b = c;
                    c = u;
                    for (var E = 0; E < e.length; E++)
                        if (b.context === e[E]) {
                            c.lanes |= a,
                            b = c.alternate,
                            b !== null && (b.lanes |= a),
                            au(c.return, a, t),
                            l || (p = null);
                            break t
                        }
                    c = b.next
                }
            } else if (u.tag === 18) {
                if (p = u.return,
                p === null)
                    throw Error(r(341));
                p.lanes |= a,
                c = p.alternate,
                c !== null && (c.lanes |= a),
                au(p, a, t),
                p = null
            } else
                p = u.child;
            if (p !== null)
                p.return = u;
            else
                for (p = u; p !== null; ) {
                    if (p === t) {
                        p = null;
                        break
                    }
                    if (u = p.sibling,
                    u !== null) {
                        u.return = p.return,
                        p = u;
                        break
                    }
                    p = p.return
                }
            u = p
        }
    }
    function ai(t, e, a, l) {
        t = null;
        for (var u = e, c = !1; u !== null; ) {
            if (!c) {
                if ((u.flags & 524288) !== 0)
                    c = !0;
                else if ((u.flags & 262144) !== 0)
                    break
            }
            if (u.tag === 10) {
                var p = u.alternate;
                if (p === null)
                    throw Error(r(387));
                if (p = p.memoizedProps,
                p !== null) {
                    var b = u.type;
                    Me(u.pendingProps.value, p.value) || (t !== null ? t.push(b) : t = [b])
                }
            } else if (u === Rt.current) {
                if (p = u.alternate,
                p === null)
                    throw Error(r(387));
                p.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Dl) : t = [Dl])
            }
            u = u.return
        }
        t !== null && iu(e, t, a, l),
        e.flags |= 262144
    }
    function Cs(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Me(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function xa(t) {
        Sa = t,
        xn = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function ie(t) {
        return Bh(Sa, t)
    }
    function Ms(t, e) {
        return Sa === null && xa(t),
        Bh(t, e)
    }
    function Bh(t, e) {
        var a = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: a,
            next: null
        },
        xn === null) {
            if (t === null)
                throw Error(r(308));
            xn = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            xn = xn.next = e;
        return a
    }
    var gS = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(a, l) {
                t.push(l)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(a) {
                return a()
            })
        }
    }
      , vS = n.unstable_scheduleCallback
      , bS = n.unstable_NormalPriority
      , Qt = {
        $$typeof: U,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function lu() {
        return {
            controller: new gS,
            data: new Map,
            refCount: 0
        }
    }
    function al(t) {
        t.refCount--,
        t.refCount === 0 && vS(bS, function() {
            t.controller.abort()
        })
    }
    var il = null
      , su = 0
      , ii = 0
      , li = null;
    function SS(t, e) {
        if (il === null) {
            var a = il = [];
            su = 0,
            ii = uc(),
            li = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    a.push(l)
                }
            }
        }
        return su++,
        e.then(Hh, Hh),
        e
    }
    function Hh() {
        if (--su === 0 && il !== null) {
            li !== null && (li.status = "fulfilled");
            var t = il;
            il = null,
            ii = 0,
            li = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function xS(t, e) {
        var a = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
                a.push(u)
            }
        };
        return t.then(function() {
            l.status = "fulfilled",
            l.value = e;
            for (var u = 0; u < a.length; u++)
                (0,
                a[u])(e)
        }, function(u) {
            for (l.status = "rejected",
            l.reason = u,
            u = 0; u < a.length; u++)
                (0,
                a[u])(void 0)
        }),
        l
    }
    var kh = L.S;
    L.S = function(t, e) {
        Ep = we(),
        typeof e == "object" && e !== null && typeof e.then == "function" && SS(t, e),
        kh !== null && kh(t, e)
    }
    ;
    var Ta = R(null);
    function ru() {
        var t = Ta.current;
        return t !== null ? t : _t.pooledCache
    }
    function Ds(t, e) {
        e === null ? Z(Ta, Ta.current) : Z(Ta, e.pool)
    }
    function qh() {
        var t = ru();
        return t === null ? null : {
            parent: Qt._currentValue,
            pool: t
        }
    }
    var si = Error(r(460))
      , ou = Error(r(474))
      , Os = Error(r(542))
      , Ns = {
        then: function() {}
    };
    function Gh(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function Yh(t, e, a) {
        switch (a = t[a],
        a === void 0 ? t.push(e) : a !== e && (e.then(gn, gn),
        e = a),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            Ph(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(gn, gn);
            else {
                if (t = _t,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(r(482));
                t = e,
                t.status = "pending",
                t.then(function(l) {
                    if (e.status === "pending") {
                        var u = e;
                        u.status = "fulfilled",
                        u.value = l
                    }
                }, function(l) {
                    if (e.status === "pending") {
                        var u = e;
                        u.status = "rejected",
                        u.reason = l
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                Ph(t),
                t
            }
            throw Aa = e,
            si
        }
    }
    function Ea(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Aa = a,
            si) : a
        }
    }
    var Aa = null;
    function Xh() {
        if (Aa === null)
            throw Error(r(459));
        var t = Aa;
        return Aa = null,
        t
    }
    function Ph(t) {
        if (t === si || t === Os)
            throw Error(r(483))
    }
    var ri = null
      , ll = 0;
    function _s(t) {
        var e = ll;
        return ll += 1,
        ri === null && (ri = []),
        Yh(ri, t, e)
    }
    function sl(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function js(t, e) {
        throw e.$$typeof === S ? Error(r(525)) : (t = Object.prototype.toString.call(e),
        Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function Kh(t) {
        function e(O, D) {
            if (t) {
                var N = O.deletions;
                N === null ? (O.deletions = [D],
                O.flags |= 16) : N.push(D)
            }
        }
        function a(O, D) {
            if (!t)
                return null;
            for (; D !== null; )
                e(O, D),
                D = D.sibling;
            return null
        }
        function l(O) {
            for (var D = new Map; O !== null; )
                O.key !== null ? D.set(O.key, O) : D.set(O.index, O),
                O = O.sibling;
            return D
        }
        function u(O, D) {
            return O = bn(O, D),
            O.index = 0,
            O.sibling = null,
            O
        }
        function c(O, D, N) {
            return O.index = N,
            t ? (N = O.alternate,
            N !== null ? (N = N.index,
            N < D ? (O.flags |= 67108866,
            D) : N) : (O.flags |= 67108866,
            D)) : (O.flags |= 1048576,
            D)
        }
        function p(O) {
            return t && O.alternate === null && (O.flags |= 67108866),
            O
        }
        function b(O, D, N, G) {
            return D === null || D.tag !== 6 ? (D = Jo(N, O.mode, G),
            D.return = O,
            D) : (D = u(D, N),
            D.return = O,
            D)
        }
        function E(O, D, N, G) {
            var it = N.type;
            return it === C ? H(O, D, N.props.children, G, N.key) : D !== null && (D.elementType === it || typeof it == "object" && it !== null && it.$$typeof === J && Ea(it) === D.type) ? (D = u(D, N.props),
            sl(D, N),
            D.return = O,
            D) : (D = ws(N.type, N.key, N.props, null, O.mode, G),
            sl(D, N),
            D.return = O,
            D)
        }
        function j(O, D, N, G) {
            return D === null || D.tag !== 4 || D.stateNode.containerInfo !== N.containerInfo || D.stateNode.implementation !== N.implementation ? (D = $o(N, O.mode, G),
            D.return = O,
            D) : (D = u(D, N.children || []),
            D.return = O,
            D)
        }
        function H(O, D, N, G, it) {
            return D === null || D.tag !== 7 ? (D = va(N, O.mode, G, it),
            D.return = O,
            D) : (D = u(D, N),
            D.return = O,
            D)
        }
        function Y(O, D, N) {
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
                return D = Jo("" + D, O.mode, N),
                D.return = O,
                D;
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case w:
                    return N = ws(D.type, D.key, D.props, null, O.mode, N),
                    sl(N, D),
                    N.return = O,
                    N;
                case x:
                    return D = $o(D, O.mode, N),
                    D.return = O,
                    D;
                case J:
                    return D = Ea(D),
                    Y(O, D, N)
                }
                if (xt(D) || ht(D))
                    return D = va(D, O.mode, N, null),
                    D.return = O,
                    D;
                if (typeof D.then == "function")
                    return Y(O, _s(D), N);
                if (D.$$typeof === U)
                    return Y(O, Ms(O, D), N);
                js(O, D)
            }
            return null
        }
        function z(O, D, N, G) {
            var it = D !== null ? D.key : null;
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
                return it !== null ? null : b(O, D, "" + N, G);
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case w:
                    return N.key === it ? E(O, D, N, G) : null;
                case x:
                    return N.key === it ? j(O, D, N, G) : null;
                case J:
                    return N = Ea(N),
                    z(O, D, N, G)
                }
                if (xt(N) || ht(N))
                    return it !== null ? null : H(O, D, N, G, null);
                if (typeof N.then == "function")
                    return z(O, D, _s(N), G);
                if (N.$$typeof === U)
                    return z(O, D, Ms(O, N), G);
                js(O, N)
            }
            return null
        }
        function B(O, D, N, G, it) {
            if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
                return O = O.get(N) || null,
                b(D, O, "" + G, it);
            if (typeof G == "object" && G !== null) {
                switch (G.$$typeof) {
                case w:
                    return O = O.get(G.key === null ? N : G.key) || null,
                    E(D, O, G, it);
                case x:
                    return O = O.get(G.key === null ? N : G.key) || null,
                    j(D, O, G, it);
                case J:
                    return G = Ea(G),
                    B(O, D, N, G, it)
                }
                if (xt(G) || ht(G))
                    return O = O.get(N) || null,
                    H(D, O, G, it, null);
                if (typeof G.then == "function")
                    return B(O, D, N, _s(G), it);
                if (G.$$typeof === U)
                    return B(O, D, N, Ms(D, G), it);
                js(D, G)
            }
            return null
        }
        function W(O, D, N, G) {
            for (var it = null, Tt = null, nt = D, ft = D = 0, bt = null; nt !== null && ft < N.length; ft++) {
                nt.index > ft ? (bt = nt,
                nt = null) : bt = nt.sibling;
                var Et = z(O, nt, N[ft], G);
                if (Et === null) {
                    nt === null && (nt = bt);
                    break
                }
                t && nt && Et.alternate === null && e(O, nt),
                D = c(Et, D, ft),
                Tt === null ? it = Et : Tt.sibling = Et,
                Tt = Et,
                nt = bt
            }
            if (ft === N.length)
                return a(O, nt),
                St && Sn(O, ft),
                it;
            if (nt === null) {
                for (; ft < N.length; ft++)
                    nt = Y(O, N[ft], G),
                    nt !== null && (D = c(nt, D, ft),
                    Tt === null ? it = nt : Tt.sibling = nt,
                    Tt = nt);
                return St && Sn(O, ft),
                it
            }
            for (nt = l(nt); ft < N.length; ft++)
                bt = B(nt, O, ft, N[ft], G),
                bt !== null && (t && bt.alternate !== null && nt.delete(bt.key === null ? ft : bt.key),
                D = c(bt, D, ft),
                Tt === null ? it = bt : Tt.sibling = bt,
                Tt = bt);
            return t && nt.forEach(function(la) {
                return e(O, la)
            }),
            St && Sn(O, ft),
            it
        }
        function lt(O, D, N, G) {
            if (N == null)
                throw Error(r(151));
            for (var it = null, Tt = null, nt = D, ft = D = 0, bt = null, Et = N.next(); nt !== null && !Et.done; ft++,
            Et = N.next()) {
                nt.index > ft ? (bt = nt,
                nt = null) : bt = nt.sibling;
                var la = z(O, nt, Et.value, G);
                if (la === null) {
                    nt === null && (nt = bt);
                    break
                }
                t && nt && la.alternate === null && e(O, nt),
                D = c(la, D, ft),
                Tt === null ? it = la : Tt.sibling = la,
                Tt = la,
                nt = bt
            }
            if (Et.done)
                return a(O, nt),
                St && Sn(O, ft),
                it;
            if (nt === null) {
                for (; !Et.done; ft++,
                Et = N.next())
                    Et = Y(O, Et.value, G),
                    Et !== null && (D = c(Et, D, ft),
                    Tt === null ? it = Et : Tt.sibling = Et,
                    Tt = Et);
                return St && Sn(O, ft),
                it
            }
            for (nt = l(nt); !Et.done; ft++,
            Et = N.next())
                Et = B(nt, O, ft, Et.value, G),
                Et !== null && (t && Et.alternate !== null && nt.delete(Et.key === null ? ft : Et.key),
                D = c(Et, D, ft),
                Tt === null ? it = Et : Tt.sibling = Et,
                Tt = Et);
            return t && nt.forEach(function(_x) {
                return e(O, _x)
            }),
            St && Sn(O, ft),
            it
        }
        function Nt(O, D, N, G) {
            if (typeof N == "object" && N !== null && N.type === C && N.key === null && (N = N.props.children),
            typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case w:
                    t: {
                        for (var it = N.key; D !== null; ) {
                            if (D.key === it) {
                                if (it = N.type,
                                it === C) {
                                    if (D.tag === 7) {
                                        a(O, D.sibling),
                                        G = u(D, N.props.children),
                                        G.return = O,
                                        O = G;
                                        break t
                                    }
                                } else if (D.elementType === it || typeof it == "object" && it !== null && it.$$typeof === J && Ea(it) === D.type) {
                                    a(O, D.sibling),
                                    G = u(D, N.props),
                                    sl(G, N),
                                    G.return = O,
                                    O = G;
                                    break t
                                }
                                a(O, D);
                                break
                            } else
                                e(O, D);
                            D = D.sibling
                        }
                        N.type === C ? (G = va(N.props.children, O.mode, G, N.key),
                        G.return = O,
                        O = G) : (G = ws(N.type, N.key, N.props, null, O.mode, G),
                        sl(G, N),
                        G.return = O,
                        O = G)
                    }
                    return p(O);
                case x:
                    t: {
                        for (it = N.key; D !== null; ) {
                            if (D.key === it)
                                if (D.tag === 4 && D.stateNode.containerInfo === N.containerInfo && D.stateNode.implementation === N.implementation) {
                                    a(O, D.sibling),
                                    G = u(D, N.children || []),
                                    G.return = O,
                                    O = G;
                                    break t
                                } else {
                                    a(O, D);
                                    break
                                }
                            else
                                e(O, D);
                            D = D.sibling
                        }
                        G = $o(N, O.mode, G),
                        G.return = O,
                        O = G
                    }
                    return p(O);
                case J:
                    return N = Ea(N),
                    Nt(O, D, N, G)
                }
                if (xt(N))
                    return W(O, D, N, G);
                if (ht(N)) {
                    if (it = ht(N),
                    typeof it != "function")
                        throw Error(r(150));
                    return N = it.call(N),
                    lt(O, D, N, G)
                }
                if (typeof N.then == "function")
                    return Nt(O, D, _s(N), G);
                if (N.$$typeof === U)
                    return Nt(O, D, Ms(O, N), G);
                js(O, N)
            }
            return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N,
            D !== null && D.tag === 6 ? (a(O, D.sibling),
            G = u(D, N),
            G.return = O,
            O = G) : (a(O, D),
            G = Jo(N, O.mode, G),
            G.return = O,
            O = G),
            p(O)) : a(O, D)
        }
        return function(O, D, N, G) {
            try {
                ll = 0;
                var it = Nt(O, D, N, G);
                return ri = null,
                it
            } catch (nt) {
                if (nt === si || nt === Os)
                    throw nt;
                var Tt = De(29, nt, null, O.mode);
                return Tt.lanes = G,
                Tt.return = O,
                Tt
            }
        }
    }
    var wa = Kh(!0)
      , Qh = Kh(!1)
      , Gn = !1;
    function uu(t) {
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
    function cu(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Yn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Xn(t, e, a) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (wt & 2) !== 0) {
            var u = l.pending;
            return u === null ? e.next = e : (e.next = u.next,
            u.next = e),
            l.pending = e,
            e = As(t),
            Oh(t, null, a),
            e
        }
        return Es(t, l, e, a),
        As(t)
    }
    function rl(t, e, a) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (a & 4194048) !== 0)) {
            var l = e.lanes;
            l &= t.pendingLanes,
            a |= l,
            e.lanes = a,
            Bd(t, a)
        }
    }
    function fu(t, e) {
        var a = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        a === l)) {
            var u = null
              , c = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var p = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? u = c = p : c = c.next = p,
                    a = a.next
                } while (a !== null);
                c === null ? u = c = e : c = c.next = e
            } else
                u = c = e;
            a = {
                baseState: l.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: c,
                shared: l.shared,
                callbacks: l.callbacks
            },
            t.updateQueue = a;
            return
        }
        t = a.lastBaseUpdate,
        t === null ? a.firstBaseUpdate = e : t.next = e,
        a.lastBaseUpdate = e
    }
    var du = !1;
    function ol() {
        if (du) {
            var t = li;
            if (t !== null)
                throw t
        }
    }
    function ul(t, e, a, l) {
        du = !1;
        var u = t.updateQueue;
        Gn = !1;
        var c = u.firstBaseUpdate
          , p = u.lastBaseUpdate
          , b = u.shared.pending;
        if (b !== null) {
            u.shared.pending = null;
            var E = b
              , j = E.next;
            E.next = null,
            p === null ? c = j : p.next = j,
            p = E;
            var H = t.alternate;
            H !== null && (H = H.updateQueue,
            b = H.lastBaseUpdate,
            b !== p && (b === null ? H.firstBaseUpdate = j : b.next = j,
            H.lastBaseUpdate = E))
        }
        if (c !== null) {
            var Y = u.baseState;
            p = 0,
            H = j = E = null,
            b = c;
            do {
                var z = b.lane & -536870913
                  , B = z !== b.lane;
                if (B ? (vt & z) === z : (l & z) === z) {
                    z !== 0 && z === ii && (du = !0),
                    H !== null && (H = H.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var W = t
                          , lt = b;
                        z = e;
                        var Nt = a;
                        switch (lt.tag) {
                        case 1:
                            if (W = lt.payload,
                            typeof W == "function") {
                                Y = W.call(Nt, Y, z);
                                break t
                            }
                            Y = W;
                            break t;
                        case 3:
                            W.flags = W.flags & -65537 | 128;
                        case 0:
                            if (W = lt.payload,
                            z = typeof W == "function" ? W.call(Nt, Y, z) : W,
                            z == null)
                                break t;
                            Y = v({}, Y, z);
                            break t;
                        case 2:
                            Gn = !0
                        }
                    }
                    z = b.callback,
                    z !== null && (t.flags |= 64,
                    B && (t.flags |= 8192),
                    B = u.callbacks,
                    B === null ? u.callbacks = [z] : B.push(z))
                } else
                    B = {
                        lane: z,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    H === null ? (j = H = B,
                    E = Y) : H = H.next = B,
                    p |= z;
                if (b = b.next,
                b === null) {
                    if (b = u.shared.pending,
                    b === null)
                        break;
                    B = b,
                    b = B.next,
                    B.next = null,
                    u.lastBaseUpdate = B,
                    u.shared.pending = null
                }
            } while (!0);
            H === null && (E = Y),
            u.baseState = E,
            u.firstBaseUpdate = j,
            u.lastBaseUpdate = H,
            c === null && (u.shared.lanes = 0),
            Fn |= p,
            t.lanes = p,
            t.memoizedState = Y
        }
    }
    function Zh(t, e) {
        if (typeof t != "function")
            throw Error(r(191, t));
        t.call(e)
    }
    function Fh(t, e) {
        var a = t.callbacks;
        if (a !== null)
            for (t.callbacks = null,
            t = 0; t < a.length; t++)
                Zh(a[t], e)
    }
    var oi = R(null)
      , zs = R(0);
    function Jh(t, e) {
        t = Nn,
        Z(zs, t),
        Z(oi, e),
        Nn = t | e.baseLanes
    }
    function hu() {
        Z(zs, Nn),
        Z(oi, oi.current)
    }
    function mu() {
        Nn = zs.current,
        q(oi),
        q(zs)
    }
    var Oe = R(null)
      , Xe = null;
    function Pn(t) {
        var e = t.alternate;
        Z(Pt, Pt.current & 1),
        Z(Oe, t),
        Xe === null && (e === null || oi.current !== null || e.memoizedState !== null) && (Xe = t)
    }
    function pu(t) {
        Z(Pt, Pt.current),
        Z(Oe, t),
        Xe === null && (Xe = t)
    }
    function $h(t) {
        t.tag === 22 ? (Z(Pt, Pt.current),
        Z(Oe, t),
        Xe === null && (Xe = t)) : Kn()
    }
    function Kn() {
        Z(Pt, Pt.current),
        Z(Oe, Oe.current)
    }
    function Ne(t) {
        q(Oe),
        Xe === t && (Xe = null),
        q(Pt)
    }
    var Pt = R(0);
    function Ls(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var a = e.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || xc(a) || Tc(a)))
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
    var En = 0
      , ct = null
      , Dt = null
      , Zt = null
      , Vs = !1
      , ui = !1
      , Ra = !1
      , Us = 0
      , cl = 0
      , ci = null
      , TS = 0;
    function qt() {
        throw Error(r(321))
    }
    function yu(t, e) {
        if (e === null)
            return !1;
        for (var a = 0; a < e.length && a < t.length; a++)
            if (!Me(t[a], e[a]))
                return !1;
        return !0
    }
    function gu(t, e, a, l, u, c) {
        return En = c,
        ct = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        L.H = t === null || t.memoizedState === null ? zm : _u,
        Ra = !1,
        c = a(l, u),
        Ra = !1,
        ui && (c = Ih(e, a, l, u)),
        Wh(t),
        c
    }
    function Wh(t) {
        L.H = hl;
        var e = Dt !== null && Dt.next !== null;
        if (En = 0,
        Zt = Dt = ct = null,
        Vs = !1,
        cl = 0,
        ci = null,
        e)
            throw Error(r(300));
        t === null || Ft || (t = t.dependencies,
        t !== null && Cs(t) && (Ft = !0))
    }
    function Ih(t, e, a, l) {
        ct = t;
        var u = 0;
        do {
            if (ui && (ci = null),
            cl = 0,
            ui = !1,
            25 <= u)
                throw Error(r(301));
            if (u += 1,
            Zt = Dt = null,
            t.updateQueue != null) {
                var c = t.updateQueue;
                c.lastEffect = null,
                c.events = null,
                c.stores = null,
                c.memoCache != null && (c.memoCache.index = 0)
            }
            L.H = Lm,
            c = e(a, l)
        } while (ui);
        return c
    }
    function ES() {
        var t = L.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? fl(e) : e,
        t = t.useState()[0],
        (Dt !== null ? Dt.memoizedState : null) !== t && (ct.flags |= 1024),
        e
    }
    function vu() {
        var t = Us !== 0;
        return Us = 0,
        t
    }
    function bu(t, e, a) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~a
    }
    function Su(t) {
        if (Vs) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            Vs = !1
        }
        En = 0,
        Zt = Dt = ct = null,
        ui = !1,
        cl = Us = 0,
        ci = null
    }
    function de() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Zt === null ? ct.memoizedState = Zt = t : Zt = Zt.next = t,
        Zt
    }
    function Kt() {
        if (Dt === null) {
            var t = ct.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = Dt.next;
        var e = Zt === null ? ct.memoizedState : Zt.next;
        if (e !== null)
            Zt = e,
            Dt = t;
        else {
            if (t === null)
                throw ct.alternate === null ? Error(r(467)) : Error(r(310));
            Dt = t,
            t = {
                memoizedState: Dt.memoizedState,
                baseState: Dt.baseState,
                baseQueue: Dt.baseQueue,
                queue: Dt.queue,
                next: null
            },
            Zt === null ? ct.memoizedState = Zt = t : Zt = Zt.next = t
        }
        return Zt
    }
    function Bs() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function fl(t) {
        var e = cl;
        return cl += 1,
        ci === null && (ci = []),
        t = Yh(ci, t, e),
        e = ct,
        (Zt === null ? e.memoizedState : Zt.next) === null && (e = e.alternate,
        L.H = e === null || e.memoizedState === null ? zm : _u),
        t
    }
    function Hs(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return fl(t);
            if (t.$$typeof === U)
                return ie(t)
        }
        throw Error(r(438, String(t)))
    }
    function xu(t) {
        var e = null
          , a = ct.updateQueue;
        if (a !== null && (e = a.memoCache),
        e == null) {
            var l = ct.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (e = {
                data: l.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        a === null && (a = Bs(),
        ct.updateQueue = a),
        a.memoCache = e,
        a = e.data[e.index],
        a === void 0)
            for (a = e.data[e.index] = Array(t),
            l = 0; l < t; l++)
                a[l] = tt;
        return e.index++,
        a
    }
    function An(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function ks(t) {
        var e = Kt();
        return Tu(e, Dt, t)
    }
    function Tu(t, e, a) {
        var l = t.queue;
        if (l === null)
            throw Error(r(311));
        l.lastRenderedReducer = a;
        var u = t.baseQueue
          , c = l.pending;
        if (c !== null) {
            if (u !== null) {
                var p = u.next;
                u.next = c.next,
                c.next = p
            }
            e.baseQueue = u = c,
            l.pending = null
        }
        if (c = t.baseState,
        u === null)
            t.memoizedState = c;
        else {
            e = u.next;
            var b = p = null
              , E = null
              , j = e
              , H = !1;
            do {
                var Y = j.lane & -536870913;
                if (Y !== j.lane ? (vt & Y) === Y : (En & Y) === Y) {
                    var z = j.revertLane;
                    if (z === 0)
                        E !== null && (E = E.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: j.action,
                            hasEagerState: j.hasEagerState,
                            eagerState: j.eagerState,
                            next: null
                        }),
                        Y === ii && (H = !0);
                    else if ((En & z) === z) {
                        j = j.next,
                        z === ii && (H = !0);
                        continue
                    } else
                        Y = {
                            lane: 0,
                            revertLane: j.revertLane,
                            gesture: null,
                            action: j.action,
                            hasEagerState: j.hasEagerState,
                            eagerState: j.eagerState,
                            next: null
                        },
                        E === null ? (b = E = Y,
                        p = c) : E = E.next = Y,
                        ct.lanes |= z,
                        Fn |= z;
                    Y = j.action,
                    Ra && a(c, Y),
                    c = j.hasEagerState ? j.eagerState : a(c, Y)
                } else
                    z = {
                        lane: Y,
                        revertLane: j.revertLane,
                        gesture: j.gesture,
                        action: j.action,
                        hasEagerState: j.hasEagerState,
                        eagerState: j.eagerState,
                        next: null
                    },
                    E === null ? (b = E = z,
                    p = c) : E = E.next = z,
                    ct.lanes |= Y,
                    Fn |= Y;
                j = j.next
            } while (j !== null && j !== e);
            if (E === null ? p = c : E.next = b,
            !Me(c, t.memoizedState) && (Ft = !0,
            H && (a = li,
            a !== null)))
                throw a;
            t.memoizedState = c,
            t.baseState = p,
            t.baseQueue = E,
            l.lastRenderedState = c
        }
        return u === null && (l.lanes = 0),
        [t.memoizedState, l.dispatch]
    }
    function Eu(t) {
        var e = Kt()
          , a = e.queue;
        if (a === null)
            throw Error(r(311));
        a.lastRenderedReducer = t;
        var l = a.dispatch
          , u = a.pending
          , c = e.memoizedState;
        if (u !== null) {
            a.pending = null;
            var p = u = u.next;
            do
                c = t(c, p.action),
                p = p.next;
            while (p !== u);
            Me(c, e.memoizedState) || (Ft = !0),
            e.memoizedState = c,
            e.baseQueue === null && (e.baseState = c),
            a.lastRenderedState = c
        }
        return [c, l]
    }
    function tm(t, e, a) {
        var l = ct
          , u = Kt()
          , c = St;
        if (c) {
            if (a === void 0)
                throw Error(r(407));
            a = a()
        } else
            a = e();
        var p = !Me((Dt || u).memoizedState, a);
        if (p && (u.memoizedState = a,
        Ft = !0),
        u = u.queue,
        Ru(am.bind(null, l, u, t), [t]),
        u.getSnapshot !== e || p || Zt !== null && Zt.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            fi(9, {
                destroy: void 0
            }, nm.bind(null, l, u, a, e), null),
            _t === null)
                throw Error(r(349));
            c || (En & 127) !== 0 || em(l, e, a)
        }
        return a
    }
    function em(t, e, a) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: a
        },
        e = ct.updateQueue,
        e === null ? (e = Bs(),
        ct.updateQueue = e,
        e.stores = [t]) : (a = e.stores,
        a === null ? e.stores = [t] : a.push(t))
    }
    function nm(t, e, a, l) {
        e.value = a,
        e.getSnapshot = l,
        im(e) && lm(t)
    }
    function am(t, e, a) {
        return a(function() {
            im(e) && lm(t)
        })
    }
    function im(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var a = e();
            return !Me(t, a)
        } catch {
            return !0
        }
    }
    function lm(t) {
        var e = ga(t, 2);
        e !== null && Te(e, t, 2)
    }
    function Au(t) {
        var e = de();
        if (typeof t == "function") {
            var a = t;
            if (t = a(),
            Ra) {
                Ln(!0);
                try {
                    a()
                } finally {
                    Ln(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: An,
            lastRenderedState: t
        },
        e
    }
    function sm(t, e, a, l) {
        return t.baseState = a,
        Tu(t, Dt, typeof l == "function" ? l : An)
    }
    function AS(t, e, a, l, u) {
        if (Ys(t))
            throw Error(r(485));
        if (t = e.action,
        t !== null) {
            var c = {
                payload: u,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(p) {
                    c.listeners.push(p)
                }
            };
            L.T !== null ? a(!0) : c.isTransition = !1,
            l(c),
            a = e.pending,
            a === null ? (c.next = e.pending = c,
            rm(e, c)) : (c.next = a.next,
            e.pending = a.next = c)
        }
    }
    function rm(t, e) {
        var a = e.action
          , l = e.payload
          , u = t.state;
        if (e.isTransition) {
            var c = L.T
              , p = {};
            L.T = p;
            try {
                var b = a(u, l)
                  , E = L.S;
                E !== null && E(p, b),
                om(t, e, b)
            } catch (j) {
                wu(t, e, j)
            } finally {
                c !== null && p.types !== null && (c.types = p.types),
                L.T = c
            }
        } else
            try {
                c = a(u, l),
                om(t, e, c)
            } catch (j) {
                wu(t, e, j)
            }
    }
    function om(t, e, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
            um(t, e, l)
        }, function(l) {
            return wu(t, e, l)
        }) : um(t, e, a)
    }
    function um(t, e, a) {
        e.status = "fulfilled",
        e.value = a,
        cm(e),
        t.state = a,
        e = t.pending,
        e !== null && (a = e.next,
        a === e ? t.pending = null : (a = a.next,
        e.next = a,
        rm(t, a)))
    }
    function wu(t, e, a) {
        var l = t.pending;
        if (t.pending = null,
        l !== null) {
            l = l.next;
            do
                e.status = "rejected",
                e.reason = a,
                cm(e),
                e = e.next;
            while (e !== l)
        }
        t.action = null
    }
    function cm(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function fm(t, e) {
        return e
    }
    function dm(t, e) {
        if (St) {
            var a = _t.formState;
            if (a !== null) {
                t: {
                    var l = ct;
                    if (St) {
                        if (Lt) {
                            e: {
                                for (var u = Lt, c = Ye; u.nodeType !== 8; ) {
                                    if (!c) {
                                        u = null;
                                        break e
                                    }
                                    if (u = Pe(u.nextSibling),
                                    u === null) {
                                        u = null;
                                        break e
                                    }
                                }
                                c = u.data,
                                u = c === "F!" || c === "F" ? u : null
                            }
                            if (u) {
                                Lt = Pe(u.nextSibling),
                                l = u.data === "F!";
                                break t
                            }
                        }
                        kn(l)
                    }
                    l = !1
                }
                l && (e = a[0])
            }
        }
        return a = de(),
        a.memoizedState = a.baseState = e,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: fm,
            lastRenderedState: e
        },
        a.queue = l,
        a = Nm.bind(null, ct, l),
        l.dispatch = a,
        l = Au(!1),
        c = Nu.bind(null, ct, !1, l.queue),
        l = de(),
        u = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        l.queue = u,
        a = AS.bind(null, ct, u, c, a),
        u.dispatch = a,
        l.memoizedState = t,
        [e, a, !1]
    }
    function hm(t) {
        var e = Kt();
        return mm(e, Dt, t)
    }
    function mm(t, e, a) {
        if (e = Tu(t, e, fm)[0],
        t = ks(An)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var l = fl(e)
            } catch (p) {
                throw p === si ? Os : p
            }
        else
            l = e;
        e = Kt();
        var u = e.queue
          , c = u.dispatch;
        return a !== e.memoizedState && (ct.flags |= 2048,
        fi(9, {
            destroy: void 0
        }, wS.bind(null, u, a), null)),
        [l, c, t]
    }
    function wS(t, e) {
        t.action = e
    }
    function pm(t) {
        var e = Kt()
          , a = Dt;
        if (a !== null)
            return mm(e, a, t);
        Kt(),
        e = e.memoizedState,
        a = Kt();
        var l = a.queue.dispatch;
        return a.memoizedState = t,
        [e, l, !1]
    }
    function fi(t, e, a, l) {
        return t = {
            tag: t,
            create: a,
            deps: l,
            inst: e,
            next: null
        },
        e = ct.updateQueue,
        e === null && (e = Bs(),
        ct.updateQueue = e),
        a = e.lastEffect,
        a === null ? e.lastEffect = t.next = t : (l = a.next,
        a.next = t,
        t.next = l,
        e.lastEffect = t),
        t
    }
    function ym() {
        return Kt().memoizedState
    }
    function qs(t, e, a, l) {
        var u = de();
        ct.flags |= t,
        u.memoizedState = fi(1 | e, {
            destroy: void 0
        }, a, l === void 0 ? null : l)
    }
    function Gs(t, e, a, l) {
        var u = Kt();
        l = l === void 0 ? null : l;
        var c = u.memoizedState.inst;
        Dt !== null && l !== null && yu(l, Dt.memoizedState.deps) ? u.memoizedState = fi(e, c, a, l) : (ct.flags |= t,
        u.memoizedState = fi(1 | e, c, a, l))
    }
    function gm(t, e) {
        qs(8390656, 8, t, e)
    }
    function Ru(t, e) {
        Gs(2048, 8, t, e)
    }
    function RS(t) {
        ct.flags |= 4;
        var e = ct.updateQueue;
        if (e === null)
            e = Bs(),
            ct.updateQueue = e,
            e.events = [t];
        else {
            var a = e.events;
            a === null ? e.events = [t] : a.push(t)
        }
    }
    function vm(t) {
        var e = Kt().memoizedState;
        return RS({
            ref: e,
            nextImpl: t
        }),
        function() {
            if ((wt & 2) !== 0)
                throw Error(r(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function bm(t, e) {
        return Gs(4, 2, t, e)
    }
    function Sm(t, e) {
        return Gs(4, 4, t, e)
    }
    function xm(t, e) {
        if (typeof e == "function") {
            t = t();
            var a = e(t);
            return function() {
                typeof a == "function" ? a() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function Tm(t, e, a) {
        a = a != null ? a.concat([t]) : null,
        Gs(4, 4, xm.bind(null, e, t), a)
    }
    function Cu() {}
    function Em(t, e) {
        var a = Kt();
        e = e === void 0 ? null : e;
        var l = a.memoizedState;
        return e !== null && yu(e, l[1]) ? l[0] : (a.memoizedState = [t, e],
        t)
    }
    function Am(t, e) {
        var a = Kt();
        e = e === void 0 ? null : e;
        var l = a.memoizedState;
        if (e !== null && yu(e, l[1]))
            return l[0];
        if (l = t(),
        Ra) {
            Ln(!0);
            try {
                t()
            } finally {
                Ln(!1)
            }
        }
        return a.memoizedState = [l, e],
        l
    }
    function Mu(t, e, a) {
        return a === void 0 || (En & 1073741824) !== 0 && (vt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a,
        t = wp(),
        ct.lanes |= t,
        Fn |= t,
        a)
    }
    function wm(t, e, a, l) {
        return Me(a, e) ? a : oi.current !== null ? (t = Mu(t, a, l),
        Me(t, e) || (Ft = !0),
        t) : (En & 42) === 0 || (En & 1073741824) !== 0 && (vt & 261930) === 0 ? (Ft = !0,
        t.memoizedState = a) : (t = wp(),
        ct.lanes |= t,
        Fn |= t,
        e)
    }
    function Rm(t, e, a, l, u) {
        var c = Q.p;
        Q.p = c !== 0 && 8 > c ? c : 8;
        var p = L.T
          , b = {};
        L.T = b,
        Nu(t, !1, e, a);
        try {
            var E = u()
              , j = L.S;
            if (j !== null && j(b, E),
            E !== null && typeof E == "object" && typeof E.then == "function") {
                var H = xS(E, l);
                dl(t, e, H, ze(t))
            } else
                dl(t, e, l, ze(t))
        } catch (Y) {
            dl(t, e, {
                then: function() {},
                status: "rejected",
                reason: Y
            }, ze())
        } finally {
            Q.p = c,
            p !== null && b.types !== null && (p.types = b.types),
            L.T = p
        }
    }
    function CS() {}
    function Du(t, e, a, l) {
        if (t.tag !== 5)
            throw Error(r(476));
        var u = Cm(t).queue;
        Rm(t, u, e, F, a === null ? CS : function() {
            return Mm(t),
            a(l)
        }
        )
    }
    function Cm(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: F,
            baseState: F,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: An,
                lastRenderedState: F
            },
            next: null
        };
        var a = {};
        return e.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: An,
                lastRenderedState: a
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Mm(t) {
        var e = Cm(t);
        e.next === null && (e = t.alternate.memoizedState),
        dl(t, e.next.queue, {}, ze())
    }
    function Ou() {
        return ie(Dl)
    }
    function Dm() {
        return Kt().memoizedState
    }
    function Om() {
        return Kt().memoizedState
    }
    function MS(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var a = ze();
                t = Yn(a);
                var l = Xn(e, t, a);
                l !== null && (Te(l, e, a),
                rl(l, e, a)),
                e = {
                    cache: lu()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function DS(t, e, a) {
        var l = ze();
        a = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ys(t) ? _m(e, a) : (a = Zo(t, e, a, l),
        a !== null && (Te(a, t, l),
        jm(a, e, l)))
    }
    function Nm(t, e, a) {
        var l = ze();
        dl(t, e, a, l)
    }
    function dl(t, e, a, l) {
        var u = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ys(t))
            _m(e, u);
        else {
            var c = t.alternate;
            if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer,
            c !== null))
                try {
                    var p = e.lastRenderedState
                      , b = c(p, a);
                    if (u.hasEagerState = !0,
                    u.eagerState = b,
                    Me(b, p))
                        return Es(t, e, u, 0),
                        _t === null && Ts(),
                        !1
                } catch {}
            if (a = Zo(t, e, u, l),
            a !== null)
                return Te(a, t, l),
                jm(a, e, l),
                !0
        }
        return !1
    }
    function Nu(t, e, a, l) {
        if (l = {
            lane: 2,
            revertLane: uc(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ys(t)) {
            if (e)
                throw Error(r(479))
        } else
            e = Zo(t, a, l, 2),
            e !== null && Te(e, t, 2)
    }
    function Ys(t) {
        var e = t.alternate;
        return t === ct || e !== null && e === ct
    }
    function _m(t, e) {
        ui = Vs = !0;
        var a = t.pending;
        a === null ? e.next = e : (e.next = a.next,
        a.next = e),
        t.pending = e
    }
    function jm(t, e, a) {
        if ((a & 4194048) !== 0) {
            var l = e.lanes;
            l &= t.pendingLanes,
            a |= l,
            e.lanes = a,
            Bd(t, a)
        }
    }
    var hl = {
        readContext: ie,
        use: Hs,
        useCallback: qt,
        useContext: qt,
        useEffect: qt,
        useImperativeHandle: qt,
        useLayoutEffect: qt,
        useInsertionEffect: qt,
        useMemo: qt,
        useReducer: qt,
        useRef: qt,
        useState: qt,
        useDebugValue: qt,
        useDeferredValue: qt,
        useTransition: qt,
        useSyncExternalStore: qt,
        useId: qt,
        useHostTransitionStatus: qt,
        useFormState: qt,
        useActionState: qt,
        useOptimistic: qt,
        useMemoCache: qt,
        useCacheRefresh: qt
    };
    hl.useEffectEvent = qt;
    var zm = {
        readContext: ie,
        use: Hs,
        useCallback: function(t, e) {
            return de().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: ie,
        useEffect: gm,
        useImperativeHandle: function(t, e, a) {
            a = a != null ? a.concat([t]) : null,
            qs(4194308, 4, xm.bind(null, e, t), a)
        },
        useLayoutEffect: function(t, e) {
            return qs(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            qs(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var a = de();
            e = e === void 0 ? null : e;
            var l = t();
            if (Ra) {
                Ln(!0);
                try {
                    t()
                } finally {
                    Ln(!1)
                }
            }
            return a.memoizedState = [l, e],
            l
        },
        useReducer: function(t, e, a) {
            var l = de();
            if (a !== void 0) {
                var u = a(e);
                if (Ra) {
                    Ln(!0);
                    try {
                        a(e)
                    } finally {
                        Ln(!1)
                    }
                }
            } else
                u = e;
            return l.memoizedState = l.baseState = u,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: u
            },
            l.queue = t,
            t = t.dispatch = DS.bind(null, ct, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var e = de();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = Au(t);
            var e = t.queue
              , a = Nm.bind(null, ct, e);
            return e.dispatch = a,
            [t.memoizedState, a]
        },
        useDebugValue: Cu,
        useDeferredValue: function(t, e) {
            var a = de();
            return Mu(a, t, e)
        },
        useTransition: function() {
            var t = Au(!1);
            return t = Rm.bind(null, ct, t.queue, !0, !1),
            de().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, a) {
            var l = ct
              , u = de();
            if (St) {
                if (a === void 0)
                    throw Error(r(407));
                a = a()
            } else {
                if (a = e(),
                _t === null)
                    throw Error(r(349));
                (vt & 127) !== 0 || em(l, e, a)
            }
            u.memoizedState = a;
            var c = {
                value: a,
                getSnapshot: e
            };
            return u.queue = c,
            gm(am.bind(null, l, c, t), [t]),
            l.flags |= 2048,
            fi(9, {
                destroy: void 0
            }, nm.bind(null, l, c, a, e), null),
            a
        },
        useId: function() {
            var t = de()
              , e = _t.identifierPrefix;
            if (St) {
                var a = rn
                  , l = sn;
                a = (l & ~(1 << 32 - Ce(l) - 1)).toString(32) + a,
                e = "_" + e + "R_" + a,
                a = Us++,
                0 < a && (e += "H" + a.toString(32)),
                e += "_"
            } else
                a = TS++,
                e = "_" + e + "r_" + a.toString(32) + "_";
            return t.memoizedState = e
        },
        useHostTransitionStatus: Ou,
        useFormState: dm,
        useActionState: dm,
        useOptimistic: function(t) {
            var e = de();
            e.memoizedState = e.baseState = t;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = a,
            e = Nu.bind(null, ct, !0, a),
            a.dispatch = e,
            [t, e]
        },
        useMemoCache: xu,
        useCacheRefresh: function() {
            return de().memoizedState = MS.bind(null, ct)
        },
        useEffectEvent: function(t) {
            var e = de()
              , a = {
                impl: t
            };
            return e.memoizedState = a,
            function() {
                if ((wt & 2) !== 0)
                    throw Error(r(440));
                return a.impl.apply(void 0, arguments)
            }
        }
    }
      , _u = {
        readContext: ie,
        use: Hs,
        useCallback: Em,
        useContext: ie,
        useEffect: Ru,
        useImperativeHandle: Tm,
        useInsertionEffect: bm,
        useLayoutEffect: Sm,
        useMemo: Am,
        useReducer: ks,
        useRef: ym,
        useState: function() {
            return ks(An)
        },
        useDebugValue: Cu,
        useDeferredValue: function(t, e) {
            var a = Kt();
            return wm(a, Dt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = ks(An)[0]
              , e = Kt().memoizedState;
            return [typeof t == "boolean" ? t : fl(t), e]
        },
        useSyncExternalStore: tm,
        useId: Dm,
        useHostTransitionStatus: Ou,
        useFormState: hm,
        useActionState: hm,
        useOptimistic: function(t, e) {
            var a = Kt();
            return sm(a, Dt, t, e)
        },
        useMemoCache: xu,
        useCacheRefresh: Om
    };
    _u.useEffectEvent = vm;
    var Lm = {
        readContext: ie,
        use: Hs,
        useCallback: Em,
        useContext: ie,
        useEffect: Ru,
        useImperativeHandle: Tm,
        useInsertionEffect: bm,
        useLayoutEffect: Sm,
        useMemo: Am,
        useReducer: Eu,
        useRef: ym,
        useState: function() {
            return Eu(An)
        },
        useDebugValue: Cu,
        useDeferredValue: function(t, e) {
            var a = Kt();
            return Dt === null ? Mu(a, t, e) : wm(a, Dt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Eu(An)[0]
              , e = Kt().memoizedState;
            return [typeof t == "boolean" ? t : fl(t), e]
        },
        useSyncExternalStore: tm,
        useId: Dm,
        useHostTransitionStatus: Ou,
        useFormState: pm,
        useActionState: pm,
        useOptimistic: function(t, e) {
            var a = Kt();
            return Dt !== null ? sm(a, Dt, t, e) : (a.baseState = t,
            [t, a.queue.dispatch])
        },
        useMemoCache: xu,
        useCacheRefresh: Om
    };
    Lm.useEffectEvent = vm;
    function ju(t, e, a, l) {
        e = t.memoizedState,
        a = a(l, e),
        a = a == null ? e : v({}, e, a),
        t.memoizedState = a,
        t.lanes === 0 && (t.updateQueue.baseState = a)
    }
    var zu = {
        enqueueSetState: function(t, e, a) {
            t = t._reactInternals;
            var l = ze()
              , u = Yn(l);
            u.payload = e,
            a != null && (u.callback = a),
            e = Xn(t, u, l),
            e !== null && (Te(e, t, l),
            rl(e, t, l))
        },
        enqueueReplaceState: function(t, e, a) {
            t = t._reactInternals;
            var l = ze()
              , u = Yn(l);
            u.tag = 1,
            u.payload = e,
            a != null && (u.callback = a),
            e = Xn(t, u, l),
            e !== null && (Te(e, t, l),
            rl(e, t, l))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var a = ze()
              , l = Yn(a);
            l.tag = 2,
            e != null && (l.callback = e),
            e = Xn(t, l, a),
            e !== null && (Te(e, t, a),
            rl(e, t, a))
        }
    };
    function Vm(t, e, a, l, u, c, p) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, c, p) : e.prototype && e.prototype.isPureReactComponent ? !Ii(a, l) || !Ii(u, c) : !0
    }
    function Um(t, e, a, l) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l),
        e.state !== t && zu.enqueueReplaceState(e, e.state, null)
    }
    function Ca(t, e) {
        var a = e;
        if ("ref"in e) {
            a = {};
            for (var l in e)
                l !== "ref" && (a[l] = e[l])
        }
        if (t = t.defaultProps) {
            a === e && (a = v({}, a));
            for (var u in t)
                a[u] === void 0 && (a[u] = t[u])
        }
        return a
    }
    function Bm(t) {
        xs(t)
    }
    function Hm(t) {
        console.error(t)
    }
    function km(t) {
        xs(t)
    }
    function Xs(t, e) {
        try {
            var a = t.onUncaughtError;
            a(e.value, {
                componentStack: e.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function qm(t, e, a) {
        try {
            var l = t.onCaughtError;
            l(a.value, {
                componentStack: a.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function Lu(t, e, a) {
        return a = Yn(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            Xs(t, e)
        }
        ,
        a
    }
    function Gm(t) {
        return t = Yn(t),
        t.tag = 3,
        t
    }
    function Ym(t, e, a, l) {
        var u = a.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var c = l.value;
            t.payload = function() {
                return u(c)
            }
            ,
            t.callback = function() {
                qm(e, a, l)
            }
        }
        var p = a.stateNode;
        p !== null && typeof p.componentDidCatch == "function" && (t.callback = function() {
            qm(e, a, l),
            typeof u != "function" && (Jn === null ? Jn = new Set([this]) : Jn.add(this));
            var b = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function OS(t, e, a, l, u) {
        if (a.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (e = a.alternate,
            e !== null && ai(e, a, u, !0),
            a = Oe.current,
            a !== null) {
                switch (a.tag) {
                case 31:
                case 13:
                    return Xe === null ? nr() : a.alternate === null && Gt === 0 && (Gt = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = u,
                    l === Ns ? a.flags |= 16384 : (e = a.updateQueue,
                    e === null ? a.updateQueue = new Set([l]) : e.add(l),
                    sc(t, l, u)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    l === Ns ? a.flags |= 16384 : (e = a.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    a.updateQueue = e) : (a = e.retryQueue,
                    a === null ? e.retryQueue = new Set([l]) : a.add(l)),
                    sc(t, l, u)),
                    !1
                }
                throw Error(r(435, a.tag))
            }
            return sc(t, l, u),
            nr(),
            !1
        }
        if (St)
            return e = Oe.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = u,
            l !== tu && (t = Error(r(422), {
                cause: l
            }),
            nl(ke(t, a)))) : (l !== tu && (e = Error(r(423), {
                cause: l
            }),
            nl(ke(e, a))),
            t = t.current.alternate,
            t.flags |= 65536,
            u &= -u,
            t.lanes |= u,
            l = ke(l, a),
            u = Lu(t.stateNode, l, u),
            fu(t, u),
            Gt !== 4 && (Gt = 2)),
            !1;
        var c = Error(r(520), {
            cause: l
        });
        if (c = ke(c, a),
        xl === null ? xl = [c] : xl.push(c),
        Gt !== 4 && (Gt = 2),
        e === null)
            return !0;
        l = ke(l, a),
        a = e;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                t = u & -u,
                a.lanes |= t,
                t = Lu(a.stateNode, l, t),
                fu(a, t),
                !1;
            case 1:
                if (e = a.type,
                c = a.stateNode,
                (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Jn === null || !Jn.has(c))))
                    return a.flags |= 65536,
                    u &= -u,
                    a.lanes |= u,
                    u = Gm(u),
                    Ym(u, t, a, l),
                    fu(a, u),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Vu = Error(r(461))
      , Ft = !1;
    function le(t, e, a, l) {
        e.child = t === null ? Qh(e, null, a, l) : wa(e, t.child, a, l)
    }
    function Xm(t, e, a, l, u) {
        a = a.render;
        var c = e.ref;
        if ("ref"in l) {
            var p = {};
            for (var b in l)
                b !== "ref" && (p[b] = l[b])
        } else
            p = l;
        return xa(e),
        l = gu(t, e, a, p, c, u),
        b = vu(),
        t !== null && !Ft ? (bu(t, e, u),
        wn(t, e, u)) : (St && b && Wo(e),
        e.flags |= 1,
        le(t, e, l, u),
        e.child)
    }
    function Pm(t, e, a, l, u) {
        if (t === null) {
            var c = a.type;
            return typeof c == "function" && !Fo(c) && c.defaultProps === void 0 && a.compare === null ? (e.tag = 15,
            e.type = c,
            Km(t, e, c, l, u)) : (t = ws(a.type, null, l, e, e.mode, u),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (c = t.child,
        !Xu(t, u)) {
            var p = c.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : Ii,
            a(p, l) && t.ref === e.ref)
                return wn(t, e, u)
        }
        return e.flags |= 1,
        t = bn(c, l),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function Km(t, e, a, l, u) {
        if (t !== null) {
            var c = t.memoizedProps;
            if (Ii(c, l) && t.ref === e.ref)
                if (Ft = !1,
                e.pendingProps = l = c,
                Xu(t, u))
                    (t.flags & 131072) !== 0 && (Ft = !0);
                else
                    return e.lanes = t.lanes,
                    wn(t, e, u)
        }
        return Uu(t, e, a, l, u)
    }
    function Qm(t, e, a, l) {
        var u = l.children
          , c = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (c = c !== null ? c.baseLanes | a : a,
                t !== null) {
                    for (l = e.child = t.child,
                    u = 0; l !== null; )
                        u = u | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = u & ~c
                } else
                    l = 0,
                    e.child = null;
                return Zm(t, e, c, a, l)
            }
            if ((a & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && Ds(e, c !== null ? c.cachePool : null),
                c !== null ? Jh(e, c) : hu(),
                $h(e);
            else
                return l = e.lanes = 536870912,
                Zm(t, e, c !== null ? c.baseLanes | a : a, a, l)
        } else
            c !== null ? (Ds(e, c.cachePool),
            Jh(e, c),
            Kn(),
            e.memoizedState = null) : (t !== null && Ds(e, null),
            hu(),
            Kn());
        return le(t, e, u, a),
        e.child
    }
    function ml(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function Zm(t, e, a, l, u) {
        var c = ru();
        return c = c === null ? null : {
            parent: Qt._currentValue,
            pool: c
        },
        e.memoizedState = {
            baseLanes: a,
            cachePool: c
        },
        t !== null && Ds(e, null),
        hu(),
        $h(e),
        t !== null && ai(t, e, l, !0),
        e.childLanes = u,
        null
    }
    function Ps(t, e) {
        return e = Qs({
            mode: e.mode,
            children: e.children
        }, t.mode),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function Fm(t, e, a) {
        return wa(e, t.child, null, a),
        t = Ps(e, e.pendingProps),
        t.flags |= 2,
        Ne(e),
        e.memoizedState = null,
        t
    }
    function NS(t, e, a) {
        var l = e.pendingProps
          , u = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        t === null) {
            if (St) {
                if (l.mode === "hidden")
                    return t = Ps(e, l),
                    e.lanes = 536870912,
                    ml(null, t);
                if (pu(e),
                (t = Lt) ? (t = ry(t, Ye),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Bn !== null ? {
                        id: sn,
                        overflow: rn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = _h(t),
                a.return = e,
                e.child = a,
                ae = e,
                Lt = null)) : t = null,
                t === null)
                    throw kn(e);
                return e.lanes = 536870912,
                null
            }
            return Ps(e, l)
        }
        var c = t.memoizedState;
        if (c !== null) {
            var p = c.dehydrated;
            if (pu(e),
            u)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = Fm(t, e, a);
                else if (e.memoizedState !== null)
                    e.child = t.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(r(558));
            else if (Ft || ai(t, e, a, !1),
            u = (a & t.childLanes) !== 0,
            Ft || u) {
                if (l = _t,
                l !== null && (p = Hd(l, a),
                p !== 0 && p !== c.retryLane))
                    throw c.retryLane = p,
                    ga(t, p),
                    Te(l, t, p),
                    Vu;
                nr(),
                e = Fm(t, e, a)
            } else
                t = c.treeContext,
                Lt = Pe(p.nextSibling),
                ae = e,
                St = !0,
                Hn = null,
                Ye = !1,
                t !== null && Lh(e, t),
                e = Ps(e, l),
                e.flags |= 4096;
            return e
        }
        return t = bn(t.child, {
            mode: l.mode,
            children: l.children
        }),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function Ks(t, e) {
        var a = e.ref;
        if (a === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(r(284));
            (t === null || t.ref !== a) && (e.flags |= 4194816)
        }
    }
    function Uu(t, e, a, l, u) {
        return xa(e),
        a = gu(t, e, a, l, void 0, u),
        l = vu(),
        t !== null && !Ft ? (bu(t, e, u),
        wn(t, e, u)) : (St && l && Wo(e),
        e.flags |= 1,
        le(t, e, a, u),
        e.child)
    }
    function Jm(t, e, a, l, u, c) {
        return xa(e),
        e.updateQueue = null,
        a = Ih(e, l, a, u),
        Wh(t),
        l = vu(),
        t !== null && !Ft ? (bu(t, e, c),
        wn(t, e, c)) : (St && l && Wo(e),
        e.flags |= 1,
        le(t, e, a, c),
        e.child)
    }
    function $m(t, e, a, l, u) {
        if (xa(e),
        e.stateNode === null) {
            var c = Ia
              , p = a.contextType;
            typeof p == "object" && p !== null && (c = ie(p)),
            c = new a(l,c),
            e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            c.updater = zu,
            e.stateNode = c,
            c._reactInternals = e,
            c = e.stateNode,
            c.props = l,
            c.state = e.memoizedState,
            c.refs = {},
            uu(e),
            p = a.contextType,
            c.context = typeof p == "object" && p !== null ? ie(p) : Ia,
            c.state = e.memoizedState,
            p = a.getDerivedStateFromProps,
            typeof p == "function" && (ju(e, a, p, l),
            c.state = e.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state,
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
            p !== c.state && zu.enqueueReplaceState(c, c.state, null),
            ul(e, l, c, u),
            ol(),
            c.state = e.memoizedState),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            l = !0
        } else if (t === null) {
            c = e.stateNode;
            var b = e.memoizedProps
              , E = Ca(a, b);
            c.props = E;
            var j = c.context
              , H = a.contextType;
            p = Ia,
            typeof H == "object" && H !== null && (p = ie(H));
            var Y = a.getDerivedStateFromProps;
            H = typeof Y == "function" || typeof c.getSnapshotBeforeUpdate == "function",
            b = e.pendingProps !== b,
            H || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (b || j !== p) && Um(e, c, l, p),
            Gn = !1;
            var z = e.memoizedState;
            c.state = z,
            ul(e, l, c, u),
            ol(),
            j = e.memoizedState,
            b || z !== j || Gn ? (typeof Y == "function" && (ju(e, a, Y, l),
            j = e.memoizedState),
            (E = Gn || Vm(e, a, E, l, z, j, p)) ? (H || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = l,
            e.memoizedState = j),
            c.props = l,
            c.state = j,
            c.context = p,
            l = E) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            l = !1)
        } else {
            c = e.stateNode,
            cu(t, e),
            p = e.memoizedProps,
            H = Ca(a, p),
            c.props = H,
            Y = e.pendingProps,
            z = c.context,
            j = a.contextType,
            E = Ia,
            typeof j == "object" && j !== null && (E = ie(j)),
            b = a.getDerivedStateFromProps,
            (j = typeof b == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== Y || z !== E) && Um(e, c, l, E),
            Gn = !1,
            z = e.memoizedState,
            c.state = z,
            ul(e, l, c, u),
            ol();
            var B = e.memoizedState;
            p !== Y || z !== B || Gn || t !== null && t.dependencies !== null && Cs(t.dependencies) ? (typeof b == "function" && (ju(e, a, b, l),
            B = e.memoizedState),
            (H = Gn || Vm(e, a, H, l, z, B, E) || t !== null && t.dependencies !== null && Cs(t.dependencies)) ? (j || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, B, E),
            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(l, B, E)),
            typeof c.componentDidUpdate == "function" && (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === t.memoizedProps && z === t.memoizedState || (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || p === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = l,
            e.memoizedState = B),
            c.props = l,
            c.state = B,
            c.context = E,
            l = H) : (typeof c.componentDidUpdate != "function" || p === t.memoizedProps && z === t.memoizedState || (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || p === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024),
            l = !1)
        }
        return c = l,
        Ks(t, e),
        l = (e.flags & 128) !== 0,
        c || l ? (c = e.stateNode,
        a = l && typeof a.getDerivedStateFromError != "function" ? null : c.render(),
        e.flags |= 1,
        t !== null && l ? (e.child = wa(e, t.child, null, u),
        e.child = wa(e, null, a, u)) : le(t, e, a, u),
        e.memoizedState = c.state,
        t = e.child) : t = wn(t, e, u),
        t
    }
    function Wm(t, e, a, l) {
        return ba(),
        e.flags |= 256,
        le(t, e, a, l),
        e.child
    }
    var Bu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Hu(t) {
        return {
            baseLanes: t,
            cachePool: qh()
        }
    }
    function ku(t, e, a) {
        return t = t !== null ? t.childLanes & ~a : 0,
        e && (t |= je),
        t
    }
    function Im(t, e, a) {
        var l = e.pendingProps, u = !1, c = (e.flags & 128) !== 0, p;
        if ((p = c) || (p = t !== null && t.memoizedState === null ? !1 : (Pt.current & 2) !== 0),
        p && (u = !0,
        e.flags &= -129),
        p = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (St) {
                if (u ? Pn(e) : Kn(),
                (t = Lt) ? (t = ry(t, Ye),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Bn !== null ? {
                        id: sn,
                        overflow: rn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = _h(t),
                a.return = e,
                e.child = a,
                ae = e,
                Lt = null)) : t = null,
                t === null)
                    throw kn(e);
                return Tc(t) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var b = l.children;
            return l = l.fallback,
            u ? (Kn(),
            u = e.mode,
            b = Qs({
                mode: "hidden",
                children: b
            }, u),
            l = va(l, u, a, null),
            b.return = e,
            l.return = e,
            b.sibling = l,
            e.child = b,
            l = e.child,
            l.memoizedState = Hu(a),
            l.childLanes = ku(t, p, a),
            e.memoizedState = Bu,
            ml(null, l)) : (Pn(e),
            qu(e, b))
        }
        var E = t.memoizedState;
        if (E !== null && (b = E.dehydrated,
        b !== null)) {
            if (c)
                e.flags & 256 ? (Pn(e),
                e.flags &= -257,
                e = Gu(t, e, a)) : e.memoizedState !== null ? (Kn(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (Kn(),
                b = l.fallback,
                u = e.mode,
                l = Qs({
                    mode: "visible",
                    children: l.children
                }, u),
                b = va(b, u, a, null),
                b.flags |= 2,
                l.return = e,
                b.return = e,
                l.sibling = b,
                e.child = l,
                wa(e, t.child, null, a),
                l = e.child,
                l.memoizedState = Hu(a),
                l.childLanes = ku(t, p, a),
                e.memoizedState = Bu,
                e = ml(null, l));
            else if (Pn(e),
            Tc(b)) {
                if (p = b.nextSibling && b.nextSibling.dataset,
                p)
                    var j = p.dgst;
                p = j,
                l = Error(r(419)),
                l.stack = "",
                l.digest = p,
                nl({
                    value: l,
                    source: null,
                    stack: null
                }),
                e = Gu(t, e, a)
            } else if (Ft || ai(t, e, a, !1),
            p = (a & t.childLanes) !== 0,
            Ft || p) {
                if (p = _t,
                p !== null && (l = Hd(p, a),
                l !== 0 && l !== E.retryLane))
                    throw E.retryLane = l,
                    ga(t, l),
                    Te(p, t, l),
                    Vu;
                xc(b) || nr(),
                e = Gu(t, e, a)
            } else
                xc(b) ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = E.treeContext,
                Lt = Pe(b.nextSibling),
                ae = e,
                St = !0,
                Hn = null,
                Ye = !1,
                t !== null && Lh(e, t),
                e = qu(e, l.children),
                e.flags |= 4096);
            return e
        }
        return u ? (Kn(),
        b = l.fallback,
        u = e.mode,
        E = t.child,
        j = E.sibling,
        l = bn(E, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = E.subtreeFlags & 65011712,
        j !== null ? b = bn(j, b) : (b = va(b, u, a, null),
        b.flags |= 2),
        b.return = e,
        l.return = e,
        l.sibling = b,
        e.child = l,
        ml(null, l),
        l = e.child,
        b = t.child.memoizedState,
        b === null ? b = Hu(a) : (u = b.cachePool,
        u !== null ? (E = Qt._currentValue,
        u = u.parent !== E ? {
            parent: E,
            pool: E
        } : u) : u = qh(),
        b = {
            baseLanes: b.baseLanes | a,
            cachePool: u
        }),
        l.memoizedState = b,
        l.childLanes = ku(t, p, a),
        e.memoizedState = Bu,
        ml(t.child, l)) : (Pn(e),
        a = t.child,
        t = a.sibling,
        a = bn(a, {
            mode: "visible",
            children: l.children
        }),
        a.return = e,
        a.sibling = null,
        t !== null && (p = e.deletions,
        p === null ? (e.deletions = [t],
        e.flags |= 16) : p.push(t)),
        e.child = a,
        e.memoizedState = null,
        a)
    }
    function qu(t, e) {
        return e = Qs({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function Qs(t, e) {
        return t = De(22, t, null, e),
        t.lanes = 0,
        t
    }
    function Gu(t, e, a) {
        return wa(e, t.child, null, a),
        t = qu(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function tp(t, e, a) {
        t.lanes |= e;
        var l = t.alternate;
        l !== null && (l.lanes |= e),
        au(t.return, e, a)
    }
    function Yu(t, e, a, l, u, c) {
        var p = t.memoizedState;
        p === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: a,
            tailMode: u,
            treeForkCount: c
        } : (p.isBackwards = e,
        p.rendering = null,
        p.renderingStartTime = 0,
        p.last = l,
        p.tail = a,
        p.tailMode = u,
        p.treeForkCount = c)
    }
    function ep(t, e, a) {
        var l = e.pendingProps
          , u = l.revealOrder
          , c = l.tail;
        l = l.children;
        var p = Pt.current
          , b = (p & 2) !== 0;
        if (b ? (p = p & 1 | 2,
        e.flags |= 128) : p &= 1,
        Z(Pt, p),
        le(t, e, l, a),
        l = St ? el : 0,
        !b && t !== null && (t.flags & 128) !== 0)
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && tp(t, a, e);
                else if (t.tag === 19)
                    tp(t, a, e);
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
        switch (u) {
        case "forwards":
            for (a = e.child,
            u = null; a !== null; )
                t = a.alternate,
                t !== null && Ls(t) === null && (u = a),
                a = a.sibling;
            a = u,
            a === null ? (u = e.child,
            e.child = null) : (u = a.sibling,
            a.sibling = null),
            Yu(e, !1, u, a, c, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (a = null,
            u = e.child,
            e.child = null; u !== null; ) {
                if (t = u.alternate,
                t !== null && Ls(t) === null) {
                    e.child = u;
                    break
                }
                t = u.sibling,
                u.sibling = a,
                a = u,
                u = t
            }
            Yu(e, !0, a, null, c, l);
            break;
        case "together":
            Yu(e, !1, null, null, void 0, l);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function wn(t, e, a) {
        if (t !== null && (e.dependencies = t.dependencies),
        Fn |= e.lanes,
        (a & e.childLanes) === 0)
            if (t !== null) {
                if (ai(t, e, a, !1),
                (a & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(r(153));
        if (e.child !== null) {
            for (t = e.child,
            a = bn(t, t.pendingProps),
            e.child = a,
            a.return = e; t.sibling !== null; )
                t = t.sibling,
                a = a.sibling = bn(t, t.pendingProps),
                a.return = e;
            a.sibling = null
        }
        return e.child
    }
    function Xu(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && Cs(t)))
    }
    function _S(t, e, a) {
        switch (e.tag) {
        case 3:
            fe(e, e.stateNode.containerInfo),
            qn(e, Qt, t.memoizedState.cache),
            ba();
            break;
        case 27:
        case 5:
            ki(e);
            break;
        case 4:
            fe(e, e.stateNode.containerInfo);
            break;
        case 10:
            qn(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                pu(e),
                null;
            break;
        case 13:
            var l = e.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (Pn(e),
                e.flags |= 128,
                null) : (a & e.child.childLanes) !== 0 ? Im(t, e, a) : (Pn(e),
                t = wn(t, e, a),
                t !== null ? t.sibling : null);
            Pn(e);
            break;
        case 19:
            var u = (t.flags & 128) !== 0;
            if (l = (a & e.childLanes) !== 0,
            l || (ai(t, e, a, !1),
            l = (a & e.childLanes) !== 0),
            u) {
                if (l)
                    return ep(t, e, a);
                e.flags |= 128
            }
            if (u = e.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            Z(Pt, Pt.current),
            l)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            Qm(t, e, a, e.pendingProps);
        case 24:
            qn(e, Qt, t.memoizedState.cache)
        }
        return wn(t, e, a)
    }
    function np(t, e, a) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Ft = !0;
            else {
                if (!Xu(t, a) && (e.flags & 128) === 0)
                    return Ft = !1,
                    _S(t, e, a);
                Ft = (t.flags & 131072) !== 0
            }
        else
            Ft = !1,
            St && (e.flags & 1048576) !== 0 && zh(e, el, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                var l = e.pendingProps;
                if (t = Ea(e.elementType),
                e.type = t,
                typeof t == "function")
                    Fo(t) ? (l = Ca(t, l),
                    e.tag = 1,
                    e = $m(null, e, t, l, a)) : (e.tag = 0,
                    e = Uu(null, e, t, l, a));
                else {
                    if (t != null) {
                        var u = t.$$typeof;
                        if (u === X) {
                            e.tag = 11,
                            e = Xm(null, e, t, l, a);
                            break t
                        } else if (u === K) {
                            e.tag = 14,
                            e = Pm(null, e, t, l, a);
                            break t
                        }
                    }
                    throw e = At(t) || t,
                    Error(r(306, e, ""))
                }
            }
            return e;
        case 0:
            return Uu(t, e, e.type, e.pendingProps, a);
        case 1:
            return l = e.type,
            u = Ca(l, e.pendingProps),
            $m(t, e, l, u, a);
        case 3:
            t: {
                if (fe(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(r(387));
                l = e.pendingProps;
                var c = e.memoizedState;
                u = c.element,
                cu(t, e),
                ul(e, l, null, a);
                var p = e.memoizedState;
                if (l = p.cache,
                qn(e, Qt, l),
                l !== c.cache && iu(e, [Qt], a, !0),
                ol(),
                l = p.element,
                c.isDehydrated)
                    if (c = {
                        element: l,
                        isDehydrated: !1,
                        cache: p.cache
                    },
                    e.updateQueue.baseState = c,
                    e.memoizedState = c,
                    e.flags & 256) {
                        e = Wm(t, e, l, a);
                        break t
                    } else if (l !== u) {
                        u = ke(Error(r(424)), e),
                        nl(u),
                        e = Wm(t, e, l, a);
                        break t
                    } else
                        for (t = e.stateNode.containerInfo,
                        t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t,
                        Lt = Pe(t.firstChild),
                        ae = e,
                        St = !0,
                        Hn = null,
                        Ye = !0,
                        a = Qh(e, null, l, a),
                        e.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if (ba(),
                    l === u) {
                        e = wn(t, e, a);
                        break t
                    }
                    le(t, e, l, a)
                }
                e = e.child
            }
            return e;
        case 26:
            return Ks(t, e),
            t === null ? (a = hy(e.type, null, e.pendingProps, null)) ? e.memoizedState = a : St || (a = e.type,
            t = e.pendingProps,
            l = ur(pt.current).createElement(a),
            l[ne] = e,
            l[ye] = t,
            se(l, a, t),
            te(l),
            e.stateNode = l) : e.memoizedState = hy(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return ki(e),
            t === null && St && (l = e.stateNode = cy(e.type, e.pendingProps, pt.current),
            ae = e,
            Ye = !0,
            u = Lt,
            ta(e.type) ? (Ec = u,
            Lt = Pe(l.firstChild)) : Lt = u),
            le(t, e, e.pendingProps.children, a),
            Ks(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && St && ((u = l = Lt) && (l = ox(l, e.type, e.pendingProps, Ye),
            l !== null ? (e.stateNode = l,
            ae = e,
            Lt = Pe(l.firstChild),
            Ye = !1,
            u = !0) : u = !1),
            u || kn(e)),
            ki(e),
            u = e.type,
            c = e.pendingProps,
            p = t !== null ? t.memoizedProps : null,
            l = c.children,
            vc(u, c) ? l = null : p !== null && vc(u, p) && (e.flags |= 32),
            e.memoizedState !== null && (u = gu(t, e, ES, null, null, a),
            Dl._currentValue = u),
            Ks(t, e),
            le(t, e, l, a),
            e.child;
        case 6:
            return t === null && St && ((t = a = Lt) && (a = ux(a, e.pendingProps, Ye),
            a !== null ? (e.stateNode = a,
            ae = e,
            Lt = null,
            t = !0) : t = !1),
            t || kn(e)),
            null;
        case 13:
            return Im(t, e, a);
        case 4:
            return fe(e, e.stateNode.containerInfo),
            l = e.pendingProps,
            t === null ? e.child = wa(e, null, l, a) : le(t, e, l, a),
            e.child;
        case 11:
            return Xm(t, e, e.type, e.pendingProps, a);
        case 7:
            return le(t, e, e.pendingProps, a),
            e.child;
        case 8:
            return le(t, e, e.pendingProps.children, a),
            e.child;
        case 12:
            return le(t, e, e.pendingProps.children, a),
            e.child;
        case 10:
            return l = e.pendingProps,
            qn(e, e.type, l.value),
            le(t, e, l.children, a),
            e.child;
        case 9:
            return u = e.type._context,
            l = e.pendingProps.children,
            xa(e),
            u = ie(u),
            l = l(u),
            e.flags |= 1,
            le(t, e, l, a),
            e.child;
        case 14:
            return Pm(t, e, e.type, e.pendingProps, a);
        case 15:
            return Km(t, e, e.type, e.pendingProps, a);
        case 19:
            return ep(t, e, a);
        case 31:
            return NS(t, e, a);
        case 22:
            return Qm(t, e, a, e.pendingProps);
        case 24:
            return xa(e),
            l = ie(Qt),
            t === null ? (u = ru(),
            u === null && (u = _t,
            c = lu(),
            u.pooledCache = c,
            c.refCount++,
            c !== null && (u.pooledCacheLanes |= a),
            u = c),
            e.memoizedState = {
                parent: l,
                cache: u
            },
            uu(e),
            qn(e, Qt, u)) : ((t.lanes & a) !== 0 && (cu(t, e),
            ul(e, null, null, a),
            ol()),
            u = t.memoizedState,
            c = e.memoizedState,
            u.parent !== l ? (u = {
                parent: l,
                cache: l
            },
            e.memoizedState = u,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u),
            qn(e, Qt, l)) : (l = c.cache,
            qn(e, Qt, l),
            l !== u.cache && iu(e, [Qt], a, !0))),
            le(t, e, e.pendingProps.children, a),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(r(156, e.tag))
    }
    function Rn(t) {
        t.flags |= 4
    }
    function Pu(t, e, a, l, u) {
        if ((e = (t.mode & 32) !== 0) && (e = !1),
        e) {
            if (t.flags |= 16777216,
            (u & 335544128) === u)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (Dp())
                    t.flags |= 8192;
                else
                    throw Aa = Ns,
                    ou
        } else
            t.flags &= -16777217
    }
    function ap(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !vy(e))
            if (Dp())
                t.flags |= 8192;
            else
                throw Aa = Ns,
                ou
    }
    function Zs(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? Vd() : 536870912,
        t.lanes |= e,
        pi |= e)
    }
    function pl(t, e) {
        if (!St)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var a = null; e !== null; )
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? t.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = t.tail;
                for (var l = null; a !== null; )
                    a.alternate !== null && (l = a),
                    a = a.sibling;
                l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function Vt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , a = 0
          , l = 0;
        if (e)
            for (var u = t.child; u !== null; )
                a |= u.lanes | u.childLanes,
                l |= u.subtreeFlags & 65011712,
                l |= u.flags & 65011712,
                u.return = t,
                u = u.sibling;
        else
            for (u = t.child; u !== null; )
                a |= u.lanes | u.childLanes,
                l |= u.subtreeFlags,
                l |= u.flags,
                u.return = t,
                u = u.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = a,
        e
    }
    function jS(t, e, a) {
        var l = e.pendingProps;
        switch (Io(e),
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
            return Vt(e),
            null;
        case 1:
            return Vt(e),
            null;
        case 3:
            return a = e.stateNode,
            l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            Tn(Qt),
            Xt(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (t === null || t.child === null) && (ni(e) ? Rn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            eu())),
            Vt(e),
            null;
        case 26:
            var u = e.type
              , c = e.memoizedState;
            return t === null ? (Rn(e),
            c !== null ? (Vt(e),
            ap(e, c)) : (Vt(e),
            Pu(e, u, null, l, a))) : c ? c !== t.memoizedState ? (Rn(e),
            Vt(e),
            ap(e, c)) : (Vt(e),
            e.flags &= -16777217) : (t = t.memoizedProps,
            t !== l && Rn(e),
            Vt(e),
            Pu(e, u, t, l, a)),
            null;
        case 27:
            if (ls(e),
            a = pt.current,
            u = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && Rn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(r(166));
                    return Vt(e),
                    null
                }
                t = $.current,
                ni(e) ? Vh(e) : (t = cy(u, l, a),
                e.stateNode = t,
                Rn(e))
            }
            return Vt(e),
            null;
        case 5:
            if (ls(e),
            u = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && Rn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(r(166));
                    return Vt(e),
                    null
                }
                if (c = $.current,
                ni(e))
                    Vh(e);
                else {
                    var p = ur(pt.current);
                    switch (c) {
                    case 1:
                        c = p.createElementNS("http://www.w3.org/2000/svg", u);
                        break;
                    case 2:
                        c = p.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                        break;
                    default:
                        switch (u) {
                        case "svg":
                            c = p.createElementNS("http://www.w3.org/2000/svg", u);
                            break;
                        case "math":
                            c = p.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                            break;
                        case "script":
                            c = p.createElement("div"),
                            c.innerHTML = "<script><\/script>",
                            c = c.removeChild(c.firstChild);
                            break;
                        case "select":
                            c = typeof l.is == "string" ? p.createElement("select", {
                                is: l.is
                            }) : p.createElement("select"),
                            l.multiple ? c.multiple = !0 : l.size && (c.size = l.size);
                            break;
                        default:
                            c = typeof l.is == "string" ? p.createElement(u, {
                                is: l.is
                            }) : p.createElement(u)
                        }
                    }
                    c[ne] = e,
                    c[ye] = l;
                    t: for (p = e.child; p !== null; ) {
                        if (p.tag === 5 || p.tag === 6)
                            c.appendChild(p.stateNode);
                        else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                            p.child.return = p,
                            p = p.child;
                            continue
                        }
                        if (p === e)
                            break t;
                        for (; p.sibling === null; ) {
                            if (p.return === null || p.return === e)
                                break t;
                            p = p.return
                        }
                        p.sibling.return = p.return,
                        p = p.sibling
                    }
                    e.stateNode = c;
                    t: switch (se(c, u, l),
                    u) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break t;
                    case "img":
                        l = !0;
                        break t;
                    default:
                        l = !1
                    }
                    l && Rn(e)
                }
            }
            return Vt(e),
            Pu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a),
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== l && Rn(e);
            else {
                if (typeof l != "string" && e.stateNode === null)
                    throw Error(r(166));
                if (t = pt.current,
                ni(e)) {
                    if (t = e.stateNode,
                    a = e.memoizedProps,
                    l = null,
                    u = ae,
                    u !== null)
                        switch (u.tag) {
                        case 27:
                        case 5:
                            l = u.memoizedProps
                        }
                    t[ne] = e,
                    t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Ip(t.nodeValue, a)),
                    t || kn(e, !0)
                } else
                    t = ur(t).createTextNode(l),
                    t[ne] = e,
                    e.stateNode = t
            }
            return Vt(e),
            null;
        case 31:
            if (a = e.memoizedState,
            t === null || t.memoizedState !== null) {
                if (l = ni(e),
                a !== null) {
                    if (t === null) {
                        if (!l)
                            throw Error(r(318));
                        if (t = e.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(r(557));
                        t[ne] = e
                    } else
                        ba(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Vt(e),
                    t = !1
                } else
                    a = eu(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a),
                    t = !0;
                if (!t)
                    return e.flags & 256 ? (Ne(e),
                    e) : (Ne(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(r(558))
            }
            return Vt(e),
            null;
        case 13:
            if (l = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (u = ni(e),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!u)
                            throw Error(r(318));
                        if (u = e.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(r(317));
                        u[ne] = e
                    } else
                        ba(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Vt(e),
                    u = !1
                } else
                    u = eu(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u),
                    u = !0;
                if (!u)
                    return e.flags & 256 ? (Ne(e),
                    e) : (Ne(e),
                    null)
            }
            return Ne(e),
            (e.flags & 128) !== 0 ? (e.lanes = a,
            e) : (a = l !== null,
            t = t !== null && t.memoizedState !== null,
            a && (l = e.child,
            u = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool),
            c = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool),
            c !== u && (l.flags |= 2048)),
            a !== t && a && (e.child.flags |= 8192),
            Zs(e, e.updateQueue),
            Vt(e),
            null);
        case 4:
            return Xt(),
            t === null && hc(e.stateNode.containerInfo),
            Vt(e),
            null;
        case 10:
            return Tn(e.type),
            Vt(e),
            null;
        case 19:
            if (q(Pt),
            l = e.memoizedState,
            l === null)
                return Vt(e),
                null;
            if (u = (e.flags & 128) !== 0,
            c = l.rendering,
            c === null)
                if (u)
                    pl(l, !1);
                else {
                    if (Gt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (c = Ls(t),
                            c !== null) {
                                for (e.flags |= 128,
                                pl(l, !1),
                                t = c.updateQueue,
                                e.updateQueue = t,
                                Zs(e, t),
                                e.subtreeFlags = 0,
                                t = a,
                                a = e.child; a !== null; )
                                    Nh(a, t),
                                    a = a.sibling;
                                return Z(Pt, Pt.current & 1 | 2),
                                St && Sn(e, l.treeForkCount),
                                e.child
                            }
                            t = t.sibling
                        }
                    l.tail !== null && we() > Is && (e.flags |= 128,
                    u = !0,
                    pl(l, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!u)
                    if (t = Ls(c),
                    t !== null) {
                        if (e.flags |= 128,
                        u = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        Zs(e, t),
                        pl(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !c.alternate && !St)
                            return Vt(e),
                            null
                    } else
                        2 * we() - l.renderingStartTime > Is && a !== 536870912 && (e.flags |= 128,
                        u = !0,
                        pl(l, !1),
                        e.lanes = 4194304);
                l.isBackwards ? (c.sibling = e.child,
                e.child = c) : (t = l.last,
                t !== null ? t.sibling = c : e.child = c,
                l.last = c)
            }
            return l.tail !== null ? (t = l.tail,
            l.rendering = t,
            l.tail = t.sibling,
            l.renderingStartTime = we(),
            t.sibling = null,
            a = Pt.current,
            Z(Pt, u ? a & 1 | 2 : a & 1),
            St && Sn(e, l.treeForkCount),
            t) : (Vt(e),
            null);
        case 22:
        case 23:
            return Ne(e),
            mu(),
            l = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
            l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Vt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Vt(e),
            a = e.updateQueue,
            a !== null && Zs(e, a.retryQueue),
            a = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            l = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            l !== a && (e.flags |= 2048),
            t !== null && q(Ta),
            null;
        case 24:
            return a = null,
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            Tn(Qt),
            Vt(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(r(156, e.tag))
    }
    function zS(t, e) {
        switch (Io(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return Tn(Qt),
            Xt(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return ls(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (Ne(e),
                e.alternate === null)
                    throw Error(r(340));
                ba()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 13:
            if (Ne(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(r(340));
                ba()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return q(Pt),
            null;
        case 4:
            return Xt(),
            null;
        case 10:
            return Tn(e.type),
            null;
        case 22:
        case 23:
            return Ne(e),
            mu(),
            t !== null && q(Ta),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return Tn(Qt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function ip(t, e) {
        switch (Io(e),
        e.tag) {
        case 3:
            Tn(Qt),
            Xt();
            break;
        case 26:
        case 27:
        case 5:
            ls(e);
            break;
        case 4:
            Xt();
            break;
        case 31:
            e.memoizedState !== null && Ne(e);
            break;
        case 13:
            Ne(e);
            break;
        case 19:
            q(Pt);
            break;
        case 10:
            Tn(e.type);
            break;
        case 22:
        case 23:
            Ne(e),
            mu(),
            t !== null && q(Ta);
            break;
        case 24:
            Tn(Qt)
        }
    }
    function yl(t, e) {
        try {
            var a = e.updateQueue
              , l = a !== null ? a.lastEffect : null;
            if (l !== null) {
                var u = l.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        l = void 0;
                        var c = a.create
                          , p = a.inst;
                        l = c(),
                        p.destroy = l
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (b) {
            Mt(e, e.return, b)
        }
    }
    function Qn(t, e, a) {
        try {
            var l = e.updateQueue
              , u = l !== null ? l.lastEffect : null;
            if (u !== null) {
                var c = u.next;
                l = c;
                do {
                    if ((l.tag & t) === t) {
                        var p = l.inst
                          , b = p.destroy;
                        if (b !== void 0) {
                            p.destroy = void 0,
                            u = e;
                            var E = a
                              , j = b;
                            try {
                                j()
                            } catch (H) {
                                Mt(u, E, H)
                            }
                        }
                    }
                    l = l.next
                } while (l !== c)
            }
        } catch (H) {
            Mt(e, e.return, H)
        }
    }
    function lp(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var a = t.stateNode;
            try {
                Fh(e, a)
            } catch (l) {
                Mt(t, t.return, l)
            }
        }
    }
    function sp(t, e, a) {
        a.props = Ca(t.type, t.memoizedProps),
        a.state = t.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (l) {
            Mt(t, e, l)
        }
    }
    function gl(t, e) {
        try {
            var a = t.ref;
            if (a !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var l = t.stateNode;
                    break;
                case 30:
                    l = t.stateNode;
                    break;
                default:
                    l = t.stateNode
                }
                typeof a == "function" ? t.refCleanup = a(l) : a.current = l
            }
        } catch (u) {
            Mt(t, e, u)
        }
    }
    function on(t, e) {
        var a = t.ref
          , l = t.refCleanup;
        if (a !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (u) {
                    Mt(t, e, u)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (u) {
                    Mt(t, e, u)
                }
            else
                a.current = null
    }
    function rp(t) {
        var e = t.type
          , a = t.memoizedProps
          , l = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && l.focus();
                break t;
            case "img":
                a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet)
            }
        } catch (u) {
            Mt(t, t.return, u)
        }
    }
    function Ku(t, e, a) {
        try {
            var l = t.stateNode;
            nx(l, t.type, a, e),
            l[ye] = e
        } catch (u) {
            Mt(t, t.return, u)
        }
    }
    function op(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ta(t.type) || t.tag === 4
    }
    function Qu(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || op(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && ta(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Zu(t, e, a) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            e.appendChild(t),
            a = a._reactRootContainer,
            a != null || e.onclick !== null || (e.onclick = gn));
        else if (l !== 4 && (l === 27 && ta(t.type) && (a = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Zu(t, e, a),
            t = t.sibling; t !== null; )
                Zu(t, e, a),
                t = t.sibling
    }
    function Fs(t, e, a) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? a.insertBefore(t, e) : a.appendChild(t);
        else if (l !== 4 && (l === 27 && ta(t.type) && (a = t.stateNode),
        t = t.child,
        t !== null))
            for (Fs(t, e, a),
            t = t.sibling; t !== null; )
                Fs(t, e, a),
                t = t.sibling
    }
    function up(t) {
        var e = t.stateNode
          , a = t.memoizedProps;
        try {
            for (var l = t.type, u = e.attributes; u.length; )
                e.removeAttributeNode(u[0]);
            se(e, l, a),
            e[ne] = t,
            e[ye] = a
        } catch (c) {
            Mt(t, t.return, c)
        }
    }
    var Cn = !1
      , Jt = !1
      , Fu = !1
      , cp = typeof WeakSet == "function" ? WeakSet : Set
      , ee = null;
    function LS(t, e) {
        if (t = t.containerInfo,
        yc = yr,
        t = Th(t),
        Go(t)) {
            if ("selectionStart"in t)
                var a = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    a = (a = t.ownerDocument) && a.defaultView || window;
                    var l = a.getSelection && a.getSelection();
                    if (l && l.rangeCount !== 0) {
                        a = l.anchorNode;
                        var u = l.anchorOffset
                          , c = l.focusNode;
                        l = l.focusOffset;
                        try {
                            a.nodeType,
                            c.nodeType
                        } catch {
                            a = null;
                            break t
                        }
                        var p = 0
                          , b = -1
                          , E = -1
                          , j = 0
                          , H = 0
                          , Y = t
                          , z = null;
                        e: for (; ; ) {
                            for (var B; Y !== a || u !== 0 && Y.nodeType !== 3 || (b = p + u),
                            Y !== c || l !== 0 && Y.nodeType !== 3 || (E = p + l),
                            Y.nodeType === 3 && (p += Y.nodeValue.length),
                            (B = Y.firstChild) !== null; )
                                z = Y,
                                Y = B;
                            for (; ; ) {
                                if (Y === t)
                                    break e;
                                if (z === a && ++j === u && (b = p),
                                z === c && ++H === l && (E = p),
                                (B = Y.nextSibling) !== null)
                                    break;
                                Y = z,
                                z = Y.parentNode
                            }
                            Y = B
                        }
                        a = b === -1 || E === -1 ? null : {
                            start: b,
                            end: E
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (gc = {
            focusedElem: t,
            selectionRange: a
        },
        yr = !1,
        ee = e; ee !== null; )
            if (e = ee,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                ee = t;
            else
                for (; ee !== null; ) {
                    switch (e = ee,
                    c = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (a = 0; a < t.length; a++)
                                u = t[a],
                                u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && c !== null) {
                            t = void 0,
                            a = e,
                            u = c.memoizedProps,
                            c = c.memoizedState,
                            l = a.stateNode;
                            try {
                                var W = Ca(a.type, u);
                                t = l.getSnapshotBeforeUpdate(W, c),
                                l.__reactInternalSnapshotBeforeUpdate = t
                            } catch (lt) {
                                Mt(a, a.return, lt)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            a = t.nodeType,
                            a === 9)
                                Sc(t);
                            else if (a === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Sc(t);
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
                            throw Error(r(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        ee = t;
                        break
                    }
                    ee = e.return
                }
    }
    function fp(t, e, a) {
        var l = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Dn(t, a),
            l & 4 && yl(5, a);
            break;
        case 1:
            if (Dn(t, a),
            l & 4)
                if (t = a.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (p) {
                        Mt(a, a.return, p)
                    }
                else {
                    var u = Ca(a.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (p) {
                        Mt(a, a.return, p)
                    }
                }
            l & 64 && lp(a),
            l & 512 && gl(a, a.return);
            break;
        case 3:
            if (Dn(t, a),
            l & 64 && (t = a.updateQueue,
            t !== null)) {
                if (e = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        e = a.child.stateNode;
                        break;
                    case 1:
                        e = a.child.stateNode
                    }
                try {
                    Fh(t, e)
                } catch (p) {
                    Mt(a, a.return, p)
                }
            }
            break;
        case 27:
            e === null && l & 4 && up(a);
        case 26:
        case 5:
            Dn(t, a),
            e === null && l & 4 && rp(a),
            l & 512 && gl(a, a.return);
            break;
        case 12:
            Dn(t, a);
            break;
        case 31:
            Dn(t, a),
            l & 4 && mp(t, a);
            break;
        case 13:
            Dn(t, a),
            l & 4 && pp(t, a),
            l & 64 && (t = a.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (a = XS.bind(null, a),
            cx(t, a))));
            break;
        case 22:
            if (l = a.memoizedState !== null || Cn,
            !l) {
                e = e !== null && e.memoizedState !== null || Jt,
                u = Cn;
                var c = Jt;
                Cn = l,
                (Jt = e) && !c ? On(t, a, (a.subtreeFlags & 8772) !== 0) : Dn(t, a),
                Cn = u,
                Jt = c
            }
            break;
        case 30:
            break;
        default:
            Dn(t, a)
        }
    }
    function dp(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        dp(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && wo(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Ht = null
      , ve = !1;
    function Mn(t, e, a) {
        for (a = a.child; a !== null; )
            hp(t, e, a),
            a = a.sibling
    }
    function hp(t, e, a) {
        if (Re && typeof Re.onCommitFiberUnmount == "function")
            try {
                Re.onCommitFiberUnmount(qi, a)
            } catch {}
        switch (a.tag) {
        case 26:
            Jt || on(a, e),
            Mn(t, e, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            Jt || on(a, e);
            var l = Ht
              , u = ve;
            ta(a.type) && (Ht = a.stateNode,
            ve = !1),
            Mn(t, e, a),
            Rl(a.stateNode),
            Ht = l,
            ve = u;
            break;
        case 5:
            Jt || on(a, e);
        case 6:
            if (l = Ht,
            u = ve,
            Ht = null,
            Mn(t, e, a),
            Ht = l,
            ve = u,
            Ht !== null)
                if (ve)
                    try {
                        (Ht.nodeType === 9 ? Ht.body : Ht.nodeName === "HTML" ? Ht.ownerDocument.body : Ht).removeChild(a.stateNode)
                    } catch (c) {
                        Mt(a, e, c)
                    }
                else
                    try {
                        Ht.removeChild(a.stateNode)
                    } catch (c) {
                        Mt(a, e, c)
                    }
            break;
        case 18:
            Ht !== null && (ve ? (t = Ht,
            ly(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode),
            Ei(t)) : ly(Ht, a.stateNode));
            break;
        case 4:
            l = Ht,
            u = ve,
            Ht = a.stateNode.containerInfo,
            ve = !0,
            Mn(t, e, a),
            Ht = l,
            ve = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Qn(2, a, e),
            Jt || Qn(4, a, e),
            Mn(t, e, a);
            break;
        case 1:
            Jt || (on(a, e),
            l = a.stateNode,
            typeof l.componentWillUnmount == "function" && sp(a, e, l)),
            Mn(t, e, a);
            break;
        case 21:
            Mn(t, e, a);
            break;
        case 22:
            Jt = (l = Jt) || a.memoizedState !== null,
            Mn(t, e, a),
            Jt = l;
            break;
        default:
            Mn(t, e, a)
        }
    }
    function mp(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                Ei(t)
            } catch (a) {
                Mt(e, e.return, a)
            }
        }
    }
    function pp(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Ei(t)
            } catch (a) {
                Mt(e, e.return, a)
            }
    }
    function VS(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new cp),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new cp),
            e;
        default:
            throw Error(r(435, t.tag))
        }
    }
    function Js(t, e) {
        var a = VS(t);
        e.forEach(function(l) {
            if (!a.has(l)) {
                a.add(l);
                var u = PS.bind(null, t, l);
                l.then(u, u)
            }
        })
    }
    function be(t, e) {
        var a = e.deletions;
        if (a !== null)
            for (var l = 0; l < a.length; l++) {
                var u = a[l]
                  , c = t
                  , p = e
                  , b = p;
                t: for (; b !== null; ) {
                    switch (b.tag) {
                    case 27:
                        if (ta(b.type)) {
                            Ht = b.stateNode,
                            ve = !1;
                            break t
                        }
                        break;
                    case 5:
                        Ht = b.stateNode,
                        ve = !1;
                        break t;
                    case 3:
                    case 4:
                        Ht = b.stateNode.containerInfo,
                        ve = !0;
                        break t
                    }
                    b = b.return
                }
                if (Ht === null)
                    throw Error(r(160));
                hp(c, p, u),
                Ht = null,
                ve = !1,
                c = u.alternate,
                c !== null && (c.return = null),
                u.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                yp(e, t),
                e = e.sibling
    }
    var $e = null;
    function yp(t, e) {
        var a = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            be(e, t),
            Se(t),
            l & 4 && (Qn(3, t, t.return),
            yl(3, t),
            Qn(5, t, t.return));
            break;
        case 1:
            be(e, t),
            Se(t),
            l & 512 && (Jt || a === null || on(a, a.return)),
            l & 64 && Cn && (t = t.updateQueue,
            t !== null && (l = t.callbacks,
            l !== null && (a = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
            break;
        case 26:
            var u = $e;
            if (be(e, t),
            Se(t),
            l & 512 && (Jt || a === null || on(a, a.return)),
            l & 4) {
                var c = a !== null ? a.memoizedState : null;
                if (l = t.memoizedState,
                a === null)
                    if (l === null)
                        if (t.stateNode === null) {
                            t: {
                                l = t.type,
                                a = t.memoizedProps,
                                u = u.ownerDocument || u;
                                e: switch (l) {
                                case "title":
                                    c = u.getElementsByTagName("title")[0],
                                    (!c || c[Xi] || c[ne] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(l),
                                    u.head.insertBefore(c, u.querySelector("head > title"))),
                                    se(c, l, a),
                                    c[ne] = t,
                                    te(c),
                                    l = c;
                                    break t;
                                case "link":
                                    var p = yy("link", "href", u).get(l + (a.href || ""));
                                    if (p) {
                                        for (var b = 0; b < p.length; b++)
                                            if (c = p[b],
                                            c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                p.splice(b, 1);
                                                break e
                                            }
                                    }
                                    c = u.createElement(l),
                                    se(c, l, a),
                                    u.head.appendChild(c);
                                    break;
                                case "meta":
                                    if (p = yy("meta", "content", u).get(l + (a.content || ""))) {
                                        for (b = 0; b < p.length; b++)
                                            if (c = p[b],
                                            c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                p.splice(b, 1);
                                                break e
                                            }
                                    }
                                    c = u.createElement(l),
                                    se(c, l, a),
                                    u.head.appendChild(c);
                                    break;
                                default:
                                    throw Error(r(468, l))
                                }
                                c[ne] = t,
                                te(c),
                                l = c
                            }
                            t.stateNode = l
                        } else
                            gy(u, t.type, t.stateNode);
                    else
                        t.stateNode = py(u, l, t.memoizedProps);
                else
                    c !== l ? (c === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : c.count--,
                    l === null ? gy(u, t.type, t.stateNode) : py(u, l, t.memoizedProps)) : l === null && t.stateNode !== null && Ku(t, t.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            be(e, t),
            Se(t),
            l & 512 && (Jt || a === null || on(a, a.return)),
            a !== null && l & 4 && Ku(t, t.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (be(e, t),
            Se(t),
            l & 512 && (Jt || a === null || on(a, a.return)),
            t.flags & 32) {
                u = t.stateNode;
                try {
                    Ka(u, "")
                } catch (W) {
                    Mt(t, t.return, W)
                }
            }
            l & 4 && t.stateNode != null && (u = t.memoizedProps,
            Ku(t, u, a !== null ? a.memoizedProps : u)),
            l & 1024 && (Fu = !0);
            break;
        case 6:
            if (be(e, t),
            Se(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(r(162));
                l = t.memoizedProps,
                a = t.stateNode;
                try {
                    a.nodeValue = l
                } catch (W) {
                    Mt(t, t.return, W)
                }
            }
            break;
        case 3:
            if (dr = null,
            u = $e,
            $e = cr(e.containerInfo),
            be(e, t),
            $e = u,
            Se(t),
            l & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Ei(e.containerInfo)
                } catch (W) {
                    Mt(t, t.return, W)
                }
            Fu && (Fu = !1,
            gp(t));
            break;
        case 4:
            l = $e,
            $e = cr(t.stateNode.containerInfo),
            be(e, t),
            Se(t),
            $e = l;
            break;
        case 12:
            be(e, t),
            Se(t);
            break;
        case 31:
            be(e, t),
            Se(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Js(t, l)));
            break;
        case 13:
            be(e, t),
            Se(t),
            t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ws = we()),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Js(t, l)));
            break;
        case 22:
            u = t.memoizedState !== null;
            var E = a !== null && a.memoizedState !== null
              , j = Cn
              , H = Jt;
            if (Cn = j || u,
            Jt = H || E,
            be(e, t),
            Jt = H,
            Cn = j,
            Se(t),
            l & 8192)
                t: for (e = t.stateNode,
                e._visibility = u ? e._visibility & -2 : e._visibility | 1,
                u && (a === null || E || Cn || Jt || Ma(t)),
                a = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (a === null) {
                            E = a = e;
                            try {
                                if (c = E.stateNode,
                                u)
                                    p = c.style,
                                    typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                                else {
                                    b = E.stateNode;
                                    var Y = E.memoizedProps.style
                                      , z = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                                    b.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim()
                                }
                            } catch (W) {
                                Mt(E, E.return, W)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (a === null) {
                            E = e;
                            try {
                                E.stateNode.nodeValue = u ? "" : E.memoizedProps
                            } catch (W) {
                                Mt(E, E.return, W)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (a === null) {
                            E = e;
                            try {
                                var B = E.stateNode;
                                u ? sy(B, !0) : sy(E.stateNode, !1)
                            } catch (W) {
                                Mt(E, E.return, W)
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
                        a === e && (a = null),
                        e = e.return
                    }
                    a === e && (a = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            l & 4 && (l = t.updateQueue,
            l !== null && (a = l.retryQueue,
            a !== null && (l.retryQueue = null,
            Js(t, a))));
            break;
        case 19:
            be(e, t),
            Se(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Js(t, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            be(e, t),
            Se(t)
        }
    }
    function Se(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var a, l = t.return; l !== null; ) {
                    if (op(l)) {
                        a = l;
                        break
                    }
                    l = l.return
                }
                if (a == null)
                    throw Error(r(160));
                switch (a.tag) {
                case 27:
                    var u = a.stateNode
                      , c = Qu(t);
                    Fs(t, c, u);
                    break;
                case 5:
                    var p = a.stateNode;
                    a.flags & 32 && (Ka(p, ""),
                    a.flags &= -33);
                    var b = Qu(t);
                    Fs(t, b, p);
                    break;
                case 3:
                case 4:
                    var E = a.stateNode.containerInfo
                      , j = Qu(t);
                    Zu(t, j, E);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (H) {
                Mt(t, t.return, H)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function gp(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                gp(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function Dn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                fp(t, e.alternate, e),
                e = e.sibling
    }
    function Ma(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Qn(4, e, e.return),
                Ma(e);
                break;
            case 1:
                on(e, e.return);
                var a = e.stateNode;
                typeof a.componentWillUnmount == "function" && sp(e, e.return, a),
                Ma(e);
                break;
            case 27:
                Rl(e.stateNode);
            case 26:
            case 5:
                on(e, e.return),
                Ma(e);
                break;
            case 22:
                e.memoizedState === null && Ma(e);
                break;
            case 30:
                Ma(e);
                break;
            default:
                Ma(e)
            }
            t = t.sibling
        }
    }
    function On(t, e, a) {
        for (a = a && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var l = e.alternate
              , u = t
              , c = e
              , p = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                On(u, c, a),
                yl(4, c);
                break;
            case 1:
                if (On(u, c, a),
                l = c,
                u = l.stateNode,
                typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount()
                    } catch (j) {
                        Mt(l, l.return, j)
                    }
                if (l = c,
                u = l.updateQueue,
                u !== null) {
                    var b = l.stateNode;
                    try {
                        var E = u.shared.hiddenCallbacks;
                        if (E !== null)
                            for (u.shared.hiddenCallbacks = null,
                            u = 0; u < E.length; u++)
                                Zh(E[u], b)
                    } catch (j) {
                        Mt(l, l.return, j)
                    }
                }
                a && p & 64 && lp(c),
                gl(c, c.return);
                break;
            case 27:
                up(c);
            case 26:
            case 5:
                On(u, c, a),
                a && l === null && p & 4 && rp(c),
                gl(c, c.return);
                break;
            case 12:
                On(u, c, a);
                break;
            case 31:
                On(u, c, a),
                a && p & 4 && mp(u, c);
                break;
            case 13:
                On(u, c, a),
                a && p & 4 && pp(u, c);
                break;
            case 22:
                c.memoizedState === null && On(u, c, a),
                gl(c, c.return);
                break;
            case 30:
                break;
            default:
                On(u, c, a)
            }
            e = e.sibling
        }
    }
    function Ju(t, e) {
        var a = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== a && (t != null && t.refCount++,
        a != null && al(a))
    }
    function $u(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && al(t))
    }
    function We(t, e, a, l) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                vp(t, e, a, l),
                e = e.sibling
    }
    function vp(t, e, a, l) {
        var u = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            We(t, e, a, l),
            u & 2048 && yl(9, e);
            break;
        case 1:
            We(t, e, a, l);
            break;
        case 3:
            We(t, e, a, l),
            u & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && al(t)));
            break;
        case 12:
            if (u & 2048) {
                We(t, e, a, l),
                t = e.stateNode;
                try {
                    var c = e.memoizedProps
                      , p = c.id
                      , b = c.onPostCommit;
                    typeof b == "function" && b(p, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (E) {
                    Mt(e, e.return, E)
                }
            } else
                We(t, e, a, l);
            break;
        case 31:
            We(t, e, a, l);
            break;
        case 13:
            We(t, e, a, l);
            break;
        case 23:
            break;
        case 22:
            c = e.stateNode,
            p = e.alternate,
            e.memoizedState !== null ? c._visibility & 2 ? We(t, e, a, l) : vl(t, e) : c._visibility & 2 ? We(t, e, a, l) : (c._visibility |= 2,
            di(t, e, a, l, (e.subtreeFlags & 10256) !== 0 || !1)),
            u & 2048 && Ju(p, e);
            break;
        case 24:
            We(t, e, a, l),
            u & 2048 && $u(e.alternate, e);
            break;
        default:
            We(t, e, a, l)
        }
    }
    function di(t, e, a, l, u) {
        for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var c = t
              , p = e
              , b = a
              , E = l
              , j = p.flags;
            switch (p.tag) {
            case 0:
            case 11:
            case 15:
                di(c, p, b, E, u),
                yl(8, p);
                break;
            case 23:
                break;
            case 22:
                var H = p.stateNode;
                p.memoizedState !== null ? H._visibility & 2 ? di(c, p, b, E, u) : vl(c, p) : (H._visibility |= 2,
                di(c, p, b, E, u)),
                u && j & 2048 && Ju(p.alternate, p);
                break;
            case 24:
                di(c, p, b, E, u),
                u && j & 2048 && $u(p.alternate, p);
                break;
            default:
                di(c, p, b, E, u)
            }
            e = e.sibling
        }
    }
    function vl(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var a = t
                  , l = e
                  , u = l.flags;
                switch (l.tag) {
                case 22:
                    vl(a, l),
                    u & 2048 && Ju(l.alternate, l);
                    break;
                case 24:
                    vl(a, l),
                    u & 2048 && $u(l.alternate, l);
                    break;
                default:
                    vl(a, l)
                }
                e = e.sibling
            }
    }
    var bl = 8192;
    function hi(t, e, a) {
        if (t.subtreeFlags & bl)
            for (t = t.child; t !== null; )
                bp(t, e, a),
                t = t.sibling
    }
    function bp(t, e, a) {
        switch (t.tag) {
        case 26:
            hi(t, e, a),
            t.flags & bl && t.memoizedState !== null && Tx(a, $e, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            hi(t, e, a);
            break;
        case 3:
        case 4:
            var l = $e;
            $e = cr(t.stateNode.containerInfo),
            hi(t, e, a),
            $e = l;
            break;
        case 22:
            t.memoizedState === null && (l = t.alternate,
            l !== null && l.memoizedState !== null ? (l = bl,
            bl = 16777216,
            hi(t, e, a),
            bl = l) : hi(t, e, a));
            break;
        default:
            hi(t, e, a)
        }
    }
    function Sp(t) {
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
    function Sl(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var l = e[a];
                    ee = l,
                    Tp(l, t)
                }
            Sp(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                xp(t),
                t = t.sibling
    }
    function xp(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Sl(t),
            t.flags & 2048 && Qn(9, t, t.return);
            break;
        case 3:
            Sl(t);
            break;
        case 12:
            Sl(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            $s(t)) : Sl(t);
            break;
        default:
            Sl(t)
        }
    }
    function $s(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var l = e[a];
                    ee = l,
                    Tp(l, t)
                }
            Sp(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Qn(8, e, e.return),
                $s(e);
                break;
            case 22:
                a = e.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                $s(e));
                break;
            default:
                $s(e)
            }
            t = t.sibling
        }
    }
    function Tp(t, e) {
        for (; ee !== null; ) {
            var a = ee;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Qn(8, a, e);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var l = a.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                al(a.memoizedState.cache)
            }
            if (l = a.child,
            l !== null)
                l.return = a,
                ee = l;
            else
                t: for (a = t; ee !== null; ) {
                    l = ee;
                    var u = l.sibling
                      , c = l.return;
                    if (dp(l),
                    l === a) {
                        ee = null;
                        break t
                    }
                    if (u !== null) {
                        u.return = c,
                        ee = u;
                        break t
                    }
                    ee = c
                }
        }
    }
    var US = {
        getCacheForType: function(t) {
            var e = ie(Qt)
              , a = e.data.get(t);
            return a === void 0 && (a = t(),
            e.data.set(t, a)),
            a
        },
        cacheSignal: function() {
            return ie(Qt).controller.signal
        }
    }
      , BS = typeof WeakMap == "function" ? WeakMap : Map
      , wt = 0
      , _t = null
      , yt = null
      , vt = 0
      , Ct = 0
      , _e = null
      , Zn = !1
      , mi = !1
      , Wu = !1
      , Nn = 0
      , Gt = 0
      , Fn = 0
      , Da = 0
      , Iu = 0
      , je = 0
      , pi = 0
      , xl = null
      , xe = null
      , tc = !1
      , Ws = 0
      , Ep = 0
      , Is = 1 / 0
      , tr = null
      , Jn = null
      , Wt = 0
      , $n = null
      , yi = null
      , _n = 0
      , ec = 0
      , nc = null
      , Ap = null
      , Tl = 0
      , ac = null;
    function ze() {
        return (wt & 2) !== 0 && vt !== 0 ? vt & -vt : L.T !== null ? uc() : kd()
    }
    function wp() {
        if (je === 0)
            if ((vt & 536870912) === 0 || St) {
                var t = os;
                os <<= 1,
                (os & 3932160) === 0 && (os = 262144),
                je = t
            } else
                je = 536870912;
        return t = Oe.current,
        t !== null && (t.flags |= 32),
        je
    }
    function Te(t, e, a) {
        (t === _t && (Ct === 2 || Ct === 9) || t.cancelPendingCommit !== null) && (gi(t, 0),
        Wn(t, vt, je, !1)),
        Yi(t, a),
        ((wt & 2) === 0 || t !== _t) && (t === _t && ((wt & 2) === 0 && (Da |= a),
        Gt === 4 && Wn(t, vt, je, !1)),
        un(t))
    }
    function Rp(t, e, a) {
        if ((wt & 6) !== 0)
            throw Error(r(327));
        var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Gi(t, e)
          , u = l ? qS(t, e) : lc(t, e, !0)
          , c = l;
        do {
            if (u === 0) {
                mi && !l && Wn(t, e, 0, !1);
                break
            } else {
                if (a = t.current.alternate,
                c && !HS(a)) {
                    u = lc(t, e, !1),
                    c = !1;
                    continue
                }
                if (u === 2) {
                    if (c = e,
                    t.errorRecoveryDisabledLanes & c)
                        var p = 0;
                    else
                        p = t.pendingLanes & -536870913,
                        p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
                    if (p !== 0) {
                        e = p;
                        t: {
                            var b = t;
                            u = xl;
                            var E = b.current.memoizedState.isDehydrated;
                            if (E && (gi(b, p).flags |= 256),
                            p = lc(b, p, !1),
                            p !== 2) {
                                if (Wu && !E) {
                                    b.errorRecoveryDisabledLanes |= c,
                                    Da |= c,
                                    u = 4;
                                    break t
                                }
                                c = xe,
                                xe = u,
                                c !== null && (xe === null ? xe = c : xe.push.apply(xe, c))
                            }
                            u = p
                        }
                        if (c = !1,
                        u !== 2)
                            continue
                    }
                }
                if (u === 1) {
                    gi(t, 0),
                    Wn(t, e, 0, !0);
                    break
                }
                t: {
                    switch (l = t,
                    c = u,
                    c) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        Wn(l, e, je, !Zn);
                        break t;
                    case 2:
                        xe = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(r(329))
                    }
                    if ((e & 62914560) === e && (u = Ws + 300 - we(),
                    10 < u)) {
                        if (Wn(l, e, je, !Zn),
                        cs(l, 0, !0) !== 0)
                            break t;
                        _n = e,
                        l.timeoutHandle = ay(Cp.bind(null, l, a, xe, tr, tc, e, je, Da, pi, Zn, c, "Throttled", -0, 0), u);
                        break t
                    }
                    Cp(l, a, xe, tr, tc, e, je, Da, pi, Zn, c, null, -0, 0)
                }
            }
            break
        } while (!0);
        un(t)
    }
    function Cp(t, e, a, l, u, c, p, b, E, j, H, Y, z, B) {
        if (t.timeoutHandle = -1,
        Y = e.subtreeFlags,
        Y & 8192 || (Y & 16785408) === 16785408) {
            Y = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: gn
            },
            bp(e, c, Y);
            var W = (c & 62914560) === c ? Ws - we() : (c & 4194048) === c ? Ep - we() : 0;
            if (W = Ex(Y, W),
            W !== null) {
                _n = c,
                t.cancelPendingCommit = W(Lp.bind(null, t, e, c, a, l, u, p, b, E, H, Y, null, z, B)),
                Wn(t, c, p, !j);
                return
            }
        }
        Lp(t, e, c, a, l, u, p, b, E)
    }
    function HS(t) {
        for (var e = t; ; ) {
            var a = e.tag;
            if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var l = 0; l < a.length; l++) {
                    var u = a[l]
                      , c = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!Me(c(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = e.child,
            e.subtreeFlags & 16384 && a !== null)
                a.return = e,
                e = a;
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
    function Wn(t, e, a, l) {
        e &= ~Iu,
        e &= ~Da,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        l && (t.warmLanes |= e),
        l = t.expirationTimes;
        for (var u = e; 0 < u; ) {
            var c = 31 - Ce(u)
              , p = 1 << c;
            l[c] = -1,
            u &= ~p
        }
        a !== 0 && Ud(t, a, e)
    }
    function er() {
        return (wt & 6) === 0 ? (El(0),
        !1) : !0
    }
    function ic() {
        if (yt !== null) {
            if (Ct === 0)
                var t = yt.return;
            else
                t = yt,
                xn = Sa = null,
                Su(t),
                ri = null,
                ll = 0,
                t = yt;
            for (; t !== null; )
                ip(t.alternate, t),
                t = t.return;
            yt = null
        }
    }
    function gi(t, e) {
        var a = t.timeoutHandle;
        a !== -1 && (t.timeoutHandle = -1,
        lx(a)),
        a = t.cancelPendingCommit,
        a !== null && (t.cancelPendingCommit = null,
        a()),
        _n = 0,
        ic(),
        _t = t,
        yt = a = bn(t.current, null),
        vt = e,
        Ct = 0,
        _e = null,
        Zn = !1,
        mi = Gi(t, e),
        Wu = !1,
        pi = je = Iu = Da = Fn = Gt = 0,
        xe = xl = null,
        tc = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements,
            l &= e; 0 < l; ) {
                var u = 31 - Ce(l)
                  , c = 1 << u;
                e |= t[u],
                l &= ~c
            }
        return Nn = e,
        Ts(),
        a
    }
    function Mp(t, e) {
        ct = null,
        L.H = hl,
        e === si || e === Os ? (e = Xh(),
        Ct = 3) : e === ou ? (e = Xh(),
        Ct = 4) : Ct = e === Vu ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        _e = e,
        yt === null && (Gt = 1,
        Xs(t, ke(e, t.current)))
    }
    function Dp() {
        var t = Oe.current;
        return t === null ? !0 : (vt & 4194048) === vt ? Xe === null : (vt & 62914560) === vt || (vt & 536870912) !== 0 ? t === Xe : !1
    }
    function Op() {
        var t = L.H;
        return L.H = hl,
        t === null ? hl : t
    }
    function Np() {
        var t = L.A;
        return L.A = US,
        t
    }
    function nr() {
        Gt = 4,
        Zn || (vt & 4194048) !== vt && Oe.current !== null || (mi = !0),
        (Fn & 134217727) === 0 && (Da & 134217727) === 0 || _t === null || Wn(_t, vt, je, !1)
    }
    function lc(t, e, a) {
        var l = wt;
        wt |= 2;
        var u = Op()
          , c = Np();
        (_t !== t || vt !== e) && (tr = null,
        gi(t, e)),
        e = !1;
        var p = Gt;
        t: do
            try {
                if (Ct !== 0 && yt !== null) {
                    var b = yt
                      , E = _e;
                    switch (Ct) {
                    case 8:
                        ic(),
                        p = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Oe.current === null && (e = !0);
                        var j = Ct;
                        if (Ct = 0,
                        _e = null,
                        vi(t, b, E, j),
                        a && mi) {
                            p = 0;
                            break t
                        }
                        break;
                    default:
                        j = Ct,
                        Ct = 0,
                        _e = null,
                        vi(t, b, E, j)
                    }
                }
                kS(),
                p = Gt;
                break
            } catch (H) {
                Mp(t, H)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        xn = Sa = null,
        wt = l,
        L.H = u,
        L.A = c,
        yt === null && (_t = null,
        vt = 0,
        Ts()),
        p
    }
    function kS() {
        for (; yt !== null; )
            _p(yt)
    }
    function qS(t, e) {
        var a = wt;
        wt |= 2;
        var l = Op()
          , u = Np();
        _t !== t || vt !== e ? (tr = null,
        Is = we() + 500,
        gi(t, e)) : mi = Gi(t, e);
        t: do
            try {
                if (Ct !== 0 && yt !== null) {
                    e = yt;
                    var c = _e;
                    e: switch (Ct) {
                    case 1:
                        Ct = 0,
                        _e = null,
                        vi(t, e, c, 1);
                        break;
                    case 2:
                    case 9:
                        if (Gh(c)) {
                            Ct = 0,
                            _e = null,
                            jp(e);
                            break
                        }
                        e = function() {
                            Ct !== 2 && Ct !== 9 || _t !== t || (Ct = 7),
                            un(t)
                        }
                        ,
                        c.then(e, e);
                        break t;
                    case 3:
                        Ct = 7;
                        break t;
                    case 4:
                        Ct = 5;
                        break t;
                    case 7:
                        Gh(c) ? (Ct = 0,
                        _e = null,
                        jp(e)) : (Ct = 0,
                        _e = null,
                        vi(t, e, c, 7));
                        break;
                    case 5:
                        var p = null;
                        switch (yt.tag) {
                        case 26:
                            p = yt.memoizedState;
                        case 5:
                        case 27:
                            var b = yt;
                            if (p ? vy(p) : b.stateNode.complete) {
                                Ct = 0,
                                _e = null;
                                var E = b.sibling;
                                if (E !== null)
                                    yt = E;
                                else {
                                    var j = b.return;
                                    j !== null ? (yt = j,
                                    ar(j)) : yt = null
                                }
                                break e
                            }
                        }
                        Ct = 0,
                        _e = null,
                        vi(t, e, c, 5);
                        break;
                    case 6:
                        Ct = 0,
                        _e = null,
                        vi(t, e, c, 6);
                        break;
                    case 8:
                        ic(),
                        Gt = 6;
                        break t;
                    default:
                        throw Error(r(462))
                    }
                }
                GS();
                break
            } catch (H) {
                Mp(t, H)
            }
        while (!0);
        return xn = Sa = null,
        L.H = l,
        L.A = u,
        wt = a,
        yt !== null ? 0 : (_t = null,
        vt = 0,
        Ts(),
        Gt)
    }
    function GS() {
        for (; yt !== null && !fb(); )
            _p(yt)
    }
    function _p(t) {
        var e = np(t.alternate, t, Nn);
        t.memoizedProps = t.pendingProps,
        e === null ? ar(t) : yt = e
    }
    function jp(t) {
        var e = t
          , a = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = Jm(a, e, e.pendingProps, e.type, void 0, vt);
            break;
        case 11:
            e = Jm(a, e, e.pendingProps, e.type.render, e.ref, vt);
            break;
        case 5:
            Su(e);
        default:
            ip(a, e),
            e = yt = Nh(e, Nn),
            e = np(a, e, Nn)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? ar(t) : yt = e
    }
    function vi(t, e, a, l) {
        xn = Sa = null,
        Su(e),
        ri = null,
        ll = 0;
        var u = e.return;
        try {
            if (OS(t, u, e, a, vt)) {
                Gt = 1,
                Xs(t, ke(a, t.current)),
                yt = null;
                return
            }
        } catch (c) {
            if (u !== null)
                throw yt = u,
                c;
            Gt = 1,
            Xs(t, ke(a, t.current)),
            yt = null;
            return
        }
        e.flags & 32768 ? (St || l === 1 ? t = !0 : mi || (vt & 536870912) !== 0 ? t = !1 : (Zn = t = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = Oe.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        zp(e, t)) : ar(e)
    }
    function ar(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                zp(e, Zn);
                return
            }
            t = e.return;
            var a = jS(e.alternate, e, Nn);
            if (a !== null) {
                yt = a;
                return
            }
            if (e = e.sibling,
            e !== null) {
                yt = e;
                return
            }
            yt = e = t
        } while (e !== null);
        Gt === 0 && (Gt = 5)
    }
    function zp(t, e) {
        do {
            var a = zS(t.alternate, t);
            if (a !== null) {
                a.flags &= 32767,
                yt = a;
                return
            }
            if (a = t.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                yt = t;
                return
            }
            yt = t = a
        } while (t !== null);
        Gt = 6,
        yt = null
    }
    function Lp(t, e, a, l, u, c, p, b, E) {
        t.cancelPendingCommit = null;
        do
            ir();
        while (Wt !== 0);
        if ((wt & 6) !== 0)
            throw Error(r(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(r(177));
            if (c = e.lanes | e.childLanes,
            c |= Qo,
            xb(t, a, c, p, b, E),
            t === _t && (yt = _t = null,
            vt = 0),
            yi = e,
            $n = t,
            _n = a,
            ec = c,
            nc = u,
            Ap = l,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            KS(ss, function() {
                return kp(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            l = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || l) {
                l = L.T,
                L.T = null,
                u = Q.p,
                Q.p = 2,
                p = wt,
                wt |= 4;
                try {
                    LS(t, e, a)
                } finally {
                    wt = p,
                    Q.p = u,
                    L.T = l
                }
            }
            Wt = 1,
            Vp(),
            Up(),
            Bp()
        }
    }
    function Vp() {
        if (Wt === 1) {
            Wt = 0;
            var t = $n
              , e = yi
              , a = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || a) {
                a = L.T,
                L.T = null;
                var l = Q.p;
                Q.p = 2;
                var u = wt;
                wt |= 4;
                try {
                    yp(e, t);
                    var c = gc
                      , p = Th(t.containerInfo)
                      , b = c.focusedElem
                      , E = c.selectionRange;
                    if (p !== b && b && b.ownerDocument && xh(b.ownerDocument.documentElement, b)) {
                        if (E !== null && Go(b)) {
                            var j = E.start
                              , H = E.end;
                            if (H === void 0 && (H = j),
                            "selectionStart"in b)
                                b.selectionStart = j,
                                b.selectionEnd = Math.min(H, b.value.length);
                            else {
                                var Y = b.ownerDocument || document
                                  , z = Y && Y.defaultView || window;
                                if (z.getSelection) {
                                    var B = z.getSelection()
                                      , W = b.textContent.length
                                      , lt = Math.min(E.start, W)
                                      , Nt = E.end === void 0 ? lt : Math.min(E.end, W);
                                    !B.extend && lt > Nt && (p = Nt,
                                    Nt = lt,
                                    lt = p);
                                    var O = Sh(b, lt)
                                      , D = Sh(b, Nt);
                                    if (O && D && (B.rangeCount !== 1 || B.anchorNode !== O.node || B.anchorOffset !== O.offset || B.focusNode !== D.node || B.focusOffset !== D.offset)) {
                                        var N = Y.createRange();
                                        N.setStart(O.node, O.offset),
                                        B.removeAllRanges(),
                                        lt > Nt ? (B.addRange(N),
                                        B.extend(D.node, D.offset)) : (N.setEnd(D.node, D.offset),
                                        B.addRange(N))
                                    }
                                }
                            }
                        }
                        for (Y = [],
                        B = b; B = B.parentNode; )
                            B.nodeType === 1 && Y.push({
                                element: B,
                                left: B.scrollLeft,
                                top: B.scrollTop
                            });
                        for (typeof b.focus == "function" && b.focus(),
                        b = 0; b < Y.length; b++) {
                            var G = Y[b];
                            G.element.scrollLeft = G.left,
                            G.element.scrollTop = G.top
                        }
                    }
                    yr = !!yc,
                    gc = yc = null
                } finally {
                    wt = u,
                    Q.p = l,
                    L.T = a
                }
            }
            t.current = e,
            Wt = 2
        }
    }
    function Up() {
        if (Wt === 2) {
            Wt = 0;
            var t = $n
              , e = yi
              , a = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || a) {
                a = L.T,
                L.T = null;
                var l = Q.p;
                Q.p = 2;
                var u = wt;
                wt |= 4;
                try {
                    fp(t, e.alternate, e)
                } finally {
                    wt = u,
                    Q.p = l,
                    L.T = a
                }
            }
            Wt = 3
        }
    }
    function Bp() {
        if (Wt === 4 || Wt === 3) {
            Wt = 0,
            db();
            var t = $n
              , e = yi
              , a = _n
              , l = Ap;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Wt = 5 : (Wt = 0,
            yi = $n = null,
            Hp(t, t.pendingLanes));
            var u = t.pendingLanes;
            if (u === 0 && (Jn = null),
            Eo(a),
            e = e.stateNode,
            Re && typeof Re.onCommitFiberRoot == "function")
                try {
                    Re.onCommitFiberRoot(qi, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                e = L.T,
                u = Q.p,
                Q.p = 2,
                L.T = null;
                try {
                    for (var c = t.onRecoverableError, p = 0; p < l.length; p++) {
                        var b = l[p];
                        c(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    L.T = e,
                    Q.p = u
                }
            }
            (_n & 3) !== 0 && ir(),
            un(t),
            u = t.pendingLanes,
            (a & 261930) !== 0 && (u & 42) !== 0 ? t === ac ? Tl++ : (Tl = 0,
            ac = t) : Tl = 0,
            El(0)
        }
    }
    function Hp(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        al(e)))
    }
    function ir() {
        return Vp(),
        Up(),
        Bp(),
        kp()
    }
    function kp() {
        if (Wt !== 5)
            return !1;
        var t = $n
          , e = ec;
        ec = 0;
        var a = Eo(_n)
          , l = L.T
          , u = Q.p;
        try {
            Q.p = 32 > a ? 32 : a,
            L.T = null,
            a = nc,
            nc = null;
            var c = $n
              , p = _n;
            if (Wt = 0,
            yi = $n = null,
            _n = 0,
            (wt & 6) !== 0)
                throw Error(r(331));
            var b = wt;
            if (wt |= 4,
            xp(c.current),
            vp(c, c.current, p, a),
            wt = b,
            El(0, !1),
            Re && typeof Re.onPostCommitFiberRoot == "function")
                try {
                    Re.onPostCommitFiberRoot(qi, c)
                } catch {}
            return !0
        } finally {
            Q.p = u,
            L.T = l,
            Hp(t, e)
        }
    }
    function qp(t, e, a) {
        e = ke(a, e),
        e = Lu(t.stateNode, e, 2),
        t = Xn(t, e, 2),
        t !== null && (Yi(t, 2),
        un(t))
    }
    function Mt(t, e, a) {
        if (t.tag === 3)
            qp(t, t, a);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    qp(e, t, a);
                    break
                } else if (e.tag === 1) {
                    var l = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Jn === null || !Jn.has(l))) {
                        t = ke(a, t),
                        a = Gm(2),
                        l = Xn(e, a, 2),
                        l !== null && (Ym(a, l, e, t),
                        Yi(l, 2),
                        un(l));
                        break
                    }
                }
                e = e.return
            }
    }
    function sc(t, e, a) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new BS;
            var u = new Set;
            l.set(e, u)
        } else
            u = l.get(e),
            u === void 0 && (u = new Set,
            l.set(e, u));
        u.has(a) || (Wu = !0,
        u.add(a),
        t = YS.bind(null, t, e, a),
        e.then(t, t))
    }
    function YS(t, e, a) {
        var l = t.pingCache;
        l !== null && l.delete(e),
        t.pingedLanes |= t.suspendedLanes & a,
        t.warmLanes &= ~a,
        _t === t && (vt & a) === a && (Gt === 4 || Gt === 3 && (vt & 62914560) === vt && 300 > we() - Ws ? (wt & 2) === 0 && gi(t, 0) : Iu |= a,
        pi === vt && (pi = 0)),
        un(t)
    }
    function Gp(t, e) {
        e === 0 && (e = Vd()),
        t = ga(t, e),
        t !== null && (Yi(t, e),
        un(t))
    }
    function XS(t) {
        var e = t.memoizedState
          , a = 0;
        e !== null && (a = e.retryLane),
        Gp(t, a)
    }
    function PS(t, e) {
        var a = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var l = t.stateNode
              , u = t.memoizedState;
            u !== null && (a = u.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        case 22:
            l = t.stateNode._retryCache;
            break;
        default:
            throw Error(r(314))
        }
        l !== null && l.delete(e),
        Gp(t, a)
    }
    function KS(t, e) {
        return bo(t, e)
    }
    var lr = null
      , bi = null
      , rc = !1
      , sr = !1
      , oc = !1
      , In = 0;
    function un(t) {
        t !== bi && t.next === null && (bi === null ? lr = bi = t : bi = bi.next = t),
        sr = !0,
        rc || (rc = !0,
        ZS())
    }
    function El(t, e) {
        if (!oc && sr) {
            oc = !0;
            do
                for (var a = !1, l = lr; l !== null; ) {
                    if (t !== 0) {
                        var u = l.pendingLanes;
                        if (u === 0)
                            var c = 0;
                        else {
                            var p = l.suspendedLanes
                              , b = l.pingedLanes;
                            c = (1 << 31 - Ce(42 | t) + 1) - 1,
                            c &= u & ~(p & ~b),
                            c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (a = !0,
                        Kp(l, c))
                    } else
                        c = vt,
                        c = cs(l, l === _t ? c : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (c & 3) === 0 || Gi(l, c) || (a = !0,
                        Kp(l, c));
                    l = l.next
                }
            while (a);
            oc = !1
        }
    }
    function QS() {
        Yp()
    }
    function Yp() {
        sr = rc = !1;
        var t = 0;
        In !== 0 && ix() && (t = In);
        for (var e = we(), a = null, l = lr; l !== null; ) {
            var u = l.next
              , c = Xp(l, e);
            c === 0 ? (l.next = null,
            a === null ? lr = u : a.next = u,
            u === null && (bi = a)) : (a = l,
            (t !== 0 || (c & 3) !== 0) && (sr = !0)),
            l = u
        }
        Wt !== 0 && Wt !== 5 || El(t),
        In !== 0 && (In = 0)
    }
    function Xp(t, e) {
        for (var a = t.suspendedLanes, l = t.pingedLanes, u = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
            var p = 31 - Ce(c)
              , b = 1 << p
              , E = u[p];
            E === -1 ? ((b & a) === 0 || (b & l) !== 0) && (u[p] = Sb(b, e)) : E <= e && (t.expiredLanes |= b),
            c &= ~b
        }
        if (e = _t,
        a = vt,
        a = cs(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l = t.callbackNode,
        a === 0 || t === e && (Ct === 2 || Ct === 9) || t.cancelPendingCommit !== null)
            return l !== null && l !== null && So(l),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((a & 3) === 0 || Gi(t, a)) {
            if (e = a & -a,
            e === t.callbackPriority)
                return e;
            switch (l !== null && So(l),
            Eo(a)) {
            case 2:
            case 8:
                a = zd;
                break;
            case 32:
                a = ss;
                break;
            case 268435456:
                a = Ld;
                break;
            default:
                a = ss
            }
            return l = Pp.bind(null, t),
            a = bo(a, l),
            t.callbackPriority = e,
            t.callbackNode = a,
            e
        }
        return l !== null && l !== null && So(l),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function Pp(t, e) {
        if (Wt !== 0 && Wt !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var a = t.callbackNode;
        if (ir() && t.callbackNode !== a)
            return null;
        var l = vt;
        return l = cs(t, t === _t ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l === 0 ? null : (Rp(t, l, e),
        Xp(t, we()),
        t.callbackNode != null && t.callbackNode === a ? Pp.bind(null, t) : null)
    }
    function Kp(t, e) {
        if (ir())
            return null;
        Rp(t, e, !0)
    }
    function ZS() {
        sx(function() {
            (wt & 6) !== 0 ? bo(jd, QS) : Yp()
        })
    }
    function uc() {
        if (In === 0) {
            var t = ii;
            t === 0 && (t = rs,
            rs <<= 1,
            (rs & 261888) === 0 && (rs = 256)),
            In = t
        }
        return In
    }
    function Qp(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ms("" + t)
    }
    function Zp(t, e) {
        var a = e.ownerDocument.createElement("input");
        return a.name = e.name,
        a.value = e.value,
        t.id && a.setAttribute("form", t.id),
        e.parentNode.insertBefore(a, e),
        t = new FormData(t),
        a.parentNode.removeChild(a),
        t
    }
    function FS(t, e, a, l, u) {
        if (e === "submit" && a && a.stateNode === u) {
            var c = Qp((u[ye] || null).action)
              , p = l.submitter;
            p && (e = (e = p[ye] || null) ? Qp(e.formAction) : p.getAttribute("formAction"),
            e !== null && (c = e,
            p = null));
            var b = new vs("action","action",null,l,u);
            t.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (In !== 0) {
                                var E = p ? Zp(u, p) : new FormData(u);
                                Du(a, {
                                    pending: !0,
                                    data: E,
                                    method: u.method,
                                    action: c
                                }, null, E)
                            }
                        } else
                            typeof c == "function" && (b.preventDefault(),
                            E = p ? Zp(u, p) : new FormData(u),
                            Du(a, {
                                pending: !0,
                                data: E,
                                method: u.method,
                                action: c
                            }, c, E))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var cc = 0; cc < Ko.length; cc++) {
        var fc = Ko[cc]
          , JS = fc.toLowerCase()
          , $S = fc[0].toUpperCase() + fc.slice(1);
        Je(JS, "on" + $S)
    }
    Je(wh, "onAnimationEnd"),
    Je(Rh, "onAnimationIteration"),
    Je(Ch, "onAnimationStart"),
    Je("dblclick", "onDoubleClick"),
    Je("focusin", "onFocus"),
    Je("focusout", "onBlur"),
    Je(hS, "onTransitionRun"),
    Je(mS, "onTransitionStart"),
    Je(pS, "onTransitionCancel"),
    Je(Mh, "onTransitionEnd"),
    Xa("onMouseEnter", ["mouseout", "mouseover"]),
    Xa("onMouseLeave", ["mouseout", "mouseover"]),
    Xa("onPointerEnter", ["pointerout", "pointerover"]),
    Xa("onPointerLeave", ["pointerout", "pointerover"]),
    ha("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    ha("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    ha("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ha("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    ha("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    ha("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Al = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , WS = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));
    function Fp(t, e) {
        e = (e & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var l = t[a]
              , u = l.event;
            l = l.listeners;
            t: {
                var c = void 0;
                if (e)
                    for (var p = l.length - 1; 0 <= p; p--) {
                        var b = l[p]
                          , E = b.instance
                          , j = b.currentTarget;
                        if (b = b.listener,
                        E !== c && u.isPropagationStopped())
                            break t;
                        c = b,
                        u.currentTarget = j;
                        try {
                            c(u)
                        } catch (H) {
                            xs(H)
                        }
                        u.currentTarget = null,
                        c = E
                    }
                else
                    for (p = 0; p < l.length; p++) {
                        if (b = l[p],
                        E = b.instance,
                        j = b.currentTarget,
                        b = b.listener,
                        E !== c && u.isPropagationStopped())
                            break t;
                        c = b,
                        u.currentTarget = j;
                        try {
                            c(u)
                        } catch (H) {
                            xs(H)
                        }
                        u.currentTarget = null,
                        c = E
                    }
            }
        }
    }
    function gt(t, e) {
        var a = e[Ao];
        a === void 0 && (a = e[Ao] = new Set);
        var l = t + "__bubble";
        a.has(l) || (Jp(e, t, 2, !1),
        a.add(l))
    }
    function dc(t, e, a) {
        var l = 0;
        e && (l |= 4),
        Jp(a, t, l, e)
    }
    var rr = "_reactListening" + Math.random().toString(36).slice(2);
    function hc(t) {
        if (!t[rr]) {
            t[rr] = !0,
            Yd.forEach(function(a) {
                a !== "selectionchange" && (WS.has(a) || dc(a, !1, t),
                dc(a, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[rr] || (e[rr] = !0,
            dc("selectionchange", !1, e))
        }
    }
    function Jp(t, e, a, l) {
        switch (wy(e)) {
        case 2:
            var u = Rx;
            break;
        case 8:
            u = Cx;
            break;
        default:
            u = Mc
        }
        a = u.bind(null, e, a, t),
        u = void 0,
        !jo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0),
        l ? u !== void 0 ? t.addEventListener(e, a, {
            capture: !0,
            passive: u
        }) : t.addEventListener(e, a, !0) : u !== void 0 ? t.addEventListener(e, a, {
            passive: u
        }) : t.addEventListener(e, a, !1)
    }
    function mc(t, e, a, l, u) {
        var c = l;
        if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
            t: for (; ; ) {
                if (l === null)
                    return;
                var p = l.tag;
                if (p === 3 || p === 4) {
                    var b = l.stateNode.containerInfo;
                    if (b === u)
                        break;
                    if (p === 4)
                        for (p = l.return; p !== null; ) {
                            var E = p.tag;
                            if ((E === 3 || E === 4) && p.stateNode.containerInfo === u)
                                return;
                            p = p.return
                        }
                    for (; b !== null; ) {
                        if (p = qa(b),
                        p === null)
                            return;
                        if (E = p.tag,
                        E === 5 || E === 6 || E === 26 || E === 27) {
                            l = c = p;
                            continue t
                        }
                        b = b.parentNode
                    }
                }
                l = l.return
            }
        eh(function() {
            var j = c
              , H = No(a)
              , Y = [];
            t: {
                var z = Dh.get(t);
                if (z !== void 0) {
                    var B = vs
                      , W = t;
                    switch (t) {
                    case "keypress":
                        if (ys(a) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        B = Pb;
                        break;
                    case "focusin":
                        W = "focus",
                        B = Uo;
                        break;
                    case "focusout":
                        W = "blur",
                        B = Uo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        B = Uo;
                        break;
                    case "click":
                        if (a.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        B = ih;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        B = jb;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        B = Zb;
                        break;
                    case wh:
                    case Rh:
                    case Ch:
                        B = Vb;
                        break;
                    case Mh:
                        B = Jb;
                        break;
                    case "scroll":
                    case "scrollend":
                        B = Nb;
                        break;
                    case "wheel":
                        B = Wb;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        B = Bb;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        B = sh;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        B = tS
                    }
                    var lt = (e & 4) !== 0
                      , Nt = !lt && (t === "scroll" || t === "scrollend")
                      , O = lt ? z !== null ? z + "Capture" : null : z;
                    lt = [];
                    for (var D = j, N; D !== null; ) {
                        var G = D;
                        if (N = G.stateNode,
                        G = G.tag,
                        G !== 5 && G !== 26 && G !== 27 || N === null || O === null || (G = Ki(D, O),
                        G != null && lt.push(wl(D, G, N))),
                        Nt)
                            break;
                        D = D.return
                    }
                    0 < lt.length && (z = new B(z,W,null,a,H),
                    Y.push({
                        event: z,
                        listeners: lt
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (z = t === "mouseover" || t === "pointerover",
                    B = t === "mouseout" || t === "pointerout",
                    z && a !== Oo && (W = a.relatedTarget || a.fromElement) && (qa(W) || W[ka]))
                        break t;
                    if ((B || z) && (z = H.window === H ? H : (z = H.ownerDocument) ? z.defaultView || z.parentWindow : window,
                    B ? (W = a.relatedTarget || a.toElement,
                    B = j,
                    W = W ? qa(W) : null,
                    W !== null && (Nt = f(W),
                    lt = W.tag,
                    W !== Nt || lt !== 5 && lt !== 27 && lt !== 6) && (W = null)) : (B = null,
                    W = j),
                    B !== W)) {
                        if (lt = ih,
                        G = "onMouseLeave",
                        O = "onMouseEnter",
                        D = "mouse",
                        (t === "pointerout" || t === "pointerover") && (lt = sh,
                        G = "onPointerLeave",
                        O = "onPointerEnter",
                        D = "pointer"),
                        Nt = B == null ? z : Pi(B),
                        N = W == null ? z : Pi(W),
                        z = new lt(G,D + "leave",B,a,H),
                        z.target = Nt,
                        z.relatedTarget = N,
                        G = null,
                        qa(H) === j && (lt = new lt(O,D + "enter",W,a,H),
                        lt.target = N,
                        lt.relatedTarget = Nt,
                        G = lt),
                        Nt = G,
                        B && W)
                            e: {
                                for (lt = IS,
                                O = B,
                                D = W,
                                N = 0,
                                G = O; G; G = lt(G))
                                    N++;
                                G = 0;
                                for (var it = D; it; it = lt(it))
                                    G++;
                                for (; 0 < N - G; )
                                    O = lt(O),
                                    N--;
                                for (; 0 < G - N; )
                                    D = lt(D),
                                    G--;
                                for (; N--; ) {
                                    if (O === D || D !== null && O === D.alternate) {
                                        lt = O;
                                        break e
                                    }
                                    O = lt(O),
                                    D = lt(D)
                                }
                                lt = null
                            }
                        else
                            lt = null;
                        B !== null && $p(Y, z, B, lt, !1),
                        W !== null && Nt !== null && $p(Y, Nt, W, lt, !0)
                    }
                }
                t: {
                    if (z = j ? Pi(j) : window,
                    B = z.nodeName && z.nodeName.toLowerCase(),
                    B === "select" || B === "input" && z.type === "file")
                        var Tt = mh;
                    else if (dh(z))
                        if (ph)
                            Tt = cS;
                        else {
                            Tt = oS;
                            var nt = rS
                        }
                    else
                        B = z.nodeName,
                        !B || B.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? j && Do(j.elementType) && (Tt = mh) : Tt = uS;
                    if (Tt && (Tt = Tt(t, j))) {
                        hh(Y, Tt, a, H);
                        break t
                    }
                    nt && nt(t, z, j),
                    t === "focusout" && j && z.type === "number" && j.memoizedProps.value != null && Mo(z, "number", z.value)
                }
                switch (nt = j ? Pi(j) : window,
                t) {
                case "focusin":
                    (dh(nt) || nt.contentEditable === "true") && (Ja = nt,
                    Yo = j,
                    tl = null);
                    break;
                case "focusout":
                    tl = Yo = Ja = null;
                    break;
                case "mousedown":
                    Xo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Xo = !1,
                    Eh(Y, a, H);
                    break;
                case "selectionchange":
                    if (dS)
                        break;
                case "keydown":
                case "keyup":
                    Eh(Y, a, H)
                }
                var ft;
                if (Ho)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var bt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            bt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            bt = "onCompositionUpdate";
                            break t
                        }
                        bt = void 0
                    }
                else
                    Fa ? ch(t, a) && (bt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (bt = "onCompositionStart");
                bt && (rh && a.locale !== "ko" && (Fa || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && Fa && (ft = nh()) : (Un = H,
                zo = "value"in Un ? Un.value : Un.textContent,
                Fa = !0)),
                nt = or(j, bt),
                0 < nt.length && (bt = new lh(bt,t,null,a,H),
                Y.push({
                    event: bt,
                    listeners: nt
                }),
                ft ? bt.data = ft : (ft = fh(a),
                ft !== null && (bt.data = ft)))),
                (ft = nS ? aS(t, a) : iS(t, a)) && (bt = or(j, "onBeforeInput"),
                0 < bt.length && (nt = new lh("onBeforeInput","beforeinput",null,a,H),
                Y.push({
                    event: nt,
                    listeners: bt
                }),
                nt.data = ft)),
                FS(Y, t, j, a, H)
            }
            Fp(Y, e)
        })
    }
    function wl(t, e, a) {
        return {
            instance: t,
            listener: e,
            currentTarget: a
        }
    }
    function or(t, e) {
        for (var a = e + "Capture", l = []; t !== null; ) {
            var u = t
              , c = u.stateNode;
            if (u = u.tag,
            u !== 5 && u !== 26 && u !== 27 || c === null || (u = Ki(t, a),
            u != null && l.unshift(wl(t, u, c)),
            u = Ki(t, e),
            u != null && l.push(wl(t, u, c))),
            t.tag === 3)
                return l;
            t = t.return
        }
        return []
    }
    function IS(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function $p(t, e, a, l, u) {
        for (var c = e._reactName, p = []; a !== null && a !== l; ) {
            var b = a
              , E = b.alternate
              , j = b.stateNode;
            if (b = b.tag,
            E !== null && E === l)
                break;
            b !== 5 && b !== 26 && b !== 27 || j === null || (E = j,
            u ? (j = Ki(a, c),
            j != null && p.unshift(wl(a, j, E))) : u || (j = Ki(a, c),
            j != null && p.push(wl(a, j, E)))),
            a = a.return
        }
        p.length !== 0 && t.push({
            event: e,
            listeners: p
        })
    }
    var tx = /\r\n?/g
      , ex = /\u0000|\uFFFD/g;
    function Wp(t) {
        return (typeof t == "string" ? t : "" + t).replace(tx, `
`).replace(ex, "")
    }
    function Ip(t, e) {
        return e = Wp(e),
        Wp(t) === e
    }
    function Ot(t, e, a, l, u, c) {
        switch (a) {
        case "children":
            typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Ka(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Ka(t, "" + l);
            break;
        case "className":
            ds(t, "class", l);
            break;
        case "tabIndex":
            ds(t, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            ds(t, a, l);
            break;
        case "style":
            Id(t, l, c);
            break;
        case "data":
            if (e !== "object") {
                ds(t, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (e !== "a" || a !== "href")) {
                t.removeAttribute(a);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(a);
                break
            }
            l = ms("" + l),
            t.setAttribute(a, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof c == "function" && (a === "formAction" ? (e !== "input" && Ot(t, e, "name", u.name, u, null),
                Ot(t, e, "formEncType", u.formEncType, u, null),
                Ot(t, e, "formMethod", u.formMethod, u, null),
                Ot(t, e, "formTarget", u.formTarget, u, null)) : (Ot(t, e, "encType", u.encType, u, null),
                Ot(t, e, "method", u.method, u, null),
                Ot(t, e, "target", u.target, u, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(a);
                break
            }
            l = ms("" + l),
            t.setAttribute(a, l);
            break;
        case "onClick":
            l != null && (t.onclick = gn);
            break;
        case "onScroll":
            l != null && gt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && gt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(r(61));
                if (a = l.__html,
                a != null) {
                    if (u.children != null)
                        throw Error(r(60));
                    t.innerHTML = a
                }
            }
            break;
        case "multiple":
            t.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            t.muted = l && typeof l != "function" && typeof l != "symbol";
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
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            a = ms("" + l),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
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
            l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
            break;
        case "capture":
        case "download":
            l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
            break;
        case "popover":
            gt("beforetoggle", t),
            gt("toggle", t),
            fs(t, "popover", l);
            break;
        case "xlinkActuate":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            yn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            yn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            yn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            fs(t, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Db.get(a) || a,
            fs(t, a, l))
        }
    }
    function pc(t, e, a, l, u, c) {
        switch (a) {
        case "style":
            Id(t, l, c);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(r(61));
                if (a = l.__html,
                a != null) {
                    if (u.children != null)
                        throw Error(r(60));
                    t.innerHTML = a
                }
            }
            break;
        case "children":
            typeof l == "string" ? Ka(t, l) : (typeof l == "number" || typeof l == "bigint") && Ka(t, "" + l);
            break;
        case "onScroll":
            l != null && gt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && gt("scrollend", t);
            break;
        case "onClick":
            l != null && (t.onclick = gn);
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
            if (!Xd.hasOwnProperty(a))
                t: {
                    if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"),
                    e = a.slice(2, u ? a.length - 7 : void 0),
                    c = t[ye] || null,
                    c = c != null ? c[a] : null,
                    typeof c == "function" && t.removeEventListener(e, c, u),
                    typeof l == "function")) {
                        typeof c != "function" && c !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)),
                        t.addEventListener(e, l, u);
                        break t
                    }
                    a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : fs(t, a, l)
                }
        }
    }
    function se(t, e, a) {
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
            gt("error", t),
            gt("load", t);
            var l = !1, u = !1, c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var p = a[c];
                    if (p != null)
                        switch (c) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            u = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, e));
                        default:
                            Ot(t, e, c, p, a, null)
                        }
                }
            u && Ot(t, e, "srcSet", a.srcSet, a, null),
            l && Ot(t, e, "src", a.src, a, null);
            return;
        case "input":
            gt("invalid", t);
            var b = c = p = u = null
              , E = null
              , j = null;
            for (l in a)
                if (a.hasOwnProperty(l)) {
                    var H = a[l];
                    if (H != null)
                        switch (l) {
                        case "name":
                            u = H;
                            break;
                        case "type":
                            p = H;
                            break;
                        case "checked":
                            E = H;
                            break;
                        case "defaultChecked":
                            j = H;
                            break;
                        case "value":
                            c = H;
                            break;
                        case "defaultValue":
                            b = H;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (H != null)
                                throw Error(r(137, e));
                            break;
                        default:
                            Ot(t, e, l, H, a, null)
                        }
                }
            Fd(t, c, b, E, j, p, u, !1);
            return;
        case "select":
            gt("invalid", t),
            l = p = c = null;
            for (u in a)
                if (a.hasOwnProperty(u) && (b = a[u],
                b != null))
                    switch (u) {
                    case "value":
                        c = b;
                        break;
                    case "defaultValue":
                        p = b;
                        break;
                    case "multiple":
                        l = b;
                    default:
                        Ot(t, e, u, b, a, null)
                    }
            e = c,
            a = p,
            t.multiple = !!l,
            e != null ? Pa(t, !!l, e, !1) : a != null && Pa(t, !!l, a, !0);
            return;
        case "textarea":
            gt("invalid", t),
            c = u = l = null;
            for (p in a)
                if (a.hasOwnProperty(p) && (b = a[p],
                b != null))
                    switch (p) {
                    case "value":
                        l = b;
                        break;
                    case "defaultValue":
                        u = b;
                        break;
                    case "children":
                        c = b;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(r(91));
                        break;
                    default:
                        Ot(t, e, p, b, a, null)
                    }
            $d(t, l, u, c);
            return;
        case "option":
            for (E in a)
                a.hasOwnProperty(E) && (l = a[E],
                l != null) && (E === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Ot(t, e, E, l, a, null));
            return;
        case "dialog":
            gt("beforetoggle", t),
            gt("toggle", t),
            gt("cancel", t),
            gt("close", t);
            break;
        case "iframe":
        case "object":
            gt("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Al.length; l++)
                gt(Al[l], t);
            break;
        case "image":
            gt("error", t),
            gt("load", t);
            break;
        case "details":
            gt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            gt("error", t),
            gt("load", t);
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
            for (j in a)
                if (a.hasOwnProperty(j) && (l = a[j],
                l != null))
                    switch (j) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(r(137, e));
                    default:
                        Ot(t, e, j, l, a, null)
                    }
            return;
        default:
            if (Do(e)) {
                for (H in a)
                    a.hasOwnProperty(H) && (l = a[H],
                    l !== void 0 && pc(t, e, H, l, a, void 0));
                return
            }
        }
        for (b in a)
            a.hasOwnProperty(b) && (l = a[b],
            l != null && Ot(t, e, b, l, a, null))
    }
    function nx(t, e, a, l) {
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
            var u = null
              , c = null
              , p = null
              , b = null
              , E = null
              , j = null
              , H = null;
            for (B in a) {
                var Y = a[B];
                if (a.hasOwnProperty(B) && Y != null)
                    switch (B) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        E = Y;
                    default:
                        l.hasOwnProperty(B) || Ot(t, e, B, null, l, Y)
                    }
            }
            for (var z in l) {
                var B = l[z];
                if (Y = a[z],
                l.hasOwnProperty(z) && (B != null || Y != null))
                    switch (z) {
                    case "type":
                        c = B;
                        break;
                    case "name":
                        u = B;
                        break;
                    case "checked":
                        j = B;
                        break;
                    case "defaultChecked":
                        H = B;
                        break;
                    case "value":
                        p = B;
                        break;
                    case "defaultValue":
                        b = B;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (B != null)
                            throw Error(r(137, e));
                        break;
                    default:
                        B !== Y && Ot(t, e, z, B, l, Y)
                    }
            }
            Co(t, p, b, E, j, H, c, u);
            return;
        case "select":
            B = p = b = z = null;
            for (c in a)
                if (E = a[c],
                a.hasOwnProperty(c) && E != null)
                    switch (c) {
                    case "value":
                        break;
                    case "multiple":
                        B = E;
                    default:
                        l.hasOwnProperty(c) || Ot(t, e, c, null, l, E)
                    }
            for (u in l)
                if (c = l[u],
                E = a[u],
                l.hasOwnProperty(u) && (c != null || E != null))
                    switch (u) {
                    case "value":
                        z = c;
                        break;
                    case "defaultValue":
                        b = c;
                        break;
                    case "multiple":
                        p = c;
                    default:
                        c !== E && Ot(t, e, u, c, l, E)
                    }
            e = b,
            a = p,
            l = B,
            z != null ? Pa(t, !!a, z, !1) : !!l != !!a && (e != null ? Pa(t, !!a, e, !0) : Pa(t, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            B = z = null;
            for (b in a)
                if (u = a[b],
                a.hasOwnProperty(b) && u != null && !l.hasOwnProperty(b))
                    switch (b) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Ot(t, e, b, null, l, u)
                    }
            for (p in l)
                if (u = l[p],
                c = a[p],
                l.hasOwnProperty(p) && (u != null || c != null))
                    switch (p) {
                    case "value":
                        z = u;
                        break;
                    case "defaultValue":
                        B = u;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (u != null)
                            throw Error(r(91));
                        break;
                    default:
                        u !== c && Ot(t, e, p, u, l, c)
                    }
            Jd(t, z, B);
            return;
        case "option":
            for (var W in a)
                z = a[W],
                a.hasOwnProperty(W) && z != null && !l.hasOwnProperty(W) && (W === "selected" ? t.selected = !1 : Ot(t, e, W, null, l, z));
            for (E in l)
                z = l[E],
                B = a[E],
                l.hasOwnProperty(E) && z !== B && (z != null || B != null) && (E === "selected" ? t.selected = z && typeof z != "function" && typeof z != "symbol" : Ot(t, e, E, z, l, B));
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
            for (var lt in a)
                z = a[lt],
                a.hasOwnProperty(lt) && z != null && !l.hasOwnProperty(lt) && Ot(t, e, lt, null, l, z);
            for (j in l)
                if (z = l[j],
                B = a[j],
                l.hasOwnProperty(j) && z !== B && (z != null || B != null))
                    switch (j) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (z != null)
                            throw Error(r(137, e));
                        break;
                    default:
                        Ot(t, e, j, z, l, B)
                    }
            return;
        default:
            if (Do(e)) {
                for (var Nt in a)
                    z = a[Nt],
                    a.hasOwnProperty(Nt) && z !== void 0 && !l.hasOwnProperty(Nt) && pc(t, e, Nt, void 0, l, z);
                for (H in l)
                    z = l[H],
                    B = a[H],
                    !l.hasOwnProperty(H) || z === B || z === void 0 && B === void 0 || pc(t, e, H, z, l, B);
                return
            }
        }
        for (var O in a)
            z = a[O],
            a.hasOwnProperty(O) && z != null && !l.hasOwnProperty(O) && Ot(t, e, O, null, l, z);
        for (Y in l)
            z = l[Y],
            B = a[Y],
            !l.hasOwnProperty(Y) || z === B || z == null && B == null || Ot(t, e, Y, z, l, B)
    }
    function ty(t) {
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
    function ax() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
                var u = a[l]
                  , c = u.transferSize
                  , p = u.initiatorType
                  , b = u.duration;
                if (c && b && ty(p)) {
                    for (p = 0,
                    b = u.responseEnd,
                    l += 1; l < a.length; l++) {
                        var E = a[l]
                          , j = E.startTime;
                        if (j > b)
                            break;
                        var H = E.transferSize
                          , Y = E.initiatorType;
                        H && ty(Y) && (E = E.responseEnd,
                        p += H * (E < b ? 1 : (b - j) / (E - j)))
                    }
                    if (--l,
                    e += 8 * (c + p) / (u.duration / 1e3),
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
    var yc = null
      , gc = null;
    function ur(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function ey(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function ny(t, e) {
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
    function vc(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var bc = null;
    function ix() {
        var t = window.event;
        return t && t.type === "popstate" ? t === bc ? !1 : (bc = t,
        !0) : (bc = null,
        !1)
    }
    var ay = typeof setTimeout == "function" ? setTimeout : void 0
      , lx = typeof clearTimeout == "function" ? clearTimeout : void 0
      , iy = typeof Promise == "function" ? Promise : void 0
      , sx = typeof queueMicrotask == "function" ? queueMicrotask : typeof iy < "u" ? function(t) {
        return iy.resolve(null).then(t).catch(rx)
    }
    : ay;
    function rx(t) {
        setTimeout(function() {
            throw t
        })
    }
    function ta(t) {
        return t === "head"
    }
    function ly(t, e) {
        var a = e
          , l = 0;
        do {
            var u = a.nextSibling;
            if (t.removeChild(a),
            u && u.nodeType === 8)
                if (a = u.data,
                a === "/$" || a === "/&") {
                    if (l === 0) {
                        t.removeChild(u),
                        Ei(e);
                        return
                    }
                    l--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                    l++;
                else if (a === "html")
                    Rl(t.ownerDocument.documentElement);
                else if (a === "head") {
                    a = t.ownerDocument.head,
                    Rl(a);
                    for (var c = a.firstChild; c; ) {
                        var p = c.nextSibling
                          , b = c.nodeName;
                        c[Xi] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c),
                        c = p
                    }
                } else
                    a === "body" && Rl(t.ownerDocument.body);
            a = u
        } while (a);
        Ei(e)
    }
    function sy(t, e) {
        var a = t;
        t = 0;
        do {
            var l = a.nextSibling;
            if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display,
            a.style.display = "none") : (a.style.display = a._stashedDisplay || "",
            a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue,
            a.nodeValue = "") : a.nodeValue = a._stashedText || ""),
            l && l.nodeType === 8)
                if (a = l.data,
                a === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
            a = l
        } while (a)
    }
    function Sc(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var a = e;
            switch (e = e.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Sc(a),
                wo(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(a)
        }
    }
    function ox(t, e, a, l) {
        for (; t.nodeType === 1; ) {
            var u = a;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (l) {
                if (!t[Xi])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (c = t.getAttribute("rel"),
                        c === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (c !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (c = t.getAttribute("src"),
                        (c !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var c = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && t.getAttribute("name") === c)
                    return t
            } else
                return t;
            if (t = Pe(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function ux(t, e, a) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Pe(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function ry(t, e) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Pe(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function xc(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function Tc(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function cx(t, e) {
        var a = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = e;
        else if (t.data !== "$?" || a.readyState !== "loading")
            e();
        else {
            var l = function() {
                e(),
                a.removeEventListener("DOMContentLoaded", l)
            };
            a.addEventListener("DOMContentLoaded", l),
            t._reactRetry = l
        }
    }
    function Pe(t) {
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
    var Ec = null;
    function oy(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "/$" || a === "/&") {
                    if (e === 0)
                        return Pe(t.nextSibling);
                    e--
                } else
                    a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }
    function uy(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    a !== "/$" && a !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function cy(t, e, a) {
        switch (e = ur(a),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(r(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(r(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(r(454));
            return t;
        default:
            throw Error(r(451))
        }
    }
    function Rl(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        wo(t)
    }
    var Ke = new Map
      , fy = new Set;
    function cr(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var jn = Q.d;
    Q.d = {
        f: fx,
        r: dx,
        D: hx,
        C: mx,
        L: px,
        m: yx,
        X: vx,
        S: gx,
        M: bx
    };
    function fx() {
        var t = jn.f()
          , e = er();
        return t || e
    }
    function dx(t) {
        var e = Ga(t);
        e !== null && e.tag === 5 && e.type === "form" ? Mm(e) : jn.r(t)
    }
    var Si = typeof document > "u" ? null : document;
    function dy(t, e, a) {
        var l = Si;
        if (l && typeof e == "string" && e) {
            var u = Be(e);
            u = 'link[rel="' + t + '"][href="' + u + '"]',
            typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
            fy.has(u) || (fy.add(u),
            t = {
                rel: t,
                crossOrigin: a,
                href: e
            },
            l.querySelector(u) === null && (e = l.createElement("link"),
            se(e, "link", t),
            te(e),
            l.head.appendChild(e)))
        }
    }
    function hx(t) {
        jn.D(t),
        dy("dns-prefetch", t, null)
    }
    function mx(t, e) {
        jn.C(t, e),
        dy("preconnect", t, e)
    }
    function px(t, e, a) {
        jn.L(t, e, a);
        var l = Si;
        if (l && t && e) {
            var u = 'link[rel="preload"][as="' + Be(e) + '"]';
            e === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + Be(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (u += '[imagesizes="' + Be(a.imageSizes) + '"]')) : u += '[href="' + Be(t) + '"]';
            var c = u;
            switch (e) {
            case "style":
                c = xi(t);
                break;
            case "script":
                c = Ti(t)
            }
            Ke.has(c) || (t = v({
                rel: "preload",
                href: e === "image" && a && a.imageSrcSet ? void 0 : t,
                as: e
            }, a),
            Ke.set(c, t),
            l.querySelector(u) !== null || e === "style" && l.querySelector(Cl(c)) || e === "script" && l.querySelector(Ml(c)) || (e = l.createElement("link"),
            se(e, "link", t),
            te(e),
            l.head.appendChild(e)))
        }
    }
    function yx(t, e) {
        jn.m(t, e);
        var a = Si;
        if (a && t) {
            var l = e && typeof e.as == "string" ? e.as : "script"
              , u = 'link[rel="modulepreload"][as="' + Be(l) + '"][href="' + Be(t) + '"]'
              , c = u;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                c = Ti(t)
            }
            if (!Ke.has(c) && (t = v({
                rel: "modulepreload",
                href: t
            }, e),
            Ke.set(c, t),
            a.querySelector(u) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Ml(c)))
                        return
                }
                l = a.createElement("link"),
                se(l, "link", t),
                te(l),
                a.head.appendChild(l)
            }
        }
    }
    function gx(t, e, a) {
        jn.S(t, e, a);
        var l = Si;
        if (l && t) {
            var u = Ya(l).hoistableStyles
              , c = xi(t);
            e = e || "default";
            var p = u.get(c);
            if (!p) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (p = l.querySelector(Cl(c)))
                    b.loading = 5;
                else {
                    t = v({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, a),
                    (a = Ke.get(c)) && Ac(t, a);
                    var E = p = l.createElement("link");
                    te(E),
                    se(E, "link", t),
                    E._p = new Promise(function(j, H) {
                        E.onload = j,
                        E.onerror = H
                    }
                    ),
                    E.addEventListener("load", function() {
                        b.loading |= 1
                    }),
                    E.addEventListener("error", function() {
                        b.loading |= 2
                    }),
                    b.loading |= 4,
                    fr(p, e, l)
                }
                p = {
                    type: "stylesheet",
                    instance: p,
                    count: 1,
                    state: b
                },
                u.set(c, p)
            }
        }
    }
    function vx(t, e) {
        jn.X(t, e);
        var a = Si;
        if (a && t) {
            var l = Ya(a).hoistableScripts
              , u = Ti(t)
              , c = l.get(u);
            c || (c = a.querySelector(Ml(u)),
            c || (t = v({
                src: t,
                async: !0
            }, e),
            (e = Ke.get(u)) && wc(t, e),
            c = a.createElement("script"),
            te(c),
            se(c, "link", t),
            a.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            l.set(u, c))
        }
    }
    function bx(t, e) {
        jn.M(t, e);
        var a = Si;
        if (a && t) {
            var l = Ya(a).hoistableScripts
              , u = Ti(t)
              , c = l.get(u);
            c || (c = a.querySelector(Ml(u)),
            c || (t = v({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Ke.get(u)) && wc(t, e),
            c = a.createElement("script"),
            te(c),
            se(c, "link", t),
            a.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            l.set(u, c))
        }
    }
    function hy(t, e, a, l) {
        var u = (u = pt.current) ? cr(u) : null;
        if (!u)
            throw Error(r(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (e = xi(a.href),
            a = Ya(u).hoistableStyles,
            l = a.get(e),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                t = xi(a.href);
                var c = Ya(u).hoistableStyles
                  , p = c.get(t);
                if (p || (u = u.ownerDocument || u,
                p = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                c.set(t, p),
                (c = u.querySelector(Cl(t))) && !c._p && (p.instance = c,
                p.state.loading = 5),
                Ke.has(t) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                Ke.set(t, a),
                c || Sx(u, t, a, p.state))),
                e && l === null)
                    throw Error(r(528, ""));
                return p
            }
            if (e && l !== null)
                throw Error(r(529, ""));
            return null;
        case "script":
            return e = a.async,
            a = a.src,
            typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ti(a),
            a = Ya(u).hoistableScripts,
            l = a.get(e),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(r(444, t))
        }
    }
    function xi(t) {
        return 'href="' + Be(t) + '"'
    }
    function Cl(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function my(t) {
        return v({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function Sx(t, e, a, l) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"),
        l.preload = e,
        e.addEventListener("load", function() {
            return l.loading |= 1
        }),
        e.addEventListener("error", function() {
            return l.loading |= 2
        }),
        se(e, "link", a),
        te(e),
        t.head.appendChild(e))
    }
    function Ti(t) {
        return '[src="' + Be(t) + '"]'
    }
    function Ml(t) {
        return "script[async]" + t
    }
    function py(t, e, a) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + Be(a.href) + '"]');
                if (l)
                    return e.instance = l,
                    te(l),
                    l;
                var u = v({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"),
                te(l),
                se(l, "style", u),
                fr(l, a.precedence, t),
                e.instance = l;
            case "stylesheet":
                u = xi(a.href);
                var c = t.querySelector(Cl(u));
                if (c)
                    return e.state.loading |= 4,
                    e.instance = c,
                    te(c),
                    c;
                l = my(a),
                (u = Ke.get(u)) && Ac(l, u),
                c = (t.ownerDocument || t).createElement("link"),
                te(c);
                var p = c;
                return p._p = new Promise(function(b, E) {
                    p.onload = b,
                    p.onerror = E
                }
                ),
                se(c, "link", l),
                e.state.loading |= 4,
                fr(c, a.precedence, t),
                e.instance = c;
            case "script":
                return c = Ti(a.src),
                (u = t.querySelector(Ml(c))) ? (e.instance = u,
                te(u),
                u) : (l = a,
                (u = Ke.get(c)) && (l = v({}, a),
                wc(l, u)),
                t = t.ownerDocument || t,
                u = t.createElement("script"),
                te(u),
                se(u, "link", l),
                t.head.appendChild(u),
                e.instance = u);
            case "void":
                return null;
            default:
                throw Error(r(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance,
            e.state.loading |= 4,
            fr(l, a.precedence, t));
        return e.instance
    }
    function fr(t, e, a) {
        for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = l.length ? l[l.length - 1] : null, c = u, p = 0; p < l.length; p++) {
            var b = l[p];
            if (b.dataset.precedence === e)
                c = b;
            else if (c !== u)
                break
        }
        c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = a.nodeType === 9 ? a.head : a,
        e.insertBefore(t, e.firstChild))
    }
    function Ac(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function wc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var dr = null;
    function yy(t, e, a) {
        if (dr === null) {
            var l = new Map
              , u = dr = new Map;
            u.set(a, l)
        } else
            u = dr,
            l = u.get(a),
            l || (l = new Map,
            u.set(a, l));
        if (l.has(t))
            return l;
        for (l.set(t, null),
        a = a.getElementsByTagName(t),
        u = 0; u < a.length; u++) {
            var c = a[u];
            if (!(c[Xi] || c[ne] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var p = c.getAttribute(e) || "";
                p = t + p;
                var b = l.get(p);
                b ? b.push(c) : l.set(p, [c])
            }
        }
        return l
    }
    function gy(t, e, a) {
        t = t.ownerDocument || t,
        t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null)
    }
    function xx(t, e, a) {
        if (a === 1 || e.itemProp != null)
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
    function vy(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function Tx(t, e, a, l) {
        if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var u = xi(l.href)
                  , c = e.querySelector(Cl(u));
                if (c) {
                    e = c._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                    t = hr.bind(t),
                    e.then(t, t)),
                    a.state.loading |= 4,
                    a.instance = c,
                    te(c);
                    return
                }
                c = e.ownerDocument || e,
                l = my(l),
                (u = Ke.get(u)) && Ac(l, u),
                c = c.createElement("link"),
                te(c);
                var p = c;
                p._p = new Promise(function(b, E) {
                    p.onload = b,
                    p.onerror = E
                }
                ),
                se(c, "link", l),
                a.instance = c
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(a, e),
            (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++,
            a = hr.bind(t),
            e.addEventListener("load", a),
            e.addEventListener("error", a))
        }
    }
    var Rc = 0;
    function Ex(t, e) {
        return t.stylesheets && t.count === 0 && pr(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(a) {
            var l = setTimeout(function() {
                if (t.stylesheets && pr(t, t.stylesheets),
                t.unsuspend) {
                    var c = t.unsuspend;
                    t.unsuspend = null,
                    c()
                }
            }, 6e4 + e);
            0 < t.imgBytes && Rc === 0 && (Rc = 62500 * ax());
            var u = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && pr(t, t.stylesheets),
                t.unsuspend)) {
                    var c = t.unsuspend;
                    t.unsuspend = null,
                    c()
                }
            }, (t.imgBytes > Rc ? 50 : 800) + e);
            return t.unsuspend = a,
            function() {
                t.unsuspend = null,
                clearTimeout(l),
                clearTimeout(u)
            }
        }
        : null
    }
    function hr() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                pr(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var mr = null;
    function pr(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        mr = new Map,
        e.forEach(Ax, t),
        mr = null,
        hr.call(t))
    }
    function Ax(t, e) {
        if (!(e.state.loading & 4)) {
            var a = mr.get(t);
            if (a)
                var l = a.get(null);
            else {
                a = new Map,
                mr.set(t, a);
                for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < u.length; c++) {
                    var p = u[c];
                    (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p),
                    l = p)
                }
                l && a.set(null, l)
            }
            u = e.instance,
            p = u.getAttribute("data-precedence"),
            c = a.get(p) || l,
            c === l && a.set(null, u),
            a.set(p, u),
            this.count++,
            l = hr.bind(this),
            u.addEventListener("load", l),
            u.addEventListener("error", l),
            c ? c.parentNode.insertBefore(u, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(u, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Dl = {
        $$typeof: U,
        Provider: null,
        Consumer: null,
        _currentValue: F,
        _currentValue2: F,
        _threadCount: 0
    };
    function wx(t, e, a, l, u, c, p, b, E) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = xo(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = xo(0),
        this.hiddenUpdates = xo(null),
        this.identifierPrefix = l,
        this.onUncaughtError = u,
        this.onCaughtError = c,
        this.onRecoverableError = p,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = E,
        this.incompleteTransitions = new Map
    }
    function by(t, e, a, l, u, c, p, b, E, j, H, Y) {
        return t = new wx(t,e,a,p,E,j,H,Y,b),
        e = 1,
        c === !0 && (e |= 24),
        c = De(3, null, null, e),
        t.current = c,
        c.stateNode = t,
        e = lu(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        c.memoizedState = {
            element: l,
            isDehydrated: a,
            cache: e
        },
        uu(c),
        t
    }
    function Sy(t) {
        return t ? (t = Ia,
        t) : Ia
    }
    function xy(t, e, a, l, u, c) {
        u = Sy(u),
        l.context === null ? l.context = u : l.pendingContext = u,
        l = Yn(e),
        l.payload = {
            element: a
        },
        c = c === void 0 ? null : c,
        c !== null && (l.callback = c),
        a = Xn(t, l, e),
        a !== null && (Te(a, t, e),
        rl(a, t, e))
    }
    function Ty(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < e ? a : e
        }
    }
    function Cc(t, e) {
        Ty(t, e),
        (t = t.alternate) && Ty(t, e)
    }
    function Ey(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = ga(t, 67108864);
            e !== null && Te(e, t, 67108864),
            Cc(t, 67108864)
        }
    }
    function Ay(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = ze();
            e = To(e);
            var a = ga(t, e);
            a !== null && Te(a, t, e),
            Cc(t, e)
        }
    }
    var yr = !0;
    function Rx(t, e, a, l) {
        var u = L.T;
        L.T = null;
        var c = Q.p;
        try {
            Q.p = 2,
            Mc(t, e, a, l)
        } finally {
            Q.p = c,
            L.T = u
        }
    }
    function Cx(t, e, a, l) {
        var u = L.T;
        L.T = null;
        var c = Q.p;
        try {
            Q.p = 8,
            Mc(t, e, a, l)
        } finally {
            Q.p = c,
            L.T = u
        }
    }
    function Mc(t, e, a, l) {
        if (yr) {
            var u = Dc(l);
            if (u === null)
                mc(t, e, l, gr, a),
                Ry(t, l);
            else if (Dx(u, t, e, a, l))
                l.stopPropagation();
            else if (Ry(t, l),
            e & 4 && -1 < Mx.indexOf(t)) {
                for (; u !== null; ) {
                    var c = Ga(u);
                    if (c !== null)
                        switch (c.tag) {
                        case 3:
                            if (c = c.stateNode,
                            c.current.memoizedState.isDehydrated) {
                                var p = da(c.pendingLanes);
                                if (p !== 0) {
                                    var b = c;
                                    for (b.pendingLanes |= 2,
                                    b.entangledLanes |= 2; p; ) {
                                        var E = 1 << 31 - Ce(p);
                                        b.entanglements[1] |= E,
                                        p &= ~E
                                    }
                                    un(c),
                                    (wt & 6) === 0 && (Is = we() + 500,
                                    El(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            b = ga(c, 2),
                            b !== null && Te(b, c, 2),
                            er(),
                            Cc(c, 2)
                        }
                    if (c = Dc(l),
                    c === null && mc(t, e, l, gr, a),
                    c === u)
                        break;
                    u = c
                }
                u !== null && l.stopPropagation()
            } else
                mc(t, e, l, null, a)
        }
    }
    function Dc(t) {
        return t = No(t),
        Oc(t)
    }
    var gr = null;
    function Oc(t) {
        if (gr = null,
        t = qa(t),
        t !== null) {
            var e = f(t);
            if (e === null)
                t = null;
            else {
                var a = e.tag;
                if (a === 13) {
                    if (t = d(e),
                    t !== null)
                        return t;
                    t = null
                } else if (a === 31) {
                    if (t = h(e),
                    t !== null)
                        return t;
                    t = null
                } else if (a === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return gr = t,
        null
    }
    function wy(t) {
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
            switch (hb()) {
            case jd:
                return 2;
            case zd:
                return 8;
            case ss:
            case mb:
                return 32;
            case Ld:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Nc = !1
      , ea = null
      , na = null
      , aa = null
      , Ol = new Map
      , Nl = new Map
      , ia = []
      , Mx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Ry(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            ea = null;
            break;
        case "dragenter":
        case "dragleave":
            na = null;
            break;
        case "mouseover":
        case "mouseout":
            aa = null;
            break;
        case "pointerover":
        case "pointerout":
            Ol.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Nl.delete(e.pointerId)
        }
    }
    function _l(t, e, a, l, u, c) {
        return t === null || t.nativeEvent !== c ? (t = {
            blockedOn: e,
            domEventName: a,
            eventSystemFlags: l,
            nativeEvent: c,
            targetContainers: [u]
        },
        e !== null && (e = Ga(e),
        e !== null && Ey(e)),
        t) : (t.eventSystemFlags |= l,
        e = t.targetContainers,
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t)
    }
    function Dx(t, e, a, l, u) {
        switch (e) {
        case "focusin":
            return ea = _l(ea, t, e, a, l, u),
            !0;
        case "dragenter":
            return na = _l(na, t, e, a, l, u),
            !0;
        case "mouseover":
            return aa = _l(aa, t, e, a, l, u),
            !0;
        case "pointerover":
            var c = u.pointerId;
            return Ol.set(c, _l(Ol.get(c) || null, t, e, a, l, u)),
            !0;
        case "gotpointercapture":
            return c = u.pointerId,
            Nl.set(c, _l(Nl.get(c) || null, t, e, a, l, u)),
            !0
        }
        return !1
    }
    function Cy(t) {
        var e = qa(t.target);
        if (e !== null) {
            var a = f(e);
            if (a !== null) {
                if (e = a.tag,
                e === 13) {
                    if (e = d(a),
                    e !== null) {
                        t.blockedOn = e,
                        qd(t.priority, function() {
                            Ay(a)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = h(a),
                    e !== null) {
                        t.blockedOn = e,
                        qd(t.priority, function() {
                            Ay(a)
                        });
                        return
                    }
                } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function vr(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var a = Dc(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var l = new a.constructor(a.type,a);
                Oo = l,
                a.target.dispatchEvent(l),
                Oo = null
            } else
                return e = Ga(a),
                e !== null && Ey(e),
                t.blockedOn = a,
                !1;
            e.shift()
        }
        return !0
    }
    function My(t, e, a) {
        vr(t) && a.delete(e)
    }
    function Ox() {
        Nc = !1,
        ea !== null && vr(ea) && (ea = null),
        na !== null && vr(na) && (na = null),
        aa !== null && vr(aa) && (aa = null),
        Ol.forEach(My),
        Nl.forEach(My)
    }
    function br(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        Nc || (Nc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Ox)))
    }
    var Sr = null;
    function Dy(t) {
        Sr !== t && (Sr = t,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Sr === t && (Sr = null);
            for (var e = 0; e < t.length; e += 3) {
                var a = t[e]
                  , l = t[e + 1]
                  , u = t[e + 2];
                if (typeof l != "function") {
                    if (Oc(l || a) === null)
                        continue;
                    break
                }
                var c = Ga(a);
                c !== null && (t.splice(e, 3),
                e -= 3,
                Du(c, {
                    pending: !0,
                    data: u,
                    method: a.method,
                    action: l
                }, l, u))
            }
        }))
    }
    function Ei(t) {
        function e(E) {
            return br(E, t)
        }
        ea !== null && br(ea, t),
        na !== null && br(na, t),
        aa !== null && br(aa, t),
        Ol.forEach(e),
        Nl.forEach(e);
        for (var a = 0; a < ia.length; a++) {
            var l = ia[a];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < ia.length && (a = ia[0],
        a.blockedOn === null); )
            Cy(a),
            a.blockedOn === null && ia.shift();
        if (a = (t.ownerDocument || t).$$reactFormReplay,
        a != null)
            for (l = 0; l < a.length; l += 3) {
                var u = a[l]
                  , c = a[l + 1]
                  , p = u[ye] || null;
                if (typeof c == "function")
                    p || Dy(a);
                else if (p) {
                    var b = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (u = c,
                        p = c[ye] || null)
                            b = p.formAction;
                        else if (Oc(u) !== null)
                            continue
                    } else
                        b = p.action;
                    typeof b == "function" ? a[l + 1] = b : (a.splice(l, 3),
                    l -= 3),
                    Dy(a)
                }
            }
    }
    function Oy() {
        function t(c) {
            c.canIntercept && c.info === "react-transition" && c.intercept({
                handler: function() {
                    return new Promise(function(p) {
                        return u = p
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            u !== null && (u(),
            u = null),
            l || setTimeout(a, 20)
        }
        function a() {
            if (!l && !navigation.transition) {
                var c = navigation.currentEntry;
                c && c.url != null && navigation.navigate(c.url, {
                    state: c.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , u = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(a, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                u !== null && (u(),
                u = null)
            }
        }
    }
    function _c(t) {
        this._internalRoot = t
    }
    xr.prototype.render = _c.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(r(409));
        var a = e.current
          , l = ze();
        xy(a, l, t, e, null, null)
    }
    ,
    xr.prototype.unmount = _c.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            xy(t.current, 2, null, t, null, null),
            er(),
            e[ka] = null
        }
    }
    ;
    function xr(t) {
        this._internalRoot = t
    }
    xr.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = kd();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var a = 0; a < ia.length && e !== 0 && e < ia[a].priority; a++)
                ;
            ia.splice(a, 0, t),
            a === 0 && Cy(t)
        }
    }
    ;
    var Ny = i.version;
    if (Ny !== "19.2.5")
        throw Error(r(527, Ny, "19.2.5"));
    Q.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","),
            Error(r(268, t)));
        return t = m(e),
        t = t !== null ? g(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var Nx = {
        bundleType: 0,
        version: "19.2.5",
        rendererPackageName: "react-dom",
        currentDispatcherRef: L,
        reconcilerVersion: "19.2.5"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Tr.isDisabled && Tr.supportsFiber)
            try {
                qi = Tr.inject(Nx),
                Re = Tr
            } catch {}
    }
    return zl.createRoot = function(t, e) {
        if (!o(t))
            throw Error(r(299));
        var a = !1
          , l = ""
          , u = Bm
          , c = Hm
          , p = km;
        return e != null && (e.unstable_strictMode === !0 && (a = !0),
        e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
        e.onCaughtError !== void 0 && (c = e.onCaughtError),
        e.onRecoverableError !== void 0 && (p = e.onRecoverableError)),
        e = by(t, 1, !1, null, null, a, l, null, u, c, p, Oy),
        t[ka] = e.current,
        hc(t),
        new _c(e)
    }
    ,
    zl.hydrateRoot = function(t, e, a) {
        if (!o(t))
            throw Error(r(299));
        var l = !1
          , u = ""
          , c = Bm
          , p = Hm
          , b = km
          , E = null;
        return a != null && (a.unstable_strictMode === !0 && (l = !0),
        a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
        a.onCaughtError !== void 0 && (p = a.onCaughtError),
        a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
        a.formState !== void 0 && (E = a.formState)),
        e = by(t, 1, !0, e, a ?? null, l, u, E, c, p, b, Oy),
        e.context = Sy(null),
        a = e.current,
        l = ze(),
        l = To(l),
        u = Yn(l),
        u.callback = null,
        Xn(a, u, l),
        a = l,
        e.current.lanes = a,
        Yi(e, a),
        un(e),
        t[ka] = e.current,
        hc(t),
        new xr(e)
    }
    ,
    zl.version = "19.2.5",
    zl
}
var qy;
function qx() {
    if (qy)
        return Lc.exports;
    qy = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (i) {
                console.error(i)
            }
    }
    return n(),
    Lc.exports = kx(),
    Lc.exports
}
var Gx = qx();
var Gy = "popstate";
function Yy(n) {
    return typeof n == "object" && n != null && "pathname"in n && "search"in n && "hash"in n && "state"in n && "key"in n
}
function Yx(n={}) {
    function i(r, o) {
        let f = o.state?.masked
          , {pathname: d, search: h, hash: y} = f || r.location;
        return cf("", {
            pathname: d,
            search: h,
            hash: y
        }, o.state && o.state.usr || null, o.state && o.state.key || "default", f ? {
            pathname: r.location.pathname,
            search: r.location.search,
            hash: r.location.hash
        } : void 0)
    }
    function s(r, o) {
        return typeof o == "string" ? o : Yl(o)
    }
    return Px(i, s, null, n)
}
function kt(n, i) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(i)
}
function nn(n, i) {
    if (!n) {
        typeof console < "u" && console.warn(i);
        try {
            throw new Error(i)
        } catch {}
    }
}
function Xx() {
    return Math.random().toString(36).substring(2, 10)
}
function Xy(n, i) {
    return {
        usr: n.state,
        key: n.key,
        idx: i,
        masked: n.unstable_mask ? {
            pathname: n.pathname,
            search: n.search,
            hash: n.hash
        } : void 0
    }
}
function cf(n, i, s=null, r, o) {
    return {
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: "",
        ...typeof i == "string" ? _i(i) : i,
        state: s,
        key: i && i.key || r || Xx(),
        unstable_mask: o
    }
}
function Yl({pathname: n="/", search: i="", hash: s=""}) {
    return i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i),
    s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s),
    n
}
function _i(n) {
    let i = {};
    if (n) {
        let s = n.indexOf("#");
        s >= 0 && (i.hash = n.substring(s),
        n = n.substring(0, s));
        let r = n.indexOf("?");
        r >= 0 && (i.search = n.substring(r),
        n = n.substring(0, r)),
        n && (i.pathname = n)
    }
    return i
}
function Px(n, i, s, r={}) {
    let {window: o=document.defaultView, v5Compat: f=!1} = r
      , d = o.history
      , h = "POP"
      , y = null
      , m = g();
    m == null && (m = 0,
    d.replaceState({
        ...d.state,
        idx: m
    }, ""));
    function g() {
        return (d.state || {
            idx: null
        }).idx
    }
    function v() {
        h = "POP";
        let T = g()
          , _ = T == null ? null : T - m;
        m = T,
        y && y({
            action: h,
            location: C.location,
            delta: _
        })
    }
    function S(T, _) {
        h = "PUSH";
        let k = Yy(T) ? T : cf(C.location, T, _);
        m = g() + 1;
        let U = Xy(k, m)
          , X = C.createHref(k.unstable_mask || k);
        try {
            d.pushState(U, "", X)
        } catch (P) {
            if (P instanceof DOMException && P.name === "DataCloneError")
                throw P;
            o.location.assign(X)
        }
        f && y && y({
            action: h,
            location: C.location,
            delta: 1
        })
    }
    function w(T, _) {
        h = "REPLACE";
        let k = Yy(T) ? T : cf(C.location, T, _);
        m = g();
        let U = Xy(k, m)
          , X = C.createHref(k.unstable_mask || k);
        d.replaceState(U, "", X),
        f && y && y({
            action: h,
            location: C.location,
            delta: 0
        })
    }
    function x(T) {
        return Kx(T)
    }
    let C = {
        get action() {
            return h
        },
        get location() {
            return n(o, d)
        },
        listen(T) {
            if (y)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Gy, v),
            y = T,
            () => {
                o.removeEventListener(Gy, v),
                y = null
            }
        },
        createHref(T) {
            return i(o, T)
        },
        createURL: x,
        encodeLocation(T) {
            let _ = x(T);
            return {
                pathname: _.pathname,
                search: _.search,
                hash: _.hash
            }
        },
        push: S,
        replace: w,
        go(T) {
            return d.go(T)
        }
    };
    return C
}
function Kx(n, i=!1) {
    let s = "http://localhost";
    typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href),
    kt(s, "No window.location.(origin|href) available to create URL");
    let r = typeof n == "string" ? n : Yl(n);
    return r = r.replace(/ $/, "%20"),
    !i && r.startsWith("//") && (r = s + r),
    new URL(r,s)
}
function _0(n, i, s="/") {
    return Qx(n, i, s, !1)
}
function Qx(n, i, s, r) {
    let o = typeof i == "string" ? _i(i) : i
      , f = zn(o.pathname || "/", s);
    if (f == null)
        return null;
    let d = j0(n);
    Zx(d);
    let h = null;
    for (let y = 0; h == null && y < d.length; ++y) {
        let m = lT(f);
        h = aT(d[y], m, r)
    }
    return h
}
function j0(n, i=[], s=[], r="", o=!1) {
    let f = (d, h, y=o, m) => {
        let g = {
            relativePath: m === void 0 ? d.path || "" : m,
            caseSensitive: d.caseSensitive === !0,
            childrenIndex: h,
            route: d
        };
        if (g.relativePath.startsWith("/")) {
            if (!g.relativePath.startsWith(r) && y)
                return;
            kt(g.relativePath.startsWith(r), `Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            g.relativePath = g.relativePath.slice(r.length)
        }
        let v = dn([r, g.relativePath])
          , S = s.concat(g);
        d.children && d.children.length > 0 && (kt(d.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`),
        j0(d.children, i, S, v, y)),
        !(d.path == null && !d.index) && i.push({
            path: v,
            score: eT(v, d.index),
            routesMeta: S
        })
    }
    ;
    return n.forEach( (d, h) => {
        if (d.path === "" || !d.path?.includes("?"))
            f(d, h);
        else
            for (let y of z0(d.path))
                f(d, h, !0, y)
    }
    ),
    i
}
function z0(n) {
    let i = n.split("/");
    if (i.length === 0)
        return [];
    let[s,...r] = i
      , o = s.endsWith("?")
      , f = s.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [f, ""] : [f];
    let d = z0(r.join("/"))
      , h = [];
    return h.push(...d.map(y => y === "" ? f : [f, y].join("/"))),
    o && h.push(...d),
    h.map(y => n.startsWith("/") && y === "" ? "/" : y)
}
function Zx(n) {
    n.sort( (i, s) => i.score !== s.score ? s.score - i.score : nT(i.routesMeta.map(r => r.childrenIndex), s.routesMeta.map(r => r.childrenIndex)))
}
var Fx = /^:[\w-]+$/
  , Jx = 3
  , $x = 2
  , Wx = 1
  , Ix = 10
  , tT = -2
  , Py = n => n === "*";
function eT(n, i) {
    let s = n.split("/")
      , r = s.length;
    return s.some(Py) && (r += tT),
    i && (r += $x),
    s.filter(o => !Py(o)).reduce( (o, f) => o + (Fx.test(f) ? Jx : f === "" ? Wx : Ix), r)
}
function nT(n, i) {
    return n.length === i.length && n.slice(0, -1).every( (r, o) => r === i[o]) ? n[n.length - 1] - i[i.length - 1] : 0
}
function aT(n, i, s=!1) {
    let {routesMeta: r} = n
      , o = {}
      , f = "/"
      , d = [];
    for (let h = 0; h < r.length; ++h) {
        let y = r[h]
          , m = h === r.length - 1
          , g = f === "/" ? i : i.slice(f.length) || "/"
          , v = Xr({
            path: y.relativePath,
            caseSensitive: y.caseSensitive,
            end: m
        }, g)
          , S = y.route;
        if (!v && m && s && !r[r.length - 1].route.index && (v = Xr({
            path: y.relativePath,
            caseSensitive: y.caseSensitive,
            end: !1
        }, g)),
        !v)
            return null;
        Object.assign(o, v.params),
        d.push({
            params: o,
            pathname: dn([f, v.pathname]),
            pathnameBase: uT(dn([f, v.pathnameBase])),
            route: S
        }),
        v.pathnameBase !== "/" && (f = dn([f, v.pathnameBase]))
    }
    return d
}
function Xr(n, i) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let[s,r] = iT(n.path, n.caseSensitive, n.end)
      , o = i.match(s);
    if (!o)
        return null;
    let f = o[0]
      , d = f.replace(/(.)\/+$/, "$1")
      , h = o.slice(1);
    return {
        params: r.reduce( (m, {paramName: g, isOptional: v}, S) => {
            if (g === "*") {
                let x = h[S] || "";
                d = f.slice(0, f.length - x.length).replace(/(.)\/+$/, "$1")
            }
            const w = h[S];
            return v && !w ? m[g] = void 0 : m[g] = (w || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: f,
        pathnameBase: d,
        pattern: n
    }
}
function iT(n, i=!1, s=!0) {
    nn(n === "*" || !n.endsWith("*") || n.endsWith("/*"), `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`);
    let r = []
      , o = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, h, y, m, g) => {
        if (r.push({
            paramName: h,
            isOptional: y != null
        }),
        y) {
            let v = g.charAt(m + d.length);
            return v && v !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?"
        }
        return "/([^\\/]+)"
    }
    ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return n.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? o += "\\/*$" : n !== "" && n !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,i ? void 0 : "i"), r]
}
function lT(n) {
    try {
        return n.split("/").map(i => decodeURIComponent(i).replace(/\//g, "%2F")).join("/")
    } catch (i) {
        return nn(!1, `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),
        n
    }
}
function zn(n, i) {
    if (i === "/")
        return n;
    if (!n.toLowerCase().startsWith(i.toLowerCase()))
        return null;
    let s = i.endsWith("/") ? i.length - 1 : i.length
      , r = n.charAt(s);
    return r && r !== "/" ? null : n.slice(s) || "/"
}
var sT = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function rT(n, i="/") {
    let {pathname: s, search: r="", hash: o=""} = typeof n == "string" ? _i(n) : n, f;
    return s ? (s = s.replace(/\/\/+/g, "/"),
    s.startsWith("/") ? f = Ky(s.substring(1), "/") : f = Ky(s, i)) : f = i,
    {
        pathname: f,
        search: cT(r),
        hash: fT(o)
    }
}
function Ky(n, i) {
    let s = i.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(o => {
        o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o)
    }
    ),
    s.length > 1 ? s.join("/") : "/"
}
function Hc(n, i, s, r) {
    return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function oT(n) {
    return n.filter( (i, s) => s === 0 || i.route.path && i.route.path.length > 0)
}
function Gf(n) {
    let i = oT(n);
    return i.map( (s, r) => r === i.length - 1 ? s.pathname : s.pathnameBase)
}
function eo(n, i, s, r=!1) {
    let o;
    typeof n == "string" ? o = _i(n) : (o = {
        ...n
    },
    kt(!o.pathname || !o.pathname.includes("?"), Hc("?", "pathname", "search", o)),
    kt(!o.pathname || !o.pathname.includes("#"), Hc("#", "pathname", "hash", o)),
    kt(!o.search || !o.search.includes("#"), Hc("#", "search", "hash", o)));
    let f = n === "" || o.pathname === "", d = f ? "/" : o.pathname, h;
    if (d == null)
        h = s;
    else {
        let v = i.length - 1;
        if (!r && d.startsWith("..")) {
            let S = d.split("/");
            for (; S[0] === ".."; )
                S.shift(),
                v -= 1;
            o.pathname = S.join("/")
        }
        h = v >= 0 ? i[v] : "/"
    }
    let y = rT(o, h)
      , m = d && d !== "/" && d.endsWith("/")
      , g = (f || d === ".") && s.endsWith("/");
    return !y.pathname.endsWith("/") && (m || g) && (y.pathname += "/"),
    y
}
var dn = n => n.join("/").replace(/\/\/+/g, "/")
  , uT = n => n.replace(/\/+$/, "").replace(/^\/*/, "/")
  , cT = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n
  , fT = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n
  , dT = class {
    constructor(n, i, s, r=!1) {
        this.status = n,
        this.statusText = i || "",
        this.internal = r,
        s instanceof Error ? (this.data = s.toString(),
        this.error = s) : this.data = s
    }
}
;
function hT(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data"in n
}
function mT(n) {
    return n.map(i => i.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var L0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function V0(n, i) {
    let s = n;
    if (typeof s != "string" || !sT.test(s))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: s
        };
    let r = s
      , o = !1;
    if (L0)
        try {
            let f = new URL(window.location.href)
              , d = s.startsWith("//") ? new URL(f.protocol + s) : new URL(s)
              , h = zn(d.pathname, i);
            d.origin === f.origin && h != null ? s = h + d.search + d.hash : o = !0
        } catch {
            nn(!1, `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: r,
        isExternal: o,
        to: s
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var U0 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(U0);
var pT = ["GET", ...U0];
new Set(pT);
var ji = A.createContext(null);
ji.displayName = "DataRouter";
var no = A.createContext(null);
no.displayName = "DataRouterState";
var B0 = A.createContext(!1);
function yT() {
    return A.useContext(B0)
}
var H0 = A.createContext({
    isTransitioning: !1
});
H0.displayName = "ViewTransition";
var gT = A.createContext(new Map);
gT.displayName = "Fetchers";
var vT = A.createContext(null);
vT.displayName = "Await";
var Ve = A.createContext(null);
Ve.displayName = "Navigation";
var Zl = A.createContext(null);
Zl.displayName = "Location";
var pn = A.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
pn.displayName = "Route";
var Yf = A.createContext(null);
Yf.displayName = "RouteError";
var k0 = "REACT_ROUTER_ERROR"
  , bT = "REDIRECT"
  , ST = "ROUTE_ERROR_RESPONSE";
function xT(n) {
    if (n.startsWith(`${k0}:${bT}:{`))
        try {
            let i = JSON.parse(n.slice(28));
            if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.location == "string" && typeof i.reloadDocument == "boolean" && typeof i.replace == "boolean")
                return i
        } catch {}
}
function TT(n) {
    if (n.startsWith(`${k0}:${ST}:{`))
        try {
            let i = JSON.parse(n.slice(40));
            if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string")
                return new dT(i.status,i.statusText,i.data)
        } catch {}
}
function ET(n, {relative: i}={}) {
    kt(zi(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: s, navigator: r} = A.useContext(Ve)
      , {hash: o, pathname: f, search: d} = Fl(n, {
        relative: i
    })
      , h = f;
    return s !== "/" && (h = f === "/" ? s : dn([s, f])),
    r.createHref({
        pathname: h,
        search: d,
        hash: o
    })
}
function zi() {
    return A.useContext(Zl) != null
}
function an() {
    return kt(zi(), "useLocation() may be used only in the context of a <Router> component."),
    A.useContext(Zl).location
}
var q0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function G0(n) {
    A.useContext(Ve).static || A.useLayoutEffect(n)
}
function Li() {
    let {isDataRoute: n} = A.useContext(pn);
    return n ? VT() : AT()
}
function AT() {
    kt(zi(), "useNavigate() may be used only in the context of a <Router> component.");
    let n = A.useContext(ji)
      , {basename: i, navigator: s} = A.useContext(Ve)
      , {matches: r} = A.useContext(pn)
      , {pathname: o} = an()
      , f = JSON.stringify(Gf(r))
      , d = A.useRef(!1);
    return G0( () => {
        d.current = !0
    }
    ),
    A.useCallback( (y, m={}) => {
        if (nn(d.current, q0),
        !d.current)
            return;
        if (typeof y == "number") {
            s.go(y);
            return
        }
        let g = eo(y, JSON.parse(f), o, m.relative === "path");
        n == null && i !== "/" && (g.pathname = g.pathname === "/" ? i : dn([i, g.pathname])),
        (m.replace ? s.replace : s.push)(g, m.state, m)
    }
    , [i, s, f, o, n])
}
A.createContext(null);
function Fl(n, {relative: i}={}) {
    let {matches: s} = A.useContext(pn)
      , {pathname: r} = an()
      , o = JSON.stringify(Gf(s));
    return A.useMemo( () => eo(n, JSON.parse(o), r, i === "path"), [n, o, r, i])
}
function wT(n, i) {
    return Y0(n, i)
}
function Y0(n, i, s) {
    kt(zi(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: r} = A.useContext(Ve)
      , {matches: o} = A.useContext(pn)
      , f = o[o.length - 1]
      , d = f ? f.params : {}
      , h = f ? f.pathname : "/"
      , y = f ? f.pathnameBase : "/"
      , m = f && f.route;
    {
        let T = m && m.path || "";
        P0(h, !m || T.endsWith("*") || T.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T === "/" ? "*" : `${T}/*`}">.`)
    }
    let g = an(), v;
    if (i) {
        let T = typeof i == "string" ? _i(i) : i;
        kt(y === "/" || T.pathname?.startsWith(y), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${T.pathname}" was given in the \`location\` prop.`),
        v = T
    } else
        v = g;
    let S = v.pathname || "/"
      , w = S;
    if (y !== "/") {
        let T = y.replace(/^\//, "").split("/");
        w = "/" + S.replace(/^\//, "").split("/").slice(T.length).join("/")
    }
    let x = _0(n, {
        pathname: w
    });
    nn(m || x != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `),
    nn(x == null || x[x.length - 1].route.element !== void 0 || x[x.length - 1].route.Component !== void 0 || x[x.length - 1].route.lazy !== void 0, `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let C = OT(x && x.map(T => Object.assign({}, T, {
        params: Object.assign({}, d, T.params),
        pathname: dn([y, r.encodeLocation ? r.encodeLocation(T.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : T.pathname]),
        pathnameBase: T.pathnameBase === "/" ? y : dn([y, r.encodeLocation ? r.encodeLocation(T.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : T.pathnameBase])
    })), o, s);
    return i && C ? A.createElement(Zl.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                unstable_mask: void 0,
                ...v
            },
            navigationType: "POP"
        }
    }, C) : C
}
function RT() {
    let n = LT()
      , i = hT(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n)
      , s = n instanceof Error ? n.stack : null
      , r = "rgba(200,200,200, 0.5)"
      , o = {
        padding: "0.5rem",
        backgroundColor: r
    }
      , f = {
        padding: "2px 4px",
        backgroundColor: r
    }
      , d = null;
    return console.error("Error handled by React Router default ErrorBoundary:", n),
    d = A.createElement(A.Fragment, null, A.createElement("p", null, "💿 Hey developer 👋"), A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", A.createElement("code", {
        style: f
    }, "ErrorBoundary"), " or", " ", A.createElement("code", {
        style: f
    }, "errorElement"), " prop on your route.")),
    A.createElement(A.Fragment, null, A.createElement("h2", null, "Unexpected Application Error!"), A.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, i), s ? A.createElement("pre", {
        style: o
    }, s) : null, d)
}
var CT = A.createElement(RT, null)
  , X0 = class extends A.Component {
    constructor(n) {
        super(n),
        this.state = {
            location: n.location,
            revalidation: n.revalidation,
            error: n.error
        }
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    static getDerivedStateFromProps(n, i) {
        return i.location !== n.location || i.revalidation !== "idle" && n.revalidation === "idle" ? {
            error: n.error,
            location: n.location,
            revalidation: n.revalidation
        } : {
            error: n.error !== void 0 ? n.error : i.error,
            location: i.location,
            revalidation: n.revalidation || i.revalidation
        }
    }
    componentDidCatch(n, i) {
        this.props.onError ? this.props.onError(n, i) : console.error("React Router caught the following error during render", n)
    }
    render() {
        let n = this.state.error;
        if (this.context && typeof n == "object" && n && "digest"in n && typeof n.digest == "string") {
            const s = TT(n.digest);
            s && (n = s)
        }
        let i = n !== void 0 ? A.createElement(pn.Provider, {
            value: this.props.routeContext
        }, A.createElement(Yf.Provider, {
            value: n,
            children: this.props.component
        })) : this.props.children;
        return this.context ? A.createElement(MT, {
            error: n
        }, i) : i
    }
}
;
X0.contextType = B0;
var kc = new WeakMap;
function MT({children: n, error: i}) {
    let {basename: s} = A.useContext(Ve);
    if (typeof i == "object" && i && "digest"in i && typeof i.digest == "string") {
        let r = xT(i.digest);
        if (r) {
            let o = kc.get(i);
            if (o)
                throw o;
            let f = V0(r.location, s);
            if (L0 && !kc.get(i))
                if (f.isExternal || r.reloadDocument)
                    window.location.href = f.absoluteURL || f.to;
                else {
                    const d = Promise.resolve().then( () => window.__reactRouterDataRouter.navigate(f.to, {
                        replace: r.replace
                    }));
                    throw kc.set(i, d),
                    d
                }
            return A.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${f.absoluteURL || f.to}`
            })
        }
    }
    return n
}
function DT({routeContext: n, match: i, children: s}) {
    let r = A.useContext(ji);
    return r && r.static && r.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = i.route.id),
    A.createElement(pn.Provider, {
        value: n
    }, s)
}
function OT(n, i=[], s) {
    let r = s?.state;
    if (n == null) {
        if (!r)
            return null;
        if (r.errors)
            n = r.matches;
        else if (i.length === 0 && !r.initialized && r.matches.length > 0)
            n = r.matches;
        else
            return null
    }
    let o = n
      , f = r?.errors;
    if (f != null) {
        let g = o.findIndex(v => v.route.id && f?.[v.route.id] !== void 0);
        kt(g >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),
        o = o.slice(0, Math.min(o.length, g + 1))
    }
    let d = !1
      , h = -1;
    if (s && r) {
        d = r.renderFallback;
        for (let g = 0; g < o.length; g++) {
            let v = o[g];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (h = g),
            v.route.id) {
                let {loaderData: S, errors: w} = r
                  , x = v.route.loader && !S.hasOwnProperty(v.route.id) && (!w || w[v.route.id] === void 0);
                if (v.route.lazy || x) {
                    s.isStatic && (d = !0),
                    h >= 0 ? o = o.slice(0, h + 1) : o = [o[0]];
                    break
                }
            }
        }
    }
    let y = s?.onError
      , m = r && y ? (g, v) => {
        y(g, {
            location: r.location,
            params: r.matches?.[0]?.params ?? {},
            unstable_pattern: mT(r.matches),
            errorInfo: v
        })
    }
    : void 0;
    return o.reduceRight( (g, v, S) => {
        let w, x = !1, C = null, T = null;
        r && (w = f && v.route.id ? f[v.route.id] : void 0,
        C = v.route.errorElement || CT,
        d && (h < 0 && S === 0 ? (P0("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        x = !0,
        T = null) : h === S && (x = !0,
        T = v.route.hydrateFallbackElement || null)));
        let _ = i.concat(o.slice(0, S + 1))
          , k = () => {
            let U;
            return w ? U = C : x ? U = T : v.route.Component ? U = A.createElement(v.route.Component, null) : v.route.element ? U = v.route.element : U = g,
            A.createElement(DT, {
                match: v,
                routeContext: {
                    outlet: g,
                    matches: _,
                    isDataRoute: r != null
                },
                children: U
            })
        }
        ;
        return r && (v.route.ErrorBoundary || v.route.errorElement || S === 0) ? A.createElement(X0, {
            location: r.location,
            revalidation: r.revalidation,
            component: C,
            error: w,
            children: k(),
            routeContext: {
                outlet: null,
                matches: _,
                isDataRoute: !0
            },
            onError: m
        }) : k()
    }
    , null)
}
function Xf(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function NT(n) {
    let i = A.useContext(ji);
    return kt(i, Xf(n)),
    i
}
function _T(n) {
    let i = A.useContext(no);
    return kt(i, Xf(n)),
    i
}
function jT(n) {
    let i = A.useContext(pn);
    return kt(i, Xf(n)),
    i
}
function Pf(n) {
    let i = jT(n)
      , s = i.matches[i.matches.length - 1];
    return kt(s.route.id, `${n} can only be used on routes that contain a unique "id"`),
    s.route.id
}
function zT() {
    return Pf("useRouteId")
}
function LT() {
    let n = A.useContext(Yf)
      , i = _T("useRouteError")
      , s = Pf("useRouteError");
    return n !== void 0 ? n : i.errors?.[s]
}
function VT() {
    let {router: n} = NT("useNavigate")
      , i = Pf("useNavigate")
      , s = A.useRef(!1);
    return G0( () => {
        s.current = !0
    }
    ),
    A.useCallback(async (o, f={}) => {
        nn(s.current, q0),
        s.current && (typeof o == "number" ? await n.navigate(o) : await n.navigate(o, {
            fromRouteId: i,
            ...f
        }))
    }
    , [n, i])
}
var Qy = {};
function P0(n, i, s) {
    !i && !Qy[n] && (Qy[n] = !0,
    nn(!1, s))
}
A.memo(UT);
function UT({routes: n, future: i, state: s, isStatic: r, onError: o}) {
    return Y0(n, void 0, {
        state: s,
        isStatic: r,
        onError: o
    })
}
function ff({to: n, replace: i, state: s, relative: r}) {
    kt(zi(), "<Navigate> may be used only in the context of a <Router> component.");
    let {static: o} = A.useContext(Ve);
    nn(!o, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let {matches: f} = A.useContext(pn)
      , {pathname: d} = an()
      , h = Li()
      , y = eo(n, Gf(f), d, r === "path")
      , m = JSON.stringify(y);
    return A.useEffect( () => {
        h(JSON.parse(m), {
            replace: i,
            state: s,
            relative: r
        })
    }
    , [h, m, r, i, s]),
    null
}
function Na(n) {
    kt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function BT({basename: n="/", children: i=null, location: s, navigationType: r="POP", navigator: o, static: f=!1, unstable_useTransitions: d}) {
    kt(!zi(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let h = n.replace(/^\/*/, "/")
      , y = A.useMemo( () => ({
        basename: h,
        navigator: o,
        static: f,
        unstable_useTransitions: d,
        future: {}
    }), [h, o, f, d]);
    typeof s == "string" && (s = _i(s));
    let {pathname: m="/", search: g="", hash: v="", state: S=null, key: w="default", unstable_mask: x} = s
      , C = A.useMemo( () => {
        let T = zn(m, h);
        return T == null ? null : {
            location: {
                pathname: T,
                search: g,
                hash: v,
                state: S,
                key: w,
                unstable_mask: x
            },
            navigationType: r
        }
    }
    , [h, m, g, v, S, w, r, x]);
    return nn(C != null, `<Router basename="${h}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),
    C == null ? null : A.createElement(Ve.Provider, {
        value: y
    }, A.createElement(Zl.Provider, {
        children: i,
        value: C
    }))
}
function HT({children: n, location: i}) {
    return wT(df(n), i)
}
function df(n, i=[]) {
    let s = [];
    return A.Children.forEach(n, (r, o) => {
        if (!A.isValidElement(r))
            return;
        let f = [...i, o];
        if (r.type === A.Fragment) {
            s.push.apply(s, df(r.props.children, f));
            return
        }
        kt(r.type === Na, `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        kt(!r.props.index || !r.props.children, "An index route cannot have child routes.");
        let d = {
            id: r.props.id || f.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            middleware: r.props.middleware,
            loader: r.props.loader,
            action: r.props.action,
            hydrateFallbackElement: r.props.hydrateFallbackElement,
            HydrateFallback: r.props.HydrateFallback,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (d.children = df(r.props.children, f)),
        s.push(d)
    }
    ),
    s
}
var Or = "get"
  , Nr = "application/x-www-form-urlencoded";
function ao(n) {
    return typeof HTMLElement < "u" && n instanceof HTMLElement
}
function kT(n) {
    return ao(n) && n.tagName.toLowerCase() === "button"
}
function qT(n) {
    return ao(n) && n.tagName.toLowerCase() === "form"
}
function GT(n) {
    return ao(n) && n.tagName.toLowerCase() === "input"
}
function YT(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
function XT(n, i) {
    return n.button === 0 && (!i || i === "_self") && !YT(n)
}
var Er = null;
function PT() {
    if (Er === null)
        try {
            new FormData(document.createElement("form"),0),
            Er = !1
        } catch {
            Er = !0
        }
    return Er
}
var KT = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function qc(n) {
    return n != null && !KT.has(n) ? (nn(!1, `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nr}"`),
    null) : n
}
function QT(n, i) {
    let s, r, o, f, d;
    if (qT(n)) {
        let h = n.getAttribute("action");
        r = h ? zn(h, i) : null,
        s = n.getAttribute("method") || Or,
        o = qc(n.getAttribute("enctype")) || Nr,
        f = new FormData(n)
    } else if (kT(n) || GT(n) && (n.type === "submit" || n.type === "image")) {
        let h = n.form;
        if (h == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let y = n.getAttribute("formaction") || h.getAttribute("action");
        if (r = y ? zn(y, i) : null,
        s = n.getAttribute("formmethod") || h.getAttribute("method") || Or,
        o = qc(n.getAttribute("formenctype")) || qc(h.getAttribute("enctype")) || Nr,
        f = new FormData(h,n),
        !PT()) {
            let {name: m, type: g, value: v} = n;
            if (g === "image") {
                let S = m ? `${m}.` : "";
                f.append(`${S}x`, "0"),
                f.append(`${S}y`, "0")
            } else
                m && f.append(m, v)
        }
    } else {
        if (ao(n))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        s = Or,
        r = null,
        o = Nr,
        d = n
    }
    return f && o === "text/plain" && (d = f,
    f = void 0),
    {
        action: r,
        method: s.toLowerCase(),
        encType: o,
        formData: f,
        body: d
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Kf(n, i) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(i)
}
function K0(n, i, s, r) {
    let o = typeof n == "string" ? new URL(n,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : n;
    return s ? o.pathname.endsWith("/") ? o.pathname = `${o.pathname}_.${r}` : o.pathname = `${o.pathname}.${r}` : o.pathname === "/" ? o.pathname = `_root.${r}` : i && zn(o.pathname, i) === "/" ? o.pathname = `${i.replace(/\/$/, "")}/_root.${r}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${r}`,
    o
}
async function ZT(n, i) {
    if (n.id in i)
        return i[n.id];
    try {
        let s = await import(n.module);
        return i[n.id] = s,
        s
    } catch (s) {
        return console.error(`Error loading route module \`${n.module}\`, reloading page...`),
        console.error(s),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function FT(n) {
    return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string"
}
async function JT(n, i, s) {
    let r = await Promise.all(n.map(async o => {
        let f = i.routes[o.route.id];
        if (f) {
            let d = await ZT(f, s);
            return d.links ? d.links() : []
        }
        return []
    }
    ));
    return t2(r.flat(1).filter(FT).filter(o => o.rel === "stylesheet" || o.rel === "preload").map(o => o.rel === "stylesheet" ? {
        ...o,
        rel: "prefetch",
        as: "style"
    } : {
        ...o,
        rel: "prefetch"
    }))
}
function Zy(n, i, s, r, o, f) {
    let d = (y, m) => s[m] ? y.route.id !== s[m].route.id : !0
      , h = (y, m) => s[m].pathname !== y.pathname || s[m].route.path?.endsWith("*") && s[m].params["*"] !== y.params["*"];
    return f === "assets" ? i.filter( (y, m) => d(y, m) || h(y, m)) : f === "data" ? i.filter( (y, m) => {
        let g = r.routes[y.route.id];
        if (!g || !g.hasLoader)
            return !1;
        if (d(y, m) || h(y, m))
            return !0;
        if (y.route.shouldRevalidate) {
            let v = y.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash,window.origin),
                currentParams: s[0]?.params || {},
                nextUrl: new URL(n,window.origin),
                nextParams: y.params,
                defaultShouldRevalidate: !0
            });
            if (typeof v == "boolean")
                return v
        }
        return !0
    }
    ) : []
}
function $T(n, i, {includeHydrateFallback: s}={}) {
    return WT(n.map(r => {
        let o = i.routes[r.route.id];
        if (!o)
            return [];
        let f = [o.module];
        return o.clientActionModule && (f = f.concat(o.clientActionModule)),
        o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)),
        s && o.hydrateFallbackModule && (f = f.concat(o.hydrateFallbackModule)),
        o.imports && (f = f.concat(o.imports)),
        f
    }
    ).flat(1))
}
function WT(n) {
    return [...new Set(n)]
}
function IT(n) {
    let i = {}
      , s = Object.keys(n).sort();
    for (let r of s)
        i[r] = n[r];
    return i
}
function t2(n, i) {
    let s = new Set;
    return new Set(i),
    n.reduce( (r, o) => {
        let f = JSON.stringify(IT(o));
        return s.has(f) || (s.add(f),
        r.push({
            key: f,
            link: o
        })),
        r
    }
    , [])
}
function Qf() {
    let n = A.useContext(ji);
    return Kf(n, "You must render this element inside a <DataRouterContext.Provider> element"),
    n
}
function e2() {
    let n = A.useContext(no);
    return Kf(n, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    n
}
var Zf = A.createContext(void 0);
Zf.displayName = "FrameworkContext";
function Ff() {
    let n = A.useContext(Zf);
    return Kf(n, "You must render this element inside a <HydratedRouter> element"),
    n
}
function n2(n, i) {
    let s = A.useContext(Zf)
      , [r,o] = A.useState(!1)
      , [f,d] = A.useState(!1)
      , {onFocus: h, onBlur: y, onMouseEnter: m, onMouseLeave: g, onTouchStart: v} = i
      , S = A.useRef(null);
    A.useEffect( () => {
        if (n === "render" && d(!0),
        n === "viewport") {
            let C = _ => {
                _.forEach(k => {
                    d(k.isIntersecting)
                }
                )
            }
              , T = new IntersectionObserver(C,{
                threshold: .5
            });
            return S.current && T.observe(S.current),
            () => {
                T.disconnect()
            }
        }
    }
    , [n]),
    A.useEffect( () => {
        if (r) {
            let C = setTimeout( () => {
                d(!0)
            }
            , 100);
            return () => {
                clearTimeout(C)
            }
        }
    }
    , [r]);
    let w = () => {
        o(!0)
    }
      , x = () => {
        o(!1),
        d(!1)
    }
    ;
    return s ? n !== "intent" ? [f, S, {}] : [f, S, {
        onFocus: Ll(h, w),
        onBlur: Ll(y, x),
        onMouseEnter: Ll(m, w),
        onMouseLeave: Ll(g, x),
        onTouchStart: Ll(v, w)
    }] : [!1, S, {}]
}
function Ll(n, i) {
    return s => {
        n && n(s),
        s.defaultPrevented || i(s)
    }
}
function a2({page: n, ...i}) {
    let s = yT()
      , {router: r} = Qf()
      , o = A.useMemo( () => _0(r.routes, n, r.basename), [r.routes, n, r.basename]);
    return o ? s ? A.createElement(l2, {
        page: n,
        matches: o,
        ...i
    }) : A.createElement(s2, {
        page: n,
        matches: o,
        ...i
    }) : null
}
function i2(n) {
    let {manifest: i, routeModules: s} = Ff()
      , [r,o] = A.useState([]);
    return A.useEffect( () => {
        let f = !1;
        return JT(n, i, s).then(d => {
            f || o(d)
        }
        ),
        () => {
            f = !0
        }
    }
    , [n, i, s]),
    r
}
function l2({page: n, matches: i, ...s}) {
    let r = an()
      , {future: o} = Ff()
      , {basename: f} = Qf()
      , d = A.useMemo( () => {
        if (n === r.pathname + r.search + r.hash)
            return [];
        let h = K0(n, f, o.unstable_trailingSlashAwareDataRequests, "rsc")
          , y = !1
          , m = [];
        for (let g of i)
            typeof g.route.shouldRevalidate == "function" ? y = !0 : m.push(g.route.id);
        return y && m.length > 0 && h.searchParams.set("_routes", m.join(",")),
        [h.pathname + h.search]
    }
    , [f, o.unstable_trailingSlashAwareDataRequests, n, r, i]);
    return A.createElement(A.Fragment, null, d.map(h => A.createElement("link", {
        key: h,
        rel: "prefetch",
        as: "fetch",
        href: h,
        ...s
    })))
}
function s2({page: n, matches: i, ...s}) {
    let r = an()
      , {future: o, manifest: f, routeModules: d} = Ff()
      , {basename: h} = Qf()
      , {loaderData: y, matches: m} = e2()
      , g = A.useMemo( () => Zy(n, i, m, f, r, "data"), [n, i, m, f, r])
      , v = A.useMemo( () => Zy(n, i, m, f, r, "assets"), [n, i, m, f, r])
      , S = A.useMemo( () => {
        if (n === r.pathname + r.search + r.hash)
            return [];
        let C = new Set
          , T = !1;
        if (i.forEach(k => {
            let U = f.routes[k.route.id];
            !U || !U.hasLoader || (!g.some(X => X.route.id === k.route.id) && k.route.id in y && d[k.route.id]?.shouldRevalidate || U.hasClientLoader ? T = !0 : C.add(k.route.id))
        }
        ),
        C.size === 0)
            return [];
        let _ = K0(n, h, o.unstable_trailingSlashAwareDataRequests, "data");
        return T && C.size > 0 && _.searchParams.set("_routes", i.filter(k => C.has(k.route.id)).map(k => k.route.id).join(",")),
        [_.pathname + _.search]
    }
    , [h, o.unstable_trailingSlashAwareDataRequests, y, r, f, g, i, n, d])
      , w = A.useMemo( () => $T(v, f), [v, f])
      , x = i2(v);
    return A.createElement(A.Fragment, null, S.map(C => A.createElement("link", {
        key: C,
        rel: "prefetch",
        as: "fetch",
        href: C,
        ...s
    })), w.map(C => A.createElement("link", {
        key: C,
        rel: "modulepreload",
        href: C,
        ...s
    })), x.map( ({key: C, link: T}) => A.createElement("link", {
        key: C,
        nonce: s.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? s.crossOrigin
    })))
}
function r2(...n) {
    return i => {
        n.forEach(s => {
            typeof s == "function" ? s(i) : s != null && (s.current = i)
        }
        )
    }
}
var o2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    o2 && (window.__reactRouterVersion = "7.14.0")
} catch {}
function u2({basename: n, children: i, unstable_useTransitions: s, window: r}) {
    let o = A.useRef();
    o.current == null && (o.current = Yx({
        window: r,
        v5Compat: !0
    }));
    let f = o.current
      , [d,h] = A.useState({
        action: f.action,
        location: f.location
    })
      , y = A.useCallback(m => {
        s === !1 ? h(m) : A.startTransition( () => h(m))
    }
    , [s]);
    return A.useLayoutEffect( () => f.listen(y), [f, y]),
    A.createElement(BT, {
        basename: n,
        children: i,
        location: d.location,
        navigationType: d.action,
        navigator: f,
        unstable_useTransitions: s
    })
}
var Q0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Z0 = A.forwardRef(function({onClick: i, discover: s="render", prefetch: r="none", relative: o, reloadDocument: f, replace: d, unstable_mask: h, state: y, target: m, to: g, preventScrollReset: v, viewTransition: S, unstable_defaultShouldRevalidate: w, ...x}, C) {
    let {basename: T, navigator: _, unstable_useTransitions: k} = A.useContext(Ve)
      , U = typeof g == "string" && Q0.test(g)
      , X = V0(g, T);
    g = X.to;
    let P = ET(g, {
        relative: o
    })
      , I = an()
      , K = null;
    if (h) {
        let xt = eo(h, [], I.unstable_mask ? I.unstable_mask.pathname : "/", !0);
        T !== "/" && (xt.pathname = xt.pathname === "/" ? T : dn([T, xt.pathname])),
        K = _.createHref(xt)
    }
    let[J,at,tt] = n2(r, x)
      , dt = h2(g, {
        replace: d,
        unstable_mask: h,
        state: y,
        target: m,
        preventScrollReset: v,
        relative: o,
        viewTransition: S,
        unstable_defaultShouldRevalidate: w,
        unstable_useTransitions: k
    });
    function ht(xt) {
        i && i(xt),
        xt.defaultPrevented || dt(xt)
    }
    let zt = !(X.isExternal || f)
      , At = A.createElement("a", {
        ...x,
        ...tt,
        href: (zt ? K : void 0) || X.absoluteURL || P,
        onClick: zt ? ht : i,
        ref: r2(C, at),
        target: m,
        "data-discover": !U && s === "render" ? "true" : void 0
    });
    return J && !U ? A.createElement(A.Fragment, null, At, A.createElement(a2, {
        page: P
    })) : At
});
Z0.displayName = "Link";
var c2 = A.forwardRef(function({"aria-current": i="page", caseSensitive: s=!1, className: r="", end: o=!1, style: f, to: d, viewTransition: h, children: y, ...m}, g) {
    let v = Fl(d, {
        relative: m.relative
    })
      , S = an()
      , w = A.useContext(no)
      , {navigator: x, basename: C} = A.useContext(Ve)
      , T = w != null && v2(v) && h === !0
      , _ = x.encodeLocation ? x.encodeLocation(v).pathname : v.pathname
      , k = S.pathname
      , U = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    s || (k = k.toLowerCase(),
    U = U ? U.toLowerCase() : null,
    _ = _.toLowerCase()),
    U && C && (U = zn(U, C) || U);
    const X = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
    let P = k === _ || !o && k.startsWith(_) && k.charAt(X) === "/", I = U != null && (U === _ || !o && U.startsWith(_) && U.charAt(_.length) === "/"), K = {
        isActive: P,
        isPending: I,
        isTransitioning: T
    }, J = P ? i : void 0, at;
    typeof r == "function" ? at = r(K) : at = [r, P ? "active" : null, I ? "pending" : null, T ? "transitioning" : null].filter(Boolean).join(" ");
    let tt = typeof f == "function" ? f(K) : f;
    return A.createElement(Z0, {
        ...m,
        "aria-current": J,
        className: at,
        ref: g,
        style: tt,
        to: d,
        viewTransition: h
    }, typeof y == "function" ? y(K) : y)
});
c2.displayName = "NavLink";
var f2 = A.forwardRef( ({discover: n="render", fetcherKey: i, navigate: s, reloadDocument: r, replace: o, state: f, method: d=Or, action: h, onSubmit: y, relative: m, preventScrollReset: g, viewTransition: v, unstable_defaultShouldRevalidate: S, ...w}, x) => {
    let {unstable_useTransitions: C} = A.useContext(Ve)
      , T = y2()
      , _ = g2(h, {
        relative: m
    })
      , k = d.toLowerCase() === "get" ? "get" : "post"
      , U = typeof h == "string" && Q0.test(h)
      , X = P => {
        if (y && y(P),
        P.defaultPrevented)
            return;
        P.preventDefault();
        let I = P.nativeEvent.submitter
          , K = I?.getAttribute("formmethod") || d
          , J = () => T(I || P.currentTarget, {
            fetcherKey: i,
            method: K,
            navigate: s,
            replace: o,
            state: f,
            relative: m,
            preventScrollReset: g,
            viewTransition: v,
            unstable_defaultShouldRevalidate: S
        });
        C && s !== !1 ? A.startTransition( () => J()) : J()
    }
    ;
    return A.createElement("form", {
        ref: x,
        method: k,
        action: _,
        onSubmit: r ? y : X,
        ...w,
        "data-discover": !U && n === "render" ? "true" : void 0
    })
}
);
f2.displayName = "Form";
function d2(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function F0(n) {
    let i = A.useContext(ji);
    return kt(i, d2(n)),
    i
}
function h2(n, {target: i, replace: s, unstable_mask: r, state: o, preventScrollReset: f, relative: d, viewTransition: h, unstable_defaultShouldRevalidate: y, unstable_useTransitions: m}={}) {
    let g = Li()
      , v = an()
      , S = Fl(n, {
        relative: d
    });
    return A.useCallback(w => {
        if (XT(w, i)) {
            w.preventDefault();
            let x = s !== void 0 ? s : Yl(v) === Yl(S)
              , C = () => g(n, {
                replace: x,
                unstable_mask: r,
                state: o,
                preventScrollReset: f,
                relative: d,
                viewTransition: h,
                unstable_defaultShouldRevalidate: y
            });
            m ? A.startTransition( () => C()) : C()
        }
    }
    , [v, g, S, s, r, o, i, n, f, d, h, y, m])
}
var m2 = 0
  , p2 = () => `__${String(++m2)}__`;
function y2() {
    let {router: n} = F0("useSubmit")
      , {basename: i} = A.useContext(Ve)
      , s = zT()
      , r = n.fetch
      , o = n.navigate;
    return A.useCallback(async (f, d={}) => {
        let {action: h, method: y, encType: m, formData: g, body: v} = QT(f, i);
        if (d.navigate === !1) {
            let S = d.fetcherKey || p2();
            await r(S, s, d.action || h, {
                unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
                preventScrollReset: d.preventScrollReset,
                formData: g,
                body: v,
                formMethod: d.method || y,
                formEncType: d.encType || m,
                flushSync: d.flushSync
            })
        } else
            await o(d.action || h, {
                unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
                preventScrollReset: d.preventScrollReset,
                formData: g,
                body: v,
                formMethod: d.method || y,
                formEncType: d.encType || m,
                replace: d.replace,
                state: d.state,
                fromRouteId: s,
                flushSync: d.flushSync,
                viewTransition: d.viewTransition
            })
    }
    , [r, o, i, s])
}
function g2(n, {relative: i}={}) {
    let {basename: s} = A.useContext(Ve)
      , r = A.useContext(pn);
    kt(r, "useFormAction must be used inside a RouteContext");
    let[o] = r.matches.slice(-1)
      , f = {
        ...Fl(n || ".", {
            relative: i
        })
    }
      , d = an();
    if (n == null) {
        f.search = d.search;
        let h = new URLSearchParams(f.search)
          , y = h.getAll("index");
        if (y.some(g => g === "")) {
            h.delete("index"),
            y.filter(v => v).forEach(v => h.append("index", v));
            let g = h.toString();
            f.search = g ? `?${g}` : ""
        }
    }
    return (!n || n === ".") && o.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (f.pathname = f.pathname === "/" ? s : dn([s, f.pathname])),
    Yl(f)
}
function v2(n, {relative: i}={}) {
    let s = A.useContext(H0);
    kt(s != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: r} = F0("useViewTransitionState")
      , o = Fl(n, {
        relative: i
    });
    if (!s.isTransitioning)
        return !1;
    let f = zn(s.currentLocation.pathname, r) || s.currentLocation.pathname
      , d = zn(s.nextLocation.pathname, r) || s.nextLocation.pathname;
    return Xr(o.pathname, d) != null || Xr(o.pathname, f) != null
}
const Jf = A.createContext({});
function $f(n) {
    const i = A.useRef(null);
    return i.current === null && (i.current = n()),
    i.current
}
const b2 = typeof window < "u"
  , J0 = b2 ? A.useLayoutEffect : A.useEffect
  , io = A.createContext(null);
function Wf(n, i) {
    n.indexOf(i) === -1 && n.push(i)
}
function Pr(n, i) {
    const s = n.indexOf(i);
    s > -1 && n.splice(s, 1)
}
const mn = (n, i, s) => s > i ? i : s < n ? n : s;
let If = () => {}
;
const oa = {}
  , $0 = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function W0(n) {
    return typeof n == "object" && n !== null
}
const I0 = n => /^0[^.\s]+$/u.test(n);
function tv(n) {
    let i;
    return () => (i === void 0 && (i = n()),
    i)
}
const Fe = n => n
  , S2 = (n, i) => s => i(n(s))
  , Jl = (...n) => n.reduce(S2)
  , Xl = (n, i, s) => {
    const r = i - n;
    return r === 0 ? 1 : (s - n) / r
}
;
class td {
    constructor() {
        this.subscriptions = []
    }
    add(i) {
        return Wf(this.subscriptions, i),
        () => Pr(this.subscriptions, i)
    }
    notify(i, s, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](i, s, r);
            else
                for (let f = 0; f < o; f++) {
                    const d = this.subscriptions[f];
                    d && d(i, s, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Le = n => n * 1e3
  , Ze = n => n / 1e3;
function ev(n, i) {
    return i ? n * (1e3 / i) : 0
}
const nv = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n
  , x2 = 1e-7
  , T2 = 12;
function E2(n, i, s, r, o) {
    let f, d, h = 0;
    do
        d = i + (s - i) / 2,
        f = nv(d, r, o) - n,
        f > 0 ? s = d : i = d;
    while (Math.abs(f) > x2 && ++h < T2);
    return d
}
function $l(n, i, s, r) {
    if (n === i && s === r)
        return Fe;
    const o = f => E2(f, 0, 1, n, s);
    return f => f === 0 || f === 1 ? f : nv(o(f), i, r)
}
const av = n => i => i <= .5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2
  , iv = n => i => 1 - n(1 - i)
  , lv = $l(.33, 1.53, .69, .99)
  , ed = iv(lv)
  , sv = av(ed)
  , rv = n => n >= 1 ? 1 : (n *= 2) < 1 ? .5 * ed(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
  , nd = n => 1 - Math.sin(Math.acos(n))
  , ov = iv(nd)
  , uv = av(nd)
  , A2 = $l(.42, 0, 1, 1)
  , w2 = $l(0, 0, .58, 1)
  , cv = $l(.42, 0, .58, 1)
  , R2 = n => Array.isArray(n) && typeof n[0] != "number"
  , fv = n => Array.isArray(n) && typeof n[0] == "number"
  , C2 = {
    linear: Fe,
    easeIn: A2,
    easeInOut: cv,
    easeOut: w2,
    circIn: nd,
    circInOut: uv,
    circOut: ov,
    backIn: ed,
    backInOut: sv,
    backOut: lv,
    anticipate: rv
}
  , M2 = n => typeof n == "string"
  , Fy = n => {
    if (fv(n)) {
        If(n.length === 4);
        const [i,s,r,o] = n;
        return $l(i, s, r, o)
    } else if (M2(n))
        return C2[n];
    return n
}
  , Ar = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function D2(n, i) {
    let s = new Set
      , r = new Set
      , o = !1
      , f = !1;
    const d = new WeakSet;
    let h = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function y(g) {
        d.has(g) && (m.schedule(g),
        n()),
        g(h)
    }
    const m = {
        schedule: (g, v=!1, S=!1) => {
            const x = S && o ? s : r;
            return v && d.add(g),
            x.add(g),
            g
        }
        ,
        cancel: g => {
            r.delete(g),
            d.delete(g)
        }
        ,
        process: g => {
            if (h = g,
            o) {
                f = !0;
                return
            }
            o = !0;
            const v = s;
            s = r,
            r = v,
            s.forEach(y),
            s.clear(),
            o = !1,
            f && (f = !1,
            m.process(g))
        }
    };
    return m
}
const O2 = 40;
function dv(n, i) {
    let s = !1
      , r = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , f = () => s = !0
      , d = Ar.reduce( (U, X) => (U[X] = D2(f),
    U), {})
      , {setup: h, read: y, resolveKeyframes: m, preUpdate: g, update: v, preRender: S, render: w, postRender: x} = d
      , C = () => {
        const U = oa.useManualTiming
          , X = U ? o.timestamp : performance.now();
        s = !1,
        U || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(X - o.timestamp, O2), 1)),
        o.timestamp = X,
        o.isProcessing = !0,
        h.process(o),
        y.process(o),
        m.process(o),
        g.process(o),
        v.process(o),
        S.process(o),
        w.process(o),
        x.process(o),
        o.isProcessing = !1,
        s && i && (r = !1,
        n(C))
    }
      , T = () => {
        s = !0,
        r = !0,
        o.isProcessing || n(C)
    }
    ;
    return {
        schedule: Ar.reduce( (U, X) => {
            const P = d[X];
            return U[X] = (I, K=!1, J=!1) => (s || T(),
            P.schedule(I, K, J)),
            U
        }
        , {}),
        cancel: U => {
            for (let X = 0; X < Ar.length; X++)
                d[Ar[X]].cancel(U)
        }
        ,
        state: o,
        steps: d
    }
}
const {schedule: jt, cancel: ua, state: re, steps: Gc} = dv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Fe, !0);
let _r;
function N2() {
    _r = void 0
}
const he = {
    now: () => (_r === void 0 && he.set(re.isProcessing || oa.useManualTiming ? re.timestamp : performance.now()),
    _r),
    set: n => {
        _r = n,
        queueMicrotask(N2)
    }
}
  , hv = n => i => typeof i == "string" && i.startsWith(n)
  , mv = hv("--")
  , _2 = hv("var(--")
  , ad = n => _2(n) ? j2.test(n.split("/*")[0].trim()) : !1
  , j2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Jy(n) {
    return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--")
}
const Vi = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
  , Pl = {
    ...Vi,
    transform: n => mn(0, 1, n)
}
  , wr = {
    ...Vi,
    default: 1
}
  , Hl = n => Math.round(n * 1e5) / 1e5
  , id = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function z2(n) {
    return n == null
}
const L2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , ld = (n, i) => s => !!(typeof s == "string" && L2.test(s) && s.startsWith(n) || i && !z2(s) && Object.prototype.hasOwnProperty.call(s, i))
  , pv = (n, i, s) => r => {
    if (typeof r != "string")
        return r;
    const [o,f,d,h] = r.match(id);
    return {
        [n]: parseFloat(o),
        [i]: parseFloat(f),
        [s]: parseFloat(d),
        alpha: h !== void 0 ? parseFloat(h) : 1
    }
}
  , V2 = n => mn(0, 255, n)
  , Yc = {
    ...Vi,
    transform: n => Math.round(V2(n))
}
  , ja = {
    test: ld("rgb", "red"),
    parse: pv("red", "green", "blue"),
    transform: ({red: n, green: i, blue: s, alpha: r=1}) => "rgba(" + Yc.transform(n) + ", " + Yc.transform(i) + ", " + Yc.transform(s) + ", " + Hl(Pl.transform(r)) + ")"
};
function U2(n) {
    let i = ""
      , s = ""
      , r = ""
      , o = "";
    return n.length > 5 ? (i = n.substring(1, 3),
    s = n.substring(3, 5),
    r = n.substring(5, 7),
    o = n.substring(7, 9)) : (i = n.substring(1, 2),
    s = n.substring(2, 3),
    r = n.substring(3, 4),
    o = n.substring(4, 5),
    i += i,
    s += s,
    r += r,
    o += o),
    {
        red: parseInt(i, 16),
        green: parseInt(s, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const hf = {
    test: ld("#"),
    parse: U2,
    transform: ja.transform
}
  , Wl = n => ({
    test: i => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: i => `${i}${n}`
})
  , sa = Wl("deg")
  , hn = Wl("%")
  , et = Wl("px")
  , B2 = Wl("vh")
  , H2 = Wl("vw")
  , $y = {
    ...hn,
    parse: n => hn.parse(n) / 100,
    transform: n => hn.transform(n * 100)
}
  , wi = {
    test: ld("hsl", "hue"),
    parse: pv("hue", "saturation", "lightness"),
    transform: ({hue: n, saturation: i, lightness: s, alpha: r=1}) => "hsla(" + Math.round(n) + ", " + hn.transform(Hl(i)) + ", " + hn.transform(Hl(s)) + ", " + Hl(Pl.transform(r)) + ")"
}
  , $t = {
    test: n => ja.test(n) || hf.test(n) || wi.test(n),
    parse: n => ja.test(n) ? ja.parse(n) : wi.test(n) ? wi.parse(n) : hf.parse(n),
    transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? ja.transform(n) : wi.transform(n),
    getAnimatableNone: n => {
        const i = $t.parse(n);
        return i.alpha = 0,
        $t.transform(i)
    }
}
  , k2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function q2(n) {
    return isNaN(n) && typeof n == "string" && (n.match(id)?.length || 0) + (n.match(k2)?.length || 0) > 0
}
const yv = "number"
  , gv = "color"
  , G2 = "var"
  , Y2 = "var("
  , Wy = "${}"
  , X2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Mi(n) {
    const i = n.toString()
      , s = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let f = 0;
    const h = i.replace(X2, y => ($t.test(y) ? (r.color.push(f),
    o.push(gv),
    s.push($t.parse(y))) : y.startsWith(Y2) ? (r.var.push(f),
    o.push(G2),
    s.push(y)) : (r.number.push(f),
    o.push(yv),
    s.push(parseFloat(y))),
    ++f,
    Wy)).split(Wy);
    return {
        values: s,
        split: h,
        indexes: r,
        types: o
    }
}
function P2(n) {
    return Mi(n).values
}
function vv({split: n, types: i}) {
    const s = n.length;
    return r => {
        let o = "";
        for (let f = 0; f < s; f++)
            if (o += n[f],
            r[f] !== void 0) {
                const d = i[f];
                d === yv ? o += Hl(r[f]) : d === gv ? o += $t.transform(r[f]) : o += r[f]
            }
        return o
    }
}
function K2(n) {
    return vv(Mi(n))
}
const Q2 = n => typeof n == "number" ? 0 : $t.test(n) ? $t.getAnimatableNone(n) : n
  , Z2 = (n, i) => typeof n == "number" ? i?.trim().endsWith("/") ? n : 0 : Q2(n);
function F2(n) {
    const i = Mi(n);
    return vv(i)(i.values.map( (r, o) => Z2(r, i.split[o])))
}
const en = {
    test: q2,
    parse: P2,
    createTransformer: K2,
    getAnimatableNone: F2
};
function Xc(n, i, s) {
    return s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n
}
function J2({hue: n, saturation: i, lightness: s, alpha: r}) {
    n /= 360,
    i /= 100,
    s /= 100;
    let o = 0
      , f = 0
      , d = 0;
    if (!i)
        o = f = d = s;
    else {
        const h = s < .5 ? s * (1 + i) : s + i - s * i
          , y = 2 * s - h;
        o = Xc(y, h, n + 1 / 3),
        f = Xc(y, h, n),
        d = Xc(y, h, n - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(f * 255),
        blue: Math.round(d * 255),
        alpha: r
    }
}
function Kr(n, i) {
    return s => s > 0 ? i : n
}
const Ut = (n, i, s) => n + (i - n) * s
  , Pc = (n, i, s) => {
    const r = n * n
      , o = s * (i * i - r) + r;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , $2 = [hf, ja, wi]
  , W2 = n => $2.find(i => i.test(n));
function Iy(n) {
    const i = W2(n);
    if (!i)
        return !1;
    let s = i.parse(n);
    return i === wi && (s = J2(s)),
    s
}
const tg = (n, i) => {
    const s = Iy(n)
      , r = Iy(i);
    if (!s || !r)
        return Kr(n, i);
    const o = {
        ...s
    };
    return f => (o.red = Pc(s.red, r.red, f),
    o.green = Pc(s.green, r.green, f),
    o.blue = Pc(s.blue, r.blue, f),
    o.alpha = Ut(s.alpha, r.alpha, f),
    ja.transform(o))
}
  , mf = new Set(["none", "hidden"]);
function I2(n, i) {
    return mf.has(n) ? s => s <= 0 ? n : i : s => s >= 1 ? i : n
}
function tE(n, i) {
    return s => Ut(n, i, s)
}
function sd(n) {
    return typeof n == "number" ? tE : typeof n == "string" ? ad(n) ? Kr : $t.test(n) ? tg : aE : Array.isArray(n) ? bv : typeof n == "object" ? $t.test(n) ? tg : eE : Kr
}
function bv(n, i) {
    const s = [...n]
      , r = s.length
      , o = n.map( (f, d) => sd(f)(f, i[d]));
    return f => {
        for (let d = 0; d < r; d++)
            s[d] = o[d](f);
        return s
    }
}
function eE(n, i) {
    const s = {
        ...n,
        ...i
    }
      , r = {};
    for (const o in s)
        n[o] !== void 0 && i[o] !== void 0 && (r[o] = sd(n[o])(n[o], i[o]));
    return o => {
        for (const f in r)
            s[f] = r[f](o);
        return s
    }
}
function nE(n, i) {
    const s = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < i.values.length; o++) {
        const f = i.types[o]
          , d = n.indexes[f][r[f]]
          , h = n.values[d] ?? 0;
        s[o] = h,
        r[f]++
    }
    return s
}
const aE = (n, i) => {
    const s = en.createTransformer(i)
      , r = Mi(n)
      , o = Mi(i);
    return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? mf.has(n) && !o.values.length || mf.has(i) && !r.values.length ? I2(n, i) : Jl(bv(nE(r, o), o.values), s) : Kr(n, i)
}
;
function Sv(n, i, s) {
    return typeof n == "number" && typeof i == "number" && typeof s == "number" ? Ut(n, i, s) : sd(n)(n, i)
}
const iE = n => {
    const i = ({timestamp: s}) => n(s);
    return {
        start: (s=!0) => jt.update(i, s),
        stop: () => ua(i),
        now: () => re.isProcessing ? re.timestamp : he.now()
    }
}
  , xv = (n, i, s=10) => {
    let r = "";
    const o = Math.max(Math.round(i / s), 2);
    for (let f = 0; f < o; f++)
        r += Math.round(n(f / (o - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , Qr = 2e4;
function rd(n) {
    let i = 0;
    const s = 50;
    let r = n.next(i);
    for (; !r.done && i < Qr; )
        i += s,
        r = n.next(i);
    return i >= Qr ? 1 / 0 : i
}
function lE(n, i=100, s) {
    const r = s({
        ...n,
        keyframes: [0, i]
    })
      , o = Math.min(rd(r), Qr);
    return {
        type: "keyframes",
        ease: f => r.next(o * f).value / i,
        duration: Ze(o)
    }
}
const Yt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};
function pf(n, i) {
    return n * Math.sqrt(1 - i * i)
}
const sE = 12;
function rE(n, i, s) {
    let r = s;
    for (let o = 1; o < sE; o++)
        r = r - n(r) / i(r);
    return r
}
const Kc = .001;
function oE({duration: n=Yt.duration, bounce: i=Yt.bounce, velocity: s=Yt.velocity, mass: r=Yt.mass}) {
    let o, f, d = 1 - i;
    d = mn(Yt.minDamping, Yt.maxDamping, d),
    n = mn(Yt.minDuration, Yt.maxDuration, Ze(n)),
    d < 1 ? (o = m => {
        const g = m * d
          , v = g * n
          , S = g - s
          , w = pf(m, d)
          , x = Math.exp(-v);
        return Kc - S / w * x
    }
    ,
    f = m => {
        const v = m * d * n
          , S = v * s + s
          , w = Math.pow(d, 2) * Math.pow(m, 2) * n
          , x = Math.exp(-v)
          , C = pf(Math.pow(m, 2), d);
        return (-o(m) + Kc > 0 ? -1 : 1) * ((S - w) * x) / C
    }
    ) : (o = m => {
        const g = Math.exp(-m * n)
          , v = (m - s) * n + 1;
        return -Kc + g * v
    }
    ,
    f = m => {
        const g = Math.exp(-m * n)
          , v = (s - m) * (n * n);
        return g * v
    }
    );
    const h = 5 / n
      , y = rE(o, f, h);
    if (n = Le(n),
    isNaN(y))
        return {
            stiffness: Yt.stiffness,
            damping: Yt.damping,
            duration: n
        };
    {
        const m = Math.pow(y, 2) * r;
        return {
            stiffness: m,
            damping: d * 2 * Math.sqrt(r * m),
            duration: n
        }
    }
}
const uE = ["duration", "bounce"]
  , cE = ["stiffness", "damping", "mass"];
function eg(n, i) {
    return i.some(s => n[s] !== void 0)
}
function fE(n) {
    let i = {
        velocity: Yt.velocity,
        stiffness: Yt.stiffness,
        damping: Yt.damping,
        mass: Yt.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!eg(n, cE) && eg(n, uE))
        if (i.velocity = 0,
        n.visualDuration) {
            const s = n.visualDuration
              , r = 2 * Math.PI / (s * 1.2)
              , o = r * r
              , f = 2 * mn(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(o);
            i = {
                ...i,
                mass: Yt.mass,
                stiffness: o,
                damping: f
            }
        } else {
            const s = oE({
                ...n,
                velocity: 0
            });
            i = {
                ...i,
                ...s,
                mass: Yt.mass
            },
            i.isResolvedFromDuration = !0
        }
    return i
}
function Zr(n=Yt.visualDuration, i=Yt.bounce) {
    const s = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: i
    } : n;
    let {restSpeed: r, restDelta: o} = s;
    const f = s.keyframes[0]
      , d = s.keyframes[s.keyframes.length - 1]
      , h = {
        done: !1,
        value: f
    }
      , {stiffness: y, damping: m, mass: g, duration: v, velocity: S, isResolvedFromDuration: w} = fE({
        ...s,
        velocity: -Ze(s.velocity || 0)
    })
      , x = S || 0
      , C = m / (2 * Math.sqrt(y * g))
      , T = d - f
      , _ = Ze(Math.sqrt(y / g))
      , k = Math.abs(T) < 5;
    r || (r = k ? Yt.restSpeed.granular : Yt.restSpeed.default),
    o || (o = k ? Yt.restDelta.granular : Yt.restDelta.default);
    let U, X, P, I, K, J;
    if (C < 1)
        P = pf(_, C),
        I = (x + C * _ * T) / P,
        U = tt => {
            const dt = Math.exp(-C * _ * tt);
            return d - dt * (I * Math.sin(P * tt) + T * Math.cos(P * tt))
        }
        ,
        K = C * _ * I + T * P,
        J = C * _ * T - I * P,
        X = tt => Math.exp(-C * _ * tt) * (K * Math.sin(P * tt) + J * Math.cos(P * tt));
    else if (C === 1) {
        U = dt => d - Math.exp(-_ * dt) * (T + (x + _ * T) * dt);
        const tt = x + _ * T;
        X = dt => Math.exp(-_ * dt) * (_ * tt * dt - x)
    } else {
        const tt = _ * Math.sqrt(C * C - 1);
        U = At => {
            const xt = Math.exp(-C * _ * At)
              , L = Math.min(tt * At, 300);
            return d - xt * ((x + C * _ * T) * Math.sinh(L) + tt * T * Math.cosh(L)) / tt
        }
        ;
        const dt = (x + C * _ * T) / tt
          , ht = C * _ * dt - T * tt
          , zt = C * _ * T - dt * tt;
        X = At => {
            const xt = Math.exp(-C * _ * At)
              , L = Math.min(tt * At, 300);
            return xt * (ht * Math.sinh(L) + zt * Math.cosh(L))
        }
    }
    const at = {
        calculatedDuration: w && v || null,
        velocity: tt => Le(X(tt)),
        next: tt => {
            if (!w && C < 1) {
                const ht = Math.exp(-C * _ * tt)
                  , zt = Math.sin(P * tt)
                  , At = Math.cos(P * tt)
                  , xt = d - ht * (I * zt + T * At)
                  , L = Le(ht * (K * zt + J * At));
                return h.done = Math.abs(L) <= r && Math.abs(d - xt) <= o,
                h.value = h.done ? d : xt,
                h
            }
            const dt = U(tt);
            if (w)
                h.done = tt >= v;
            else {
                const ht = Le(X(tt));
                h.done = Math.abs(ht) <= r && Math.abs(d - dt) <= o
            }
            return h.value = h.done ? d : dt,
            h
        }
        ,
        toString: () => {
            const tt = Math.min(rd(at), Qr)
              , dt = xv(ht => at.next(tt * ht).value, tt, 30);
            return tt + "ms " + dt
        }
        ,
        toTransition: () => {}
    };
    return at
}
Zr.applyToOptions = n => {
    const i = lE(n, 100, Zr);
    return n.ease = i.ease,
    n.duration = Le(i.duration),
    n.type = "keyframes",
    n
}
;
const dE = 5;
function Tv(n, i, s) {
    const r = Math.max(i - dE, 0);
    return ev(s - n(r), i - r)
}
function yf({keyframes: n, velocity: i=0, power: s=.8, timeConstant: r=325, bounceDamping: o=10, bounceStiffness: f=500, modifyTarget: d, min: h, max: y, restDelta: m=.5, restSpeed: g}) {
    const v = n[0]
      , S = {
        done: !1,
        value: v
    }
      , w = J => h !== void 0 && J < h || y !== void 0 && J > y
      , x = J => h === void 0 ? y : y === void 0 || Math.abs(h - J) < Math.abs(y - J) ? h : y;
    let C = s * i;
    const T = v + C
      , _ = d === void 0 ? T : d(T);
    _ !== T && (C = _ - v);
    const k = J => -C * Math.exp(-J / r)
      , U = J => _ + k(J)
      , X = J => {
        const at = k(J)
          , tt = U(J);
        S.done = Math.abs(at) <= m,
        S.value = S.done ? _ : tt
    }
    ;
    let P, I;
    const K = J => {
        w(S.value) && (P = J,
        I = Zr({
            keyframes: [S.value, x(S.value)],
            velocity: Tv(U, J, S.value),
            damping: o,
            stiffness: f,
            restDelta: m,
            restSpeed: g
        }))
    }
    ;
    return K(0),
    {
        calculatedDuration: null,
        next: J => {
            let at = !1;
            return !I && P === void 0 && (at = !0,
            X(J),
            K(J)),
            P !== void 0 && J >= P ? I.next(J - P) : (!at && X(J),
            S)
        }
    }
}
function hE(n, i, s) {
    const r = []
      , o = s || oa.mix || Sv
      , f = n.length - 1;
    for (let d = 0; d < f; d++) {
        let h = o(n[d], n[d + 1]);
        if (i) {
            const y = Array.isArray(i) ? i[d] || Fe : i;
            h = Jl(y, h)
        }
        r.push(h)
    }
    return r
}
function mE(n, i, {clamp: s=!0, ease: r, mixer: o}={}) {
    const f = n.length;
    if (If(f === i.length),
    f === 1)
        return () => i[0];
    if (f === 2 && i[0] === i[1])
        return () => i[1];
    const d = n[0] === n[1];
    n[0] > n[f - 1] && (n = [...n].reverse(),
    i = [...i].reverse());
    const h = hE(i, r, o)
      , y = h.length
      , m = g => {
        if (d && g < n[0])
            return i[0];
        let v = 0;
        if (y > 1)
            for (; v < n.length - 2 && !(g < n[v + 1]); v++)
                ;
        const S = Xl(n[v], n[v + 1], g);
        return h[v](S)
    }
    ;
    return s ? g => m(mn(n[0], n[f - 1], g)) : m
}
function pE(n, i) {
    const s = n[n.length - 1];
    for (let r = 1; r <= i; r++) {
        const o = Xl(0, i, r);
        n.push(Ut(s, 1, o))
    }
}
function yE(n) {
    const i = [0];
    return pE(i, n.length - 1),
    i
}
function gE(n, i) {
    return n.map(s => s * i)
}
function vE(n, i) {
    return n.map( () => i || cv).splice(0, n.length - 1)
}
function kl({duration: n=300, keyframes: i, times: s, ease: r="easeInOut"}) {
    const o = R2(r) ? r.map(Fy) : Fy(r)
      , f = {
        done: !1,
        value: i[0]
    }
      , d = gE(s && s.length === i.length ? s : yE(i), n)
      , h = mE(d, i, {
        ease: Array.isArray(o) ? o : vE(i, o)
    });
    return {
        calculatedDuration: n,
        next: y => (f.value = h(y),
        f.done = y >= n,
        f)
    }
}
const bE = n => n !== null;
function lo(n, {repeat: i, repeatType: s="loop"}, r, o=1) {
    const f = n.filter(bE)
      , h = o < 0 || i && s !== "loop" && i % 2 === 1 ? 0 : f.length - 1;
    return !h || r === void 0 ? f[h] : r
}
const SE = {
    decay: yf,
    inertia: yf,
    tween: kl,
    keyframes: kl,
    spring: Zr
};
function Ev(n) {
    typeof n.type == "string" && (n.type = SE[n.type])
}
class od {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(i => {
            this.resolve = i
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(i, s) {
        return this.finished.then(i, s)
    }
}
const xE = n => n / 100;
class Fr extends od {
    constructor(i) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.delayState = {
            done: !1,
            value: void 0
        },
        this.stop = () => {
            const {motionValue: s} = this.options;
            s && s.updatedAt !== he.now() && this.tick(he.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            this.options.onStop?.())
        }
        ,
        this.options = i,
        this.initAnimation(),
        this.play(),
        i.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: i} = this;
        Ev(i);
        const {type: s=kl, repeat: r=0, repeatDelay: o=0, repeatType: f, velocity: d=0} = i;
        let {keyframes: h} = i;
        const y = s || kl;
        y !== kl && typeof h[0] != "number" && (this.mixKeyframes = Jl(xE, Sv(h[0], h[1])),
        h = [0, 100]);
        const m = y({
            ...i,
            keyframes: h
        });
        f === "mirror" && (this.mirroredGenerator = y({
            ...i,
            keyframes: [...h].reverse(),
            velocity: -d
        })),
        m.calculatedDuration === null && (m.calculatedDuration = rd(m));
        const {calculatedDuration: g} = m;
        this.calculatedDuration = g,
        this.resolvedDuration = g + o,
        this.totalDuration = this.resolvedDuration * (r + 1) - o,
        this.generator = m
    }
    updateTime(i) {
        const s = Math.round(i - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s
    }
    tick(i, s=!1) {
        const {generator: r, totalDuration: o, mixKeyframes: f, mirroredGenerator: d, resolvedDuration: h, calculatedDuration: y} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: m=0, keyframes: g, repeat: v, repeatType: S, repeatDelay: w, type: x, onUpdate: C, finalKeyframe: T} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - o / this.speed, this.startTime)),
        s ? this.currentTime = i : this.updateTime(i);
        const _ = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1)
          , k = this.playbackSpeed >= 0 ? _ < 0 : _ > o;
        this.currentTime = Math.max(_, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = o);
        let U = this.currentTime
          , X = r;
        if (v) {
            const J = Math.min(this.currentTime, o) / h;
            let at = Math.floor(J)
              , tt = J % 1;
            !tt && J >= 1 && (tt = 1),
            tt === 1 && at--,
            at = Math.min(at, v + 1),
            at % 2 && (S === "reverse" ? (tt = 1 - tt,
            w && (tt -= w / h)) : S === "mirror" && (X = d)),
            U = mn(0, 1, tt) * h
        }
        let P;
        k ? (this.delayState.value = g[0],
        P = this.delayState) : P = X.next(U),
        f && !k && (P.value = f(P.value));
        let {done: I} = P;
        !k && y !== null && (I = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
        const K = this.holdTime === null && (this.state === "finished" || this.state === "running" && I);
        return K && x !== yf && (P.value = lo(g, this.options, T, this.speed)),
        C && C(P.value),
        K && this.finish(),
        P
    }
    then(i, s) {
        return this.finished.then(i, s)
    }
    get duration() {
        return Ze(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: i=0} = this.options || {};
        return this.duration + Ze(i)
    }
    get time() {
        return Ze(this.currentTime)
    }
    set time(i) {
        i = Le(i),
        this.currentTime = i,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed),
        this.driver ? this.driver.start(!1) : (this.startTime = 0,
        this.state = "paused",
        this.holdTime = i,
        this.tick(i))
    }
    getGeneratorVelocity() {
        const i = this.currentTime;
        if (i <= 0)
            return this.options.velocity || 0;
        if (this.generator.velocity)
            return this.generator.velocity(i);
        const s = this.generator.next(i).value;
        return Tv(r => this.generator.next(r).value, i, s)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(i) {
        const s = this.playbackSpeed !== i;
        s && this.driver && this.updateTime(he.now()),
        this.playbackSpeed = i,
        s && this.driver && (this.time = Ze(this.currentTime))
    }
    play() {
        if (this.isStopped)
            return;
        const {driver: i=iE, startTime: s} = this.options;
        this.driver || (this.driver = i(o => this.tick(o))),
        this.options.onPlay?.();
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = s ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(he.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        this.options.onComplete?.()
    }
    cancel() {
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(i) {
        return this.startTime = 0,
        this.tick(i, !0)
    }
    attachTimeline(i) {
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        this.driver?.stop(),
        i.observe(this)
    }
}
function TE(n) {
    for (let i = 1; i < n.length; i++)
        n[i] ?? (n[i] = n[i - 1])
}
const za = n => n * 180 / Math.PI
  , gf = n => {
    const i = za(Math.atan2(n[1], n[0]));
    return vf(i)
}
  , EE = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: gf,
    rotateZ: gf,
    skewX: n => za(Math.atan(n[1])),
    skewY: n => za(Math.atan(n[2])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}
  , vf = n => (n = n % 360,
n < 0 && (n += 360),
n)
  , ng = gf
  , ag = n => Math.sqrt(n[0] * n[0] + n[1] * n[1])
  , ig = n => Math.sqrt(n[4] * n[4] + n[5] * n[5])
  , AE = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: ag,
    scaleY: ig,
    scale: n => (ag(n) + ig(n)) / 2,
    rotateX: n => vf(za(Math.atan2(n[6], n[5]))),
    rotateY: n => vf(za(Math.atan2(-n[2], n[0]))),
    rotateZ: ng,
    rotate: ng,
    skewX: n => za(Math.atan(n[4])),
    skewY: n => za(Math.atan(n[1])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function bf(n) {
    return n.includes("scale") ? 1 : 0
}
function Sf(n, i) {
    if (!n || n === "none")
        return bf(i);
    const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, o;
    if (s)
        r = AE,
        o = s;
    else {
        const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = EE,
        o = h
    }
    if (!o)
        return bf(i);
    const f = r[i]
      , d = o[1].split(",").map(RE);
    return typeof f == "function" ? f(d) : d[f]
}
const wE = (n, i) => {
    const {transform: s="none"} = getComputedStyle(n);
    return Sf(s, i)
}
;
function RE(n) {
    return parseFloat(n.trim())
}
const Ui = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Bi = new Set(Ui)
  , lg = n => n === Vi || n === et
  , CE = new Set(["x", "y", "z"])
  , ME = Ui.filter(n => !CE.has(n));
function DE(n) {
    const i = [];
    return ME.forEach(s => {
        const r = n.getValue(s);
        r !== void 0 && (i.push([s, r.get()]),
        r.set(s.startsWith("scale") ? 1 : 0))
    }
    ),
    i
}
const ra = {
    width: ({x: n}, {paddingLeft: i="0", paddingRight: s="0", boxSizing: r}) => {
        const o = n.max - n.min;
        return r === "border-box" ? o : o - parseFloat(i) - parseFloat(s)
    }
    ,
    height: ({y: n}, {paddingTop: i="0", paddingBottom: s="0", boxSizing: r}) => {
        const o = n.max - n.min;
        return r === "border-box" ? o : o - parseFloat(i) - parseFloat(s)
    }
    ,
    top: (n, {top: i}) => parseFloat(i),
    left: (n, {left: i}) => parseFloat(i),
    bottom: ({y: n}, {top: i}) => parseFloat(i) + (n.max - n.min),
    right: ({x: n}, {left: i}) => parseFloat(i) + (n.max - n.min),
    x: (n, {transform: i}) => Sf(i, "x"),
    y: (n, {transform: i}) => Sf(i, "y")
};
ra.translateX = ra.x;
ra.translateY = ra.y;
const Va = new Set;
let xf = !1
  , Tf = !1
  , Ef = !1;
function Av() {
    if (Tf) {
        const n = Array.from(Va).filter(r => r.needsMeasurement)
          , i = new Set(n.map(r => r.element))
          , s = new Map;
        i.forEach(r => {
            const o = DE(r);
            o.length && (s.set(r, o),
            r.render())
        }
        ),
        n.forEach(r => r.measureInitialState()),
        i.forEach(r => {
            r.render();
            const o = s.get(r);
            o && o.forEach( ([f,d]) => {
                r.getValue(f)?.set(d)
            }
            )
        }
        ),
        n.forEach(r => r.measureEndState()),
        n.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Tf = !1,
    xf = !1,
    Va.forEach(n => n.complete(Ef)),
    Va.clear()
}
function wv() {
    Va.forEach(n => {
        n.readKeyframes(),
        n.needsMeasurement && (Tf = !0)
    }
    )
}
function OE() {
    Ef = !0,
    wv(),
    Av(),
    Ef = !1
}
class ud {
    constructor(i, s, r, o, f, d=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...i],
        this.onComplete = s,
        this.name = r,
        this.motionValue = o,
        this.element = f,
        this.isAsync = d
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Va.add(this),
        xf || (xf = !0,
        jt.read(wv),
        jt.resolveKeyframes(Av))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: i, name: s, element: r, motionValue: o} = this;
        if (i[0] === null) {
            const f = o?.get()
              , d = i[i.length - 1];
            if (f !== void 0)
                i[0] = f;
            else if (r && s) {
                const h = r.readValue(s, d);
                h != null && (i[0] = h)
            }
            i[0] === void 0 && (i[0] = d),
            o && f === void 0 && o.set(i[0])
        }
        TE(i)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(i=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
        Va.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Va.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const NE = n => n.startsWith("--");
function Rv(n, i, s) {
    NE(i) ? n.style.setProperty(i, s) : n.style[i] = s
}
const _E = {};
function Cv(n, i) {
    const s = tv(n);
    return () => _E[i] ?? s()
}
const jE = Cv( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , Mv = Cv( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Bl = ([n,i,s,r]) => `cubic-bezier(${n}, ${i}, ${s}, ${r})`
  , sg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Bl([0, .65, .55, 1]),
    circOut: Bl([.55, 0, 1, .45]),
    backIn: Bl([.31, .01, .66, -.59]),
    backOut: Bl([.33, 1.53, .69, .99])
};
function Dv(n, i) {
    if (n)
        return typeof n == "function" ? Mv() ? xv(n, i) : "ease-out" : fv(n) ? Bl(n) : Array.isArray(n) ? n.map(s => Dv(s, i) || sg.easeOut) : sg[n]
}
function zE(n, i, s, {delay: r=0, duration: o=300, repeat: f=0, repeatType: d="loop", ease: h="easeOut", times: y}={}, m=void 0) {
    const g = {
        [i]: s
    };
    y && (g.offset = y);
    const v = Dv(h, o);
    Array.isArray(v) && (g.easing = v);
    const S = {
        delay: r,
        duration: o,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: f + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    };
    return m && (S.pseudoElement = m),
    n.animate(g, S)
}
function Ov(n) {
    return typeof n == "function" && "applyToOptions"in n
}
function LE({type: n, ...i}) {
    return Ov(n) && Mv() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300),
    i.ease ?? (i.ease = "easeOut"),
    i)
}
class Nv extends od {
    constructor(i) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !i)
            return;
        const {element: s, name: r, keyframes: o, pseudoElement: f, allowFlatten: d=!1, finalKeyframe: h, onComplete: y} = i;
        this.isPseudoElement = !!f,
        this.allowFlatten = d,
        this.options = i,
        If(typeof i.type != "string");
        const m = LE(i);
        this.animation = zE(s, r, o, m, f),
        m.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !f) {
                const g = lo(o, this.options, h, this.speed);
                this.updateMotionValue && this.updateMotionValue(g),
                Rv(s, r, g),
                this.animation.cancel()
            }
            y?.(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish?.()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: i} = this;
        i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        const i = this.options?.element;
        !this.isPseudoElement && i?.isConnected && this.animation.commitStyles?.()
    }
    get duration() {
        const i = this.animation.effect?.getComputedTiming?.().duration || 0;
        return Ze(Number(i))
    }
    get iterationDuration() {
        const {delay: i=0} = this.options || {};
        return this.duration + Ze(i)
    }
    get time() {
        return Ze(Number(this.animation.currentTime) || 0)
    }
    set time(i) {
        const s = this.finishedTime !== null;
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = Le(i),
        s && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(i) {
        i < 0 && (this.finishedTime = null),
        this.animation.playbackRate = i
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(i) {
        this.manualStartTime = this.animation.startTime = i
    }
    attachTimeline({timeline: i, rangeStart: s, rangeEnd: r, observe: o}) {
        return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        }),
        this.animation.onfinish = null,
        i && jE() ? (this.animation.timeline = i,
        s && (this.animation.rangeStart = s),
        r && (this.animation.rangeEnd = r),
        Fe) : o(this)
    }
}
const _v = {
    anticipate: rv,
    backInOut: sv,
    circInOut: uv
};
function VE(n) {
    return n in _v
}
function UE(n) {
    typeof n.ease == "string" && VE(n.ease) && (n.ease = _v[n.ease])
}
const Qc = 10;
class BE extends Nv {
    constructor(i) {
        UE(i),
        Ev(i),
        super(i),
        i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime),
        this.options = i
    }
    updateMotionValue(i) {
        const {motionValue: s, onUpdate: r, onComplete: o, element: f, ...d} = this.options;
        if (!s)
            return;
        if (i !== void 0) {
            s.set(i);
            return
        }
        const h = new Fr({
            ...d,
            autoplay: !1
        })
          , y = Math.max(Qc, he.now() - this.startTime)
          , m = mn(0, Qc, y - Qc)
          , g = h.sample(y).value
          , {name: v} = this.options;
        f && v && Rv(f, v, g),
        s.setWithVelocity(h.sample(Math.max(0, y - m)).value, g, m),
        h.stop()
    }
}
const rg = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (en.test(n) || n === "0") && !n.startsWith("url("));
function HE(n) {
    const i = n[0];
    if (n.length === 1)
        return !0;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== i)
            return !0
}
function kE(n, i, s, r) {
    const o = n[0];
    if (o === null)
        return !1;
    if (i === "display" || i === "visibility")
        return !0;
    const f = n[n.length - 1]
      , d = rg(o, i)
      , h = rg(f, i);
    return !d || !h ? !1 : HE(n) || (s === "spring" || Ov(s)) && r
}
function Af(n) {
    n.duration = 0,
    n.type = "keyframes"
}
const jv = new Set(["opacity", "clipPath", "filter", "transform"])
  , qE = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function GE(n) {
    for (let i = 0; i < n.length; i++)
        if (typeof n[i] == "string" && qE.test(n[i]))
            return !0;
    return !1
}
const YE = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"])
  , XE = tv( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function PE(n) {
    const {motionValue: i, name: s, repeatDelay: r, repeatType: o, damping: f, type: d, keyframes: h} = n;
    if (!(i?.owner?.current instanceof HTMLElement))
        return !1;
    const {onUpdate: m, transformTemplate: g} = i.owner.getProps();
    return XE() && s && (jv.has(s) || YE.has(s) && GE(h)) && (s !== "transform" || !g) && !m && !r && o !== "mirror" && f !== 0 && d !== "inertia"
}
const KE = 40;
class QE extends od {
    constructor({autoplay: i=!0, delay: s=0, type: r="keyframes", repeat: o=0, repeatDelay: f=0, repeatType: d="loop", keyframes: h, name: y, motionValue: m, element: g, ...v}) {
        super(),
        this.stop = () => {
            this._animation && (this._animation.stop(),
            this.stopTimeline?.()),
            this.keyframeResolver?.cancel()
        }
        ,
        this.createdAt = he.now();
        const S = {
            autoplay: i,
            delay: s,
            type: r,
            repeat: o,
            repeatDelay: f,
            repeatType: d,
            name: y,
            motionValue: m,
            element: g,
            ...v
        }
          , w = g?.KeyframeResolver || ud;
        this.keyframeResolver = new w(h, (x, C, T) => this.onKeyframesResolved(x, C, S, !T),y,m,g),
        this.keyframeResolver?.scheduleResolve()
    }
    onKeyframesResolved(i, s, r, o) {
        this.keyframeResolver = void 0;
        const {name: f, type: d, velocity: h, delay: y, isHandoff: m, onUpdate: g} = r;
        this.resolvedAt = he.now();
        let v = !0;
        kE(i, f, d, h) || (v = !1,
        (oa.instantAnimations || !y) && g?.(lo(i, r, s)),
        i[0] = i[i.length - 1],
        Af(r),
        r.repeat = 0);
        const w = {
            startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > KE ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: s,
            ...r,
            keyframes: i
        }
          , x = v && !m && PE(w)
          , C = w.motionValue?.owner?.current;
        let T;
        if (x)
            try {
                T = new BE({
                    ...w,
                    element: C
                })
            } catch {
                T = new Fr(w)
            }
        else
            T = new Fr(w);
        T.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(Fe),
        this.pendingTimeline && (this.stopTimeline = T.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = T
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(i, s) {
        return this.finished.finally(i).then( () => {}
        )
    }
    get animation() {
        return this._animation || (this.keyframeResolver?.resume(),
        OE()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(i) {
        this.animation.time = i
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(i) {
        this.animation.speed = i
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(i) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel()
    }
}
function zv(n, i, s, r=0, o=1) {
    const f = Array.from(n).sort( (m, g) => m.sortNodePosition(g)).indexOf(i)
      , d = n.size
      , h = (d - 1) * r;
    return typeof s == "function" ? s(f, d) : o === 1 ? f * r : h - f * r
}
const ZE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function FE(n) {
    const i = ZE.exec(n);
    if (!i)
        return [, ];
    const [,s,r,o] = i;
    return [`--${s ?? r}`, o]
}
function Lv(n, i, s=1) {
    const [r,o] = FE(n);
    if (!r)
        return;
    const f = window.getComputedStyle(i).getPropertyValue(r);
    if (f) {
        const d = f.trim();
        return $0(d) ? parseFloat(d) : d
    }
    return ad(o) ? Lv(o, i, s + 1) : o
}
const JE = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , $E = n => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , WE = {
    type: "keyframes",
    duration: .8
}
  , IE = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , tA = (n, {keyframes: i}) => i.length > 2 ? WE : Bi.has(n) ? n.startsWith("scale") ? $E(i[1]) : JE : IE;
function Vv(n, i) {
    if (n?.inherit && i) {
        const {inherit: s, ...r} = n;
        return {
            ...i,
            ...r
        }
    }
    return n
}
function cd(n, i) {
    const s = n?.[i] ?? n?.default ?? n;
    return s !== n ? Vv(s, n) : s
}
const eA = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function nA(n) {
    for (const i in n)
        if (!eA.has(i))
            return !0;
    return !1
}
const fd = (n, i, s, r={}, o, f) => d => {
    const h = cd(r, n) || {}
      , y = h.delay || r.delay || 0;
    let {elapsed: m=0} = r;
    m = m - Le(y);
    const g = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...h,
        delay: -m,
        onUpdate: S => {
            i.set(S),
            h.onUpdate && h.onUpdate(S)
        }
        ,
        onComplete: () => {
            d(),
            h.onComplete && h.onComplete()
        }
        ,
        name: n,
        motionValue: i,
        element: f ? void 0 : o
    };
    nA(h) || Object.assign(g, tA(n, g)),
    g.duration && (g.duration = Le(g.duration)),
    g.repeatDelay && (g.repeatDelay = Le(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let v = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (Af(g),
    g.delay === 0 && (v = !0)),
    (oa.instantAnimations || oa.skipAnimations || o?.shouldSkipAnimations) && (v = !0,
    Af(g),
    g.delay = 0),
    g.allowFlatten = !h.type && !h.ease,
    v && !f && i.get() !== void 0) {
        const S = lo(g.keyframes, h);
        if (S !== void 0) {
            jt.update( () => {
                g.onUpdate(S),
                g.onComplete()
            }
            );
            return
        }
    }
    return h.isSync ? new Fr(g) : new QE(g)
}
;
function og(n) {
    const i = [{}, {}];
    return n?.values.forEach( (s, r) => {
        i[0][r] = s.get(),
        i[1][r] = s.getVelocity()
    }
    ),
    i
}
function dd(n, i, s, r) {
    if (typeof i == "function") {
        const [o,f] = og(r);
        i = i(s !== void 0 ? s : n.custom, o, f)
    }
    if (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function") {
        const [o,f] = og(r);
        i = i(s !== void 0 ? s : n.custom, o, f)
    }
    return i
}
function Ua(n, i, s) {
    const r = n.getProps();
    return dd(r, i, s !== void 0 ? s : r.custom, n)
}
const Uv = new Set(["width", "height", "top", "left", "right", "bottom", ...Ui])
  , ug = 30
  , aA = n => !isNaN(parseFloat(n));
class iA {
    constructor(i, s={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            const o = he.now();
            if (this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && (this.events.change?.notify(this.current),
            this.dependents))
                for (const f of this.dependents)
                    f.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(i),
        this.owner = s.owner
    }
    setCurrent(i) {
        this.current = i,
        this.updatedAt = he.now(),
        this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = aA(this.current))
    }
    setPrevFrameValue(i=this.current) {
        this.prevFrameValue = i,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(i) {
        return this.on("change", i)
    }
    on(i, s) {
        this.events[i] || (this.events[i] = new td);
        const r = this.events[i].add(s);
        return i === "change" ? () => {
            r(),
            jt.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const i in this.events)
            this.events[i].clear()
    }
    attach(i, s) {
        this.passiveEffect = i,
        this.stopPassiveEffect = s
    }
    set(i) {
        this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
    }
    setWithVelocity(i, s, r) {
        this.set(s),
        this.prev = void 0,
        this.prevFrameValue = i,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(i, s=!0) {
        this.updateAndNotify(i),
        this.prev = i,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        s && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change?.notify(this.current)
    }
    addDependent(i) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(i)
    }
    removeDependent(i) {
        this.dependents && this.dependents.delete(i)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const i = he.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > ug)
            return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, ug);
        return ev(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
    }
    start(i) {
        return this.stop(),
        new Promise(s => {
            this.hasAnimated = !0,
            this.animation = i(s),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Di(n, i) {
    return new iA(n,i)
}
const wf = n => Array.isArray(n);
function lA(n, i, s) {
    n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, Di(s))
}
function sA(n) {
    return wf(n) ? n[n.length - 1] || 0 : n
}
function rA(n, i) {
    const s = Ua(n, i);
    let {transitionEnd: r={}, transition: o={}, ...f} = s || {};
    f = {
        ...f,
        ...r
    };
    for (const d in f) {
        const h = sA(f[d]);
        lA(n, d, h)
    }
}
const oe = n => !!(n && n.getVelocity);
function oA(n) {
    return !!(oe(n) && n.add)
}
function Rf(n, i) {
    const s = n.getValue("willChange");
    if (oA(s))
        return s.add(i);
    if (!s && oa.WillChange) {
        const r = new oa.WillChange("auto");
        n.addValue("willChange", r),
        r.add(i)
    }
}
function hd(n) {
    return n.replace(/([A-Z])/g, i => `-${i.toLowerCase()}`)
}
const uA = "framerAppearId"
  , Bv = "data-" + hd(uA);
function Hv(n) {
    return n.props[Bv]
}
function cA({protectedKeys: n, needsAnimating: i}, s) {
    const r = n.hasOwnProperty(s) && i[s] !== !0;
    return i[s] = !1,
    r
}
function kv(n, i, {delay: s=0, transitionOverride: r, type: o}={}) {
    let {transition: f, transitionEnd: d, ...h} = i;
    const y = n.getDefaultTransition();
    f = f ? Vv(f, y) : y;
    const m = f?.reduceMotion;
    r && (f = r);
    const g = []
      , v = o && n.animationState && n.animationState.getState()[o];
    for (const S in h) {
        const w = n.getValue(S, n.latestValues[S] ?? null)
          , x = h[S];
        if (x === void 0 || v && cA(v, S))
            continue;
        const C = {
            delay: s,
            ...cd(f || {}, S)
        }
          , T = w.get();
        if (T !== void 0 && !w.isAnimating() && !Array.isArray(x) && x === T && !C.velocity) {
            jt.update( () => w.set(x));
            continue
        }
        let _ = !1;
        if (window.MotionHandoffAnimation) {
            const X = Hv(n);
            if (X) {
                const P = window.MotionHandoffAnimation(X, S, jt);
                P !== null && (C.startTime = P,
                _ = !0)
            }
        }
        Rf(n, S);
        const k = m ?? n.shouldReduceMotion;
        w.start(fd(S, w, x, k && Uv.has(S) ? {
            type: !1
        } : C, n, _));
        const U = w.animation;
        U && g.push(U)
    }
    if (d) {
        const S = () => jt.update( () => {
            d && rA(n, d)
        }
        );
        g.length ? Promise.all(g).then(S) : S()
    }
    return g
}
function Cf(n, i, s={}) {
    const r = Ua(n, i, s.type === "exit" ? n.presenceContext?.custom : void 0);
    let {transition: o=n.getDefaultTransition() || {}} = r || {};
    s.transitionOverride && (o = s.transitionOverride);
    const f = r ? () => Promise.all(kv(n, r, s)) : () => Promise.resolve()
      , d = n.variantChildren && n.variantChildren.size ? (y=0) => {
        const {delayChildren: m=0, staggerChildren: g, staggerDirection: v} = o;
        return fA(n, i, y, m, g, v, s)
    }
    : () => Promise.resolve()
      , {when: h} = o;
    if (h) {
        const [y,m] = h === "beforeChildren" ? [f, d] : [d, f];
        return y().then( () => m())
    } else
        return Promise.all([f(), d(s.delay)])
}
function fA(n, i, s=0, r=0, o=0, f=1, d) {
    const h = [];
    for (const y of n.variantChildren)
        y.notify("AnimationStart", i),
        h.push(Cf(y, i, {
            ...d,
            delay: s + (typeof r == "function" ? 0 : r) + zv(n.variantChildren, y, r, o, f)
        }).then( () => y.notify("AnimationComplete", i)));
    return Promise.all(h)
}
function dA(n, i, s={}) {
    n.notify("AnimationStart", i);
    let r;
    if (Array.isArray(i)) {
        const o = i.map(f => Cf(n, f, s));
        r = Promise.all(o)
    } else if (typeof i == "string")
        r = Cf(n, i, s);
    else {
        const o = typeof i == "function" ? Ua(n, i, s.custom) : i;
        r = Promise.all(kv(n, o, s))
    }
    return r.then( () => {
        n.notify("AnimationComplete", i)
    }
    )
}
const hA = {
    test: n => n === "auto",
    parse: n => n
}
  , qv = n => i => i.test(n)
  , Gv = [Vi, et, hn, sa, H2, B2, hA]
  , cg = n => Gv.find(qv(n));
function mA(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || I0(n) : !0
}
const pA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function yA(n) {
    const [i,s] = n.slice(0, -1).split("(");
    if (i === "drop-shadow")
        return n;
    const [r] = s.match(id) || [];
    if (!r)
        return n;
    const o = s.replace(r, "");
    let f = pA.has(i) ? 1 : 0;
    return r !== s && (f *= 100),
    i + "(" + f + o + ")"
}
const gA = /\b([a-z-]*)\(.*?\)/gu
  , Mf = {
    ...en,
    getAnimatableNone: n => {
        const i = n.match(gA);
        return i ? i.map(yA).join(" ") : n
    }
}
  , Df = {
    ...en,
    getAnimatableNone: n => {
        const i = en.parse(n);
        return en.createTransformer(n)(i.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
            ...r,
            alpha: 1
        } : r))
    }
}
  , fg = {
    ...Vi,
    transform: Math.round
}
  , vA = {
    rotate: sa,
    rotateX: sa,
    rotateY: sa,
    rotateZ: sa,
    scale: wr,
    scaleX: wr,
    scaleY: wr,
    scaleZ: wr,
    skew: sa,
    skewX: sa,
    skewY: sa,
    distance: et,
    translateX: et,
    translateY: et,
    translateZ: et,
    x: et,
    y: et,
    z: et,
    perspective: et,
    transformPerspective: et,
    opacity: Pl,
    originX: $y,
    originY: $y,
    originZ: et
}
  , md = {
    borderWidth: et,
    borderTopWidth: et,
    borderRightWidth: et,
    borderBottomWidth: et,
    borderLeftWidth: et,
    borderRadius: et,
    borderTopLeftRadius: et,
    borderTopRightRadius: et,
    borderBottomRightRadius: et,
    borderBottomLeftRadius: et,
    width: et,
    maxWidth: et,
    height: et,
    maxHeight: et,
    top: et,
    right: et,
    bottom: et,
    left: et,
    inset: et,
    insetBlock: et,
    insetBlockStart: et,
    insetBlockEnd: et,
    insetInline: et,
    insetInlineStart: et,
    insetInlineEnd: et,
    padding: et,
    paddingTop: et,
    paddingRight: et,
    paddingBottom: et,
    paddingLeft: et,
    paddingBlock: et,
    paddingBlockStart: et,
    paddingBlockEnd: et,
    paddingInline: et,
    paddingInlineStart: et,
    paddingInlineEnd: et,
    margin: et,
    marginTop: et,
    marginRight: et,
    marginBottom: et,
    marginLeft: et,
    marginBlock: et,
    marginBlockStart: et,
    marginBlockEnd: et,
    marginInline: et,
    marginInlineStart: et,
    marginInlineEnd: et,
    fontSize: et,
    backgroundPositionX: et,
    backgroundPositionY: et,
    ...vA,
    zIndex: fg,
    fillOpacity: Pl,
    strokeOpacity: Pl,
    numOctaves: fg
}
  , bA = {
    ...md,
    color: $t,
    backgroundColor: $t,
    outlineColor: $t,
    fill: $t,
    stroke: $t,
    borderColor: $t,
    borderTopColor: $t,
    borderRightColor: $t,
    borderBottomColor: $t,
    borderLeftColor: $t,
    filter: Mf,
    WebkitFilter: Mf,
    mask: Df,
    WebkitMask: Df
}
  , Yv = n => bA[n]
  , SA = new Set([Mf, Df]);
function Xv(n, i) {
    let s = Yv(n);
    return SA.has(s) || (s = en),
    s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
}
const xA = new Set(["auto", "none", "0"]);
function TA(n, i, s) {
    let r = 0, o;
    for (; r < n.length && !o; ) {
        const f = n[r];
        typeof f == "string" && !xA.has(f) && Mi(f).values.length && (o = n[r]),
        r++
    }
    if (o && s)
        for (const f of i)
            n[f] = Xv(s, o)
}
class EA extends ud {
    constructor(i, s, r, o, f) {
        super(i, s, r, o, f, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: i, element: s, name: r} = this;
        if (!s || !s.current)
            return;
        super.readKeyframes();
        for (let g = 0; g < i.length; g++) {
            let v = i[g];
            if (typeof v == "string" && (v = v.trim(),
            ad(v))) {
                const S = Lv(v, s.current);
                S !== void 0 && (i[g] = S),
                g === i.length - 1 && (this.finalKeyframe = v)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Uv.has(r) || i.length !== 2)
            return;
        const [o,f] = i
          , d = cg(o)
          , h = cg(f)
          , y = Jy(o)
          , m = Jy(f);
        if (y !== m && ra[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (d !== h)
            if (lg(d) && lg(h))
                for (let g = 0; g < i.length; g++) {
                    const v = i[g];
                    typeof v == "string" && (i[g] = parseFloat(v))
                }
            else
                ra[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: i, name: s} = this
          , r = [];
        for (let o = 0; o < i.length; o++)
            (i[o] === null || mA(i[o])) && r.push(o);
        r.length && TA(i, r, s)
    }
    measureInitialState() {
        const {element: i, unresolvedKeyframes: s, name: r} = this;
        if (!i || !i.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = ra[r](i.measureViewportBox(), window.getComputedStyle(i.current)),
        s[0] = this.measuredOrigin;
        const o = s[s.length - 1];
        o !== void 0 && i.getValue(r, o).jump(o, !1)
    }
    measureEndState() {
        const {element: i, name: s, unresolvedKeyframes: r} = this;
        if (!i || !i.current)
            return;
        const o = i.getValue(s);
        o && o.jump(this.measuredOrigin, !1);
        const f = r.length - 1
          , d = r[f];
        r[f] = ra[s](i.measureViewportBox(), window.getComputedStyle(i.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        this.removedTransforms?.length && this.removedTransforms.forEach( ([h,y]) => {
            i.getValue(h).set(y)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function Pv(n, i, s) {
    if (n == null)
        return [];
    if (n instanceof EventTarget)
        return [n];
    if (typeof n == "string") {
        let r = document;
        const o = s?.[n] ?? r.querySelectorAll(n);
        return o ? Array.from(o) : []
    }
    return Array.from(n).filter(r => r != null)
}
const Kv = (n, i) => i && typeof n == "number" ? i.transform(n) : n;
function jr(n) {
    return W0(n) && "offsetHeight"in n && !("ownerSVGElement"in n)
}
const {schedule: pd} = dv(queueMicrotask, !1)
  , tn = {
    x: !1,
    y: !1
};
function Qv() {
    return tn.x || tn.y
}
function AA(n) {
    return n === "x" || n === "y" ? tn[n] ? null : (tn[n] = !0,
    () => {
        tn[n] = !1
    }
    ) : tn.x || tn.y ? null : (tn.x = tn.y = !0,
    () => {
        tn.x = tn.y = !1
    }
    )
}
function Zv(n, i) {
    const s = Pv(n)
      , r = new AbortController
      , o = {
        passive: !0,
        ...i,
        signal: r.signal
    };
    return [s, o, () => r.abort()]
}
function wA(n) {
    return !(n.pointerType === "touch" || Qv())
}
function RA(n, i, s={}) {
    const [r,o,f] = Zv(n, s);
    return r.forEach(d => {
        let h = !1, y = !1, m;
        const g = () => {
            d.removeEventListener("pointerleave", x)
        }
          , v = T => {
            m && (m(T),
            m = void 0),
            g()
        }
          , S = T => {
            h = !1,
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            y && (y = !1,
            v(T))
        }
          , w = () => {
            h = !0,
            window.addEventListener("pointerup", S, o),
            window.addEventListener("pointercancel", S, o)
        }
          , x = T => {
            if (T.pointerType !== "touch") {
                if (h) {
                    y = !0;
                    return
                }
                v(T)
            }
        }
          , C = T => {
            if (!wA(T))
                return;
            y = !1;
            const _ = i(d, T);
            typeof _ == "function" && (m = _,
            d.addEventListener("pointerleave", x, o))
        }
        ;
        d.addEventListener("pointerenter", C, o),
        d.addEventListener("pointerdown", w, o)
    }
    ),
    f
}
const Fv = (n, i) => i ? n === i ? !0 : Fv(n, i.parentElement) : !1
  , yd = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1
  , CA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function MA(n) {
    return CA.has(n.tagName) || n.isContentEditable === !0
}
const DA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function OA(n) {
    return DA.has(n.tagName) || n.isContentEditable === !0
}
const zr = new WeakSet;
function dg(n) {
    return i => {
        i.key === "Enter" && n(i)
    }
}
function Zc(n, i) {
    n.dispatchEvent(new PointerEvent("pointer" + i,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const NA = (n, i) => {
    const s = n.currentTarget;
    if (!s)
        return;
    const r = dg( () => {
        if (zr.has(s))
            return;
        Zc(s, "down");
        const o = dg( () => {
            Zc(s, "up")
        }
        )
          , f = () => Zc(s, "cancel");
        s.addEventListener("keyup", o, i),
        s.addEventListener("blur", f, i)
    }
    );
    s.addEventListener("keydown", r, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", r), i)
}
;
function hg(n) {
    return yd(n) && !Qv()
}
const mg = new WeakSet;
function _A(n, i, s={}) {
    const [r,o,f] = Zv(n, s)
      , d = h => {
        const y = h.currentTarget;
        if (!hg(h) || mg.has(h))
            return;
        zr.add(y),
        s.stopPropagation && mg.add(h);
        const m = i(y, h)
          , g = (w, x) => {
            window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", S),
            zr.has(y) && zr.delete(y),
            hg(w) && typeof m == "function" && m(w, {
                success: x
            })
        }
          , v = w => {
            g(w, y === window || y === document || s.useGlobalTarget || Fv(y, w.target))
        }
          , S = w => {
            g(w, !1)
        }
        ;
        window.addEventListener("pointerup", v, o),
        window.addEventListener("pointercancel", S, o)
    }
    ;
    return r.forEach(h => {
        (s.useGlobalTarget ? window : h).addEventListener("pointerdown", d, o),
        jr(h) && (h.addEventListener("focus", m => NA(m, o)),
        !MA(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0))
    }
    ),
    f
}
function gd(n) {
    return W0(n) && "ownerSVGElement"in n
}
const Lr = new WeakMap;
let Vr;
const Jv = (n, i, s) => (r, o) => o && o[0] ? o[0][n + "Size"] : gd(r) && "getBBox"in r ? r.getBBox()[i] : r[s]
  , jA = Jv("inline", "width", "offsetWidth")
  , zA = Jv("block", "height", "offsetHeight");
function LA({target: n, borderBoxSize: i}) {
    Lr.get(n)?.forEach(s => {
        s(n, {
            get width() {
                return jA(n, i)
            },
            get height() {
                return zA(n, i)
            }
        })
    }
    )
}
function VA(n) {
    n.forEach(LA)
}
function UA() {
    typeof ResizeObserver > "u" || (Vr = new ResizeObserver(VA))
}
function BA(n, i) {
    Vr || UA();
    const s = Pv(n);
    return s.forEach(r => {
        let o = Lr.get(r);
        o || (o = new Set,
        Lr.set(r, o)),
        o.add(i),
        Vr?.observe(r)
    }
    ),
    () => {
        s.forEach(r => {
            const o = Lr.get(r);
            o?.delete(i),
            o?.size || Vr?.unobserve(r)
        }
        )
    }
}
const Ur = new Set;
let Ri;
function HA() {
    Ri = () => {
        const n = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Ur.forEach(i => i(n))
    }
    ,
    window.addEventListener("resize", Ri)
}
function kA(n) {
    return Ur.add(n),
    Ri || HA(),
    () => {
        Ur.delete(n),
        !Ur.size && typeof Ri == "function" && (window.removeEventListener("resize", Ri),
        Ri = void 0)
    }
}
function pg(n, i) {
    return typeof n == "function" ? kA(n) : BA(n, i)
}
function qA(n) {
    return gd(n) && n.tagName === "svg"
}
const GA = [...Gv, $t, en]
  , YA = n => GA.find(qv(n))
  , yg = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ci = () => ({
    x: yg(),
    y: yg()
})
  , gg = () => ({
    min: 0,
    max: 0
})
  , It = () => ({
    x: gg(),
    y: gg()
})
  , XA = new WeakMap;
function so(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
function Kl(n) {
    return typeof n == "string" || Array.isArray(n)
}
const vd = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , bd = ["initial", ...vd];
function ro(n) {
    return so(n.animate) || bd.some(i => Kl(n[i]))
}
function $v(n) {
    return !!(ro(n) || n.variants)
}
function PA(n, i, s) {
    for (const r in i) {
        const o = i[r]
          , f = s[r];
        if (oe(o))
            n.addValue(r, o);
        else if (oe(f))
            n.addValue(r, Di(o, {
                owner: n
            }));
        else if (f !== o)
            if (n.hasValue(r)) {
                const d = n.getValue(r);
                d.liveStyle === !0 ? d.jump(o) : d.hasAnimated || d.set(o)
            } else {
                const d = n.getStaticValue(r);
                n.addValue(r, Di(d !== void 0 ? d : o, {
                    owner: n
                }))
            }
    }
    for (const r in s)
        i[r] === void 0 && n.removeValue(r);
    return i
}
const Of = {
    current: null
}
  , Wv = {
    current: !1
}
  , KA = typeof window < "u";
function QA() {
    if (Wv.current = !0,
    !!KA)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
              , i = () => Of.current = n.matches;
            n.addEventListener("change", i),
            i()
        } else
            Of.current = !1
}
const vg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Jr = {};
function Iv(n) {
    Jr = n
}
function ZA() {
    return Jr
}
class FA {
    scrapeMotionValuesFromProps(i, s, r) {
        return {}
    }
    constructor({parent: i, props: s, presenceContext: r, reducedMotionConfig: o, skipAnimations: f, blockInitialAnimation: d, visualState: h}, y={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = ud,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const w = he.now();
            this.renderScheduledAt < w && (this.renderScheduledAt = w,
            jt.render(this.render, !1, !0))
        }
        ;
        const {latestValues: m, renderState: g} = h;
        this.latestValues = m,
        this.baseTarget = {
            ...m
        },
        this.initialValues = s.initial ? {
            ...m
        } : {},
        this.renderState = g,
        this.parent = i,
        this.props = s,
        this.presenceContext = r,
        this.depth = i ? i.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.skipAnimationsConfig = f,
        this.options = y,
        this.blockInitialAnimation = !!d,
        this.isControllingVariants = ro(s),
        this.isVariantNode = $v(s),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(i && i.current);
        const {willChange: v, ...S} = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const w in S) {
            const x = S[w];
            m[w] !== void 0 && oe(x) && x.set(m[w])
        }
    }
    mount(i) {
        if (this.hasBeenMounted)
            for (const s in this.initialValues)
                this.values.get(s)?.jump(this.initialValues[s]),
                this.latestValues[s] = this.initialValues[s];
        this.current = i,
        XA.set(i, this),
        this.projection && !this.projection.instance && this.projection.mount(i),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (s, r) => this.bindToMotionValue(r, s)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Wv.current || QA(),
        this.shouldReduceMotion = Of.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        this.projection && this.projection.unmount(),
        ua(this.notifyUpdate),
        ua(this.render),
        this.valueSubscriptions.forEach(i => i()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this);
        for (const i in this.events)
            this.events[i].clear();
        for (const i in this.features) {
            const s = this.features[i];
            s && (s.unmount(),
            s.isMounted = !1)
        }
        this.current = null
    }
    addChild(i) {
        this.children.add(i),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(i)
    }
    removeChild(i) {
        this.children.delete(i),
        this.enteringChildren && this.enteringChildren.delete(i)
    }
    bindToMotionValue(i, s) {
        if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(),
        s.accelerate && jv.has(i) && this.current instanceof HTMLElement) {
            const {factory: d, keyframes: h, times: y, ease: m, duration: g} = s.accelerate
              , v = new Nv({
                element: this.current,
                name: i,
                keyframes: h,
                times: y,
                ease: m,
                duration: Le(g)
            })
              , S = d(v);
            this.valueSubscriptions.set(i, () => {
                S(),
                v.cancel()
            }
            );
            return
        }
        const r = Bi.has(i);
        r && this.onBindTransform && this.onBindTransform();
        const o = s.on("change", d => {
            this.latestValues[i] = d,
            this.props.onUpdate && jt.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let f;
        typeof window < "u" && window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, i, s)),
        this.valueSubscriptions.set(i, () => {
            o(),
            f && f(),
            s.owner && s.stop()
        }
        )
    }
    sortNodePosition(i) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
    }
    updateFeatures() {
        let i = "animation";
        for (i in Jr) {
            const s = Jr[i];
            if (!s)
                continue;
            const {isEnabled: r, Feature: o} = s;
            if (!this.features[i] && o && r(this.props) && (this.features[i] = new o(this)),
            this.features[i]) {
                const f = this.features[i];
                f.isMounted ? f.update() : (f.mount(),
                f.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : It()
    }
    getStaticValue(i) {
        return this.latestValues[i]
    }
    setStaticValue(i, s) {
        this.latestValues[i] = s
    }
    update(i, s) {
        (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = i,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = s;
        for (let r = 0; r < vg.length; r++) {
            const o = vg[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const f = "on" + o
              , d = i[f];
            d && (this.propEventSubscriptions[o] = this.on(o, d))
        }
        this.prevMotionValues = PA(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(i) {
        return this.props.variants ? this.props.variants[i] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(i) {
        const s = this.getClosestVariantNode();
        if (s)
            return s.variantChildren && s.variantChildren.add(i),
            () => s.variantChildren.delete(i)
    }
    addValue(i, s) {
        const r = this.values.get(i);
        s !== r && (r && this.removeValue(i),
        this.bindToMotionValue(i, s),
        this.values.set(i, s),
        this.latestValues[i] = s.get())
    }
    removeValue(i) {
        this.values.delete(i);
        const s = this.valueSubscriptions.get(i);
        s && (s(),
        this.valueSubscriptions.delete(i)),
        delete this.latestValues[i],
        this.removeValueFromRenderState(i, this.renderState)
    }
    hasValue(i) {
        return this.values.has(i)
    }
    getValue(i, s) {
        if (this.props.values && this.props.values[i])
            return this.props.values[i];
        let r = this.values.get(i);
        return r === void 0 && s !== void 0 && (r = Di(s === null ? void 0 : s, {
            owner: this
        }),
        this.addValue(i, r)),
        r
    }
    readValue(i, s) {
        let r = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
        return r != null && (typeof r == "string" && ($0(r) || I0(r)) ? r = parseFloat(r) : !YA(r) && en.test(s) && (r = Xv(i, s)),
        this.setBaseTarget(i, oe(r) ? r.get() : r)),
        oe(r) ? r.get() : r
    }
    setBaseTarget(i, s) {
        this.baseTarget[i] = s
    }
    getBaseTarget(i) {
        const {initial: s} = this.props;
        let r;
        if (typeof s == "string" || typeof s == "object") {
            const f = dd(this.props, s, this.presenceContext?.custom);
            f && (r = f[i])
        }
        if (s && r !== void 0)
            return r;
        const o = this.getBaseTargetFromProps(this.props, i);
        return o !== void 0 && !oe(o) ? o : this.initialValues[i] !== void 0 && r === void 0 ? void 0 : this.baseTarget[i]
    }
    on(i, s) {
        return this.events[i] || (this.events[i] = new td),
        this.events[i].add(s)
    }
    notify(i, ...s) {
        this.events[i] && this.events[i].notify(...s)
    }
    scheduleRenderMicrotask() {
        pd.render(this.render)
    }
}
class t1 extends FA {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = EA
    }
    sortInstanceNodePosition(i, s) {
        return i.compareDocumentPosition(s) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(i, s) {
        const r = i.style;
        return r ? r[s] : void 0
    }
    removeValueFromRenderState(i, {vars: s, style: r}) {
        delete s[i],
        delete r[i]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: i} = this.props;
        oe(i) && (this.childSubscription = i.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }
        ))
    }
}
class ca {
    constructor(i) {
        this.isMounted = !1,
        this.node = i
    }
    update() {}
}
function e1({top: n, left: i, right: s, bottom: r}) {
    return {
        x: {
            min: i,
            max: s
        },
        y: {
            min: n,
            max: r
        }
    }
}
function JA({x: n, y: i}) {
    return {
        top: i.min,
        right: n.max,
        bottom: i.max,
        left: n.min
    }
}
function $A(n, i) {
    if (!i)
        return n;
    const s = i({
        x: n.left,
        y: n.top
    })
      , r = i({
        x: n.right,
        y: n.bottom
    });
    return {
        top: s.y,
        left: s.x,
        bottom: r.y,
        right: r.x
    }
}
function Fc(n) {
    return n === void 0 || n === 1
}
function Nf({scale: n, scaleX: i, scaleY: s}) {
    return !Fc(n) || !Fc(i) || !Fc(s)
}
function _a(n) {
    return Nf(n) || n1(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function n1(n) {
    return bg(n.x) || bg(n.y)
}
function bg(n) {
    return n && n !== "0%"
}
function $r(n, i, s) {
    const r = n - s
      , o = i * r;
    return s + o
}
function Sg(n, i, s, r, o) {
    return o !== void 0 && (n = $r(n, o, r)),
    $r(n, s, r) + i
}
function _f(n, i=0, s=1, r, o) {
    n.min = Sg(n.min, i, s, r, o),
    n.max = Sg(n.max, i, s, r, o)
}
function a1(n, {x: i, y: s}) {
    _f(n.x, i.translate, i.scale, i.originPoint),
    _f(n.y, s.translate, s.scale, s.originPoint)
}
const xg = .999999999999
  , Tg = 1.0000000000001;
function WA(n, i, s, r=!1) {
    const o = s.length;
    if (!o)
        return;
    i.x = i.y = 1;
    let f, d;
    for (let h = 0; h < o; h++) {
        f = s[h],
        d = f.projectionDelta;
        const {visualElement: y} = f.options;
        y && y.props.style && y.props.style.display === "contents" || (r && f.options.layoutScroll && f.scroll && f !== f.root && (fn(n.x, -f.scroll.offset.x),
        fn(n.y, -f.scroll.offset.y)),
        d && (i.x *= d.x.scale,
        i.y *= d.y.scale,
        a1(n, d)),
        r && _a(f.latestValues) && Br(n, f.latestValues, f.layout?.layoutBox))
    }
    i.x < Tg && i.x > xg && (i.x = 1),
    i.y < Tg && i.y > xg && (i.y = 1)
}
function fn(n, i) {
    n.min += i,
    n.max += i
}
function Eg(n, i, s, r, o=.5) {
    const f = Ut(n.min, n.max, o);
    _f(n, i, s, f, r)
}
function Ag(n, i) {
    return typeof n == "string" ? parseFloat(n) / 100 * (i.max - i.min) : n
}
function Br(n, i, s) {
    const r = s ?? n;
    Eg(n.x, Ag(i.x, r.x), i.scaleX, i.scale, i.originX),
    Eg(n.y, Ag(i.y, r.y), i.scaleY, i.scale, i.originY)
}
function i1(n, i) {
    return e1($A(n.getBoundingClientRect(), i))
}
function IA(n, i, s) {
    const r = i1(n, s)
      , {scroll: o} = i;
    return o && (fn(r.x, o.offset.x),
    fn(r.y, o.offset.y)),
    r
}
const tw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , ew = Ui.length;
function nw(n, i, s) {
    let r = ""
      , o = !0;
    for (let f = 0; f < ew; f++) {
        const d = Ui[f]
          , h = n[d];
        if (h === void 0)
            continue;
        let y = !0;
        if (typeof h == "number")
            y = h === (d.startsWith("scale") ? 1 : 0);
        else {
            const m = parseFloat(h);
            y = d.startsWith("scale") ? m === 1 : m === 0
        }
        if (!y || s) {
            const m = Kv(h, md[d]);
            if (!y) {
                o = !1;
                const g = tw[d] || d;
                r += `${g}(${m}) `
            }
            s && (i[d] = m)
        }
    }
    return r = r.trim(),
    s ? r = s(i, o ? "" : r) : o && (r = "none"),
    r
}
function Sd(n, i, s) {
    const {style: r, vars: o, transformOrigin: f} = n;
    let d = !1
      , h = !1;
    for (const y in i) {
        const m = i[y];
        if (Bi.has(y)) {
            d = !0;
            continue
        } else if (mv(y)) {
            o[y] = m;
            continue
        } else {
            const g = Kv(m, md[y]);
            y.startsWith("origin") ? (h = !0,
            f[y] = g) : r[y] = g
        }
    }
    if (i.transform || (d || s ? r.transform = nw(i, n.transform, s) : r.transform && (r.transform = "none")),
    h) {
        const {originX: y="50%", originY: m="50%", originZ: g=0} = f;
        r.transformOrigin = `${y} ${m} ${g}`
    }
}
function l1(n, {style: i, vars: s}, r, o) {
    const f = n.style;
    let d;
    for (d in i)
        f[d] = i[d];
    o?.applyProjectionStyles(f, r);
    for (d in s)
        f.setProperty(d, s[d])
}
function wg(n, i) {
    return i.max === i.min ? 0 : n / (i.max - i.min) * 100
}
const Vl = {
    correct: (n, i) => {
        if (!i.target)
            return n;
        if (typeof n == "string")
            if (et.test(n))
                n = parseFloat(n);
            else
                return n;
        const s = wg(n, i.target.x)
          , r = wg(n, i.target.y);
        return `${s}% ${r}%`
    }
}
  , aw = {
    correct: (n, {treeScale: i, projectionDelta: s}) => {
        const r = n
          , o = en.parse(n);
        if (o.length > 5)
            return r;
        const f = en.createTransformer(n)
          , d = typeof o[0] != "number" ? 1 : 0
          , h = s.x.scale * i.x
          , y = s.y.scale * i.y;
        o[0 + d] /= h,
        o[1 + d] /= y;
        const m = Ut(h, y, .5);
        return typeof o[2 + d] == "number" && (o[2 + d] /= m),
        typeof o[3 + d] == "number" && (o[3 + d] /= m),
        f(o)
    }
}
  , jf = {
    borderRadius: {
        ...Vl,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Vl,
    borderTopRightRadius: Vl,
    borderBottomLeftRadius: Vl,
    borderBottomRightRadius: Vl,
    boxShadow: aw
};
function s1(n, {layout: i, layoutId: s}) {
    return Bi.has(n) || n.startsWith("origin") || (i || s !== void 0) && (!!jf[n] || n === "opacity")
}
function xd(n, i, s) {
    const r = n.style
      , o = i?.style
      , f = {};
    if (!r)
        return f;
    for (const d in r)
        (oe(r[d]) || o && oe(o[d]) || s1(d, n) || s?.getValue(d)?.liveStyle !== void 0) && (f[d] = r[d]);
    return f
}
function iw(n) {
    return window.getComputedStyle(n)
}
class lw extends t1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = l1
    }
    readValueFromInstance(i, s) {
        if (Bi.has(s))
            return this.projection?.isProjecting ? bf(s) : wE(i, s);
        {
            const r = iw(i)
              , o = (mv(s) ? r.getPropertyValue(s) : r[s]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(i, {transformPagePoint: s}) {
        return i1(i, s)
    }
    build(i, s, r) {
        Sd(i, s, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(i, s, r) {
        return xd(i, s, r)
    }
}
const sw = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , rw = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function ow(n, i, s=1, r=0, o=!0) {
    n.pathLength = 1;
    const f = o ? sw : rw;
    n[f.offset] = `${-r}`,
    n[f.array] = `${i} ${s}`
}
const uw = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function r1(n, {attrX: i, attrY: s, attrScale: r, pathLength: o, pathSpacing: f=1, pathOffset: d=0, ...h}, y, m, g) {
    if (Sd(n, h, m),
    y) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style,
    n.style = {};
    const {attrs: v, style: S} = n;
    v.transform && (S.transform = v.transform,
    delete v.transform),
    (S.transform || v.transformOrigin) && (S.transformOrigin = v.transformOrigin ?? "50% 50%",
    delete v.transformOrigin),
    S.transform && (S.transformBox = g?.transformBox ?? "fill-box",
    delete v.transformBox);
    for (const w of uw)
        v[w] !== void 0 && (S[w] = v[w],
        delete v[w]);
    i !== void 0 && (v.x = i),
    s !== void 0 && (v.y = s),
    r !== void 0 && (v.scale = r),
    o !== void 0 && ow(v, o, f, d, !1)
}
const o1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , u1 = n => typeof n == "string" && n.toLowerCase() === "svg";
function cw(n, i, s, r) {
    l1(n, i, void 0, r);
    for (const o in i.attrs)
        n.setAttribute(o1.has(o) ? o : hd(o), i.attrs[o])
}
function c1(n, i, s) {
    const r = xd(n, i, s);
    for (const o in n)
        if (oe(n[o]) || oe(i[o])) {
            const f = Ui.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            r[f] = n[o]
        }
    return r
}
class fw extends t1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = It
    }
    getBaseTargetFromProps(i, s) {
        return i[s]
    }
    readValueFromInstance(i, s) {
        if (Bi.has(s)) {
            const r = Yv(s);
            return r && r.default || 0
        }
        return s = o1.has(s) ? s : hd(s),
        i.getAttribute(s)
    }
    scrapeMotionValuesFromProps(i, s, r) {
        return c1(i, s, r)
    }
    build(i, s, r) {
        r1(i, s, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(i, s, r, o) {
        cw(i, s, r, o)
    }
    mount(i) {
        this.isSVGTag = u1(i.tagName),
        super.mount(i)
    }
}
const dw = bd.length;
function f1(n) {
    if (!n)
        return;
    if (!n.isControllingVariants) {
        const s = n.parent ? f1(n.parent) || {} : {};
        return n.props.initial !== void 0 && (s.initial = n.props.initial),
        s
    }
    const i = {};
    for (let s = 0; s < dw; s++) {
        const r = bd[s]
          , o = n.props[r];
        (Kl(o) || o === !1) && (i[r] = o)
    }
    return i
}
function d1(n, i) {
    if (!Array.isArray(i))
        return !1;
    const s = i.length;
    if (s !== n.length)
        return !1;
    for (let r = 0; r < s; r++)
        if (i[r] !== n[r])
            return !1;
    return !0
}
const hw = [...vd].reverse()
  , mw = vd.length;
function pw(n) {
    return i => Promise.all(i.map( ({animation: s, options: r}) => dA(n, s, r)))
}
function yw(n) {
    let i = pw(n)
      , s = Rg()
      , r = !0
      , o = !1;
    const f = m => (g, v) => {
        const S = Ua(n, v, m === "exit" ? n.presenceContext?.custom : void 0);
        if (S) {
            const {transition: w, transitionEnd: x, ...C} = S;
            g = {
                ...g,
                ...C,
                ...x
            }
        }
        return g
    }
    ;
    function d(m) {
        i = m(n)
    }
    function h(m) {
        const {props: g} = n
          , v = f1(n.parent) || {}
          , S = []
          , w = new Set;
        let x = {}
          , C = 1 / 0;
        for (let _ = 0; _ < mw; _++) {
            const k = hw[_]
              , U = s[k]
              , X = g[k] !== void 0 ? g[k] : v[k]
              , P = Kl(X)
              , I = k === m ? U.isActive : null;
            I === !1 && (C = _);
            let K = X === v[k] && X !== g[k] && P;
            if (K && (r || o) && n.manuallyAnimateOnMount && (K = !1),
            U.protectedKeys = {
                ...x
            },
            !U.isActive && I === null || !X && !U.prevProp || so(X) || typeof X == "boolean")
                continue;
            if (k === "exit" && U.isActive && I !== !0) {
                U.prevResolvedValues && (x = {
                    ...x,
                    ...U.prevResolvedValues
                });
                continue
            }
            const J = gw(U.prevProp, X);
            let at = J || k === m && U.isActive && !K && P || _ > C && P
              , tt = !1;
            const dt = Array.isArray(X) ? X : [X];
            let ht = dt.reduce(f(k), {});
            I === !1 && (ht = {});
            const {prevResolvedValues: zt={}} = U
              , At = {
                ...zt,
                ...ht
            }
              , xt = F => {
                at = !0,
                w.has(F) && (tt = !0,
                w.delete(F)),
                U.needsAnimating[F] = !0;
                const ot = n.getValue(F);
                ot && (ot.liveStyle = !1)
            }
            ;
            for (const F in At) {
                const ot = ht[F]
                  , mt = zt[F];
                if (x.hasOwnProperty(F))
                    continue;
                let R = !1;
                wf(ot) && wf(mt) ? R = !d1(ot, mt) : R = ot !== mt,
                R ? ot != null ? xt(F) : w.add(F) : ot !== void 0 && w.has(F) ? xt(F) : U.protectedKeys[F] = !0
            }
            U.prevProp = X,
            U.prevResolvedValues = ht,
            U.isActive && (x = {
                ...x,
                ...ht
            }),
            (r || o) && n.blockInitialAnimation && (at = !1);
            const L = K && J;
            at && (!L || tt) && S.push(...dt.map(F => {
                const ot = {
                    type: k
                };
                if (typeof F == "string" && (r || o) && !L && n.manuallyAnimateOnMount && n.parent) {
                    const {parent: mt} = n
                      , R = Ua(mt, F);
                    if (mt.enteringChildren && R) {
                        const {delayChildren: q} = R.transition || {};
                        ot.delay = zv(mt.enteringChildren, n, q)
                    }
                }
                return {
                    animation: F,
                    options: ot
                }
            }
            ))
        }
        if (w.size) {
            const _ = {};
            if (typeof g.initial != "boolean") {
                const k = Ua(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
                k && k.transition && (_.transition = k.transition)
            }
            w.forEach(k => {
                const U = n.getBaseTarget(k)
                  , X = n.getValue(k);
                X && (X.liveStyle = !0),
                _[k] = U ?? null
            }
            ),
            S.push({
                animation: _
            })
        }
        let T = !!S.length;
        return r && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (T = !1),
        r = !1,
        o = !1,
        T ? i(S) : Promise.resolve()
    }
    function y(m, g) {
        if (s[m].isActive === g)
            return Promise.resolve();
        n.variantChildren?.forEach(S => S.animationState?.setActive(m, g)),
        s[m].isActive = g;
        const v = h(m);
        for (const S in s)
            s[S].protectedKeys = {};
        return v
    }
    return {
        animateChanges: h,
        setActive: y,
        setAnimateFunction: d,
        getState: () => s,
        reset: () => {
            s = Rg(),
            o = !0
        }
    }
}
function gw(n, i) {
    return typeof i == "string" ? i !== n : Array.isArray(i) ? !d1(i, n) : !1
}
function Oa(n=!1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Rg() {
    return {
        animate: Oa(!0),
        whileInView: Oa(),
        whileHover: Oa(),
        whileTap: Oa(),
        whileDrag: Oa(),
        whileFocus: Oa(),
        exit: Oa()
    }
}
function zf(n, i) {
    n.min = i.min,
    n.max = i.max
}
function Ie(n, i) {
    zf(n.x, i.x),
    zf(n.y, i.y)
}
function Cg(n, i) {
    n.translate = i.translate,
    n.scale = i.scale,
    n.originPoint = i.originPoint,
    n.origin = i.origin
}
const h1 = 1e-4
  , vw = 1 - h1
  , bw = 1 + h1
  , m1 = .01
  , Sw = 0 - m1
  , xw = 0 + m1;
function me(n) {
    return n.max - n.min
}
function Tw(n, i, s) {
    return Math.abs(n - i) <= s
}
function Mg(n, i, s, r=.5) {
    n.origin = r,
    n.originPoint = Ut(i.min, i.max, n.origin),
    n.scale = me(s) / me(i),
    n.translate = Ut(s.min, s.max, n.origin) - n.originPoint,
    (n.scale >= vw && n.scale <= bw || isNaN(n.scale)) && (n.scale = 1),
    (n.translate >= Sw && n.translate <= xw || isNaN(n.translate)) && (n.translate = 0)
}
function ql(n, i, s, r) {
    Mg(n.x, i.x, s.x, r ? r.originX : void 0),
    Mg(n.y, i.y, s.y, r ? r.originY : void 0)
}
function Dg(n, i, s, r=0) {
    const o = r ? Ut(s.min, s.max, r) : s.min;
    n.min = o + i.min,
    n.max = n.min + me(i)
}
function Ew(n, i, s, r) {
    Dg(n.x, i.x, s.x, r?.x),
    Dg(n.y, i.y, s.y, r?.y)
}
function Og(n, i, s, r=0) {
    const o = r ? Ut(s.min, s.max, r) : s.min;
    n.min = i.min - o,
    n.max = n.min + me(i)
}
function Wr(n, i, s, r) {
    Og(n.x, i.x, s.x, r?.x),
    Og(n.y, i.y, s.y, r?.y)
}
function Ng(n, i, s, r, o) {
    return n -= i,
    n = $r(n, 1 / s, r),
    o !== void 0 && (n = $r(n, 1 / o, r)),
    n
}
function Aw(n, i=0, s=1, r=.5, o, f=n, d=n) {
    if (hn.test(i) && (i = parseFloat(i),
    i = Ut(d.min, d.max, i / 100) - d.min),
    typeof i != "number")
        return;
    let h = Ut(f.min, f.max, r);
    n === f && (h -= i),
    n.min = Ng(n.min, i, s, h, o),
    n.max = Ng(n.max, i, s, h, o)
}
function _g(n, i, [s,r,o], f, d) {
    Aw(n, i[s], i[r], i[o], i.scale, f, d)
}
const ww = ["x", "scaleX", "originX"]
  , Rw = ["y", "scaleY", "originY"];
function jg(n, i, s, r) {
    _g(n.x, i, ww, s ? s.x : void 0, r ? r.x : void 0),
    _g(n.y, i, Rw, s ? s.y : void 0, r ? r.y : void 0)
}
function zg(n) {
    return n.translate === 0 && n.scale === 1
}
function p1(n) {
    return zg(n.x) && zg(n.y)
}
function Lg(n, i) {
    return n.min === i.min && n.max === i.max
}
function Cw(n, i) {
    return Lg(n.x, i.x) && Lg(n.y, i.y)
}
function Vg(n, i) {
    return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max)
}
function y1(n, i) {
    return Vg(n.x, i.x) && Vg(n.y, i.y)
}
function Ug(n) {
    return me(n.x) / me(n.y)
}
function Bg(n, i) {
    return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint
}
function cn(n) {
    return [n("x"), n("y")]
}
function Mw(n, i, s) {
    let r = "";
    const o = n.x.translate / i.x
      , f = n.y.translate / i.y
      , d = s?.z || 0;
    if ((o || f || d) && (r = `translate3d(${o}px, ${f}px, ${d}px) `),
    (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `),
    s) {
        const {transformPerspective: m, rotate: g, rotateX: v, rotateY: S, skewX: w, skewY: x} = s;
        m && (r = `perspective(${m}px) ${r}`),
        g && (r += `rotate(${g}deg) `),
        v && (r += `rotateX(${v}deg) `),
        S && (r += `rotateY(${S}deg) `),
        w && (r += `skewX(${w}deg) `),
        x && (r += `skewY(${x}deg) `)
    }
    const h = n.x.scale * i.x
      , y = n.y.scale * i.y;
    return (h !== 1 || y !== 1) && (r += `scale(${h}, ${y})`),
    r || "none"
}
const g1 = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  , Dw = g1.length
  , Hg = n => typeof n == "string" ? parseFloat(n) : n
  , kg = n => typeof n == "number" || et.test(n);
function Ow(n, i, s, r, o, f) {
    o ? (n.opacity = Ut(0, s.opacity ?? 1, Nw(r)),
    n.opacityExit = Ut(i.opacity ?? 1, 0, _w(r))) : f && (n.opacity = Ut(i.opacity ?? 1, s.opacity ?? 1, r));
    for (let d = 0; d < Dw; d++) {
        const h = g1[d];
        let y = qg(i, h)
          , m = qg(s, h);
        if (y === void 0 && m === void 0)
            continue;
        y || (y = 0),
        m || (m = 0),
        y === 0 || m === 0 || kg(y) === kg(m) ? (n[h] = Math.max(Ut(Hg(y), Hg(m), r), 0),
        (hn.test(m) || hn.test(y)) && (n[h] += "%")) : n[h] = m
    }
    (i.rotate || s.rotate) && (n.rotate = Ut(i.rotate || 0, s.rotate || 0, r))
}
function qg(n, i) {
    return n[i] !== void 0 ? n[i] : n.borderRadius
}
const Nw = v1(0, .5, ov)
  , _w = v1(.5, .95, Fe);
function v1(n, i, s) {
    return r => r < n ? 0 : r > i ? 1 : s(Xl(n, i, r))
}
function jw(n, i, s) {
    const r = oe(n) ? n : Di(n);
    return r.start(fd("", r, i, s)),
    r.animation
}
function Ql(n, i, s, r={
    passive: !0
}) {
    return n.addEventListener(i, s, r),
    () => n.removeEventListener(i, s)
}
const zw = (n, i) => n.depth - i.depth;
class Lw {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(i) {
        Wf(this.children, i),
        this.isDirty = !0
    }
    remove(i) {
        Pr(this.children, i),
        this.isDirty = !0
    }
    forEach(i) {
        this.isDirty && this.children.sort(zw),
        this.isDirty = !1,
        this.children.forEach(i)
    }
}
function Vw(n, i) {
    const s = he.now()
      , r = ({timestamp: o}) => {
        const f = o - s;
        f >= i && (ua(r),
        n(f - i))
    }
    ;
    return jt.setup(r, !0),
    () => ua(r)
}
function Hr(n) {
    return oe(n) ? n.get() : n
}
class Uw {
    constructor() {
        this.members = []
    }
    add(i) {
        Wf(this.members, i);
        for (let s = this.members.length - 1; s >= 0; s--) {
            const r = this.members[s];
            if (r === i || r === this.lead || r === this.prevLead)
                continue;
            const o = r.instance;
            (!o || o.isConnected === !1) && !r.snapshot && (Pr(this.members, r),
            r.unmount())
        }
        i.scheduleRender()
    }
    remove(i) {
        if (Pr(this.members, i),
        i === this.prevLead && (this.prevLead = void 0),
        i === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }
    relegate(i) {
        for (let s = this.members.indexOf(i) - 1; s >= 0; s--) {
            const r = this.members[s];
            if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
                return this.promote(r),
                !0
        }
        return !1
    }
    promote(i, s) {
        const r = this.lead;
        if (i !== r && (this.prevLead = r,
        this.lead = i,
        i.show(),
        r)) {
            r.updateSnapshot(),
            i.scheduleRender();
            const {layoutDependency: o} = r.options
              , {layoutDependency: f} = i.options;
            (o === void 0 || o !== f) && (i.resumeFrom = r,
            s && (r.preserveOpacity = !0),
            r.snapshot && (i.snapshot = r.snapshot,
            i.snapshot.latestValues = r.animationValues || r.latestValues),
            i.root?.isUpdating && (i.isLayoutDirty = !0)),
            i.options.crossfade === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(i => {
            i.options.onExitComplete?.(),
            i.resumingFrom?.options.onExitComplete?.()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(i => i.instance && i.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        this.lead?.snapshot && (this.lead.snapshot = void 0)
    }
}
const kr = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , Jc = ["", "X", "Y", "Z"]
  , Bw = 1e3;
let Hw = 0;
function $c(n, i, s, r) {
    const {latestValues: o} = i;
    o[n] && (s[n] = o[n],
    i.setStaticValue(n, 0),
    r && (r[n] = 0))
}
function b1(n) {
    if (n.hasCheckedOptimisedAppear = !0,
    n.root === n)
        return;
    const {visualElement: i} = n.options;
    if (!i)
        return;
    const s = Hv(i);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {layout: o, layoutId: f} = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", jt, !(o || f))
    }
    const {parent: r} = n;
    r && !r.hasCheckedOptimisedAppear && b1(r)
}
function S1({attachResizeListener: n, defaultParent: i, measureScroll: s, checkIsScrollRoot: r, resetTransform: o}) {
    return class {
        constructor(d={}, h=i?.()) {
            this.id = Hw++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(Gw),
                this.nodes.forEach(Zw),
                this.nodes.forEach(Fw),
                this.nodes.forEach(Yw)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = d,
            this.root = h ? h.root || h : this,
            this.path = h ? [...h.path, h] : [],
            this.parent = h,
            this.depth = h ? h.depth + 1 : 0;
            for (let y = 0; y < this.path.length; y++)
                this.path[y].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Lw)
        }
        addEventListener(d, h) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new td),
            this.eventHandlers.get(d).add(h)
        }
        notifyListeners(d, ...h) {
            const y = this.eventHandlers.get(d);
            y && y.notify(...h)
        }
        hasListeners(d) {
            return this.eventHandlers.has(d)
        }
        mount(d) {
            if (this.instance)
                return;
            this.isSVG = gd(d) && !qA(d),
            this.instance = d;
            const {layoutId: h, layout: y, visualElement: m} = this.options;
            if (m && !m.current && m.mount(d),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (y || h) && (this.isLayoutDirty = !0),
            n) {
                let g, v = 0;
                const S = () => this.root.updateBlockedByResize = !1;
                jt.read( () => {
                    v = window.innerWidth
                }
                ),
                n(d, () => {
                    const w = window.innerWidth;
                    w !== v && (v = w,
                    this.root.updateBlockedByResize = !0,
                    g && g(),
                    g = Vw(S, 250),
                    kr.hasAnimatedSinceResize && (kr.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Xg)))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && m && (h || y) && this.addEventListener("didUpdate", ({delta: g, hasLayoutChanged: v, hasRelativeLayoutChanged: S, layout: w}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || m.getDefaultTransition() || tR
                  , {onLayoutAnimationStart: C, onLayoutAnimationComplete: T} = m.getProps()
                  , _ = !this.targetLayout || !y1(this.targetLayout, w)
                  , k = !v && S;
                if (this.options.layoutRoot || this.resumeFrom || k || v && (_ || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const U = {
                        ...cd(x, "layout"),
                        onPlay: C,
                        onComplete: T
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (U.delay = 0,
                    U.type = !1),
                    this.startAnimation(U),
                    this.setAnimationOrigin(g, k)
                } else
                    v || Xg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = w
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const d = this.getStack();
            d && d.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            ua(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Jw),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: d} = this.options;
            return d && d.getProps().transformTemplate
        }
        willUpdate(d=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && b1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                v.shouldResetTransform = !0,
                (typeof v.latestValues.x == "string" || typeof v.latestValues.y == "string") && (v.isLayoutDirty = !0),
                v.updateScroll("snapshot"),
                v.options.layoutRoot && v.willUpdate(!1)
            }
            const {layoutId: h, layout: y} = this.options;
            if (h === void 0 && !y)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            d && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                const y = this.updateBlockedByResize;
                this.unblockUpdate(),
                this.updateBlockedByResize = !1,
                this.clearAllSnapshots(),
                y && this.nodes.forEach(Pw),
                this.nodes.forEach(Gg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Yg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(Kw),
            this.nodes.forEach(Qw),
            this.nodes.forEach(kw),
            this.nodes.forEach(qw)) : this.nodes.forEach(Yg),
            this.clearAllSnapshots();
            const h = he.now();
            re.delta = mn(0, 1e3 / 60, h - re.timestamp),
            re.timestamp = h,
            re.isProcessing = !0,
            Gc.update.process(re),
            Gc.preRender.process(re),
            Gc.render.process(re),
            re.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            pd.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Xw),
            this.sharedNodes.forEach($w)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            jt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            jt.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !me(this.snapshot.measuredBox.x) && !me(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let y = 0; y < this.path.length; y++)
                    this.path[y].updateScroll();
            const d = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected || (this.layoutCorrected = It()),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: h} = this.options;
            h && h.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }
        updateScroll(d="measure") {
            let h = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (h = !1),
            h && this.instance) {
                const y = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: y,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : y
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , h = this.projectionDelta && !p1(this.projectionDelta)
              , y = this.getTransformTemplate()
              , m = y ? y(this.latestValues, "") : void 0
              , g = m !== this.prevTransformTemplateValue;
            d && this.instance && (h || _a(this.latestValues) || g) && (o(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(d=!0) {
            const h = this.measurePageBox();
            let y = this.removeElementScroll(h);
            return d && (y = this.removeTransform(y)),
            eR(y),
            {
                animationId: this.root.animationId,
                measuredBox: h,
                layoutBox: y,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: d} = this.options;
            if (!d)
                return It();
            const h = d.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(nR))) {
                const {scroll: m} = this.root;
                m && (fn(h.x, m.offset.x),
                fn(h.y, m.offset.y))
            }
            return h
        }
        removeElementScroll(d) {
            const h = It();
            if (Ie(h, d),
            this.scroll?.wasRoot)
                return h;
            for (let y = 0; y < this.path.length; y++) {
                const m = this.path[y]
                  , {scroll: g, options: v} = m;
                m !== this.root && g && v.layoutScroll && (g.wasRoot && Ie(h, d),
                fn(h.x, g.offset.x),
                fn(h.y, g.offset.y))
            }
            return h
        }
        applyTransform(d, h=!1, y) {
            const m = y || It();
            Ie(m, d);
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                !h && v.options.layoutScroll && v.scroll && v !== v.root && (fn(m.x, -v.scroll.offset.x),
                fn(m.y, -v.scroll.offset.y)),
                _a(v.latestValues) && Br(m, v.latestValues, v.layout?.layoutBox)
            }
            return _a(this.latestValues) && Br(m, this.latestValues, this.layout?.layoutBox),
            m
        }
        removeTransform(d) {
            const h = It();
            Ie(h, d);
            for (let y = 0; y < this.path.length; y++) {
                const m = this.path[y];
                if (!_a(m.latestValues))
                    continue;
                let g;
                m.instance && (Nf(m.latestValues) && m.updateSnapshot(),
                g = It(),
                Ie(g, m.measurePageBox())),
                jg(h, m.latestValues, m.snapshot?.layoutBox, g)
            }
            return _a(this.latestValues) && jg(h, this.latestValues),
            h
        }
        setTargetDelta(d) {
            this.targetDelta = d,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(d) {
            this.options = {
                ...this.options,
                ...d,
                crossfade: d.crossfade !== void 0 ? d.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== re.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(d=!1) {
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const y = !!this.resumingFrom || this !== h;
            if (!(d || y && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: g, layoutId: v} = this.options;
            if (!this.layout || !(g || v))
                return;
            this.resolvedRelativeTargetAt = re.timestamp;
            const S = this.getClosestProjectingParent();
            S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = It(),
            this.targetWithTransforms = It()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            Ew(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Ie(this.target, this.layout.layoutBox),
            a1(this.target, this.targetDelta)) : Ie(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Nf(this.parent.latestValues) || n1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(d, h, y) {
            this.relativeParent = d,
            this.linkedParentVersion = d.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = It(),
            this.relativeTargetOrigin = It(),
            Wr(this.relativeTargetOrigin, h, y, this.options.layoutAnchor || void 0),
            Ie(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            const d = this.getLead()
              , h = !!this.resumingFrom || this !== d;
            let y = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (y = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (y = !1),
            this.resolvedRelativeTargetAt === re.timestamp && (y = !1),
            y)
                return;
            const {layout: m, layoutId: g} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(m || g))
                return;
            Ie(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x
              , S = this.treeScale.y;
            WA(this.layoutCorrected, this.treeScale, this.path, h),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = It());
            const {target: w} = d;
            if (!w) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Cg(this.prevProjectionDelta.x, this.projectionDelta.x),
            Cg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            ql(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
            (this.treeScale.x !== v || this.treeScale.y !== S || !Bg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Bg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", w))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(d=!0) {
            if (this.options.visualElement?.scheduleRender(),
            d) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ci(),
            this.projectionDelta = Ci(),
            this.projectionDeltaWithTransform = Ci()
        }
        setAnimationOrigin(d, h=!1) {
            const y = this.snapshot
              , m = y ? y.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , v = Ci();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !h;
            const S = It()
              , w = y ? y.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , C = w !== x
              , T = this.getStack()
              , _ = !T || T.members.length <= 1
              , k = !!(C && !_ && this.options.crossfade === !0 && !this.path.some(Iw));
            this.animationProgress = 0;
            let U;
            this.mixTargetDelta = X => {
                const P = X / 1e3;
                Pg(v.x, d.x, P),
                Pg(v.y, d.y, P),
                this.setTargetDelta(v),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Wr(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0),
                Ww(this.relativeTarget, this.relativeTargetOrigin, S, P),
                U && Cw(this.relativeTarget, U) && (this.isProjectionDirty = !1),
                U || (U = It()),
                Ie(U, this.relativeTarget)),
                C && (this.animationValues = g,
                Ow(g, m, this.latestValues, P, k, _)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = P
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation && (ua(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = jt.update( () => {
                kr.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Di(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = jw(this.motionValue, [0, 1e3], {
                    ...d,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: h => {
                        this.mixTargetDelta(h),
                        d.onUpdate && d.onUpdate(h)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        d.onComplete && d.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const d = this.getStack();
            d && d.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Bw),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {targetWithTransforms: h, target: y, layout: m, latestValues: g} = d;
            if (!(!h || !y || !m)) {
                if (this !== d && this.layout && m && x1(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    y = this.target || It();
                    const v = me(this.layout.layoutBox.x);
                    y.x.min = d.target.x.min,
                    y.x.max = y.x.min + v;
                    const S = me(this.layout.layoutBox.y);
                    y.y.min = d.target.y.min,
                    y.y.max = y.y.min + S
                }
                Ie(h, y),
                Br(h, g),
                ql(this.projectionDeltaWithTransform, this.layoutCorrected, h, g)
            }
        }
        registerSharedNode(d, h) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new Uw),
            this.sharedNodes.get(d).add(h);
            const m = h.options.initialPromotionConfig;
            h.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(h) : void 0
            })
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }
        getLead() {
            const {layoutId: d} = this.options;
            return d ? this.getStack()?.lead || this : this
        }
        getPrevLead() {
            const {layoutId: d} = this.options;
            return d ? this.getStack()?.prevLead : void 0
        }
        getStack() {
            const {layoutId: d} = this.options;
            if (d)
                return this.root.sharedNodes.get(d)
        }
        promote({needsReset: d, transition: h, preserveFollowOpacity: y}={}) {
            const m = this.getStack();
            m && m.promote(this, y),
            d && (this.projectionDelta = void 0,
            this.needsReset = !0),
            h && this.setOptions({
                transition: h
            })
        }
        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: d} = this.options;
            if (!d)
                return;
            let h = !1;
            const {latestValues: y} = d;
            if ((y.z || y.rotate || y.rotateX || y.rotateY || y.rotateZ || y.skewX || y.skewY) && (h = !0),
            !h)
                return;
            const m = {};
            y.z && $c("z", d, m, this.animationValues);
            for (let g = 0; g < Jc.length; g++)
                $c(`rotate${Jc[g]}`, d, m, this.animationValues),
                $c(`skew${Jc[g]}`, d, m, this.animationValues);
            d.render();
            for (const g in m)
                d.setStaticValue(g, m[g]),
                this.animationValues && (this.animationValues[g] = m[g]);
            d.scheduleRender()
        }
        applyProjectionStyles(d, h) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                d.visibility = "hidden";
                return
            }
            const y = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                d.visibility = "",
                d.opacity = "",
                d.pointerEvents = Hr(h?.pointerEvents) || "",
                d.transform = y ? y(this.latestValues, "") : "none";
                return
            }
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                d.pointerEvents = Hr(h?.pointerEvents) || ""),
                this.hasProjected && !_a(this.latestValues) && (d.transform = y ? y({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            d.visibility = "";
            const g = m.animationValues || m.latestValues;
            this.applyTransformsToTarget();
            let v = Mw(this.projectionDeltaWithTransform, this.treeScale, g);
            y && (v = y(g, v)),
            d.transform = v;
            const {x: S, y: w} = this.projectionDelta;
            d.transformOrigin = `${S.origin * 100}% ${w.origin * 100}% 0`,
            m.animationValues ? d.opacity = m === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : d.opacity = m === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
            for (const x in jf) {
                if (g[x] === void 0)
                    continue;
                const {correct: C, applyTo: T, isCSSVariable: _} = jf[x]
                  , k = v === "none" ? g[x] : C(g[x], m);
                if (T) {
                    const U = T.length;
                    for (let X = 0; X < U; X++)
                        d[T[X]] = k
                } else
                    _ ? this.options.visualElement.renderState.vars[x] = k : d[x] = k
            }
            this.options.layoutId && (d.pointerEvents = m === this ? Hr(h?.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(d => d.currentAnimation?.stop()),
            this.root.nodes.forEach(Gg),
            this.root.sharedNodes.clear()
        }
    }
}
function kw(n) {
    n.updateLayout()
}
function qw(n) {
    const i = n.resumeFrom?.snapshot || n.snapshot;
    if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
        const {layoutBox: s, measuredBox: r} = n.layout
          , {animationType: o} = n.options
          , f = i.source !== n.layout.source;
        if (o === "size")
            cn(g => {
                const v = f ? i.measuredBox[g] : i.layoutBox[g]
                  , S = me(v);
                v.min = s[g].min,
                v.max = v.min + S
            }
            );
        else if (o === "x" || o === "y") {
            const g = o === "x" ? "y" : "x";
            zf(f ? i.measuredBox[g] : i.layoutBox[g], s[g])
        } else
            x1(o, i.layoutBox, s) && cn(g => {
                const v = f ? i.measuredBox[g] : i.layoutBox[g]
                  , S = me(s[g]);
                v.max = v.min + S,
                n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
                n.relativeTarget[g].max = n.relativeTarget[g].min + S)
            }
            );
        const d = Ci();
        ql(d, s, i.layoutBox);
        const h = Ci();
        f ? ql(h, n.applyTransform(r, !0), i.measuredBox) : ql(h, s, i.layoutBox);
        const y = !p1(d);
        let m = !1;
        if (!n.resumeFrom) {
            const g = n.getClosestProjectingParent();
            if (g && !g.resumeFrom) {
                const {snapshot: v, layout: S} = g;
                if (v && S) {
                    const w = n.options.layoutAnchor || void 0
                      , x = It();
                    Wr(x, i.layoutBox, v.layoutBox, w);
                    const C = It();
                    Wr(C, s, S.layoutBox, w),
                    y1(x, C) || (m = !0),
                    g.options.layoutRoot && (n.relativeTarget = C,
                    n.relativeTargetOrigin = x,
                    n.relativeParent = g)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: s,
            snapshot: i,
            delta: h,
            layoutDelta: d,
            hasLayoutChanged: y,
            hasRelativeLayoutChanged: m
        })
    } else if (n.isLead()) {
        const {onExitComplete: s} = n.options;
        s && s()
    }
    n.options.transition = void 0
}
function Gw(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function Yw(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function Xw(n) {
    n.clearSnapshot()
}
function Gg(n) {
    n.clearMeasurements()
}
function Pw(n) {
    n.isLayoutDirty = !0,
    n.updateLayout()
}
function Yg(n) {
    n.isLayoutDirty = !1
}
function Kw(n) {
    n.isAnimationBlocked && n.layout && !n.isLayoutDirty && (n.snapshot = n.layout,
    n.isLayoutDirty = !0)
}
function Qw(n) {
    const {visualElement: i} = n.options;
    i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform()
}
function Xg(n) {
    n.finishAnimation(),
    n.targetDelta = n.relativeTarget = n.target = void 0,
    n.isProjectionDirty = !0
}
function Zw(n) {
    n.resolveTargetDelta()
}
function Fw(n) {
    n.calcProjection()
}
function Jw(n) {
    n.resetSkewAndRotation()
}
function $w(n) {
    n.removeLeadSnapshot()
}
function Pg(n, i, s) {
    n.translate = Ut(i.translate, 0, s),
    n.scale = Ut(i.scale, 1, s),
    n.origin = i.origin,
    n.originPoint = i.originPoint
}
function Kg(n, i, s, r) {
    n.min = Ut(i.min, s.min, r),
    n.max = Ut(i.max, s.max, r)
}
function Ww(n, i, s, r) {
    Kg(n.x, i.x, s.x, r),
    Kg(n.y, i.y, s.y, r)
}
function Iw(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const tR = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Qg = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n)
  , Zg = Qg("applewebkit/") && !Qg("chrome/") ? Math.round : Fe;
function Fg(n) {
    n.min = Zg(n.min),
    n.max = Zg(n.max)
}
function eR(n) {
    Fg(n.x),
    Fg(n.y)
}
function x1(n, i, s) {
    return n === "position" || n === "preserve-aspect" && !Tw(Ug(i), Ug(s), .2)
}
function nR(n) {
    return n !== n.root && n.scroll?.wasRoot
}
const aR = S1({
    attachResizeListener: (n, i) => Ql(n, "resize", i),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
        y: document.documentElement.scrollTop || document.body?.scrollTop || 0
    }),
    checkIsScrollRoot: () => !0
})
  , Wc = {
    current: void 0
}
  , T1 = S1({
    measureScroll: n => ({
        x: n.scrollLeft,
        y: n.scrollTop
    }),
    defaultParent: () => {
        if (!Wc.current) {
            const n = new aR({});
            n.mount(window),
            n.setOptions({
                layoutScroll: !0
            }),
            Wc.current = n
        }
        return Wc.current
    }
    ,
    resetTransform: (n, i) => {
        n.style.transform = i !== void 0 ? i : "none"
    }
    ,
    checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
})
  , Td = A.createContext({
    transformPagePoint: n => n,
    isStatic: !1,
    reducedMotion: "never"
});
function Jg(n, i) {
    if (typeof n == "function")
        return n(i);
    n != null && (n.current = i)
}
function iR(...n) {
    return i => {
        let s = !1;
        const r = n.map(o => {
            const f = Jg(o, i);
            return !s && typeof f == "function" && (s = !0),
            f
        }
        );
        if (s)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const f = r[o];
                    typeof f == "function" ? f() : Jg(n[o], null)
                }
            }
    }
}
function lR(...n) {
    return A.useCallback(iR(...n), n)
}
class sR extends A.Component {
    getSnapshotBeforeUpdate(i) {
        const s = this.props.childRef.current;
        if (jr(s) && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = s.offsetParent
              , o = jr(r) && r.offsetWidth || 0
              , f = jr(r) && r.offsetHeight || 0
              , d = getComputedStyle(s)
              , h = this.props.sizeRef.current;
            h.height = parseFloat(d.height),
            h.width = parseFloat(d.width),
            h.top = s.offsetTop,
            h.left = s.offsetLeft,
            h.right = o - h.width - h.left,
            h.bottom = f - h.height - h.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function rR({children: n, isPresent: i, anchorX: s, anchorY: r, root: o, pop: f}) {
    const d = A.useId()
      , h = A.useRef(null)
      , y = A.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: m} = A.useContext(Td)
      , g = n.props?.ref ?? n?.ref
      , v = lR(h, g);
    return A.useInsertionEffect( () => {
        const {width: S, height: w, top: x, left: C, right: T, bottom: _} = y.current;
        if (i || f === !1 || !h.current || !S || !w)
            return;
        const k = s === "left" ? `left: ${C}` : `right: ${T}`
          , U = r === "bottom" ? `bottom: ${_}` : `top: ${x}`;
        h.current.dataset.motionPopId = d;
        const X = document.createElement("style");
        m && (X.nonce = m);
        const P = o ?? document.head;
        return P.appendChild(X),
        X.sheet && X.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${w}px !important;
            ${k}px !important;
            ${U}px !important;
          }
        `),
        () => {
            h.current?.removeAttribute("data-motion-pop-id"),
            P.contains(X) && P.removeChild(X)
        }
    }
    , [i]),
    M.jsx(sR, {
        isPresent: i,
        childRef: h,
        sizeRef: y,
        pop: f,
        children: f === !1 ? n : A.cloneElement(n, {
            ref: v
        })
    })
}
const oR = ({children: n, initial: i, isPresent: s, onExitComplete: r, custom: o, presenceAffectsLayout: f, mode: d, anchorX: h, anchorY: y, root: m}) => {
    const g = $f(uR)
      , v = A.useId();
    let S = !0
      , w = A.useMemo( () => (S = !1,
    {
        id: v,
        initial: i,
        isPresent: s,
        custom: o,
        onExitComplete: x => {
            g.set(x, !0);
            for (const C of g.values())
                if (!C)
                    return;
            r && r()
        }
        ,
        register: x => (g.set(x, !1),
        () => g.delete(x))
    }), [s, g, r]);
    return f && S && (w = {
        ...w
    }),
    A.useMemo( () => {
        g.forEach( (x, C) => g.set(C, !1))
    }
    , [s]),
    A.useEffect( () => {
        !s && !g.size && r && r()
    }
    , [s]),
    n = M.jsx(rR, {
        pop: d === "popLayout",
        isPresent: s,
        anchorX: h,
        anchorY: y,
        root: m,
        children: n
    }),
    M.jsx(io.Provider, {
        value: w,
        children: n
    })
}
;
function uR() {
    return new Map
}
function E1(n=!0) {
    const i = A.useContext(io);
    if (i === null)
        return [!0, null];
    const {isPresent: s, onExitComplete: r, register: o} = i
      , f = A.useId();
    A.useEffect( () => {
        if (n)
            return o(f)
    }
    , [n]);
    const d = A.useCallback( () => n && r && r(f), [f, r, n]);
    return !s && r ? [!1, d] : [!0]
}
const Rr = n => n.key || "";
function $g(n) {
    const i = [];
    return A.Children.forEach(n, s => {
        A.isValidElement(s) && i.push(s)
    }
    ),
    i
}
const cR = ({children: n, custom: i, initial: s=!0, onExitComplete: r, presenceAffectsLayout: o=!0, mode: f="sync", propagate: d=!1, anchorX: h="left", anchorY: y="top", root: m}) => {
    const [g,v] = E1(d)
      , S = A.useMemo( () => $g(n), [n])
      , w = d && !g ? [] : S.map(Rr)
      , x = A.useRef(!0)
      , C = A.useRef(S)
      , T = $f( () => new Map)
      , _ = A.useRef(new Set)
      , [k,U] = A.useState(S)
      , [X,P] = A.useState(S);
    J0( () => {
        x.current = !1,
        C.current = S;
        for (let J = 0; J < X.length; J++) {
            const at = Rr(X[J]);
            w.includes(at) ? (T.delete(at),
            _.current.delete(at)) : T.get(at) !== !0 && T.set(at, !1)
        }
    }
    , [X, w.length, w.join("-")]);
    const I = [];
    if (S !== k) {
        let J = [...S];
        for (let at = 0; at < X.length; at++) {
            const tt = X[at]
              , dt = Rr(tt);
            w.includes(dt) || (J.splice(at, 0, tt),
            I.push(tt))
        }
        return f === "wait" && I.length && (J = I),
        P($g(J)),
        U(S),
        null
    }
    const {forceRender: K} = A.useContext(Jf);
    return M.jsx(M.Fragment, {
        children: X.map(J => {
            const at = Rr(J)
              , tt = d && !g ? !1 : S === X || w.includes(at)
              , dt = () => {
                if (_.current.has(at))
                    return;
                if (T.has(at))
                    _.current.add(at),
                    T.set(at, !0);
                else
                    return;
                let ht = !0;
                T.forEach(zt => {
                    zt || (ht = !1)
                }
                ),
                ht && (K?.(),
                P(C.current),
                d && v?.(),
                r && r())
            }
            ;
            return M.jsx(oR, {
                isPresent: tt,
                initial: !x.current || s ? void 0 : !1,
                custom: i,
                presenceAffectsLayout: o,
                mode: f,
                root: m,
                onExitComplete: tt ? void 0 : dt,
                anchorX: h,
                anchorY: y,
                children: J
            }, at)
        }
        )
    })
}
  , A1 = A.createContext({
    strict: !1
})
  , Wg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let Ig = !1;
function fR() {
    if (Ig)
        return;
    const n = {};
    for (const i in Wg)
        n[i] = {
            isEnabled: s => Wg[i].some(r => !!s[r])
        };
    Iv(n),
    Ig = !0
}
function w1() {
    return fR(),
    ZA()
}
function dR(n) {
    const i = w1();
    for (const s in n)
        i[s] = {
            ...i[s],
            ...n[s]
        };
    Iv(i)
}
const hR = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function Ir(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || hR.has(n)
}
let R1 = n => !Ir(n);
function mR(n) {
    typeof n == "function" && (R1 = i => i.startsWith("on") ? !Ir(i) : n(i))
}
try {
    mR(require("@emotion/is-prop-valid").default)
} catch {}
function pR(n, i, s) {
    const r = {};
    for (const o in n)
        o === "values" && typeof n.values == "object" || oe(n[o]) || (R1(o) || s === !0 && Ir(o) || !i && !Ir(o) || n.draggable && o.startsWith("onDrag")) && (r[o] = n[o]);
    return r
}
const oo = A.createContext({});
function yR(n, i) {
    if (ro(n)) {
        const {initial: s, animate: r} = n;
        return {
            initial: s === !1 || Kl(s) ? s : void 0,
            animate: Kl(r) ? r : void 0
        }
    }
    return n.inherit !== !1 ? i : {}
}
function gR(n) {
    const {initial: i, animate: s} = yR(n, A.useContext(oo));
    return A.useMemo( () => ({
        initial: i,
        animate: s
    }), [t0(i), t0(s)])
}
function t0(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const Ed = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function C1(n, i, s) {
    for (const r in i)
        !oe(i[r]) && !s1(r, s) && (n[r] = i[r])
}
function vR({transformTemplate: n}, i) {
    return A.useMemo( () => {
        const s = Ed();
        return Sd(s, i, n),
        Object.assign({}, s.vars, s.style)
    }
    , [i])
}
function bR(n, i) {
    const s = n.style || {}
      , r = {};
    return C1(r, s, n),
    Object.assign(r, vR(n, i)),
    r
}
function SR(n, i) {
    const s = {}
      , r = bR(n, i);
    return n.drag && n.dragListener !== !1 && (s.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0),
    s.style = r,
    s
}
const M1 = () => ({
    ...Ed(),
    attrs: {}
});
function xR(n, i, s, r) {
    const o = A.useMemo( () => {
        const f = M1();
        return r1(f, i, u1(r), n.transformTemplate, n.style),
        {
            ...f.attrs,
            style: {
                ...f.style
            }
        }
    }
    , [i]);
    if (n.style) {
        const f = {};
        C1(f, n.style, n),
        o.style = {
            ...f,
            ...o.style
        }
    }
    return o
}
const TR = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Ad(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(TR.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
function ER(n, i, s, {latestValues: r}, o, f=!1, d) {
    const y = (d ?? Ad(n) ? xR : SR)(i, r, o, n)
      , m = pR(i, typeof n == "string", f)
      , g = n !== A.Fragment ? {
        ...m,
        ...y,
        ref: s
    } : {}
      , {children: v} = i
      , S = A.useMemo( () => oe(v) ? v.get() : v, [v]);
    return A.createElement(n, {
        ...g,
        children: S
    })
}
function AR({scrapeMotionValuesFromProps: n, createRenderState: i}, s, r, o) {
    return {
        latestValues: wR(s, r, o, n),
        renderState: i()
    }
}
function wR(n, i, s, r) {
    const o = {}
      , f = r(n, {});
    for (const S in f)
        o[S] = Hr(f[S]);
    let {initial: d, animate: h} = n;
    const y = ro(n)
      , m = $v(n);
    i && m && !y && n.inherit !== !1 && (d === void 0 && (d = i.initial),
    h === void 0 && (h = i.animate));
    let g = s ? s.initial === !1 : !1;
    g = g || d === !1;
    const v = g ? h : d;
    if (v && typeof v != "boolean" && !so(v)) {
        const S = Array.isArray(v) ? v : [v];
        for (let w = 0; w < S.length; w++) {
            const x = dd(n, S[w]);
            if (x) {
                const {transitionEnd: C, transition: T, ..._} = x;
                for (const k in _) {
                    let U = _[k];
                    if (Array.isArray(U)) {
                        const X = g ? U.length - 1 : 0;
                        U = U[X]
                    }
                    U !== null && (o[k] = U)
                }
                for (const k in C)
                    o[k] = C[k]
            }
        }
    }
    return o
}
const D1 = n => (i, s) => {
    const r = A.useContext(oo)
      , o = A.useContext(io)
      , f = () => AR(n, i, r, o);
    return s ? f() : $f(f)
}
  , RR = D1({
    scrapeMotionValuesFromProps: xd,
    createRenderState: Ed
})
  , CR = D1({
    scrapeMotionValuesFromProps: c1,
    createRenderState: M1
})
  , MR = Symbol.for("motionComponentSymbol");
function DR(n, i, s) {
    const r = A.useRef(s);
    A.useInsertionEffect( () => {
        r.current = s
    }
    );
    const o = A.useRef(null);
    return A.useCallback(f => {
        f && n.onMount?.(f);
        const d = r.current;
        if (typeof d == "function")
            if (f) {
                const h = d(f);
                typeof h == "function" && (o.current = h)
            } else
                o.current ? (o.current(),
                o.current = null) : d(f);
        else
            d && (d.current = f);
        i && (f ? i.mount(f) : i.unmount())
    }
    , [i])
}
const O1 = A.createContext({});
function Ai(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function OR(n, i, s, r, o, f) {
    const {visualElement: d} = A.useContext(oo)
      , h = A.useContext(A1)
      , y = A.useContext(io)
      , m = A.useContext(Td)
      , g = m.reducedMotion
      , v = m.skipAnimations
      , S = A.useRef(null)
      , w = A.useRef(!1);
    r = r || h.renderer,
    !S.current && r && (S.current = r(n, {
        visualState: i,
        parent: d,
        props: s,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: g,
        skipAnimations: v,
        isSVG: f
    }),
    w.current && S.current && (S.current.manuallyAnimateOnMount = !0));
    const x = S.current
      , C = A.useContext(O1);
    x && !x.projection && o && (x.type === "html" || x.type === "svg") && NR(S.current, s, o, C);
    const T = A.useRef(!1);
    A.useInsertionEffect( () => {
        x && T.current && x.update(s, y)
    }
    );
    const _ = s[Bv]
      , k = A.useRef(!!_ && typeof window < "u" && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
    return J0( () => {
        w.current = !0,
        x && (T.current = !0,
        window.MotionIsMounted = !0,
        x.updateFeatures(),
        x.scheduleRenderMicrotask(),
        k.current && x.animationState && x.animationState.animateChanges())
    }
    ),
    A.useEffect( () => {
        x && (!k.current && x.animationState && x.animationState.animateChanges(),
        k.current && (queueMicrotask( () => {
            window.MotionHandoffMarkAsComplete?.(_)
        }
        ),
        k.current = !1),
        x.enteringChildren = void 0)
    }
    ),
    x
}
function NR(n, i, s, r) {
    const {layoutId: o, layout: f, drag: d, dragConstraints: h, layoutScroll: y, layoutRoot: m, layoutAnchor: g, layoutCrossfade: v} = i;
    n.projection = new s(n.latestValues,i["data-framer-portal-id"] ? void 0 : N1(n.parent)),
    n.projection.setOptions({
        layoutId: o,
        layout: f,
        alwaysMeasureLayout: !!d || h && Ai(h),
        visualElement: n,
        animationType: typeof f == "string" ? f : "both",
        initialPromotionConfig: r,
        crossfade: v,
        layoutScroll: y,
        layoutRoot: m,
        layoutAnchor: g
    })
}
function N1(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : N1(n.parent)
}
function Ic(n, {forwardMotionProps: i=!1, type: s}={}, r, o) {
    r && dR(r);
    const f = s ? s === "svg" : Ad(n)
      , d = f ? CR : RR;
    function h(m, g) {
        let v;
        const S = {
            ...A.useContext(Td),
            ...m,
            layoutId: _R(m)
        }
          , {isStatic: w} = S
          , x = gR(m)
          , C = d(m, w);
        if (!w && typeof window < "u") {
            jR();
            const T = zR(S);
            v = T.MeasureLayout,
            x.visualElement = OR(n, C, S, o, T.ProjectionNode, f)
        }
        return M.jsxs(oo.Provider, {
            value: x,
            children: [v && x.visualElement ? M.jsx(v, {
                visualElement: x.visualElement,
                ...S
            }) : null, ER(n, m, DR(C, x.visualElement, g), C, w, i, f)]
        })
    }
    h.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
    const y = A.forwardRef(h);
    return y[MR] = n,
    y
}
function _R({layoutId: n}) {
    const i = A.useContext(Jf).id;
    return i && n !== void 0 ? i + "-" + n : n
}
function jR(n, i) {
    A.useContext(A1).strict
}
function zR(n) {
    const i = w1()
      , {drag: s, layout: r} = i;
    if (!s && !r)
        return {};
    const o = {
        ...s,
        ...r
    };
    return {
        MeasureLayout: s?.isEnabled(n) || r?.isEnabled(n) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
function LR(n, i) {
    if (typeof Proxy > "u")
        return Ic;
    const s = new Map
      , r = (f, d) => Ic(f, d, n, i)
      , o = (f, d) => r(f, d);
    return new Proxy(o,{
        get: (f, d) => d === "create" ? r : (s.has(d) || s.set(d, Ic(d, void 0, n, i)),
        s.get(d))
    })
}
const VR = (n, i) => i.isSVG ?? Ad(n) ? new fw(i) : new lw(i,{
    allowProjection: n !== A.Fragment
});
class UR extends ca {
    constructor(i) {
        super(i),
        i.animationState || (i.animationState = yw(i))
    }
    updateAnimationControlsSubscription() {
        const {animate: i} = this.node.getProps();
        so(i) && (this.unmountControls = i.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: i} = this.node.getProps()
          , {animate: s} = this.node.prevProps || {};
        i !== s && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(),
        this.unmountControls?.()
    }
}
let BR = 0;
class HR extends ca {
    constructor() {
        super(...arguments),
        this.id = BR++,
        this.isExitComplete = !1
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: i, onExitComplete: s} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || i === r)
            return;
        if (i && r === !1) {
            if (this.isExitComplete) {
                const {initial: f, custom: d} = this.node.getProps();
                if (typeof f == "string") {
                    const h = Ua(this.node, f, d);
                    if (h) {
                        const {transition: y, transitionEnd: m, ...g} = h;
                        for (const v in g)
                            this.node.getValue(v)?.jump(g[v])
                    }
                }
                this.node.animationState.reset(),
                this.node.animationState.animateChanges()
            } else
                this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const o = this.node.animationState.setActive("exit", !i);
        s && !i && o.then( () => {
            this.isExitComplete = !0,
            s(this.id)
        }
        )
    }
    mount() {
        const {register: i, onExitComplete: s} = this.node.presenceContext || {};
        s && s(this.id),
        i && (this.unmount = i(this.id))
    }
    unmount() {}
}
const kR = {
    animation: {
        Feature: UR
    },
    exit: {
        Feature: HR
    }
};
function Il(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const qR = n => i => yd(i) && n(i, Il(i));
function Gl(n, i, s, r) {
    return Ql(n, i, qR(s), r)
}
const _1 = ({current: n}) => n ? n.ownerDocument.defaultView : null
  , e0 = (n, i) => Math.abs(n - i);
function GR(n, i) {
    const s = e0(n.x, i.x)
      , r = e0(n.y, i.y);
    return Math.sqrt(s ** 2 + r ** 2)
}
const n0 = new Set(["auto", "scroll"]);
class j1 {
    constructor(i, s, {transformPagePoint: r, contextWindow: o=window, dragSnapToOrigin: f=!1, distanceThreshold: d=3, element: h}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.lastRawMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = w => {
            this.handleScroll(w.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Cr(this.lastRawMoveEventInfo, this.transformPagePoint));
            const w = tf(this.lastMoveEventInfo, this.history)
              , x = this.startEvent !== null
              , C = GR(w.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!x && !C)
                return;
            const {point: T} = w
              , {timestamp: _} = re;
            this.history.push({
                ...T,
                timestamp: _
            });
            const {onStart: k, onMove: U} = this.handlers;
            x || (k && k(this.lastMoveEvent, w),
            this.startEvent = this.lastMoveEvent),
            U && U(this.lastMoveEvent, w)
        }
        ,
        this.handlePointerMove = (w, x) => {
            this.lastMoveEvent = w,
            this.lastRawMoveEventInfo = x,
            this.lastMoveEventInfo = Cr(x, this.transformPagePoint),
            jt.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (w, x) => {
            this.end();
            const {onEnd: C, onSessionEnd: T, resumeAnimation: _} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && _ && _(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const k = tf(w.type === "pointercancel" ? this.lastMoveEventInfo : Cr(x, this.transformPagePoint), this.history);
            this.startEvent && C && C(w, k),
            T && T(w, k)
        }
        ,
        !yd(i))
            return;
        this.dragSnapToOrigin = f,
        this.handlers = s,
        this.transformPagePoint = r,
        this.distanceThreshold = d,
        this.contextWindow = o || window;
        const y = Il(i)
          , m = Cr(y, this.transformPagePoint)
          , {point: g} = m
          , {timestamp: v} = re;
        this.history = [{
            ...g,
            timestamp: v
        }];
        const {onSessionStart: S} = s;
        S && S(i, tf(m, this.history)),
        this.removeListeners = Jl(Gl(this.contextWindow, "pointermove", this.handlePointerMove), Gl(this.contextWindow, "pointerup", this.handlePointerUp), Gl(this.contextWindow, "pointercancel", this.handlePointerUp)),
        h && this.startScrollTracking(h)
    }
    startScrollTracking(i) {
        let s = i.parentElement;
        for (; s; ) {
            const r = getComputedStyle(s);
            (n0.has(r.overflowX) || n0.has(r.overflowY)) && this.scrollPositions.set(s, {
                x: s.scrollLeft,
                y: s.scrollTop
            }),
            s = s.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(i) {
        const s = this.scrollPositions.get(i);
        if (!s)
            return;
        const r = i === window
          , o = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: i.scrollLeft,
            y: i.scrollTop
        }
          , f = {
            x: o.x - s.x,
            y: o.y - s.y
        };
        f.x === 0 && f.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += f.x,
        this.lastMoveEventInfo.point.y += f.y) : this.history.length > 0 && (this.history[0].x -= f.x,
        this.history[0].y -= f.y),
        this.scrollPositions.set(i, o),
        jt.update(this.updatePoint, !0))
    }
    updateHandlers(i) {
        this.handlers = i
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        ua(this.updatePoint)
    }
}
function Cr(n, i) {
    return i ? {
        point: i(n.point)
    } : n
}
function a0(n, i) {
    return {
        x: n.x - i.x,
        y: n.y - i.y
    }
}
function tf({point: n}, i) {
    return {
        point: n,
        delta: a0(n, z1(i)),
        offset: a0(n, YR(i)),
        velocity: XR(i, .1)
    }
}
function YR(n) {
    return n[0]
}
function z1(n) {
    return n[n.length - 1]
}
function XR(n, i) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let s = n.length - 1
      , r = null;
    const o = z1(n);
    for (; s >= 0 && (r = n[s],
    !(o.timestamp - r.timestamp > Le(i))); )
        s--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === n[0] && n.length > 2 && o.timestamp - r.timestamp > Le(i) * 2 && (r = n[1]);
    const f = Ze(o.timestamp - r.timestamp);
    if (f === 0)
        return {
            x: 0,
            y: 0
        };
    const d = {
        x: (o.x - r.x) / f,
        y: (o.y - r.y) / f
    };
    return d.x === 1 / 0 && (d.x = 0),
    d.y === 1 / 0 && (d.y = 0),
    d
}
function PR(n, {min: i, max: s}, r) {
    return i !== void 0 && n < i ? n = r ? Ut(i, n, r.min) : Math.max(n, i) : s !== void 0 && n > s && (n = r ? Ut(s, n, r.max) : Math.min(n, s)),
    n
}
function i0(n, i, s) {
    return {
        min: i !== void 0 ? n.min + i : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
    }
}
function KR(n, {top: i, left: s, bottom: r, right: o}) {
    return {
        x: i0(n.x, s, o),
        y: i0(n.y, i, r)
    }
}
function l0(n, i) {
    let s = i.min - n.min
      , r = i.max - n.max;
    return i.max - i.min < n.max - n.min && ([s,r] = [r, s]),
    {
        min: s,
        max: r
    }
}
function QR(n, i) {
    return {
        x: l0(n.x, i.x),
        y: l0(n.y, i.y)
    }
}
function ZR(n, i) {
    let s = .5;
    const r = me(n)
      , o = me(i);
    return o > r ? s = Xl(i.min, i.max - r, n.min) : r > o && (s = Xl(n.min, n.max - o, i.min)),
    mn(0, 1, s)
}
function FR(n, i) {
    const s = {};
    return i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
}
const Lf = .35;
function JR(n=Lf) {
    return n === !1 ? n = 0 : n === !0 && (n = Lf),
    {
        x: s0(n, "left", "right"),
        y: s0(n, "top", "bottom")
    }
}
function s0(n, i, s) {
    return {
        min: r0(n, i),
        max: r0(n, s)
    }
}
function r0(n, i) {
    return typeof n == "number" ? n : n[i] || 0
}
const $R = new WeakMap;
class WR {
    constructor(i) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = It(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = i
    }
    start(i, {snapToCursor: s=!1, distanceThreshold: r}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const f = v => {
            s && this.snapToCursor(Il(v).point),
            this.stopAnimation()
        }
          , d = (v, S) => {
            const {drag: w, dragPropagation: x, onDragStart: C} = this.getProps();
            if (w && !x && (this.openDragLock && this.openDragLock(),
            this.openDragLock = AA(w),
            !this.openDragLock))
                return;
            this.latestPointerEvent = v,
            this.latestPanInfo = S,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            cn(_ => {
                let k = this.getAxisMotionValue(_).get() || 0;
                if (hn.test(k)) {
                    const {projection: U} = this.visualElement;
                    if (U && U.layout) {
                        const X = U.layout.layoutBox[_];
                        X && (k = me(X) * (parseFloat(k) / 100))
                    }
                }
                this.originPoint[_] = k
            }
            ),
            C && jt.update( () => C(v, S), !1, !0),
            Rf(this.visualElement, "transform");
            const {animationState: T} = this.visualElement;
            T && T.setActive("whileDrag", !0)
        }
          , h = (v, S) => {
            this.latestPointerEvent = v,
            this.latestPanInfo = S;
            const {dragPropagation: w, dragDirectionLock: x, onDirectionLock: C, onDrag: T} = this.getProps();
            if (!w && !this.openDragLock)
                return;
            const {offset: _} = S;
            if (x && this.currentDirection === null) {
                this.currentDirection = tC(_),
                this.currentDirection !== null && C && C(this.currentDirection);
                return
            }
            this.updateAxis("x", S.point, _),
            this.updateAxis("y", S.point, _),
            this.visualElement.render(),
            T && jt.update( () => T(v, S), !1, !0)
        }
          , y = (v, S) => {
            this.latestPointerEvent = v,
            this.latestPanInfo = S,
            this.stop(v, S),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , m = () => {
            const {dragSnapToOrigin: v} = this.getProps();
            (v || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: g} = this.getProps();
        this.panSession = new j1(i,{
            onSessionStart: f,
            onStart: d,
            onMove: h,
            onSessionEnd: y,
            resumeAnimation: m
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            distanceThreshold: r,
            contextWindow: _1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(i, s) {
        const r = i || this.latestPointerEvent
          , o = s || this.latestPanInfo
          , f = this.isDragging;
        if (this.cancel(),
        !f || !o || !r)
            return;
        const {velocity: d} = o;
        this.startAnimation(d);
        const {onDragEnd: h} = this.getProps();
        h && jt.postRender( () => h(r, o))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: i, animationState: s} = this.visualElement;
        i && (i.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        s && s.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(i, s, r) {
        const {drag: o} = this.getProps();
        if (!r || !Mr(i, o, this.currentDirection))
            return;
        const f = this.getAxisMotionValue(i);
        let d = this.originPoint[i] + r[i];
        this.constraints && this.constraints[i] && (d = PR(d, this.constraints[i], this.elastic[i])),
        f.set(d)
    }
    resolveConstraints() {
        const {dragConstraints: i, dragElastic: s} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
          , o = this.constraints;
        i && Ai(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && r ? this.constraints = KR(r.layoutBox, i) : this.constraints = !1,
        this.elastic = JR(s),
        o !== this.constraints && !Ai(i) && r && this.constraints && !this.hasMutatedConstraints && cn(f => {
            this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = FR(r.layoutBox[f], this.constraints[f]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: i, onMeasureDragConstraints: s} = this.getProps();
        if (!i || !Ai(i))
            return !1;
        const r = i.current
          , {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const f = IA(r, o.root, this.visualElement.getTransformPagePoint());
        let d = QR(o.layout.layoutBox, f);
        if (s) {
            const h = s(JA(d));
            this.hasMutatedConstraints = !!h,
            h && (d = e1(h))
        }
        return d
    }
    startAnimation(i) {
        const {drag: s, dragMomentum: r, dragElastic: o, dragTransition: f, dragSnapToOrigin: d, onDragTransitionEnd: h} = this.getProps()
          , y = this.constraints || {}
          , m = cn(g => {
            if (!Mr(g, s, this.currentDirection))
                return;
            let v = y && y[g] || {};
            (d === !0 || d === g) && (v = {
                min: 0,
                max: 0
            });
            const S = o ? 200 : 1e6
              , w = o ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: r ? i[g] : 0,
                bounceStiffness: S,
                bounceDamping: w,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...f,
                ...v
            };
            return this.startAxisValueAnimation(g, x)
        }
        );
        return Promise.all(m).then(h)
    }
    startAxisValueAnimation(i, s) {
        const r = this.getAxisMotionValue(i);
        return Rf(this.visualElement, i),
        r.start(fd(i, r, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        cn(i => this.getAxisMotionValue(i).stop())
    }
    getAxisMotionValue(i) {
        const s = `_drag${i.toUpperCase()}`
          , r = this.visualElement.getProps()
          , o = r[s];
        return o || this.visualElement.getValue(i, (r.initial ? r.initial[i] : void 0) || 0)
    }
    snapToCursor(i) {
        cn(s => {
            const {drag: r} = this.getProps();
            if (!Mr(s, r, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , f = this.getAxisMotionValue(s);
            if (o && o.layout) {
                const {min: d, max: h} = o.layout.layoutBox[s]
                  , y = f.get() || 0;
                f.set(i[s] - Ut(d, h, .5) + y)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: i, dragConstraints: s} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Ai(s) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        cn(d => {
            const h = this.getAxisMotionValue(d);
            if (h && this.constraints !== !1) {
                const y = h.get();
                o[d] = ZR({
                    min: y,
                    max: y
                }, this.constraints[d])
            }
        }
        );
        const {transformTemplate: f} = this.visualElement.getProps();
        this.visualElement.current.style.transform = f ? f({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        cn(d => {
            if (!Mr(d, i, null))
                return;
            const h = this.getAxisMotionValue(d)
              , {min: y, max: m} = this.constraints[d];
            h.set(Ut(y, m, o[d]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        $R.set(this.visualElement, this);
        const i = this.visualElement.current
          , s = Gl(i, "pointerdown", m => {
            const {drag: g, dragListener: v=!0} = this.getProps()
              , S = m.target
              , w = S !== i && OA(S);
            g && v && !w && this.start(m)
        }
        );
        let r;
        const o = () => {
            const {dragConstraints: m} = this.getProps();
            Ai(m) && m.current && (this.constraints = this.resolveRefConstraints(),
            r || (r = IR(i, m.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: f} = this.visualElement
          , d = f.addEventListener("measure", o);
        f && !f.layout && (f.root && f.root.updateScroll(),
        f.updateLayout()),
        jt.read(o);
        const h = Ql(window, "resize", () => this.scalePositionWithinConstraints())
          , y = f.addEventListener("didUpdate", ( ({delta: m, hasLayoutChanged: g}) => {
            this.isDragging && g && (cn(v => {
                const S = this.getAxisMotionValue(v);
                S && (this.originPoint[v] += m[v].translate,
                S.set(S.get() + m[v].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            h(),
            s(),
            d(),
            y && y(),
            r && r()
        }
    }
    getProps() {
        const i = this.visualElement.getProps()
          , {drag: s=!1, dragDirectionLock: r=!1, dragPropagation: o=!1, dragConstraints: f=!1, dragElastic: d=Lf, dragMomentum: h=!0} = i;
        return {
            ...i,
            drag: s,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: f,
            dragElastic: d,
            dragMomentum: h
        }
    }
}
function o0(n) {
    let i = !0;
    return () => {
        if (i) {
            i = !1;
            return
        }
        n()
    }
}
function IR(n, i, s) {
    const r = pg(n, o0(s))
      , o = pg(i, o0(s));
    return () => {
        r(),
        o()
    }
}
function Mr(n, i, s) {
    return (i === !0 || i === n) && (s === null || s === n)
}
function tC(n, i=10) {
    let s = null;
    return Math.abs(n.y) > i ? s = "y" : Math.abs(n.x) > i && (s = "x"),
    s
}
class eC extends ca {
    constructor(i) {
        super(i),
        this.removeGroupControls = Fe,
        this.removeListeners = Fe,
        this.controls = new WR(i)
    }
    mount() {
        const {dragControls: i} = this.node.getProps();
        i && (this.removeGroupControls = i.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Fe
    }
    update() {
        const {dragControls: i} = this.node.getProps()
          , {dragControls: s} = this.node.prevProps || {};
        i !== s && (this.removeGroupControls(),
        i && (this.removeGroupControls = i.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const ef = n => (i, s) => {
    n && jt.update( () => n(i, s), !1, !0)
}
;
class nC extends ca {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Fe
    }
    onPointerDown(i) {
        this.session = new j1(i,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: _1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: i, onPanStart: s, onPan: r, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: ef(i),
            onStart: ef(s),
            onMove: ef(r),
            onEnd: (f, d) => {
                delete this.session,
                o && jt.postRender( () => o(f, d))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Gl(this.node.current, "pointerdown", i => this.onPointerDown(i))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let nf = !1;
class aC extends A.Component {
    componentDidMount() {
        const {visualElement: i, layoutGroup: s, switchLayoutGroup: r, layoutId: o} = this.props
          , {projection: f} = i;
        f && (s.group && s.group.add(f),
        r && r.register && o && r.register(f),
        nf && f.root.didUpdate(),
        f.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        f.setOptions({
            ...f.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        kr.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(i) {
        const {layoutDependency: s, visualElement: r, drag: o, isPresent: f} = this.props
          , {projection: d} = r;
        return d && (d.isPresent = f,
        i.layoutDependency !== s && d.setOptions({
            ...d.options,
            layoutDependency: s
        }),
        nf = !0,
        o || i.layoutDependency !== s || s === void 0 || i.isPresent !== f ? d.willUpdate() : this.safeToRemove(),
        i.isPresent !== f && (f ? d.promote() : d.relegate() || jt.postRender( () => {
            const h = d.getStack();
            (!h || !h.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {visualElement: i, layoutAnchor: s} = this.props
          , {projection: r} = i;
        r && (r.options.layoutAnchor = s,
        r.root.didUpdate(),
        pd.postRender( () => {
            !r.currentAnimation && r.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: i, layoutGroup: s, switchLayoutGroup: r} = this.props
          , {projection: o} = i;
        nf = !0,
        o && (o.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(o),
        r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: i} = this.props;
        i && i()
    }
    render() {
        return null
    }
}
function L1(n) {
    const [i,s] = E1()
      , r = A.useContext(Jf);
    return M.jsx(aC, {
        ...n,
        layoutGroup: r,
        switchLayoutGroup: A.useContext(O1),
        isPresent: i,
        safeToRemove: s
    })
}
const iC = {
    pan: {
        Feature: nC
    },
    drag: {
        Feature: eC,
        ProjectionNode: T1,
        MeasureLayout: L1
    }
};
function u0(n, i, s) {
    const {props: r} = n;
    n.animationState && r.whileHover && n.animationState.setActive("whileHover", s === "Start");
    const o = "onHover" + s
      , f = r[o];
    f && jt.postRender( () => f(i, Il(i)))
}
class lC extends ca {
    mount() {
        const {current: i} = this.node;
        i && (this.unmount = RA(i, (s, r) => (u0(this.node, r, "Start"),
        o => u0(this.node, o, "End"))))
    }
    unmount() {}
}
class sC extends ca {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let i = !1;
        try {
            i = this.node.current.matches(":focus-visible")
        } catch {
            i = !0
        }
        !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Jl(Ql(this.node.current, "focus", () => this.onFocus()), Ql(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function c0(n, i, s) {
    const {props: r} = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled)
        return;
    n.animationState && r.whileTap && n.animationState.setActive("whileTap", s === "Start");
    const o = "onTap" + (s === "End" ? "" : s)
      , f = r[o];
    f && jt.postRender( () => f(i, Il(i)))
}
class rC extends ca {
    mount() {
        const {current: i} = this.node;
        if (!i)
            return;
        const {globalTapTarget: s, propagate: r} = this.node.props;
        this.unmount = _A(i, (o, f) => (c0(this.node, f, "Start"),
        (d, {success: h}) => c0(this.node, d, h ? "End" : "Cancel")), {
            useGlobalTarget: s,
            stopPropagation: r?.tap === !1
        })
    }
    unmount() {}
}
const Vf = new WeakMap
  , af = new WeakMap
  , oC = n => {
    const i = Vf.get(n.target);
    i && i(n)
}
  , uC = n => {
    n.forEach(oC)
}
;
function cC({root: n, ...i}) {
    const s = n || document;
    af.has(s) || af.set(s, {});
    const r = af.get(s)
      , o = JSON.stringify(i);
    return r[o] || (r[o] = new IntersectionObserver(uC,{
        root: n,
        ...i
    })),
    r[o]
}
function fC(n, i, s) {
    const r = cC(i);
    return Vf.set(n, s),
    r.observe(n),
    () => {
        Vf.delete(n),
        r.unobserve(n)
    }
}
const dC = {
    some: 0,
    all: 1
};
class hC extends ca {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.stopObserver?.();
        const {viewport: i={}} = this.node.getProps()
          , {root: s, margin: r, amount: o="some", once: f} = i
          , d = {
            root: s ? s.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : dC[o]
        }
          , h = y => {
            const {isIntersecting: m} = y;
            if (this.isInView === m || (this.isInView = m,
            f && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: g, onViewportLeave: v} = this.node.getProps()
              , S = m ? g : v;
            S && S(y)
        }
        ;
        this.stopObserver = fC(this.node.current, d, h)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: i, prevProps: s} = this.node;
        ["amount", "margin", "root"].some(mC(i, s)) && this.startObserver()
    }
    unmount() {
        this.stopObserver?.(),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
}
function mC({viewport: n={}}, {viewport: i={}}={}) {
    return s => n[s] !== i[s]
}
const pC = {
    inView: {
        Feature: hC
    },
    tap: {
        Feature: rC
    },
    focus: {
        Feature: sC
    },
    hover: {
        Feature: lC
    }
}
  , yC = {
    layout: {
        ProjectionNode: T1,
        MeasureLayout: L1
    }
}
  , gC = {
    ...kR,
    ...pC,
    ...iC,
    ...yC
}
  , Oi = LR(gC, VR);
const V1 = (...n) => n.filter( (i, s, r) => !!i && i.trim() !== "" && r.indexOf(i) === s).join(" ").trim();
const vC = n => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const bC = n => n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, r) => r ? r.toUpperCase() : s.toLowerCase());
const f0 = n => {
    const i = bC(n);
    return i.charAt(0).toUpperCase() + i.slice(1)
}
;
var SC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const xC = n => {
    for (const i in n)
        if (i.startsWith("aria-") || i === "role" || i === "title")
            return !0;
    return !1
}
;
const TC = A.forwardRef( ({color: n="currentColor", size: i=24, strokeWidth: s=2, absoluteStrokeWidth: r, className: o="", children: f, iconNode: d, ...h}, y) => A.createElement("svg", {
    ref: y,
    ...SC,
    width: i,
    height: i,
    stroke: n,
    strokeWidth: r ? Number(s) * 24 / Number(i) : s,
    className: V1("lucide", o),
    ...!f && !xC(h) && {
        "aria-hidden": "true"
    },
    ...h
}, [...d.map( ([m,g]) => A.createElement(m, g)), ...Array.isArray(f) ? f : [f]]));
const pe = (n, i) => {
    const s = A.forwardRef( ({className: r, ...o}, f) => A.createElement(TC, {
        ref: f,
        iconNode: i,
        className: V1(`lucide-${vC(f0(n))}`, `lucide-${n}`, r),
        ...o
    }));
    return s.displayName = f0(n),
    s
}
;
const EC = [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]
  , U1 = pe("arrow-left", EC);
const AC = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , wC = pe("arrow-right", AC);
const RC = [["path", {
    d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
    key: "12oyoe"
}], ["path", {
    d: "M21 16v2a4 4 0 0 1-4 4h-5",
    key: "1x7m43"
}]]
  , B1 = pe("headset", RC);
const CC = [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]
  , wd = pe("loader-circle", CC);
const MC = [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]
  , DC = pe("lock", MC);
const OC = [["path", {
    d: "m16 17 5-5-5-5",
    key: "1bji2h"
}], ["path", {
    d: "M21 12H9",
    key: "dn1m92"
}], ["path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    key: "1uf3rs"
}]]
  , NC = pe("log-out", OC);
const _C = [["path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
    key: "9njp5v"
}]]
  , jC = pe("phone", _C);
const zC = [["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "3",
    rx: "1",
    key: "1tu5fj"
}], ["rect", {
    width: "5",
    height: "5",
    x: "16",
    y: "3",
    rx: "1",
    key: "1v8r4q"
}], ["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "1x03jg"
}], ["path", {
    d: "M21 16h-3a2 2 0 0 0-2 2v3",
    key: "177gqh"
}], ["path", {
    d: "M21 21v.01",
    key: "ents32"
}], ["path", {
    d: "M12 7v3a2 2 0 0 1-2 2H7",
    key: "8crl2c"
}], ["path", {
    d: "M3 12h.01",
    key: "nlz23k"
}], ["path", {
    d: "M12 3h.01",
    key: "n36tog"
}], ["path", {
    d: "M12 16v.01",
    key: "133mhm"
}], ["path", {
    d: "M16 12h1",
    key: "1slzba"
}], ["path", {
    d: "M21 12v.01",
    key: "1lwtk9"
}], ["path", {
    d: "M12 21v-1",
    key: "1880an"
}]]
  , LC = pe("qr-code", zC);
const VC = [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]
  , H1 = pe("send", VC);
const UC = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , BC = pe("shield-check", UC);
const HC = [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]
  , kC = pe("smartphone", HC);
const qC = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]
  , d0 = pe("star", qC);
const GC = [["path", {
    d: "m16 11 2 2 4-4",
    key: "9rsbq5"
}], ["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}]]
  , YC = pe("user-check", GC);
const XC = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , PC = pe("x", XC);
const KC = [["path", {
    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
    key: "1q2vi4"
}], ["path", {
    d: "m10 15 5-3-5-3z",
    key: "1jp15x"
}]]
  , k1 = pe("youtube", KC);
function q1(n, i) {
    return function() {
        return n.apply(i, arguments)
    }
}
const {toString: QC} = Object.prototype
  , {getPrototypeOf: Rd} = Object
  , {iterator: uo, toStringTag: G1} = Symbol
  , co = (n => i => {
    const s = QC.call(i);
    return n[s] || (n[s] = s.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , ln = n => (n = n.toLowerCase(),
i => co(i) === n)
  , fo = n => i => typeof i === n
  , {isArray: Hi} = Array
  , Ni = fo("undefined");
function ts(n) {
    return n !== null && !Ni(n) && n.constructor !== null && !Ni(n.constructor) && Ee(n.constructor.isBuffer) && n.constructor.isBuffer(n)
}
const Y1 = ln("ArrayBuffer");
function ZC(n) {
    let i;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && Y1(n.buffer),
    i
}
const FC = fo("string")
  , Ee = fo("function")
  , X1 = fo("number")
  , es = n => n !== null && typeof n == "object"
  , JC = n => n === !0 || n === !1
  , qr = n => {
    if (co(n) !== "object")
        return !1;
    const i = Rd(n);
    return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(G1 in n) && !(uo in n)
}
  , $C = n => {
    if (!es(n) || ts(n))
        return !1;
    try {
        return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype
    } catch {
        return !1
    }
}
  , WC = ln("Date")
  , IC = ln("File")
  , tM = n => !!(n && typeof n.uri < "u")
  , eM = n => n && typeof n.getParts < "u"
  , nM = ln("Blob")
  , aM = ln("FileList")
  , iM = n => es(n) && Ee(n.pipe);
function lM() {
    return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}
}
const h0 = lM()
  , m0 = typeof h0.FormData < "u" ? h0.FormData : void 0
  , sM = n => {
    let i;
    return n && (m0 && n instanceof m0 || Ee(n.append) && ((i = co(n)) === "formdata" || i === "object" && Ee(n.toString) && n.toString() === "[object FormData]"))
}
  , rM = ln("URLSearchParams")
  , [oM,uM,cM,fM] = ["ReadableStream", "Request", "Response", "Headers"].map(ln)
  , dM = n => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ns(n, i, {allOwnKeys: s=!1}={}) {
    if (n === null || typeof n > "u")
        return;
    let r, o;
    if (typeof n != "object" && (n = [n]),
    Hi(n))
        for (r = 0,
        o = n.length; r < o; r++)
            i.call(null, n[r], r, n);
    else {
        if (ts(n))
            return;
        const f = s ? Object.getOwnPropertyNames(n) : Object.keys(n)
          , d = f.length;
        let h;
        for (r = 0; r < d; r++)
            h = f[r],
            i.call(null, n[h], h, n)
    }
}
function P1(n, i) {
    if (ts(n))
        return null;
    i = i.toLowerCase();
    const s = Object.keys(n);
    let r = s.length, o;
    for (; r-- > 0; )
        if (o = s[r],
        i === o.toLowerCase())
            return o;
    return null
}
const La = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , K1 = n => !Ni(n) && n !== La;
function Uf() {
    const {caseless: n, skipUndefined: i} = K1(this) && this || {}
      , s = {}
      , r = (o, f) => {
        if (f === "__proto__" || f === "constructor" || f === "prototype")
            return;
        const d = n && P1(s, f) || f;
        qr(s[d]) && qr(o) ? s[d] = Uf(s[d], o) : qr(o) ? s[d] = Uf({}, o) : Hi(o) ? s[d] = o.slice() : (!i || !Ni(o)) && (s[d] = o)
    }
    ;
    for (let o = 0, f = arguments.length; o < f; o++)
        arguments[o] && ns(arguments[o], r);
    return s
}
const hM = (n, i, s, {allOwnKeys: r}={}) => (ns(i, (o, f) => {
    s && Ee(o) ? Object.defineProperty(n, f, {
        value: q1(o, s),
        writable: !0,
        enumerable: !0,
        configurable: !0
    }) : Object.defineProperty(n, f, {
        value: o,
        writable: !0,
        enumerable: !0,
        configurable: !0
    })
}
, {
    allOwnKeys: r
}),
n)
  , mM = n => (n.charCodeAt(0) === 65279 && (n = n.slice(1)),
n)
  , pM = (n, i, s, r) => {
    n.prototype = Object.create(i.prototype, r),
    Object.defineProperty(n.prototype, "constructor", {
        value: n,
        writable: !0,
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(n, "super", {
        value: i.prototype
    }),
    s && Object.assign(n.prototype, s)
}
  , yM = (n, i, s, r) => {
    let o, f, d;
    const h = {};
    if (i = i || {},
    n == null)
        return i;
    do {
        for (o = Object.getOwnPropertyNames(n),
        f = o.length; f-- > 0; )
            d = o[f],
            (!r || r(d, n, i)) && !h[d] && (i[d] = n[d],
            h[d] = !0);
        n = s !== !1 && Rd(n)
    } while (n && (!s || s(n, i)) && n !== Object.prototype);
    return i
}
  , gM = (n, i, s) => {
    n = String(n),
    (s === void 0 || s > n.length) && (s = n.length),
    s -= i.length;
    const r = n.indexOf(i, s);
    return r !== -1 && r === s
}
  , vM = n => {
    if (!n)
        return null;
    if (Hi(n))
        return n;
    let i = n.length;
    if (!X1(i))
        return null;
    const s = new Array(i);
    for (; i-- > 0; )
        s[i] = n[i];
    return s
}
  , bM = (n => i => n && i instanceof n)(typeof Uint8Array < "u" && Rd(Uint8Array))
  , SM = (n, i) => {
    const r = (n && n[uo]).call(n);
    let o;
    for (; (o = r.next()) && !o.done; ) {
        const f = o.value;
        i.call(n, f[0], f[1])
    }
}
  , xM = (n, i) => {
    let s;
    const r = [];
    for (; (s = n.exec(i)) !== null; )
        r.push(s);
    return r
}
  , TM = ln("HTMLFormElement")
  , EM = n => n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, r, o) {
    return r.toUpperCase() + o
})
  , p0 = ( ({hasOwnProperty: n}) => (i, s) => n.call(i, s))(Object.prototype)
  , AM = ln("RegExp")
  , Q1 = (n, i) => {
    const s = Object.getOwnPropertyDescriptors(n)
      , r = {};
    ns(s, (o, f) => {
        let d;
        (d = i(o, f, n)) !== !1 && (r[f] = d || o)
    }
    ),
    Object.defineProperties(n, r)
}
  , wM = n => {
    Q1(n, (i, s) => {
        if (Ee(n) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
            return !1;
        const r = n[s];
        if (Ee(r)) {
            if (i.enumerable = !1,
            "writable"in i) {
                i.writable = !1;
                return
            }
            i.set || (i.set = () => {
                throw Error("Can not rewrite read-only method '" + s + "'")
            }
            )
        }
    }
    )
}
  , RM = (n, i) => {
    const s = {}
      , r = o => {
        o.forEach(f => {
            s[f] = !0
        }
        )
    }
    ;
    return Hi(n) ? r(n) : r(String(n).split(i)),
    s
}
  , CM = () => {}
  , MM = (n, i) => n != null && Number.isFinite(n = +n) ? n : i;
function DM(n) {
    return !!(n && Ee(n.append) && n[G1] === "FormData" && n[uo])
}
const OM = n => {
    const i = new Array(10)
      , s = (r, o) => {
        if (es(r)) {
            if (i.indexOf(r) >= 0)
                return;
            if (ts(r))
                return r;
            if (!("toJSON"in r)) {
                i[o] = r;
                const f = Hi(r) ? [] : {};
                return ns(r, (d, h) => {
                    const y = s(d, o + 1);
                    !Ni(y) && (f[h] = y)
                }
                ),
                i[o] = void 0,
                f
            }
        }
        return r
    }
    ;
    return s(n, 0)
}
  , NM = ln("AsyncFunction")
  , _M = n => n && (es(n) || Ee(n)) && Ee(n.then) && Ee(n.catch)
  , Z1 = ( (n, i) => n ? setImmediate : i ? ( (s, r) => (La.addEventListener("message", ({source: o, data: f}) => {
    o === La && f === s && r.length && r.shift()()
}
, !1),
o => {
    r.push(o),
    La.postMessage(s, "*")
}
))(`axios@${Math.random()}`, []) : s => setTimeout(s))(typeof setImmediate == "function", Ee(La.postMessage))
  , jM = typeof queueMicrotask < "u" ? queueMicrotask.bind(La) : typeof process < "u" && process.nextTick || Z1
  , zM = n => n != null && Ee(n[uo])
  , V = {
    isArray: Hi,
    isArrayBuffer: Y1,
    isBuffer: ts,
    isFormData: sM,
    isArrayBufferView: ZC,
    isString: FC,
    isNumber: X1,
    isBoolean: JC,
    isObject: es,
    isPlainObject: qr,
    isEmptyObject: $C,
    isReadableStream: oM,
    isRequest: uM,
    isResponse: cM,
    isHeaders: fM,
    isUndefined: Ni,
    isDate: WC,
    isFile: IC,
    isReactNativeBlob: tM,
    isReactNative: eM,
    isBlob: nM,
    isRegExp: AM,
    isFunction: Ee,
    isStream: iM,
    isURLSearchParams: rM,
    isTypedArray: bM,
    isFileList: aM,
    forEach: ns,
    merge: Uf,
    extend: hM,
    trim: dM,
    stripBOM: mM,
    inherits: pM,
    toFlatObject: yM,
    kindOf: co,
    kindOfTest: ln,
    endsWith: gM,
    toArray: vM,
    forEachEntry: SM,
    matchAll: xM,
    isHTMLForm: TM,
    hasOwnProperty: p0,
    hasOwnProp: p0,
    reduceDescriptors: Q1,
    freezeMethods: wM,
    toObjectSet: RM,
    toCamelCase: EM,
    noop: CM,
    toFiniteNumber: MM,
    findKey: P1,
    global: La,
    isContextDefined: K1,
    isSpecCompliantForm: DM,
    toJSONObject: OM,
    isAsyncFn: NM,
    isThenable: _M,
    setImmediate: Z1,
    asap: jM,
    isIterable: zM
};
let st = class F1 extends Error {
    static from(i, s, r, o, f, d) {
        const h = new F1(i.message,s || i.code,r,o,f);
        return h.cause = i,
        h.name = i.name,
        i.status != null && h.status == null && (h.status = i.status),
        d && Object.assign(h, d),
        h
    }
    constructor(i, s, r, o, f) {
        super(i),
        Object.defineProperty(this, "message", {
            value: i,
            enumerable: !0,
            writable: !0,
            configurable: !0
        }),
        this.name = "AxiosError",
        this.isAxiosError = !0,
        s && (this.code = s),
        r && (this.config = r),
        o && (this.request = o),
        f && (this.response = f,
        this.status = f.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: V.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
}
;
st.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
st.ERR_BAD_OPTION = "ERR_BAD_OPTION";
st.ECONNABORTED = "ECONNABORTED";
st.ETIMEDOUT = "ETIMEDOUT";
st.ERR_NETWORK = "ERR_NETWORK";
st.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
st.ERR_DEPRECATED = "ERR_DEPRECATED";
st.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
st.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
st.ERR_CANCELED = "ERR_CANCELED";
st.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
st.ERR_INVALID_URL = "ERR_INVALID_URL";
const LM = null;
function Bf(n) {
    return V.isPlainObject(n) || V.isArray(n)
}
function J1(n) {
    return V.endsWith(n, "[]") ? n.slice(0, -2) : n
}
function lf(n, i, s) {
    return n ? n.concat(i).map(function(o, f) {
        return o = J1(o),
        !s && f ? "[" + o + "]" : o
    }).join(s ? "." : "") : i
}
function VM(n) {
    return V.isArray(n) && !n.some(Bf)
}
const UM = V.toFlatObject(V, {}, null, function(i) {
    return /^is[A-Z]/.test(i)
});
function ho(n, i, s) {
    if (!V.isObject(n))
        throw new TypeError("target must be an object");
    i = i || new FormData,
    s = V.toFlatObject(s, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(C, T) {
        return !V.isUndefined(T[C])
    });
    const r = s.metaTokens
      , o = s.visitor || g
      , f = s.dots
      , d = s.indexes
      , y = (s.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(i);
    if (!V.isFunction(o))
        throw new TypeError("visitor must be a function");
    function m(x) {
        if (x === null)
            return "";
        if (V.isDate(x))
            return x.toISOString();
        if (V.isBoolean(x))
            return x.toString();
        if (!y && V.isBlob(x))
            throw new st("Blob is not supported. Use a Buffer instead.");
        return V.isArrayBuffer(x) || V.isTypedArray(x) ? y && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x
    }
    function g(x, C, T) {
        let _ = x;
        if (V.isReactNative(i) && V.isReactNativeBlob(x))
            return i.append(lf(T, C, f), m(x)),
            !1;
        if (x && !T && typeof x == "object") {
            if (V.endsWith(C, "{}"))
                C = r ? C : C.slice(0, -2),
                x = JSON.stringify(x);
            else if (V.isArray(x) && VM(x) || (V.isFileList(x) || V.endsWith(C, "[]")) && (_ = V.toArray(x)))
                return C = J1(C),
                _.forEach(function(U, X) {
                    !(V.isUndefined(U) || U === null) && i.append(d === !0 ? lf([C], X, f) : d === null ? C : C + "[]", m(U))
                }),
                !1
        }
        return Bf(x) ? !0 : (i.append(lf(T, C, f), m(x)),
        !1)
    }
    const v = []
      , S = Object.assign(UM, {
        defaultVisitor: g,
        convertValue: m,
        isVisitable: Bf
    });
    function w(x, C) {
        if (!V.isUndefined(x)) {
            if (v.indexOf(x) !== -1)
                throw Error("Circular reference detected in " + C.join("."));
            v.push(x),
            V.forEach(x, function(_, k) {
                (!(V.isUndefined(_) || _ === null) && o.call(i, _, V.isString(k) ? k.trim() : k, C, S)) === !0 && w(_, C ? C.concat(k) : [k])
            }),
            v.pop()
        }
    }
    if (!V.isObject(n))
        throw new TypeError("data must be an object");
    return w(n),
    i
}
function y0(n) {
    const i = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
        return i[r]
    })
}
function Cd(n, i) {
    this._pairs = [],
    n && ho(n, this, i)
}
const $1 = Cd.prototype;
$1.append = function(i, s) {
    this._pairs.push([i, s])
}
;
$1.toString = function(i) {
    const s = i ? function(r) {
        return i.call(this, r, y0)
    }
    : y0;
    return this._pairs.map(function(o) {
        return s(o[0]) + "=" + s(o[1])
    }, "").join("&")
}
;
function BM(n) {
    return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function W1(n, i, s) {
    if (!i)
        return n;
    const r = s && s.encode || BM
      , o = V.isFunction(s) ? {
        serialize: s
    } : s
      , f = o && o.serialize;
    let d;
    if (f ? d = f(i, o) : d = V.isURLSearchParams(i) ? i.toString() : new Cd(i,o).toString(r),
    d) {
        const h = n.indexOf("#");
        h !== -1 && (n = n.slice(0, h)),
        n += (n.indexOf("?") === -1 ? "?" : "&") + d
    }
    return n
}
class g0 {
    constructor() {
        this.handlers = []
    }
    use(i, s, r) {
        return this.handlers.push({
            fulfilled: i,
            rejected: s,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(i) {
        this.handlers[i] && (this.handlers[i] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(i) {
        V.forEach(this.handlers, function(r) {
            r !== null && i(r)
        })
    }
}
const Md = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0
}
  , HM = typeof URLSearchParams < "u" ? URLSearchParams : Cd
  , kM = typeof FormData < "u" ? FormData : null
  , qM = typeof Blob < "u" ? Blob : null
  , GM = {
    isBrowser: !0,
    classes: {
        URLSearchParams: HM,
        FormData: kM,
        Blob: qM
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Dd = typeof window < "u" && typeof document < "u"
  , Hf = typeof navigator == "object" && navigator || void 0
  , YM = Dd && (!Hf || ["ReactNative", "NativeScript", "NS"].indexOf(Hf.product) < 0)
  , XM = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , PM = Dd && window.location.href || "http://localhost"
  , KM = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Dd,
    hasStandardBrowserEnv: YM,
    hasStandardBrowserWebWorkerEnv: XM,
    navigator: Hf,
    origin: PM
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ce = {
    ...KM,
    ...GM
};
function QM(n, i) {
    return ho(n, new ce.classes.URLSearchParams, {
        visitor: function(s, r, o, f) {
            return ce.isNode && V.isBuffer(s) ? (this.append(r, s.toString("base64")),
            !1) : f.defaultVisitor.apply(this, arguments)
        },
        ...i
    })
}
function ZM(n) {
    return V.matchAll(/\w+|\[(\w*)]/g, n).map(i => i[0] === "[]" ? "" : i[1] || i[0])
}
function FM(n) {
    const i = {}
      , s = Object.keys(n);
    let r;
    const o = s.length;
    let f;
    for (r = 0; r < o; r++)
        f = s[r],
        i[f] = n[f];
    return i
}
function I1(n) {
    function i(s, r, o, f) {
        let d = s[f++];
        if (d === "__proto__")
            return !0;
        const h = Number.isFinite(+d)
          , y = f >= s.length;
        return d = !d && V.isArray(o) ? o.length : d,
        y ? (V.hasOwnProp(o, d) ? o[d] = [o[d], r] : o[d] = r,
        !h) : ((!o[d] || !V.isObject(o[d])) && (o[d] = []),
        i(s, r, o[d], f) && V.isArray(o[d]) && (o[d] = FM(o[d])),
        !h)
    }
    if (V.isFormData(n) && V.isFunction(n.entries)) {
        const s = {};
        return V.forEachEntry(n, (r, o) => {
            i(ZM(r), o, s, 0)
        }
        ),
        s
    }
    return null
}
function JM(n, i, s) {
    if (V.isString(n))
        try {
            return (i || JSON.parse)(n),
            V.trim(n)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (s || JSON.stringify)(n)
}
const as = {
    transitional: Md,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(i, s) {
        const r = s.getContentType() || ""
          , o = r.indexOf("application/json") > -1
          , f = V.isObject(i);
        if (f && V.isHTMLForm(i) && (i = new FormData(i)),
        V.isFormData(i))
            return o ? JSON.stringify(I1(i)) : i;
        if (V.isArrayBuffer(i) || V.isBuffer(i) || V.isStream(i) || V.isFile(i) || V.isBlob(i) || V.isReadableStream(i))
            return i;
        if (V.isArrayBufferView(i))
            return i.buffer;
        if (V.isURLSearchParams(i))
            return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            i.toString();
        let h;
        if (f) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return QM(i, this.formSerializer).toString();
            if ((h = V.isFileList(i)) || r.indexOf("multipart/form-data") > -1) {
                const y = this.env && this.env.FormData;
                return ho(h ? {
                    "files[]": i
                } : i, y && new y, this.formSerializer)
            }
        }
        return f || o ? (s.setContentType("application/json", !1),
        JM(i)) : i
    }
    ],
    transformResponse: [function(i) {
        const s = this.transitional || as.transitional
          , r = s && s.forcedJSONParsing
          , o = this.responseType === "json";
        if (V.isResponse(i) || V.isReadableStream(i))
            return i;
        if (i && V.isString(i) && (r && !this.responseType || o)) {
            const d = !(s && s.silentJSONParsing) && o;
            try {
                return JSON.parse(i, this.parseReviver)
            } catch (h) {
                if (d)
                    throw h.name === "SyntaxError" ? st.from(h, st.ERR_BAD_RESPONSE, this, null, this.response) : h
            }
        }
        return i
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: ce.classes.FormData,
        Blob: ce.classes.Blob
    },
    validateStatus: function(i) {
        return i >= 200 && i < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
V.forEach(["delete", "get", "head", "post", "put", "patch"], n => {
    as.headers[n] = {}
}
);
const $M = V.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , WM = n => {
    const i = {};
    let s, r, o;
    return n && n.split(`
`).forEach(function(d) {
        o = d.indexOf(":"),
        s = d.substring(0, o).trim().toLowerCase(),
        r = d.substring(o + 1).trim(),
        !(!s || i[s] && $M[s]) && (s === "set-cookie" ? i[s] ? i[s].push(r) : i[s] = [r] : i[s] = i[s] ? i[s] + ", " + r : r)
    }),
    i
}
  , v0 = Symbol("internals")
  , IM = n => !/[\r\n]/.test(n);
function tb(n, i) {
    if (!(n === !1 || n == null)) {
        if (V.isArray(n)) {
            n.forEach(s => tb(s, i));
            return
        }
        if (!IM(String(n)))
            throw new Error(`Invalid character in header content ["${i}"]`)
    }
}
function Ul(n) {
    return n && String(n).trim().toLowerCase()
}
function tD(n) {
    let i = n.length;
    for (; i > 0; ) {
        const s = n.charCodeAt(i - 1);
        if (s !== 10 && s !== 13)
            break;
        i -= 1
    }
    return i === n.length ? n : n.slice(0, i)
}
function Gr(n) {
    return n === !1 || n == null ? n : V.isArray(n) ? n.map(Gr) : tD(String(n))
}
function eD(n) {
    const i = Object.create(null)
      , s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = s.exec(n); )
        i[r[1]] = r[2];
    return i
}
const nD = n => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function sf(n, i, s, r, o) {
    if (V.isFunction(r))
        return r.call(this, i, s);
    if (o && (i = s),
    !!V.isString(i)) {
        if (V.isString(r))
            return i.indexOf(r) !== -1;
        if (V.isRegExp(r))
            return r.test(i)
    }
}
function aD(n) {
    return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, s, r) => s.toUpperCase() + r)
}
function iD(n, i) {
    const s = V.toCamelCase(" " + i);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(n, r + s, {
            value: function(o, f, d) {
                return this[r].call(this, i, o, f, d)
            },
            configurable: !0
        })
    }
    )
}
let Ae = class {
    constructor(i) {
        i && this.set(i)
    }
    set(i, s, r) {
        const o = this;
        function f(h, y, m) {
            const g = Ul(y);
            if (!g)
                throw new Error("header name must be a non-empty string");
            const v = V.findKey(o, g);
            (!v || o[v] === void 0 || m === !0 || m === void 0 && o[v] !== !1) && (tb(h, y),
            o[v || y] = Gr(h))
        }
        const d = (h, y) => V.forEach(h, (m, g) => f(m, g, y));
        if (V.isPlainObject(i) || i instanceof this.constructor)
            d(i, s);
        else if (V.isString(i) && (i = i.trim()) && !nD(i))
            d(WM(i), s);
        else if (V.isObject(i) && V.isIterable(i)) {
            let h = {}, y, m;
            for (const g of i) {
                if (!V.isArray(g))
                    throw TypeError("Object iterator must return a key-value pair");
                h[m = g[0]] = (y = h[m]) ? V.isArray(y) ? [...y, g[1]] : [y, g[1]] : g[1]
            }
            d(h, s)
        } else
            i != null && f(s, i, r);
        return this
    }
    get(i, s) {
        if (i = Ul(i),
        i) {
            const r = V.findKey(this, i);
            if (r) {
                const o = this[r];
                if (!s)
                    return o;
                if (s === !0)
                    return eD(o);
                if (V.isFunction(s))
                    return s.call(this, o, r);
                if (V.isRegExp(s))
                    return s.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(i, s) {
        if (i = Ul(i),
        i) {
            const r = V.findKey(this, i);
            return !!(r && this[r] !== void 0 && (!s || sf(this, this[r], r, s)))
        }
        return !1
    }
    delete(i, s) {
        const r = this;
        let o = !1;
        function f(d) {
            if (d = Ul(d),
            d) {
                const h = V.findKey(r, d);
                h && (!s || sf(r, r[h], h, s)) && (delete r[h],
                o = !0)
            }
        }
        return V.isArray(i) ? i.forEach(f) : f(i),
        o
    }
    clear(i) {
        const s = Object.keys(this);
        let r = s.length
          , o = !1;
        for (; r--; ) {
            const f = s[r];
            (!i || sf(this, this[f], f, i, !0)) && (delete this[f],
            o = !0)
        }
        return o
    }
    normalize(i) {
        const s = this
          , r = {};
        return V.forEach(this, (o, f) => {
            const d = V.findKey(r, f);
            if (d) {
                s[d] = Gr(o),
                delete s[f];
                return
            }
            const h = i ? aD(f) : String(f).trim();
            h !== f && delete s[f],
            s[h] = Gr(o),
            r[h] = !0
        }
        ),
        this
    }
    concat(...i) {
        return this.constructor.concat(this, ...i)
    }
    toJSON(i) {
        const s = Object.create(null);
        return V.forEach(this, (r, o) => {
            r != null && r !== !1 && (s[o] = i && V.isArray(r) ? r.join(", ") : r)
        }
        ),
        s
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([i,s]) => i + ": " + s).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(i) {
        return i instanceof this ? i : new this(i)
    }
    static concat(i, ...s) {
        const r = new this(i);
        return s.forEach(o => r.set(o)),
        r
    }
    static accessor(i) {
        const r = (this[v0] = this[v0] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function f(d) {
            const h = Ul(d);
            r[h] || (iD(o, d),
            r[h] = !0)
        }
        return V.isArray(i) ? i.forEach(f) : f(i),
        this
    }
}
;
Ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(Ae.prototype, ({value: n}, i) => {
    let s = i[0].toUpperCase() + i.slice(1);
    return {
        get: () => n,
        set(r) {
            this[s] = r
        }
    }
}
);
V.freezeMethods(Ae);
function rf(n, i) {
    const s = this || as
      , r = i || s
      , o = Ae.from(r.headers);
    let f = r.data;
    return V.forEach(n, function(h) {
        f = h.call(s, f, o.normalize(), i ? i.status : void 0)
    }),
    o.normalize(),
    f
}
function eb(n) {
    return !!(n && n.__CANCEL__)
}
let is = class extends st {
    constructor(i, s, r) {
        super(i ?? "canceled", st.ERR_CANCELED, s, r),
        this.name = "CanceledError",
        this.__CANCEL__ = !0
    }
}
;
function nb(n, i, s) {
    const r = s.config.validateStatus;
    !s.status || !r || r(s.status) ? n(s) : i(new st("Request failed with status code " + s.status,[st.ERR_BAD_REQUEST, st.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],s.config,s.request,s))
}
function lD(n) {
    const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
    return i && i[1] || ""
}
function sD(n, i) {
    n = n || 10;
    const s = new Array(n)
      , r = new Array(n);
    let o = 0, f = 0, d;
    return i = i !== void 0 ? i : 1e3,
    function(y) {
        const m = Date.now()
          , g = r[f];
        d || (d = m),
        s[o] = y,
        r[o] = m;
        let v = f
          , S = 0;
        for (; v !== o; )
            S += s[v++],
            v = v % n;
        if (o = (o + 1) % n,
        o === f && (f = (f + 1) % n),
        m - d < i)
            return;
        const w = g && m - g;
        return w ? Math.round(S * 1e3 / w) : void 0
    }
}
function rD(n, i) {
    let s = 0, r = 1e3 / i, o, f;
    const d = (m, g=Date.now()) => {
        s = g,
        o = null,
        f && (clearTimeout(f),
        f = null),
        n(...m)
    }
    ;
    return [ (...m) => {
        const g = Date.now()
          , v = g - s;
        v >= r ? d(m, g) : (o = m,
        f || (f = setTimeout( () => {
            f = null,
            d(o)
        }
        , r - v)))
    }
    , () => o && d(o)]
}
const to = (n, i, s=3) => {
    let r = 0;
    const o = sD(50, 250);
    return rD(f => {
        const d = f.loaded
          , h = f.lengthComputable ? f.total : void 0
          , y = d - r
          , m = o(y)
          , g = d <= h;
        r = d;
        const v = {
            loaded: d,
            total: h,
            progress: h ? d / h : void 0,
            bytes: y,
            rate: m || void 0,
            estimated: m && h && g ? (h - d) / m : void 0,
            event: f,
            lengthComputable: h != null,
            [i ? "download" : "upload"]: !0
        };
        n(v)
    }
    , s)
}
  , b0 = (n, i) => {
    const s = n != null;
    return [r => i[0]({
        lengthComputable: s,
        total: n,
        loaded: r
    }), i[1]]
}
  , S0 = n => (...i) => V.asap( () => n(...i))
  , oD = ce.hasStandardBrowserEnv ? ( (n, i) => s => (s = new URL(s,ce.origin),
n.protocol === s.protocol && n.host === s.host && (i || n.port === s.port)))(new URL(ce.origin), ce.navigator && /(msie|trident)/i.test(ce.navigator.userAgent)) : () => !0
  , uD = ce.hasStandardBrowserEnv ? {
    write(n, i, s, r, o, f, d) {
        if (typeof document > "u")
            return;
        const h = [`${n}=${encodeURIComponent(i)}`];
        V.isNumber(s) && h.push(`expires=${new Date(s).toUTCString()}`),
        V.isString(r) && h.push(`path=${r}`),
        V.isString(o) && h.push(`domain=${o}`),
        f === !0 && h.push("secure"),
        V.isString(d) && h.push(`SameSite=${d}`),
        document.cookie = h.join("; ")
    },
    read(n) {
        if (typeof document > "u")
            return null;
        const i = document.cookie.match(new RegExp("(?:^|; )" + n + "=([^;]*)"));
        return i ? decodeURIComponent(i[1]) : null
    },
    remove(n) {
        this.write(n, "", Date.now() - 864e5, "/")
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function cD(n) {
    return typeof n != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
}
function fD(n, i) {
    return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n
}
function ab(n, i, s) {
    let r = !cD(i);
    return n && (r || s == !1) ? fD(n, i) : i
}
const x0 = n => n instanceof Ae ? {
    ...n
} : n;
function Ha(n, i) {
    i = i || {};
    const s = {};
    function r(m, g, v, S) {
        return V.isPlainObject(m) && V.isPlainObject(g) ? V.merge.call({
            caseless: S
        }, m, g) : V.isPlainObject(g) ? V.merge({}, g) : V.isArray(g) ? g.slice() : g
    }
    function o(m, g, v, S) {
        if (V.isUndefined(g)) {
            if (!V.isUndefined(m))
                return r(void 0, m, v, S)
        } else
            return r(m, g, v, S)
    }
    function f(m, g) {
        if (!V.isUndefined(g))
            return r(void 0, g)
    }
    function d(m, g) {
        if (V.isUndefined(g)) {
            if (!V.isUndefined(m))
                return r(void 0, m)
        } else
            return r(void 0, g)
    }
    function h(m, g, v) {
        if (v in i)
            return r(m, g);
        if (v in n)
            return r(void 0, m)
    }
    const y = {
        url: f,
        method: f,
        data: f,
        baseURL: d,
        transformRequest: d,
        transformResponse: d,
        paramsSerializer: d,
        timeout: d,
        timeoutMessage: d,
        withCredentials: d,
        withXSRFToken: d,
        adapter: d,
        responseType: d,
        xsrfCookieName: d,
        xsrfHeaderName: d,
        onUploadProgress: d,
        onDownloadProgress: d,
        decompress: d,
        maxContentLength: d,
        maxBodyLength: d,
        beforeRedirect: d,
        transport: d,
        httpAgent: d,
        httpsAgent: d,
        cancelToken: d,
        socketPath: d,
        responseEncoding: d,
        validateStatus: h,
        headers: (m, g, v) => o(x0(m), x0(g), v, !0)
    };
    return V.forEach(Object.keys({
        ...n,
        ...i
    }), function(g) {
        if (g === "__proto__" || g === "constructor" || g === "prototype")
            return;
        const v = V.hasOwnProp(y, g) ? y[g] : o
          , S = v(n[g], i[g], g);
        V.isUndefined(S) && v !== h || (s[g] = S)
    }),
    s
}
const ib = n => {
    const i = Ha({}, n);
    let {data: s, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: f, headers: d, auth: h} = i;
    if (i.headers = d = Ae.from(d),
    i.url = W1(ab(i.baseURL, i.url, i.allowAbsoluteUrls), n.params, n.paramsSerializer),
    h && d.set("Authorization", "Basic " + btoa((h.username || "") + ":" + (h.password ? unescape(encodeURIComponent(h.password)) : ""))),
    V.isFormData(s)) {
        if (ce.hasStandardBrowserEnv || ce.hasStandardBrowserWebWorkerEnv)
            d.setContentType(void 0);
        else if (V.isFunction(s.getHeaders)) {
            const y = s.getHeaders()
              , m = ["content-type", "content-length"];
            Object.entries(y).forEach( ([g,v]) => {
                m.includes(g.toLowerCase()) && d.set(g, v)
            }
            )
        }
    }
    if (ce.hasStandardBrowserEnv && (r && V.isFunction(r) && (r = r(i)),
    r || r !== !1 && oD(i.url))) {
        const y = o && f && uD.read(f);
        y && d.set(o, y)
    }
    return i
}
  , dD = typeof XMLHttpRequest < "u"
  , hD = dD && function(n) {
    return new Promise(function(s, r) {
        const o = ib(n);
        let f = o.data;
        const d = Ae.from(o.headers).normalize();
        let {responseType: h, onUploadProgress: y, onDownloadProgress: m} = o, g, v, S, w, x;
        function C() {
            w && w(),
            x && x(),
            o.cancelToken && o.cancelToken.unsubscribe(g),
            o.signal && o.signal.removeEventListener("abort", g)
        }
        let T = new XMLHttpRequest;
        T.open(o.method.toUpperCase(), o.url, !0),
        T.timeout = o.timeout;
        function _() {
            if (!T)
                return;
            const U = Ae.from("getAllResponseHeaders"in T && T.getAllResponseHeaders())
              , P = {
                data: !h || h === "text" || h === "json" ? T.responseText : T.response,
                status: T.status,
                statusText: T.statusText,
                headers: U,
                config: n,
                request: T
            };
            nb(function(K) {
                s(K),
                C()
            }, function(K) {
                r(K),
                C()
            }, P),
            T = null
        }
        "onloadend"in T ? T.onloadend = _ : T.onreadystatechange = function() {
            !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(_)
        }
        ,
        T.onabort = function() {
            T && (r(new st("Request aborted",st.ECONNABORTED,n,T)),
            T = null)
        }
        ,
        T.onerror = function(X) {
            const P = X && X.message ? X.message : "Network Error"
              , I = new st(P,st.ERR_NETWORK,n,T);
            I.event = X || null,
            r(I),
            T = null
        }
        ,
        T.ontimeout = function() {
            let X = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
            const P = o.transitional || Md;
            o.timeoutErrorMessage && (X = o.timeoutErrorMessage),
            r(new st(X,P.clarifyTimeoutError ? st.ETIMEDOUT : st.ECONNABORTED,n,T)),
            T = null
        }
        ,
        f === void 0 && d.setContentType(null),
        "setRequestHeader"in T && V.forEach(d.toJSON(), function(X, P) {
            T.setRequestHeader(P, X)
        }),
        V.isUndefined(o.withCredentials) || (T.withCredentials = !!o.withCredentials),
        h && h !== "json" && (T.responseType = o.responseType),
        m && ([S,x] = to(m, !0),
        T.addEventListener("progress", S)),
        y && T.upload && ([v,w] = to(y),
        T.upload.addEventListener("progress", v),
        T.upload.addEventListener("loadend", w)),
        (o.cancelToken || o.signal) && (g = U => {
            T && (r(!U || U.type ? new is(null,n,T) : U),
            T.abort(),
            T = null)
        }
        ,
        o.cancelToken && o.cancelToken.subscribe(g),
        o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
        const k = lD(o.url);
        if (k && ce.protocols.indexOf(k) === -1) {
            r(new st("Unsupported protocol " + k + ":",st.ERR_BAD_REQUEST,n));
            return
        }
        T.send(f || null)
    }
    )
}
  , mD = (n, i) => {
    const {length: s} = n = n ? n.filter(Boolean) : [];
    if (i || s) {
        let r = new AbortController, o;
        const f = function(m) {
            if (!o) {
                o = !0,
                h();
                const g = m instanceof Error ? m : this.reason;
                r.abort(g instanceof st ? g : new is(g instanceof Error ? g.message : g))
            }
        };
        let d = i && setTimeout( () => {
            d = null,
            f(new st(`timeout of ${i}ms exceeded`,st.ETIMEDOUT))
        }
        , i);
        const h = () => {
            n && (d && clearTimeout(d),
            d = null,
            n.forEach(m => {
                m.unsubscribe ? m.unsubscribe(f) : m.removeEventListener("abort", f)
            }
            ),
            n = null)
        }
        ;
        n.forEach(m => m.addEventListener("abort", f));
        const {signal: y} = r;
        return y.unsubscribe = () => V.asap(h),
        y
    }
}
  , pD = function*(n, i) {
    let s = n.byteLength;
    if (s < i) {
        yield n;
        return
    }
    let r = 0, o;
    for (; r < s; )
        o = r + i,
        yield n.slice(r, o),
        r = o
}
  , yD = async function*(n, i) {
    for await(const s of gD(n))
        yield*pD(s, i)
}
  , gD = async function*(n) {
    if (n[Symbol.asyncIterator]) {
        yield*n;
        return
    }
    const i = n.getReader();
    try {
        for (; ; ) {
            const {done: s, value: r} = await i.read();
            if (s)
                break;
            yield r
        }
    } finally {
        await i.cancel()
    }
}
  , T0 = (n, i, s, r) => {
    const o = yD(n, i);
    let f = 0, d, h = y => {
        d || (d = !0,
        r && r(y))
    }
    ;
    return new ReadableStream({
        async pull(y) {
            try {
                const {done: m, value: g} = await o.next();
                if (m) {
                    h(),
                    y.close();
                    return
                }
                let v = g.byteLength;
                if (s) {
                    let S = f += v;
                    s(S)
                }
                y.enqueue(new Uint8Array(g))
            } catch (m) {
                throw h(m),
                m
            }
        },
        cancel(y) {
            return h(y),
            o.return()
        }
    },{
        highWaterMark: 2
    })
}
  , E0 = 64 * 1024
  , {isFunction: Dr} = V
  , vD = ( ({Request: n, Response: i}) => ({
    Request: n,
    Response: i
}))(V.global)
  , {ReadableStream: A0, TextEncoder: w0} = V.global
  , R0 = (n, ...i) => {
    try {
        return !!n(...i)
    } catch {
        return !1
    }
}
  , bD = n => {
    n = V.merge.call({
        skipUndefined: !0
    }, vD, n);
    const {fetch: i, Request: s, Response: r} = n
      , o = i ? Dr(i) : typeof fetch == "function"
      , f = Dr(s)
      , d = Dr(r);
    if (!o)
        return !1;
    const h = o && Dr(A0)
      , y = o && (typeof w0 == "function" ? (x => C => x.encode(C))(new w0) : async x => new Uint8Array(await new s(x).arrayBuffer()))
      , m = f && h && R0( () => {
        let x = !1;
        const C = new A0
          , T = new s(ce.origin,{
            body: C,
            method: "POST",
            get duplex() {
                return x = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return C.cancel(),
        x && !T
    }
    )
      , g = d && h && R0( () => V.isReadableStream(new r("").body))
      , v = {
        stream: g && (x => x.body)
    };
    o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(x => {
        !v[x] && (v[x] = (C, T) => {
            let _ = C && C[x];
            if (_)
                return _.call(C);
            throw new st(`Response type '${x}' is not supported`,st.ERR_NOT_SUPPORT,T)
        }
        )
    }
    );
    const S = async x => {
        if (x == null)
            return 0;
        if (V.isBlob(x))
            return x.size;
        if (V.isSpecCompliantForm(x))
            return (await new s(ce.origin,{
                method: "POST",
                body: x
            }).arrayBuffer()).byteLength;
        if (V.isArrayBufferView(x) || V.isArrayBuffer(x))
            return x.byteLength;
        if (V.isURLSearchParams(x) && (x = x + ""),
        V.isString(x))
            return (await y(x)).byteLength
    }
      , w = async (x, C) => {
        const T = V.toFiniteNumber(x.getContentLength());
        return T ?? S(C)
    }
    ;
    return async x => {
        let {url: C, method: T, data: _, signal: k, cancelToken: U, timeout: X, onDownloadProgress: P, onUploadProgress: I, responseType: K, headers: J, withCredentials: at="same-origin", fetchOptions: tt} = ib(x)
          , dt = i || fetch;
        K = K ? (K + "").toLowerCase() : "text";
        let ht = mD([k, U && U.toAbortSignal()], X)
          , zt = null;
        const At = ht && ht.unsubscribe && ( () => {
            ht.unsubscribe()
        }
        );
        let xt;
        try {
            if (I && m && T !== "get" && T !== "head" && (xt = await w(J, _)) !== 0) {
                let R = new s(C,{
                    method: "POST",
                    body: _,
                    duplex: "half"
                }), q;
                if (V.isFormData(_) && (q = R.headers.get("content-type")) && J.setContentType(q),
                R.body) {
                    const [Z,$] = b0(xt, to(S0(I)));
                    _ = T0(R.body, E0, Z, $)
                }
            }
            V.isString(at) || (at = at ? "include" : "omit");
            const L = f && "credentials"in s.prototype
              , Q = {
                ...tt,
                signal: ht,
                method: T.toUpperCase(),
                headers: J.normalize().toJSON(),
                body: _,
                duplex: "half",
                credentials: L ? at : void 0
            };
            zt = f && new s(C,Q);
            let F = await (f ? dt(zt, tt) : dt(C, Q));
            const ot = g && (K === "stream" || K === "response");
            if (g && (P || ot && At)) {
                const R = {};
                ["status", "statusText", "headers"].forEach(rt => {
                    R[rt] = F[rt]
                }
                );
                const q = V.toFiniteNumber(F.headers.get("content-length"))
                  , [Z,$] = P && b0(q, to(S0(P), !0)) || [];
                F = new r(T0(F.body, E0, Z, () => {
                    $ && $(),
                    At && At()
                }
                ),R)
            }
            K = K || "text";
            let mt = await v[V.findKey(v, K) || "text"](F, x);
            return !ot && At && At(),
            await new Promise( (R, q) => {
                nb(R, q, {
                    data: mt,
                    headers: Ae.from(F.headers),
                    status: F.status,
                    statusText: F.statusText,
                    config: x,
                    request: zt
                })
            }
            )
        } catch (L) {
            throw At && At(),
            L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(new st("Network Error",st.ERR_NETWORK,x,zt,L && L.response), {
                cause: L.cause || L
            }) : st.from(L, L && L.code, x, zt, L && L.response)
        }
    }
}
  , SD = new Map
  , lb = n => {
    let i = n && n.env || {};
    const {fetch: s, Request: r, Response: o} = i
      , f = [r, o, s];
    let d = f.length, h = d, y, m, g = SD;
    for (; h--; )
        y = f[h],
        m = g.get(y),
        m === void 0 && g.set(y, m = h ? new Map : bD(i)),
        g = m;
    return m
}
;
lb();
const Od = {
    http: LM,
    xhr: hD,
    fetch: {
        get: lb
    }
};
V.forEach(Od, (n, i) => {
    if (n) {
        try {
            Object.defineProperty(n, "name", {
                value: i
            })
        } catch {}
        Object.defineProperty(n, "adapterName", {
            value: i
        })
    }
}
);
const C0 = n => `- ${n}`
  , xD = n => V.isFunction(n) || n === null || n === !1;
function TD(n, i) {
    n = V.isArray(n) ? n : [n];
    const {length: s} = n;
    let r, o;
    const f = {};
    for (let d = 0; d < s; d++) {
        r = n[d];
        let h;
        if (o = r,
        !xD(r) && (o = Od[(h = String(r)).toLowerCase()],
        o === void 0))
            throw new st(`Unknown adapter '${h}'`);
        if (o && (V.isFunction(o) || (o = o.get(i))))
            break;
        f[h || "#" + d] = o
    }
    if (!o) {
        const d = Object.entries(f).map( ([y,m]) => `adapter ${y} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build"));
        let h = s ? d.length > 1 ? `since :
` + d.map(C0).join(`
`) : " " + C0(d[0]) : "as no adapter specified";
        throw new st("There is no suitable adapter to dispatch the request " + h,"ERR_NOT_SUPPORT")
    }
    return o
}
const sb = {
    getAdapter: TD,
    adapters: Od
};
function of(n) {
    if (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
        throw new is(null,n)
}
function M0(n) {
    return of(n),
    n.headers = Ae.from(n.headers),
    n.data = rf.call(n, n.transformRequest),
    ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1),
    sb.getAdapter(n.adapter || as.adapter, n)(n).then(function(r) {
        return of(n),
        r.data = rf.call(n, n.transformResponse, r),
        r.headers = Ae.from(r.headers),
        r
    }, function(r) {
        return eb(r) || (of(n),
        r && r.response && (r.response.data = rf.call(n, n.transformResponse, r.response),
        r.response.headers = Ae.from(r.response.headers))),
        Promise.reject(r)
    })
}
const rb = "1.15.0"
  , mo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (n, i) => {
    mo[n] = function(r) {
        return typeof r === n || "a" + (i < 1 ? "n " : " ") + n
    }
}
);
const D0 = {};
mo.transitional = function(i, s, r) {
    function o(f, d) {
        return "[Axios v" + rb + "] Transitional option '" + f + "'" + d + (r ? ". " + r : "")
    }
    return (f, d, h) => {
        if (i === !1)
            throw new st(o(d, " has been removed" + (s ? " in " + s : "")),st.ERR_DEPRECATED);
        return s && !D0[d] && (D0[d] = !0,
        console.warn(o(d, " has been deprecated since v" + s + " and will be removed in the near future"))),
        i ? i(f, d, h) : !0
    }
}
;
mo.spelling = function(i) {
    return (s, r) => (console.warn(`${r} is likely a misspelling of ${i}`),
    !0)
}
;
function ED(n, i, s) {
    if (typeof n != "object")
        throw new st("options must be an object",st.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(n);
    let o = r.length;
    for (; o-- > 0; ) {
        const f = r[o]
          , d = i[f];
        if (d) {
            const h = n[f]
              , y = h === void 0 || d(h, f, n);
            if (y !== !0)
                throw new st("option " + f + " must be " + y,st.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (s !== !0)
            throw new st("Unknown option " + f,st.ERR_BAD_OPTION)
    }
}
const Yr = {
    assertOptions: ED,
    validators: mo
}
  , Qe = Yr.validators;
let Ba = class {
    constructor(i) {
        this.defaults = i || {},
        this.interceptors = {
            request: new g0,
            response: new g0
        }
    }
    async request(i, s) {
        try {
            return await this._request(i, s)
        } catch (r) {
            if (r instanceof Error) {
                let o = {};
                Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error;
                const f = ( () => {
                    if (!o.stack)
                        return "";
                    const d = o.stack.indexOf(`
`);
                    return d === -1 ? "" : o.stack.slice(d + 1)
                }
                )();
                try {
                    if (!r.stack)
                        r.stack = f;
                    else if (f) {
                        const d = f.indexOf(`
`)
                          , h = d === -1 ? -1 : f.indexOf(`
`, d + 1)
                          , y = h === -1 ? "" : f.slice(h + 1);
                        String(r.stack).endsWith(y) || (r.stack += `
` + f)
                    }
                } catch {}
            }
            throw r
        }
    }
    _request(i, s) {
        typeof i == "string" ? (s = s || {},
        s.url = i) : s = i || {},
        s = Ha(this.defaults, s);
        const {transitional: r, paramsSerializer: o, headers: f} = s;
        r !== void 0 && Yr.assertOptions(r, {
            silentJSONParsing: Qe.transitional(Qe.boolean),
            forcedJSONParsing: Qe.transitional(Qe.boolean),
            clarifyTimeoutError: Qe.transitional(Qe.boolean),
            legacyInterceptorReqResOrdering: Qe.transitional(Qe.boolean)
        }, !1),
        o != null && (V.isFunction(o) ? s.paramsSerializer = {
            serialize: o
        } : Yr.assertOptions(o, {
            encode: Qe.function,
            serialize: Qe.function
        }, !0)),
        s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0),
        Yr.assertOptions(s, {
            baseUrl: Qe.spelling("baseURL"),
            withXsrfToken: Qe.spelling("withXSRFToken")
        }, !0),
        s.method = (s.method || this.defaults.method || "get").toLowerCase();
        let d = f && V.merge(f.common, f[s.method]);
        f && V.forEach(["delete", "get", "head", "post", "put", "patch", "common"], x => {
            delete f[x]
        }
        ),
        s.headers = Ae.concat(d, f);
        const h = [];
        let y = !0;
        this.interceptors.request.forEach(function(C) {
            if (typeof C.runWhen == "function" && C.runWhen(s) === !1)
                return;
            y = y && C.synchronous;
            const T = s.transitional || Md;
            T && T.legacyInterceptorReqResOrdering ? h.unshift(C.fulfilled, C.rejected) : h.push(C.fulfilled, C.rejected)
        });
        const m = [];
        this.interceptors.response.forEach(function(C) {
            m.push(C.fulfilled, C.rejected)
        });
        let g, v = 0, S;
        if (!y) {
            const x = [M0.bind(this), void 0];
            for (x.unshift(...h),
            x.push(...m),
            S = x.length,
            g = Promise.resolve(s); v < S; )
                g = g.then(x[v++], x[v++]);
            return g
        }
        S = h.length;
        let w = s;
        for (; v < S; ) {
            const x = h[v++]
              , C = h[v++];
            try {
                w = x(w)
            } catch (T) {
                C.call(this, T);
                break
            }
        }
        try {
            g = M0.call(this, w)
        } catch (x) {
            return Promise.reject(x)
        }
        for (v = 0,
        S = m.length; v < S; )
            g = g.then(m[v++], m[v++]);
        return g
    }
    getUri(i) {
        i = Ha(this.defaults, i);
        const s = ab(i.baseURL, i.url, i.allowAbsoluteUrls);
        return W1(s, i.params, i.paramsSerializer)
    }
}
;
V.forEach(["delete", "get", "head", "options"], function(i) {
    Ba.prototype[i] = function(s, r) {
        return this.request(Ha(r || {}, {
            method: i,
            url: s,
            data: (r || {}).data
        }))
    }
});
V.forEach(["post", "put", "patch"], function(i) {
    function s(r) {
        return function(f, d, h) {
            return this.request(Ha(h || {}, {
                method: i,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: f,
                data: d
            }))
        }
    }
    Ba.prototype[i] = s(),
    Ba.prototype[i + "Form"] = s(!0)
});
let AD = class ob {
    constructor(i) {
        if (typeof i != "function")
            throw new TypeError("executor must be a function.");
        let s;
        this.promise = new Promise(function(f) {
            s = f
        }
        );
        const r = this;
        this.promise.then(o => {
            if (!r._listeners)
                return;
            let f = r._listeners.length;
            for (; f-- > 0; )
                r._listeners[f](o);
            r._listeners = null
        }
        ),
        this.promise.then = o => {
            let f;
            const d = new Promise(h => {
                r.subscribe(h),
                f = h
            }
            ).then(o);
            return d.cancel = function() {
                r.unsubscribe(f)
            }
            ,
            d
        }
        ,
        i(function(f, d, h) {
            r.reason || (r.reason = new is(f,d,h),
            s(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(i) {
        if (this.reason) {
            i(this.reason);
            return
        }
        this._listeners ? this._listeners.push(i) : this._listeners = [i]
    }
    unsubscribe(i) {
        if (!this._listeners)
            return;
        const s = this._listeners.indexOf(i);
        s !== -1 && this._listeners.splice(s, 1)
    }
    toAbortSignal() {
        const i = new AbortController
          , s = r => {
            i.abort(r)
        }
        ;
        return this.subscribe(s),
        i.signal.unsubscribe = () => this.unsubscribe(s),
        i.signal
    }
    static source() {
        let i;
        return {
            token: new ob(function(o) {
                i = o
            }
            ),
            cancel: i
        }
    }
}
;
function wD(n) {
    return function(s) {
        return n.apply(null, s)
    }
}
function RD(n) {
    return V.isObject(n) && n.isAxiosError === !0
}
const kf = {
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
Object.entries(kf).forEach( ([n,i]) => {
    kf[i] = n
}
);
function ub(n) {
    const i = new Ba(n)
      , s = q1(Ba.prototype.request, i);
    return V.extend(s, Ba.prototype, i, {
        allOwnKeys: !0
    }),
    V.extend(s, i, null, {
        allOwnKeys: !0
    }),
    s.create = function(o) {
        return ub(Ha(n, o))
    }
    ,
    s
}
const Bt = ub(as);
Bt.Axios = Ba;
Bt.CanceledError = is;
Bt.CancelToken = AD;
Bt.isCancel = eb;
Bt.VERSION = rb;
Bt.toFormData = ho;
Bt.AxiosError = st;
Bt.Cancel = Bt.CanceledError;
Bt.all = function(i) {
    return Promise.all(i)
}
;
Bt.spread = wD;
Bt.isAxiosError = RD;
Bt.mergeConfig = Ha;
Bt.AxiosHeaders = Ae;
Bt.formToJSON = n => I1(V.isHTMLForm(n) ? new FormData(n) : n);
Bt.getAdapter = sb.getAdapter;
Bt.HttpStatusCode = kf;
Bt.default = Bt;
const {Axios: c3, AxiosError: f3, CanceledError: d3, isCancel: h3, CancelToken: m3, VERSION: p3, all: y3, Cancel: g3, isAxiosError: v3, spread: b3, toFormData: S3, AxiosHeaders: x3, HttpStatusCode: T3, formToJSON: E3, getAdapter: A3, mergeConfig: w3} = Bt
  , CD = () => {
    const n = window.location.hostname;
    return {
        "modmenuhack.sbs": {
            variant: "apr1",
            storageKey: "APR1_user",
            whatsapp: "919875736055",
            telegram: "modapksh",
            youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4"
        },
        "modmenuhack.site": {
            variant: "apr2",
            storageKey: "APR2_user",
            whatsapp: "918239817438",
            telegram: "modapksales",
            youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4"
        },
        "modmenuhack.buzz": {
            variant: "apr3",
            storageKey: "APR3_user",
            whatsapp: "917357984291",
            telegram: "hackerbabaji1",
            youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4"
        }
    }[n] || {
        variant: "apr1",
        storageKey: "APR1_user",
        whatsapp: "919875736055",
        telegram: "modapksh",
        youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4"
    }
}
  , MD = () => {
    const [n,i] = A.useState(!0)
      , [s,r] = A.useState(!1)
      , [o,f] = A.useState({
        phone: "",
        password: ""
    })
      , d = Li()
      , {variant: h, storageKey: y, whatsapp: m, telegram: g, youtube: v} = CD()
      , S = async w => {
        w.preventDefault();
        const {phone: x, password: C} = o;
        if (!/^[0-9]{10}$/.test(x)) {
            alert("Please enter a valid 10-digit phone number.");
            return
        }
        if (C.length < 6) {
            alert("Password must be at least 6 characters.");
            return
        }
        r(!0);
        try {
            const T = n ? "/api/apr/login" : "/api/apr/signup"
              , _ = await Bt.post(T, {
                ...o,
                variant: h
            });
            _.data.user && (localStorage.setItem(y, JSON.stringify(_.data.user)),
            d("/portal"))
        } catch {
            d("/portal")
        } finally {
            r(!1)
        }
    }
    ;
    return M.jsxs("div", {
        className: "min-h-screen bg-white font-['Poppins'] flex flex-col items-center pb-10",
        children: [M.jsxs("div", {
            className: "w-full p-4 flex justify-between items-center mb-6",
            children: [M.jsx("button", {
                className: "p-2 bg-red-50 rounded-full text-red-800 active:scale-90 transition-transform"
            }), M.jsxs("h1", {
                className: "text-[#1a47cc] font-black text-2xl text-center leading-tight",
                children: "CRACKED BY ASHURA"
            }), M.jsx("div", {
                className: "w-10 h-10"
            }), " "]
        }), M.jsxs("div", {
            className: "w-full max-w-[420px] px-6",
            children: [M.jsx("div", {
                className: "flex justify-center mb-10",
                children: M.jsx(Oi.div, {
                    initial: {
                        y: -10,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    className: "bg-[#c2412e] text-white px-10 py-3.5 rounded-full font-black text-lg shadow-lg border-b-4 border-black/20 flex items-center gap-3",
                    children: n ? "USER LOGIN" : "CREATE ACCOUNT"
                })
            }), M.jsxs("form", {
                onSubmit: S,
                className: "space-y-6",
                children: [M.jsxs("div", {
                    className: "space-y-2",
                    children: [M.jsxs("label", {
                        className: "text-[#1a47cc] font-black text-xs ml-4 flex items-center gap-2 tracking-wider",
                        children: [M.jsx(jC, {
                            size: 14,
                            fill: "#1a47cc",
                            className: "text-white"
                        }), " MOBILE NUMBER"]
                    }), M.jsx("input", {
                        type: "tel",
                        placeholder: "Enter 10 digit number",
                        className: "w-full bg-[#f0f7ff] border-2 border-[#5da2c4] py-4 px-6 rounded-full font-bold text-gray-800 outline-none focus:border-[#1a47cc] focus:bg-white transition-all shadow-inner",
                        value: o.phone,
                        onChange: w => f({
                            ...o,
                            phone: w.target.value
                        }),
                        required: !0,
                        maxLength: 10
                    })]
                }), M.jsxs("div", {
                    className: "space-y-2",
                    children: [M.jsxs("label", {
                        className: "text-[#1a47cc] font-black text-xs ml-4 flex items-center gap-2 tracking-wider",
                        children: [M.jsx(DC, {
                            size: 14,
                            fill: "#1a47cc",
                            className: "text-white"
                        }), " ACCOUNT PASSWORD"]
                    }), M.jsx("input", {
                        type: "password",
                        placeholder: "••••••••",
                        className: "w-full bg-[#f0f7ff] border-2 border-[#5da2c4] py-4 px-6 rounded-full font-bold text-gray-800 outline-none focus:border-[#1a47cc] focus:bg-white transition-all shadow-inner",
                        value: o.password,
                        onChange: w => f({
                            ...o,
                            password: w.target.value
                        }),
                        required: !0
                    })]
                }), M.jsxs(Oi.button, {
                    whileTap: {
                        scale: .96
                    },
                    type: "submit",
                    disabled: s,
                    className: "w-full bg-[#1a47cc] text-white py-4 rounded-full font-black text-xl shadow-lg border-b-4 border-black/20 flex items-center justify-center gap-3 active:translate-y-1 transition-all",
                    children: [s ? "AUTHENTICATING..." : n ? "LOGIN NOW" : "REGISTER NOW", M.jsx("div", {
                        className: "bg-white text-[#1a47cc] rounded-full p-1 shadow-md",
                        children: M.jsx(wC, {
                            size: 18,
                            strokeWidth: 4
                        })
                    })]
                })]
            }), M.jsx("div", {
                className: "mt-8 text-center",
                children: M.jsx("button", {
                    onClick: () => i(!n),
                    className: "text-[#c2412e] font-black text-sm border-b-2 border-[#c2412e] pb-0.5 uppercase tracking-tighter hover:opacity-80 transition-opacity",
                    children: n ? "New here? Create an Account" : "Already a member? Login here"
                })
            }), M.jsx("div", {
                className: "mt-10 bg-[#f8fafc] border-2 border-dashed border-[#5da2c4] rounded-2xl p-5 text-center shadow-sm",
                children: M.jsxs("p", {
                    className: "text-gray-700 text-[11px] font-bold leading-relaxed",
                    children: ["यह मॉड मेनू पूरी तरह सुरक्षित है। अपनी गेम आईडी लॉगिन करें ", M.jsx("br", {}), "और सटीक प्रेडिक्शन के साथ जीतना शुरू करें। ", M.jsx("br", {}), M.jsx("span", {
                        className: "text-[#1a47cc]",
                        children: "किसी भी तकनीकी सहायता के लिए टेलीग्राम पर संपर्क करें।"
                    })]
                })
            }), M.jsxs("div", {
                className: "mt-10 flex justify-center gap-8",
                children: [M.jsx(uf, {
                    onClick: () => window.open(`https://wa.me/${m}`),
                    icon: M.jsx(B1, {
                        size: 28
                    }),
                    color: "bg-green-500"
                }), M.jsx(uf, {
                    onClick: () => window.open(`https://t.me/${g}`),
                    icon: M.jsx(H1, {
                        size: 28
                    }),
                    color: "bg-blue-400"
                }), M.jsx(uf, {
                    onClick: () => window.open(v),
                    icon: M.jsx(k1, {
                        size: 28
                    }),
                    color: "bg-red-600"
                })]
            })]
        })]
    })
}
  , uf = ({icon: n, color: i, onClick: s}) => M.jsx(Oi.button, {
    whileTap: {
        scale: .85
    },
    onClick: s,
    className: `w-14 h-14 ${i} rounded-full flex items-center justify-center text-white shadow-xl border-b-4 border-black/20`,
    children: n
})
  , ashuraBase = (() => {
    const i = document.querySelector('meta[name="repo-base"]')?.content?.trim();
    if (i)
        return i.endsWith("/") ? i : i + "/";
    if (location.hostname.endsWith(".github.io")) {
        const s = location.pathname.split("/").filter(Boolean)[0];
        if (s && !["portal", "game", "auth"].includes(s) && !s.startsWith("admin"))
            return "/" + s + "/"
    }
    return "/"
})()
  , ashuraBasename = ashuraBase === "/" ? "" : ashuraBase.replace(/\/$/, "")
  , DD = ashuraBase + "assets/logo1-BQl2EQ5G.png"
  , OD = ashuraBase + "assets/logo2-DejRw_sH.png"
  , ND = ashuraBase + "assets/logo3-DYXfwmVk.png"
  , _D = ashuraBase + "assets/logo4-Ckf5-nxi.png"
  , jD = ashuraBase + "assets/logo5-x9eoSNox.png"
  , zD = ashuraBase + "assets/logo6-p-YRFYUD.png"
  , LD = ashuraBase + "assets/logo7-DYIu7ML8.png"
  , O0 = ashuraBase + "assets/logo8-D-YxHPMV.png"
  , VD = ashuraBase + "assets/logo9-CltNiMBM.png"
  , UD = ashuraBase + "assets/logo12-C0dGOmC0.webp"
  , BD = ashuraBase + "assets/jai-jW-d6eEp.jpg"
  , HD = ashuraBase + "assets/logo13-B8qLmnHE.webp"
  , kD = ashuraBase + "assets/logo14-Dw3MxVVj.png"
  , qD = ashuraBase + "assets/logo15-BOMJYOf7.png"
  , GD = ashuraBase + "assets/logo16-BqxNOuBe.png"
  , YD = ashuraBase + "assets/logo17-D1C3zUR9.png"
  , XD = ashuraBase + "assets/logo18-DxfPVnId.png"
  , PD = ashuraBase + "assets/logo19-BWZ7KWEs.png"
  , KD = ashuraBase + "assets/logo20-BR7dt3Ym.png"
  , QD = ashuraBase + "assets/logo21-CSSq9Ldh.png"
  , ZD = ashuraBase + "assets/logo22-D7ro20k2.png"
  , FD = () => {
    const n = window.location.hostname;
    return n.includes("modmenuhack.sbs") ? {
        variant: "apr1",
        storageKey: "APR1_user",
        whatsapp: "919875736055",
        telegram: "modapksh",
        youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4",
        rajaLink: "https://rajagames91.xyz/#/register?invitationCode=155064101080"
    } : n.includes("modmenuhack.site") ? {
        variant: "apr2",
        storageKey: "APR2_user",
        whatsapp: "918239817438",
        telegram: "modapksales",
        youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4",
        rajaLink: "https://rajagames111.com/#/register?invitationCode=643349101079"
    } : n.includes("modmenuhack.buzz") ? {
        variant: "apr3",
        storageKey: "APR3_user",
        whatsapp: "917357984291",
        telegram: "hackerbabaji1",
        youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4",
        rajaLink: "https://rajagames100.com/#/register?invitationCode=815360101080"
    } : {
        variant: "apr1",
        storageKey: "APR1_user",
        whatsapp: "919875736055",
        telegram: "modapksh",
        youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4",
        rajaLink: "https://rajagames91.xyz/#/register?invitationCode=155064101080"
    }
}
  , JD = n => {
    if (!n)
        return "---";
    const i = new Date(n)
      , s = String(i.getDate()).padStart(2, "0")
      , r = String(i.getMonth() + 1).padStart(2, "0")
      , o = i.getFullYear();
    return `${s}-${r}-${o}`
}
  , $D = () => {
    const n = Li()
      , {variant: i, storageKey: s, whatsapp: r, telegram: o, rajaLink: f} = FD()
      , [d,h] = A.useState(!0)
      , [y,m] = A.useState("")
      , [g,v] = A.useState(!1)
      , [S,w] = A.useState(8245)
      , [x,C] = A.useState(!1)
      , T = JSON.parse(localStorage.getItem(s));
    A.useEffect( () => {
        h(!0),
        m("VIP")
    }
    , [i]),
    A.useEffect( () => {
        if (d)
            return;
        T && (async () => {
            const I = JSON.parse(localStorage.getItem("apr_current_order"));
            if (I && T)
                try {
                    (await Bt.post("/api/apr/payment/status", {
                        order_id: I.order_id,
                        phone: T.phone,
                        variant: i
                    })).data.status === "Success" && (alert("Success! VIP Activated."),
                    h(!0),
                    localStorage.removeItem("apr_current_order"))
                } catch {
                    console.error("Verification failed")
                }
        }
        )()
    }
    , [T, i]);
    const _ = async () => {
        C(!0);
        try {
            const P = await Bt.post("/api/apr/payment/create", {
                phone: T.phone,
                variant: i
            });
            P.data.status && P.data.results.payment_url && (localStorage.setItem("apr_current_order", JSON.stringify({
                order_id: P.data.results.order_id
            })),
            window.location.href = P.data.results.payment_url)
        } catch {
            alert("Payment failed to initialize.")
        } finally {
            C(!1)
        }
    }
    ;
    A.useEffect( () => {
        const P = setInterval( () => {
            w(Math.floor(Math.random() * 2501) + 7500)
        }
        , 5e3);
        return () => clearInterval(P)
    }
    , []);
    const k = P => {
        n("/game", {
            state: {
                ...P
            }
        })
    }
      , U = [{
        name: "JaiClub",
        logo: BD,
        link: "https://www.jaiclub21.com/#/register?invitationCode=32674240216",
        hot: !0
    }, {
        name: "RajaLottery",
        logo: O0,
        link: f,
        hot: !0
    }, {
        name: "91Club",
        logo: DD,
        link: "https://www.ehIndia.com/#/register?invitationCode=87134963862",
        hot: !0
    }, {
        name: "55Club",
        logo: OD,
        link: "https://55clubofficial.xyz/#/register?invitationCode=434633101080",
        hot: !0
    }, {
        name: "In999",
        logo: ND,
        link: "https://www.ilxd28.com/#/register?invitationCode=167266601273",
        hot: !0
    }, {
        name: "DamanGames",
        logo: _D,
        link: "https://damanvipgame.com/register?invitationCode=4879717468242",
        hot: !0
    }, {
        name: "BDG Game",
        logo: jD,
        link: "https://bdg-ipl.vip//#/register?invitationCode=7868719070147",
        hot: !0
    }, {
        name: "Jalwa Game",
        logo: HD,
        link: "https://jalwaclub3.com/#/register?invitationCode=84518166493",
        hot: !0
    }, {
        name: "Bharat Club",
        logo: qD,
        link: "https://bhtclub3.com/#/register?invitationCode=562615493882",
        hot: !0
    }, {
        name: "51Game",
        logo: UD,
        link: "https://www.51gameo.com/#/register?invitationCode=325163568721",
        hot: !0
    }, {
        name: "82Lottery",
        logo: GD,
        link: "https://www.82winoo.com/#/register?invitationCode=666533745649",
        hot: !0
    }, {
        name: "66Lottery",
        logo: YD,
        link: "https://www.66lottery.vip/#/pages/login/register?invitationCode=5218250409",
        hot: !0
    }, {
        name: "DiuWin",
        logo: kD,
        link: " https://www.5diuwin.com/#/register?invitationCode=7626511684473",
        hot: !0
    }, {
        name: "Tiranga",
        logo: zD,
        link: "https://tgdream.pro/#/register?invitationCode=8752724598773",
        hot: !1
    }, {
        name: "BDG Win",
        logo: LD,
        link: " https://bdgwina.top//#/register?invitationCode=4138512408865",
        hot: !1
    }, {
        name: "OK Win",
        logo: VD,
        link: "https://okwinslots4.com/#/register?invitationCode=755836029251",
        hot: !1
    }, {
        name: "RajaLuck",
        logo: O0,
        link: "https://rajaluckvip.com/register?invitationCode=3060605020010",
        hot: !1
    }, {
        name: "Big Mumbai",
        logo: XD,
        link: "https://www.bigmumbaic.com/#/register?invitationCode=6467867363",
        hot: !1
    }, {
        name: "Goa Game",
        logo: PD,
        link: "https://www.goaok.vip/#/register?invitationCode=675458825209",
        hot: !1
    }, {
        name: "KWG",
        logo: KD,
        link: "https://www.kwgin1.com/#/register?invitationCode=25913Z5322",
        hot: !1
    }, {
        name: "Lottery 7",
        logo: QD,
        link: "https://www.lottery7ddd.com/#/register?invitationCode=1475713204859",
        hot: !1
    }, {
        name: "Sikkim Game",
        logo: ZD,
        link: "https://sikkimgame.cash/register#/register?invitationCode=395152651469",
        hot: !1
    }]
      , X = () => {
        localStorage.removeItem(s),
        n("/portal")
    }
    ;
    return M.jsxs("div", {
        className: "min-h-screen bg-white font-['Poppins'] pb-20 pt-5",
        children: [M.jsxs("div", {
            className: "p-4 flex justify-between items-center",
            children: [M.jsx("button", {
                className: "p-2 bg-red-900/10 rounded-full text-red-800",
                children: M.jsx(WD, {
                    size: 20
                })
            }), M.jsxs("h1", {
                className: "text-[#1a47cc] font-black text-2xl text-center leading-tight",
                children: "CRACKED BY ASHURA"
            }), M.jsx("button", {
                onClick: X,
                className: "p-2 bg-red-900/10 rounded-full text-red-800",
                children: M.jsx(NC, {
                    size: 20
                })
            })]
        }), M.jsx("div", {
            className: "flex flex-col items-center mb-6",
            children: d ? M.jsxs("div", {
                className: "",
                children: [M.jsxs("div", {
                    className: "bg-black border-4 border-yellow-600 rounded-xl p-3 flex items-center justify-center gap-3 shadow-lg",
                    children: [M.jsx("span", {
                        className: "text-yellow-500 font-black text-2xl italic",
                        children: "VIP"
                    }), M.jsx(d0, {
                        className: "text-yellow-500 fill-yellow-500",
                        size: 24
                    }), M.jsx("span", {
                        className: "text-yellow-500 font-bold tracking-widest",
                        children: "MEMBER"
                    })]
                }), M.jsxs("p", {
                    className: "text-center text-gray-600 font-mono mt-1 text-sm",
                    children: ["TILL - ", y]
                })]
            }) : M.jsxs("div", {
                className: "w-[80%] flex flex-col items-center",
                children: [M.jsxs("button", {
                    onClick: () => v(!0),
                    className: "w-full bg-[#c2412e] text-white py-3 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-md",
                    children: ["ACCESS VIP MODE ", M.jsx("div", {
                        className: "bg-yellow-200/20 p-1 rounded",
                        children: "VIP"
                    })]
                }), M.jsx("p", {
                    className: "text-red-600 font-bold mt-2 text-sm",
                    children: "You're not VIP USER"
                })]
            })
        }), M.jsx("div", {
            className: "px-10 space-y-5",
            children: U.map( (P, I) => M.jsxs("button", {
                onClick: () => k(P),
                className: "w-full bg-[#5da2c4] rounded-full p-1.5 flex items-center justify-between pr-6 shadow-md",
                children: [M.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [M.jsx("img", {
                        src: P.logo,
                        className: "w-12 h-12 rounded-full",
                        alt: ""
                    }), M.jsx("span", {
                        className: "text-white font-black text-xl tracking-wider",
                        children: P.name
                    })]
                }), M.jsxs("div", {
                    className: "bg-yellow-500/80 p-1 rounded-md text-[10px] font-bold text-white flex items-center gap-1",
                    children: [M.jsx(d0, {
                        size: 10,
                        fill: "white"
                    }), " VIP"]
                })]
            }, I))
        }), M.jsx("div", {
            className: "mt-8 px-6",
            children: M.jsx("div", {
                className: "bg-white border-2 border-[#5da2c4] rounded-2xl p-4 text-center",
                children: d ? M.jsxs("div", {
                    className: "text-[#1a47cc] text-sm font-bold space-y-1",
                    children: [M.jsx("p", {
                        children: "आपका VIP एक्सेस सफलतापूर्वक एक्टिव हो गया है।"
                    }), M.jsx("p", {
                        children: "अब आप सभी प्रीमियम टूल्स का उपयोग कर सकते हैं।"
                    }), M.jsxs("ul", {
                        className: "text-left inline-block mt-2",
                        children: [M.jsx("li", {
                            children: "• Number Sureshot"
                        }), M.jsx("li", {
                            children: "• Big Small Sureshot"
                        }), M.jsx("li", {
                            children: "• 24x7 Live Support"
                        })]
                    })]
                }) : M.jsxs("div", {
                    className: "text-gray-800 text-[12px] font-bold leading-relaxed",
                    children: ["यह हैक सिर्फ VIP यूजर ही इस्तेमाल कर सकते है।", M.jsx("br", {}), "इसलिए ACCESS VIP MODE पर क्लिक करके VIP यूजर बने।", M.jsx("br", {}), "एक बार पेमेंट करने पर यूजर सभी हैक इस्तेमाल कर सकता है।", M.jsx("br", {}), "पेमेंट करने का बाद यह हैक 17 दिनों तक चलेगा।"]
                })
            })
        }), M.jsxs("div", {
            className: "mt-5 flex justify-center gap-6",
            children: [M.jsx("button", {
                onClick: () => window.open(`https://wa.me/${r}`),
                className: "w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg",
                children: M.jsx(B1, {
                    size: 30
                })
            }), M.jsx("button", {
                onClick: () => window.open(`https://t.me/${o}`),
                className: "w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center text-white shadow-lg",
                children: M.jsx(H1, {
                    size: 30
                })
            }), M.jsx("button", {
                className: "w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg",
                children: M.jsx(k1, {
                    size: 30
                })
            })]
        }), M.jsx(cR, {
            children: g && M.jsx(Oi.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "fixed inset-0 z-[2000] bg-black/60 flex items-center justify-center p-6 backdrop-blur-sm",
                children: M.jsxs(Oi.div, {
                    initial: {
                        scale: .9,
                        y: 20
                    },
                    animate: {
                        scale: 1,
                        y: 0
                    },
                    className: "bg-[#d7e9ff] w-full max-w-sm rounded-[30px] overflow-hidden relative border-2 border-red-500 shadow-2xl",
                    children: [M.jsx("button", {
                        onClick: () => v(!1),
                        className: "absolute top-4 right-4 bg-red-500 text-white rounded-full p-1 z-10",
                        children: M.jsx(PC, {
                            size: 20
                        })
                    }), M.jsxs("div", {
                        className: "p-6 pt-10 text-center",
                        children: [M.jsxs("h2", {
                            className: "text-[#1a47cc] font-black text-xl mb-4",
                            children: ["ACCESS VIP HACK IN ", M.jsx("span", {
                                className: "text-green-600",
                                children: "₹710"
                            })]
                        }), M.jsx("button", {
                            className: "w-full bg-[#a81c07] text-white py-4 rounded-full font-black text-xl flex items-center justify-center gap-3 shadow-lg mb-2 disabled:opacity-70",
                            onClick: _,
                            disabled: x,
                            children: x ? M.jsx(wd, {
                                className: "animate-spin",
                                size: 24
                            }) : M.jsxs(M.Fragment, {
                                children: ["PAY ON QR", M.jsx("div", {
                                    className: "bg-white text-blue-800 rounded-full p-1 shadow-sm",
                                    children: M.jsx(ID, {
                                        size: 16,
                                        strokeWidth: 4
                                    })
                                })]
                            })
                        }), M.jsx("p", {
                            className: "text-red-500 font-bold text-xs mb-4 italic",
                            children: "INSTANT ACTIVATION"
                        }), M.jsxs("div", {
                            className: "border-t border-gray-400 pt-2 mb-4",
                            children: [M.jsx("p", {
                                className: "text-gray-700 font-bold mb-2 underline",
                                children: "Features"
                            }), M.jsxs("ul", {
                                className: "text-red-500 font-bold text-sm space-y-1",
                                children: [M.jsx("li", {
                                    children: "• Number Sureshot"
                                }), M.jsx("li", {
                                    children: "• Big-Small Sureshot"
                                }), M.jsx("li", {
                                    children: "• Colour Sureshot"
                                }), M.jsx("li", {
                                    children: "• 2 Level Winning"
                                })]
                            })]
                        }), M.jsxs("div", {
                            className: "flex flex-col items-center",
                            children: [M.jsx("div", {
                                className: "bg-white p-4 rounded-xl shadow-inner mb-2",
                                children: M.jsx(LC, {
                                    size: 120,
                                    className: "text-blue-900"
                                })
                            }), M.jsx("p", {
                                className: "flex items-center gap-2 text-blue-900 font-black text-sm",
                                children: "🚫 No money - No Accuracy 🚫"
                            })]
                        })]
                    })]
                })
            })
        })]
    })
}
  , WD = ({size: n}) => M.jsxs("svg", {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [M.jsx("path", {
        d: "m12 19-7-7 7-7"
    }), M.jsx("path", {
        d: "M19 12H5"
    })]
})
  , ID = ({size: n}) => M.jsxs("svg", {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [M.jsx("path", {
        d: "M5 12h14"
    }), M.jsx("path", {
        d: "m12 5 7 7-7 7"
    })]
})
  , t3 = () => {
    const n = window.location.hostname;
    return {
        "modmenuhack.sbs": {
            variant: "apr1",
            storageKey: "APR1_user",
            whatsapp: "919875736055",
            telegram: "modapksh",
            youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4"
        },
        "modmenuhack.site": {
            variant: "apr2",
            storageKey: "APR2_user",
            whatsapp: "918239817438",
            telegram: "modapksales",
            youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4"
        },
        "modmenuhack.buzz": {
            variant: "apr3",
            storageKey: "APR3_user",
            whatsapp: "917357984291",
            telegram: "hackerbabaji1",
            youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4"
        }
    }[n] || {
        variant: "apr1",
        storageKey: "APR1_user",
        whatsapp: "919875736055",
        telegram: "modapksh",
        youtube: "https://www.youtube.com/watch?v=-HdcugtTRN4"
    }
}
  , e3 = () => {
    const n = an()
      , i = Li()
      , s = n.state
      , {telegram: r, whatsapp: o} = t3()
      , f = [{
        n: 0,
        img: "https://i.ibb.co/WpKk6XP5/boll0.png",
        color: "Red"
    }, {
        n: 1,
        img: "https://i.ibb.co/pjdKPpGk/boll1.png",
        color: "Green"
    }, {
        n: 2,
        img: "https://i.ibb.co/GvTn7MHj/boll2.png",
        color: "Red"
    }, {
        n: 3,
        img: "https://i.ibb.co/3GvfjY9/boll3.png",
        color: "Green"
    }, {
        n: 4,
        img: "https://i.ibb.co/fztTk9Xk/boll4.png",
        color: "Red"
    }, {
        n: 5,
        img: "https://i.ibb.co/yBGNC94B/boll5.png",
        color: "Green"
    }, {
        n: 6,
        img: "https://i.ibb.co/YFPyCcfv/boll6.png",
        color: "Red"
    }, {
        n: 7,
        img: "https://i.ibb.co/rGfbzCr7/boll7.png",
        color: "Green"
    }, {
        n: 8,
        img: "https://i.ibb.co/24gv544/boll8.png",
        color: "Red"
    }, {
        n: 9,
        img: "https://i.ibb.co/BH2QBCdm/boll9.png",
        color: "Green"
    }]
      , [d,h] = A.useState(!1)
      , [y,m] = A.useState({
        period: "---",
        sec: "00"
    })
      , [g,v] = A.useState(null)
      , S = () => {
        const w = Math.floor(Math.random() * 10);
        return {
            n: w,
            size: w >= 5 ? "BIG" : "SMALL",
            color: [1, 3, 7, 9].includes(w) ? "GREEN" : w === 0 || w === 5 ? "VIOLET" : "RED"
        }
    }
    ;
    return A.useEffect( () => {
        v(S())
    }
    , []),
    A.useEffect( () => {
        s || i("/portal")
    }
    , [s, i]),
    A.useEffect( () => {
        const w = setInterval( () => {
            const x = new Date
              , C = x.getUTCHours() * 3600 + x.getUTCMinutes() * 60 + x.getUTCSeconds()
              , T = 60 - C % 60;
            m({
                sec: T.toString().padStart(2, "0"),
                period: `${x.toISOString().slice(0, 10).replace(/-/g, "")}1000${10001 + Math.floor(C / 60)}`
            }),
            T === 59 && (h(!0),
            setTimeout( () => {
                const _ = S();
                v(_),
                console.log("New Prediction:", _),
                h(!1)
            }
            , 2500))
        }
        , 1e3);
        return () => clearInterval(w)
    }
    , []),
    s ? M.jsxs("div", {
        className: "h-[100dvh] w-full flex flex-col bg-black overflow-hidden font-['Poppins']",
        children: [M.jsx("button", {
            onClick: () => i("/portal"),
            className: "absolute top-3 left-3 z-[110] bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white shadow-xl active:scale-90 transition-transform",
            children: M.jsx(U1, {
                size: 20,
                strokeWidth: 3
            })
        }), M.jsxs("div", {
            className: "w-full h-45 bg-[#0d0e1b] p-3 ",
            children: [M.jsxs("div", {
                className: "flex justify-between items-center mb-2 ml-25",
                children: [M.jsx("div", {
                    className: "flex gap-2",
                    children: M.jsxs("div", {
                        className: "bg-[#8b2e2e] text-white px-3 py-1 rounded-md text-[10px] font-black italic shadow-sm uppercase",
                        children: [s.name, " HACK"]
                    })
                }), M.jsxs("div", {
                    className: "flex items-center gap-1.5 text-[#4ade80] text-[10px] font-black tracking-widest",
                    children: [M.jsx("div", {
                        className: "w-2 h-2 bg-[#4ade80] rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"
                    }), " LIVE"]
                })]
            }), M.jsxs("div", {
                className: "flex items-center justify-between mb-2 ml-25",
                children: [M.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [M.jsx("span", {
                        className: "text-blue-400 font-black text-[11px] uppercase tracking-wider",
                        children: "WINGO 1 MIN"
                    }), M.jsx("span", {
                        className: "text-gray-500 text-[10px]",
                        children: "( Default )"
                    })]
                }), M.jsxs("div", {
                    className: "text-white font-mono text-[11px]",
                    children: ["00:", y.sec]
                })]
            }), M.jsxs("div", {
                className: "text-white/70 text-[10px] font-bold mb-3 flex items-center gap-2",
                children: [M.jsx("span", {
                    className: "text-indigo-400",
                    children: "ROUND ID:"
                }), " ", y.period]
            }), M.jsx("div", {
                className: "h-[68px] w-full bg-gradient-to-r from-[#000000] via-[#1a47cc] to-[#5d2691] rounded-xl flex items-center overflow-hidden border border-white/20 shadow-inner",
                children: d ? M.jsxs("div", {
                    className: "w-full flex items-center justify-center gap-3 text-white font-black italic text-sm tracking-widest",
                    children: [M.jsx(wd, {
                        className: "animate-spin",
                        size: 20
                    }), " ANALYZING TRENDS..."]
                }) : M.jsxs("div", {
                    className: "flex w-full divide-x divide-white/10 h-full",
                    children: [M.jsx("div", {
                        className: "flex-1 flex justify-center items-center bg-black/20",
                        children: M.jsx(Oi.img, {
                            initial: {
                                scale: .5,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            src: f.find(w => w?.n === g?.n)?.img,
                            alt: "ball",
                            className: "h-11 w-11 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                        })
                    }), M.jsx("div", {
                        className: "flex-[1.5] flex justify-center items-center font-black text-2xl text-white italic tracking-tighter drop-shadow-md",
                        children: g?.size
                    }), M.jsx("div", {
                        className: `flex-[1.5] flex justify-center items-center font-black text-2xl italic tracking-tighter drop-shadow-md ${g?.color === "GREEN" ? "text-[#4ade80]" : g?.color === "RED" ? "text-[#ff4d4d]" : "text-[#a855f7]"}`,
                        children: g?.color
                    })]
                })
            })]
        }), M.jsx("div", {
            className: "flex-1 w-full ",
            children: M.jsx("iframe", {
                src: s?.link,
                title: "Game Frame",
                className: "w-full h-full border-none pointer-events-auto",
                style: {
                    height: "100%",
                    width: "100%"
                },
                allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture"
            })
        })]
    }) : null
}
  , n3 = () => {
    const n = window.location.hostname;
    return n.includes("modmenuhack.site") ? {
        variant: "apr2",
        label: "APR2 (Ashu)"
    } : n.includes("modmenuhack.buzz") ? {
        variant: "apr3",
        label: "APR3 (Golu)"
    } : {
        variant: "test",
        label: "Test Environment"
    }
}
  , a3 = () => {
    const n = Li()
      , [i,s] = A.useState("")
      , {variant: r, label: o} = n3()
      , [f,d] = A.useState(r)
      , [h,y] = A.useState(!1)
      , [m,g] = A.useState(null);
    A.useEffect( () => {
        d(r)
    }
    , [r]);
    const v = async () => {
        if (!i)
            return alert("Please enter a phone number");
        y(!0),
        g(null);
        try {
            const S = await Bt.post("/api/apr/admin/activate-vip", {
                phone: i,
                variant: f
            });
            g({
                type: "success",
                msg: S.data.message
            }),
            setEmail("")
        } catch (S) {
            g({
                type: "error",
                msg: S.response?.data?.message || "Something went wrong"
            })
        } finally {
            y(!1)
        }
    }
    ;
    return M.jsx("div", {
        className: "min-h-screen bg-[#F8FAFC] p-6 font-['Poppins']",
        children: M.jsxs("div", {
            className: "max-w-md mx-auto",
            children: [M.jsxs("button", {
                onClick: () => n(-1),
                className: "mb-6 flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-indigo-600 transition-colors",
                children: [M.jsx(U1, {
                    size: 18
                }), " BACK TO DASHBOARD"]
            }), M.jsxs("div", {
                className: "bg-white rounded-[32px] p-8 shadow-2xl border border-slate-100 relative overflow-hidden",
                children: [M.jsx("div", {
                    className: "absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-50"
                }), M.jsxs("div", {
                    className: "relative z-10",
                    children: [M.jsxs("div", {
                        className: "flex items-center gap-4 mb-8",
                        children: [M.jsx("div", {
                            className: "bg-indigo-600 p-3.5 rounded-2xl text-white shadow-lg shadow-indigo-200",
                            children: M.jsx(BC, {
                                size: 24
                            })
                        }), M.jsxs("div", {
                            children: [M.jsx("h1", {
                                className: "text-2xl font-black text-slate-900 leading-tight tracking-tight",
                                children: "ADMIN CONTROL"
                            }), M.jsx("p", {
                                className: "text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]",
                                children: "Manual Override System"
                            })]
                        })]
                    }), M.jsxs("div", {
                        className: "bg-slate-50 border border-slate-200 p-5 rounded-2xl mb-8 flex items-center justify-between",
                        children: [M.jsxs("div", {
                            children: [M.jsx("p", {
                                className: "text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1",
                                children: "Active Domain"
                            }), M.jsx("p", {
                                className: "text-sm font-black text-indigo-600 italic",
                                children: o
                            })]
                        }), M.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-emerald-500 animate-ping"
                        })]
                    }), M.jsxs("div", {
                        className: "space-y-6",
                        children: [M.jsxs("div", {
                            className: "space-y-2",
                            children: [M.jsx("label", {
                                className: "text-[11px] font-black text-slate-500 ml-1 uppercase tracking-wider",
                                children: "Select Project Variant"
                            }), M.jsxs("select", {
                                value: f,
                                onChange: S => d(S.target.value),
                                className: "w-full bg-white border-2 border-slate-100 py-4 px-6 rounded-2xl font-bold text-slate-700 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all cursor-pointer appearance-none shadow-sm",
                                children: [M.jsx("option", {
                                    value: "msa1",
                                    children: "MAS PRO 1 (Personal)"
                                }), M.jsx("option", {
                                    value: "msa2",
                                    children: "MAS PRO 2 (Ashu)"
                                }), M.jsx("option", {
                                    value: "msa3",
                                    children: "MAS PRO 3 (Golu)"
                                })]
                            })]
                        }), M.jsxs("div", {
                            className: "space-y-2",
                            children: [M.jsx("label", {
                                className: "text-[11px] font-black text-slate-500 ml-1 uppercase tracking-wider",
                                children: "User Phone Number"
                            }), M.jsxs("div", {
                                className: "relative",
                                children: [M.jsx("div", {
                                    className: "absolute left-5 top-1/2 -translate-y-1/2 text-slate-400",
                                    children: M.jsx(kC, {
                                        size: 18
                                    })
                                }), M.jsx("input", {
                                    type: "tel",
                                    placeholder: "91xxxxxxxxxx",
                                    value: i,
                                    onChange: S => s(S.target.value),
                                    className: "w-full bg-white border-2 border-slate-100 py-4 pl-14 pr-6 rounded-2xl font-bold text-slate-800 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all shadow-sm",
                                    required: !0
                                })]
                            })]
                        }), m && M.jsx("div", {
                            className: `p-4 rounded-2xl text-[11px] font-black text-center uppercase tracking-wider border-2 ${m.type === "success" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-red-50 text-red-600 border-red-100"}`,
                            children: m.msg
                        }), M.jsx("button", {
                            onClick: v,
                            disabled: h,
                            className: "w-full bg-slate-900 hover:bg-indigo-600 text-white py-4.5 rounded-2xl font-black shadow-xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-[0.98] transition-all disabled:opacity-50",
                            children: h ? M.jsx(wd, {
                                className: "animate-spin"
                            }) : M.jsxs(M.Fragment, {
                                children: [M.jsx(YC, {
                                    size: 20
                                }), " ACTIVATE VIP ACCESS"]
                            })
                        })]
                    })]
                })]
            }), M.jsx("p", {
                className: "mt-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest",
                children: "Access strictly restricted to authorized developers."
            })]
        })
    })
}
  , i3 = () => {
    const n = window.location.hostname;
    return n.includes("modmenuhack.sbs") ? {
        variant: "apr1",
        storageKey: "APR1_user"
    } : n.includes("modmenuhack.site") ? {
        variant: "apr2",
        storageKey: "APR2_user"
    } : n.includes("modmenuhack.buzz") ? {
        variant: "apr3",
        storageKey: "APR3_user"
    } : {
        variant: "test",
        storageKey: "APR_test_user"
    }
}
  , N0 = ({children: n}) => n
  , AshuraPopup = () => {
    const [n,i] = A.useState(!0);
    return M.jsxs(M.Fragment, {
        children: [n && M.jsx(Oi.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: "fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-6 backdrop-blur-sm",
            children: M.jsxs(Oi.div, {
                initial: {
                    scale: .85,
                    y: 30
                },
                animate: {
                    scale: 1,
                    y: 0
                },
                className: "bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white px-10 py-8 rounded-3xl shadow-2xl border-2 border-yellow-500 text-center max-w-sm relative",
                children: [M.jsx("button", {
                    onClick: () => i(!1),
                    className: "absolute top-3 right-4 text-white/60 hover:text-white font-black text-2xl leading-none",
                    children: "×"
                }), M.jsx("p", {
                    className: "text-yellow-400 font-black text-sm uppercase tracking-[0.3em] mb-3",
                    children: "⚡ CRACKED"
                }), M.jsx("p", {
                    className: "text-3xl font-black tracking-tight text-white",
                    children: "BY ASHURA"
                }), M.jsx("p", {
                    className: "text-slate-400 text-xs font-bold mt-4 uppercase tracking-widest",
                    children: "VIP Unlocked • Free Access"
                })]
            })
        }), M.jsx(Oi.div, {
            animate: {
                y: [0, -6, 0]
            },
            transition: {
                repeat: 1 / 0,
                duration: 2.5
            },
            className: "fixed bottom-5 right-5 z-[9998] bg-slate-900/95 text-yellow-400 px-5 py-2.5 rounded-full font-black text-[11px] shadow-xl border-2 border-yellow-500/60 backdrop-blur-md uppercase tracking-wider",
            children: "CRACKED BY ASHURA"
        })]
    })
}
;
function l3() {
    return M.jsxs(M.Fragment, {
        children: [M.jsx(AshuraPopup, {}), M.jsx(u2, {
            basename: ashuraBasename || void 0,
            children: M.jsx("div", {
                className: "min-h-screen bg-[#F8FAFC]",
                children: M.jsxs(HT, {
                    children: [M.jsx(Na, {
                        path: "/",
                        element: M.jsx(ff, {
                            to: "/portal",
                            replace: !0
                        })
                    }), M.jsx(Na, {
                        path: "/portal",
                        element: M.jsx($D, {})
                    }), M.jsx(Na, {
                        path: "/game",
                        element: M.jsx(e3, {})
                    }), M.jsx(Na, {
                        path: "/admin/apr-control",
                        element: M.jsx(a3, {})
                    }), M.jsx(Na, {
                        path: "*",
                        element: M.jsx(ff, {
                            to: "/portal",
                            replace: !0
                        })
                    })]
                })
            })
        })]
    })
}
Gx.createRoot(document.getElementById("root")).render(M.jsx(A.StrictMode, {
    children: M.jsx(l3, {})
}));
