import { ANoteService } from './a-note.service';
import { aNoteDto } from './dto/a-note.dto';
import { Request } from 'express';
export declare class ANoteController {
    private readonly aNoteService;
    constructor(aNoteService: ANoteService);
    createNote(dto: aNoteDto, req: Request): Promise<void>;
    getNotes(req: Request): Promise<{
        id: number;
        note: string;
        articleId: number;
        userId: number;
    }[]>;
}
