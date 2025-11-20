import binderImage from '@/assets/img/binder.png'
import blackMythWukongImage from '@/assets/img/black-myth-wukong.png'
import booksImage from '@/assets/img/books.png'
import ghostOfTsushimaImage from '@/assets/img/ghost-of-tsushima.png'
import pokemonCardsImage from '@/assets/img/pokemon-cards.png'
import puzzleFrameImage from '@/assets/img/puzzle-frame.jpg'
import soloLevelingImage from '@/assets/img/solo-leveling.png'
import uniqloImage from '@/assets/img/uniqlo.jpg'
import { Pattern } from '@/enums/patterns.ts'
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
        backGroundColor: '#8FC7D8',
        bandColor: '#C73748',
        pattern: Pattern.DIAGONAL_RIBBONS
    },
    {
        columnStart: 1,
        columnEnd: 2,
        rowStart: 2,
        rowEnd: 4,
        text: 'Cartes Pokémon',
        img: pokemonCardsImage,
        backGroundColor: '#E7D8B8',
        bandColor: '#2F4B66',
        pattern: Pattern.CROSS_RIBBON
    },
    {
        columnStart: 2,
        columnEnd: 3,
        rowStart: 2,
        rowEnd: 3,
        text: 'Carte cadeau UNIQLO',
        img: uniqloImage,
        backGroundColor: '#E7735D',
        bandColor: '#FBF6E8',
        pattern: Pattern.POLKA_DOTS
    },
    {
        columnStart: 1,
        columnEnd: 2,
        rowStart: 4,
        rowEnd: 5,
        text: 'Solo Leveling 17 - 19',
        img: soloLevelingImage,
        backGroundColor: '#7A9BC2',
        bandColor: '#E1B647',
        pattern: Pattern.DIAGONAL_RIBBONS_REVERSED
    },
    {
        columnStart: 2,
        columnEnd: 3,
        rowStart: 3,
        rowEnd: 5,
        text: 'Livres',
        img: booksImage,
        backGroundColor: '#D45562',
        bandColor: '#E1B647',
        pattern: Pattern.CROSS_RIBBON
    },
    {
        columnStart: 1,
        columnEnd: 3,
        rowStart: 5,
        rowEnd: 6,
        text: 'Cadre puzzle 70 x 50 cm',
        img: puzzleFrameImage,
        link: 'https://www.amazon.fr/ACAZA-Photos-Affiches-Posters-Format/dp/B0BBGTB1JN/ref=sr_1_3_sspa?adgrpid=71281328283&dib=eyJ2IjoiMSJ9.dY26Xn6x4q0NZdnVMv1PAqZ0Qx5zqtaGKGp3iqTV3j0wFOmXV8Ot0DsMXh-SqNjd-j7nWT4AzIaRVGWSbBfziwu-AMYQpl2mItouPuUCXoTf7L7h46FfA0je-PCQFb5YlS6KO-U8mMFVtOlqsx9gdZK1FENf9Npd2K1UwH93pAWR_3fcQv7wgkSQMdDpWMVvTqC3rQGgDT93GAtHyrJ7T7GNW6LWgppiwFWzBjD18mZ-zvpxfiA5rWpSzlVofdfx5FqsdHsyy-lWRuMXN2RVjlgDuDBCjTIzPSXVmL4SFJ8.6Ki2a3GxE2yN_1QiZQ1vkWNN5NqpMqMEES161YxgFs0&dib_tag=se&hvadid=702294664442&hvdev=c&hvexpln=0&hvlocphy=9056498&hvnetw=g&hvocijid=9112550681459037352--&hvqmt=e&hvrand=9112550681459037352&hvtargid=kwd-336409642257&hydadcr=14275_2386264&keywords=cadre%2Bpour%2Bpuzzle%2B1000%2Bpi%C3%A8ces&mcid=5282b227fca931a3b1713c374f452d0c&qid=1763668578&sr=8-3-spons&aref=rqv5Hx7d7Z&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
        backGroundColor: '#87C29E',
        bandColor: '#FFFFFF',
        pattern: Pattern.POLKA_DOTS
    },
    {
        columnStart: 1,
        columnEnd: 2,
        rowStart: 6,
        rowEnd: 7,
        text: 'Ghost of Tsushima PS5',
        img: ghostOfTsushimaImage,
        backGroundColor: '#EBA56F',
        bandColor: '#2F4B66',
        pattern: Pattern.CROSS_RIBBON
    },
    {
        columnStart: 2,
        columnEnd: 3,
        rowStart: 6,
        rowEnd: 7,
        text: 'Black Myth Wukong PS5',
        img: blackMythWukongImage,
        backGroundColor: '#EECF65',
        bandColor: '#3A7E61',
        pattern: Pattern.DIAGONAL_RIBBONS_REVERSED
    }
] as Gift[]
