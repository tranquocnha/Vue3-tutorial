<template>
  <div class="screen">
    <div
      class="screen__inner"
      :style="{
        width: `${
          ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 +
            16) *
          Math.sqrt(cardsContext.length)
        }px`,
      }"
    >
      <card-flip
        v-for="(card, index) in cardsContext"
        :key="index"
        :ref="`card-${index}`"
        :imgBackFaceUrl="`images/${card}.png`"
        :card="{ index: index, value: card }"
        :cardsContext="cardsContext"
        @onFip="checkRule($event)"
        :isFlipping="isFlipping"
      />
    </div>
  </div>
</template>

<script>
import CardFlip from "./Card.vue";

export default {
  props: {
    cardsContext: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CardFlip,
  },
  data() {
    return {
      rules: [],
      isFlipping: false,
    };
  },
  methods: {
    checkRule(card) {
      // Hàm kiểm tra luật chơi
      if (this.rules.length === 2) return false; // Nếu đã chọn 2 lá bài thì không thực hiện tiếp và return false

      this.rules.push(card); // Thêm lá bài mới vào mảng chứa các lá bài đã chọn

      // Kiểm tra xem đã chọn 2 lá bài chưa và giá trị của 2 lá bài có bằng nhau không
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        const cardRefs = this.$refs[`card-${this.rules[0].index}`]; // Lấy reference đến lá bài thứ nhất
        if (cardRefs) cardRefs[0].onEnabledDisable(); // Nếu reference tồn tại thì thực hiện hàm onEnabledDisable() trên lá bài thứ nhất
        const cardRefs2 = this.$refs[`card-${this.rules[1].index}`]; // Lấy reference đến lá bài thứ hai
        if (cardRefs2) cardRefs2[0].onEnabledDisable(); // Nếu reference tồn tại thì thực hiện hàm onEnabledDisable() trên lá bài thứ hai
        this.rules = []; // Xóa mảng chứa các lá bài đã chọn
        const disabledElements = document.querySelectorAll(
          ".screen .card.disabled"
        ); // Lấy tất cả các lá bài đã được tìm thấy và đã tìm được cặp
        // Kiểm tra xem số lượng lá bài tìm thấy có bằng với số lượng lá bài trên màn hình không
        if (
          disabledElements &&
          disabledElements.length === this.cardsContext.length - 2
        ) {
          setTimeout(() => {
            this.$emit("onFinish"); // Gửi sự kiện onFinish cho component cha
          }, 2000);
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        this.isFlipping = true;
        // Nếu đã chọn 2 lá bài và giá trị không bằng nhau
        setTimeout(() => {
          const cardRefs = this.$refs[`card-${this.rules[0].index}`]; // Lấy reference đến lá bài thứ nhất
          if (cardRefs) cardRefs[0].onFlipBackCard(); // Nếu reference tồn tại thì thực hiện hàm onFlipBackCard() trên lá bài thứ nhất
          const cardRefs2 = this.$refs[`card-${this.rules[1].index}`]; // Lấy reference đến lá bài thứ hai
          if (cardRefs2) cardRefs2[0].onFlipBackCard(); // Nếu reference tồn tại thì thực hiện hàm onFlipBackCard() trên lá bài thứ hai
          this.rules = []; // Xóa mảng chứa các lá bài đã chọn
          this.isFlipping = false;
        }, 1800);
      } else {
        return false; // Nếu chưa chọn đủ 2
      }
    },
  },
};
</script>

<style scoped>
.screen {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--dark);
  color: var(--light);
}

.screen__inner {
  width: calc(424px);
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
</style>
