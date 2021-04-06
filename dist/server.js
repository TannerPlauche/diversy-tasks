"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var common_1 = require("@tsed/common");
var body_parser_1 = require("body-parser");
// import compress from "compression";
var cookie_parser_1 = require("cookie-parser");
var method_override_1 = require("method-override");
var cors_1 = require("cors");
var rootDir = __dirname;
var Server = /** @class */ (function () {
    function Server() {
    }
    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
     */
    Server.prototype.$beforeRoutesInit = function () {
        this.app
            .use(cors_1.default())
            .use(cookie_parser_1.default())
            // .use(compress({}))
            .use(method_override_1.default())
            .use(body_parser_1.default.json())
            .use(body_parser_1.default.urlencoded({
            extended: true
        }));
    };
    __decorate([
        common_1.Inject()
    ], Server.prototype, "app", void 0);
    __decorate([
        common_1.Configuration()
    ], Server.prototype, "settings", void 0);
    Server = __decorate([
        common_1.Configuration({
            rootDir: rootDir,
            acceptMimes: ["application/json"]
        })
    ], Server);
    return Server;
}());
exports.Server = Server;
