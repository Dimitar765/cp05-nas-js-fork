import { PrismaService } from 'src/prisma/prisma.service';
import { aNoteDto } from './dto/a-note.dto';
export declare class ANoteService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createNote(dto: aNoteDto, id: any): Promise<void>;
    getNotes(id: any): Promise<{
        id: number;
        note: string;
        articleId: number;
        userId: number;
    }[]>;
}
