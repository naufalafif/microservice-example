<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

import { fetchList } from '@/api/task'

export default {
  name: 'Home',
  created(){
    fetchList().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
