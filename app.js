"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("./log");
var UserType = /** @class */ (function () {
    function UserType(name, appv) {
        this.userName = name;
        this.appv = appv;
    }
    UserType.prototype.print = function () {
        console.log(JSON.stringify(this.userName));
    };
    UserType = __decorate([
        log_1.default
    ], UserType);
    return UserType;
}());
exports.UserType = UserType;
var AppVersion = /** @class */ (function () {
    function AppVersion() {
    }
    AppVersion.prototype.getVersion = function () {
        return this.appVersion;
    };
    return AppVersion;
}());
exports.AppVersion = AppVersion;
var APPV;
(function (APPV) {
    APPV[APPV["FIRST"] = 0] = "FIRST";
    APPV[APPV["SECOND"] = 1] = "SECOND";
    APPV[APPV["THIRD"] = 2] = "THIRD";
})(APPV = exports.APPV || (exports.APPV = {}));
exports.default = { UserType: UserType, AppVersion: AppVersion };
