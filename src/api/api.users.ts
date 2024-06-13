import { instance } from "./api.config.ts";
import {
    CreateUser,
    DeleteUser,
    GetUserData,
    GetUsersData,
    UserResponse,
    UsersResponse,
    UpdateUser,
} from "./types.ts";

export const getUsers: GetUsersData = async () => {
    const users = await instance.get<UsersResponse>("/users");

    return users;
};

export const getUser: GetUserData = async (id) => {
    const user = await instance.get<UserResponse>(`/users/${id}`);

    return user;
};

export const deleteUser: DeleteUser = async (id) => {
    const user = await instance.delete<boolean>(`/users/${id}`);

    return user;
};

export const createUser: CreateUser = async (
    name,
    birthday,
    startWork,
    telegram,
    city,
    email,
    phoneNumber,
    login,
    role,
    photo
) => {
    const user = await instance.post<UserResponse>(`/users`, {
        name,
        birthday,
        startWork,
        telegram,
        city,
        email,
        phoneNumber,
        login,
        role,
        photo,
    });

    return user;
};

export const updateUser: UpdateUser = async (
    id,
    field,
    newValue,
) => {
    const updateData = { id };
    updateData[field] = newValue;

    const user = await instance.patch<UserResponse>(`/users`, updateData);


    return user;
};
