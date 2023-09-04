<template>
    <div class="download-cover">
        <!-- <div> -->
            <svg width="30" height="37" viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.0455 12.5639C28.8317 12.7297 25.0577 14.8563 25.0577 19.5848C25.0577 25.0541 29.86 26.9889 30.0037 27.0369C29.9816 27.1548 29.2408 29.6867 27.4717 32.2666C25.8944 34.5369 24.2469 36.8034 21.7408 36.8034C19.2346 36.8034 18.5897 35.3477 15.6966 35.3477C12.8772 35.3477 11.8747 36.8514 9.58231 36.8514C7.28993 36.8514 5.69042 34.7506 3.85135 32.1708C1.72113 29.1413 0 24.4349 0 19.9681C0 12.8034 4.65848 9.00369 9.24324 9.00369C11.6794 9.00369 13.7101 10.6032 15.2396 10.6032C16.6953 10.6032 18.9656 8.90786 21.7371 8.90786C22.7875 8.90786 26.5614 9.00369 29.0455 12.5639ZM20.4214 5.87469C21.5676 4.51474 22.3784 2.62776 22.3784 0.740786C22.3784 0.479116 22.3563 0.213759 22.3084 0C20.4435 0.0700246 18.2248 1.24201 16.887 2.79361C15.8366 3.98772 14.8563 5.87469 14.8563 7.78747C14.8563 8.07494 14.9042 8.36241 14.9263 8.45455C15.0442 8.47666 15.2359 8.50246 15.4275 8.50246C17.1007 8.50246 19.2052 7.38206 20.4214 5.87469Z" fill="white"/>
            </svg>
        <!-- </div> -->
        <div class="text">
            <div class="top">Download on the</div>
            <div class="bottom">App Store</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.download-cover {
    background-color: #000;
    border-radius: 6px;
    padding: 10px 12px;
    color: #fff;
    display: flex;
    width: fit-content;
    gap: 10px;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        background-color: fade(#000, 90%);
    }

    .text {
        .top{
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
        }
        .bottom {
            font-size: 20px;
            font-weight: 600;
            line-height: 20px;
        }
    }
}
</style>