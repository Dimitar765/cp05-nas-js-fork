import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { LocalStrategy } from './strategy/localStrategy';
import { SessionSerializer } from './session.serializer';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [PrismaModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule { }
