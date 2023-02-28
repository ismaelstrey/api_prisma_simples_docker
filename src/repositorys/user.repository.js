import {prisma} from '../services/prisma'

export const createUser = async (data) =>{
    const user = await prisma.user.create({
        data,
        select:{
            id:true,
            name: true,
            email: true,
            password: false,
            phone: true
        }
    })
    return user
}

export const getAll = async () => {
    const user = await prisma.user.findMany({
        select:{
            id:true,
            name: true,
            email: true,
            password: false,
            phone: true,
            created_at:true,
            updated_at:true
            
        }
    })
    return user
}

export const getById = async (id,data) => {
    const user = await prisma.user.findFirst({
        where:{
            id
        },select:{
            id:true,
            name: true,
            email: true,
            password: false,
            phone: true,
            created_at:true,
            updated_at:true 
        }
    })
    return user
}
export const updateUser = async (id, data) => {
    const user = await prisma.user.update({       
        where: {
            id
        },
        data,
        select:{
            id:true,
            name: true,
            email: true,
            password: false,
            phone: true,
            created_at:true,
            updated_at:true 
        }
    })
    return user
}
