<script lang="tsx">
import Vue, { CreateElement } from 'vue'
import { Component, Prop } from "vue-property-decorator";
import { RouteConfig } from 'vue-router'
@Component
export default class AsideItem extends Vue {
    @Prop() route: RouteConfig
    render(h: CreateElement) {
        const { meta, children } = this.route
        if (children) {
            children.forEach(child => child.meta.superPath = meta.superPath+"/"+this.route.path)
            return (
                <el-submenu index={meta.superPath + "/" + this.route.path}>
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">{meta.title}</span>
                    </template>
                    {
                        children.map(child => <aside-item route={child}></aside-item>)
                    }
                </el-submenu>
            )
        } else if (meta.icon) {
            return (
                <el-menu-item index={meta.superPath + "/" + this.route.path}>
                    <i class={meta.icon}></i>
                    <span slot="title"> {meta.title}</span>
                </el-menu-item>
            )
        } else {
            return (
                <el-menu-item index={meta.superPath + "/" + this.route.path}>
                    {meta.title}
                </el-menu-item>
            )
        }
    }
}
</script>

