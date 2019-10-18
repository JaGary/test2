function getVarCode() {
    var img = document.getElementById("imgVerCode");
    img.src = "/kaptcha-img/code?" + new Date().getTime();
}

function hiddenError(id) {
    $("#" + id).html("");
}

function keydownSubmit(event) {
    e = event ? event : (window.event ? window.event : null);
    if (e.keyCode == 13) {
        modSubmit();
    }
}
var timeCount = 3;

function timedCount() {
    var node = $("#timeCount").html(timeCount);
    timeCount = timeCount - 1;
    if (timeCount > -1) {
        setTimeout("timedCount()", 1000);
    } else {
        $('.zw_result').hide();

        $('#iboxAlertOk').show();
    }
}
var flushfinish = function (code, nodeid, clazzid, courseId) {
    jQuery.ajax({
        type: "GET",
        url: "/edit/selfservice",
        data: {
            code: code,
            nodeid: nodeid,
            clazzid: clazzid,
            courseId: courseId
        },
        success: function (data) {
            if (data) {
                var wid = jQuery(document).width()
                var widAlert = jQuery('.courseAlert').width();
                var left = (wid - widAlert) / 2;
                jQuery('.courseAlert').css("left", left);
                jQuery('.courseAlert').css("display", "block");
                timedCount();
                jQuery("#iboxAlertOk").click(function () {

                    jQuery('.courseAlert').css("display", "none");
                    window.close();
                });
                jQuery(".courseTilte .ibox_close").click(function () {
                    jQuery('.courseAlert').css("display", "none");
                    window.close();
                });

            }
        }

    });

}
var modSubmit = function () {

    var code = $("#code").val();
    var clazzid = $("#clazzid").val();
    var nodeid = $("#nodeid").val();
    var courseId = $("#courseId").val();
    jQuery.ajax({
        type: "POST",
        url: "/kaptcha-img/ajaxValidate",
        data: {
            code: code
        },
        success: function (data) {
            if (data) {
                flushfinish(code, nodeid, clazzid, courseId);
            } else {
                location.href = "/edit/validate?nodeid=" + nodeid + "&clazzid=" + clazzid + "&courseId=" + courseId;
            }
        }

    });

}
var modSubmit2 = function () {
    var code = $("#code").val();
    //var clazzid=$("#clazzid").val();
    //var nodeid=$("#nodeid").val();
    jQuery.ajax({
        type: "POST",
        url: "/kaptcha-img/ajaxValidate2",
        data: {
            code: code
        },
        success: function (data) {
            $("#code").val("");
            if (data.status) {
                $("#validate").css("display", "none");
                WAY.box.hide();
                var enc = data.enc;
                $("#enc").val(enc);
                toadd("");
                //flushfinish(code,nodeid,clazzid);getVarCode
            } else {
                getVarCode();
                //location.href="/edit/validate?nodeid="+nodeid+"&clazzid="+clazzid
            }
        }

    });

}