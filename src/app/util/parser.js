function parseURL(url){
  let parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
  let result = parse_url.exec(url)
  return ['url', 'scheme', 'slash','host', 
          'port', 'path', 'query', 'hash']
         .reduce((obj, field, index)=>{
            let ret = result[index]
            if('path'==field) ret = '/'+ret
            obj[field] = ret
            return obj
         },{})
}


/**
 * [parseText 编译标示符]
 * @param  {[type]} text [v1classes{userid}audio-upload]
 * @param  {[type]} obj [{userid:aaa}]
 * @return {[type]}     [v1classesaaaaudio-upload]
 */
function parseText(text,obj){
    return text.replace(/(\{.*?\})/g,function(...arg){
        let key = arg[0].replace(/[\{|\}]/g,'').trim()
        // console.log(key,key.length)
        let val = obj[key]
        if(!val) throw new Error(`在${text}中,参数${key}未赋值`)
        return val
    })

}


export default  {
  parseURL,
  parseText
}
