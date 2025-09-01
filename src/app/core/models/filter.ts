export interface IJobFilter {
    name?: string;
    skills?: string;
    location?: string;
    sortBy?: string;
    order?: 'asc' | 'desc';
}

export interface ICompanyFilter {
    name?: string;
    address?: string;
    description?: string;
    sortBy?: string;
    order?: 'asc' | 'desc';
}