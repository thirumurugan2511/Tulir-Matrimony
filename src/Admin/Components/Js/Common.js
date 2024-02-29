let selectedType, selectedPlacement, selectedPlacementAllign, toastPlacement;
let toastPlacementExample = document.querySelector(".toast-placement-ex");
$(document).ready(function () {
    $(".select2").select2({ placeholder: "Please Select", allowClear: true });
    let e = "Are you sure to proceed ?";
    $("body").on("click", ".all_check", function () {
        if ($(this).prop("checked") == true) {
            $(".checkboxId").prop("checked", true);
        } else {
            $(".checkboxId").prop("checked", false);
        }
    });
    $("#notificationUnread").click(function () {
        let e = new FormData();
        $(this).prop("disabled", true);
        let t = $("#base_url").val();
        let a = t + "/notification-read";
        ajaxRequest($(this), e, a, "");
    });
    $("#resultData").on("click", ".checkboxId", function () {
        if ($(this).prop("checked") == true) {
            if ($(".checkboxId:checked").length == $(".checkboxId").length) {
                $(".all_check").prop("checked", true);
            }
        } else {
            $(".all_check").prop("checked", false);
        }
    });
    $(".actionBtn").click(function () {
        let t = new FormData();
        if ($(".checkboxId:checked").length <= 0) {
            showNotification("top-0", "end-0", "bg-danger", "withicon", "fa fa-times", "Please select at least one record to process!", "Failed");
            return false;
        }
        let a = [];
        $(".checkboxId:checked").each(function () {
            a.push($(this).val());
        });
        t.append($(this).attr("data-column"), $(this).attr("data-value"));
        t.append("id", a);
        let l = $("#changeStatusUrl").val();
        if ($(this).attr("isconfirm") && $(this).attr("isconfirm") == 1) {
            if (confirm(e)) {
                ajaxRequest("#resultData", t, l, "ajaxChangeStatusResponse");
            }
        } else {
            ajaxRequest("#resultData", t, l, "ajaxChangeStatusResponse");
        }
    });
    $("#resultData").on("click", ".ajaxPagination", function (e) {
        e.preventDefault();
        $("#page").val($(this).find("a").attr("data-page"));
        getAjaxPaginationData();
    });
    $("#commonSearch").click(function () {
        $("#page").val(1);
        getAjaxPaginationData();
    });
    $("#searchText").keyup(function (e) {
        if (e.keyCode === 13 || $(this).val() == "") {
            $("#commonSearch").click();
        }
    });
    $("#recordLimit").change(function () {
        if ($(this).val() != "") {
            $("#page").val(1);
            getAjaxPaginationData();
        }
    });
    $(".tabClick").click(function () {
        if (!$(this).hasClass("active")) {
            $(".tabClick").removeClass("active");
            $(this).addClass("active");
            $("#page").val(1);
            getAjaxPaginationData();
        }
    });
    $("#formSubmitBtn").click(function (e) {
        e.preventDefault();
        if ($("#addEditForm").valid()) {
            $("#addEditForm").trigger("submit");
        } else {
            return false;
        }
    });
});
function ajaxRequest(e, t, a, l = "") {
    t.append("isPost", 1);
    t.append("_token", $("input[name=_token]").val());
    $.ajax({
        url: a,
        type: "POST",
        processData: false,
        contentType: false,
        data: t,
        success: function (t) {
            let a = t;
            if (a.redirectUrl != "" && a.redirectUrl != undefined) {
                window.location.href = a.redirectUrl;
            }
            if (l != "") {
                window[l](e, a);
            }
            setTimeout(function () {
                $("#overlay").fadeOut(300);
            }, 500);
        },
        error: function (t, a, l) {
            $(e).prop("disabled", false);
            if (t.status == 422) {
                showNotification("top-0", "end-0", "bg-danger", "withicon", "fa fa-times", "The upload file must be less than 10 MB", a);
            } else {
                showNotification("top-0", "end-0", "bg-danger", "withicon", "fa fa-times", t.status + " " + l, a);
            }
        },
    });
}
function scrollTop(e) {
    $("html, body").animate({ scrollTop: $(e).offset().top }, 1e3);
}
function showNotification(e = "top-0", t = "end-0", a = "bg-info", l = "plain", o = "fa fa-bell", c = "", i = "") {
    if (toastPlacement) {
        toastDispose(toastPlacement);
    }
    $(".toast-title").text(i);
    $(".toast-body").text(c);
    selectedType = a;
    selectedPlacement = e;
    selectedPlacementAllign = t;
    toastPlacementExample.classList.add(selectedType);
    toastPlacementExample.classList.add(selectedPlacement);
    toastPlacementExample.classList.add(t);
    toastPlacement = new bootstrap.Toast(toastPlacementExample);
    toastPlacement.show();
}
function toastDispose(e) {
    if (e && e._element !== null) {
        if (toastPlacementExample) {
            toastPlacementExample.classList.remove(selectedType);
            toastPlacementExample.classList.remove(selectedPlacement);
            toastPlacementExample.classList.remove(selectedPlacementAllign);
        }
        e.dispose();
    }
}
function dropdownChange(e, t, a) {
    let l = $("#base_url").val();
    let o = l + "/commonRequest/getList";
    let c = $("#" + e).val();
    if (c != "" && c != null) {
        let e = new FormData();
        e.append("get_list", a);
        e.append("currnet_val", c);
        e.append("disp_on", t);
        ajaxRequest("#resultData", e, o, "getListCommonResponse");
    } else {
        $("#" + t).html('<option value="">Select Value</option>');
        if (a == "state_list") {
            if ($("#city").length > 0) {
                $("#city").html('<option value="">Select City</option>');
            }
        }
    }
}
function getListCommonResponse(e, t) {
    if (t.status == "success") {
        $("#" + t.data.disp_on).html(t.html);
        if (t.data.get_list == "state_list") {
            if ($("#city").length > 0) {
                $("#city").html('<option value="">Select City</option>');
            }
        }
    }
}
function copyToClipboard() {
    let e = $("<input>");
    $("body").append(e);
    let t = $("#copyText1").val();
    e.val(t).select();
    document.execCommand("copy");
    e.remove();
    alert("Link Copied SuccessFully");
}

// Check Two Value Same :
function isSameValue(value1 = '', value2 = '') {
    var returnValue = false;
    if (value1 == value2) {
        returnValue = true;
    }
    return returnValue;
}

function getDashboardData(key='',value=''){
    let formData = new FormData();
    formData.append('dashboardKey',key);
    formData.append('dashboardValue',value);
    let action = $("#base_url").val()+'/dashboard-data';
    ajaxRequest($(this),formData,action,'ajaxChangeStatusResponse');
}

function ajaxChangeStatusResponse(_this, response) {
    if (response.status == 'success') {
        window.location.href = $("#base_url").val()+'/member';
    }
}