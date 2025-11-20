<script setup lang="ts">
    import { ref } from 'vue'

    const year = ref('')

    const urlParams = new URLSearchParams(window.location.search)
    year.value = urlParams.get('year') || '2024'
</script>

<template>
    <footer class="footer">
        <div>© {{ year }} - Made with ❤️ by Louis</div>
    </footer>
</template>

<style scoped>
    .footer {
        color: #ffffff;
        padding-top: 20px;
        text-align: center;
    }
</style>
