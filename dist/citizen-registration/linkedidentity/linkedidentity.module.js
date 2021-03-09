"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedidentityModule = void 0;
const common_1 = require("@nestjs/common");
const linkedidentity_service_1 = require("./linkedidentity.service");
const linkedidentity_controller_1 = require("./linkedidentity.controller");
const typeorm_1 = require("@nestjs/typeorm");
const linkedidentity_entity_1 = require("./entities/linkedidentity.entity");
let LinkedidentityModule = class LinkedidentityModule {
};
LinkedidentityModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([linkedidentity_entity_1.Linkedidentity])],
        controllers: [linkedidentity_controller_1.LinkedidentityController],
        providers: [linkedidentity_service_1.LinkedidentityService]
    })
], LinkedidentityModule);
exports.LinkedidentityModule = LinkedidentityModule;
//# sourceMappingURL=linkedidentity.module.js.map