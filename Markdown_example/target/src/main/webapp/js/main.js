require.config({
    paths : {
        "jquery" : [ "http://libs.baidu.com/jquery/2.0.3/jquery" ]
    }
})
require([ "jquery", "js/a","plugins/editormd" ], function($) {
    $(function() {
        alert("load finished");
    })
})
