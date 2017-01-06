<template>
  <div class="ui segment">
    <h3 class="ui header">Profile</h3>
    <h4>Name:</h4> {{ profile.name }}
    <h4>Description:</h4> {{ profile.description }}
    <br/><br/>
    <router-link to="/profile/edit" class="ui submit green button edit-profile">Edit</router-link>
  </div>
</template>

<script>
  import { Me } from '../services'

  export default {
    data: () => ({
      profile: {
        name: '',
        description: ''
      }
    }),
    created () {
      Me.get()
      .then((data) => {
        this.profile = data
      })
    }
  }
</script>