import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { CacheModule } from '@nestjs/cache-manager';
// import { User } from './shared/entities/user.entity';
// import { InventoryModule } from './modules/inventory/inventory.module';
// import { SalesModule } from './modules/sales/sales.module';
// import { AuthModule } from './modules/auth/auth.module';
// import { UsersModule } from './modules/users/users.module';
import { UserModule } from './user/user.module';
import { AuthInventorySalesCustomerAnalyticsPaymentsSettingsModule } from './auth-inventory-sales-customer-analytics-payments-settings/auth-inventory-sales-customer-analytics-payments-settings.module';
import { AuthModule } from './inventory/auth/auth.module';
import { AuthModule } from './modules/auth/auth.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { SalesModule } from './modules/sales/sales.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { SettingsModule } from './modules/settings/settings.module';

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
    UserModule,
    AuthInventorySalesCustomerAnalyticsPaymentsSettingsModule,
    AuthModule,
    InventoryModule,
    SalesModule,
    AnalyticsModule,
    PaymentsModule,
    SettingsModule,
    // AuthModule,
    // UsersModule,
    // InventoryModule,
    // SalesModule,
  ],
})
export class AppModule {}
