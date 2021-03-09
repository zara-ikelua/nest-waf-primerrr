import { LinkedidentityService } from './linkedidentity.service';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';
export declare class LinkedidentityController {
    private readonly linkedidentityService;
    constructor(linkedidentityService: LinkedidentityService);
    createForm(): void;
    create(createLinkedidentityDto: CreateLinkedidentityDto): Promise<import("./entities/linkedidentity.entity").Linkedidentity>;
    findAll(): Promise<import("./entities/linkedidentity.entity").Linkedidentity[]>;
    findOne(id: string): Promise<import("./entities/linkedidentity.entity").Linkedidentity>;
    update(id: string, updateLinkedidentityDto: UpdateLinkedidentityDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
