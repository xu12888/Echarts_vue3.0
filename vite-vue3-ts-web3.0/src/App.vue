<script setup lang="ts">
import { useStore } from './store'
import TextproposEmit from './components/index.vue';
import { onMounted, ref } from 'vue';

const store = useStore();
console.log(store.getters.getName);


const msg = ref('我是父级传递过来的值');
const handleChange = (params: string) => {
  //console.log(params);

}

const PropsEmitRef = ref();
onMounted(() => {
  //console.log(PropsEmitRef.value.name,PropsEmitRef.value.age());
})
</script>

<template>
  <TextproposEmit ref="PropsEmitRef" :msg="msg" @on-change="handleChange"></TextproposEmit>
</template>

<style scoped>

</style>
