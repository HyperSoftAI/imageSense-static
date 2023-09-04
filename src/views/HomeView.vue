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
    min-height: 100vh;
  }
  .section1 {
    color: #fff;
    background: linear-gradient(90deg, var(--vt-c-blue), var(--vt-c-blue-soft), var(--vt-c-blue-mute));
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    overflow: hidden;

    .section-inner {
      position: relative;
      width: 70%;
      margin: auto;
      text-align: center;
      z-index: 3;
    }
    .title {
      font-size: 60px;
      font-weight: bolder;
      line-height: 80px;
    }
    .des {
      width: 60%;
      font-size: 16px;
      margin: 20px auto;
    }
    .show-pic {
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 0;
      height: 350px;
      overflow: hidden;
      z-index: 3;

      img {
        width: 340px;
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
        transform: translate(-500px, -50%);
      }
      &.c2 {
        width: 150px;
        height: 150px;
        background-color: #00BB98;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(680px);
      }
      &.c4 {
        width: 150px;
        height: 150px;
        background-color: fade(#fff, 10%);
        border-radius: 50%;
        left: 50%;
        transform: translateX(-800px);
        bottom: 0;
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
    padding: 0px 150px;
    background-color: fade(#2B59FF,3%);
    gap: 120px;
    .left2 {
      text-align: center;
    }

    .part-item {
    
      img {
        width: 300px;
        position: absolute;
        top: 50%;
        left: 50%;

        &.m1 {
          margin-left: -260px;
          margin-top: -320px;
        }
        &.m2 {
          margin-left: -30px;
          margin-top: -270px;
        }
      }   
      .c-cover{
        padding-right: 150px;
        padding-left: 0;
      }   
    }
  }

  .section2, .section3 {
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
        }
        .b-title {
          color: #000B33;
          font-size: 36px;
          font-weight: 500;
          line-height: 54px;
          margin-bottom: 20px;
        }
        .desc {
          font-size: 16px;
          color: #000B33;
          line-height: 26px;
          margin-bottom: 40px;
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

    img {
      width: 330px;
      margin-left: 50px;
      // position: absolute;
      // top: 50%;
      // left: 50%;
      // margin-left: -300px;
      // margin-top: -360px;
    }
    .hc1 {
      position: absolute;
      left: 50%;
      margin-left: -130px;
      width: 320px;
      height: 160px;
      background-color: #FFC83E;
      border-radius: 0 0 160px 160px;
    }
    .part-item {
      &.right3 {
        .c-cover {
          padding-left: 130px;
          padding-right: 50px;
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
          top: 0px;
          left: 50%;
          margin-left: calc(-44vw);
        }
        &.c3 {
          width: 137px;
          height: 137px;
          top: 280px;
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
      }
      .d-text {
        font-size: 16px;
        line-height: 26px;
        width: 600px;
        margin: 0 auto 50px;
      }
    }
  }
</style>