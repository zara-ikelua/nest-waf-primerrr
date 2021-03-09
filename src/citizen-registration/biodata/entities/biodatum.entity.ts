
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Linkedidentity } from "../../linkedidentity/entities/linkedidentity.entity";
@Entity()
export class Biodatum {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    middleName: string;
    @Column()
    lastName: string;
    @Column()
    dateOfBirth: Date;
    @Column()
    nationality: string;
    @Column()
    countryOfBirth: string;
    @Column()
    stateofbirth: string
    @Column()
    townofbirth: string
    @Column()
    residenceaddress: string
    @Column()
    profession: string;
    
    @OneToOne(type => Linkedidentity, Linkedidentity => Linkedidentity.Biodatum)
    Linkedidentity: Linkedidentity;
}
