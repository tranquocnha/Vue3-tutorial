<template>
  <main-screen
    v-if="statusMatch === 'default'"
    @onStart="onHandleBeforeStart($event)"
  />
  <interact-screen
    v-if="statusMatch === 'match'"
    :cardsContext="setting.cardsContext"
    @onFinish="onGetResult"
  />
  <resutl-screen
    v-if="statusMatch === 'result'"
    :timer="timer"
    @onStartAgain="statusMatch = 'default'"
  />
  <coppy-right-screen />
</template>

<script>
import Main from "./components/MainScreen.vue";
import CoppyRightScreen from "./components/CoppyRightScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import { shuffled } from "./utils/array.js";
import ResutlScreen from "./components/ResutlScreen.vue";

export default {
  name: "App",
  components: {
    MainScreen: Main,
    CoppyRightScreen,
    InteractScreen,
    ResutlScreen,
  },
  data() {
    return {
      setting: {
        totalOfBlock: 0,
        cardsContext: [],
        startedArt: null,
      },
      statusMatch: "default",
      timer: 0,
    };
  },
  methods: {
    onHandleBeforeStart(config) {
      this.setting.totalOfBlock = config.totalOfBlock;

      const firstCard = Array.from(
        { length: this.setting.totalOfBlock / 2 },
        (_, i) => i + 1
      );

      const secondCards = [...firstCard];

      const cards = [...firstCard, ...secondCards];

      this.setting.cardsContext = shuffled(shuffled(shuffled(shuffled(cards))));
      this.setting.startedArt = new Date().getTime();

      //data ready
      this.statusMatch = "match";
    },
    onGetResult() {
      this.statusMatch = "result";
      this.timer = new Date().getTime() - this.setting.startedArt;
    },
  },
};
</script>
