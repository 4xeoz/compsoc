import { prisma } from "@/prisma/prisma";

export async function getUserById(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
}