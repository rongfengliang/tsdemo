"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var app_1 = require("./app");
var userproxy = {
    name: "dalong",
    age: 333
};
var usertype = new app_1.default.UserType("dddd");
var proxy = new User_1.default();
proxy.proxy(userproxy);
proxy.print2();
usertype.print();
