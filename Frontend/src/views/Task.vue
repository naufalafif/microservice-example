<template>
<el-row :gutter="20">
  <el-col :span="12" :offset="6">
    <el-input placeholder="Enter to save" v-model="new_task" clearable @keypress.native.enter="addTaskHandler()">
    </el-input>

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

import { fetchList } from '@/api/task'

export default {
  name: 'Home',
  data() {
    return {
      new_task: null,
      /*
      task: [{
        id: int
        name: str,
        description: str,
        done: bool
      }]
      */
      tasks: [] 
      
    }
  },
  created(){
    fetchList().then(res => {
      res.data.data.forEach(task => {
        this.addTask(task)
      });
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    async addTaskHandler(){
      await this.addTask({
        id: Math.random(),
        name: this.new_task,
        description: 'temporary',
        done: false
      })
      this.new_task = null
    },
    async addTask(task){
      let { id, name, description, done } = task
      this.tasks.push({
        id, name, description, done
      })
    }
  }
}
</script>
