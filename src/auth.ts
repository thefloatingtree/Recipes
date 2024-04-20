import { SvelteKitAuth } from "@auth/sveltekit"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "@auth/sveltekit/providers/google"
import { prisma } from "./prisma";

export const { handle } = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  
});