import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";


const newFakerCliente = async () => {
    const data = await prisma.cliente.create({
        data: {
            name: faker.internet.userName(),
            email: faker.internet.email(),
            status: true,
            empresa: {
                connect: {
                    id: Number(faker.random.numeric(1))
                }
            }
        }
    })
    return data
}
const ClienteSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(() => newFakerCliente());
}

export { ClienteSeed }