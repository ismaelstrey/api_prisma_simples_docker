-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "empresaId" INTEGER,
    CONSTRAINT "users_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "empresas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "razao_social" TEXT,
    "nome_fantasia" TEXT,
    "ie" TEXT,
    "name" TEXT,
    "clientes" TEXT,
    "tipo" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "empresaTipoId" INTEGER,
    "clienteId" INTEGER,
    CONSTRAINT "empresas_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "empresas_empresaTipoId_fkey" FOREIGN KEY ("empresaTipoId") REFERENCES "empresa_tipo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tecnicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "type" TEXT,
    "name" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "empresaId" INTEGER,
    "tecnicoTipoId" INTEGER,
    CONSTRAINT "tecnicos_tecnicoTipoId_fkey" FOREIGN KEY ("tecnicoTipoId") REFERENCES "tecnico_tipo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "tecnicos_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "problema_informado" TEXT,
    "observacao" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "prioridadeId" INTEGER,
    "tecnicoId" INTEGER,
    "tiketStatusId" INTEGER,
    "empresaId" INTEGER,
    "categoriaId" INTEGER,
    CONSTRAINT "tickets_tiketStatusId_fkey" FOREIGN KEY ("tiketStatusId") REFERENCES "tiket_status" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "tickets_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "tickets_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "tickets_tecnicoId_fkey" FOREIGN KEY ("tecnicoId") REFERENCES "tecnicos" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "tickets_prioridadeId_fkey" FOREIGN KEY ("prioridadeId") REFERENCES "prioridades" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "subcategoriaId" INTEGER,
    CONSTRAINT "categorias_subcategoriaId_fkey" FOREIGN KEY ("subcategoriaId") REFERENCES "subcategorias" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "subcategorias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "color" TEXT
);

-- CreateTable
CREATE TABLE "prioridades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "color" TEXT,
    "icon" TEXT
);

-- CreateTable
CREATE TABLE "tiket_status" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "tecnico_tipo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "empresa_tipo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tecnicos_email_key" ON "tecnicos"("email");
