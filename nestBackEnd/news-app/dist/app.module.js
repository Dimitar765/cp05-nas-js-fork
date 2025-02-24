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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const config_1 = require("@nestjs/config");
const fetch_feeds_module_1 = require("./fetch-feeds/fetch-feeds.module");
const fetch_feeds_service_1 = require("./fetch-feeds/fetch-feeds.service");
const serve_news_module_1 = require("./serve-news/serve-news.module");
const comment_module_1 = require("./comment/comment.module");
const nestjs_cls_1 = require("nestjs-cls");
const cat_module_1 = require("./cat/cat.module");
const cat_service_1 = require("./cat/cat.service");
const collection_module_1 = require("./collection/collection.module");
const a_note_module_1 = require("./a-note/a-note.module");
let AppModule = class AppModule {
    constructor(getData) {
        this.getData = getData;
        this.getData.startFetch();
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            nestjs_cls_1.ClsModule.forRoot({
                global: true,
                middleware: {
                    mount: true,
                    generateId: true,
                    setup: (cls, req, res) => {
                        cls.get(res.locals.id);
                        cls.set('name', req.id);
                    },
                },
            }),
            fetch_feeds_module_1.FetchFeedsModule,
            serve_news_module_1.ServeNewsModule,
            comment_module_1.CommentModule,
            cat_module_1.CatModule,
            collection_module_1.CollectionModule,
            a_note_module_1.ANoteModule,
        ],
        controllers: [],
        providers: [fetch_feeds_service_1.FetchFeedsService, cat_service_1.CatService],
    }),
    __metadata("design:paramtypes", [fetch_feeds_service_1.FetchFeedsService])
], AppModule);
//# sourceMappingURL=app.module.js.map