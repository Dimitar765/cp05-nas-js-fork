import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { Request } from 'express';
export declare class CommentController {
    private readonly commetService;
    constructor(commetService: CommentService);
    postComment(dto: CommentDto, req: Request): Promise<void>;
}
