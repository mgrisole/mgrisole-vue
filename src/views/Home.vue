<template lang='pug'>
div.block
  | Hi, my name is Maxime Grisole, I'm a full time human being and also a Web Developer based
  | in Toulouse for the last 3 years. I really love web technologies
  | and I keep learning new stuff every day (when it's a good one in fact).
  br
  | I always try my best to figure out what are my clients needs and
  | priorities while keeping in mind the same for my company. And if I do so, it's mainly because
  | I trully prefer working with happy peoples, it makes me feel proud of what I done.
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus">
.block
  font-family Montserrat
  font-size 0.5vmin
</style>
