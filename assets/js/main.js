; (function ($) {
    $(document).ready(function () {
        $(".action-button").on('click', function () {
            let task = $(this).data('task');
            window[task]();
        });
    });



})(jQuery);


function simple_ajax_call() {
    let $ = jQuery;
    let name = prompt("What is your Name?");
    $.post(plugindata.ajax_url, { 'action': 'ajd_simple', 'data': name }, function (data) {
        console.log(data);
    });
}
