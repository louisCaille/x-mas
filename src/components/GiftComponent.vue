<template>
    <div
        :style="{
            'grid-column-start': columnStart,
            'grid-column-end': columnEnd,
            'grid-row-start': rowStart,
            'grid-row-end': rowEnd
        }"
    >
        <div
            :id="id"
            :class="[
                'flex border-round-sm font-bold h-full cursor-pointer overflow-hidden',
                { gift: !showContent },
                { 'flipright animation-duration-500': isFlipping }
            ]"
            :style="{ backgroundColor: showContent ? adjustBackgroundOpacity(backGroundColor, 0.75) : backGroundColor }"
            @click="handleClick"
        >
            <div
                v-if="!showContent && pattern === Pattern.CROSS_RIBBON"
                class="cross-ribbon"
                :style="{ backgroundColor: bandColor }"
            />
            <div
                v-if="!showContent && pattern === Pattern.POLKA_DOTS"
                class="polka-dots"
                :style="{ '--dot-color': bandColor }"
            />
            <div
                v-if="!showContent && pattern === Pattern.DIAGONAL_RIBBONS"
                class="diagonal-ribbons"
                :style="{ '--band-color': bandColor }"
            />
            <div
                v-if="!showContent && pattern === Pattern.DIAGONAL_RIBBONS_REVERSED"
                class="diagonal-ribbons-reversed"
                :style="{ '--band-color': bandColor }"
            />
            <div v-if="showContent" class="flex flex-column align-items-center justify-content-center p-3 content">
                <div class="frame">
                    <img v-if="img" class="frame-image" :src="img" alt="gift image" />
                    <div class="frame-text">
                        <span>{{ text }}</span>
                    </div>
                    <div v-if="link" class="christmas-ball" @click.stop="openLink">
                        <img src="@/assets/img/link.svg" alt="link icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Pattern } from '@/enums/patterns.ts'
    import { onMounted, ref } from 'vue'

    const props = withDefaults(
        defineProps<{
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
            togglePlay: () => void
        }>(),
        {
            backGroundColor: 'red',
            bandColor: 'yellow',
            pattern: Pattern.CROSS_RIBBON
        }
    )

    const id = ref('')
    const showContent = ref(false)
    const isFlipping = ref(false)

    onMounted(() => {
        id.value = Math.random().toString(36).substring(7)
    })

    const handleClick = () => {
        const giftElement = document.getElementById(id.value)
        if (giftElement) {
            if (!showContent.value) giftElement.classList.add('shake')
            setTimeout(
                () => {
                    if (!showContent.value) giftElement.classList.remove('shake')
                    showContent.value = !showContent.value
                    isFlipping.value = true
                    setTimeout(() => {
                        isFlipping.value = false
                    }, 500)
                    if (showContent.value) props.togglePlay()
                },
                showContent.value ? 0 : 500
            )
        }
    }

    const openLink = () => {
        if (props.link) {
            window.open(props.link, '_blank')
        }
    }

    function adjustBackgroundOpacity(color: string, opacity: number): string {
        const [r, g, b] = color.match(/\w\w/g)!.map(x => parseInt(x, 16))
        return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }
</script>

<style scoped>
    @keyframes shake {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-5px);
        }
        50% {
            transform: translateX(5px);
        }
        75% {
            transform: translateX(-5px);
        }
        100% {
            transform: translateX(0);
        }
    }

    .shake {
        animation: shake 0.5s;
    }

    .gift {
        position: relative;
        z-index: 10;
        width: 100%;
        height: 100%;
    }

    .cross-ribbon::before,
    .cross-ribbon::after {
        content: '';
        position: absolute;
        background-color: inherit;
    }

    .cross-ribbon::before {
        width: 20px;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }

    .cross-ribbon::after {
        width: 100%;
        height: 20px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .polka-dots {
        background-image: radial-gradient(circle, var(--dot-color) 40%, transparent 11%);
        background-size: 20px 20px;
        width: 100%;
        height: 100%;
    }

    .diagonal-ribbons {
        position: relative;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            45deg,
            var(--band-color),
            var(--band-color) 20px,
            transparent 20px,
            transparent 40px
        );
    }

    .diagonal-ribbons-reversed {
        position: relative;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            -45deg,
            var(--band-color),
            var(--band-color) 20px,
            transparent 20px,
            transparent 40px
        );
    }

    .content {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .frame {
        background-color: #f4e4d8;
        border: 10px solid #8b5e3b;
        border-bottom: 50px solid #8b5e3b;
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        position: relative;
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .frame-image {
        max-width: 100%;
        max-height: 100%;
    }

    .frame-text {
        position: absolute;
        height: 50px;
        bottom: -50px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .frame-text span {
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .christmas-ball {
        position: absolute;
        top: -20px;
        right: -20px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        background-color: #ea0d0d;
        border-radius: 50%;
        padding: 5px;
        border: 2px solid #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        animation: swing 2s infinite;
    }

    .christmas-ball img {
        width: 100%;
        height: 100%;
        transform: rotate(-45deg);
    }

    @keyframes swing {
        0% {
            transform: rotate(-15deg);
        }
        50% {
            transform: rotate(15deg);
        }
        100% {
            transform: rotate(-15deg);
        }
    }
</style>
