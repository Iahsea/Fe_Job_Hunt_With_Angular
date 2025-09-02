export interface Job {
    _id: string;
    name: string;
    skills: string[];
    company: {
        _id: string;
        name: string;
    };
    location: string;
    logoJob: string;
    salary: number;
    quantity: number;
    level: string; // bạn có thể dùng enum nếu muốn
    description: string;
    startDate: string; // ISO date string
    endDate: string;   // ISO date string
    isActive: boolean;
    createdBy: {
        _id: string;
        email: string;
    };
    isDeleted: boolean;
    deletedAt?: string | null;
    createdAt: string;
    updatedAt?: string;
    __v: number;
    updatedBy?: {
        _id: string;
        email: string;
    };
    deletedBy?: {
        _id: string;
        email: string;
    } | null;
}
