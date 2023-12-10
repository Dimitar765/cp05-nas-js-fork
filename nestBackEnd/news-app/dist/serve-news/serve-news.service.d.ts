import { PrismaService } from 'src/prisma/prisma.service';
export declare class ServeNewsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    fetchDb(skip: any, take: any): Promise<{
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
