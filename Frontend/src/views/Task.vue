<template>
<el-row :gutter="20">
  <el-col :span="12" :offset="6">
    <el-row :gutter="10">
      <el-col :span="8">
        <el-input placeholder="Name, enter to save" ref="name" v-model="new_task.name" clearable @keypress.native.enter="addTaskHandler()"></el-input>
      </el-col>
      <el-col :span="16">
        <el-input placeholder="Description, enter to save" v-model="new_task.description" clearable @keypress.native.enter="addTaskHandler()"></el-input>
      </el-col>
    </el-row>
    
    <el-table
      :data="tasks"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Title"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description">
      </el-table-column>
    </el-table>

  </el-col>
</el-row>

</template>

<script>

import { fetchList, addRecord } from '@/api/task'

export default {
  name: 'Home',
  data() {
    return {
      new_task: {
        name: "",
        description: ""
      },
      /*
      task: [{
        name: str,
        description: str,
        done: bool
      }]
      */
      tasks: [] 
      
    }
  },
  created(){
    this.getTasks()
  },
  methods: {
    getTasks(){
      fetchList().then(res => {
        this.tasks = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    resetObject(object){
      Object.keys(object).forEach(key => {
        object[key] = ""
      })
    },
    async addTaskHandler(){
      await this.addTask({
        name: this.new_task.name,
        description: this.new_task.description
      })
      this.resetObject(this.new_task)
    },
    async addTask(task){
      addRecord(task).then(res => {
        console.log(res)
        this.$refs.name.focus()
        this.getTasks()
      })
    }
  }
}
</script>
