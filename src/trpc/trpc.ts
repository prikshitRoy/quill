import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure; //! publicProcedure --- It creates an api end-point that any one can use it regardless the user is authenticated or not ( You can call it like a public API )
