<template>
  <div class="base-nav">
    <nav class="nav-list">
      <a
        v-for="item of navigation"
        :key="item.id"
        href="#"
        class="nav-item"
        :class="{active: item.active}"
        :aria-label="item.name"
      >
        {{ item.name }}
      </a>
    </nav>
    <div class="nav-btn">
      <span>All vendors</span>
      <svg
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 1.16667L5.5 4.83334L1.5 1.16667"
          stroke="#2E3B40"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        {
          id: 0,
          name: "Draft",
          url: "#",
          active: false,
        },
        {
          id: 1,
          name: "Single",
          url: "#",
          active: true,
        },
        {
          id: 2,
          name: "Multiple",
          url: "#",
          active: false,
        },
        {
          id: 3,
          name: "Shape",
          url: "#",
          active: false,
        },
        {
          id: 4,
          name: "Bay/Bow",
          url: "#",
          active: false,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.base-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f7f8;
  padding: 0 60px;
  margin-bottom: 32px;

  .nav-list {
    display: flex;

    .nav-item {
      position: relative;
      font-size: 15px;
      line-height: 22px;
      color: #687a89;
      padding: 20px 0;
      margin-right: 40px;
      text-decoration: none;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px;
        background: #4ac6b7;
        opacity: 0;
      }

      &:hover {
        cursor: pointer;
      }

      &.active {
        font-weight: 600;
        color: #2e3b40;

        &:after {
          opacity: 1;
        }
      }
    }

    .nav-btn {
    }
  }

  .nav-btn {
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #2e3b40;
    cursor: pointer;

    svg {
      margin-left: 12px;
    }
  }
}
</style>
