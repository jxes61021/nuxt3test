import { defineStore } from 'pinia'

const useStore = defineStore("main", {
  state: () => {
    return {
      piniatest: ['youtube', 'twitch'],
      width: 0
    }
  },
  actions: {
    addOneTest() {
      this.piniatest.push('video')
    },
    setWidth(val) {
      this.width = val
      // console.log('this.width', this.width)
    },
  },
  getters: {
    testpinia: state => state.piniatest + ' getters',
    isMobile: state => state.width <= 768
  },
});

export default useStore;
