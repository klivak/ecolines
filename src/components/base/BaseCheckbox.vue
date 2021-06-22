<template>
  <div
    v-if="data"
    class="base-checkbox"
    :class="{'base-checkbox-with-bg': data.bgVisible}"
  >
    <input
      type="checkbox"
      :name="`base-checkbox-${data.id}`"
      :id="`base-checkbox-${data.id}`"
      v-model="isSelected"
    />
    <label :for="`base-checkbox-${data.id}`">{{ data.title }}</label>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isSelected: this.data.selected,
    };
  },
};
</script>

<style scoped lang="scss">
.base-checkbox {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  margin-bottom: 32px;

  input,
  label {
    cursor: pointer;
  }

  input {
    max-width: 100%;
    height: auto;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: #1b1b1b;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #f7f7f8;
    background: #f7f7f8;
    border-radius: 12px;
    margin-right: 16px;
    transition: background-color 0.3s ease-out;
  }

  input[type="checkbox"] {
    width: 40px;
    height: 40px;
  }

  input[type="checkbox"]:checked {
    background-image: url("data:image/svg+xml,%3Csvg height='32' width='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m11.4 21.5-5.93-5.93-2.01 2.01 7.94 7.94 17.1-17.1-2.01-2.01z' fill='%23fff'/%3E%3C/svg%3E");
    background-size: 80% 80%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #4ac6b7;
    border-color: #4ac6b7;
  }

  label {
    font-size: 15px;
    line-height: 22px;
    color: #687a89;
  }

  &-with-bg {
    background: #f7f7f8;
    border-radius: 16px;

    input {
      background: #ffffff;
    }

    label {
      font-weight: 600;
    }
  }
}
</style>
