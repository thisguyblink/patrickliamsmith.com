import { s as x, n as m } from '../chunks/scheduler.BvLojk_z.js';
import {
	S as D,
	i as I,
	e as f,
	c as r,
	d as u,
	g as h,
	m as v,
	n as p,
	j as b,
	k as d,
	o as V,
	b as j,
	s as w,
	f as A,
	h as C
} from '../chunks/index.B6zH3cPZ.js';
function g(c) {
	return (c == null ? void 0 : c.length) !== void 0 ? c : Array.from(c);
}
function _(c, t, n) {
	const a = c.slice();
	return (a[1] = t[n]), (a[3] = n), a;
}
function E(c) {
	let t,
		n,
		a = c[1] + '',
		l,
		s;
	return {
		c() {
			(t = f('div')), (n = f('p')), (l = j(a)), (s = w()), this.h();
		},
		l(o) {
			t = r(o, 'DIV', { class: !0, style: !0 });
			var e = u(t);
			n = r(e, 'P', { class: !0 });
			var i = u(n);
			(l = A(i, a)), i.forEach(h), (s = C(e)), e.forEach(h), this.h();
		},
		h() {
			v(n, 'class', 'svelte-1veoa60'),
				v(t, 'class', 'circleObject svelte-1veoa60'),
				p(t, '--i', c[3]);
		},
		m(o, e) {
			b(o, t, e), d(t, n), d(n, l), d(t, s);
		},
		p: m,
		d(o) {
			o && h(t);
		}
	};
}
function P(c) {
	let t,
		n,
		a = g(c[0]),
		l = [];
	for (let s = 0; s < a.length; s += 1) l[s] = E(_(c, a, s));
	return {
		c() {
			(t = f('div')), (n = f('div'));
			for (let s = 0; s < l.length; s += 1) l[s].c();
			this.h();
		},
		l(s) {
			t = r(s, 'DIV', { class: !0 });
			var o = u(t);
			n = r(o, 'DIV', { class: !0, style: !0 });
			var e = u(n);
			for (let i = 0; i < l.length; i += 1) l[i].l(e);
			e.forEach(h), o.forEach(h), this.h();
		},
		h() {
			v(n, 'class', 'circle svelte-1veoa60'),
				p(n, '--total', c[0].length),
				p(n, '--radius', '120px'),
				v(t, 'class', 'main-page svelte-1veoa60');
		},
		m(s, o) {
			b(s, t, o), d(t, n);
			for (let e = 0; e < l.length; e += 1) l[e] && l[e].m(n, null);
		},
		p(s, [o]) {
			if (o & 1) {
				a = g(s[0]);
				let e;
				for (e = 0; e < a.length; e += 1) {
					const i = _(s, a, e);
					l[e] ? l[e].p(i, o) : ((l[e] = E(i)), l[e].c(), l[e].m(n, null));
				}
				for (; e < l.length; e += 1) l[e].d(1);
				l.length = a.length;
			}
		},
		i: m,
		o: m,
		d(s) {
			s && h(t), V(l, s);
		}
	};
}
function S(c) {
	return [['A', 'B', 'C', 'D', 'E', 'F']];
}
class y extends D {
	constructor(t) {
		super(), I(this, t, S, P, x, {});
	}
}
export { y as component };
