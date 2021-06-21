<template>
  <div class="base-sub-nav">
    <div
      v-for="item of subNav"
      :key="item.id"
      class="sub-nav-item"
      :class="{active: item.active}"
      @click.prevent="onSubItemClick(item.title)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subNav: [
        {
          id: 0,
          title: "New",
          active: true,
        },
        {
          id: 1,
          title: "From quote",
          active: false,
        },
        {
          id: 2,
          title: "Favourite",
          active: false,
        },
      ],
    };
  },
  methods: {
    onSubItemClick(item) {
      console.log("on sub item click", item);
    },
  },
};
</script>

<style scoped lang="scss">
.base-sub-nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;

  .sub-nav-item {
    font-size: 15px;
    line-height: 22px;
    color: #687a89;
    border-radius: 24px;
    padding: 12px 15px;

    &:hover {
      cursor: pointer;
    }

    &.active {
      font-weight: bold;
      color: #ffffff;
      background: #4ac6b7;
      box-shadow: 4px 8px 50px -5px rgba(127, 150, 168, 0.2);
    }
  }
}
</style>
