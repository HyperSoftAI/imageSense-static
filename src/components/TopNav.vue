<template>
    <header id="header">
        <nav id="header-real-content" > 
            <div class="logo-name">
                <div class="logo-cover">
                    <img alt="logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
                </div>
                <h1>ImageSense</h1>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
header {
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
}

#header-real-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;

    // background-color: #000100;
    background-color: transparent;
    padding: 0 var(--section-gap);
    // border-bottom: 1px solid var(--color-border);
    z-index: 999;
    // transition: transform .2s ease-in-out;

    // &.header-fixed-hide {
    //     position: absolute;
    //     transform: translateY(-100%);
    // }

    &.header-fixed-display {
        // position: fixed;
        // top: -60px;
        // transition: margin .2s ease-in-out;
        // margin-top: 60px;
        background-color: fade(#fff, 50%);

    }

    @media screen and (max-width: 1200px) {
        padding: 0 var(--section-m-gap);
    }

    @media screen and (max-width: 768px) {
        padding: 0;
    }
}

nav {
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 12px;
    text-align: center;
    justify-content: space-between;

}

.logo-name {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 10px;

    .logo-cover {
        width: 42px;
        height: 42px;
        border-radius: 12px;
        background-color: #0491FF;
        display: flex;
        margin-right: 12px;
        align-items: center;
        justify-content: center;
    }
    .logo {
        width: 28px;
        height: 28px;
    }
    h1 {
        font-weight: 600;
    }
}
</style>