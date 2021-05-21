<template>
  <div class="container left" :class="bgToggleClass">
    <!-- MainContents -->
    <div class="content-wrap">
      <div class="time-wrap">
        <p class="date" :class="bgToggleClass">{{ nowDate }}</p>
      </div>
      <h1 class="title" :class="bgToggleClass">ToDo App</h1>
      <div class="toggle-button-wrap">
        <p class="text greething">{{ nowGreething }}</p>

        <div class="link-area">
          <nuxt-link to="/" class=" back-button">
            <fa icon="chevron-left" area-hidden="true"
          /></nuxt-link>
        </div>
        <div class="menu-button-area">
          <button class="menu-button">
            <fa class="icon" area-hidden="true" icon="ellipsis-h" />
          </button>
        </div>

        <div class="button-wrap">
          <button
            @click="currentTab = tab"
            :class="['button', { 'is-active': tab == currentTab }]"
            v-for="(tab, index) in tabs"
            :key="index"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- ComponentsArea -->
      <div class="content-area ">
        <keep-alive>
          <component class="componentWrap" :is="currentTabToggle">{{
            nowTaskLists
          }}</component>
        </keep-alive>
      </div>
    </div>

    <!-- BgAnimation -->
    <div class="bg-animation-wrap">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["Morning", "Afternoon", "Night"],
      currentTab: "",
      greething: ["おはようございます", "こんにちは", "こんばんは"]
    };
  },
  transitions: {
    name: "page"
  },
  computed: {
    currentTabToggle() {
      return "Tab-" + this.currentTab.toLowerCase();
    },
    nowDate() {
      const d = new Date();
      const formatter = new Intl.NumberFormat("ja", {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      let month = formatter.format(d.getMonth() + 1);
      let date = formatter.format(d.getDate());
      let res = d.getFullYear() + "/" + month + "/" + date;
      return res;
    },
    // nowTime() {
    //   const d = new Date();
    //   const formatter = new Intl.NumberFormat("ja", {
    //     minimumIntegerDigits: 2,
    //     useGrouping: false
    //   });
    //   let hours = formatter.format(d.getHours());
    //   let minutes = formatter.format(d.getMonth());
    //   let res = hours + ":" + minutes;
    //   return res;
    // },
    nowGreething() {
      const d = new Date().getHours();
      if (0 <= d && d <= 10) {
        return this.greething[0];
      } else if (10 <= d && d <= 17) {
        return this.greething[1];
      } else if (17 <= d && d <= 23) {
        return this.greething[2];
      }
    },

    nowTaskLists() {
      const d = new Date().getHours();
      if (0 <= d && d <= 10) {
        return (this.currentTab = "Morning");
      } else if (10 <= d && d <= 17) {
        return (this.currentTab = "Afternoon");
      } else if (17 <= d && d <= 23) {
        return (this.currentTab = "Night");
      }
    },
    bgToggleClass() {
      let d = new Date().getHours();
      let MORNING_CLASS = "morning-bg";
      let AFTERNOON_CLASS = "afternoon-bg";
      let NIGHT_CLASS = "night-bg";

      if (0 <= d && d <= 10) {
        return MORNING_CLASS;
      } else if (10 <= d && d <= 17) {
        return AFTERNOON_CLASS;
      } else if (18 <= d && d <= 23) {
        return NIGHT_CLASS;
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss">
/* transition */
.right.page-enter-active,
.right.page-leave-active {
  transition: transform 0.5s ease;
}
.right.page-leave-to {
  transform: translateX(100vw);
}
.right.page-enter {
  transform: translateX(-100vw);
}
.left.page-enter-active,
.left.page-leave-active {
  transition: transform 0.5s ease;
}
.left.page-leave-to {
  transform: translateX(-100vw);
}
.left.page-enter {
  transform: translateX(100vw);
}
</style>
