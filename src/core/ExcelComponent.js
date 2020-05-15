import {
    DomListener
} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options.listeners = {}) {
        super($root)
    }
    toHTML() {
        return ''
    }

    init() {
        this.initDOMListeners()
    }
}