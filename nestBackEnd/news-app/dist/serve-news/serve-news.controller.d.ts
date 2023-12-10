import { ServeNewsService } from './serve-news.service';
import { Request } from 'express';
export declare class ServeNewsController {
    private readonly news;
    constructor(news: ServeNewsService);
    getArticles(req: Request): Promise<{
        id: number;
        title: string;
        description: string;
        content: string;
        createdAt: Date;
        imageUrl: string;
    }[]>;
    getArticleById(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        content: string;
        createdAt: Date;
        imageUrl: string;
    }>;
}
