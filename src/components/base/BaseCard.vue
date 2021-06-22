<template>
  <div class="base-card">
    <div class="base-card-header"></div>
    <div class="base-card-content">
      <div class="card-image">
        <img src="@/assets/images/test-product.png" :alt="product.title" />
      </div>
      <div class="card-text">
        <div class="card-title">
          {{ product.title }}
        </div>
        <div class="card-description">
          {{ product.desc }}
        </div>
      </div>
    </div>
    <div class="base-card-footer"></div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.base-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: $base-color-white;
  border: 1px solid #f1f1f3;
  box-shadow: 4px 8px 50px -5px rgba(127, 150, 168, 0.2);
  border-radius: 32px;
  flex: 0 0 180px;
  width: 180px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 24px;
  box-sizing: border-box;

  &-header {
  }

  .card-image {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f7f8;
    border-radius: 21px;
    margin-bottom: 20px;
    padding: 10px;
  }

  &-content {
    text-align: center;

    .card-title {
      font-size: 16px;
      line-height: 21px;
      font-weight: bold;
      color: $base-color-black;
      margin-bottom: 5px;
    }

    .card-description {
      font-size: 13px;
      line-height: 18px;
      color: $base-color-gray-light;
    }
  }

  &-footer {
  }
}
</style>
