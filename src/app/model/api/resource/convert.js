import Axios from 'axios'
import core from 'UTIL'

const { parseText } = core
const axios = Axios.create()


function convert(sub){

    var ROOT = sub.ROOT || ''
    delete sub.ROOT

    return Object.keys(sub).reduce(function(ctx,key){
        
        let headRequest = ['get','delete','head','options']
        let bodyRequest = ['post','put','patch']
        let item =  sub[key]
        let method = Object.keys(item).filter((subkey)=>{
            if(~headRequest.concat(bodyRequest).indexOf(subkey)){
                return true
            }    
        })[0]

        let rawUrl = ROOT+item[method]
        // console.log(key,rawUrl)
        let type = item.type || 'json'
        let binary = item.binary || false
        let response = item.response || false
        // let XHR = response ? axios : axiosData
        let XHR = axios
        let contentType = {
                'json':'application/json',
                'x-www-form-urlencoded':'application/x-www-form-urlencoded'
            }[type]
        
        ctx[key] = function(parse,data=null,config=null){
            
            let pend = null
            let url = parseText(rawUrl,parse)

            console.log('接口---------------')
            console.log(rawUrl)
            console.log(url,method)
            console.log('接口+++++++++++++++')
            if(url == rawUrl){
                if(config){
                    console.log(`url参数${JSON.stringify(parse)}貌似无用`)    
                }else{
                    config = data
                    data = parse
                    parse = null
                }
            }
            
            if(~headRequest.indexOf(method)){
                config = data
                data = null
                
                config = headers(config,contentType)

                pend = binary
                    ? requestGet(url)
                    : XHR[method](url,config)
            }

            if(~bodyRequest.indexOf(method)){
                
                config = headers(config,contentType)
                pend = binary
                    ? requestPost(url,data)
                    : XHR[method](url,data,config)
            }
            return pend
        }
        return ctx
        
    },{})
}

function headers(config, contentType){
    config = config || {}
    contentType = config['content-type'] ||contentType
    config['content-type'] = contentType

    return config
}


export default  convert
export { axios }