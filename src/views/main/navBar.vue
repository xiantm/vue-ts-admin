<template>
    <el-header height="48px">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="opened"></hamburger>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.meta.title" :to="item.redirect||item.path">
                    {{item.meta.title}}
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <span @click="loginOut">退出</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
    </el-header>
</template>

<script lang="ts">
import Hamburger from "@/components/Hamburger/index.vue";
import { LOGIN_OUT } from '@/store/mutation-types'
import { Mutation} from 'vuex-class'
import { RouteRecord } from 'vue-router'
import { Vue, Component, Prop, Watch } from "vue-property-decorator";



interface Item {
    path: string;
    meta: any;
    redirect?: string
}
@Component({
    components: {
        Hamburger
    },
    created: function () {
        this.getBreadcrumb()
    }
})
export default class NavBar extends Vue {
    @Prop() opened: boolean
    levelList: Item[] = null //必须给初始值，不然不会动态绑定

    @Mutation(LOGIN_OUT) loginout

    toggleSideBar() {
        this.$emit('toggleSideBar')
    }

    getBreadcrumb() {
        let items: Item[] = new Array<Item>()
        const matched = this.$route.matched.filter(item => item.path) //过滤path = "" 的那一条
        const first = matched[0]
        if (first && first.name !== 'dashboard') {
            let nub = items.push({ path: '/dashboard', meta: { title: '主页' } })
        }
        matched.forEach(item => {
            const { path, meta, redirect } = item
            items.push({ path, meta, redirect: redirect as string })
        })
        this.levelList = items
    }

    loginOut() {
        this.loginout()
        this.$router.push("/login")
    }

    @Watch('$route')
    onChildChanged() {
        this.getBreadcrumb()
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$outHeight: 48px;
.el-breadcrumb {
  line-height: $outHeight;
  height: $outHeight;
  margin-left: 8px;
  float: left;
}
.el-header {
  line-height: $outHeight;
  text-align: right;
  font-size: 12px;
  border-bottom: 0.5px solid gainsboro;
  .hamburger-container {
    height: $outHeight;
    float: left;
    padding: 5px 8px;
  }
}

/*fade*/
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>

