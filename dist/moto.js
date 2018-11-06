"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var veiculo_1 = __importDefault(require("./veiculo"));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(modelo, cilindradas) {
        var _this = _super.call(this) || this;
        _this.cilindradas = "";
        _this.modelo = modelo;
        _this.cilindradas = cilindradas;
        return _this;
    }
    Moto.prototype.getCilindradas = function () {
        return this.cilindradas;
    };
    Moto.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 20;
    };
    return Moto;
}(veiculo_1.default));
exports.default = Moto;