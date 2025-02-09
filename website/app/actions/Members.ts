"use server";
import { prisma } from "@/prisma/prisma";
import { uploadToCloudinary } from "@/lib/cloudinary";
import cloudinary from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";


export async function getAllMembers() {
    return await prisma.member.findMany();
}


export async function createMember(formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const position = formData.get('position') as string;
        const year = parseInt(formData.get('year') as string);
        const website = formData.get('website') as string;
        const linkedin = formData.get('linkedin') as string;
        const instagram = formData.get('instagram') as string;
        const image = formData.get('image') as File;

        if (!name || !position || !year || !image) {
            throw new Error('Missing required fields');
        }

        const imageUrl = await uploadToCloudinary(image, 'members');

        

        await prisma.member.create({
            data: {
                name,
                position,
                year,
                website,
                linkedin,
                instagram,
                image: imageUrl,
            },
        });
        revalidatePath("/members");
        revalidatePath('/admin/members');
        return { success: "Member added!" };


        
    } catch (error) {
        console.error('Error creating member:', error);
        return { error: "Could not add member" };
        
    }
}


export async function deleteMember(memberId: string) {
    try {
      // Fetch member
      const member = await prisma.member.findUnique({ where: { id: memberId } });
      if (!member) {
        return { error: "Member not found" };
      }
  
      // Extract Cloudinary public_id from image URL
      const publicId = member.image.split("/").pop()?.split(".")[0];
  
      if (publicId) {
        await cloudinary.uploader.destroy(`members/${publicId}`);
      }
  
      // Delete member from MongoDB
      await prisma.member.delete({ where: { id: memberId } });
      revalidatePath("/members");
      revalidatePath('/admin/members');
  
      return { success: "Member deleted successfully" };
    } catch (error) {
      console.error("Error deleting member:", error);
      return { error: "Internal server error" };
    }
  }
  