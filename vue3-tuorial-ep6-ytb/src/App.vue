<template>
  <div>
    <Count />
    <Count />
    <Count1 />
    <h1 @click="sum">
      {{ count }}
    </h1>
    <h1 @click="sum">
      {{ count }}
    </h1>
    <h1 @click="count1++">
      {{ count1 }}
    </h1>
    <h1> SUm day {{ sum4 }}</h1>
  </div>
</template>

<script>
import Count from "@/components/Count.vue";
import Count1 from "@/components/Count1.vue";
export default {
  name: "App",
  components: {
    Count,
    Count1,
  },
  data: () => {
    return {
      count: 0,
      count1: 0,
    };
  },

  methods: {
    sum() {

      return (this.count = this.count + 1);
    },
    sum1() {
      return (this.count = this.count + 1);
    },
    countFunction1() {
      this.countFunction();
    },
  },
  computed: {
    sum4() {
      /* eslint-disable */ 
      return (this.count = this.count + 1);
    },
  },
};
</script>

