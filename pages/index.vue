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
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    return{
    }
  }
}
</script>