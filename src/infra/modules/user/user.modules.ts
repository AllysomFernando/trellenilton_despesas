import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.services';
import { UserRepository } from '@/infra/repositories/user-repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@/infra/database/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModules {}
