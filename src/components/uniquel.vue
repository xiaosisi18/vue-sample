<template>
  <div class="transaction"></div>
</template>
<script>
export default {
  dat() {
    return {
      arrs: [2, 8, 5, 0, 5, 2, 6, 7, 2]
    };
  },
  created() {
    this.unique();
  },
  methods: {
      //去重 复杂写法
    unique() {
      let arrs = [2, 8, 5, 0, 5, 2, 6, 7, 2];
      let newArrs = {};
      let sb= [];
      for (let i = 0; i < arrs.length; i++) {
        newArrs[i]=true;
      }
      Object.keys(newArrs).forEach( item =>{
        sb.push(Number(item))
      });
      console.log(sb);
    }
  }
};
</script>
