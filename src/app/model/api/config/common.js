export default {
    
    region_get:{
        get:'./region/get?id={id}',
        restful:false,
        abort:false,
        cache:false
    },
    region_post:{
        post:'./region/update/{id}',
        
    },
    region_delete:{
        delete:'./region/delete/{id}',
        
    }

}