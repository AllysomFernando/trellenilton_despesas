import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/database/entities/user.entity';
import { ReceitasEntity } from './infra/database/entities/receitas.entity';
import { DespesasEntity } from './infra/database/entities/despesas.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [UserEntity, ReceitasEntity, DespesasEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, ReceitasEntity, DespesasEntity]),
  ],
})
export class AppModule {}
