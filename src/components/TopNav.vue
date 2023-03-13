<template>
    <header>
        <nav>
            <div class="logo-name">
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
                <h1>HyperSoft</h1>
            </div>
            <div class="wrapper">
                <a href="#">关于我们</a>
                <a href="#">解决方案</a>
                <a href="#">产品服务</a>
                <a href="#">联系我们</a>
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
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: var(--vt-c-black);
    padding: 0 var(--section-gap);
    border-bottom: 1px solid var(--color-border);
    z-index: 999;

    @media screen and (max-width: 1028px) {
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

    .logo {
        width: 40px;
        height: 40px;
        margin-right: 12px;
    }
}

.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    text-align: center;

    @media screen and (max-width: 600px) {
        display: none;
    }

    a {
        color: #fff;
        text-decoration: none;
        padding: 0 30px;
        transition: all 0.3s ease-in-out;
        height: 100%;
        display: flex;
        align-items: center;

        &:hover {
            color: rgba(255, 255, 255, 0.8)
        }

        @media screen and (max-width: 1028px) {
            padding: 0 20px;


        }
    }
}
</style>