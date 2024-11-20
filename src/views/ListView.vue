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
            :link="gift.link"
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
        link?: string
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
                link: 'https://www.amazon.fr/Monster-Deluxe-Vol-8-URASAWA-Naoki/dp/2505014922/ref=sr_1_1?crid=3JZHY8E052K9A&dib=eyJ2IjoiMSJ9.zuESP47ujcwcIDDuTpR_bjFZCy0nOSbC_w039Uta4oZ1wyEItSlAaPeFaZQf_eRb3SEqr0QPbIHZbB6vvpcyJTrb8WApZQX8sTJu8qOYa1ixjiln_LM9eacRssE1JS5n_B2bXGCZ_zh5HdqNfv1HBnsWkHQcfXSKg2ufX8Z6ZQ0sfQA9uKC7jhqmKQKN7f64PcfbbDhJzljY3UG1R9dLVIxlkY9Pj-J6fVqMEG6sUrtQKv9unTF3go5lic1l0BvRoJ80wYa5ZvoN43fgZPJAD5RfkdGmGynM9IgqAAIXmwY.oo1_clBKoxOPjekRoUxYmVuF2-u1efj72cpef_hrNMM&dib_tag=se&keywords=monster+tome+8&nsdOptOutParam=true&qid=1732137239&sprefix=monster+tome+8%2Caps%2C154&sr=8-1',
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
                link: 'https://www.amazon.fr/Plateforme-Aventure-Standard-Physique-Fran%C3%A7ais-PlayStation/dp/B0D63Y2QW4/ref=sr_1_1?crid=27H4PVNGCTFNK&dib=eyJ2IjoiMSJ9.L3AgUO8TQoS82n2BDghmqvVGwT2FW6g4_Dr45a1ZNBGzpc0cpAHPt5IFyAu9S3-3OG6PkRbU4PUxxXlKD8Y63Vg1JHACh_xaFd-uT7NlDMyYY8k0UycLNe9W2oWkhwB-cbchwQFGpPYUuZqrAGV2N15-ovyoiQCzgntbyYQYGfiWlD4rm5imlj5s4954-Ygo4Eb9gg71QxiJb7FEUMe-MgLX4ng05dLAcK0TauQlYoAj-mDEY-1gWYcqOrWvbgHh37LQUuvK9Rm96VL_p2D3wj4VB354O87G9nks4Fpomv8._OYsnMC7vgRLlAVgRz6RVMf4_USKyZZ7c5Sm1k0uk5Q&dib_tag=se&keywords=astro+bot+ps5&nsdOptOutParam=true&qid=1732137205&sprefix=astro%2Caps%2C78&sr=8-1',
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
                link: 'https://www.fnac.com/Paire-de-manettes-Joy-con-Nintendo-Switch-Violet-pastel-et-Vert-pastel/a18234940/w-4?Origin=SEA_GOOGLE_PLA_CONSOL&esl-k=google-ads%7Cnx%7Cc%7Cm%7Ck%7Cp%7Ct%7Cdc%7Ca18480190298%7Cg18480190298&gad_source=1&gclid=CjwKCAiArva5BhBiEiwA-oTnXRTsSmTY7O0tARjn6CvL1hBFKh6bAIyiNigAkH4tfGSmLcdFL9PkwBoC-QQQAvD_BwE&gclsrc=aw.ds',
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
                link: 'https://www.boulanger.com/ref/9000049391?store=&/?at_medium=sl&at_campaign=[pla_css_keyade]&at_platform=google&at_campaign_group=11959968887&gclsrc=aw.ds&gad_source=1&kClkId=241120221526647815&kVsId=241120221526641169&gclid=CjwKCAiArva5BhBiEiwA-oTnXXvQPOWcHj4U3K0bRcmosdLwm5XL1Y-kI-7qQubpV4e8wI4GUiAS3BoCI9gQAvD_BwE',
                backGroundColor: '#B96E2F',
                bandColor: '#98B1DF',
                pattern: 'cross-ribbon'
            }
        ]
    })
</script>
