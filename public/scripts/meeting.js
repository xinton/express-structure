function copyLink() {
    var copyText = document.getElementById("linkGen");
    copyText.select();
    document.execCommand("Copy");
}

function createLink() {
    var provider = $("#meetingProvider").val();
    var meetingId = $("#meetingId").val();
    var meetingLanguage = $("#meetingLanguage").val();

    $.post("/api/createmeeting",
    //     {
    //         provider: provider,
    //         id: meetingId,
    //         language: meetingLanguage
    //     },
        function(data, status){
            var res = JSON.parse(data);
            $("#linkResult").prop('style', 'visibility: visible');
            $("#linkGen").val(res.meeting_url);
        });
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

(function ($) {
    "use strict";

    $("#linkResult").prop('style', 'visibility: hidden');

})(jQuery);