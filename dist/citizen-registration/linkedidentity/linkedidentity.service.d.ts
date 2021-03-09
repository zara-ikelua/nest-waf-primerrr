import { Repository } from 'typeorm';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';
import { Linkedidentity } from './entities/linkedidentity.entity';
export declare class LinkedidentityService {
    private LinkedidentityRepository;
    constructor(LinkedidentityRepository: Repository<Linkedidentity>);
    create(createLinkedidentityDto: CreateLinkedidentityDto): Promise<Linkedidentity>;
    findAll(): Promise<Linkedidentity[]>;
    findOne(id: number): Promise<Linkedidentity>;
    update(id: number, updateLinkedidentityDto: UpdateLinkedidentityDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
