<template>
    <div class="common-card">
        <div class="icon-cover">
            <span class="iconfont" :class="`icon-${name}`"></span>
        </div>
        <p class="title">{{ title }}</p>
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

    .icon-cover {
        position: relative;
        width: 80px;
        height: 80px;
        background-color: rgba(55, 124, 253, 0.1);
        border-radius: 40px;

        text-align: center;
        margin: 0 auto 15px;

        span {
            font-size: 40px;
            color: #377CFD;
            line-height: 80px;

        }
    }
}

.title {
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
}
</style>