<template lang="pug">
div
  //- Header
  slot
  Pet
  Footer
</template>
<script>
import { ref } from 'vue'
import { tw } from 'twind/shim'
import Footer from '@/components/Footer.vue'
import Pet from '@/components/Pet.vue'
export default {
  components: {
    Footer,
    Pet
  },
  setup() {
    return{
      tw,
    }
  }
}
</script>