const defaultState = {
    rowState: {},
    colState: {}
}

export const initialState = storage('excel-state') ?
    storage('excel-state') :
    defaultState