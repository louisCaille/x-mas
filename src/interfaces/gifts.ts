import type { Pattern } from '@/enums/patterns.ts'

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
    pattern?: Pattern
}
