// import './assets/sass/app.scss'
// import components from './components'
// import directives from './directives'
import App from './pages/app.vue'

import './assets/css/index.css'
import './assets/scss/index.scss'

// Vue.use(components)
// Vue.use(directives)
console.log(App)
export function render(store,router){
    const vue = new Vue({
        el:'#app',
        store:store,
        router:router,
        render: h => h(App)
    })    
}
