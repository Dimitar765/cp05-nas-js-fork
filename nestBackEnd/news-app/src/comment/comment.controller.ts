import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { Request } from 'express';

@Controller()
export class CommentController {
  constructor(private readonly commetService: CommentService) { }

  @UseGuards(AuthenticatedGuard)
  @Post('/news/:id/comments')
  postComment(@Body() dto: CommentDto, @Req() req: Request) {
    const user: any = req?.user;
    const id = user?.id;
    return this.commetService.postComment(dto, id);
  }
}
