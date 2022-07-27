<template lang="pug">
//- div(
//-   :class="$tw([\
//-     'w-full',\
//-     'h-screen',\
//-     'min-h-[100vh]',\
//-     'flex',\
//-     'flex-col',\
//-     'items-center',\
//-     'justify-center',\
//-     'bg-yellow-100',\
//-   ])"
//-   )
//-   p(
//-     :class="$tw([\
//-         'text-5xl',\
//-     ])"
//-   ) index page
div(
  :class="$tw([\
    'pb-[62px]',\
    'md:pb-0',\
  ])"
  :style="{\
    backgroundImage: `url('../assets/img/m2_bg_sp101.png')`,\
    'background-position': '0px 0px',\
    'background-size': `${ isMobile ? 375 : 600 }px`,\
  }"
) 
  Feature
  div
    NuxtLink(to="/test") backtest
</template>
<script>
// import { ref } from 'vue'
import useStore from '@/store'
// import Feature from '@/components/Feature.vue'
export default {
  // components: {
  //   Feature
  // },
  setup() {
    const store = useStore()
    const { $_ } = useNuxtApp()
    const isMobile = computed(() => store.isMobile)
    return{
      isMobile
    }
  }
}
</script>