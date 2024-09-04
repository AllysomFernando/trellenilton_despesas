import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("despesas")
export class DespesasEntity {
    
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	value: number;
}
