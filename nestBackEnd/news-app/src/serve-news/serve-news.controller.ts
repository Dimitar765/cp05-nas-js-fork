import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { ServeNewsService } from './serve-news.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { Request } from 'express';

@Controller('news')
export class ServeNewsController {
  constructor(private readonly news: ServeNewsService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  getArticles(@Req() req: Request) {
    return this.news.fetchDb(req.query.skip, req.query.take);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/:id')
  getArticleById(@Param('id') id: number) {
    return this.news.getArticleById(id);
  }
}
