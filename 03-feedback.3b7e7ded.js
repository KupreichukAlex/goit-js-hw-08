var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("kEUo3");const r=document.querySelector(".feedback-form");let l={};!function(){let e=localStorage.getItem("feedback-form-state");console.log("Збережені дані в сховищі:",e),e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{l[e]=t,r.elements[e].value=t})))}(),r.addEventListener("input",(function(e){e.preventDefault();new FormData(r).forEach(((e,t)=>console.log(e,t)))})),r.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements,o=t.email.value,n=t.message.value;""===o||""===n?window.alert("Всі поля мають бути заповнені!"):(e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log("Дані відправлено! Форма очищена."))}));
//# sourceMappingURL=03-feedback.3b7e7ded.js.map
