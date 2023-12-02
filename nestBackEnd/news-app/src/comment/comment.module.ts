import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CatService } from 'src/cat/cat.service';
import { CatModule } from 'src/cat/cat.module';

@Module({
  providers: [CommentService, CatService],
  controllers: [CommentController],
  imports: [CatModule],
})
export class CommentModule { }
