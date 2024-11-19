<script setup lang="ts"></script>

<template>
    <div class="header">
        <img class="header-img" src="@/assets/img/christmas-louis.png" alt="louis" />
        <span class="header-text">Ma liste de Noël</span>
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

    .header-img {
        width: 100%;
        max-width: 400px;
    }

    .header-text {
        position: relative;
        font-size: 34px;
        font-weight: bold;
        color: #d32f2f;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        padding: 10px 20px;
        background-size: cover;
        border-radius: 10px;
    }
</style>
