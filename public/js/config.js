
// 模块公共配置
require.config({
    baseUrl: '/public',
    paths: {
        jquery: 'assets/jquery/jquery.min',
        template: 'assets/artTemplate/template-web',
        uploadify: 'assets/uploadify/jquery.uploadify.min',
        nprogress: 'assets/nprogress/nprogress',
        echarts: 'assets/echarts/echarts.min',
        ckeditor: 'assets/ckeditor/ckeditor'
    },
    // 如果某个第三方的类库不支持 AMD，通过 shim 
    // 可以实现类似模块的用法
    shim: {
        // 模块有何特点？
        uploadify: {
            // 1、通过 exports 可以将非模块的方法或属性
            // 公开出来（相当于标准模块中 return 的作用）
            // exports: 
            
            // 2、通过 deps 可以依赖其它模块
            deps: ['jquery']
        },
        ckeditor: {
            // deps: []
            exports: 'CKEDITOR'
        }
    }
});

// 全局执行的
require(['nprogress', 'jquery'], function (NProgress, $) {
    
    NProgress.start();

    NProgress.done();

    // 当Ajax请求时，也需要进度显示
    $(document).ajaxStart(function () {
        NProgress.start();
    }).ajaxStop(function () {
        NProgress.done();
    })
});