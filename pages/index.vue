<script lang="js" setup>
const itext= ref(null)
const todoData = ref([])
const addTodo=async()=>{
    const record=await $fetch('/api/add',{
    body: {
        title: itext.value,
    },
    method: 'POST'
   })
   todoData.value.unshift(record)
}

onMounted(async ()=>{
    const data= await $fetch('/api/data')
    todoData.value= data
})

const ticked=async(tid)=>{
    await $fetch('/api/comp',{
        method: 'POST',
        body:{
            id:todoData.value[tid].id,
            status:!todoData.value[tid].comp
        }
    })
    todoData.value[tid].comp=!todoData.value[tid].comp
}

const deleteTodo= async(index)=>{
    await $fetch('/api/delete',{
        method:'POST',
        body:{
            id:todoData.value[index].id,
        }
    }  
)
todoData.value.splice(index,1)

}

</script>

<template>
    <div>
        <div class="bg-[#b6d5b6] min-h-screen">
            <div class="text-center pt-32 text-3xl">
                <img src="/todo.png" class="mx-auto h-32">
            </div>
            <div class="flex justify-center items-center  min-h-[50vh] pb-10">
                <div class="w-fit block mx-auto  p-5 bg-white rounded-xl">
                    <div class=" flex  gap-5">
                        <input type="text" v-model="itext" placeholder="Write the work to be done here " 
                            class="p-2 border-[1px] border-black px-5 w-[35rem] rounded-xl">
                        <button @click="addTodo" class="bg-[#6e956c] text-xl font-semibold rounded-xl text-white p-2 w-36">Add</button>
                    </div>
                    <template v-for="(t,index) in todoData">
                        <div class="flex relative bg-[#a2d9a1] mt-5 rounded-xl px-5 " >
                            <input @change="ticked(index)" type="checkbox" :checked="t.comp">
                            <h1 class="p-2 max-w-96" :class="{'line-through':t.comp}" >{{ t.title }}</h1>
                            <Icon @click="deleteTodo(index)" name="majesticons:delete-bin" class="right-10 absolute top-3 text-gray-500/50 size-[20px]"></Icon>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>



<style></style>