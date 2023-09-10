type types = 'money' | 'img' | 'btns'
export type TypeDefaultColumn = {
    prop: string
    label: string
    render: () => void
    children: []
    type: types
    btns: []
}
export type pageProps = {
    total: Number,
    layout: 'prev, pager, next',
    small?: false,
    background?: false,
}