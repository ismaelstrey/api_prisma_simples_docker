import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";


const newFakerTiket = async () => {
    const data = await prisma.tiket.create({
        data: {
            problema_informado: faker.company.name(),
            observacao: faker.company.companySuffix(),
            // empresa: {
            //     connect: {
            //         id: Number(faker.random.numeric(1))
            //     }
            // },
            tecnico: {
                connect: {
                    id: Number(faker.random.numeric(1))
                }
            },
            categoria: {
                connect: {
                    id: Number(faker.random.numeric(1))
                }
            }
            // empresaId: Number(faker.random.numeric(1)),
            // tecnicoId: Number(faker.random.numeric(1)),
            // categoriaId: Number(faker.random.numeric(1)),
            // tiketStatusId: Number(faker.random.numeric(1)),

        }
    })
    console.log(data)
    return data
}
const tiketSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(() => newFakerTiket());
}

export { tiketSeed }