<template lang="pug">
div(
  :class="$tw([\
    'w-full',\
    'h-screen',\
    'flex',\
    'flex-col',\
    'items-center',\
    'justify-center',\
    'bg-yellow-100',\
  ])"
  )
  p(
    :class="$tw([\
      'text-black',\
      'text-5xl',\
  ])") text page
  p(
    :class="$tw([\
      'text-red-800',\
      status ? 'text-base' : 'text-xl',\
    ])"
  ) {{temp}}
  p(
    :class="$tw([\
      status ? 'text-blue-600' : 'text-green-400',\
      'text-lg',\
    ])"
  ) {{test}}
  div
    NuxtLink(to="/") backindex
</template>
<script>
// import { ref } from 'vue'
// import { tw } from 'twind/shim'
import useStore from '@/store'
export default {
  setup() {
    const store = useStore()
    const { $_ } = useNuxtApp()
    const handleAddTest = store.addOneTest;
    const invuetest = $_.debounce(() => {
        handleAddTest()
      }, 300)
    invuetest()
    const storetest = computed(() => store.piniatest)
    const storegetertest = computed(() => store.testpinia)
    // console.log('storetest', storetest.value)
    // console.log('storetest', storegetertest.value)
    // const tw = useTwind()
    const temp = ref('temp')
    const test = ref('test')
    const status = ref(true)
    // const { $hello, $_ } = useNuxtApp()
    // console.log($_.join(["lodash", "--", "tset"], "~"))
    // console.log($hello)
    // const runtimeConfig = useRuntimeConfig()
    // console.log(runtimeConfig.privatetest)
    // console.log(runtimeConfig.public.publictest)
    return{
      temp,
      test,
      status,
      // tw,
    }
  }
}
</script>