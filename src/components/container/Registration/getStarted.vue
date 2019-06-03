
<template>
  <div>
    <div class="heading">
      <h2 class="title" v-text="$t('title')"/>
    </div>
    <div class="body-section">
      <p v-text="$t('text')"/>
      <div>
        <md-field>
          <md-input
            v-model="number"
            maxlength="10"
            type="text"
            placeholder="Enter your phone number"
          ></md-input>
        </md-field>
      </div>

      <div>
        <md-field>
          <md-input v-model="username" placeholder="Username"></md-input>
        </md-field>
        <md-field>
          <md-input v-model="handle" placeholder="Telegram Handle"></md-input>
        </md-field>
        <md-field>
          <md-input v-model="avatar" placeholder="Avatar"></md-input>
        </md-field>
      </div>
      <md-button class="md-raised md-primary" type="submit" @click="register">Submit</md-button>
    </div>
  </div>
</template>

<script>
import messages from "./messages";
import { createApolloFetch } from "apollo-fetch";
const uri = "http://127.0.0.1:3000/graphql";
const apolloFetch = createApolloFetch({ uri });

export default {
  data: function() {
    return {
      name: "GetStarted",
      number: "",
      handle: "",
      avatar: "",
      username: ""
    };
  },
  i18n: { messages },
  methods: {
    register(e) {
      const query = `
              mutation AddUser($username: String!,$avatar: String!,$mobileNumber: String!,$telegramHandle: String!) {
                addUser(username: $username,avatar: $avatar, mobileNumber: $mobileNumber,telegramHandle: $telegramHandle ) {
                  id,
                  username
                }
              }`;
      apolloFetch({
        query,
        variables: {
          username: this.username,
          avatar: this.avatar,
          mobileNumber: this.number,
          telegramHandle: this.handle
        }
      })
        .then(result => {
          const { data } = result;
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
}
.heading {
  display: flex;
  border-bottom: 0.5px solid gray;
  justify-content: center;
}
.field {
  margin: 0 auto;
  display: flex;
}
.body-section {
  padding-top: 10%;
  padding-bottom: 8%;
  width: 75%;
  margin: 0 auto;
}
</style>
