<template>
  <div class="article-write-btn-wrap">
    <button class="article-write-btn">
      <i class="iconfont iconadd"></i>
      写文章
    </button>
  </div>
</template>

<script>
export default {
  props: ['text']
};
</script>

<style lang="scss" scoped>
.article-write-btn {
  height: 40px;
  line-height: 40px;
  width: 140px;

  color: white;
  font-size: 18px;
  background-color: #ea6f5a;
  border-radius: 25px;
  display: inline-block;
  position: fixed;
  bottom: 40px;
  left: 50%;
  margin-left: -70px;
  font-weight: bold;

  -moz-box-shadow: 5px 5px 15px #6e6e6e;
  -webkit-box-shadow: 5px 5px 15px #6e6e6e;
  box-shadow: 5px 5px 15px #6e6e6e;
}
</style>
