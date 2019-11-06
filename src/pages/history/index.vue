<template>
  <div class="history-container">
    <ul class="history-list">
      <li class="history-li">
        <div class="history-li-wrap">
          <div class="history-li-title">
            原来可以使用这个方法构图这么简单
          </div>
          <div class="history-li-time">
            2019-11-22 00:15
          </div>
        </div>
      </li>
      <li class="history-li">
        <div class="history-li-wrap">
          <div class="history-li-title">
            原来可以使用这个方法构图这么简单
          </div>
          <div class="history-li-time">
            2019-11-22 00:15
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import card from '@/components/templete-components';

export default {
  data() {
    return {
      title: 'title'
    };
  },
  components: {
    card
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.history-container {
  width: 100%;
  .history-list {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
    .history-li {
      position: relative;
      word-wrap: break-word;
      padding: 15px 18px;
      border-bottom: 1px solid;
      border-color: #f0f0f0;
      .history-li-wrap {
        display: flex;
        .history-li-title {
          flex: 1;
          font-size: 16px;
        }
        .history-li-time {
          text-align: right;
          width: 160px;
          color: gray;
        }
      }
    }
  }
}
</style>
