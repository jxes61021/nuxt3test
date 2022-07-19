import lodash from 'lodash'
import { tw, setup, silent } from 'twind'
setup({
  mode: silent,
})
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: 'hello-test',
      tw: tw,
      _: lodash
    }
  };
});