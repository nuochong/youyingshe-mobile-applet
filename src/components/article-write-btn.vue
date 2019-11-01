<template>
  <div>
    <button class="article-write-btn">
      <i class="iconfont iconadd"></i>
      写文章
    </button>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss" scoped>
.article-write-btn{
  position: absolute;
  height: 50px;
  line-height:50px;
  color:white;
  font-size: 24px;
  background-color: blue;
  border-radius:25px;
  i{

  }
.card {
  padding: 10px;
}
</style>
