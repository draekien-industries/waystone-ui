import { z } from 'zod';

export const colorChanelSchema = z.number().min(0).max(255);

export type ColorChanel = z.infer<typeof colorChanelSchema>;
