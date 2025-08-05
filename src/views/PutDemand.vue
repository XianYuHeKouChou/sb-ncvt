<template>
  <el-table :data="tableData" :stripe="true" table-layout="auto">
    <el-table-column property="createdAt" label="创建时间" align="center"/>
    <el-table-column prop="contactType" label="联系方式类型" align="center"/>
    <el-table-column prop="contact" label="联系方式" align="center"/>
    <el-table-column property="content" label="需求内容" align="center"/>
    <el-table-column label="需求状态" align="center">
      <template #default="demandItem">
        <el-tag v-if="demandItem.row.state === 1" type="primary" size="large">待确认</el-tag>
        <el-tag v-if="demandItem.row.state === 2" type="success" size="large">已确认</el-tag>
        <el-tag v-if="demandItem.row.state === 3" type="success" size="large">已提测dev</el-tag>
        <el-tag v-if="demandItem.row.state === 4" type="primary" size="large">已发布</el-tag>
        <el-tag v-if="demandItem.row.state === 5" type="danger" size="large">未采纳</el-tag>
      </template>
    </el-table-column>
  </el-table>
  <div class="flex justify-center items-center mt-10">
    <el-form label-position="left" label-width="auto">
      <el-form-item label="联系方式类型：">
        <el-input v-model="submitForm.contactType"/>
      </el-form-item>
      <el-form-item label="联系方式：">
        <el-input v-model="submitForm.contact"/>
      </el-form-item>
      <el-form-item label="需求内容：">
        <el-input v-model="submitForm.content" type="textarea"/>
      </el-form-item>
      <el-button type="primary" :round="true" :plain="true" class="w-full" @click="submitDemand">
        提交
      </el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import utils from '@/assets/utils.ts'
import {useAppStore} from '@/stores/counter.ts'
import {ElTable, ElTableColumn, ElTag, ElForm, ElFormItem, ElInput, ElButton} from 'element-plus';

interface DemandItem {
  id: number
  documentId: string
  contact: string
  content: string
  state: number
  createdAt: string
  updatedAt: string
  publishedAt: string
}

const appStore = useAppStore()
const tableData = ref<DemandItem[]>([]);
const submitForm = ref({
  contact: '',
  contactType: 'QQ',
  content: ''
});

function getDemand() {
  appStore.appLoading = true;
  utils.httpGetNoToken('/api/demands')
    .then((res) => {
      tableData.value = res.data.data;
      tableData.value.forEach((item: DemandItem) => {
        item.createdAt = utils.convertToUTC8(item.createdAt)
      })
    })
    .catch((error) => {
      utils.failMessage(error);
    })
    .finally(() => {
      appStore.appLoading = false;
    });
}

function submitDemand() {
  if (!submitForm.value.contact || !submitForm.value.content || !submitForm.value.contactType) {
    return utils.failMessage('请填写完整的需求信息');
  }
  appStore.appLoading = true;
  utils.httpPostNoToken('/api/demands', {
    data: {
      ...submitForm.value
    }
  })
    .then(() => {
      utils.successMessage('需求提交成功');
      getDemand();
      submitForm.value.contact = '';
      submitForm.value.content = '';
      submitForm.value.contactType = 'QQ';
    })
    .catch((error) => {
      utils.failMessage(error);
    })
    .finally(() => {
      appStore.appLoading = false;
    });
}

onMounted(() => {
  getDemand()
})
</script>

<style scoped>

</style>
