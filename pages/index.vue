<template>
  <div class="container">
    <button　@click="login">ログイン</button>
  </div>
</template>

<script>
import Messages from '~/components/Messages.vue'
import ChatForm from '~/components/ChatForm.vue'
import { db } from '~/plugins/firebase'
import { firebase } from '~/plugins/firebase'

export default {
  components: {
    Messages,
    ChatForm
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user
          console.log(user)
        }).catch((error) => {
          window.alert(error)
        })
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
}

.chats-layout {
  overflow: scroll;
  height: 90%;
}

.input-layout {
  height: 10%;
}

.input-container {
  padding: 10px;
  height: 100%;
}

textarea {
  width: 100%;
  height: 100%;
}
</style>
