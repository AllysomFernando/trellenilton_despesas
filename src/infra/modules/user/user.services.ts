import { UserEntity } from '@/infra/database/entities/user.entity';
import { UserRepository } from '@/infra/repositories/user-repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private db: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.db.find();
  }

  async findById(id: string): Promise<UserEntity | null> {
    return await this.db.findOneBy({ id });
  }

  async create(user: UserEntity) {
    return this.db.create(user);
  }

  async update(id: string, user: UserEntity) {
    return await this.db.update(id, user);
  }

  async delete(id: string, user: UserEntity) {
    return await this.db.update(id, user);
  }
}
