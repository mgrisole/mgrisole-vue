<template lang='pug'>
div#home-container
  div.block
    div.title
      | Profile
    div.content
      | Hi, my name is Maxime Grisole, I'm a full time human being and also Web Developer for Devatics
      | in Toulouse. I really love web technologies
      | and I keep learning new stuff every day.
      br
      | I always try my best to figure out what are my clients needs and
      | priorities while keeping in mind the same for my company. And if I do so, it's mainly because
      | I trully prefer working with happy peoples, it makes me feel proud of what I'm doing.

  div.block
    div.title
      | Things I can do
    div.content
      div
        svg#progression(viewBox="0 0 200 200")
          path(d="M100.416,2.001C154.35,2.225,198,46.015,198,100 c0,54.124-43.876,98-98,98S2,154.124,2,100S45.876,2,100,2" fill-opacity="0" stroke="tomato" stroke-width="1")
      ul
        li(v-for="(skill, index) in skills")
          | {{index}}
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vivus from 'vivus'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      skills: {
        'JavaScript, TypeScript, ES6': 100,
        HTML: 100,
        'CSS, Sass, Stylus': 100,
        'Node.js': 100,
        Mongo: 70,
        'Vue, Vue Router, Vuex': 70,
        PHP: 70,
        SQL: 100,
        Python: 40,
        'Photoshop, Illustrator, Adobe XD': 50
      }
    }
  },
  mounted () {
    let progression = new Vivus('progression', {
      start: 'manual',
      breakpoint: 96,
      onReady (animation) {
        animation.play()
      }
    })
  }
}
</script>

<style lang="stylus">
.block
  margin-bottom 6vmin
  font-family Montserrat
  font-size 0.5vmin
  line-height 2.5vmin
  .title
    width 50%
    border-bottom 1px solid lighten($black, 80%)
    margin-bottom 3vmin
</style>
