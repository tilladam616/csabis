"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoglalasController = void 0;
const common_1 = require("@nestjs/common");
const foglalas_service_1 = require("./foglalas.service");
let FoglalasController = class FoglalasController {
    constructor(foglalasService) {
        this.foglalasService = foglalasService;
    }
    foglalasKeszit(body) {
        return this.foglalasService.foglalasKeszit(body);
    }
    foglalasKer() {
        return this.foglalasService.foglalasKer();
    }
};
exports.FoglalasController = FoglalasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FoglalasController.prototype, "foglalasKeszit", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FoglalasController.prototype, "foglalasKer", null);
exports.FoglalasController = FoglalasController = __decorate([
    (0, common_1.Controller)('foglalas'),
    __metadata("design:paramtypes", [foglalas_service_1.FoglalasService])
], FoglalasController);
//# sourceMappingURL=foglalas.controller.js.map