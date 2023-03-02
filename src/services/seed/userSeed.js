import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";

const newFakerUser = async () => {
    const data = await prisma.user.create({
        data: {
            name: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            phone: faker.phone.number()
            // empresa: {
            //     connect: {
            //         id: Number(faker.random.numeric(1))
            //     }
            // }

        }
    })

    console.log(data)
    return data
}
const userSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(() => newFakerUser());
}

export { userSeed }