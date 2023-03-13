<template>
    <div>
        <div class="one-bg bg">
            <div class="inner"></div>
            <div class="max-bg-cover">
                <div class="content-cover">
                    <div class="title">
                        AI EMPOWERS <br>
                        CREATIVITY
                    </div>
                    <div class="des">我们利用AI技术提高创意和创新能力，为客户提供优质服务，帮助他们实现自己的想法和创意。</div>
                    <div class="concat-cover">
                        <input type="text" placeholder="输入您的Email或电话号码">
                        <button>与我们取得联系</button>
                    </div>

                </div>
            </div>
        </div>
        <div class="who-cover common-cover max-bg-cover">
            <div class="item-cover">
                <div class="item">
                    <h3 class="two-title">我们是谁</h3>
                    <div style="max-width: 500px">
                        我们是一家以人工智能为背景的数字化转型咨询和软件开发公司，为各类企业客户提供前沿的工程解决方案，帮助客户解决数字化转型过程中的复杂问题。无论是大型企业客户，还是小微企业客户，我们都能够提供专业的服务。我们成立于2023年，是一家年轻有为的公司，拥有丰富的人工智能方面的背景，为客户提供具有前瞻性和可靠性的软件工程合作伙伴。
                    </div>
                    <button class="su-btn go-consult">立即咨询</button>
                </div>
                <div class="item pic-item ">
                    <div class="decorate"></div>
                    <div class="pic-cover">
                        <div class="pic" alt="我们是HyperSoft"></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.one-bg {
    position: relative;
    background-image: url('@/assets/bg.png');
    background-color: #000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* height: 800px;

    @media screen and (max-width: 600px) {
        height: 600px;
    }*/

}

.inner {
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}

.content-cover {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 500px;
    justify-content: center;
    margin: 0 var(--section-gap);
    color: #fff;

    @media screen and (max-width: 1028px) {
        margin: 0 40px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0;
        padding: 0 var(--section-s-gap);
    }

    .title {
        color: #fff;
        font-size: 60px;
        font-weight: 700;
        line-height: 90px;
        margin-top: -60px;

        @media screen and (max-width: 600px) {
            font-size: 48px;
            line-height: 70px;
            margin-bottom: 20px;
        }


    }

    .des {
        margin-bottom: 100px;

        @media screen and (max-width: 600px) {
            margin-bottom: 80px;
            max-width: 380px;
        }
    }

    .concat-cover {
        width: 100%;
        height: 66px;
        border-radius: 33px;
        padding: 8px 8px 8px 30px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        font-size: 16px;

        @media screen and (max-width: 600px) {
            height: 50px;
            border-radius: 25px;
            padding: 0 8px 0 20px;
            max-width: 420px;

        }
    }

    button {
        height: 50px;
        border-radius: 25px;
        background: #FD4C5C;
        color: #fff;
        border: none;
        margin-left: 8px;
        padding: 0 20px;
        font-size: 16px;
        line-height: 50px;
        cursor: pointer;
        align-self: center;

        &:hover {
            background: rgba(253, 76, 92, 0.85);
        }

        @media screen and (max-width: 600px) {
            height: 32px;
            border-radius: 16px;
            padding: 0 10px;
            font-size: 12px;
            line-height: 32px;
        }
    }

    input {
        flex: 1;
        font-size: 16px;
        outline: none;
        border: transparent;

        @media screen and (max-width: 600px) {
            font-size: 14px;

        }
    }
}

.item-cover {
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;

    .two-title {
        font-size: 36px;
        //line-height: 54px;
        margin-bottom: 15px;
    }

    .item {
        width: 46%;
        min-height: 350px;
        padding: 0 20px;

        @media screen and (max-width: 1028px) {
            width: 100%;
            height: auto;

            .go-consult {
                margin: 30px 0;
            }
        }

        &.pic-item {
            padding: 0 0 0 20px;

        }

        .decorate {
            position: absolute;
            right: 0;
            top: 0;
            width: 200px;
            height: 200px;
            background-image: url('@/assets/circle.png');
            background-repeat: repeat;
            background-size: auto;
        }

        .pic-cover {
            width: 100%;
            height: 100%;
            padding: 40px 40px 0 0;
        }

        .pic {
            background-image: url('@/assets/who.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 100%;
        }
    }
}

.go-consult {
    margin: 55px 0;
}
</style>