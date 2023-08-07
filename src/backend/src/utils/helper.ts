import bcrypt from "bcrypt";
import { saltRounds } from "./constants";

const hashFn = async (input: string): Promise<string> => {
  const salt = await bcrypt.genSaltSync(saltRounds);
  console.log("salt", salt);
  return await bcrypt.hashSync(input, salt);
};
const compareHashFn = async (input: string, hash: string): Promise<boolean> => {
  return await bcrypt.compareSync(input, hash);
};

export { hashFn, compareHashFn };
