import Vuex from 'vuex'
import actions from './actions/index.js'
import common from './modules/common'

export default function(Vue){
    Vue.use(Vuex)
    return new Vuex.Store({
        modules: {
            common
        },
        actions,
        strict: true
    })   
}