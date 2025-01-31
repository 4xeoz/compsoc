"use server"
import { prisma } from "@/prisma/prisma";

export async function getAllEvents() {
    try {
        const events = await prisma.event.findMany();
        return events;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw new Error('Could not fetch events');
    }
}