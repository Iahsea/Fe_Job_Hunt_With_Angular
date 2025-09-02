export interface Company {
    _id: string;
    name: string;
    address: string;
    description: string;
    createdBy: {
        _id: string;
        email: string;
    };
    updatedBy?: {           // optional vì có thể không tồn tại trong một số response
        _id: string;
        email: string;
    };
    isDeleted?: boolean;
    deletedAt?: string | null;
    createdAt: string;      // ISO string, có thể convert sang Date nếu cần
    updatedAt?: string;      // ISO string
    __v: number;
    logo?: string;          // optional, vì không phải lúc nào API cũng trả
}
