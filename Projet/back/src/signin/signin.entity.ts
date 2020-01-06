import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Signin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 40, unique: true })
    pseudo: string;

    @Column()
    email: string;

    @Column({ length: 50, nullable: true })
    motDePasse: string|undefined;

    @Column({ length: 100, nullable: true })
    motDePasseHash: string|undefined;

    
}
