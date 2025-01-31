import { a as u, V as _ } from "./VRow-DPRUVnFG.js";
import { V as x, a as C, b as V } from "./VCard-PzGifVhv.js";
import { h, i as y } from "./VGrid-B1elj0Wo.js";
import {
  H as n,
  M as f,
  A as s,
  J as a,
  F as v,
  Q as w,
  I as p,
  K as d,
  R as k,
  v as g,
  o as T,
  P as A,
} from "./index-C7jXg81h.js";
const U = {
    __name: "AddAdmins",
    props: { users: { type: Array, required: !0 } },
    emits: ["updatedUser"],
    setup(m, { emit: l }) {
      const i = l,
        r = async (e, t) => {
          try {
            const o = await fetch("/update_user_role", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ user_id: e, role: t }),
            });
            if (o.ok)
              console.log(
                `User role updated to ${t === 1 ? "Teacher" : "Student"}`
              ),
                i("updatedUser", { userid: e, role: t });
            else {
              const c = await o.json();
              console.error("Failed to update role:", c.error);
            }
          } catch (o) {
            console.error("Error updating role:", o);
          }
        };
      return (e, t) => (
        n(),
        f("div", null, [
          s(
            _,
            { class: "w-100 d-flex" },
            {
              default: a(() => [
                (n(!0),
                f(
                  v,
                  null,
                  w(
                    m.users,
                    (o) => (
                      n(),
                      p(
                        u,
                        { cols: "3", class: "d-flex w-100", key: o.id },
                        {
                          default: a(() => [
                            s(
                              x,
                              { class: "w-100 pa-1", variant: "elevated" },
                              {
                                default: a(() => [
                                  s(
                                    C,
                                    { class: "mt-2" },
                                    {
                                      default: a(() => [
                                        d(
                                          k(
                                            o.role === 1 ? "Teacher" : "Student"
                                          ),
                                          1
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                  s(
                                    V,
                                    null,
                                    {
                                      default: a(() => [
                                        s(
                                          _,
                                          null,
                                          {
                                            default: a(() => [
                                              s(
                                                u,
                                                { cols: "10", class: "d-flex" },
                                                {
                                                  default: a(() => [
                                                    d(k(o.username), 1),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                              s(
                                                u,
                                                {
                                                  cols: "2",
                                                  class: "d-flex justify-end",
                                                },
                                                {
                                                  default: a(() => [
                                                    o.role === 1
                                                      ? (n(),
                                                        p(
                                                          h,
                                                          {
                                                            key: 0,
                                                            color:
                                                              "red-lighten-2",
                                                            onClick: (c) =>
                                                              r(o.id, 2),
                                                          },
                                                          {
                                                            default: a(() => [
                                                              s(y, null, {
                                                                default: a(
                                                                  () =>
                                                                    t[0] ||
                                                                    (t[0] = [
                                                                      d(
                                                                        "mdi-arrow-down"
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
                                                        ))
                                                      : (n(),
                                                        p(
                                                          h,
                                                          {
                                                            key: 1,
                                                            color: "primary",
                                                            onClick: (c) =>
                                                              r(o.id, 1),
                                                          },
                                                          {
                                                            default: a(() => [
                                                              s(y, null, {
                                                                default: a(
                                                                  () =>
                                                                    t[1] ||
                                                                    (t[1] = [
                                                                      d(
                                                                        "mdi-arrow-up"
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
        ])
      );
    },
  },
  E = {
    __name: "admin",
    setup(m) {
      const l = g([]),
        i = (r) => {
          const e = l.value.findIndex((t) => t.id === r.userid);
          e !== -1 && (l.value[e].role = r.role);
        };
      return (
        T(async () => {
          try {
            const r = await fetch("/get_all_users", {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
            if (r.ok) {
              const e = await r.json();
              l.value = e.users;
            } else {
              const e = await r.json();
              console.error("Failed to load users:", e.error);
            }
          } catch (r) {
            console.error("Error fetching users:", r);
          }
        }),
        (r, e) => {
          const t = U;
          return (
            n(),
            f("div", null, [
              e[0] || (e[0] = A("h1", { class: "mb-3" }, "Change Admins", -1)),
              s(t, { users: l.value, onUpdatedUser: i }, null, 8, ["users"]),
            ])
          );
        }
      );
    },
  };
export { E as default };
