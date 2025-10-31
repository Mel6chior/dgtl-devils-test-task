import { Entity } from "..";

export interface UserEntity extends Entity {
    login: string;

    email: string;

    passwordHash: string;

    name?: string;
}
