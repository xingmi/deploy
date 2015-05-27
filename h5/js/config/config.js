(function(){

    // var baseUrl = "/js/";
    // var controller = baseUrl + 'controllers/';
    // var model = baseUrl + 'models/';

    require.config({

        baseUrl: '../../js',

        urlArgs: "v=" + Date.now(),

        shim: {
            'backbone': {
                deps: ['underscore','jquery'],
                exports: 'Backbone'
            },
            'underscore': {
                exports: '_'
            },
            'jquery': {
                exports: '$'
            }
        },
        
        paths: {
            // libJS
            'jquery' : 'lib/zepto-min',
            'backbone' : 'lib/backbone-min',
            'underscore': 'lib/underscore-min',

            // commonJs
            'base': 'common/base',
            

            //controllers
            'groupListController': 'controllers/productGroupListController',


            //models
            'groupListModel': 'models/groupListModel'

        }
    });
})()
