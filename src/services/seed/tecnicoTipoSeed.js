import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";

export const Recnico = [];

export function createRandomTecnicoTipo() {
    return {

        name: faker.internet.userName()
    };
}

const newFakerTecnicoTipo = async () => {
    const data = await prisma.tecnicoTipo.create({
        data: createRandomTecnicoTipo()
    })
    return data
}
const tecnicoTipoSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(() => newFakerTecnicoTipo());
}

export { tecnicoTipoSeed }