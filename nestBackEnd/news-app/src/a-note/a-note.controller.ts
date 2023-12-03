import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ANoteService } from './a-note.service';
import { aNoteDto } from './dto/a-note.dto';
import { Request } from 'express';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller()
export class ANoteController {
    constructor(private readonly aNoteService: ANoteService) { }


    @UseGuards(AuthenticatedGuard)
    @Post('news/:id/a-note')
    createNote(@Body() dto: aNoteDto, @Req() req: Request) {
        const user: any = req?.user;
        const id = user?.id;
        return this.aNoteService.createNote(dto, id);
    }

    @UseGuards(AuthenticatedGuard)
    @Get('a-note')
    getNotes(@Req() req: Request) {
        const user: any = req?.user;
        const id = user?.id;
        console.log('from controler', id);

        return this.aNoteService.getNotes(id);
    }
}
