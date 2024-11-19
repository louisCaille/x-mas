<template>
    <div class="grid">
        <GiftComponent
            v-for="gift in giftList"
            :key="gift.text"
            :column-start="gift.columnStart"
            :column-end="gift.columnEnd"
            :row-start="gift.rowStart"
            :row-end="gift.rowEnd"
            :text="gift.text"
            :img="gift.img"
            :back-ground-color="gift.backGroundColor"
            :band-color="gift.bandColor"
            :pattern="gift.pattern"
            :toggle-play="togglePlay"
        />
    </div>
</template>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 200px;
        gap: 16px;
    }
</style>
<script setup lang="ts">
    import astroBotPs5Image from '@/assets/img/astro-bot-ps5.png'
    import cookingHornImage from '@/assets/img/cooking-horn.png'
    import monsterVolumeEightImage from '@/assets/img/monster-volume-eight.png'
    import pastryBrushImage from '@/assets/img/pastry-brush.png'
    import perforatedBakingSheetImage from '@/assets/img/perforated-baking-sheet.png'
    import switchJoyConImage from '@/assets/img/switch-joy-con.png'
    import AudioPlayer from '@/components/AudioPlayer.vue'
    import GiftComponent from '@/components/GiftComponent.vue'
    import { onMounted, ref } from 'vue'

    interface Gift {
        columnStart: number
        columnEnd: number
        rowStart: number
        rowEnd: number
        text: string
        img?: string
        backGroundColor?: string
        bandColor?: string
        pattern?: 'cross-ribbon' | 'polka-dots' | 'diagonal-ribbons' | 'diagonal-ribbons-reversed'
    }

    const props = defineProps<{
        audioPlayerRef?: InstanceType<typeof AudioPlayer> | null
    }>()

    const giftList = ref<Gift[]>([])

    const togglePlay = () => {
        if (props.audioPlayerRef) {
            props.audioPlayerRef.togglePlay()
        }
    }

    onMounted(() => {
        giftList.value = [
            {
                columnStart: 1,
                columnEnd: 2,
                rowStart: 1,
                rowEnd: 2,
                text: 'Monster Tome 8 & 9',
                img: monsterVolumeEightImage,
                backGroundColor: '#42ABCE',
                bandColor: '#E84049',
                pattern: 'cross-ribbon'
            },
            {
                columnStart: 2,
                columnEnd: 3,
                rowStart: 1,
                rowEnd: 2,
                text: 'Astro Bot PS5',
                img: astroBotPs5Image,
                backGroundColor: '#EAD39E',
                bandColor: '#EDBF29',
                pattern: 'polka-dots'
            },
            {
                columnStart: 1,
                columnEnd: 3,
                rowStart: 2,
                rowEnd: 3,
                text: 'Manettes Switch',
                img: switchJoyConImage,
                backGroundColor: '#EE5138',
                bandColor: '#DCB768',
                pattern: 'diagonal-ribbons'
            },
            {
                columnStart: 1,
                columnEnd: 2,
                rowStart: 3,
                rowEnd: 4,
                text: 'Pinceau à patisserie',
                img: pastryBrushImage,
                backGroundColor: '#CF2329',
                bandColor: '#579B1E',
                pattern: 'polka-dots'
            },
            {
                columnStart: 1,
                columnEnd: 2,
                rowStart: 4,
                rowEnd: 5,
                text: 'Corne de cuisine',
                img: cookingHornImage,
                backGroundColor: '#E8DFC4',
                bandColor: '#E70E07',
                pattern: 'diagonal-ribbons-reversed'
            },
            {
                columnStart: 2,
                columnEnd: 3,
                rowStart: 3,
                rowEnd: 5,
                text: 'Plaque de cuisson perforée',
                img: perforatedBakingSheetImage,
                backGroundColor: '#B96E2F',
                bandColor: '#98B1DF',
                pattern: 'cross-ribbon'
            }
        ]
    })
</script>
