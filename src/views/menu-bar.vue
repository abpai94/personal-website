<template>
    <div class='menu-bar'>
        <router-link class='menu-button' to='/'>Home</router-link>
        <router-link class='menu-button' to='/resume'>Resume</router-link>
        <!-- <button class='menu-button' @Click="downloadAsset('assets/Resume.pdf')">Resume</button> -->
        <button class='menu-button' @click="open('https://www.linkedin.com/in/abpai94')">LinkedIn</button>
        <button class='menu-button' @click="open('http://github.com/abpai94')">GitHub</button>
        <button class='menu-button' @click="open('https://hub.docker.com/u/abpai94')">Docker</button>
        <button class='menu-button' @click="open('https://www.credly.com/users/abpai94/badges')">Certification</button>
        <button class='menu-button' @click="open('https://auth.abhishekpai.co.uk/?rd=https%3A%2F%2Fdashboard.abhishekpai.co.uk%2F&rm=GET')">Login</button>
    </div>
</template>

<script>
export default {
    methods: {
        open(url) {
            window.location.href = url;
        },
        downloadAsset() {
            this.$refs.downloadLink.href = this.assetUrl;
            this.$refs.downloadLink.click();
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
    border: 1px solid #d44500;
    background-color: #d44500;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size:15px;
}

.menu-button:hover {
    background-color: white;
    color: #d44500;
}
</style>