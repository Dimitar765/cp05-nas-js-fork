import { Module } from '@nestjs/common';
import { ANoteService } from './a-note.service';
import { ANoteController } from './a-note.controller';

@Module({
  providers: [ANoteService],
  controllers: [ANoteController]
})
export class ANoteModule {}
