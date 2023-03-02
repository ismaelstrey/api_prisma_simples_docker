import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";


const newFakerPrioridade = async () => {
    const data = await prisma.prioridade.create({
        data: {
            name: faker.internet.userName(),
            color: faker.color.rgb(),
            icon: faker.image.avatar()
        }

    })
    return await data
}
const prioridadeSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(async () => await newFakerPrioridade());
}

export { prioridadeSeed }