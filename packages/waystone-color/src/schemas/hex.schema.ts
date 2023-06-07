import { z } from 'zod';

export const hexSchema = z
  .string()
  .regex(/^#([0-9A-F]{3}){1,2}$/i, 'Invalid HEX color');

export type HexColor = z.infer<typeof hexSchema>;
