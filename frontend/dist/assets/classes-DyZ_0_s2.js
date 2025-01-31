import { u as V } from "./useClassesStore-DMHZXVuX.js";
import { _ as Q } from "./index-CAdGajTq.js";
import { b as N, V as S, c as I } from "./VCard-PzGifVhv.js";
import { V as u, a as r } from "./VRow-DPRUVnFG.js";
import { V as P, a as $, b as q } from "./VList-BLDUHzcR.js";
import { h as z, i as T } from "./VGrid-B1elj0Wo.js";
import {
  H as d,
  I as g,
  J as l,
  A as s,
  K as i,
  M as y,
  F as k,
  Q as w,
  R as x,
  v as b,
  c as O,
  P as D,
  B as J,
  o as B,
} from "./index-C7jXg81h.js";
import { V as L } from "./VTextField-C1W9uRpE.js";
import { V as M, a as R, b as G, c as H } from "./VExpansionPanels-D0P-_goW.js";
import { V as A } from "./VDialog-RlfR9ZS8.js";
import "./forwardRefs-4syOH2-z.js";
import "./lazy-CmFuK5uI.js";
import "./VOverlay-D5SsAUIM.js";
import "./scopeId-CFdMVFIo.js";
const K = {
  props: {
    classId: { type: Number, required: !0 },
    className: { type: String, required: !0 },
    classUsers: { type: Array, required: !0 },
  },
  data() {
    return { users: [] };
  },
  computed: {
    currentClassUsers() {
      const e = V().classes.find((o) => o.class_id === this.classId);
      return e ? e.users : [];
    },
  },
  mounted() {
    this.getUsersNotInClass();
  },
  methods: {
    async getUsersNotInClass() {
      try {
        const t = await fetch(
          `/get_all_users_for_class?class_id=${this.classId}`
        );
        if (t.ok) {
          const e = await t.json();
          this.users = e.users;
        } else {
          const e = await t.json();
          console.error("Failed to fetch users:", e.error);
        }
      } catch (t) {
        console.error("Error fetching users:", t);
      }
    },
    async addUserToClass(t) {
      try {
        const e = await fetch("/add_user_to_class", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ class_id: this.classId, user_id: t.id }),
        });
        if (!e.ok) {
          const a = await e.json();
          console.error("Failed to add user to class:", a.error);
          return;
        }
        V().addUserToClass(this.classId, {
          user_id: t.id,
          username: t.username,
        }),
          (this.users = this.users.filter((a) => a.id !== t.id)),
          console.log(`User ${t.username} added to the class.`);
      } catch (e) {
        console.error("Error adding user to class on server:", e);
      }
    },
  },
};
function W(t, e, o, a, p, h) {
  return (
    d(),
    g(
      S,
      { title: o.className },
      {
        default: l(() => [
          s(N, null, {
            default: l(() => [
              s(u, null, {
                default: l(() => [
                  s(r, null, {
                    default: l(
                      () => e[1] || (e[1] = [i("Students in class:")])
                    ),
                    _: 1,
                  }),
                ]),
                _: 1,
              }),
              s(
                u,
                { class: "d-flex w-100 mb-2" },
                {
                  default: l(() => [
                    s(P, null, {
                      default: l(() => [
                        (d(!0),
                        y(
                          k,
                          null,
                          w(
                            o.classUsers,
                            (c, v) => (
                              d(),
                              g($, { key: v, title: c.username }, null, 8, [
                                "title",
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
              s(q, { class: "mb-2" }),
              s(
                u,
                { class: "mt-2" },
                {
                  default: l(() => [
                    s(
                      r,
                      { cols: "12" },
                      {
                        default: l(
                          () => e[2] || (e[2] = [i("Students not in class:")])
                        ),
                        _: 1,
                      }
                    ),
                    (d(!0),
                    y(
                      k,
                      null,
                      w(
                        p.users,
                        (c) => (
                          d(),
                          g(
                            r,
                            { cols: "4", key: c.id },
                            {
                              default: l(() => [
                                s(
                                  S,
                                  { variant: "tonal" },
                                  {
                                    default: l(() => [
                                      s(
                                        N,
                                        null,
                                        {
                                          default: l(() => [
                                            s(
                                              u,
                                              null,
                                              {
                                                default: l(() => [
                                                  s(
                                                    r,
                                                    {
                                                      cols: "10",
                                                      class:
                                                        "d-flex align-center",
                                                    },
                                                    {
                                                      default: l(() => [
                                                        i(x(c.username), 1),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  ),
                                                  s(
                                                    r,
                                                    {
                                                      cols: "2",
                                                      class:
                                                        "d-flex justify-end",
                                                    },
                                                    {
                                                      default: l(() => [
                                                        s(
                                                          z,
                                                          {
                                                            variant: "elevated",
                                                            color: "secondary",
                                                            size: "small",
                                                            onClick: (v) =>
                                                              h.addUserToClass(
                                                                c
                                                              ),
                                                          },
                                                          {
                                                            default: l(() => [
                                                              s(T, null, {
                                                                default: l(
                                                                  () =>
                                                                    e[3] ||
                                                                    (e[3] = [
                                                                      i(
                                                                        "mdi-plus"
                                                                      ),
                                                                    ])
                                                                ),
                                                                _: 1,
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
          s(
            I,
            { class: "pr-6 pb-5" },
            {
              default: l(() => [
                s(
                  u,
                  { class: "d-flex justify-end" },
                  {
                    default: l(() => [
                      s(
                        r,
                        { cols: "2" },
                        {
                          default: l(() => [
                            s(
                              z,
                              {
                                variant: "elevated",
                                color: "grey-darken-3",
                                class: "w-100",
                                onClick:
                                  e[0] || (e[0] = (c) => t.$emit("cancel")),
                              },
                              {
                                default: l(
                                  () => e[4] || (e[4] = [i(" Close ")])
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
                ),
              ]),
              _: 1,
            }
          ),
        ]),
        _: 1,
      },
      8,
      ["title"]
    )
  );
}
const X = Q(K, [["render", W]]),
  Y = {
    props: {
      classId: { type: Number, required: !0 },
      className: { type: String, required: !0 },
      classQuizzes: { type: Array, required: !0 },
    },
    data() {
      return { quizzes: [] };
    },
    computed: {
      currentClassQuizzes() {
        const e = V().classes.find((o) => o.class_id === this.classId);
        return e ? e.quizzes : [];
      },
    },
    mounted() {
      this.getQuizzesNotInClass();
    },
    methods: {
      async getQuizzesNotInClass() {
        try {
          const t = await fetch(
            `/get_all_quizzes_for_class?class_id=${this.classId}`
          );
          if (t.ok) {
            const e = await t.json();
            this.quizzes = e.quizzes;
          } else {
            const e = await t.json();
            console.error("Failed to fetch quizzes:", e.error);
          }
        } catch (t) {
          console.error("Error fetching quizzes:", t);
        }
      },
      async addQuizToClass(t) {
        try {
          const e = await fetch("/add_quiz_to_class", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                class_id: this.classId,
                quiz_id: t.quiz_id,
              }),
            }),
            o = await e.json();
          if (!e.ok) {
            console.error("Error adding quiz to class:", o.error);
            return;
          }
          V().addQuizToClass(this.classId, {
            quiz_id: t.quiz_id,
            title: t.title,
          }),
            (this.quizzes = this.quizzes.filter(
              (p) => p.quiz_id !== t.quiz_id
            ));
        } catch (e) {
          console.error("Error adding quiz to class:", e);
        }
      },
    },
  };
function Z(t, e, o, a, p, h) {
  return (
    d(),
    g(
      S,
      { title: o.className },
      {
        default: l(() => [
          s(N, null, {
            default: l(() => [
              s(u, null, {
                default: l(() => [
                  s(r, null, {
                    default: l(
                      () => e[1] || (e[1] = [i("Quizzes for class:")])
                    ),
                    _: 1,
                  }),
                ]),
                _: 1,
              }),
              s(
                u,
                { class: "d-flex w-100 mb-2" },
                {
                  default: l(() => [
                    s(P, null, {
                      default: l(() => [
                        (d(!0),
                        y(
                          k,
                          null,
                          w(
                            o.classQuizzes,
                            (c, v) => (
                              d(),
                              g($, { key: v, title: c.title }, null, 8, [
                                "title",
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
              s(q, { class: "mb-2" }),
              s(
                u,
                { class: "mt-2" },
                {
                  default: l(() => [
                    s(
                      r,
                      { cols: "12" },
                      {
                        default: l(
                          () => e[2] || (e[2] = [i("Available quizzes:")])
                        ),
                        _: 1,
                      }
                    ),
                    (d(!0),
                    y(
                      k,
                      null,
                      w(
                        p.quizzes,
                        (c) => (
                          d(),
                          g(
                            r,
                            { cols: "6", key: c.id },
                            {
                              default: l(() => [
                                s(
                                  S,
                                  { variant: "tonal" },
                                  {
                                    default: l(() => [
                                      s(
                                        N,
                                        null,
                                        {
                                          default: l(() => [
                                            s(
                                              u,
                                              null,
                                              {
                                                default: l(() => [
                                                  s(
                                                    r,
                                                    {
                                                      cols: "10",
                                                      class:
                                                        "d-flex align-center",
                                                    },
                                                    {
                                                      default: l(() => [
                                                        i(x(c.title), 1),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  ),
                                                  s(
                                                    r,
                                                    {
                                                      cols: "2",
                                                      class:
                                                        "d-flex justify-end",
                                                    },
                                                    {
                                                      default: l(() => [
                                                        s(
                                                          z,
                                                          {
                                                            variant: "elevated",
                                                            color: "secondary",
                                                            size: "small",
                                                            onClick: (v) =>
                                                              h.addQuizToClass(
                                                                c
                                                              ),
                                                          },
                                                          {
                                                            default: l(() => [
                                                              s(T, null, {
                                                                default: l(
                                                                  () =>
                                                                    e[3] ||
                                                                    (e[3] = [
                                                                      i(
                                                                        "mdi-plus"
                                                                      ),
                                                                    ])
                                                                ),
                                                                _: 1,
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
          s(
            I,
            { class: "pr-6 pb-5" },
            {
              default: l(() => [
                s(
                  u,
                  { class: "d-flex justify-end" },
                  {
                    default: l(() => [
                      s(
                        r,
                        { cols: "2" },
                        {
                          default: l(() => [
                            s(
                              z,
                              {
                                variant: "elevated",
                                color: "grey-darken-3",
                                class: "w-100",
                                onClick:
                                  e[0] || (e[0] = (c) => t.$emit("cancel")),
                              },
                              {
                                default: l(
                                  () => e[4] || (e[4] = [i(" Close ")])
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
                ),
              ]),
              _: 1,
            }
          ),
        ]),
        _: 1,
      },
      8,
      ["title"]
    )
  );
}
const ss = Q(Y, [["render", Z]]),
  es = {
    setup() {
      const t = b(""),
        e = b(!1),
        o = V(),
        a = b(null),
        p = b(null),
        h = b(null),
        c = O(() => o.classes);
      return {
        classInput: t,
        dialog: e,
        classes: c,
        selectedClass: a,
        selectedClassName: p,
        selectedClassUsers: h,
        openEditDialog: (_, f, m) => {
          (e.value = !0), (a.value = _), (p.value = f), (h.value = m);
        },
        closeDialog: () => {
          (e.value = !1), (a.value = null), (p.value = null), (h.value = null);
        },
        addClass: async () => {
          if (t.value)
            try {
              const _ = await fetch("/add_class", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ class_name: t.value }),
              });
              if (_.ok) {
                console.log(o.classes);
                const f = await _.json();
                o.addClass(f.class), (t.value = "");
              } else {
                const f = await _.json();
                console.error("Failed to add class:", f.error);
              }
            } catch (_) {
              console.error("Error adding class:", _);
            }
        },
        removeUserFromClass: async (_, f) => {
          try {
            const m = await fetch("/add_user_to_class", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ class_id: null, user_id: f }),
            });
            if (m.ok) o.removeUserFromClass(_, f);
            else {
              const E = await m.json();
              console.error("Error: ", E.error);
            }
          } catch (m) {
            console.error("Error removing student:", m);
          }
        },
        deleteClass: async (_) => {
          try {
            const f = await fetch("/deleteClass", {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ class_id: _ }),
            });
            if (f.ok) o.removeClass(_);
            else {
              const m = await f.json();
              console.error("Error: ", m.error);
            }
          } catch (f) {
            console.error("Error removing class:", f);
          }
        },
        removeQuizFromClass: async (_, f) => {
          try {
            const m = await fetch("/deleteQuizFromClass", {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ class_id: _, quiz_id: f }),
            });
            if (m.ok) {
              const E = await m.json();
              console.log(E.message), o.removeQuizFromClass(_, f);
            } else {
              const E = await m.json();
              console.error(E.error);
            }
          } catch (m) {
            console.error("Error during the request:", m);
          }
        },
      };
    },
  },
  ls = { key: 0 },
  ts = { key: 2 };
function as(t, e, o, a, p, h) {
  const c = ss,
    v = X;
  return (
    d(),
    y("div", null, [
      s(u, null, {
        default: l(() => [
          s(
            r,
            { cols: "10" },
            {
              default: l(() => [
                s(
                  L,
                  {
                    modelValue: a.classInput,
                    "onUpdate:modelValue":
                      e[0] || (e[0] = (n) => (a.classInput = n)),
                    label: "Enter class name",
                    color: "secondary",
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
              ]),
              _: 1,
            }
          ),
          s(
            r,
            { cols: "2", class: "mt-2" },
            {
              default: l(() => [
                s(
                  z,
                  {
                    disabled: !a.classInput,
                    color: "secondary",
                    onClick: a.addClass,
                    class: "w-100",
                  },
                  {
                    default: l(() => e[2] || (e[2] = [i(" Add Class ")])),
                    _: 1,
                  },
                  8,
                  ["disabled", "onClick"]
                ),
              ]),
              _: 1,
            }
          ),
        ]),
        _: 1,
      }),
      s(H, null, {
        default: l(() => [
          (d(!0),
          y(
            k,
            null,
            w(
              a.classes,
              (n, U) => (
                d(),
                g(
                  u,
                  { key: U, class: "d-flex w-100" },
                  {
                    default: l(() => [
                      s(
                        r,
                        { cols: "12" },
                        {
                          default: l(() => [
                            s(
                              M,
                              null,
                              {
                                default: l(() => [
                                  s(
                                    R,
                                    null,
                                    {
                                      default: l(() => [
                                        i(" Class: " + x(n.class_name), 1),
                                      ]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                  s(
                                    G,
                                    null,
                                    {
                                      default: l(() => [
                                        e[7] ||
                                          (e[7] = D(
                                            "p",
                                            { class: "mb-5" },
                                            "Students:",
                                            -1
                                          )),
                                        n.users.length === 0
                                          ? (d(),
                                            y(
                                              "span",
                                              ls,
                                              "No students in this class"
                                            ))
                                          : (d(!0),
                                            y(
                                              k,
                                              { key: 1 },
                                              w(
                                                n.users,
                                                (C, j) => (
                                                  d(),
                                                  g(
                                                    u,
                                                    { key: j },
                                                    {
                                                      default: l(() => [
                                                        s(q),
                                                        s(
                                                          r,
                                                          { cols: "11" },
                                                          {
                                                            default: l(() => [
                                                              i(
                                                                x(C.username),
                                                                1
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1024
                                                        ),
                                                        s(
                                                          r,
                                                          {
                                                            cols: "1",
                                                            class:
                                                              "d-flex justify-end",
                                                          },
                                                          {
                                                            default: l(() => [
                                                              s(
                                                                z,
                                                                {
                                                                  color:
                                                                    "red-lighten-2",
                                                                  onClick: (
                                                                    F
                                                                  ) =>
                                                                    a.removeUserFromClass(
                                                                      n.class_id,
                                                                      C.user_id
                                                                    ),
                                                                },
                                                                {
                                                                  default: l(
                                                                    () => [
                                                                      s(
                                                                        T,
                                                                        null,
                                                                        {
                                                                          default:
                                                                            l(
                                                                              () =>
                                                                                e[3] ||
                                                                                (e[3] =
                                                                                  [
                                                                                    i(
                                                                                      "mdi-delete"
                                                                                    ),
                                                                                  ])
                                                                            ),
                                                                          _: 1,
                                                                        }
                                                                      ),
                                                                    ]
                                                                  ),
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
                                        s(
                                          u,
                                          { class: "d-flex justify-end mb-2" },
                                          {
                                            default: l(() => [
                                              s(
                                                r,
                                                { cols: "2", class: "mt-5" },
                                                {
                                                  default: l(() => [
                                                    s(
                                                      z,
                                                      {
                                                        color: "primary",
                                                        class: "w-100",
                                                        onClick: (C) =>
                                                          a.openEditDialog(
                                                            n.class_id,
                                                            n.class_name,
                                                            n.users
                                                          ),
                                                      },
                                                      {
                                                        default: l(
                                                          () =>
                                                            e[4] ||
                                                            (e[4] = [
                                                              i("Add Students"),
                                                            ])
                                                        ),
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
                                        ),
                                        e[8] ||
                                          (e[8] = D(
                                            "p",
                                            { class: "mb-3" },
                                            "Quizzes:",
                                            -1
                                          )),
                                        n.quizzes.length === 0
                                          ? (d(),
                                            y(
                                              "span",
                                              ts,
                                              "No Quizzes for this class"
                                            ))
                                          : (d(!0),
                                            y(
                                              k,
                                              { key: 3 },
                                              w(
                                                n.quizzes,
                                                (C, j) => (
                                                  d(),
                                                  g(
                                                    u,
                                                    {
                                                      class: "mt-0 mb-0",
                                                      key: j,
                                                    },
                                                    {
                                                      default: l(() => [
                                                        s(q),
                                                        s(
                                                          r,
                                                          { cols: "11" },
                                                          {
                                                            default: l(() => [
                                                              i(x(C.title), 1),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1024
                                                        ),
                                                        s(
                                                          r,
                                                          {
                                                            cols: "1",
                                                            class:
                                                              "d-flex justify-end",
                                                          },
                                                          {
                                                            default: l(() => [
                                                              s(
                                                                z,
                                                                {
                                                                  color:
                                                                    "red-lighten-2",
                                                                  onClick: (
                                                                    F
                                                                  ) =>
                                                                    a.removeQuizFromClass(
                                                                      n.class_id,
                                                                      C.quiz_id
                                                                    ),
                                                                },
                                                                {
                                                                  default: l(
                                                                    () => [
                                                                      s(
                                                                        T,
                                                                        null,
                                                                        {
                                                                          default:
                                                                            l(
                                                                              () =>
                                                                                e[5] ||
                                                                                (e[5] =
                                                                                  [
                                                                                    i(
                                                                                      "mdi-delete"
                                                                                    ),
                                                                                  ])
                                                                            ),
                                                                          _: 1,
                                                                        }
                                                                      ),
                                                                    ]
                                                                  ),
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
                                        s(
                                          u,
                                          { class: "d-flex justify-end" },
                                          {
                                            default: l(() => [
                                              s(
                                                r,
                                                { cols: "2", class: "mt-5" },
                                                {
                                                  default: l(() => [
                                                    s(
                                                      A,
                                                      {
                                                        persistent: "",
                                                        class: "w-75",
                                                      },
                                                      {
                                                        activator: l(
                                                          ({ props: C }) => [
                                                            s(
                                                              z,
                                                              J(
                                                                { ref_for: !0 },
                                                                C,
                                                                {
                                                                  color:
                                                                    "secondary",
                                                                  text: "Add Quiz",
                                                                  variant:
                                                                    "flat",
                                                                  class:
                                                                    "w-100",
                                                                }
                                                              ),
                                                              null,
                                                              16
                                                            ),
                                                          ]
                                                        ),
                                                        default: l(
                                                          ({ isActive: C }) => [
                                                            s(
                                                              c,
                                                              {
                                                                onCancel: (j) =>
                                                                  (C.value =
                                                                    !1),
                                                                classId:
                                                                  n.class_id,
                                                                className:
                                                                  n.class_name,
                                                                classQuizzes:
                                                                  n.quizzes,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "onCancel",
                                                                "classId",
                                                                "className",
                                                                "classQuizzes",
                                                              ]
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
                                        s(
                                          u,
                                          null,
                                          {
                                            default: l(() => [
                                              s(
                                                r,
                                                {
                                                  class:
                                                    "d-flex justify-start mt-5",
                                                },
                                                {
                                                  default: l(() => [
                                                    s(
                                                      z,
                                                      {
                                                        color: "red-lighten-2",
                                                        disabled:
                                                          n.users.length !== 0,
                                                        onClick: (C) =>
                                                          a.deleteClass(
                                                            n.class_id
                                                          ),
                                                      },
                                                      {
                                                        default: l(
                                                          () =>
                                                            e[6] ||
                                                            (e[6] = [
                                                              i("Delete Class"),
                                                            ])
                                                        ),
                                                        _: 2,
                                                      },
                                                      1032,
                                                      ["disabled", "onClick"]
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
      s(
        A,
        {
          modelValue: a.dialog,
          "onUpdate:modelValue": e[1] || (e[1] = (n) => (a.dialog = n)),
          persistent: "",
          class: "w-75",
        },
        {
          default: l(() => [
            s(
              v,
              {
                onCancel: a.closeDialog,
                classId: a.selectedClass,
                className: a.selectedClassName,
                classUsers: a.selectedClassUsers,
              },
              null,
              8,
              ["onCancel", "classId", "className", "classUsers"]
            ),
          ]),
          _: 1,
        },
        8,
        ["modelValue"]
      ),
    ])
  );
}
const os = Q(es, [["render", as]]),
  hs = {
    __name: "classes",
    setup(t) {
      const e = V();
      return (
        B(async () => {
          if (e.classes.length === 0)
            try {
              const o = await fetch("/getAllClasses", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });
              if (o.ok) {
                const a = await o.json();
                e.setClasses(a);
              } else {
                const a = await o.json();
                console.error("Failed to load classes:", a.error);
              }
            } catch (o) {
              console.error("Error fetching classes:", o);
            }
        }),
        (o, a) => {
          const p = os;
          return (
            d(),
            y("div", null, [
              a[0] || (a[0] = D("h1", { class: "mb-3" }, "Classes", -1)),
              s(p),
            ])
          );
        }
      );
    },
  };
export { hs as default };
