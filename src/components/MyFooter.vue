<template>
    <div class="footer">
        <div class="footer-container">
            <div class="item">
                <div class="logo-cover item-title">
                    <div class="logo"></div>
                    <p>HyperSoft, Inc</p>
                </div>
                <div>我们的价值观是：创新、质量、合作和客户至上。我们坚信AI empowers creativity，我们不断创新和提供高质量的产品和服务，与客户和合作伙伴紧密合作，实现共赢，帮助客户实现创意和想法，获得成功。
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    软件和服务
                </div>
                <div>
                    <p v-for="i in serviceArr" :key="i">{{ i }}</p>
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    联系我们
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            serviceArr: [
                '物联网',
                '移动应用开发',
                '数字孪生',
                '小程序开发',
                '数字营销',
                '网站开发',
                '电商和零售',
                '大数据和云计算'
            ]
        }
    },

}
</script>

<style lang="less" scoped>
.footer {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 80px 120px;
    background: var(--color-background);

    .footer-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;

        .item {
            flex: 1;
            padding: 0 50px;
            height: 100%;

            .item-title {
                margin-bottom: 5px;
                font-size: 16px;
            }

        }

        .logo-cover {
            display: flex;
            align-items: center;

            .logo {
                width: 45px;
                height: 45px;
                background-image: url('@/assets/logo-reverse.svg');
                background-repeat: no-repeat;
                background-size: cover;
                margin-right: 10px;
            }
        }


    }
}
</style>