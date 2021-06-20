<template>
  <div class="page page-home">
    <div class="container">
      <base-button class="modal-button" color="primary">
        show modal
      </base-button>

      <base-line></base-line>

      <div class="card-list">
        <base-card
          v-for="product in products"
          :key="product.id"
          :product="product"
        >
          {{ product.title }}
        </base-card>
      </div>

      <base-line></base-line>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/base/BaseButton";
import BaseCard from "../components/base/BaseCard";
import BaseLine from "../components/base/BaseLine";

export default {
  name: "Home",
  components: {BaseLine, BaseCard, BaseButton},
  data() {
    return {
      products: [
        {
          id: 0,
          title: "Single Slider",
          desc: "description",
        },
        {
          id: 1,
          title: "Single Slider",
          desc: "description",
        },
        {
          id: 2,
          title: "Double Slider",
          desc: "Lift Out",
        },
        {
          id: 3,
          title: "Double Slider",
          desc: "Lift Out",
        },
        {
          id: 4,
          title: "Triple Slider",
          desc: "Lift Out",
        },
        {
          id: 5,
          title: "Triple Slider",
          desc: "description",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.page-home {
  .modal-button {
    text-align: center;
  }

  .card-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
