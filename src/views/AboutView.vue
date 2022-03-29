<template>
  <div class="about">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside style="background-color: #222d32" class="cbl">
        <el-menu background-color="#222d32" :router="true">
          <el-menu-item
            class="item1"
            style="display: flex; background: #0079d9; justify-content: center"
          >
            <span slot="title" style="color: #fff">ElementUi管理后台</span>
          </el-menu-item>

          <el-menu-item class="item">
            <i class="el-icon-s-tools"></i>
            <span slot="title" style="color: #0086f1">首页</span>
          </el-menu-item>

          <!-- 二级菜单 -->
          <el-submenu class="item"  index="2">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span style="color: #fff">文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/">
                <i class="el-icon-warning-outline"></i>
                <span style="color: #fff">文章列表</span></el-menu-item
              >
              <el-menu-item index="2-2"
                ><i class="el-icon-warning-outline"></i
                ><span style="color: #fff">多层级路由实例</span></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
        </el-menu>
      </el-aside>
      <!--  -->

      <!-- 右边主体 -->
      <el-container>
        <!-- 头部 -->
        <el-header style="text-align: right; font-size: 12px;background:#0079d9;height:56px;line-height:56px;color:#fff">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Admin </span>
        </el-header>
        <!--  -->
        <el-main>
          <!-- 二级路由组件 -->
          <router-view></router-view>
          <!-- <div ref="main" class="echarts"></div> -->
        </el-main>
      </el-container>

      <!--  -->
    </el-container>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
<style scoped>
.cbl {
  height: 100vh;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>
