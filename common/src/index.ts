import { z } from "zod";

export const signUpInputProps = z.object({
  username: z.string().email(),
  password: z.string().min(3),
});

export type SignUpParams = z.infer<typeof signUpInputProps>;
