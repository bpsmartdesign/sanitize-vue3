import { defineComponent as Sr, ref as _r, onMounted as Tr, watch as Er, openBlock as Cr, createElementBlock as Ar } from "vue";
var v = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tn(s) {
  var t = s.default;
  if (typeof t == "function") {
    var e = function() {
      return t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(s).forEach(function(n) {
    var r = Object.getOwnPropertyDescriptor(s, n);
    Object.defineProperty(e, n, r.get ? r : {
      enumerable: !0,
      get: function() {
        return s[n];
      }
    });
  }), e;
}
var en = {}, Ut = {}, he = {}, pe = {};
const qr = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
var Or = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(pe, "__esModule", { value: !0 });
var vs = Or(qr), Dr = String.fromCodePoint || function(s) {
  var t = "";
  return s > 65535 && (s -= 65536, t += String.fromCharCode(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), t += String.fromCharCode(s), t;
};
function Lr(s) {
  return s >= 55296 && s <= 57343 || s > 1114111 ? "\uFFFD" : (s in vs.default && (s = vs.default[s]), Dr(s));
}
pe.default = Lr;
const Nr = "\xC1", Pr = "\xE1", kr = "\u0102", Rr = "\u0103", $r = "\u223E", Mr = "\u223F", Ir = "\u223E\u0333", jr = "\xC2", Br = "\xE2", Ur = "\xB4", Hr = "\u0410", Vr = "\u0430", Fr = "\xC6", zr = "\xE6", Gr = "\u2061", Wr = "\u{1D504}", Yr = "\u{1D51E}", Jr = "\xC0", Xr = "\xE0", Qr = "\u2135", Zr = "\u2135", Kr = "\u0391", to = "\u03B1", eo = "\u0100", so = "\u0101", no = "\u2A3F", ro = "&", oo = "&", io = "\u2A55", co = "\u2A53", ao = "\u2227", lo = "\u2A5C", uo = "\u2A58", fo = "\u2A5A", ho = "\u2220", po = "\u29A4", go = "\u2220", mo = "\u29A8", bo = "\u29A9", yo = "\u29AA", vo = "\u29AB", wo = "\u29AC", xo = "\u29AD", So = "\u29AE", _o = "\u29AF", To = "\u2221", Eo = "\u221F", Co = "\u22BE", Ao = "\u299D", qo = "\u2222", Oo = "\xC5", Do = "\u237C", Lo = "\u0104", No = "\u0105", Po = "\u{1D538}", ko = "\u{1D552}", Ro = "\u2A6F", $o = "\u2248", Mo = "\u2A70", Io = "\u224A", jo = "\u224B", Bo = "'", Uo = "\u2061", Ho = "\u2248", Vo = "\u224A", Fo = "\xC5", zo = "\xE5", Go = "\u{1D49C}", Wo = "\u{1D4B6}", Yo = "\u2254", Jo = "*", Xo = "\u2248", Qo = "\u224D", Zo = "\xC3", Ko = "\xE3", ti = "\xC4", ei = "\xE4", si = "\u2233", ni = "\u2A11", ri = "\u224C", oi = "\u03F6", ii = "\u2035", ci = "\u223D", ai = "\u22CD", li = "\u2216", ui = "\u2AE7", fi = "\u22BD", hi = "\u2305", pi = "\u2306", di = "\u2305", gi = "\u23B5", mi = "\u23B6", bi = "\u224C", yi = "\u0411", vi = "\u0431", wi = "\u201E", xi = "\u2235", Si = "\u2235", _i = "\u2235", Ti = "\u29B0", Ei = "\u03F6", Ci = "\u212C", Ai = "\u212C", qi = "\u0392", Oi = "\u03B2", Di = "\u2136", Li = "\u226C", Ni = "\u{1D505}", Pi = "\u{1D51F}", ki = "\u22C2", Ri = "\u25EF", $i = "\u22C3", Mi = "\u2A00", Ii = "\u2A01", ji = "\u2A02", Bi = "\u2A06", Ui = "\u2605", Hi = "\u25BD", Vi = "\u25B3", Fi = "\u2A04", zi = "\u22C1", Gi = "\u22C0", Wi = "\u290D", Yi = "\u29EB", Ji = "\u25AA", Xi = "\u25B4", Qi = "\u25BE", Zi = "\u25C2", Ki = "\u25B8", tc = "\u2423", ec = "\u2592", sc = "\u2591", nc = "\u2593", rc = "\u2588", oc = "=\u20E5", ic = "\u2261\u20E5", cc = "\u2AED", ac = "\u2310", lc = "\u{1D539}", uc = "\u{1D553}", fc = "\u22A5", hc = "\u22A5", pc = "\u22C8", dc = "\u29C9", gc = "\u2510", mc = "\u2555", bc = "\u2556", yc = "\u2557", vc = "\u250C", wc = "\u2552", xc = "\u2553", Sc = "\u2554", _c = "\u2500", Tc = "\u2550", Ec = "\u252C", Cc = "\u2564", Ac = "\u2565", qc = "\u2566", Oc = "\u2534", Dc = "\u2567", Lc = "\u2568", Nc = "\u2569", Pc = "\u229F", kc = "\u229E", Rc = "\u22A0", $c = "\u2518", Mc = "\u255B", Ic = "\u255C", jc = "\u255D", Bc = "\u2514", Uc = "\u2558", Hc = "\u2559", Vc = "\u255A", Fc = "\u2502", zc = "\u2551", Gc = "\u253C", Wc = "\u256A", Yc = "\u256B", Jc = "\u256C", Xc = "\u2524", Qc = "\u2561", Zc = "\u2562", Kc = "\u2563", ta = "\u251C", ea = "\u255E", sa = "\u255F", na = "\u2560", ra = "\u2035", oa = "\u02D8", ia = "\u02D8", ca = "\xA6", aa = "\u{1D4B7}", la = "\u212C", ua = "\u204F", fa = "\u223D", ha = "\u22CD", pa = "\u29C5", da = "\\", ga = "\u27C8", ma = "\u2022", ba = "\u2022", ya = "\u224E", va = "\u2AAE", wa = "\u224F", xa = "\u224E", Sa = "\u224F", _a = "\u0106", Ta = "\u0107", Ea = "\u2A44", Ca = "\u2A49", Aa = "\u2A4B", qa = "\u2229", Oa = "\u22D2", Da = "\u2A47", La = "\u2A40", Na = "\u2145", Pa = "\u2229\uFE00", ka = "\u2041", Ra = "\u02C7", $a = "\u212D", Ma = "\u2A4D", Ia = "\u010C", ja = "\u010D", Ba = "\xC7", Ua = "\xE7", Ha = "\u0108", Va = "\u0109", Fa = "\u2230", za = "\u2A4C", Ga = "\u2A50", Wa = "\u010A", Ya = "\u010B", Ja = "\xB8", Xa = "\xB8", Qa = "\u29B2", Za = "\xA2", Ka = "\xB7", tl = "\xB7", el = "\u{1D520}", sl = "\u212D", nl = "\u0427", rl = "\u0447", ol = "\u2713", il = "\u2713", cl = "\u03A7", al = "\u03C7", ll = "\u02C6", ul = "\u2257", fl = "\u21BA", hl = "\u21BB", pl = "\u229B", dl = "\u229A", gl = "\u229D", ml = "\u2299", bl = "\xAE", yl = "\u24C8", vl = "\u2296", wl = "\u2295", xl = "\u2297", Sl = "\u25CB", _l = "\u29C3", Tl = "\u2257", El = "\u2A10", Cl = "\u2AEF", Al = "\u29C2", ql = "\u2232", Ol = "\u201D", Dl = "\u2019", Ll = "\u2663", Nl = "\u2663", Pl = ":", kl = "\u2237", Rl = "\u2A74", $l = "\u2254", Ml = "\u2254", Il = ",", jl = "@", Bl = "\u2201", Ul = "\u2218", Hl = "\u2201", Vl = "\u2102", Fl = "\u2245", zl = "\u2A6D", Gl = "\u2261", Wl = "\u222E", Yl = "\u222F", Jl = "\u222E", Xl = "\u{1D554}", Ql = "\u2102", Zl = "\u2210", Kl = "\u2210", tu = "\xA9", eu = "\xA9", su = "\u2117", nu = "\u2233", ru = "\u21B5", ou = "\u2717", iu = "\u2A2F", cu = "\u{1D49E}", au = "\u{1D4B8}", lu = "\u2ACF", uu = "\u2AD1", fu = "\u2AD0", hu = "\u2AD2", pu = "\u22EF", du = "\u2938", gu = "\u2935", mu = "\u22DE", bu = "\u22DF", yu = "\u21B6", vu = "\u293D", wu = "\u2A48", xu = "\u2A46", Su = "\u224D", _u = "\u222A", Tu = "\u22D3", Eu = "\u2A4A", Cu = "\u228D", Au = "\u2A45", qu = "\u222A\uFE00", Ou = "\u21B7", Du = "\u293C", Lu = "\u22DE", Nu = "\u22DF", Pu = "\u22CE", ku = "\u22CF", Ru = "\xA4", $u = "\u21B6", Mu = "\u21B7", Iu = "\u22CE", ju = "\u22CF", Bu = "\u2232", Uu = "\u2231", Hu = "\u232D", Vu = "\u2020", Fu = "\u2021", zu = "\u2138", Gu = "\u2193", Wu = "\u21A1", Yu = "\u21D3", Ju = "\u2010", Xu = "\u2AE4", Qu = "\u22A3", Zu = "\u290F", Ku = "\u02DD", tf = "\u010E", ef = "\u010F", sf = "\u0414", nf = "\u0434", rf = "\u2021", of = "\u21CA", cf = "\u2145", af = "\u2146", lf = "\u2911", uf = "\u2A77", ff = "\xB0", hf = "\u2207", pf = "\u0394", df = "\u03B4", gf = "\u29B1", mf = "\u297F", bf = "\u{1D507}", yf = "\u{1D521}", vf = "\u2965", wf = "\u21C3", xf = "\u21C2", Sf = "\xB4", _f = "\u02D9", Tf = "\u02DD", Ef = "`", Cf = "\u02DC", Af = "\u22C4", qf = "\u22C4", Of = "\u22C4", Df = "\u2666", Lf = "\u2666", Nf = "\xA8", Pf = "\u2146", kf = "\u03DD", Rf = "\u22F2", $f = "\xF7", Mf = "\xF7", If = "\u22C7", jf = "\u22C7", Bf = "\u0402", Uf = "\u0452", Hf = "\u231E", Vf = "\u230D", Ff = "$", zf = "\u{1D53B}", Gf = "\u{1D555}", Wf = "\xA8", Yf = "\u02D9", Jf = "\u20DC", Xf = "\u2250", Qf = "\u2251", Zf = "\u2250", Kf = "\u2238", th = "\u2214", eh = "\u22A1", sh = "\u2306", nh = "\u222F", rh = "\xA8", oh = "\u21D3", ih = "\u21D0", ch = "\u21D4", ah = "\u2AE4", lh = "\u27F8", uh = "\u27FA", fh = "\u27F9", hh = "\u21D2", ph = "\u22A8", dh = "\u21D1", gh = "\u21D5", mh = "\u2225", bh = "\u2913", yh = "\u2193", vh = "\u2193", wh = "\u21D3", xh = "\u21F5", Sh = "\u0311", _h = "\u21CA", Th = "\u21C3", Eh = "\u21C2", Ch = "\u2950", Ah = "\u295E", qh = "\u2956", Oh = "\u21BD", Dh = "\u295F", Lh = "\u2957", Nh = "\u21C1", Ph = "\u21A7", kh = "\u22A4", Rh = "\u2910", $h = "\u231F", Mh = "\u230C", Ih = "\u{1D49F}", jh = "\u{1D4B9}", Bh = "\u0405", Uh = "\u0455", Hh = "\u29F6", Vh = "\u0110", Fh = "\u0111", zh = "\u22F1", Gh = "\u25BF", Wh = "\u25BE", Yh = "\u21F5", Jh = "\u296F", Xh = "\u29A6", Qh = "\u040F", Zh = "\u045F", Kh = "\u27FF", tp = "\xC9", ep = "\xE9", sp = "\u2A6E", np = "\u011A", rp = "\u011B", op = "\xCA", ip = "\xEA", cp = "\u2256", ap = "\u2255", lp = "\u042D", up = "\u044D", fp = "\u2A77", hp = "\u0116", pp = "\u0117", dp = "\u2251", gp = "\u2147", mp = "\u2252", bp = "\u{1D508}", yp = "\u{1D522}", vp = "\u2A9A", wp = "\xC8", xp = "\xE8", Sp = "\u2A96", _p = "\u2A98", Tp = "\u2A99", Ep = "\u2208", Cp = "\u23E7", Ap = "\u2113", qp = "\u2A95", Op = "\u2A97", Dp = "\u0112", Lp = "\u0113", Np = "\u2205", Pp = "\u2205", kp = "\u25FB", Rp = "\u2205", $p = "\u25AB", Mp = "\u2004", Ip = "\u2005", jp = "\u2003", Bp = "\u014A", Up = "\u014B", Hp = "\u2002", Vp = "\u0118", Fp = "\u0119", zp = "\u{1D53C}", Gp = "\u{1D556}", Wp = "\u22D5", Yp = "\u29E3", Jp = "\u2A71", Xp = "\u03B5", Qp = "\u0395", Zp = "\u03B5", Kp = "\u03F5", td = "\u2256", ed = "\u2255", sd = "\u2242", nd = "\u2A96", rd = "\u2A95", od = "\u2A75", id = "=", cd = "\u2242", ad = "\u225F", ld = "\u21CC", ud = "\u2261", fd = "\u2A78", hd = "\u29E5", pd = "\u2971", dd = "\u2253", gd = "\u212F", md = "\u2130", bd = "\u2250", yd = "\u2A73", vd = "\u2242", wd = "\u0397", xd = "\u03B7", Sd = "\xD0", _d = "\xF0", Td = "\xCB", Ed = "\xEB", Cd = "\u20AC", Ad = "!", qd = "\u2203", Od = "\u2203", Dd = "\u2130", Ld = "\u2147", Nd = "\u2147", Pd = "\u2252", kd = "\u0424", Rd = "\u0444", $d = "\u2640", Md = "\uFB03", Id = "\uFB00", jd = "\uFB04", Bd = "\u{1D509}", Ud = "\u{1D523}", Hd = "\uFB01", Vd = "\u25FC", Fd = "\u25AA", zd = "fj", Gd = "\u266D", Wd = "\uFB02", Yd = "\u25B1", Jd = "\u0192", Xd = "\u{1D53D}", Qd = "\u{1D557}", Zd = "\u2200", Kd = "\u2200", tg = "\u22D4", eg = "\u2AD9", sg = "\u2131", ng = "\u2A0D", rg = "\xBD", og = "\u2153", ig = "\xBC", cg = "\u2155", ag = "\u2159", lg = "\u215B", ug = "\u2154", fg = "\u2156", hg = "\xBE", pg = "\u2157", dg = "\u215C", gg = "\u2158", mg = "\u215A", bg = "\u215D", yg = "\u215E", vg = "\u2044", wg = "\u2322", xg = "\u{1D4BB}", Sg = "\u2131", _g = "\u01F5", Tg = "\u0393", Eg = "\u03B3", Cg = "\u03DC", Ag = "\u03DD", qg = "\u2A86", Og = "\u011E", Dg = "\u011F", Lg = "\u0122", Ng = "\u011C", Pg = "\u011D", kg = "\u0413", Rg = "\u0433", $g = "\u0120", Mg = "\u0121", Ig = "\u2265", jg = "\u2267", Bg = "\u2A8C", Ug = "\u22DB", Hg = "\u2265", Vg = "\u2267", Fg = "\u2A7E", zg = "\u2AA9", Gg = "\u2A7E", Wg = "\u2A80", Yg = "\u2A82", Jg = "\u2A84", Xg = "\u22DB\uFE00", Qg = "\u2A94", Zg = "\u{1D50A}", Kg = "\u{1D524}", tm = "\u226B", em = "\u22D9", sm = "\u22D9", nm = "\u2137", rm = "\u0403", om = "\u0453", im = "\u2AA5", cm = "\u2277", am = "\u2A92", lm = "\u2AA4", um = "\u2A8A", fm = "\u2A8A", hm = "\u2A88", pm = "\u2269", dm = "\u2A88", gm = "\u2269", mm = "\u22E7", bm = "\u{1D53E}", ym = "\u{1D558}", vm = "`", wm = "\u2265", xm = "\u22DB", Sm = "\u2267", _m = "\u2AA2", Tm = "\u2277", Em = "\u2A7E", Cm = "\u2273", Am = "\u{1D4A2}", qm = "\u210A", Om = "\u2273", Dm = "\u2A8E", Lm = "\u2A90", Nm = "\u2AA7", Pm = "\u2A7A", km = ">", Rm = ">", $m = "\u226B", Mm = "\u22D7", Im = "\u2995", jm = "\u2A7C", Bm = "\u2A86", Um = "\u2978", Hm = "\u22D7", Vm = "\u22DB", Fm = "\u2A8C", zm = "\u2277", Gm = "\u2273", Wm = "\u2269\uFE00", Ym = "\u2269\uFE00", Jm = "\u02C7", Xm = "\u200A", Qm = "\xBD", Zm = "\u210B", Km = "\u042A", tb = "\u044A", eb = "\u2948", sb = "\u2194", nb = "\u21D4", rb = "\u21AD", ob = "^", ib = "\u210F", cb = "\u0124", ab = "\u0125", lb = "\u2665", ub = "\u2665", fb = "\u2026", hb = "\u22B9", pb = "\u{1D525}", db = "\u210C", gb = "\u210B", mb = "\u2925", bb = "\u2926", yb = "\u21FF", vb = "\u223B", wb = "\u21A9", xb = "\u21AA", Sb = "\u{1D559}", _b = "\u210D", Tb = "\u2015", Eb = "\u2500", Cb = "\u{1D4BD}", Ab = "\u210B", qb = "\u210F", Ob = "\u0126", Db = "\u0127", Lb = "\u224E", Nb = "\u224F", Pb = "\u2043", kb = "\u2010", Rb = "\xCD", $b = "\xED", Mb = "\u2063", Ib = "\xCE", jb = "\xEE", Bb = "\u0418", Ub = "\u0438", Hb = "\u0130", Vb = "\u0415", Fb = "\u0435", zb = "\xA1", Gb = "\u21D4", Wb = "\u{1D526}", Yb = "\u2111", Jb = "\xCC", Xb = "\xEC", Qb = "\u2148", Zb = "\u2A0C", Kb = "\u222D", ty = "\u29DC", ey = "\u2129", sy = "\u0132", ny = "\u0133", ry = "\u012A", oy = "\u012B", iy = "\u2111", cy = "\u2148", ay = "\u2110", ly = "\u2111", uy = "\u0131", fy = "\u2111", hy = "\u22B7", py = "\u01B5", dy = "\u21D2", gy = "\u2105", my = "\u221E", by = "\u29DD", yy = "\u0131", vy = "\u22BA", wy = "\u222B", xy = "\u222C", Sy = "\u2124", _y = "\u222B", Ty = "\u22BA", Ey = "\u22C2", Cy = "\u2A17", Ay = "\u2A3C", qy = "\u2063", Oy = "\u2062", Dy = "\u0401", Ly = "\u0451", Ny = "\u012E", Py = "\u012F", ky = "\u{1D540}", Ry = "\u{1D55A}", $y = "\u0399", My = "\u03B9", Iy = "\u2A3C", jy = "\xBF", By = "\u{1D4BE}", Uy = "\u2110", Hy = "\u2208", Vy = "\u22F5", Fy = "\u22F9", zy = "\u22F4", Gy = "\u22F3", Wy = "\u2208", Yy = "\u2062", Jy = "\u0128", Xy = "\u0129", Qy = "\u0406", Zy = "\u0456", Ky = "\xCF", tv = "\xEF", ev = "\u0134", sv = "\u0135", nv = "\u0419", rv = "\u0439", ov = "\u{1D50D}", iv = "\u{1D527}", cv = "\u0237", av = "\u{1D541}", lv = "\u{1D55B}", uv = "\u{1D4A5}", fv = "\u{1D4BF}", hv = "\u0408", pv = "\u0458", dv = "\u0404", gv = "\u0454", mv = "\u039A", bv = "\u03BA", yv = "\u03F0", vv = "\u0136", wv = "\u0137", xv = "\u041A", Sv = "\u043A", _v = "\u{1D50E}", Tv = "\u{1D528}", Ev = "\u0138", Cv = "\u0425", Av = "\u0445", qv = "\u040C", Ov = "\u045C", Dv = "\u{1D542}", Lv = "\u{1D55C}", Nv = "\u{1D4A6}", Pv = "\u{1D4C0}", kv = "\u21DA", Rv = "\u0139", $v = "\u013A", Mv = "\u29B4", Iv = "\u2112", jv = "\u039B", Bv = "\u03BB", Uv = "\u27E8", Hv = "\u27EA", Vv = "\u2991", Fv = "\u27E8", zv = "\u2A85", Gv = "\u2112", Wv = "\xAB", Yv = "\u21E4", Jv = "\u291F", Xv = "\u2190", Qv = "\u219E", Zv = "\u21D0", Kv = "\u291D", tw = "\u21A9", ew = "\u21AB", sw = "\u2939", nw = "\u2973", rw = "\u21A2", ow = "\u2919", iw = "\u291B", cw = "\u2AAB", aw = "\u2AAD", lw = "\u2AAD\uFE00", uw = "\u290C", fw = "\u290E", hw = "\u2772", pw = "{", dw = "[", gw = "\u298B", mw = "\u298F", bw = "\u298D", yw = "\u013D", vw = "\u013E", ww = "\u013B", xw = "\u013C", Sw = "\u2308", _w = "{", Tw = "\u041B", Ew = "\u043B", Cw = "\u2936", Aw = "\u201C", qw = "\u201E", Ow = "\u2967", Dw = "\u294B", Lw = "\u21B2", Nw = "\u2264", Pw = "\u2266", kw = "\u27E8", Rw = "\u21E4", $w = "\u2190", Mw = "\u2190", Iw = "\u21D0", jw = "\u21C6", Bw = "\u21A2", Uw = "\u2308", Hw = "\u27E6", Vw = "\u2961", Fw = "\u2959", zw = "\u21C3", Gw = "\u230A", Ww = "\u21BD", Yw = "\u21BC", Jw = "\u21C7", Xw = "\u2194", Qw = "\u2194", Zw = "\u21D4", Kw = "\u21C6", tx = "\u21CB", ex = "\u21AD", sx = "\u294E", nx = "\u21A4", rx = "\u22A3", ox = "\u295A", ix = "\u22CB", cx = "\u29CF", ax = "\u22B2", lx = "\u22B4", ux = "\u2951", fx = "\u2960", hx = "\u2958", px = "\u21BF", dx = "\u2952", gx = "\u21BC", mx = "\u2A8B", bx = "\u22DA", yx = "\u2264", vx = "\u2266", wx = "\u2A7D", xx = "\u2AA8", Sx = "\u2A7D", _x = "\u2A7F", Tx = "\u2A81", Ex = "\u2A83", Cx = "\u22DA\uFE00", Ax = "\u2A93", qx = "\u2A85", Ox = "\u22D6", Dx = "\u22DA", Lx = "\u2A8B", Nx = "\u22DA", Px = "\u2266", kx = "\u2276", Rx = "\u2276", $x = "\u2AA1", Mx = "\u2272", Ix = "\u2A7D", jx = "\u2272", Bx = "\u297C", Ux = "\u230A", Hx = "\u{1D50F}", Vx = "\u{1D529}", Fx = "\u2276", zx = "\u2A91", Gx = "\u2962", Wx = "\u21BD", Yx = "\u21BC", Jx = "\u296A", Xx = "\u2584", Qx = "\u0409", Zx = "\u0459", Kx = "\u21C7", t1 = "\u226A", e1 = "\u22D8", s1 = "\u231E", n1 = "\u21DA", r1 = "\u296B", o1 = "\u25FA", i1 = "\u013F", c1 = "\u0140", a1 = "\u23B0", l1 = "\u23B0", u1 = "\u2A89", f1 = "\u2A89", h1 = "\u2A87", p1 = "\u2268", d1 = "\u2A87", g1 = "\u2268", m1 = "\u22E6", b1 = "\u27EC", y1 = "\u21FD", v1 = "\u27E6", w1 = "\u27F5", x1 = "\u27F5", S1 = "\u27F8", _1 = "\u27F7", T1 = "\u27F7", E1 = "\u27FA", C1 = "\u27FC", A1 = "\u27F6", q1 = "\u27F6", O1 = "\u27F9", D1 = "\u21AB", L1 = "\u21AC", N1 = "\u2985", P1 = "\u{1D543}", k1 = "\u{1D55D}", R1 = "\u2A2D", $1 = "\u2A34", M1 = "\u2217", I1 = "_", j1 = "\u2199", B1 = "\u2198", U1 = "\u25CA", H1 = "\u25CA", V1 = "\u29EB", F1 = "(", z1 = "\u2993", G1 = "\u21C6", W1 = "\u231F", Y1 = "\u21CB", J1 = "\u296D", X1 = "\u200E", Q1 = "\u22BF", Z1 = "\u2039", K1 = "\u{1D4C1}", tS = "\u2112", eS = "\u21B0", sS = "\u21B0", nS = "\u2272", rS = "\u2A8D", oS = "\u2A8F", iS = "[", cS = "\u2018", aS = "\u201A", lS = "\u0141", uS = "\u0142", fS = "\u2AA6", hS = "\u2A79", pS = "<", dS = "<", gS = "\u226A", mS = "\u22D6", bS = "\u22CB", yS = "\u22C9", vS = "\u2976", wS = "\u2A7B", xS = "\u25C3", SS = "\u22B4", _S = "\u25C2", TS = "\u2996", ES = "\u294A", CS = "\u2966", AS = "\u2268\uFE00", qS = "\u2268\uFE00", OS = "\xAF", DS = "\u2642", LS = "\u2720", NS = "\u2720", PS = "\u21A6", kS = "\u21A6", RS = "\u21A7", $S = "\u21A4", MS = "\u21A5", IS = "\u25AE", jS = "\u2A29", BS = "\u041C", US = "\u043C", HS = "\u2014", VS = "\u223A", FS = "\u2221", zS = "\u205F", GS = "\u2133", WS = "\u{1D510}", YS = "\u{1D52A}", JS = "\u2127", XS = "\xB5", QS = "*", ZS = "\u2AF0", KS = "\u2223", t_ = "\xB7", e_ = "\u229F", s_ = "\u2212", n_ = "\u2238", r_ = "\u2A2A", o_ = "\u2213", i_ = "\u2ADB", c_ = "\u2026", a_ = "\u2213", l_ = "\u22A7", u_ = "\u{1D544}", f_ = "\u{1D55E}", h_ = "\u2213", p_ = "\u{1D4C2}", d_ = "\u2133", g_ = "\u223E", m_ = "\u039C", b_ = "\u03BC", y_ = "\u22B8", v_ = "\u22B8", w_ = "\u2207", x_ = "\u0143", S_ = "\u0144", __ = "\u2220\u20D2", T_ = "\u2249", E_ = "\u2A70\u0338", C_ = "\u224B\u0338", A_ = "\u0149", q_ = "\u2249", O_ = "\u266E", D_ = "\u2115", L_ = "\u266E", N_ = "\xA0", P_ = "\u224E\u0338", k_ = "\u224F\u0338", R_ = "\u2A43", $_ = "\u0147", M_ = "\u0148", I_ = "\u0145", j_ = "\u0146", B_ = "\u2247", U_ = "\u2A6D\u0338", H_ = "\u2A42", V_ = "\u041D", F_ = "\u043D", z_ = "\u2013", G_ = "\u2924", W_ = "\u2197", Y_ = "\u21D7", J_ = "\u2197", X_ = "\u2260", Q_ = "\u2250\u0338", Z_ = "\u200B", K_ = "\u200B", tT = "\u200B", eT = "\u200B", sT = "\u2262", nT = "\u2928", rT = "\u2242\u0338", oT = "\u226B", iT = "\u226A", cT = `
`, aT = "\u2204", lT = "\u2204", uT = "\u{1D511}", fT = "\u{1D52B}", hT = "\u2267\u0338", pT = "\u2271", dT = "\u2271", gT = "\u2267\u0338", mT = "\u2A7E\u0338", bT = "\u2A7E\u0338", yT = "\u22D9\u0338", vT = "\u2275", wT = "\u226B\u20D2", xT = "\u226F", ST = "\u226F", _T = "\u226B\u0338", TT = "\u21AE", ET = "\u21CE", CT = "\u2AF2", AT = "\u220B", qT = "\u22FC", OT = "\u22FA", DT = "\u220B", LT = "\u040A", NT = "\u045A", PT = "\u219A", kT = "\u21CD", RT = "\u2025", $T = "\u2266\u0338", MT = "\u2270", IT = "\u219A", jT = "\u21CD", BT = "\u21AE", UT = "\u21CE", HT = "\u2270", VT = "\u2266\u0338", FT = "\u2A7D\u0338", zT = "\u2A7D\u0338", GT = "\u226E", WT = "\u22D8\u0338", YT = "\u2274", JT = "\u226A\u20D2", XT = "\u226E", QT = "\u22EA", ZT = "\u22EC", KT = "\u226A\u0338", tE = "\u2224", eE = "\u2060", sE = "\xA0", nE = "\u{1D55F}", rE = "\u2115", oE = "\u2AEC", iE = "\xAC", cE = "\u2262", aE = "\u226D", lE = "\u2226", uE = "\u2209", fE = "\u2260", hE = "\u2242\u0338", pE = "\u2204", dE = "\u226F", gE = "\u2271", mE = "\u2267\u0338", bE = "\u226B\u0338", yE = "\u2279", vE = "\u2A7E\u0338", wE = "\u2275", xE = "\u224E\u0338", SE = "\u224F\u0338", _E = "\u2209", TE = "\u22F5\u0338", EE = "\u22F9\u0338", CE = "\u2209", AE = "\u22F7", qE = "\u22F6", OE = "\u29CF\u0338", DE = "\u22EA", LE = "\u22EC", NE = "\u226E", PE = "\u2270", kE = "\u2278", RE = "\u226A\u0338", $E = "\u2A7D\u0338", ME = "\u2274", IE = "\u2AA2\u0338", jE = "\u2AA1\u0338", BE = "\u220C", UE = "\u220C", HE = "\u22FE", VE = "\u22FD", FE = "\u2280", zE = "\u2AAF\u0338", GE = "\u22E0", WE = "\u220C", YE = "\u29D0\u0338", JE = "\u22EB", XE = "\u22ED", QE = "\u228F\u0338", ZE = "\u22E2", KE = "\u2290\u0338", tC = "\u22E3", eC = "\u2282\u20D2", sC = "\u2288", nC = "\u2281", rC = "\u2AB0\u0338", oC = "\u22E1", iC = "\u227F\u0338", cC = "\u2283\u20D2", aC = "\u2289", lC = "\u2241", uC = "\u2244", fC = "\u2247", hC = "\u2249", pC = "\u2224", dC = "\u2226", gC = "\u2226", mC = "\u2AFD\u20E5", bC = "\u2202\u0338", yC = "\u2A14", vC = "\u2280", wC = "\u22E0", xC = "\u2280", SC = "\u2AAF\u0338", _C = "\u2AAF\u0338", TC = "\u2933\u0338", EC = "\u219B", CC = "\u21CF", AC = "\u219D\u0338", qC = "\u219B", OC = "\u21CF", DC = "\u22EB", LC = "\u22ED", NC = "\u2281", PC = "\u22E1", kC = "\u2AB0\u0338", RC = "\u{1D4A9}", $C = "\u{1D4C3}", MC = "\u2224", IC = "\u2226", jC = "\u2241", BC = "\u2244", UC = "\u2244", HC = "\u2224", VC = "\u2226", FC = "\u22E2", zC = "\u22E3", GC = "\u2284", WC = "\u2AC5\u0338", YC = "\u2288", JC = "\u2282\u20D2", XC = "\u2288", QC = "\u2AC5\u0338", ZC = "\u2281", KC = "\u2AB0\u0338", t0 = "\u2285", e0 = "\u2AC6\u0338", s0 = "\u2289", n0 = "\u2283\u20D2", r0 = "\u2289", o0 = "\u2AC6\u0338", i0 = "\u2279", c0 = "\xD1", a0 = "\xF1", l0 = "\u2278", u0 = "\u22EA", f0 = "\u22EC", h0 = "\u22EB", p0 = "\u22ED", d0 = "\u039D", g0 = "\u03BD", m0 = "#", b0 = "\u2116", y0 = "\u2007", v0 = "\u224D\u20D2", w0 = "\u22AC", x0 = "\u22AD", S0 = "\u22AE", _0 = "\u22AF", T0 = "\u2265\u20D2", E0 = ">\u20D2", C0 = "\u2904", A0 = "\u29DE", q0 = "\u2902", O0 = "\u2264\u20D2", D0 = "<\u20D2", L0 = "\u22B4\u20D2", N0 = "\u2903", P0 = "\u22B5\u20D2", k0 = "\u223C\u20D2", R0 = "\u2923", $0 = "\u2196", M0 = "\u21D6", I0 = "\u2196", j0 = "\u2927", B0 = "\xD3", U0 = "\xF3", H0 = "\u229B", V0 = "\xD4", F0 = "\xF4", z0 = "\u229A", G0 = "\u041E", W0 = "\u043E", Y0 = "\u229D", J0 = "\u0150", X0 = "\u0151", Q0 = "\u2A38", Z0 = "\u2299", K0 = "\u29BC", tA = "\u0152", eA = "\u0153", sA = "\u29BF", nA = "\u{1D512}", rA = "\u{1D52C}", oA = "\u02DB", iA = "\xD2", cA = "\xF2", aA = "\u29C1", lA = "\u29B5", uA = "\u03A9", fA = "\u222E", hA = "\u21BA", pA = "\u29BE", dA = "\u29BB", gA = "\u203E", mA = "\u29C0", bA = "\u014C", yA = "\u014D", vA = "\u03A9", wA = "\u03C9", xA = "\u039F", SA = "\u03BF", _A = "\u29B6", TA = "\u2296", EA = "\u{1D546}", CA = "\u{1D560}", AA = "\u29B7", qA = "\u201C", OA = "\u2018", DA = "\u29B9", LA = "\u2295", NA = "\u21BB", PA = "\u2A54", kA = "\u2228", RA = "\u2A5D", $A = "\u2134", MA = "\u2134", IA = "\xAA", jA = "\xBA", BA = "\u22B6", UA = "\u2A56", HA = "\u2A57", VA = "\u2A5B", FA = "\u24C8", zA = "\u{1D4AA}", GA = "\u2134", WA = "\xD8", YA = "\xF8", JA = "\u2298", XA = "\xD5", QA = "\xF5", ZA = "\u2A36", KA = "\u2A37", tq = "\u2297", eq = "\xD6", sq = "\xF6", nq = "\u233D", rq = "\u203E", oq = "\u23DE", iq = "\u23B4", cq = "\u23DC", aq = "\xB6", lq = "\u2225", uq = "\u2225", fq = "\u2AF3", hq = "\u2AFD", pq = "\u2202", dq = "\u2202", gq = "\u041F", mq = "\u043F", bq = "%", yq = ".", vq = "\u2030", wq = "\u22A5", xq = "\u2031", Sq = "\u{1D513}", _q = "\u{1D52D}", Tq = "\u03A6", Eq = "\u03C6", Cq = "\u03D5", Aq = "\u2133", qq = "\u260E", Oq = "\u03A0", Dq = "\u03C0", Lq = "\u22D4", Nq = "\u03D6", Pq = "\u210F", kq = "\u210E", Rq = "\u210F", $q = "\u2A23", Mq = "\u229E", Iq = "\u2A22", jq = "+", Bq = "\u2214", Uq = "\u2A25", Hq = "\u2A72", Vq = "\xB1", Fq = "\xB1", zq = "\u2A26", Gq = "\u2A27", Wq = "\xB1", Yq = "\u210C", Jq = "\u2A15", Xq = "\u{1D561}", Qq = "\u2119", Zq = "\xA3", Kq = "\u2AB7", tO = "\u2ABB", eO = "\u227A", sO = "\u227C", nO = "\u2AB7", rO = "\u227A", oO = "\u227C", iO = "\u227A", cO = "\u2AAF", aO = "\u227C", lO = "\u227E", uO = "\u2AAF", fO = "\u2AB9", hO = "\u2AB5", pO = "\u22E8", dO = "\u2AAF", gO = "\u2AB3", mO = "\u227E", bO = "\u2032", yO = "\u2033", vO = "\u2119", wO = "\u2AB9", xO = "\u2AB5", SO = "\u22E8", _O = "\u220F", TO = "\u220F", EO = "\u232E", CO = "\u2312", AO = "\u2313", qO = "\u221D", OO = "\u221D", DO = "\u2237", LO = "\u221D", NO = "\u227E", PO = "\u22B0", kO = "\u{1D4AB}", RO = "\u{1D4C5}", $O = "\u03A8", MO = "\u03C8", IO = "\u2008", jO = "\u{1D514}", BO = "\u{1D52E}", UO = "\u2A0C", HO = "\u{1D562}", VO = "\u211A", FO = "\u2057", zO = "\u{1D4AC}", GO = "\u{1D4C6}", WO = "\u210D", YO = "\u2A16", JO = "?", XO = "\u225F", QO = '"', ZO = '"', KO = "\u21DB", tD = "\u223D\u0331", eD = "\u0154", sD = "\u0155", nD = "\u221A", rD = "\u29B3", oD = "\u27E9", iD = "\u27EB", cD = "\u2992", aD = "\u29A5", lD = "\u27E9", uD = "\xBB", fD = "\u2975", hD = "\u21E5", pD = "\u2920", dD = "\u2933", gD = "\u2192", mD = "\u21A0", bD = "\u21D2", yD = "\u291E", vD = "\u21AA", wD = "\u21AC", xD = "\u2945", SD = "\u2974", _D = "\u2916", TD = "\u21A3", ED = "\u219D", CD = "\u291A", AD = "\u291C", qD = "\u2236", OD = "\u211A", DD = "\u290D", LD = "\u290F", ND = "\u2910", PD = "\u2773", kD = "}", RD = "]", $D = "\u298C", MD = "\u298E", ID = "\u2990", jD = "\u0158", BD = "\u0159", UD = "\u0156", HD = "\u0157", VD = "\u2309", FD = "}", zD = "\u0420", GD = "\u0440", WD = "\u2937", YD = "\u2969", JD = "\u201D", XD = "\u201D", QD = "\u21B3", ZD = "\u211C", KD = "\u211B", tL = "\u211C", eL = "\u211D", sL = "\u211C", nL = "\u25AD", rL = "\xAE", oL = "\xAE", iL = "\u220B", cL = "\u21CB", aL = "\u296F", lL = "\u297D", uL = "\u230B", fL = "\u{1D52F}", hL = "\u211C", pL = "\u2964", dL = "\u21C1", gL = "\u21C0", mL = "\u296C", bL = "\u03A1", yL = "\u03C1", vL = "\u03F1", wL = "\u27E9", xL = "\u21E5", SL = "\u2192", _L = "\u2192", TL = "\u21D2", EL = "\u21C4", CL = "\u21A3", AL = "\u2309", qL = "\u27E7", OL = "\u295D", DL = "\u2955", LL = "\u21C2", NL = "\u230B", PL = "\u21C1", kL = "\u21C0", RL = "\u21C4", $L = "\u21CC", ML = "\u21C9", IL = "\u219D", jL = "\u21A6", BL = "\u22A2", UL = "\u295B", HL = "\u22CC", VL = "\u29D0", FL = "\u22B3", zL = "\u22B5", GL = "\u294F", WL = "\u295C", YL = "\u2954", JL = "\u21BE", XL = "\u2953", QL = "\u21C0", ZL = "\u02DA", KL = "\u2253", tN = "\u21C4", eN = "\u21CC", sN = "\u200F", nN = "\u23B1", rN = "\u23B1", oN = "\u2AEE", iN = "\u27ED", cN = "\u21FE", aN = "\u27E7", lN = "\u2986", uN = "\u{1D563}", fN = "\u211D", hN = "\u2A2E", pN = "\u2A35", dN = "\u2970", gN = ")", mN = "\u2994", bN = "\u2A12", yN = "\u21C9", vN = "\u21DB", wN = "\u203A", xN = "\u{1D4C7}", SN = "\u211B", _N = "\u21B1", TN = "\u21B1", EN = "]", CN = "\u2019", AN = "\u2019", qN = "\u22CC", ON = "\u22CA", DN = "\u25B9", LN = "\u22B5", NN = "\u25B8", PN = "\u29CE", kN = "\u29F4", RN = "\u2968", $N = "\u211E", MN = "\u015A", IN = "\u015B", jN = "\u201A", BN = "\u2AB8", UN = "\u0160", HN = "\u0161", VN = "\u2ABC", FN = "\u227B", zN = "\u227D", GN = "\u2AB0", WN = "\u2AB4", YN = "\u015E", JN = "\u015F", XN = "\u015C", QN = "\u015D", ZN = "\u2ABA", KN = "\u2AB6", tP = "\u22E9", eP = "\u2A13", sP = "\u227F", nP = "\u0421", rP = "\u0441", oP = "\u22A1", iP = "\u22C5", cP = "\u2A66", aP = "\u2925", lP = "\u2198", uP = "\u21D8", fP = "\u2198", hP = "\xA7", pP = ";", dP = "\u2929", gP = "\u2216", mP = "\u2216", bP = "\u2736", yP = "\u{1D516}", vP = "\u{1D530}", wP = "\u2322", xP = "\u266F", SP = "\u0429", _P = "\u0449", TP = "\u0428", EP = "\u0448", CP = "\u2193", AP = "\u2190", qP = "\u2223", OP = "\u2225", DP = "\u2192", LP = "\u2191", NP = "\xAD", PP = "\u03A3", kP = "\u03C3", RP = "\u03C2", $P = "\u03C2", MP = "\u223C", IP = "\u2A6A", jP = "\u2243", BP = "\u2243", UP = "\u2A9E", HP = "\u2AA0", VP = "\u2A9D", FP = "\u2A9F", zP = "\u2246", GP = "\u2A24", WP = "\u2972", YP = "\u2190", JP = "\u2218", XP = "\u2216", QP = "\u2A33", ZP = "\u29E4", KP = "\u2223", tk = "\u2323", ek = "\u2AAA", sk = "\u2AAC", nk = "\u2AAC\uFE00", rk = "\u042C", ok = "\u044C", ik = "\u233F", ck = "\u29C4", ak = "/", lk = "\u{1D54A}", uk = "\u{1D564}", fk = "\u2660", hk = "\u2660", pk = "\u2225", dk = "\u2293", gk = "\u2293\uFE00", mk = "\u2294", bk = "\u2294\uFE00", yk = "\u221A", vk = "\u228F", wk = "\u2291", xk = "\u228F", Sk = "\u2291", _k = "\u2290", Tk = "\u2292", Ek = "\u2290", Ck = "\u2292", Ak = "\u25A1", qk = "\u25A1", Ok = "\u2293", Dk = "\u228F", Lk = "\u2291", Nk = "\u2290", Pk = "\u2292", kk = "\u2294", Rk = "\u25AA", $k = "\u25A1", Mk = "\u25AA", Ik = "\u2192", jk = "\u{1D4AE}", Bk = "\u{1D4C8}", Uk = "\u2216", Hk = "\u2323", Vk = "\u22C6", Fk = "\u22C6", zk = "\u2606", Gk = "\u2605", Wk = "\u03F5", Yk = "\u03D5", Jk = "\xAF", Xk = "\u2282", Qk = "\u22D0", Zk = "\u2ABD", Kk = "\u2AC5", tR = "\u2286", eR = "\u2AC3", sR = "\u2AC1", nR = "\u2ACB", rR = "\u228A", oR = "\u2ABF", iR = "\u2979", cR = "\u2282", aR = "\u22D0", lR = "\u2286", uR = "\u2AC5", fR = "\u2286", hR = "\u228A", pR = "\u2ACB", dR = "\u2AC7", gR = "\u2AD5", mR = "\u2AD3", bR = "\u2AB8", yR = "\u227B", vR = "\u227D", wR = "\u227B", xR = "\u2AB0", SR = "\u227D", _R = "\u227F", TR = "\u2AB0", ER = "\u2ABA", CR = "\u2AB6", AR = "\u22E9", qR = "\u227F", OR = "\u220B", DR = "\u2211", LR = "\u2211", NR = "\u266A", PR = "\xB9", kR = "\xB2", RR = "\xB3", $R = "\u2283", MR = "\u22D1", IR = "\u2ABE", jR = "\u2AD8", BR = "\u2AC6", UR = "\u2287", HR = "\u2AC4", VR = "\u2283", FR = "\u2287", zR = "\u27C9", GR = "\u2AD7", WR = "\u297B", YR = "\u2AC2", JR = "\u2ACC", XR = "\u228B", QR = "\u2AC0", ZR = "\u2283", KR = "\u22D1", t$ = "\u2287", e$ = "\u2AC6", s$ = "\u228B", n$ = "\u2ACC", r$ = "\u2AC8", o$ = "\u2AD4", i$ = "\u2AD6", c$ = "\u2926", a$ = "\u2199", l$ = "\u21D9", u$ = "\u2199", f$ = "\u292A", h$ = "\xDF", p$ = "	", d$ = "\u2316", g$ = "\u03A4", m$ = "\u03C4", b$ = "\u23B4", y$ = "\u0164", v$ = "\u0165", w$ = "\u0162", x$ = "\u0163", S$ = "\u0422", _$ = "\u0442", T$ = "\u20DB", E$ = "\u2315", C$ = "\u{1D517}", A$ = "\u{1D531}", q$ = "\u2234", O$ = "\u2234", D$ = "\u2234", L$ = "\u0398", N$ = "\u03B8", P$ = "\u03D1", k$ = "\u03D1", R$ = "\u2248", $$ = "\u223C", M$ = "\u205F\u200A", I$ = "\u2009", j$ = "\u2009", B$ = "\u2248", U$ = "\u223C", H$ = "\xDE", V$ = "\xFE", F$ = "\u02DC", z$ = "\u223C", G$ = "\u2243", W$ = "\u2245", Y$ = "\u2248", J$ = "\u2A31", X$ = "\u22A0", Q$ = "\xD7", Z$ = "\u2A30", K$ = "\u222D", tM = "\u2928", eM = "\u2336", sM = "\u2AF1", nM = "\u22A4", rM = "\u{1D54B}", oM = "\u{1D565}", iM = "\u2ADA", cM = "\u2929", aM = "\u2034", lM = "\u2122", uM = "\u2122", fM = "\u25B5", hM = "\u25BF", pM = "\u25C3", dM = "\u22B4", gM = "\u225C", mM = "\u25B9", bM = "\u22B5", yM = "\u25EC", vM = "\u225C", wM = "\u2A3A", xM = "\u20DB", SM = "\u2A39", _M = "\u29CD", TM = "\u2A3B", EM = "\u23E2", CM = "\u{1D4AF}", AM = "\u{1D4C9}", qM = "\u0426", OM = "\u0446", DM = "\u040B", LM = "\u045B", NM = "\u0166", PM = "\u0167", kM = "\u226C", RM = "\u219E", $M = "\u21A0", MM = "\xDA", IM = "\xFA", jM = "\u2191", BM = "\u219F", UM = "\u21D1", HM = "\u2949", VM = "\u040E", FM = "\u045E", zM = "\u016C", GM = "\u016D", WM = "\xDB", YM = "\xFB", JM = "\u0423", XM = "\u0443", QM = "\u21C5", ZM = "\u0170", KM = "\u0171", tI = "\u296E", eI = "\u297E", sI = "\u{1D518}", nI = "\u{1D532}", rI = "\xD9", oI = "\xF9", iI = "\u2963", cI = "\u21BF", aI = "\u21BE", lI = "\u2580", uI = "\u231C", fI = "\u231C", hI = "\u230F", pI = "\u25F8", dI = "\u016A", gI = "\u016B", mI = "\xA8", bI = "_", yI = "\u23DF", vI = "\u23B5", wI = "\u23DD", xI = "\u22C3", SI = "\u228E", _I = "\u0172", TI = "\u0173", EI = "\u{1D54C}", CI = "\u{1D566}", AI = "\u2912", qI = "\u2191", OI = "\u2191", DI = "\u21D1", LI = "\u21C5", NI = "\u2195", PI = "\u2195", kI = "\u21D5", RI = "\u296E", $I = "\u21BF", MI = "\u21BE", II = "\u228E", jI = "\u2196", BI = "\u2197", UI = "\u03C5", HI = "\u03D2", VI = "\u03D2", FI = "\u03A5", zI = "\u03C5", GI = "\u21A5", WI = "\u22A5", YI = "\u21C8", JI = "\u231D", XI = "\u231D", QI = "\u230E", ZI = "\u016E", KI = "\u016F", tj = "\u25F9", ej = "\u{1D4B0}", sj = "\u{1D4CA}", nj = "\u22F0", rj = "\u0168", oj = "\u0169", ij = "\u25B5", cj = "\u25B4", aj = "\u21C8", lj = "\xDC", uj = "\xFC", fj = "\u29A7", hj = "\u299C", pj = "\u03F5", dj = "\u03F0", gj = "\u2205", mj = "\u03D5", bj = "\u03D6", yj = "\u221D", vj = "\u2195", wj = "\u21D5", xj = "\u03F1", Sj = "\u03C2", _j = "\u228A\uFE00", Tj = "\u2ACB\uFE00", Ej = "\u228B\uFE00", Cj = "\u2ACC\uFE00", Aj = "\u03D1", qj = "\u22B2", Oj = "\u22B3", Dj = "\u2AE8", Lj = "\u2AEB", Nj = "\u2AE9", Pj = "\u0412", kj = "\u0432", Rj = "\u22A2", $j = "\u22A8", Mj = "\u22A9", Ij = "\u22AB", jj = "\u2AE6", Bj = "\u22BB", Uj = "\u2228", Hj = "\u22C1", Vj = "\u225A", Fj = "\u22EE", zj = "|", Gj = "\u2016", Wj = "|", Yj = "\u2016", Jj = "\u2223", Xj = "|", Qj = "\u2758", Zj = "\u2240", Kj = "\u200A", tB = "\u{1D519}", eB = "\u{1D533}", sB = "\u22B2", nB = "\u2282\u20D2", rB = "\u2283\u20D2", oB = "\u{1D54D}", iB = "\u{1D567}", cB = "\u221D", aB = "\u22B3", lB = "\u{1D4B1}", uB = "\u{1D4CB}", fB = "\u2ACB\uFE00", hB = "\u228A\uFE00", pB = "\u2ACC\uFE00", dB = "\u228B\uFE00", gB = "\u22AA", mB = "\u299A", bB = "\u0174", yB = "\u0175", vB = "\u2A5F", wB = "\u2227", xB = "\u22C0", SB = "\u2259", _B = "\u2118", TB = "\u{1D51A}", EB = "\u{1D534}", CB = "\u{1D54E}", AB = "\u{1D568}", qB = "\u2118", OB = "\u2240", DB = "\u2240", LB = "\u{1D4B2}", NB = "\u{1D4CC}", PB = "\u22C2", kB = "\u25EF", RB = "\u22C3", $B = "\u25BD", MB = "\u{1D51B}", IB = "\u{1D535}", jB = "\u27F7", BB = "\u27FA", UB = "\u039E", HB = "\u03BE", VB = "\u27F5", FB = "\u27F8", zB = "\u27FC", GB = "\u22FB", WB = "\u2A00", YB = "\u{1D54F}", JB = "\u{1D569}", XB = "\u2A01", QB = "\u2A02", ZB = "\u27F6", KB = "\u27F9", tU = "\u{1D4B3}", eU = "\u{1D4CD}", sU = "\u2A06", nU = "\u2A04", rU = "\u25B3", oU = "\u22C1", iU = "\u22C0", cU = "\xDD", aU = "\xFD", lU = "\u042F", uU = "\u044F", fU = "\u0176", hU = "\u0177", pU = "\u042B", dU = "\u044B", gU = "\xA5", mU = "\u{1D51C}", bU = "\u{1D536}", yU = "\u0407", vU = "\u0457", wU = "\u{1D550}", xU = "\u{1D56A}", SU = "\u{1D4B4}", _U = "\u{1D4CE}", TU = "\u042E", EU = "\u044E", CU = "\xFF", AU = "\u0178", qU = "\u0179", OU = "\u017A", DU = "\u017D", LU = "\u017E", NU = "\u0417", PU = "\u0437", kU = "\u017B", RU = "\u017C", $U = "\u2128", MU = "\u200B", IU = "\u0396", jU = "\u03B6", BU = "\u{1D537}", UU = "\u2128", HU = "\u0416", VU = "\u0436", FU = "\u21DD", zU = "\u{1D56B}", GU = "\u2124", WU = "\u{1D4B5}", YU = "\u{1D4CF}", JU = "\u200D", XU = "\u200C", Ze = {
  Aacute: Nr,
  aacute: Pr,
  Abreve: kr,
  abreve: Rr,
  ac: $r,
  acd: Mr,
  acE: Ir,
  Acirc: jr,
  acirc: Br,
  acute: Ur,
  Acy: Hr,
  acy: Vr,
  AElig: Fr,
  aelig: zr,
  af: Gr,
  Afr: Wr,
  afr: Yr,
  Agrave: Jr,
  agrave: Xr,
  alefsym: Qr,
  aleph: Zr,
  Alpha: Kr,
  alpha: to,
  Amacr: eo,
  amacr: so,
  amalg: no,
  amp: ro,
  AMP: oo,
  andand: io,
  And: co,
  and: ao,
  andd: lo,
  andslope: uo,
  andv: fo,
  ang: ho,
  ange: po,
  angle: go,
  angmsdaa: mo,
  angmsdab: bo,
  angmsdac: yo,
  angmsdad: vo,
  angmsdae: wo,
  angmsdaf: xo,
  angmsdag: So,
  angmsdah: _o,
  angmsd: To,
  angrt: Eo,
  angrtvb: Co,
  angrtvbd: Ao,
  angsph: qo,
  angst: Oo,
  angzarr: Do,
  Aogon: Lo,
  aogon: No,
  Aopf: Po,
  aopf: ko,
  apacir: Ro,
  ap: $o,
  apE: Mo,
  ape: Io,
  apid: jo,
  apos: Bo,
  ApplyFunction: Uo,
  approx: Ho,
  approxeq: Vo,
  Aring: Fo,
  aring: zo,
  Ascr: Go,
  ascr: Wo,
  Assign: Yo,
  ast: Jo,
  asymp: Xo,
  asympeq: Qo,
  Atilde: Zo,
  atilde: Ko,
  Auml: ti,
  auml: ei,
  awconint: si,
  awint: ni,
  backcong: ri,
  backepsilon: oi,
  backprime: ii,
  backsim: ci,
  backsimeq: ai,
  Backslash: li,
  Barv: ui,
  barvee: fi,
  barwed: hi,
  Barwed: pi,
  barwedge: di,
  bbrk: gi,
  bbrktbrk: mi,
  bcong: bi,
  Bcy: yi,
  bcy: vi,
  bdquo: wi,
  becaus: xi,
  because: Si,
  Because: _i,
  bemptyv: Ti,
  bepsi: Ei,
  bernou: Ci,
  Bernoullis: Ai,
  Beta: qi,
  beta: Oi,
  beth: Di,
  between: Li,
  Bfr: Ni,
  bfr: Pi,
  bigcap: ki,
  bigcirc: Ri,
  bigcup: $i,
  bigodot: Mi,
  bigoplus: Ii,
  bigotimes: ji,
  bigsqcup: Bi,
  bigstar: Ui,
  bigtriangledown: Hi,
  bigtriangleup: Vi,
  biguplus: Fi,
  bigvee: zi,
  bigwedge: Gi,
  bkarow: Wi,
  blacklozenge: Yi,
  blacksquare: Ji,
  blacktriangle: Xi,
  blacktriangledown: Qi,
  blacktriangleleft: Zi,
  blacktriangleright: Ki,
  blank: tc,
  blk12: ec,
  blk14: sc,
  blk34: nc,
  block: rc,
  bne: oc,
  bnequiv: ic,
  bNot: cc,
  bnot: ac,
  Bopf: lc,
  bopf: uc,
  bot: fc,
  bottom: hc,
  bowtie: pc,
  boxbox: dc,
  boxdl: gc,
  boxdL: mc,
  boxDl: bc,
  boxDL: yc,
  boxdr: vc,
  boxdR: wc,
  boxDr: xc,
  boxDR: Sc,
  boxh: _c,
  boxH: Tc,
  boxhd: Ec,
  boxHd: Cc,
  boxhD: Ac,
  boxHD: qc,
  boxhu: Oc,
  boxHu: Dc,
  boxhU: Lc,
  boxHU: Nc,
  boxminus: Pc,
  boxplus: kc,
  boxtimes: Rc,
  boxul: $c,
  boxuL: Mc,
  boxUl: Ic,
  boxUL: jc,
  boxur: Bc,
  boxuR: Uc,
  boxUr: Hc,
  boxUR: Vc,
  boxv: Fc,
  boxV: zc,
  boxvh: Gc,
  boxvH: Wc,
  boxVh: Yc,
  boxVH: Jc,
  boxvl: Xc,
  boxvL: Qc,
  boxVl: Zc,
  boxVL: Kc,
  boxvr: ta,
  boxvR: ea,
  boxVr: sa,
  boxVR: na,
  bprime: ra,
  breve: oa,
  Breve: ia,
  brvbar: ca,
  bscr: aa,
  Bscr: la,
  bsemi: ua,
  bsim: fa,
  bsime: ha,
  bsolb: pa,
  bsol: da,
  bsolhsub: ga,
  bull: ma,
  bullet: ba,
  bump: ya,
  bumpE: va,
  bumpe: wa,
  Bumpeq: xa,
  bumpeq: Sa,
  Cacute: _a,
  cacute: Ta,
  capand: Ea,
  capbrcup: Ca,
  capcap: Aa,
  cap: qa,
  Cap: Oa,
  capcup: Da,
  capdot: La,
  CapitalDifferentialD: Na,
  caps: Pa,
  caret: ka,
  caron: Ra,
  Cayleys: $a,
  ccaps: Ma,
  Ccaron: Ia,
  ccaron: ja,
  Ccedil: Ba,
  ccedil: Ua,
  Ccirc: Ha,
  ccirc: Va,
  Cconint: Fa,
  ccups: za,
  ccupssm: Ga,
  Cdot: Wa,
  cdot: Ya,
  cedil: Ja,
  Cedilla: Xa,
  cemptyv: Qa,
  cent: Za,
  centerdot: Ka,
  CenterDot: tl,
  cfr: el,
  Cfr: sl,
  CHcy: nl,
  chcy: rl,
  check: ol,
  checkmark: il,
  Chi: cl,
  chi: al,
  circ: ll,
  circeq: ul,
  circlearrowleft: fl,
  circlearrowright: hl,
  circledast: pl,
  circledcirc: dl,
  circleddash: gl,
  CircleDot: ml,
  circledR: bl,
  circledS: yl,
  CircleMinus: vl,
  CirclePlus: wl,
  CircleTimes: xl,
  cir: Sl,
  cirE: _l,
  cire: Tl,
  cirfnint: El,
  cirmid: Cl,
  cirscir: Al,
  ClockwiseContourIntegral: ql,
  CloseCurlyDoubleQuote: Ol,
  CloseCurlyQuote: Dl,
  clubs: Ll,
  clubsuit: Nl,
  colon: Pl,
  Colon: kl,
  Colone: Rl,
  colone: $l,
  coloneq: Ml,
  comma: Il,
  commat: jl,
  comp: Bl,
  compfn: Ul,
  complement: Hl,
  complexes: Vl,
  cong: Fl,
  congdot: zl,
  Congruent: Gl,
  conint: Wl,
  Conint: Yl,
  ContourIntegral: Jl,
  copf: Xl,
  Copf: Ql,
  coprod: Zl,
  Coproduct: Kl,
  copy: tu,
  COPY: eu,
  copysr: su,
  CounterClockwiseContourIntegral: nu,
  crarr: ru,
  cross: ou,
  Cross: iu,
  Cscr: cu,
  cscr: au,
  csub: lu,
  csube: uu,
  csup: fu,
  csupe: hu,
  ctdot: pu,
  cudarrl: du,
  cudarrr: gu,
  cuepr: mu,
  cuesc: bu,
  cularr: yu,
  cularrp: vu,
  cupbrcap: wu,
  cupcap: xu,
  CupCap: Su,
  cup: _u,
  Cup: Tu,
  cupcup: Eu,
  cupdot: Cu,
  cupor: Au,
  cups: qu,
  curarr: Ou,
  curarrm: Du,
  curlyeqprec: Lu,
  curlyeqsucc: Nu,
  curlyvee: Pu,
  curlywedge: ku,
  curren: Ru,
  curvearrowleft: $u,
  curvearrowright: Mu,
  cuvee: Iu,
  cuwed: ju,
  cwconint: Bu,
  cwint: Uu,
  cylcty: Hu,
  dagger: Vu,
  Dagger: Fu,
  daleth: zu,
  darr: Gu,
  Darr: Wu,
  dArr: Yu,
  dash: Ju,
  Dashv: Xu,
  dashv: Qu,
  dbkarow: Zu,
  dblac: Ku,
  Dcaron: tf,
  dcaron: ef,
  Dcy: sf,
  dcy: nf,
  ddagger: rf,
  ddarr: of,
  DD: cf,
  dd: af,
  DDotrahd: lf,
  ddotseq: uf,
  deg: ff,
  Del: hf,
  Delta: pf,
  delta: df,
  demptyv: gf,
  dfisht: mf,
  Dfr: bf,
  dfr: yf,
  dHar: vf,
  dharl: wf,
  dharr: xf,
  DiacriticalAcute: Sf,
  DiacriticalDot: _f,
  DiacriticalDoubleAcute: Tf,
  DiacriticalGrave: Ef,
  DiacriticalTilde: Cf,
  diam: Af,
  diamond: qf,
  Diamond: Of,
  diamondsuit: Df,
  diams: Lf,
  die: Nf,
  DifferentialD: Pf,
  digamma: kf,
  disin: Rf,
  div: $f,
  divide: Mf,
  divideontimes: If,
  divonx: jf,
  DJcy: Bf,
  djcy: Uf,
  dlcorn: Hf,
  dlcrop: Vf,
  dollar: Ff,
  Dopf: zf,
  dopf: Gf,
  Dot: Wf,
  dot: Yf,
  DotDot: Jf,
  doteq: Xf,
  doteqdot: Qf,
  DotEqual: Zf,
  dotminus: Kf,
  dotplus: th,
  dotsquare: eh,
  doublebarwedge: sh,
  DoubleContourIntegral: nh,
  DoubleDot: rh,
  DoubleDownArrow: oh,
  DoubleLeftArrow: ih,
  DoubleLeftRightArrow: ch,
  DoubleLeftTee: ah,
  DoubleLongLeftArrow: lh,
  DoubleLongLeftRightArrow: uh,
  DoubleLongRightArrow: fh,
  DoubleRightArrow: hh,
  DoubleRightTee: ph,
  DoubleUpArrow: dh,
  DoubleUpDownArrow: gh,
  DoubleVerticalBar: mh,
  DownArrowBar: bh,
  downarrow: yh,
  DownArrow: vh,
  Downarrow: wh,
  DownArrowUpArrow: xh,
  DownBreve: Sh,
  downdownarrows: _h,
  downharpoonleft: Th,
  downharpoonright: Eh,
  DownLeftRightVector: Ch,
  DownLeftTeeVector: Ah,
  DownLeftVectorBar: qh,
  DownLeftVector: Oh,
  DownRightTeeVector: Dh,
  DownRightVectorBar: Lh,
  DownRightVector: Nh,
  DownTeeArrow: Ph,
  DownTee: kh,
  drbkarow: Rh,
  drcorn: $h,
  drcrop: Mh,
  Dscr: Ih,
  dscr: jh,
  DScy: Bh,
  dscy: Uh,
  dsol: Hh,
  Dstrok: Vh,
  dstrok: Fh,
  dtdot: zh,
  dtri: Gh,
  dtrif: Wh,
  duarr: Yh,
  duhar: Jh,
  dwangle: Xh,
  DZcy: Qh,
  dzcy: Zh,
  dzigrarr: Kh,
  Eacute: tp,
  eacute: ep,
  easter: sp,
  Ecaron: np,
  ecaron: rp,
  Ecirc: op,
  ecirc: ip,
  ecir: cp,
  ecolon: ap,
  Ecy: lp,
  ecy: up,
  eDDot: fp,
  Edot: hp,
  edot: pp,
  eDot: dp,
  ee: gp,
  efDot: mp,
  Efr: bp,
  efr: yp,
  eg: vp,
  Egrave: wp,
  egrave: xp,
  egs: Sp,
  egsdot: _p,
  el: Tp,
  Element: Ep,
  elinters: Cp,
  ell: Ap,
  els: qp,
  elsdot: Op,
  Emacr: Dp,
  emacr: Lp,
  empty: Np,
  emptyset: Pp,
  EmptySmallSquare: kp,
  emptyv: Rp,
  EmptyVerySmallSquare: $p,
  emsp13: Mp,
  emsp14: Ip,
  emsp: jp,
  ENG: Bp,
  eng: Up,
  ensp: Hp,
  Eogon: Vp,
  eogon: Fp,
  Eopf: zp,
  eopf: Gp,
  epar: Wp,
  eparsl: Yp,
  eplus: Jp,
  epsi: Xp,
  Epsilon: Qp,
  epsilon: Zp,
  epsiv: Kp,
  eqcirc: td,
  eqcolon: ed,
  eqsim: sd,
  eqslantgtr: nd,
  eqslantless: rd,
  Equal: od,
  equals: id,
  EqualTilde: cd,
  equest: ad,
  Equilibrium: ld,
  equiv: ud,
  equivDD: fd,
  eqvparsl: hd,
  erarr: pd,
  erDot: dd,
  escr: gd,
  Escr: md,
  esdot: bd,
  Esim: yd,
  esim: vd,
  Eta: wd,
  eta: xd,
  ETH: Sd,
  eth: _d,
  Euml: Td,
  euml: Ed,
  euro: Cd,
  excl: Ad,
  exist: qd,
  Exists: Od,
  expectation: Dd,
  exponentiale: Ld,
  ExponentialE: Nd,
  fallingdotseq: Pd,
  Fcy: kd,
  fcy: Rd,
  female: $d,
  ffilig: Md,
  fflig: Id,
  ffllig: jd,
  Ffr: Bd,
  ffr: Ud,
  filig: Hd,
  FilledSmallSquare: Vd,
  FilledVerySmallSquare: Fd,
  fjlig: zd,
  flat: Gd,
  fllig: Wd,
  fltns: Yd,
  fnof: Jd,
  Fopf: Xd,
  fopf: Qd,
  forall: Zd,
  ForAll: Kd,
  fork: tg,
  forkv: eg,
  Fouriertrf: sg,
  fpartint: ng,
  frac12: rg,
  frac13: og,
  frac14: ig,
  frac15: cg,
  frac16: ag,
  frac18: lg,
  frac23: ug,
  frac25: fg,
  frac34: hg,
  frac35: pg,
  frac38: dg,
  frac45: gg,
  frac56: mg,
  frac58: bg,
  frac78: yg,
  frasl: vg,
  frown: wg,
  fscr: xg,
  Fscr: Sg,
  gacute: _g,
  Gamma: Tg,
  gamma: Eg,
  Gammad: Cg,
  gammad: Ag,
  gap: qg,
  Gbreve: Og,
  gbreve: Dg,
  Gcedil: Lg,
  Gcirc: Ng,
  gcirc: Pg,
  Gcy: kg,
  gcy: Rg,
  Gdot: $g,
  gdot: Mg,
  ge: Ig,
  gE: jg,
  gEl: Bg,
  gel: Ug,
  geq: Hg,
  geqq: Vg,
  geqslant: Fg,
  gescc: zg,
  ges: Gg,
  gesdot: Wg,
  gesdoto: Yg,
  gesdotol: Jg,
  gesl: Xg,
  gesles: Qg,
  Gfr: Zg,
  gfr: Kg,
  gg: tm,
  Gg: em,
  ggg: sm,
  gimel: nm,
  GJcy: rm,
  gjcy: om,
  gla: im,
  gl: cm,
  glE: am,
  glj: lm,
  gnap: um,
  gnapprox: fm,
  gne: hm,
  gnE: pm,
  gneq: dm,
  gneqq: gm,
  gnsim: mm,
  Gopf: bm,
  gopf: ym,
  grave: vm,
  GreaterEqual: wm,
  GreaterEqualLess: xm,
  GreaterFullEqual: Sm,
  GreaterGreater: _m,
  GreaterLess: Tm,
  GreaterSlantEqual: Em,
  GreaterTilde: Cm,
  Gscr: Am,
  gscr: qm,
  gsim: Om,
  gsime: Dm,
  gsiml: Lm,
  gtcc: Nm,
  gtcir: Pm,
  gt: km,
  GT: Rm,
  Gt: $m,
  gtdot: Mm,
  gtlPar: Im,
  gtquest: jm,
  gtrapprox: Bm,
  gtrarr: Um,
  gtrdot: Hm,
  gtreqless: Vm,
  gtreqqless: Fm,
  gtrless: zm,
  gtrsim: Gm,
  gvertneqq: Wm,
  gvnE: Ym,
  Hacek: Jm,
  hairsp: Xm,
  half: Qm,
  hamilt: Zm,
  HARDcy: Km,
  hardcy: tb,
  harrcir: eb,
  harr: sb,
  hArr: nb,
  harrw: rb,
  Hat: ob,
  hbar: ib,
  Hcirc: cb,
  hcirc: ab,
  hearts: lb,
  heartsuit: ub,
  hellip: fb,
  hercon: hb,
  hfr: pb,
  Hfr: db,
  HilbertSpace: gb,
  hksearow: mb,
  hkswarow: bb,
  hoarr: yb,
  homtht: vb,
  hookleftarrow: wb,
  hookrightarrow: xb,
  hopf: Sb,
  Hopf: _b,
  horbar: Tb,
  HorizontalLine: Eb,
  hscr: Cb,
  Hscr: Ab,
  hslash: qb,
  Hstrok: Ob,
  hstrok: Db,
  HumpDownHump: Lb,
  HumpEqual: Nb,
  hybull: Pb,
  hyphen: kb,
  Iacute: Rb,
  iacute: $b,
  ic: Mb,
  Icirc: Ib,
  icirc: jb,
  Icy: Bb,
  icy: Ub,
  Idot: Hb,
  IEcy: Vb,
  iecy: Fb,
  iexcl: zb,
  iff: Gb,
  ifr: Wb,
  Ifr: Yb,
  Igrave: Jb,
  igrave: Xb,
  ii: Qb,
  iiiint: Zb,
  iiint: Kb,
  iinfin: ty,
  iiota: ey,
  IJlig: sy,
  ijlig: ny,
  Imacr: ry,
  imacr: oy,
  image: iy,
  ImaginaryI: cy,
  imagline: ay,
  imagpart: ly,
  imath: uy,
  Im: fy,
  imof: hy,
  imped: py,
  Implies: dy,
  incare: gy,
  in: "\u2208",
  infin: my,
  infintie: by,
  inodot: yy,
  intcal: vy,
  int: wy,
  Int: xy,
  integers: Sy,
  Integral: _y,
  intercal: Ty,
  Intersection: Ey,
  intlarhk: Cy,
  intprod: Ay,
  InvisibleComma: qy,
  InvisibleTimes: Oy,
  IOcy: Dy,
  iocy: Ly,
  Iogon: Ny,
  iogon: Py,
  Iopf: ky,
  iopf: Ry,
  Iota: $y,
  iota: My,
  iprod: Iy,
  iquest: jy,
  iscr: By,
  Iscr: Uy,
  isin: Hy,
  isindot: Vy,
  isinE: Fy,
  isins: zy,
  isinsv: Gy,
  isinv: Wy,
  it: Yy,
  Itilde: Jy,
  itilde: Xy,
  Iukcy: Qy,
  iukcy: Zy,
  Iuml: Ky,
  iuml: tv,
  Jcirc: ev,
  jcirc: sv,
  Jcy: nv,
  jcy: rv,
  Jfr: ov,
  jfr: iv,
  jmath: cv,
  Jopf: av,
  jopf: lv,
  Jscr: uv,
  jscr: fv,
  Jsercy: hv,
  jsercy: pv,
  Jukcy: dv,
  jukcy: gv,
  Kappa: mv,
  kappa: bv,
  kappav: yv,
  Kcedil: vv,
  kcedil: wv,
  Kcy: xv,
  kcy: Sv,
  Kfr: _v,
  kfr: Tv,
  kgreen: Ev,
  KHcy: Cv,
  khcy: Av,
  KJcy: qv,
  kjcy: Ov,
  Kopf: Dv,
  kopf: Lv,
  Kscr: Nv,
  kscr: Pv,
  lAarr: kv,
  Lacute: Rv,
  lacute: $v,
  laemptyv: Mv,
  lagran: Iv,
  Lambda: jv,
  lambda: Bv,
  lang: Uv,
  Lang: Hv,
  langd: Vv,
  langle: Fv,
  lap: zv,
  Laplacetrf: Gv,
  laquo: Wv,
  larrb: Yv,
  larrbfs: Jv,
  larr: Xv,
  Larr: Qv,
  lArr: Zv,
  larrfs: Kv,
  larrhk: tw,
  larrlp: ew,
  larrpl: sw,
  larrsim: nw,
  larrtl: rw,
  latail: ow,
  lAtail: iw,
  lat: cw,
  late: aw,
  lates: lw,
  lbarr: uw,
  lBarr: fw,
  lbbrk: hw,
  lbrace: pw,
  lbrack: dw,
  lbrke: gw,
  lbrksld: mw,
  lbrkslu: bw,
  Lcaron: yw,
  lcaron: vw,
  Lcedil: ww,
  lcedil: xw,
  lceil: Sw,
  lcub: _w,
  Lcy: Tw,
  lcy: Ew,
  ldca: Cw,
  ldquo: Aw,
  ldquor: qw,
  ldrdhar: Ow,
  ldrushar: Dw,
  ldsh: Lw,
  le: Nw,
  lE: Pw,
  LeftAngleBracket: kw,
  LeftArrowBar: Rw,
  leftarrow: $w,
  LeftArrow: Mw,
  Leftarrow: Iw,
  LeftArrowRightArrow: jw,
  leftarrowtail: Bw,
  LeftCeiling: Uw,
  LeftDoubleBracket: Hw,
  LeftDownTeeVector: Vw,
  LeftDownVectorBar: Fw,
  LeftDownVector: zw,
  LeftFloor: Gw,
  leftharpoondown: Ww,
  leftharpoonup: Yw,
  leftleftarrows: Jw,
  leftrightarrow: Xw,
  LeftRightArrow: Qw,
  Leftrightarrow: Zw,
  leftrightarrows: Kw,
  leftrightharpoons: tx,
  leftrightsquigarrow: ex,
  LeftRightVector: sx,
  LeftTeeArrow: nx,
  LeftTee: rx,
  LeftTeeVector: ox,
  leftthreetimes: ix,
  LeftTriangleBar: cx,
  LeftTriangle: ax,
  LeftTriangleEqual: lx,
  LeftUpDownVector: ux,
  LeftUpTeeVector: fx,
  LeftUpVectorBar: hx,
  LeftUpVector: px,
  LeftVectorBar: dx,
  LeftVector: gx,
  lEg: mx,
  leg: bx,
  leq: yx,
  leqq: vx,
  leqslant: wx,
  lescc: xx,
  les: Sx,
  lesdot: _x,
  lesdoto: Tx,
  lesdotor: Ex,
  lesg: Cx,
  lesges: Ax,
  lessapprox: qx,
  lessdot: Ox,
  lesseqgtr: Dx,
  lesseqqgtr: Lx,
  LessEqualGreater: Nx,
  LessFullEqual: Px,
  LessGreater: kx,
  lessgtr: Rx,
  LessLess: $x,
  lesssim: Mx,
  LessSlantEqual: Ix,
  LessTilde: jx,
  lfisht: Bx,
  lfloor: Ux,
  Lfr: Hx,
  lfr: Vx,
  lg: Fx,
  lgE: zx,
  lHar: Gx,
  lhard: Wx,
  lharu: Yx,
  lharul: Jx,
  lhblk: Xx,
  LJcy: Qx,
  ljcy: Zx,
  llarr: Kx,
  ll: t1,
  Ll: e1,
  llcorner: s1,
  Lleftarrow: n1,
  llhard: r1,
  lltri: o1,
  Lmidot: i1,
  lmidot: c1,
  lmoustache: a1,
  lmoust: l1,
  lnap: u1,
  lnapprox: f1,
  lne: h1,
  lnE: p1,
  lneq: d1,
  lneqq: g1,
  lnsim: m1,
  loang: b1,
  loarr: y1,
  lobrk: v1,
  longleftarrow: w1,
  LongLeftArrow: x1,
  Longleftarrow: S1,
  longleftrightarrow: _1,
  LongLeftRightArrow: T1,
  Longleftrightarrow: E1,
  longmapsto: C1,
  longrightarrow: A1,
  LongRightArrow: q1,
  Longrightarrow: O1,
  looparrowleft: D1,
  looparrowright: L1,
  lopar: N1,
  Lopf: P1,
  lopf: k1,
  loplus: R1,
  lotimes: $1,
  lowast: M1,
  lowbar: I1,
  LowerLeftArrow: j1,
  LowerRightArrow: B1,
  loz: U1,
  lozenge: H1,
  lozf: V1,
  lpar: F1,
  lparlt: z1,
  lrarr: G1,
  lrcorner: W1,
  lrhar: Y1,
  lrhard: J1,
  lrm: X1,
  lrtri: Q1,
  lsaquo: Z1,
  lscr: K1,
  Lscr: tS,
  lsh: eS,
  Lsh: sS,
  lsim: nS,
  lsime: rS,
  lsimg: oS,
  lsqb: iS,
  lsquo: cS,
  lsquor: aS,
  Lstrok: lS,
  lstrok: uS,
  ltcc: fS,
  ltcir: hS,
  lt: pS,
  LT: dS,
  Lt: gS,
  ltdot: mS,
  lthree: bS,
  ltimes: yS,
  ltlarr: vS,
  ltquest: wS,
  ltri: xS,
  ltrie: SS,
  ltrif: _S,
  ltrPar: TS,
  lurdshar: ES,
  luruhar: CS,
  lvertneqq: AS,
  lvnE: qS,
  macr: OS,
  male: DS,
  malt: LS,
  maltese: NS,
  Map: "\u2905",
  map: PS,
  mapsto: kS,
  mapstodown: RS,
  mapstoleft: $S,
  mapstoup: MS,
  marker: IS,
  mcomma: jS,
  Mcy: BS,
  mcy: US,
  mdash: HS,
  mDDot: VS,
  measuredangle: FS,
  MediumSpace: zS,
  Mellintrf: GS,
  Mfr: WS,
  mfr: YS,
  mho: JS,
  micro: XS,
  midast: QS,
  midcir: ZS,
  mid: KS,
  middot: t_,
  minusb: e_,
  minus: s_,
  minusd: n_,
  minusdu: r_,
  MinusPlus: o_,
  mlcp: i_,
  mldr: c_,
  mnplus: a_,
  models: l_,
  Mopf: u_,
  mopf: f_,
  mp: h_,
  mscr: p_,
  Mscr: d_,
  mstpos: g_,
  Mu: m_,
  mu: b_,
  multimap: y_,
  mumap: v_,
  nabla: w_,
  Nacute: x_,
  nacute: S_,
  nang: __,
  nap: T_,
  napE: E_,
  napid: C_,
  napos: A_,
  napprox: q_,
  natural: O_,
  naturals: D_,
  natur: L_,
  nbsp: N_,
  nbump: P_,
  nbumpe: k_,
  ncap: R_,
  Ncaron: $_,
  ncaron: M_,
  Ncedil: I_,
  ncedil: j_,
  ncong: B_,
  ncongdot: U_,
  ncup: H_,
  Ncy: V_,
  ncy: F_,
  ndash: z_,
  nearhk: G_,
  nearr: W_,
  neArr: Y_,
  nearrow: J_,
  ne: X_,
  nedot: Q_,
  NegativeMediumSpace: Z_,
  NegativeThickSpace: K_,
  NegativeThinSpace: tT,
  NegativeVeryThinSpace: eT,
  nequiv: sT,
  nesear: nT,
  nesim: rT,
  NestedGreaterGreater: oT,
  NestedLessLess: iT,
  NewLine: cT,
  nexist: aT,
  nexists: lT,
  Nfr: uT,
  nfr: fT,
  ngE: hT,
  nge: pT,
  ngeq: dT,
  ngeqq: gT,
  ngeqslant: mT,
  nges: bT,
  nGg: yT,
  ngsim: vT,
  nGt: wT,
  ngt: xT,
  ngtr: ST,
  nGtv: _T,
  nharr: TT,
  nhArr: ET,
  nhpar: CT,
  ni: AT,
  nis: qT,
  nisd: OT,
  niv: DT,
  NJcy: LT,
  njcy: NT,
  nlarr: PT,
  nlArr: kT,
  nldr: RT,
  nlE: $T,
  nle: MT,
  nleftarrow: IT,
  nLeftarrow: jT,
  nleftrightarrow: BT,
  nLeftrightarrow: UT,
  nleq: HT,
  nleqq: VT,
  nleqslant: FT,
  nles: zT,
  nless: GT,
  nLl: WT,
  nlsim: YT,
  nLt: JT,
  nlt: XT,
  nltri: QT,
  nltrie: ZT,
  nLtv: KT,
  nmid: tE,
  NoBreak: eE,
  NonBreakingSpace: sE,
  nopf: nE,
  Nopf: rE,
  Not: oE,
  not: iE,
  NotCongruent: cE,
  NotCupCap: aE,
  NotDoubleVerticalBar: lE,
  NotElement: uE,
  NotEqual: fE,
  NotEqualTilde: hE,
  NotExists: pE,
  NotGreater: dE,
  NotGreaterEqual: gE,
  NotGreaterFullEqual: mE,
  NotGreaterGreater: bE,
  NotGreaterLess: yE,
  NotGreaterSlantEqual: vE,
  NotGreaterTilde: wE,
  NotHumpDownHump: xE,
  NotHumpEqual: SE,
  notin: _E,
  notindot: TE,
  notinE: EE,
  notinva: CE,
  notinvb: AE,
  notinvc: qE,
  NotLeftTriangleBar: OE,
  NotLeftTriangle: DE,
  NotLeftTriangleEqual: LE,
  NotLess: NE,
  NotLessEqual: PE,
  NotLessGreater: kE,
  NotLessLess: RE,
  NotLessSlantEqual: $E,
  NotLessTilde: ME,
  NotNestedGreaterGreater: IE,
  NotNestedLessLess: jE,
  notni: BE,
  notniva: UE,
  notnivb: HE,
  notnivc: VE,
  NotPrecedes: FE,
  NotPrecedesEqual: zE,
  NotPrecedesSlantEqual: GE,
  NotReverseElement: WE,
  NotRightTriangleBar: YE,
  NotRightTriangle: JE,
  NotRightTriangleEqual: XE,
  NotSquareSubset: QE,
  NotSquareSubsetEqual: ZE,
  NotSquareSuperset: KE,
  NotSquareSupersetEqual: tC,
  NotSubset: eC,
  NotSubsetEqual: sC,
  NotSucceeds: nC,
  NotSucceedsEqual: rC,
  NotSucceedsSlantEqual: oC,
  NotSucceedsTilde: iC,
  NotSuperset: cC,
  NotSupersetEqual: aC,
  NotTilde: lC,
  NotTildeEqual: uC,
  NotTildeFullEqual: fC,
  NotTildeTilde: hC,
  NotVerticalBar: pC,
  nparallel: dC,
  npar: gC,
  nparsl: mC,
  npart: bC,
  npolint: yC,
  npr: vC,
  nprcue: wC,
  nprec: xC,
  npreceq: SC,
  npre: _C,
  nrarrc: TC,
  nrarr: EC,
  nrArr: CC,
  nrarrw: AC,
  nrightarrow: qC,
  nRightarrow: OC,
  nrtri: DC,
  nrtrie: LC,
  nsc: NC,
  nsccue: PC,
  nsce: kC,
  Nscr: RC,
  nscr: $C,
  nshortmid: MC,
  nshortparallel: IC,
  nsim: jC,
  nsime: BC,
  nsimeq: UC,
  nsmid: HC,
  nspar: VC,
  nsqsube: FC,
  nsqsupe: zC,
  nsub: GC,
  nsubE: WC,
  nsube: YC,
  nsubset: JC,
  nsubseteq: XC,
  nsubseteqq: QC,
  nsucc: ZC,
  nsucceq: KC,
  nsup: t0,
  nsupE: e0,
  nsupe: s0,
  nsupset: n0,
  nsupseteq: r0,
  nsupseteqq: o0,
  ntgl: i0,
  Ntilde: c0,
  ntilde: a0,
  ntlg: l0,
  ntriangleleft: u0,
  ntrianglelefteq: f0,
  ntriangleright: h0,
  ntrianglerighteq: p0,
  Nu: d0,
  nu: g0,
  num: m0,
  numero: b0,
  numsp: y0,
  nvap: v0,
  nvdash: w0,
  nvDash: x0,
  nVdash: S0,
  nVDash: _0,
  nvge: T0,
  nvgt: E0,
  nvHarr: C0,
  nvinfin: A0,
  nvlArr: q0,
  nvle: O0,
  nvlt: D0,
  nvltrie: L0,
  nvrArr: N0,
  nvrtrie: P0,
  nvsim: k0,
  nwarhk: R0,
  nwarr: $0,
  nwArr: M0,
  nwarrow: I0,
  nwnear: j0,
  Oacute: B0,
  oacute: U0,
  oast: H0,
  Ocirc: V0,
  ocirc: F0,
  ocir: z0,
  Ocy: G0,
  ocy: W0,
  odash: Y0,
  Odblac: J0,
  odblac: X0,
  odiv: Q0,
  odot: Z0,
  odsold: K0,
  OElig: tA,
  oelig: eA,
  ofcir: sA,
  Ofr: nA,
  ofr: rA,
  ogon: oA,
  Ograve: iA,
  ograve: cA,
  ogt: aA,
  ohbar: lA,
  ohm: uA,
  oint: fA,
  olarr: hA,
  olcir: pA,
  olcross: dA,
  oline: gA,
  olt: mA,
  Omacr: bA,
  omacr: yA,
  Omega: vA,
  omega: wA,
  Omicron: xA,
  omicron: SA,
  omid: _A,
  ominus: TA,
  Oopf: EA,
  oopf: CA,
  opar: AA,
  OpenCurlyDoubleQuote: qA,
  OpenCurlyQuote: OA,
  operp: DA,
  oplus: LA,
  orarr: NA,
  Or: PA,
  or: kA,
  ord: RA,
  order: $A,
  orderof: MA,
  ordf: IA,
  ordm: jA,
  origof: BA,
  oror: UA,
  orslope: HA,
  orv: VA,
  oS: FA,
  Oscr: zA,
  oscr: GA,
  Oslash: WA,
  oslash: YA,
  osol: JA,
  Otilde: XA,
  otilde: QA,
  otimesas: ZA,
  Otimes: KA,
  otimes: tq,
  Ouml: eq,
  ouml: sq,
  ovbar: nq,
  OverBar: rq,
  OverBrace: oq,
  OverBracket: iq,
  OverParenthesis: cq,
  para: aq,
  parallel: lq,
  par: uq,
  parsim: fq,
  parsl: hq,
  part: pq,
  PartialD: dq,
  Pcy: gq,
  pcy: mq,
  percnt: bq,
  period: yq,
  permil: vq,
  perp: wq,
  pertenk: xq,
  Pfr: Sq,
  pfr: _q,
  Phi: Tq,
  phi: Eq,
  phiv: Cq,
  phmmat: Aq,
  phone: qq,
  Pi: Oq,
  pi: Dq,
  pitchfork: Lq,
  piv: Nq,
  planck: Pq,
  planckh: kq,
  plankv: Rq,
  plusacir: $q,
  plusb: Mq,
  pluscir: Iq,
  plus: jq,
  plusdo: Bq,
  plusdu: Uq,
  pluse: Hq,
  PlusMinus: Vq,
  plusmn: Fq,
  plussim: zq,
  plustwo: Gq,
  pm: Wq,
  Poincareplane: Yq,
  pointint: Jq,
  popf: Xq,
  Popf: Qq,
  pound: Zq,
  prap: Kq,
  Pr: tO,
  pr: eO,
  prcue: sO,
  precapprox: nO,
  prec: rO,
  preccurlyeq: oO,
  Precedes: iO,
  PrecedesEqual: cO,
  PrecedesSlantEqual: aO,
  PrecedesTilde: lO,
  preceq: uO,
  precnapprox: fO,
  precneqq: hO,
  precnsim: pO,
  pre: dO,
  prE: gO,
  precsim: mO,
  prime: bO,
  Prime: yO,
  primes: vO,
  prnap: wO,
  prnE: xO,
  prnsim: SO,
  prod: _O,
  Product: TO,
  profalar: EO,
  profline: CO,
  profsurf: AO,
  prop: qO,
  Proportional: OO,
  Proportion: DO,
  propto: LO,
  prsim: NO,
  prurel: PO,
  Pscr: kO,
  pscr: RO,
  Psi: $O,
  psi: MO,
  puncsp: IO,
  Qfr: jO,
  qfr: BO,
  qint: UO,
  qopf: HO,
  Qopf: VO,
  qprime: FO,
  Qscr: zO,
  qscr: GO,
  quaternions: WO,
  quatint: YO,
  quest: JO,
  questeq: XO,
  quot: QO,
  QUOT: ZO,
  rAarr: KO,
  race: tD,
  Racute: eD,
  racute: sD,
  radic: nD,
  raemptyv: rD,
  rang: oD,
  Rang: iD,
  rangd: cD,
  range: aD,
  rangle: lD,
  raquo: uD,
  rarrap: fD,
  rarrb: hD,
  rarrbfs: pD,
  rarrc: dD,
  rarr: gD,
  Rarr: mD,
  rArr: bD,
  rarrfs: yD,
  rarrhk: vD,
  rarrlp: wD,
  rarrpl: xD,
  rarrsim: SD,
  Rarrtl: _D,
  rarrtl: TD,
  rarrw: ED,
  ratail: CD,
  rAtail: AD,
  ratio: qD,
  rationals: OD,
  rbarr: DD,
  rBarr: LD,
  RBarr: ND,
  rbbrk: PD,
  rbrace: kD,
  rbrack: RD,
  rbrke: $D,
  rbrksld: MD,
  rbrkslu: ID,
  Rcaron: jD,
  rcaron: BD,
  Rcedil: UD,
  rcedil: HD,
  rceil: VD,
  rcub: FD,
  Rcy: zD,
  rcy: GD,
  rdca: WD,
  rdldhar: YD,
  rdquo: JD,
  rdquor: XD,
  rdsh: QD,
  real: ZD,
  realine: KD,
  realpart: tL,
  reals: eL,
  Re: sL,
  rect: nL,
  reg: rL,
  REG: oL,
  ReverseElement: iL,
  ReverseEquilibrium: cL,
  ReverseUpEquilibrium: aL,
  rfisht: lL,
  rfloor: uL,
  rfr: fL,
  Rfr: hL,
  rHar: pL,
  rhard: dL,
  rharu: gL,
  rharul: mL,
  Rho: bL,
  rho: yL,
  rhov: vL,
  RightAngleBracket: wL,
  RightArrowBar: xL,
  rightarrow: SL,
  RightArrow: _L,
  Rightarrow: TL,
  RightArrowLeftArrow: EL,
  rightarrowtail: CL,
  RightCeiling: AL,
  RightDoubleBracket: qL,
  RightDownTeeVector: OL,
  RightDownVectorBar: DL,
  RightDownVector: LL,
  RightFloor: NL,
  rightharpoondown: PL,
  rightharpoonup: kL,
  rightleftarrows: RL,
  rightleftharpoons: $L,
  rightrightarrows: ML,
  rightsquigarrow: IL,
  RightTeeArrow: jL,
  RightTee: BL,
  RightTeeVector: UL,
  rightthreetimes: HL,
  RightTriangleBar: VL,
  RightTriangle: FL,
  RightTriangleEqual: zL,
  RightUpDownVector: GL,
  RightUpTeeVector: WL,
  RightUpVectorBar: YL,
  RightUpVector: JL,
  RightVectorBar: XL,
  RightVector: QL,
  ring: ZL,
  risingdotseq: KL,
  rlarr: tN,
  rlhar: eN,
  rlm: sN,
  rmoustache: nN,
  rmoust: rN,
  rnmid: oN,
  roang: iN,
  roarr: cN,
  robrk: aN,
  ropar: lN,
  ropf: uN,
  Ropf: fN,
  roplus: hN,
  rotimes: pN,
  RoundImplies: dN,
  rpar: gN,
  rpargt: mN,
  rppolint: bN,
  rrarr: yN,
  Rrightarrow: vN,
  rsaquo: wN,
  rscr: xN,
  Rscr: SN,
  rsh: _N,
  Rsh: TN,
  rsqb: EN,
  rsquo: CN,
  rsquor: AN,
  rthree: qN,
  rtimes: ON,
  rtri: DN,
  rtrie: LN,
  rtrif: NN,
  rtriltri: PN,
  RuleDelayed: kN,
  ruluhar: RN,
  rx: $N,
  Sacute: MN,
  sacute: IN,
  sbquo: jN,
  scap: BN,
  Scaron: UN,
  scaron: HN,
  Sc: VN,
  sc: FN,
  sccue: zN,
  sce: GN,
  scE: WN,
  Scedil: YN,
  scedil: JN,
  Scirc: XN,
  scirc: QN,
  scnap: ZN,
  scnE: KN,
  scnsim: tP,
  scpolint: eP,
  scsim: sP,
  Scy: nP,
  scy: rP,
  sdotb: oP,
  sdot: iP,
  sdote: cP,
  searhk: aP,
  searr: lP,
  seArr: uP,
  searrow: fP,
  sect: hP,
  semi: pP,
  seswar: dP,
  setminus: gP,
  setmn: mP,
  sext: bP,
  Sfr: yP,
  sfr: vP,
  sfrown: wP,
  sharp: xP,
  SHCHcy: SP,
  shchcy: _P,
  SHcy: TP,
  shcy: EP,
  ShortDownArrow: CP,
  ShortLeftArrow: AP,
  shortmid: qP,
  shortparallel: OP,
  ShortRightArrow: DP,
  ShortUpArrow: LP,
  shy: NP,
  Sigma: PP,
  sigma: kP,
  sigmaf: RP,
  sigmav: $P,
  sim: MP,
  simdot: IP,
  sime: jP,
  simeq: BP,
  simg: UP,
  simgE: HP,
  siml: VP,
  simlE: FP,
  simne: zP,
  simplus: GP,
  simrarr: WP,
  slarr: YP,
  SmallCircle: JP,
  smallsetminus: XP,
  smashp: QP,
  smeparsl: ZP,
  smid: KP,
  smile: tk,
  smt: ek,
  smte: sk,
  smtes: nk,
  SOFTcy: rk,
  softcy: ok,
  solbar: ik,
  solb: ck,
  sol: ak,
  Sopf: lk,
  sopf: uk,
  spades: fk,
  spadesuit: hk,
  spar: pk,
  sqcap: dk,
  sqcaps: gk,
  sqcup: mk,
  sqcups: bk,
  Sqrt: yk,
  sqsub: vk,
  sqsube: wk,
  sqsubset: xk,
  sqsubseteq: Sk,
  sqsup: _k,
  sqsupe: Tk,
  sqsupset: Ek,
  sqsupseteq: Ck,
  square: Ak,
  Square: qk,
  SquareIntersection: Ok,
  SquareSubset: Dk,
  SquareSubsetEqual: Lk,
  SquareSuperset: Nk,
  SquareSupersetEqual: Pk,
  SquareUnion: kk,
  squarf: Rk,
  squ: $k,
  squf: Mk,
  srarr: Ik,
  Sscr: jk,
  sscr: Bk,
  ssetmn: Uk,
  ssmile: Hk,
  sstarf: Vk,
  Star: Fk,
  star: zk,
  starf: Gk,
  straightepsilon: Wk,
  straightphi: Yk,
  strns: Jk,
  sub: Xk,
  Sub: Qk,
  subdot: Zk,
  subE: Kk,
  sube: tR,
  subedot: eR,
  submult: sR,
  subnE: nR,
  subne: rR,
  subplus: oR,
  subrarr: iR,
  subset: cR,
  Subset: aR,
  subseteq: lR,
  subseteqq: uR,
  SubsetEqual: fR,
  subsetneq: hR,
  subsetneqq: pR,
  subsim: dR,
  subsub: gR,
  subsup: mR,
  succapprox: bR,
  succ: yR,
  succcurlyeq: vR,
  Succeeds: wR,
  SucceedsEqual: xR,
  SucceedsSlantEqual: SR,
  SucceedsTilde: _R,
  succeq: TR,
  succnapprox: ER,
  succneqq: CR,
  succnsim: AR,
  succsim: qR,
  SuchThat: OR,
  sum: DR,
  Sum: LR,
  sung: NR,
  sup1: PR,
  sup2: kR,
  sup3: RR,
  sup: $R,
  Sup: MR,
  supdot: IR,
  supdsub: jR,
  supE: BR,
  supe: UR,
  supedot: HR,
  Superset: VR,
  SupersetEqual: FR,
  suphsol: zR,
  suphsub: GR,
  suplarr: WR,
  supmult: YR,
  supnE: JR,
  supne: XR,
  supplus: QR,
  supset: ZR,
  Supset: KR,
  supseteq: t$,
  supseteqq: e$,
  supsetneq: s$,
  supsetneqq: n$,
  supsim: r$,
  supsub: o$,
  supsup: i$,
  swarhk: c$,
  swarr: a$,
  swArr: l$,
  swarrow: u$,
  swnwar: f$,
  szlig: h$,
  Tab: p$,
  target: d$,
  Tau: g$,
  tau: m$,
  tbrk: b$,
  Tcaron: y$,
  tcaron: v$,
  Tcedil: w$,
  tcedil: x$,
  Tcy: S$,
  tcy: _$,
  tdot: T$,
  telrec: E$,
  Tfr: C$,
  tfr: A$,
  there4: q$,
  therefore: O$,
  Therefore: D$,
  Theta: L$,
  theta: N$,
  thetasym: P$,
  thetav: k$,
  thickapprox: R$,
  thicksim: $$,
  ThickSpace: M$,
  ThinSpace: I$,
  thinsp: j$,
  thkap: B$,
  thksim: U$,
  THORN: H$,
  thorn: V$,
  tilde: F$,
  Tilde: z$,
  TildeEqual: G$,
  TildeFullEqual: W$,
  TildeTilde: Y$,
  timesbar: J$,
  timesb: X$,
  times: Q$,
  timesd: Z$,
  tint: K$,
  toea: tM,
  topbot: eM,
  topcir: sM,
  top: nM,
  Topf: rM,
  topf: oM,
  topfork: iM,
  tosa: cM,
  tprime: aM,
  trade: lM,
  TRADE: uM,
  triangle: fM,
  triangledown: hM,
  triangleleft: pM,
  trianglelefteq: dM,
  triangleq: gM,
  triangleright: mM,
  trianglerighteq: bM,
  tridot: yM,
  trie: vM,
  triminus: wM,
  TripleDot: xM,
  triplus: SM,
  trisb: _M,
  tritime: TM,
  trpezium: EM,
  Tscr: CM,
  tscr: AM,
  TScy: qM,
  tscy: OM,
  TSHcy: DM,
  tshcy: LM,
  Tstrok: NM,
  tstrok: PM,
  twixt: kM,
  twoheadleftarrow: RM,
  twoheadrightarrow: $M,
  Uacute: MM,
  uacute: IM,
  uarr: jM,
  Uarr: BM,
  uArr: UM,
  Uarrocir: HM,
  Ubrcy: VM,
  ubrcy: FM,
  Ubreve: zM,
  ubreve: GM,
  Ucirc: WM,
  ucirc: YM,
  Ucy: JM,
  ucy: XM,
  udarr: QM,
  Udblac: ZM,
  udblac: KM,
  udhar: tI,
  ufisht: eI,
  Ufr: sI,
  ufr: nI,
  Ugrave: rI,
  ugrave: oI,
  uHar: iI,
  uharl: cI,
  uharr: aI,
  uhblk: lI,
  ulcorn: uI,
  ulcorner: fI,
  ulcrop: hI,
  ultri: pI,
  Umacr: dI,
  umacr: gI,
  uml: mI,
  UnderBar: bI,
  UnderBrace: yI,
  UnderBracket: vI,
  UnderParenthesis: wI,
  Union: xI,
  UnionPlus: SI,
  Uogon: _I,
  uogon: TI,
  Uopf: EI,
  uopf: CI,
  UpArrowBar: AI,
  uparrow: qI,
  UpArrow: OI,
  Uparrow: DI,
  UpArrowDownArrow: LI,
  updownarrow: NI,
  UpDownArrow: PI,
  Updownarrow: kI,
  UpEquilibrium: RI,
  upharpoonleft: $I,
  upharpoonright: MI,
  uplus: II,
  UpperLeftArrow: jI,
  UpperRightArrow: BI,
  upsi: UI,
  Upsi: HI,
  upsih: VI,
  Upsilon: FI,
  upsilon: zI,
  UpTeeArrow: GI,
  UpTee: WI,
  upuparrows: YI,
  urcorn: JI,
  urcorner: XI,
  urcrop: QI,
  Uring: ZI,
  uring: KI,
  urtri: tj,
  Uscr: ej,
  uscr: sj,
  utdot: nj,
  Utilde: rj,
  utilde: oj,
  utri: ij,
  utrif: cj,
  uuarr: aj,
  Uuml: lj,
  uuml: uj,
  uwangle: fj,
  vangrt: hj,
  varepsilon: pj,
  varkappa: dj,
  varnothing: gj,
  varphi: mj,
  varpi: bj,
  varpropto: yj,
  varr: vj,
  vArr: wj,
  varrho: xj,
  varsigma: Sj,
  varsubsetneq: _j,
  varsubsetneqq: Tj,
  varsupsetneq: Ej,
  varsupsetneqq: Cj,
  vartheta: Aj,
  vartriangleleft: qj,
  vartriangleright: Oj,
  vBar: Dj,
  Vbar: Lj,
  vBarv: Nj,
  Vcy: Pj,
  vcy: kj,
  vdash: Rj,
  vDash: $j,
  Vdash: Mj,
  VDash: Ij,
  Vdashl: jj,
  veebar: Bj,
  vee: Uj,
  Vee: Hj,
  veeeq: Vj,
  vellip: Fj,
  verbar: zj,
  Verbar: Gj,
  vert: Wj,
  Vert: Yj,
  VerticalBar: Jj,
  VerticalLine: Xj,
  VerticalSeparator: Qj,
  VerticalTilde: Zj,
  VeryThinSpace: Kj,
  Vfr: tB,
  vfr: eB,
  vltri: sB,
  vnsub: nB,
  vnsup: rB,
  Vopf: oB,
  vopf: iB,
  vprop: cB,
  vrtri: aB,
  Vscr: lB,
  vscr: uB,
  vsubnE: fB,
  vsubne: hB,
  vsupnE: pB,
  vsupne: dB,
  Vvdash: gB,
  vzigzag: mB,
  Wcirc: bB,
  wcirc: yB,
  wedbar: vB,
  wedge: wB,
  Wedge: xB,
  wedgeq: SB,
  weierp: _B,
  Wfr: TB,
  wfr: EB,
  Wopf: CB,
  wopf: AB,
  wp: qB,
  wr: OB,
  wreath: DB,
  Wscr: LB,
  wscr: NB,
  xcap: PB,
  xcirc: kB,
  xcup: RB,
  xdtri: $B,
  Xfr: MB,
  xfr: IB,
  xharr: jB,
  xhArr: BB,
  Xi: UB,
  xi: HB,
  xlarr: VB,
  xlArr: FB,
  xmap: zB,
  xnis: GB,
  xodot: WB,
  Xopf: YB,
  xopf: JB,
  xoplus: XB,
  xotime: QB,
  xrarr: ZB,
  xrArr: KB,
  Xscr: tU,
  xscr: eU,
  xsqcup: sU,
  xuplus: nU,
  xutri: rU,
  xvee: oU,
  xwedge: iU,
  Yacute: cU,
  yacute: aU,
  YAcy: lU,
  yacy: uU,
  Ycirc: fU,
  ycirc: hU,
  Ycy: pU,
  ycy: dU,
  yen: gU,
  Yfr: mU,
  yfr: bU,
  YIcy: yU,
  yicy: vU,
  Yopf: wU,
  yopf: xU,
  Yscr: SU,
  yscr: _U,
  YUcy: TU,
  yucy: EU,
  yuml: CU,
  Yuml: AU,
  Zacute: qU,
  zacute: OU,
  Zcaron: DU,
  zcaron: LU,
  Zcy: NU,
  zcy: PU,
  Zdot: kU,
  zdot: RU,
  zeetrf: $U,
  ZeroWidthSpace: MU,
  Zeta: IU,
  zeta: jU,
  zfr: BU,
  Zfr: UU,
  ZHcy: HU,
  zhcy: VU,
  zigrarr: FU,
  zopf: zU,
  Zopf: GU,
  Zscr: WU,
  zscr: YU,
  zwj: JU,
  zwnj: XU
}, QU = "\xC1", ZU = "\xE1", KU = "\xC2", t2 = "\xE2", e2 = "\xB4", s2 = "\xC6", n2 = "\xE6", r2 = "\xC0", o2 = "\xE0", i2 = "&", c2 = "&", a2 = "\xC5", l2 = "\xE5", u2 = "\xC3", f2 = "\xE3", h2 = "\xC4", p2 = "\xE4", d2 = "\xA6", g2 = "\xC7", m2 = "\xE7", b2 = "\xB8", y2 = "\xA2", v2 = "\xA9", w2 = "\xA9", x2 = "\xA4", S2 = "\xB0", _2 = "\xF7", T2 = "\xC9", E2 = "\xE9", C2 = "\xCA", A2 = "\xEA", q2 = "\xC8", O2 = "\xE8", D2 = "\xD0", L2 = "\xF0", N2 = "\xCB", P2 = "\xEB", k2 = "\xBD", R2 = "\xBC", $2 = "\xBE", M2 = ">", I2 = ">", j2 = "\xCD", B2 = "\xED", U2 = "\xCE", H2 = "\xEE", V2 = "\xA1", F2 = "\xCC", z2 = "\xEC", G2 = "\xBF", W2 = "\xCF", Y2 = "\xEF", J2 = "\xAB", X2 = "<", Q2 = "<", Z2 = "\xAF", K2 = "\xB5", tH = "\xB7", eH = "\xA0", sH = "\xAC", nH = "\xD1", rH = "\xF1", oH = "\xD3", iH = "\xF3", cH = "\xD4", aH = "\xF4", lH = "\xD2", uH = "\xF2", fH = "\xAA", hH = "\xBA", pH = "\xD8", dH = "\xF8", gH = "\xD5", mH = "\xF5", bH = "\xD6", yH = "\xF6", vH = "\xB6", wH = "\xB1", xH = "\xA3", SH = '"', _H = '"', TH = "\xBB", EH = "\xAE", CH = "\xAE", AH = "\xA7", qH = "\xAD", OH = "\xB9", DH = "\xB2", LH = "\xB3", NH = "\xDF", PH = "\xDE", kH = "\xFE", RH = "\xD7", $H = "\xDA", MH = "\xFA", IH = "\xDB", jH = "\xFB", BH = "\xD9", UH = "\xF9", HH = "\xA8", VH = "\xDC", FH = "\xFC", zH = "\xDD", GH = "\xFD", WH = "\xA5", YH = "\xFF", sn = {
  Aacute: QU,
  aacute: ZU,
  Acirc: KU,
  acirc: t2,
  acute: e2,
  AElig: s2,
  aelig: n2,
  Agrave: r2,
  agrave: o2,
  amp: i2,
  AMP: c2,
  Aring: a2,
  aring: l2,
  Atilde: u2,
  atilde: f2,
  Auml: h2,
  auml: p2,
  brvbar: d2,
  Ccedil: g2,
  ccedil: m2,
  cedil: b2,
  cent: y2,
  copy: v2,
  COPY: w2,
  curren: x2,
  deg: S2,
  divide: _2,
  Eacute: T2,
  eacute: E2,
  Ecirc: C2,
  ecirc: A2,
  Egrave: q2,
  egrave: O2,
  ETH: D2,
  eth: L2,
  Euml: N2,
  euml: P2,
  frac12: k2,
  frac14: R2,
  frac34: $2,
  gt: M2,
  GT: I2,
  Iacute: j2,
  iacute: B2,
  Icirc: U2,
  icirc: H2,
  iexcl: V2,
  Igrave: F2,
  igrave: z2,
  iquest: G2,
  Iuml: W2,
  iuml: Y2,
  laquo: J2,
  lt: X2,
  LT: Q2,
  macr: Z2,
  micro: K2,
  middot: tH,
  nbsp: eH,
  not: sH,
  Ntilde: nH,
  ntilde: rH,
  Oacute: oH,
  oacute: iH,
  Ocirc: cH,
  ocirc: aH,
  Ograve: lH,
  ograve: uH,
  ordf: fH,
  ordm: hH,
  Oslash: pH,
  oslash: dH,
  Otilde: gH,
  otilde: mH,
  Ouml: bH,
  ouml: yH,
  para: vH,
  plusmn: wH,
  pound: xH,
  quot: SH,
  QUOT: _H,
  raquo: TH,
  reg: EH,
  REG: CH,
  sect: AH,
  shy: qH,
  sup1: OH,
  sup2: DH,
  sup3: LH,
  szlig: NH,
  THORN: PH,
  thorn: kH,
  times: RH,
  Uacute: $H,
  uacute: MH,
  Ucirc: IH,
  ucirc: jH,
  Ugrave: BH,
  ugrave: UH,
  uml: HH,
  Uuml: VH,
  uuml: FH,
  Yacute: zH,
  yacute: GH,
  yen: WH,
  yuml: YH
}, JH = "&", XH = "'", QH = ">", ZH = "<", KH = '"', Ke = {
  amp: JH,
  apos: XH,
  gt: QH,
  lt: ZH,
  quot: KH
};
var de = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(he, "__esModule", { value: !0 });
var tV = de(pe), eV = de(Ze), Ae = de(sn), sV = de(Ke);
function W(s) {
  return s === " " || s === `
` || s === "	" || s === "\f" || s === "\r";
}
function ws(s) {
  return s >= "a" && s <= "z" || s >= "A" && s <= "Z";
}
function k(s, t, e) {
  var n = s.toLowerCase();
  return s === n ? function(r, o) {
    o === n ? r._state = t : (r._state = e, r._index--);
  } : function(r, o) {
    o === n || o === s ? r._state = t : (r._state = e, r._index--);
  };
}
function et(s, t) {
  var e = s.toLowerCase();
  return function(n, r) {
    r === e || r === s ? n._state = t : (n._state = 3, n._index--);
  };
}
var nV = k("C", 24, 16), rV = k("D", 25, 16), oV = k("A", 26, 16), iV = k("T", 27, 16), cV = k("A", 28, 16), aV = et("R", 35), lV = et("I", 36), uV = et("P", 37), fV = et("T", 38), hV = k("R", 40, 1), pV = k("I", 41, 1), dV = k("P", 42, 1), gV = k("T", 43, 1), mV = et("Y", 45), bV = et("L", 46), yV = et("E", 47), vV = k("Y", 49, 1), wV = k("L", 50, 1), xV = k("E", 51, 1), SV = et("I", 54), _V = et("T", 55), TV = et("L", 56), EV = et("E", 57), CV = k("I", 58, 1), AV = k("T", 59, 1), qV = k("L", 60, 1), OV = k("E", 61, 1), DV = k("#", 63, 64), LV = k("X", 66, 65), NV = function() {
  function s(t, e) {
    var n;
    this._state = 1, this.buffer = "", this.sectionStart = 0, this._index = 0, this.bufferOffset = 0, this.baseState = 1, this.special = 1, this.running = !0, this.ended = !1, this.cbs = e, this.xmlMode = !!(t != null && t.xmlMode), this.decodeEntities = (n = t == null ? void 0 : t.decodeEntities) !== null && n !== void 0 ? n : !0;
  }
  return s.prototype.reset = function() {
    this._state = 1, this.buffer = "", this.sectionStart = 0, this._index = 0, this.bufferOffset = 0, this.baseState = 1, this.special = 1, this.running = !0, this.ended = !1;
  }, s.prototype.write = function(t) {
    this.ended && this.cbs.onerror(Error(".write() after done!")), this.buffer += t, this.parse();
  }, s.prototype.end = function(t) {
    this.ended && this.cbs.onerror(Error(".end() after done!")), t && this.write(t), this.ended = !0, this.running && this.finish();
  }, s.prototype.pause = function() {
    this.running = !1;
  }, s.prototype.resume = function() {
    this.running = !0, this._index < this.buffer.length && this.parse(), this.ended && this.finish();
  }, s.prototype.getAbsoluteIndex = function() {
    return this.bufferOffset + this._index;
  }, s.prototype.stateText = function(t) {
    t === "<" ? (this._index > this.sectionStart && this.cbs.ontext(this.getSection()), this._state = 2, this.sectionStart = this._index) : this.decodeEntities && t === "&" && (this.special === 1 || this.special === 4) && (this._index > this.sectionStart && this.cbs.ontext(this.getSection()), this.baseState = 1, this._state = 62, this.sectionStart = this._index);
  }, s.prototype.isTagStartChar = function(t) {
    return ws(t) || this.xmlMode && !W(t) && t !== "/" && t !== ">";
  }, s.prototype.stateBeforeTagName = function(t) {
    t === "/" ? this._state = 5 : t === "<" ? (this.cbs.ontext(this.getSection()), this.sectionStart = this._index) : t === ">" || this.special !== 1 || W(t) ? this._state = 1 : t === "!" ? (this._state = 15, this.sectionStart = this._index + 1) : t === "?" ? (this._state = 17, this.sectionStart = this._index + 1) : this.isTagStartChar(t) ? (this._state = !this.xmlMode && (t === "s" || t === "S") ? 32 : !this.xmlMode && (t === "t" || t === "T") ? 52 : 3, this.sectionStart = this._index) : this._state = 1;
  }, s.prototype.stateInTagName = function(t) {
    (t === "/" || t === ">" || W(t)) && (this.emitToken("onopentagname"), this._state = 8, this._index--);
  }, s.prototype.stateBeforeClosingTagName = function(t) {
    W(t) || (t === ">" ? this._state = 1 : this.special !== 1 ? this.special !== 4 && (t === "s" || t === "S") ? this._state = 33 : this.special === 4 && (t === "t" || t === "T") ? this._state = 53 : (this._state = 1, this._index--) : this.isTagStartChar(t) ? (this._state = 6, this.sectionStart = this._index) : (this._state = 20, this.sectionStart = this._index));
  }, s.prototype.stateInClosingTagName = function(t) {
    (t === ">" || W(t)) && (this.emitToken("onclosetag"), this._state = 7, this._index--);
  }, s.prototype.stateAfterClosingTagName = function(t) {
    t === ">" && (this._state = 1, this.sectionStart = this._index + 1);
  }, s.prototype.stateBeforeAttributeName = function(t) {
    t === ">" ? (this.cbs.onopentagend(), this._state = 1, this.sectionStart = this._index + 1) : t === "/" ? this._state = 4 : W(t) || (this._state = 9, this.sectionStart = this._index);
  }, s.prototype.stateInSelfClosingTag = function(t) {
    t === ">" ? (this.cbs.onselfclosingtag(), this._state = 1, this.sectionStart = this._index + 1, this.special = 1) : W(t) || (this._state = 8, this._index--);
  }, s.prototype.stateInAttributeName = function(t) {
    (t === "=" || t === "/" || t === ">" || W(t)) && (this.cbs.onattribname(this.getSection()), this.sectionStart = -1, this._state = 10, this._index--);
  }, s.prototype.stateAfterAttributeName = function(t) {
    t === "=" ? this._state = 11 : t === "/" || t === ">" ? (this.cbs.onattribend(void 0), this._state = 8, this._index--) : W(t) || (this.cbs.onattribend(void 0), this._state = 9, this.sectionStart = this._index);
  }, s.prototype.stateBeforeAttributeValue = function(t) {
    t === '"' ? (this._state = 12, this.sectionStart = this._index + 1) : t === "'" ? (this._state = 13, this.sectionStart = this._index + 1) : W(t) || (this._state = 14, this.sectionStart = this._index, this._index--);
  }, s.prototype.handleInAttributeValue = function(t, e) {
    t === e ? (this.emitToken("onattribdata"), this.cbs.onattribend(e), this._state = 8) : this.decodeEntities && t === "&" && (this.emitToken("onattribdata"), this.baseState = this._state, this._state = 62, this.sectionStart = this._index);
  }, s.prototype.stateInAttributeValueDoubleQuotes = function(t) {
    this.handleInAttributeValue(t, '"');
  }, s.prototype.stateInAttributeValueSingleQuotes = function(t) {
    this.handleInAttributeValue(t, "'");
  }, s.prototype.stateInAttributeValueNoQuotes = function(t) {
    W(t) || t === ">" ? (this.emitToken("onattribdata"), this.cbs.onattribend(null), this._state = 8, this._index--) : this.decodeEntities && t === "&" && (this.emitToken("onattribdata"), this.baseState = this._state, this._state = 62, this.sectionStart = this._index);
  }, s.prototype.stateBeforeDeclaration = function(t) {
    this._state = t === "[" ? 23 : t === "-" ? 18 : 16;
  }, s.prototype.stateInDeclaration = function(t) {
    t === ">" && (this.cbs.ondeclaration(this.getSection()), this._state = 1, this.sectionStart = this._index + 1);
  }, s.prototype.stateInProcessingInstruction = function(t) {
    t === ">" && (this.cbs.onprocessinginstruction(this.getSection()), this._state = 1, this.sectionStart = this._index + 1);
  }, s.prototype.stateBeforeComment = function(t) {
    t === "-" ? (this._state = 19, this.sectionStart = this._index + 1) : this._state = 16;
  }, s.prototype.stateInComment = function(t) {
    t === "-" && (this._state = 21);
  }, s.prototype.stateInSpecialComment = function(t) {
    t === ">" && (this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index)), this._state = 1, this.sectionStart = this._index + 1);
  }, s.prototype.stateAfterComment1 = function(t) {
    t === "-" ? this._state = 22 : this._state = 19;
  }, s.prototype.stateAfterComment2 = function(t) {
    t === ">" ? (this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2)), this._state = 1, this.sectionStart = this._index + 1) : t !== "-" && (this._state = 19);
  }, s.prototype.stateBeforeCdata6 = function(t) {
    t === "[" ? (this._state = 29, this.sectionStart = this._index + 1) : (this._state = 16, this._index--);
  }, s.prototype.stateInCdata = function(t) {
    t === "]" && (this._state = 30);
  }, s.prototype.stateAfterCdata1 = function(t) {
    t === "]" ? this._state = 31 : this._state = 29;
  }, s.prototype.stateAfterCdata2 = function(t) {
    t === ">" ? (this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2)), this._state = 1, this.sectionStart = this._index + 1) : t !== "]" && (this._state = 29);
  }, s.prototype.stateBeforeSpecialS = function(t) {
    t === "c" || t === "C" ? this._state = 34 : t === "t" || t === "T" ? this._state = 44 : (this._state = 3, this._index--);
  }, s.prototype.stateBeforeSpecialSEnd = function(t) {
    this.special === 2 && (t === "c" || t === "C") ? this._state = 39 : this.special === 3 && (t === "t" || t === "T") ? this._state = 48 : this._state = 1;
  }, s.prototype.stateBeforeSpecialLast = function(t, e) {
    (t === "/" || t === ">" || W(t)) && (this.special = e), this._state = 3, this._index--;
  }, s.prototype.stateAfterSpecialLast = function(t, e) {
    t === ">" || W(t) ? (this.special = 1, this._state = 6, this.sectionStart = this._index - e, this._index--) : this._state = 1;
  }, s.prototype.parseFixedEntity = function(t) {
    if (t === void 0 && (t = this.xmlMode ? sV.default : eV.default), this.sectionStart + 1 < this._index) {
      var e = this.buffer.substring(this.sectionStart + 1, this._index);
      Object.prototype.hasOwnProperty.call(t, e) && (this.emitPartial(t[e]), this.sectionStart = this._index + 1);
    }
  }, s.prototype.parseLegacyEntity = function() {
    for (var t = this.sectionStart + 1, e = Math.min(this._index - t, 6); e >= 2; ) {
      var n = this.buffer.substr(t, e);
      if (Object.prototype.hasOwnProperty.call(Ae.default, n)) {
        this.emitPartial(Ae.default[n]), this.sectionStart += e + 1;
        return;
      }
      e--;
    }
  }, s.prototype.stateInNamedEntity = function(t) {
    t === ";" ? (this.parseFixedEntity(), this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode && this.parseLegacyEntity(), this._state = this.baseState) : (t < "0" || t > "9") && !ws(t) && (this.xmlMode || this.sectionStart + 1 === this._index || (this.baseState !== 1 ? t !== "=" && this.parseFixedEntity(Ae.default) : this.parseLegacyEntity()), this._state = this.baseState, this._index--);
  }, s.prototype.decodeNumericEntity = function(t, e, n) {
    var r = this.sectionStart + t;
    if (r !== this._index) {
      var o = this.buffer.substring(r, this._index), i = parseInt(o, e);
      this.emitPartial(tV.default(i)), this.sectionStart = n ? this._index + 1 : this._index;
    }
    this._state = this.baseState;
  }, s.prototype.stateInNumericEntity = function(t) {
    t === ";" ? this.decodeNumericEntity(2, 10, !0) : (t < "0" || t > "9") && (this.xmlMode ? this._state = this.baseState : this.decodeNumericEntity(2, 10, !1), this._index--);
  }, s.prototype.stateInHexEntity = function(t) {
    t === ";" ? this.decodeNumericEntity(3, 16, !0) : (t < "a" || t > "f") && (t < "A" || t > "F") && (t < "0" || t > "9") && (this.xmlMode ? this._state = this.baseState : this.decodeNumericEntity(3, 16, !1), this._index--);
  }, s.prototype.cleanup = function() {
    this.sectionStart < 0 ? (this.buffer = "", this.bufferOffset += this._index, this._index = 0) : this.running && (this._state === 1 ? (this.sectionStart !== this._index && this.cbs.ontext(this.buffer.substr(this.sectionStart)), this.buffer = "", this.bufferOffset += this._index, this._index = 0) : this.sectionStart === this._index ? (this.buffer = "", this.bufferOffset += this._index, this._index = 0) : (this.buffer = this.buffer.substr(this.sectionStart), this._index -= this.sectionStart, this.bufferOffset += this.sectionStart), this.sectionStart = 0);
  }, s.prototype.parse = function() {
    for (; this._index < this.buffer.length && this.running; ) {
      var t = this.buffer.charAt(this._index);
      this._state === 1 ? this.stateText(t) : this._state === 12 ? this.stateInAttributeValueDoubleQuotes(t) : this._state === 9 ? this.stateInAttributeName(t) : this._state === 19 ? this.stateInComment(t) : this._state === 20 ? this.stateInSpecialComment(t) : this._state === 8 ? this.stateBeforeAttributeName(t) : this._state === 3 ? this.stateInTagName(t) : this._state === 6 ? this.stateInClosingTagName(t) : this._state === 2 ? this.stateBeforeTagName(t) : this._state === 10 ? this.stateAfterAttributeName(t) : this._state === 13 ? this.stateInAttributeValueSingleQuotes(t) : this._state === 11 ? this.stateBeforeAttributeValue(t) : this._state === 5 ? this.stateBeforeClosingTagName(t) : this._state === 7 ? this.stateAfterClosingTagName(t) : this._state === 32 ? this.stateBeforeSpecialS(t) : this._state === 21 ? this.stateAfterComment1(t) : this._state === 14 ? this.stateInAttributeValueNoQuotes(t) : this._state === 4 ? this.stateInSelfClosingTag(t) : this._state === 16 ? this.stateInDeclaration(t) : this._state === 15 ? this.stateBeforeDeclaration(t) : this._state === 22 ? this.stateAfterComment2(t) : this._state === 18 ? this.stateBeforeComment(t) : this._state === 33 ? this.stateBeforeSpecialSEnd(t) : this._state === 53 ? CV(this, t) : this._state === 39 ? hV(this, t) : this._state === 40 ? pV(this, t) : this._state === 41 ? dV(this, t) : this._state === 34 ? aV(this, t) : this._state === 35 ? lV(this, t) : this._state === 36 ? uV(this, t) : this._state === 37 ? fV(this, t) : this._state === 38 ? this.stateBeforeSpecialLast(t, 2) : this._state === 42 ? gV(this, t) : this._state === 43 ? this.stateAfterSpecialLast(t, 6) : this._state === 44 ? mV(this, t) : this._state === 29 ? this.stateInCdata(t) : this._state === 45 ? bV(this, t) : this._state === 46 ? yV(this, t) : this._state === 47 ? this.stateBeforeSpecialLast(t, 3) : this._state === 48 ? vV(this, t) : this._state === 49 ? wV(this, t) : this._state === 50 ? xV(this, t) : this._state === 51 ? this.stateAfterSpecialLast(t, 5) : this._state === 52 ? SV(this, t) : this._state === 54 ? _V(this, t) : this._state === 55 ? TV(this, t) : this._state === 56 ? EV(this, t) : this._state === 57 ? this.stateBeforeSpecialLast(t, 4) : this._state === 58 ? AV(this, t) : this._state === 59 ? qV(this, t) : this._state === 60 ? OV(this, t) : this._state === 61 ? this.stateAfterSpecialLast(t, 5) : this._state === 17 ? this.stateInProcessingInstruction(t) : this._state === 64 ? this.stateInNamedEntity(t) : this._state === 23 ? nV(this, t) : this._state === 62 ? DV(this, t) : this._state === 24 ? rV(this, t) : this._state === 25 ? oV(this, t) : this._state === 30 ? this.stateAfterCdata1(t) : this._state === 31 ? this.stateAfterCdata2(t) : this._state === 26 ? iV(this, t) : this._state === 27 ? cV(this, t) : this._state === 28 ? this.stateBeforeCdata6(t) : this._state === 66 ? this.stateInHexEntity(t) : this._state === 65 ? this.stateInNumericEntity(t) : this._state === 63 ? LV(this, t) : this.cbs.onerror(Error("unknown _state"), this._state), this._index++;
    }
    this.cleanup();
  }, s.prototype.finish = function() {
    this.sectionStart < this._index && this.handleTrailingData(), this.cbs.onend();
  }, s.prototype.handleTrailingData = function() {
    var t = this.buffer.substr(this.sectionStart);
    this._state === 29 || this._state === 30 || this._state === 31 ? this.cbs.oncdata(t) : this._state === 19 || this._state === 21 || this._state === 22 ? this.cbs.oncomment(t) : this._state === 64 && !this.xmlMode ? (this.parseLegacyEntity(), this.sectionStart < this._index && (this._state = this.baseState, this.handleTrailingData())) : this._state === 65 && !this.xmlMode ? (this.decodeNumericEntity(2, 10, !1), this.sectionStart < this._index && (this._state = this.baseState, this.handleTrailingData())) : this._state === 66 && !this.xmlMode ? (this.decodeNumericEntity(3, 16, !1), this.sectionStart < this._index && (this._state = this.baseState, this.handleTrailingData())) : this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6 && this.cbs.ontext(t);
  }, s.prototype.getSection = function() {
    return this.buffer.substring(this.sectionStart, this._index);
  }, s.prototype.emitToken = function(t) {
    this.cbs[t](this.getSection()), this.sectionStart = -1;
  }, s.prototype.emitPartial = function(t) {
    this.baseState !== 1 ? this.cbs.onattribdata(t) : this.cbs.ontext(t);
  }, s;
}();
he.default = NV;
var PV = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.Parser = void 0;
var kV = PV(he), St = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), C = /* @__PURE__ */ new Set(["p"]), xs = {
  tr: /* @__PURE__ */ new Set(["tr", "th", "td"]),
  th: /* @__PURE__ */ new Set(["th"]),
  td: /* @__PURE__ */ new Set(["thead", "th", "td"]),
  body: /* @__PURE__ */ new Set(["head", "link", "script"]),
  li: /* @__PURE__ */ new Set(["li"]),
  p: C,
  h1: C,
  h2: C,
  h3: C,
  h4: C,
  h5: C,
  h6: C,
  select: St,
  input: St,
  output: St,
  button: St,
  datalist: St,
  textarea: St,
  option: /* @__PURE__ */ new Set(["option"]),
  optgroup: /* @__PURE__ */ new Set(["optgroup", "option"]),
  dd: /* @__PURE__ */ new Set(["dt", "dd"]),
  dt: /* @__PURE__ */ new Set(["dt", "dd"]),
  address: C,
  article: C,
  aside: C,
  blockquote: C,
  details: C,
  div: C,
  dl: C,
  fieldset: C,
  figcaption: C,
  figure: C,
  footer: C,
  form: C,
  header: C,
  hr: C,
  main: C,
  nav: C,
  ol: C,
  pre: C,
  section: C,
  table: C,
  ul: C,
  rt: /* @__PURE__ */ new Set(["rt", "rp"]),
  rp: /* @__PURE__ */ new Set(["rt", "rp"]),
  tbody: /* @__PURE__ */ new Set(["thead", "tbody"]),
  tfoot: /* @__PURE__ */ new Set(["thead", "tbody"])
}, qe = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), Ss = /* @__PURE__ */ new Set(["math", "svg"]), _s = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), RV = /\s|\//, $V = function() {
  function s(t, e) {
    e === void 0 && (e = {});
    var n, r, o, i, c;
    this.startIndex = 0, this.endIndex = null, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.options = e, this.cbs = t != null ? t : {}, this.lowerCaseTagNames = (n = e.lowerCaseTags) !== null && n !== void 0 ? n : !e.xmlMode, this.lowerCaseAttributeNames = (r = e.lowerCaseAttributeNames) !== null && r !== void 0 ? r : !e.xmlMode, this.tokenizer = new ((o = e.Tokenizer) !== null && o !== void 0 ? o : kV.default)(this.options, this), (c = (i = this.cbs).onparserinit) === null || c === void 0 || c.call(i, this);
  }
  return s.prototype.updatePosition = function(t) {
    this.endIndex === null ? this.tokenizer.sectionStart <= t ? this.startIndex = 0 : this.startIndex = this.tokenizer.sectionStart - t : this.startIndex = this.endIndex + 1, this.endIndex = this.tokenizer.getAbsoluteIndex();
  }, s.prototype.ontext = function(t) {
    var e, n;
    this.updatePosition(1), this.endIndex--, (n = (e = this.cbs).ontext) === null || n === void 0 || n.call(e, t);
  }, s.prototype.onopentagname = function(t) {
    var e, n;
    if (this.lowerCaseTagNames && (t = t.toLowerCase()), this.tagname = t, !this.options.xmlMode && Object.prototype.hasOwnProperty.call(xs, t))
      for (var r = void 0; this.stack.length > 0 && xs[t].has(r = this.stack[this.stack.length - 1]); )
        this.onclosetag(r);
    (this.options.xmlMode || !qe.has(t)) && (this.stack.push(t), Ss.has(t) ? this.foreignContext.push(!0) : _s.has(t) && this.foreignContext.push(!1)), (n = (e = this.cbs).onopentagname) === null || n === void 0 || n.call(e, t), this.cbs.onopentag && (this.attribs = {});
  }, s.prototype.onopentagend = function() {
    var t, e;
    this.updatePosition(1), this.attribs && ((e = (t = this.cbs).onopentag) === null || e === void 0 || e.call(t, this.tagname, this.attribs), this.attribs = null), !this.options.xmlMode && this.cbs.onclosetag && qe.has(this.tagname) && this.cbs.onclosetag(this.tagname), this.tagname = "";
  }, s.prototype.onclosetag = function(t) {
    if (this.updatePosition(1), this.lowerCaseTagNames && (t = t.toLowerCase()), (Ss.has(t) || _s.has(t)) && this.foreignContext.pop(), this.stack.length && (this.options.xmlMode || !qe.has(t))) {
      var e = this.stack.lastIndexOf(t);
      if (e !== -1)
        if (this.cbs.onclosetag)
          for (e = this.stack.length - e; e--; )
            this.cbs.onclosetag(this.stack.pop());
        else
          this.stack.length = e;
      else
        t === "p" && !this.options.xmlMode && (this.onopentagname(t), this.closeCurrentTag());
    } else
      !this.options.xmlMode && (t === "br" || t === "p") && (this.onopentagname(t), this.closeCurrentTag());
  }, s.prototype.onselfclosingtag = function() {
    this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? this.closeCurrentTag() : this.onopentagend();
  }, s.prototype.closeCurrentTag = function() {
    var t, e, n = this.tagname;
    this.onopentagend(), this.stack[this.stack.length - 1] === n && ((e = (t = this.cbs).onclosetag) === null || e === void 0 || e.call(t, n), this.stack.pop());
  }, s.prototype.onattribname = function(t) {
    this.lowerCaseAttributeNames && (t = t.toLowerCase()), this.attribname = t;
  }, s.prototype.onattribdata = function(t) {
    this.attribvalue += t;
  }, s.prototype.onattribend = function(t) {
    var e, n;
    (n = (e = this.cbs).onattribute) === null || n === void 0 || n.call(e, this.attribname, this.attribvalue, t), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribname = "", this.attribvalue = "";
  }, s.prototype.getInstructionName = function(t) {
    var e = t.search(RV), n = e < 0 ? t : t.substr(0, e);
    return this.lowerCaseTagNames && (n = n.toLowerCase()), n;
  }, s.prototype.ondeclaration = function(t) {
    if (this.cbs.onprocessinginstruction) {
      var e = this.getInstructionName(t);
      this.cbs.onprocessinginstruction("!" + e, "!" + t);
    }
  }, s.prototype.onprocessinginstruction = function(t) {
    if (this.cbs.onprocessinginstruction) {
      var e = this.getInstructionName(t);
      this.cbs.onprocessinginstruction("?" + e, "?" + t);
    }
  }, s.prototype.oncomment = function(t) {
    var e, n, r, o;
    this.updatePosition(4), (n = (e = this.cbs).oncomment) === null || n === void 0 || n.call(e, t), (o = (r = this.cbs).oncommentend) === null || o === void 0 || o.call(r);
  }, s.prototype.oncdata = function(t) {
    var e, n, r, o, i, c;
    this.updatePosition(1), this.options.xmlMode || this.options.recognizeCDATA ? ((n = (e = this.cbs).oncdatastart) === null || n === void 0 || n.call(e), (o = (r = this.cbs).ontext) === null || o === void 0 || o.call(r, t), (c = (i = this.cbs).oncdataend) === null || c === void 0 || c.call(i)) : this.oncomment("[CDATA[" + t + "]]");
  }, s.prototype.onerror = function(t) {
    var e, n;
    (n = (e = this.cbs).onerror) === null || n === void 0 || n.call(e, t);
  }, s.prototype.onend = function() {
    var t, e;
    if (this.cbs.onclosetag)
      for (var n = this.stack.length; n > 0; this.cbs.onclosetag(this.stack[--n]))
        ;
    (e = (t = this.cbs).onend) === null || e === void 0 || e.call(t);
  }, s.prototype.reset = function() {
    var t, e, n, r;
    (e = (t = this.cbs).onreset) === null || e === void 0 || e.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack = [], (r = (n = this.cbs).onparserinit) === null || r === void 0 || r.call(n, this);
  }, s.prototype.parseComplete = function(t) {
    this.reset(), this.end(t);
  }, s.prototype.write = function(t) {
    this.tokenizer.write(t);
  }, s.prototype.end = function(t) {
    this.tokenizer.end(t);
  }, s.prototype.pause = function() {
    this.tokenizer.pause();
  }, s.prototype.resume = function() {
    this.tokenizer.resume();
  }, s.prototype.parseChunk = function(t) {
    this.write(t);
  }, s.prototype.done = function(t) {
    this.end(t);
  }, s;
}();
Ut.Parser = $V;
var lt = {}, qt = {};
(function(s) {
  Object.defineProperty(s, "__esModule", { value: !0 }), s.Doctype = s.CDATA = s.Tag = s.Style = s.Script = s.Comment = s.Directive = s.Text = s.Root = s.isTag = s.ElementType = void 0;
  var t;
  (function(n) {
    n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
  })(t = s.ElementType || (s.ElementType = {}));
  function e(n) {
    return n.type === t.Tag || n.type === t.Script || n.type === t.Style;
  }
  s.isTag = e, s.Root = t.Root, s.Text = t.Text, s.Directive = t.Directive, s.Comment = t.Comment, s.Script = t.Script, s.Style = t.Style, s.Tag = t.Tag, s.CDATA = t.CDATA, s.Doctype = t.Doctype;
})(qt);
var S = {}, vt = v && v.__extends || function() {
  var s = function(t, e) {
    return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
      n.__proto__ = r;
    } || function(n, r) {
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
    }, s(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    s(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), Nt = v && v.__assign || function() {
  return Nt = Object.assign || function(s) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (s[r] = t[r]);
    }
    return s;
  }, Nt.apply(this, arguments);
};
Object.defineProperty(S, "__esModule", { value: !0 });
S.cloneNode = S.hasChildren = S.isDocument = S.isDirective = S.isComment = S.isText = S.isCDATA = S.isTag = S.Element = S.Document = S.NodeWithChildren = S.ProcessingInstruction = S.Comment = S.Text = S.DataNode = S.Node = void 0;
var L = qt, MV = /* @__PURE__ */ new Map([
  [L.ElementType.Tag, 1],
  [L.ElementType.Script, 1],
  [L.ElementType.Style, 1],
  [L.ElementType.Directive, 1],
  [L.ElementType.Text, 3],
  [L.ElementType.CDATA, 4],
  [L.ElementType.Comment, 8],
  [L.ElementType.Root, 9]
]), ts = function() {
  function s(t) {
    this.type = t, this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
  }
  return Object.defineProperty(s.prototype, "nodeType", {
    get: function() {
      var t;
      return (t = MV.get(this.type)) !== null && t !== void 0 ? t : 1;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s.prototype, "parentNode", {
    get: function() {
      return this.parent;
    },
    set: function(t) {
      this.parent = t;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s.prototype, "previousSibling", {
    get: function() {
      return this.prev;
    },
    set: function(t) {
      this.prev = t;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s.prototype, "nextSibling", {
    get: function() {
      return this.next;
    },
    set: function(t) {
      this.next = t;
    },
    enumerable: !1,
    configurable: !0
  }), s.prototype.cloneNode = function(t) {
    return t === void 0 && (t = !1), es(this, t);
  }, s;
}();
S.Node = ts;
var ge = function(s) {
  vt(t, s);
  function t(e, n) {
    var r = s.call(this, e) || this;
    return r.data = n, r;
  }
  return Object.defineProperty(t.prototype, "nodeValue", {
    get: function() {
      return this.data;
    },
    set: function(e) {
      this.data = e;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}(ts);
S.DataNode = ge;
var nn = function(s) {
  vt(t, s);
  function t(e) {
    return s.call(this, L.ElementType.Text, e) || this;
  }
  return t;
}(ge);
S.Text = nn;
var rn = function(s) {
  vt(t, s);
  function t(e) {
    return s.call(this, L.ElementType.Comment, e) || this;
  }
  return t;
}(ge);
S.Comment = rn;
var on = function(s) {
  vt(t, s);
  function t(e, n) {
    var r = s.call(this, L.ElementType.Directive, n) || this;
    return r.name = e, r;
  }
  return t;
}(ge);
S.ProcessingInstruction = on;
var me = function(s) {
  vt(t, s);
  function t(e, n) {
    var r = s.call(this, e) || this;
    return r.children = n, r;
  }
  return Object.defineProperty(t.prototype, "firstChild", {
    get: function() {
      var e;
      return (e = this.children[0]) !== null && e !== void 0 ? e : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "lastChild", {
    get: function() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "childNodes", {
    get: function() {
      return this.children;
    },
    set: function(e) {
      this.children = e;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}(ts);
S.NodeWithChildren = me;
var cn = function(s) {
  vt(t, s);
  function t(e) {
    return s.call(this, L.ElementType.Root, e) || this;
  }
  return t;
}(me);
S.Document = cn;
var an = function(s) {
  vt(t, s);
  function t(e, n, r, o) {
    r === void 0 && (r = []), o === void 0 && (o = e === "script" ? L.ElementType.Script : e === "style" ? L.ElementType.Style : L.ElementType.Tag);
    var i = s.call(this, o, r) || this;
    return i.name = e, i.attribs = n, i;
  }
  return Object.defineProperty(t.prototype, "tagName", {
    get: function() {
      return this.name;
    },
    set: function(e) {
      this.name = e;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "attributes", {
    get: function() {
      var e = this;
      return Object.keys(this.attribs).map(function(n) {
        var r, o;
        return {
          name: n,
          value: e.attribs[n],
          namespace: (r = e["x-attribsNamespace"]) === null || r === void 0 ? void 0 : r[n],
          prefix: (o = e["x-attribsPrefix"]) === null || o === void 0 ? void 0 : o[n]
        };
      });
    },
    enumerable: !1,
    configurable: !0
  }), t;
}(me);
S.Element = an;
function ln(s) {
  return (0, L.isTag)(s);
}
S.isTag = ln;
function un(s) {
  return s.type === L.ElementType.CDATA;
}
S.isCDATA = un;
function fn(s) {
  return s.type === L.ElementType.Text;
}
S.isText = fn;
function hn(s) {
  return s.type === L.ElementType.Comment;
}
S.isComment = hn;
function pn(s) {
  return s.type === L.ElementType.Directive;
}
S.isDirective = pn;
function dn(s) {
  return s.type === L.ElementType.Root;
}
S.isDocument = dn;
function IV(s) {
  return Object.prototype.hasOwnProperty.call(s, "children");
}
S.hasChildren = IV;
function es(s, t) {
  t === void 0 && (t = !1);
  var e;
  if (fn(s))
    e = new nn(s.data);
  else if (hn(s))
    e = new rn(s.data);
  else if (ln(s)) {
    var n = t ? Oe(s.children) : [], r = new an(s.name, Nt({}, s.attribs), n);
    n.forEach(function(a) {
      return a.parent = r;
    }), s.namespace != null && (r.namespace = s.namespace), s["x-attribsNamespace"] && (r["x-attribsNamespace"] = Nt({}, s["x-attribsNamespace"])), s["x-attribsPrefix"] && (r["x-attribsPrefix"] = Nt({}, s["x-attribsPrefix"])), e = r;
  } else if (un(s)) {
    var n = t ? Oe(s.children) : [], o = new me(L.ElementType.CDATA, n);
    n.forEach(function(l) {
      return l.parent = o;
    }), e = o;
  } else if (dn(s)) {
    var n = t ? Oe(s.children) : [], i = new cn(n);
    n.forEach(function(l) {
      return l.parent = i;
    }), s["x-mode"] && (i["x-mode"] = s["x-mode"]), e = i;
  } else if (pn(s)) {
    var c = new on(s.name, s.data);
    s["x-name"] != null && (c["x-name"] = s["x-name"], c["x-publicId"] = s["x-publicId"], c["x-systemId"] = s["x-systemId"]), e = c;
  } else
    throw new Error("Not implemented yet: ".concat(s.type));
  return e.startIndex = s.startIndex, e.endIndex = s.endIndex, s.sourceCodeLocation != null && (e.sourceCodeLocation = s.sourceCodeLocation), e;
}
S.cloneNode = es;
function Oe(s) {
  for (var t = s.map(function(n) {
    return es(n, !0);
  }), e = 1; e < t.length; e++)
    t[e].prev = t[e - 1], t[e - 1].next = t[e];
  return t;
}
(function(s) {
  var t = v && v.__createBinding || (Object.create ? function(a, l, u, h) {
    h === void 0 && (h = u);
    var b = Object.getOwnPropertyDescriptor(l, u);
    (!b || ("get" in b ? !l.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
      return l[u];
    } }), Object.defineProperty(a, h, b);
  } : function(a, l, u, h) {
    h === void 0 && (h = u), a[h] = l[u];
  }), e = v && v.__exportStar || function(a, l) {
    for (var u in a)
      u !== "default" && !Object.prototype.hasOwnProperty.call(l, u) && t(l, a, u);
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.DomHandler = void 0;
  var n = qt, r = S;
  e(S, s);
  var o = /\s+/g, i = {
    normalizeWhitespace: !1,
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, c = function() {
    function a(l, u, h) {
      this.dom = [], this.root = new r.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (h = u, u = i), typeof l == "object" && (u = l, l = void 0), this.callback = l != null ? l : null, this.options = u != null ? u : i, this.elementCB = h != null ? h : null;
    }
    return a.prototype.onparserinit = function(l) {
      this.parser = l;
    }, a.prototype.onreset = function() {
      this.dom = [], this.root = new r.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
    }, a.prototype.onend = function() {
      this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
    }, a.prototype.onerror = function(l) {
      this.handleCallback(l);
    }, a.prototype.onclosetag = function() {
      this.lastNode = null;
      var l = this.tagStack.pop();
      this.options.withEndIndices && (l.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(l);
    }, a.prototype.onopentag = function(l, u) {
      var h = this.options.xmlMode ? n.ElementType.Tag : void 0, b = new r.Element(l, u, void 0, h);
      this.addNode(b), this.tagStack.push(b);
    }, a.prototype.ontext = function(l) {
      var u = this.options.normalizeWhitespace, h = this.lastNode;
      if (h && h.type === n.ElementType.Text)
        u ? h.data = (h.data + l).replace(o, " ") : h.data += l, this.options.withEndIndices && (h.endIndex = this.parser.endIndex);
      else {
        u && (l = l.replace(o, " "));
        var b = new r.Text(l);
        this.addNode(b), this.lastNode = b;
      }
    }, a.prototype.oncomment = function(l) {
      if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
        this.lastNode.data += l;
        return;
      }
      var u = new r.Comment(l);
      this.addNode(u), this.lastNode = u;
    }, a.prototype.oncommentend = function() {
      this.lastNode = null;
    }, a.prototype.oncdatastart = function() {
      var l = new r.Text(""), u = new r.NodeWithChildren(n.ElementType.CDATA, [l]);
      this.addNode(u), l.parent = u, this.lastNode = l;
    }, a.prototype.oncdataend = function() {
      this.lastNode = null;
    }, a.prototype.onprocessinginstruction = function(l, u) {
      var h = new r.ProcessingInstruction(l, u);
      this.addNode(h);
    }, a.prototype.handleCallback = function(l) {
      if (typeof this.callback == "function")
        this.callback(l, this.dom);
      else if (l)
        throw l;
    }, a.prototype.addNode = function(l) {
      var u = this.tagStack[this.tagStack.length - 1], h = u.children[u.children.length - 1];
      this.options.withStartIndices && (l.startIndex = this.parser.startIndex), this.options.withEndIndices && (l.endIndex = this.parser.endIndex), u.children.push(l), h && (l.prev = h, h.next = l), l.parent = u, this.lastNode = null;
    }, a;
  }();
  s.DomHandler = c, s.default = c;
})(lt);
var yt = {}, ss = {}, Y = {}, ns = {}, gn = {}, at = {}, be = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(at, "__esModule", { value: !0 });
at.decodeHTML = at.decodeHTMLStrict = at.decodeXML = void 0;
var ke = be(Ze), jV = be(sn), BV = be(Ke), Ts = be(pe), UV = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
at.decodeXML = mn(BV.default);
at.decodeHTMLStrict = mn(ke.default);
function mn(s) {
  var t = bn(s);
  return function(e) {
    return String(e).replace(UV, t);
  };
}
var Es = function(s, t) {
  return s < t ? 1 : -1;
};
at.decodeHTML = function() {
  for (var s = Object.keys(jV.default).sort(Es), t = Object.keys(ke.default).sort(Es), e = 0, n = 0; e < t.length; e++)
    s[n] === t[e] ? (t[e] += ";?", n++) : t[e] += ";";
  var r = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), o = bn(ke.default);
  function i(c) {
    return c.substr(-1) !== ";" && (c += ";"), o(c);
  }
  return function(c) {
    return String(c).replace(r, i);
  };
}();
function bn(s) {
  return function(e) {
    if (e.charAt(1) === "#") {
      var n = e.charAt(2);
      return n === "X" || n === "x" ? Ts.default(parseInt(e.substr(3), 16)) : Ts.default(parseInt(e.substr(2), 10));
    }
    return s[e.slice(1, -1)] || e;
  };
}
var J = {}, yn = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(J, "__esModule", { value: !0 });
J.escapeUTF8 = J.escape = J.encodeNonAsciiHTML = J.encodeHTML = J.encodeXML = void 0;
var HV = yn(Ke), vn = xn(HV.default), wn = Sn(vn);
J.encodeXML = En(vn);
var VV = yn(Ze), rs = xn(VV.default), FV = Sn(rs);
J.encodeHTML = GV(rs, FV);
J.encodeNonAsciiHTML = En(rs);
function xn(s) {
  return Object.keys(s).sort().reduce(function(t, e) {
    return t[s[e]] = "&" + e + ";", t;
  }, {});
}
function Sn(s) {
  for (var t = [], e = [], n = 0, r = Object.keys(s); n < r.length; n++) {
    var o = r[n];
    o.length === 1 ? t.push("\\" + o) : e.push(o);
  }
  t.sort();
  for (var i = 0; i < t.length - 1; i++) {
    for (var c = i; c < t.length - 1 && t[c].charCodeAt(1) + 1 === t[c + 1].charCodeAt(1); )
      c += 1;
    var a = 1 + c - i;
    a < 3 || t.splice(i, a, t[i] + "-" + t[c]);
  }
  return e.unshift("[" + t.join("") + "]"), new RegExp(e.join("|"), "g");
}
var _n = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, zV = String.prototype.codePointAt != null ? function(s) {
  return s.codePointAt(0);
} : function(s) {
  return (s.charCodeAt(0) - 55296) * 1024 + s.charCodeAt(1) - 56320 + 65536;
};
function ye(s) {
  return "&#x" + (s.length > 1 ? zV(s) : s.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function GV(s, t) {
  return function(e) {
    return e.replace(t, function(n) {
      return s[n];
    }).replace(_n, ye);
  };
}
var Tn = new RegExp(wn.source + "|" + _n.source, "g");
function WV(s) {
  return s.replace(Tn, ye);
}
J.escape = WV;
function YV(s) {
  return s.replace(wn, ye);
}
J.escapeUTF8 = YV;
function En(s) {
  return function(t) {
    return t.replace(Tn, function(e) {
      return s[e] || ye(e);
    });
  };
}
(function(s) {
  Object.defineProperty(s, "__esModule", { value: !0 }), s.decodeXMLStrict = s.decodeHTML5Strict = s.decodeHTML4Strict = s.decodeHTML5 = s.decodeHTML4 = s.decodeHTMLStrict = s.decodeHTML = s.decodeXML = s.encodeHTML5 = s.encodeHTML4 = s.escapeUTF8 = s.escape = s.encodeNonAsciiHTML = s.encodeHTML = s.encodeXML = s.encode = s.decodeStrict = s.decode = void 0;
  var t = at, e = J;
  function n(a, l) {
    return (!l || l <= 0 ? t.decodeXML : t.decodeHTML)(a);
  }
  s.decode = n;
  function r(a, l) {
    return (!l || l <= 0 ? t.decodeXML : t.decodeHTMLStrict)(a);
  }
  s.decodeStrict = r;
  function o(a, l) {
    return (!l || l <= 0 ? e.encodeXML : e.encodeHTML)(a);
  }
  s.encode = o;
  var i = J;
  Object.defineProperty(s, "encodeXML", { enumerable: !0, get: function() {
    return i.encodeXML;
  } }), Object.defineProperty(s, "encodeHTML", { enumerable: !0, get: function() {
    return i.encodeHTML;
  } }), Object.defineProperty(s, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return i.encodeNonAsciiHTML;
  } }), Object.defineProperty(s, "escape", { enumerable: !0, get: function() {
    return i.escape;
  } }), Object.defineProperty(s, "escapeUTF8", { enumerable: !0, get: function() {
    return i.escapeUTF8;
  } }), Object.defineProperty(s, "encodeHTML4", { enumerable: !0, get: function() {
    return i.encodeHTML;
  } }), Object.defineProperty(s, "encodeHTML5", { enumerable: !0, get: function() {
    return i.encodeHTML;
  } });
  var c = at;
  Object.defineProperty(s, "decodeXML", { enumerable: !0, get: function() {
    return c.decodeXML;
  } }), Object.defineProperty(s, "decodeHTML", { enumerable: !0, get: function() {
    return c.decodeHTML;
  } }), Object.defineProperty(s, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return c.decodeHTMLStrict;
  } }), Object.defineProperty(s, "decodeHTML4", { enumerable: !0, get: function() {
    return c.decodeHTML;
  } }), Object.defineProperty(s, "decodeHTML5", { enumerable: !0, get: function() {
    return c.decodeHTML;
  } }), Object.defineProperty(s, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return c.decodeHTMLStrict;
  } }), Object.defineProperty(s, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return c.decodeHTMLStrict;
  } }), Object.defineProperty(s, "decodeXMLStrict", { enumerable: !0, get: function() {
    return c.decodeXML;
  } });
})(gn);
var Tt = {};
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.attributeNames = Tt.elementNames = void 0;
Tt.elementNames = /* @__PURE__ */ new Map([
  ["altglyph", "altGlyph"],
  ["altglyphdef", "altGlyphDef"],
  ["altglyphitem", "altGlyphItem"],
  ["animatecolor", "animateColor"],
  ["animatemotion", "animateMotion"],
  ["animatetransform", "animateTransform"],
  ["clippath", "clipPath"],
  ["feblend", "feBlend"],
  ["fecolormatrix", "feColorMatrix"],
  ["fecomponenttransfer", "feComponentTransfer"],
  ["fecomposite", "feComposite"],
  ["feconvolvematrix", "feConvolveMatrix"],
  ["fediffuselighting", "feDiffuseLighting"],
  ["fedisplacementmap", "feDisplacementMap"],
  ["fedistantlight", "feDistantLight"],
  ["fedropshadow", "feDropShadow"],
  ["feflood", "feFlood"],
  ["fefunca", "feFuncA"],
  ["fefuncb", "feFuncB"],
  ["fefuncg", "feFuncG"],
  ["fefuncr", "feFuncR"],
  ["fegaussianblur", "feGaussianBlur"],
  ["feimage", "feImage"],
  ["femerge", "feMerge"],
  ["femergenode", "feMergeNode"],
  ["femorphology", "feMorphology"],
  ["feoffset", "feOffset"],
  ["fepointlight", "fePointLight"],
  ["fespecularlighting", "feSpecularLighting"],
  ["fespotlight", "feSpotLight"],
  ["fetile", "feTile"],
  ["feturbulence", "feTurbulence"],
  ["foreignobject", "foreignObject"],
  ["glyphref", "glyphRef"],
  ["lineargradient", "linearGradient"],
  ["radialgradient", "radialGradient"],
  ["textpath", "textPath"]
]);
Tt.attributeNames = /* @__PURE__ */ new Map([
  ["definitionurl", "definitionURL"],
  ["attributename", "attributeName"],
  ["attributetype", "attributeType"],
  ["basefrequency", "baseFrequency"],
  ["baseprofile", "baseProfile"],
  ["calcmode", "calcMode"],
  ["clippathunits", "clipPathUnits"],
  ["diffuseconstant", "diffuseConstant"],
  ["edgemode", "edgeMode"],
  ["filterunits", "filterUnits"],
  ["glyphref", "glyphRef"],
  ["gradienttransform", "gradientTransform"],
  ["gradientunits", "gradientUnits"],
  ["kernelmatrix", "kernelMatrix"],
  ["kernelunitlength", "kernelUnitLength"],
  ["keypoints", "keyPoints"],
  ["keysplines", "keySplines"],
  ["keytimes", "keyTimes"],
  ["lengthadjust", "lengthAdjust"],
  ["limitingconeangle", "limitingConeAngle"],
  ["markerheight", "markerHeight"],
  ["markerunits", "markerUnits"],
  ["markerwidth", "markerWidth"],
  ["maskcontentunits", "maskContentUnits"],
  ["maskunits", "maskUnits"],
  ["numoctaves", "numOctaves"],
  ["pathlength", "pathLength"],
  ["patterncontentunits", "patternContentUnits"],
  ["patterntransform", "patternTransform"],
  ["patternunits", "patternUnits"],
  ["pointsatx", "pointsAtX"],
  ["pointsaty", "pointsAtY"],
  ["pointsatz", "pointsAtZ"],
  ["preservealpha", "preserveAlpha"],
  ["preserveaspectratio", "preserveAspectRatio"],
  ["primitiveunits", "primitiveUnits"],
  ["refx", "refX"],
  ["refy", "refY"],
  ["repeatcount", "repeatCount"],
  ["repeatdur", "repeatDur"],
  ["requiredextensions", "requiredExtensions"],
  ["requiredfeatures", "requiredFeatures"],
  ["specularconstant", "specularConstant"],
  ["specularexponent", "specularExponent"],
  ["spreadmethod", "spreadMethod"],
  ["startoffset", "startOffset"],
  ["stddeviation", "stdDeviation"],
  ["stitchtiles", "stitchTiles"],
  ["surfacescale", "surfaceScale"],
  ["systemlanguage", "systemLanguage"],
  ["tablevalues", "tableValues"],
  ["targetx", "targetX"],
  ["targety", "targetY"],
  ["textlength", "textLength"],
  ["viewbox", "viewBox"],
  ["viewtarget", "viewTarget"],
  ["xchannelselector", "xChannelSelector"],
  ["ychannelselector", "yChannelSelector"],
  ["zoomandpan", "zoomAndPan"]
]);
var _t = v && v.__assign || function() {
  return _t = Object.assign || function(s) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (s[r] = t[r]);
    }
    return s;
  }, _t.apply(this, arguments);
}, JV = v && v.__createBinding || (Object.create ? function(s, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(s, n, { enumerable: !0, get: function() {
    return t[e];
  } });
} : function(s, t, e, n) {
  n === void 0 && (n = e), s[n] = t[e];
}), XV = v && v.__setModuleDefault || (Object.create ? function(s, t) {
  Object.defineProperty(s, "default", { enumerable: !0, value: t });
} : function(s, t) {
  s.default = t;
}), QV = v && v.__importStar || function(s) {
  if (s && s.__esModule)
    return s;
  var t = {};
  if (s != null)
    for (var e in s)
      e !== "default" && Object.prototype.hasOwnProperty.call(s, e) && JV(t, s, e);
  return XV(t, s), t;
};
Object.defineProperty(ns, "__esModule", { value: !0 });
var it = QV(qt), Cn = gn, An = Tt, ZV = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function KV(s, t) {
  if (!!s)
    return Object.keys(s).map(function(e) {
      var n, r, o = (n = s[e]) !== null && n !== void 0 ? n : "";
      return t.xmlMode === "foreign" && (e = (r = An.attributeNames.get(e)) !== null && r !== void 0 ? r : e), !t.emptyAttrs && !t.xmlMode && o === "" ? e : e + '="' + (t.decodeEntities !== !1 ? Cn.encodeXML(o) : o.replace(/"/g, "&quot;")) + '"';
    }).join(" ");
}
var Cs = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function os(s, t) {
  t === void 0 && (t = {});
  for (var e = ("length" in s) ? s : [s], n = "", r = 0; r < e.length; r++)
    n += tF(e[r], t);
  return n;
}
ns.default = os;
function tF(s, t) {
  switch (s.type) {
    case it.Root:
      return os(s.children, t);
    case it.Directive:
    case it.Doctype:
      return rF(s);
    case it.Comment:
      return cF(s);
    case it.CDATA:
      return iF(s);
    case it.Script:
    case it.Style:
    case it.Tag:
      return nF(s, t);
    case it.Text:
      return oF(s, t);
  }
}
var eF = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), sF = /* @__PURE__ */ new Set(["svg", "math"]);
function nF(s, t) {
  var e;
  t.xmlMode === "foreign" && (s.name = (e = An.elementNames.get(s.name)) !== null && e !== void 0 ? e : s.name, s.parent && eF.has(s.parent.name) && (t = _t(_t({}, t), { xmlMode: !1 }))), !t.xmlMode && sF.has(s.name) && (t = _t(_t({}, t), { xmlMode: "foreign" }));
  var n = "<" + s.name, r = KV(s.attribs, t);
  return r && (n += " " + r), s.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Cs.has(s.name)) ? (t.xmlMode || (n += " "), n += "/>") : (n += ">", s.children.length > 0 && (n += os(s.children, t)), (t.xmlMode || !Cs.has(s.name)) && (n += "</" + s.name + ">")), n;
}
function rF(s) {
  return "<" + s.data + ">";
}
function oF(s, t) {
  var e = s.data || "";
  return t.decodeEntities !== !1 && !(!t.xmlMode && s.parent && ZV.has(s.parent.name)) && (e = Cn.encodeXML(e)), e;
}
function iF(s) {
  return "<![CDATA[" + s.children[0].data + "]]>";
}
function cF(s) {
  return "<!--" + s.data + "-->";
}
var aF = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.innerText = Y.textContent = Y.getText = Y.getInnerHTML = Y.getOuterHTML = void 0;
var rt = lt, lF = aF(ns), uF = qt;
function qn(s, t) {
  return (0, lF.default)(s, t);
}
Y.getOuterHTML = qn;
function fF(s, t) {
  return (0, rt.hasChildren)(s) ? s.children.map(function(e) {
    return qn(e, t);
  }).join("") : "";
}
Y.getInnerHTML = fF;
function se(s) {
  return Array.isArray(s) ? s.map(se).join("") : (0, rt.isTag)(s) ? s.name === "br" ? `
` : se(s.children) : (0, rt.isCDATA)(s) ? se(s.children) : (0, rt.isText)(s) ? s.data : "";
}
Y.getText = se;
function Re(s) {
  return Array.isArray(s) ? s.map(Re).join("") : (0, rt.hasChildren)(s) && !(0, rt.isComment)(s) ? Re(s.children) : (0, rt.isText)(s) ? s.data : "";
}
Y.textContent = Re;
function $e(s) {
  return Array.isArray(s) ? s.map($e).join("") : (0, rt.hasChildren)(s) && (s.type === uF.ElementType.Tag || (0, rt.isCDATA)(s)) ? $e(s.children) : (0, rt.isText)(s) ? s.data : "";
}
Y.innerText = $e;
var P = {};
Object.defineProperty(P, "__esModule", { value: !0 });
P.prevElementSibling = P.nextElementSibling = P.getName = P.hasAttrib = P.getAttributeValue = P.getSiblings = P.getParent = P.getChildren = void 0;
var On = lt, hF = [];
function Dn(s) {
  var t;
  return (t = s.children) !== null && t !== void 0 ? t : hF;
}
P.getChildren = Dn;
function Ln(s) {
  return s.parent || null;
}
P.getParent = Ln;
function pF(s) {
  var t, e, n = Ln(s);
  if (n != null)
    return Dn(n);
  for (var r = [s], o = s.prev, i = s.next; o != null; )
    r.unshift(o), t = o, o = t.prev;
  for (; i != null; )
    r.push(i), e = i, i = e.next;
  return r;
}
P.getSiblings = pF;
function dF(s, t) {
  var e;
  return (e = s.attribs) === null || e === void 0 ? void 0 : e[t];
}
P.getAttributeValue = dF;
function gF(s, t) {
  return s.attribs != null && Object.prototype.hasOwnProperty.call(s.attribs, t) && s.attribs[t] != null;
}
P.hasAttrib = gF;
function mF(s) {
  return s.name;
}
P.getName = mF;
function bF(s) {
  for (var t, e = s.next; e !== null && !(0, On.isTag)(e); )
    t = e, e = t.next;
  return e;
}
P.nextElementSibling = bF;
function yF(s) {
  for (var t, e = s.prev; e !== null && !(0, On.isTag)(e); )
    t = e, e = t.prev;
  return e;
}
P.prevElementSibling = yF;
var V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.prepend = V.prependChild = V.append = V.appendChild = V.replaceElement = V.removeElement = void 0;
function Ht(s) {
  if (s.prev && (s.prev.next = s.next), s.next && (s.next.prev = s.prev), s.parent) {
    var t = s.parent.children;
    t.splice(t.lastIndexOf(s), 1);
  }
}
V.removeElement = Ht;
function vF(s, t) {
  var e = t.prev = s.prev;
  e && (e.next = t);
  var n = t.next = s.next;
  n && (n.prev = t);
  var r = t.parent = s.parent;
  if (r) {
    var o = r.children;
    o[o.lastIndexOf(s)] = t;
  }
}
V.replaceElement = vF;
function wF(s, t) {
  if (Ht(t), t.next = null, t.parent = s, s.children.push(t) > 1) {
    var e = s.children[s.children.length - 2];
    e.next = t, t.prev = e;
  } else
    t.prev = null;
}
V.appendChild = wF;
function xF(s, t) {
  Ht(t);
  var e = s.parent, n = s.next;
  if (t.next = n, t.prev = s, s.next = t, t.parent = e, n) {
    if (n.prev = t, e) {
      var r = e.children;
      r.splice(r.lastIndexOf(n), 0, t);
    }
  } else
    e && e.children.push(t);
}
V.append = xF;
function SF(s, t) {
  if (Ht(t), t.parent = s, t.prev = null, s.children.unshift(t) !== 1) {
    var e = s.children[1];
    e.prev = t, t.next = e;
  } else
    t.next = null;
}
V.prependChild = SF;
function _F(s, t) {
  Ht(t);
  var e = s.parent;
  if (e) {
    var n = e.children;
    n.splice(n.indexOf(s), 0, t);
  }
  s.prev && (s.prev.next = t), t.parent = e, t.prev = s.prev, t.next = s, s.prev = t;
}
V.prepend = _F;
var $ = {};
Object.defineProperty($, "__esModule", { value: !0 });
$.findAll = $.existsOne = $.findOne = $.findOneChild = $.find = $.filter = void 0;
var Pt = lt;
function TF(s, t, e, n) {
  return e === void 0 && (e = !0), n === void 0 && (n = 1 / 0), Array.isArray(t) || (t = [t]), is(s, t, e, n);
}
$.filter = TF;
function is(s, t, e, n) {
  for (var r = [], o = 0, i = t; o < i.length; o++) {
    var c = i[o];
    if (s(c) && (r.push(c), --n <= 0))
      break;
    if (e && (0, Pt.hasChildren)(c) && c.children.length > 0) {
      var a = is(s, c.children, e, n);
      if (r.push.apply(r, a), n -= a.length, n <= 0)
        break;
    }
  }
  return r;
}
$.find = is;
function EF(s, t) {
  return t.find(s);
}
$.findOneChild = EF;
function Nn(s, t, e) {
  e === void 0 && (e = !0);
  for (var n = null, r = 0; r < t.length && !n; r++) {
    var o = t[r];
    if ((0, Pt.isTag)(o))
      s(o) ? n = o : e && o.children.length > 0 && (n = Nn(s, o.children));
    else
      continue;
  }
  return n;
}
$.findOne = Nn;
function Pn(s, t) {
  return t.some(function(e) {
    return (0, Pt.isTag)(e) && (s(e) || e.children.length > 0 && Pn(s, e.children));
  });
}
$.existsOne = Pn;
function CF(s, t) {
  for (var e, n = [], r = t.filter(Pt.isTag), o; o = r.shift(); ) {
    var i = (e = o.children) === null || e === void 0 ? void 0 : e.filter(Pt.isTag);
    i && i.length > 0 && r.unshift.apply(r, i), s(o) && n.push(o);
  }
  return n;
}
$.findAll = CF;
var X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.getElementsByTagType = X.getElementsByTagName = X.getElementById = X.getElements = X.testElement = void 0;
var mt = lt, ve = $, oe = {
  tag_name: function(s) {
    return typeof s == "function" ? function(t) {
      return (0, mt.isTag)(t) && s(t.name);
    } : s === "*" ? mt.isTag : function(t) {
      return (0, mt.isTag)(t) && t.name === s;
    };
  },
  tag_type: function(s) {
    return typeof s == "function" ? function(t) {
      return s(t.type);
    } : function(t) {
      return t.type === s;
    };
  },
  tag_contains: function(s) {
    return typeof s == "function" ? function(t) {
      return (0, mt.isText)(t) && s(t.data);
    } : function(t) {
      return (0, mt.isText)(t) && t.data === s;
    };
  }
};
function kn(s, t) {
  return typeof t == "function" ? function(e) {
    return (0, mt.isTag)(e) && t(e.attribs[s]);
  } : function(e) {
    return (0, mt.isTag)(e) && e.attribs[s] === t;
  };
}
function AF(s, t) {
  return function(e) {
    return s(e) || t(e);
  };
}
function Rn(s) {
  var t = Object.keys(s).map(function(e) {
    var n = s[e];
    return Object.prototype.hasOwnProperty.call(oe, e) ? oe[e](n) : kn(e, n);
  });
  return t.length === 0 ? null : t.reduce(AF);
}
function qF(s, t) {
  var e = Rn(s);
  return e ? e(t) : !0;
}
X.testElement = qF;
function OF(s, t, e, n) {
  n === void 0 && (n = 1 / 0);
  var r = Rn(s);
  return r ? (0, ve.filter)(r, t, e, n) : [];
}
X.getElements = OF;
function DF(s, t, e) {
  return e === void 0 && (e = !0), Array.isArray(t) || (t = [t]), (0, ve.findOne)(kn("id", s), t, e);
}
X.getElementById = DF;
function LF(s, t, e, n) {
  return e === void 0 && (e = !0), n === void 0 && (n = 1 / 0), (0, ve.filter)(oe.tag_name(s), t, e, n);
}
X.getElementsByTagName = LF;
function NF(s, t, e, n) {
  return e === void 0 && (e = !0), n === void 0 && (n = 1 / 0), (0, ve.filter)(oe.tag_type(s), t, e, n);
}
X.getElementsByTagType = NF;
var ht = {};
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.uniqueSort = ht.compareDocumentPosition = ht.removeSubsets = void 0;
var As = lt;
function PF(s) {
  for (var t = s.length; --t >= 0; ) {
    var e = s[t];
    if (t > 0 && s.lastIndexOf(e, t - 1) >= 0) {
      s.splice(t, 1);
      continue;
    }
    for (var n = e.parent; n; n = n.parent)
      if (s.includes(n)) {
        s.splice(t, 1);
        break;
      }
  }
  return s;
}
ht.removeSubsets = PF;
function $n(s, t) {
  var e = [], n = [];
  if (s === t)
    return 0;
  for (var r = (0, As.hasChildren)(s) ? s : s.parent; r; )
    e.unshift(r), r = r.parent;
  for (r = (0, As.hasChildren)(t) ? t : t.parent; r; )
    n.unshift(r), r = r.parent;
  for (var o = Math.min(e.length, n.length), i = 0; i < o && e[i] === n[i]; )
    i++;
  if (i === 0)
    return 1;
  var c = e[i - 1], a = c.children, l = e[i], u = n[i];
  return a.indexOf(l) > a.indexOf(u) ? c === t ? 20 : 4 : c === s ? 10 : 2;
}
ht.compareDocumentPosition = $n;
function kF(s) {
  return s = s.filter(function(t, e, n) {
    return !n.includes(t, e + 1);
  }), s.sort(function(t, e) {
    var n = $n(t, e);
    return n & 2 ? -1 : n & 4 ? 1 : 0;
  }), s;
}
ht.uniqueSort = kF;
var we = {};
Object.defineProperty(we, "__esModule", { value: !0 });
we.getFeed = void 0;
var RF = Y, Vt = X;
function $F(s) {
  var t = ie(UF, s);
  return t ? t.name === "feed" ? MF(t) : IF(t) : null;
}
we.getFeed = $F;
function MF(s) {
  var t, e = s.children, n = {
    type: "atom",
    items: (0, Vt.getElementsByTagName)("entry", e).map(function(i) {
      var c, a = i.children, l = { media: Mn(a) };
      H(l, "id", "id", a), H(l, "title", "title", a);
      var u = (c = ie("link", a)) === null || c === void 0 ? void 0 : c.attribs.href;
      u && (l.link = u);
      var h = bt("summary", a) || bt("content", a);
      h && (l.description = h);
      var b = bt("updated", a);
      return b && (l.pubDate = new Date(b)), l;
    })
  };
  H(n, "id", "id", e), H(n, "title", "title", e);
  var r = (t = ie("link", e)) === null || t === void 0 ? void 0 : t.attribs.href;
  r && (n.link = r), H(n, "description", "subtitle", e);
  var o = bt("updated", e);
  return o && (n.updated = new Date(o)), H(n, "author", "email", e, !0), n;
}
function IF(s) {
  var t, e, n = (e = (t = ie("channel", s.children)) === null || t === void 0 ? void 0 : t.children) !== null && e !== void 0 ? e : [], r = {
    type: s.name.substr(0, 3),
    id: "",
    items: (0, Vt.getElementsByTagName)("item", s.children).map(function(i) {
      var c = i.children, a = { media: Mn(c) };
      H(a, "id", "guid", c), H(a, "title", "title", c), H(a, "link", "link", c), H(a, "description", "description", c);
      var l = bt("pubDate", c);
      return l && (a.pubDate = new Date(l)), a;
    })
  };
  H(r, "title", "title", n), H(r, "link", "link", n), H(r, "description", "description", n);
  var o = bt("lastBuildDate", n);
  return o && (r.updated = new Date(o)), H(r, "author", "managingEditor", n, !0), r;
}
var jF = ["url", "type", "lang"], BF = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function Mn(s) {
  return (0, Vt.getElementsByTagName)("media:content", s).map(function(t) {
    for (var e = t.attribs, n = {
      medium: e.medium,
      isDefault: !!e.isDefault
    }, r = 0, o = jF; r < o.length; r++) {
      var i = o[r];
      e[i] && (n[i] = e[i]);
    }
    for (var c = 0, a = BF; c < a.length; c++) {
      var i = a[c];
      e[i] && (n[i] = parseInt(e[i], 10));
    }
    return e.expression && (n.expression = e.expression), n;
  });
}
function ie(s, t) {
  return (0, Vt.getElementsByTagName)(s, t, !0, 1)[0];
}
function bt(s, t, e) {
  return e === void 0 && (e = !1), (0, RF.textContent)((0, Vt.getElementsByTagName)(s, t, e, 1)).trim();
}
function H(s, t, e, n, r) {
  r === void 0 && (r = !1);
  var o = bt(e, n, r);
  o && (s[t] = o);
}
function UF(s) {
  return s === "rss" || s === "feed" || s === "rdf:RDF";
}
(function(s) {
  var t = v && v.__createBinding || (Object.create ? function(r, o, i, c) {
    c === void 0 && (c = i), Object.defineProperty(r, c, { enumerable: !0, get: function() {
      return o[i];
    } });
  } : function(r, o, i, c) {
    c === void 0 && (c = i), r[c] = o[i];
  }), e = v && v.__exportStar || function(r, o) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(o, i) && t(o, r, i);
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.hasChildren = s.isDocument = s.isComment = s.isText = s.isCDATA = s.isTag = void 0, e(Y, s), e(P, s), e(V, s), e($, s), e(X, s), e(ht, s), e(we, s);
  var n = lt;
  Object.defineProperty(s, "isTag", { enumerable: !0, get: function() {
    return n.isTag;
  } }), Object.defineProperty(s, "isCDATA", { enumerable: !0, get: function() {
    return n.isCDATA;
  } }), Object.defineProperty(s, "isText", { enumerable: !0, get: function() {
    return n.isText;
  } }), Object.defineProperty(s, "isComment", { enumerable: !0, get: function() {
    return n.isComment;
  } }), Object.defineProperty(s, "isDocument", { enumerable: !0, get: function() {
    return n.isDocument;
  } }), Object.defineProperty(s, "hasChildren", { enumerable: !0, get: function() {
    return n.hasChildren;
  } });
})(ss);
var HF = v && v.__extends || function() {
  var s = function(t, e) {
    return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
      n.__proto__ = r;
    } || function(n, r) {
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
    }, s(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    s(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), VF = v && v.__createBinding || (Object.create ? function(s, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(s, n, { enumerable: !0, get: function() {
    return t[e];
  } });
} : function(s, t, e, n) {
  n === void 0 && (n = e), s[n] = t[e];
}), FF = v && v.__setModuleDefault || (Object.create ? function(s, t) {
  Object.defineProperty(s, "default", { enumerable: !0, value: t });
} : function(s, t) {
  s.default = t;
}), zF = v && v.__importStar || function(s) {
  if (s && s.__esModule)
    return s;
  var t = {};
  if (s != null)
    for (var e in s)
      e !== "default" && Object.prototype.hasOwnProperty.call(s, e) && VF(t, s, e);
  return FF(t, s), t;
}, GF = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.parseFeed = yt.FeedHandler = void 0;
var WF = GF(lt), ce = zF(ss), YF = Ut, qs;
(function(s) {
  s[s.image = 0] = "image", s[s.audio = 1] = "audio", s[s.video = 2] = "video", s[s.document = 3] = "document", s[s.executable = 4] = "executable";
})(qs || (qs = {}));
var Os;
(function(s) {
  s[s.sample = 0] = "sample", s[s.full = 1] = "full", s[s.nonstop = 2] = "nonstop";
})(Os || (Os = {}));
var In = function(s) {
  HF(t, s);
  function t(e, n) {
    var r = this;
    return typeof e == "object" && (e = void 0, n = e), r = s.call(this, e, n) || this, r;
  }
  return t.prototype.onend = function() {
    var e, n, r = Gt(JF, this.dom);
    if (!r) {
      this.handleCallback(new Error("couldn't find root of feed"));
      return;
    }
    var o = {};
    if (r.name === "feed") {
      var i = r.children;
      o.type = "atom", U(o, "id", "id", i), U(o, "title", "title", i);
      var c = Ls("href", Gt("link", i));
      c && (o.link = c), U(o, "description", "subtitle", i);
      var a = gt("updated", i);
      a && (o.updated = new Date(a)), U(o, "author", "email", i, !0), o.items = Me("entry", i).map(function(l) {
        var u = {}, h = l.children;
        U(u, "id", "id", h), U(u, "title", "title", h);
        var b = Ls("href", Gt("link", h));
        b && (u.link = b);
        var w = gt("summary", h) || gt("content", h);
        w && (u.description = w);
        var d = gt("updated", h);
        return d && (u.pubDate = new Date(d)), u.media = Ds(h), u;
      });
    } else {
      var i = (n = (e = Gt("channel", r.children)) === null || e === void 0 ? void 0 : e.children) !== null && n !== void 0 ? n : [];
      o.type = r.name.substr(0, 3), o.id = "", U(o, "title", "title", i), U(o, "link", "link", i), U(o, "description", "description", i);
      var a = gt("lastBuildDate", i);
      a && (o.updated = new Date(a)), U(o, "author", "managingEditor", i, !0), o.items = Me("item", r.children).map(function(h) {
        var b = {}, w = h.children;
        U(b, "id", "guid", w), U(b, "title", "title", w), U(b, "link", "link", w), U(b, "description", "description", w);
        var d = gt("pubDate", w);
        return d && (b.pubDate = new Date(d)), b.media = Ds(w), b;
      });
    }
    this.feed = o, this.handleCallback(null);
  }, t;
}(WF.default);
yt.FeedHandler = In;
function Ds(s) {
  return Me("media:content", s).map(function(t) {
    var e = {
      medium: t.attribs.medium,
      isDefault: !!t.attribs.isDefault
    };
    return t.attribs.url && (e.url = t.attribs.url), t.attribs.fileSize && (e.fileSize = parseInt(t.attribs.fileSize, 10)), t.attribs.type && (e.type = t.attribs.type), t.attribs.expression && (e.expression = t.attribs.expression), t.attribs.bitrate && (e.bitrate = parseInt(t.attribs.bitrate, 10)), t.attribs.framerate && (e.framerate = parseInt(t.attribs.framerate, 10)), t.attribs.samplingrate && (e.samplingrate = parseInt(t.attribs.samplingrate, 10)), t.attribs.channels && (e.channels = parseInt(t.attribs.channels, 10)), t.attribs.duration && (e.duration = parseInt(t.attribs.duration, 10)), t.attribs.height && (e.height = parseInt(t.attribs.height, 10)), t.attribs.width && (e.width = parseInt(t.attribs.width, 10)), t.attribs.lang && (e.lang = t.attribs.lang), e;
  });
}
function Me(s, t) {
  return ce.getElementsByTagName(s, t, !0);
}
function Gt(s, t) {
  return ce.getElementsByTagName(s, t, !0, 1)[0];
}
function gt(s, t, e) {
  return e === void 0 && (e = !1), ce.getText(ce.getElementsByTagName(s, t, e, 1)).trim();
}
function Ls(s, t) {
  if (!t)
    return null;
  var e = t.attribs;
  return e[s];
}
function U(s, t, e, n, r) {
  r === void 0 && (r = !1);
  var o = gt(e, n, r);
  o && (s[t] = o);
}
function JF(s) {
  return s === "rss" || s === "feed" || s === "rdf:RDF";
}
function XF(s, t) {
  t === void 0 && (t = { xmlMode: !0 });
  var e = new In(t);
  return new YF.Parser(e, t).end(s), e.feed;
}
yt.parseFeed = XF;
(function(s) {
  var t = v && v.__createBinding || (Object.create ? function(d, y, p, D) {
    D === void 0 && (D = p), Object.defineProperty(d, D, { enumerable: !0, get: function() {
      return y[p];
    } });
  } : function(d, y, p, D) {
    D === void 0 && (D = p), d[D] = y[p];
  }), e = v && v.__setModuleDefault || (Object.create ? function(d, y) {
    Object.defineProperty(d, "default", { enumerable: !0, value: y });
  } : function(d, y) {
    d.default = y;
  }), n = v && v.__importStar || function(d) {
    if (d && d.__esModule)
      return d;
    var y = {};
    if (d != null)
      for (var p in d)
        p !== "default" && Object.prototype.hasOwnProperty.call(d, p) && t(y, d, p);
    return e(y, d), y;
  }, r = v && v.__exportStar || function(d, y) {
    for (var p in d)
      p !== "default" && !Object.prototype.hasOwnProperty.call(y, p) && t(y, d, p);
  }, o = v && v.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.RssHandler = s.DefaultHandler = s.DomUtils = s.ElementType = s.Tokenizer = s.createDomStream = s.parseDOM = s.parseDocument = s.DomHandler = s.Parser = void 0;
  var i = Ut;
  Object.defineProperty(s, "Parser", { enumerable: !0, get: function() {
    return i.Parser;
  } });
  var c = lt;
  Object.defineProperty(s, "DomHandler", { enumerable: !0, get: function() {
    return c.DomHandler;
  } }), Object.defineProperty(s, "DefaultHandler", { enumerable: !0, get: function() {
    return c.DomHandler;
  } });
  function a(d, y) {
    var p = new c.DomHandler(void 0, y);
    return new i.Parser(p, y).end(d), p.root;
  }
  s.parseDocument = a;
  function l(d, y) {
    return a(d, y).children;
  }
  s.parseDOM = l;
  function u(d, y, p) {
    var D = new c.DomHandler(d, y, p);
    return new i.Parser(D, y);
  }
  s.createDomStream = u;
  var h = he;
  Object.defineProperty(s, "Tokenizer", { enumerable: !0, get: function() {
    return o(h).default;
  } });
  var b = n(qt);
  s.ElementType = b, r(yt, s), s.DomUtils = n(ss);
  var w = yt;
  Object.defineProperty(s, "RssHandler", { enumerable: !0, get: function() {
    return w.FeedHandler;
  } });
})(en);
var QF = (s) => {
  if (typeof s != "string")
    throw new TypeError("Expected a string");
  return s.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}, cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Ns(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function ZF(s) {
  var t, e;
  return Ns(s) === !1 ? !1 : (t = s.constructor, t === void 0 ? !0 : (e = t.prototype, !(Ns(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
cs.isPlainObject = ZF;
var KF = function(t) {
  return t3(t) && !e3(t);
};
function t3(s) {
  return !!s && typeof s == "object";
}
function e3(s) {
  var t = Object.prototype.toString.call(s);
  return t === "[object RegExp]" || t === "[object Date]" || r3(s);
}
var s3 = typeof Symbol == "function" && Symbol.for, n3 = s3 ? Symbol.for("react.element") : 60103;
function r3(s) {
  return s.$$typeof === n3;
}
function o3(s) {
  return Array.isArray(s) ? [] : {};
}
function kt(s, t) {
  return t.clone !== !1 && t.isMergeableObject(s) ? Et(o3(s), s, t) : s;
}
function i3(s, t, e) {
  return s.concat(t).map(function(n) {
    return kt(n, e);
  });
}
function c3(s, t) {
  if (!t.customMerge)
    return Et;
  var e = t.customMerge(s);
  return typeof e == "function" ? e : Et;
}
function a3(s) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(s).filter(function(t) {
    return s.propertyIsEnumerable(t);
  }) : [];
}
function Ps(s) {
  return Object.keys(s).concat(a3(s));
}
function jn(s, t) {
  try {
    return t in s;
  } catch {
    return !1;
  }
}
function l3(s, t) {
  return jn(s, t) && !(Object.hasOwnProperty.call(s, t) && Object.propertyIsEnumerable.call(s, t));
}
function u3(s, t, e) {
  var n = {};
  return e.isMergeableObject(s) && Ps(s).forEach(function(r) {
    n[r] = kt(s[r], e);
  }), Ps(t).forEach(function(r) {
    l3(s, r) || (jn(s, r) && e.isMergeableObject(t[r]) ? n[r] = c3(r, e)(s[r], t[r], e) : n[r] = kt(t[r], e));
  }), n;
}
function Et(s, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || i3, e.isMergeableObject = e.isMergeableObject || KF, e.cloneUnlessOtherwiseSpecified = kt;
  var n = Array.isArray(t), r = Array.isArray(s), o = n === r;
  return o ? n ? e.arrayMerge(s, t, e) : u3(s, t, e) : kt(t, e);
}
Et.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, r) {
    return Et(n, r, e);
  }, {});
};
var f3 = Et, h3 = f3, Bn = { exports: {} };
(function(s) {
  (function(t, e) {
    s.exports ? s.exports = e() : t.parseSrcset = e();
  })(v, function() {
    return function(t) {
      function e(A) {
        return A === " " || A === "	" || A === `
` || A === "\f" || A === "\r";
      }
      function n(A) {
        var I, j = A.exec(t.substring(p));
        if (j)
          return I = j[0], p += I.length, I;
      }
      for (var r = t.length, o = /^[ \t\n\r\u000c]+/, i = /^[, \t\n\r\u000c]+/, c = /^[^ \t\n\r\u000c]+/, a = /[,]+$/, l = /^\d+$/, u = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, h, b, w, d, y, p = 0, D = []; ; ) {
        if (n(i), p >= r)
          return D;
        h = n(c), b = [], h.slice(-1) === "," ? (h = h.replace(a, ""), F()) : M();
      }
      function M() {
        for (n(o), w = "", d = "in descriptor"; ; ) {
          if (y = t.charAt(p), d === "in descriptor")
            if (e(y))
              w && (b.push(w), w = "", d = "after descriptor");
            else if (y === ",") {
              p += 1, w && b.push(w), F();
              return;
            } else if (y === "(")
              w = w + y, d = "in parens";
            else if (y === "") {
              w && b.push(w), F();
              return;
            } else
              w = w + y;
          else if (d === "in parens")
            if (y === ")")
              w = w + y, d = "in descriptor";
            else if (y === "") {
              b.push(w), F();
              return;
            } else
              w = w + y;
          else if (d === "after descriptor" && !e(y))
            if (y === "") {
              F();
              return;
            } else
              d = "in descriptor", p -= 1;
          p += 1;
        }
      }
      function F() {
        var A = !1, I, j, z, B, Q = {}, Z, xt, ut, ft, f;
        for (B = 0; B < b.length; B++)
          Z = b[B], xt = Z[Z.length - 1], ut = Z.substring(0, Z.length - 1), ft = parseInt(ut, 10), f = parseFloat(ut), l.test(ut) && xt === "w" ? ((I || j) && (A = !0), ft === 0 ? A = !0 : I = ft) : u.test(ut) && xt === "x" ? ((I || j || z) && (A = !0), f < 0 ? A = !0 : j = f) : l.test(ut) && xt === "h" ? ((z || j) && (A = !0), ft === 0 ? A = !0 : z = ft) : A = !0;
        A ? console && console.log && console.log("Invalid srcset descriptor found in '" + t + "' at '" + Z + "'.") : (Q.url = h, I && (Q.w = I), j && (Q.d = j), z && (Q.h = z), D.push(Q));
      }
    };
  });
})(Bn);
var as = { exports: {} }, q = String, Un = function() {
  return { isColorSupported: !1, reset: q, bold: q, dim: q, italic: q, underline: q, inverse: q, hidden: q, strikethrough: q, black: q, red: q, green: q, yellow: q, blue: q, magenta: q, cyan: q, white: q, gray: q, bgBlack: q, bgRed: q, bgGreen: q, bgYellow: q, bgBlue: q, bgMagenta: q, bgCyan: q, bgWhite: q };
};
as.exports = Un();
as.exports.createColors = Un;
const p3 = {}, d3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: p3
}, Symbol.toStringTag, { value: "Module" })), st = /* @__PURE__ */ tn(d3);
let ks = as.exports, Rs = st;
class Rt extends Error {
  constructor(t, e, n, r, o, i) {
    super(t), this.name = "CssSyntaxError", this.reason = t, o && (this.file = o), r && (this.source = r), i && (this.plugin = i), typeof e < "u" && typeof n < "u" && (typeof e == "number" ? (this.line = e, this.column = n) : (this.line = e.line, this.column = e.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Rt);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(t) {
    if (!this.source)
      return "";
    let e = this.source;
    t == null && (t = ks.isColorSupported), Rs && t && (e = Rs(e));
    let n = e.split(/\r?\n/), r = Math.max(this.line - 3, 0), o = Math.min(this.line + 2, n.length), i = String(o).length, c, a;
    if (t) {
      let { bold: l, red: u, gray: h } = ks.createColors(!0);
      c = (b) => l(u(b)), a = (b) => h(b);
    } else
      c = a = (l) => l;
    return n.slice(r, o).map((l, u) => {
      let h = r + 1 + u, b = " " + (" " + h).slice(-i) + " | ";
      if (h === this.line) {
        let w = a(b.replace(/\d/g, " ")) + l.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return c(">") + a(b) + l + `
 ` + w + c("^");
      }
      return " " + a(b) + l;
    }).join(`
`);
  }
  toString() {
    let t = this.showSourceCode();
    return t && (t = `

` + t + `
`), this.name + ": " + this.message + t;
  }
}
var ls = Rt;
Rt.default = Rt;
var Ft = {};
Ft.isClean = Symbol("isClean");
Ft.my = Symbol("my");
const $s = {
  colon: ": ",
  indent: "    ",
  beforeDecl: `
`,
  beforeRule: `
`,
  beforeOpen: " ",
  beforeClose: `
`,
  beforeComment: `
`,
  after: `
`,
  emptyBody: "",
  commentLeft: " ",
  commentRight: " ",
  semicolon: !1
};
function g3(s) {
  return s[0].toUpperCase() + s.slice(1);
}
class Ie {
  constructor(t) {
    this.builder = t;
  }
  stringify(t, e) {
    if (!this[t.type])
      throw new Error(
        "Unknown AST node type " + t.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[t.type](t, e);
  }
  document(t) {
    this.body(t);
  }
  root(t) {
    this.body(t), t.raws.after && this.builder(t.raws.after);
  }
  comment(t) {
    let e = this.raw(t, "left", "commentLeft"), n = this.raw(t, "right", "commentRight");
    this.builder("/*" + e + t.text + n + "*/", t);
  }
  decl(t, e) {
    let n = this.raw(t, "between", "colon"), r = t.prop + n + this.rawValue(t, "value");
    t.important && (r += t.raws.important || " !important"), e && (r += ";"), this.builder(r, t);
  }
  rule(t) {
    this.block(t, this.rawValue(t, "selector")), t.raws.ownSemicolon && this.builder(t.raws.ownSemicolon, t, "end");
  }
  atrule(t, e) {
    let n = "@" + t.name, r = t.params ? this.rawValue(t, "params") : "";
    if (typeof t.raws.afterName < "u" ? n += t.raws.afterName : r && (n += " "), t.nodes)
      this.block(t, n + r);
    else {
      let o = (t.raws.between || "") + (e ? ";" : "");
      this.builder(n + r + o, t);
    }
  }
  body(t) {
    let e = t.nodes.length - 1;
    for (; e > 0 && t.nodes[e].type === "comment"; )
      e -= 1;
    let n = this.raw(t, "semicolon");
    for (let r = 0; r < t.nodes.length; r++) {
      let o = t.nodes[r], i = this.raw(o, "before");
      i && this.builder(i), this.stringify(o, e !== r || n);
    }
  }
  block(t, e) {
    let n = this.raw(t, "between", "beforeOpen");
    this.builder(e + n + "{", t, "start");
    let r;
    t.nodes && t.nodes.length ? (this.body(t), r = this.raw(t, "after")) : r = this.raw(t, "after", "emptyBody"), r && this.builder(r), this.builder("}", t, "end");
  }
  raw(t, e, n) {
    let r;
    if (n || (n = e), e && (r = t.raws[e], typeof r < "u"))
      return r;
    let o = t.parent;
    if (n === "before" && (!o || o.type === "root" && o.first === t || o && o.type === "document"))
      return "";
    if (!o)
      return $s[n];
    let i = t.root();
    if (i.rawCache || (i.rawCache = {}), typeof i.rawCache[n] < "u")
      return i.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(t, n);
    {
      let c = "raw" + g3(n);
      this[c] ? r = this[c](i, t) : i.walk((a) => {
        if (r = a.raws[e], typeof r < "u")
          return !1;
      });
    }
    return typeof r > "u" && (r = $s[n]), i.rawCache[n] = r, r;
  }
  rawSemicolon(t) {
    let e;
    return t.walk((n) => {
      if (n.nodes && n.nodes.length && n.last.type === "decl" && (e = n.raws.semicolon, typeof e < "u"))
        return !1;
    }), e;
  }
  rawEmptyBody(t) {
    let e;
    return t.walk((n) => {
      if (n.nodes && n.nodes.length === 0 && (e = n.raws.after, typeof e < "u"))
        return !1;
    }), e;
  }
  rawIndent(t) {
    if (t.raws.indent)
      return t.raws.indent;
    let e;
    return t.walk((n) => {
      let r = n.parent;
      if (r && r !== t && r.parent && r.parent === t && typeof n.raws.before < "u") {
        let o = n.raws.before.split(`
`);
        return e = o[o.length - 1], e = e.replace(/\S/g, ""), !1;
      }
    }), e;
  }
  rawBeforeComment(t, e) {
    let n;
    return t.walkComments((r) => {
      if (typeof r.raws.before < "u")
        return n = r.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(e, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeDecl(t, e) {
    let n;
    return t.walkDecls((r) => {
      if (typeof r.raws.before < "u")
        return n = r.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(e, null, "beforeRule") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeRule(t) {
    let e;
    return t.walk((n) => {
      if (n.nodes && (n.parent !== t || t.first !== n) && typeof n.raws.before < "u")
        return e = n.raws.before, e.includes(`
`) && (e = e.replace(/[^\n]+$/, "")), !1;
    }), e && (e = e.replace(/\S/g, "")), e;
  }
  rawBeforeClose(t) {
    let e;
    return t.walk((n) => {
      if (n.nodes && n.nodes.length > 0 && typeof n.raws.after < "u")
        return e = n.raws.after, e.includes(`
`) && (e = e.replace(/[^\n]+$/, "")), !1;
    }), e && (e = e.replace(/\S/g, "")), e;
  }
  rawBeforeOpen(t) {
    let e;
    return t.walk((n) => {
      if (n.type !== "decl" && (e = n.raws.between, typeof e < "u"))
        return !1;
    }), e;
  }
  rawColon(t) {
    let e;
    return t.walkDecls((n) => {
      if (typeof n.raws.between < "u")
        return e = n.raws.between.replace(/[^\s:]/g, ""), !1;
    }), e;
  }
  beforeAfter(t, e) {
    let n;
    t.type === "decl" ? n = this.raw(t, null, "beforeDecl") : t.type === "comment" ? n = this.raw(t, null, "beforeComment") : e === "before" ? n = this.raw(t, null, "beforeRule") : n = this.raw(t, null, "beforeClose");
    let r = t.parent, o = 0;
    for (; r && r.type !== "root"; )
      o += 1, r = r.parent;
    if (n.includes(`
`)) {
      let i = this.raw(t, null, "indent");
      if (i.length)
        for (let c = 0; c < o; c++)
          n += i;
    }
    return n;
  }
  rawValue(t, e) {
    let n = t[e], r = t.raws[e];
    return r && r.value === n ? r.raw : n;
  }
}
var Hn = Ie;
Ie.default = Ie;
let m3 = Hn;
function je(s, t) {
  new m3(t).stringify(s);
}
var xe = je;
je.default = je;
let { isClean: Wt, my: b3 } = Ft, y3 = ls, v3 = Hn, w3 = xe;
function Be(s, t) {
  let e = new s.constructor();
  for (let n in s) {
    if (!Object.prototype.hasOwnProperty.call(s, n) || n === "proxyCache")
      continue;
    let r = s[n], o = typeof r;
    n === "parent" && o === "object" ? t && (e[n] = t) : n === "source" ? e[n] = r : Array.isArray(r) ? e[n] = r.map((i) => Be(i, e)) : (o === "object" && r !== null && (r = Be(r)), e[n] = r);
  }
  return e;
}
class Ue {
  constructor(t = {}) {
    this.raws = {}, this[Wt] = !1, this[b3] = !0;
    for (let e in t)
      if (e === "nodes") {
        this.nodes = [];
        for (let n of t[e])
          typeof n.clone == "function" ? this.append(n.clone()) : this.append(n);
      } else
        this[e] = t[e];
  }
  error(t, e = {}) {
    if (this.source) {
      let { start: n, end: r } = this.rangeBy(e);
      return this.source.input.error(
        t,
        { line: n.line, column: n.column },
        { line: r.line, column: r.column },
        e
      );
    }
    return new y3(t);
  }
  warn(t, e, n) {
    let r = { node: this };
    for (let o in n)
      r[o] = n[o];
    return t.warn(e, r);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  toString(t = w3) {
    t.stringify && (t = t.stringify);
    let e = "";
    return t(this, (n) => {
      e += n;
    }), e;
  }
  assign(t = {}) {
    for (let e in t)
      this[e] = t[e];
    return this;
  }
  clone(t = {}) {
    let e = Be(this);
    for (let n in t)
      e[n] = t[n];
    return e;
  }
  cloneBefore(t = {}) {
    let e = this.clone(t);
    return this.parent.insertBefore(this, e), e;
  }
  cloneAfter(t = {}) {
    let e = this.clone(t);
    return this.parent.insertAfter(this, e), e;
  }
  replaceWith(...t) {
    if (this.parent) {
      let e = this, n = !1;
      for (let r of t)
        r === this ? n = !0 : n ? (this.parent.insertAfter(e, r), e = r) : this.parent.insertBefore(e, r);
      n || this.remove();
    }
    return this;
  }
  next() {
    if (!this.parent)
      return;
    let t = this.parent.index(this);
    return this.parent.nodes[t + 1];
  }
  prev() {
    if (!this.parent)
      return;
    let t = this.parent.index(this);
    return this.parent.nodes[t - 1];
  }
  before(t) {
    return this.parent.insertBefore(this, t), this;
  }
  after(t) {
    return this.parent.insertAfter(this, t), this;
  }
  root() {
    let t = this;
    for (; t.parent && t.parent.type !== "document"; )
      t = t.parent;
    return t;
  }
  raw(t, e) {
    return new v3().raw(this, t, e);
  }
  cleanRaws(t) {
    delete this.raws.before, delete this.raws.after, t || delete this.raws.between;
  }
  toJSON(t, e) {
    let n = {}, r = e == null;
    e = e || /* @__PURE__ */ new Map();
    let o = 0;
    for (let i in this) {
      if (!Object.prototype.hasOwnProperty.call(this, i) || i === "parent" || i === "proxyCache")
        continue;
      let c = this[i];
      if (Array.isArray(c))
        n[i] = c.map((a) => typeof a == "object" && a.toJSON ? a.toJSON(null, e) : a);
      else if (typeof c == "object" && c.toJSON)
        n[i] = c.toJSON(null, e);
      else if (i === "source") {
        let a = e.get(c.input);
        a == null && (a = o, e.set(c.input, o), o++), n[i] = {
          inputId: a,
          start: c.start,
          end: c.end
        };
      } else
        n[i] = c;
    }
    return r && (n.inputs = [...e.keys()].map((i) => i.toJSON())), n;
  }
  positionInside(t) {
    let e = this.toString(), n = this.source.start.column, r = this.source.start.line;
    for (let o = 0; o < t; o++)
      e[o] === `
` ? (n = 1, r += 1) : n += 1;
    return { line: r, column: n };
  }
  positionBy(t) {
    let e = this.source.start;
    if (t.index)
      e = this.positionInside(t.index);
    else if (t.word) {
      let n = this.toString().indexOf(t.word);
      n !== -1 && (e = this.positionInside(n));
    }
    return e;
  }
  rangeBy(t) {
    let e = {
      line: this.source.start.line,
      column: this.source.start.column
    }, n = this.source.end ? {
      line: this.source.end.line,
      column: this.source.end.column + 1
    } : {
      line: e.line,
      column: e.column + 1
    };
    if (t.word) {
      let r = this.toString().indexOf(t.word);
      r !== -1 && (e = this.positionInside(r), n = this.positionInside(r + t.word.length));
    } else
      t.start ? e = {
        line: t.start.line,
        column: t.start.column
      } : t.index && (e = this.positionInside(t.index)), t.end ? n = {
        line: t.end.line,
        column: t.end.column
      } : t.endIndex ? n = this.positionInside(t.endIndex) : t.index && (n = this.positionInside(t.index + 1));
    return (n.line < e.line || n.line === e.line && n.column <= e.column) && (n = { line: e.line, column: e.column + 1 }), { start: e, end: n };
  }
  getProxyProcessor() {
    return {
      set(t, e, n) {
        return t[e] === n || (t[e] = n, (e === "prop" || e === "value" || e === "name" || e === "params" || e === "important" || e === "text") && t.markDirty()), !0;
      },
      get(t, e) {
        return e === "proxyOf" ? t : e === "root" ? () => t.root().toProxy() : t[e];
      }
    };
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  addToError(t) {
    if (t.postcssNode = this, t.stack && this.source && /\n\s{4}at /.test(t.stack)) {
      let e = this.source;
      t.stack = t.stack.replace(
        /\n\s{4}at /,
        `$&${e.input.from}:${e.start.line}:${e.start.column}$&`
      );
    }
    return t;
  }
  markDirty() {
    if (this[Wt]) {
      this[Wt] = !1;
      let t = this;
      for (; t = t.parent; )
        t[Wt] = !1;
    }
  }
  get proxyOf() {
    return this;
  }
}
var Se = Ue;
Ue.default = Ue;
let x3 = Se;
class He extends x3 {
  constructor(t) {
    t && typeof t.value < "u" && typeof t.value != "string" && (t = { ...t, value: String(t.value) }), super(t), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
}
var _e = He;
He.default = He;
let S3 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", _3 = (s, t = 21) => (e = t) => {
  let n = "", r = e;
  for (; r--; )
    n += s[Math.random() * s.length | 0];
  return n;
}, T3 = (s = 21) => {
  let t = "", e = s;
  for (; e--; )
    t += S3[Math.random() * 64 | 0];
  return t;
};
const E3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  nanoid: T3,
  customAlphabet: _3
}, Symbol.toStringTag, { value: "Module" })), C3 = /* @__PURE__ */ tn(E3);
let { SourceMapConsumer: Ms, SourceMapGenerator: Is } = st, { existsSync: A3, readFileSync: q3 } = st, { dirname: De, join: O3 } = st;
function D3(s) {
  return Buffer ? Buffer.from(s, "base64").toString() : window.atob(s);
}
class Ve {
  constructor(t, e) {
    if (e.map === !1)
      return;
    this.loadAnnotation(t), this.inline = this.startWith(this.annotation, "data:");
    let n = e.map ? e.map.prev : void 0, r = this.loadMap(e.from, n);
    !this.mapFile && e.from && (this.mapFile = e.from), this.mapFile && (this.root = De(this.mapFile)), r && (this.text = r);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new Ms(this.text)), this.consumerCache;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
  startWith(t, e) {
    return t ? t.substr(0, e.length) === e : !1;
  }
  getAnnotationURL(t) {
    return t.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  loadAnnotation(t) {
    let e = t.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!e)
      return;
    let n = t.lastIndexOf(e.pop()), r = t.indexOf("*/", n);
    n > -1 && r > -1 && (this.annotation = this.getAnnotationURL(t.substring(n, r)));
  }
  decodeInline(t) {
    let e = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, r = /^data:application\/json;charset=utf-?8,/, o = /^data:application\/json,/;
    if (r.test(t) || o.test(t))
      return decodeURIComponent(t.substr(RegExp.lastMatch.length));
    if (e.test(t) || n.test(t))
      return D3(t.substr(RegExp.lastMatch.length));
    let i = t.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + i);
  }
  loadFile(t) {
    if (this.root = De(t), A3(t))
      return this.mapFile = t, q3(t, "utf-8").toString().trim();
  }
  loadMap(t, e) {
    if (e === !1)
      return !1;
    if (e) {
      if (typeof e == "string")
        return e;
      if (typeof e == "function") {
        let n = e(t);
        if (n) {
          let r = this.loadFile(n);
          if (!r)
            throw new Error(
              "Unable to load previous source map: " + n.toString()
            );
          return r;
        }
      } else {
        if (e instanceof Ms)
          return Is.fromSourceMap(e).toString();
        if (e instanceof Is)
          return e.toString();
        if (this.isMap(e))
          return JSON.stringify(e);
        throw new Error(
          "Unsupported previous source map format: " + e.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let n = this.annotation;
        return t && (n = O3(De(t), n)), this.loadFile(n);
      }
    }
  }
  isMap(t) {
    return typeof t != "object" ? !1 : typeof t.mappings == "string" || typeof t._mappings == "string" || Array.isArray(t.sections);
  }
}
var Vn = Ve;
Ve.default = Ve;
let { SourceMapConsumer: L3, SourceMapGenerator: N3 } = st, { fileURLToPath: js, pathToFileURL: Yt } = st, { resolve: Fe, isAbsolute: ze } = st, { nanoid: P3 } = C3, Le = st, Bs = ls, k3 = Vn, Ne = Symbol("fromOffsetCache"), R3 = Boolean(L3 && N3), Us = Boolean(Fe && ze);
class ae {
  constructor(t, e = {}) {
    if (t === null || typeof t > "u" || typeof t == "object" && !t.toString)
      throw new Error(`PostCSS received ${t} instead of CSS string`);
    if (this.css = t.toString(), this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, e.from && (!Us || /^\w+:\/\//.test(e.from) || ze(e.from) ? this.file = e.from : this.file = Fe(e.from)), Us && R3) {
      let n = new k3(this.css, e);
      if (n.text) {
        this.map = n;
        let r = n.consumer().file;
        !this.file && r && (this.file = this.mapResolve(r));
      }
    }
    this.file || (this.id = "<input css " + P3(6) + ">"), this.map && (this.map.file = this.from);
  }
  fromOffset(t) {
    let e, n;
    if (this[Ne])
      n = this[Ne];
    else {
      let o = this.css.split(`
`);
      n = new Array(o.length);
      let i = 0;
      for (let c = 0, a = o.length; c < a; c++)
        n[c] = i, i += o[c].length + 1;
      this[Ne] = n;
    }
    e = n[n.length - 1];
    let r = 0;
    if (t >= e)
      r = n.length - 1;
    else {
      let o = n.length - 2, i;
      for (; r < o; )
        if (i = r + (o - r >> 1), t < n[i])
          o = i - 1;
        else if (t >= n[i + 1])
          r = i + 1;
        else {
          r = i;
          break;
        }
    }
    return {
      line: r + 1,
      col: t - n[r] + 1
    };
  }
  error(t, e, n, r = {}) {
    let o, i, c;
    if (e && typeof e == "object") {
      let l = e, u = n;
      if (typeof e.offset == "number") {
        let h = this.fromOffset(l.offset);
        e = h.line, n = h.col;
      } else
        e = l.line, n = l.column;
      if (typeof u.offset == "number") {
        let h = this.fromOffset(u.offset);
        i = h.line, c = h.col;
      } else
        i = u.line, c = u.column;
    } else if (!n) {
      let l = this.fromOffset(e);
      e = l.line, n = l.col;
    }
    let a = this.origin(e, n, i, c);
    return a ? o = new Bs(
      t,
      a.endLine === void 0 ? a.line : { line: a.line, column: a.column },
      a.endLine === void 0 ? a.column : { line: a.endLine, column: a.endColumn },
      a.source,
      a.file,
      r.plugin
    ) : o = new Bs(
      t,
      i === void 0 ? e : { line: e, column: n },
      i === void 0 ? n : { line: i, column: c },
      this.css,
      this.file,
      r.plugin
    ), o.input = { line: e, column: n, endLine: i, endColumn: c, source: this.css }, this.file && (Yt && (o.input.url = Yt(this.file).toString()), o.input.file = this.file), o;
  }
  origin(t, e, n, r) {
    if (!this.map)
      return !1;
    let o = this.map.consumer(), i = o.originalPositionFor({ line: t, column: e });
    if (!i.source)
      return !1;
    let c;
    typeof n == "number" && (c = o.originalPositionFor({ line: n, column: r }));
    let a;
    ze(i.source) ? a = Yt(i.source) : a = new URL(
      i.source,
      this.map.consumer().sourceRoot || Yt(this.map.mapFile)
    );
    let l = {
      url: a.toString(),
      line: i.line,
      column: i.column,
      endLine: c && c.line,
      endColumn: c && c.column
    };
    if (a.protocol === "file:")
      if (js)
        l.file = js(a);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let u = o.sourceContentFor(i.source);
    return u && (l.source = u), l;
  }
  mapResolve(t) {
    return /^\w+:\/\//.test(t) ? t : Fe(this.map.consumer().sourceRoot || this.map.root || ".", t);
  }
  get from() {
    return this.file || this.id;
  }
  toJSON() {
    let t = {};
    for (let e of ["hasBOM", "css", "file", "id"])
      this[e] != null && (t[e] = this[e]);
    return this.map && (t.map = { ...this.map }, t.map.consumerCache && (t.map.consumerCache = void 0)), t;
  }
}
var Te = ae;
ae.default = ae;
Le && Le.registerInput && Le.registerInput(ae);
let { SourceMapConsumer: Fn, SourceMapGenerator: ne } = st, { dirname: re, resolve: zn, relative: Gn, sep: Wn } = st, { pathToFileURL: Hs } = st, $3 = Te, M3 = Boolean(Fn && ne), I3 = Boolean(re && zn && Gn && Wn);
class j3 {
  constructor(t, e, n, r) {
    this.stringify = t, this.mapOpts = n.map || {}, this.root = e, this.opts = n, this.css = r, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((t) => {
          if (t.source && t.source.input.map) {
            let e = t.source.input.map;
            this.previousMaps.includes(e) || this.previousMaps.push(e);
          }
        });
      else {
        let t = new $3(this.css, this.opts);
        t.map && this.previousMaps.push(t.map);
      }
    return this.previousMaps;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let t = this.mapOpts.annotation;
    return typeof t < "u" && t !== !0 ? !1 : this.previous().length ? this.previous().some((e) => e.inline) : !0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((t) => t.withContent()) : !0;
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let t;
        for (let e = this.root.nodes.length - 1; e >= 0; e--)
          t = this.root.nodes[e], t.type === "comment" && t.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(e);
      } else
        this.css && (this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  setSourcesContent() {
    let t = {};
    if (this.root)
      this.root.walk((e) => {
        if (e.source) {
          let n = e.source.input.from;
          if (n && !t[n]) {
            t[n] = !0;
            let r = this.usesFileUrls ? this.toFileUrl(n) : this.toUrl(this.path(n));
            this.map.setSourceContent(r, e.source.input.css);
          }
        }
      });
    else if (this.css) {
      let e = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(e, this.css);
    }
  }
  applyPrevMaps() {
    for (let t of this.previous()) {
      let e = this.toUrl(this.path(t.file)), n = t.root || re(t.file), r;
      this.mapOpts.sourcesContent === !1 ? (r = new Fn(t.text), r.sourcesContent && (r.sourcesContent = r.sourcesContent.map(() => null))) : r = t.consumer(), this.map.applySourceMap(r, e, this.toUrl(this.path(n)));
    }
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((t) => t.annotation) : !0;
  }
  toBase64(t) {
    return Buffer ? Buffer.from(t).toString("base64") : window.btoa(unescape(encodeURIComponent(t)));
  }
  addAnnotation() {
    let t;
    this.isInline() ? t = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? t = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? t = this.mapOpts.annotation(this.opts.to, this.root) : t = this.outputFile() + ".map";
    let e = `
`;
    this.css.includes(`\r
`) && (e = `\r
`), this.css += e + "/*# sourceMappingURL=" + t + " */";
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let t = this.previous()[0].consumer();
      t.file = this.outputFile(), this.map = ne.fromSourceMap(t);
    } else
      this.map = new ne({ file: this.outputFile() }), this.map.addMapping({
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>",
        generated: { line: 1, column: 0 },
        original: { line: 1, column: 0 }
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  path(t) {
    if (t.indexOf("<") === 0 || /^\w+:\/\//.test(t) || this.mapOpts.absolute)
      return t;
    let e = this.opts.to ? re(this.opts.to) : ".";
    return typeof this.mapOpts.annotation == "string" && (e = re(zn(e, this.mapOpts.annotation))), t = Gn(e, t), t;
  }
  toUrl(t) {
    return Wn === "\\" && (t = t.replace(/\\/g, "/")), encodeURI(t).replace(/[#?]/g, encodeURIComponent);
  }
  toFileUrl(t) {
    if (Hs)
      return Hs(t).toString();
    throw new Error(
      "`map.absolute` option is not available in this PostCSS build"
    );
  }
  sourcePath(t) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(t.source.input.from) : this.toUrl(this.path(t.source.input.from));
  }
  generateString() {
    this.css = "", this.map = new ne({ file: this.outputFile() });
    let t = 1, e = 1, n = "<no source>", r = {
      source: "",
      generated: { line: 0, column: 0 },
      original: { line: 0, column: 0 }
    }, o, i;
    this.stringify(this.root, (c, a, l) => {
      if (this.css += c, a && l !== "end" && (r.generated.line = t, r.generated.column = e - 1, a.source && a.source.start ? (r.source = this.sourcePath(a), r.original.line = a.source.start.line, r.original.column = a.source.start.column - 1, this.map.addMapping(r)) : (r.source = n, r.original.line = 1, r.original.column = 0, this.map.addMapping(r))), o = c.match(/\n/g), o ? (t += o.length, i = c.lastIndexOf(`
`), e = c.length - i) : e += c.length, a && l !== "start") {
        let u = a.parent || { raws: {} };
        (a.type !== "decl" || a !== u.last || u.raws.semicolon) && (a.source && a.source.end ? (r.source = this.sourcePath(a), r.original.line = a.source.end.line, r.original.column = a.source.end.column - 1, r.generated.line = t, r.generated.column = e - 2, this.map.addMapping(r)) : (r.source = n, r.original.line = 1, r.original.column = 0, r.generated.line = t, r.generated.column = e - 1, this.map.addMapping(r)));
      }
    });
  }
  generate() {
    if (this.clearAnnotation(), I3 && M3 && this.isMap())
      return this.generateMap();
    {
      let t = "";
      return this.stringify(this.root, (e) => {
        t += e;
      }), [t];
    }
  }
}
var Yn = j3;
let B3 = Se;
class Ge extends B3 {
  constructor(t) {
    super(t), this.type = "comment";
  }
}
var Ee = Ge;
Ge.default = Ge;
let { isClean: Jn, my: Xn } = Ft, Qn = _e, Zn = Ee, U3 = Se, Kn, us, fs, tr;
function er(s) {
  return s.map((t) => (t.nodes && (t.nodes = er(t.nodes)), delete t.source, t));
}
function sr(s) {
  if (s[Jn] = !1, s.proxyOf.nodes)
    for (let t of s.proxyOf.nodes)
      sr(t);
}
class tt extends U3 {
  push(t) {
    return t.parent = this, this.proxyOf.nodes.push(t), this;
  }
  each(t) {
    if (!this.proxyOf.nodes)
      return;
    let e = this.getIterator(), n, r;
    for (; this.indexes[e] < this.proxyOf.nodes.length && (n = this.indexes[e], r = t(this.proxyOf.nodes[n], n), r !== !1); )
      this.indexes[e] += 1;
    return delete this.indexes[e], r;
  }
  walk(t) {
    return this.each((e, n) => {
      let r;
      try {
        r = t(e, n);
      } catch (o) {
        throw e.addToError(o);
      }
      return r !== !1 && e.walk && (r = e.walk(t)), r;
    });
  }
  walkDecls(t, e) {
    return e ? t instanceof RegExp ? this.walk((n, r) => {
      if (n.type === "decl" && t.test(n.prop))
        return e(n, r);
    }) : this.walk((n, r) => {
      if (n.type === "decl" && n.prop === t)
        return e(n, r);
    }) : (e = t, this.walk((n, r) => {
      if (n.type === "decl")
        return e(n, r);
    }));
  }
  walkRules(t, e) {
    return e ? t instanceof RegExp ? this.walk((n, r) => {
      if (n.type === "rule" && t.test(n.selector))
        return e(n, r);
    }) : this.walk((n, r) => {
      if (n.type === "rule" && n.selector === t)
        return e(n, r);
    }) : (e = t, this.walk((n, r) => {
      if (n.type === "rule")
        return e(n, r);
    }));
  }
  walkAtRules(t, e) {
    return e ? t instanceof RegExp ? this.walk((n, r) => {
      if (n.type === "atrule" && t.test(n.name))
        return e(n, r);
    }) : this.walk((n, r) => {
      if (n.type === "atrule" && n.name === t)
        return e(n, r);
    }) : (e = t, this.walk((n, r) => {
      if (n.type === "atrule")
        return e(n, r);
    }));
  }
  walkComments(t) {
    return this.walk((e, n) => {
      if (e.type === "comment")
        return t(e, n);
    });
  }
  append(...t) {
    for (let e of t) {
      let n = this.normalize(e, this.last);
      for (let r of n)
        this.proxyOf.nodes.push(r);
    }
    return this.markDirty(), this;
  }
  prepend(...t) {
    t = t.reverse();
    for (let e of t) {
      let n = this.normalize(e, this.first, "prepend").reverse();
      for (let r of n)
        this.proxyOf.nodes.unshift(r);
      for (let r in this.indexes)
        this.indexes[r] = this.indexes[r] + n.length;
    }
    return this.markDirty(), this;
  }
  cleanRaws(t) {
    if (super.cleanRaws(t), this.nodes)
      for (let e of this.nodes)
        e.cleanRaws(t);
  }
  insertBefore(t, e) {
    let n = this.index(t), r = t === 0 ? "prepend" : !1, o = this.normalize(e, this.proxyOf.nodes[n], r).reverse();
    n = this.index(t);
    for (let c of o)
      this.proxyOf.nodes.splice(n, 0, c);
    let i;
    for (let c in this.indexes)
      i = this.indexes[c], n <= i && (this.indexes[c] = i + o.length);
    return this.markDirty(), this;
  }
  insertAfter(t, e) {
    let n = this.index(t), r = this.normalize(e, this.proxyOf.nodes[n]).reverse();
    n = this.index(t);
    for (let i of r)
      this.proxyOf.nodes.splice(n + 1, 0, i);
    let o;
    for (let i in this.indexes)
      o = this.indexes[i], n < o && (this.indexes[i] = o + r.length);
    return this.markDirty(), this;
  }
  removeChild(t) {
    t = this.index(t), this.proxyOf.nodes[t].parent = void 0, this.proxyOf.nodes.splice(t, 1);
    let e;
    for (let n in this.indexes)
      e = this.indexes[n], e >= t && (this.indexes[n] = e - 1);
    return this.markDirty(), this;
  }
  removeAll() {
    for (let t of this.proxyOf.nodes)
      t.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  replaceValues(t, e, n) {
    return n || (n = e, e = {}), this.walkDecls((r) => {
      e.props && !e.props.includes(r.prop) || e.fast && !r.value.includes(e.fast) || (r.value = r.value.replace(t, n));
    }), this.markDirty(), this;
  }
  every(t) {
    return this.nodes.every(t);
  }
  some(t) {
    return this.nodes.some(t);
  }
  index(t) {
    return typeof t == "number" ? t : (t.proxyOf && (t = t.proxyOf), this.proxyOf.nodes.indexOf(t));
  }
  get first() {
    if (!!this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (!!this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
  normalize(t, e) {
    if (typeof t == "string")
      t = er(Kn(t).nodes);
    else if (Array.isArray(t)) {
      t = t.slice(0);
      for (let r of t)
        r.parent && r.parent.removeChild(r, "ignore");
    } else if (t.type === "root" && this.type !== "document") {
      t = t.nodes.slice(0);
      for (let r of t)
        r.parent && r.parent.removeChild(r, "ignore");
    } else if (t.type)
      t = [t];
    else if (t.prop) {
      if (typeof t.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof t.value != "string" && (t.value = String(t.value)), t = [new Qn(t)];
    } else if (t.selector)
      t = [new us(t)];
    else if (t.name)
      t = [new fs(t)];
    else if (t.text)
      t = [new Zn(t)];
    else
      throw new Error("Unknown node type in node creation");
    return t.map((r) => (r[Xn] || tt.rebuild(r), r = r.proxyOf, r.parent && r.parent.removeChild(r), r[Jn] && sr(r), typeof r.raws.before > "u" && e && typeof e.raws.before < "u" && (r.raws.before = e.raws.before.replace(/\S/g, "")), r.parent = this.proxyOf, r));
  }
  getProxyProcessor() {
    return {
      set(t, e, n) {
        return t[e] === n || (t[e] = n, (e === "name" || e === "params" || e === "selector") && t.markDirty()), !0;
      },
      get(t, e) {
        return e === "proxyOf" ? t : t[e] ? e === "each" || typeof e == "string" && e.startsWith("walk") ? (...n) => t[e](
          ...n.map((r) => typeof r == "function" ? (o, i) => r(o.toProxy(), i) : r)
        ) : e === "every" || e === "some" ? (n) => t[e](
          (r, ...o) => n(r.toProxy(), ...o)
        ) : e === "root" ? () => t.root().toProxy() : e === "nodes" ? t.nodes.map((n) => n.toProxy()) : e === "first" || e === "last" ? t[e].toProxy() : t[e] : t[e];
      }
    };
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let t = this.lastEach;
    return this.indexes[t] = 0, t;
  }
}
tt.registerParse = (s) => {
  Kn = s;
};
tt.registerRule = (s) => {
  us = s;
};
tt.registerAtRule = (s) => {
  fs = s;
};
tt.registerRoot = (s) => {
  tr = s;
};
var wt = tt;
tt.default = tt;
tt.rebuild = (s) => {
  s.type === "atrule" ? Object.setPrototypeOf(s, fs.prototype) : s.type === "rule" ? Object.setPrototypeOf(s, us.prototype) : s.type === "decl" ? Object.setPrototypeOf(s, Qn.prototype) : s.type === "comment" ? Object.setPrototypeOf(s, Zn.prototype) : s.type === "root" && Object.setPrototypeOf(s, tr.prototype), s[Xn] = !0, s.nodes && s.nodes.forEach((t) => {
    tt.rebuild(t);
  });
};
let H3 = wt, nr, rr;
class $t extends H3 {
  constructor(t) {
    super({ type: "document", ...t }), this.nodes || (this.nodes = []);
  }
  toResult(t = {}) {
    return new nr(new rr(), this, t).stringify();
  }
}
$t.registerLazyResult = (s) => {
  nr = s;
};
$t.registerProcessor = (s) => {
  rr = s;
};
var hs = $t;
$t.default = $t;
let Vs = {};
var or = function(t) {
  Vs[t] || (Vs[t] = !0, typeof console < "u" && console.warn && console.warn(t));
};
class We {
  constructor(t, e = {}) {
    if (this.type = "warning", this.text = t, e.node && e.node.source) {
      let n = e.node.rangeBy(e);
      this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column;
    }
    for (let n in e)
      this[n] = e[n];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      plugin: this.plugin,
      index: this.index,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
}
var ir = We;
We.default = We;
let V3 = ir;
class Ye {
  constructor(t, e, n) {
    this.processor = t, this.messages = [], this.root = e, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(t, e = {}) {
    e.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (e.plugin = this.lastPlugin.postcssPlugin);
    let n = new V3(t, e);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((t) => t.type === "warning");
  }
  get content() {
    return this.css;
  }
}
var ps = Ye;
Ye.default = Ye;
const Pe = "'".charCodeAt(0), Fs = '"'.charCodeAt(0), Jt = "\\".charCodeAt(0), zs = "/".charCodeAt(0), Xt = `
`.charCodeAt(0), Ot = " ".charCodeAt(0), Qt = "\f".charCodeAt(0), Zt = "	".charCodeAt(0), Kt = "\r".charCodeAt(0), F3 = "[".charCodeAt(0), z3 = "]".charCodeAt(0), G3 = "(".charCodeAt(0), W3 = ")".charCodeAt(0), Y3 = "{".charCodeAt(0), J3 = "}".charCodeAt(0), X3 = ";".charCodeAt(0), Q3 = "*".charCodeAt(0), Z3 = ":".charCodeAt(0), K3 = "@".charCodeAt(0), te = /[\t\n\f\r "#'()/;[\\\]{}]/g, ee = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, tz = /.[\n"'(/\\]/, Gs = /[\da-f]/i;
var ez = function(t, e = {}) {
  let n = t.css.valueOf(), r = e.ignoreErrors, o, i, c, a, l, u, h, b, w, d, y = n.length, p = 0, D = [], M = [];
  function F() {
    return p;
  }
  function A(B) {
    throw t.error("Unclosed " + B, p);
  }
  function I() {
    return M.length === 0 && p >= y;
  }
  function j(B) {
    if (M.length)
      return M.pop();
    if (p >= y)
      return;
    let Q = B ? B.ignoreUnclosed : !1;
    switch (o = n.charCodeAt(p), o) {
      case Xt:
      case Ot:
      case Zt:
      case Kt:
      case Qt: {
        i = p;
        do
          i += 1, o = n.charCodeAt(i);
        while (o === Ot || o === Xt || o === Zt || o === Kt || o === Qt);
        d = ["space", n.slice(p, i)], p = i - 1;
        break;
      }
      case F3:
      case z3:
      case Y3:
      case J3:
      case Z3:
      case X3:
      case W3: {
        let Z = String.fromCharCode(o);
        d = [Z, Z, p];
        break;
      }
      case G3: {
        if (b = D.length ? D.pop()[1] : "", w = n.charCodeAt(p + 1), b === "url" && w !== Pe && w !== Fs && w !== Ot && w !== Xt && w !== Zt && w !== Qt && w !== Kt) {
          i = p;
          do {
            if (u = !1, i = n.indexOf(")", i + 1), i === -1)
              if (r || Q) {
                i = p;
                break;
              } else
                A("bracket");
            for (h = i; n.charCodeAt(h - 1) === Jt; )
              h -= 1, u = !u;
          } while (u);
          d = ["brackets", n.slice(p, i + 1), p, i], p = i;
        } else
          i = n.indexOf(")", p + 1), a = n.slice(p, i + 1), i === -1 || tz.test(a) ? d = ["(", "(", p] : (d = ["brackets", a, p, i], p = i);
        break;
      }
      case Pe:
      case Fs: {
        c = o === Pe ? "'" : '"', i = p;
        do {
          if (u = !1, i = n.indexOf(c, i + 1), i === -1)
            if (r || Q) {
              i = p + 1;
              break;
            } else
              A("string");
          for (h = i; n.charCodeAt(h - 1) === Jt; )
            h -= 1, u = !u;
        } while (u);
        d = ["string", n.slice(p, i + 1), p, i], p = i;
        break;
      }
      case K3: {
        te.lastIndex = p + 1, te.test(n), te.lastIndex === 0 ? i = n.length - 1 : i = te.lastIndex - 2, d = ["at-word", n.slice(p, i + 1), p, i], p = i;
        break;
      }
      case Jt: {
        for (i = p, l = !0; n.charCodeAt(i + 1) === Jt; )
          i += 1, l = !l;
        if (o = n.charCodeAt(i + 1), l && o !== zs && o !== Ot && o !== Xt && o !== Zt && o !== Kt && o !== Qt && (i += 1, Gs.test(n.charAt(i)))) {
          for (; Gs.test(n.charAt(i + 1)); )
            i += 1;
          n.charCodeAt(i + 1) === Ot && (i += 1);
        }
        d = ["word", n.slice(p, i + 1), p, i], p = i;
        break;
      }
      default: {
        o === zs && n.charCodeAt(p + 1) === Q3 ? (i = n.indexOf("*/", p + 2) + 1, i === 0 && (r || Q ? i = n.length : A("comment")), d = ["comment", n.slice(p, i + 1), p, i], p = i) : (ee.lastIndex = p + 1, ee.test(n), ee.lastIndex === 0 ? i = n.length - 1 : i = ee.lastIndex - 2, d = ["word", n.slice(p, i + 1), p, i], D.push(d), p = i);
        break;
      }
    }
    return p++, d;
  }
  function z(B) {
    M.push(B);
  }
  return {
    back: z,
    nextToken: j,
    endOfFile: I,
    position: F
  };
};
let cr = wt;
class le extends cr {
  constructor(t) {
    super(t), this.type = "atrule";
  }
  append(...t) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...t);
  }
  prepend(...t) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...t);
  }
}
var ds = le;
le.default = le;
cr.registerAtRule(le);
let ar = wt, lr, ur;
class Ct extends ar {
  constructor(t) {
    super(t), this.type = "root", this.nodes || (this.nodes = []);
  }
  removeChild(t, e) {
    let n = this.index(t);
    return !e && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(t);
  }
  normalize(t, e, n) {
    let r = super.normalize(t);
    if (e) {
      if (n === "prepend")
        this.nodes.length > 1 ? e.raws.before = this.nodes[1].raws.before : delete e.raws.before;
      else if (this.first !== e)
        for (let o of r)
          o.raws.before = e.raws.before;
    }
    return r;
  }
  toResult(t = {}) {
    return new lr(new ur(), this, t).stringify();
  }
}
Ct.registerLazyResult = (s) => {
  lr = s;
};
Ct.registerProcessor = (s) => {
  ur = s;
};
var zt = Ct;
Ct.default = Ct;
ar.registerRoot(Ct);
let Mt = {
  split(s, t, e) {
    let n = [], r = "", o = !1, i = 0, c = !1, a = "", l = !1;
    for (let u of s)
      l ? l = !1 : u === "\\" ? l = !0 : c ? u === a && (c = !1) : u === '"' || u === "'" ? (c = !0, a = u) : u === "(" ? i += 1 : u === ")" ? i > 0 && (i -= 1) : i === 0 && t.includes(u) && (o = !0), o ? (r !== "" && n.push(r.trim()), r = "", o = !1) : r += u;
    return (e || r !== "") && n.push(r.trim()), n;
  },
  space(s) {
    let t = [" ", `
`, "	"];
    return Mt.split(s, t);
  },
  comma(s) {
    return Mt.split(s, [","], !0);
  }
};
var fr = Mt;
Mt.default = Mt;
let hr = wt, sz = fr;
class ue extends hr {
  constructor(t) {
    super(t), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return sz.comma(this.selector);
  }
  set selectors(t) {
    let e = this.selector ? this.selector.match(/,\s*/) : null, n = e ? e[0] : "," + this.raw("between", "beforeOpen");
    this.selector = t.join(n);
  }
}
var gs = ue;
ue.default = ue;
hr.registerRule(ue);
let nz = _e, rz = ez, oz = Ee, iz = ds, cz = zt, Ws = gs;
const Ys = {
  empty: !0,
  space: !0
};
function az(s) {
  for (let t = s.length - 1; t >= 0; t--) {
    let e = s[t], n = e[3] || e[2];
    if (n)
      return n;
  }
}
class lz {
  constructor(t) {
    this.input = t, this.root = new cz(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.customProperty = !1, this.createTokenizer(), this.root.source = { input: t, start: { offset: 0, line: 1, column: 1 } };
  }
  createTokenizer() {
    this.tokenizer = rz(this.input);
  }
  parse() {
    let t;
    for (; !this.tokenizer.endOfFile(); )
      switch (t = this.tokenizer.nextToken(), t[0]) {
        case "space":
          this.spaces += t[1];
          break;
        case ";":
          this.freeSemicolon(t);
          break;
        case "}":
          this.end(t);
          break;
        case "comment":
          this.comment(t);
          break;
        case "at-word":
          this.atrule(t);
          break;
        case "{":
          this.emptyRule(t);
          break;
        default:
          this.other(t);
          break;
      }
    this.endFile();
  }
  comment(t) {
    let e = new oz();
    this.init(e, t[2]), e.source.end = this.getPosition(t[3] || t[2]);
    let n = t[1].slice(2, -2);
    if (/^\s*$/.test(n))
      e.text = "", e.raws.left = n, e.raws.right = "";
    else {
      let r = n.match(/^(\s*)([^]*\S)(\s*)$/);
      e.text = r[2], e.raws.left = r[1], e.raws.right = r[3];
    }
  }
  emptyRule(t) {
    let e = new Ws();
    this.init(e, t[2]), e.selector = "", e.raws.between = "", this.current = e;
  }
  other(t) {
    let e = !1, n = null, r = !1, o = null, i = [], c = t[1].startsWith("--"), a = [], l = t;
    for (; l; ) {
      if (n = l[0], a.push(l), n === "(" || n === "[")
        o || (o = l), i.push(n === "(" ? ")" : "]");
      else if (c && r && n === "{")
        o || (o = l), i.push("}");
      else if (i.length === 0)
        if (n === ";")
          if (r) {
            this.decl(a, c);
            return;
          } else
            break;
        else if (n === "{") {
          this.rule(a);
          return;
        } else if (n === "}") {
          this.tokenizer.back(a.pop()), e = !0;
          break;
        } else
          n === ":" && (r = !0);
      else
        n === i[i.length - 1] && (i.pop(), i.length === 0 && (o = null));
      l = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (e = !0), i.length > 0 && this.unclosedBracket(o), e && r) {
      if (!c)
        for (; a.length && (l = a[a.length - 1][0], !(l !== "space" && l !== "comment")); )
          this.tokenizer.back(a.pop());
      this.decl(a, c);
    } else
      this.unknownWord(a);
  }
  rule(t) {
    t.pop();
    let e = new Ws();
    this.init(e, t[0][2]), e.raws.between = this.spacesAndCommentsFromEnd(t), this.raw(e, "selector", t), this.current = e;
  }
  decl(t, e) {
    let n = new nz();
    this.init(n, t[0][2]);
    let r = t[t.length - 1];
    for (r[0] === ";" && (this.semicolon = !0, t.pop()), n.source.end = this.getPosition(
      r[3] || r[2] || az(t)
    ); t[0][0] !== "word"; )
      t.length === 1 && this.unknownWord(t), n.raws.before += t.shift()[1];
    for (n.source.start = this.getPosition(t[0][2]), n.prop = ""; t.length; ) {
      let l = t[0][0];
      if (l === ":" || l === "space" || l === "comment")
        break;
      n.prop += t.shift()[1];
    }
    n.raws.between = "";
    let o;
    for (; t.length; )
      if (o = t.shift(), o[0] === ":") {
        n.raws.between += o[1];
        break;
      } else
        o[0] === "word" && /\w/.test(o[1]) && this.unknownWord([o]), n.raws.between += o[1];
    (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
    let i = [], c;
    for (; t.length && (c = t[0][0], !(c !== "space" && c !== "comment")); )
      i.push(t.shift());
    this.precheckMissedSemicolon(t);
    for (let l = t.length - 1; l >= 0; l--) {
      if (o = t[l], o[1].toLowerCase() === "!important") {
        n.important = !0;
        let u = this.stringFrom(t, l);
        u = this.spacesFromEnd(t) + u, u !== " !important" && (n.raws.important = u);
        break;
      } else if (o[1].toLowerCase() === "important") {
        let u = t.slice(0), h = "";
        for (let b = l; b > 0; b--) {
          let w = u[b][0];
          if (h.trim().indexOf("!") === 0 && w !== "space")
            break;
          h = u.pop()[1] + h;
        }
        h.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = h, t = u);
      }
      if (o[0] !== "space" && o[0] !== "comment")
        break;
    }
    t.some((l) => l[0] !== "space" && l[0] !== "comment") && (n.raws.between += i.map((l) => l[1]).join(""), i = []), this.raw(n, "value", i.concat(t), e), n.value.includes(":") && !e && this.checkMissedSemicolon(t);
  }
  atrule(t) {
    let e = new iz();
    e.name = t[1].slice(1), e.name === "" && this.unnamedAtrule(e, t), this.init(e, t[2]);
    let n, r, o, i = !1, c = !1, a = [], l = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (t = this.tokenizer.nextToken(), n = t[0], n === "(" || n === "[" ? l.push(n === "(" ? ")" : "]") : n === "{" && l.length > 0 ? l.push("}") : n === l[l.length - 1] && l.pop(), l.length === 0)
        if (n === ";") {
          e.source.end = this.getPosition(t[2]), this.semicolon = !0;
          break;
        } else if (n === "{") {
          c = !0;
          break;
        } else if (n === "}") {
          if (a.length > 0) {
            for (o = a.length - 1, r = a[o]; r && r[0] === "space"; )
              r = a[--o];
            r && (e.source.end = this.getPosition(r[3] || r[2]));
          }
          this.end(t);
          break;
        } else
          a.push(t);
      else
        a.push(t);
      if (this.tokenizer.endOfFile()) {
        i = !0;
        break;
      }
    }
    e.raws.between = this.spacesAndCommentsFromEnd(a), a.length ? (e.raws.afterName = this.spacesAndCommentsFromStart(a), this.raw(e, "params", a), i && (t = a[a.length - 1], e.source.end = this.getPosition(t[3] || t[2]), this.spaces = e.raws.between, e.raws.between = "")) : (e.raws.afterName = "", e.params = ""), c && (e.nodes = [], this.current = e);
  }
  end(t) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(t[2]), this.current = this.current.parent) : this.unexpectedClose(t);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces;
  }
  freeSemicolon(t) {
    if (this.spaces += t[1], this.current.nodes) {
      let e = this.current.nodes[this.current.nodes.length - 1];
      e && e.type === "rule" && !e.raws.ownSemicolon && (e.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  getPosition(t) {
    let e = this.input.fromOffset(t);
    return {
      offset: t,
      line: e.line,
      column: e.col
    };
  }
  init(t, e) {
    this.current.push(t), t.source = {
      start: this.getPosition(e),
      input: this.input
    }, t.raws.before = this.spaces, this.spaces = "", t.type !== "comment" && (this.semicolon = !1);
  }
  raw(t, e, n, r) {
    let o, i, c = n.length, a = "", l = !0, u, h;
    for (let b = 0; b < c; b += 1)
      o = n[b], i = o[0], i === "space" && b === c - 1 && !r ? l = !1 : i === "comment" ? (h = n[b - 1] ? n[b - 1][0] : "empty", u = n[b + 1] ? n[b + 1][0] : "empty", !Ys[h] && !Ys[u] ? a.slice(-1) === "," ? l = !1 : a += o[1] : l = !1) : a += o[1];
    if (!l) {
      let b = n.reduce((w, d) => w + d[1], "");
      t.raws[e] = { value: a, raw: b };
    }
    t[e] = a;
  }
  spacesAndCommentsFromEnd(t) {
    let e, n = "";
    for (; t.length && (e = t[t.length - 1][0], !(e !== "space" && e !== "comment")); )
      n = t.pop()[1] + n;
    return n;
  }
  spacesAndCommentsFromStart(t) {
    let e, n = "";
    for (; t.length && (e = t[0][0], !(e !== "space" && e !== "comment")); )
      n += t.shift()[1];
    return n;
  }
  spacesFromEnd(t) {
    let e, n = "";
    for (; t.length && (e = t[t.length - 1][0], e === "space"); )
      n = t.pop()[1] + n;
    return n;
  }
  stringFrom(t, e) {
    let n = "";
    for (let r = e; r < t.length; r++)
      n += t[r][1];
    return t.splice(e, t.length - e), n;
  }
  colon(t) {
    let e = 0, n, r, o;
    for (let [i, c] of t.entries()) {
      if (n = c, r = n[0], r === "(" && (e += 1), r === ")" && (e -= 1), e === 0 && r === ":")
        if (!o)
          this.doubleColon(n);
        else {
          if (o[0] === "word" && o[1] === "progid")
            continue;
          return i;
        }
      o = n;
    }
    return !1;
  }
  unclosedBracket(t) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: t[2] },
      { offset: t[2] + 1 }
    );
  }
  unknownWord(t) {
    throw this.input.error(
      "Unknown word",
      { offset: t[0][2] },
      { offset: t[0][2] + t[0][1].length }
    );
  }
  unexpectedClose(t) {
    throw this.input.error(
      "Unexpected }",
      { offset: t[2] },
      { offset: t[2] + 1 }
    );
  }
  unclosedBlock() {
    let t = this.current.source.start;
    throw this.input.error("Unclosed block", t.line, t.column);
  }
  doubleColon(t) {
    throw this.input.error(
      "Double colon",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
  unnamedAtrule(t, e) {
    throw this.input.error(
      "At-rule without name",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  precheckMissedSemicolon() {
  }
  checkMissedSemicolon(t) {
    let e = this.colon(t);
    if (e === !1)
      return;
    let n = 0, r;
    for (let o = e - 1; o >= 0 && (r = t[o], !(r[0] !== "space" && (n += 1, n === 2))); o--)
      ;
    throw this.input.error(
      "Missed semicolon",
      r[0] === "word" ? r[3] + 1 : r[2]
    );
  }
}
var uz = lz;
let fz = wt, hz = uz, pz = Te;
function fe(s, t) {
  let e = new pz(s, t), n = new hz(e);
  try {
    n.parse();
  } catch (r) {
    throw process.env.NODE_ENV !== "production" && r.name === "CssSyntaxError" && t && t.from && (/\.scss$/i.test(t.from) ? r.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(t.from) ? r.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(t.from) && (r.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), r;
  }
  return n.root;
}
var ms = fe;
fe.default = fe;
fz.registerParse(fe);
let { isClean: nt, my: dz } = Ft, gz = Yn, mz = xe, bz = wt, yz = hs, vz = or, Js = ps, wz = ms, xz = zt;
const Sz = {
  document: "Document",
  root: "Root",
  atrule: "AtRule",
  rule: "Rule",
  decl: "Declaration",
  comment: "Comment"
}, _z = {
  postcssPlugin: !0,
  prepare: !0,
  Once: !0,
  Document: !0,
  Root: !0,
  Declaration: !0,
  Rule: !0,
  AtRule: !0,
  Comment: !0,
  DeclarationExit: !0,
  RuleExit: !0,
  AtRuleExit: !0,
  CommentExit: !0,
  RootExit: !0,
  DocumentExit: !0,
  OnceExit: !0
}, Tz = {
  postcssPlugin: !0,
  prepare: !0,
  Once: !0
}, At = 0;
function Dt(s) {
  return typeof s == "object" && typeof s.then == "function";
}
function pr(s) {
  let t = !1, e = Sz[s.type];
  return s.type === "decl" ? t = s.prop.toLowerCase() : s.type === "atrule" && (t = s.name.toLowerCase()), t && s.append ? [
    e,
    e + "-" + t,
    At,
    e + "Exit",
    e + "Exit-" + t
  ] : t ? [e, e + "-" + t, e + "Exit", e + "Exit-" + t] : s.append ? [e, At, e + "Exit"] : [e, e + "Exit"];
}
function Xs(s) {
  let t;
  return s.type === "document" ? t = ["Document", At, "DocumentExit"] : s.type === "root" ? t = ["Root", At, "RootExit"] : t = pr(s), {
    node: s,
    events: t,
    eventIndex: 0,
    visitors: [],
    visitorIndex: 0,
    iterator: 0
  };
}
function Je(s) {
  return s[nt] = !1, s.nodes && s.nodes.forEach((t) => Je(t)), s;
}
let Xe = {};
class pt {
  constructor(t, e, n) {
    this.stringified = !1, this.processed = !1;
    let r;
    if (typeof e == "object" && e !== null && (e.type === "root" || e.type === "document"))
      r = Je(e);
    else if (e instanceof pt || e instanceof Js)
      r = Je(e.root), e.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = e.map);
    else {
      let o = wz;
      n.syntax && (o = n.syntax.parse), n.parser && (o = n.parser), o.parse && (o = o.parse);
      try {
        r = o(e, n);
      } catch (i) {
        this.processed = !0, this.error = i;
      }
      r && !r[dz] && bz.rebuild(r);
    }
    this.result = new Js(t, r, n), this.helpers = { ...Xe, result: this.result, postcss: Xe }, this.plugins = this.processor.plugins.map((o) => typeof o == "object" && o.prepare ? { ...o, ...o.prepare(this.result) } : o);
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
  get processor() {
    return this.result.processor;
  }
  get opts() {
    return this.result.opts;
  }
  get css() {
    return this.stringify().css;
  }
  get content() {
    return this.stringify().content;
  }
  get map() {
    return this.stringify().map;
  }
  get root() {
    return this.sync().root;
  }
  get messages() {
    return this.sync().messages;
  }
  warnings() {
    return this.sync().warnings();
  }
  toString() {
    return this.css;
  }
  then(t, e) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || vz(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(t, e);
  }
  catch(t) {
    return this.async().catch(t);
  }
  finally(t) {
    return this.async().then(t, t);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  sync() {
    if (this.error)
      throw this.error;
    if (this.processed)
      return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let t of this.plugins) {
      let e = this.runOnRoot(t);
      if (Dt(e))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let t = this.result.root;
      for (; !t[nt]; )
        t[nt] = !0, this.walkSync(t);
      if (this.listeners.OnceExit)
        if (t.type === "document")
          for (let e of t.nodes)
            this.visitSync(this.listeners.OnceExit, e);
        else
          this.visitSync(this.listeners.OnceExit, t);
    }
    return this.result;
  }
  stringify() {
    if (this.error)
      throw this.error;
    if (this.stringified)
      return this.result;
    this.stringified = !0, this.sync();
    let t = this.result.opts, e = mz;
    t.syntax && (e = t.syntax.stringify), t.stringifier && (e = t.stringifier), e.stringify && (e = e.stringify);
    let r = new gz(e, this.result.root, this.result.opts).generate();
    return this.result.css = r[0], this.result.map = r[1], this.result;
  }
  walkSync(t) {
    t[nt] = !0;
    let e = pr(t);
    for (let n of e)
      if (n === At)
        t.nodes && t.each((r) => {
          r[nt] || this.walkSync(r);
        });
      else {
        let r = this.listeners[n];
        if (r && this.visitSync(r, t.toProxy()))
          return;
      }
  }
  visitSync(t, e) {
    for (let [n, r] of t) {
      this.result.lastPlugin = n;
      let o;
      try {
        o = r(e, this.helpers);
      } catch (i) {
        throw this.handleError(i, e.proxyOf);
      }
      if (e.type !== "root" && e.type !== "document" && !e.parent)
        return !0;
      if (Dt(o))
        throw this.getAsyncError();
    }
  }
  runOnRoot(t) {
    this.result.lastPlugin = t;
    try {
      if (typeof t == "object" && t.Once) {
        if (this.result.root.type === "document") {
          let e = this.result.root.nodes.map(
            (n) => t.Once(n, this.helpers)
          );
          return Dt(e[0]) ? Promise.all(e) : e;
        }
        return t.Once(this.result.root, this.helpers);
      } else if (typeof t == "function")
        return t(this.result.root, this.result);
    } catch (e) {
      throw this.handleError(e);
    }
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(t, e) {
    let n = this.result.lastPlugin;
    try {
      if (e && e.addToError(t), this.error = t, t.name === "CssSyntaxError" && !t.plugin)
        t.plugin = n.postcssPlugin, t.setMessage();
      else if (n.postcssVersion && process.env.NODE_ENV !== "production") {
        let r = n.postcssPlugin, o = n.postcssVersion, i = this.result.processor.version, c = o.split("."), a = i.split(".");
        (c[0] !== a[0] || parseInt(c[1]) > parseInt(a[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + i + ", but " + r + " uses " + o + ". Perhaps this is the source of the error below."
        );
      }
    } catch (r) {
      console && console.error && console.error(r);
    }
    return t;
  }
  async runAsync() {
    this.plugin = 0;
    for (let t = 0; t < this.plugins.length; t++) {
      let e = this.plugins[t], n = this.runOnRoot(e);
      if (Dt(n))
        try {
          await n;
        } catch (r) {
          throw this.handleError(r);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let t = this.result.root;
      for (; !t[nt]; ) {
        t[nt] = !0;
        let e = [Xs(t)];
        for (; e.length > 0; ) {
          let n = this.visitTick(e);
          if (Dt(n))
            try {
              await n;
            } catch (r) {
              let o = e[e.length - 1].node;
              throw this.handleError(r, o);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [e, n] of this.listeners.OnceExit) {
          this.result.lastPlugin = e;
          try {
            if (t.type === "document") {
              let r = t.nodes.map(
                (o) => n(o, this.helpers)
              );
              await Promise.all(r);
            } else
              await n(t, this.helpers);
          } catch (r) {
            throw this.handleError(r);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  prepareVisitors() {
    this.listeners = {};
    let t = (e, n, r) => {
      this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([e, r]);
    };
    for (let e of this.plugins)
      if (typeof e == "object")
        for (let n in e) {
          if (!_z[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${e.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!Tz[n])
            if (typeof e[n] == "object")
              for (let r in e[n])
                r === "*" ? t(e, n, e[n][r]) : t(
                  e,
                  n + "-" + r.toLowerCase(),
                  e[n][r]
                );
            else
              typeof e[n] == "function" && t(e, n, e[n]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  visitTick(t) {
    let e = t[t.length - 1], { node: n, visitors: r } = e;
    if (n.type !== "root" && n.type !== "document" && !n.parent) {
      t.pop();
      return;
    }
    if (r.length > 0 && e.visitorIndex < r.length) {
      let [i, c] = r[e.visitorIndex];
      e.visitorIndex += 1, e.visitorIndex === r.length && (e.visitors = [], e.visitorIndex = 0), this.result.lastPlugin = i;
      try {
        return c(n.toProxy(), this.helpers);
      } catch (a) {
        throw this.handleError(a, n);
      }
    }
    if (e.iterator !== 0) {
      let i = e.iterator, c;
      for (; c = n.nodes[n.indexes[i]]; )
        if (n.indexes[i] += 1, !c[nt]) {
          c[nt] = !0, t.push(Xs(c));
          return;
        }
      e.iterator = 0, delete n.indexes[i];
    }
    let o = e.events;
    for (; e.eventIndex < o.length; ) {
      let i = o[e.eventIndex];
      if (e.eventIndex += 1, i === At) {
        n.nodes && n.nodes.length && (n[nt] = !0, e.iterator = n.getIterator());
        return;
      } else if (this.listeners[i]) {
        e.visitors = this.listeners[i];
        return;
      }
    }
    t.pop();
  }
}
pt.registerPostcss = (s) => {
  Xe = s;
};
var dr = pt;
pt.default = pt;
xz.registerLazyResult(pt);
yz.registerLazyResult(pt);
let Ez = Yn, Cz = xe, Az = or, qz = ms;
const Oz = ps;
class Qe {
  constructor(t, e, n) {
    e = e.toString(), this.stringified = !1, this._processor = t, this._css = e, this._opts = n, this._map = void 0;
    let r, o = Cz;
    this.result = new Oz(this._processor, r, this._opts), this.result.css = e;
    let i = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return i.root;
      }
    });
    let c = new Ez(o, r, this._opts, e);
    if (c.isMap()) {
      let [a, l] = c.generate();
      a && (this.result.css = a), l && (this.result.map = l);
    }
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
  get processor() {
    return this.result.processor;
  }
  get opts() {
    return this.result.opts;
  }
  get css() {
    return this.result.css;
  }
  get content() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get root() {
    if (this._root)
      return this._root;
    let t, e = qz;
    try {
      t = e(this._css, this._opts);
    } catch (n) {
      this.error = n;
    }
    if (this.error)
      throw this.error;
    return this._root = t, t;
  }
  get messages() {
    return [];
  }
  warnings() {
    return [];
  }
  toString() {
    return this._css;
  }
  then(t, e) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Az(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(t, e);
  }
  catch(t) {
    return this.async().catch(t);
  }
  finally(t) {
    return this.async().then(t, t);
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  sync() {
    if (this.error)
      throw this.error;
    return this.result;
  }
}
var Dz = Qe;
Qe.default = Qe;
let Lz = Dz, Nz = dr, Pz = hs, kz = zt;
class It {
  constructor(t = []) {
    this.version = "8.4.18", this.plugins = this.normalize(t);
  }
  use(t) {
    return this.plugins = this.plugins.concat(this.normalize([t])), this;
  }
  process(t, e = {}) {
    return this.plugins.length === 0 && typeof e.parser > "u" && typeof e.stringifier > "u" && typeof e.syntax > "u" ? new Lz(this, t, e) : new Nz(this, t, e);
  }
  normalize(t) {
    let e = [];
    for (let n of t)
      if (n.postcss === !0 ? n = n() : n.postcss && (n = n.postcss), typeof n == "object" && Array.isArray(n.plugins))
        e = e.concat(n.plugins);
      else if (typeof n == "object" && n.postcssPlugin)
        e.push(n);
      else if (typeof n == "function")
        e.push(n);
      else if (typeof n == "object" && (n.parse || n.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(n + " is not a PostCSS plugin");
    return e;
  }
}
var Rz = It;
It.default = It;
kz.registerProcessor(It);
Pz.registerProcessor(It);
let $z = _e, Mz = Vn, Iz = Ee, jz = ds, Bz = Te, Uz = zt, Hz = gs;
function jt(s, t) {
  if (Array.isArray(s))
    return s.map((r) => jt(r));
  let { inputs: e, ...n } = s;
  if (e) {
    t = [];
    for (let r of e) {
      let o = { ...r, __proto__: Bz.prototype };
      o.map && (o.map = {
        ...o.map,
        __proto__: Mz.prototype
      }), t.push(o);
    }
  }
  if (n.nodes && (n.nodes = s.nodes.map((r) => jt(r, t))), n.source) {
    let { inputId: r, ...o } = n.source;
    n.source = o, r != null && (n.source.input = t[r]);
  }
  if (n.type === "root")
    return new Uz(n);
  if (n.type === "decl")
    return new $z(n);
  if (n.type === "rule")
    return new Hz(n);
  if (n.type === "comment")
    return new Iz(n);
  if (n.type === "atrule")
    return new jz(n);
  throw new Error("Unknown node type: " + s.type);
}
var Vz = jt;
jt.default = jt;
let Fz = ls, gr = _e, zz = dr, Gz = wt, bs = Rz, Wz = xe, Yz = Vz, mr = hs, Jz = ir, br = Ee, yr = ds, Xz = ps, Qz = Te, Zz = ms, Kz = fr, vr = gs, wr = zt, t4 = Se;
function E(...s) {
  return s.length === 1 && Array.isArray(s[0]) && (s = s[0]), new bs(s);
}
E.plugin = function(t, e) {
  let n = !1;
  function r(...i) {
    console && console.warn && !n && (n = !0, console.warn(
      t + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      t + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`
    ));
    let c = e(...i);
    return c.postcssPlugin = t, c.postcssVersion = new bs().version, c;
  }
  let o;
  return Object.defineProperty(r, "postcss", {
    get() {
      return o || (o = r()), o;
    }
  }), r.process = function(i, c, a) {
    return E([r(a)]).process(i, c);
  }, r;
};
E.stringify = Wz;
E.parse = Zz;
E.fromJSON = Yz;
E.list = Kz;
E.comment = (s) => new br(s);
E.atRule = (s) => new yr(s);
E.decl = (s) => new gr(s);
E.rule = (s) => new vr(s);
E.root = (s) => new wr(s);
E.document = (s) => new mr(s);
E.CssSyntaxError = Fz;
E.Declaration = gr;
E.Container = Gz;
E.Processor = bs;
E.Document = mr;
E.Comment = br;
E.Warning = Jz;
E.AtRule = yr;
E.Result = Xz;
E.Input = Qz;
E.Rule = vr;
E.Root = wr;
E.Node = t4;
zz.registerPostcss(E);
var e4 = E;
E.default = E;
const s4 = en, Qs = QF, { isPlainObject: n4 } = cs, Zs = h3, r4 = Bn.exports, { parse: o4 } = e4, i4 = [
  "img",
  "audio",
  "video",
  "picture",
  "svg",
  "object",
  "map",
  "iframe",
  "embed"
], c4 = ["script", "style"];
function Lt(s, t) {
  s && Object.keys(s).forEach(function(e) {
    t(s[e], e);
  });
}
function ct(s, t) {
  return {}.hasOwnProperty.call(s, t);
}
function Ks(s, t) {
  const e = [];
  return Lt(s, function(n) {
    t(n) && e.push(n);
  }), e;
}
function a4(s) {
  for (const t in s)
    if (ct(s, t))
      return !1;
  return !0;
}
function l4(s) {
  return s.map(function(t) {
    if (!t.url)
      throw new Error("URL missing");
    return t.url + (t.w ? ` ${t.w}w` : "") + (t.h ? ` ${t.h}h` : "") + (t.d ? ` ${t.d}x` : "");
  }).join(", ");
}
var u4 = Bt;
const f4 = /^[^\0\t\n\f\r /<=>]+$/;
function Bt(s, t, e) {
  if (s == null)
    return "";
  let n = "", r = "";
  function o(f, g) {
    const m = this;
    this.tag = f, this.attribs = g || {}, this.tagPosition = n.length, this.text = "", this.mediaChildren = [], this.updateParentNodeText = function() {
      if (y.length) {
        const x = y[y.length - 1];
        x.text += m.text;
      }
    }, this.updateParentNodeMediaChildren = function() {
      y.length && i4.includes(this.tag) && y[y.length - 1].mediaChildren.push(this.tag);
    };
  }
  t = Object.assign({}, Bt.defaults, t), t.parser = Object.assign({}, h4, t.parser), c4.forEach(function(f) {
    t.allowedTags && t.allowedTags.indexOf(f) > -1 && !t.allowVulnerableTags && console.warn(`

\u26A0\uFE0F Your \`allowedTags\` option includes, \`${f}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
  });
  const i = t.nonTextTags || [
    "script",
    "style",
    "textarea",
    "option"
  ];
  let c, a;
  t.allowedAttributes && (c = {}, a = {}, Lt(t.allowedAttributes, function(f, g) {
    c[g] = [];
    const m = [];
    f.forEach(function(x) {
      typeof x == "string" && x.indexOf("*") >= 0 ? m.push(Qs(x).replace(/\\\*/g, ".*")) : c[g].push(x);
    }), m.length && (a[g] = new RegExp("^(" + m.join("|") + ")$"));
  }));
  const l = {}, u = {}, h = {};
  Lt(t.allowedClasses, function(f, g) {
    c && (ct(c, g) || (c[g] = []), c[g].push("class")), l[g] = [], h[g] = [];
    const m = [];
    f.forEach(function(x) {
      typeof x == "string" && x.indexOf("*") >= 0 ? m.push(Qs(x).replace(/\\\*/g, ".*")) : x instanceof RegExp ? h[g].push(x) : l[g].push(x);
    }), m.length && (u[g] = new RegExp("^(" + m.join("|") + ")$"));
  });
  const b = {};
  let w;
  Lt(t.transformTags, function(f, g) {
    let m;
    typeof f == "function" ? m = f : typeof f == "string" && (m = Bt.simpleTransform(f)), g === "*" ? w = m : b[g] = m;
  });
  let d, y, p, D, M, F, A = !1;
  j();
  const I = new s4.Parser({
    onopentag: function(f, g) {
      if (t.enforceHtmlBoundary && f === "html" && j(), M) {
        F++;
        return;
      }
      const m = new o(f, g);
      y.push(m);
      let x = !1;
      const G = !!m.text;
      let R;
      if (ct(b, f) && (R = b[f](f, g), m.attribs = g = R.attribs, R.text !== void 0 && (m.innerText = R.text), f !== R.tagName && (m.name = f = R.tagName, D[d] = R.tagName)), w && (R = w(f, g), m.attribs = g = R.attribs, f !== R.tagName && (m.name = f = R.tagName, D[d] = R.tagName)), (t.allowedTags && t.allowedTags.indexOf(f) === -1 || t.disallowedTagsMode === "recursiveEscape" && !a4(p) || t.nestingLimit != null && d >= t.nestingLimit) && (x = !0, p[d] = !0, t.disallowedTagsMode === "discard" && i.indexOf(f) !== -1 && (M = !0, F = 1), p[d] = !0), d++, x) {
        if (t.disallowedTagsMode === "discard")
          return;
        r = n, n = "";
      }
      n += "<" + f, f === "script" && (t.allowedScriptHostnames || t.allowedScriptDomains) && (m.innerText = ""), (!c || ct(c, f) || c["*"]) && Lt(g, function(N, O) {
        if (!f4.test(O)) {
          delete m.attribs[O];
          return;
        }
        let Ce = !1;
        if (!c || ct(c, f) && c[f].indexOf(O) !== -1 || c["*"] && c["*"].indexOf(O) !== -1 || ct(a, f) && a[f].test(O) || a["*"] && a["*"].test(O))
          Ce = !0;
        else if (c && c[f]) {
          for (const _ of c[f])
            if (n4(_) && _.name && _.name === O) {
              Ce = !0;
              let T = "";
              if (_.multiple === !0) {
                const dt = N.split(" ");
                for (const ot of dt)
                  _.values.indexOf(ot) !== -1 && (T === "" ? T = ot : T += " " + ot);
              } else
                _.values.indexOf(N) >= 0 && (T = N);
              N = T;
            }
        }
        if (Ce) {
          if (t.allowedSchemesAppliedToAttributes.indexOf(O) !== -1 && B(f, N)) {
            delete m.attribs[O];
            return;
          }
          if (f === "script" && O === "src") {
            let _ = !0;
            try {
              const T = Q(N);
              if (t.allowedScriptHostnames || t.allowedScriptDomains) {
                const dt = (t.allowedScriptHostnames || []).find(function(K) {
                  return K === T.url.hostname;
                }), ot = (t.allowedScriptDomains || []).find(function(K) {
                  return T.url.hostname === K || T.url.hostname.endsWith(`.${K}`);
                });
                _ = dt || ot;
              }
            } catch {
              _ = !1;
            }
            if (!_) {
              delete m.attribs[O];
              return;
            }
          }
          if (f === "iframe" && O === "src") {
            let _ = !0;
            try {
              const T = Q(N);
              if (T.isRelativeUrl)
                _ = ct(t, "allowIframeRelativeUrls") ? t.allowIframeRelativeUrls : !t.allowedIframeHostnames && !t.allowedIframeDomains;
              else if (t.allowedIframeHostnames || t.allowedIframeDomains) {
                const dt = (t.allowedIframeHostnames || []).find(function(K) {
                  return K === T.url.hostname;
                }), ot = (t.allowedIframeDomains || []).find(function(K) {
                  return T.url.hostname === K || T.url.hostname.endsWith(`.${K}`);
                });
                _ = dt || ot;
              }
            } catch {
              _ = !1;
            }
            if (!_) {
              delete m.attribs[O];
              return;
            }
          }
          if (O === "srcset")
            try {
              let _ = r4(N);
              if (_.forEach(function(T) {
                B("srcset", T.url) && (T.evil = !0);
              }), _ = Ks(_, function(T) {
                return !T.evil;
              }), _.length)
                N = l4(Ks(_, function(T) {
                  return !T.evil;
                })), m.attribs[O] = N;
              else {
                delete m.attribs[O];
                return;
              }
            } catch {
              delete m.attribs[O];
              return;
            }
          if (O === "class") {
            const _ = l[f], T = l["*"], dt = u[f], ot = h[f], K = u["*"], ys = [
              dt,
              K
            ].concat(ot).filter(function(xr) {
              return xr;
            });
            if (_ && T ? N = ft(N, Zs(_, T), ys) : N = ft(N, _ || T, ys), !N.length) {
              delete m.attribs[O];
              return;
            }
          }
          if (O === "style")
            try {
              const _ = o4(f + " {" + N + "}"), T = Z(_, t.allowedStyles);
              if (N = xt(T), N.length === 0) {
                delete m.attribs[O];
                return;
              }
            } catch {
              delete m.attribs[O];
              return;
            }
          n += " " + O, N && N.length && (n += '="' + z(N, !0) + '"');
        } else
          delete m.attribs[O];
      }), t.selfClosing.indexOf(f) !== -1 ? n += " />" : (n += ">", m.innerText && !G && !t.textFilter && (n += z(m.innerText), A = !0)), x && (n = r + z(n), r = "");
    },
    ontext: function(f) {
      if (M)
        return;
      const g = y[y.length - 1];
      let m;
      if (g && (m = g.tag, f = g.innerText !== void 0 ? g.innerText : f), t.disallowedTagsMode === "discard" && (m === "script" || m === "style"))
        n += f;
      else {
        const x = z(f, !1);
        t.textFilter && !A ? n += t.textFilter(x, m) : A || (n += x);
      }
      if (y.length) {
        const x = y[y.length - 1];
        x.text += f;
      }
    },
    onclosetag: function(f) {
      if (M)
        if (F--, !F)
          M = !1;
        else
          return;
      const g = y.pop();
      if (!g)
        return;
      if (g.tag !== f) {
        y.push(g);
        return;
      }
      M = t.enforceHtmlBoundary ? f === "html" : !1, d--;
      const m = p[d];
      if (m) {
        if (delete p[d], t.disallowedTagsMode === "discard") {
          g.updateParentNodeText();
          return;
        }
        r = n, n = "";
      }
      if (D[d] && (f = D[d], delete D[d]), t.exclusiveFilter && t.exclusiveFilter(g)) {
        n = n.substr(0, g.tagPosition);
        return;
      }
      if (g.updateParentNodeMediaChildren(), g.updateParentNodeText(), t.selfClosing.indexOf(f) !== -1) {
        m && (n = r, r = "");
        return;
      }
      n += "</" + f + ">", m && (n = r + z(n), r = ""), A = !1;
    }
  }, t.parser);
  return I.write(s), I.end(), n;
  function j() {
    n = "", d = 0, y = [], p = {}, D = {}, M = !1, F = 0;
  }
  function z(f, g) {
    return typeof f != "string" && (f = f + ""), t.parser.decodeEntities && (f = f.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), g && (f = f.replace(/"/g, "&quot;"))), f = f.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), g && (f = f.replace(/"/g, "&quot;")), f;
  }
  function B(f, g) {
    for (g = g.replace(/[\x00-\x20]+/g, ""); ; ) {
      const G = g.indexOf("<!--");
      if (G === -1)
        break;
      const R = g.indexOf("-->", G + 4);
      if (R === -1)
        break;
      g = g.substring(0, G) + g.substring(R + 3);
    }
    const m = g.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
    if (!m)
      return g.match(/^[/\\]{2}/) ? !t.allowProtocolRelative : !1;
    const x = m[1].toLowerCase();
    return ct(t.allowedSchemesByTag, f) ? t.allowedSchemesByTag[f].indexOf(x) === -1 : !t.allowedSchemes || t.allowedSchemes.indexOf(x) === -1;
  }
  function Q(f) {
    if (f = f.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), f.startsWith("relative:"))
      throw new Error("relative: exploit attempt");
    let g = "relative://relative-site";
    for (let G = 0; G < 100; G++)
      g += `/${G}`;
    const m = new URL(f, g);
    return {
      isRelativeUrl: m && m.hostname === "relative-site" && m.protocol === "relative:",
      url: m
    };
  }
  function Z(f, g) {
    if (!g)
      return f;
    const m = f.nodes[0];
    let x;
    return g[m.selector] && g["*"] ? x = Zs(
      g[m.selector],
      g["*"]
    ) : x = g[m.selector] || g["*"], x && (f.nodes[0].nodes = m.nodes.reduce(ut(x), [])), f;
  }
  function xt(f) {
    return f.nodes[0].nodes.reduce(function(g, m) {
      return g.push(
        `${m.prop}:${m.value}${m.important ? " !important" : ""}`
      ), g;
    }, []).join(";");
  }
  function ut(f) {
    return function(g, m) {
      return ct(f, m.prop) && f[m.prop].some(function(G) {
        return G.test(m.value);
      }) && g.push(m), g;
    };
  }
  function ft(f, g, m) {
    return g ? (f = f.split(/\s+/), f.filter(function(x) {
      return g.indexOf(x) !== -1 || m.some(function(G) {
        return G.test(x);
      });
    }).join(" ")) : f;
  }
}
const h4 = {
  decodeEntities: !0
};
Bt.defaults = {
  allowedTags: [
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr"
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"]
  },
  selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: !0,
  enforceHtmlBoundary: !1
};
Bt.simpleTransform = function(s, t, e) {
  return e = e === void 0 ? !0 : e, t = t || {}, function(n, r) {
    let o;
    if (e)
      for (o in t)
        r[o] = t[o];
    else
      r = t;
    return {
      tagName: s,
      attribs: r
    };
  };
};
const p4 = u4, d4 = /* @__PURE__ */ Sr({
  __name: "sanitize-vue3",
  props: {
    html: { default: void 0 }
  },
  setup(s) {
    const t = s, e = _r(), n = () => {
      e.value && (e.value.innerHTML = p4(t.html));
    };
    return Tr(() => {
      n();
    }), Er(
      () => t.html,
      () => {
        n();
      },
      { immediate: !0 }
    ), (r, o) => (Cr(), Ar("div", {
      ref_key: "block",
      ref: e
    }, null, 512));
  }
}), m4 = { sanitizeVue3: d4 };
export {
  m4 as default
};
