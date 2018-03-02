import api,{axios} from './api/index.js'
import memory from './memory'
// import local from './local'



if(!Vue) {console.error('please install Vue')}

var model = {
    // ...local,
    ...api
}
// console.log(model)
// console.log(model.common.region_delete({id:1}))
console.log('----model----')

const store = memory(Vue)

export {
    store,
    model,
    axios
}