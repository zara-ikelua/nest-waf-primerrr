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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linkedidentity = void 0;
const typeorm_1 = require("typeorm");
const biodatum_entity_1 = require("../../biodata/entities/biodatum.entity");
let Linkedidentity = class Linkedidentity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Linkedidentity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Linkedidentity.prototype, "NIN", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Linkedidentity.prototype, "BVN", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Linkedidentity.prototype, "mobileNumbers", void 0);
__decorate([
    typeorm_1.JoinColumn(),
    typeorm_1.OneToOne(type => biodatum_entity_1.Biodatum, Biodatum => Biodatum.Linkedidentity, { cascade: true }),
    __metadata("design:type", biodatum_entity_1.Biodatum)
], Linkedidentity.prototype, "Biodatum", void 0);
Linkedidentity = __decorate([
    typeorm_1.Entity()
], Linkedidentity);
exports.Linkedidentity = Linkedidentity;
//# sourceMappingURL=linkedidentity.entity.js.map