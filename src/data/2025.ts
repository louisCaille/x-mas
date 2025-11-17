import pokemonCardsImage from '@/assets/img/pokemon-cards.jpg'
import type { Gift } from '@/interfaces/gifts.ts'

export default [
    {
        columnStart: 1,
        columnEnd: 2,
        rowStart: 1,
        rowEnd: 2,
        text: 'Cartes Pokémon',
        img: pokemonCardsImage,
        backGroundColor: '#42ABCE',
        bandColor: '#E84049',
        pattern: 'cross-ribbon'
    }
] as Gift[]
