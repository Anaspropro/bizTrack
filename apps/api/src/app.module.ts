import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { CacheModule } from '@nestjs/cache-manager';
// import { User } from './shared/entities/user.entity';
// import { InventoryModule } from './modules/inventory/inventory.module';
// import { SalesModule } from './modules/sales/sales.module';
// import { AuthModule } from './modules/auth/auth.module';
// import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    // CacheModule.register({
    //   max: 1000,
    //   ttl: 0,
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        database: process.env.DB_NAME,
        // entities: [User],
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),
    // AuthModule,
    // UsersModule,
    // InventoryModule,
    // SalesModule,
  ],
})
export class AppModule {}
