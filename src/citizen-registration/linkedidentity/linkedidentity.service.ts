import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';
import { Linkedidentity } from './entities/linkedidentity.entity';

@Injectable()
export class LinkedidentityService {
  constructor(
    //inject user repository for use here in UsersService as if it is part of the class
    @InjectRepository(Linkedidentity)
    private LinkedidentityRepository: Repository<Linkedidentity>
  ) { }
  async create(createLinkedidentityDto: CreateLinkedidentityDto) {
    const newLinkedidentity: Linkedidentity = this.LinkedidentityRepository.create(createLinkedidentityDto)
    return await this.LinkedidentityRepository.save(newLinkedidentity);

    //return 'This action adds a new linkedidentity';

  }

  async findAll() {
    //return `This action returns all linkedidentity`;
    return await this.LinkedidentityRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} linkedidentity`;
    return await this.LinkedidentityRepository.findOne(id);

  }

  async update(id: number, updateLinkedidentityDto: UpdateLinkedidentityDto) {
    //return `This action updates a #${id} linkedidentity`;
    return await this.LinkedidentityRepository.update(id, updateLinkedidentityDto);

  }

  async remove(id: number) {
    //return `This action removes a #${id} linkedidentity`;
    return await this.LinkedidentityRepository.delete(id);
  }
}
