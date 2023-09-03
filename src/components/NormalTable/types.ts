type types = 'money' | 'img' | 'btns'
export type TypeDefaultColumn = {
    prop: string
    label: string
    render: () => void
    children: []
    type: types
    btns: []
}