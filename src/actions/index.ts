import { defineAction } from 'astro:actions';
import { z } from 'zod';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(1),
      message: z.string().min(1),
    }),
    handler: async ({ name, message }) => {
      console.log('Message from', name, message);
      return { success: true };
    },
  }),
};
