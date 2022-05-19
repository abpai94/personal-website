<template>
    <NavigationBar>

    </NavigationBar>
    <router-view></router-view>
    <!-- <router-view>
        <KeepAlive>
            <MainPage :is="inActiveComponent" />
        </KeepAlive>
    </router-view> -->
</template>

<script>
import NavigationBar from "./NavigationBar.vue"

export default {
    name: 'HomePage',
    components: {
        NavigationBar
    }
}

</script>

<style>
.body {
    margin: 0px;
    padding: 0px;
}
</style>