import { z } from 'zod';
import { colorChanelSchema } from './colorChannel.schema';

export const rgbSchema = z
  .object({
    r: colorChanelSchema,
    g: colorChanelSchema,
    b: colorChanelSchema,
  })
  .required();

export type RgbColor = Required<z.infer<typeof rgbSchema>>;
