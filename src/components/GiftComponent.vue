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
            :class="[
                'flex align-items-center justify-content-center border-round-sm font-bold h-full cursor-pointer',
                { shake: !isFlipping && !showContent },
                { gift: !showContent },
                { 'flipright animation-duration-500': isFlipping }
            ]"
            :style="{ backgroundColor: showContent ? adjustBackgroundOpacity(backGroundColor, 0.75) : backGroundColor }"
            @click="handleClick"
        >
            <p v-if="showContent">
                <img v-if="img" class="image" :src="img" alt="gift image" />
                <span>{{ text }}</span>
            </p>
            <div
                v-if="!showContent && pattern === 'cross-ribbon'"
                class="cross-ribbon"
                :style="{ backgroundColor: bandColor }"
            />
            <div
                v-if="!showContent && pattern === 'polka-dots'"
                class="polka-dots"
                :style="{ '--dot-color': bandColor }"
            />
            <div
                v-if="!showContent && pattern === 'diagonal-ribbons'"
                class="diagonal-ribbons"
                :style="{ '--band-color': bandColor }"
            />
            <div
                v-if="!showContent && pattern === 'diagonal-ribbons-reversed'"
                class="diagonal-ribbons-reversed"
                :style="{ '--band-color': bandColor }"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    withDefaults(
        defineProps<{
            columnStart: number
            columnEnd: number
            rowStart: number
            rowEnd: number
            text: string
            img?: string
            backGroundColor?: string
            bandColor?: string
            pattern?: 'cross-ribbon' | 'polka-dots' | 'diagonal-ribbons' | 'diagonal-ribbons-reversed'
        }>(),
        {
            backGroundColor: 'red',
            bandColor: 'yellow',
            pattern: 'cross-ribbon'
        }
    )
    const showContent = ref(false)
    const isFlipping = ref(false)

    const handleClick = () => {
        showContent.value = !showContent.value
        isFlipping.value = true
        setTimeout(() => {
            isFlipping.value = false
        }, 500)
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

    .shake:hover {
        animation: shake 0.5s;
    }

    .gift {
        position: relative;
        z-index: 10;
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

    .image {
        width: 100px;
        height: 100px;
    }
</style>
