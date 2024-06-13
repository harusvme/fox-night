export type UsersAttributes = {
    id: number;
    name: string;
    photo: string;
};

export type UsersData = {
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
    data: UserAttributes[];
};

export type UserResponse = {
    data: UserData;
};

export type GetUserData = (id: string) => Promise<UserResponse>;
export type GetUsersData = () => Promise<UsersResponse>;
export type DeleteUser = (id: string) => Promise<boolean>;
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
    photo: string
) => Promise<UserResponse>;
