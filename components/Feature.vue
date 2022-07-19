<template lang="pug">
div(
  :class="$tw([\
    'md:pt-[77px]',\
    'max-w-[800px]',\
    'mx-auto',\
    'flex',\
    'flex-col',\
    'items-center',\
  ])"
)
  div(
    :class="$tw([\
      'mt-[12px]',\
      'md:mt-[58px]',\
      'mb-[12px]',\
      'md:mb-[58px]',\
      'w-[360px]',\
      'md:w-[310px]',\
    ])"
  )
    img(src="../assets/img/m2_word07.png")
  div(
    :class="$tw([\
      'mt-[71px]',\
      'md:mt-[54px]',\
      'w-full',\
      'mb-[71px]',\
      'md:mb-[54px]',\
    ])"
  )
    swiper(
        :loop="false"
        :autoplay="false"
        :speed="1000"
        :class="$tw([\
          'm-auto',\
          'md:mx-0',\
          'h-full',\
          'w-10/12',\
          'md:w-full',\
          'm-auto',\
          'overflow-visible',\
          'md:overflow-hidden',\
        ])"
      )
        swiper-slide(
          v-for="(item, index) of test"
          :key="index"
          :class="$tw([\
            'w-[160px]',\
            'md:w-[260px]',\
          ])"
        )
          div {{item}}
</template>
<script>
import { ref, onMounted } from 'vue'
import useStore from '@/store'
import SwiperClass, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import 'swiper/css'
import 'swiper/css/pagination'

export default {

  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const store = useStore()
    const { $_ } = useNuxtApp()
    const isMobile = computed(() => store.isMobile)
    onMounted(() => {
    })
    const test = ref([1, 2, 3, 4, 5, 6])
    return{
      isMobile,
      test,
      modules: [Pagination]
    }
  }
}
</script>
