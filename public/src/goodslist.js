
define(['jquery', 'template', './utils'], function ($, template) {

    var size = 2;

    // 利用正则匹配页码
    var reg = /\?[a-z]+=(\d+)/;
    // 处理请求参数
    var search = location.search || '';
    // 进行匹配查找
    var page = reg.exec(search) && reg.exec(search)[1];
    // 设定默认页码
    page = page || 1;

    $.ajax({
        url: '/api/product/queryProductDetailList',
        type: 'get',
        data: {page: page, pageSize: size},
        success: function (info) {
            // 总的数据条数
            var total = info.total;
            // 总的页数
            var pageLen = Math.ceil(total / size);

            // 调用模板引擎处理商品列表
            var html = template('tpl', info);

            // 调用模板引擎处理分页
            var pagehtml = template('page', {
                pageLen: pageLen,
                page: page
            });

            $('.goods').html(html);

            $('.pagination').html(pagehtml);
        }
    });

})