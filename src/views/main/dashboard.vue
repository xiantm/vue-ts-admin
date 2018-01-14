<template>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import * as _ from "lodash";

interface Item {
    date: string;
    name: string;
    address: string;
}
const item = {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}
const tableData = _.fill(new Array<Item>(20), item)
@Component
export default class Dashboard extends Vue {
    tableData = tableData
}
</script>

