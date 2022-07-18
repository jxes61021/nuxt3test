<template lang="pug">
div(
  :class="$tw([\
    'w-full',\
    'h-screen',\
    'min-h-[100vh]',\
    'flex',\
    'flex-col',\
    'items-center',\
    'justify-center',\
    'bg-yellow-100',\
  ])"
  )
  p(
    :class="$tw([\
      'text-5xl',\
  ])") index page
  //- video(
  //-   @waiting="waiting"
  //-   loop
  //-   autoplay
  //-   playsinline
  //-   poster
  //-   :class="$tw([\
  //-     'h-full',\
  //-     'w-full',\
  //-     'object-cover',\
  //-   ])"
  //- )
  //-   source(src="../assets/video/f_101_2.mp4" type="video/mp4")
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const waiting = () => {
      console.log('waiting')
    }
    return{
      waiting
    }
  }
}
</script>