-- CreateTable
CREATE TABLE "AnaliticalNote" (
    "id" SERIAL NOT NULL,
    "note" TEXT,
    "articleId" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "AnaliticalNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collections" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CollectionToArticle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CollectionToAnaliticalNote" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CollectionToComment" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionToArticle_AB_unique" ON "_CollectionToArticle"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionToArticle_B_index" ON "_CollectionToArticle"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionToAnaliticalNote_AB_unique" ON "_CollectionToAnaliticalNote"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionToAnaliticalNote_B_index" ON "_CollectionToAnaliticalNote"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionToComment_AB_unique" ON "_CollectionToComment"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionToComment_B_index" ON "_CollectionToComment"("B");

-- AddForeignKey
ALTER TABLE "AnaliticalNote" ADD CONSTRAINT "AnaliticalNote_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnaliticalNote" ADD CONSTRAINT "AnaliticalNote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collections" ADD CONSTRAINT "collections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToArticle" ADD CONSTRAINT "_CollectionToArticle_A_fkey" FOREIGN KEY ("A") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToArticle" ADD CONSTRAINT "_CollectionToArticle_B_fkey" FOREIGN KEY ("B") REFERENCES "collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToAnaliticalNote" ADD CONSTRAINT "_CollectionToAnaliticalNote_A_fkey" FOREIGN KEY ("A") REFERENCES "AnaliticalNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToAnaliticalNote" ADD CONSTRAINT "_CollectionToAnaliticalNote_B_fkey" FOREIGN KEY ("B") REFERENCES "collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToComment" ADD CONSTRAINT "_CollectionToComment_A_fkey" FOREIGN KEY ("A") REFERENCES "collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToComment" ADD CONSTRAINT "_CollectionToComment_B_fkey" FOREIGN KEY ("B") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
