import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.services';
import { UserRepository } from '@/infra/repositories/user-repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModules {}
