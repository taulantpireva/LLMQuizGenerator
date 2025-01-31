import { V as Z, b as ne, c as pe } from "./VCard-PzGifVhv.js";
import { V as x, a as g } from "./VRow-DPRUVnFG.js";
import {
  c as T,
  H as v,
  I as p,
  J as o,
  A as t,
  P as E,
  K as y,
  aG as be,
  R as B,
  M as S,
  F,
  Q as L,
  L as Q,
  aH as se,
  p as O,
  m as ae,
  h as xe,
  i as Pe,
  j as H,
  l as Se,
  k as Ie,
  ab as ie,
  v as b,
  s as M,
  w as G,
  ae as Re,
  z as Y,
  ax as ue,
  ay as Te,
  a1 as N,
  q as re,
  o as ce,
  B as A,
  a as W,
  ad as Be,
  r as Ee,
  az as qe,
  D as je,
  aa as De,
  ac as $e,
  at as Fe,
  E as de,
  S as Ae,
} from "./index-C7jXg81h.js";
import {
  c as fe,
  V as ve,
  a as me,
  b as he,
} from "./VExpansionPanels-D0P-_goW.js";
import {
  h as I,
  i as U,
  v as Oe,
  g as He,
  N as Ye,
  y as Qe,
  E as Ge,
  M as Le,
  O as Xe,
  V as ee,
  j as Me,
} from "./VGrid-B1elj0Wo.js";
import { _ as Ne } from "./CodeHighlight-BWAf1a6O.js";
import { u as _e } from "./runQuizStore-CNzEgocv.js";
import { V as We } from "./index-CAdGajTq.js";
import { m as Ue, u as Je } from "./lazy-CmFuK5uI.js";
import { m as Ke, V as te, b as Ze } from "./forwardRefs-4syOH2-z.js";
import {
  m as et,
  V as J,
  a as tt,
  b as ot,
} from "./VSelectionControl-CzWoPqFI.js";
import { V as K } from "./VAlert-DxO0GYKQ.js";
import { V as lt } from "./VDialog-RlfR9ZS8.js";
import { u as nt } from "./useQuizzesStore-BgftCzj1.js";
import "./VOverlay-D5SsAUIM.js";
import "./scopeId-CFdMVFIo.js";
const ye = {
    __name: "ShowResult",
    props: {
      result: { type: Object, required: !0 },
      showButtons: { type: Boolean, required: !1, default: !0 },
    },
    emits: ["finishReview"],
    setup(e, { emit: s }) {
      const l = e,
        n = s,
        d = () => {
          console.log(l.result), n("finishReview");
        },
        u = T(() => {
          const a = l.result.correct_answers;
          return a >= 66.67 ? "#00695C" : a >= 33.34 ? "#FFB74D" : "#D32F2F";
        });
      return (a, r) => (
        v(),
        p(
          x,
          { class: "d-flex w-100 mt-2" },
          {
            default: o(() => [
              t(
                Z,
                { class: "w-100" },
                {
                  default: o(() => [
                    t(ne, null, {
                      default: o(() => [
                        t(
                          x,
                          { class: "" },
                          {
                            default: o(() => [
                              t(g, null, {
                                default: o(() => [
                                  E("h2", null, [
                                    r[0] || (r[0] = y(" You answered: ")),
                                    E(
                                      "span",
                                      { style: be({ color: u.value }) },
                                      B(e.result.correct_answers) + "%",
                                      5
                                    ),
                                    r[1] || (r[1] = y(" correctly ")),
                                  ]),
                                  r[2] ||
                                    (r[2] = E(
                                      "p",
                                      { class: "mt-2" },
                                      "You can check your answers below.",
                                      -1
                                    )),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                        t(x, null, {
                          default: o(() => [
                            t(g, null, {
                              default: o(() => [
                                r[7] ||
                                  (r[7] = E(
                                    "p",
                                    { class: "mt-2 mb-1" },
                                    "Question Details:",
                                    -1
                                  )),
                                t(fe, null, {
                                  default: o(() => [
                                    (v(!0),
                                    S(
                                      F,
                                      null,
                                      L(
                                        e.result.Answers,
                                        (f, m) => (
                                          v(),
                                          p(
                                            x,
                                            { key: m, class: "d-flex w-100" },
                                            {
                                              default: o(() => [
                                                t(
                                                  g,
                                                  { cols: "11", class: "" },
                                                  {
                                                    default: o(() => [
                                                      t(
                                                        ve,
                                                        null,
                                                        {
                                                          default: o(() => [
                                                            t(
                                                              me,
                                                              null,
                                                              {
                                                                default: o(
                                                                  () => [
                                                                    y(
                                                                      B(
                                                                        f.question_text
                                                                      ),
                                                                      1
                                                                    ),
                                                                  ]
                                                                ),
                                                                _: 2,
                                                              },
                                                              1024
                                                            ),
                                                            t(
                                                              he,
                                                              null,
                                                              {
                                                                default: o(
                                                                  () => [
                                                                    t(
                                                                      x,
                                                                      null,
                                                                      {
                                                                        default:
                                                                          o(
                                                                            () => [
                                                                              t(
                                                                                g,
                                                                                null,
                                                                                {
                                                                                  default:
                                                                                    o(
                                                                                      () =>
                                                                                        r[3] ||
                                                                                        (r[3] =
                                                                                          [
                                                                                            y(
                                                                                              "Your Answer:"
                                                                                            ),
                                                                                          ])
                                                                                    ),
                                                                                  _: 1,
                                                                                }
                                                                              ),
                                                                              t(
                                                                                g,
                                                                                null,
                                                                                {
                                                                                  default:
                                                                                    o(
                                                                                      () => [
                                                                                        y(
                                                                                          B(
                                                                                            f.option_text_from_frontend
                                                                                          ),
                                                                                          1
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  _: 2,
                                                                                },
                                                                                1024
                                                                              ),
                                                                              t(
                                                                                g,
                                                                                null,
                                                                                {
                                                                                  default:
                                                                                    o(
                                                                                      () =>
                                                                                        r[4] ||
                                                                                        (r[4] =
                                                                                          [
                                                                                            y(
                                                                                              "Correct Answer:"
                                                                                            ),
                                                                                          ])
                                                                                    ),
                                                                                  _: 1,
                                                                                }
                                                                              ),
                                                                              t(
                                                                                g,
                                                                                null,
                                                                                {
                                                                                  default:
                                                                                    o(
                                                                                      () => [
                                                                                        y(
                                                                                          B(
                                                                                            f.option_text_from_backend
                                                                                          ),
                                                                                          1
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  _: 2,
                                                                                },
                                                                                1024
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        _: 2,
                                                                      },
                                                                      1024
                                                                    ),
                                                                  ]
                                                                ),
                                                                _: 2,
                                                              },
                                                              1024
                                                            ),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                                t(
                                                  g,
                                                  {
                                                    cols: "1",
                                                    class:
                                                      "d-flex align-top justify-end mt-2",
                                                  },
                                                  {
                                                    default: o(() => [
                                                      f.correct
                                                        ? (v(),
                                                          p(
                                                            I,
                                                            {
                                                              key: 0,
                                                              disabled: "",
                                                              icon: "",
                                                              color:
                                                                "teal-darken-3",
                                                              size: "x-small",
                                                            },
                                                            {
                                                              default: o(() => [
                                                                t(
                                                                  U,
                                                                  { round: "" },
                                                                  {
                                                                    default: o(
                                                                      () =>
                                                                        r[5] ||
                                                                        (r[5] =
                                                                          [
                                                                            y(
                                                                              "mdi-check"
                                                                            ),
                                                                          ])
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                              ]),
                                                              _: 1,
                                                            }
                                                          ))
                                                        : (v(),
                                                          p(
                                                            I,
                                                            {
                                                              key: 1,
                                                              disabled: "",
                                                              icon: "",
                                                              color:
                                                                "red-darken-4",
                                                              size: "x-small",
                                                            },
                                                            {
                                                              default: o(() => [
                                                                t(
                                                                  U,
                                                                  { round: "" },
                                                                  {
                                                                    default: o(
                                                                      () =>
                                                                        r[6] ||
                                                                        (r[6] =
                                                                          [
                                                                            y(
                                                                              "mdi-close"
                                                                            ),
                                                                          ])
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                              ]),
                                                              _: 1,
                                                            }
                                                          )),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
              l.showButtons
                ? (v(),
                  p(
                    x,
                    { key: 0, class: "d-flex w-100 mt-2 justify-end" },
                    {
                      default: o(() => [
                        t(
                          g,
                          { cols: "2" },
                          {
                            default: o(() => [
                              t(
                                I,
                                {
                                  class: "w-100",
                                  color: "primary",
                                  onClick: d,
                                },
                                {
                                  default: o(
                                    () =>
                                      r[8] || (r[8] = [y(" Finish review ")])
                                  ),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }
                  ))
                : Q("", !0),
            ]),
            _: 1,
          }
        )
      );
    },
  },
  st = (e) => {
    const { touchstartX: s, touchendX: l, touchstartY: n, touchendY: d } = e,
      u = 0.5,
      a = 16;
    (e.offsetX = l - s),
      (e.offsetY = d - n),
      Math.abs(e.offsetY) < u * Math.abs(e.offsetX) &&
        (e.left && l < s - a && e.left(e), e.right && l > s + a && e.right(e)),
      Math.abs(e.offsetX) < u * Math.abs(e.offsetY) &&
        (e.up && d < n - a && e.up(e), e.down && d > n + a && e.down(e));
  };
function at(e, s) {
  var n;
  const l = e.changedTouches[0];
  (s.touchstartX = l.clientX),
    (s.touchstartY = l.clientY),
    (n = s.start) == null || n.call(s, { originalEvent: e, ...s });
}
function it(e, s) {
  var n;
  const l = e.changedTouches[0];
  (s.touchendX = l.clientX),
    (s.touchendY = l.clientY),
    (n = s.end) == null || n.call(s, { originalEvent: e, ...s }),
    st(s);
}
function ut(e, s) {
  var n;
  const l = e.changedTouches[0];
  (s.touchmoveX = l.clientX),
    (s.touchmoveY = l.clientY),
    (n = s.move) == null || n.call(s, { originalEvent: e, ...s });
}
function rt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const s = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end,
  };
  return {
    touchstart: (l) => at(l, s),
    touchend: (l) => it(l, s),
    touchmove: (l) => ut(l, s),
  };
}
function ct(e, s) {
  var r;
  const l = s.value,
    n = l != null && l.parent ? e.parentElement : e,
    d = (l == null ? void 0 : l.options) ?? { passive: !0 },
    u = (r = s.instance) == null ? void 0 : r.$.uid;
  if (!n || !u) return;
  const a = rt(s.value);
  (n._touchHandlers = n._touchHandlers ?? Object.create(null)),
    (n._touchHandlers[u] = a),
    se(a).forEach((f) => {
      n.addEventListener(f, a[f], d);
    });
}
function dt(e, s) {
  var u, a;
  const l = (u = s.value) != null && u.parent ? e.parentElement : e,
    n = (a = s.instance) == null ? void 0 : a.$.uid;
  if (!(l != null && l._touchHandlers) || !n) return;
  const d = l._touchHandlers[n];
  se(d).forEach((r) => {
    l.removeEventListener(r, d[r]);
  }),
    delete l._touchHandlers[n];
}
const ge = { mounted: ct, unmounted: dt },
  Ve = Symbol.for("vuetify:v-window"),
  we = Symbol.for("vuetify:v-window-group"),
  ke = O(
    {
      continuous: Boolean,
      nextIcon: { type: [Boolean, String, Function, Object], default: "$next" },
      prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" },
      reverse: Boolean,
      showArrows: {
        type: [Boolean, String],
        validator: (e) => typeof e == "boolean" || e === "hover",
      },
      touch: { type: [Object, Boolean], default: void 0 },
      direction: { type: String, default: "horizontal" },
      modelValue: null,
      disabled: Boolean,
      selectedClass: { type: String, default: "v-window-item--active" },
      mandatory: { type: [Boolean, String], default: "force" },
      ...ae(),
      ...xe(),
      ...Pe(),
    },
    "VWindow"
  ),
  oe = H()({
    name: "VWindow",
    directives: { Touch: ge },
    props: ke(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, s) {
      let { slots: l } = s;
      const { themeClasses: n } = Se(e),
        { isRtl: d } = Ie(),
        { t: u } = ie(),
        a = Oe(e, we),
        r = b(),
        f = T(() => (d.value ? !e.reverse : e.reverse)),
        m = M(!1),
        C = T(() => {
          const c = e.direction === "vertical" ? "y" : "x",
            z = (f.value ? !m.value : m.value) ? "-reverse" : "";
          return `v-window-${c}${z}-transition`;
        }),
        V = M(0),
        k = b(void 0),
        P = T(() =>
          a.items.value.findIndex((c) => a.selected.value.includes(c.id))
        );
      G(P, (c, _) => {
        const z = a.items.value.length,
          w = z - 1;
        z <= 2
          ? (m.value = c < _)
          : c === w && _ === 0
          ? (m.value = !0)
          : c === 0 && _ === w
          ? (m.value = !1)
          : (m.value = c < _);
      }),
        Re(Ve, {
          transition: C,
          isReversed: m,
          transitionCount: V,
          transitionHeight: k,
          rootRef: r,
        });
      const i = T(() => e.continuous || P.value !== 0),
        h = T(() => e.continuous || P.value !== a.items.value.length - 1);
      function q() {
        i.value && a.prev();
      }
      function j() {
        h.value && a.next();
      }
      const R = T(() => {
          const c = [],
            _ = {
              icon: d.value ? e.nextIcon : e.prevIcon,
              class: `v-window__${f.value ? "right" : "left"}`,
              onClick: a.prev,
              "aria-label": u("$vuetify.carousel.prev"),
            };
          c.push(
            i.value
              ? l.prev
                ? l.prev({ props: _ })
                : t(I, _, null)
              : t("div", null, null)
          );
          const z = {
            icon: d.value ? e.prevIcon : e.nextIcon,
            class: `v-window__${f.value ? "left" : "right"}`,
            onClick: a.next,
            "aria-label": u("$vuetify.carousel.next"),
          };
          return (
            c.push(
              h.value
                ? l.next
                  ? l.next({ props: z })
                  : t(I, z, null)
                : t("div", null, null)
            ),
            c
          );
        }),
        D = T(() =>
          e.touch === !1
            ? e.touch
            : {
                ...{
                  left: () => {
                    f.value ? q() : j();
                  },
                  right: () => {
                    f.value ? j() : q();
                  },
                  start: (_) => {
                    let { originalEvent: z } = _;
                    z.stopPropagation();
                  },
                },
                ...(e.touch === !0 ? {} : e.touch),
              }
        );
      return (
        Y(() =>
          ue(
            t(
              e.tag,
              {
                ref: r,
                class: [
                  "v-window",
                  {
                    "v-window--show-arrows-on-hover": e.showArrows === "hover",
                  },
                  n.value,
                  e.class,
                ],
                style: e.style,
              },
              {
                default: () => {
                  var c, _;
                  return [
                    t(
                      "div",
                      {
                        class: "v-window__container",
                        style: { height: k.value },
                      },
                      [
                        (c = l.default) == null
                          ? void 0
                          : c.call(l, { group: a }),
                        e.showArrows !== !1 &&
                          t("div", { class: "v-window__controls" }, [R.value]),
                      ]
                    ),
                    (_ = l.additional) == null
                      ? void 0
                      : _.call(l, { group: a }),
                  ];
                },
              }
            ),
            [[Te("touch"), D.value]]
          )
        ),
        { group: a }
      );
    },
  }),
  ft = O(
    {
      color: String,
      cycle: Boolean,
      delimiterIcon: { type: N, default: "$delimiter" },
      height: { type: [Number, String], default: 500 },
      hideDelimiters: Boolean,
      hideDelimiterBackground: Boolean,
      interval: {
        type: [Number, String],
        default: 6e3,
        validator: (e) => Number(e) > 0,
      },
      progress: [Boolean, String],
      verticalDelimiters: [Boolean, String],
      ...ke({ continuous: !0, mandatory: "force", showArrows: !0 }),
    },
    "VCarousel"
  ),
  vt = H()({
    name: "VCarousel",
    props: ft(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, s) {
      let { slots: l } = s;
      const n = re(e, "modelValue"),
        { t: d } = ie(),
        u = b();
      let a = -1;
      G(n, f),
        G(() => e.interval, f),
        G(
          () => e.cycle,
          (m) => {
            m ? f() : window.clearTimeout(a);
          }
        ),
        ce(r);
      function r() {
        !e.cycle ||
          !u.value ||
          (a = window.setTimeout(
            u.value.group.next,
            +e.interval > 0 ? +e.interval : 6e3
          ));
      }
      function f() {
        window.clearTimeout(a), window.requestAnimationFrame(r);
      }
      return (
        Y(() => {
          const m = oe.filterProps(e);
          return t(
            oe,
            A({ ref: u }, m, {
              modelValue: n.value,
              "onUpdate:modelValue": (C) => (n.value = C),
              class: [
                "v-carousel",
                {
                  "v-carousel--hide-delimiter-background":
                    e.hideDelimiterBackground,
                  "v-carousel--vertical-delimiters": e.verticalDelimiters,
                },
                e.class,
              ],
              style: [{ height: W(e.height) }, e.style],
            }),
            {
              default: l.default,
              additional: (C) => {
                let { group: V } = C;
                return t(F, null, [
                  !e.hideDelimiters &&
                    t(
                      "div",
                      {
                        class: "v-carousel__controls",
                        style: {
                          left:
                            e.verticalDelimiters === "left" &&
                            e.verticalDelimiters
                              ? 0
                              : "auto",
                          right: e.verticalDelimiters === "right" ? 0 : "auto",
                        },
                      },
                      [
                        V.items.value.length > 0 &&
                          t(
                            He,
                            {
                              defaults: {
                                VBtn: {
                                  color: e.color,
                                  icon: e.delimiterIcon,
                                  size: "x-small",
                                  variant: "text",
                                },
                              },
                              scoped: !0,
                            },
                            {
                              default: () => [
                                V.items.value.map((k, P) => {
                                  const i = {
                                    id: `carousel-item-${k.id}`,
                                    "aria-label": d(
                                      "$vuetify.carousel.ariaLabel.delimiter",
                                      P + 1,
                                      V.items.value.length
                                    ),
                                    class: [
                                      "v-carousel__controls__item",
                                      V.isSelected(k.id) && "v-btn--active",
                                    ],
                                    onClick: () => V.select(k.id, !0),
                                  };
                                  return l.item
                                    ? l.item({ props: i, item: k })
                                    : t(I, A(k, i), null);
                                }),
                              ],
                            }
                          ),
                      ]
                    ),
                  e.progress &&
                    t(
                      Ye,
                      {
                        class: "v-carousel__progress",
                        color:
                          typeof e.progress == "string" ? e.progress : void 0,
                        modelValue:
                          ((V.getItemIndex(n.value) + 1) /
                            V.items.value.length) *
                          100,
                      },
                      null
                    ),
                ]);
              },
              prev: l.prev,
              next: l.next,
            }
          );
        }),
        {}
      );
    },
  }),
  ze = O(
    {
      reverseTransition: { type: [Boolean, String], default: void 0 },
      transition: { type: [Boolean, String], default: void 0 },
      ...ae(),
      ...Qe(),
      ...Ue(),
    },
    "VWindowItem"
  ),
  le = H()({
    name: "VWindowItem",
    directives: { Touch: ge },
    props: ze(),
    emits: { "group:selected": (e) => !0 },
    setup(e, s) {
      let { slots: l } = s;
      const n = Be(Ve),
        d = Ge(e, we),
        { isBooted: u } = Ee();
      if (!n || !d)
        throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
      const a = M(!1),
        r = T(
          () =>
            u.value &&
            (n.isReversed.value
              ? e.reverseTransition !== !1
              : e.transition !== !1)
        );
      function f() {
        !a.value ||
          !n ||
          ((a.value = !1),
          n.transitionCount.value > 0 &&
            ((n.transitionCount.value -= 1),
            n.transitionCount.value === 0 &&
              (n.transitionHeight.value = void 0)));
      }
      function m() {
        var i;
        a.value ||
          !n ||
          ((a.value = !0),
          n.transitionCount.value === 0 &&
            (n.transitionHeight.value = W(
              (i = n.rootRef.value) == null ? void 0 : i.clientHeight
            )),
          (n.transitionCount.value += 1));
      }
      function C() {
        f();
      }
      function V(i) {
        a.value &&
          je(() => {
            !r.value ||
              !a.value ||
              !n ||
              (n.transitionHeight.value = W(i.clientHeight));
          });
      }
      const k = T(() => {
          const i = n.isReversed.value ? e.reverseTransition : e.transition;
          return r.value
            ? {
                name: typeof i != "string" ? n.transition.value : i,
                onBeforeEnter: m,
                onAfterEnter: f,
                onEnterCancelled: C,
                onBeforeLeave: m,
                onAfterLeave: f,
                onLeaveCancelled: C,
                onEnter: V,
              }
            : !1;
        }),
        { hasContent: P } = Je(e, d.isSelected);
      return (
        Y(() =>
          t(
            Le,
            { transition: k.value, disabled: !u.value },
            {
              default: () => {
                var i;
                return [
                  ue(
                    t(
                      "div",
                      {
                        class: [
                          "v-window-item",
                          d.selectedClass.value,
                          e.class,
                        ],
                        style: e.style,
                      },
                      [
                        P.value &&
                          ((i = l.default) == null ? void 0 : i.call(l)),
                      ]
                    ),
                    [[qe, d.isSelected.value]]
                  ),
                ];
              },
            }
          )
        ),
        { groupItem: d }
      );
    },
  }),
  mt = O({ ...Xe(), ...ze() }, "VCarouselItem"),
  ht = H()({
    name: "VCarouselItem",
    inheritAttrs: !1,
    props: mt(),
    setup(e, s) {
      let { slots: l, attrs: n } = s;
      Y(() => {
        const d = ee.filterProps(e),
          u = le.filterProps(e);
        return t(le, A({ class: ["v-carousel-item", e.class] }, u), {
          default: () => [t(ee, A(n, d), l)],
        });
      });
    },
  }),
  _t = O({ ...et({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"),
  yt = H()({
    name: "VRadio",
    props: _t(),
    setup(e, s) {
      let { slots: l } = s;
      return (
        Y(() => {
          const n = J.filterProps(e);
          return t(
            J,
            A(n, {
              class: ["v-radio", e.class],
              style: e.style,
              type: "radio",
            }),
            l
          );
        }),
        {}
      );
    },
  }),
  gt = O(
    {
      height: { type: [Number, String], default: "auto" },
      ...Ke(),
      ...De(tt(), ["multiple"]),
      trueIcon: { type: N, default: "$radioOn" },
      falseIcon: { type: N, default: "$radioOff" },
      type: { type: String, default: "radio" },
    },
    "VRadioGroup"
  ),
  Vt = H()({
    name: "VRadioGroup",
    inheritAttrs: !1,
    props: gt(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, s) {
      let { attrs: l, slots: n } = s;
      const d = $e(),
        u = T(() => e.id || `radio-group-${d}`),
        a = re(e, "modelValue");
      return (
        Y(() => {
          const [r, f] = Fe(l),
            m = te.filterProps(e),
            C = J.filterProps(e),
            V = n.label
              ? n.label({ label: e.label, props: { for: u.value } })
              : e.label;
          return t(
            te,
            A({ class: ["v-radio-group", e.class], style: e.style }, r, m, {
              modelValue: a.value,
              "onUpdate:modelValue": (k) => (a.value = k),
              id: u.value,
            }),
            {
              ...n,
              default: (k) => {
                let { id: P, messagesId: i, isDisabled: h, isReadonly: q } = k;
                return t(F, null, [
                  V && t(Ze, { id: P.value }, { default: () => [V] }),
                  t(
                    ot,
                    A(
                      C,
                      {
                        id: P.value,
                        "aria-describedby": i.value,
                        defaultsTarget: "VRadio",
                        trueIcon: e.trueIcon,
                        falseIcon: e.falseIcon,
                        type: e.type,
                        disabled: h.value,
                        readonly: q.value,
                        "aria-labelledby": V ? P.value : void 0,
                        multiple: !1,
                      },
                      f,
                      {
                        modelValue: a.value,
                        "onUpdate:modelValue": (j) => (a.value = j),
                      }
                    ),
                    n
                  ),
                ]);
              },
            }
          );
        }),
        {}
      );
    },
  }),
  wt = { class: "mb-3 mt-3" },
  kt = { class: "d-flex justify-center" },
  zt = { key: 0 },
  Ct = {
    __name: "RunQuiz",
    emits: ["cancel", "finish"],
    setup(e, { emit: s }) {
      const l = s,
        n = _e(),
        d = de(),
        u = b(n.quiz);
      u.value.questions.forEach((D) => {
        D.selectedOption = null;
      });
      const a = b(0),
        r = T(() => a.value === u.value.questions.length - 1),
        f = b(!1),
        m = b(""),
        C = b(!1),
        V = b(!1),
        k = b(""),
        P = () => {
          f.value = !0;
        },
        i = () => {
          f.value = !1;
        },
        h = async () => {
          if (u.value.questions.filter((_) => !_.selectedOption).length > 0) {
            (C.value = !0),
              (m.value =
                "Please answer all questions before finishing the quiz."),
              setTimeout(() => {
                (C.value = !1), (m.value = "");
              }, 3e3);
            return;
          }
          const c = u.value.questions.map((_) => {
            const z = _.options.find((w) => w.option_id === _.selectedOption);
            return {
              quiz_id: u.value.quiz_id,
              question_id: _.question_id,
              option_id: _.selectedOption,
              option_text: z ? z.option : "",
            };
          });
          try {
            const _ = {
                quiz_id: c[0].quiz_id,
                user_id: d.user.id,
                class_id: d.user.class_id,
                role: d.user.role,
                Answers: c.map(($) => ({
                  question_id: $.question_id,
                  option_id: $.option_id,
                  option_text: $.option_text,
                })),
              },
              z = await fetch("/validate_quiz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(_),
              });
            if (!z.ok) {
              const $ = await z.json();
              console.error("Error validating quiz:", $);
              return;
            }
            const w = await z.json();
            (k.value = w), (V.value = !0);
          } catch (_) {
            console.error("Network error:", _);
          }
        },
        q = () => {
          (f.value = !1), h();
        },
        j = () => {
          l("cancel");
        },
        R = () => {
          l("finish");
        };
      return (D, c) => {
        const _ = Ne,
          z = ye;
        return (
          v(),
          S("div", null, [
            V.value
              ? (v(),
                p(
                  x,
                  { key: 1 },
                  {
                    default: o(() => [
                      t(z, { result: k.value, onFinishReview: R }, null, 8, [
                        "result",
                      ]),
                    ]),
                    _: 1,
                  }
                ))
              : (v(),
                p(
                  x,
                  { key: 0 },
                  {
                    default: o(() => [
                      E("h3", wt, B(u.value.title), 1),
                      t(
                        vt,
                        {
                          modelValue: a.value,
                          "onUpdate:modelValue":
                            c[0] || (c[0] = (w) => (a.value = w)),
                          progress: "primary",
                          class: "pt-2 h-100",
                          "hide-delimiters": "",
                          continuous: !1,
                        },
                        {
                          prev: o(({ props: w }) => [
                            t(
                              I,
                              {
                                color: "grey-darken-2",
                                variant: "elevated",
                                onClick: w.onClick,
                              },
                              {
                                default: o(
                                  () => c[2] || (c[2] = [y("Previous")])
                                ),
                                _: 2,
                              },
                              1032,
                              ["onClick"]
                            ),
                          ]),
                          next: o(({ props: w }) => [
                            t(
                              I,
                              {
                                color: "grey-darken-2",
                                variant: "elevated",
                                onClick: w.onClick,
                              },
                              {
                                default: o(() => c[3] || (c[3] = [y("Next")])),
                                _: 2,
                              },
                              1032,
                              ["onClick"]
                            ),
                          ]),
                          default: o(() => [
                            E("div", kt, [
                              (v(!0),
                              S(
                                F,
                                null,
                                L(
                                  u.value.questions,
                                  (w, $) => (
                                    v(),
                                    p(
                                      ht,
                                      { key: $, class: "w-75" },
                                      {
                                        default: o(() => [
                                          E("p", null, B(w.question), 1),
                                          (v(),
                                          p(
                                            Vt,
                                            {
                                              modelValue: w.selectedOption,
                                              "onUpdate:modelValue": (X) =>
                                                (w.selectedOption = X),
                                              key: $,
                                              class: "mt-5 ml-10",
                                            },
                                            {
                                              default: o(() => [
                                                (v(!0),
                                                S(
                                                  F,
                                                  null,
                                                  L(
                                                    w.options,
                                                    (X, Ce) => (
                                                      v(),
                                                      p(
                                                        yt,
                                                        {
                                                          key: Ce,
                                                          label: X.option,
                                                          value: X.option_id,
                                                        },
                                                        null,
                                                        8,
                                                        ["label", "value"]
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                            ]
                                          )),
                                          w.code
                                            ? (v(),
                                              S("div", zt, [
                                                c[4] ||
                                                  (c[4] = E(
                                                    "p",
                                                    { class: "mt-3" },
                                                    [
                                                      E(
                                                        "strong",
                                                        null,
                                                        "Code:"
                                                      ),
                                                    ],
                                                    -1
                                                  )),
                                                t(
                                                  _,
                                                  { code: w.code },
                                                  null,
                                                  8,
                                                  ["code"]
                                                ),
                                              ]))
                                            : Q("", !0),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                      t(
                        x,
                        { class: "w-100 ml-1" },
                        {
                          default: o(() => [
                            t(
                              g,
                              { cols: "6", class: "d-flex justify-start" },
                              {
                                default: o(() => [
                                  t(
                                    I,
                                    {
                                      color: "red-lighten-1",
                                      class: "w-25",
                                      onClick: j,
                                    },
                                    {
                                      default: o(
                                        () => c[5] || (c[5] = [y("Cancel")])
                                      ),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            t(
                              g,
                              { cols: "6", class: "d-flex justify-end" },
                              {
                                default: o(() => [
                                  r.value
                                    ? (v(),
                                      p(
                                        I,
                                        {
                                          key: 0,
                                          color: "primary",
                                          class: "w-25",
                                          onClick: P,
                                        },
                                        {
                                          default: o(
                                            () => c[6] || (c[6] = [y("Finish")])
                                          ),
                                          _: 1,
                                        }
                                      ))
                                    : Q("", !0),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      t(
                        x,
                        { class: "w-100" },
                        {
                          default: o(() => [
                            t(g, null, {
                              default: o(() => [
                                t(We, null, {
                                  default: o(() => [
                                    C.value
                                      ? (v(),
                                        p(
                                          K,
                                          { key: 0, type: "error" },
                                          {
                                            default: o(() => [
                                              y(B(m.value), 1),
                                            ]),
                                            _: 1,
                                          }
                                        ))
                                      : Q("", !0),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        }
                      ),
                      t(
                        lt,
                        {
                          modelValue: f.value,
                          "onUpdate:modelValue":
                            c[1] || (c[1] = (w) => (f.value = w)),
                          persistent: "",
                          class: "w-25",
                        },
                        {
                          default: o(() => [
                            t(Z, null, {
                              default: o(() => [
                                t(
                                  ne,
                                  { class: "pt-7" },
                                  {
                                    default: o(
                                      () =>
                                        c[7] ||
                                        (c[7] = [
                                          y(
                                            " Are you sure you want to finish the quiz? Once confirmed, you cannot go back and change your answers. "
                                          ),
                                        ])
                                    ),
                                    _: 1,
                                  }
                                ),
                                t(pe, null, {
                                  default: o(() => [
                                    t(
                                      x,
                                      { class: "d-flex ma-0" },
                                      {
                                        default: o(() => [
                                          t(g, null, {
                                            default: o(() => [
                                              t(
                                                I,
                                                {
                                                  color: "red-lighten-1",
                                                  variant: "elevated",
                                                  class: "w-100",
                                                  onClick: i,
                                                },
                                                {
                                                  default: o(
                                                    () =>
                                                      c[8] ||
                                                      (c[8] = [y("Cancel")])
                                                  ),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                            _: 1,
                                          }),
                                          t(g, null, {
                                            default: o(() => [
                                              t(
                                                I,
                                                {
                                                  color: "primary",
                                                  class: "w-100",
                                                  variant: "elevated",
                                                  onClick: q,
                                                },
                                                {
                                                  default: o(
                                                    () =>
                                                      c[9] ||
                                                      (c[9] = [y("Confirm")])
                                                  ),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                    ]),
                    _: 1,
                  }
                )),
          ])
        );
      };
    },
  },
  pt = { key: 0, class: "d-flex align-center justify-center" },
  bt = { key: 1 },
  xt = { key: 0, class: "d-flex align-center justify-center" },
  Pt = { key: 1 },
  St = { key: 0 },
  It = { key: 1 },
  Rt = { key: 2 },
  Mt = {
    __name: "run",
    setup(e) {
      const s = nt(),
        l = _e(),
        n = b(s.quizzes),
        d = b(!0),
        u = b(!0),
        a = b(!0),
        r = b([]),
        f = b(!1),
        m = de();
      G(
        () => s.quizzes,
        (i) => {
          n.value = i;
        },
        { immediate: !0 }
      ),
        ce(async () => {
          if (m.user.class_id) {
            if (s.quizzes.length === 0)
              try {
                const i = await fetch(
                  `/getAllQuizzesForRun?class_id=${m.user.class_id}`,
                  {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                  }
                );
                if (i.ok) {
                  const h = await i.json();
                  s.setQuizzes(h),
                    s.quizzes.length === 0 &&
                      (u.value =
                        "No published quizzes for this class. Please contact your teacher.");
                } else {
                  const h = await i.json();
                  console.error("Failed to load quizzes:", h.error),
                    (u.value = "Failed to load quizzes: " + h.error);
                }
              } catch (i) {
                console.error("Error fetching quizzes:", i),
                  (u.value = "Error fetching quizzes: " + i);
              }
          } else if (!m.user.class_id && m.user.role === 1)
            try {
              const i = await fetch("/getAllQuizzes", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });
              if (i.ok) {
                const h = await i.json();
                s.setQuizzes(h), (n.value = h);
              } else {
                const h = await i.json();
                u.value = "Failed to load quizzes: " + h.error;
              }
            } catch (i) {
              u.value = "Error fetching quizzes: " + i.message;
            }
          else
            u.value =
              "You are not assigned to a class. Please contact your teacher.";
          V();
        });
      const C = (i) => {
          (f.value = !0), l.setQuiz(i);
        },
        V = async () => {
          try {
            const i = await fetch(`/get_quiz_history/${m.user.id}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
            if (i.ok) {
              const h = await i.json();
              console.log(h),
                (r.value = h),
                h.length === 0 && (a.value = "No history found for user.");
            } else {
              const h = await i.json();
              console.error("Failed to load history:", h.error),
                (a.value = "Failed to load history: " + h.error);
            }
          } catch (i) {
            console.error("Error fetching quizzes:", i),
              (a.value = "Error fetching history: " + i);
          }
          d.value = !1;
        },
        k = () => {
          (f.value = !1), l.reset();
        },
        P = () => {
          (f.value = !1), (d.value = !0), l.reset(), V();
        };
      return (i, h) => {
        const q = Ct,
          j = ye;
        return (
          v(),
          S("div", null, [
            h[1] || (h[1] = E("h1", { class: "mb-3" }, "Run", -1)),
            d.value
              ? (v(),
                S("div", pt, [
                  t(Me, {
                    color: "blue-lighten-3",
                    size: 66,
                    indeterminate: "",
                  }),
                ]))
              : (v(),
                S("div", bt, [
                  n.value.length === 0 && !d.value
                    ? (v(),
                      S("div", xt, [
                        t(
                          K,
                          { type: "warning" },
                          { default: o(() => [y(B(u.value), 1)]), _: 1 }
                        ),
                      ]))
                    : (v(),
                      S("div", Pt, [
                        Ae(l).quiz
                          ? (v(),
                            S("div", It, [t(q, { onCancel: k, onFinish: P })]))
                          : (v(),
                            S("div", St, [
                              (v(!0),
                              S(
                                F,
                                null,
                                L(
                                  n.value,
                                  (R) => (
                                    v(),
                                    p(
                                      x,
                                      { key: R.quiz_id },
                                      {
                                        default: o(() => [
                                          t(
                                            g,
                                            { cols: "11" },
                                            {
                                              default: o(() => [
                                                t(
                                                  Z,
                                                  { title: R.title },
                                                  null,
                                                  8,
                                                  ["title"]
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                          t(
                                            g,
                                            {
                                              cols: "1",
                                              class:
                                                "d-flex align-center justify-center",
                                            },
                                            {
                                              default: o(() => [
                                                t(
                                                  I,
                                                  {
                                                    color: "secondary",
                                                    onClick: (D) => C(R),
                                                  },
                                                  {
                                                    default: o(() => [
                                                      t(U, {
                                                        icon: "mdi-play",
                                                      }),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ["onClick"]
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    )
                                  )
                                ),
                                128
                              )),
                            ])),
                      ])),
                  f.value
                    ? Q("", !0)
                    : (v(),
                      S("div", Rt, [
                        t(
                          x,
                          { class: "mt-5" },
                          {
                            default: o(() => [
                              t(
                                g,
                                { cols: "12" },
                                {
                                  default: o(
                                    () =>
                                      h[0] ||
                                      (h[0] = [E("h3", null, "History", -1)])
                                  ),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        r.value.length === 0
                          ? (v(),
                            p(
                              x,
                              { key: 0 },
                              {
                                default: o(() => [
                                  t(g, null, {
                                    default: o(() => [
                                      t(
                                        K,
                                        { type: "info" },
                                        {
                                          default: o(() => [y(B(a.value), 1)]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }
                            ))
                          : (v(),
                            p(
                              x,
                              { key: 1 },
                              {
                                default: o(() => [
                                  t(g, null, {
                                    default: o(() => [
                                      t(
                                        fe,
                                        { flat: "" },
                                        {
                                          default: o(() => [
                                            (v(!0),
                                            S(
                                              F,
                                              null,
                                              L(
                                                r.value,
                                                (R, D) => (
                                                  v(),
                                                  p(
                                                    ve,
                                                    { key: D, class: "mb-2" },
                                                    {
                                                      default: o(() => [
                                                        t(
                                                          me,
                                                          null,
                                                          {
                                                            default: o(() => [
                                                              t(
                                                                x,
                                                                null,
                                                                {
                                                                  default: o(
                                                                    () => [
                                                                      t(
                                                                        g,
                                                                        null,
                                                                        {
                                                                          default:
                                                                            o(
                                                                              () => [
                                                                                y(
                                                                                  "Title: " +
                                                                                    B(
                                                                                      R.quiz_title
                                                                                    ),
                                                                                  1
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          _: 2,
                                                                        },
                                                                        1024
                                                                      ),
                                                                      t(
                                                                        g,
                                                                        null,
                                                                        {
                                                                          default:
                                                                            o(
                                                                              () => [
                                                                                y(
                                                                                  "Run Date: " +
                                                                                    B(
                                                                                      R.created_at
                                                                                    ),
                                                                                  1
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          _: 2,
                                                                        },
                                                                        1024
                                                                      ),
                                                                      t(
                                                                        g,
                                                                        null,
                                                                        {
                                                                          default:
                                                                            o(
                                                                              () => [
                                                                                y(
                                                                                  "Result: " +
                                                                                    B(
                                                                                      R.correct_answers
                                                                                    ) +
                                                                                    "%",
                                                                                  1
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          _: 2,
                                                                        },
                                                                        1024
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _: 2,
                                                                },
                                                                1024
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1024
                                                        ),
                                                        t(
                                                          he,
                                                          null,
                                                          {
                                                            default: o(() => [
                                                              t(
                                                                j,
                                                                {
                                                                  result: R,
                                                                  showButtons:
                                                                    !1,
                                                                },
                                                                null,
                                                                8,
                                                                ["result"]
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1024
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }
                            )),
                      ])),
                ])),
          ])
        );
      };
    },
  };
export { Mt as default };
