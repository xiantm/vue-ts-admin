<template>
    <el-container :style="{height:height}">
        <Aside :height="height" :collapse="!siderOpened" />
        <el-container>
            <nav-bar :opened="siderOpened" @toggleSideBar="toggleSideBar" />
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer height=20>Copyright © 2017 华兴致远</el-footer>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from 'vuex-class'
import Aside from './aside.vue'
import NavBar from './navBar.vue'
import * as _ from "lodash";

@Component({
    components: {
        Aside,
        NavBar
    }
})
export default class Main extends Vue {
    @State('windowInnerHeight') height
    siderOpened = true;
    toggleSideBar() {
        this.siderOpened = !this.siderOpened
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-footer {
  height: 20px;
  background-color: #b3c0d1;
  color: #333;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
}
</style>
