import { z } from 'zod';

export const hueSchema = z.number().min(0).max(360);
export const percentageSchema = z.number().min(0).max(100);

export const hslSchema = z
  .object({
    h: hueSchema,
    s: percentageSchema,
    l: percentageSchema,
  })
  .required();

export type Hue = z.infer<typeof hueSchema>;
export type Percentage = z.infer<typeof percentageSchema>;
export type HslColor = Required<z.infer<typeof hslSchema>>;
