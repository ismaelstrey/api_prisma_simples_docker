import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";


const newFakerTecnico = async () => {
    const data = await prisma.tecnico.create({
        data: {
            email: faker.internet.email(),
            name: faker.internet.userName(),
            type: faker.internet.userName(),
            tecnico_tipo: {
                connect: {
                    id: Number(faker.random.numeric(1))
                }
            }
        }
    })
    return await data
}
const tecnicoSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(async () => await newFakerTecnico());
}

export { tecnicoSeed }