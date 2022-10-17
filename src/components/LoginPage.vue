<template>
  <div class="login__form">
    <div class="login__page__title">
      <h1>
        LOGIN PAGE
      </h1>
    </div>
    <div class="login__page__form">
      <form v-on:submit.prevent>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              :value="email"
              @input="updateEmail">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              :value="password"
              @input="updatePassword">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button
            type="submit"
            class="btn btn-primary"
            v-on:click="$store.dispatch('login')">
              Submit
        </button>
      </form>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  name: "LoginPage",
  computed: {
    ...mapState({
      email: state => state.email,
      password: state => state.password,
    }),
    ...mapGetters(["getPassword", "getEmail"])
  },
  methods: {
    ...mapActions({
      login: 'login',
      test: 'test'
    }),
    updatePassword(e){
        this.$store.commit('updatePassword', e.target.value)
    },
    updateEmail(e){
      this.$store.commit('updateEmail', e.target.value)
    }

  },
  mounted() {
    this.test();
  }
}
</script>

<style scoped>
.login__form{
  margin-top: 50px;
}
.login__page__title{
  display: flex;
  justify-content: center;
}
.login__page__form{
  display: flex;
  justify-content: center;
}

</style>