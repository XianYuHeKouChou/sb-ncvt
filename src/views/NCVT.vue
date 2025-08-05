<template>
  <div class="p-5 flex justify-around">
    <el-card>
      <h4>脚本安装地址：</h4>
      <el-link type="primary" href="https://scriptcat.org/zh-CN/script-show-page/3915" target="_blank">scriptcat.org/zh-CN/script-show-page/3915</el-link>
    </el-card>
    <el-card>
      <h4>网站源码github地址：</h4>
      <el-link type="primary" href="https://github.com/XianYuHeKouChou/sb-ncvt" target="_blank">github.com/XianYuHeKouChou/sb-ncvt</el-link>
    </el-card>
    <el-card>
      <h4>脚本源码github地址：</h4>
      <el-link type="primary" href="https://github.com/XianYuHeKouChou/JB-NCVT" target="_blank">github.com/XianYuHeKouChou/JB-NCVT</el-link>
    </el-card>
    <el-card>
      <h4>netlify节点地址：</h4>
      <el-link type="primary" href="https://netlify.xianyuhekouchou.tech" target="_blank">netlify.xianyuhekouchou.tech</el-link>
    </el-card>
    <el-card>
      <h4>EdgeOne节点地址：</h4>
      <el-link type="primary" href="https://edgeone.xianyuhekouchou.tech" target="_blank">edgeone.xianyuhekouchou.tech</el-link>
    </el-card>
  </div>
  <div class="p-5 flex justify-around">
    <el-card class="max-w-96">
      <template #header>
        <div class="flex flex-col">
          <span>二课课程入库教程</span>
          <el-tag type="danger" size="large" class="max-w-48 mt-3">仅限电脑操作</el-tag>
          <el-tag type="danger" size="large" class="max-w-48 mt-3">请提前安装好脚本</el-tag>
        </div>
      </template>
      <el-timeline>
        <el-timeline-item timestamp="step1" placement="top">
          <el-card>
            <h4>打开如下网址（请自行打开新标签后粘贴地址打开）：</h4>
            <el-link type="primary">http://crp.ncvt.net/index.portal</el-link>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step2" placement="top">
          <el-card>
            <h4>登录后点击下方链接进入二课：</h4>
            <el-link type="primary" href="http://classids.sub.ncvt.net/" target="_blank">http://classids.sub.ncvt.net/</el-link>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step3" placement="top">
          <el-card>
            <h4>图片可点击放大</h4>
            <h4 class="mt-5">若提示：请使用手机端访问，请打开浏览器控制台（一般是F12或Ctrl+Shift+C）</h4>
            <el-image :src="getImagePath('sort1.png')" fit="contain" :preview-src-list="[getImagePath('sort1.png')]" />
            <h4 class="mt-5">打开设备仿真后刷新页面</h4>
            <el-image :src="getImagePath('sort2.png')" fit="contain" :preview-src-list="[getImagePath('sort2.png')]" />
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step4" placement="top">
          <el-card>
            <h4>进入二课后点击底部“课程”后按照提示操作即可</h4>
            <el-image :src="getImagePath('sort3.png')" fit="contain" :preview-src-list="[getImagePath('sort3.png')]" />
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>

    <el-card class="max-w-96">
      <template #header>
        <div class="flex flex-col">
          <span>二课课程学习教程</span>
          <el-tag type="danger" size="large" class="max-w-48 mt-3">仅限电脑操作</el-tag>
          <el-tag type="danger" size="large" class="max-w-48 mt-3">请提前安装好脚本</el-tag>
          <el-tag type="danger" size="large" class="max-w-48 mt-3">请先完成前一个教程</el-tag>
        </div>
      </template>
      <el-timeline>
        <el-timeline-item timestamp="step1" placement="top">
          <el-card>
            <h4>打开如下网址（请自行打开新标签后粘贴地址打开）：</h4>
            <el-link type="primary">http://crp.ncvt.net/index.portal</el-link>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step2" placement="top">
          <el-card>
            <h4>登录后点击下方链接进入二课：</h4>
            <el-link type="primary" href="http://classids.sub.ncvt.net/" target="_blank">http://classids.sub.ncvt.net/</el-link>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step3" placement="top">
          <el-card>
            <h4>图片可点击放大</h4>
            <h4 class="mt-5">若提示：请使用手机端访问，请打开浏览器控制台（一般是F12或Ctrl+Shift+C）</h4>
            <el-image :src="getImagePath('sort1.png')" fit="contain" :preview-src-list="[getImagePath('sort1.png')]" />
            <h4 class="mt-5">打开设备仿真后刷新页面</h4>
            <el-image :src="getImagePath('sort2.png')" fit="contain" :preview-src-list="[getImagePath('sort2.png')]" />
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step4" placement="top">
          <el-card>
            <h4>进入二课后点击底部“我的”后点击“我学习的课程”进入学习页面按照提示操作即可</h4>
            <el-image :src="getImagePath('sort4.png')" fit="contain" :preview-src-list="[getImagePath('sort4.png')]" />
            <el-image :src="getImagePath('sort5.png')" fit="contain" :preview-src-list="[getImagePath('sort5.png')]" />
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>

    <el-card class="max-w-[28rem]">
      <template #header>
        <div class="flex flex-col">
          <span>FIF口语教程</span>
          <el-tag type="danger" size="large" class="max-w-48 mt-3">仅限电脑操作</el-tag>
          <el-tag type="danger" size="large" class="max-w-48 mt-3">请提前安装好脚本</el-tag>
          <el-tag type="danger" size="large" class="max-w-48 mt-3">只能完成朗读类作业</el-tag>
        </div>
      </template>
      <el-timeline>
        <el-timeline-item timestamp="step1" placement="top">
          <el-card>
            <h4>点击下方链接打开FiF智慧教学平台：</h4>
            <el-link type="primary" href="https://www.fifedu.com/iplat/fifLogin/index.html" target="_blank">https://www.fifedu.com/iplat/fifLogin/index.html</el-link>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step2" placement="top">
          <el-card>
            <h4>登录后点击“FiF口语训练系统”进入FIF口语</h4>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step3" placement="top">
          <el-card>
            <h4>图片可点击放大</h4>
            <h4 class="mt-5">按照平常的步骤进入口语作业页面</h4>
            <el-image :src="getImagePath('sort6.png')" fit="contain" :preview-src-list="[getImagePath('sort6.png')]" />
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step4" placement="top">
          <el-card>
            <h4>进入作业详情页面后，请先点击“获取必要参数”</h4>
            <el-image :src="getImagePath('sort7.png')" fit="contain" :preview-src-list="[getImagePath('sort7.png')]" />
            <h4 class="mt-5">再填写需要达到的分数（每一个都得填，推荐全部85或90，范围只能在0到100的整数，请不要填入超过范围的数，后果很严重，关系到这个漏洞会不会被修复！！！）</h4>
            <el-image :src="getImagePath('sort8.png')" fit="contain" :preview-src-list="[getImagePath('sort8.png')]" />
            <h4 class="mt-5">最后点击“一键完成口语作业”即可完成口语作业</h4>
            <el-image :src="getImagePath('sort9.png')" fit="contain" :preview-src-list="[getImagePath('sort9.png')]" />
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step5" placement="top">
          <el-card>
            <h4>完成口语作业后，请点击浏览器的后退按钮并刷新页面</h4>
            <el-image :src="getImagePath('sort10.png')" fit="contain" :preview-src-list="[getImagePath('sort10.png')]" />
            <h4 class="mt-5">返回到这个页面后可以查看分数和继续完成其它口语作业</h4>
            <el-image :src="getImagePath('sort11.png')" fit="contain" :preview-src-list="[getImagePath('sort11.png')]" />
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>

    <el-card class="max-w-[24rem]">
      <template #header>
        <div class="flex flex-col">
          <span>乐跑教程</span>
          <el-tag type="danger" size="large" class="max-w-48 mt-3">仅限电脑操作</el-tag>
          <el-tag type="danger" size="large" class="max-w-48 mt-3">请提前安装好脚本</el-tag>
        </div>
      </template>
      <el-timeline>
        <el-timeline-item timestamp="step1" placement="top">
          <el-card>
            <h4>点击下方链接打开智汇南职网页版：</h4>
            <el-link type="primary" href="https://bigdata.nncvt.edu.cn/h5" target="_blank">https://bigdata.nncvt.edu.cn/h5</el-link>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step2" placement="top">
          <el-card>
            <h4>图片可点击放大</h4>
            <h4 class="mt-5">使用自己的学号和密码登录后按照平常的步骤进入步道乐跑</h4>
            <el-image :src="getImagePath('sort12.png')" fit="contain" :preview-src-list="[getImagePath('sort12.png')]" />
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step3" placement="top">
          <el-card>
            <h4>按照平常的步骤进入跑步页面，点击开始跑步后，会按照设定好的轨迹进行跑步（跑步期间请保持跑步标签页面可见，不要把标签页放到后台运行）</h4>
            <el-image :src="getImagePath('sort13.png')" fit="contain" :preview-src-list="[getImagePath('sort13.png')]" />
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step4" placement="top">
          <el-card>
            <h4>达到合格条件后，请自行结束跑步。若长时间卡在上传成绩页面请刷新页面</h4>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElCard, ElLink, ElTag, ElTimeline, ElTimelineItem, ElImage } from 'element-plus'
function getImagePath(fileName: string): string {
  return new URL(`../static/ncvt/${fileName}`, import.meta.url).href
}
</script>

<style scoped>

</style>
