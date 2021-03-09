import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";

import { Biodatum } from "src/citizen-registration/biodata/entities/biodatum.entity";
@Entity()
export class Linkedidentity {

    @PrimaryGeneratedColumn()
     id: number;

    @Column() 
    NIN: string;

    @Column()
     BVN: string;

    @Column() 
    mobileNumbers: string;

    @JoinColumn()
    @OneToOne(type => Biodatum, Biodatum => Biodatum.Linkedidentity, {cascade:true})
    Biodatum: Biodatum;


}
