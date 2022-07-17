<template lang="pug">
.footer__wrap(
  ref="view"
  :class="$tw([\
    'bg-[#141414]',\
  ])"
)
  .footer__container(
    :class="$tw([\
      'max-w-screen-lg',\
      'mx-auto',\
      'text-[12px]',\
      'text-white',\
      'pt-[32px]',\
      'pb-[15px]',\
      'px-[12px]',\
      'flex',\
      'flex-col',\
      'md:flex-row ',\
      'items-center',\
      'justify-center',\
    ])"
  )
    img.footer__img(
      src="@/assets/img/i_15plus.jpg"
      :class="$tw([\
        'w-[50px]',\
        'h-[50px]',\
      ])"
    )
    .footer__list(
      :class="$tw([\
        'opacity-[70]',\
        'mt-[14px]',\
        'mb-[23px]',\
        'md:mt-0',\
        'md:mb-0',\
        'leading-tight',\
      ])"
    )
      .footer__item(
        v-for="(item, index) of footerText"
        :class="$tw([\
          'flex',\
        ])"
      )
        .footer__dot(
          :class="$tw([\
            'w-[4px]',\
            'h-[4px]',\
            'bg-white',\
            'rounded-full',\
            'mx-[6px]',\
            'mt-[6px]',\
            'flex-shrink-0',\
          ])"  
        )
        .footer__label {{item}}
    .footer__copyright(
      :class="$tw([\
        'md:ml-auto',\
        'opacity-[70]',\
      ])"
    ) ©2021 GOD PLAY GAME. All Rights Reserved.
</template>
<script>
import { ref, onUnmounted, onMounted } from 'vue'
import useStore from '@/store'
export default {
  setup() {
    const store = useStore()
    const { $_ } = useNuxtApp()
    const view = ref(null)

    onMounted(() => {
      getContainerWidth(view.value.clientWidth)
    })

    const getContainerWidth = $_.debounce((val) => {
      store.setWidth(val)
    }, 300)

    const footerText = ref([
      '請勿長時間連續進行遊戲，避免沉迷、影響身心健康。',
      '遊戲內皆為虛擬情節，請勿任意模仿。',
      '本遊戲情節涉及棋牌益智及娛樂， 不得利用遊戲賭博、從事違反法令或其他類似行為。',
      '亦請勿進行非法遊戲幣交易。'
    ])
    return{
      footerText,
      view
    }
  }
}
</script>
