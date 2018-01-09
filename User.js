"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * proxy Class
 *
 * @export
 * @class
 */
var default_1 = /** @class */ (function () {
    function default_1() {
        var _this = this;
        /**
         * proxy itme juest for print
         * @param {any} proxyObjcet
         */
        this.proxy = function (proxyObjcet) {
            _this.proxyItem = proxyObjcet;
        };
        /**
         * print object info just like toString()
         * @param {any} item | item
         */
        this.print = function (item) {
            console.log(JSON.stringify(item));
        };
        this.print2 = function () {
            console.log(JSON.stringify(_this.proxyItem));
        };
    }
    return default_1;
}());
exports.default = default_1;
