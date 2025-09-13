import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1).max(100),
      message: z.string().min(1).max(1000),
    }),
    handler: async ({ name, message }) => {
      console.log("Message from", name, message);
      return { success: true };
    },
  }),
};
