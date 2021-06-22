<template>
  <div class="page page-home">
    <div class="container">
      <base-button
        @click.prevent="showModal"
        class="modal-button"
        color="primary"
      >
        show modal
      </base-button>

      <base-modal ref="selectWindowTypeModal">
        <template #title> Select a window type </template>
        <template #content>
          <base-sub-nav></base-sub-nav>

          <base-nav></base-nav>

          <div class="checkbox-list">
            <base-checkbox
              v-for="i of products2"
              :key="i.id"
              :data="i"
            ></base-checkbox>
          </div>

          <div class="card-list">
            <base-card
              v-for="product in products"
              :key="product.id"
              :product="product"
            >
              {{ product.title }}
            </base-card>
          </div>
        </template>
      </base-modal>

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

      <base-sub-nav></base-sub-nav>

      <base-line></base-line>

      <base-nav></base-nav>

      <base-line></base-line>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/base/BaseButton";
import BaseCard from "../components/base/BaseCard";
import BaseLine from "../components/base/BaseLine";
import BaseSubNav from "../components/base/BaseSubNav";
import BaseNav from "../components/base/BaseNav";
import BaseModal from "../components/base/BaseModal";
import BaseCheckbox from "../components/base/BaseCheckbox";

export default {
  name: "Home",
  components: {
    BaseCheckbox,
    BaseModal,
    BaseNav,
    BaseSubNav,
    BaseLine,
    BaseCard,
    BaseButton,
  },
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

      products2: [
        {
          id: 0,
          title: "PW & Casement",
          selected: false,
          bgVisible: false,
        },
        {
          id: 1,
          title: "Awning & Hopper",
          selected: false,
          bgVisible: false,
        },
        {
          id: 2,
          title: "Hung",
          selected: true,
          bgVisible: false,
        },
        {
          id: 3,
          title: "Slider",
          selected: false,
          bgVisible: true,
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.$refs.selectWindowTypeModal.showModal();
    },
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

  .checkbox-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
