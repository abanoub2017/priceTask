<template>
  <div class="input_container">
    <label for="">Service Price</label>
    <el-input v-model="chartValue" placeholder="Please Enter value"  
    :formatter="(value:  any) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="(value: any) => value.replace(/\$\s?|(,*)/g, '')"
    >
    </el-input>
    <el-text class="mx-1" type="danger">{{ validation }}</el-text>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useChartStore } from "@/stores/counter";
const store = useChartStore();

const chartValue = ref("") as any;
const validation = ref('')

watch(
  () => chartValue.value,
  (newValue) => {
    if (!isNaN(+newValue)) {
      store.setChartNumber(+newValue as any);
      validation.value = ''
    } else {
        validation.value = 'Value must be a number';
    }
  }
);
</script>


<style lang="scss">
.input_container {
  label {
    font-family: DM Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: #797979;
  }
  .el-input__wrapper {
    margin-top: 5px;
    height: 56px;
    border-radius: 12px;
    border: 1px;
    border: 1px solid #CCCCCC
  }
}
</style>
