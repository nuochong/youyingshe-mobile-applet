<template>
  <div>
    <!-- <button class="test" @click="showList">显示</button> -->
    <div class="article-add-container" id="rightBlock" @click="showList" v-if="show">
      <!-- <div class="article-add-mask"></div> -->
      <div class="article-add-panel-wrap">
        <div class="article-add-panel" id="personalInfo">
          <div class="article-add-list article-add-img" @click="targetImg">
            <i class="iconfont iconimages"></i>
            图片
          </div>
          <div class="article-add-list article-add-text" @click="targetText">
            <i class="iconfont iconwenzi"></i>
            文字
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data() {
    return {
      title: 'title',
      userInfo: {},
      show: false //用来控制显示与否的变量
    };
  },
  components: {},
  methods: {
    showList() {
      this.show = !this.show;
    },
    targetImg() {
      console.log('点击了图片');
    },
    targetText() {
      console.log('点击了文字');
    }
  },
  created() {
    this.bus.$on('getTarget', target => {
      target && this.showList();
    });
  }
};
</script>

<style lang="scss" scoped>
.test {
  margin: 0 auto;
}
#rightBlock {
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 12;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
}
#personalInfo {
  display: block;
  position: relative;
  background: #ffffff;
}

.article-add-container {
  .article-add-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: (255, 255, 255, 0.7);
  }
  .article-add-panel-wrap {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .article-add-panel {
      text-align: center;
      border-radius: 10px;
      width: 60%;
      .article-add-list {
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid gray;
        &:last-child {
          border-bottom: 0;
        }
      }
      i {
        color: #ea6f5a;
      }
      .article-add-img {
      }
      .article-add-text {
      }
    }
  }
}
</style>
