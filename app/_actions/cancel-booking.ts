"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function cancelBooking(id: string) {
  await prisma.booking.update({
    where: {
      id,
    },
    data: {
      cancelled: true,
      cancelledAt: new Date(),
    },
  });

  revalidatePath("/");
  revalidatePath("/bookings");
}
