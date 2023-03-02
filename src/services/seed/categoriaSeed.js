import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";




const newFakerCategoria = async () => {
    const data = await prisma.categoria.create({
        data: {
            name: faker.internet.userName(),
            color: faker.color.rgb(),
            subcategoria: {
                connect: {
                    id: Number(faker.random.numeric(1))
                }
            }
        }
    })
    return data
}
const categoriaSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(() => newFakerCategoria());
}

export { categoriaSeed }