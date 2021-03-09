import { Repository } from 'typeorm';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';
import { Biodatum } from './entities/biodatum.entity';
export declare class BiodataService {
    private BiodatumRepository;
    constructor(BiodatumRepository: Repository<Biodatum>);
    create(createBiodatumDto: CreateBiodatumDto): Promise<Biodatum>;
    findAll(): Promise<Biodatum[]>;
    findOne(id: number): Promise<Biodatum>;
    update(id: number, updateBiodatumDto: UpdateBiodatumDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
