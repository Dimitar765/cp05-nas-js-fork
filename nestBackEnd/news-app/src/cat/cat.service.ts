import { Injectable } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
@Injectable()
export class CatService {
  constructor(private readonly cls: ClsService) { }

  getCattUser() {
    const userId = this.cls.get();
    //    console.log('from cat service', userId);
    return userId;
  }
}
