import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('receitas')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  deleted: boolean;
}
