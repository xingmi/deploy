({
    // appDir: './',
    baseUrl: '../',
    dir: '../../dist/js',

    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    
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

    },


    modules: [
        {
            name: 'base'
        },
        {
            name: 'groupListController',
            exclude: [
                "base"
            ]
        }
    ],


})
