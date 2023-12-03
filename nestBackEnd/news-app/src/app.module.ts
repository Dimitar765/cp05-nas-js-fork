import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { FetchFeedsModule } from './fetch-feeds/fetch-feeds.module';
import { FetchFeedsService } from './fetch-feeds/fetch-feeds.service';
import { ServeNewsModule } from './serve-news/serve-news.module';
import { CommentModule } from './comment/comment.module';
import { ClsModule } from 'nestjs-cls';
import { CatModule } from './cat/cat.module';
import { CatService } from './cat/cat.service';
import { CollectionModule } from './collection/collection.module';
import { ANoteModule } from './a-note/a-note.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
        generateId: true,
        setup: (cls, req, res) => {
          cls.get(res.locals.id);
          cls.set('name', req.id);
        },
      },
    }),
    FetchFeedsModule,
    ServeNewsModule,
    CommentModule,
    CatModule,
    CollectionModule,
    ANoteModule,
  ],
  controllers: [],
  providers: [FetchFeedsService, CatService],
})
export class AppModule {
  constructor(private readonly getData: FetchFeedsService) {
    this.getData.startFetch();
  }
}
