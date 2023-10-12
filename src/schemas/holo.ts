import { z } from 'zod';

const holochainVersion = z.string();

export const stateInfoSchema = z.object({
	default_version: holochainVersion
});

export type StateInfo = z.infer<typeof stateInfoSchema>;
