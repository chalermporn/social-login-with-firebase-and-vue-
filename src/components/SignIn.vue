<template>
  <!-- <div class="ui segment">
    <h2 class="ui header">Sign In</h2>
    <div @click="signIn" class="ui google plus button"><i class="google plus icon"></i> Sign In With Google+</div>
  </div> -->

  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui image header">
        <div class="content">
          Log-in to your account
        </div>
      </h2>
      <form class="ui large form">
        <div class="ui stacked secondary  segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password">
            </div>
          </div>
          <div class="ui fluid large teal submit button">Login</div>
        </div>

        <div class="ui error message"></div>

      </form>

      <div class="ui message">
        Or login with &nbsp;
        <div class="ui small buttons">
          <div @click="signIn('google')" class="ui google plus button"><i class="google plus icon"></i>Google Plus</div>
          <div class="or"></div>
          <div @click="signIn('facebook')" class="ui facebook button"><i class="facebook icon"></i>Facebook</div>
        </div>
      </div>

      <div class="ui message">
        New to us? <a href="">Register</a>
      </div>

    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import { User } from '../services'

  export default {
    beforeRouteEnter (to, from, next) {
      const cancel = firebase.auth().onAuthStateChanged((user) => {
        cancel()
        if (user) {
          next(to.query.redirect || '/')
          return
        }
        next()
      })
    },
    methods: {
      signIn (type) {
        switch (type) {
          case 'google':
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((result) => {
              User.createByGooglePlus(result.user)
                .then(() => {
                  this.$router.push('/profile')
                })
            })
            break
          case 'facebook':
            firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((result) => {
              User.createByFacebook(result.user)
                .then(() => {
                  this.$router.push('/profile')
                })
            })
            break
        }
      }
    }
  }
</script>

<style scoped="">

  body > .grid {
    height: 100%;
  }
  .image {
    margin-top: -100px;
  }
  .column {
    max-width: 450px;
  }
</style>
