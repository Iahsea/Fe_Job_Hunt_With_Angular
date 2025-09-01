import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

export interface IFilterField {
    key: string;           // key trong object filter
    label: string;         // nhãn hiển thị
    type: 'text' | 'select';
    options?: { label: string; value: any }[]; // nếu select
}

@Component({
    selector: 'app-filter',
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
    ],
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent<T extends Record<string, any>> {
    @Input() filter!: T;              // object filter bất kỳ
    @Input() fields: IFilterField[] = [];
    @Output() apply = new EventEmitter<T>();

    onApply() {
        this.apply.emit(this.filter);
    }
}
