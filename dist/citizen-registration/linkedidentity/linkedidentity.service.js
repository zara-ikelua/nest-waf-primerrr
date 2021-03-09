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
exports.LinkedidentityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const linkedidentity_entity_1 = require("./entities/linkedidentity.entity");
let LinkedidentityService = class LinkedidentityService {
    constructor(LinkedidentityRepository) {
        this.LinkedidentityRepository = LinkedidentityRepository;
    }
    async create(createLinkedidentityDto) {
        const newLinkedidentity = this.LinkedidentityRepository.create(createLinkedidentityDto);
        return await this.LinkedidentityRepository.save(newLinkedidentity);
    }
    async findAll() {
        return await this.LinkedidentityRepository.find();
    }
    async findOne(id) {
        return await this.LinkedidentityRepository.findOne(id);
    }
    async update(id, updateLinkedidentityDto) {
        return await this.LinkedidentityRepository.update(id, updateLinkedidentityDto);
    }
    async remove(id) {
        return await this.LinkedidentityRepository.delete(id);
    }
};
LinkedidentityService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(linkedidentity_entity_1.Linkedidentity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LinkedidentityService);
exports.LinkedidentityService = LinkedidentityService;
//# sourceMappingURL=linkedidentity.service.js.map