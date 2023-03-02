import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";


const newFakerTiketStatus = async () => {
    const data = await prisma.tiketStatus.create({
        data: {
            name: faker.name.jobType(),
        }

    })
    return data
}
const tiketStatusSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(() => newFakerTiketStatus());
}

export { tiketStatusSeed }