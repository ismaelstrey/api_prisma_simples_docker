import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";


const newFakerEmpresaTipo = async () => {
    const data = await prisma.empresaTipo.create({
        data: {
            name: faker.internet.userName(),

        }

    })
    return data
}
const empresaTipoSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(async () => await newFakerEmpresaTipo());
}

export { empresaTipoSeed }