<template lang='pug'>
  div.circle(v-bind:id="'progressbar_' + id")
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
.circle
  width 100px

  path
    stroke tomato
</style>
