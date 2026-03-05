"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function cancelBooking(id: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Não autorizado");
  }

  await prisma.booking.update({
    where: {
      id,
      userId: session.user.id,
    },
    data: {
      cancelled: true,
      cancelledAt: new Date(),
    },
  });

  revalidatePath("/");
  revalidatePath("/bookings");
}
