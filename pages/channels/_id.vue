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
    db.collection('channels').doc(channelId).collection('messages')
      // onSnapshot を collection('messages') に対して実行する。
      // つまり、messages collection に変更があった場合に処理を実行する。
      .onSnapshot((snapshot) => {
        // collection に変更があった場合に snapshot がコールバック関数に渡される。
        // snapshot とは DB のコピーのようなもの。
        snapshot.docChanges().forEach((change) => {
          const doc = change.doc
          if(change.type === 'added') {
            this.messages.push({ id: doc.id, ...doc.data() })
          }
        })
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
