import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentDto } from './dto/comment.dto';
import { CatService } from 'src/cat/cat.service';
@Injectable()
export class CommentService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cls: CatService,
  ) { }
  async postComment(dto: CommentDto) {
    const userId = this.cls.getCattUser();
    // console.log('userId', userId);
    try {
      await this.prismaService.comment.create({
        data: {
          article: { connect: { id: +dto.id } },
          user: { connect: { id: +userId } },
          comment: dto.comment,
        },
      });
    } catch (error) {
      console.log('ups something went wrong', error);
      throw error;
    }
  }
}
