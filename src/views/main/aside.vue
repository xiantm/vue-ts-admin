<template>
  <el-menu :router="router" :collapse="collapse" :default-active="$route.path" :style="{height:height}" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <template v-for="item in routes">
      <aside-item :route="item"> </aside-item>
    </template>
  </el-menu>
</template>

<script >
import AsideItem from "./asideItem";
export default {
  props: {
    height: {
      type: String
    },
    collapse: {
      type: Boolean
    }
  },
  data() {
    const routes = this.$router.options.routes;
    const filterRoutes = routes.filter(v => v.children);
    filterRoutes.forEach(element => {
      element.children.forEach(e => (e.meta.superPath = ""));
    });
    const children = filterRoutes[0].children.filter(
      item => item.name !== "dashboard"
    );
    return {
      router: true,
      width: "24px",
      routes: children
    };
  },
  components: { AsideItem }
};
</script>
<style lang="scss" scoped>
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>


