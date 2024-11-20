<script setup lang="ts">
    import NeonText from '@/components/NeonText.vue'
</script>

<template>
    <div class="header">
        <div class="image-container">
            <img class="dog" src="@/assets/img/vicky.png" alt="dog" />
            <img class="christmas-tree" src="@/assets/img/christmas-tree.svg" alt="christmas tree" />
            <NeonText class="text" text="MA LISTE DE NOËL" />
            <img class="cat" src="@/assets/img/mew.png" alt="cat" />
        </div>
    </div>
</template>

<style scoped>
    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .dog {
        position: absolute;
        bottom: -10px;
        right: 0;
        width: 120px;
        height: auto;
    }

    .cat {
        position: absolute;
        bottom: 0;
        left: 10px;
        width: 100px;
        height: auto;
    }

    .image-container {
        position: relative;
        width: 100%;
        max-width: 800px;
    }

    .christmas-tree {
        width: 100%;
        height: auto;
    }

    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 30px;
    }
</style>
