
<template>
    <p>{{ props.msg }}</p>
    <button @click="handleClock">点击我调用父组件方法</button>
    <p>{{ originData.count }} {{ originData.user.name }}</p>
    <p v-for="(item, index) in originData.Arr" :key="index">{{ item }}</p>
    <button @click="incriment">点击我数字加+1</button>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect, watch } from 'vue';

const count = ref(0)
const user = reactive({ name: 'zhangsan' })
const Arr = reactive([1, 2, 3, 4])

// 综合定义方案
const originData = reactive(
    {
        count: 0,
        user: {
            name: '张三'
        },
        Arr: [1, 2, 3, 4]
    }
)
// watchEffect(() => console.log(count.value))
// 监听单个变量
// watch(count,(n,o)=> console.log(n,o))
// 监听多个变量变化
// watch([count, originData.user], (n, o) => console.log(n[0], n[1].name))
// 监听多个变量变化页面加载立即执行
watch([count, originData.user], (n, o) => { console.log(n[0], n[1].name) }, { deep: true, immediate: true })

const incriment = () => {
    originData.count++
    originData.user.name = '李四'
    count.value++
}

const props = defineProps(
    {
        msg: {
            type: String,
            default: () => {
                return '动态值'
            }
        }
    }
)

const emit = defineEmits(['on-change']);
const handleClock = () => {
    emit('on-change', '父组件被调用了')
}

// 向外暴露自己的api数据
const age = () => {
    console.log('我的年龄是20岁');

}
defineExpose({
    name: '张三',
    age
})
</script>


