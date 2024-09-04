import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('receitas')
export class ReceitasEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  date: Date;

  @Column()
  deleted: boolean;
}
