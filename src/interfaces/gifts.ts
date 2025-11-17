export interface Gift {
    columnStart: number
    columnEnd: number
    rowStart: number
    rowEnd: number
    text: string
    img?: string
    link?: string
    backGroundColor?: string
    bandColor?: string
    pattern?: 'cross-ribbon' | 'polka-dots' | 'diagonal-ribbons' | 'diagonal-ribbons-reversed'
}
