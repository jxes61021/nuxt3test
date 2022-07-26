import lodash from 'lodash'
import { tw, setup, silent } from 'twind'
setup({
  mode: silent,
})
export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', () => {
    console.log('this global middleware was added in a plugin and will be run on every route change')
  }, { global: true })
  addRouteMiddleware('need-import-test', () => {
    console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
  })
  return {
    provide: {
      hello: 'hello-test',
      tw: tw,
      _: lodash
    }
  };
});