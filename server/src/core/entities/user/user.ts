import { Entity } from "..";

export interface User extends Entity {
    login: string;

    email: string;

    passwordHash: string;

    name: string;
}
