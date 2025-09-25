import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GroupsModule } from './groups/groups.module';
import { ExpensesModule } from './expenses/expenses.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    GroupsModule,
    ExpensesModule,
    TransactionsModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
