import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const post = await prisma.post.create({
        data: {
            title: "Gym",
            content: "Biceps and back",
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })    
}

main().then(() => console.log("post cereated"));