import { tw } from 'twind'
import lodash from 'lodash'
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: 'hello-test',
      tw: tw,
      _: lodash
    }
  };
});