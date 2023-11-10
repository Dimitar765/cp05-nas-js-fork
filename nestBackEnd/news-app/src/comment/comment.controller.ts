import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller()
export class CommentController {
  constructor(private readonly commetService: CommentService) { }

  @UseGuards(AuthenticatedGuard)
  @Post('/news/:id/comments')
  postComment(@Body() dto: CommentDto) {
    return this.commetService.postComment(dto);
  }
}
