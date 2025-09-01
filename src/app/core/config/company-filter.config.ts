// src/app/core/config/company-filter.config.ts
import { IFilterField } from "../../shared/components/filter/filter.component";

export const CompanyFilterConfig: IFilterField[] = [
    { key: 'name', label: 'Tên công ty', type: 'text' },
    { key: 'address', label: 'Địa chỉ', type: 'text' },
    { key: 'description', label: 'Mô tả', type: 'text' },
    {
        key: 'sortBy', label: 'Sắp xếp theo', type: 'select',
        options: [
            { label: 'Tên', value: 'name' },
            { label: 'Địa chỉ', value: 'address' },
            { label: 'Ngày tạo', value: 'createdAt' },
        ]
    },
    {
        key: 'order', label: 'Thứ tự', type: 'select',
        options: [
            { label: 'Tăng dần', value: 'asc' },
            { label: 'Giảm dần', value: 'desc' }
        ]
    }
];
