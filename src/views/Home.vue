<template lang='pug'>
div.home
  ContentBlock(title='Profile')
    | Hi, my name is Maxime Grisole, I'm a full time human being and also Web Developer for Devatics
    | in Toulouse. I really love web technologies
    | and I keep learning new stuff every day.
    br
    | I always try my best to figure out what are my clients needs and
    | priorities while keeping in mind the same for my company. And if I do so, it's mainly because
    | I trully prefer working with happy peoples, it makes me feel proud of what I'm doing.
  ContentBlock(title='Things I can do')
    div(v-for='(skill, index) in skills')
      CircleProgress(:completion='skill' :text='index')
</template>

<script>
import ContentBlock from '@/components/ContentBlock.vue'
import CircleProgress from '@/components/CircleProgress.vue'

export default {
  name: 'home',
  components: {
    ContentBlock,
    CircleProgress
  },
  data () {
    return {
      skills: {
        'JavaScript, TypeScript, ES6': 100,
        'HTML, Twig, Pug, EJS': 100,
        'CSS, Sass, Stylus': 100,
        'Node.js': 100,
        'Mongo': 70,
        'Vue, Vue Router, Vuex': 70,
        'PHP, Symfony': 70,
        'SQL': 100,
        'Python': 40,
        'Photoshop, Illustrator, Adobe XD': 50
      }
    }
  }
}
</script>
