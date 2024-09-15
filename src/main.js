"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! IF ANYTHING IN THIS FILE IS CHANGED MAKE SURE setVersion.js HAS ALSO BEEN UPDATED
var App_svelte_1 = require("./App.svelte");
var app = new App_svelte_1.default({
    target: document.body,
    props: {
        version: "1.5.2",
    }
});
exports.default = app;
