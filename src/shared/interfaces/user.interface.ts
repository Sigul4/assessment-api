import { Role } from "./user.dto.interface";

export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    login: string;
    password: string;
    role: Role;
}
