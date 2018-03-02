export default [{
    //     path:'/',
    //     name:'root',
    //     redirect:{name:'home'}
    // },
    // {
        path:'/home',
        name:'home',
        component:function(resolve){
            require(['../view/pages/home/index.vue'], resolve)
        }
    // },{
    //     path:'/tree',
    //     name:'tree',
    //     component:function(resolve){
    //         require(['../view/pages/tree/index.vue'], resolve)
    //     }
    }]