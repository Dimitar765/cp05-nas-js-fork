import { PrismaService } from 'src/prisma/prisma.service';
import { CommentDto } from './dto/comment.dto';
import { CatService } from 'src/cat/cat.service';
export declare class CommentService {
    private readonly prismaService;
    private readonly cls;
    constructor(prismaService: PrismaService, cls: CatService);
    postComment(dto: CommentDto): Promise<void>;
}
