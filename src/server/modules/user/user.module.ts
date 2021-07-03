import { Module } from '@nestjs/common';
import { UserDataService } from './services/user-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/server/entities/user.entity';
import { UserPasswordHistory } from 'src/server/entities/user-password-history.entity';
import { UserService } from './services/user.service';
import { UserEmailsService } from './services/user-emails.service';
import { UserEmailVerification } from 'src/server/entities/user-email-verification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserPasswordHistory, UserEmailVerification])],
  providers: [UserDataService, UserService, UserEmailsService],
  exports: [UserService],
})
export class UserModule {}
