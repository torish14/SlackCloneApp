<template>
  <div class="container">
    <div class="chats-layout">
      <!-- プロパティを使用してデータを受け渡す -->
      <messages :messages="messages" />
    </div>
    <div class="input-layout">
      <chat-form />
    </div>
  </div>
</template>

<script>
import Messages from '~/components/Messages.vue'
import ChatForm from '~/components/ChatForm.vue'
import { db } from '~/plugins/firebase'

export default {
  components: {
    Messages,
    ChatForm
  },
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    //! this.$route は現在の url に関する情報を取得できる。
    const channelId = this.$route.params.id
    db.collection('channels').doc(channelId).collection('messages').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.messages.push({ id: doc.id, ...doc.data() })
        })
        console.log(this.messages) // 開発用に
      })
  }
}
</script>

<style scoped>
container {
  height: 100%;
}

.chats-layout {
  overflow: scroll;
  height: 90%;
}

.input-layout {
  height: 10%;
}
</style>
