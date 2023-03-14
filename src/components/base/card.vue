<template>
    <div class="common-card">
        <div class="title-cover">
            <div class="icon-cover">
                <span class="iconfont" :class="`icon-${name}`"></span>
            </div>
            <p class="title">{{ title }}</p>
        </div>
        <div class="content">{{ des }}</div>
    </div>
</template>

<script>
export default {
    name: 'SummerCard',
    props: {
        name: {
            type: String,
            default: ''
        },
        title: {
            type: String,

        },
        des: {
            type: String
        }
    },
}
</script>

<style lang="less" scoped>
.common-card {
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(43, 89, 255, 0.08);
    border-radius: 10px;
    padding: 40px 20px;

    .title-cover {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (max-width: 768px) {
            flex-direction: row;
            transform: translateY(-15px);
        }
    }

    .icon-cover {
        position: relative;
        width: 80px;
        height: 80px;
        background-color: rgba(55, 124, 253, 0.1);
        border-radius: 40px;

        text-align: center;
        margin: 0 auto 15px;

        @media screen and (max-width: 768px) {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin: 0 10px 0 0;

            span {
                font-size: 20px;
                line-height: 40px;

            }
        }

        span {
            font-size: 40px;
            color: #377CFD;
            line-height: 80px;

            @media screen and (max-width: 768px) {
                font-size: 20px;
                line-height: 40px;
            }

        }
    }
}

.title {
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        margin-bottom: 0px;
    }
}
</style>