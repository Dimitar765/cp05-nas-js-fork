import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { aNoteDto } from './dto/a-note.dto';

@Injectable()
export class ANoteService {
    constructor(private readonly prismaService: PrismaService) { }

    async createNote(dto: aNoteDto, id: any) {
        try {
            await this.prismaService.analiticalNote.create({
                data: {
                    article: { connect: { id: +dto.id } },
                    user: { connect: { id: +id } },
                    note: dto.content,
                }
            });
        } catch (error) {
            throw new HttpException(error.message, 400);
        }
    }

    async getNotes(id: any) {
        try {
            return await this.prismaService.analiticalNote.findMany({
                where: {
                    userId: +id
                }
            });
        } catch (error) {
            throw new HttpException(error.message, 400);
        }
    }

}
