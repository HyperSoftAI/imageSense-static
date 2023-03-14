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
        <div class="who-cover common-cover max-bg-cover" id="aboutUs">
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
        <div class="our-service-cover common-cover max-bg-cover" id="productService">
            <div class="half-circle"></div>
            <div class="title">我们的服务</div>
            <summer-tabs v-model="activeTab">
                <summer-tab-pane name="app" label="应用开发">
                    <div class="card-container">
                        <summer-card class="card-item" name="xcode" title="移动应用开发"
                            des="提供 iOS 和 Android 平台的应用开发，以及各类混合开发技术类（如 React Native、Flutter）的应用开发服务。采用最新的移动应用开发技术，提供高质量的定制化移动应用解决方案。"></summer-card>
                        <summer-card class="card-item" name="xiaochengxu" title="小程序开发"
                            des="提供高质量的小程序开发服务，包括但不限于微信小程序、支付宝小程序等。使用最新的小程序开发技术，为您提供个性化的小程序解决方案，为业务增长提供有力支持。"></summer-card>
                        <summer-card class="card-item" name="layout" title="网站定制"
                            des="支持响应式网站设计与开发，提供各类企业官网、品牌营销推广、社区论坛、政府门户等网站的定制开发。策划、设计、开发、测试、上线维护一条龙服务。"></summer-card>
                    </div>
                </summer-tab-pane>
                <summer-tab-pane name="solution" label="解决方案">
                    <div class="card-container">
                        <summer-card class="card-item" name="iotwulianwangpingtai" title="物联网"
                            des="提供智能化的解决方案如，覆盖不同的城市和场景：如智慧城市、智慧园区、智能制造等。结合AI、云计算等技术，为您提供更加智能化的物联网解决方案，提升企业效率和竞争力。"></summer-card>
                        <summer-card class="card-item" name="DigitalTwin" title="数字孪生"
                            des="建立为数字模型，实现设备的远程监控、数据分析和虚拟仿真等能力。广泛适用于制造业、能源、交通等领域，为企业提供更加精细化的运营管理和决策支持。"></summer-card>
                        <summer-card class="card-item" name="bigData" title="大数据"
                            des="对企业的数据进行收集、存储、处理、分析和挖掘，从中发现业务价值。可应用于金融、电商、医疗等多个行业，帮助企业了解消费者、优化流程、提升效率、发掘潜在商机。"></summer-card>
                    </div>
                </summer-tab-pane>
                <summer-tab-pane name="area" label="行业领域">
                    <div class="card-container">
                        <summer-card class="card-item" name="Fintech" title="金融科技"
                            des="提供定制化的软件开发解决方案，涵盖了数字支付、风险管理、金融科技创新等领域。我们致力于为客户提供高效、安全的金融服务，帮助客户实现数字化转型和业务增长。"></summer-card>
                        <summer-card class="card-item" name="sale" title="电商零售"
                            des="提供电商零售解决方案，包括移动应用开发、网站定制、数据分析等。帮助企业构建全渠道销售和营销体系，提高品牌知名度和销售额，提升用户购物体验。"></summer-card>
                        <summer-card class="card-item" name="xindiantu" title="医疗健康"
                            des="医疗健康行业提供先进的数字化解决方案，帮助医疗机构和医疗从业者提高工作效率、降低成本、优化治疗方案。包括但不限于医疗数据分析、医疗设备智能化、远程医疗、电子病历等，"></summer-card>
                    </div>
                </summer-tab-pane>
            </summer-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'app'
        }
    },
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

    @media screen and (max-width: 768px) {
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

        @media screen and (max-width: 1024px) {
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

.our-service-cover {
    position: relative;
    overflow: hidden;
    min-height: 750px;

    .half-circle {
        position: absolute;
        width: 600px;
        height: 600px;
        background-color: rgba(55, 124, 253, 0.05);
        top: -300px;
        left: -300px;
        border-radius: 300px;
    }

    .title {
        font-size: 36px;
        text-align: center;
        color: #377CFD;
        margin-bottom: 70px;

        @media screen and (max-width: 768px) {
            margin-bottom: 40px;


        }
    }
}

.card-container {
    display: flex;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }

    .card-item {
        flex: 1;

        &+.card-item {
            margin-left: 15px;

            @media screen and (max-width: 1024px) {
                margin-left: 0;
                margin-top: 20px;
            }
        }

    }
}
</style>