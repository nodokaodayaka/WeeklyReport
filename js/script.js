chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		submit();
	}
});

function submit() {
	var today = new Date();
    submit_data = ""
    	+ today.getFullYear() + "年"
    	+ (today.getMonth()+1) + "月"
    	+ today.getDate() + "日";
	document.getElementById("_chatText").value += ""
		+"[info][title]"+submit_data+"の週報[/title]\n"
		+"【案件】title\n"
		+"【状況】Status\n"
		+"【課題】Task\n"
		+"【懸念】Concerns[/info]\n";
}
