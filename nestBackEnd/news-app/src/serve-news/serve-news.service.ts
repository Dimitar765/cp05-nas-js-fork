import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServeNewsService {
  constructor(private readonly prismaService: PrismaService) {}

  async fetchDb(skip, take) {
    return await this.prismaService.article.findMany({
      skip: +skip,
      take: +take,
      orderBy: {
        id: 'desc',
      },
    });
  }

  async getArticleById(id: number) {
    return await this.prismaService.article.findFirst({
      where: {
        id: +id,
      },
    });
  }
}
