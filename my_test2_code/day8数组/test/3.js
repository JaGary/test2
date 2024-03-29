// JavaScript Document

(function ($) {

    $.fn.tabs = function (opts) {

        var options = $.extend({}, $.fn.tabs.defaults, opts);

        var $that = $(this);

        $that.find(options.clickPanel).find(options.clickTag).bind(options.switchMode, function () {

            $(this).siblings().removeClass(options.addStyle);

            $(this).addClass(options.addStyle);

            $that.find(options.showContent).hide();

            $that.find(options.showContent).eq($(this).index()).show();

            return false;

        });

    };



})(jQuery);



$.fn.tabs.defaults = {

    switchMode: "mouseover",

    clickPanel: ".lists",

    clickTag: "li",

    addStyle: "current01",

    showContent: ".thiscontent"


};
