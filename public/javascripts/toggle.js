$(document).ready(function () {
    $(".image").click(function () {
	var id = $(this).attr('id');
        $("#caption" + id).slideToggle();
    });
});
