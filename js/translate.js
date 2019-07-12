/* 
	Translations
	! broken and unmaintained, DO NOT USE UNLESS YOU FIX IT
*/
function parseStrings(path) {
	var JSONItems = [];
	$.getJSON( path, function( data){
		JSONItems = data;
		$("[today]").text(JSONItems.today);
		$("[log-in]").text(JSONItems.login);
		$(".cancel").text(JSONItems.cancel);
		$("[free=true]").text(JSONItems.free);
		$("[free=true]").attr("freeString", JSONItems.free);
		$("[pay-now-btn]").text(JSONItems.payNowBtn);
		$("[account]").html(JSONItems.account + ': <span class="email"></span>');
	});
}