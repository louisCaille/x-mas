import binderImage from '@/assets/img/binder.png'
import blackMythWukongImage from '@/assets/img/black-myth-wukong.png'
import booksImage from '@/assets/img/books.png'
import ghostOfTsushimaImage from '@/assets/img/ghost-of-tsushima.png'
import pokemonCardsImage from '@/assets/img/pokemon-cards.png'
import puzzleFrameImage from '@/assets/img/puzzle-frame.jpg'
import soloLevelingImage from '@/assets/img/solo-leveling.png'
import uniqloImage from '@/assets/img/uniqlo.jpg'
import type { Gift } from '@/interfaces/gifts.ts'

export default [
    {
        columnStart: 1,
        columnEnd: 3,
        rowStart: 1,
        rowEnd: 2,
        text: 'Classeurs cartes',
        img: binderImage,
        link: 'https://www.amazon.fr/dp/B084TLYYCY?ref=cm_sw_r_apin_dp_XF9TV5Z46RAGA24TF6DN&ref_=cm_sw_r_apin_dp_XF9TV5Z46RAGA24TF6DN&social_share=cm_sw_r_apin_dp_XF9TV5Z46RAGA24TF6DN&th=1',
        backGroundColor: '#F2C99C',
        bandColor: '#8C4A2F',
        pattern: 'diagonal-ribbons'
    },
    {
        columnStart: 1,
        columnEnd: 2,
        rowStart: 2,
        rowEnd: 4,
        text: 'Cartes Pokémon',
        img: pokemonCardsImage,
        backGroundColor: '#1E3A66',
        bandColor: '#F5C242',
        pattern: 'cross-ribbon'
    },
    {
        columnStart: 2,
        columnEnd: 3,
        rowStart: 2,
        rowEnd: 3,
        text: 'Carte cadeau UNIQLO',
        img: uniqloImage,
        backGroundColor: '#F9F4EF',
        bandColor: '#D7263D',
        pattern: 'polka-dots'
    },
    {
        columnStart: 1,
        columnEnd: 2,
        rowStart: 4,
        rowEnd: 5,
        text: 'Solo Leveling 17 - 19',
        img: soloLevelingImage,
        backGroundColor: '#0A3A4A',
        bandColor: '#D9A441',
        pattern: 'diagonal-ribbons-reversed'
    },
    {
        columnStart: 2,
        columnEnd: 3,
        rowStart: 3,
        rowEnd: 5,
        text: 'Livres',
        img: booksImage,
        backGroundColor: '#D2B48C',
        bandColor: '#5A3E36',
        pattern: 'cross-ribbon'
    },
    {
        columnStart: 1,
        columnEnd: 3,
        rowStart: 5,
        rowEnd: 6,
        text: 'Cadre puzzle 70 x 50 cm',
        img: puzzleFrameImage,
        link: 'https://www.amazon.fr/ACAZA-Photos-Affiches-Posters-Format/dp/B0BBGTB1JN/ref=sr_1_3_sspa?adgrpid=71281328283&dib=eyJ2IjoiMSJ9.dY26Xn6x4q0NZdnVMv1PAqZ0Qx5zqtaGKGp3iqTV3j0wFOmXV8Ot0DsMXh-SqNjd-j7nWT4AzIaRVGWSbBfziwu-AMYQpl2mItouPuUCXoTf7L7h46FfA0je-PCQFb5YlS6KO-U8mMFVtOlqsx9gdZK1FENf9Npd2K1UwH93pAWR_3fcQv7wgkSQMdDpWMVvTqC3rQGgDT93GAtHyrJ7T7GNW6LWgppiwFWzBjD18mZ-zvpxfiA5rWpSzlVofdfx5FqsdHsyy-lWRuMXN2RVjlgDuDBCjTIzPSXVmL4SFJ8.6Ki2a3GxE2yN_1QiZQ1vkWNN5NqpMqMEES161YxgFs0&dib_tag=se&hvadid=702294664442&hvdev=c&hvexpln=0&hvlocphy=9056498&hvnetw=g&hvocijid=9112550681459037352--&hvqmt=e&hvrand=9112550681459037352&hvtargid=kwd-336409642257&hydadcr=14275_2386264&keywords=cadre%2Bpour%2Bpuzzle%2B1000%2Bpi%C3%A8ces&mcid=5282b227fca931a3b1713c374f452d0c&qid=1763668578&sr=8-3-spons&aref=rqv5Hx7d7Z&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
        backGroundColor: '#A9D6E5',
        bandColor: '#BB3E03',
        pattern: 'polka-dots'
    },
    {
        columnStart: 1,
        columnEnd: 2,
        rowStart: 6,
        rowEnd: 7,
        text: 'Ghost of Tsushima PS5',
        img: ghostOfTsushimaImage,
        backGroundColor: '#1C1C1E',
        bandColor: '#B22727',
        pattern: 'cross-ribbon'
    },
    {
        columnStart: 2,
        columnEnd: 3,
        rowStart: 6,
        rowEnd: 7,
        text: 'Black Myth Wukong PS5',
        img: blackMythWukongImage,
        backGroundColor: '#2B2B2B',
        bandColor: '#C8A951',
        pattern: 'diagonal-ribbons-reversed'
    }
] as Gift[]
