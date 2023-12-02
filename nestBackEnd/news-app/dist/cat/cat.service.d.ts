import { ClsService } from 'nestjs-cls';
export declare class CatService {
    private readonly cls;
    constructor(cls: ClsService);
    getCattUser(): import("nestjs-cls").ClsStore;
}
