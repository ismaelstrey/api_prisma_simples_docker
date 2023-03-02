import { prisma } from '../services/prisma'

export const createTiket = async (data) => {
    const tiket = await prisma.tiket.create({
        data
    })
    return tiket
}

export const getAll = async () => {
    const tiket = await prisma.tiket.findMany({


        include: {
            prioridade: {
                select: {
                    name: true
                }
            },
            tecnico: {
                select: {
                    name: true
                }
            },
            categoria: {
                include: {
                    subcategoria: {
                        select: {
                            name: true,
                            color: true
                        }
                    }
                }
            },
            empresa: {
                select: {
                    nome_fantasia: true

                }
            }
        }
    })
    return tiket
}

export const getById = async (id) => {
    const tiket = await prisma.tiket.findFirst({
        where: {
            id
        }
    })
    return tiket
}
export const updateTiket = async (id, data) => {
    const tiket = await prisma.tiket.update({
        where: {
            id
        },
        data,
    })
    return tiket
}
