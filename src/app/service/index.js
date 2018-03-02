import core, {store, router, axios} from './core'
// import { logger } from './plugin'

// import widget from './widget'



var service = {
    name:'欢迎应用 Service 服务',
    ...core
}

console.log(service)
export default service
export { 
    store,
    router,
    axios
}




