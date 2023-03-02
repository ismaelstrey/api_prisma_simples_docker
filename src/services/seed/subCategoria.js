import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";


const newFakerSubcategia = async () => {
    const data = await prisma.subcategoria.create({
        data: {
            name: faker.internet.userName(),
            color: faker.color.rgb(),
        }

    })
    return data
}
const SubcategiaSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(() => newFakerSubcategia());
}

export { SubcategiaSeed }