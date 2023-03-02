import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";


const newFakerEmpresa = async () => {
    const data = await prisma.empresa.create({
        data: {
            razao_social: faker.company.name(),
            nome_fantasia: faker.company.companySuffix(),
            tipo: faker.company.bsNoun(),
            ie: faker.random.numeric(5),
            clientes: faker.random.numeric(5),
            name: faker.company.bs()
            // tiket: {
            //     connect: {
            //         id: 1
            //     }
            // },
            // user: {
            //     connect: {
            //         id: Number(faker.random.numeric(1))
            //     }
            // },
            // tecnico: {
            //     connect: {
            //         id: Number(faker.random.numeric(1))
            //     }
            // }
        }
    })
    // console.log(data)
    return data
}
const empresaSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(() => newFakerEmpresa());
}

export { empresaSeed }