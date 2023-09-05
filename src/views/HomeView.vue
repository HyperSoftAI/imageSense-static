<template>
  <main>
    <section class="section1 section">
      <div class="section-inner">
        <h1 class="title">Streamline Photo Management with Nature language Search </h1>
        <p class="des">This is ImageSense, Rediscover Your Memories with Effortless Photo Organization and Search.</p>
        <div><dButton style="margin: auto;"></dButton></div>
      </div>
      <div class="show-pic"><img src="../assets/s1.png" alt=""></div>
      <div class="c1 cc"></div>
      <div class="c2 cc"></div>
      <div class="c3 cc"></div>
      <div class="c4 cc"></div>
    </section>
    <section class="section2 section">
      <div class="left2 part-item">
        <img class="m1" src="../assets/s2.png" alt="">
        <img class="m2" src="../assets/s3.png" alt="">
      </div>
      <div class="right2 part-item">
        <div class="c-cover">
          <div class="g-title">Search everything</div>
          <div class="b-title">Objects, events, even your emotions at particular moments.</div>
          <div class="desc">ImageSense leverages a powerful on-device AI model to provide you with precise photo analysis and search while safeguarding your privacy. We accurately analyze and search your photos, ensuring your privacy is always protected.</div>
          <dButton></dButton>
        </div>
      </div>
    </section>
    <section class="section3 section">
      <div class="left3 part-item">
        <div class="hc1"></div>
        <img class="m4" src="../assets/s4.png" alt="">
      </div>
      <div class="right3 part-item">
        <div class="c-cover">
          <div class="g-title">Manage all in one place</div>
          <div class="b-title">Photo albums and cloud drives are fully supported.</div>
          <div class="desc">We are continuously developing support for the native file system, NAS, and more. Simultaneously, we're unveiling an advanced edition tailored for photographers, designers, and aficionados. We firmly believe that AI technology will usher in heightened productivity.</div>
          <dButton></dButton>
        </div>
      </div>
    </section>
    <section class="section4">
      <div class="bg">
        <div class="c1 cc"></div>
        <div class="c2 cc"></div>
        <div class="c3 cc"></div>
      </div>
      <div class="text-cover">
        <div class="t-text">Unlock the Power of ImageSense - Elevate Your Photo Experience!</div>
        <div class="d-text">Embark on your AI-powered photo journey with ImageSense, integrating all your photo storage into one place.</div>
      </div>   
      <div><dButton style="margin: auto;"></dButton></div>
    </section>
  </main>
</template>

<script>
import dButton from '../components/dButton.vue'

export default {
  components: {
    dButton
  }
}

</script>

<style lang="less">
  .section {
  }
  .section1 {
    color: #fff;
    background: linear-gradient(90deg, var(--vt-c-blue), var(--vt-c-blue-soft), var(--vt-c-blue-mute));
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    overflow: hidden;
    justify-content: space-between;
    min-height: 100vh;

    .section-inner {
      position: relative;
      width: 70%;
      margin: 0 auto;
      text-align: center;
      z-index: 3;
      flex: 1;
      display: flex;
      flex-direction: inherit;
      justify-content: center;

      @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 5px;
      }
    }
    .title {
      font-size: 60px;
      font-weight: bolder;
      line-height: 80px;
      text-shadow: 0px 2px 1px rgb(0 0 0 / 50%);
      word-break: break-word;
      @media screen and (max-width: 1200px) {
        font-size: 40px;
        line-height: 54px;
      }
      @media screen and (max-width: 768px) {
        font-size: 32px;
        line-height: 48px;
        letter-spacing: -0.5px;
      }
    }
    .des {
      width: 600px;
      font-size: 16px;
      margin: 20px auto;
      @media screen and (max-width: 768px) {
        max-width: 100%;
        font-size: 13px;
        margin-top: 10px;
        width: 340px;
      }
    }
    .show-pic {
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 0;
      height: 350px;
      overflow: hidden;
      z-index: 3;
      @media screen and (max-width: 768px) {
        height: 300px;
      }

      img {
        width: 340px;
        @media screen and (max-width: 768px) {
          width: 200px;
        }
      }
    }
    .cc {
      position: absolute;
      &.c1 {
        width: 80px;
        height: 80px;
        background-color: fade(#fff, 20%);
        border-radius: 50%;
        left: 50%;
        top: 50%;
        margin-top: -40px;
        margin-left: calc(-30vw);
        @media screen and (max-width: 768px) {
          width: 40px;
          height: 40px;
          margin-top: -20px;
          margin-left: calc(-45vw);
        }
      }
      &.c2 {
        width: 150px;
        height: 150px;
        background-color: #00BB98;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        margin-left: calc(45vw);
        @media screen and (max-width: 768px) {
          width: 70px;
          height: 70px;
        }
      }
      &.c4 {
        width: 150px;
        height: 150px;
        background-color: fade(#fff, 10%);
        border-radius: 50%;
        left: 50%;
        transform: translateX(-800px);
        bottom: 0;
        @media screen and (max-width: 768px) {
          width: 100px;
          height: 100px;
          transform: none;
          bottom: 75vh;
          right: 10%;
          left: auto;
        }
      }
      &.c3 {
        width: 1300px;
        height: 1300px;
        background-color: #FFC83E;
        border-radius: 50%;
        bottom: -1100px;
        transform: translateX(-50%);
        left: 50%;
        z-index: 0;
      }
    }
  }
  .section2 {
    display: flex;
    flex-direction: row;
    padding: 0px var(--section-gap);
    background-color: fade(#2B59FF,3%);
    gap: 120px;

    @media screen and (max-width: 1500px) {
      padding: 0px var(--section-m-gap);
    }

    @media screen and (max-width: 1200px) {
      gap: 80px;
    }

    @media screen and (max-width: 1000px) {
      gap: 30px;
    }

    @media screen and (max-width: 768px) {
      padding: 0px var(--section-s-gap);
      gap: 0px;
      flex-direction: column;
    }

    .left2 {
      text-align: center;

      @media screen and (max-width: 1200px) {
        transform: scale(0.8);
      }

      @media screen and (max-width: 1000px) {
        transform: scale(0.6);
      }
      @media screen and (max-width: 768px) {
        // transform: scale(1);
        width: 100%;
        flex: auto !important;
        transform: scale(1);
        height: 480px !important;
      }
      @media screen and (max-width: 400px) {
        // transform: scale(0.7);
      }
      
    }
    .right2 {
      @media screen and (max-width: 768px) {
          padding: 10px 0 50px;
        }
    }

    .part-item {
      img {
        width: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        @media screen and (max-width: 768px) {
          width: 150px;
        }

        &.m1 {
          margin-left: -260px;
          margin-top: -320px;
          @media screen and (max-width: 768px) {
            margin-left: -140px;
            margin-top: -160px;
          }
        }
        &.m2 {
          margin-left: -30px;
          margin-top: -270px;
          @media screen and (max-width: 768px) {
            margin-left: -20px;
            margin-top: -130px;
          }
        }
      }   
      .c-cover{
        padding-right: 150px;
        padding-left: 0;
        @media screen and (max-width: 1500px) {
          padding-right: 100px;
        }
        @media screen and (max-width: 1200px) {
          padding-right: 0px;
        }
      }   
    }
  }

  .section2, .section3 {
    // max-height: 100vh;
    .part-item {
      position: relative;
      height: 100vh;
      flex: 1;
      display: flex;
      align-items: center;
      .c-cover {
        display: flex;
        flex-direction: column;
        // margin-top: 100px;

        .g-title {
          color: #00BB98;
          font-size: 20px;
          line-height: 26px;
          margin-bottom: 20px;
          @media screen and (max-width: 768px) {
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 10px;
          }
        }
        .b-title {
          color: #000B33;
          font-size: 36px;
          font-weight: 500;
          line-height: 54px;
          margin-bottom: 20px;
          @media screen and (max-width: 768px) {
            font-size: 24px;
            line-height: 36px;
            margin-bottom: 10px;
          }
        }
        .desc {
          font-size: 16px;
          color: #000B33;
          line-height: 26px;
          margin-bottom: 40px;
          @media screen and (max-width: 768px) {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
  .section3 {
    display: flex;
    flex-direction: row-reverse;
    padding: 0px 150px 10px;
    background-color: #fff;
    gap: 120px;
    @media screen and (max-width: 1500px) {
      padding: 0px var(--section-m-gap);
    }
    @media screen and (max-width: 1200px) {
      gap: 80px;
    }
    @media screen and (max-width: 1000px) {
      gap: 30px;
    }
    @media screen and (max-width: 768px) {
      padding: 0px var(--section-s-gap);
      gap: 0px;
      flex-direction: column;
    }
    img {
      width: 330px;
      margin-left: 50px;
      @media screen and (max-width: 768px) {
        margin: 0 auto;
        width: 220px;
        padding: 50px 0;
      }
    }
    .hc1 {
      position: absolute;
      left: 50%;
      margin-left: -130px;
      width: 320px;
      height: 160px;
      background-color: #FFC83E;
      border-radius: 0 0 160px 160px;
      @media screen and (max-width: 768px) {
        width: 160px;
        height: 80px;
        margin-left: 0px;
        border-radius: 0 0 80px 80px;
      }
    }
    .left3 {
      @media screen and (max-width: 1200px) {
        transform: scale(0.9);
      }
      @media screen and (max-width: 1000px) {
        transform: scale(0.7);
      }
      @media screen and (max-width: 768px) {
        transform: scale(1);
      }
    }
    .part-item {
      &.right3 {
        @media screen and (max-width: 768px) {
          padding: 0px 0 80px;
        }
        .c-cover {
          padding-left: 130px;
          padding-right: 50px;
          @media screen and (max-width: 1500px) {
            padding-left: 50px;
            padding-right: 0px;
          }
          @media screen and (max-width: 1000px) {
            padding-left: 20px;
            padding-right: 0px;
          }
          @media screen and (max-width: 768px) {
            padding-left: 0px;
            padding-right: 0px;
          }
        }
      }
    }
  }
  .section4 {
    position: relative;
    padding: 100px 0 20px;
    overflow: hidden;

    .bg {
      position: absolute;
      width: 8000px;
      height: 8000px;
      border-radius: 50%;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: fade(#001C80, 95%);

      .cc {
        background-color: fade(#fff, 10%);
        position: absolute;
        border-radius: 50%;
        &.c1 {
          width: 103px;
          height: 103px;
          top: 100px;
          left: 50%;
          margin-left: calc(44vw);
        }
        &.c2 {
          width: 108px;
          height: 108px;
          top: -10px;
          left: 50%;
          margin-left: calc(-44vw);
        }
        &.c3 {
          width: 137px;
          height: 137px;
          top: 300px;
          left: 50%;
          margin-left: calc(-35vw);
        }
      }
    }
    .text-cover {
      color: #fff;
      text-align: center;
      .t-text {
        font-size: 36px;
        margin-bottom: 20px;
        line-height: 54px;
        @media screen and (max-width: 768px) {
          font-size: 24px;
          line-height: 36px;
        }
      }
      .d-text {
        font-size: 16px;
        line-height: 26px;
        width: 600px;
        max-width: 100%;
        margin: 0 auto 50px;
        @media screen and (max-width: 768px) {
          font-size: 13px;
        }
      }
    }
  }
</style>