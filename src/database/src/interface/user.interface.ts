import { UserType } from "../enum";

export interface User {
  userName: string;
  password: string;
  email: string;
  home: string;
  phone: string;
  gender: string;
  dob: Date;
  bankAccount: string;
  type: UserType;
}
