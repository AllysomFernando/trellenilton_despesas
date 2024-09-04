import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/database/entities/user.entity';
import { ReceitasEntity } from './infra/database/entities/receitas.entity';
import { DespesasEntity } from './infra/database/entities/despesas.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'NewPassw0rd!',
      database: 'money_analitc',
      entities: [UserEntity, ReceitasEntity, DespesasEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, ReceitasEntity, DespesasEntity]),
  ],
})
export class AppModule {}
