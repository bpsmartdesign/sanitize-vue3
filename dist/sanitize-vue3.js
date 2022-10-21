import { defineComponent as Sr, ref as _r, watch as Tr, openBlock as Er, createElementBlock as Cr } from "vue";
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
const Ar = {
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
var qr = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(pe, "__esModule", { value: !0 });
var vs = qr(Ar), Or = String.fromCodePoint || function(s) {
  var t = "";
  return s > 65535 && (s -= 65536, t += String.fromCharCode(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), t += String.fromCharCode(s), t;
};
function Dr(s) {
  return s >= 55296 && s <= 57343 || s > 1114111 ? "\uFFFD" : (s in vs.default && (s = vs.default[s]), Or(s));
}
pe.default = Dr;
const Lr = "\xC1", Nr = "\xE1", Pr = "\u0102", kr = "\u0103", Rr = "\u223E", $r = "\u223F", Mr = "\u223E\u0333", Ir = "\xC2", jr = "\xE2", Br = "\xB4", Ur = "\u0410", Hr = "\u0430", Vr = "\xC6", Fr = "\xE6", zr = "\u2061", Gr = "\u{1D504}", Wr = "\u{1D51E}", Yr = "\xC0", Jr = "\xE0", Xr = "\u2135", Qr = "\u2135", Zr = "\u0391", Kr = "\u03B1", to = "\u0100", eo = "\u0101", so = "\u2A3F", no = "&", ro = "&", oo = "\u2A55", io = "\u2A53", co = "\u2227", ao = "\u2A5C", lo = "\u2A58", uo = "\u2A5A", fo = "\u2220", ho = "\u29A4", po = "\u2220", go = "\u29A8", mo = "\u29A9", bo = "\u29AA", yo = "\u29AB", vo = "\u29AC", wo = "\u29AD", xo = "\u29AE", So = "\u29AF", _o = "\u2221", To = "\u221F", Eo = "\u22BE", Co = "\u299D", Ao = "\u2222", qo = "\xC5", Oo = "\u237C", Do = "\u0104", Lo = "\u0105", No = "\u{1D538}", Po = "\u{1D552}", ko = "\u2A6F", Ro = "\u2248", $o = "\u2A70", Mo = "\u224A", Io = "\u224B", jo = "'", Bo = "\u2061", Uo = "\u2248", Ho = "\u224A", Vo = "\xC5", Fo = "\xE5", zo = "\u{1D49C}", Go = "\u{1D4B6}", Wo = "\u2254", Yo = "*", Jo = "\u2248", Xo = "\u224D", Qo = "\xC3", Zo = "\xE3", Ko = "\xC4", ti = "\xE4", ei = "\u2233", si = "\u2A11", ni = "\u224C", ri = "\u03F6", oi = "\u2035", ii = "\u223D", ci = "\u22CD", ai = "\u2216", li = "\u2AE7", ui = "\u22BD", fi = "\u2305", hi = "\u2306", pi = "\u2305", di = "\u23B5", gi = "\u23B6", mi = "\u224C", bi = "\u0411", yi = "\u0431", vi = "\u201E", wi = "\u2235", xi = "\u2235", Si = "\u2235", _i = "\u29B0", Ti = "\u03F6", Ei = "\u212C", Ci = "\u212C", Ai = "\u0392", qi = "\u03B2", Oi = "\u2136", Di = "\u226C", Li = "\u{1D505}", Ni = "\u{1D51F}", Pi = "\u22C2", ki = "\u25EF", Ri = "\u22C3", $i = "\u2A00", Mi = "\u2A01", Ii = "\u2A02", ji = "\u2A06", Bi = "\u2605", Ui = "\u25BD", Hi = "\u25B3", Vi = "\u2A04", Fi = "\u22C1", zi = "\u22C0", Gi = "\u290D", Wi = "\u29EB", Yi = "\u25AA", Ji = "\u25B4", Xi = "\u25BE", Qi = "\u25C2", Zi = "\u25B8", Ki = "\u2423", tc = "\u2592", ec = "\u2591", sc = "\u2593", nc = "\u2588", rc = "=\u20E5", oc = "\u2261\u20E5", ic = "\u2AED", cc = "\u2310", ac = "\u{1D539}", lc = "\u{1D553}", uc = "\u22A5", fc = "\u22A5", hc = "\u22C8", pc = "\u29C9", dc = "\u2510", gc = "\u2555", mc = "\u2556", bc = "\u2557", yc = "\u250C", vc = "\u2552", wc = "\u2553", xc = "\u2554", Sc = "\u2500", _c = "\u2550", Tc = "\u252C", Ec = "\u2564", Cc = "\u2565", Ac = "\u2566", qc = "\u2534", Oc = "\u2567", Dc = "\u2568", Lc = "\u2569", Nc = "\u229F", Pc = "\u229E", kc = "\u22A0", Rc = "\u2518", $c = "\u255B", Mc = "\u255C", Ic = "\u255D", jc = "\u2514", Bc = "\u2558", Uc = "\u2559", Hc = "\u255A", Vc = "\u2502", Fc = "\u2551", zc = "\u253C", Gc = "\u256A", Wc = "\u256B", Yc = "\u256C", Jc = "\u2524", Xc = "\u2561", Qc = "\u2562", Zc = "\u2563", Kc = "\u251C", ta = "\u255E", ea = "\u255F", sa = "\u2560", na = "\u2035", ra = "\u02D8", oa = "\u02D8", ia = "\xA6", ca = "\u{1D4B7}", aa = "\u212C", la = "\u204F", ua = "\u223D", fa = "\u22CD", ha = "\u29C5", pa = "\\", da = "\u27C8", ga = "\u2022", ma = "\u2022", ba = "\u224E", ya = "\u2AAE", va = "\u224F", wa = "\u224E", xa = "\u224F", Sa = "\u0106", _a = "\u0107", Ta = "\u2A44", Ea = "\u2A49", Ca = "\u2A4B", Aa = "\u2229", qa = "\u22D2", Oa = "\u2A47", Da = "\u2A40", La = "\u2145", Na = "\u2229\uFE00", Pa = "\u2041", ka = "\u02C7", Ra = "\u212D", $a = "\u2A4D", Ma = "\u010C", Ia = "\u010D", ja = "\xC7", Ba = "\xE7", Ua = "\u0108", Ha = "\u0109", Va = "\u2230", Fa = "\u2A4C", za = "\u2A50", Ga = "\u010A", Wa = "\u010B", Ya = "\xB8", Ja = "\xB8", Xa = "\u29B2", Qa = "\xA2", Za = "\xB7", Ka = "\xB7", tl = "\u{1D520}", el = "\u212D", sl = "\u0427", nl = "\u0447", rl = "\u2713", ol = "\u2713", il = "\u03A7", cl = "\u03C7", al = "\u02C6", ll = "\u2257", ul = "\u21BA", fl = "\u21BB", hl = "\u229B", pl = "\u229A", dl = "\u229D", gl = "\u2299", ml = "\xAE", bl = "\u24C8", yl = "\u2296", vl = "\u2295", wl = "\u2297", xl = "\u25CB", Sl = "\u29C3", _l = "\u2257", Tl = "\u2A10", El = "\u2AEF", Cl = "\u29C2", Al = "\u2232", ql = "\u201D", Ol = "\u2019", Dl = "\u2663", Ll = "\u2663", Nl = ":", Pl = "\u2237", kl = "\u2A74", Rl = "\u2254", $l = "\u2254", Ml = ",", Il = "@", jl = "\u2201", Bl = "\u2218", Ul = "\u2201", Hl = "\u2102", Vl = "\u2245", Fl = "\u2A6D", zl = "\u2261", Gl = "\u222E", Wl = "\u222F", Yl = "\u222E", Jl = "\u{1D554}", Xl = "\u2102", Ql = "\u2210", Zl = "\u2210", Kl = "\xA9", tu = "\xA9", eu = "\u2117", su = "\u2233", nu = "\u21B5", ru = "\u2717", ou = "\u2A2F", iu = "\u{1D49E}", cu = "\u{1D4B8}", au = "\u2ACF", lu = "\u2AD1", uu = "\u2AD0", fu = "\u2AD2", hu = "\u22EF", pu = "\u2938", du = "\u2935", gu = "\u22DE", mu = "\u22DF", bu = "\u21B6", yu = "\u293D", vu = "\u2A48", wu = "\u2A46", xu = "\u224D", Su = "\u222A", _u = "\u22D3", Tu = "\u2A4A", Eu = "\u228D", Cu = "\u2A45", Au = "\u222A\uFE00", qu = "\u21B7", Ou = "\u293C", Du = "\u22DE", Lu = "\u22DF", Nu = "\u22CE", Pu = "\u22CF", ku = "\xA4", Ru = "\u21B6", $u = "\u21B7", Mu = "\u22CE", Iu = "\u22CF", ju = "\u2232", Bu = "\u2231", Uu = "\u232D", Hu = "\u2020", Vu = "\u2021", Fu = "\u2138", zu = "\u2193", Gu = "\u21A1", Wu = "\u21D3", Yu = "\u2010", Ju = "\u2AE4", Xu = "\u22A3", Qu = "\u290F", Zu = "\u02DD", Ku = "\u010E", tf = "\u010F", ef = "\u0414", sf = "\u0434", nf = "\u2021", rf = "\u21CA", of = "\u2145", cf = "\u2146", af = "\u2911", lf = "\u2A77", uf = "\xB0", ff = "\u2207", hf = "\u0394", pf = "\u03B4", df = "\u29B1", gf = "\u297F", mf = "\u{1D507}", bf = "\u{1D521}", yf = "\u2965", vf = "\u21C3", wf = "\u21C2", xf = "\xB4", Sf = "\u02D9", _f = "\u02DD", Tf = "`", Ef = "\u02DC", Cf = "\u22C4", Af = "\u22C4", qf = "\u22C4", Of = "\u2666", Df = "\u2666", Lf = "\xA8", Nf = "\u2146", Pf = "\u03DD", kf = "\u22F2", Rf = "\xF7", $f = "\xF7", Mf = "\u22C7", If = "\u22C7", jf = "\u0402", Bf = "\u0452", Uf = "\u231E", Hf = "\u230D", Vf = "$", Ff = "\u{1D53B}", zf = "\u{1D555}", Gf = "\xA8", Wf = "\u02D9", Yf = "\u20DC", Jf = "\u2250", Xf = "\u2251", Qf = "\u2250", Zf = "\u2238", Kf = "\u2214", th = "\u22A1", eh = "\u2306", sh = "\u222F", nh = "\xA8", rh = "\u21D3", oh = "\u21D0", ih = "\u21D4", ch = "\u2AE4", ah = "\u27F8", lh = "\u27FA", uh = "\u27F9", fh = "\u21D2", hh = "\u22A8", ph = "\u21D1", dh = "\u21D5", gh = "\u2225", mh = "\u2913", bh = "\u2193", yh = "\u2193", vh = "\u21D3", wh = "\u21F5", xh = "\u0311", Sh = "\u21CA", _h = "\u21C3", Th = "\u21C2", Eh = "\u2950", Ch = "\u295E", Ah = "\u2956", qh = "\u21BD", Oh = "\u295F", Dh = "\u2957", Lh = "\u21C1", Nh = "\u21A7", Ph = "\u22A4", kh = "\u2910", Rh = "\u231F", $h = "\u230C", Mh = "\u{1D49F}", Ih = "\u{1D4B9}", jh = "\u0405", Bh = "\u0455", Uh = "\u29F6", Hh = "\u0110", Vh = "\u0111", Fh = "\u22F1", zh = "\u25BF", Gh = "\u25BE", Wh = "\u21F5", Yh = "\u296F", Jh = "\u29A6", Xh = "\u040F", Qh = "\u045F", Zh = "\u27FF", Kh = "\xC9", tp = "\xE9", ep = "\u2A6E", sp = "\u011A", np = "\u011B", rp = "\xCA", op = "\xEA", ip = "\u2256", cp = "\u2255", ap = "\u042D", lp = "\u044D", up = "\u2A77", fp = "\u0116", hp = "\u0117", pp = "\u2251", dp = "\u2147", gp = "\u2252", mp = "\u{1D508}", bp = "\u{1D522}", yp = "\u2A9A", vp = "\xC8", wp = "\xE8", xp = "\u2A96", Sp = "\u2A98", _p = "\u2A99", Tp = "\u2208", Ep = "\u23E7", Cp = "\u2113", Ap = "\u2A95", qp = "\u2A97", Op = "\u0112", Dp = "\u0113", Lp = "\u2205", Np = "\u2205", Pp = "\u25FB", kp = "\u2205", Rp = "\u25AB", $p = "\u2004", Mp = "\u2005", Ip = "\u2003", jp = "\u014A", Bp = "\u014B", Up = "\u2002", Hp = "\u0118", Vp = "\u0119", Fp = "\u{1D53C}", zp = "\u{1D556}", Gp = "\u22D5", Wp = "\u29E3", Yp = "\u2A71", Jp = "\u03B5", Xp = "\u0395", Qp = "\u03B5", Zp = "\u03F5", Kp = "\u2256", td = "\u2255", ed = "\u2242", sd = "\u2A96", nd = "\u2A95", rd = "\u2A75", od = "=", id = "\u2242", cd = "\u225F", ad = "\u21CC", ld = "\u2261", ud = "\u2A78", fd = "\u29E5", hd = "\u2971", pd = "\u2253", dd = "\u212F", gd = "\u2130", md = "\u2250", bd = "\u2A73", yd = "\u2242", vd = "\u0397", wd = "\u03B7", xd = "\xD0", Sd = "\xF0", _d = "\xCB", Td = "\xEB", Ed = "\u20AC", Cd = "!", Ad = "\u2203", qd = "\u2203", Od = "\u2130", Dd = "\u2147", Ld = "\u2147", Nd = "\u2252", Pd = "\u0424", kd = "\u0444", Rd = "\u2640", $d = "\uFB03", Md = "\uFB00", Id = "\uFB04", jd = "\u{1D509}", Bd = "\u{1D523}", Ud = "\uFB01", Hd = "\u25FC", Vd = "\u25AA", Fd = "fj", zd = "\u266D", Gd = "\uFB02", Wd = "\u25B1", Yd = "\u0192", Jd = "\u{1D53D}", Xd = "\u{1D557}", Qd = "\u2200", Zd = "\u2200", Kd = "\u22D4", tg = "\u2AD9", eg = "\u2131", sg = "\u2A0D", ng = "\xBD", rg = "\u2153", og = "\xBC", ig = "\u2155", cg = "\u2159", ag = "\u215B", lg = "\u2154", ug = "\u2156", fg = "\xBE", hg = "\u2157", pg = "\u215C", dg = "\u2158", gg = "\u215A", mg = "\u215D", bg = "\u215E", yg = "\u2044", vg = "\u2322", wg = "\u{1D4BB}", xg = "\u2131", Sg = "\u01F5", _g = "\u0393", Tg = "\u03B3", Eg = "\u03DC", Cg = "\u03DD", Ag = "\u2A86", qg = "\u011E", Og = "\u011F", Dg = "\u0122", Lg = "\u011C", Ng = "\u011D", Pg = "\u0413", kg = "\u0433", Rg = "\u0120", $g = "\u0121", Mg = "\u2265", Ig = "\u2267", jg = "\u2A8C", Bg = "\u22DB", Ug = "\u2265", Hg = "\u2267", Vg = "\u2A7E", Fg = "\u2AA9", zg = "\u2A7E", Gg = "\u2A80", Wg = "\u2A82", Yg = "\u2A84", Jg = "\u22DB\uFE00", Xg = "\u2A94", Qg = "\u{1D50A}", Zg = "\u{1D524}", Kg = "\u226B", tm = "\u22D9", em = "\u22D9", sm = "\u2137", nm = "\u0403", rm = "\u0453", om = "\u2AA5", im = "\u2277", cm = "\u2A92", am = "\u2AA4", lm = "\u2A8A", um = "\u2A8A", fm = "\u2A88", hm = "\u2269", pm = "\u2A88", dm = "\u2269", gm = "\u22E7", mm = "\u{1D53E}", bm = "\u{1D558}", ym = "`", vm = "\u2265", wm = "\u22DB", xm = "\u2267", Sm = "\u2AA2", _m = "\u2277", Tm = "\u2A7E", Em = "\u2273", Cm = "\u{1D4A2}", Am = "\u210A", qm = "\u2273", Om = "\u2A8E", Dm = "\u2A90", Lm = "\u2AA7", Nm = "\u2A7A", Pm = ">", km = ">", Rm = "\u226B", $m = "\u22D7", Mm = "\u2995", Im = "\u2A7C", jm = "\u2A86", Bm = "\u2978", Um = "\u22D7", Hm = "\u22DB", Vm = "\u2A8C", Fm = "\u2277", zm = "\u2273", Gm = "\u2269\uFE00", Wm = "\u2269\uFE00", Ym = "\u02C7", Jm = "\u200A", Xm = "\xBD", Qm = "\u210B", Zm = "\u042A", Km = "\u044A", tb = "\u2948", eb = "\u2194", sb = "\u21D4", nb = "\u21AD", rb = "^", ob = "\u210F", ib = "\u0124", cb = "\u0125", ab = "\u2665", lb = "\u2665", ub = "\u2026", fb = "\u22B9", hb = "\u{1D525}", pb = "\u210C", db = "\u210B", gb = "\u2925", mb = "\u2926", bb = "\u21FF", yb = "\u223B", vb = "\u21A9", wb = "\u21AA", xb = "\u{1D559}", Sb = "\u210D", _b = "\u2015", Tb = "\u2500", Eb = "\u{1D4BD}", Cb = "\u210B", Ab = "\u210F", qb = "\u0126", Ob = "\u0127", Db = "\u224E", Lb = "\u224F", Nb = "\u2043", Pb = "\u2010", kb = "\xCD", Rb = "\xED", $b = "\u2063", Mb = "\xCE", Ib = "\xEE", jb = "\u0418", Bb = "\u0438", Ub = "\u0130", Hb = "\u0415", Vb = "\u0435", Fb = "\xA1", zb = "\u21D4", Gb = "\u{1D526}", Wb = "\u2111", Yb = "\xCC", Jb = "\xEC", Xb = "\u2148", Qb = "\u2A0C", Zb = "\u222D", Kb = "\u29DC", ty = "\u2129", ey = "\u0132", sy = "\u0133", ny = "\u012A", ry = "\u012B", oy = "\u2111", iy = "\u2148", cy = "\u2110", ay = "\u2111", ly = "\u0131", uy = "\u2111", fy = "\u22B7", hy = "\u01B5", py = "\u21D2", dy = "\u2105", gy = "\u221E", my = "\u29DD", by = "\u0131", yy = "\u22BA", vy = "\u222B", wy = "\u222C", xy = "\u2124", Sy = "\u222B", _y = "\u22BA", Ty = "\u22C2", Ey = "\u2A17", Cy = "\u2A3C", Ay = "\u2063", qy = "\u2062", Oy = "\u0401", Dy = "\u0451", Ly = "\u012E", Ny = "\u012F", Py = "\u{1D540}", ky = "\u{1D55A}", Ry = "\u0399", $y = "\u03B9", My = "\u2A3C", Iy = "\xBF", jy = "\u{1D4BE}", By = "\u2110", Uy = "\u2208", Hy = "\u22F5", Vy = "\u22F9", Fy = "\u22F4", zy = "\u22F3", Gy = "\u2208", Wy = "\u2062", Yy = "\u0128", Jy = "\u0129", Xy = "\u0406", Qy = "\u0456", Zy = "\xCF", Ky = "\xEF", tv = "\u0134", ev = "\u0135", sv = "\u0419", nv = "\u0439", rv = "\u{1D50D}", ov = "\u{1D527}", iv = "\u0237", cv = "\u{1D541}", av = "\u{1D55B}", lv = "\u{1D4A5}", uv = "\u{1D4BF}", fv = "\u0408", hv = "\u0458", pv = "\u0404", dv = "\u0454", gv = "\u039A", mv = "\u03BA", bv = "\u03F0", yv = "\u0136", vv = "\u0137", wv = "\u041A", xv = "\u043A", Sv = "\u{1D50E}", _v = "\u{1D528}", Tv = "\u0138", Ev = "\u0425", Cv = "\u0445", Av = "\u040C", qv = "\u045C", Ov = "\u{1D542}", Dv = "\u{1D55C}", Lv = "\u{1D4A6}", Nv = "\u{1D4C0}", Pv = "\u21DA", kv = "\u0139", Rv = "\u013A", $v = "\u29B4", Mv = "\u2112", Iv = "\u039B", jv = "\u03BB", Bv = "\u27E8", Uv = "\u27EA", Hv = "\u2991", Vv = "\u27E8", Fv = "\u2A85", zv = "\u2112", Gv = "\xAB", Wv = "\u21E4", Yv = "\u291F", Jv = "\u2190", Xv = "\u219E", Qv = "\u21D0", Zv = "\u291D", Kv = "\u21A9", tw = "\u21AB", ew = "\u2939", sw = "\u2973", nw = "\u21A2", rw = "\u2919", ow = "\u291B", iw = "\u2AAB", cw = "\u2AAD", aw = "\u2AAD\uFE00", lw = "\u290C", uw = "\u290E", fw = "\u2772", hw = "{", pw = "[", dw = "\u298B", gw = "\u298F", mw = "\u298D", bw = "\u013D", yw = "\u013E", vw = "\u013B", ww = "\u013C", xw = "\u2308", Sw = "{", _w = "\u041B", Tw = "\u043B", Ew = "\u2936", Cw = "\u201C", Aw = "\u201E", qw = "\u2967", Ow = "\u294B", Dw = "\u21B2", Lw = "\u2264", Nw = "\u2266", Pw = "\u27E8", kw = "\u21E4", Rw = "\u2190", $w = "\u2190", Mw = "\u21D0", Iw = "\u21C6", jw = "\u21A2", Bw = "\u2308", Uw = "\u27E6", Hw = "\u2961", Vw = "\u2959", Fw = "\u21C3", zw = "\u230A", Gw = "\u21BD", Ww = "\u21BC", Yw = "\u21C7", Jw = "\u2194", Xw = "\u2194", Qw = "\u21D4", Zw = "\u21C6", Kw = "\u21CB", tx = "\u21AD", ex = "\u294E", sx = "\u21A4", nx = "\u22A3", rx = "\u295A", ox = "\u22CB", ix = "\u29CF", cx = "\u22B2", ax = "\u22B4", lx = "\u2951", ux = "\u2960", fx = "\u2958", hx = "\u21BF", px = "\u2952", dx = "\u21BC", gx = "\u2A8B", mx = "\u22DA", bx = "\u2264", yx = "\u2266", vx = "\u2A7D", wx = "\u2AA8", xx = "\u2A7D", Sx = "\u2A7F", _x = "\u2A81", Tx = "\u2A83", Ex = "\u22DA\uFE00", Cx = "\u2A93", Ax = "\u2A85", qx = "\u22D6", Ox = "\u22DA", Dx = "\u2A8B", Lx = "\u22DA", Nx = "\u2266", Px = "\u2276", kx = "\u2276", Rx = "\u2AA1", $x = "\u2272", Mx = "\u2A7D", Ix = "\u2272", jx = "\u297C", Bx = "\u230A", Ux = "\u{1D50F}", Hx = "\u{1D529}", Vx = "\u2276", Fx = "\u2A91", zx = "\u2962", Gx = "\u21BD", Wx = "\u21BC", Yx = "\u296A", Jx = "\u2584", Xx = "\u0409", Qx = "\u0459", Zx = "\u21C7", Kx = "\u226A", t1 = "\u22D8", e1 = "\u231E", s1 = "\u21DA", n1 = "\u296B", r1 = "\u25FA", o1 = "\u013F", i1 = "\u0140", c1 = "\u23B0", a1 = "\u23B0", l1 = "\u2A89", u1 = "\u2A89", f1 = "\u2A87", h1 = "\u2268", p1 = "\u2A87", d1 = "\u2268", g1 = "\u22E6", m1 = "\u27EC", b1 = "\u21FD", y1 = "\u27E6", v1 = "\u27F5", w1 = "\u27F5", x1 = "\u27F8", S1 = "\u27F7", _1 = "\u27F7", T1 = "\u27FA", E1 = "\u27FC", C1 = "\u27F6", A1 = "\u27F6", q1 = "\u27F9", O1 = "\u21AB", D1 = "\u21AC", L1 = "\u2985", N1 = "\u{1D543}", P1 = "\u{1D55D}", k1 = "\u2A2D", R1 = "\u2A34", $1 = "\u2217", M1 = "_", I1 = "\u2199", j1 = "\u2198", B1 = "\u25CA", U1 = "\u25CA", H1 = "\u29EB", V1 = "(", F1 = "\u2993", z1 = "\u21C6", G1 = "\u231F", W1 = "\u21CB", Y1 = "\u296D", J1 = "\u200E", X1 = "\u22BF", Q1 = "\u2039", Z1 = "\u{1D4C1}", K1 = "\u2112", tS = "\u21B0", eS = "\u21B0", sS = "\u2272", nS = "\u2A8D", rS = "\u2A8F", oS = "[", iS = "\u2018", cS = "\u201A", aS = "\u0141", lS = "\u0142", uS = "\u2AA6", fS = "\u2A79", hS = "<", pS = "<", dS = "\u226A", gS = "\u22D6", mS = "\u22CB", bS = "\u22C9", yS = "\u2976", vS = "\u2A7B", wS = "\u25C3", xS = "\u22B4", SS = "\u25C2", _S = "\u2996", TS = "\u294A", ES = "\u2966", CS = "\u2268\uFE00", AS = "\u2268\uFE00", qS = "\xAF", OS = "\u2642", DS = "\u2720", LS = "\u2720", NS = "\u21A6", PS = "\u21A6", kS = "\u21A7", RS = "\u21A4", $S = "\u21A5", MS = "\u25AE", IS = "\u2A29", jS = "\u041C", BS = "\u043C", US = "\u2014", HS = "\u223A", VS = "\u2221", FS = "\u205F", zS = "\u2133", GS = "\u{1D510}", WS = "\u{1D52A}", YS = "\u2127", JS = "\xB5", XS = "*", QS = "\u2AF0", ZS = "\u2223", KS = "\xB7", t_ = "\u229F", e_ = "\u2212", s_ = "\u2238", n_ = "\u2A2A", r_ = "\u2213", o_ = "\u2ADB", i_ = "\u2026", c_ = "\u2213", a_ = "\u22A7", l_ = "\u{1D544}", u_ = "\u{1D55E}", f_ = "\u2213", h_ = "\u{1D4C2}", p_ = "\u2133", d_ = "\u223E", g_ = "\u039C", m_ = "\u03BC", b_ = "\u22B8", y_ = "\u22B8", v_ = "\u2207", w_ = "\u0143", x_ = "\u0144", S_ = "\u2220\u20D2", __ = "\u2249", T_ = "\u2A70\u0338", E_ = "\u224B\u0338", C_ = "\u0149", A_ = "\u2249", q_ = "\u266E", O_ = "\u2115", D_ = "\u266E", L_ = "\xA0", N_ = "\u224E\u0338", P_ = "\u224F\u0338", k_ = "\u2A43", R_ = "\u0147", $_ = "\u0148", M_ = "\u0145", I_ = "\u0146", j_ = "\u2247", B_ = "\u2A6D\u0338", U_ = "\u2A42", H_ = "\u041D", V_ = "\u043D", F_ = "\u2013", z_ = "\u2924", G_ = "\u2197", W_ = "\u21D7", Y_ = "\u2197", J_ = "\u2260", X_ = "\u2250\u0338", Q_ = "\u200B", Z_ = "\u200B", K_ = "\u200B", tT = "\u200B", eT = "\u2262", sT = "\u2928", nT = "\u2242\u0338", rT = "\u226B", oT = "\u226A", iT = `
`, cT = "\u2204", aT = "\u2204", lT = "\u{1D511}", uT = "\u{1D52B}", fT = "\u2267\u0338", hT = "\u2271", pT = "\u2271", dT = "\u2267\u0338", gT = "\u2A7E\u0338", mT = "\u2A7E\u0338", bT = "\u22D9\u0338", yT = "\u2275", vT = "\u226B\u20D2", wT = "\u226F", xT = "\u226F", ST = "\u226B\u0338", _T = "\u21AE", TT = "\u21CE", ET = "\u2AF2", CT = "\u220B", AT = "\u22FC", qT = "\u22FA", OT = "\u220B", DT = "\u040A", LT = "\u045A", NT = "\u219A", PT = "\u21CD", kT = "\u2025", RT = "\u2266\u0338", $T = "\u2270", MT = "\u219A", IT = "\u21CD", jT = "\u21AE", BT = "\u21CE", UT = "\u2270", HT = "\u2266\u0338", VT = "\u2A7D\u0338", FT = "\u2A7D\u0338", zT = "\u226E", GT = "\u22D8\u0338", WT = "\u2274", YT = "\u226A\u20D2", JT = "\u226E", XT = "\u22EA", QT = "\u22EC", ZT = "\u226A\u0338", KT = "\u2224", tE = "\u2060", eE = "\xA0", sE = "\u{1D55F}", nE = "\u2115", rE = "\u2AEC", oE = "\xAC", iE = "\u2262", cE = "\u226D", aE = "\u2226", lE = "\u2209", uE = "\u2260", fE = "\u2242\u0338", hE = "\u2204", pE = "\u226F", dE = "\u2271", gE = "\u2267\u0338", mE = "\u226B\u0338", bE = "\u2279", yE = "\u2A7E\u0338", vE = "\u2275", wE = "\u224E\u0338", xE = "\u224F\u0338", SE = "\u2209", _E = "\u22F5\u0338", TE = "\u22F9\u0338", EE = "\u2209", CE = "\u22F7", AE = "\u22F6", qE = "\u29CF\u0338", OE = "\u22EA", DE = "\u22EC", LE = "\u226E", NE = "\u2270", PE = "\u2278", kE = "\u226A\u0338", RE = "\u2A7D\u0338", $E = "\u2274", ME = "\u2AA2\u0338", IE = "\u2AA1\u0338", jE = "\u220C", BE = "\u220C", UE = "\u22FE", HE = "\u22FD", VE = "\u2280", FE = "\u2AAF\u0338", zE = "\u22E0", GE = "\u220C", WE = "\u29D0\u0338", YE = "\u22EB", JE = "\u22ED", XE = "\u228F\u0338", QE = "\u22E2", ZE = "\u2290\u0338", KE = "\u22E3", tC = "\u2282\u20D2", eC = "\u2288", sC = "\u2281", nC = "\u2AB0\u0338", rC = "\u22E1", oC = "\u227F\u0338", iC = "\u2283\u20D2", cC = "\u2289", aC = "\u2241", lC = "\u2244", uC = "\u2247", fC = "\u2249", hC = "\u2224", pC = "\u2226", dC = "\u2226", gC = "\u2AFD\u20E5", mC = "\u2202\u0338", bC = "\u2A14", yC = "\u2280", vC = "\u22E0", wC = "\u2280", xC = "\u2AAF\u0338", SC = "\u2AAF\u0338", _C = "\u2933\u0338", TC = "\u219B", EC = "\u21CF", CC = "\u219D\u0338", AC = "\u219B", qC = "\u21CF", OC = "\u22EB", DC = "\u22ED", LC = "\u2281", NC = "\u22E1", PC = "\u2AB0\u0338", kC = "\u{1D4A9}", RC = "\u{1D4C3}", $C = "\u2224", MC = "\u2226", IC = "\u2241", jC = "\u2244", BC = "\u2244", UC = "\u2224", HC = "\u2226", VC = "\u22E2", FC = "\u22E3", zC = "\u2284", GC = "\u2AC5\u0338", WC = "\u2288", YC = "\u2282\u20D2", JC = "\u2288", XC = "\u2AC5\u0338", QC = "\u2281", ZC = "\u2AB0\u0338", KC = "\u2285", t0 = "\u2AC6\u0338", e0 = "\u2289", s0 = "\u2283\u20D2", n0 = "\u2289", r0 = "\u2AC6\u0338", o0 = "\u2279", i0 = "\xD1", c0 = "\xF1", a0 = "\u2278", l0 = "\u22EA", u0 = "\u22EC", f0 = "\u22EB", h0 = "\u22ED", p0 = "\u039D", d0 = "\u03BD", g0 = "#", m0 = "\u2116", b0 = "\u2007", y0 = "\u224D\u20D2", v0 = "\u22AC", w0 = "\u22AD", x0 = "\u22AE", S0 = "\u22AF", _0 = "\u2265\u20D2", T0 = ">\u20D2", E0 = "\u2904", C0 = "\u29DE", A0 = "\u2902", q0 = "\u2264\u20D2", O0 = "<\u20D2", D0 = "\u22B4\u20D2", L0 = "\u2903", N0 = "\u22B5\u20D2", P0 = "\u223C\u20D2", k0 = "\u2923", R0 = "\u2196", $0 = "\u21D6", M0 = "\u2196", I0 = "\u2927", j0 = "\xD3", B0 = "\xF3", U0 = "\u229B", H0 = "\xD4", V0 = "\xF4", F0 = "\u229A", z0 = "\u041E", G0 = "\u043E", W0 = "\u229D", Y0 = "\u0150", J0 = "\u0151", X0 = "\u2A38", Q0 = "\u2299", Z0 = "\u29BC", K0 = "\u0152", tA = "\u0153", eA = "\u29BF", sA = "\u{1D512}", nA = "\u{1D52C}", rA = "\u02DB", oA = "\xD2", iA = "\xF2", cA = "\u29C1", aA = "\u29B5", lA = "\u03A9", uA = "\u222E", fA = "\u21BA", hA = "\u29BE", pA = "\u29BB", dA = "\u203E", gA = "\u29C0", mA = "\u014C", bA = "\u014D", yA = "\u03A9", vA = "\u03C9", wA = "\u039F", xA = "\u03BF", SA = "\u29B6", _A = "\u2296", TA = "\u{1D546}", EA = "\u{1D560}", CA = "\u29B7", AA = "\u201C", qA = "\u2018", OA = "\u29B9", DA = "\u2295", LA = "\u21BB", NA = "\u2A54", PA = "\u2228", kA = "\u2A5D", RA = "\u2134", $A = "\u2134", MA = "\xAA", IA = "\xBA", jA = "\u22B6", BA = "\u2A56", UA = "\u2A57", HA = "\u2A5B", VA = "\u24C8", FA = "\u{1D4AA}", zA = "\u2134", GA = "\xD8", WA = "\xF8", YA = "\u2298", JA = "\xD5", XA = "\xF5", QA = "\u2A36", ZA = "\u2A37", KA = "\u2297", tq = "\xD6", eq = "\xF6", sq = "\u233D", nq = "\u203E", rq = "\u23DE", oq = "\u23B4", iq = "\u23DC", cq = "\xB6", aq = "\u2225", lq = "\u2225", uq = "\u2AF3", fq = "\u2AFD", hq = "\u2202", pq = "\u2202", dq = "\u041F", gq = "\u043F", mq = "%", bq = ".", yq = "\u2030", vq = "\u22A5", wq = "\u2031", xq = "\u{1D513}", Sq = "\u{1D52D}", _q = "\u03A6", Tq = "\u03C6", Eq = "\u03D5", Cq = "\u2133", Aq = "\u260E", qq = "\u03A0", Oq = "\u03C0", Dq = "\u22D4", Lq = "\u03D6", Nq = "\u210F", Pq = "\u210E", kq = "\u210F", Rq = "\u2A23", $q = "\u229E", Mq = "\u2A22", Iq = "+", jq = "\u2214", Bq = "\u2A25", Uq = "\u2A72", Hq = "\xB1", Vq = "\xB1", Fq = "\u2A26", zq = "\u2A27", Gq = "\xB1", Wq = "\u210C", Yq = "\u2A15", Jq = "\u{1D561}", Xq = "\u2119", Qq = "\xA3", Zq = "\u2AB7", Kq = "\u2ABB", tO = "\u227A", eO = "\u227C", sO = "\u2AB7", nO = "\u227A", rO = "\u227C", oO = "\u227A", iO = "\u2AAF", cO = "\u227C", aO = "\u227E", lO = "\u2AAF", uO = "\u2AB9", fO = "\u2AB5", hO = "\u22E8", pO = "\u2AAF", dO = "\u2AB3", gO = "\u227E", mO = "\u2032", bO = "\u2033", yO = "\u2119", vO = "\u2AB9", wO = "\u2AB5", xO = "\u22E8", SO = "\u220F", _O = "\u220F", TO = "\u232E", EO = "\u2312", CO = "\u2313", AO = "\u221D", qO = "\u221D", OO = "\u2237", DO = "\u221D", LO = "\u227E", NO = "\u22B0", PO = "\u{1D4AB}", kO = "\u{1D4C5}", RO = "\u03A8", $O = "\u03C8", MO = "\u2008", IO = "\u{1D514}", jO = "\u{1D52E}", BO = "\u2A0C", UO = "\u{1D562}", HO = "\u211A", VO = "\u2057", FO = "\u{1D4AC}", zO = "\u{1D4C6}", GO = "\u210D", WO = "\u2A16", YO = "?", JO = "\u225F", XO = '"', QO = '"', ZO = "\u21DB", KO = "\u223D\u0331", tD = "\u0154", eD = "\u0155", sD = "\u221A", nD = "\u29B3", rD = "\u27E9", oD = "\u27EB", iD = "\u2992", cD = "\u29A5", aD = "\u27E9", lD = "\xBB", uD = "\u2975", fD = "\u21E5", hD = "\u2920", pD = "\u2933", dD = "\u2192", gD = "\u21A0", mD = "\u21D2", bD = "\u291E", yD = "\u21AA", vD = "\u21AC", wD = "\u2945", xD = "\u2974", SD = "\u2916", _D = "\u21A3", TD = "\u219D", ED = "\u291A", CD = "\u291C", AD = "\u2236", qD = "\u211A", OD = "\u290D", DD = "\u290F", LD = "\u2910", ND = "\u2773", PD = "}", kD = "]", RD = "\u298C", $D = "\u298E", MD = "\u2990", ID = "\u0158", jD = "\u0159", BD = "\u0156", UD = "\u0157", HD = "\u2309", VD = "}", FD = "\u0420", zD = "\u0440", GD = "\u2937", WD = "\u2969", YD = "\u201D", JD = "\u201D", XD = "\u21B3", QD = "\u211C", ZD = "\u211B", KD = "\u211C", tL = "\u211D", eL = "\u211C", sL = "\u25AD", nL = "\xAE", rL = "\xAE", oL = "\u220B", iL = "\u21CB", cL = "\u296F", aL = "\u297D", lL = "\u230B", uL = "\u{1D52F}", fL = "\u211C", hL = "\u2964", pL = "\u21C1", dL = "\u21C0", gL = "\u296C", mL = "\u03A1", bL = "\u03C1", yL = "\u03F1", vL = "\u27E9", wL = "\u21E5", xL = "\u2192", SL = "\u2192", _L = "\u21D2", TL = "\u21C4", EL = "\u21A3", CL = "\u2309", AL = "\u27E7", qL = "\u295D", OL = "\u2955", DL = "\u21C2", LL = "\u230B", NL = "\u21C1", PL = "\u21C0", kL = "\u21C4", RL = "\u21CC", $L = "\u21C9", ML = "\u219D", IL = "\u21A6", jL = "\u22A2", BL = "\u295B", UL = "\u22CC", HL = "\u29D0", VL = "\u22B3", FL = "\u22B5", zL = "\u294F", GL = "\u295C", WL = "\u2954", YL = "\u21BE", JL = "\u2953", XL = "\u21C0", QL = "\u02DA", ZL = "\u2253", KL = "\u21C4", tN = "\u21CC", eN = "\u200F", sN = "\u23B1", nN = "\u23B1", rN = "\u2AEE", oN = "\u27ED", iN = "\u21FE", cN = "\u27E7", aN = "\u2986", lN = "\u{1D563}", uN = "\u211D", fN = "\u2A2E", hN = "\u2A35", pN = "\u2970", dN = ")", gN = "\u2994", mN = "\u2A12", bN = "\u21C9", yN = "\u21DB", vN = "\u203A", wN = "\u{1D4C7}", xN = "\u211B", SN = "\u21B1", _N = "\u21B1", TN = "]", EN = "\u2019", CN = "\u2019", AN = "\u22CC", qN = "\u22CA", ON = "\u25B9", DN = "\u22B5", LN = "\u25B8", NN = "\u29CE", PN = "\u29F4", kN = "\u2968", RN = "\u211E", $N = "\u015A", MN = "\u015B", IN = "\u201A", jN = "\u2AB8", BN = "\u0160", UN = "\u0161", HN = "\u2ABC", VN = "\u227B", FN = "\u227D", zN = "\u2AB0", GN = "\u2AB4", WN = "\u015E", YN = "\u015F", JN = "\u015C", XN = "\u015D", QN = "\u2ABA", ZN = "\u2AB6", KN = "\u22E9", tP = "\u2A13", eP = "\u227F", sP = "\u0421", nP = "\u0441", rP = "\u22A1", oP = "\u22C5", iP = "\u2A66", cP = "\u2925", aP = "\u2198", lP = "\u21D8", uP = "\u2198", fP = "\xA7", hP = ";", pP = "\u2929", dP = "\u2216", gP = "\u2216", mP = "\u2736", bP = "\u{1D516}", yP = "\u{1D530}", vP = "\u2322", wP = "\u266F", xP = "\u0429", SP = "\u0449", _P = "\u0428", TP = "\u0448", EP = "\u2193", CP = "\u2190", AP = "\u2223", qP = "\u2225", OP = "\u2192", DP = "\u2191", LP = "\xAD", NP = "\u03A3", PP = "\u03C3", kP = "\u03C2", RP = "\u03C2", $P = "\u223C", MP = "\u2A6A", IP = "\u2243", jP = "\u2243", BP = "\u2A9E", UP = "\u2AA0", HP = "\u2A9D", VP = "\u2A9F", FP = "\u2246", zP = "\u2A24", GP = "\u2972", WP = "\u2190", YP = "\u2218", JP = "\u2216", XP = "\u2A33", QP = "\u29E4", ZP = "\u2223", KP = "\u2323", tk = "\u2AAA", ek = "\u2AAC", sk = "\u2AAC\uFE00", nk = "\u042C", rk = "\u044C", ok = "\u233F", ik = "\u29C4", ck = "/", ak = "\u{1D54A}", lk = "\u{1D564}", uk = "\u2660", fk = "\u2660", hk = "\u2225", pk = "\u2293", dk = "\u2293\uFE00", gk = "\u2294", mk = "\u2294\uFE00", bk = "\u221A", yk = "\u228F", vk = "\u2291", wk = "\u228F", xk = "\u2291", Sk = "\u2290", _k = "\u2292", Tk = "\u2290", Ek = "\u2292", Ck = "\u25A1", Ak = "\u25A1", qk = "\u2293", Ok = "\u228F", Dk = "\u2291", Lk = "\u2290", Nk = "\u2292", Pk = "\u2294", kk = "\u25AA", Rk = "\u25A1", $k = "\u25AA", Mk = "\u2192", Ik = "\u{1D4AE}", jk = "\u{1D4C8}", Bk = "\u2216", Uk = "\u2323", Hk = "\u22C6", Vk = "\u22C6", Fk = "\u2606", zk = "\u2605", Gk = "\u03F5", Wk = "\u03D5", Yk = "\xAF", Jk = "\u2282", Xk = "\u22D0", Qk = "\u2ABD", Zk = "\u2AC5", Kk = "\u2286", tR = "\u2AC3", eR = "\u2AC1", sR = "\u2ACB", nR = "\u228A", rR = "\u2ABF", oR = "\u2979", iR = "\u2282", cR = "\u22D0", aR = "\u2286", lR = "\u2AC5", uR = "\u2286", fR = "\u228A", hR = "\u2ACB", pR = "\u2AC7", dR = "\u2AD5", gR = "\u2AD3", mR = "\u2AB8", bR = "\u227B", yR = "\u227D", vR = "\u227B", wR = "\u2AB0", xR = "\u227D", SR = "\u227F", _R = "\u2AB0", TR = "\u2ABA", ER = "\u2AB6", CR = "\u22E9", AR = "\u227F", qR = "\u220B", OR = "\u2211", DR = "\u2211", LR = "\u266A", NR = "\xB9", PR = "\xB2", kR = "\xB3", RR = "\u2283", $R = "\u22D1", MR = "\u2ABE", IR = "\u2AD8", jR = "\u2AC6", BR = "\u2287", UR = "\u2AC4", HR = "\u2283", VR = "\u2287", FR = "\u27C9", zR = "\u2AD7", GR = "\u297B", WR = "\u2AC2", YR = "\u2ACC", JR = "\u228B", XR = "\u2AC0", QR = "\u2283", ZR = "\u22D1", KR = "\u2287", t$ = "\u2AC6", e$ = "\u228B", s$ = "\u2ACC", n$ = "\u2AC8", r$ = "\u2AD4", o$ = "\u2AD6", i$ = "\u2926", c$ = "\u2199", a$ = "\u21D9", l$ = "\u2199", u$ = "\u292A", f$ = "\xDF", h$ = "	", p$ = "\u2316", d$ = "\u03A4", g$ = "\u03C4", m$ = "\u23B4", b$ = "\u0164", y$ = "\u0165", v$ = "\u0162", w$ = "\u0163", x$ = "\u0422", S$ = "\u0442", _$ = "\u20DB", T$ = "\u2315", E$ = "\u{1D517}", C$ = "\u{1D531}", A$ = "\u2234", q$ = "\u2234", O$ = "\u2234", D$ = "\u0398", L$ = "\u03B8", N$ = "\u03D1", P$ = "\u03D1", k$ = "\u2248", R$ = "\u223C", $$ = "\u205F\u200A", M$ = "\u2009", I$ = "\u2009", j$ = "\u2248", B$ = "\u223C", U$ = "\xDE", H$ = "\xFE", V$ = "\u02DC", F$ = "\u223C", z$ = "\u2243", G$ = "\u2245", W$ = "\u2248", Y$ = "\u2A31", J$ = "\u22A0", X$ = "\xD7", Q$ = "\u2A30", Z$ = "\u222D", K$ = "\u2928", tM = "\u2336", eM = "\u2AF1", sM = "\u22A4", nM = "\u{1D54B}", rM = "\u{1D565}", oM = "\u2ADA", iM = "\u2929", cM = "\u2034", aM = "\u2122", lM = "\u2122", uM = "\u25B5", fM = "\u25BF", hM = "\u25C3", pM = "\u22B4", dM = "\u225C", gM = "\u25B9", mM = "\u22B5", bM = "\u25EC", yM = "\u225C", vM = "\u2A3A", wM = "\u20DB", xM = "\u2A39", SM = "\u29CD", _M = "\u2A3B", TM = "\u23E2", EM = "\u{1D4AF}", CM = "\u{1D4C9}", AM = "\u0426", qM = "\u0446", OM = "\u040B", DM = "\u045B", LM = "\u0166", NM = "\u0167", PM = "\u226C", kM = "\u219E", RM = "\u21A0", $M = "\xDA", MM = "\xFA", IM = "\u2191", jM = "\u219F", BM = "\u21D1", UM = "\u2949", HM = "\u040E", VM = "\u045E", FM = "\u016C", zM = "\u016D", GM = "\xDB", WM = "\xFB", YM = "\u0423", JM = "\u0443", XM = "\u21C5", QM = "\u0170", ZM = "\u0171", KM = "\u296E", tI = "\u297E", eI = "\u{1D518}", sI = "\u{1D532}", nI = "\xD9", rI = "\xF9", oI = "\u2963", iI = "\u21BF", cI = "\u21BE", aI = "\u2580", lI = "\u231C", uI = "\u231C", fI = "\u230F", hI = "\u25F8", pI = "\u016A", dI = "\u016B", gI = "\xA8", mI = "_", bI = "\u23DF", yI = "\u23B5", vI = "\u23DD", wI = "\u22C3", xI = "\u228E", SI = "\u0172", _I = "\u0173", TI = "\u{1D54C}", EI = "\u{1D566}", CI = "\u2912", AI = "\u2191", qI = "\u2191", OI = "\u21D1", DI = "\u21C5", LI = "\u2195", NI = "\u2195", PI = "\u21D5", kI = "\u296E", RI = "\u21BF", $I = "\u21BE", MI = "\u228E", II = "\u2196", jI = "\u2197", BI = "\u03C5", UI = "\u03D2", HI = "\u03D2", VI = "\u03A5", FI = "\u03C5", zI = "\u21A5", GI = "\u22A5", WI = "\u21C8", YI = "\u231D", JI = "\u231D", XI = "\u230E", QI = "\u016E", ZI = "\u016F", KI = "\u25F9", tj = "\u{1D4B0}", ej = "\u{1D4CA}", sj = "\u22F0", nj = "\u0168", rj = "\u0169", oj = "\u25B5", ij = "\u25B4", cj = "\u21C8", aj = "\xDC", lj = "\xFC", uj = "\u29A7", fj = "\u299C", hj = "\u03F5", pj = "\u03F0", dj = "\u2205", gj = "\u03D5", mj = "\u03D6", bj = "\u221D", yj = "\u2195", vj = "\u21D5", wj = "\u03F1", xj = "\u03C2", Sj = "\u228A\uFE00", _j = "\u2ACB\uFE00", Tj = "\u228B\uFE00", Ej = "\u2ACC\uFE00", Cj = "\u03D1", Aj = "\u22B2", qj = "\u22B3", Oj = "\u2AE8", Dj = "\u2AEB", Lj = "\u2AE9", Nj = "\u0412", Pj = "\u0432", kj = "\u22A2", Rj = "\u22A8", $j = "\u22A9", Mj = "\u22AB", Ij = "\u2AE6", jj = "\u22BB", Bj = "\u2228", Uj = "\u22C1", Hj = "\u225A", Vj = "\u22EE", Fj = "|", zj = "\u2016", Gj = "|", Wj = "\u2016", Yj = "\u2223", Jj = "|", Xj = "\u2758", Qj = "\u2240", Zj = "\u200A", Kj = "\u{1D519}", tB = "\u{1D533}", eB = "\u22B2", sB = "\u2282\u20D2", nB = "\u2283\u20D2", rB = "\u{1D54D}", oB = "\u{1D567}", iB = "\u221D", cB = "\u22B3", aB = "\u{1D4B1}", lB = "\u{1D4CB}", uB = "\u2ACB\uFE00", fB = "\u228A\uFE00", hB = "\u2ACC\uFE00", pB = "\u228B\uFE00", dB = "\u22AA", gB = "\u299A", mB = "\u0174", bB = "\u0175", yB = "\u2A5F", vB = "\u2227", wB = "\u22C0", xB = "\u2259", SB = "\u2118", _B = "\u{1D51A}", TB = "\u{1D534}", EB = "\u{1D54E}", CB = "\u{1D568}", AB = "\u2118", qB = "\u2240", OB = "\u2240", DB = "\u{1D4B2}", LB = "\u{1D4CC}", NB = "\u22C2", PB = "\u25EF", kB = "\u22C3", RB = "\u25BD", $B = "\u{1D51B}", MB = "\u{1D535}", IB = "\u27F7", jB = "\u27FA", BB = "\u039E", UB = "\u03BE", HB = "\u27F5", VB = "\u27F8", FB = "\u27FC", zB = "\u22FB", GB = "\u2A00", WB = "\u{1D54F}", YB = "\u{1D569}", JB = "\u2A01", XB = "\u2A02", QB = "\u27F6", ZB = "\u27F9", KB = "\u{1D4B3}", tU = "\u{1D4CD}", eU = "\u2A06", sU = "\u2A04", nU = "\u25B3", rU = "\u22C1", oU = "\u22C0", iU = "\xDD", cU = "\xFD", aU = "\u042F", lU = "\u044F", uU = "\u0176", fU = "\u0177", hU = "\u042B", pU = "\u044B", dU = "\xA5", gU = "\u{1D51C}", mU = "\u{1D536}", bU = "\u0407", yU = "\u0457", vU = "\u{1D550}", wU = "\u{1D56A}", xU = "\u{1D4B4}", SU = "\u{1D4CE}", _U = "\u042E", TU = "\u044E", EU = "\xFF", CU = "\u0178", AU = "\u0179", qU = "\u017A", OU = "\u017D", DU = "\u017E", LU = "\u0417", NU = "\u0437", PU = "\u017B", kU = "\u017C", RU = "\u2128", $U = "\u200B", MU = "\u0396", IU = "\u03B6", jU = "\u{1D537}", BU = "\u2128", UU = "\u0416", HU = "\u0436", VU = "\u21DD", FU = "\u{1D56B}", zU = "\u2124", GU = "\u{1D4B5}", WU = "\u{1D4CF}", YU = "\u200D", JU = "\u200C", Ze = {
  Aacute: Lr,
  aacute: Nr,
  Abreve: Pr,
  abreve: kr,
  ac: Rr,
  acd: $r,
  acE: Mr,
  Acirc: Ir,
  acirc: jr,
  acute: Br,
  Acy: Ur,
  acy: Hr,
  AElig: Vr,
  aelig: Fr,
  af: zr,
  Afr: Gr,
  afr: Wr,
  Agrave: Yr,
  agrave: Jr,
  alefsym: Xr,
  aleph: Qr,
  Alpha: Zr,
  alpha: Kr,
  Amacr: to,
  amacr: eo,
  amalg: so,
  amp: no,
  AMP: ro,
  andand: oo,
  And: io,
  and: co,
  andd: ao,
  andslope: lo,
  andv: uo,
  ang: fo,
  ange: ho,
  angle: po,
  angmsdaa: go,
  angmsdab: mo,
  angmsdac: bo,
  angmsdad: yo,
  angmsdae: vo,
  angmsdaf: wo,
  angmsdag: xo,
  angmsdah: So,
  angmsd: _o,
  angrt: To,
  angrtvb: Eo,
  angrtvbd: Co,
  angsph: Ao,
  angst: qo,
  angzarr: Oo,
  Aogon: Do,
  aogon: Lo,
  Aopf: No,
  aopf: Po,
  apacir: ko,
  ap: Ro,
  apE: $o,
  ape: Mo,
  apid: Io,
  apos: jo,
  ApplyFunction: Bo,
  approx: Uo,
  approxeq: Ho,
  Aring: Vo,
  aring: Fo,
  Ascr: zo,
  ascr: Go,
  Assign: Wo,
  ast: Yo,
  asymp: Jo,
  asympeq: Xo,
  Atilde: Qo,
  atilde: Zo,
  Auml: Ko,
  auml: ti,
  awconint: ei,
  awint: si,
  backcong: ni,
  backepsilon: ri,
  backprime: oi,
  backsim: ii,
  backsimeq: ci,
  Backslash: ai,
  Barv: li,
  barvee: ui,
  barwed: fi,
  Barwed: hi,
  barwedge: pi,
  bbrk: di,
  bbrktbrk: gi,
  bcong: mi,
  Bcy: bi,
  bcy: yi,
  bdquo: vi,
  becaus: wi,
  because: xi,
  Because: Si,
  bemptyv: _i,
  bepsi: Ti,
  bernou: Ei,
  Bernoullis: Ci,
  Beta: Ai,
  beta: qi,
  beth: Oi,
  between: Di,
  Bfr: Li,
  bfr: Ni,
  bigcap: Pi,
  bigcirc: ki,
  bigcup: Ri,
  bigodot: $i,
  bigoplus: Mi,
  bigotimes: Ii,
  bigsqcup: ji,
  bigstar: Bi,
  bigtriangledown: Ui,
  bigtriangleup: Hi,
  biguplus: Vi,
  bigvee: Fi,
  bigwedge: zi,
  bkarow: Gi,
  blacklozenge: Wi,
  blacksquare: Yi,
  blacktriangle: Ji,
  blacktriangledown: Xi,
  blacktriangleleft: Qi,
  blacktriangleright: Zi,
  blank: Ki,
  blk12: tc,
  blk14: ec,
  blk34: sc,
  block: nc,
  bne: rc,
  bnequiv: oc,
  bNot: ic,
  bnot: cc,
  Bopf: ac,
  bopf: lc,
  bot: uc,
  bottom: fc,
  bowtie: hc,
  boxbox: pc,
  boxdl: dc,
  boxdL: gc,
  boxDl: mc,
  boxDL: bc,
  boxdr: yc,
  boxdR: vc,
  boxDr: wc,
  boxDR: xc,
  boxh: Sc,
  boxH: _c,
  boxhd: Tc,
  boxHd: Ec,
  boxhD: Cc,
  boxHD: Ac,
  boxhu: qc,
  boxHu: Oc,
  boxhU: Dc,
  boxHU: Lc,
  boxminus: Nc,
  boxplus: Pc,
  boxtimes: kc,
  boxul: Rc,
  boxuL: $c,
  boxUl: Mc,
  boxUL: Ic,
  boxur: jc,
  boxuR: Bc,
  boxUr: Uc,
  boxUR: Hc,
  boxv: Vc,
  boxV: Fc,
  boxvh: zc,
  boxvH: Gc,
  boxVh: Wc,
  boxVH: Yc,
  boxvl: Jc,
  boxvL: Xc,
  boxVl: Qc,
  boxVL: Zc,
  boxvr: Kc,
  boxvR: ta,
  boxVr: ea,
  boxVR: sa,
  bprime: na,
  breve: ra,
  Breve: oa,
  brvbar: ia,
  bscr: ca,
  Bscr: aa,
  bsemi: la,
  bsim: ua,
  bsime: fa,
  bsolb: ha,
  bsol: pa,
  bsolhsub: da,
  bull: ga,
  bullet: ma,
  bump: ba,
  bumpE: ya,
  bumpe: va,
  Bumpeq: wa,
  bumpeq: xa,
  Cacute: Sa,
  cacute: _a,
  capand: Ta,
  capbrcup: Ea,
  capcap: Ca,
  cap: Aa,
  Cap: qa,
  capcup: Oa,
  capdot: Da,
  CapitalDifferentialD: La,
  caps: Na,
  caret: Pa,
  caron: ka,
  Cayleys: Ra,
  ccaps: $a,
  Ccaron: Ma,
  ccaron: Ia,
  Ccedil: ja,
  ccedil: Ba,
  Ccirc: Ua,
  ccirc: Ha,
  Cconint: Va,
  ccups: Fa,
  ccupssm: za,
  Cdot: Ga,
  cdot: Wa,
  cedil: Ya,
  Cedilla: Ja,
  cemptyv: Xa,
  cent: Qa,
  centerdot: Za,
  CenterDot: Ka,
  cfr: tl,
  Cfr: el,
  CHcy: sl,
  chcy: nl,
  check: rl,
  checkmark: ol,
  Chi: il,
  chi: cl,
  circ: al,
  circeq: ll,
  circlearrowleft: ul,
  circlearrowright: fl,
  circledast: hl,
  circledcirc: pl,
  circleddash: dl,
  CircleDot: gl,
  circledR: ml,
  circledS: bl,
  CircleMinus: yl,
  CirclePlus: vl,
  CircleTimes: wl,
  cir: xl,
  cirE: Sl,
  cire: _l,
  cirfnint: Tl,
  cirmid: El,
  cirscir: Cl,
  ClockwiseContourIntegral: Al,
  CloseCurlyDoubleQuote: ql,
  CloseCurlyQuote: Ol,
  clubs: Dl,
  clubsuit: Ll,
  colon: Nl,
  Colon: Pl,
  Colone: kl,
  colone: Rl,
  coloneq: $l,
  comma: Ml,
  commat: Il,
  comp: jl,
  compfn: Bl,
  complement: Ul,
  complexes: Hl,
  cong: Vl,
  congdot: Fl,
  Congruent: zl,
  conint: Gl,
  Conint: Wl,
  ContourIntegral: Yl,
  copf: Jl,
  Copf: Xl,
  coprod: Ql,
  Coproduct: Zl,
  copy: Kl,
  COPY: tu,
  copysr: eu,
  CounterClockwiseContourIntegral: su,
  crarr: nu,
  cross: ru,
  Cross: ou,
  Cscr: iu,
  cscr: cu,
  csub: au,
  csube: lu,
  csup: uu,
  csupe: fu,
  ctdot: hu,
  cudarrl: pu,
  cudarrr: du,
  cuepr: gu,
  cuesc: mu,
  cularr: bu,
  cularrp: yu,
  cupbrcap: vu,
  cupcap: wu,
  CupCap: xu,
  cup: Su,
  Cup: _u,
  cupcup: Tu,
  cupdot: Eu,
  cupor: Cu,
  cups: Au,
  curarr: qu,
  curarrm: Ou,
  curlyeqprec: Du,
  curlyeqsucc: Lu,
  curlyvee: Nu,
  curlywedge: Pu,
  curren: ku,
  curvearrowleft: Ru,
  curvearrowright: $u,
  cuvee: Mu,
  cuwed: Iu,
  cwconint: ju,
  cwint: Bu,
  cylcty: Uu,
  dagger: Hu,
  Dagger: Vu,
  daleth: Fu,
  darr: zu,
  Darr: Gu,
  dArr: Wu,
  dash: Yu,
  Dashv: Ju,
  dashv: Xu,
  dbkarow: Qu,
  dblac: Zu,
  Dcaron: Ku,
  dcaron: tf,
  Dcy: ef,
  dcy: sf,
  ddagger: nf,
  ddarr: rf,
  DD: of,
  dd: cf,
  DDotrahd: af,
  ddotseq: lf,
  deg: uf,
  Del: ff,
  Delta: hf,
  delta: pf,
  demptyv: df,
  dfisht: gf,
  Dfr: mf,
  dfr: bf,
  dHar: yf,
  dharl: vf,
  dharr: wf,
  DiacriticalAcute: xf,
  DiacriticalDot: Sf,
  DiacriticalDoubleAcute: _f,
  DiacriticalGrave: Tf,
  DiacriticalTilde: Ef,
  diam: Cf,
  diamond: Af,
  Diamond: qf,
  diamondsuit: Of,
  diams: Df,
  die: Lf,
  DifferentialD: Nf,
  digamma: Pf,
  disin: kf,
  div: Rf,
  divide: $f,
  divideontimes: Mf,
  divonx: If,
  DJcy: jf,
  djcy: Bf,
  dlcorn: Uf,
  dlcrop: Hf,
  dollar: Vf,
  Dopf: Ff,
  dopf: zf,
  Dot: Gf,
  dot: Wf,
  DotDot: Yf,
  doteq: Jf,
  doteqdot: Xf,
  DotEqual: Qf,
  dotminus: Zf,
  dotplus: Kf,
  dotsquare: th,
  doublebarwedge: eh,
  DoubleContourIntegral: sh,
  DoubleDot: nh,
  DoubleDownArrow: rh,
  DoubleLeftArrow: oh,
  DoubleLeftRightArrow: ih,
  DoubleLeftTee: ch,
  DoubleLongLeftArrow: ah,
  DoubleLongLeftRightArrow: lh,
  DoubleLongRightArrow: uh,
  DoubleRightArrow: fh,
  DoubleRightTee: hh,
  DoubleUpArrow: ph,
  DoubleUpDownArrow: dh,
  DoubleVerticalBar: gh,
  DownArrowBar: mh,
  downarrow: bh,
  DownArrow: yh,
  Downarrow: vh,
  DownArrowUpArrow: wh,
  DownBreve: xh,
  downdownarrows: Sh,
  downharpoonleft: _h,
  downharpoonright: Th,
  DownLeftRightVector: Eh,
  DownLeftTeeVector: Ch,
  DownLeftVectorBar: Ah,
  DownLeftVector: qh,
  DownRightTeeVector: Oh,
  DownRightVectorBar: Dh,
  DownRightVector: Lh,
  DownTeeArrow: Nh,
  DownTee: Ph,
  drbkarow: kh,
  drcorn: Rh,
  drcrop: $h,
  Dscr: Mh,
  dscr: Ih,
  DScy: jh,
  dscy: Bh,
  dsol: Uh,
  Dstrok: Hh,
  dstrok: Vh,
  dtdot: Fh,
  dtri: zh,
  dtrif: Gh,
  duarr: Wh,
  duhar: Yh,
  dwangle: Jh,
  DZcy: Xh,
  dzcy: Qh,
  dzigrarr: Zh,
  Eacute: Kh,
  eacute: tp,
  easter: ep,
  Ecaron: sp,
  ecaron: np,
  Ecirc: rp,
  ecirc: op,
  ecir: ip,
  ecolon: cp,
  Ecy: ap,
  ecy: lp,
  eDDot: up,
  Edot: fp,
  edot: hp,
  eDot: pp,
  ee: dp,
  efDot: gp,
  Efr: mp,
  efr: bp,
  eg: yp,
  Egrave: vp,
  egrave: wp,
  egs: xp,
  egsdot: Sp,
  el: _p,
  Element: Tp,
  elinters: Ep,
  ell: Cp,
  els: Ap,
  elsdot: qp,
  Emacr: Op,
  emacr: Dp,
  empty: Lp,
  emptyset: Np,
  EmptySmallSquare: Pp,
  emptyv: kp,
  EmptyVerySmallSquare: Rp,
  emsp13: $p,
  emsp14: Mp,
  emsp: Ip,
  ENG: jp,
  eng: Bp,
  ensp: Up,
  Eogon: Hp,
  eogon: Vp,
  Eopf: Fp,
  eopf: zp,
  epar: Gp,
  eparsl: Wp,
  eplus: Yp,
  epsi: Jp,
  Epsilon: Xp,
  epsilon: Qp,
  epsiv: Zp,
  eqcirc: Kp,
  eqcolon: td,
  eqsim: ed,
  eqslantgtr: sd,
  eqslantless: nd,
  Equal: rd,
  equals: od,
  EqualTilde: id,
  equest: cd,
  Equilibrium: ad,
  equiv: ld,
  equivDD: ud,
  eqvparsl: fd,
  erarr: hd,
  erDot: pd,
  escr: dd,
  Escr: gd,
  esdot: md,
  Esim: bd,
  esim: yd,
  Eta: vd,
  eta: wd,
  ETH: xd,
  eth: Sd,
  Euml: _d,
  euml: Td,
  euro: Ed,
  excl: Cd,
  exist: Ad,
  Exists: qd,
  expectation: Od,
  exponentiale: Dd,
  ExponentialE: Ld,
  fallingdotseq: Nd,
  Fcy: Pd,
  fcy: kd,
  female: Rd,
  ffilig: $d,
  fflig: Md,
  ffllig: Id,
  Ffr: jd,
  ffr: Bd,
  filig: Ud,
  FilledSmallSquare: Hd,
  FilledVerySmallSquare: Vd,
  fjlig: Fd,
  flat: zd,
  fllig: Gd,
  fltns: Wd,
  fnof: Yd,
  Fopf: Jd,
  fopf: Xd,
  forall: Qd,
  ForAll: Zd,
  fork: Kd,
  forkv: tg,
  Fouriertrf: eg,
  fpartint: sg,
  frac12: ng,
  frac13: rg,
  frac14: og,
  frac15: ig,
  frac16: cg,
  frac18: ag,
  frac23: lg,
  frac25: ug,
  frac34: fg,
  frac35: hg,
  frac38: pg,
  frac45: dg,
  frac56: gg,
  frac58: mg,
  frac78: bg,
  frasl: yg,
  frown: vg,
  fscr: wg,
  Fscr: xg,
  gacute: Sg,
  Gamma: _g,
  gamma: Tg,
  Gammad: Eg,
  gammad: Cg,
  gap: Ag,
  Gbreve: qg,
  gbreve: Og,
  Gcedil: Dg,
  Gcirc: Lg,
  gcirc: Ng,
  Gcy: Pg,
  gcy: kg,
  Gdot: Rg,
  gdot: $g,
  ge: Mg,
  gE: Ig,
  gEl: jg,
  gel: Bg,
  geq: Ug,
  geqq: Hg,
  geqslant: Vg,
  gescc: Fg,
  ges: zg,
  gesdot: Gg,
  gesdoto: Wg,
  gesdotol: Yg,
  gesl: Jg,
  gesles: Xg,
  Gfr: Qg,
  gfr: Zg,
  gg: Kg,
  Gg: tm,
  ggg: em,
  gimel: sm,
  GJcy: nm,
  gjcy: rm,
  gla: om,
  gl: im,
  glE: cm,
  glj: am,
  gnap: lm,
  gnapprox: um,
  gne: fm,
  gnE: hm,
  gneq: pm,
  gneqq: dm,
  gnsim: gm,
  Gopf: mm,
  gopf: bm,
  grave: ym,
  GreaterEqual: vm,
  GreaterEqualLess: wm,
  GreaterFullEqual: xm,
  GreaterGreater: Sm,
  GreaterLess: _m,
  GreaterSlantEqual: Tm,
  GreaterTilde: Em,
  Gscr: Cm,
  gscr: Am,
  gsim: qm,
  gsime: Om,
  gsiml: Dm,
  gtcc: Lm,
  gtcir: Nm,
  gt: Pm,
  GT: km,
  Gt: Rm,
  gtdot: $m,
  gtlPar: Mm,
  gtquest: Im,
  gtrapprox: jm,
  gtrarr: Bm,
  gtrdot: Um,
  gtreqless: Hm,
  gtreqqless: Vm,
  gtrless: Fm,
  gtrsim: zm,
  gvertneqq: Gm,
  gvnE: Wm,
  Hacek: Ym,
  hairsp: Jm,
  half: Xm,
  hamilt: Qm,
  HARDcy: Zm,
  hardcy: Km,
  harrcir: tb,
  harr: eb,
  hArr: sb,
  harrw: nb,
  Hat: rb,
  hbar: ob,
  Hcirc: ib,
  hcirc: cb,
  hearts: ab,
  heartsuit: lb,
  hellip: ub,
  hercon: fb,
  hfr: hb,
  Hfr: pb,
  HilbertSpace: db,
  hksearow: gb,
  hkswarow: mb,
  hoarr: bb,
  homtht: yb,
  hookleftarrow: vb,
  hookrightarrow: wb,
  hopf: xb,
  Hopf: Sb,
  horbar: _b,
  HorizontalLine: Tb,
  hscr: Eb,
  Hscr: Cb,
  hslash: Ab,
  Hstrok: qb,
  hstrok: Ob,
  HumpDownHump: Db,
  HumpEqual: Lb,
  hybull: Nb,
  hyphen: Pb,
  Iacute: kb,
  iacute: Rb,
  ic: $b,
  Icirc: Mb,
  icirc: Ib,
  Icy: jb,
  icy: Bb,
  Idot: Ub,
  IEcy: Hb,
  iecy: Vb,
  iexcl: Fb,
  iff: zb,
  ifr: Gb,
  Ifr: Wb,
  Igrave: Yb,
  igrave: Jb,
  ii: Xb,
  iiiint: Qb,
  iiint: Zb,
  iinfin: Kb,
  iiota: ty,
  IJlig: ey,
  ijlig: sy,
  Imacr: ny,
  imacr: ry,
  image: oy,
  ImaginaryI: iy,
  imagline: cy,
  imagpart: ay,
  imath: ly,
  Im: uy,
  imof: fy,
  imped: hy,
  Implies: py,
  incare: dy,
  in: "\u2208",
  infin: gy,
  infintie: my,
  inodot: by,
  intcal: yy,
  int: vy,
  Int: wy,
  integers: xy,
  Integral: Sy,
  intercal: _y,
  Intersection: Ty,
  intlarhk: Ey,
  intprod: Cy,
  InvisibleComma: Ay,
  InvisibleTimes: qy,
  IOcy: Oy,
  iocy: Dy,
  Iogon: Ly,
  iogon: Ny,
  Iopf: Py,
  iopf: ky,
  Iota: Ry,
  iota: $y,
  iprod: My,
  iquest: Iy,
  iscr: jy,
  Iscr: By,
  isin: Uy,
  isindot: Hy,
  isinE: Vy,
  isins: Fy,
  isinsv: zy,
  isinv: Gy,
  it: Wy,
  Itilde: Yy,
  itilde: Jy,
  Iukcy: Xy,
  iukcy: Qy,
  Iuml: Zy,
  iuml: Ky,
  Jcirc: tv,
  jcirc: ev,
  Jcy: sv,
  jcy: nv,
  Jfr: rv,
  jfr: ov,
  jmath: iv,
  Jopf: cv,
  jopf: av,
  Jscr: lv,
  jscr: uv,
  Jsercy: fv,
  jsercy: hv,
  Jukcy: pv,
  jukcy: dv,
  Kappa: gv,
  kappa: mv,
  kappav: bv,
  Kcedil: yv,
  kcedil: vv,
  Kcy: wv,
  kcy: xv,
  Kfr: Sv,
  kfr: _v,
  kgreen: Tv,
  KHcy: Ev,
  khcy: Cv,
  KJcy: Av,
  kjcy: qv,
  Kopf: Ov,
  kopf: Dv,
  Kscr: Lv,
  kscr: Nv,
  lAarr: Pv,
  Lacute: kv,
  lacute: Rv,
  laemptyv: $v,
  lagran: Mv,
  Lambda: Iv,
  lambda: jv,
  lang: Bv,
  Lang: Uv,
  langd: Hv,
  langle: Vv,
  lap: Fv,
  Laplacetrf: zv,
  laquo: Gv,
  larrb: Wv,
  larrbfs: Yv,
  larr: Jv,
  Larr: Xv,
  lArr: Qv,
  larrfs: Zv,
  larrhk: Kv,
  larrlp: tw,
  larrpl: ew,
  larrsim: sw,
  larrtl: nw,
  latail: rw,
  lAtail: ow,
  lat: iw,
  late: cw,
  lates: aw,
  lbarr: lw,
  lBarr: uw,
  lbbrk: fw,
  lbrace: hw,
  lbrack: pw,
  lbrke: dw,
  lbrksld: gw,
  lbrkslu: mw,
  Lcaron: bw,
  lcaron: yw,
  Lcedil: vw,
  lcedil: ww,
  lceil: xw,
  lcub: Sw,
  Lcy: _w,
  lcy: Tw,
  ldca: Ew,
  ldquo: Cw,
  ldquor: Aw,
  ldrdhar: qw,
  ldrushar: Ow,
  ldsh: Dw,
  le: Lw,
  lE: Nw,
  LeftAngleBracket: Pw,
  LeftArrowBar: kw,
  leftarrow: Rw,
  LeftArrow: $w,
  Leftarrow: Mw,
  LeftArrowRightArrow: Iw,
  leftarrowtail: jw,
  LeftCeiling: Bw,
  LeftDoubleBracket: Uw,
  LeftDownTeeVector: Hw,
  LeftDownVectorBar: Vw,
  LeftDownVector: Fw,
  LeftFloor: zw,
  leftharpoondown: Gw,
  leftharpoonup: Ww,
  leftleftarrows: Yw,
  leftrightarrow: Jw,
  LeftRightArrow: Xw,
  Leftrightarrow: Qw,
  leftrightarrows: Zw,
  leftrightharpoons: Kw,
  leftrightsquigarrow: tx,
  LeftRightVector: ex,
  LeftTeeArrow: sx,
  LeftTee: nx,
  LeftTeeVector: rx,
  leftthreetimes: ox,
  LeftTriangleBar: ix,
  LeftTriangle: cx,
  LeftTriangleEqual: ax,
  LeftUpDownVector: lx,
  LeftUpTeeVector: ux,
  LeftUpVectorBar: fx,
  LeftUpVector: hx,
  LeftVectorBar: px,
  LeftVector: dx,
  lEg: gx,
  leg: mx,
  leq: bx,
  leqq: yx,
  leqslant: vx,
  lescc: wx,
  les: xx,
  lesdot: Sx,
  lesdoto: _x,
  lesdotor: Tx,
  lesg: Ex,
  lesges: Cx,
  lessapprox: Ax,
  lessdot: qx,
  lesseqgtr: Ox,
  lesseqqgtr: Dx,
  LessEqualGreater: Lx,
  LessFullEqual: Nx,
  LessGreater: Px,
  lessgtr: kx,
  LessLess: Rx,
  lesssim: $x,
  LessSlantEqual: Mx,
  LessTilde: Ix,
  lfisht: jx,
  lfloor: Bx,
  Lfr: Ux,
  lfr: Hx,
  lg: Vx,
  lgE: Fx,
  lHar: zx,
  lhard: Gx,
  lharu: Wx,
  lharul: Yx,
  lhblk: Jx,
  LJcy: Xx,
  ljcy: Qx,
  llarr: Zx,
  ll: Kx,
  Ll: t1,
  llcorner: e1,
  Lleftarrow: s1,
  llhard: n1,
  lltri: r1,
  Lmidot: o1,
  lmidot: i1,
  lmoustache: c1,
  lmoust: a1,
  lnap: l1,
  lnapprox: u1,
  lne: f1,
  lnE: h1,
  lneq: p1,
  lneqq: d1,
  lnsim: g1,
  loang: m1,
  loarr: b1,
  lobrk: y1,
  longleftarrow: v1,
  LongLeftArrow: w1,
  Longleftarrow: x1,
  longleftrightarrow: S1,
  LongLeftRightArrow: _1,
  Longleftrightarrow: T1,
  longmapsto: E1,
  longrightarrow: C1,
  LongRightArrow: A1,
  Longrightarrow: q1,
  looparrowleft: O1,
  looparrowright: D1,
  lopar: L1,
  Lopf: N1,
  lopf: P1,
  loplus: k1,
  lotimes: R1,
  lowast: $1,
  lowbar: M1,
  LowerLeftArrow: I1,
  LowerRightArrow: j1,
  loz: B1,
  lozenge: U1,
  lozf: H1,
  lpar: V1,
  lparlt: F1,
  lrarr: z1,
  lrcorner: G1,
  lrhar: W1,
  lrhard: Y1,
  lrm: J1,
  lrtri: X1,
  lsaquo: Q1,
  lscr: Z1,
  Lscr: K1,
  lsh: tS,
  Lsh: eS,
  lsim: sS,
  lsime: nS,
  lsimg: rS,
  lsqb: oS,
  lsquo: iS,
  lsquor: cS,
  Lstrok: aS,
  lstrok: lS,
  ltcc: uS,
  ltcir: fS,
  lt: hS,
  LT: pS,
  Lt: dS,
  ltdot: gS,
  lthree: mS,
  ltimes: bS,
  ltlarr: yS,
  ltquest: vS,
  ltri: wS,
  ltrie: xS,
  ltrif: SS,
  ltrPar: _S,
  lurdshar: TS,
  luruhar: ES,
  lvertneqq: CS,
  lvnE: AS,
  macr: qS,
  male: OS,
  malt: DS,
  maltese: LS,
  Map: "\u2905",
  map: NS,
  mapsto: PS,
  mapstodown: kS,
  mapstoleft: RS,
  mapstoup: $S,
  marker: MS,
  mcomma: IS,
  Mcy: jS,
  mcy: BS,
  mdash: US,
  mDDot: HS,
  measuredangle: VS,
  MediumSpace: FS,
  Mellintrf: zS,
  Mfr: GS,
  mfr: WS,
  mho: YS,
  micro: JS,
  midast: XS,
  midcir: QS,
  mid: ZS,
  middot: KS,
  minusb: t_,
  minus: e_,
  minusd: s_,
  minusdu: n_,
  MinusPlus: r_,
  mlcp: o_,
  mldr: i_,
  mnplus: c_,
  models: a_,
  Mopf: l_,
  mopf: u_,
  mp: f_,
  mscr: h_,
  Mscr: p_,
  mstpos: d_,
  Mu: g_,
  mu: m_,
  multimap: b_,
  mumap: y_,
  nabla: v_,
  Nacute: w_,
  nacute: x_,
  nang: S_,
  nap: __,
  napE: T_,
  napid: E_,
  napos: C_,
  napprox: A_,
  natural: q_,
  naturals: O_,
  natur: D_,
  nbsp: L_,
  nbump: N_,
  nbumpe: P_,
  ncap: k_,
  Ncaron: R_,
  ncaron: $_,
  Ncedil: M_,
  ncedil: I_,
  ncong: j_,
  ncongdot: B_,
  ncup: U_,
  Ncy: H_,
  ncy: V_,
  ndash: F_,
  nearhk: z_,
  nearr: G_,
  neArr: W_,
  nearrow: Y_,
  ne: J_,
  nedot: X_,
  NegativeMediumSpace: Q_,
  NegativeThickSpace: Z_,
  NegativeThinSpace: K_,
  NegativeVeryThinSpace: tT,
  nequiv: eT,
  nesear: sT,
  nesim: nT,
  NestedGreaterGreater: rT,
  NestedLessLess: oT,
  NewLine: iT,
  nexist: cT,
  nexists: aT,
  Nfr: lT,
  nfr: uT,
  ngE: fT,
  nge: hT,
  ngeq: pT,
  ngeqq: dT,
  ngeqslant: gT,
  nges: mT,
  nGg: bT,
  ngsim: yT,
  nGt: vT,
  ngt: wT,
  ngtr: xT,
  nGtv: ST,
  nharr: _T,
  nhArr: TT,
  nhpar: ET,
  ni: CT,
  nis: AT,
  nisd: qT,
  niv: OT,
  NJcy: DT,
  njcy: LT,
  nlarr: NT,
  nlArr: PT,
  nldr: kT,
  nlE: RT,
  nle: $T,
  nleftarrow: MT,
  nLeftarrow: IT,
  nleftrightarrow: jT,
  nLeftrightarrow: BT,
  nleq: UT,
  nleqq: HT,
  nleqslant: VT,
  nles: FT,
  nless: zT,
  nLl: GT,
  nlsim: WT,
  nLt: YT,
  nlt: JT,
  nltri: XT,
  nltrie: QT,
  nLtv: ZT,
  nmid: KT,
  NoBreak: tE,
  NonBreakingSpace: eE,
  nopf: sE,
  Nopf: nE,
  Not: rE,
  not: oE,
  NotCongruent: iE,
  NotCupCap: cE,
  NotDoubleVerticalBar: aE,
  NotElement: lE,
  NotEqual: uE,
  NotEqualTilde: fE,
  NotExists: hE,
  NotGreater: pE,
  NotGreaterEqual: dE,
  NotGreaterFullEqual: gE,
  NotGreaterGreater: mE,
  NotGreaterLess: bE,
  NotGreaterSlantEqual: yE,
  NotGreaterTilde: vE,
  NotHumpDownHump: wE,
  NotHumpEqual: xE,
  notin: SE,
  notindot: _E,
  notinE: TE,
  notinva: EE,
  notinvb: CE,
  notinvc: AE,
  NotLeftTriangleBar: qE,
  NotLeftTriangle: OE,
  NotLeftTriangleEqual: DE,
  NotLess: LE,
  NotLessEqual: NE,
  NotLessGreater: PE,
  NotLessLess: kE,
  NotLessSlantEqual: RE,
  NotLessTilde: $E,
  NotNestedGreaterGreater: ME,
  NotNestedLessLess: IE,
  notni: jE,
  notniva: BE,
  notnivb: UE,
  notnivc: HE,
  NotPrecedes: VE,
  NotPrecedesEqual: FE,
  NotPrecedesSlantEqual: zE,
  NotReverseElement: GE,
  NotRightTriangleBar: WE,
  NotRightTriangle: YE,
  NotRightTriangleEqual: JE,
  NotSquareSubset: XE,
  NotSquareSubsetEqual: QE,
  NotSquareSuperset: ZE,
  NotSquareSupersetEqual: KE,
  NotSubset: tC,
  NotSubsetEqual: eC,
  NotSucceeds: sC,
  NotSucceedsEqual: nC,
  NotSucceedsSlantEqual: rC,
  NotSucceedsTilde: oC,
  NotSuperset: iC,
  NotSupersetEqual: cC,
  NotTilde: aC,
  NotTildeEqual: lC,
  NotTildeFullEqual: uC,
  NotTildeTilde: fC,
  NotVerticalBar: hC,
  nparallel: pC,
  npar: dC,
  nparsl: gC,
  npart: mC,
  npolint: bC,
  npr: yC,
  nprcue: vC,
  nprec: wC,
  npreceq: xC,
  npre: SC,
  nrarrc: _C,
  nrarr: TC,
  nrArr: EC,
  nrarrw: CC,
  nrightarrow: AC,
  nRightarrow: qC,
  nrtri: OC,
  nrtrie: DC,
  nsc: LC,
  nsccue: NC,
  nsce: PC,
  Nscr: kC,
  nscr: RC,
  nshortmid: $C,
  nshortparallel: MC,
  nsim: IC,
  nsime: jC,
  nsimeq: BC,
  nsmid: UC,
  nspar: HC,
  nsqsube: VC,
  nsqsupe: FC,
  nsub: zC,
  nsubE: GC,
  nsube: WC,
  nsubset: YC,
  nsubseteq: JC,
  nsubseteqq: XC,
  nsucc: QC,
  nsucceq: ZC,
  nsup: KC,
  nsupE: t0,
  nsupe: e0,
  nsupset: s0,
  nsupseteq: n0,
  nsupseteqq: r0,
  ntgl: o0,
  Ntilde: i0,
  ntilde: c0,
  ntlg: a0,
  ntriangleleft: l0,
  ntrianglelefteq: u0,
  ntriangleright: f0,
  ntrianglerighteq: h0,
  Nu: p0,
  nu: d0,
  num: g0,
  numero: m0,
  numsp: b0,
  nvap: y0,
  nvdash: v0,
  nvDash: w0,
  nVdash: x0,
  nVDash: S0,
  nvge: _0,
  nvgt: T0,
  nvHarr: E0,
  nvinfin: C0,
  nvlArr: A0,
  nvle: q0,
  nvlt: O0,
  nvltrie: D0,
  nvrArr: L0,
  nvrtrie: N0,
  nvsim: P0,
  nwarhk: k0,
  nwarr: R0,
  nwArr: $0,
  nwarrow: M0,
  nwnear: I0,
  Oacute: j0,
  oacute: B0,
  oast: U0,
  Ocirc: H0,
  ocirc: V0,
  ocir: F0,
  Ocy: z0,
  ocy: G0,
  odash: W0,
  Odblac: Y0,
  odblac: J0,
  odiv: X0,
  odot: Q0,
  odsold: Z0,
  OElig: K0,
  oelig: tA,
  ofcir: eA,
  Ofr: sA,
  ofr: nA,
  ogon: rA,
  Ograve: oA,
  ograve: iA,
  ogt: cA,
  ohbar: aA,
  ohm: lA,
  oint: uA,
  olarr: fA,
  olcir: hA,
  olcross: pA,
  oline: dA,
  olt: gA,
  Omacr: mA,
  omacr: bA,
  Omega: yA,
  omega: vA,
  Omicron: wA,
  omicron: xA,
  omid: SA,
  ominus: _A,
  Oopf: TA,
  oopf: EA,
  opar: CA,
  OpenCurlyDoubleQuote: AA,
  OpenCurlyQuote: qA,
  operp: OA,
  oplus: DA,
  orarr: LA,
  Or: NA,
  or: PA,
  ord: kA,
  order: RA,
  orderof: $A,
  ordf: MA,
  ordm: IA,
  origof: jA,
  oror: BA,
  orslope: UA,
  orv: HA,
  oS: VA,
  Oscr: FA,
  oscr: zA,
  Oslash: GA,
  oslash: WA,
  osol: YA,
  Otilde: JA,
  otilde: XA,
  otimesas: QA,
  Otimes: ZA,
  otimes: KA,
  Ouml: tq,
  ouml: eq,
  ovbar: sq,
  OverBar: nq,
  OverBrace: rq,
  OverBracket: oq,
  OverParenthesis: iq,
  para: cq,
  parallel: aq,
  par: lq,
  parsim: uq,
  parsl: fq,
  part: hq,
  PartialD: pq,
  Pcy: dq,
  pcy: gq,
  percnt: mq,
  period: bq,
  permil: yq,
  perp: vq,
  pertenk: wq,
  Pfr: xq,
  pfr: Sq,
  Phi: _q,
  phi: Tq,
  phiv: Eq,
  phmmat: Cq,
  phone: Aq,
  Pi: qq,
  pi: Oq,
  pitchfork: Dq,
  piv: Lq,
  planck: Nq,
  planckh: Pq,
  plankv: kq,
  plusacir: Rq,
  plusb: $q,
  pluscir: Mq,
  plus: Iq,
  plusdo: jq,
  plusdu: Bq,
  pluse: Uq,
  PlusMinus: Hq,
  plusmn: Vq,
  plussim: Fq,
  plustwo: zq,
  pm: Gq,
  Poincareplane: Wq,
  pointint: Yq,
  popf: Jq,
  Popf: Xq,
  pound: Qq,
  prap: Zq,
  Pr: Kq,
  pr: tO,
  prcue: eO,
  precapprox: sO,
  prec: nO,
  preccurlyeq: rO,
  Precedes: oO,
  PrecedesEqual: iO,
  PrecedesSlantEqual: cO,
  PrecedesTilde: aO,
  preceq: lO,
  precnapprox: uO,
  precneqq: fO,
  precnsim: hO,
  pre: pO,
  prE: dO,
  precsim: gO,
  prime: mO,
  Prime: bO,
  primes: yO,
  prnap: vO,
  prnE: wO,
  prnsim: xO,
  prod: SO,
  Product: _O,
  profalar: TO,
  profline: EO,
  profsurf: CO,
  prop: AO,
  Proportional: qO,
  Proportion: OO,
  propto: DO,
  prsim: LO,
  prurel: NO,
  Pscr: PO,
  pscr: kO,
  Psi: RO,
  psi: $O,
  puncsp: MO,
  Qfr: IO,
  qfr: jO,
  qint: BO,
  qopf: UO,
  Qopf: HO,
  qprime: VO,
  Qscr: FO,
  qscr: zO,
  quaternions: GO,
  quatint: WO,
  quest: YO,
  questeq: JO,
  quot: XO,
  QUOT: QO,
  rAarr: ZO,
  race: KO,
  Racute: tD,
  racute: eD,
  radic: sD,
  raemptyv: nD,
  rang: rD,
  Rang: oD,
  rangd: iD,
  range: cD,
  rangle: aD,
  raquo: lD,
  rarrap: uD,
  rarrb: fD,
  rarrbfs: hD,
  rarrc: pD,
  rarr: dD,
  Rarr: gD,
  rArr: mD,
  rarrfs: bD,
  rarrhk: yD,
  rarrlp: vD,
  rarrpl: wD,
  rarrsim: xD,
  Rarrtl: SD,
  rarrtl: _D,
  rarrw: TD,
  ratail: ED,
  rAtail: CD,
  ratio: AD,
  rationals: qD,
  rbarr: OD,
  rBarr: DD,
  RBarr: LD,
  rbbrk: ND,
  rbrace: PD,
  rbrack: kD,
  rbrke: RD,
  rbrksld: $D,
  rbrkslu: MD,
  Rcaron: ID,
  rcaron: jD,
  Rcedil: BD,
  rcedil: UD,
  rceil: HD,
  rcub: VD,
  Rcy: FD,
  rcy: zD,
  rdca: GD,
  rdldhar: WD,
  rdquo: YD,
  rdquor: JD,
  rdsh: XD,
  real: QD,
  realine: ZD,
  realpart: KD,
  reals: tL,
  Re: eL,
  rect: sL,
  reg: nL,
  REG: rL,
  ReverseElement: oL,
  ReverseEquilibrium: iL,
  ReverseUpEquilibrium: cL,
  rfisht: aL,
  rfloor: lL,
  rfr: uL,
  Rfr: fL,
  rHar: hL,
  rhard: pL,
  rharu: dL,
  rharul: gL,
  Rho: mL,
  rho: bL,
  rhov: yL,
  RightAngleBracket: vL,
  RightArrowBar: wL,
  rightarrow: xL,
  RightArrow: SL,
  Rightarrow: _L,
  RightArrowLeftArrow: TL,
  rightarrowtail: EL,
  RightCeiling: CL,
  RightDoubleBracket: AL,
  RightDownTeeVector: qL,
  RightDownVectorBar: OL,
  RightDownVector: DL,
  RightFloor: LL,
  rightharpoondown: NL,
  rightharpoonup: PL,
  rightleftarrows: kL,
  rightleftharpoons: RL,
  rightrightarrows: $L,
  rightsquigarrow: ML,
  RightTeeArrow: IL,
  RightTee: jL,
  RightTeeVector: BL,
  rightthreetimes: UL,
  RightTriangleBar: HL,
  RightTriangle: VL,
  RightTriangleEqual: FL,
  RightUpDownVector: zL,
  RightUpTeeVector: GL,
  RightUpVectorBar: WL,
  RightUpVector: YL,
  RightVectorBar: JL,
  RightVector: XL,
  ring: QL,
  risingdotseq: ZL,
  rlarr: KL,
  rlhar: tN,
  rlm: eN,
  rmoustache: sN,
  rmoust: nN,
  rnmid: rN,
  roang: oN,
  roarr: iN,
  robrk: cN,
  ropar: aN,
  ropf: lN,
  Ropf: uN,
  roplus: fN,
  rotimes: hN,
  RoundImplies: pN,
  rpar: dN,
  rpargt: gN,
  rppolint: mN,
  rrarr: bN,
  Rrightarrow: yN,
  rsaquo: vN,
  rscr: wN,
  Rscr: xN,
  rsh: SN,
  Rsh: _N,
  rsqb: TN,
  rsquo: EN,
  rsquor: CN,
  rthree: AN,
  rtimes: qN,
  rtri: ON,
  rtrie: DN,
  rtrif: LN,
  rtriltri: NN,
  RuleDelayed: PN,
  ruluhar: kN,
  rx: RN,
  Sacute: $N,
  sacute: MN,
  sbquo: IN,
  scap: jN,
  Scaron: BN,
  scaron: UN,
  Sc: HN,
  sc: VN,
  sccue: FN,
  sce: zN,
  scE: GN,
  Scedil: WN,
  scedil: YN,
  Scirc: JN,
  scirc: XN,
  scnap: QN,
  scnE: ZN,
  scnsim: KN,
  scpolint: tP,
  scsim: eP,
  Scy: sP,
  scy: nP,
  sdotb: rP,
  sdot: oP,
  sdote: iP,
  searhk: cP,
  searr: aP,
  seArr: lP,
  searrow: uP,
  sect: fP,
  semi: hP,
  seswar: pP,
  setminus: dP,
  setmn: gP,
  sext: mP,
  Sfr: bP,
  sfr: yP,
  sfrown: vP,
  sharp: wP,
  SHCHcy: xP,
  shchcy: SP,
  SHcy: _P,
  shcy: TP,
  ShortDownArrow: EP,
  ShortLeftArrow: CP,
  shortmid: AP,
  shortparallel: qP,
  ShortRightArrow: OP,
  ShortUpArrow: DP,
  shy: LP,
  Sigma: NP,
  sigma: PP,
  sigmaf: kP,
  sigmav: RP,
  sim: $P,
  simdot: MP,
  sime: IP,
  simeq: jP,
  simg: BP,
  simgE: UP,
  siml: HP,
  simlE: VP,
  simne: FP,
  simplus: zP,
  simrarr: GP,
  slarr: WP,
  SmallCircle: YP,
  smallsetminus: JP,
  smashp: XP,
  smeparsl: QP,
  smid: ZP,
  smile: KP,
  smt: tk,
  smte: ek,
  smtes: sk,
  SOFTcy: nk,
  softcy: rk,
  solbar: ok,
  solb: ik,
  sol: ck,
  Sopf: ak,
  sopf: lk,
  spades: uk,
  spadesuit: fk,
  spar: hk,
  sqcap: pk,
  sqcaps: dk,
  sqcup: gk,
  sqcups: mk,
  Sqrt: bk,
  sqsub: yk,
  sqsube: vk,
  sqsubset: wk,
  sqsubseteq: xk,
  sqsup: Sk,
  sqsupe: _k,
  sqsupset: Tk,
  sqsupseteq: Ek,
  square: Ck,
  Square: Ak,
  SquareIntersection: qk,
  SquareSubset: Ok,
  SquareSubsetEqual: Dk,
  SquareSuperset: Lk,
  SquareSupersetEqual: Nk,
  SquareUnion: Pk,
  squarf: kk,
  squ: Rk,
  squf: $k,
  srarr: Mk,
  Sscr: Ik,
  sscr: jk,
  ssetmn: Bk,
  ssmile: Uk,
  sstarf: Hk,
  Star: Vk,
  star: Fk,
  starf: zk,
  straightepsilon: Gk,
  straightphi: Wk,
  strns: Yk,
  sub: Jk,
  Sub: Xk,
  subdot: Qk,
  subE: Zk,
  sube: Kk,
  subedot: tR,
  submult: eR,
  subnE: sR,
  subne: nR,
  subplus: rR,
  subrarr: oR,
  subset: iR,
  Subset: cR,
  subseteq: aR,
  subseteqq: lR,
  SubsetEqual: uR,
  subsetneq: fR,
  subsetneqq: hR,
  subsim: pR,
  subsub: dR,
  subsup: gR,
  succapprox: mR,
  succ: bR,
  succcurlyeq: yR,
  Succeeds: vR,
  SucceedsEqual: wR,
  SucceedsSlantEqual: xR,
  SucceedsTilde: SR,
  succeq: _R,
  succnapprox: TR,
  succneqq: ER,
  succnsim: CR,
  succsim: AR,
  SuchThat: qR,
  sum: OR,
  Sum: DR,
  sung: LR,
  sup1: NR,
  sup2: PR,
  sup3: kR,
  sup: RR,
  Sup: $R,
  supdot: MR,
  supdsub: IR,
  supE: jR,
  supe: BR,
  supedot: UR,
  Superset: HR,
  SupersetEqual: VR,
  suphsol: FR,
  suphsub: zR,
  suplarr: GR,
  supmult: WR,
  supnE: YR,
  supne: JR,
  supplus: XR,
  supset: QR,
  Supset: ZR,
  supseteq: KR,
  supseteqq: t$,
  supsetneq: e$,
  supsetneqq: s$,
  supsim: n$,
  supsub: r$,
  supsup: o$,
  swarhk: i$,
  swarr: c$,
  swArr: a$,
  swarrow: l$,
  swnwar: u$,
  szlig: f$,
  Tab: h$,
  target: p$,
  Tau: d$,
  tau: g$,
  tbrk: m$,
  Tcaron: b$,
  tcaron: y$,
  Tcedil: v$,
  tcedil: w$,
  Tcy: x$,
  tcy: S$,
  tdot: _$,
  telrec: T$,
  Tfr: E$,
  tfr: C$,
  there4: A$,
  therefore: q$,
  Therefore: O$,
  Theta: D$,
  theta: L$,
  thetasym: N$,
  thetav: P$,
  thickapprox: k$,
  thicksim: R$,
  ThickSpace: $$,
  ThinSpace: M$,
  thinsp: I$,
  thkap: j$,
  thksim: B$,
  THORN: U$,
  thorn: H$,
  tilde: V$,
  Tilde: F$,
  TildeEqual: z$,
  TildeFullEqual: G$,
  TildeTilde: W$,
  timesbar: Y$,
  timesb: J$,
  times: X$,
  timesd: Q$,
  tint: Z$,
  toea: K$,
  topbot: tM,
  topcir: eM,
  top: sM,
  Topf: nM,
  topf: rM,
  topfork: oM,
  tosa: iM,
  tprime: cM,
  trade: aM,
  TRADE: lM,
  triangle: uM,
  triangledown: fM,
  triangleleft: hM,
  trianglelefteq: pM,
  triangleq: dM,
  triangleright: gM,
  trianglerighteq: mM,
  tridot: bM,
  trie: yM,
  triminus: vM,
  TripleDot: wM,
  triplus: xM,
  trisb: SM,
  tritime: _M,
  trpezium: TM,
  Tscr: EM,
  tscr: CM,
  TScy: AM,
  tscy: qM,
  TSHcy: OM,
  tshcy: DM,
  Tstrok: LM,
  tstrok: NM,
  twixt: PM,
  twoheadleftarrow: kM,
  twoheadrightarrow: RM,
  Uacute: $M,
  uacute: MM,
  uarr: IM,
  Uarr: jM,
  uArr: BM,
  Uarrocir: UM,
  Ubrcy: HM,
  ubrcy: VM,
  Ubreve: FM,
  ubreve: zM,
  Ucirc: GM,
  ucirc: WM,
  Ucy: YM,
  ucy: JM,
  udarr: XM,
  Udblac: QM,
  udblac: ZM,
  udhar: KM,
  ufisht: tI,
  Ufr: eI,
  ufr: sI,
  Ugrave: nI,
  ugrave: rI,
  uHar: oI,
  uharl: iI,
  uharr: cI,
  uhblk: aI,
  ulcorn: lI,
  ulcorner: uI,
  ulcrop: fI,
  ultri: hI,
  Umacr: pI,
  umacr: dI,
  uml: gI,
  UnderBar: mI,
  UnderBrace: bI,
  UnderBracket: yI,
  UnderParenthesis: vI,
  Union: wI,
  UnionPlus: xI,
  Uogon: SI,
  uogon: _I,
  Uopf: TI,
  uopf: EI,
  UpArrowBar: CI,
  uparrow: AI,
  UpArrow: qI,
  Uparrow: OI,
  UpArrowDownArrow: DI,
  updownarrow: LI,
  UpDownArrow: NI,
  Updownarrow: PI,
  UpEquilibrium: kI,
  upharpoonleft: RI,
  upharpoonright: $I,
  uplus: MI,
  UpperLeftArrow: II,
  UpperRightArrow: jI,
  upsi: BI,
  Upsi: UI,
  upsih: HI,
  Upsilon: VI,
  upsilon: FI,
  UpTeeArrow: zI,
  UpTee: GI,
  upuparrows: WI,
  urcorn: YI,
  urcorner: JI,
  urcrop: XI,
  Uring: QI,
  uring: ZI,
  urtri: KI,
  Uscr: tj,
  uscr: ej,
  utdot: sj,
  Utilde: nj,
  utilde: rj,
  utri: oj,
  utrif: ij,
  uuarr: cj,
  Uuml: aj,
  uuml: lj,
  uwangle: uj,
  vangrt: fj,
  varepsilon: hj,
  varkappa: pj,
  varnothing: dj,
  varphi: gj,
  varpi: mj,
  varpropto: bj,
  varr: yj,
  vArr: vj,
  varrho: wj,
  varsigma: xj,
  varsubsetneq: Sj,
  varsubsetneqq: _j,
  varsupsetneq: Tj,
  varsupsetneqq: Ej,
  vartheta: Cj,
  vartriangleleft: Aj,
  vartriangleright: qj,
  vBar: Oj,
  Vbar: Dj,
  vBarv: Lj,
  Vcy: Nj,
  vcy: Pj,
  vdash: kj,
  vDash: Rj,
  Vdash: $j,
  VDash: Mj,
  Vdashl: Ij,
  veebar: jj,
  vee: Bj,
  Vee: Uj,
  veeeq: Hj,
  vellip: Vj,
  verbar: Fj,
  Verbar: zj,
  vert: Gj,
  Vert: Wj,
  VerticalBar: Yj,
  VerticalLine: Jj,
  VerticalSeparator: Xj,
  VerticalTilde: Qj,
  VeryThinSpace: Zj,
  Vfr: Kj,
  vfr: tB,
  vltri: eB,
  vnsub: sB,
  vnsup: nB,
  Vopf: rB,
  vopf: oB,
  vprop: iB,
  vrtri: cB,
  Vscr: aB,
  vscr: lB,
  vsubnE: uB,
  vsubne: fB,
  vsupnE: hB,
  vsupne: pB,
  Vvdash: dB,
  vzigzag: gB,
  Wcirc: mB,
  wcirc: bB,
  wedbar: yB,
  wedge: vB,
  Wedge: wB,
  wedgeq: xB,
  weierp: SB,
  Wfr: _B,
  wfr: TB,
  Wopf: EB,
  wopf: CB,
  wp: AB,
  wr: qB,
  wreath: OB,
  Wscr: DB,
  wscr: LB,
  xcap: NB,
  xcirc: PB,
  xcup: kB,
  xdtri: RB,
  Xfr: $B,
  xfr: MB,
  xharr: IB,
  xhArr: jB,
  Xi: BB,
  xi: UB,
  xlarr: HB,
  xlArr: VB,
  xmap: FB,
  xnis: zB,
  xodot: GB,
  Xopf: WB,
  xopf: YB,
  xoplus: JB,
  xotime: XB,
  xrarr: QB,
  xrArr: ZB,
  Xscr: KB,
  xscr: tU,
  xsqcup: eU,
  xuplus: sU,
  xutri: nU,
  xvee: rU,
  xwedge: oU,
  Yacute: iU,
  yacute: cU,
  YAcy: aU,
  yacy: lU,
  Ycirc: uU,
  ycirc: fU,
  Ycy: hU,
  ycy: pU,
  yen: dU,
  Yfr: gU,
  yfr: mU,
  YIcy: bU,
  yicy: yU,
  Yopf: vU,
  yopf: wU,
  Yscr: xU,
  yscr: SU,
  YUcy: _U,
  yucy: TU,
  yuml: EU,
  Yuml: CU,
  Zacute: AU,
  zacute: qU,
  Zcaron: OU,
  zcaron: DU,
  Zcy: LU,
  zcy: NU,
  Zdot: PU,
  zdot: kU,
  zeetrf: RU,
  ZeroWidthSpace: $U,
  Zeta: MU,
  zeta: IU,
  zfr: jU,
  Zfr: BU,
  ZHcy: UU,
  zhcy: HU,
  zigrarr: VU,
  zopf: FU,
  Zopf: zU,
  Zscr: GU,
  zscr: WU,
  zwj: YU,
  zwnj: JU
}, XU = "\xC1", QU = "\xE1", ZU = "\xC2", KU = "\xE2", t2 = "\xB4", e2 = "\xC6", s2 = "\xE6", n2 = "\xC0", r2 = "\xE0", o2 = "&", i2 = "&", c2 = "\xC5", a2 = "\xE5", l2 = "\xC3", u2 = "\xE3", f2 = "\xC4", h2 = "\xE4", p2 = "\xA6", d2 = "\xC7", g2 = "\xE7", m2 = "\xB8", b2 = "\xA2", y2 = "\xA9", v2 = "\xA9", w2 = "\xA4", x2 = "\xB0", S2 = "\xF7", _2 = "\xC9", T2 = "\xE9", E2 = "\xCA", C2 = "\xEA", A2 = "\xC8", q2 = "\xE8", O2 = "\xD0", D2 = "\xF0", L2 = "\xCB", N2 = "\xEB", P2 = "\xBD", k2 = "\xBC", R2 = "\xBE", $2 = ">", M2 = ">", I2 = "\xCD", j2 = "\xED", B2 = "\xCE", U2 = "\xEE", H2 = "\xA1", V2 = "\xCC", F2 = "\xEC", z2 = "\xBF", G2 = "\xCF", W2 = "\xEF", Y2 = "\xAB", J2 = "<", X2 = "<", Q2 = "\xAF", Z2 = "\xB5", K2 = "\xB7", tH = "\xA0", eH = "\xAC", sH = "\xD1", nH = "\xF1", rH = "\xD3", oH = "\xF3", iH = "\xD4", cH = "\xF4", aH = "\xD2", lH = "\xF2", uH = "\xAA", fH = "\xBA", hH = "\xD8", pH = "\xF8", dH = "\xD5", gH = "\xF5", mH = "\xD6", bH = "\xF6", yH = "\xB6", vH = "\xB1", wH = "\xA3", xH = '"', SH = '"', _H = "\xBB", TH = "\xAE", EH = "\xAE", CH = "\xA7", AH = "\xAD", qH = "\xB9", OH = "\xB2", DH = "\xB3", LH = "\xDF", NH = "\xDE", PH = "\xFE", kH = "\xD7", RH = "\xDA", $H = "\xFA", MH = "\xDB", IH = "\xFB", jH = "\xD9", BH = "\xF9", UH = "\xA8", HH = "\xDC", VH = "\xFC", FH = "\xDD", zH = "\xFD", GH = "\xA5", WH = "\xFF", sn = {
  Aacute: XU,
  aacute: QU,
  Acirc: ZU,
  acirc: KU,
  acute: t2,
  AElig: e2,
  aelig: s2,
  Agrave: n2,
  agrave: r2,
  amp: o2,
  AMP: i2,
  Aring: c2,
  aring: a2,
  Atilde: l2,
  atilde: u2,
  Auml: f2,
  auml: h2,
  brvbar: p2,
  Ccedil: d2,
  ccedil: g2,
  cedil: m2,
  cent: b2,
  copy: y2,
  COPY: v2,
  curren: w2,
  deg: x2,
  divide: S2,
  Eacute: _2,
  eacute: T2,
  Ecirc: E2,
  ecirc: C2,
  Egrave: A2,
  egrave: q2,
  ETH: O2,
  eth: D2,
  Euml: L2,
  euml: N2,
  frac12: P2,
  frac14: k2,
  frac34: R2,
  gt: $2,
  GT: M2,
  Iacute: I2,
  iacute: j2,
  Icirc: B2,
  icirc: U2,
  iexcl: H2,
  Igrave: V2,
  igrave: F2,
  iquest: z2,
  Iuml: G2,
  iuml: W2,
  laquo: Y2,
  lt: J2,
  LT: X2,
  macr: Q2,
  micro: Z2,
  middot: K2,
  nbsp: tH,
  not: eH,
  Ntilde: sH,
  ntilde: nH,
  Oacute: rH,
  oacute: oH,
  Ocirc: iH,
  ocirc: cH,
  Ograve: aH,
  ograve: lH,
  ordf: uH,
  ordm: fH,
  Oslash: hH,
  oslash: pH,
  Otilde: dH,
  otilde: gH,
  Ouml: mH,
  ouml: bH,
  para: yH,
  plusmn: vH,
  pound: wH,
  quot: xH,
  QUOT: SH,
  raquo: _H,
  reg: TH,
  REG: EH,
  sect: CH,
  shy: AH,
  sup1: qH,
  sup2: OH,
  sup3: DH,
  szlig: LH,
  THORN: NH,
  thorn: PH,
  times: kH,
  Uacute: RH,
  uacute: $H,
  Ucirc: MH,
  ucirc: IH,
  Ugrave: jH,
  ugrave: BH,
  uml: UH,
  Uuml: HH,
  uuml: VH,
  Yacute: FH,
  yacute: zH,
  yen: GH,
  yuml: WH
}, YH = "&", JH = "'", XH = ">", QH = "<", ZH = '"', Ke = {
  amp: YH,
  apos: JH,
  gt: XH,
  lt: QH,
  quot: ZH
};
var de = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(he, "__esModule", { value: !0 });
var KH = de(pe), tV = de(Ze), Ae = de(sn), eV = de(Ke);
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
var sV = k("C", 24, 16), nV = k("D", 25, 16), rV = k("A", 26, 16), oV = k("T", 27, 16), iV = k("A", 28, 16), cV = et("R", 35), aV = et("I", 36), lV = et("P", 37), uV = et("T", 38), fV = k("R", 40, 1), hV = k("I", 41, 1), pV = k("P", 42, 1), dV = k("T", 43, 1), gV = et("Y", 45), mV = et("L", 46), bV = et("E", 47), yV = k("Y", 49, 1), vV = k("L", 50, 1), wV = k("E", 51, 1), xV = et("I", 54), SV = et("T", 55), _V = et("L", 56), TV = et("E", 57), EV = k("I", 58, 1), CV = k("T", 59, 1), AV = k("L", 60, 1), qV = k("E", 61, 1), OV = k("#", 63, 64), DV = k("X", 66, 65), LV = function() {
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
    if (t === void 0 && (t = this.xmlMode ? eV.default : tV.default), this.sectionStart + 1 < this._index) {
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
      this.emitPartial(KH.default(i)), this.sectionStart = n ? this._index + 1 : this._index;
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
      this._state === 1 ? this.stateText(t) : this._state === 12 ? this.stateInAttributeValueDoubleQuotes(t) : this._state === 9 ? this.stateInAttributeName(t) : this._state === 19 ? this.stateInComment(t) : this._state === 20 ? this.stateInSpecialComment(t) : this._state === 8 ? this.stateBeforeAttributeName(t) : this._state === 3 ? this.stateInTagName(t) : this._state === 6 ? this.stateInClosingTagName(t) : this._state === 2 ? this.stateBeforeTagName(t) : this._state === 10 ? this.stateAfterAttributeName(t) : this._state === 13 ? this.stateInAttributeValueSingleQuotes(t) : this._state === 11 ? this.stateBeforeAttributeValue(t) : this._state === 5 ? this.stateBeforeClosingTagName(t) : this._state === 7 ? this.stateAfterClosingTagName(t) : this._state === 32 ? this.stateBeforeSpecialS(t) : this._state === 21 ? this.stateAfterComment1(t) : this._state === 14 ? this.stateInAttributeValueNoQuotes(t) : this._state === 4 ? this.stateInSelfClosingTag(t) : this._state === 16 ? this.stateInDeclaration(t) : this._state === 15 ? this.stateBeforeDeclaration(t) : this._state === 22 ? this.stateAfterComment2(t) : this._state === 18 ? this.stateBeforeComment(t) : this._state === 33 ? this.stateBeforeSpecialSEnd(t) : this._state === 53 ? EV(this, t) : this._state === 39 ? fV(this, t) : this._state === 40 ? hV(this, t) : this._state === 41 ? pV(this, t) : this._state === 34 ? cV(this, t) : this._state === 35 ? aV(this, t) : this._state === 36 ? lV(this, t) : this._state === 37 ? uV(this, t) : this._state === 38 ? this.stateBeforeSpecialLast(t, 2) : this._state === 42 ? dV(this, t) : this._state === 43 ? this.stateAfterSpecialLast(t, 6) : this._state === 44 ? gV(this, t) : this._state === 29 ? this.stateInCdata(t) : this._state === 45 ? mV(this, t) : this._state === 46 ? bV(this, t) : this._state === 47 ? this.stateBeforeSpecialLast(t, 3) : this._state === 48 ? yV(this, t) : this._state === 49 ? vV(this, t) : this._state === 50 ? wV(this, t) : this._state === 51 ? this.stateAfterSpecialLast(t, 5) : this._state === 52 ? xV(this, t) : this._state === 54 ? SV(this, t) : this._state === 55 ? _V(this, t) : this._state === 56 ? TV(this, t) : this._state === 57 ? this.stateBeforeSpecialLast(t, 4) : this._state === 58 ? CV(this, t) : this._state === 59 ? AV(this, t) : this._state === 60 ? qV(this, t) : this._state === 61 ? this.stateAfterSpecialLast(t, 5) : this._state === 17 ? this.stateInProcessingInstruction(t) : this._state === 64 ? this.stateInNamedEntity(t) : this._state === 23 ? sV(this, t) : this._state === 62 ? OV(this, t) : this._state === 24 ? nV(this, t) : this._state === 25 ? rV(this, t) : this._state === 30 ? this.stateAfterCdata1(t) : this._state === 31 ? this.stateAfterCdata2(t) : this._state === 26 ? oV(this, t) : this._state === 27 ? iV(this, t) : this._state === 28 ? this.stateBeforeCdata6(t) : this._state === 66 ? this.stateInHexEntity(t) : this._state === 65 ? this.stateInNumericEntity(t) : this._state === 63 ? DV(this, t) : this.cbs.onerror(Error("unknown _state"), this._state), this._index++;
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
he.default = LV;
var NV = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.Parser = void 0;
var PV = NV(he), St = /* @__PURE__ */ new Set([
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
]), kV = /\s|\//, RV = function() {
  function s(t, e) {
    e === void 0 && (e = {});
    var n, r, o, i, c;
    this.startIndex = 0, this.endIndex = null, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.options = e, this.cbs = t != null ? t : {}, this.lowerCaseTagNames = (n = e.lowerCaseTags) !== null && n !== void 0 ? n : !e.xmlMode, this.lowerCaseAttributeNames = (r = e.lowerCaseAttributeNames) !== null && r !== void 0 ? r : !e.xmlMode, this.tokenizer = new ((o = e.Tokenizer) !== null && o !== void 0 ? o : PV.default)(this.options, this), (c = (i = this.cbs).onparserinit) === null || c === void 0 || c.call(i, this);
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
    var e = t.search(kV), n = e < 0 ? t : t.substr(0, e);
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
Ut.Parser = RV;
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
var L = qt, $V = /* @__PURE__ */ new Map([
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
      return (t = $V.get(this.type)) !== null && t !== void 0 ? t : 1;
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
function MV(s) {
  return Object.prototype.hasOwnProperty.call(s, "children");
}
S.hasChildren = MV;
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
var ke = be(Ze), IV = be(sn), jV = be(Ke), Ts = be(pe), BV = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
at.decodeXML = mn(jV.default);
at.decodeHTMLStrict = mn(ke.default);
function mn(s) {
  var t = bn(s);
  return function(e) {
    return String(e).replace(BV, t);
  };
}
var Es = function(s, t) {
  return s < t ? 1 : -1;
};
at.decodeHTML = function() {
  for (var s = Object.keys(IV.default).sort(Es), t = Object.keys(ke.default).sort(Es), e = 0, n = 0; e < t.length; e++)
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
var UV = yn(Ke), vn = xn(UV.default), wn = Sn(vn);
J.encodeXML = En(vn);
var HV = yn(Ze), rs = xn(HV.default), VV = Sn(rs);
J.encodeHTML = zV(rs, VV);
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
var _n = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, FV = String.prototype.codePointAt != null ? function(s) {
  return s.codePointAt(0);
} : function(s) {
  return (s.charCodeAt(0) - 55296) * 1024 + s.charCodeAt(1) - 56320 + 65536;
};
function ye(s) {
  return "&#x" + (s.length > 1 ? FV(s) : s.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function zV(s, t) {
  return function(e) {
    return e.replace(t, function(n) {
      return s[n];
    }).replace(_n, ye);
  };
}
var Tn = new RegExp(wn.source + "|" + _n.source, "g");
function GV(s) {
  return s.replace(Tn, ye);
}
J.escape = GV;
function WV(s) {
  return s.replace(wn, ye);
}
J.escapeUTF8 = WV;
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
}, YV = v && v.__createBinding || (Object.create ? function(s, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(s, n, { enumerable: !0, get: function() {
    return t[e];
  } });
} : function(s, t, e, n) {
  n === void 0 && (n = e), s[n] = t[e];
}), JV = v && v.__setModuleDefault || (Object.create ? function(s, t) {
  Object.defineProperty(s, "default", { enumerable: !0, value: t });
} : function(s, t) {
  s.default = t;
}), XV = v && v.__importStar || function(s) {
  if (s && s.__esModule)
    return s;
  var t = {};
  if (s != null)
    for (var e in s)
      e !== "default" && Object.prototype.hasOwnProperty.call(s, e) && YV(t, s, e);
  return JV(t, s), t;
};
Object.defineProperty(ns, "__esModule", { value: !0 });
var it = XV(qt), Cn = gn, An = Tt, QV = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function ZV(s, t) {
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
    n += KV(e[r], t);
  return n;
}
ns.default = os;
function KV(s, t) {
  switch (s.type) {
    case it.Root:
      return os(s.children, t);
    case it.Directive:
    case it.Doctype:
      return nF(s);
    case it.Comment:
      return iF(s);
    case it.CDATA:
      return oF(s);
    case it.Script:
    case it.Style:
    case it.Tag:
      return sF(s, t);
    case it.Text:
      return rF(s, t);
  }
}
var tF = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), eF = /* @__PURE__ */ new Set(["svg", "math"]);
function sF(s, t) {
  var e;
  t.xmlMode === "foreign" && (s.name = (e = An.elementNames.get(s.name)) !== null && e !== void 0 ? e : s.name, s.parent && tF.has(s.parent.name) && (t = _t(_t({}, t), { xmlMode: !1 }))), !t.xmlMode && eF.has(s.name) && (t = _t(_t({}, t), { xmlMode: "foreign" }));
  var n = "<" + s.name, r = ZV(s.attribs, t);
  return r && (n += " " + r), s.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Cs.has(s.name)) ? (t.xmlMode || (n += " "), n += "/>") : (n += ">", s.children.length > 0 && (n += os(s.children, t)), (t.xmlMode || !Cs.has(s.name)) && (n += "</" + s.name + ">")), n;
}
function nF(s) {
  return "<" + s.data + ">";
}
function rF(s, t) {
  var e = s.data || "";
  return t.decodeEntities !== !1 && !(!t.xmlMode && s.parent && QV.has(s.parent.name)) && (e = Cn.encodeXML(e)), e;
}
function oF(s) {
  return "<![CDATA[" + s.children[0].data + "]]>";
}
function iF(s) {
  return "<!--" + s.data + "-->";
}
var cF = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.innerText = Y.textContent = Y.getText = Y.getInnerHTML = Y.getOuterHTML = void 0;
var rt = lt, aF = cF(ns), lF = qt;
function qn(s, t) {
  return (0, aF.default)(s, t);
}
Y.getOuterHTML = qn;
function uF(s, t) {
  return (0, rt.hasChildren)(s) ? s.children.map(function(e) {
    return qn(e, t);
  }).join("") : "";
}
Y.getInnerHTML = uF;
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
  return Array.isArray(s) ? s.map($e).join("") : (0, rt.hasChildren)(s) && (s.type === lF.ElementType.Tag || (0, rt.isCDATA)(s)) ? $e(s.children) : (0, rt.isText)(s) ? s.data : "";
}
Y.innerText = $e;
var P = {};
Object.defineProperty(P, "__esModule", { value: !0 });
P.prevElementSibling = P.nextElementSibling = P.getName = P.hasAttrib = P.getAttributeValue = P.getSiblings = P.getParent = P.getChildren = void 0;
var On = lt, fF = [];
function Dn(s) {
  var t;
  return (t = s.children) !== null && t !== void 0 ? t : fF;
}
P.getChildren = Dn;
function Ln(s) {
  return s.parent || null;
}
P.getParent = Ln;
function hF(s) {
  var t, e, n = Ln(s);
  if (n != null)
    return Dn(n);
  for (var r = [s], o = s.prev, i = s.next; o != null; )
    r.unshift(o), t = o, o = t.prev;
  for (; i != null; )
    r.push(i), e = i, i = e.next;
  return r;
}
P.getSiblings = hF;
function pF(s, t) {
  var e;
  return (e = s.attribs) === null || e === void 0 ? void 0 : e[t];
}
P.getAttributeValue = pF;
function dF(s, t) {
  return s.attribs != null && Object.prototype.hasOwnProperty.call(s.attribs, t) && s.attribs[t] != null;
}
P.hasAttrib = dF;
function gF(s) {
  return s.name;
}
P.getName = gF;
function mF(s) {
  for (var t, e = s.next; e !== null && !(0, On.isTag)(e); )
    t = e, e = t.next;
  return e;
}
P.nextElementSibling = mF;
function bF(s) {
  for (var t, e = s.prev; e !== null && !(0, On.isTag)(e); )
    t = e, e = t.prev;
  return e;
}
P.prevElementSibling = bF;
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
function yF(s, t) {
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
V.replaceElement = yF;
function vF(s, t) {
  if (Ht(t), t.next = null, t.parent = s, s.children.push(t) > 1) {
    var e = s.children[s.children.length - 2];
    e.next = t, t.prev = e;
  } else
    t.prev = null;
}
V.appendChild = vF;
function wF(s, t) {
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
V.append = wF;
function xF(s, t) {
  if (Ht(t), t.parent = s, t.prev = null, s.children.unshift(t) !== 1) {
    var e = s.children[1];
    e.prev = t, t.next = e;
  } else
    t.next = null;
}
V.prependChild = xF;
function SF(s, t) {
  Ht(t);
  var e = s.parent;
  if (e) {
    var n = e.children;
    n.splice(n.indexOf(s), 0, t);
  }
  s.prev && (s.prev.next = t), t.parent = e, t.prev = s.prev, t.next = s, s.prev = t;
}
V.prepend = SF;
var $ = {};
Object.defineProperty($, "__esModule", { value: !0 });
$.findAll = $.existsOne = $.findOne = $.findOneChild = $.find = $.filter = void 0;
var Pt = lt;
function _F(s, t, e, n) {
  return e === void 0 && (e = !0), n === void 0 && (n = 1 / 0), Array.isArray(t) || (t = [t]), is(s, t, e, n);
}
$.filter = _F;
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
function TF(s, t) {
  return t.find(s);
}
$.findOneChild = TF;
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
function EF(s, t) {
  for (var e, n = [], r = t.filter(Pt.isTag), o; o = r.shift(); ) {
    var i = (e = o.children) === null || e === void 0 ? void 0 : e.filter(Pt.isTag);
    i && i.length > 0 && r.unshift.apply(r, i), s(o) && n.push(o);
  }
  return n;
}
$.findAll = EF;
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
function CF(s, t) {
  return function(e) {
    return s(e) || t(e);
  };
}
function Rn(s) {
  var t = Object.keys(s).map(function(e) {
    var n = s[e];
    return Object.prototype.hasOwnProperty.call(oe, e) ? oe[e](n) : kn(e, n);
  });
  return t.length === 0 ? null : t.reduce(CF);
}
function AF(s, t) {
  var e = Rn(s);
  return e ? e(t) : !0;
}
X.testElement = AF;
function qF(s, t, e, n) {
  n === void 0 && (n = 1 / 0);
  var r = Rn(s);
  return r ? (0, ve.filter)(r, t, e, n) : [];
}
X.getElements = qF;
function OF(s, t, e) {
  return e === void 0 && (e = !0), Array.isArray(t) || (t = [t]), (0, ve.findOne)(kn("id", s), t, e);
}
X.getElementById = OF;
function DF(s, t, e, n) {
  return e === void 0 && (e = !0), n === void 0 && (n = 1 / 0), (0, ve.filter)(oe.tag_name(s), t, e, n);
}
X.getElementsByTagName = DF;
function LF(s, t, e, n) {
  return e === void 0 && (e = !0), n === void 0 && (n = 1 / 0), (0, ve.filter)(oe.tag_type(s), t, e, n);
}
X.getElementsByTagType = LF;
var ht = {};
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.uniqueSort = ht.compareDocumentPosition = ht.removeSubsets = void 0;
var As = lt;
function NF(s) {
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
ht.removeSubsets = NF;
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
function PF(s) {
  return s = s.filter(function(t, e, n) {
    return !n.includes(t, e + 1);
  }), s.sort(function(t, e) {
    var n = $n(t, e);
    return n & 2 ? -1 : n & 4 ? 1 : 0;
  }), s;
}
ht.uniqueSort = PF;
var we = {};
Object.defineProperty(we, "__esModule", { value: !0 });
we.getFeed = void 0;
var kF = Y, Vt = X;
function RF(s) {
  var t = ie(BF, s);
  return t ? t.name === "feed" ? $F(t) : MF(t) : null;
}
we.getFeed = RF;
function $F(s) {
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
function MF(s) {
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
var IF = ["url", "type", "lang"], jF = [
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
    }, r = 0, o = IF; r < o.length; r++) {
      var i = o[r];
      e[i] && (n[i] = e[i]);
    }
    for (var c = 0, a = jF; c < a.length; c++) {
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
  return e === void 0 && (e = !1), (0, kF.textContent)((0, Vt.getElementsByTagName)(s, t, e, 1)).trim();
}
function H(s, t, e, n, r) {
  r === void 0 && (r = !1);
  var o = bt(e, n, r);
  o && (s[t] = o);
}
function BF(s) {
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
var UF = v && v.__extends || function() {
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
}(), HF = v && v.__createBinding || (Object.create ? function(s, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(s, n, { enumerable: !0, get: function() {
    return t[e];
  } });
} : function(s, t, e, n) {
  n === void 0 && (n = e), s[n] = t[e];
}), VF = v && v.__setModuleDefault || (Object.create ? function(s, t) {
  Object.defineProperty(s, "default", { enumerable: !0, value: t });
} : function(s, t) {
  s.default = t;
}), FF = v && v.__importStar || function(s) {
  if (s && s.__esModule)
    return s;
  var t = {};
  if (s != null)
    for (var e in s)
      e !== "default" && Object.prototype.hasOwnProperty.call(s, e) && HF(t, s, e);
  return VF(t, s), t;
}, zF = v && v.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.parseFeed = yt.FeedHandler = void 0;
var GF = zF(lt), ce = FF(ss), WF = Ut, qs;
(function(s) {
  s[s.image = 0] = "image", s[s.audio = 1] = "audio", s[s.video = 2] = "video", s[s.document = 3] = "document", s[s.executable = 4] = "executable";
})(qs || (qs = {}));
var Os;
(function(s) {
  s[s.sample = 0] = "sample", s[s.full = 1] = "full", s[s.nonstop = 2] = "nonstop";
})(Os || (Os = {}));
var In = function(s) {
  UF(t, s);
  function t(e, n) {
    var r = this;
    return typeof e == "object" && (e = void 0, n = e), r = s.call(this, e, n) || this, r;
  }
  return t.prototype.onend = function() {
    var e, n, r = Gt(YF, this.dom);
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
}(GF.default);
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
function YF(s) {
  return s === "rss" || s === "feed" || s === "rdf:RDF";
}
function JF(s, t) {
  t === void 0 && (t = { xmlMode: !0 });
  var e = new In(t);
  return new WF.Parser(e, t).end(s), e.feed;
}
yt.parseFeed = JF;
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
var XF = (s) => {
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
function QF(s) {
  var t, e;
  return Ns(s) === !1 ? !1 : (t = s.constructor, t === void 0 ? !0 : (e = t.prototype, !(Ns(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
cs.isPlainObject = QF;
var ZF = function(t) {
  return KF(t) && !t3(t);
};
function KF(s) {
  return !!s && typeof s == "object";
}
function t3(s) {
  var t = Object.prototype.toString.call(s);
  return t === "[object RegExp]" || t === "[object Date]" || n3(s);
}
var e3 = typeof Symbol == "function" && Symbol.for, s3 = e3 ? Symbol.for("react.element") : 60103;
function n3(s) {
  return s.$$typeof === s3;
}
function r3(s) {
  return Array.isArray(s) ? [] : {};
}
function kt(s, t) {
  return t.clone !== !1 && t.isMergeableObject(s) ? Et(r3(s), s, t) : s;
}
function o3(s, t, e) {
  return s.concat(t).map(function(n) {
    return kt(n, e);
  });
}
function i3(s, t) {
  if (!t.customMerge)
    return Et;
  var e = t.customMerge(s);
  return typeof e == "function" ? e : Et;
}
function c3(s) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(s).filter(function(t) {
    return s.propertyIsEnumerable(t);
  }) : [];
}
function Ps(s) {
  return Object.keys(s).concat(c3(s));
}
function jn(s, t) {
  try {
    return t in s;
  } catch {
    return !1;
  }
}
function a3(s, t) {
  return jn(s, t) && !(Object.hasOwnProperty.call(s, t) && Object.propertyIsEnumerable.call(s, t));
}
function l3(s, t, e) {
  var n = {};
  return e.isMergeableObject(s) && Ps(s).forEach(function(r) {
    n[r] = kt(s[r], e);
  }), Ps(t).forEach(function(r) {
    a3(s, r) || (jn(s, r) && e.isMergeableObject(t[r]) ? n[r] = i3(r, e)(s[r], t[r], e) : n[r] = kt(t[r], e));
  }), n;
}
function Et(s, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || o3, e.isMergeableObject = e.isMergeableObject || ZF, e.cloneUnlessOtherwiseSpecified = kt;
  var n = Array.isArray(t), r = Array.isArray(s), o = n === r;
  return o ? n ? e.arrayMerge(s, t, e) : l3(s, t, e) : kt(t, e);
}
Et.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, r) {
    return Et(n, r, e);
  }, {});
};
var u3 = Et, f3 = u3, Bn = { exports: {} };
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
const h3 = {}, p3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: h3
}, Symbol.toStringTag, { value: "Module" })), st = /* @__PURE__ */ tn(p3);
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
function d3(s) {
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
      let c = "raw" + d3(n);
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
let g3 = Hn;
function je(s, t) {
  new g3(t).stringify(s);
}
var xe = je;
je.default = je;
let { isClean: Wt, my: m3 } = Ft, b3 = ls, y3 = Hn, v3 = xe;
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
    this.raws = {}, this[Wt] = !1, this[m3] = !0;
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
    return new b3(t);
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
  toString(t = v3) {
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
    return new y3().raw(this, t, e);
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
let w3 = Se;
class He extends w3 {
  constructor(t) {
    t && typeof t.value < "u" && typeof t.value != "string" && (t = { ...t, value: String(t.value) }), super(t), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
}
var _e = He;
He.default = He;
let x3 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", S3 = (s, t = 21) => (e = t) => {
  let n = "", r = e;
  for (; r--; )
    n += s[Math.random() * s.length | 0];
  return n;
}, _3 = (s = 21) => {
  let t = "", e = s;
  for (; e--; )
    t += x3[Math.random() * 64 | 0];
  return t;
};
const T3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  nanoid: _3,
  customAlphabet: S3
}, Symbol.toStringTag, { value: "Module" })), E3 = /* @__PURE__ */ tn(T3);
let { SourceMapConsumer: Ms, SourceMapGenerator: Is } = st, { existsSync: C3, readFileSync: A3 } = st, { dirname: De, join: q3 } = st;
function O3(s) {
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
      return O3(t.substr(RegExp.lastMatch.length));
    let i = t.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + i);
  }
  loadFile(t) {
    if (this.root = De(t), C3(t))
      return this.mapFile = t, A3(t, "utf-8").toString().trim();
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
        return t && (n = q3(De(t), n)), this.loadFile(n);
      }
    }
  }
  isMap(t) {
    return typeof t != "object" ? !1 : typeof t.mappings == "string" || typeof t._mappings == "string" || Array.isArray(t.sections);
  }
}
var Vn = Ve;
Ve.default = Ve;
let { SourceMapConsumer: D3, SourceMapGenerator: L3 } = st, { fileURLToPath: js, pathToFileURL: Yt } = st, { resolve: Fe, isAbsolute: ze } = st, { nanoid: N3 } = E3, Le = st, Bs = ls, P3 = Vn, Ne = Symbol("fromOffsetCache"), k3 = Boolean(D3 && L3), Us = Boolean(Fe && ze);
class ae {
  constructor(t, e = {}) {
    if (t === null || typeof t > "u" || typeof t == "object" && !t.toString)
      throw new Error(`PostCSS received ${t} instead of CSS string`);
    if (this.css = t.toString(), this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, e.from && (!Us || /^\w+:\/\//.test(e.from) || ze(e.from) ? this.file = e.from : this.file = Fe(e.from)), Us && k3) {
      let n = new P3(this.css, e);
      if (n.text) {
        this.map = n;
        let r = n.consumer().file;
        !this.file && r && (this.file = this.mapResolve(r));
      }
    }
    this.file || (this.id = "<input css " + N3(6) + ">"), this.map && (this.map.file = this.from);
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
let { SourceMapConsumer: Fn, SourceMapGenerator: ne } = st, { dirname: re, resolve: zn, relative: Gn, sep: Wn } = st, { pathToFileURL: Hs } = st, R3 = Te, $3 = Boolean(Fn && ne), M3 = Boolean(re && zn && Gn && Wn);
class I3 {
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
        let t = new R3(this.css, this.opts);
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
    if (this.clearAnnotation(), M3 && $3 && this.isMap())
      return this.generateMap();
    {
      let t = "";
      return this.stringify(this.root, (e) => {
        t += e;
      }), [t];
    }
  }
}
var Yn = I3;
let j3 = Se;
class Ge extends j3 {
  constructor(t) {
    super(t), this.type = "comment";
  }
}
var Ee = Ge;
Ge.default = Ge;
let { isClean: Jn, my: Xn } = Ft, Qn = _e, Zn = Ee, B3 = Se, Kn, us, fs, tr;
function er(s) {
  return s.map((t) => (t.nodes && (t.nodes = er(t.nodes)), delete t.source, t));
}
function sr(s) {
  if (s[Jn] = !1, s.proxyOf.nodes)
    for (let t of s.proxyOf.nodes)
      sr(t);
}
class tt extends B3 {
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
let U3 = wt, nr, rr;
class $t extends U3 {
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
let H3 = ir;
class Ye {
  constructor(t, e, n) {
    this.processor = t, this.messages = [], this.root = e, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(t, e = {}) {
    e.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (e.plugin = this.lastPlugin.postcssPlugin);
    let n = new H3(t, e);
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
`.charCodeAt(0), Ot = " ".charCodeAt(0), Qt = "\f".charCodeAt(0), Zt = "	".charCodeAt(0), Kt = "\r".charCodeAt(0), V3 = "[".charCodeAt(0), F3 = "]".charCodeAt(0), z3 = "(".charCodeAt(0), G3 = ")".charCodeAt(0), W3 = "{".charCodeAt(0), Y3 = "}".charCodeAt(0), J3 = ";".charCodeAt(0), X3 = "*".charCodeAt(0), Q3 = ":".charCodeAt(0), Z3 = "@".charCodeAt(0), te = /[\t\n\f\r "#'()/;[\\\]{}]/g, ee = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, K3 = /.[\n"'(/\\]/, Gs = /[\da-f]/i;
var tz = function(t, e = {}) {
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
      case V3:
      case F3:
      case W3:
      case Y3:
      case Q3:
      case J3:
      case G3: {
        let Z = String.fromCharCode(o);
        d = [Z, Z, p];
        break;
      }
      case z3: {
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
          i = n.indexOf(")", p + 1), a = n.slice(p, i + 1), i === -1 || K3.test(a) ? d = ["(", "(", p] : (d = ["brackets", a, p, i], p = i);
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
      case Z3: {
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
        o === zs && n.charCodeAt(p + 1) === X3 ? (i = n.indexOf("*/", p + 2) + 1, i === 0 && (r || Q ? i = n.length : A("comment")), d = ["comment", n.slice(p, i + 1), p, i], p = i) : (ee.lastIndex = p + 1, ee.test(n), ee.lastIndex === 0 ? i = n.length - 1 : i = ee.lastIndex - 2, d = ["word", n.slice(p, i + 1), p, i], D.push(d), p = i);
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
let hr = wt, ez = fr;
class ue extends hr {
  constructor(t) {
    super(t), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return ez.comma(this.selector);
  }
  set selectors(t) {
    let e = this.selector ? this.selector.match(/,\s*/) : null, n = e ? e[0] : "," + this.raw("between", "beforeOpen");
    this.selector = t.join(n);
  }
}
var gs = ue;
ue.default = ue;
hr.registerRule(ue);
let sz = _e, nz = tz, rz = Ee, oz = ds, iz = zt, Ws = gs;
const Ys = {
  empty: !0,
  space: !0
};
function cz(s) {
  for (let t = s.length - 1; t >= 0; t--) {
    let e = s[t], n = e[3] || e[2];
    if (n)
      return n;
  }
}
class az {
  constructor(t) {
    this.input = t, this.root = new iz(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.customProperty = !1, this.createTokenizer(), this.root.source = { input: t, start: { offset: 0, line: 1, column: 1 } };
  }
  createTokenizer() {
    this.tokenizer = nz(this.input);
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
    let e = new rz();
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
    let n = new sz();
    this.init(n, t[0][2]);
    let r = t[t.length - 1];
    for (r[0] === ";" && (this.semicolon = !0, t.pop()), n.source.end = this.getPosition(
      r[3] || r[2] || cz(t)
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
    let e = new oz();
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
var lz = az;
let uz = wt, fz = lz, hz = Te;
function fe(s, t) {
  let e = new hz(s, t), n = new fz(e);
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
uz.registerParse(fe);
let { isClean: nt, my: pz } = Ft, dz = Yn, gz = xe, mz = wt, bz = hs, yz = or, Js = ps, vz = ms, wz = zt;
const xz = {
  document: "Document",
  root: "Root",
  atrule: "AtRule",
  rule: "Rule",
  decl: "Declaration",
  comment: "Comment"
}, Sz = {
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
}, _z = {
  postcssPlugin: !0,
  prepare: !0,
  Once: !0
}, At = 0;
function Dt(s) {
  return typeof s == "object" && typeof s.then == "function";
}
function pr(s) {
  let t = !1, e = xz[s.type];
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
      let o = vz;
      n.syntax && (o = n.syntax.parse), n.parser && (o = n.parser), o.parse && (o = o.parse);
      try {
        r = o(e, n);
      } catch (i) {
        this.processed = !0, this.error = i;
      }
      r && !r[pz] && mz.rebuild(r);
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
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || yz(
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
    let t = this.result.opts, e = gz;
    t.syntax && (e = t.syntax.stringify), t.stringifier && (e = t.stringifier), e.stringify && (e = e.stringify);
    let r = new dz(e, this.result.root, this.result.opts).generate();
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
          if (!Sz[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${e.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!_z[n])
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
wz.registerLazyResult(pt);
bz.registerLazyResult(pt);
let Tz = Yn, Ez = xe, Cz = or, Az = ms;
const qz = ps;
class Qe {
  constructor(t, e, n) {
    e = e.toString(), this.stringified = !1, this._processor = t, this._css = e, this._opts = n, this._map = void 0;
    let r, o = Ez;
    this.result = new qz(this._processor, r, this._opts), this.result.css = e;
    let i = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return i.root;
      }
    });
    let c = new Tz(o, r, this._opts, e);
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
    let t, e = Az;
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
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Cz(
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
var Oz = Qe;
Qe.default = Qe;
let Dz = Oz, Lz = dr, Nz = hs, Pz = zt;
class It {
  constructor(t = []) {
    this.version = "8.4.18", this.plugins = this.normalize(t);
  }
  use(t) {
    return this.plugins = this.plugins.concat(this.normalize([t])), this;
  }
  process(t, e = {}) {
    return this.plugins.length === 0 && typeof e.parser > "u" && typeof e.stringifier > "u" && typeof e.syntax > "u" ? new Dz(this, t, e) : new Lz(this, t, e);
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
var kz = It;
It.default = It;
Pz.registerProcessor(It);
Nz.registerProcessor(It);
let Rz = _e, $z = Vn, Mz = Ee, Iz = ds, jz = Te, Bz = zt, Uz = gs;
function jt(s, t) {
  if (Array.isArray(s))
    return s.map((r) => jt(r));
  let { inputs: e, ...n } = s;
  if (e) {
    t = [];
    for (let r of e) {
      let o = { ...r, __proto__: jz.prototype };
      o.map && (o.map = {
        ...o.map,
        __proto__: $z.prototype
      }), t.push(o);
    }
  }
  if (n.nodes && (n.nodes = s.nodes.map((r) => jt(r, t))), n.source) {
    let { inputId: r, ...o } = n.source;
    n.source = o, r != null && (n.source.input = t[r]);
  }
  if (n.type === "root")
    return new Bz(n);
  if (n.type === "decl")
    return new Rz(n);
  if (n.type === "rule")
    return new Uz(n);
  if (n.type === "comment")
    return new Mz(n);
  if (n.type === "atrule")
    return new Iz(n);
  throw new Error("Unknown node type: " + s.type);
}
var Hz = jt;
jt.default = jt;
let Vz = ls, gr = _e, Fz = dr, zz = wt, bs = kz, Gz = xe, Wz = Hz, mr = hs, Yz = ir, br = Ee, yr = ds, Jz = ps, Xz = Te, Qz = ms, Zz = fr, vr = gs, wr = zt, Kz = Se;
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
E.stringify = Gz;
E.parse = Qz;
E.fromJSON = Wz;
E.list = Zz;
E.comment = (s) => new br(s);
E.atRule = (s) => new yr(s);
E.decl = (s) => new gr(s);
E.rule = (s) => new vr(s);
E.root = (s) => new wr(s);
E.document = (s) => new mr(s);
E.CssSyntaxError = Vz;
E.Declaration = gr;
E.Container = zz;
E.Processor = bs;
E.Document = mr;
E.Comment = br;
E.Warning = Yz;
E.AtRule = yr;
E.Result = Jz;
E.Input = Xz;
E.Rule = vr;
E.Root = wr;
E.Node = Kz;
Fz.registerPostcss(E);
var t4 = E;
E.default = E;
const e4 = en, Qs = XF, { isPlainObject: s4 } = cs, Zs = f3, n4 = Bn.exports, { parse: r4 } = t4, o4 = [
  "img",
  "audio",
  "video",
  "picture",
  "svg",
  "object",
  "map",
  "iframe",
  "embed"
], i4 = ["script", "style"];
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
function c4(s) {
  for (const t in s)
    if (ct(s, t))
      return !1;
  return !0;
}
function a4(s) {
  return s.map(function(t) {
    if (!t.url)
      throw new Error("URL missing");
    return t.url + (t.w ? ` ${t.w}w` : "") + (t.h ? ` ${t.h}h` : "") + (t.d ? ` ${t.d}x` : "");
  }).join(", ");
}
var l4 = Bt;
const u4 = /^[^\0\t\n\f\r /<=>]+$/;
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
      y.length && o4.includes(this.tag) && y[y.length - 1].mediaChildren.push(this.tag);
    };
  }
  t = Object.assign({}, Bt.defaults, t), t.parser = Object.assign({}, f4, t.parser), i4.forEach(function(f) {
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
  const I = new e4.Parser({
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
      if (ct(b, f) && (R = b[f](f, g), m.attribs = g = R.attribs, R.text !== void 0 && (m.innerText = R.text), f !== R.tagName && (m.name = f = R.tagName, D[d] = R.tagName)), w && (R = w(f, g), m.attribs = g = R.attribs, f !== R.tagName && (m.name = f = R.tagName, D[d] = R.tagName)), (t.allowedTags && t.allowedTags.indexOf(f) === -1 || t.disallowedTagsMode === "recursiveEscape" && !c4(p) || t.nestingLimit != null && d >= t.nestingLimit) && (x = !0, p[d] = !0, t.disallowedTagsMode === "discard" && i.indexOf(f) !== -1 && (M = !0, F = 1), p[d] = !0), d++, x) {
        if (t.disallowedTagsMode === "discard")
          return;
        r = n, n = "";
      }
      n += "<" + f, f === "script" && (t.allowedScriptHostnames || t.allowedScriptDomains) && (m.innerText = ""), (!c || ct(c, f) || c["*"]) && Lt(g, function(N, O) {
        if (!u4.test(O)) {
          delete m.attribs[O];
          return;
        }
        let Ce = !1;
        if (!c || ct(c, f) && c[f].indexOf(O) !== -1 || c["*"] && c["*"].indexOf(O) !== -1 || ct(a, f) && a[f].test(O) || a["*"] && a["*"].test(O))
          Ce = !0;
        else if (c && c[f]) {
          for (const _ of c[f])
            if (s4(_) && _.name && _.name === O) {
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
              let _ = n4(N);
              if (_.forEach(function(T) {
                B("srcset", T.url) && (T.evil = !0);
              }), _ = Ks(_, function(T) {
                return !T.evil;
              }), _.length)
                N = a4(Ks(_, function(T) {
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
              const _ = r4(f + " {" + N + "}"), T = Z(_, t.allowedStyles);
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
const f4 = {
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
const h4 = l4, p4 = /* @__PURE__ */ Sr({
  __name: "sanitize-vue3",
  props: {
    html: { default: void 0 }
  },
  setup(s) {
    const t = s, e = _r(), n = () => {
      e.value && (e.value.innerHTML = h4(t.html));
    };
    return n(), Tr(
      () => t.html,
      () => {
        n();
      },
      { immediate: !0 }
    ), (r, o) => (Er(), Cr("div", {
      ref_key: "block",
      ref: e
    }, null, 512));
  }
}), g4 = { sanitizeVue3: p4 };
export {
  g4 as default
};
