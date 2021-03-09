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
exports.LinkedidentityController = void 0;
const common_1 = require("@nestjs/common");
const linkedidentity_service_1 = require("./linkedidentity.service");
const create_linkedidentity_dto_1 = require("./dto/create-linkedidentity.dto");
const update_linkedidentity_dto_1 = require("./dto/update-linkedidentity.dto");
let LinkedidentityController = class LinkedidentityController {
    constructor(linkedidentityService) {
        this.linkedidentityService = linkedidentityService;
    }
    createForm() {
    }
    create(createLinkedidentityDto) {
        return this.linkedidentityService.create(createLinkedidentityDto);
    }
    findAll() {
        return this.linkedidentityService.findAll();
    }
    findOne(id) {
        return this.linkedidentityService.findOne(+id);
    }
    update(id, updateLinkedidentityDto) {
        return this.linkedidentityService.update(+id, updateLinkedidentityDto);
    }
    remove(id) {
        return this.linkedidentityService.remove(+id);
    }
};
__decorate([
    common_1.Get('create'),
    common_1.Render('users/create-Linkedidentity.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkedidentityController.prototype, "createForm", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_linkedidentity_dto_1.CreateLinkedidentityDto]),
    __metadata("design:returntype", void 0)
], LinkedidentityController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkedidentityController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinkedidentityController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_linkedidentity_dto_1.UpdateLinkedidentityDto]),
    __metadata("design:returntype", void 0)
], LinkedidentityController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinkedidentityController.prototype, "remove", null);
LinkedidentityController = __decorate([
    common_1.Controller('linkedidentity'),
    __metadata("design:paramtypes", [linkedidentity_service_1.LinkedidentityService])
], LinkedidentityController);
exports.LinkedidentityController = LinkedidentityController;
//# sourceMappingURL=linkedidentity.controller.js.map