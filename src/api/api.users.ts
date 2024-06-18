import { instance } from "./api.config.ts";
import {
    CreateUser,
    DeleteUser,
    GetUserData,
    GetUsersData,
    UserResponse,
    UsersResponse,
    UpdateUser,
    UpdateData,
} from "./types.ts";

export const getUsers: GetUsersData = async () => {
    const users = await instance.get<UsersResponse>("/users");

    return users.data;
};

export const getUser: GetUserData = async (id) => {
    const user = await instance.get<UserResponse>(`/users/${id}`);

    return user.data;
};

export const deleteUser: DeleteUser = async (id) => {
    const user = await instance.delete<boolean>(`/users/${id}`);

    return user.data;
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

    return user.data;
};

export const updateUser: UpdateUser = async (
    id,
    field,
    newValue,
) => {
    const updateData: UpdateData = { id };
    updateData[field] = newValue;

    const user = await instance.patch<UserResponse>(`/users`, updateData);

    return user.data;
};
