<template>
  <div id="app">
    <nav>
      <router-link to="/home">第一题</router-link> |
      <router-link to="/about">第二题</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
nav{
  position: absolute;
  top: 0;
}
</style>
