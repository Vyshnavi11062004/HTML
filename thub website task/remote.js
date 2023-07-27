(function(g) {
    var window = this;
    'use strict';
    var a8 = function(a) {
        g.Nl(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.eb()).toString(36));
        return a
    }
      , b8 = function(a, b, c) {
        Array.isArray(c) || (c = [String(c)]);
        g.Lga(a.u, b, c)
    }
      , yqb = function(a) {
        if (a instanceof g.Ro)
            return a;
        if ("function" == typeof a.Jk)
            return a.Jk(!1);
        if (g.Wa(a)) {
            var b = 0
              , c = new g.Ro;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        return g.s3;
                    if (b in a)
                        return g.So(a[b++]);
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
      , zqb = function(a, b, c) {
        if (g.Wa(a))
            g.dc(a, b, c);
        else
            for (a = yqb(a); ; ) {
                var d = a.next();
                if (d.done)
                    break;
                b.call(c, d.value, void 0, a)
            }
    }
      , Aqb = function(a, b) {
        var c = [];
        zqb(b, function(d) {
            try {
                var e = g.kr.prototype.u.call(this, d, !0)
            } catch (f) {
                if ("Storage: Invalid value was encountered" == f)
                    return;
                throw f;
            }
            void 0 === e ? c.push(d) : g.Cla(e) && c.push(d)
        }, a);
        return c
    }
      , Bqb = function(a, b) {
        Aqb(a, b).forEach(function(c) {
            g.kr.prototype.remove.call(this, c)
        }, a)
    }
      , Cqb = function(a) {
        if (a.oa) {
            if (a.oa.locationOverrideToken)
                return {
                    locationOverrideToken: a.oa.locationOverrideToken
                };
            if (null != a.oa.latitudeE7 && null != a.oa.longitudeE7)
                return {
                    latitudeE7: a.oa.latitudeE7,
                    longitudeE7: a.oa.longitudeE7
                }
        }
        return null
    }
      , Dqb = function(a, b) {
        g.Hb(a, b) || a.push(b)
    }
      , Eqb = function(a) {
        var b = 0, c;
        for (c in a)
            b++;
        return b
    }
      , Fqb = function(a, b) {
        return g.id(a, b)
    }
      , Gqb = function(a) {
        try {
            return g.Pa.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
      , c8 = function(a) {
        if (g.Pa.JSON)
            try {
                return g.Pa.JSON.parse(a)
            } catch (b) {}
        return Gqb(a)
    }
      , Hqb = function(a, b, c, d) {
        var e = new g.Fl(null);
        a && g.Gl(e, a);
        b && g.Hl(e, b);
        c && g.Il(e, c);
        d && (e.B = d);
        return e
    }
      , Iqb = function() {
        this.j = d8();
        this.j.Uj("/client_streamz/youtube/living_room/mdx/channel/opened", {
            Xd: 3,
            Wd: "channel_type"
        })
    }
      , Jqb = function(a, b) {
        a.j.Hk("/client_streamz/youtube/living_room/mdx/channel/opened", b)
    }
      , Kqb = function() {
        this.j = d8();
        this.j.Uj("/client_streamz/youtube/living_room/mdx/channel/closed", {
            Xd: 3,
            Wd: "channel_type"
        })
    }
      , Lqb = function(a, b) {
        a.j.Hk("/client_streamz/youtube/living_room/mdx/channel/closed", b)
    }
      , Mqb = function() {
        this.j = d8();
        this.j.Uj("/client_streamz/youtube/living_room/mdx/channel/message_received", {
            Xd: 3,
            Wd: "channel_type"
        })
    }
      , Nqb = function(a, b) {
        a.j.Hk("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
    }
      , Oqb = function() {
        this.j = d8();
        this.j.Uj("/client_streamz/youtube/living_room/mdx/channel/error", {
            Xd: 3,
            Wd: "channel_type"
        })
    }
      , Pqb = function(a, b) {
        a.j.Hk("/client_streamz/youtube/living_room/mdx/channel/error", b)
    }
      , Qqb = function() {
        this.j = d8();
        this.j.Uj("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
    }
      , Rqb = function() {
        this.j = d8();
        this.j.Uj("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
    }
      , e8 = function(a) {
        this.name = this.id = "";
        this.clientName = "UNKNOWN_INTERFACE";
        this.app = "";
        this.type = "REMOTE_CONTROL";
        this.obfuscatedGaiaId = this.avatar = this.username = "";
        this.capabilities = new Set;
        this.compatibleSenderThemes = new Set;
        this.experiments = new Set;
        this.theme = "u";
        new g.Uq;
        this.model = this.brand = "";
        this.year = 0;
        this.chipset = this.osVersion = this.os = "";
        this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
        a && (this.id = a.id || a.name,
        this.name = a.name,
        this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
        this.app = a.app,
        this.type = a.type || "REMOTE_CONTROL",
        this.username = a.user || "",
        this.avatar = a.userAvatarUri || "",
        this.obfuscatedGaiaId = a.obfuscatedGaiaId || "",
        this.theme = a.theme || "u",
        Sqb(this, a.capabilities || ""),
        Tqb(this, a.compatibleSenderThemes || ""),
        Uqb(this, a.experiments || ""),
        this.brand = a.brand || "",
        this.model = a.model || "",
        this.year = a.year || 0,
        this.os = a.os || "",
        this.osVersion = a.osVersion || "",
        this.chipset = a.chipset || "",
        this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN",
        a = a.deviceInfo) && (a = JSON.parse(a),
        this.brand = a.brand || "",
        this.model = a.model || "",
        this.year = a.year || 0,
        this.os = a.os || "",
        this.osVersion = a.osVersion || "",
        this.chipset = a.chipset || "",
        this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
        this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
    }
      , Sqb = function(a, b) {
        a.capabilities.clear();
        g.Wo(b.split(","), g.cb(Fqb, Vqb)).forEach(function(c) {
            a.capabilities.add(c)
        })
    }
      , Tqb = function(a, b) {
        a.compatibleSenderThemes.clear();
        g.Wo(b.split(","), g.cb(Fqb, Wqb)).forEach(function(c) {
            a.compatibleSenderThemes.add(c)
        })
    }
      , Uqb = function(a, b) {
        a.experiments.clear();
        b.split(",").forEach(function(c) {
            a.experiments.add(c)
        })
    }
      , f8 = function(a) {
        a = a || {};
        this.name = a.name || "";
        this.id = a.id || a.screenId || "";
        this.token = a.token || a.loungeToken || "";
        this.uuid = a.uuid || a.dialId || "";
        this.idType = a.screenIdType || "normal"
    }
      , g8 = function(a, b) {
        return !!b && (a.id == b || a.uuid == b)
    }
      , Xqb = function(a) {
        return {
            name: a.name,
            screenId: a.id,
            loungeToken: a.token,
            dialId: a.uuid,
            screenIdType: a.idType
        }
    }
      , Yqb = function(a) {
        return new f8(a)
    }
      , Zqb = function(a) {
        return Array.isArray(a) ? g.cn(a, Yqb) : []
    }
      , h8 = function(a) {
        return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
    }
      , $qb = function(a) {
        return Array.isArray(a) ? "[" + g.cn(a, h8).join(",") + "]" : "null"
    }
      , arb = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    }
      , brb = function(a) {
        return g.cn(a, function(b) {
            return {
                key: b.id,
                name: b.name
            }
        })
    }
      , crb = function(a, b) {
        return g.Eb(a, function(c) {
            return c || b ? !c != !b ? !1 : c.id == b.id : !0
        })
    }
      , i8 = function(a, b) {
        return g.Eb(a, function(c) {
            return g8(c, b)
        })
    }
      , drb = function() {
        var a = (0,
        g.jB)();
        a && Bqb(a, a.j.Jk(!0))
    }
      , j8 = function() {
        var a = g.mB("yt-remote-connected-devices") || [];
        g.Wb(a);
        return a
    }
      , erb = function(a) {
        if (0 == a.length)
            return [];
        var b = a[0].indexOf("#")
          , c = -1 == b ? a[0] : a[0].substring(0, b);
        return g.cn(a, function(d, e) {
            return 0 == e ? d : d.substring(c.length)
        })
    }
      , frb = function(a) {
        g.lB("yt-remote-connected-devices", a, 86400)
    }
      , k8 = function() {
        if (grb)
            return grb;
        var a = g.mB("yt-remote-device-id");
        a || (a = arb(),
        g.lB("yt-remote-device-id", a, 31536E3));
        for (var b = j8(), c = 1, d = a; g.Hb(b, d); )
            c++,
            d = a + "#" + c;
        return grb = d
    }
      , hrb = function() {
        var a = j8()
          , b = k8();
        g.oB() && g.cc(a, b);
        a = erb(a);
        if (0 == a.length)
            try {
                g.nA("remote_sid")
            } catch (c) {}
        else
            try {
                g.lA("remote_sid", a.join(","), -1)
            } catch (c) {}
    }
      , irb = function() {
        return g.mB("yt-remote-session-browser-channel")
    }
      , jrb = function() {
        return g.mB("yt-remote-local-screens") || []
    }
      , krb = function() {
        g.lB("yt-remote-lounge-token-expiration", !0, 86400)
    }
      , lrb = function(a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = g.cn(jrb(), function(d) {
            return d.loungeToken
        })
          , c = g.cn(a, function(d) {
            return d.loungeToken
        });
        g.dn(c, function(d) {
            return !g.Hb(b, d)
        }) && krb();
        g.lB("yt-remote-local-screens", a, 31536E3)
    }
      , l8 = function(a) {
        a || (g.nB("yt-remote-session-screen-id"),
        g.nB("yt-remote-session-video-id"));
        hrb();
        a = j8();
        g.Jb(a, k8());
        frb(a)
    }
      , mrb = function() {
        if (!m8) {
            var a = g.Jr();
            a && (m8 = new g.hr(a))
        }
    }
      , nrb = function() {
        mrb();
        return m8 ? !!m8.get("yt-remote-use-staging-server") : !1
    }
      , n8 = function(a, b) {
        g.FD[a] = !0;
        var c = g.DD();
        c && c.publish.apply(c, arguments);
        g.FD[a] = !1
    }
      , orb = function() {}
      , d8 = function() {
        if (!o8) {
            o8 = new g.eg(new orb);
            var a = g.Cz("client_streamz_web_flush_count", -1);
            -1 !== a && (o8.C = a)
        }
        return o8
    }
      , prb = function() {
        var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
        return a ? parseInt(a[1], 10) : 0
    }
      , qrb = function(a) {
        return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
    }
      , rrb = function() {
        return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
    }
      , p8 = function(a) {
        a.length ? srb(a.shift(), function() {
            p8(a)
        }) : trb()
    }
      , urb = function(a) {
        return "chrome-extension://" + a + "/cast_sender.js"
    }
      , srb = function(a, b, c) {
        var d = document.createElement("script");
        d.onerror = b;
        c && (d.onload = c);
        g.Zk(d, g.ws(a));
        (document.head || document.documentElement).appendChild(d)
    }
      , vrb = function() {
        var a = prb()
          , b = [];
        if (1 < a) {
            var c = a - 1;
            b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
            b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
        }
        return b
    }
      , trb = function() {
        var a = rrb();
        a && a(!1, "No cast extension found")
    }
      , xrb = function() {
        if (wrb) {
            var a = 2
              , b = rrb()
              , c = function() {
                a--;
                0 == a && b && b(!0)
            };
            window.__onGCastApiAvailable = c;
            srb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", trb, c)
        }
    }
      , yrb = function() {
        xrb();
        var a = vrb();
        a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
        p8(a)
    }
      , Arb = function() {
        xrb();
        var a = vrb();
        a.push.apply(a, g.pa(zrb.map(urb)));
        a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
        p8(a)
    }
      , q8 = function(a, b, c) {
        g.D.call(this);
        this.J = null != c ? (0,
        g.bb)(a, c) : a;
        this.Ti = b;
        this.D = (0,
        g.bb)(this.I0, this);
        this.j = !1;
        this.u = 0;
        this.B = this.Lc = null;
        this.C = []
    }
      , r8 = function(a, b, c) {
        g.D.call(this);
        this.C = null != c ? a.bind(c) : a;
        this.Ti = b;
        this.B = null;
        this.j = !1;
        this.u = 0;
        this.Lc = null
    }
      , Brb = function(a) {
        a.Lc = g.cg(function() {
            a.Lc = null;
            a.j && !a.u && (a.j = !1,
            Brb(a))
        }, a.Ti);
        var b = a.B;
        a.B = null;
        a.C.apply(null, b)
    }
      , s8 = function() {}
      , Crb = function() {
        g.zb.call(this, "p")
    }
      , Drb = function() {
        g.zb.call(this, "o")
    }
      , Frb = function() {
        return Erb = Erb || new g.Id
    }
      , Grb = function(a) {
        g.zb.call(this, "serverreachability", a)
    }
      , t8 = function(a) {
        var b = Frb();
        b.dispatchEvent(new Grb(b,a))
    }
      , Hrb = function(a) {
        g.zb.call(this, "statevent", a)
    }
      , u8 = function(a) {
        var b = Frb();
        b.dispatchEvent(new Hrb(b,a))
    }
      , Irb = function(a, b, c, d) {
        g.zb.call(this, "timingevent", a);
        this.size = b;
        this.pA = d
    }
      , v8 = function(a, b) {
        if ("function" !== typeof a)
            throw Error("Fn must not be null and must be a function");
        return g.Pa.setTimeout(function() {
            a()
        }, b)
    }
      , Jrb = function() {}
      , w8 = function(a, b, c, d) {
        this.D = a;
        this.C = b;
        this.wd = c;
        this.Qc = d || 1;
        this.ob = new g.Sl(this);
        this.Eb = 45E3;
        a = g.VM ? 125 : void 0;
        this.rb = new g.bg(a);
        this.Oa = null;
        this.B = !1;
        this.V = this.kb = this.K = this.Va = this.Ba = this.Yb = this.ea = null;
        this.qa = [];
        this.j = null;
        this.oa = 0;
        this.J = this.Ga = null;
        this.hc = -1;
        this.Ma = !1;
        this.wb = 0;
        this.eb = null;
        this.vc = this.Ya = this.Fc = this.Fa = !1;
        this.u = new Krb
    }
      , Krb = function() {
        this.B = null;
        this.j = "";
        this.u = !1
    }
      , Mrb = function(a, b, c) {
        a.Va = 1;
        a.K = a8(b.clone());
        a.V = c;
        a.Fa = !0;
        Lrb(a, null)
    }
      , Lrb = function(a, b) {
        a.Ba = Date.now();
        x8(a);
        a.kb = a.K.clone();
        b8(a.kb, "t", a.Qc);
        a.oa = 0;
        var c = a.D.Va;
        a.u = new Krb;
        a.j = Nrb(a.D, c ? b : null, !a.V);
        0 < a.wb && (a.eb = new r8((0,
        g.bb)(a.QR, a, a.j),a.wb));
        a.ob.Ta(a.j, "readystatechange", a.L0);
        b = a.Oa ? g.pd(a.Oa) : {};
        a.V ? (a.Ga || (a.Ga = "POST"),
        b["Content-Type"] = "application/x-www-form-urlencoded",
        a.j.send(a.kb, a.Ga, a.V, b)) : (a.Ga = "GET",
        a.j.send(a.kb, a.Ga, null, b));
        t8(1)
    }
      , Orb = function(a) {
        return a.j ? "GET" == a.Ga && 2 != a.Va && a.D.Ve : !1
    }
      , Srb = function(a, b, c) {
        for (var d = !0, e; !a.Ma && a.oa < c.length; )
            if (e = Prb(a, c),
            e == y8) {
                4 == b && (a.J = 4,
                u8(14),
                d = !1);
                break
            } else if (e == Qrb) {
                a.J = 4;
                u8(15);
                d = !1;
                break
            } else
                Rrb(a, e);
        Orb(a) && e != y8 && e != Qrb && (a.u.j = "",
        a.oa = 0);
        4 != b || 0 != c.length || a.u.u || (a.J = 1,
        u8(16),
        d = !1);
        a.B = a.B && d;
        d ? 0 < c.length && !a.vc && (a.vc = !0,
        a.D.RO(a)) : (z8(a),
        A8(a))
    }
      , Prb = function(a, b) {
        var c = a.oa
          , d = b.indexOf("\n", c);
        if (-1 == d)
            return y8;
        c = Number(b.substring(c, d));
        if (isNaN(c))
            return Qrb;
        d += 1;
        if (d + c > b.length)
            return y8;
        b = b.slice(d, d + c);
        a.oa = d + c;
        return b
    }
      , x8 = function(a) {
        a.Yb = Date.now() + a.Eb;
        Trb(a, a.Eb)
    }
      , Trb = function(a, b) {
        if (null != a.ea)
            throw Error("WatchDog timer not null");
        a.ea = v8((0,
        g.bb)(a.J0, a), b)
    }
      , B8 = function(a) {
        a.ea && (g.Pa.clearTimeout(a.ea),
        a.ea = null)
    }
      , A8 = function(a) {
        a.D.jh() || a.Ma || Urb(a.D, a)
    }
      , z8 = function(a) {
        B8(a);
        g.rb(a.eb);
        a.eb = null;
        a.rb.stop();
        a.ob.Tf();
        if (a.j) {
            var b = a.j;
            a.j = null;
            b.abort();
            b.dispose()
        }
    }
      , Rrb = function(a, b) {
        try {
            var c = a.D;
            if (0 != c.Eh && (c.j == a || Vrb(c.u, a)))
                if (!a.Ya && Vrb(c.u, a) && 3 == c.Eh) {
                    try {
                        var d = c.If.j.parse(b)
                    } catch (A) {
                        d = null
                    }
                    if (Array.isArray(d) && 3 == d.length) {
                        var e = d;
                        if (0 == e[0])
                            a: {
                                if (!c.V) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba)
                                            C8(c),
                                            D8(c);
                                        else
                                            break a;
                                    Wrb(c);
                                    u8(18)
                                }
                            }
                        else
                            c.le = e[1],
                            0 < c.le - c.eb && 37500 > e[2] && c.Ya && 0 == c.qa && !c.oa && (c.oa = v8((0,
                            g.bb)(c.M0, c), 6E3));
                        if (1 >= Xrb(c.u) && c.kd) {
                            try {
                                c.kd()
                            } catch (A) {}
                            c.kd = void 0
                        }
                    } else
                        E8(c, 11)
                } else if ((a.Ya || c.j == a) && C8(c),
                !g.ic(b))
                    for (e = c.If.j.parse(b),
                    b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.eb = f[0];
                        f = f[1];
                        if (2 == c.Eh)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.vc = f[2];
                                var h = f[3];
                                null != h && (c.RR = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.ob = 1.5 * l);
                                d = c;
                                var m = a.gN();
                                if (m) {
                                    var n = g.dk(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.kc(n, "spdy") || g.kc(n, "quic") || g.kc(n, "h2")) && (p.C = p.D,
                                        p.j = new Set,
                                        p.u && (Yrb(p, p.u),
                                        p.u = null))
                                    }
                                    if (d.Fa) {
                                        var q = g.dk(m, "X-HTTP-Session-Id");
                                        q && (d.Ke = q,
                                        g.Nl(d.Oa, d.Fa, q))
                                    }
                                }
                                c.Eh = 3;
                                c.D && c.D.XR();
                                c.jd && (c.md = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.Fd = Zrb(d, d.Va ? d.vc : null, d.Qc);
                                if (r.Ya) {
                                    $rb(d.u, r);
                                    var v = r
                                      , y = d.ob;
                                    y && v.setTimeout(y);
                                    v.ea && (B8(v),
                                    x8(v));
                                    d.j = r
                                } else
                                    asb(d);
                                0 < c.B.length && F8(c)
                            } else
                                "stop" != f[0] && "close" != f[0] || E8(c, 7);
                        else
                            3 == c.Eh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? E8(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.WR(f),
                            c.qa = 0)
                    }
            t8(4)
        } catch (A) {}
    }
      , bsb = function(a, b) {
        this.j = a;
        this.map = b;
        this.context = null
    }
      , csb = function(a) {
        this.D = a || 10;
        g.Pa.PerformanceNavigationTiming ? (a = g.Pa.performance.getEntriesByType("navigation"),
        a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Pa.chrome && g.Pa.chrome.loadTimes && g.Pa.chrome.loadTimes() && g.Pa.chrome.loadTimes().wasFetchedViaSpdy);
        this.C = a ? this.D : 1;
        this.j = null;
        1 < this.C && (this.j = new Set);
        this.u = null;
        this.B = []
    }
      , dsb = function(a) {
        return a.u ? !0 : a.j ? a.j.size >= a.C : !1
    }
      , Xrb = function(a) {
        return a.u ? 1 : a.j ? a.j.size : 0
    }
      , Vrb = function(a, b) {
        return a.u ? a.u == b : a.j ? a.j.has(b) : !1
    }
      , Yrb = function(a, b) {
        a.j ? a.j.add(b) : a.u = b
    }
      , $rb = function(a, b) {
        a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
    }
      , esb = function(a) {
        if (null != a.u)
            return a.B.concat(a.u.qa);
        if (null != a.j && 0 !== a.j.size) {
            var b = a.B;
            a = g.u(a.j.values());
            for (var c = a.next(); !c.done; c = a.next())
                b = b.concat(c.value.qa);
            return b
        }
        return g.Nb(a.B)
    }
      , fsb = function(a, b) {
        var c = new Jrb;
        if (g.Pa.Image) {
            var d = new Image;
            d.onload = g.cb(G8, c, d, "TestLoadImage: loaded", !0, b);
            d.onerror = g.cb(G8, c, d, "TestLoadImage: error", !1, b);
            d.onabort = g.cb(G8, c, d, "TestLoadImage: abort", !1, b);
            d.ontimeout = g.cb(G8, c, d, "TestLoadImage: timeout", !1, b);
            g.Pa.setTimeout(function() {
                if (d.ontimeout)
                    d.ontimeout()
            }, 1E4);
            d.src = a
        } else
            b(!1)
    }
      , G8 = function(a, b, c, d, e) {
        try {
            b.onload = null,
            b.onerror = null,
            b.onabort = null,
            b.ontimeout = null,
            e(d)
        } catch (f) {}
    }
      , gsb = function() {
        this.j = new s8
    }
      , hsb = function(a, b, c) {
        var d = c || "";
        try {
            g.ul(a, function(e, f) {
                var h = e;
                g.Za(e) && (h = g.wj(e));
                b.push(d + f + "=" + encodeURIComponent(h))
            })
        } catch (e) {
            throw b.push(d + "type=" + encodeURIComponent("_badmap")),
            e;
        }
    }
      , H8 = function(a, b, c) {
        return c && c.C5 ? c.C5[a] || b : b
    }
      , isb = function(a) {
        this.B = [];
        this.vc = this.Fd = this.Oa = this.Qc = this.j = this.Ke = this.Fa = this.Ma = this.K = this.Yb = this.ea = null;
        this.hg = this.kb = 0;
        this.Wf = H8("failFast", !1, a);
        this.Ya = this.oa = this.V = this.J = this.D = null;
        this.wd = !0;
        this.le = this.eb = -1;
        this.Fc = this.qa = this.Ba = 0;
        this.Vf = H8("baseRetryDelayMs", 5E3, a);
        this.jg = H8("retryDelaySeedMs", 1E4, a);
        this.Xf = H8("forwardChannelMaxRetries", 2, a);
        this.Qd = H8("forwardChannelRequestTimeoutMs", 2E4, a);
        this.Je = a && a.zdb || void 0;
        this.Ve = a && a.xdb || !1;
        this.ob = void 0;
        this.Va = a && a.z$ || !1;
        this.C = "";
        this.u = new csb(a && a.abb);
        this.If = new gsb;
        this.Eb = a && a.qbb || !1;
        this.wb = a && a.fbb || !1;
        this.Eb && this.wb && (this.wb = !1);
        this.og = a && a.Uab || !1;
        a && a.tbb && (this.wd = !1);
        this.jd = !this.Eb && this.wd && a && a.dbb || !1;
        this.od = void 0;
        a && a.PW && 0 < a.PW && (this.od = a.PW);
        this.kd = void 0;
        this.md = 0;
        this.rb = !1;
        this.hc = this.Ga = null
    }
      , D8 = function(a) {
        a.j && (jsb(a),
        a.j.cancel(),
        a.j = null)
    }
      , ksb = function(a) {
        D8(a);
        a.V && (g.Pa.clearTimeout(a.V),
        a.V = null);
        C8(a);
        a.u.cancel();
        a.J && ("number" === typeof a.J && g.Pa.clearTimeout(a.J),
        a.J = null)
    }
      , F8 = function(a) {
        dsb(a.u) || a.J || (a.J = !0,
        g.Mf(a.TR, a),
        a.Ba = 0)
    }
      , msb = function(a, b) {
        if (Xrb(a.u) >= a.u.C - (a.J ? 1 : 0))
            return !1;
        if (a.J)
            return a.B = b.qa.concat(a.B),
            !0;
        if (1 == a.Eh || 2 == a.Eh || a.Ba >= (a.Wf ? 0 : a.Xf))
            return !1;
        a.J = v8((0,
        g.bb)(a.TR, a, b), lsb(a, a.Ba));
        a.Ba++;
        return !0
    }
      , osb = function(a, b) {
        var c;
        b ? c = b.wd : c = a.kb++;
        var d = a.Oa.clone();
        g.Nl(d, "SID", a.C);
        g.Nl(d, "RID", c);
        g.Nl(d, "AID", a.eb);
        I8(a, d);
        a.K && a.ea && g.Rl(d, a.K, a.ea);
        c = new w8(a,a.C,c,a.Ba + 1);
        null === a.K && (c.Oa = a.ea);
        b && (a.B = b.qa.concat(a.B));
        b = nsb(a, c, 1E3);
        c.setTimeout(Math.round(.5 * a.Qd) + Math.round(.5 * a.Qd * Math.random()));
        Yrb(a.u, c);
        Mrb(c, d, b)
    }
      , I8 = function(a, b) {
        a.Ma && g.Zc(a.Ma, function(c, d) {
            g.Nl(b, d, c)
        });
        a.D && g.ul({}, function(c, d) {
            g.Nl(b, d, c)
        })
    }
      , nsb = function(a, b, c) {
        c = Math.min(a.B.length, c);
        var d = a.D ? (0,
        g.bb)(a.D.N0, a.D, a) : null;
        a: for (var e = a.B, f = -1; ; ) {
            var h = ["count=" + c];
            -1 == f ? 0 < c ? (f = e[0].j,
            h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
            for (var l = !0, m = 0; m < c; m++) {
                var n = e[m].j
                  , p = e[m].map;
                n -= f;
                if (0 > n)
                    f = Math.max(0, e[m].j - 100),
                    l = !1;
                else
                    try {
                        hsb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
            }
            if (l) {
                d = h.join("&");
                break a
            }
        }
        a = a.B.splice(0, c);
        b.qa = a;
        return d
    }
      , asb = function(a) {
        a.j || a.V || (a.Fc = 1,
        g.Mf(a.SR, a),
        a.qa = 0)
    }
      , Wrb = function(a) {
        if (a.j || a.V || 3 <= a.qa)
            return !1;
        a.Fc++;
        a.V = v8((0,
        g.bb)(a.SR, a), lsb(a, a.qa));
        a.qa++;
        return !0
    }
      , jsb = function(a) {
        null != a.Ga && (g.Pa.clearTimeout(a.Ga),
        a.Ga = null)
    }
      , psb = function(a) {
        a.j = new w8(a,a.C,"rpc",a.Fc);
        null === a.K && (a.j.Oa = a.ea);
        a.j.wb = 0;
        var b = a.Fd.clone();
        g.Nl(b, "RID", "rpc");
        g.Nl(b, "SID", a.C);
        g.Nl(b, "AID", a.eb);
        g.Nl(b, "CI", a.Ya ? "0" : "1");
        !a.Ya && a.od && g.Nl(b, "TO", a.od);
        g.Nl(b, "TYPE", "xmlhttp");
        I8(a, b);
        a.K && a.ea && g.Rl(b, a.K, a.ea);
        a.ob && a.j.setTimeout(a.ob);
        var c = a.j;
        a = a.vc;
        c.Va = 1;
        c.K = a8(b.clone());
        c.V = null;
        c.Fa = !0;
        Lrb(c, a)
    }
      , C8 = function(a) {
        null != a.oa && (g.Pa.clearTimeout(a.oa),
        a.oa = null)
    }
      , Urb = function(a, b) {
        var c = null;
        if (a.j == b) {
            C8(a);
            jsb(a);
            a.j = null;
            var d = 2
        } else if (Vrb(a.u, b))
            c = b.qa,
            $rb(a.u, b),
            d = 1;
        else
            return;
        if (0 != a.Eh)
            if (b.B)
                if (1 == d) {
                    c = b.V ? b.V.length : 0;
                    b = Date.now() - b.Ba;
                    var e = a.Ba;
                    d = Frb();
                    d.dispatchEvent(new Irb(d,c,b,e));
                    F8(a)
                } else
                    asb(a);
            else {
                var f = b.hc;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && msb(a, b) || 2 == d && Wrb(a)))
                    switch (c && 0 < c.length && (b = a.u,
                    b.B = b.B.concat(c)),
                    e) {
                    case 1:
                        E8(a, 5);
                        break;
                    case 4:
                        E8(a, 10);
                        break;
                    case 3:
                        E8(a, 6);
                        break;
                    default:
                        E8(a, 2)
                    }
            }
    }
      , lsb = function(a, b) {
        var c = a.Vf + Math.floor(Math.random() * a.jg);
        a.isActive() || (c *= 2);
        return c * b
    }
      , E8 = function(a, b) {
        if (2 == b) {
            var c = null;
            a.D && (c = null);
            var d = (0,
            g.bb)(a.F$, a);
            c || (c = new g.Fl("//www.google.com/images/cleardot.gif"),
            g.Pa.location && "http" == g.Pa.location.protocol || g.Gl(c, "https"),
            a8(c));
            fsb(c.toString(), d)
        } else
            u8(2);
        a.Eh = 0;
        a.D && a.D.VR(b);
        qsb(a);
        ksb(a)
    }
      , qsb = function(a) {
        a.Eh = 0;
        a.hc = [];
        if (a.D) {
            var b = esb(a.u);
            if (0 != b.length || 0 != a.B.length)
                g.Ob(a.hc, b),
                g.Ob(a.hc, a.B),
                a.u.B.length = 0,
                g.Nb(a.B),
                a.B.length = 0;
            a.D.UR()
        }
    }
      , rsb = function(a) {
        if (0 == a.Eh)
            return a.hc;
        var b = [];
        g.Ob(b, esb(a.u));
        g.Ob(b, a.B);
        return b
    }
      , Zrb = function(a, b, c) {
        var d = g.Ol(c);
        "" != d.j ? (b && g.Hl(d, b + "." + d.j),
        g.Il(d, d.C)) : (d = g.Pa.location,
        d = Hqb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
        b = a.Fa;
        c = a.Ke;
        b && c && g.Nl(d, b, c);
        g.Nl(d, "VER", a.RR);
        I8(a, d);
        return d
    }
      , Nrb = function(a, b, c) {
        if (b && !a.Va)
            throw Error("Can't create secondary domain capable XhrIo object.");
        b = c && a.Ve && !a.Je ? new g.Wj(new g.ql({
            tZ: !0
        })) : new g.Wj(a.Je);
        b.J = a.Va;
        return b
    }
      , ssb = function() {}
      , tsb = function() {
        if (g.Ze && !g.Sc(10))
            throw Error("Environmental error: no available transport.");
    }
      , K8 = function(a, b) {
        g.Id.call(this);
        this.j = new isb(b);
        this.D = a;
        this.u = b && b.j6 || null;
        a = b && b.i6 || null;
        b && b.Zab && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
            "X-Client-Protocol": "webchannel"
        });
        this.j.ea = a;
        a = b && b.mcb || null;
        b && b.WW && (a ? a["X-WebChannel-Content-Type"] = b.WW : a = {
            "X-WebChannel-Content-Type": b.WW
        });
        b && b.nU && (a ? a["X-WebChannel-Client-Profile"] = b.nU : a = {
            "X-WebChannel-Client-Profile": b.nU
        });
        this.j.Yb = a;
        (a = b && b.lcb) && !g.ic(a) && (this.j.K = a);
        this.J = b && b.z$ || !1;
        this.C = b && b.Xcb || !1;
        (b = b && b.y5) && !g.ic(b) && (this.j.Fa = b,
        g.hd(this.u, b) && g.ld(this.u, b));
        this.B = new J8(this)
    }
      , usb = function(a) {
        Crb.call(this);
        a.__headers__ && (this.headers = a.__headers__,
        this.statusCode = a.__status__,
        delete a.__headers__,
        delete a.__status__);
        var b = a.__sm__;
        b ? this.data = (this.j = g.cd(b)) ? g.md(b, this.j) : b : this.data = a
    }
      , vsb = function(a) {
        Drb.call(this);
        this.status = 1;
        this.errorCode = a
    }
      , J8 = function(a) {
        this.j = a
    }
      , wsb = function(a, b) {
        this.u = a;
        this.j = b
    }
      , xsb = function(a) {
        return rsb(a.j).map(function(b) {
            b = b.map;
            "__data__"in b && (b = b.__data__,
            b = a.u.C ? Gqb(b) : b);
            return b
        })
    }
      , L8 = function(a, b) {
        if ("function" !== typeof a)
            throw Error("Fn must not be null and must be a function");
        return g.Pa.setTimeout(function() {
            a()
        }, b)
    }
      , N8 = function(a) {
        M8.dispatchEvent(new ysb(M8,a))
    }
      , ysb = function(a) {
        g.zb.call(this, "statevent", a)
    }
      , O8 = function(a, b, c, d) {
        this.j = a;
        this.C = b;
        this.K = c;
        this.J = d || 1;
        this.u = 45E3;
        this.B = new g.Sl(this);
        this.D = new g.bg;
        this.D.setInterval(250)
    }
      , Asb = function(a, b, c) {
        a.zx = 1;
        a.hs = a8(b.clone());
        a.Mu = c;
        a.Fa = !0;
        zsb(a, null)
    }
      , Bsb = function(a, b, c, d, e) {
        a.zx = 1;
        a.hs = a8(b.clone());
        a.Mu = null;
        a.Fa = c;
        e && (a.VY = !1);
        zsb(a, d)
    }
      , zsb = function(a, b) {
        a.yx = Date.now();
        P8(a);
        a.qs = a.hs.clone();
        b8(a.qs, "t", a.J);
        a.zF = 0;
        a.jj = a.j.lK(a.j.tB() ? b : null);
        0 < a.jK && (a.xF = new r8((0,
        g.bb)(a.YR, a, a.jj),a.jK));
        a.B.Ta(a.jj, "readystatechange", a.P0);
        b = a.Lu ? g.pd(a.Lu) : {};
        a.Mu ? (a.yF = "POST",
        b["Content-Type"] = "application/x-www-form-urlencoded",
        a.jj.send(a.qs, a.yF, a.Mu, b)) : (a.yF = "GET",
        a.VY && !g.Vc && (b.Connection = "close"),
        a.jj.send(a.qs, a.yF, null, b));
        a.j.In(1)
    }
      , Esb = function(a, b) {
        var c = a.zF
          , d = b.indexOf("\n", c);
        if (-1 == d)
            return Csb;
        c = Number(b.substring(c, d));
        if (isNaN(c))
            return Dsb;
        d += 1;
        if (d + c > b.length)
            return Csb;
        b = b.slice(d, d + c);
        a.zF = d + c;
        return b
    }
      , Gsb = function(a, b) {
        a.yx = Date.now();
        P8(a);
        var c = b ? window.location.hostname : "";
        a.qs = a.hs.clone();
        g.Nl(a.qs, "DOMAIN", c);
        g.Nl(a.qs, "t", a.J);
        try {
            a.Yn = new ActiveXObject("htmlfile")
        } catch (m) {
            Q8(a);
            a.ls = 7;
            N8(22);
            R8(a);
            return
        }
        var d = "<html><body>";
        if (b) {
            var e = "";
            for (b = 0; b < c.length; b++) {
                var f = c.charAt(b);
                if ("<" == f)
                    f = e + "\\x3c";
                else if (">" == f)
                    f = e + "\\x3e";
                else {
                    if (f in S8)
                        f = S8[f];
                    else if (f in Fsb)
                        f = S8[f] = Fsb[f];
                    else {
                        var h = f.charCodeAt(0);
                        if (31 < h && 127 > h)
                            var l = f;
                        else {
                            if (256 > h) {
                                if (l = "\\x",
                                16 > h || 256 < h)
                                    l += "0"
                            } else
                                l = "\\u",
                                4096 > h && (l += "0");
                            l += h.toString(16).toUpperCase()
                        }
                        f = S8[f] = l
                    }
                    f = e + f
                }
                e = f
            }
            d += '<script>document.domain="' + e + '"\x3c/script>'
        }
        d += "</body></html>";
        g.Wd("b/12014412");
        c = g.ne(d);
        a.Yn.open();
        a.Yn.write(g.me(c));
        a.Yn.close();
        a.Yn.parentWindow.m = (0,
        g.bb)(a.d9, a);
        a.Yn.parentWindow.d = (0,
        g.bb)(a.WX, a, !0);
        a.Yn.parentWindow.rpcClose = (0,
        g.bb)(a.WX, a, !1);
        c = a.Yn.createElement("DIV");
        a.Yn.parentWindow.document.body.appendChild(c);
        d = g.ge(a.qs.toString());
        d = g.De(g.ae(d));
        g.Wd("b/12014412");
        d = g.ne('<iframe src="' + d + '"></iframe>');
        g.ica(c, d);
        a.j.In(1)
    }
      , P8 = function(a) {
        a.kK = Date.now() + a.u;
        Hsb(a, a.u)
    }
      , Hsb = function(a, b) {
        if (null != a.Ax)
            throw Error("WatchDog timer not null");
        a.Ax = L8((0,
        g.bb)(a.O0, a), b)
    }
      , Isb = function(a) {
        a.Ax && (g.Pa.clearTimeout(a.Ax),
        a.Ax = null)
    }
      , R8 = function(a) {
        a.j.jh() || a.Ku || a.j.AF(a)
    }
      , Q8 = function(a) {
        Isb(a);
        g.rb(a.xF);
        a.xF = null;
        a.D.stop();
        a.B.Tf();
        if (a.jj) {
            var b = a.jj;
            a.jj = null;
            b.abort();
            b.dispose()
        }
        a.Yn && (a.Yn = null)
    }
      , Jsb = function(a, b) {
        try {
            a.j.ZR(a, b),
            a.j.In(4)
        } catch (c) {}
    }
      , Lsb = function(a, b, c, d, e) {
        if (0 == d)
            c(!1);
        else {
            var f = e || 0;
            d--;
            Ksb(a, b, function(h) {
                h ? c(!0) : g.Pa.setTimeout(function() {
                    Lsb(a, b, c, d, f)
                }, f)
            })
        }
    }
      , Ksb = function(a, b, c) {
        var d = new Image;
        d.onload = function() {
            try {
                T8(d),
                c(!0)
            } catch (e) {}
        }
        ;
        d.onerror = function() {
            try {
                T8(d),
                c(!1)
            } catch (e) {}
        }
        ;
        d.onabort = function() {
            try {
                T8(d),
                c(!1)
            } catch (e) {}
        }
        ;
        d.ontimeout = function() {
            try {
                T8(d),
                c(!1)
            } catch (e) {}
        }
        ;
        g.Pa.setTimeout(function() {
            if (d.ontimeout)
                d.ontimeout()
        }, b);
        d.src = a
    }
      , T8 = function(a) {
        a.onload = null;
        a.onerror = null;
        a.onabort = null;
        a.ontimeout = null
    }
      , Msb = function(a) {
        this.j = a;
        this.u = new s8
    }
      , Nsb = function(a) {
        var b = U8(a.j, a.MB, "/mail/images/cleardot.gif");
        a8(b);
        Lsb(b.toString(), 5E3, (0,
        g.bb)(a.D3, a), 3, 2E3);
        a.In(1)
    }
      , Osb = function(a) {
        var b = a.j.J;
        if (null != b)
            N8(5),
            b ? (N8(11),
            V8(a.j, a, !1)) : (N8(12),
            V8(a.j, a, !0));
        else if (a.Rj = new O8(a),
        a.Rj.Lu = a.mK,
        b = a.j,
        b = U8(b, b.tB() ? a.sB : null, a.nK),
        N8(5),
        !g.Ze || g.Sc(10))
            b8(b, "TYPE", "xmlhttp"),
            Bsb(a.Rj, b, !1, a.sB, !1);
        else {
            b8(b, "TYPE", "html");
            var c = a.Rj;
            a = !!a.sB;
            c.zx = 3;
            c.hs = a8(b.clone());
            Gsb(c, a)
        }
    }
      , Psb = function(a, b, c) {
        this.j = 1;
        this.u = [];
        this.B = [];
        this.D = new s8;
        this.ea = a || null;
        this.J = null != b ? b : null;
        this.V = c || !1
    }
      , Qsb = function(a, b) {
        this.j = a;
        this.map = b;
        this.context = null
    }
      , Rsb = function(a, b, c, d) {
        g.zb.call(this, "timingevent", a);
        this.size = b;
        this.pA = d
    }
      , Ssb = function(a) {
        g.zb.call(this, "serverreachability", a)
    }
      , Usb = function(a) {
        a.Q0(1, 0);
        a.BF = U8(a, null, a.oK);
        Tsb(a)
    }
      , Vsb = function(a) {
        a.Is && (a.Is.abort(),
        a.Is = null);
        a.Ug && (a.Ug.cancel(),
        a.Ug = null);
        a.cq && (g.Pa.clearTimeout(a.cq),
        a.cq = null);
        W8(a);
        a.dk && (a.dk.cancel(),
        a.dk = null);
        a.us && (g.Pa.clearTimeout(a.us),
        a.us = null)
    }
      , Wsb = function(a, b) {
        if (0 == a.j)
            throw Error("Invalid operation: sending map when state is closed");
        a.u.push(new Qsb(a.R0++,b));
        2 != a.j && 3 != a.j || Tsb(a)
    }
      , Xsb = function(a) {
        var b = 0;
        a.Ug && b++;
        a.dk && b++;
        return b
    }
      , Tsb = function(a) {
        a.dk || a.us || (a.us = L8((0,
        g.bb)(a.dS, a), 0),
        a.Cx = 0)
    }
      , $sb = function(a, b) {
        if (1 == a.j) {
            if (!b) {
                a.vB = Math.floor(1E5 * Math.random());
                b = a.vB++;
                var c = new O8(a,"",b);
                c.Lu = a.uo;
                var d = Ysb(a)
                  , e = a.BF.clone();
                g.Nl(e, "RID", b);
                g.Nl(e, "CVER", "1");
                X8(a, e);
                Asb(c, e, d);
                a.dk = c;
                a.j = 2
            }
        } else
            3 == a.j && (b ? Zsb(a, b) : 0 == a.u.length || a.dk || Zsb(a))
    }
      , Zsb = function(a, b) {
        if (b)
            if (6 < a.Nu) {
                a.u = a.B.concat(a.u);
                a.B.length = 0;
                var c = a.vB - 1;
                b = Ysb(a)
            } else
                c = b.K,
                b = b.Mu;
        else
            c = a.vB++,
            b = Ysb(a);
        var d = a.BF.clone();
        g.Nl(d, "SID", a.C);
        g.Nl(d, "RID", c);
        g.Nl(d, "AID", a.Dx);
        X8(a, d);
        c = new O8(a,a.C,c,a.Cx + 1);
        c.Lu = a.uo;
        c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
        a.dk = c;
        Asb(c, d, b)
    }
      , X8 = function(a, b) {
        a.Hi && (a = a.Hi.hS()) && g.Zc(a, function(c, d) {
            g.Nl(b, d, c)
        })
    }
      , Ysb = function(a) {
        var b = Math.min(a.u.length, 1E3)
          , c = ["count=" + b];
        if (6 < a.Nu && 0 < b) {
            var d = a.u[0].j;
            c.push("ofs=" + d)
        } else
            d = 0;
        for (var e = {}, f = 0; f < b; e = {
            gx: e.gx
        },
        f++) {
            e.gx = a.u[f].j;
            var h = a.u[f].map;
            e.gx = 6 >= a.Nu ? f : e.gx - d;
            try {
                g.Zc(h, function(l) {
                    return function(m, n) {
                        c.push("req" + l.gx + "_" + n + "=" + encodeURIComponent(m))
                    }
                }(e))
            } catch (l) {
                c.push("req" + e.gx + "_type=" + encodeURIComponent("_badmap"))
            }
        }
        a.B = a.B.concat(a.u.splice(0, b));
        return c.join("&")
    }
      , atb = function(a) {
        a.Ug || a.cq || (a.K = 1,
        a.cq = L8((0,
        g.bb)(a.cS, a), 0),
        a.Bx = 0)
    }
      , ctb = function(a) {
        if (a.Ug || a.cq || 3 <= a.Bx)
            return !1;
        a.K++;
        a.cq = L8((0,
        g.bb)(a.cS, a), btb(a, a.Bx));
        a.Bx++;
        return !0
    }
      , V8 = function(a, b, c) {
        a.AJ = null == a.J ? c : !a.J;
        a.xo = b.bq;
        a.V || Usb(a)
    }
      , W8 = function(a) {
        null != a.Ou && (g.Pa.clearTimeout(a.Ou),
        a.Ou = null)
    }
      , btb = function(a, b) {
        var c = 5E3 + Math.floor(1E4 * Math.random());
        a.isActive() || (c *= 2);
        return c * b
    }
      , Y8 = function(a, b) {
        if (2 == b || 9 == b) {
            var c = null;
            a.Hi && (c = null);
            var d = (0,
            g.bb)(a.E$, a);
            c || (c = new g.Fl("//www.google.com/images/cleardot.gif"),
            a8(c));
            Ksb(c.toString(), 1E4, d)
        } else
            N8(2);
        dtb(a, b)
    }
      , dtb = function(a, b) {
        a.j = 0;
        a.Hi && a.Hi.eS(b);
        etb(a);
        Vsb(a)
    }
      , etb = function(a) {
        a.j = 0;
        a.xo = -1;
        if (a.Hi)
            if (0 == a.B.length && 0 == a.u.length)
                a.Hi.pK();
            else {
                var b = g.Nb(a.B)
                  , c = g.Nb(a.u);
                a.B.length = 0;
                a.u.length = 0;
                a.Hi.pK(b, c)
            }
    }
      , U8 = function(a, b, c) {
        var d = g.Ol(c);
        if ("" != d.j)
            b && g.Hl(d, b + "." + d.j),
            g.Il(d, d.C);
        else {
            var e = window.location;
            d = Hqb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
        }
        a.uB && g.Zc(a.uB, function(f, h) {
            g.Nl(d, h, f)
        });
        g.Nl(d, "VER", a.Nu);
        X8(a, d);
        return d
    }
      , ftb = function() {}
      , gtb = function() {
        this.j = [];
        this.u = []
    }
      , htb = function(a) {
        g.zb.call(this, "channelMessage");
        this.message = a
    }
      , itb = function(a) {
        g.zb.call(this, "channelError");
        this.error = a
    }
      , jtb = function(a, b) {
        this.action = a;
        this.params = b || {}
    }
      , Z8 = function(a, b) {
        g.D.call(this);
        this.j = new g.Dq(this.V8,0,this);
        g.H(this, this.j);
        this.Ti = 5E3;
        this.u = 0;
        if ("function" === typeof a)
            b && (a = (0,
            g.bb)(a, b));
        else if (a && "function" === typeof a.handleEvent)
            a = (0,
            g.bb)(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        this.B = a
    }
      , ktb = function(a, b, c, d, e) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? function() {
            return ""
        }
        : d;
        e = void 0 === e ? !1 : e;
        this.Ba = a;
        this.K = b;
        this.B = new g.gr;
        this.u = new Z8(this.a$,this);
        this.j = null;
        this.oa = !1;
        this.J = null;
        this.ea = "";
        this.V = this.D = 0;
        this.C = [];
        this.Va = c;
        this.qa = d;
        this.Ya = e;
        this.Oa = new Iqb;
        this.Ga = new Kqb;
        this.Ma = new Mqb;
        this.Fa = new Oqb;
        this.eb = new Qqb;
        this.kb = new Rqb
    }
      , ltb = function(a) {
        if (a.j) {
            var b = a.qa()
              , c = a.j.uo || {};
            b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
            a.j.uo = c
        }
    }
      , $8 = function(a) {
        this.port = this.domain = "";
        this.j = "/api/lounge";
        this.u = !0;
        a = a || document.location.href;
        var b = Number(g.Dj(4, a)) || "";
        b && (this.port = ":" + b);
        this.domain = g.Ej(a) || "";
        a = g.pc();
        0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1],
        0 > g.oc(a, "10.0") && (this.u = !1))
    }
      , a9 = function(a, b) {
        var c = a.j;
        a.u && (c = "https://" + a.domain + a.port + a.j);
        return g.Sj(c + b, {})
    }
      , mtb = function(a, b, c, d, e) {
        a = {
            format: "JSON",
            method: "POST",
            context: a,
            timeout: 5E3,
            withCredentials: !1,
            onSuccess: g.cb(a.C, d, !0),
            onError: g.cb(a.B, e),
            onTimeout: g.cb(a.D, e)
        };
        c && (a.postParams = c,
        a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.bA(b, a)
    }
      , ntb = function(a, b) {
        g.Id.call(this);
        var c = this;
        this.Cd = a();
        this.Cd.subscribe("handlerOpened", this.V0, this);
        this.Cd.subscribe("handlerClosed", this.T0, this);
        this.Cd.subscribe("handlerError", function(d, e) {
            c.onError(e)
        });
        this.Cd.subscribe("handlerMessage", this.U0, this);
        this.j = b
    }
      , otb = function(a, b, c) {
        var d = this;
        c = void 0 === c ? function() {
            return ""
        }
        : c;
        var e = void 0 === e ? new tsb : e;
        var f = void 0 === f ? new g.gr : f;
        this.pathPrefix = a;
        this.j = b;
        this.Ba = c;
        this.D = f;
        this.V = null;
        this.ea = this.K = 0;
        this.channel = null;
        this.J = 0;
        this.B = new Z8(function() {
            d.B.isActive();
            var h;
            0 === (null == (h = d.channel) ? void 0 : Xrb((new wsb(h,h.j)).j.u)) && d.connect(d.V, d.K)
        }
        );
        this.C = {};
        this.u = {};
        this.oa = !1;
        this.logger = null;
        this.qa = [];
        this.Yg = void 0;
        this.Oa = new Iqb;
        this.Ga = new Kqb;
        this.Ma = new Mqb;
        this.Fa = new Oqb
    }
      , ptb = function(a) {
        g.yd(a.channel, "m", function() {
            a.J = 3;
            a.B.reset();
            a.V = null;
            a.K = 0;
            for (var b = g.u(a.qa), c = b.next(); !c.done; c = b.next())
                c = c.value,
                a.channel && a.channel.send(c);
            a.qa = [];
            a.ra("webChannelOpened");
            Jqb(a.Oa, "WEB_CHANNEL")
        });
        g.yd(a.channel, "n", function() {
            a.J = 0;
            a.B.isActive() || a.ra("webChannelClosed");
            var b, c = null == (b = a.channel) ? void 0 : xsb(new wsb(b,b.j));
            c && (a.qa = [].concat(g.pa(c)));
            Lqb(a.Ga, "WEB_CHANNEL")
        });
        g.yd(a.channel, "p", function(b) {
            var c = b.data;
            "gracefulReconnect" === c[0] ? (a.B.start(),
            a.channel && a.channel.close()) : a.ra("webChannelMessage", new jtb(c[0],c[1]));
            a.Yg = b.statusCode;
            Nqb(a.Ma, "WEB_CHANNEL")
        });
        g.yd(a.channel, "o", function() {
            401 === a.Yg || a.B.start();
            a.ra("webChannelError");
            Pqb(a.Fa, "WEB_CHANNEL")
        })
    }
      , qtb = function(a) {
        var b = a.Ba();
        b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
    }
      , rtb = function(a) {
        g.Id.call(this);
        this.j = a();
        this.j.subscribe("webChannelOpened", this.Y0, this);
        this.j.subscribe("webChannelClosed", this.W0, this);
        this.j.subscribe("webChannelError", this.onError, this);
        this.j.subscribe("webChannelMessage", this.X0, this)
    }
      , stb = function(a, b, c, d, e) {
        function f() {
            return new ktb(a9(a, "/bc"),b,!1,c,d)
        }
        c = void 0 === c ? function() {
            return ""
        }
        : c;
        return g.Bz("enable_mdx_web_channel_desktop") ? new rtb(function() {
            return new otb(a9(a, "/wc"),b,c)
        }
        ) : new ntb(f,e)
    }
      , wtb = function() {
        var a = ttb;
        utb();
        b9.push(a);
        vtb()
    }
      , c9 = function(a, b) {
        utb();
        var c = xtb(a, String(b));
        0 == b9.length ? ytb(c) : (vtb(),
        g.dc(b9, function(d) {
            d(c)
        }))
    }
      , d9 = function(a) {
        c9("CP", a)
    }
      , utb = function() {
        b9 || (b9 = g.Sa("yt.mdx.remote.debug.handlers_") || [],
        g.Ra("yt.mdx.remote.debug.handlers_", b9))
    }
      , ytb = function(a) {
        var b = (e9 + 1) % 50;
        e9 = b;
        f9[b] = a;
        g9 || (g9 = 49 == b)
    }
      , vtb = function() {
        var a = b9;
        if (f9[0]) {
            var b = g9 ? e9 : -1;
            do {
                b = (b + 1) % 50;
                var c = f9[b];
                g.dc(a, function(d) {
                    d(c)
                })
            } while (b != e9);
            f9 = Array(50);
            e9 = -1;
            g9 = !1
        }
    }
      , xtb = function(a, b) {
        var c = (Date.now() - ztb) / 1E3;
        c.toFixed && (c = c.toFixed(3));
        var d = [];
        d.push("[", c + "s", "] ");
        d.push("[", "yt.mdx.remote", "] ");
        d.push(a + ": " + b, "\n");
        return d.join("")
    }
      , h9 = function(a) {
        g.MG.call(this);
        this.J = a;
        this.screens = []
    }
      , Atb = function(a, b) {
        var c = a.get(b.uuid) || a.get(b.id);
        if (c)
            return a = c.name,
            c.id = b.id || c.id,
            c.name = b.name,
            c.token = b.token,
            c.uuid = b.uuid || c.uuid,
            c.name != a;
        a.screens.push(b);
        return !0
    }
      , Btb = function(a, b) {
        var c = a.screens.length != b.length;
        a.screens = g.Wo(a.screens, function(f) {
            return !!crb(b, f)
        });
        for (var d = 0, e = b.length; d < e; d++)
            c = Atb(a, b[d]) || c;
        return c
    }
      , Ctb = function(a, b) {
        var c = a.screens.length;
        a.screens = g.Wo(a.screens, function(d) {
            return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
        });
        return a.screens.length < c
    }
      , Dtb = function(a, b, c, d, e) {
        g.MG.call(this);
        this.B = a;
        this.K = b;
        this.C = c;
        this.J = d;
        this.D = e;
        this.u = 0;
        this.j = null;
        this.Lc = NaN
    }
      , j9 = function(a) {
        h9.call(this, "LocalScreenService");
        this.u = a;
        this.j = NaN;
        i9(this);
        this.info("Initializing with " + $qb(this.screens))
    }
      , Etb = function(a) {
        if (a.screens.length) {
            var b = g.cn(a.screens, function(d) {
                return d.id
            })
              , c = a9(a.u, "/pairing/get_lounge_token_batch");
            mtb(a.u, c, {
                screen_ids: b.join(",")
            }, (0,
            g.bb)(a.Y4, a), (0,
            g.bb)(a.X4, a))
        }
    }
      , i9 = function(a) {
        if (g.Bz("deprecate_pair_servlet_enabled"))
            return Btb(a, []);
        var b = Zqb(jrb());
        b = g.Wo(b, function(c) {
            return !c.uuid
        });
        return Btb(a, b)
    }
      , k9 = function(a, b) {
        lrb(g.cn(a.screens, Xqb));
        b && krb()
    }
      , Gtb = function(a, b) {
        g.MG.call(this);
        this.J = b;
        b = (b = g.mB("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
        for (var c = {}, d = this.J(), e = d.length, f = 0; f < e; ++f) {
            var h = d[f].id;
            c[h] = g.Hb(b, h)
        }
        this.j = c;
        this.D = a;
        this.B = this.C = NaN;
        this.u = null;
        Ftb("Initialized with " + g.wj(this.j))
    }
      , Htb = function(a, b, c) {
        var d = a9(a.D, "/pairing/get_screen_availability");
        mtb(a.D, d, {
            lounge_token: b.token
        }, (0,
        g.bb)(function(e) {
            e = e.screens || [];
            for (var f = e.length, h = 0; h < f; ++h)
                if (e[h].loungeToken == b.token) {
                    c("online" == e[h].status);
                    return
                }
            c(!1)
        }, a), (0,
        g.bb)(function() {
            c(!1)
        }, a))
    }
      , Jtb = function(a, b) {
        a: if (Eqb(b) != Eqb(a.j))
            var c = !1;
        else {
            c = g.ed(b);
            for (var d = c.length, e = 0; e < d; ++e)
                if (!a.j[c[e]]) {
                    c = !1;
                    break a
                }
            c = !0
        }
        c || (Ftb("Updated online screens: " + g.wj(a.j)),
        a.j = b,
        a.ra("screenChange"));
        Itb(a)
    }
      , l9 = function(a) {
        isNaN(a.B) || g.Yz(a.B);
        a.B = g.Wz((0,
        g.bb)(a.aQ, a), 0 < a.C && a.C < g.eb() ? 2E4 : 1E4)
    }
      , Ftb = function(a) {
        c9("OnlineScreenService", a)
    }
      , Ktb = function(a) {
        var b = {};
        g.dc(a.J(), function(c) {
            c.token ? b[c.token] = c.id : this.gg("Requesting availability of screen w/o lounge token.")
        });
        return b
    }
      , Itb = function(a) {
        a = g.ed(g.$c(a.j, function(b) {
            return b
        }));
        g.Wb(a);
        a.length ? g.lB("yt-remote-online-screen-ids", a.join(","), 60) : g.nB("yt-remote-online-screen-ids")
    }
      , m9 = function(a, b) {
        b = void 0 === b ? !1 : b;
        h9.call(this, "ScreenService");
        this.C = a;
        this.K = b;
        this.j = this.u = null;
        this.B = [];
        this.D = {};
        Ltb(this)
    }
      , Ntb = function(a, b, c, d, e, f) {
        a.info("getAutomaticScreenByIds " + c + " / " + b);
        c || (c = a.D[b]);
        var h = a.Tk()
          , l = c ? i8(h, c) : null;
        c && (a.K || l) || (l = i8(h, b));
        if (l) {
            l.uuid = b;
            var m = n9(a, l);
            Htb(a.j, m, function(n) {
                e(n ? m : null)
            })
        } else
            c ? Mtb(a, c, (0,
            g.bb)(function(n) {
                var p = n9(this, new f8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                Htb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
    }
      , Otb = function(a, b) {
        for (var c = a.screens.length, d = 0; d < c; ++d)
            if (a.screens[d].name == b)
                return a.screens[d];
        return null
    }
      , Ptb = function(a, b, c) {
        Htb(a.j, b, c)
    }
      , Mtb = function(a, b, c, d) {
        a.info("requestLoungeToken_ for " + b);
        var e = {
            postParams: {
                screen_ids: b
            },
            method: "POST",
            context: a,
            onSuccess: function(f, h) {
                f = h && h.screens || [];
                f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
            },
            onError: function() {
                d(Error("Request screen lounge token failed"))
            }
        };
        g.bA(a9(a.C, "/pairing/get_lounge_token_batch"), e)
    }
      , Qtb = function(a) {
        a.screens = a.u.Tk();
        var b = a.D, c = {}, d;
        for (d in b)
            c[b[d]] = d;
        b = a.screens.length;
        for (d = 0; d < b; ++d) {
            var e = a.screens[d];
            e.uuid = c[e.id] || ""
        }
        a.info("Updated manual screens: " + $qb(a.screens))
    }
      , Ltb = function(a) {
        Rtb(a);
        a.u = new j9(a.C);
        a.u.subscribe("screenChange", (0,
        g.bb)(a.h5, a));
        Qtb(a);
        a.K || (a.B = Zqb(g.mB("yt-remote-automatic-screen-cache") || []));
        Rtb(a);
        a.info("Initializing automatic screens: " + $qb(a.B));
        a.j = new Gtb(a.C,(0,
        g.bb)(a.Tk, a, !0));
        a.j.subscribe("screenChange", (0,
        g.bb)(function() {
            this.ra("onlineScreenChange")
        }, a))
    }
      , n9 = function(a, b) {
        var c = a.get(b.id);
        c ? (c.uuid = b.uuid,
        b = c) : ((c = i8(a.B, b.uuid)) ? (c.id = b.id,
        c.token = b.token,
        b = c) : a.B.push(b),
        a.K || Stb(a));
        Rtb(a);
        a.D[b.uuid] = b.id;
        g.lB("yt-remote-device-id-map", a.D, 31536E3);
        return b
    }
      , Stb = function(a) {
        a = g.Wo(a.B, function(b) {
            return "shortLived" != b.idType
        });
        g.lB("yt-remote-automatic-screen-cache", g.cn(a, Xqb))
    }
      , Rtb = function(a) {
        a.D = g.mB("yt-remote-device-id-map") || {}
    }
      , o9 = function(a, b, c) {
        g.MG.call(this);
        this.Fa = c;
        this.C = a;
        this.u = b;
        this.j = null
    }
      , p9 = function(a, b) {
        a.j = b;
        a.ra("sessionScreen", a.j)
    }
      , Ttb = function(a, b) {
        a.j && (a.j.token = b,
        n9(a.C, a.j));
        a.ra("sessionScreen", a.j)
    }
      , q9 = function(a, b) {
        c9(a.Fa, b)
    }
      , r9 = function(a, b, c) {
        o9.call(this, a, b, "CastSession");
        var d = this;
        this.config_ = c;
        this.B = null;
        this.qa = (0,
        g.bb)(this.f1, this);
        this.Ga = (0,
        g.bb)(this.k9, this);
        this.oa = g.Wz(function() {
            Utb(d, null)
        }, 12E4);
        this.K = this.D = this.J = this.V = 0;
        this.Ba = !1;
        this.ea = "unknown"
    }
      , Wtb = function(a, b) {
        g.Yz(a.K);
        a.K = 0;
        0 == b ? Vtb(a) : a.K = g.Wz(function() {
            Vtb(a)
        }, b)
    }
      , Vtb = function(a) {
        Xtb(a, "getLoungeToken");
        g.Yz(a.D);
        a.D = g.Wz(function() {
            Ytb(a, null)
        }, 3E4)
    }
      , Xtb = function(a, b) {
        a.info("sendYoutubeMessage_: " + b + " " + g.wj());
        var c = {};
        c.type = b;
        a.B ? a.B.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0,
        g.bb)(function() {
            q9(this, "Failed to send message: " + b + ".")
        }, a)) : q9(a, "Sending yt message without session: " + g.wj(c))
    }
      , Ztb = function(a, b) {
        b ? (a.info("onConnectedScreenId_: Received screenId: " + b),
        a.j && a.j.id == b || a.rV(b, function(c) {
            p9(a, c)
        }, function() {
            return a.Ej()
        }, 5)) : a.Ej(Error("Waiting for session status timed out."))
    }
      , aub = function(a, b, c) {
        a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
        var d = new f8(b);
        $tb(a, d, function(e) {
            e ? (a.Ba = !0,
            n9(a.C, d),
            p9(a, d),
            a.ea = "unknown",
            Wtb(a, c)) : (g.Gz(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")),
            a.Ej())
        }, 5)
    }
      , Utb = function(a, b) {
        g.Yz(a.oa);
        a.oa = 0;
        b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? aub(a, {
            name: a.u.friendlyName,
            screenId: b.screenId,
            loungeToken: b.loungeToken,
            dialId: b.deviceId,
            screenIdType: "shortLived"
        }, b.loungeTokenRefreshIntervalMs) : (g.Gz(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")),
        Ztb(a, b.screenId))) : (g.Gz(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")),
        Ztb(a, b.screenId)) : Ztb(a, b.screenId) : a.Ej(Error("Waiting for session status timed out."))
    }
      , Ytb = function(a, b) {
        g.Yz(a.D);
        a.D = 0;
        var c = null;
        if (b)
            if (b.loungeToken) {
                var d;
                (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
            } else
                c = "missingLoungeToken";
        else
            c = "noLoungeTokenResponse";
        c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)),
        a.ea = c,
        Wtb(a, 3E4)) : (Ttb(a, b.loungeToken),
        a.Ba = !1,
        a.ea = "unknown",
        Wtb(a, b.loungeTokenRefreshIntervalMs))
    }
      , $tb = function(a, b, c, d) {
        g.Yz(a.J);
        a.J = 0;
        Ptb(a.C, b, function(e) {
            e || 0 > d ? c(e) : a.J = g.Wz(function() {
                $tb(a, b, c, d - 1)
            }, 300)
        })
    }
      , bub = function(a) {
        g.Yz(a.V);
        a.V = 0;
        g.Yz(a.J);
        a.J = 0;
        g.Yz(a.oa);
        a.oa = 0;
        g.Yz(a.D);
        a.D = 0;
        g.Yz(a.K);
        a.K = 0
    }
      , s9 = function(a, b, c, d) {
        o9.call(this, a, b, "DialSession");
        this.config_ = d;
        this.B = this.V = null;
        this.Ga = "";
        this.Va = c;
        this.Oa = null;
        this.oa = function() {}
        ;
        this.ea = NaN;
        this.Ma = (0,
        g.bb)(this.g1, this);
        this.D = function() {}
        ;
        this.K = this.J = 0;
        this.qa = !1;
        this.Ba = "unknown"
    }
      , t9 = function(a) {
        var b;
        return !!(a.config_.enableDialLoungeToken && (null == (b = a.B) ? 0 : b.getDialAppInfo))
    }
      , cub = function(a) {
        a.D = a.C.jS(a.Ga, a.u.label, a.u.friendlyName, t9(a), function(b, c) {
            a.D = function() {}
            ;
            a.qa = !0;
            p9(a, b);
            "shortLived" == b.idType && 0 < c && u9(a, c)
        }, function(b) {
            a.D = function() {}
            ;
            a.Ej(b)
        })
    }
      , dub = function(a) {
        var b = {};
        b.pairingCode = a.Ga;
        b.theme = a.Va;
        nrb() && (b.env_useStageMdx = 1);
        return g.Rj(b)
    }
      , eub = function(a) {
        return new Promise(function(b) {
            a.Ga = arb();
            if (a.Oa) {
                var c = new chrome.cast.DialLaunchResponse(!0,dub(a));
                b(c);
                cub(a)
            } else
                a.oa = function() {
                    g.Yz(a.ea);
                    a.oa = function() {}
                    ;
                    a.ea = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0,dub(a));
                    b(d);
                    cub(a)
                }
                ,
                a.ea = g.Wz(function() {
                    a.oa()
                }, 100)
        }
        )
    }
      , gub = function(a, b, c) {
        a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
        var d = new f8(b);
        return (new Promise(function(e) {
            fub(a, d, function(f) {
                f ? (a.qa = !0,
                n9(a.C, d),
                p9(a, d),
                u9(a, c)) : g.Gz(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                e(f)
            }, 5)
        }
        )).then(function(e) {
            return e ? new chrome.cast.DialLaunchResponse(!1) : eub(a)
        })
    }
      , hub = function(a, b) {
        var c = a.V.receiver.label
          , d = a.u.friendlyName;
        return (new Promise(function(e) {
            Ntb(a.C, c, b, d, function(f) {
                f && f.token && p9(a, f);
                e(f)
            }, function(f) {
                q9(a, "Failed to get DIAL screen: " + f);
                e(null)
            })
        }
        )).then(function(e) {
            return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : eub(a)
        })
    }
      , fub = function(a, b, c, d) {
        g.Yz(a.J);
        a.J = 0;
        Ptb(a.C, b, function(e) {
            e || 0 > d ? c(e) : a.J = g.Wz(function() {
                fub(a, b, c, d - 1)
            }, 300)
        })
    }
      , u9 = function(a, b) {
        a.info("getDialAppInfoWithTimeout_ " + b);
        t9(a) && (g.Yz(a.K),
        a.K = 0,
        0 == b ? iub(a) : a.K = g.Wz(function() {
            iub(a)
        }, b))
    }
      , iub = function(a) {
        t9(a) && a.B.getDialAppInfo(function(b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
                var d;
                (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
            } else
                c = "missingLoungeToken";
            c ? (a.Ba = c,
            u9(a, 3E4)) : (a.qa = !1,
            a.Ba = "unknown",
            Ttb(a, b.loungeToken),
            u9(a, b.loungeTokenRefreshIntervalMs))
        }, function(b) {
            a.info("getDialAppInfo error: " + b);
            a.Ba = "noLoungeTokenResponse";
            u9(a, 3E4)
        })
    }
      , jub = function(a) {
        g.Yz(a.J);
        a.J = 0;
        g.Yz(a.K);
        a.K = 0;
        a.D();
        a.D = function() {}
        ;
        g.Yz(a.ea)
    }
      , v9 = function(a, b) {
        o9.call(this, a, b, "ManualSession");
        this.B = g.Wz((0,
        g.bb)(this.Cz, this, null), 150)
    }
      , w9 = function(a, b) {
        g.MG.call(this);
        this.config_ = b;
        this.u = a;
        this.V = b.appId || "233637DE";
        this.C = b.theme || "cl";
        this.ea = b.disableCastApi || !1;
        this.J = b.forceMirroring || !1;
        this.j = null;
        this.K = !1;
        this.B = [];
        this.D = (0,
        g.bb)(this.h8, this)
    }
      , kub = function(a, b) {
        return b ? g.Eb(a.B, function(c) {
            return g8(b, c.label)
        }, a) : null
    }
      , x9 = function(a) {
        c9("Controller", a)
    }
      , ttb = function(a) {
        window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
    }
      , y9 = function(a) {
        return a.K || !!a.B.length || !!a.j
    }
      , z9 = function(a, b, c) {
        b != a.j && (g.rb(a.j),
        (a.j = b) ? (c ? a.ra("yt-remote-cast2-receiver-resumed", b.u) : a.ra("yt-remote-cast2-receiver-selected", b.u),
        b.subscribe("sessionScreen", (0,
        g.bb)(a.UX, a, b)),
        b.subscribe("sessionFailed", function() {
            return lub(a, b)
        }),
        b.j ? a.ra("yt-remote-cast2-session-change", b.j) : c && a.j.Cz(null)) : a.ra("yt-remote-cast2-session-change", null))
    }
      , lub = function(a, b) {
        a.j == b && a.ra("yt-remote-cast2-session-failed")
    }
      , mub = function(a) {
        var b = a.u.iS()
          , c = a.j && a.j.u;
        a = g.cn(b, function(d) {
            c && g8(d, c.label) && (c = null);
            var e = d.uuid ? d.uuid : d.id
              , f = kub(this, d);
            f ? (f.label = e,
            f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e,d.name),
            f.receiverType = chrome.cast.ReceiverType.CUSTOM);
            return f
        }, a);
        c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label,c.friendlyName),
        c.receiverType = chrome.cast.ReceiverType.CUSTOM),
        a.push(c));
        return a
    }
      , tub = function(a, b, c, d) {
        d.disableCastApi ? A9("Cannot initialize because disabled by Mdx config.") : nub() ? oub(b, d) && (pub(!0),
        window.chrome && chrome.cast && chrome.cast.isAvailable ? qub(a, c) : (window.__onGCastApiAvailable = function(e, f) {
            e ? qub(a, c) : (B9("Failed to load cast API: " + f),
            rub(!1),
            pub(!1),
            g.nB("yt-remote-cast-available"),
            g.nB("yt-remote-cast-receiver"),
            sub(),
            c(!1))
        }
        ,
        d.loadCastApiSetupScript ? g.KD("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= prb() && yrb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? trb() : 89 <= prb() ? Arb() : (xrb(),
        p8(zrb.map(urb))))) : A9("Cannot initialize because not running Chrome")
    }
      , sub = function() {
        A9("dispose");
        var a = C9();
        a && a.dispose();
        g.Ra("yt.mdx.remote.cloudview.instance_", null);
        uub(!1);
        g.ID(vub);
        vub.length = 0
    }
      , D9 = function() {
        return !!g.mB("yt-remote-cast-installed")
    }
      , wub = function() {
        var a = g.mB("yt-remote-cast-receiver");
        return a ? a.friendlyName : null
    }
      , xub = function() {
        A9("clearCurrentReceiver");
        g.nB("yt-remote-cast-receiver")
    }
      , yub = function() {
        return D9() ? C9() ? C9().getCastSession() : (B9("getCastSelector: Cast is not initialized."),
        null) : (B9("getCastSelector: Cast API is not installed!"),
        null)
    }
      , zub = function() {
        D9() ? C9() ? E9() ? (A9("Requesting cast selector."),
        C9().requestSession()) : (A9("Wait for cast API to be ready to request the session."),
        vub.push(g.HD("yt-remote-cast2-api-ready", zub))) : B9("requestCastSelector: Cast is not initialized.") : B9("requestCastSelector: Cast API is not installed!")
    }
      , F9 = function(a, b) {
        E9() ? C9().setConnectedScreenStatus(a, b) : B9("setConnectedScreenStatus called before ready.")
    }
      , nub = function() {
        var a = 0 <= g.pc().search(/ (CrMo|Chrome|CriOS)\//);
        return g.OK || a
    }
      , Aub = function(a, b) {
        C9().init(a, b)
    }
      , oub = function(a, b) {
        var c = !1;
        C9() || (a = new w9(a,b),
        a.subscribe("yt-remote-cast2-availability-change", function(d) {
            g.lB("yt-remote-cast-available", d);
            n8("yt-remote-cast2-availability-change", d)
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
            A9("onReceiverSelected: " + d.friendlyName);
            g.lB("yt-remote-cast-receiver", d);
            n8("yt-remote-cast2-receiver-selected", d)
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
            A9("onReceiverResumed: " + d.friendlyName);
            g.lB("yt-remote-cast-receiver", d);
            n8("yt-remote-cast2-receiver-resumed", d)
        }),
        a.subscribe("yt-remote-cast2-session-change", function(d) {
            A9("onSessionChange: " + h8(d));
            d || g.nB("yt-remote-cast-receiver");
            n8("yt-remote-cast2-session-change", d)
        }),
        g.Ra("yt.mdx.remote.cloudview.instance_", a),
        c = !0);
        A9("cloudview.createSingleton_: " + c);
        return c
    }
      , C9 = function() {
        return g.Sa("yt.mdx.remote.cloudview.instance_")
    }
      , qub = function(a, b) {
        rub(!0);
        pub(!1);
        Aub(a, function(c) {
            c ? (uub(!0),
            g.JD("yt-remote-cast2-api-ready")) : (B9("Failed to initialize cast API."),
            rub(!1),
            g.nB("yt-remote-cast-available"),
            g.nB("yt-remote-cast-receiver"),
            sub());
            b(c)
        })
    }
      , A9 = function(a) {
        c9("cloudview", a)
    }
      , B9 = function(a) {
        c9("cloudview", a)
    }
      , rub = function(a) {
        A9("setCastInstalled_ " + a);
        g.lB("yt-remote-cast-installed", a)
    }
      , E9 = function() {
        return !!g.Sa("yt.mdx.remote.cloudview.apiReady_")
    }
      , uub = function(a) {
        A9("setApiReady_ " + a);
        g.Ra("yt.mdx.remote.cloudview.apiReady_", a)
    }
      , pub = function(a) {
        g.Ra("yt.mdx.remote.cloudview.initializing_", a)
    }
      , G9 = function(a) {
        this.index = -1;
        this.videoId = this.listId = "";
        this.volume = this.playerState = -1;
        this.muted = !1;
        this.audioTrackId = null;
        this.J = this.K = 0;
        this.trackData = null;
        this.Xk = this.mp = !1;
        this.V = this.D = this.j = this.C = 0;
        this.B = NaN;
        this.u = !1;
        this.reset(a)
    }
      , Bub = function(a) {
        a.audioTrackId = null;
        a.trackData = null;
        a.playerState = -1;
        a.mp = !1;
        a.Xk = !1;
        a.K = 0;
        a.J = g.eb();
        a.C = 0;
        a.j = 0;
        a.D = 0;
        a.V = 0;
        a.B = NaN;
        a.u = !1
    }
      , H9 = function(a) {
        return a.ud() ? (g.eb() - a.J) / 1E3 : 0
    }
      , I9 = function(a, b) {
        a.K = b;
        a.J = g.eb()
    }
      , J9 = function(a) {
        switch (a.playerState) {
        case 1:
        case 1081:
            return (g.eb() - a.J) / 1E3 + a.K;
        case -1E3:
            return 0
        }
        return a.K
    }
      , K9 = function(a, b, c) {
        var d = a.videoId;
        a.videoId = b;
        a.index = c;
        b != d && Bub(a)
    }
      , Cub = function(a) {
        var b = {};
        b.index = a.index;
        b.listId = a.listId;
        b.videoId = a.videoId;
        b.playerState = a.playerState;
        b.volume = a.volume;
        b.muted = a.muted;
        b.audioTrackId = a.audioTrackId;
        b.trackData = g.qd(a.trackData);
        b.hasPrevious = a.mp;
        b.hasNext = a.Xk;
        b.playerTime = a.K;
        b.playerTimeAt = a.J;
        b.seekableStart = a.C;
        b.seekableEnd = a.j;
        b.duration = a.D;
        b.loadedTime = a.V;
        b.liveIngestionTime = a.B;
        return b
    }
      , M9 = function(a, b) {
        g.MG.call(this);
        this.B = 0;
        this.C = a;
        this.J = [];
        this.D = new gtb;
        this.u = this.j = null;
        this.ea = (0,
        g.bb)(this.Z6, this);
        this.K = (0,
        g.bb)(this.ED, this);
        this.V = (0,
        g.bb)(this.Y6, this);
        this.oa = (0,
        g.bb)(this.c7, this);
        var c = 0;
        a ? (c = a.getProxyState(),
        3 != c && (a.subscribe("proxyStateChange", this.sQ, this),
        Dub(this))) : c = 3;
        0 != c && (b ? this.sQ(c) : g.Wz((0,
        g.bb)(function() {
            this.sQ(c)
        }, this), 0));
        (a = yub()) && L9(this, a);
        this.subscribe("yt-remote-cast2-session-change", this.oa)
    }
      , N9 = function(a) {
        return new G9(a.C.getPlayerContextData())
    }
      , Dub = function(a) {
        g.dc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
            this.J.push(this.C.subscribe(b, g.cb(this.f8, b), this))
        }, a)
    }
      , Eub = function(a) {
        g.dc(a.J, function(b) {
            this.C.unsubscribeByKey(b)
        }, a);
        a.J.length = 0
    }
      , O9 = function(a) {
        return 1 == a.getState()
    }
      , P9 = function(a, b) {
        var c = a.D;
        50 > c.j.length + c.u.length && a.D.u.push(b)
    }
      , Fub = function(a, b, c) {
        var d = N9(a);
        I9(d, c);
        -1E3 != d.playerState && (d.playerState = b);
        Q9(a, d)
    }
      , R9 = function(a, b, c) {
        a.C.sendMessage(b, c)
    }
      , Q9 = function(a, b) {
        Eub(a);
        a.C.setPlayerContextData(Cub(b));
        Dub(a)
    }
      , L9 = function(a, b) {
        a.u && (a.u.removeUpdateListener(a.ea),
        a.u.removeMediaListener(a.K),
        a.ED(null));
        a.u = b;
        a.u && (d9("Setting cast session: " + a.u.sessionId),
        a.u.addUpdateListener(a.ea),
        a.u.addMediaListener(a.K),
        a.u.media.length && a.ED(a.u.media[0]))
    }
      , Gub = function(a) {
        var b = a.j.media
          , c = a.j.customData;
        if (b && c) {
            var d = N9(a);
            b.contentId != d.videoId && d9("Cast changing video to: " + b.contentId);
            d.videoId = b.contentId;
            d.playerState = c.playerState;
            I9(d, a.j.getEstimatedTime());
            Q9(a, d)
        } else
            d9("No cast media video. Ignoring state update.")
    }
      , S9 = function(a, b, c) {
        return (0,
        g.bb)(function(d) {
            this.gg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
            d.code != chrome.cast.ErrorCode.TIMEOUT && (this.gg("Retrying " + b + " using MDx browser channel."),
            R9(this, b, c))
        }, a)
    }
      , V9 = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        g.MG.call(this);
        var e = this;
        this.J = NaN;
        this.Ga = !1;
        this.ea = this.V = this.qa = this.Ba = NaN;
        this.oa = [];
        this.D = this.K = this.C = this.j = this.u = null;
        this.Oa = a;
        this.Ma = d;
        this.oa.push(g.$A(window, "beforeunload", function() {
            e.Sy(2)
        }));
        this.B = [];
        this.j = new G9;
        this.Va = b.id;
        this.Fa = b.idType;
        this.u = stb(this.Oa, c, this.nS, "shortLived" == this.Fa, this.Va);
        this.u.Ta("channelOpened", function() {
            Hub(e)
        });
        this.u.Ta("channelClosed", function() {
            T9("Channel closed");
            isNaN(e.J) ? l8(!0) : l8();
            e.dispose()
        });
        this.u.Ta("channelError", function(f) {
            l8();
            isNaN(e.FC()) ? (1 == f && "shortLived" == e.Fa && e.ra("browserChannelAuthError", f),
            T9("Channel error: " + f + " without reconnection"),
            e.dispose()) : (e.Ga = !0,
            T9("Channel error: " + f + " with reconnection in " + e.FC() + " ms"),
            U9(e, 2))
        });
        this.u.Ta("channelMessage", function(f) {
            Iub(e, f)
        });
        this.u.Ir(b.token);
        this.subscribe("remoteQueueChange", function() {
            var f = e.j.videoId;
            g.oB() && g.lB("yt-remote-session-video-id", f)
        })
    }
      , Jub = function(a) {
        return g.Eb(a.B, function(b) {
            return "LOUNGE_SCREEN" == b.type
        })
    }
      , T9 = function(a) {
        c9("conn", a)
    }
      , U9 = function(a, b) {
        a.ra("proxyStateChange", b)
    }
      , Kub = function(a) {
        a.J = g.Wz(function() {
            T9("Connecting timeout");
            a.Sy(1)
        }, 2E4)
    }
      , Lub = function(a) {
        g.Yz(a.J);
        a.J = NaN
    }
      , Mub = function(a) {
        g.Yz(a.Ba);
        a.Ba = NaN
    }
      , Oub = function(a) {
        Nub(a);
        a.qa = g.Wz(function() {
            W9(a, "getNowPlaying")
        }, 2E4)
    }
      , Nub = function(a) {
        g.Yz(a.qa);
        a.qa = NaN
    }
      , Hub = function(a) {
        T9("Channel opened");
        a.Ga && (a.Ga = !1,
        Mub(a),
        a.Ba = g.Wz(function() {
            T9("Timing out waiting for a screen.");
            a.Sy(1)
        }, 15E3))
    }
      , Qub = function(a, b) {
        var c = null;
        if (b) {
            var d = Jub(a);
            d && (c = {
                clientName: d.clientName,
                deviceMake: d.brand,
                deviceModel: d.model,
                osVersion: d.osVersion
            })
        }
        g.Ra("yt.mdx.remote.remoteClient_", c);
        b && (Lub(a),
        Mub(a));
        c = a.u.rz() && isNaN(a.J);
        b == c ? b && (U9(a, 1),
        W9(a, "getSubtitlesTrack")) : b ? (a.nV() && a.j.reset(),
        U9(a, 1),
        W9(a, "getNowPlaying"),
        Pub(a)) : a.Sy(1)
    }
      , Rub = function(a, b) {
        var c = b.params.videoId;
        delete b.params.videoId;
        c == a.j.videoId && (g.kd(b.params) ? a.j.trackData = null : a.j.trackData = b.params,
        a.ra("remotePlayerChange"))
    }
      , Sub = function(a, b, c) {
        var d = b.params.videoId || b.params.video_id
          , e = parseInt(b.params.currentIndex, 10);
        a.j.listId = b.params.listId || a.j.listId;
        K9(a.j, d, e);
        a.ra("remoteQueueChange", c)
    }
      , Uub = function(a, b) {
        b.params = b.params || {};
        Sub(a, b, "NOW_PLAYING_MAY_CHANGE");
        Tub(a, b);
        a.ra("autoplayDismissed")
    }
      , Tub = function(a, b) {
        var c = parseInt(b.params.currentTime || b.params.current_time, 10);
        I9(a.j, isNaN(c) ? 0 : c);
        c = parseInt(b.params.state, 10);
        c = isNaN(c) ? -1 : c;
        -1 == c && -1E3 == a.j.playerState && (c = -1E3);
        a.j.playerState = c;
        c = Number(b.params.loadedTime);
        a.j.V = isNaN(c) ? 0 : c;
        a.j.rl(Number(b.params.duration));
        c = a.j;
        var d = Number(b.params.liveIngestionTime);
        c.B = d;
        c.u = isNaN(d) ? !1 : !0;
        c = a.j;
        d = Number(b.params.seekableStartTime);
        b = Number(b.params.seekableEndTime);
        c.C = isNaN(d) ? 0 : d;
        c.j = isNaN(b) ? 0 : b;
        1 == a.j.playerState ? Oub(a) : Nub(a);
        a.ra("remotePlayerChange")
    }
      , Vub = function(a, b) {
        if (-1E3 != a.j.playerState) {
            var c = 1085;
            switch (parseInt(b.params.adState, 10)) {
            case 1:
                c = 1081;
                break;
            case 2:
                c = 1084;
                break;
            case 0:
                c = 1083
            }
            a.j.playerState = c;
            b = parseInt(b.params.currentTime, 10);
            I9(a.j, isNaN(b) ? 0 : b);
            a.ra("remotePlayerChange")
        }
    }
      , Wub = function(a, b) {
        var c = "true" == b.params.muted;
        a.j.volume = parseInt(b.params.volume, 10);
        a.j.muted = c;
        a.ra("remotePlayerChange")
    }
      , Xub = function(a, b) {
        a.K = b.params.videoId;
        a.ra("nowAutoplaying", parseInt(b.params.timeout, 10))
    }
      , Yub = function(a, b) {
        a.K = b.params.videoId || null;
        a.ra("autoplayUpNext", a.K)
    }
      , Zub = function(a, b) {
        a.D = b.params.autoplayMode;
        a.ra("autoplayModeChange", a.D);
        "DISABLED" == a.D && a.ra("autoplayDismissed")
    }
      , $ub = function(a, b) {
        var c = "true" == b.params.hasNext;
        a.j.mp = "true" == b.params.hasPrevious;
        a.j.Xk = c;
        a.ra("previousNextChange")
    }
      , Iub = function(a, b) {
        b = b.message;
        b.params ? T9("Received: action=" + b.action + ", params=" + g.wj(b.params)) : T9("Received: action=" + b.action + " {}");
        switch (b.action) {
        case "loungeStatus":
            b = c8(b.params.devices);
            a.B = g.cn(b, function(d) {
                return new e8(d)
            });
            b = !!g.Eb(a.B, function(d) {
                return "LOUNGE_SCREEN" == d.type
            });
            Qub(a, b);
            b = a.lW("mlm");
            a.ra("multiStateLoopEnabled", b);
            break;
        case "loungeScreenDisconnected":
            g.Kb(a.B, function(d) {
                return "LOUNGE_SCREEN" == d.type
            });
            Qub(a, !1);
            break;
        case "remoteConnected":
            var c = new e8(c8(b.params.device));
            g.Eb(a.B, function(d) {
                return d.equals(c)
            }) || Dqb(a.B, c);
            break;
        case "remoteDisconnected":
            c = new e8(c8(b.params.device));
            g.Kb(a.B, function(d) {
                return d.equals(c)
            });
            break;
        case "gracefulDisconnect":
            break;
        case "playlistModified":
            Sub(a, b, "QUEUE_MODIFIED");
            break;
        case "nowPlaying":
            Uub(a, b);
            break;
        case "onStateChange":
            Tub(a, b);
            break;
        case "onAdStateChange":
            Vub(a, b);
            break;
        case "onVolumeChanged":
            Wub(a, b);
            break;
        case "onSubtitlesTrackChanged":
            Rub(a, b);
            break;
        case "nowAutoplaying":
            Xub(a, b);
            break;
        case "autoplayDismissed":
            a.ra("autoplayDismissed");
            break;
        case "autoplayUpNext":
            Yub(a, b);
            break;
        case "onAutoplayModeChanged":
            Zub(a, b);
            break;
        case "onHasPreviousNextChanged":
            $ub(a, b);
            break;
        case "requestAssistedSignIn":
            a.ra("assistedSignInRequested", b.params.authCode);
            break;
        case "onLoopModeChanged":
            a.ra("loopModeChange", b.params.loopMode);
            break;
        default:
            T9("Unrecognized action: " + b.action)
        }
    }
      , Pub = function(a) {
        g.Yz(a.ea);
        a.ea = g.Wz(function() {
            a.Sy(1)
        }, 864E5)
    }
      , W9 = function(a, b, c) {
        c ? T9("Sending: action=" + b + ", params=" + g.wj(c)) : T9("Sending: action=" + b);
        a.u.sendMessage(b, c)
    }
      , avb = function(a) {
        h9.call(this, "ScreenServiceProxy");
        this.ih = a;
        this.j = [];
        this.j.push(this.ih.$_s("screenChange", (0,
        g.bb)(this.m1, this)));
        this.j.push(this.ih.$_s("onlineScreenChange", (0,
        g.bb)(this.N7, this)))
    }
      , fvb = function(a, b) {
        mrb();
        if (!m8 || !m8.get("yt-remote-disable-remote-module-for-dev")) {
            b = g.zz("MDX_CONFIG") || b;
            drb();
            hrb();
            X9 || (X9 = new $8(b ? b.loungeApiHost : void 0),
            nrb() && (X9.j = "/api/loungedev"));
            Y9 || (Y9 = g.Sa("yt.mdx.remote.deferredProxies_") || [],
            g.Ra("yt.mdx.remote.deferredProxies_", Y9));
            bvb();
            var c = Z9();
            if (!c) {
                var d = new m9(X9,b ? b.disableAutomaticScreenCache || !1 : !1);
                g.Ra("yt.mdx.remote.screenService_", d);
                c = Z9();
                var e = {};
                b && (e = {
                    appId: b.appId,
                    disableDial: b.disableDial,
                    theme: b.theme,
                    loadCastApiSetupScript: b.loadCastApiSetupScript,
                    disableCastApi: b.disableCastApi,
                    enableDialLoungeToken: b.enableDialLoungeToken,
                    enableCastLoungeToken: b.enableCastLoungeToken,
                    forceMirroring: b.forceMirroring
                });
                g.Ra("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                tub(a, d, function(f) {
                    f ? $9() && F9($9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                        n8("yt-remote-receiver-availability-change")
                    })
                }, e)
            }
            b && !g.Sa("yt.mdx.remote.initialized_") && (g.Ra("yt.mdx.remote.initialized_", !0),
            a$("Initializing: " + g.wj(b)),
            b$.push(g.HD("yt-remote-cast2-api-ready", function() {
                n8("yt-remote-api-ready")
            })),
            b$.push(g.HD("yt-remote-cast2-availability-change", function() {
                n8("yt-remote-receiver-availability-change")
            })),
            b$.push(g.HD("yt-remote-cast2-receiver-selected", function() {
                c$(null);
                n8("yt-remote-auto-connect", "cast-selector-receiver")
            })),
            b$.push(g.HD("yt-remote-cast2-receiver-resumed", function() {
                n8("yt-remote-receiver-resumed", "cast-selector-receiver")
            })),
            b$.push(g.HD("yt-remote-cast2-session-change", cvb)),
            b$.push(g.HD("yt-remote-connection-change", function(f) {
                f ? F9($9(), "YouTube TV") : d$() || (F9(null, null),
                xub())
            })),
            b$.push(g.HD("yt-remote-cast2-session-failed", function() {
                n8("yt-remote-connection-failed")
            })),
            a = dvb(),
            b.isAuto && (a.id += "#dial"),
            e = b.capabilities || [],
            g.Bz("desktop_enable_autoplay") && e.push("atp"),
            0 < e.length && (a.capabilities = e),
            a.name = b.device,
            a.app = b.app,
            (b = b.theme) && (a.theme = b),
            a$(" -- with channel params: " + g.wj(a)),
            a ? (g.lB("yt-remote-session-app", a.app),
            g.lB("yt-remote-session-name", a.name)) : (g.nB("yt-remote-session-app"),
            g.nB("yt-remote-session-name")),
            g.Ra("yt.mdx.remote.channelParams_", a),
            c.start(),
            $9() || evb())
        }
    }
      , gvb = function() {
        var a = Z9().ih.$_gos();
        var b = e$();
        b && f$() && (crb(a, b) || a.push(b));
        return brb(a)
    }
      , ivb = function() {
        var a = hvb();
        !a && D9() && wub() && (a = {
            key: "cast-selector-receiver",
            name: wub()
        });
        return a
    }
      , hvb = function() {
        var a = gvb()
          , b = e$();
        b || (b = d$());
        return g.Eb(a, function(c) {
            return b && g8(b, c.key) ? !0 : !1
        })
    }
      , e$ = function() {
        var a = $9();
        if (!a)
            return null;
        var b = Z9().Tk();
        return i8(b, a)
    }
      , cvb = function(a) {
        a$("remote.onCastSessionChange_: " + h8(a));
        if (a) {
            var b = e$();
            if (b && b.id == a.id) {
                if (F9(b.id, "YouTube TV"),
                "shortLived" == a.idType && (a = a.token))
                    g$ && (g$.token = a),
                    (b = f$()) && b.Ir(a)
            } else
                b && h$(),
                i$(a, 1)
        } else
            f$() && h$()
    }
      , h$ = function() {
        E9() ? C9().stopSession() : B9("stopSession called before API ready.");
        var a = f$();
        a && (a.disconnect(1),
        jvb(null))
    }
      , kvb = function() {
        var a = f$();
        return !!a && 3 != a.getProxyState()
    }
      , a$ = function(a) {
        c9("remote", a)
    }
      , Z9 = function() {
        if (!lvb) {
            var a = g.Sa("yt.mdx.remote.screenService_");
            lvb = a ? new avb(a) : null
        }
        return lvb
    }
      , $9 = function() {
        return g.Sa("yt.mdx.remote.currentScreenId_")
    }
      , mvb = function(a) {
        g.Ra("yt.mdx.remote.currentScreenId_", a)
    }
      , nvb = function() {
        return g.Sa("yt.mdx.remote.connectData_")
    }
      , c$ = function(a) {
        g.Ra("yt.mdx.remote.connectData_", a)
    }
      , f$ = function() {
        return g.Sa("yt.mdx.remote.connection_")
    }
      , jvb = function(a) {
        var b = f$();
        c$(null);
        a || mvb("");
        g.Ra("yt.mdx.remote.connection_", a);
        Y9 && (g.dc(Y9, function(c) {
            c(a)
        }),
        Y9.length = 0);
        b && !a ? n8("yt-remote-connection-change", !1) : !b && a && n8("yt-remote-connection-change", !0)
    }
      , d$ = function() {
        var a = g.oB();
        if (!a)
            return null;
        var b = Z9();
        if (!b)
            return null;
        b = b.Tk();
        return i8(b, a)
    }
      , i$ = function(a, b) {
        $9();
        e$() && e$();
        if (j$)
            g$ = a;
        else {
            mvb(a.id);
            var c = g.Sa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
            a = new V9(X9,a,dvb(),c);
            a.connect(b, nvb());
            a.subscribe("beforeDisconnect", function(d) {
                n8("yt-remote-before-disconnect", d)
            });
            a.subscribe("beforeDispose", function() {
                f$() && (f$(),
                jvb(null))
            });
            a.subscribe("browserChannelAuthError", function() {
                var d = e$();
                d && "shortLived" == d.idType && (E9() ? C9().handleBrowserChannelAuthError() : B9("refreshLoungeToken called before API ready."))
            });
            jvb(a)
        }
    }
      , evb = function() {
        var a = d$();
        a ? (a$("Resume connection to: " + h8(a)),
        i$(a, 0)) : (l8(),
        xub(),
        a$("Skipping connecting because no session screen found."))
    }
      , bvb = function() {
        var a = dvb();
        if (g.kd(a)) {
            a = k8();
            var b = g.mB("yt-remote-session-name") || ""
              , c = g.mB("yt-remote-session-app") || "";
            a = {
                device: "REMOTE_CONTROL",
                id: a,
                name: b,
                app: c,
                mdxVersion: 3
            };
            a.authuser = String(g.zz("SESSION_INDEX", "0"));
            (b = g.zz("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
            g.Ra("yt.mdx.remote.channelParams_", a)
        }
    }
      , dvb = function() {
        return g.Sa("yt.mdx.remote.channelParams_") || {}
    }
      , qvb = function(a, b, c) {
        g.D.call(this);
        var d = this;
        this.module = a;
        this.I = b;
        this.Ec = c;
        this.events = new g.LK(this);
        this.ea = this.events.T(this.I, "onVolumeChange", function(e) {
            ovb(d, e)
        });
        this.C = !1;
        this.D = new g.ZP(64);
        this.j = new g.Dq(this.oZ,500,this);
        this.u = new g.Dq(this.qZ,1E3,this);
        this.K = new q8(this.Z$,0,this);
        this.B = {};
        this.V = new g.Dq(this.d_,1E3,this);
        this.J = new r8(this.seekTo,1E3,this);
        g.H(this, this.events);
        this.events.T(b, "onCaptionsTrackListChanged", this.y7);
        this.events.T(b, "captionschanged", this.W6);
        this.events.T(b, "captionssettingschanged", this.zZ);
        this.events.T(b, "videoplayerreset", this.mI);
        this.events.T(b, "mdxautoplaycancel", function() {
            d.Ec.CU()
        });
        b.N("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
            pvb(d.module) || k$(d) || l$(d, 0)
        });
        a = this.Ec;
        a.isDisposed();
        a.subscribe("proxyStateChange", this.RX, this);
        a.subscribe("remotePlayerChange", this.LD, this);
        a.subscribe("remoteQueueChange", this.mI, this);
        a.subscribe("previousNextChange", this.OX, this);
        a.subscribe("nowAutoplaying", this.IX, this);
        a.subscribe("autoplayDismissed", this.nX, this);
        g.H(this, this.j);
        g.H(this, this.u);
        g.H(this, this.K);
        g.H(this, this.V);
        g.H(this, this.J);
        this.zZ();
        this.mI();
        this.LD()
    }
      , ovb = function(a, b) {
        if (k$(a)) {
            a.Ec.unsubscribe("remotePlayerChange", a.LD, a);
            var c = Math.round(b.volume);
            b = !!b.muted;
            var d = N9(a.Ec);
            if (c !== d.volume || b !== d.muted)
                a.Ec.setVolume(c, b),
                a.V.start();
            a.Ec.subscribe("remotePlayerChange", a.LD, a)
        }
    }
      , rvb = function(a) {
        a.Bc(0);
        a.j.stop();
        a.yc(new g.ZP(64))
    }
      , svb = function(a, b) {
        if (k$(a) && !a.C) {
            var c = null;
            b && (c = {
                style: a.I.getSubtitlesUserSettings()
            },
            g.rd(c, b));
            a.Ec.mS(a.I.getVideoData(1).videoId, c);
            a.B = N9(a.Ec).trackData
        }
    }
      , l$ = function(a, b) {
        var c = a.I.getPlaylist();
        if (null == c ? 0 : c.listId) {
            var d = c.index;
            var e = c.listId.toString()
        }
        c = a.I.getVideoData(1);
        a.Ec.playVideo(c.videoId, b, d, e, c.playerParams, c.Ba, Cqb(c));
        a.yc(new g.ZP(1))
    }
      , tvb = function(a, b) {
        if (b) {
            var c = a.I.getOption("captions", "tracklist", {
                aW: 1
            });
            c && c.length ? (a.I.setOption("captions", "track", b),
            a.C = !1) : (a.I.loadModule("captions"),
            a.C = !0)
        } else
            a.I.setOption("captions", "track", {})
    }
      , k$ = function(a) {
        return N9(a.Ec).videoId === a.I.getVideoData(1).videoId
    }
      , m$ = function() {
        g.X.call(this, {
            G: "div",
            S: "ytp-mdx-popup-dialog",
            Y: {
                role: "dialog"
            },
            X: [{
                G: "div",
                S: "ytp-mdx-popup-dialog-inner-content",
                X: [{
                    G: "div",
                    S: "ytp-mdx-popup-title",
                    ya: "You're signed out"
                }, {
                    G: "div",
                    S: "ytp-mdx-popup-description",
                    ya: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                }, {
                    G: "div",
                    S: "ytp-mdx-privacy-popup-buttons",
                    X: [{
                        G: "button",
                        Na: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                        ya: "Cancel"
                    }, {
                        G: "button",
                        Na: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                        ya: "Confirm"
                    }]
                }]
            }]
        });
        this.j = new g.zR(this,250);
        this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
        this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
        g.H(this, this.j);
        this.T(this.cancelButton, "click", this.u);
        this.T(this.confirmButton, "click", this.B)
    }
      , n$ = function(a) {
        g.X.call(this, {
            G: "div",
            S: "ytp-remote",
            X: [{
                G: "div",
                S: "ytp-remote-display-status",
                X: [{
                    G: "div",
                    S: "ytp-remote-display-status-icon",
                    X: [g.IEa()]
                }, {
                    G: "div",
                    S: "ytp-remote-display-status-text",
                    ya: "{{statustext}}"
                }]
            }]
        });
        this.api = a;
        this.j = new g.zR(this,250);
        g.H(this, this.j);
        this.T(a, "presentingplayerstatechange", this.onStateChange);
        this.zc(a.Nb())
    }
      , o$ = function(a, b) {
        g.fW.call(this, "Play on", 1, a, b);
        this.I = a;
        this.Xt = {};
        this.T(a, "onMdxReceiversChange", this.C);
        this.T(a, "presentingplayerstatechange", this.C);
        this.C()
    }
      , uvb = function(a) {
        g.XT.call(this, a);
        this.Cp = {
            key: arb(),
            name: "This computer"
        };
        this.Ql = null;
        this.subscriptions = [];
        this.DP = this.Ec = null;
        this.Xt = [this.Cp];
        this.Ks = this.Cp;
        this.mf = new g.ZP(64);
        this.wW = 0;
        this.Nh = -1;
        this.fE = !1;
        this.dE = this.jA = null;
        if (!g.EM(this.player.W()) && !g.FM(this.player.W())) {
            a = this.player;
            var b = g.HS(a);
            b && (b = b.hn()) && (b = new o$(a,b),
            g.H(this, b));
            b = new n$(a);
            g.H(this, b);
            g.YS(a, b.element, 4);
            this.jA = new m$;
            g.H(this, this.jA);
            g.YS(a, this.jA.element, 4);
            this.fE = !!d$()
        }
    }
      , p$ = function(a) {
        a.dE && (a.player.removeEventListener("presentingplayerstatechange", a.dE),
        a.dE = null)
    }
      , vvb = function(a, b, c) {
        a.mf = c;
        a.player.ra("presentingplayerstatechange", new g.FP(c,b))
    }
      , q$ = function(a, b) {
        if (b.key !== a.Ks.key)
            if (b.key === a.Cp.key)
                h$();
            else if (pvb(a) && wvb(a),
            a.Ks = b,
            !a.player.W().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.FM(a.player.W())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.W().N("should_clear_video_data_on_player_cued_unstarted"))
                    d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++)
                            h[l] = g.UT(f, l).videoId
                    } else
                        h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ba,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = Cqb(d)) && (a.locationInfo = d);
                    d = a
                }
                a$("Connecting to: " + g.wj(b));
                "cast-selector-receiver" == b.key ? (c$(d || null),
                b = d || null,
                E9() ? C9().setLaunchParams(b) : B9("setLaunchParams called before ready.")) : !d && kvb() && $9() == b.key ? n8("yt-remote-connection-change", !0) : (h$(),
                c$(d || null),
                d = Z9().Tk(),
                (b = i8(d, b.key)) && i$(b, 1))
            }
    }
      , pvb = function(a) {
        var b;
        (b = !a.player.W().N("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.zz("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.zz("SESSION_INDEX") && !g.zz("LOGGED_IN"))) || a.fE || !a.jA);
        return b ? !1 : g.RM(a.player.W()) || g.UM(a.player.W())
    }
      , wvb = function(a) {
        a.player.Nb().ud() ? a.player.pauseVideo() : (a.dE = function(b) {
            !a.fE && g.HP(b, 8) && (a.player.pauseVideo(),
            p$(a))
        }
        ,
        a.player.addEventListener("presentingplayerstatechange", a.dE));
        a.jA && a.jA.xd();
        f$() || (j$ = !0)
    };
    g.du.prototype.Vs = g.ca(0, function() {
        return g.Bi(this, 6)
    });
    var Fsb = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "\\u003C"
    }
      , S8 = {
        "'": "\\'"
    }
      , Vqb = {
        yka: "atp",
        FYa: "ska",
        RVa: "que",
        VNa: "mus",
        EYa: "sus",
        Lza: "dsp",
        XWa: "seq",
        yMa: "mic",
        fra: "dpa",
        Jla: "cds",
        LNa: "mlm",
        Rqa: "dsdtr",
        vOa: "ntb",
        A8a: "vsp",
        Ura: "scn",
        fWa: "rpe"
    }
      , Wqb = {
        O2: "u",
        CLASSIC: "cl",
        s2: "k",
        Z_: "i",
        K_: "cr",
        A2: "m",
        W_: "g",
        uT: "up"
    };
    e8.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    }
    ;
    var m8, grb = "";
    orb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.Bz("enable_client_streamz_web")) {
            a = g.u(a);
            for (var c = a.next(); !c.done; c = a.next())
                c = g.cfa(c.value),
                c = {
                    serializedIncrementBatch: g.hg(c.j())
                },
                g.OB("streamzIncremented", c, {
                    sendIsolatedPayload: b
                })
        }
    }
    ;
    var o8, wrb = qrb("loadCastFramework") || qrb("loadCastApplicationFramework"), zrb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.ib(q8, g.D);
    g.k = q8.prototype;
    g.k.H0 = function(a) {
        this.C = arguments;
        this.j = !1;
        this.Lc ? this.B = g.eb() + this.Ti : this.Lc = g.cg(this.D, this.Ti)
    }
    ;
    g.k.stop = function() {
        this.Lc && (g.Pa.clearTimeout(this.Lc),
        this.Lc = null);
        this.B = null;
        this.j = !1;
        this.C = []
    }
    ;
    g.k.pause = function() {
        ++this.u
    }
    ;
    g.k.resume = function() {
        this.u && (--this.u,
        !this.u && this.j && (this.j = !1,
        this.J.apply(null, this.C)))
    }
    ;
    g.k.xa = function() {
        this.stop();
        q8.Uf.xa.call(this)
    }
    ;
    g.k.I0 = function() {
        this.Lc && (g.Pa.clearTimeout(this.Lc),
        this.Lc = null);
        this.B ? (this.Lc = g.cg(this.D, this.B - g.eb()),
        this.B = null) : this.u ? this.j = !0 : (this.j = !1,
        this.J.apply(null, this.C))
    }
    ;
    g.w(r8, g.D);
    g.k = r8.prototype;
    g.k.iK = function(a) {
        this.B = arguments;
        this.Lc || this.u ? this.j = !0 : Brb(this)
    }
    ;
    g.k.stop = function() {
        this.Lc && (g.Pa.clearTimeout(this.Lc),
        this.Lc = null,
        this.j = !1,
        this.B = null)
    }
    ;
    g.k.pause = function() {
        this.u++
    }
    ;
    g.k.resume = function() {
        this.u--;
        this.u || !this.j || this.Lc || (this.j = !1,
        Brb(this))
    }
    ;
    g.k.xa = function() {
        g.D.prototype.xa.call(this);
        this.stop()
    }
    ;
    s8.prototype.stringify = function(a) {
        return g.Pa.JSON.stringify(a, void 0)
    }
    ;
    s8.prototype.parse = function(a) {
        return g.Pa.JSON.parse(a, void 0)
    }
    ;
    g.ib(Crb, g.zb);
    g.ib(Drb, g.zb);
    var Erb = null;
    g.ib(Grb, g.zb);
    g.ib(Hrb, g.zb);
    g.ib(Irb, g.zb);
    Jrb.prototype.info = function() {}
    ;
    Jrb.prototype.warning = function() {}
    ;
    var Qrb = {}
      , y8 = {};
    g.k = w8.prototype;
    g.k.setTimeout = function(a) {
        this.Eb = a
    }
    ;
    g.k.L0 = function(a) {
        a = a.target;
        var b = this.eb;
        b && 3 == g.Zj(a) ? b.iK() : this.QR(a)
    }
    ;
    g.k.QR = function(a) {
        try {
            if (a == this.j)
                a: {
                    var b = g.Zj(this.j)
                      , c = this.j.u
                      , d = this.j.getStatus();
                    if (!(3 > b) && (3 != b || g.VM || this.j && (this.u.u || g.bk(this.j) || g.ck(this.j)))) {
                        this.Ma || 4 != b || 7 == c || (8 == c || 0 >= d ? t8(3) : t8(2));
                        B8(this);
                        var e = this.j.getStatus();
                        this.hc = e;
                        b: if (Orb(this)) {
                            var f = g.ck(this.j);
                            a = "";
                            var h = f.length
                              , l = 4 == g.Zj(this.j);
                            if (!this.u.B) {
                                if ("undefined" === typeof TextDecoder) {
                                    z8(this);
                                    A8(this);
                                    var m = "";
                                    break b
                                }
                                this.u.B = new g.Pa.TextDecoder
                            }
                            for (c = 0; c < h; c++)
                                this.u.u = !0,
                                a += this.u.B.decode(f[c], {
                                    stream: l && c == h - 1
                                });
                            f.splice(0, h);
                            this.u.j += a;
                            this.oa = 0;
                            m = this.u.j
                        } else
                            m = g.bk(this.j);
                        if (this.B = 200 == e) {
                            if (this.Fc && !this.Ya) {
                                b: {
                                    if (this.j) {
                                        var n = g.dk(this.j, "X-HTTP-Initial-Response");
                                        if (n && !g.ic(n)) {
                                            var p = n;
                                            break b
                                        }
                                    }
                                    p = null
                                }
                                if (e = p)
                                    this.Ya = !0,
                                    Rrb(this, e);
                                else {
                                    this.B = !1;
                                    this.J = 3;
                                    u8(12);
                                    z8(this);
                                    A8(this);
                                    break a
                                }
                            }
                            this.Fa ? (Srb(this, b, m),
                            g.VM && this.B && 3 == b && (this.ob.Ta(this.rb, "tick", this.K0),
                            this.rb.start())) : Rrb(this, m);
                            4 == b && z8(this);
                            this.B && !this.Ma && (4 == b ? Urb(this.D, this) : (this.B = !1,
                            x8(this)))
                        } else
                            g.Ifa(this.j),
                            400 == e && 0 < m.indexOf("Unknown SID") ? (this.J = 3,
                            u8(12)) : (this.J = 0,
                            u8(13)),
                            z8(this),
                            A8(this)
                    }
                }
        } catch (q) {} finally {}
    }
    ;
    g.k.K0 = function() {
        if (this.j) {
            var a = g.Zj(this.j)
              , b = g.bk(this.j);
            this.oa < b.length && (B8(this),
            Srb(this, a, b),
            this.B && 4 != a && x8(this))
        }
    }
    ;
    g.k.cancel = function() {
        this.Ma = !0;
        z8(this)
    }
    ;
    g.k.J0 = function() {
        this.ea = null;
        var a = Date.now();
        0 <= a - this.Yb ? (2 != this.Va && (t8(3),
        u8(17)),
        z8(this),
        this.J = 2,
        A8(this)) : Trb(this, this.Yb - a)
    }
    ;
    g.k.getLastError = function() {
        return this.J
    }
    ;
    g.k.gN = function() {
        return this.j
    }
    ;
    csb.prototype.cancel = function() {
        this.B = esb(this);
        if (this.u)
            this.u.cancel(),
            this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next())
                b.value.cancel();
            this.j.clear()
        }
    }
    ;
    g.k = isb.prototype;
    g.k.RR = 8;
    g.k.Eh = 1;
    g.k.connect = function(a, b, c, d) {
        u8(0);
        this.Qc = a;
        this.Ma = b || {};
        c && void 0 !== d && (this.Ma.OSID = c,
        this.Ma.OAID = d);
        this.Ya = this.wd;
        this.Oa = Zrb(this, null, this.Qc);
        F8(this)
    }
    ;
    g.k.disconnect = function() {
        ksb(this);
        if (3 == this.Eh) {
            var a = this.kb++
              , b = this.Oa.clone();
            g.Nl(b, "SID", this.C);
            g.Nl(b, "RID", a);
            g.Nl(b, "TYPE", "terminate");
            I8(this, b);
            a = new w8(this,this.C,a);
            a.Va = 2;
            a.K = a8(b.clone());
            b = !1;
            if (g.Pa.navigator && g.Pa.navigator.sendBeacon)
                try {
                    b = g.Pa.navigator.sendBeacon(a.K.toString(), "")
                } catch (c) {}
            !b && g.Pa.Image && ((new Image).src = a.K,
            b = !0);
            b || (a.j = Nrb(a.D, null),
            a.j.send(a.K));
            a.Ba = Date.now();
            x8(a)
        }
        qsb(this)
    }
    ;
    g.k.jh = function() {
        return 0 == this.Eh
    }
    ;
    g.k.getState = function() {
        return this.Eh
    }
    ;
    g.k.TR = function(a) {
        if (this.J)
            if (this.J = null,
            1 == this.Eh) {
                if (!a) {
                    this.kb = Math.floor(1E5 * Math.random());
                    a = this.kb++;
                    var b = new w8(this,"",a)
                      , c = this.ea;
                    this.Yb && (c ? (c = g.pd(c),
                    g.rd(c, this.Yb)) : c = this.Yb);
                    null !== this.K || this.wb || (b.Oa = c,
                    c = null);
                    var d;
                    if (this.Eb)
                        a: {
                            for (var e = d = 0; e < this.B.length; e++) {
                                b: {
                                    var f = this.B[e];
                                    if ("__data__"in f.map && (f = f.map.__data__,
                                    "string" === typeof f)) {
                                        f = f.length;
                                        break b
                                    }
                                    f = void 0
                                }
                                if (void 0 === f)
                                    break;
                                d += f;
                                if (4096 < d) {
                                    d = e;
                                    break a
                                }
                                if (4096 === d || e === this.B.length - 1) {
                                    d = e + 1;
                                    break a
                                }
                            }
                            d = 1E3
                        }
                    else
                        d = 1E3;
                    d = nsb(this, b, d);
                    e = this.Oa.clone();
                    g.Nl(e, "RID", a);
                    g.Nl(e, "CVER", 22);
                    this.Fa && g.Nl(e, "X-HTTP-Session-Id", this.Fa);
                    I8(this, e);
                    c && (this.wb ? d = "headers=" + g.Be(g.Mga(c)) + "&" + d : this.K && g.Rl(e, this.K, c));
                    Yrb(this.u, b);
                    this.og && g.Nl(e, "TYPE", "init");
                    this.Eb ? (g.Nl(e, "$req", d),
                    g.Nl(e, "SID", "null"),
                    b.Fc = !0,
                    Mrb(b, e, null)) : Mrb(b, e, d);
                    this.Eh = 2
                }
            } else
                3 == this.Eh && (a ? osb(this, a) : 0 == this.B.length || dsb(this.u) || osb(this))
    }
    ;
    g.k.SR = function() {
        this.V = null;
        psb(this);
        if (this.jd && !(this.rb || null == this.j || 0 >= this.md)) {
            var a = 2 * this.md;
            this.Ga = v8((0,
            g.bb)(this.V6, this), a)
        }
    }
    ;
    g.k.V6 = function() {
        this.Ga && (this.Ga = null,
        this.Ya = !1,
        this.rb = !0,
        u8(10),
        D8(this),
        psb(this))
    }
    ;
    g.k.RO = function(a) {
        this.j == a && this.jd && !this.rb && (jsb(this),
        this.rb = !0,
        u8(11))
    }
    ;
    g.k.M0 = function() {
        null != this.oa && (this.oa = null,
        D8(this),
        Wrb(this),
        u8(19))
    }
    ;
    g.k.F$ = function(a) {
        a ? u8(2) : u8(1)
    }
    ;
    g.k.isActive = function() {
        return !!this.D && this.D.isActive(this)
    }
    ;
    g.k = ssb.prototype;
    g.k.XR = function() {}
    ;
    g.k.WR = function() {}
    ;
    g.k.VR = function() {}
    ;
    g.k.UR = function() {}
    ;
    g.k.isActive = function() {
        return !0
    }
    ;
    g.k.N0 = function() {}
    ;
    g.ib(K8, g.Id);
    K8.prototype.open = function() {
        this.j.D = this.B;
        this.J && (this.j.Va = !0);
        this.j.connect(this.D, this.u || void 0)
    }
    ;
    K8.prototype.close = function() {
        this.j.disconnect()
    }
    ;
    K8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else
            this.C && (c = {},
            c.__data__ = g.wj(a),
            a = c);
        b.B.push(new bsb(b.hg++,a));
        3 == b.Eh && F8(b)
    }
    ;
    K8.prototype.xa = function() {
        this.j.D = null;
        delete this.B;
        this.j.disconnect();
        delete this.j;
        K8.Uf.xa.call(this)
    }
    ;
    g.ib(usb, Crb);
    g.ib(vsb, Drb);
    g.ib(J8, ssb);
    J8.prototype.XR = function() {
        this.j.dispatchEvent("m")
    }
    ;
    J8.prototype.WR = function(a) {
        this.j.dispatchEvent(new usb(a))
    }
    ;
    J8.prototype.VR = function(a) {
        this.j.dispatchEvent(new vsb(a))
    }
    ;
    J8.prototype.UR = function() {
        this.j.dispatchEvent("n")
    }
    ;
    var M8 = new g.Id;
    g.w(ysb, g.zb);
    g.k = O8.prototype;
    g.k.Lu = null;
    g.k.aq = !1;
    g.k.Ax = null;
    g.k.kK = null;
    g.k.yx = null;
    g.k.zx = null;
    g.k.hs = null;
    g.k.qs = null;
    g.k.Mu = null;
    g.k.jj = null;
    g.k.zF = 0;
    g.k.Yn = null;
    g.k.yF = null;
    g.k.ls = null;
    g.k.rB = -1;
    g.k.VY = !0;
    g.k.Ku = !1;
    g.k.jK = 0;
    g.k.xF = null;
    var Dsb = {}
      , Csb = {};
    g.k = O8.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    }
    ;
    g.k.P0 = function(a) {
        a = a.target;
        var b = this.xF;
        b && 3 == g.Zj(a) ? b.iK() : this.YR(a)
    }
    ;
    g.k.YR = function(a) {
        try {
            if (a == this.jj)
                a: {
                    var b = g.Zj(this.jj)
                      , c = this.jj.u
                      , d = this.jj.getStatus();
                    if (g.Ze && !g.Sc(10) || g.Vc && !g.Rc("420+")) {
                        if (4 > b)
                            break a
                    } else if (3 > b || 3 == b && !g.bk(this.jj))
                        break a;
                    this.Ku || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.In(3) : this.j.In(2));
                    Isb(this);
                    var e = this.jj.getStatus();
                    this.rB = e;
                    var f = g.bk(this.jj);
                    if (this.aq = 200 == e) {
                        4 == b && Q8(this);
                        if (this.Fa) {
                            for (a = !0; !this.Ku && this.zF < f.length; ) {
                                var h = Esb(this, f);
                                if (h == Csb) {
                                    4 == b && (this.ls = 4,
                                    N8(15),
                                    a = !1);
                                    break
                                } else if (h == Dsb) {
                                    this.ls = 4;
                                    N8(16);
                                    a = !1;
                                    break
                                } else
                                    Jsb(this, h)
                            }
                            4 == b && 0 == f.length && (this.ls = 1,
                            N8(17),
                            a = !1);
                            this.aq = this.aq && a;
                            a || (Q8(this),
                            R8(this))
                        } else
                            Jsb(this, f);
                        this.aq && !this.Ku && (4 == b ? this.j.AF(this) : (this.aq = !1,
                        P8(this)))
                    } else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.ls = 3,
                        N8(13)) : (this.ls = 0,
                        N8(14)),
                        Q8(this),
                        R8(this)
                }
        } catch (l) {} finally {}
    }
    ;
    g.k.d9 = function(a) {
        L8((0,
        g.bb)(this.c9, this, a), 0)
    }
    ;
    g.k.c9 = function(a) {
        this.Ku || (Isb(this),
        Jsb(this, a),
        P8(this))
    }
    ;
    g.k.WX = function(a) {
        L8((0,
        g.bb)(this.b9, this, a), 0)
    }
    ;
    g.k.b9 = function(a) {
        this.Ku || (Q8(this),
        this.aq = a,
        this.j.AF(this),
        this.j.In(4))
    }
    ;
    g.k.cancel = function() {
        this.Ku = !0;
        Q8(this)
    }
    ;
    g.k.O0 = function() {
        this.Ax = null;
        var a = Date.now();
        0 <= a - this.kK ? (2 != this.zx && this.j.In(3),
        Q8(this),
        this.ls = 2,
        N8(18),
        R8(this)) : Hsb(this, this.kK - a)
    }
    ;
    g.k.getLastError = function() {
        return this.ls
    }
    ;
    g.k = Msb.prototype;
    g.k.mK = null;
    g.k.Rj = null;
    g.k.LI = !1;
    g.k.rZ = null;
    g.k.AG = null;
    g.k.cO = null;
    g.k.nK = null;
    g.k.Ol = null;
    g.k.bq = -1;
    g.k.sB = null;
    g.k.MB = null;
    g.k.connect = function(a) {
        this.nK = a;
        a = U8(this.j, null, this.nK);
        N8(3);
        this.rZ = Date.now();
        var b = this.j.ea;
        null != b ? (this.sB = b[0],
        (this.MB = b[1]) ? (this.Ol = 1,
        Nsb(this)) : (this.Ol = 2,
        Osb(this))) : (b8(a, "MODE", "init"),
        this.Rj = new O8(this),
        this.Rj.Lu = this.mK,
        Bsb(this.Rj, a, !1, null, !0),
        this.Ol = 0)
    }
    ;
    g.k.D3 = function(a) {
        if (a)
            this.Ol = 2,
            Osb(this);
        else {
            N8(4);
            var b = this.j;
            b.xo = b.Is.bq;
            Y8(b, 9)
        }
        a && this.In(2)
    }
    ;
    g.k.lK = function(a) {
        return this.j.lK(a)
    }
    ;
    g.k.abort = function() {
        this.Rj && (this.Rj.cancel(),
        this.Rj = null);
        this.bq = -1
    }
    ;
    g.k.jh = function() {
        return !1
    }
    ;
    g.k.ZR = function(a, b) {
        this.bq = a.rB;
        if (0 == this.Ol)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.xo = this.bq;
                    Y8(a, 2);
                    return
                }
                this.sB = c[0];
                this.MB = c[1]
            } else
                a = this.j,
                a.xo = this.bq,
                Y8(a, 2);
        else if (2 == this.Ol)
            if (this.LI)
                N8(7),
                this.cO = Date.now();
            else if ("11111" == b) {
                if (N8(6),
                this.LI = !0,
                this.AG = Date.now(),
                a = this.AG - this.rZ,
                !g.Ze || g.Sc(10) || 500 > a)
                    this.bq = 200,
                    this.Rj.cancel(),
                    N8(12),
                    V8(this.j, this, !0)
            } else
                N8(8),
                this.AG = this.cO = Date.now(),
                this.LI = !1
    }
    ;
    g.k.AF = function() {
        this.bq = this.Rj.rB;
        if (this.Rj.aq)
            0 == this.Ol ? this.MB ? (this.Ol = 1,
            Nsb(this)) : (this.Ol = 2,
            Osb(this)) : 2 == this.Ol && ((!g.Ze || g.Sc(10) ? !this.LI : 200 > this.cO - this.AG) ? (N8(11),
            V8(this.j, this, !1)) : (N8(12),
            V8(this.j, this, !0)));
        else {
            0 == this.Ol ? N8(9) : 2 == this.Ol && N8(10);
            var a = this.j;
            this.Rj.getLastError();
            a.xo = this.bq;
            Y8(a, 2)
        }
    }
    ;
    g.k.tB = function() {
        return this.j.tB()
    }
    ;
    g.k.isActive = function() {
        return this.j.isActive()
    }
    ;
    g.k.In = function(a) {
        this.j.In(a)
    }
    ;
    g.k = Psb.prototype;
    g.k.uo = null;
    g.k.uB = null;
    g.k.dk = null;
    g.k.Ug = null;
    g.k.oK = null;
    g.k.BF = null;
    g.k.aS = null;
    g.k.CF = null;
    g.k.vB = 0;
    g.k.R0 = 0;
    g.k.Hi = null;
    g.k.us = null;
    g.k.cq = null;
    g.k.Ou = null;
    g.k.Is = null;
    g.k.AJ = null;
    g.k.Dx = -1;
    g.k.bS = -1;
    g.k.xo = -1;
    g.k.Cx = 0;
    g.k.Bx = 0;
    g.k.Nu = 8;
    g.ib(Rsb, g.zb);
    g.ib(Ssb, g.zb);
    g.k = Psb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        N8(0);
        this.oK = b;
        this.uB = c || {};
        d && void 0 !== e && (this.uB.OSID = d,
        this.uB.OAID = e);
        this.V ? (L8((0,
        g.bb)(this.oU, this, a), 100),
        Usb(this)) : this.oU(a)
    }
    ;
    g.k.disconnect = function() {
        Vsb(this);
        if (3 == this.j) {
            var a = this.vB++
              , b = this.BF.clone();
            g.Nl(b, "SID", this.C);
            g.Nl(b, "RID", a);
            g.Nl(b, "TYPE", "terminate");
            X8(this, b);
            a = new O8(this,this.C,a);
            a.zx = 2;
            a.hs = a8(b.clone());
            (new Image).src = a.hs.toString();
            a.yx = Date.now();
            P8(a)
        }
        etb(this)
    }
    ;
    g.k.oU = function(a) {
        this.Is = new Msb(this);
        this.Is.mK = this.uo;
        this.Is.u = this.D;
        this.Is.connect(a)
    }
    ;
    g.k.jh = function() {
        return 0 == this.j
    }
    ;
    g.k.getState = function() {
        return this.j
    }
    ;
    g.k.dS = function(a) {
        this.us = null;
        $sb(this, a)
    }
    ;
    g.k.cS = function() {
        this.cq = null;
        this.Ug = new O8(this,this.C,"rpc",this.K);
        this.Ug.Lu = this.uo;
        this.Ug.jK = 0;
        var a = this.aS.clone();
        g.Nl(a, "RID", "rpc");
        g.Nl(a, "SID", this.C);
        g.Nl(a, "CI", this.AJ ? "0" : "1");
        g.Nl(a, "AID", this.Dx);
        X8(this, a);
        if (!g.Ze || g.Sc(10))
            g.Nl(a, "TYPE", "xmlhttp"),
            Bsb(this.Ug, a, !0, this.CF, !1);
        else {
            g.Nl(a, "TYPE", "html");
            var b = this.Ug
              , c = !!this.CF;
            b.zx = 3;
            b.hs = a8(a.clone());
            Gsb(b, c)
        }
    }
    ;
    g.k.ZR = function(a, b) {
        if (0 != this.j && (this.Ug == a || this.dk == a))
            if (this.xo = a.rB,
            this.dk == a && 3 == this.j)
                if (7 < this.Nu) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c,
                        0 == a[0])
                            a: {
                                if (!this.cq) {
                                    if (this.Ug)
                                        if (this.Ug.yx + 3E3 < this.dk.yx)
                                            W8(this),
                                            this.Ug.cancel(),
                                            this.Ug = null;
                                        else
                                            break a;
                                    ctb(this);
                                    N8(19)
                                }
                            }
                        else
                            this.bS = a[1],
                            0 < this.bS - this.Dx && 37500 > a[2] && this.AJ && 0 == this.Bx && !this.Ou && (this.Ou = L8((0,
                            g.bb)(this.S0, this), 6E3));
                    else
                        Y8(this, 11)
                } else
                    null != b && Y8(this, 11);
            else if (this.Ug == a && W8(this),
            !g.ic(b))
                for (a = this.D.parse(b),
                b = 0; b < a.length; b++)
                    c = a[b],
                    this.Dx = c[0],
                    c = c[1],
                    2 == this.j ? "c" == c[0] ? (this.C = c[1],
                    this.CF = c[2],
                    c = c[3],
                    null != c ? this.Nu = c : this.Nu = 6,
                    this.j = 3,
                    this.Hi && this.Hi.gS(),
                    this.aS = U8(this, this.tB() ? this.CF : null, this.oK),
                    atb(this)) : "stop" == c[0] && Y8(this, 7) : 3 == this.j && ("stop" == c[0] ? Y8(this, 7) : "noop" != c[0] && this.Hi && this.Hi.fS(c),
                    this.Bx = 0)
    }
    ;
    g.k.S0 = function() {
        null != this.Ou && (this.Ou = null,
        this.Ug.cancel(),
        this.Ug = null,
        ctb(this),
        N8(20))
    }
    ;
    g.k.AF = function(a) {
        if (this.Ug == a) {
            W8(this);
            this.Ug = null;
            var b = 2
        } else if (this.dk == a)
            this.dk = null,
            b = 1;
        else
            return;
        this.xo = a.rB;
        if (0 != this.j)
            if (a.aq)
                if (1 == b) {
                    b = Date.now() - a.yx;
                    var c = M8;
                    c.dispatchEvent(new Rsb(c,a.Mu ? a.Mu.length : 0,b,this.Cx));
                    Tsb(this);
                    this.B.length = 0
                } else
                    atb(this);
            else {
                c = a.getLastError();
                var d;
                if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.xo)) {
                    if (d = 1 == b)
                        this.dk || this.us || 1 == this.j || 2 <= this.Cx ? d = !1 : (this.us = L8((0,
                        g.bb)(this.dS, this, a), btb(this, this.Cx)),
                        this.Cx++,
                        d = !0);
                    d = !(d || 2 == b && ctb(this))
                }
                if (d)
                    switch (c) {
                    case 1:
                        Y8(this, 5);
                        break;
                    case 4:
                        Y8(this, 10);
                        break;
                    case 3:
                        Y8(this, 6);
                        break;
                    case 7:
                        Y8(this, 12);
                        break;
                    default:
                        Y8(this, 2)
                    }
            }
    }
    ;
    g.k.Q0 = function(a) {
        if (!g.Hb(arguments, this.j))
            throw Error("Unexpected channel state: " + this.j);
    }
    ;
    g.k.E$ = function(a) {
        a ? N8(2) : (N8(1),
        dtb(this, 8))
    }
    ;
    g.k.lK = function(a) {
        if (a)
            throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Wj;
        a.J = !1;
        return a
    }
    ;
    g.k.isActive = function() {
        return !!this.Hi && this.Hi.isActive(this)
    }
    ;
    g.k.In = function(a) {
        var b = M8;
        b.dispatchEvent(new Ssb(b,a))
    }
    ;
    g.k.tB = function() {
        return !(!g.Ze || g.Sc(10))
    }
    ;
    g.k = ftb.prototype;
    g.k.gS = function() {}
    ;
    g.k.fS = function() {}
    ;
    g.k.eS = function() {}
    ;
    g.k.pK = function() {}
    ;
    g.k.hS = function() {
        return {}
    }
    ;
    g.k.isActive = function() {
        return !0
    }
    ;
    g.k = gtb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.u.length
    }
    ;
    g.k.clear = function() {
        this.j = [];
        this.u = []
    }
    ;
    g.k.contains = function(a) {
        return g.Hb(this.j, a) || g.Hb(this.u, a)
    }
    ;
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0,
        g.V$a)(b, a);
        0 <= c ? (g.Ib(b, c),
        b = !0) : b = !1;
        return b || g.Jb(this.u, a)
    }
    ;
    g.k.lm = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b)
            a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b)
            a.push(this.u[b]);
        return a
    }
    ;
    g.w(htb, g.zb);
    g.w(itb, g.zb);
    g.ib(Z8, g.D);
    g.k = Z8.prototype;
    g.k.V8 = function() {
        this.Ti = Math.min(3E5, 2 * this.Ti);
        this.B();
        this.u && this.start()
    }
    ;
    g.k.start = function() {
        var a = this.Ti + 15E3 * Math.random();
        g.Eq(this.j, a);
        this.u = Date.now() + a
    }
    ;
    g.k.stop = function() {
        this.j.stop();
        this.u = 0
    }
    ;
    g.k.isActive = function() {
        return this.j.isActive()
    }
    ;
    g.k.reset = function() {
        this.j.stop();
        this.Ti = 5E3
    }
    ;
    g.ib(ktb, ftb);
    g.k = ktb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    }
    ;
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    }
    ;
    g.k.Th = function(a) {
        return this.B.Th(a)
    }
    ;
    g.k.ra = function(a, b) {
        return this.B.ra.apply(this.B, arguments)
    }
    ;
    g.k.dispose = function() {
        this.oa || (this.oa = !0,
        g.rb(this.B),
        this.disconnect(),
        g.rb(this.u),
        this.u = null,
        this.qa = function() {
            return ""
        }
        )
    }
    ;
    g.k.isDisposed = function() {
        return this.oa
    }
    ;
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.ea = "";
            this.u.stop();
            this.J = a || null;
            this.D = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new Psb(c ? c.firstTestResults : null,c ? c.secondTestResults : null,this.Va)
              , e = this.j;
            e && (e.Hi = null);
            d.Hi = this;
            this.j = d;
            ltb(this);
            if (this.j) {
                d = g.zz("ID_TOKEN");
                var f = this.j.uo || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.uo = f
            }
            e ? (3 != e.getState() && 0 == Xsb(e) || e.getState(),
            this.j.connect(a, b, this.K, e.C, e.Dx)) : c ? this.j.connect(a, b, this.K, c.sessionId, c.arrayId) : this.j.connect(a, b, this.K)
        }
    }
    ;
    g.k.disconnect = function(a) {
        this.V = a || 0;
        this.u.stop();
        ltb(this);
        this.j && (3 == this.j.getState() && $sb(this.j),
        this.j.disconnect());
        this.V = 0
    }
    ;
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.rd(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.rz() && (ltb(this),
        Wsb(this.j, a))
    }
    ;
    g.k.gS = function() {
        this.u.reset();
        this.J = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b)
                Wsb(this.j, a[b])
        }
        this.ra("handlerOpened");
        Jqb(this.Oa, "BROWSER_CHANNEL")
    }
    ;
    g.k.eS = function(a) {
        var b = 2 == a && 401 == this.j.xo;
        4 == a || b || this.u.start();
        this.ra("handlerError", a, b);
        Pqb(this.Fa, "BROWSER_CHANNEL")
    }
    ;
    g.k.pK = function(a, b) {
        if (!this.u.isActive())
            this.ra("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        Lqb(this.Ga, "BROWSER_CHANNEL");
        a && this.eb.j.qK("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.kb.j.qK("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    }
    ;
    g.k.hS = function() {
        var a = {
            v: 2
        };
        this.ea && (a.gsessionid = this.ea);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.V && (a.ui = "" + this.V);
        this.J && g.rd(a, this.J);
        return a
    }
    ;
    g.k.fS = function(a) {
        "S" == a[0] ? this.ea = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(),
        this.j.disconnect()) : this.ra("handlerMessage", new jtb(a[0],a[1]));
        Nqb(this.Ma, "BROWSER_CHANNEL")
    }
    ;
    g.k.rz = function() {
        return !!this.j && 3 == this.j.getState()
    }
    ;
    g.k.Ir = function(a) {
        (this.K.loungeIdToken = a) || this.u.stop();
        if (this.Ya && this.j) {
            var b = this.j.uo || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.uo = b
        }
    }
    ;
    g.k.Vs = function() {
        return this.K.id
    }
    ;
    g.k.nt = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    }
    ;
    g.k.Gw = function() {
        var a = this.u;
        g.Fq(a.j);
        a.start()
    }
    ;
    g.k.a$ = function() {
        this.u.isActive();
        0 == Xsb(this.j) && this.connect(this.J, this.D)
    }
    ;
    $8.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    }
    ;
    $8.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    }
    ;
    $8.prototype.D = function(a) {
        a(Error("request timed out"))
    }
    ;
    g.w(ntb, g.Id);
    g.k = ntb.prototype;
    g.k.connect = function(a, b, c) {
        this.Cd.connect(a, b, c)
    }
    ;
    g.k.disconnect = function(a) {
        this.Cd.disconnect(a)
    }
    ;
    g.k.Gw = function() {
        this.Cd.Gw()
    }
    ;
    g.k.Vs = function() {
        return this.Cd.Vs()
    }
    ;
    g.k.nt = function() {
        return this.Cd.nt()
    }
    ;
    g.k.rz = function() {
        return this.Cd.rz()
    }
    ;
    g.k.V0 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Cd
          , b = this.j;
        g.lB("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.AJ,
            sessionId: a.j.C,
            arrayId: a.j.Dx
        });
        g.lB("yt-remote-session-screen-id", b);
        a = j8();
        b = k8();
        g.Hb(a, b) || a.push(b);
        frb(a);
        hrb()
    }
    ;
    g.k.T0 = function() {
        this.dispatchEvent("channelClosed")
    }
    ;
    g.k.U0 = function(a) {
        this.dispatchEvent(new htb(a))
    }
    ;
    g.k.onError = function(a) {
        this.dispatchEvent(new itb(a ? 1 : 0))
    }
    ;
    g.k.sendMessage = function(a, b) {
        this.Cd.sendMessage(a, b)
    }
    ;
    g.k.Ir = function(a) {
        this.Cd.Ir(a)
    }
    ;
    g.k.dispose = function() {
        this.Cd.dispose()
    }
    ;
    g.k = otb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.J && (this.B.stop(),
        this.V = a,
        this.K = b,
        qtb(this),
        (a = g.zz("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"],
        this.j && (this.u.device = this.j.device,
        this.u.name = this.j.name,
        this.u.app = this.j.app,
        this.u.id = this.j.id,
        this.j.e6 && (this.u.mdxVersion = "" + this.j.e6),
        this.j.theme && (this.u.theme = this.j.theme),
        this.j.capabilities && (this.u.capabilities = this.j.capabilities),
        this.j.U3 && (this.u.cst = this.j.U3),
        this.j.authuser && (this.u.authuser = this.j.authuser),
        this.j.pageId && (this.u.pageId = this.j.pageId)),
        0 !== this.K ? this.u.ui = "" + this.K : delete this.u.ui,
        Object.assign(this.u, this.V),
        this.channel = new K8(this.pathPrefix,{
            y5: "gsessionid",
            i6: this.C,
            j6: this.u
        }),
        this.channel.open(),
        this.J = 2,
        ptb(this))
    }
    ;
    g.k.disconnect = function(a) {
        this.ea = void 0 === a ? 0 : a;
        this.B.stop();
        qtb(this);
        this.channel && (0 !== this.ea ? this.u.ui = "" + this.ea : delete this.u.ui,
        this.channel.close());
        this.ea = 0
    }
    ;
    g.k.nt = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    }
    ;
    g.k.Gw = function() {
        var a = this.B;
        g.Fq(a.j);
        a.start()
    }
    ;
    g.k.sendMessage = function(a, b) {
        this.channel && (qtb(this),
        a = Object.assign({}, {
            _sc: a
        }, b),
        this.channel.send(a))
    }
    ;
    g.k.Ir = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    }
    ;
    g.k.Vs = function() {
        return this.j ? this.j.id : ""
    }
    ;
    g.k.ra = function(a) {
        return this.D.ra.apply(this.D, [a].concat(g.pa(g.Ha.apply(1, arguments))))
    }
    ;
    g.k.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    }
    ;
    g.k.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    }
    ;
    g.k.Th = function(a) {
        return this.D.Th(a)
    }
    ;
    g.k.dispose = function() {
        this.oa || (this.oa = !0,
        g.rb(this.D),
        this.disconnect(),
        g.rb(this.B),
        this.Ba = function() {
            return ""
        }
        )
    }
    ;
    g.k.isDisposed = function() {
        return this.oa
    }
    ;
    g.w(rtb, g.Id);
    g.k = rtb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    }
    ;
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    }
    ;
    g.k.Gw = function() {
        this.j.Gw()
    }
    ;
    g.k.Vs = function() {
        return this.j.Vs()
    }
    ;
    g.k.nt = function() {
        return this.j.nt()
    }
    ;
    g.k.rz = function() {
        return 3 === this.j.J
    }
    ;
    g.k.Y0 = function() {
        this.dispatchEvent("channelOpened")
    }
    ;
    g.k.W0 = function() {
        this.dispatchEvent("channelClosed")
    }
    ;
    g.k.X0 = function(a) {
        this.dispatchEvent(new htb(a))
    }
    ;
    g.k.onError = function() {
        this.dispatchEvent(new itb(401 === this.j.Yg ? 1 : 0))
    }
    ;
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    }
    ;
    g.k.Ir = function(a) {
        this.j.Ir(a)
    }
    ;
    g.k.dispose = function() {
        this.j.dispose()
    }
    ;
    var ztb = Date.now()
      , b9 = null
      , f9 = Array(50)
      , e9 = -1
      , g9 = !1;
    g.ib(h9, g.MG);
    h9.prototype.Tk = function() {
        return this.screens
    }
    ;
    h9.prototype.contains = function(a) {
        return !!crb(this.screens, a)
    }
    ;
    h9.prototype.get = function(a) {
        return a ? i8(this.screens, a) : null
    }
    ;
    h9.prototype.info = function(a) {
        c9(this.J, a)
    }
    ;
    g.w(Dtb, g.MG);
    g.k = Dtb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.Lc) && this.jY()
    }
    ;
    g.k.stop = function() {
        this.j && (this.j.abort(),
        this.j = null);
        isNaN(this.Lc) || (g.Yz(this.Lc),
        this.Lc = NaN)
    }
    ;
    g.k.xa = function() {
        this.stop();
        g.MG.prototype.xa.call(this)
    }
    ;
    g.k.jY = function() {
        this.Lc = NaN;
        this.j = g.bA(a9(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0,
            g.bb)(this.b1, this),
            onError: (0,
            g.bb)(this.Z0, this),
            onTimeout: (0,
            g.bb)(this.d1, this)
        })
    }
    ;
    g.k.b1 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived",
        a.loungeToken = a.shortLivedLoungeToken.value,
        b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ra("pairingComplete", new f8(a), b)
    }
    ;
    g.k.Z0 = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= xvb.length ? this.ra("pairingFailed", Error("DIAL polling timed out")) : (a = xvb[this.u],
        this.Lc = g.Wz((0,
        g.bb)(this.jY, this), a),
        this.u++) : this.ra("pairingFailed", Error("Server error " + a.status))
    }
    ;
    g.k.d1 = function() {
        this.j = null;
        this.ra("pairingFailed", Error("Server not responding"))
    }
    ;
    var xvb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.ib(j9, h9);
    g.k = j9.prototype;
    g.k.start = function() {
        i9(this) && this.ra("screenChange");
        !g.mB("yt-remote-lounge-token-expiration") && Etb(this);
        g.Yz(this.j);
        this.j = g.Wz((0,
        g.bb)(this.start, this), 1E4)
    }
    ;
    g.k.add = function(a, b) {
        i9(this);
        Atb(this, a);
        k9(this, !1);
        this.ra("screenChange");
        b(a);
        a.token || Etb(this)
    }
    ;
    g.k.remove = function(a, b) {
        var c = i9(this);
        Ctb(this, a) && (k9(this, !1),
        c = !0);
        b(a);
        c && this.ra("screenChange")
    }
    ;
    g.k.zJ = function(a, b, c, d) {
        var e = i9(this)
          , f = this.get(a.id);
        f ? (f.name != b && (f.name = b,
        k9(this, !1),
        e = !0),
        c(a)) : d(Error("no such local screen."));
        e && this.ra("screenChange")
    }
    ;
    g.k.xa = function() {
        g.Yz(this.j);
        j9.Uf.xa.call(this)
    }
    ;
    g.k.Y4 = function(a) {
        i9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c]
              , f = this.get(e.screenId);
            f && (f.token = e.loungeToken,
            --b)
        }
        k9(this, !b);
        b && c9(this.J, "Missed " + b + " lounge tokens.")
    }
    ;
    g.k.X4 = function(a) {
        c9(this.J, "Requesting lounge tokens failed: " + a)
    }
    ;
    g.w(Gtb, g.MG);
    g.k = Gtb.prototype;
    g.k.start = function() {
        var a = parseInt(g.mB("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.eb() - 144E5 < a ? 0 : a) ? l9(this) : (this.C = g.eb() + 3E5,
        g.lB("yt-remote-fast-check-period", this.C),
        this.aQ())
    }
    ;
    g.k.isEmpty = function() {
        return g.kd(this.j)
    }
    ;
    g.k.update = function() {
        Ftb("Updating availability on schedule.");
        var a = this.J()
          , b = g.$c(this.j, function(c, d) {
            return c && !!i8(a, d)
        }, this);
        Jtb(this, b)
    }
    ;
    g.k.xa = function() {
        g.Yz(this.B);
        this.B = NaN;
        this.u && (this.u.abort(),
        this.u = null);
        g.MG.prototype.xa.call(this)
    }
    ;
    g.k.aQ = function() {
        g.Yz(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = Ktb(this);
        if (Eqb(a)) {
            var b = a9(this.D, "/pairing/get_screen_availability");
            this.u = mtb(this.D, b, {
                lounge_token: g.ed(a).join(",")
            }, (0,
            g.bb)(this.A8, this, a), (0,
            g.bb)(this.z8, this))
        } else
            Jtb(this, {}),
            l9(this)
    }
    ;
    g.k.A8 = function(a, b) {
        this.u = null;
        var c = g.ed(Ktb(this));
        if (g.$b(c, g.ed(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e)
                c[a[b[e].loungeToken]] = "online" == b[e].status;
            Jtb(this, c);
            l9(this)
        } else
            this.gg("Changing Screen set during request."),
            this.aQ()
    }
    ;
    g.k.z8 = function(a) {
        this.gg("Screen availability failed: " + a);
        this.u = null;
        l9(this)
    }
    ;
    g.k.gg = function(a) {
        c9("OnlineScreenService", a)
    }
    ;
    g.ib(m9, h9);
    g.k = m9.prototype;
    g.k.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.ra("screenChange"),
        this.j.isEmpty() || this.ra("onlineScreenChange"))
    }
    ;
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    }
    ;
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    }
    ;
    g.k.zJ = function(a, b, c, d) {
        this.u.contains(a) ? this.u.zJ(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name,
        c9(this.J, a),
        d(Error(a)))
    }
    ;
    g.k.Tk = function(a) {
        return a ? this.screens : g.Lb(this.screens, g.Wo(this.B, function(b) {
            return !this.contains(b)
        }, this))
    }
    ;
    g.k.iS = function() {
        return g.Wo(this.Tk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    }
    ;
    g.k.jS = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new Dtb(this.C,a,b,c,d);
        l.subscribe("pairingComplete", function(m, n) {
            g.rb(l);
            e(n9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.rb(l);
            f(m)
        });
        l.start();
        return (0,
        g.bb)(l.stop, l)
    }
    ;
    g.k.e1 = function(a, b, c, d) {
        g.bA(a9(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0,
            g.bb)(function(e, f) {
                e = new f8(f.screen || {});
                if (!e.name || Otb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); Otb(this, l); ) {
                            h++;
                            if (20 < h)
                                break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(n9(this, e))
            }, this),
            onError: (0,
            g.bb)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0,
            g.bb)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    }
    ;
    g.k.xa = function() {
        g.rb(this.u);
        g.rb(this.j);
        m9.Uf.xa.call(this)
    }
    ;
    g.k.h5 = function() {
        Qtb(this);
        this.ra("screenChange");
        this.j.update()
    }
    ;
    m9.prototype.dispose = m9.prototype.dispose;
    g.ib(o9, g.MG);
    g.k = o9.prototype;
    g.k.Ej = function(a) {
        this.isDisposed() || (a && (q9(this, "" + a),
        this.ra("sessionFailed")),
        this.j = null,
        this.ra("sessionScreen", null))
    }
    ;
    g.k.info = function(a) {
        c9(this.Fa, a)
    }
    ;
    g.k.kS = function() {
        return null
    }
    ;
    g.k.pQ = function(a) {
        var b = this.u;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a,[]),
        b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0,
        g.bb)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0,
        g.bb)(function() {
            q9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    }
    ;
    g.k.xa = function() {
        this.pQ("");
        o9.Uf.xa.call(this)
    }
    ;
    g.w(r9, o9);
    g.k = r9.prototype;
    g.k.oQ = function(a) {
        if (this.B) {
            if (this.B == a)
                return;
            q9(this, "Overriding cast session with new session object");
            bub(this);
            this.Ba = !1;
            this.ea = "unknown";
            this.B.removeUpdateListener(this.qa);
            this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga)
        }
        this.B = a;
        this.B.addUpdateListener(this.qa);
        this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga);
        Xtb(this, "getMdxSessionStatus")
    }
    ;
    g.k.Cz = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.wj(a))
    }
    ;
    g.k.stop = function() {
        this.B ? this.B.stop((0,
        g.bb)(function() {
            this.Ej()
        }, this), (0,
        g.bb)(function() {
            this.Ej(Error("Failed to stop receiver app."))
        }, this)) : this.Ej(Error("Stopping cast device without session."))
    }
    ;
    g.k.pQ = function() {}
    ;
    g.k.xa = function() {
        this.info("disposeInternal");
        bub(this);
        this.B && (this.B.removeUpdateListener(this.qa),
        this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga));
        this.B = null;
        o9.prototype.xa.call(this)
    }
    ;
    g.k.k9 = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = c8(b),
                g.Za(b))
                    switch (a = "" + b.type,
                    b = b.data || {},
                    this.info("onYoutubeMessage_: " + a + " " + g.wj(b)),
                    a) {
                    case "mdxSessionStatus":
                        Utb(this, b);
                        break;
                    case "loungeToken":
                        Ytb(this, b);
                        break;
                    default:
                        q9(this, "Unknown youtube message: " + a)
                    }
                else
                    q9(this, "Unable to parse message.");
            else
                q9(this, "No data in message.")
    }
    ;
    g.k.rV = function(a, b, c, d) {
        g.Yz(this.V);
        this.V = 0;
        Ntb(this.C, this.u.label, a, this.u.friendlyName, (0,
        g.bb)(function(e) {
            e ? b(e) : 0 <= d ? (q9(this, "Screen " + a + " appears to be offline. " + d + " retries left."),
            this.V = g.Wz((0,
            g.bb)(this.rV, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    }
    ;
    g.k.kS = function() {
        return this.B
    }
    ;
    g.k.f1 = function(a) {
        this.isDisposed() || a || (q9(this, "Cast session died."),
        this.Ej())
    }
    ;
    g.w(s9, o9);
    g.k = s9.prototype;
    g.k.oQ = function(a) {
        this.B = a;
        this.B.addUpdateListener(this.Ma)
    }
    ;
    g.k.Cz = function(a) {
        this.Oa = a;
        this.oa()
    }
    ;
    g.k.stop = function() {
        jub(this);
        this.B ? this.B.stop((0,
        g.bb)(this.Ej, this, null), (0,
        g.bb)(this.Ej, this, "Failed to stop DIAL device.")) : this.Ej()
    }
    ;
    g.k.xa = function() {
        jub(this);
        this.B && this.B.removeUpdateListener(this.Ma);
        this.B = null;
        o9.prototype.xa.call(this)
    }
    ;
    g.k.g1 = function(a) {
        this.isDisposed() || a || (q9(this, "DIAL session died."),
        this.D(),
        this.D = function() {}
        ,
        this.Ej())
    }
    ;
    g.w(v9, o9);
    v9.prototype.stop = function() {
        this.Ej()
    }
    ;
    v9.prototype.oQ = function() {}
    ;
    v9.prototype.Cz = function() {
        g.Yz(this.B);
        this.B = NaN;
        var a = i8(this.C.Tk(), this.u.label);
        a ? p9(this, a) : this.Ej(Error("No such screen"))
    }
    ;
    v9.prototype.xa = function() {
        g.Yz(this.B);
        this.B = NaN;
        o9.prototype.xa.call(this)
    }
    ;
    g.w(w9, g.MG);
    g.k = w9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.V,[chrome.cast.Capability.AUDIO_OUT]);
        this.ea || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0,
        g.bb)(this.k8, this);
        c = new chrome.cast.ApiConfig(c,(0,
        g.bb)(this.SX, this),e,d,a);
        c.customDialLaunchCallback = (0,
        g.bb)(this.j7, this);
        chrome.cast.initialize(c, (0,
        g.bb)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D),
            wtb(),
            this.u.subscribe("onlineScreenChange", (0,
            g.bb)(this.lS, this)),
            this.B = mub(this),
            chrome.cast.setCustomReceivers(this.B, function() {}, (0,
            g.bb)(function(f) {
                this.gg("Failed to set initial custom receivers: " + g.wj(f))
            }, this)),
            this.ra("yt-remote-cast2-availability-change", y9(this)),
            b(!0))
        }, this), (0,
        g.bb)(function(f) {
            this.gg("Failed to initialize API: " + g.wj(f));
            b(!1)
        }, this))
    }
    ;
    g.k.f$ = function(a, b) {
        x9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a)
                x9("Unsetting old screen status: " + this.j.u.friendlyName),
                z9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = i8(this.u.Tk(), a);
                if (!c) {
                    x9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    x9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = kub(this, c);
                a || (x9("setConnectedScreenStatus: Connected receiver not custom..."),
                a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id,c.name),
                a.receiverType = chrome.cast.ReceiverType.CUSTOM,
                this.B.push(a),
                chrome.cast.setCustomReceivers(this.B, function() {}, (0,
                g.bb)(function(d) {
                    this.gg("Failed to set initial custom receivers: " + g.wj(d))
                }, this)));
                x9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                z9(this, new v9(this.u,a), !0)
            }
            this.j.pQ(b)
        } else
            x9("setConnectedScreenStatus: no screen.")
    }
    ;
    g.k.h$ = function(a) {
        this.isDisposed() ? this.gg("Setting connection data on disposed cast v2") : this.j ? this.j.Cz(a) : this.gg("Setting connection data without a session")
    }
    ;
    g.k.j1 = function() {
        this.isDisposed() ? this.gg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(),
        z9(this, null)) : x9("Stopping non-existing session")
    }
    ;
    g.k.requestSession = function() {
        chrome.cast.requestSession((0,
        g.bb)(this.SX, this), (0,
        g.bb)(this.D8, this))
    }
    ;
    g.k.xa = function() {
        this.u.unsubscribe("onlineScreenChange", (0,
        g.bb)(this.lS, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = ttb
          , b = g.Sa("yt.mdx.remote.debug.handlers_");
        g.Jb(b || [], a);
        g.rb(this.j);
        g.MG.prototype.xa.call(this)
    }
    ;
    g.k.gg = function(a) {
        c9("Controller", a)
    }
    ;
    g.k.UX = function(a, b) {
        this.j == a && (b || z9(this, null),
        this.ra("yt-remote-cast2-session-change", b))
    }
    ;
    g.k.h8 = function(a, b) {
        if (!this.isDisposed())
            if (a)
                switch (a.friendlyName = chrome.cast.unescape(a.friendlyName),
                x9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b),
                b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.u.label != a.label)
                            x9("onReceiverAction_: Stopping active receiver: " + this.j.u.friendlyName),
                            this.j.stop();
                        else {
                            x9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.ra("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                    case chrome.cast.ReceiverType.CUSTOM:
                        z9(this, new v9(this.u,a));
                        break;
                    case chrome.cast.ReceiverType.DIAL:
                        z9(this, new s9(this.u,a,this.C,this.config_));
                        break;
                    case chrome.cast.ReceiverType.CAST:
                        z9(this, new r9(this.u,a,this.config_));
                        break;
                    default:
                        this.gg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.u.label == a.label ? this.j.stop() : this.gg("Stopping receiver w/o session: " + a.friendlyName)
                }
            else
                this.gg("onReceiverAction_ called without receiver.")
    }
    ;
    g.k.j7 = function(a) {
        if (this.isDisposed())
            return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.gg("Not DIAL receiver: " + b.friendlyName),
        b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.u : null;
        if (!c || c.label != b.label)
            return this.gg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName),
            Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j)
                return x9("Reselecting dial screen."),
                this.ra("yt-remote-cast2-session-change", this.j.j),
                Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.gg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            z9(this, new s9(this.u,b,this.C,this.config_))
        }
        b = this.j;
        b.V = a;
        b.V.appState == chrome.cast.DialAppState.RUNNING ? (a = b.V.extraData || {},
        c = a.screenId || null,
        t9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = gub(b, {
            name: b.u.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.V.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.Gz(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")),
        a = hub(b, c)) : a = hub(b, c)) : a = eub(b);
        return a
    }
    ;
    g.k.SX = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            x9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST)
                        x9("Got resumed cast session before resumed mdx connection."),
                        c.friendlyName = chrome.cast.unescape(c.friendlyName),
                        z9(this, new r9(this.u,c,this.config_), !0);
                    else {
                        this.gg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.u
                  , e = i8(this.u.Tk(), d.label);
                e && g8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (x9("onSessionEstablished_: manual to cast session change " + c.friendlyName),
                g.rb(this.j),
                this.j = new r9(this.u,c,this.config_),
                this.j.subscribe("sessionScreen", (0,
                g.bb)(this.UX, this, this.j)),
                this.j.subscribe("sessionFailed", function() {
                    return lub(b, b.j)
                }),
                this.j.Cz(null));
                this.j.oQ(a)
            }
        }
    }
    ;
    g.k.h1 = function() {
        return this.j ? this.j.kS() : null
    }
    ;
    g.k.D8 = function(a) {
        this.isDisposed() || (this.gg("Failed to estabilish a session: " + g.wj(a)),
        a.code != chrome.cast.ErrorCode.CANCEL && z9(this, null),
        this.ra("yt-remote-cast2-session-failed"))
    }
    ;
    g.k.k8 = function(a) {
        x9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = y9(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            y9(this) != b && this.ra("yt-remote-cast2-availability-change", y9(this))
        }
    }
    ;
    g.k.lS = function() {
        this.isDisposed() || (this.B = mub(this),
        x9("Updating custom receivers: " + g.wj(this.B)),
        chrome.cast.setCustomReceivers(this.B, function() {}, (0,
        g.bb)(function() {
            this.gg("Failed to set custom receivers.")
        }, this)),
        this.ra("yt-remote-cast2-availability-change", y9(this)))
    }
    ;
    w9.prototype.setLaunchParams = w9.prototype.h$;
    w9.prototype.setConnectedScreenStatus = w9.prototype.f$;
    w9.prototype.stopSession = w9.prototype.j1;
    w9.prototype.getCastSession = w9.prototype.h1;
    w9.prototype.requestSession = w9.prototype.requestSession;
    w9.prototype.init = w9.prototype.init;
    w9.prototype.dispose = w9.prototype.dispose;
    var vub = [];
    g.k = G9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        Bub(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index,
        this.listId = a.listId,
        this.videoId = a.videoId,
        this.playerState = a.playerState,
        this.volume = a.volume,
        this.muted = a.muted,
        this.audioTrackId = a.audioTrackId,
        this.trackData = a.trackData,
        this.mp = a.hasPrevious,
        this.Xk = a.hasNext,
        this.K = a.playerTime,
        this.J = a.playerTimeAt,
        this.C = a.seekableStart,
        this.j = a.seekableEnd,
        this.D = a.duration,
        this.V = a.loadedTime,
        this.B = a.liveIngestionTime,
        this.u = !isNaN(this.B))
    }
    ;
    g.k.ud = function() {
        return 1 == this.playerState
    }
    ;
    g.k.rl = function(a) {
        this.D = isNaN(a) ? 0 : a
    }
    ;
    g.k.getDuration = function() {
        return this.u ? this.D + H9(this) : this.D
    }
    ;
    g.k.clone = function() {
        return new G9(Cub(this))
    }
    ;
    g.w(M9, g.MG);
    g.k = M9.prototype;
    g.k.getState = function() {
        return this.B
    }
    ;
    g.k.nt = function() {
        return this.C.getReconnectTimeout()
    }
    ;
    g.k.Gw = function() {
        this.C.reconnect()
    }
    ;
    g.k.play = function() {
        O9(this) ? (this.j ? this.j.play(null, g.Md, S9(this, "play")) : R9(this, "play"),
        Fub(this, 1, J9(N9(this))),
        this.ra("remotePlayerChange")) : P9(this, this.play)
    }
    ;
    g.k.pause = function() {
        O9(this) ? (this.j ? this.j.pause(null, g.Md, S9(this, "pause")) : R9(this, "pause"),
        Fub(this, 2, J9(N9(this))),
        this.ra("remotePlayerChange")) : P9(this, this.pause)
    }
    ;
    g.k.seekTo = function(a) {
        if (O9(this)) {
            if (this.j) {
                var b = N9(this)
                  , c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.ud() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Md, S9(this, "seekTo", {
                    newTime: a
                }))
            } else
                R9(this, "seekTo", {
                    newTime: a
                });
            Fub(this, 3, a);
            this.ra("remotePlayerChange")
        } else
            P9(this, g.cb(this.seekTo, a))
    }
    ;
    g.k.stop = function() {
        if (O9(this)) {
            this.j ? this.j.stop(null, g.Md, S9(this, "stopVideo")) : R9(this, "stopVideo");
            var a = N9(this);
            a.index = -1;
            a.videoId = "";
            Bub(a);
            Q9(this, a);
            this.ra("remotePlayerChange")
        } else
            P9(this, this.stop)
    }
    ;
    g.k.setVolume = function(a, b) {
        if (O9(this)) {
            var c = N9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0,
                    g.bb)(function() {
                        d9("set receiver volume: " + d)
                    }, this), (0,
                    g.bb)(function() {
                        this.gg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0,
                g.bb)(function() {
                    d9("set receiver muted: " + b)
                }, this), (0,
                g.bb)(function() {
                    this.gg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                -1 != c.volume && (e.delta = a - c.volume);
                R9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            Q9(this, c)
        } else
            P9(this, g.cb(this.setVolume, a, b))
    }
    ;
    g.k.mS = function(a, b) {
        if (O9(this)) {
            var c = N9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            },
            a.style = g.wj(b.style),
            g.rd(a, c.trackData));
            R9(this, "setSubtitlesTrack", a);
            Q9(this, c)
        } else
            P9(this, g.cb(this.mS, a, b))
    }
    ;
    g.k.setAudioTrack = function(a, b) {
        O9(this) ? (b = b.getLanguageInfo().getId(),
        R9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }),
        a = N9(this),
        a.audioTrackId = b,
        Q9(this, a)) : P9(this, g.cb(this.setAudioTrack, a, b))
    }
    ;
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = N9(this)
          , m = {
            videoId: a
        };
        void 0 !== c && (m.currentIndex = c);
        K9(l, a, c || 0);
        void 0 !== b && (I9(l, b),
        m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.wj(h));
        R9(this, "setPlaylist", m);
        d || Q9(this, l)
    }
    ;
    g.k.CI = function(a, b) {
        if (O9(this)) {
            if (a && b) {
                var c = N9(this);
                K9(c, a, b);
                Q9(this, c)
            }
            R9(this, "previous")
        } else
            P9(this, g.cb(this.CI, a, b))
    }
    ;
    g.k.nextVideo = function(a, b) {
        if (O9(this)) {
            if (a && b) {
                var c = N9(this);
                K9(c, a, b);
                Q9(this, c)
            }
            R9(this, "next")
        } else
            P9(this, g.cb(this.nextVideo, a, b))
    }
    ;
    g.k.cG = function() {
        if (O9(this)) {
            R9(this, "clearPlaylist");
            var a = N9(this);
            a.reset();
            Q9(this, a);
            this.ra("remotePlayerChange")
        } else
            P9(this, this.cG)
    }
    ;
    g.k.CU = function() {
        O9(this) ? R9(this, "dismissAutoplay") : P9(this, this.CU)
    }
    ;
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.ra("proxyStateChange", a, this.B)
        }
        g.MG.prototype.dispose.call(this)
    }
    ;
    g.k.xa = function() {
        Eub(this);
        this.C = null;
        this.D.clear();
        L9(this, null);
        g.MG.prototype.xa.call(this)
    }
    ;
    g.k.sQ = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.ra("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty(); )
                    b = a = this.D,
                    0 === b.j.length && (b.j = b.u,
                    b.j.reverse(),
                    b.u = []),
                    a.j.pop().apply(this);
            else
                3 == a && this.dispose()
        }
    }
    ;
    g.k.f8 = function(a, b) {
        this.ra(a, b)
    }
    ;
    g.k.Z6 = function(a) {
        if (!a)
            this.ED(null),
            L9(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = N9(this)
              , c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted)
                d9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
                b.volume = c,
                b.muted = !!a.muted,
                Q9(this, b)
        }
    }
    ;
    g.k.ED = function(a) {
        d9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.V);
        if (this.j = a)
            this.j.addUpdateListener(this.V),
            Gub(this),
            this.ra("remotePlayerChange")
    }
    ;
    g.k.Y6 = function(a) {
        a ? (Gub(this),
        this.ra("remotePlayerChange")) : this.ED(null)
    }
    ;
    g.k.OQ = function() {
        R9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    }
    ;
    g.k.c7 = function() {
        var a = yub();
        a && L9(this, a)
    }
    ;
    g.k.gg = function(a) {
        c9("CP", a)
    }
    ;
    g.w(V9, g.MG);
    g.k = V9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId
              , d = b.videoId
              , e = b.videoIds
              , f = b.playerParams
              , h = b.clickTrackingParams
              , l = b.index
              , m = {
                videoId: d
            }
              , n = b.currentTime
              , p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ma && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            I9(this.j, n);
            this.D = "UNSUPPORTED";
            c = this.Ma ? "setInitialState" : "setPlaylist";
            T9("Connecting with " + c + " and params: " + g.wj(m));
            this.u.connect({
                method: c,
                params: g.wj(m)
            }, a, irb())
        } else
            T9("Connecting without params"),
            this.u.connect({}, a, irb());
        Kub(this)
    }
    ;
    g.k.Ir = function(a) {
        this.u.Ir(a)
    }
    ;
    g.k.dispose = function() {
        this.isDisposed() || (g.Ra("yt.mdx.remote.remoteClient_", null),
        this.ra("beforeDispose"),
        U9(this, 3));
        g.MG.prototype.dispose.call(this)
    }
    ;
    g.k.xa = function() {
        Lub(this);
        Nub(this);
        Mub(this);
        g.Yz(this.V);
        this.V = NaN;
        g.Yz(this.ea);
        this.ea = NaN;
        this.C = null;
        g.aB(this.oa);
        this.oa.length = 0;
        this.u.dispose();
        g.MG.prototype.xa.call(this);
        this.D = this.K = this.B = this.j = this.u = null
    }
    ;
    g.k.lW = function(a) {
        if (!this.B || 0 === this.B.length)
            return !1;
        for (var b = g.u(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a))
                return !1;
        return !0
    }
    ;
    g.k.N4 = function() {
        var a = 3;
        this.isDisposed() || (a = 0,
        isNaN(this.FC()) ? this.u.rz() && isNaN(this.J) && (a = 1) : a = 2);
        return a
    }
    ;
    g.k.Sy = function(a) {
        T9("Disconnecting with " + a);
        g.Ra("yt.mdx.remote.remoteClient_", null);
        Lub(this);
        this.ra("beforeDisconnect", a);
        1 == a && l8();
        this.u.disconnect(a);
        this.dispose()
    }
    ;
    g.k.L4 = function() {
        var a = this.j;
        this.C && (a = this.j.clone(),
        K9(a, this.C, a.index));
        return Cub(a)
    }
    ;
    g.k.i$ = function(a) {
        var b = this
          , c = new G9(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId,
        g.Yz(this.V),
        this.V = g.Wz(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && W9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && J9(this.j) == J9(c) && g.wj(this.j.trackData) == g.wj(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.dc(d, function(e) {
            this.ra(e)
        }, this)
    }
    ;
    g.k.nV = function() {
        var a = this.u.Vs()
          , b = g.Eb(this.B, function(c) {
            return "REMOTE_CONTROL" == c.type && c.id != a
        });
        return b ? b.id : ""
    }
    ;
    g.k.FC = function() {
        return this.u.nt()
    }
    ;
    g.k.G4 = function() {
        return this.D || "UNSUPPORTED"
    }
    ;
    g.k.H4 = function() {
        return this.K || ""
    }
    ;
    g.k.l1 = function() {
        !isNaN(this.FC()) && this.u.Gw()
    }
    ;
    g.k.e$ = function(a, b) {
        W9(this, a, b);
        Pub(this)
    }
    ;
    g.k.nS = function() {
        var a = g.mA("SID", "") || ""
          , b = g.mA("SAPISID", "") || ""
          , c = g.mA("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c)
            return "";
        a = g.hg(g.gg(a), 2);
        b = g.hg(g.gg(b), 2);
        c = g.hg(g.gg(c), 2);
        return g.hg(g.gg(a + "," + b + "," + c), 2)
    }
    ;
    V9.prototype.subscribe = V9.prototype.subscribe;
    V9.prototype.unsubscribeByKey = V9.prototype.Th;
    V9.prototype.getProxyState = V9.prototype.N4;
    V9.prototype.disconnect = V9.prototype.Sy;
    V9.prototype.getPlayerContextData = V9.prototype.L4;
    V9.prototype.setPlayerContextData = V9.prototype.i$;
    V9.prototype.getOtherConnectedRemoteId = V9.prototype.nV;
    V9.prototype.getReconnectTimeout = V9.prototype.FC;
    V9.prototype.getAutoplayMode = V9.prototype.G4;
    V9.prototype.getAutoplayVideoId = V9.prototype.H4;
    V9.prototype.reconnect = V9.prototype.l1;
    V9.prototype.sendMessage = V9.prototype.e$;
    V9.prototype.getXsrfToken = V9.prototype.nS;
    V9.prototype.isCapabilitySupportedOnConnectedDevices = V9.prototype.lW;
    g.w(avb, h9);
    g.k = avb.prototype;
    g.k.Tk = function(a) {
        return this.ih.$_gs(a)
    }
    ;
    g.k.contains = function(a) {
        return !!this.ih.$_c(a)
    }
    ;
    g.k.get = function(a) {
        return this.ih.$_g(a)
    }
    ;
    g.k.start = function() {
        this.ih.$_st()
    }
    ;
    g.k.add = function(a, b, c) {
        this.ih.$_a(a, b, c)
    }
    ;
    g.k.remove = function(a, b, c) {
        this.ih.$_r(a, b, c)
    }
    ;
    g.k.zJ = function(a, b, c, d) {
        this.ih.$_un(a, b, c, d)
    }
    ;
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a)
            this.ih.$_ubk(this.j[a]);
        this.j.length = 0;
        this.ih = null;
        h9.prototype.xa.call(this)
    }
    ;
    g.k.m1 = function() {
        this.ra("screenChange")
    }
    ;
    g.k.N7 = function() {
        this.ra("onlineScreenChange")
    }
    ;
    m9.prototype.$_st = m9.prototype.start;
    m9.prototype.$_gspc = m9.prototype.e1;
    m9.prototype.$_gsppc = m9.prototype.jS;
    m9.prototype.$_c = m9.prototype.contains;
    m9.prototype.$_g = m9.prototype.get;
    m9.prototype.$_a = m9.prototype.add;
    m9.prototype.$_un = m9.prototype.zJ;
    m9.prototype.$_r = m9.prototype.remove;
    m9.prototype.$_gs = m9.prototype.Tk;
    m9.prototype.$_gos = m9.prototype.iS;
    m9.prototype.$_s = m9.prototype.subscribe;
    m9.prototype.$_ubk = m9.prototype.Th;
    var g$ = null
      , j$ = !1
      , X9 = null
      , Y9 = null
      , lvb = null
      , b$ = [];
    g.w(qvb, g.D);
    g.k = qvb.prototype;
    g.k.xa = function() {
        g.D.prototype.xa.call(this);
        this.j.stop();
        this.u.stop();
        this.K.stop();
        var a = this.Ec;
        a.unsubscribe("proxyStateChange", this.RX, this);
        a.unsubscribe("remotePlayerChange", this.LD, this);
        a.unsubscribe("remoteQueueChange", this.mI, this);
        a.unsubscribe("previousNextChange", this.OX, this);
        a.unsubscribe("nowAutoplaying", this.IX, this);
        a.unsubscribe("autoplayDismissed", this.nX, this);
        this.Ec = this.module = null
    }
    ;
    g.k.Wk = function(a) {
        var b = g.Ha.apply(1, arguments);
        if (2 != this.Ec.B)
            if (k$(this)) {
                if (1081 != N9(this.Ec).playerState || "control_seek" !== a)
                    switch (a) {
                    case "control_toggle_play_pause":
                        N9(this.Ec).ud() ? this.Ec.pause() : this.Ec.play();
                        break;
                    case "control_play":
                        this.Ec.play();
                        break;
                    case "control_pause":
                        this.Ec.pause();
                        break;
                    case "control_seek":
                        this.J.iK(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        svb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                    }
            } else
                switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b = this.I.getCurrentTime();
                    l$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    l$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    svb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
                }
    }
    ;
    g.k.W6 = function(a) {
        this.K.H0(a)
    }
    ;
    g.k.Z$ = function(a) {
        this.Wk("control_subtitles_set_track", g.kd(a) ? null : a)
    }
    ;
    g.k.zZ = function() {
        var a = this.I.getOption("captions", "track");
        g.kd(a) || svb(this, a)
    }
    ;
    g.k.Bc = function(a) {
        this.module.Bc(a, this.I.getVideoData().lengthSeconds)
    }
    ;
    g.k.y7 = function() {
        g.kd(this.B) || tvb(this, this.B);
        this.C = !1
    }
    ;
    g.k.RX = function(a, b) {
        this.u.stop();
        2 === b && this.qZ()
    }
    ;
    g.k.LD = function() {
        if (k$(this)) {
            this.j.stop();
            var a = N9(this.Ec);
            switch (a.playerState) {
            case 1080:
            case 1081:
            case 1084:
            case 1085:
                this.module.Nh = 1;
                break;
            case 1082:
            case 1083:
                this.module.Nh = 0;
                break;
            default:
                this.module.Nh = -1
            }
            switch (a.playerState) {
            case 1081:
            case 1:
                this.yc(new g.ZP(8));
                this.oZ();
                break;
            case 1085:
            case 3:
                this.yc(new g.ZP(9));
                break;
            case 1083:
            case 0:
                this.yc(new g.ZP(2));
                this.J.stop();
                this.Bc(this.I.getVideoData().lengthSeconds);
                break;
            case 1084:
                this.yc(new g.ZP(4));
                break;
            case 2:
                this.yc(new g.ZP(4));
                this.Bc(J9(a));
                break;
            case -1:
                this.yc(new g.ZP(64));
                break;
            case -1E3:
                this.yc(new g.ZP(128,{
                    errorCode: "mdx.remoteerror",
                    errorMessage: "This video is not available for remote playback.",
                    wG: 2
                }))
            }
            a = N9(this.Ec).trackData;
            var b = this.B;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a,
            tvb(this, a));
            a = N9(this.Ec);
            -1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.V.isActive() || this.d_()
        } else
            rvb(this)
    }
    ;
    g.k.OX = function() {
        this.I.ra("mdxpreviousnextchange")
    }
    ;
    g.k.mI = function() {
        k$(this) || rvb(this)
    }
    ;
    g.k.IX = function(a) {
        isNaN(a) || this.I.ra("mdxnowautoplaying", a)
    }
    ;
    g.k.nX = function() {
        this.I.ra("mdxautoplaycanceled")
    }
    ;
    g.k.setAudioTrack = function(a) {
        k$(this) && this.Ec.setAudioTrack(this.I.getVideoData(1).videoId, a)
    }
    ;
    g.k.seekTo = function(a, b) {
        -1 === N9(this.Ec).playerState ? l$(this, a) : b && this.Ec.seekTo(a)
    }
    ;
    g.k.d_ = function() {
        var a = this;
        if (k$(this)) {
            var b = N9(this.Ec);
            this.events.Mc(this.ea);
            b.muted ? this.I.mute() : this.I.unMute();
            this.I.setVolume(b.volume);
            this.ea = this.events.T(this.I, "onVolumeChange", function(c) {
                ovb(a, c)
            })
        }
    }
    ;
    g.k.oZ = function() {
        this.j.stop();
        if (!this.Ec.isDisposed()) {
            var a = N9(this.Ec);
            a.ud() && this.yc(new g.ZP(8));
            this.Bc(J9(a));
            this.j.start()
        }
    }
    ;
    g.k.qZ = function() {
        this.u.stop();
        this.j.stop();
        var a = this.Ec.nt();
        2 == this.Ec.B && !isNaN(a) && this.u.start()
    }
    ;
    g.k.yc = function(a) {
        this.u.stop();
        var b = this.D;
        if (!g.NBa(b, a)) {
            var c = g.zP(a, 2);
            c !== g.zP(this.D, 2) && this.I.xA(c);
            this.D = a;
            vvb(this.module, b, a)
        }
    }
    ;
    g.w(m$, g.X);
    m$.prototype.xd = function() {
        this.j.show()
    }
    ;
    m$.prototype.Mb = function() {
        this.j.hide()
    }
    ;
    m$.prototype.u = function() {
        n8("mdx-privacy-popup-cancel");
        this.Mb()
    }
    ;
    m$.prototype.B = function() {
        n8("mdx-privacy-popup-confirm");
        this.Mb()
    }
    ;
    g.w(n$, g.X);
    n$.prototype.onStateChange = function(a) {
        this.zc(a.state)
    }
    ;
    n$.prototype.zc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.zP(a, 128) ? g.NP("Error on $RECEIVER_NAME", b) : a.ud() || g.dQ(a) ? g.NP("Playing on $RECEIVER_NAME", b) : g.NP("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else
            this.j.hide()
    }
    ;
    g.w(o$, g.fW);
    o$.prototype.C = function() {
        var a = this.I.getOption("remote", "receivers");
        a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.Xt = g.ec(a, this.j, this),
        g.gW(this, g.cn(a, this.j)),
        a = this.I.getOption("remote", "currentReceiver"),
        a = this.j(a),
        this.options[a] && this.Tj(a),
        this.enable(!0)) : this.enable(!1)
    }
    ;
    o$.prototype.j = function(a) {
        return a.key
    }
    ;
    o$.prototype.Ik = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Xt[a].name
    }
    ;
    o$.prototype.rh = function(a) {
        g.fW.prototype.rh.call(this, a);
        this.I.setOption("remote", "currentReceiver", this.Xt[a]);
        this.Lb.Mb()
    }
    ;
    g.w(uvb, g.XT);
    g.k = uvb.prototype;
    g.k.create = function() {
        var a = this.player.W()
          , b = g.DM(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        fvb(b, a);
        this.subscriptions.push(g.HD("yt-remote-before-disconnect", this.U6, this));
        this.subscriptions.push(g.HD("yt-remote-connection-change", this.l8, this));
        this.subscriptions.push(g.HD("yt-remote-receiver-availability-change", this.QX, this));
        this.subscriptions.push(g.HD("yt-remote-auto-connect", this.j8, this));
        this.subscriptions.push(g.HD("yt-remote-receiver-resumed", this.i8, this));
        this.subscriptions.push(g.HD("mdx-privacy-popup-confirm", this.B9, this));
        this.subscriptions.push(g.HD("mdx-privacy-popup-cancel", this.A9, this));
        this.QX()
    }
    ;
    g.k.load = function() {
        this.player.cancelPlayback();
        g.XT.prototype.load.call(this);
        this.Ql = new qvb(this,this.player,this.Ec);
        var a = (a = nvb()) ? a.currentTime : 0;
        var b = kvb() ? new M9(f$(),void 0) : null;
        0 == a && b && (a = J9(N9(b)));
        0 !== a && this.Bc(a);
        vvb(this, this.mf, this.mf);
        this.player.Np(6)
    }
    ;
    g.k.unload = function() {
        this.player.ra("mdxautoplaycanceled");
        this.Ks = this.Cp;
        g.sb(this.Ql, this.Ec);
        this.Ec = this.Ql = null;
        g.XT.prototype.unload.call(this);
        this.player.Np(5);
        p$(this)
    }
    ;
    g.k.xa = function() {
        g.ID(this.subscriptions);
        g.XT.prototype.xa.call(this)
    }
    ;
    g.k.GD = function(a) {
        var b = g.Ha.apply(1, arguments);
        this.loaded && this.Ql.Wk.apply(this.Ql, [a].concat(g.pa(b)))
    }
    ;
    g.k.getAdState = function() {
        return this.Nh
    }
    ;
    g.k.mp = function() {
        return this.Ec ? N9(this.Ec).mp : !1
    }
    ;
    g.k.Xk = function() {
        return this.Ec ? N9(this.Ec).Xk : !1
    }
    ;
    g.k.Bc = function(a, b) {
        this.wW = a || 0;
        this.player.ra("progresssync", a, b);
        this.player.Qa("onVideoProgress", a || 0)
    }
    ;
    g.k.getCurrentTime = function() {
        return this.wW
    }
    ;
    g.k.getProgressState = function() {
        var a = N9(this.Ec)
          , b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Mh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + H9(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + H9(a) : a.j) - this.getCurrentTime(),
            loaded: a.V,
            seekableEnd: a.u ? a.j + H9(a) : a.j,
            seekableStart: 0 < a.C ? a.C + H9(a) : a.C,
            offset: 0,
            viewerLivestreamJoinTime: b.viewerLivestreamJoinTime
        }
    }
    ;
    g.k.nextVideo = function() {
        this.Ec && this.Ec.nextVideo()
    }
    ;
    g.k.CI = function() {
        this.Ec && this.Ec.CI()
    }
    ;
    g.k.U6 = function(a) {
        1 === a && (this.DP = this.Ec ? N9(this.Ec) : null)
    }
    ;
    g.k.l8 = function() {
        var a = kvb() ? new M9(f$(),void 0) : null;
        if (a) {
            var b = this.Ks;
            this.loaded && this.unload();
            this.Ec = a;
            this.DP = null;
            b.key !== this.Cp.key && (this.Ks = b,
            this.load())
        } else
            g.rb(this.Ec),
            this.Ec = null,
            this.loaded && (this.unload(),
            (a = this.DP) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, J9(a)));
        this.player.ra("videodatachange", "newdata", this.player.getVideoData(), 3)
    }
    ;
    g.k.QX = function() {
        var a = [this.Cp]
          , b = a.concat
          , c = gvb();
        D9() && g.mB("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Xt = b.call(a, c);
        a = ivb() || this.Cp;
        q$(this, a);
        this.player.Qa("onMdxReceiversChange")
    }
    ;
    g.k.j8 = function() {
        var a = ivb();
        q$(this, a)
    }
    ;
    g.k.i8 = function() {
        this.Ks = ivb()
    }
    ;
    g.k.B9 = function() {
        this.fE = !0;
        p$(this);
        j$ = !1;
        g$ && i$(g$, 1);
        g$ = null
    }
    ;
    g.k.A9 = function() {
        this.fE = !1;
        p$(this);
        q$(this, this.Cp);
        this.Ks = this.Cp;
        j$ = !1;
        g$ = null;
        this.player.playVideo()
    }
    ;
    g.k.Hh = function(a, b) {
        switch (a) {
        case "casting":
            return this.loaded;
        case "receivers":
            return this.Xt;
        case "currentReceiver":
            return b && ("cast-selector-receiver" === b.key ? zub() : q$(this, b)),
            this.loaded ? this.Ks : this.Cp;
        case "quickCast":
            return 2 === this.Xt.length && "cast-selector-receiver" === this.Xt[1].key ? (b && zub(),
            !0) : !1
        }
    }
    ;
    g.k.OQ = function() {
        this.Ec.OQ()
    }
    ;
    g.k.ul = function() {
        return !1
    }
    ;
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    }
    ;
    g.WT("remote", uvb);
}
)(_yt_player);
