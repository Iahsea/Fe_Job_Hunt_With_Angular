export interface Company {
    _id: string;
    name: string;
    address: string;
    description: string;
    createdBy: {
        _id: string;
        email: string;
    };
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    __v: number;
    logo?: string; // optional vì API chưa có
}
