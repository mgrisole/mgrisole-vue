<template lang="pug">
  div#app
    header
      h3
        | Welcome to my workshop
      nav
        router-link.route(v-for="route in routes" :to="route.path")
          | {{route.name}}
    router-view
</template>

<script>
import Router from '@/router'

export default {
  name: 'app',
  data () {
    return {
      routes: Router.options.routes
    }
  },
  mounted () {
    console.log(this.routes)
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Pacifico|Roboto:100');

$blue = #233D4D
$red = #D05D5B

h3
  font-family: 'Roboto', sans-serif;
  font-size 2rem
  font-weight 100
  margin-bottom 5vmin

#app
  font-family Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

header
  display flex
  flex-direction column
  min-height 20vh
  display flex
  align-items center
  justify-content center
  border-bottom 0.2vmin solid lighten($red, 20)
  color $blue
  padding-bottom 2vmin

  nav
    display flex
    .route
      font-family Pacifico
      text-decoration none
      color $blue
      padding 0 5vmin
</style>
