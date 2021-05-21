<template>
  <div class="component-container">
    <h2 class="component-title" :class="bgToggleClass()">Afternoon Tasks</h2>

    <div class="list-area">
      <div class="status-wrap">
        <div class="status-text-wrap">
          <h3 class="status">Status</h3>
          <p v-show="flag" class=" status-text">
            タスクはまだ登録されていません。
          </p>

          <p v-show="flag2" class=" status-text">
            タスク数: <span class="bold">{{ taskList.length }}</span>
          </p>
          <p v-show="flag2" class=" status-text">
            完了済みタスク数: <span class="bold">{{ checkedLength }}</span>
          </p>
        </div>
        <button class="toggle-button" @click="listToggle()">
          <fa class="icon" icon="toggle-off" area-hidden="true" />
        </button>
      </div>

      <div class="list-wrap">
        <ul class="list">
          <li class="list-item" v-for="(item, index) in taskList" :key="index">
            <input
              :id="'item' + index"
              name="task"
              class="item-check"
              type="checkbox"
              v-model="item.checked"
              :value="item"
              @change="checkedValue()"
            />
            <label :for="'item' + index" class="item-label">
              {{ item.task }}
            </label>
            <button class="list-delete-button" @click="deleteTasks(item.id)">
              <fa class="icon" icon="times-circle" area-hidden="true" />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div id="mask" class="hidden" @click="inputAreaActive()"></div>
    <div class="input-area">
      <input
        placeholder="タスクを追加"
        type="text"
        class="input input-active"
        v-model="task"
        maxlength="10"
        @keypress.enter="addTasks()"
      />
      <button class="task-add-button" @click="addTasks()">
        <fa icon="plus" class="icon" area-hidden="true" />
      </button>
      <button class="delete-button" @click="deleteInputArea()">
        <fa class="icon" icon="times-circle" area-hidden="true" />
      </button>
    </div>
    <button class="button add-button" @click="inputAreaActive()">
      <fa icon="plus" area-hidden="true" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: [],
      task: "",
      uniqueKey: 0,
      flag: true,
      flag2: false,
      inputFlag: false,
      selectValues: [],
      direction: "left"
    };
  },

  computed: {
    calcValue() {
      let count1 = 0;
      let count2 = 0;
      let current;
      let checkItems = [...document.querySelectorAll(".item-check")];
      for (let i = 0; i <= checkItems.lengerth; i++) {
        count1++;
      }
      let loading = setInterval(() => {
        if (count2 <= count1) {
          current = Math.floor((count2 / checkItems.length) * 100);
          count2++;
          if (count2 == checkItems.length) {
            clearInterval(loading);
          }
        }
      }, 200);

      return loading;
    },
    checkedLength() {
      let list = this.taskList.filter(v => v.checked).map(v => v.value);
      return list.length;
    }
  },
  methods: {
    checkedValue() {
      let checkList = this.taskList.filter(v => v.checked).map(v => v.value);
      let count1 = 0;
      let count2 = 0;
      let current = "";
      let p = document.getElementsByClassName("percentValue");
      //checkListの数を超えない間はcountを増やす
      for (let i = 0; i <= checkList.length; i++) {
        count1++;
      }
      let loading = setInterval(() => {
        //count2がcount1よりも小さい間
        if (count2 > count1) return;
        current = Math.floor((count2 / checkList.length) * 100);
        //count2を増やす
        count2++;

        p.textContent = current + "%";
        //checkListとcount2が等しくなったらクリア
        if (count2 == checkList.length) {
          clearInterval(loading);
        }
      }, 100);
    },
    addTasks() {
      if (this.task === "") {
        return;
      }
      let addItem = {
        id: this.uniqueKey,
        task: this.task,
        checked: false
      };
      let INPUT_AREA_TOGGLE_CLASS = "input-area-active";
      let inputArea = document.querySelector(".input-area");
      let addButton = document.querySelector(".add-button");
      let mask = document.getElementById("mask");
      let BUTTON_TOGGLE_CLASS = "is-hide";
      let MASK_TOGGLE_CLASS = "hidden";
      this.taskList.push(addItem);

      inputArea.classList.remove(INPUT_AREA_TOGGLE_CLASS);
      addButton.classList.remove(BUTTON_TOGGLE_CLASS);
      mask.classList.add(MASK_TOGGLE_CLASS);
      this.uniqueKey++;
      this.task = "";

      if (this.taskList.length <= 0) {
        this.flag = false;
        this.flag2 = true;
      } else {
        this.flag = false;
        this.flag2 = true;
      }
    },

    deleteTasks(id) {
      let deleteIndex = "";
      let check = window.confirm("本当に削除しますか？");
      if (check === true) {
        this.taskList.some((value, index) => {
          if (value.id === id) {
            deleteIndex = index;
          }
        });
        this.taskList.splice(deleteIndex, 1);
      }
      if (this.taskList.length <= 0) {
        this.flag = true;
        this.flag2 = false;
      } else {
        this.flag = false;
        this.flag2 = true;
      }
    },
    toggleInput() {
      if (this.inputFlag === false) {
        setTimeout(() => {
          this.inputFlag = true;
        }, 200);
      } else if (this.inputFlag === true && this.task === "") {
        setTimeout(() => {
          this.inputFlag = false;
        }, 200);
      }
    },
    inputActive() {
      let input = document.querySelector(".input");
      let INPUT_ADD_CLASS = "input-active";
      if (input.classList.contains(INPUT_ADD_CLASS) && input.value == "") {
        input.classList.remove(INPUT_ADD_CLASS);
      } else {
        input.classList.add(INPUT_ADD_CLASS);
      }
    },
    inputAreaActive() {
      let input = document.querySelector(".input");
      let inputArea = document.querySelector(".input-area");
      let mask = document.getElementById("mask");
      let addButton = document.querySelector(".add-button");
      let INPUT_AREA_TOGGLE_CLASS = "input-area-active";
      let BUTTON_TOGGLE_CLASS = "is-hide";
      let MASK_TOGGLE_CLASS = "hidden";
      //inputAreaにINPUT_AREA_ADD_CLASSが含まれていて、inputが空白だったら
      if (
        inputArea.classList.contains(INPUT_AREA_TOGGLE_CLASS) &&
        input.value == ""
      ) {
        //inputAreaからINPUT_AREA_ADD_CLASSを削除
        inputArea.classList.remove(INPUT_AREA_TOGGLE_CLASS);
        addButton.classList.remove(BUTTON_TOGGLE_CLASS);
        //maskからMASK_ADD_CLASSを削除
        mask.classList.add(MASK_TOGGLE_CLASS);
      } else {
        inputArea.classList.add(INPUT_AREA_TOGGLE_CLASS);
        addButton.classList.add(BUTTON_TOGGLE_CLASS);
        mask.classList.remove(MASK_TOGGLE_CLASS);
        input.focus();
      }
    },
    deleteInputArea() {
      let inputArea = document.querySelector(".input-area");
      let addButton = document.querySelector(".add-button");
      let mask = document.getElementById("mask");
      let INPUT_AREA_TOGGLE_CLASS = "input-area-active";
      let BUTTON_TOGGLE_CLASS = "is-hide";
      let MASK_TOGGLE_CLASS = "hidden";

      if (inputArea.classList.contains(INPUT_AREA_TOGGLE_CLASS)) {
        inputArea.classList.remove(INPUT_AREA_TOGGLE_CLASS);
        addButton.classList.remove(BUTTON_TOGGLE_CLASS);
        mask.classList.add(MASK_TOGGLE_CLASS);
      } else {
        inputArea.classList.add(INPUT_AREA_TOGGLE_CLASS);
        addButton.classList.add(BUTTON_TOGGLE_CLASS);
        mask.classList.remove(MASK_TOGGLE_CLASS);
      }
    },
    inputWrapDelete() {
      let INPUT_AREA_TOGGLE_CLASS = "input-area-active";
      let BUTTON_TOGGLE_CLASS = "is-hide";
      let addButton = document.querySelector(".add-button");
      if (inputWrap.classList.contains(INPUT_AREA_TOGGLE_CLASS)) {
        inputWrap.classList.remove(INPUT_AREA_TOGGLE_CLASS);
        addButton.classList.remove(BUTTON_TOGGLE_CLASS);
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
    },
    listToggle() {
      let list = document.querySelector(".list");
      let listChild = [...list.childNodes];
      let toggleButton = document.querySelector(".toggle-button");
      let filterItem = listChild.filter(item =>
        item.classList.contains("list-item-grid")
      );

      //taskList.lengthが0以下で、list内に.list-gridが含まれていて、itemに .list-item-grid が含まれていたら
      if (this.taskList.length >= 0 && list.classList.contains("list-grid")) {
        //listから .list-grid、itemから .list-item-grid 削除
        list.classList.remove("list-grid");
        listChild.forEach(item => item.classList.remove("list-item-grid"));
        toggleButton.classList.remove("is-active");
      } else if (
        (this.taskList.length >= 0 && !list.classList.contains("list-grid"),
        !toggleButton.classList.contains("is-active"))
      ) {
        list.classList.add("list-grid");
        listChild.forEach(item => item.classList.add("list-item-grid"));
        toggleButton.classList.add("is-active");
      }
    }
  }
};
</script>
<style scoped lang="scss"></style>
