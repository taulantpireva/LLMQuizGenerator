import {
  E as y,
  H as t,
  M as a,
  A as s,
  J as o,
  K as n,
  I as w,
  R as V,
  L as _,
} from "./index-C7jXg81h.js";
import { _ as h } from "./index-CAdGajTq.js";
import { a as m, V as c } from "./VRow-DPRUVnFG.js";
import { V as k, d as C, c as U } from "./VCard-PzGifVhv.js";
import { V as A } from "./VContainer-COxZBLLn.js";
import { V as p } from "./VTextField-C1W9uRpE.js";
import { h as d, i as g } from "./VGrid-B1elj0Wo.js";
import { V as v } from "./VAlert-DxO0GYKQ.js";
import "./forwardRefs-4syOH2-z.js";
const f = y(),
  M = {
    data: () => ({
      username: null,
      password: null,
      login: !0,
      error: !1,
      errorMessage: null,
    }),
    methods: {
      handleKeydown(r) {
        r.key === "Enter" &&
          (this.login ? this.loginAttempt() : this.registerAttempt());
      },
      loginUser() {
        this.login = !0;
      },
      registerUser() {
        this.login = !1;
      },
      async loginAttempt() {
        if (!this.username || !this.password) {
          (this.errorMessage = "Username and Password are required"),
            (this.error = !0);
          return;
        }
        try {
          const r = await fetch("/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: this.username,
                password: this.password,
              }),
            }),
            e = await r.json();
          r.ok
            ? (console.log("Login successful", e),
              f.setUser(e),
              this.$router.push({ path: "/" }))
            : (console.error("Login failed", e.error),
              (this.errorMessage = "Invalid Username or Password"),
              (this.error = !0));
        } catch (r) {
          console.error("An error occurred during login:", r),
            (this.error = !0);
        }
      },
      async registerAttempt() {
        if (!this.username || !this.password) {
          (this.errorMessage = "Username and Password are required"),
            (this.error = !0);
          return;
        }
        try {
          const r = await fetch("/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: this.username,
                password: this.password,
              }),
            }),
            e = await r.json();
          r.ok
            ? (console.log("Registration successful", e),
              f.setUser(e),
              (this.error = !1),
              this.$router.push({ path: "/" }))
            : (console.error("Registration failed", e.error),
              (this.errorMessage = "Registration failed: " + e.error),
              (this.error = !0));
        } catch (r) {
          console.error("An error occurred during registration:", r),
            (this.errorMessage = "An error occurred during registration: " + r),
            (this.error = !0);
        }
      },
    },
  },
  R = { key: 0 },
  L = { key: 1 },
  S = { key: 0 },
  T = { key: 1 },
  j = { key: 0 },
  P = { key: 1 };
function B(r, e, u, I, O, i) {
  return (
    t(),
    a(
      "div",
      {
        onKeydown:
          e[2] || (e[2] = (...l) => i.handleKeydown && i.handleKeydown(...l)),
      },
      [
        s(c, null, {
          default: o(() => [
            s(
              m,
              { class: "d-flex", cols: "12" },
              {
                default: o(() => [
                  s(
                    k,
                    { class: "mx-auto w-75" },
                    {
                      default: o(() => [
                        s(
                          C,
                          { class: "logintitle pa-3 ma-0" },
                          {
                            default: o(() => [
                              r.login
                                ? (t(), a("span", R, "Login"))
                                : (t(), a("span", L, "Register")),
                            ]),
                            _: 1,
                          }
                        ),
                        s(A, null, {
                          default: o(() => [
                            s(
                              p,
                              {
                                modelValue: r.username,
                                "onUpdate:modelValue":
                                  e[0] || (e[0] = (l) => (r.username = l)),
                                color: "secondary",
                                label: "Username",
                                variant: "underlined",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                            s(
                              p,
                              {
                                modelValue: r.password,
                                "onUpdate:modelValue":
                                  e[1] || (e[1] = (l) => (r.password = l)),
                                color: "secondary",
                                label: "Password",
                                placeholder: "Enter your password",
                                variant: "underlined",
                                type: "password",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                            r.login
                              ? (t(),
                                a("p", S, [
                                  e[4] ||
                                    (e[4] = n(" Don't have an account? ")),
                                  s(
                                    d,
                                    {
                                      variant: "plain",
                                      class: "ml-1 pa-0",
                                      size: "medium",
                                      onClick: i.registerUser,
                                    },
                                    {
                                      default: o(
                                        () => e[3] || (e[3] = [n("Register")])
                                      ),
                                      _: 1,
                                    },
                                    8,
                                    ["onClick"]
                                  ),
                                ]))
                              : (t(),
                                a("p", T, [
                                  e[6] || (e[6] = n(" Back to ")),
                                  s(
                                    d,
                                    {
                                      variant: "plain",
                                      class: "ml-1 pa-0",
                                      size: "medium",
                                      onClick: i.loginUser,
                                    },
                                    {
                                      default: o(
                                        () => e[5] || (e[5] = [n("Login")])
                                      ),
                                      _: 1,
                                    },
                                    8,
                                    ["onClick"]
                                  ),
                                ])),
                          ]),
                          _: 1,
                        }),
                        s(
                          U,
                          { class: "justify-end mr-2" },
                          {
                            default: o(() => [
                              r.login
                                ? (t(),
                                  a("div", j, [
                                    s(
                                      d,
                                      {
                                        color: "secondary",
                                        onClick: i.loginAttempt,
                                      },
                                      {
                                        default: o(() => [
                                          e[7] || (e[7] = n(" Login ")),
                                          s(g, { icon: "mdi-login", end: "" }),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["onClick"]
                                    ),
                                  ]))
                                : (t(),
                                  a("div", P, [
                                    s(
                                      d,
                                      {
                                        color: "secondary",
                                        onClick: i.registerAttempt,
                                      },
                                      {
                                        default: o(() => [
                                          e[8] || (e[8] = n(" Register ")),
                                          s(g, {
                                            icon: "mdi-account-plus",
                                            end: "",
                                          }),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["onClick"]
                                    ),
                                  ])),
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
        }),
        r.error
          ? (t(),
            w(
              c,
              { key: 0, class: "w-75 d-flex justify-center mx-auto pa-0" },
              {
                default: o(() => [
                  s(
                    m,
                    { class: "pa-0" },
                    {
                      default: o(() => [
                        s(
                          v,
                          { type: "error" },
                          { default: o(() => [n(V(r.errorMessage), 1)]), _: 1 }
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ))
          : _("", !0),
      ],
      32
    )
  );
}
const K = h(M, [
    ["render", B],
    ["__scopeId", "data-v-783d3d08"],
  ]),
  N = {},
  b = { class: "container" };
function E(r, e) {
  const u = K;
  return t(), a("div", b, [s(u)]);
}
const Q = h(N, [["render", E]]);
export { Q as default };
