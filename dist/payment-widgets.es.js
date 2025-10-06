(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.14 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-500:oklch(62.3% .214 259.815);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-white:#fff;--spacing:.25rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--radius-md:.375rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mt-1{margin-top:calc(var(--spacing)*1)}.mt-6{margin-top:calc(var(--spacing)*6)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.block{display:block}.grid{display:grid}.table{display:table}.w-full{width:100%}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-red-500{border-color:var(--color-red-500)}.bg-red-600{background-color:var(--color-red-600)}.p-4{padding:calc(var(--spacing)*4)}.px-3{padding-inline:calc(var(--spacing)*3)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.pt-6{padding-top:calc(var(--spacing)*6)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}@media (hover:hover){.hover\\:bg-red-700:hover{background-color:var(--color-red-700)}}.focus\\:bg-red-700:focus{background-color:var(--color-red-700)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-red-500:focus{--tw-ring-color:var(--color-red-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:bg-red-400:disabled{background-color:var(--color-red-400)}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { ref as m, onMounted as V, createElementBlock as s, openBlock as d, createElementVNode as t, toDisplayString as g, withDirectives as y, createCommentVNode as u, normalizeClass as b, unref as o, vModelText as f, createStaticVNode as U, vModelSelect as P, onBeforeMount as _, createVNode as N, withCtx as E } from "vue";
import { useVuelidate as A } from "@vuelidate/core";
import { minLength as h, required as v } from "@vuelidate/validators";
import D from "axios";
import { loadStripe as B } from "@stripe/stripe-js";
import { StripeElements as Z, StripeElement as z } from "vue-stripe-js";
const M = { class: "rounded-xl border border-gray-200 p-4" }, O = { class: "grid grid-cols-2 gap-2" }, F = { class: "text-gray-800 font-medium" }, T = { class: "text-gray-800 font-medium text-sm" }, K = { class: "text-gray-800 font-medium" }, R = { class: "text-gray-800 font-medium" }, j = { class: "mt-6 pt-6 border-gray-200" }, J = { class: "grid grid-cols-1 gap-4" }, Y = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
}, G = { key: 0 }, H = { key: 1 }, Q = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
}, W = { key: 0 }, X = { key: 1 }, ee = { class: "grid grid-cols-3 gap-4" }, te = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
}, re = { key: 0 }, ne = { key: 1 }, oe = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
}, ie = { key: 0 }, se = { key: 1 }, de = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
}, le = { key: 0 }, ae = ["disabled"], w = "validInvoiceData", ve = {
  __name: "PaymentDetails",
  props: {
    apiUrl: {
      type: String,
      required: !0
    },
    amount: {
      type: Number,
      required: !0
    },
    currency: {
      type: String,
      required: !0
    },
    productDescription: {
      type: String,
      required: !0
    },
    productName: {
      type: String,
      required: !0
    },
    units: {
      type: Number,
      required: !0
    },
    senderName: {
      type: String,
      required: !0
    },
    senderLine1: {
      type: String,
      required: !0
    },
    senderLine2: {
      type: String,
      required: !1
    },
    senderPostalCode: {
      type: String,
      required: !0
    },
    senderCity: {
      type: String,
      required: !0
    },
    senderState: {
      type: String,
      required: !1
    },
    senderCountry: {
      type: String,
      required: !1
    },
    senderVatId: {
      type: String,
      required: !1
    },
    buttonLabel: {
      type: String,
      required: !0,
      default: "Next >>"
    }
  },
  emits: [w],
  setup(a, { emit: q }) {
    const k = q, r = a, i = m({
      name: "",
      line1: "",
      line2: "",
      city: "",
      postalCode: "",
      country: "",
      state: "",
      vatId: ""
    }), C = {
      name: { required: v, minLength: h(2) },
      line1: { required: v, minLength: h(5) },
      line2: {},
      city: { required: v, minLength: h(2) },
      postalCode: { required: v, minLength: h(4) },
      country: { required: v },
      vatId: {}
    }, n = A(C, i);
    V(() => {
      n.value.$touch();
    });
    const x = async () => {
      if (await n.value.$validate(), !n.value.$error)
        try {
          const p = {
            sender: {
              name: r.senderName,
              line1: r.senderLine1,
              line2: r.senderLine2 || "",
              postalCode: r.senderPostalCode,
              city: r.senderCity,
              state: r.senderState || "",
              vatId: r.senderVatId || ""
            },
            receiver: i.value,
            invoice_items: [
              {
                units: r.units,
                unit_price: r.amount,
                description: r.productDescription,
                currency: r.currency,
                tax_rate: 19
              }
            ]
          }, e = await D.post(r.apiUrl, p);
          console.log("Invoice created successfully:", e.data), k(w, e.data);
        } catch (p) {
          console.error("Error creating invoice:", p);
        }
    };
    return (p, e) => (d(), s("div", M, [
      e[21] || (e[21] = t("h2", { class: "text-xl font-semibold mb-3" }, "Bestelldetails", -1)),
      t("div", O, [
        e[7] || (e[7] = t("span", { class: "text-gray-600" }, "Produkt:", -1)),
        t("span", F, g(a.productName), 1),
        e[8] || (e[8] = t("span", { class: "text-gray-600" }, "Beschreibung:", -1)),
        t("span", T, g(a.productDescription), 1),
        e[9] || (e[9] = t("span", { class: "text-gray-600" }, "Anzahl:", -1)),
        t("span", K, g(a.units), 1),
        e[10] || (e[10] = t("span", { class: "text-gray-600" }, "Preis:", -1)),
        t("span", R, g(a.amount) + " " + g(a.currency == "eur" ? "€" : a.currency.toUpperCase()), 1),
        e[11] || (e[11] = t("div", { class: "grid grid-cols-2 gap-2" }, null, -1))
      ]),
      t("div", j, [
        e[20] || (e[20] = t("h3", { class: "text-lg font-semibold mb-4" }, "Rechnungsadresse", -1)),
        t("div", J, [
          t("div", null, [
            e[12] || (e[12] = t("label", {
              for: "name",
              class: "block text-sm font-medium text-gray-700 mb-1"
            }, "Name oder Firma", -1)),
            y(t("input", {
              type: "text",
              id: "name",
              "onUpdate:modelValue": e[0] || (e[0] = (l) => i.value.name = l),
              class: b([
                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                o(n).name.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              ]),
              required: ""
            }, null, 2), [
              [f, i.value.name]
            ]),
            o(n).name.$error ? (d(), s("div", Y, [
              o(n).name.required.$invalid ? (d(), s("span", G, "Name ist erforderlich")) : o(n).name.minLength.$invalid ? (d(), s("span", H, "Name muss mindestens 2 Zeichen haben")) : u("", !0)
            ])) : u("", !0)
          ]),
          t("div", null, [
            e[13] || (e[13] = t("label", {
              for: "vatId",
              class: "block text-sm font-medium text-gray-700 mb-1"
            }, "USt-IdNr. (optional)", -1)),
            y(t("input", {
              type: "text",
              id: "vatId",
              "onUpdate:modelValue": e[1] || (e[1] = (l) => i.value.vatId = l),
              class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            }, null, 512), [
              [f, i.value.vatId]
            ])
          ]),
          t("div", null, [
            e[14] || (e[14] = t("label", {
              for: "line1",
              class: "block text-sm font-medium text-gray-700 mb-1"
            }, "Adresse Zeile 1", -1)),
            y(t("input", {
              type: "text",
              id: "line1",
              "onUpdate:modelValue": e[2] || (e[2] = (l) => i.value.line1 = l),
              class: b([
                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                o(n).line1.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              ]),
              required: ""
            }, null, 2), [
              [f, i.value.line1]
            ]),
            o(n).line1.$error ? (d(), s("div", Q, [
              o(n).line1.required.$invalid ? (d(), s("span", W, "Adresse ist erforderlich")) : o(n).line1.minLength.$invalid ? (d(), s("span", X, "Adresse muss mindestens 5 Zeichen haben")) : u("", !0)
            ])) : u("", !0)
          ]),
          t("div", null, [
            e[15] || (e[15] = t("label", {
              for: "line2",
              class: "block text-sm font-medium text-gray-700 mb-1"
            }, "Adresse Zeile 2", -1)),
            y(t("input", {
              type: "text",
              id: "line2",
              "onUpdate:modelValue": e[3] || (e[3] = (l) => i.value.line2 = l),
              class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            }, null, 512), [
              [f, i.value.line2]
            ])
          ]),
          t("div", ee, [
            t("div", null, [
              e[16] || (e[16] = t("label", {
                for: "city",
                class: "block text-sm font-medium text-gray-700 mb-1"
              }, "Stadt", -1)),
              y(t("input", {
                type: "text",
                id: "city",
                "onUpdate:modelValue": e[4] || (e[4] = (l) => i.value.city = l),
                class: b([
                  "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                  o(n).city.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                ]),
                required: ""
              }, null, 2), [
                [f, i.value.city]
              ]),
              o(n).city.$error ? (d(), s("div", te, [
                o(n).city.required.$invalid ? (d(), s("span", re, "Stadt ist erforderlich")) : o(n).city.minLength.$invalid ? (d(), s("span", ne, "Stadt muss mindestens 2 Zeichen haben")) : u("", !0)
              ])) : u("", !0)
            ]),
            t("div", null, [
              e[17] || (e[17] = t("label", {
                for: "postalCode",
                class: "block text-sm font-medium text-gray-700 mb-1"
              }, "PLZ", -1)),
              y(t("input", {
                type: "text",
                id: "postalCode",
                "onUpdate:modelValue": e[5] || (e[5] = (l) => i.value.postalCode = l),
                class: b([
                  "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                  o(n).postalCode.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                ]),
                required: ""
              }, null, 2), [
                [f, i.value.postalCode]
              ]),
              o(n).postalCode.$error ? (d(), s("div", oe, [
                o(n).postalCode.required.$invalid ? (d(), s("span", ie, "PLZ ist erforderlich")) : o(n).postalCode.minLength.$invalid ? (d(), s("span", se, "PLZ muss mindestens 4 Zeichen haben")) : u("", !0)
              ])) : u("", !0)
            ]),
            t("div", null, [
              e[19] || (e[19] = t("label", {
                for: "country",
                class: "block text-sm font-medium text-gray-700 mb-1"
              }, "Land", -1)),
              y(t("select", {
                id: "country",
                "onUpdate:modelValue": e[6] || (e[6] = (l) => i.value.country = l),
                class: b([
                  "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                  o(n).country.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                ]),
                required: ""
              }, [...e[18] || (e[18] = [
                U('<option value="">Bitte wählen</option><option value="Deutschland">Deutschland</option><option value="Österreich">Österreich</option><option value="Schweiz">Schweiz</option><option value="Frankreich">Frankreich</option><option value="Italien">Italien</option><option value="Spanien">Spanien</option><option value="Niederlande">Niederlande</option><option value="Belgien">Belgien</option>', 9)
              ])], 2), [
                [P, i.value.country]
              ]),
              o(n).country.$error ? (d(), s("div", de, [
                o(n).country.required.$invalid ? (d(), s("span", le, "Land ist erforderlich")) : u("", !0)
              ])) : u("", !0)
            ])
          ])
        ])
      ]),
      t("button", {
        onClick: x,
        disabled: o(n).$invalid,
        class: "w-full mt-6 text-white bg-red-600 disabled:bg-red-400 hover:bg-red-700 focus:bg-red-700 font-semibold py-3 rounded-md shadow-none transition-colors duration-150"
      }, g(a.buttonLabel), 9, ae)
    ]));
  }
}, ue = { key: 0 }, me = ["disabled"], L = "paymentPerformed", xe = {
  __name: "Stripe",
  props: {
    apiUrl: {
      type: String,
      required: !0
    },
    email: {
      type: String,
      required: !0
    },
    amount: {
      type: Number,
      required: !0
    },
    currency: {
      type: String,
      required: !0
    },
    productDescription: {
      type: String,
      required: !0
    },
    productName: {
      type: String,
      required: !0
    },
    units: {
      type: Number,
      required: !0
    },
    returnUrl: {
      type: String,
      required: !0
    },
    metadata: {
      type: Object,
      default: () => ({})
    },
    buttonDisabled: {
      type: Boolean,
      default: !0
    },
    stripeKey: {
      type: String,
      required: !0
    }
  },
  emits: [L],
  setup(a, { emit: q }) {
    const k = q, r = a, i = m({}), C = m({
      mode: "payment",
      amount: r.amount,
      currency: r.currency,
      appearance: {
        theme: "flat"
      }
    }), n = m({}), x = m(!1), p = m(""), e = m(), l = m();
    _(async () => {
      await B(r.stripeKey || ""), x.value = !0;
      try {
        const c = await D.post(r.apiUrl, {
          amount: r.amount * 100,
          currency: r.currency,
          metadata: r.metadata,
          productName: r.productName,
          productDescription: r.productDescription,
          units: r.units,
          email: r.email
        });
        p.value = c.data.clientSecret;
      } catch (c) {
        console.error("Failed to create payment intent:", c);
      }
    });
    async function I() {
      const c = e.value?.instance, S = e.value?.elements;
      if (c && S) {
        await S.submit();
        const { error: $ } = await c.confirmPayment({
          elements: S,
          clientSecret: p.value,
          confirmParams: {
            return_url: r.returnUrl
          }
        });
        $ ? console.log($) : k(L);
      }
    }
    return (c, S) => x.value ? (d(), s("div", ue, [
      N(o(Z), {
        "stripe-key": a.stripeKey,
        "instance-options": i.value,
        "elements-options": C.value,
        ref_key: "elementsComponent",
        ref: e
      }, {
        default: E(() => [
          N(o(z), {
            type: "payment",
            options: n.value,
            ref_key: "paymentComponent",
            ref: l
          }, null, 8, ["options"])
        ]),
        _: 1
      }, 8, ["stripe-key", "instance-options", "elements-options"]),
      t("button", {
        onClick: I,
        disabled: a.buttonDisabled,
        class: "w-full mt-6 text-white bg-red-600 disabled:bg-red-400 hover:bg-red-700 focus:bg-red-700 font-semibold py-3 rounded-md shadow-none transition-colors duration-150"
      }, " Jetzt bezahlen ", 8, me)
    ])) : u("", !0);
  }
};
export {
  ve as PaymentDetails,
  xe as Stripe
};
