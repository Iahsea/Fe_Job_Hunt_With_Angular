import { UserResponse } from "./user.response";

export interface LoginResponse {
    statusCode: number;
    message: string;
    data: {
        access_token: string;
        user: UserResponse;
    };
}
