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
    <div class="nav-btn"></div>
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
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.base-nav {
  background: #f7f7f8;
  padding: 0 60px;

  .nav-list {
    display: flex;

    .nav-item {
      padding: 20px 0;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .nav-btn {
  }
}
</style>
