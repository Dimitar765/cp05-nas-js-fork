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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANoteController = void 0;
const common_1 = require("@nestjs/common");
const a_note_service_1 = require("./a-note.service");
const a_note_dto_1 = require("./dto/a-note.dto");
const authenticated_guard_1 = require("../auth/authenticated.guard");
let ANoteController = class ANoteController {
    constructor(aNoteService) {
        this.aNoteService = aNoteService;
    }
    createNote(dto, req) {
        const user = req?.user;
        const id = user?.id;
        return this.aNoteService.createNote(dto, id);
    }
    getNotes(req) {
        const user = req?.user;
        const id = user?.id;
        console.log('from controler', id);
        return this.aNoteService.getNotes(id);
    }
};
exports.ANoteController = ANoteController;
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Post)('news/:id/a-note'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [a_note_dto_1.aNoteDto, Object]),
    __metadata("design:returntype", void 0)
], ANoteController.prototype, "createNote", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('a-note'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ANoteController.prototype, "getNotes", null);
exports.ANoteController = ANoteController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [a_note_service_1.ANoteService])
], ANoteController);
//# sourceMappingURL=a-note.controller.js.map