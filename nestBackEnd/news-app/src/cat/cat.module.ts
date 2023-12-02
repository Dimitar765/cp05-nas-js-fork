import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CommentService } from 'src/comment/comment.service';

@Module({
  providers: [CatService, CommentService],
  exports: [CatService],
})
export class CatModule { }
