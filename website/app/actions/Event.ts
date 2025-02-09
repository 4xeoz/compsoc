"use server"
import { prisma } from "@/prisma/prisma";
import { uploadToCloudinary } from "@/lib/cloudinary";
import cloudinary from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

export async function getAllEvents() {
    try {
        const events = await prisma.event.findMany();
        return events;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw new Error('Could not fetch events');
    }
}


export async function createEvent(formData: FormData) {
    try {
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const date = formData.get('date') as string;
        const location = formData.get('location') as string;
        const image = formData.get('image') as File;

        if (!title || !description || !date || !location || !image) {
            throw new Error('Missing required fields');
        }

        const imageUrl = await uploadToCloudinary(image, 'events');
        console.log('imageUrl', imageUrl);
        await prisma.event.create({
            data: {
                title,
                description,
                date,
                location,
                image: imageUrl,
            },
        });

        revalidatePath('/admin/events');
        revalidatePath("/events");
        return { success: "Event added!" };

        
    } catch (error) {
        console.error('Error creating event:', error);
        return { error: "Could not add event" };
        
    }
}



export async function deleteEvent(eventId: string) {
    try {
        // Fetch event
        const event = await prisma.event.findUnique({ where: { id: eventId } });
        if (!event) {
            throw new Error('Event not found');
        }

        const pulbicId = event.image.split('/').pop();

        if (pulbicId) {
            await cloudinary.uploader.destroy(pulbicId);
        }

        await prisma.event.delete({ where: { id: eventId } });

        revalidatePath('/admin/events');
        revalidatePath("/events");
        return { success: "Event deleted!" };
        
    } catch (error) {
        console.error('Error deleting event:', error);
        return { error: "Could not delete event" };
        
    }
}