type types = 'money' | 'img' | 'btns'
export type TypeDefaultColumn = {
    prop: string
    label: string
    render?: () => void
    children?: any
    type: string
    btns?: []
    [key: string]: any
}
export type pageProps = {
    total: Number,
    layout: 'prev, pager, next',
    small?: false,
    background?: false,
    [key: string]: any
}