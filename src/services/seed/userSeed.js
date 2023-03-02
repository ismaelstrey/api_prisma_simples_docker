import { prisma } from "../prisma";
import { faker } from "@faker-js/faker";

export const User = [];

export function createRandomUser() {
    return {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number()
    };
}

const newFakerUser = async () => {
    const data = await prisma.user.create({
        data: createRandomUser()
    })
    return data
}
const userSeed = async (numero) => {
    await Array.from({ length: numero }).forEach(() => newFakerUser());
}

export { userSeed }