<template>
    <div class="footer" id="concatUs">
        <div class="line"></div>
        <p class="copyright">© 2023 copyright Hypercodec.inc All Rights Reserved</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

}
</script>

<style lang="less" scoped>
.footer {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 40px 120px;
    background: fade(#001C80, 95%);
    font-size: 12px;
    color: #fff;

    @media screen and (max-width: 768px) {
        padding: 50px var(--section-s-gap);
    }

    .copyright {
        font-size: 12px;
        // color: #000B33;
        text-align: center;
    }
}
</style>