export interface RoleResponse {
    _id: string;
    name: string;
}

export interface UserResponse {
    _id: string;
    name: string;
    email: string;
    role: RoleResponse;
    avatarUrl?: string;
    permissions: string[];
}
