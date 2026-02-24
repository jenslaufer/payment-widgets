(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-500:oklch(62.3% .214 259.815);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-white:#fff;--spacing:.25rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--font-weight-medium:500;--font-weight-semibold:600;--radius-md:.375rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.start{inset-inline-start:var(--spacing)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.block{display:block}.grid{display:grid}.table{display:table}.w-full{width:100%}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.gap-2{gap:calc(var(--spacing) * 2)}.gap-4{gap:calc(var(--spacing) * 4)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-red-500{border-color:var(--color-red-500)}.bg-red-600{background-color:var(--color-red-600)}.p-4{padding:calc(var(--spacing) * 4)}.px-3{padding-inline:calc(var(--spacing) * 3)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.pt-6{padding-top:calc(var(--spacing) * 6)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}@media(hover:hover){.hover\\:bg-red-700:hover{background-color:var(--color-red-700)}}.focus\\:bg-red-700:focus{background-color:var(--color-red-700)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-red-500:focus{--tw-ring-color:var(--color-red-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:bg-red-400:disabled{background-color:var(--color-red-400)}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { ref as I, onMounted as re, openBlock as v, createElementBlock as k, createElementVNode as o, toDisplayString as B, normalizeClass as S, withDirectives as R, unref as y, vModelText as V, createCommentVNode as q, createStaticVNode as ae, vModelSelect as ie, renderSlot as J, onBeforeMount as oe, createVNode as X, withCtx as le } from "vue";
import { useVuelidate as me } from "@vuelidate/core";
import { minLength as Y, required as Z } from "@vuelidate/validators";
import se from "axios";
import { loadStripe as ge } from "@stripe/stripe-js";
import { StripeElements as ce, StripeElement as ue } from "vue-stripe-js";
var K = { exports: {} }, de = K.exports, Q;
function pe() {
  return Q || (Q = 1, (function(s, x) {
    (function(p, l) {
      l(s);
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : de, function(p) {
      if (typeof browser > "u" || Object.getPrototypeOf(browser) !== Object.prototype) {
        const l = "The message port closed before a response was received.", c = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", L = (m) => {
          const E = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: !1
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: !0
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(E).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class _ extends WeakMap {
            constructor(r, i = void 0) {
              super(i), this.createItem = r;
            }
            get(r) {
              return this.has(r) || this.set(r, this.createItem(r)), super.get(r);
            }
          }
          const a = (t) => t && typeof t == "object" && typeof t.then == "function", f = (t, r) => (...i) => {
            m.runtime.lastError ? t.reject(m.runtime.lastError) : r.singleCallbackArg || i.length <= 1 && r.singleCallbackArg !== !1 ? t.resolve(i[0]) : t.resolve(i);
          }, T = (t) => t == 1 ? "argument" : "arguments", N = (t, r) => function(u, ...w) {
            if (w.length < r.minArgs)
              throw new Error(`Expected at least ${r.minArgs} ${T(r.minArgs)} for ${t}(), got ${w.length}`);
            if (w.length > r.maxArgs)
              throw new Error(`Expected at most ${r.maxArgs} ${T(r.maxArgs)} for ${t}(), got ${w.length}`);
            return new Promise((C, P) => {
              if (r.fallbackToNoCallback)
                try {
                  u[t](...w, f({
                    resolve: C,
                    reject: P
                  }, r));
                } catch (g) {
                  console.warn(`${t} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, g), u[t](...w), r.fallbackToNoCallback = !1, r.noCallback = !0, C();
                }
              else r.noCallback ? (u[t](...w), C()) : u[t](...w, f({
                resolve: C,
                reject: P
              }, r));
            });
          }, M = (t, r, i) => new Proxy(r, {
            apply(u, w, C) {
              return i.call(w, t, ...C);
            }
          });
          let D = Function.call.bind(Object.prototype.hasOwnProperty);
          const F = (t, r = {}, i = {}) => {
            let u = /* @__PURE__ */ Object.create(null), w = {
              has(P, g) {
                return g in t || g in u;
              },
              get(P, g, $) {
                if (g in u)
                  return u[g];
                if (!(g in t))
                  return;
                let h = t[g];
                if (typeof h == "function")
                  if (typeof r[g] == "function")
                    h = M(t, t[g], r[g]);
                  else if (D(i, g)) {
                    let U = N(g, i[g]);
                    h = M(t, t[g], U);
                  } else
                    h = h.bind(t);
                else if (typeof h == "object" && h !== null && (D(r, g) || D(i, g)))
                  h = F(h, r[g], i[g]);
                else if (D(i, "*"))
                  h = F(h, r[g], i["*"]);
                else
                  return Object.defineProperty(u, g, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                      return t[g];
                    },
                    set(U) {
                      t[g] = U;
                    }
                  }), h;
                return u[g] = h, h;
              },
              set(P, g, $, h) {
                return g in u ? u[g] = $ : t[g] = $, !0;
              },
              defineProperty(P, g, $) {
                return Reflect.defineProperty(u, g, $);
              },
              deleteProperty(P, g) {
                return Reflect.deleteProperty(u, g);
              }
            }, C = Object.create(t);
            return new Proxy(C, w);
          }, z = (t) => ({
            addListener(r, i, ...u) {
              r.addListener(t.get(i), ...u);
            },
            hasListener(r, i) {
              return r.hasListener(t.get(i));
            },
            removeListener(r, i) {
              r.removeListener(t.get(i));
            }
          });
          let O = !1;
          const G = new _((t) => typeof t != "function" ? t : function(i, u, w) {
            let C = !1, P, g = new Promise((W) => {
              P = function(j) {
                O || (console.warn(c, new Error().stack), O = !0), C = !0, W(j);
              };
            }), $;
            try {
              $ = t(i, u, P);
            } catch (W) {
              $ = Promise.reject(W);
            }
            const h = $ !== !0 && a($);
            if ($ !== !0 && !h && !C)
              return !1;
            const U = (W) => {
              W.then((j) => {
                w(j);
              }, (j) => {
                let H;
                j && (j instanceof Error || typeof j.message == "string") ? H = j.message : H = "An unexpected error occurred", w({
                  __mozWebExtensionPolyfillReject__: !0,
                  message: H
                });
              }).catch((j) => {
                console.error("Failed to send onMessage rejected reply", j);
              });
            };
            return U(h ? $ : g), !0;
          }), e = ({
            reject: t,
            resolve: r
          }, i) => {
            m.runtime.lastError ? m.runtime.lastError.message === l ? r() : t(m.runtime.lastError) : i && i.__mozWebExtensionPolyfillReject__ ? t(new Error(i.message)) : r(i);
          }, n = (t, r, i, ...u) => {
            if (u.length < r.minArgs)
              throw new Error(`Expected at least ${r.minArgs} ${T(r.minArgs)} for ${t}(), got ${u.length}`);
            if (u.length > r.maxArgs)
              throw new Error(`Expected at most ${r.maxArgs} ${T(r.maxArgs)} for ${t}(), got ${u.length}`);
            return new Promise((w, C) => {
              const P = e.bind(null, {
                resolve: w,
                reject: C
              });
              u.push(P), i.sendMessage(...u);
            });
          }, d = {
            runtime: {
              onMessage: z(G),
              onMessageExternal: z(G),
              sendMessage: n.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: n.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          }, b = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          return E.privacy = {
            network: {
              "*": b
            },
            services: {
              "*": b
            },
            websites: {
              "*": b
            }
          }, F(m, d, E);
        };
        if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
          throw new Error("This script should only be loaded in a browser extension.");
        p.exports = L(chrome);
      } else
        p.exports = browser;
    });
  })(K)), K.exports;
}
var A = pe();
typeof window < "u" && window.addEventListener("message", (s) => {
  s.origin === "https://extensionpay.com" && s.source == window && (s.data === "extpay-fetch-user" || s.data === "extpay-trial-start") && (window.postMessage(`${s.data}-received`), A.runtime.sendMessage(s.data));
}, !1);
function ne(s) {
  const x = "https://extensionpay.com", p = `${x}/extension/${s}`;
  function l(e) {
    return new Promise((n) => setTimeout(n, e));
  }
  async function c(e) {
    try {
      return await A.storage.sync.get(e);
    } catch {
      return await A.storage.local.get(e);
    }
  }
  async function L(e) {
    try {
      return await A.storage.sync.set(e);
    } catch {
      return await A.storage.local.set(e);
    }
  }
  A.management && A.management.getSelf().then(async (e) => {
    if (!e.permissions.includes("storage")) {
      var n = e.hostPermissions.concat(e.permissions);
      throw `ExtPay Setup Error: please include the "storage" permission in manifest.json["permissions"] or else ExtensionPay won't work correctly.

You can copy and paste this to your manifest.json file to fix this error:

"permissions": [
    ${n.map((d) => `"    ${d}"`).join(`,
`)}${n.length > 0 ? "," : ""}
    "storage"
]
`;
    }
  }), c(["extensionpay_installed_at", "extensionpay_user"]).then(async (e) => {
    if (e.extensionpay_installed_at) return;
    const n = e.extensionpay_user, d = n ? n.installedAt : (/* @__PURE__ */ new Date()).toISOString();
    await L({ extensionpay_installed_at: d });
  });
  const m = [], E = [];
  async function _() {
    var e = {}, n;
    if (A.management)
      n = await A.management.getSelf();
    else if (A.runtime)
      n = await A.runtime.sendMessage("extpay-extinfo"), n || (n = { installType: !("update_url" in A.runtime.getManifest()) ? "development" : "normal" });
    else
      throw "ExtPay needs to be run in a browser extension context";
    n.installType == "development" && (e.development = !0);
    const d = await fetch(`${p}/api/new-key`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(e)
    });
    if (!d.ok)
      throw d.status, `${x}/home`;
    const b = await d.json();
    return await L({ extensionpay_api_key: b }), b;
  }
  async function a() {
    const e = await c(["extensionpay_api_key"]);
    return e.extensionpay_api_key ? e.extensionpay_api_key : null;
  }
  const f = /^\d\d\d\d-\d\d-\d\dT/;
  async function T() {
    var e = await c(["extensionpay_user", "extensionpay_installed_at"]);
    const n = await a();
    if (!n)
      return {
        paid: !1,
        paidAt: null,
        installedAt: e.extensionpay_installed_at ? new Date(e.extensionpay_installed_at) : /* @__PURE__ */ new Date(),
        // sometimes this function gets called before the initial install time can be flushed to storage
        trialStartedAt: null
      };
    const d = await fetch(`${p}/api/v2/user?api_key=${n}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!d.ok) throw "ExtPay error while fetching user: " + await d.text();
    const b = await d.json(), t = {};
    for (var [r, i] of Object.entries(b))
      i && i.match && i.match(f) && (i = new Date(i)), t[r] = i;
    return t.installedAt = new Date(e.extensionpay_installed_at), t.paidAt && (!e.extensionpay_user || e.extensionpay_user && !e.extensionpay_user.paidAt) && m.forEach((u) => u(t)), t.trialStartedAt && (!e.extensionpay_user || e.extensionpay_user && !e.extensionpay_user.trialStartedAt) && E.forEach((u) => u(t)), await L({ extensionpay_user: b }), t;
  }
  async function N() {
    const e = await fetch(`${p}/api/v2/current-plans`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
    if (!e.ok)
      throw `ExtPay: HTTP error while getting plans. Received http code: ${e.status}`;
    return await e.json();
  }
  async function M(e, n, d) {
    if (A.windows && A.windows.create) {
      const b = await A.windows.getCurrent(), t = Math.round((b.width - n) * 0.5 + b.left), r = Math.round((b.height - d) * 0.5 + b.top);
      try {
        A.windows.create({
          url: e,
          type: "popup",
          focused: !0,
          width: n,
          height: d,
          left: t,
          top: r
        });
      } catch {
        A.windows.create({
          url: e,
          type: "popup",
          width: n,
          height: d,
          left: t,
          top: r
        });
      }
    } else
      window.open(e, null, `toolbar=no,location=no,directories=no,status=no,menubar=no,width=${n},height=${d},left=450`);
  }
  async function D(e) {
    var n = await a();
    n || (n = await _());
    let d = `${p}/choose-plan?api_key=${n}`;
    e && (d = `${p}/choose-plan/${e}?api_key=${n}`), A.tabs && A.tabs.create ? await A.tabs.create({ url: d, active: !0 }) : window.open(d, "_blank");
  }
  async function F(e) {
    var n = await a();
    n || (n = await _());
    var d = `${p}/trial?api_key=${n}`;
    e && (d += `&period=${e}`), M(d, 500, 700);
  }
  async function z() {
    var e = await a();
    e || (e = await _());
    const n = `${p}/reactivate?api_key=${e}&back=choose-plan&v2`;
    M(n, 500, 800);
  }
  var O = !1;
  async function G() {
    if (!O) {
      O = !0;
      for (var e = await T(), n = 0; n < 120; ++n) {
        if (e.paidAt)
          return O = !1, e;
        await l(1e3), e = await T();
      }
      O = !1;
    }
  }
  return {
    getUser: function() {
      return T();
    },
    onPaid: {
      addListener: function(e) {
        const n = `"content_scripts": [
                {
            "matches": ["${x}/*"],
            "js": ["ExtPay.js"],
            "run_at": "document_start"
        }]`, d = A.runtime.getManifest();
        if (!d.content_scripts)
          throw `ExtPay setup error: To use the onPaid callback handler, please include ExtPay as a content script in your manifest.json. You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${n}`;
        const b = d.content_scripts.find((t) => t.matches.includes(x.replace(":3000", "") + "/*"));
        if (b) {
          if (!b.run_at || b.run_at !== "document_start")
            throw `ExtPay setup error: To use the onPaid callback handler, please make sure the ExtPay content script in your manifest.json runs at document start. You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${n}`;
        } else
          throw `ExtPay setup error: To use the onPaid callback handler, please include ExtPay as a content script in your manifest.json matching "${x}/*". You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${n}`;
        m.push(e);
      }
      // removeListener: function(callback) {
      //     // TODO
      // }
    },
    getPlans: N,
    openPaymentPage: D,
    openTrialPage: F,
    openLoginPage: z,
    onTrialStarted: {
      addListener: function(e) {
        E.push(e);
      }
    },
    startBackground: function() {
      A.runtime.onMessage.addListener(function(e, n, d) {
        if (e == "extpay-fetch-user")
          G();
        else if (e == "extpay-trial-start")
          T();
        else if (e == "extpay-extinfo" && A.management)
          return A.management.getSelf();
      });
    }
  };
}
const Ae = ({ extensionId: s } = {}) => {
  let x = !1;
  const p = ne(s);
  return {
    start: () => {
      x || (console.log(">>>>>>> Payment service started"), p.startBackground());
    },
    stop: () => {
      x = !1, console.log(">>>>>>> Payment service stopped"), p.stopBackground();
    },
    get started() {
      return x;
    }
  };
}, ye = /* @__PURE__ */ Symbol("payment-service"), Ke = {
  install: (s, x = {}) => {
    const p = Ae(x);
    s.provide(ye, p), s.config.globalProperties.$paymentService = p, x.autoStart !== !1 && p.start();
  }
}, fe = { class: "rounded-xl border border-gray-200 p-4" }, xe = { class: "grid grid-cols-2 gap-2" }, be = { class: "text-gray-800 font-medium" }, he = { class: "text-gray-800 font-medium text-sm" }, we = { class: "text-gray-800 font-medium" }, ve = { class: "text-gray-800 font-medium" }, ke = { class: "mt-6 pt-6 border-gray-200" }, Se = { class: "grid grid-cols-1 gap-4" }, _e = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
}, Ce = { key: 0 }, Pe = { key: 1 }, $e = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
}, Ee = { key: 0 }, Te = { key: 1 }, Ne = { class: "grid grid-cols-3 gap-4" }, qe = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
}, Le = { key: 0 }, Me = { key: 1 }, je = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
}, De = { key: 0 }, Ie = { key: 1 }, Oe = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
}, Re = { key: 0 }, Be = ["disabled"], ee = "validInvoiceData", He = {
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
    },
    buttonClass: {
      type: String,
      required: !1,
      default: "w-full mt-6 text-white bg-red-600 disabled:bg-red-400 hover:bg-red-700 focus:bg-red-700 font-semibold py-3 rounded-md shadow-none transition-colors duration-150"
    },
    labelClass: {
      type: String,
      required: !1,
      default: "block text-sm font-medium text-gray-700 mb-1"
    },
    inputClass: {
      type: String,
      required: !1,
      default: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
    }
  },
  emits: [ee],
  setup(s, { emit: x }) {
    const p = x, l = s, c = I({
      name: "",
      line1: "",
      line2: "",
      city: "",
      postalCode: "",
      country: "",
      state: "",
      vatId: ""
    }), L = {
      name: { required: Z, minLength: Y(2) },
      line1: { required: Z, minLength: Y(5) },
      line2: {},
      city: { required: Z, minLength: Y(2) },
      postalCode: { required: Z, minLength: Y(4) },
      country: { required: Z },
      vatId: {}
    }, m = me(L, c);
    re(() => {
      m.value.$touch();
    });
    const E = async () => {
      if (await m.value.$validate(), !m.value.$error)
        try {
          const _ = {
            sender: {
              name: l.senderName,
              line1: l.senderLine1,
              line2: l.senderLine2 || "",
              postalCode: l.senderPostalCode,
              city: l.senderCity,
              state: l.senderState || "",
              vatId: l.senderVatId || ""
            },
            receiver: c.value,
            invoice_items: [
              {
                units: l.units,
                unit_price: l.amount,
                description: l.productDescription,
                currency: l.currency,
                tax_rate: 19
              }
            ]
          }, a = await se.post(l.apiUrl, _);
          console.log("Invoice created successfully:", a.data), p(ee, a.data);
        } catch (_) {
          console.error("Error creating invoice:", _);
        }
    };
    return (_, a) => (v(), k("div", fe, [
      a[14] || (a[14] = o("h2", { class: "text-xl font-semibold mb-3" }, "Bestelldetails", -1)),
      o("div", xe, [
        a[7] || (a[7] = o("span", { class: "text-gray-600" }, "Produkt:", -1)),
        o("span", be, B(s.productName), 1),
        a[8] || (a[8] = o("span", { class: "text-gray-600" }, "Beschreibung:", -1)),
        o("span", he, B(s.productDescription), 1),
        a[9] || (a[9] = o("span", { class: "text-gray-600" }, "Anzahl:", -1)),
        o("span", we, B(s.units), 1),
        a[10] || (a[10] = o("span", { class: "text-gray-600" }, "Preis:", -1)),
        o("span", ve, B(s.amount) + " " + B(s.currency == "eur" ? "€" : s.currency.toUpperCase()), 1),
        a[11] || (a[11] = o("div", { class: "grid grid-cols-2 gap-2" }, null, -1))
      ]),
      o("div", ke, [
        a[13] || (a[13] = o("h3", { class: "text-lg font-semibold mb-4" }, "Rechnungsadresse", -1)),
        o("div", Se, [
          o("div", null, [
            o("label", {
              for: "name",
              class: S(s.labelClass)
            }, "Name oder Firma", 2),
            R(o("input", {
              type: "text",
              id: "name",
              "onUpdate:modelValue": a[0] || (a[0] = (f) => c.value.name = f),
              class: S([
                `${s.inputClass}`,
                y(m).name.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              ]),
              required: ""
            }, null, 2), [
              [V, c.value.name]
            ]),
            y(m).name.$error ? (v(), k("div", _e, [
              y(m).name.required.$invalid ? (v(), k("span", Ce, "Name ist erforderlich")) : y(m).name.minLength.$invalid ? (v(), k("span", Pe, "Name muss mindestens 2 Zeichen haben")) : q("", !0)
            ])) : q("", !0)
          ]),
          o("div", null, [
            o("label", {
              for: "vatId",
              class: S(s.labelClass)
            }, "USt-IdNr. (optional)", 2),
            R(o("input", {
              type: "text",
              id: "vatId",
              "onUpdate:modelValue": a[1] || (a[1] = (f) => c.value.vatId = f),
              class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            }, null, 512), [
              [V, c.value.vatId]
            ])
          ]),
          o("div", null, [
            o("label", {
              for: "line1",
              class: S(s.labelClass)
            }, "Adresse Zeile 1", 2),
            R(o("input", {
              type: "text",
              id: "line1",
              "onUpdate:modelValue": a[2] || (a[2] = (f) => c.value.line1 = f),
              class: S([
                `${s.inputClass}`,
                y(m).line1.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              ]),
              required: ""
            }, null, 2), [
              [V, c.value.line1]
            ]),
            y(m).line1.$error ? (v(), k("div", $e, [
              y(m).line1.required.$invalid ? (v(), k("span", Ee, "Adresse ist erforderlich")) : y(m).line1.minLength.$invalid ? (v(), k("span", Te, "Adresse muss mindestens 5 Zeichen haben")) : q("", !0)
            ])) : q("", !0)
          ]),
          o("div", null, [
            o("label", {
              for: "line2",
              class: S(s.labelClass)
            }, "Adresse Zeile 2", 2),
            R(o("input", {
              type: "text",
              id: "line2",
              "onUpdate:modelValue": a[3] || (a[3] = (f) => c.value.line2 = f),
              class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            }, null, 512), [
              [V, c.value.line2]
            ])
          ]),
          o("div", Ne, [
            o("div", null, [
              o("label", {
                for: "city",
                class: S(s.labelClass)
              }, "Stadt", 2),
              R(o("input", {
                type: "text",
                id: "city",
                "onUpdate:modelValue": a[4] || (a[4] = (f) => c.value.city = f),
                class: S([
                  `${s.inputClass}`,
                  y(m).city.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                ]),
                required: ""
              }, null, 2), [
                [V, c.value.city]
              ]),
              y(m).city.$error ? (v(), k("div", qe, [
                y(m).city.required.$invalid ? (v(), k("span", Le, "Stadt ist erforderlich")) : y(m).city.minLength.$invalid ? (v(), k("span", Me, "Stadt muss mindestens 2 Zeichen haben")) : q("", !0)
              ])) : q("", !0)
            ]),
            o("div", null, [
              o("label", {
                for: "postalCode",
                class: S(s.labelClass)
              }, "PLZ", 2),
              R(o("input", {
                type: "text",
                id: "postalCode",
                "onUpdate:modelValue": a[5] || (a[5] = (f) => c.value.postalCode = f),
                class: S([
                  `${s.inputClass}`,
                  y(m).postalCode.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                ]),
                required: ""
              }, null, 2), [
                [V, c.value.postalCode]
              ]),
              y(m).postalCode.$error ? (v(), k("div", je, [
                y(m).postalCode.required.$invalid ? (v(), k("span", De, "PLZ ist erforderlich")) : y(m).postalCode.minLength.$invalid ? (v(), k("span", Ie, "PLZ muss mindestens 4 Zeichen haben")) : q("", !0)
              ])) : q("", !0)
            ]),
            o("div", null, [
              o("label", {
                for: "country",
                class: S(s.labelClass)
              }, "Land", 2),
              R(o("select", {
                id: "country",
                "onUpdate:modelValue": a[6] || (a[6] = (f) => c.value.country = f),
                class: S([
                  `${s.inputClass}`,
                  y(m).country.$error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                ]),
                required: ""
              }, [...a[12] || (a[12] = [
                ae('<option value="">Bitte wählen</option><option value="Deutschland">Deutschland</option><option value="Österreich">Österreich</option><option value="Schweiz">Schweiz</option><option value="Frankreich">Frankreich</option><option value="Italien">Italien</option><option value="Spanien">Spanien</option><option value="Niederlande">Niederlande</option><option value="Belgien">Belgien</option>', 9)
              ])], 2), [
                [ie, c.value.country]
              ]),
              y(m).country.$error ? (v(), k("div", Oe, [
                y(m).country.required.$invalid ? (v(), k("span", Re, "Land ist erforderlich")) : q("", !0)
              ])) : q("", !0)
            ])
          ])
        ])
      ]),
      o("button", {
        onClick: E,
        disabled: y(m).$invalid,
        class: S(s.buttonClass)
      }, B(s.buttonLabel), 11, Be)
    ]));
  }
}, Je = {
  __name: "ExtPay",
  props: {
    extensionId: {
      type: Number,
      required: !0
    }
  },
  setup(s) {
    const p = ne(s.extensionId), l = I(!1);
    return re(async () => {
      const c = await p.getUser().catch(() => null);
      c && c.paidAt && (l.value = !0);
    }), (c, L) => l.value ? J(c.$slots, "paid", { key: 0 }) : J(c.$slots, "unpaid", { key: 1 });
  }
}, Ue = { key: 0 }, Ve = ["disabled"], te = "paymentPerformed", Xe = {
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
    },
    buttonClass: {
      type: String,
      required: !1,
      default: "w-full mt-6 text-white bg-red-600 disabled:bg-red-400 hover:bg-red-700 focus:bg-red-700 font-semibold py-3 rounded-md shadow-none transition-colors duration-150"
    },
    buttonLabel: {
      type: String,
      required: !1,
      default: "Jetzt bezahlen"
    }
  },
  emits: [te],
  setup(s, { emit: x }) {
    const p = x, l = s, c = I({}), L = I({
      mode: "payment",
      amount: l.amount,
      currency: l.currency,
      appearance: {
        theme: "flat"
      }
    }), m = I({}), E = I(!1), _ = I(""), a = I(), f = I();
    oe(async () => {
      await ge(l.stripeKey || ""), E.value = !0;
      try {
        const N = await se.post(l.apiUrl, {
          amount: l.amount * 100,
          currency: l.currency,
          metadata: l.metadata,
          productName: l.productName,
          productDescription: l.productDescription,
          units: l.units,
          email: l.email
        });
        _.value = N.data.clientSecret;
      } catch (N) {
        console.error("Failed to create payment intent:", N);
      }
    });
    async function T() {
      const N = a.value?.instance, M = a.value?.elements;
      if (N && M) {
        await M.submit();
        const { error: D } = await N.confirmPayment({
          elements: M,
          clientSecret: _.value,
          confirmParams: {
            return_url: l.returnUrl
          }
        });
        D ? console.log(D) : p(te);
      }
    }
    return (N, M) => E.value ? (v(), k("div", Ue, [
      X(y(ce), {
        "stripe-key": s.stripeKey,
        "instance-options": c.value,
        "elements-options": L.value,
        ref_key: "elementsComponent",
        ref: a
      }, {
        default: le(() => [
          X(y(ue), {
            type: "payment",
            options: m.value,
            ref_key: "paymentComponent",
            ref: f
          }, null, 8, ["options"])
        ]),
        _: 1
      }, 8, ["stripe-key", "instance-options", "elements-options"]),
      o("button", {
        onClick: T,
        disabled: s.buttonDisabled,
        class: S(s.buttonClass)
      }, B(s.buttonLabel), 11, Ve)
    ])) : q("", !0);
  }
};
export {
  Je as ExtPay,
  He as PaymentDetails,
  Ke as PaymentWidgets,
  Xe as Stripe
};
