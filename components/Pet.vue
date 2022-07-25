<template lang="pug">
.know__wrap(
  :class="$tw([\
    'w-[320px]',\
    'md:w-auto',\
    'p-[28px]',\
    'md:p-0 ',\
    'flex',\
    'fixed',\
    'bottom-0',\
    'right-1/2 ',\
    'translate-x-1/2',\
    'md:bottom-[40px]',\
    'md:right-[-4px]',\
    'md:translate-x-0',\
    'z-[20]',\
    'cursor-pointer',\
  ])"
)
  img.know__img(
    :src="isMobile ? '../assets/img/m2_btnmore_mo.png' : '../assets/img/m2_btnmore.png'"
  )
  img.close__img(
    v-if="isMobile"
    :class="$tw([\
      'absolute',\
      'right-[30px]',\
      'top-[30px]',\
      'z-10',\
    ])"
    src="@/assets/img/m2_close2.svg"
  )
//- .know__wrap(
//-   :class="tw([\
//-     'animate-button',\
//-     'cursor-pointer',\
//-     'fixed',\
//-     'bottom-0',\
//-     'right-1/2 ',\
//-     'translate-x-1/2',\
//-     'md:translate-x-0',\
//-     'md:bottom-[40px]',\
//-     'md:right-[-4px]',\
//-     'z-20',\
//-     'w-[320px]',\
//-     'md:w-[144px]',\
//-     'md:h-[168px]',\
//-     'p-[28px]',\
//-     'md:p-0 ',\
//-     'transition',\
//-     'duration-300 ',\
//-     'hover:scale-110',\
//-     'bottom-1/4',\             
//-   ])"
//- )
  img(src="@/assets/img/m2_btnmore.png")
</template>
<script>
import useStore from '@/store'
export default {
  setup() {
    const store = useStore()
    const isMobile = computed(() => store.isMobile)
    return{
      isMobile
    }
  }
}
</script>
