import { prisma } from "@/prisma/prisma";

export function getAllMembers() {
    return prisma.member.findMany();
}