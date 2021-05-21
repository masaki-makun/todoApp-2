<template>
  <div class="container right">
    <!-- Loading -->
    <div
      class="loader is-hide"
      :class="{ 'is-hide': loading }"
      id="js-loader"
    ></div>
    <div
      class="loader-text is-hide"
      :class="{ 'is-hide': loading }"
      id="js-loader-text"
    ></div>
    <div class="image-wrap">
      <img class="image" src="~/assets/image/human1.png" alt="" />
    </div>

    <h1 class="title">ToDo App</h1>
    <div class="text-wrap">
      <p class="top-text">ようこそ</p>
      <p class="top-text">
        このアプリでは、わずかなステップであなたの予定を管理します。
      </p>
      <p class="top-text">さあ、始めましょう。</p>
    </div>
    <div class="top-link-area">
      <nuxt-link to="/page1" class="link">始める</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadingFlag: false
    };
  },
  computed: {
    // loading() {
    //   let loader = document.getElementById("js-loader");
    //   let loaderText = document.getElementById("js-loader-text");
    //   let TOGGLE_CLASS = "is-hide";
    //   //loadingFlagがfalseだったら
    //   if (this.loadingFlag === false) {
    //     //変数に代入
    //     let res = setTimeout(() => {
    //       this.loadingFlag = true;
    //       console.log("add");
    //     }, 1500);
    //     return res;
    //   }
    //   // else if (this.loadingFlag === true) {
    //   //   //変数に代入
    //   //   let res = setTimeout(() => {
    //   //     this.loadingFlag = false;
    //   //     console.log("del");
    //   //   }, 1500);
    //   //   return res;
    //   // }
    // }
  },
  methods: {
    // window: (onload = function() {
    //   let loader = document.getElementById("js-loader");
    //   let loaderText = document.getElementById("js-loader-text");
    //   let TOGGLE_CLASS = "is-hide";
    //   let loadingFlag = false;
    //   ("Hello");
    //   //もしloadingiFlagがfalseだったら
    //   if (loadingFlag === false) {
    //     setTimeout(() => {
    //       loader.classList.add(TOGGLE_CLASS);
    //       loaderText.classList.add(TOGGLE_CLASS);
    //     }, 1500);
    //   } else {
    //     setTimeout(() => {
    //       loader.classList.remove(TOGGLE_CLASS);
    //       loaderText.classList.remove(TOGGLE_CLASS);
    //     }, 1500);
    //   }
    // })
  }
};
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 3rem;
  padding: 50px;
  height: 100vh;
  background: #e0e0e0;
}
</style>
