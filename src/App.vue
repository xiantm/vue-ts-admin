<template>
  <div id='app'>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class App extends Vue { }
</script>
