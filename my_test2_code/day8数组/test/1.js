// JavaScript Document

(function ($) {

    $.fn.disappearDefault = function (options) {

        var opts = jQuery.extend({}, jQuery.fn.disappearDefault.defaults, options);

        $(this).val(opts.vals);

        $(this).css({
            color: opts.defaultColor
        });

        $(this).focus(function () {

            if ($(this).val() == opts.vals) {

                $(this).val('');
            } else {

                return false;

            }

            $(this).css({
                color: opts.color
            });

            opts.callback($(this));


        });

        $(this).blur(function () {

            if (opts.showDefault) {

                if ($(this).val() == '') {

                    $(this).val(opts.vals);

                    $(this).css({
                        color: opts.defaultColor
                    });


                }

            }

        });


    }







})(jQuery);



$.fn.disappearDefault.defaults = {

    vals: "标签用逗号或空格隔开",

    defaultColor: "#999",

    color: "#333",

    callback: function (o) {},

    showDefault: false

}