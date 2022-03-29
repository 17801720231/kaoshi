<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside style="background-color: #304156" class="cbl">
        <el-menu background-color="#304156" :router="true">
          <el-menu-item class="item">
            <i class="el-icon-s-tools"></i>
            <span slot="title" style="color: rgb(191, 203, 217)"
              >Dashboard</span
            >
          </el-menu-item>

          <!-- 二级菜单 -->
          <el-submenu class="item" index="2-1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span style="color: #fff">Example</span>
            </template>
            <el-menu-item-group>
              <el-menu-item>
                <i class="el-icon-warning-outline"></i>
                <span style="color: rgb(191, 203, 217)"
                  >Table</span
                ></el-menu-item
              >
              <el-menu-item
                ><i class="el-icon-warning-outline"></i
                ><span style="color: rgb(191, 203, 217)"
                  >Tree</span
                ></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!--  -->

          <el-menu-item class="item">
            <i class="el-icon-s-tools"></i>
            <span slot="title" style="color: rgb(191, 203, 217)">From</span>
          </el-menu-item>

          <el-submenu class="item" index="3-1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span style="color: rgb(191, 203, 217)">Nested</span>
            </template>
            <el-menu-item-group>
              <el-submenu>
                <template slot="title">选项4</template>
                <el-menu-item index="3-1-1">选项4-1</el-menu-item>
              </el-submenu>
              <el-menu-item
                ><i class="el-icon-warning-outline"></i
                ><span style="color: rgb(191, 203, 217)"
                  >Tree</span
                ></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item class="item">
            <i class="el-icon-s-tools"></i>
            <span slot="title" style="color: rgb(191, 203, 217)"
              >External Link</span
            >
          </el-menu-item>

          <el-menu-item class="item">
            <i class="el-icon-s-tools"></i>
            <span slot="title" style="color: rgb(191, 203, 217)">Donate</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!--  -->

      <!-- 右边主体部分 -->
      <el-container>
        <el-main>
          <el-table ref="filterTable" :data="tableData" style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              sortable
              width="180"
              column-key="date"
              :filters="[
                { text: '2016-05-01', value: '2016-05-01' },
                { text: '2016-05-02', value: '2016-05-02' },
                { text: '2016-05-03', value: '2016-05-03' },
                { text: '2016-05-04', value: '2016-05-04' },
              ]"
              :filter-method="filterHandler"
            >
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
            <el-table-column
              prop="tag"
              label="标签"
              width="100"
              :filters="[
                { text: '家', value: '家' },
                { text: '公司', value: '公司' },
              ]"
              :filter-method="filterTag"
              filter-placement="bottom-end"
            >
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.tag === '家' ? 'primary' : 'success'"
                  disable-transitions
                  >{{ scope.row.tag }}</el-tag
                >
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
      <!--  -->
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home2",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
        },
      ],
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>

<style scoped>
.cbl {
  width: 227px;
  height: 100vh;
}
</style>