import util from '../../util'
import { store, model, axios } from '../../model'
import router from '../../router'


const core = {
    ...util,
    '$model': model ,
    '$store': store ,
    '$router': router,
    '$axios' : axios
}

export default core
export {
    store,
    router,
    axios
}
