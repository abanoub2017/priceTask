<template>
  <div class="card_container">
    <p class="card_title">Price insight</p>
    <p class="card_value">${{ store.chartNumber }}</p>
    <div class="card_subtitle">Hourly Rate</div>
    <div class="card_content">
        <div class="text"> $65 <p>Min</p></div>
        <div class="progress-container">
          <progress :value="store.chartNumber" :max="maxValue"></progress>
        </div>
        <div class="text"> $250 <p>Max</p></div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from "vue";
import { useChartStore } from "@/stores/counter";
const store = useChartStore();
const maxValue = 250;
</script>
  
  
<style scoped lang="scss">
p {
  margin: 0;
}
.card_content{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.progress-container {
  width: 100%;
  height: 24px;
  //   border: 2px solid #333; /* Border color */
  border-radius: 20px;
  overflow: hidden; /* Hide overflow from progress bar */
  position: relative; /* Required for positioning progress bar */
  display: flex; /* Use flex layout to position text and progress bar */
  align-items: center; /* Center text vertically */
}
/* Styling for the text */
.text {
  margin: 0 10px; /* Add margin for spacing */
  font-family: DM Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;

  p{
    color: #A3A3A3;
    padding-top: 10px;

  }
}

/* Basic styling for the progress bar */
progress {
  width: 100%;
  height: 100%;
  border: none;
  appearance: none;
  position: absolute; /* Position within the container */
}

/* Styling for the value or filled part of the progress bar */
progress::-webkit-progress-value {
  background-color: #4caf50; /* Green color */
  border-radius: 3px; /* Adjusted for a smoother look with border */
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
}

/* Styling for the remaining or unfilled part of the progress bar */
progress::-webkit-progress-bar {
  background-color: var(--el-border-color-lighter);
  border-radius: 3px; /* Adjusted for a smoother look with border */
}

/* Hover effect - change color on hover */
.progress-container:hover progress::-webkit-progress-value {
  background-color: #2196f3; /* Blue color on hover */
}
.card_container {
  border-radius: 12px;
  border: 1px;
  border: 1px solid #cccccc;
  margin: 15px 0;
  padding: 15px 20px;

  .card_title {
    font-family: DM Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: #000;
  }
  .card_value {
    font-family: DM Sans;
    font-size: 60px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: -2.3499999046325684px;
    text-align: left;
    color: #000;
    padding-left: 5px;
    margin-top: 10px;
  }
  .card_subtitle {
    font-family: DM Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: #000;
  }
}
</style>
  