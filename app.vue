<template lang="pug">
Head
  Title test: {{ dynamic }}
  Meta(name="description" :content="`My page's ${dynamic} description`")
div
  NuxtLayout
    NuxtPage
  //- NuxtWelcome
</template>
<script>
export default {
  setup() {
    useHead({
      titleTemplate: '%s - useHead example',
      bodyAttrs: {
        class: 'test'
      }
    })

    return{
      dynamic: ref('dynamic title')
    }
  },
  head: {
    title: 'Another title'
  }
}
</script>