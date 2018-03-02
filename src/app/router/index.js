import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter)
// *** 实例化VueRouter
let router = new VueRouter({
    routes,
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
})



    // router.beforeEach(transition =>{
    //     if(transition.to.name == 'root') {
    //         router.go({ name: 'home'})
    //     }
    //     transition.next()
    // })

    
export default  router
    
