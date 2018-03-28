export default [{
        path:'/',
        name:'home',
        component: resolve => require(['../view/pages/home/index.vue'], resolve)
        // function(resolve){
        //     require(['../view/pages/home/index.vue'], resolve)
        // }
    // },{
    //     path:'/tree',
    //     name:'tree',
    //     component:function(resolve){
    //         require(['../view/pages/tree/index.vue'], resolve)
    //     }
    }]