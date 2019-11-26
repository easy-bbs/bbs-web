<template>
  <div>
    <!-- 用户评论 -->
    <div>
      <ul>
        <li v-for>
          <!-- 评论头部信息 -->
          <div>
            <!-- 头像 -->
            <a href="#" target="_blank">
              <img />
            </a>
            <!-- 名称 楼数 日期 -->
            <div class="title-info">
              <a href="#" target="_blank">
                <span>a</span>
              </a>
              <span># 楼 •</span>
            </div>
            <!-- <div class="title-info-other">
              <span>
                <a
                  v-show="!comment.showContent"
                  @click="changeContent(index)"
                >查看回复({{comment.childCommentsCount}})</a>
                <a v-show="comment.showContent" @click="changeContent(index)">收起回复</a>
                <a @click="writeComment(comment,1)">回复</a>
              </span>
            </div>-->
          </div>
          <!-- 评论内容 -->
          <div></div>
          <!-- 二级评论 -->
          <ul></ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>