import { IFilterField } from "../../shared/components/filter/filter.component";

export const JobFilterConfig: IFilterField[] = [
    { key: 'name', label: 'Tên công việc', type: 'text' },
    { key: 'skills', label: 'Kỹ năng', type: 'text' },
    { key: 'location', label: 'Địa điểm', type: 'text' },
    { key: 'salary', label: 'Mức lương', type: 'text' },
    { key: 'level', label: 'Cấp bậc', type: 'text' },
    {
        key: 'sortBy', label: 'Sắp xếp theo', type: 'select',
        options: [
            { label: 'Ngày tạo', value: 'createdAt' },
            { label: 'Tên', value: 'name' },
            { label: 'Mức lương', value: 'salary' },
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
