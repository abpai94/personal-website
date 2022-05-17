<template>
    <NavigationBar>

    </NavigationBar>
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
* {
    margin: 0px;
    padding: 0px;
}
</style>