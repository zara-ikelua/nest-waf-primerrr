"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLinkedidentityDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_linkedidentity_dto_1 = require("./create-linkedidentity.dto");
class UpdateLinkedidentityDto extends mapped_types_1.PartialType(create_linkedidentity_dto_1.CreateLinkedidentityDto) {
}
exports.UpdateLinkedidentityDto = UpdateLinkedidentityDto;
//# sourceMappingURL=update-linkedidentity.dto.js.map