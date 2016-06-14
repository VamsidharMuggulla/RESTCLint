document.addEventListener('DOMContentLoaded', function() {
start=document.getElementById("newtab");
start.onclick=function() {
chrome.tabs.create({url : 'http://localhost:8080/RestClint/'}, function(tab) { 
    //chrome.tabs.executeScript(tab.id, {file: 'src/contentScript2'});
  });
}
});


