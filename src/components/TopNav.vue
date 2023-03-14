<template>
    <header id="header">
        <nav id="header-real-content">
            <div class="logo-name">
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
                <h1>HyperSoft</h1>
            </div>
            <div class="wrapper" @click="$event => clickAnchor($event)">
                <a anchor='aboutUs'>关于我们</a>
                <a anchor='solution'>解决方案</a>
                <a anchor='productService'>产品服务</a>
                <a anchor='concatUs'>联系我们</a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            const target = document.getElementById('header-real-content')
            if (scrollTop > 60) {
                if (target.getAttribute('class') === 'header-fixed-display')
                    return
                target.className = 'header-fixed-display'
            }
            else {
                if (target.getAttribute('class') === '')
                    return
                target.className = ''
            }
        },
        clickAnchor(e) {
            console.log('clickAnchor', e.target);
            if (e.target && e.target.getAttribute('anchor')) {
                const anchor = e.target.getAttribute('anchor')
                const target = document.getElementById(anchor)
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }
    },
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;

    // background-color: #000100;
    background-color: transparent;
    padding: 0 var(--section-gap);
    border-bottom: 1px solid var(--color-border);
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
        background-color: #000100;

    }

    @media screen and (max-width: 1024px) {
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

        @media screen and (max-width: 1024px) {
            padding: 0 20px;


        }
    }
}
</style>