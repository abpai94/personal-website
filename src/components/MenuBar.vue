<template>
    <div class='menu-bar'>
        <button class='menu-button'>Home</button>
        <button class='menu-button'>Resume</button>
        <button class='menu-button' @click="openInNewTab('https://www.linkedin.com/in/abpai94')">LinkedIn</button>
        <button class='menu-button' @click="openInNewTab('https://www.credly.com/users/abpai94/badges')">Certification</button>
        <button class='menu-button' @click="openInNewTab('https://dashboard.abhishekpai.co.uk')">Dashboard</button>
        <button class='menu-button' @click="openInNewTab('https://auth.abhishekpai.co.uk')">Login</button>
    </div>
</template>

<script>
export default {
    methods: {
        openInNewTab(url) {
            window.open(url, '_blank');
        }
    }
};
</script>

<style>
.menu-bar {
    justify-content: center;
    display: flex;
    gap: 10px;
}

.menu-button {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

.menu-button:hover {
    background-color: #f5f5f5;
}
</style>