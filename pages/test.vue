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
  div
    button(@click="add") addstr
</template>
<script>
import useStore from '@/store'
definePageMeta({
  middleware: ["need-import-test"]
})
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
    const num = ref(0)
    const add = () => {
      num.value++
      // console.log('add', num.value)
    }
    watch(num, (val) => {
      console.log('val', val)
    })
    return{
      temp,
      test,
      status,
      add,
      // tw,
    }
  }
}
</script>