"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANoteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ANoteService = class ANoteService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createNote(dto, id) {
        try {
            await this.prismaService.analiticalNote.create({
                data: {
                    article: { connect: { id: +dto.id } },
                    user: { connect: { id: +id } },
                    note: dto.content,
                }
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 400);
        }
    }
    async getNotes(id) {
        try {
            return await this.prismaService.analiticalNote.findMany({
                where: {
                    userId: +id
                }
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 400);
        }
    }
};
exports.ANoteService = ANoteService;
exports.ANoteService = ANoteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ANoteService);
//# sourceMappingURL=a-note.service.js.map