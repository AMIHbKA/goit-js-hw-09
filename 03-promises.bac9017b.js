!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("6JpON");function i(e,n){var t=Math.random()>.3;return new Promise((function(r,o){setTimeout((function(){t&&r("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")),o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}var u=document.querySelector(".form").elements,a=u.delay,c=u.step,f=u.amount;addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(a.value),t=Number(c.value),r=Number(f.value),u=1;u<=r;u+=1)i(u,n).then((function(e){return o.Notify.success(e)})).catch((function(e){return o.Notify.failure(e)})),n+=t}))}();
//# sourceMappingURL=03-promises.bac9017b.js.map
