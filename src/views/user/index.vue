<template>
  <div class="wrapper">
      <span>我是index 页面 dsshhhh</span>
  </div>
</template>

<script>
import {USER_GET_LIST} from '../../api/userApi'
import axios from 'axios'
import {Message} from 'element-ui'

export default {
  name: 'index',
  data () {
    return {
      userList: {
      }
    }
  },
  mounted () {
    axios.get(USER_GET_LIST).then(rep => {
      console.log(rep.data)
      if (rep.status === 200) {
        Message.success(rep.data.message)
      }
    })
  }
}
</script>
