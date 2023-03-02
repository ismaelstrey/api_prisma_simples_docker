import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";

export const Recnico = [];

export function createRandomTecnico() {
    return {

        email: faker.internet.email(),
        name: faker.internet.userName(),
        type: faker.internet.userName(),
        tecnico_tipo: Number(faker.random.numeric())
    };
}

const newFakerTecnico = async () => {
    const data = await prisma.tecnico.create({
        data: {
            email: faker.internet.email(),
            name: faker.internet.userName(),
            type: faker.internet.userName(),
            tecnico_tipo: {
                connect: {
                    id: Number(faker.random.numeric())
                }
            }
        }
    })
    return data
}
const tecnicoSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(() => newFakerTecnico());
}

export { tecnicoSeed }