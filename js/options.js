$(function(){

  $("#save").click(function () {
    var title = $("#title").val();
    var status = $("#status").val();
    var task = $("#task").val();
    var concerns = $("#concerns").val();
    var formOptions = {
      title: title,
      status: status,
      task: task,
      concerns: concerns
    };
    chrome.storage.sync.set(formOptions, function(){});
  });

  if (localStorage["title"]) {
    $("#title").val(localStorage["title"]);
  }
  if (localStorage["status"]) {
    $("#status").val(localStorage["status"]);
  }
  if (localStorage["task"]) {
    $("#task").val(localStorage["task"]);
  }
  if (localStorage["concerns"]) {
    $("#concerns").val(localStorage["concerns"]);
  }
});
