<template>
  <div v-if="isVisible" class="base-modal">
    <div class="base-modal-data">
      <div class="base-modal-header">
        <div @click.prevent="hideModal" class="modal-header-back">
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.50015 1.00027L1.50015 4.00027L4.50015 7.00027"
              stroke="#ACBDCB"
              stroke-width="1.75933"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Select Product Type</span>
        </div>
        <div class="modal-header-title">
          <slot name="title"></slot>
        </div>
        <span
          @click.prevent="hideModal"
          class="modal-close-btn"
          aria-label="Close modal"
        >
          &times;
        </span>
      </div>
      <div class="base-modal-content">
        <slot name="content"></slot>
      </div>
      <div class="base-modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    this.showModal();
  },
  methods: {
    showModal() {
      this.isVisible = true;
    },
    hideModal() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped lang="scss">
.base-modal {
  position: fixed;
  padding: 50px 25px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;

  &-data {
    background: $base-color-white;
    border-radius: 16px;
    position: relative;
    padding: 45px 0;
    margin: auto;
    width: 100%;
    max-width: 960px;
    max-height: 768px;
    animation-name: animate-from-bottom;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    overflow-y: auto;
  }

  &-header {
    position: relative;
    text-align: center;
    padding: 0 53px;
    margin: 0 50px 24px 50px;

    .modal-header-back,
    .modal-close-btn {
      position: absolute;
      cursor: pointer;
      transition: all 0.3s ease-out;

      &:hover {
        color: $base-color-black;
      }
    }

    .modal-header-back {
      top: 50%;
      left: 0;
      transform: translate(0, -50%);

      svg {
        margin-right: 21px;
      }

      font-size: 15px;
      line-height: 15px;
      color: $base-color-gray-light;
    }

    .modal-close-btn {
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
      color: #acbdcb;
      font-size: 30px;
      line-height: 30px;
    }

    .modal-header-title {
      font-size: 20px;
      line-height: 24px;
      font-weight: 600;
      color: $base-color-black;
      text-align: center;
    }
  }

  &-content {
  }

  &-footer {
  }
}

@keyframes animate-from-bottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}
</style>
