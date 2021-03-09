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
exports.Biodatum = void 0;
const typeorm_1 = require("typeorm");
const linkedidentity_entity_1 = require("../../linkedidentity/entities/linkedidentity.entity");
let Biodatum = class Biodatum {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Biodatum.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Biodatum.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Biodatum.prototype, "middleName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Biodatum.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Biodatum.prototype, "dateOfBirth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Biodatum.prototype, "nationality", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Biodatum.prototype, "countryOfBirth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Biodatum.prototype, "stateofbirth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Biodatum.prototype, "townofbirth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Biodatum.prototype, "residenceaddress", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Biodatum.prototype, "profession", void 0);
__decorate([
    typeorm_1.OneToOne(type => linkedidentity_entity_1.Linkedidentity, Linkedidentity => Linkedidentity.Biodatum),
    __metadata("design:type", linkedidentity_entity_1.Linkedidentity)
], Biodatum.prototype, "Linkedidentity", void 0);
Biodatum = __decorate([
    typeorm_1.Entity()
], Biodatum);
exports.Biodatum = Biodatum;
//# sourceMappingURL=biodatum.entity.js.map