import { UserRepository } from '@/infra/repositories/user-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly db: UserRepository) {}

  async findAll() {
    return await this.db.getUsers();
  }

  async findById(id: string) {
    return await this.db.getUserById(id);
  }

  async create(user) {
    return await this.db.createUser(user);
  }

  async update(id, user) {
    return await this.db.updateUser(id, user);
  }

  async delete(id) {
    return await this.db.deleteUser(id);
  }
}
