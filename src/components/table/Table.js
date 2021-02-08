import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {tableResizeHandler} from '@/components/table/table.size';
import {shouldResize} from '@/components/table/table.fn';

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        });
    }

    toHTML() {
        return createTable(25)
    }
    onMousedown(event) {
        if (shouldResize(event)) {
            tableResizeHandler(this.$root, event)
        }
    }
}