<template lang='pug'>
  div.block
    div.block__title(v-if='title')
      | {{title}}
    div.block__content
      slot
</template>

<script>
export default {
  name: 'content-block',
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang='stylus'>
.block
  margin-bottom 6vmin
  font-family Montserrat
  font-size 0.5vmin
  line-height 2.5vmin
  box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
  padding 4vmin
  background white
  .block__title
    width 50%
    border-bottom 1px solid lighten($black, 80%)
    margin-bottom 3vmin
  .block__content
    display flex
    flex-wrap wrap
    justify-content space-evenly
</style>
