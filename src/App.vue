<template lang="pug">
  div#app
    header
      h3
        | Welcome to my workshop
      nav
        router-link.nav-item(v-for="(route, index) in routes" :to="route.path" :key="index")
          | {{route.name}}
    div#container
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
  }
}
</script>

<style lang="stylus">
h3
  font-family Montserrat, sans-serif
  font-size 4.5vmin
  font-weight 100
  margin 8.5vmin
  letter-spacing 0.2vmin

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
  border-bottom 1.2vmin solid lighten($red, 20)
  color $white
  padding-bottom 3vmin
  text-align center
  background $black

  nav
    display flex
    width 100%
    justify-content space-evenly
  .nav-item
    font-family Pacifico
    text-decoration none
    color $white
    font-size 1vmin
    position relative
    &:after
      content ''
      width 0
      height 1px
      position absolute
      background $white
      bottom -0.3vmin
      left 0
      transition width 0.5s
  .router-link-exact-active
    &:after
      width 100%
      transition width 0.5s

#container
  padding 10vmin
</style>
