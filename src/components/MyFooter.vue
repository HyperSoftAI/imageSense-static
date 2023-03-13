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
                <p class="share-group">
                    <span class="iconfont icon-weixin icon-light-hover"></span>
                    <span class="iconfont icon-weibo icon-light-hover"></span>
                    <span class="iconfont icon-qq icon-light-hover"></span>
                </p>
            </div>
            <div class="item">
                <div class="item-title">
                    软件和服务
                </div>
                <div class="service-cover">
                    <p class="service-item" v-for="i in serviceArr" :key="i">{{ i }}</p>
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    联系我们
                </div>
                <div>
                    <p>
                        浙江省杭州市滨江区长河街道平乐街16号1号楼11609室
                    </p>
                    <p>
                        <span class="iconfont icon-phone icon-light"></span>
                        电话：130 9379 7410
                    </p>
                    <p>
                        <span class="iconfont icon-email icon-light"></span>
                        Email：info@hypercodec.com
                    </p>

                </div>
            </div>
        </div>
        <div class="line"></div>
        <p class="copyright">© 2023 copyright Hypercodec.inc All Rights Reserved</p>
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

    @media screen and (max-width: 768px) {
        padding: 50px var(--section-s-gap);
    }

    .footer-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        .item {
            flex: 1;
            height: 100%;

            &+.item {
                margin-left: 80px;

                @media screen and (max-width: 768px) {
                    margin-left: 0px;
                    margin-top: 30px;
                }

                .item-title {
                    margin-bottom: 20px;

                    @media screen and (max-width: 768px) {
                        margin-bottom: 5px;
                    }

                }
            }

            .item-title {
                margin-bottom: 5px;
                font-size: 16px;
                font-weight: 500;
            }

            .service-cover {
                display: flex;
                flex-wrap: wrap;

                .service-item {
                    width: 50%;
                    min-width: 150px;
                    //float: left;
                }
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

        .share-group {
            margin-top: 15px;
            cursor: pointer;

            span {
                font-size: 20px;

                &+span {
                    margin-left: 20px;
                }
            }
        }
    }

    .line {
        margin: 50px 0 30px;
        height: 1px;
        width: 100%;
        opacity: 0.15;
        background-color: #000B33;
    }

    .copyright {
        font-size: 12px;
        color: #000B33;
        text-align: center;
    }
}
</style>