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
exports.BiodataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const biodatum_entity_1 = require("./entities/biodatum.entity");
let BiodataService = class BiodataService {
    constructor(BiodatumRepository) {
        this.BiodatumRepository = BiodatumRepository;
    }
    async create(createBiodatumDto) {
        const newBiodatum = this.BiodatumRepository.create(createBiodatumDto);
        return this.BiodatumRepository.save(newBiodatum);
    }
    async findAll() {
        return await this.BiodatumRepository.find();
    }
    async findOne(id) {
        return await this.BiodatumRepository.findOne(id);
    }
    async update(id, updateBiodatumDto) {
        return await this.BiodatumRepository.update(id, updateBiodatumDto);
    }
    async remove(id) {
        return await this.BiodatumRepository.delete(id);
    }
};
BiodataService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(biodatum_entity_1.Biodatum)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BiodataService);
exports.BiodataService = BiodataService;
//# sourceMappingURL=biodata.service.js.map