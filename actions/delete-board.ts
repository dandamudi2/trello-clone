"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface deleteBoardProps{
  id:string
}
export async function deleteBoard({id}:deleteBoardProps) {
  await db.board.delete({
    where: {
      id
    }
  });

  revalidatePath("/organization/org_2XwLIDt5x0Ay86prfZg7BqrELWR");
}