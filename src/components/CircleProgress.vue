<template lang='pug'>
  div.progress-container
    div.circle(v-bind:id="'progressbar_' + id")
      div.text-container(v-if='text')
        div
          | {{text}}
</template>

<script>
import ProgressBar from 'progressbar.js'

export default {
  name: 'CircleProgress',
  props: {
    completion: {
      type: Number,
      required: false,
      default: 100
    },
    text: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      id: null
    }
  },
  created () {
    this.id = this._uid
  },
  mounted () {
    let circle = new ProgressBar.Circle(('#progressbar_' + this.id), {
      color: '#FCB03C',
      duration: 2000,
      easing: 'easeInOut'
    })

    circle.animate(this.completion / 100)
  }
}
</script>

<style lang='stylus'>
.progress-container
  margin 2vmin
  position relative
  .circle
    width 25vmin
    min-width 150px
    path
      stroke tomato
    .text-container
      position absolute
      display flex
      text-align center
      align-items center
      justify-content center
      size 100%
      font-size 0.2vmin
      div
        width 80%
</style>
