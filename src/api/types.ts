export type UsersAttributes = {
    id: number;
    name: string;
    photo: string;
};

export type UsersData = {
    result: boolean,
    data: UsersAttributes[];
};

export type UsersResponse = {
    data: UsersData;
};

export type UserAttributes = {
    id: number;
    name: string;
    birthday: string;
    startWork: string;
    telegram: string;
    city: string;
    email: string;
    phoneNumber: string;
    login: string;
    isActive: boolean;
    role: string;
    photo: string;
};

export type UserData = {
    result: boolean,
    data: UserAttributes;
};

export type UserResponse = {
    data: UserData;
};

export type GetUserData = (id: number) => Promise<UserResponse>;
export type GetUsersData = () => Promise<UsersResponse>;
export type DeleteUser = (id: number) => Promise<boolean>;
export type CreateUser = (
    name: string,
    birthday: string,
    startWork: string,
    telegram: string,
    city: string,
    email: string,
    phoneNumber: string,
    login: string,
    role: string,
    photo: File
) => Promise<UserResponse>;

export type UpdateUser = (
    id: number,
    field: string,
    newValue: string | File,
) => Promise<UserResponse>;

export type UpdateData = {
    id: number,
    [key: string]: any, 
};