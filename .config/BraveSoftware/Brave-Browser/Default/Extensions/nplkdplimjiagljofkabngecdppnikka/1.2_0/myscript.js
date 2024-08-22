var iframe = document.createElement("dialog");
iframe.id = "DictionaryDialog";
$(iframe).appendTo("body");

var link = document.createElement("link");
link.setAttribute("type", "text/css");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", chrome.runtime.getURL("res/css/custom.css"));
document.getElementsByTagName("head")[0].appendChild(link);

var link = document.createElement("link");
link.setAttribute("type", "text/css");
link.setAttribute("rel", "stylesheet");
link.setAttribute(
  "href",
  chrome.runtime.getURL("res/css/font-awesome.min.css")
);
document.getElementsByTagName("head")[0].appendChild(link);

var popupMsg;
var popup;
function constructPopupWithData(data) {
  popup = `<div id="ArabicLexiconDiv"><div class="ResultBG result">
        <span id="ArabicLexiconCLoseBtn">
        <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<polygon id="close_mini-[#1522]" fill="gray" points="10.6627949 7.74611893 14.8388756 11.9221996 12.0548218 14.7062534 7.87874116 10.5301727 3.7026605 14.7062534 0.918606734 11.9221996 5.09468739 7.74611893 0.918606734 3.57003828 3.7026605 0.785984509 7.87874116 4.96206516 12.0548218 0.785984509 14.8388756 3.57003828"></polygon>
						</g>
					</svg>
				</span>	
				<audio id="ArabicLexiconSound">
				<source src= "${WAVES_URL}mp3/${data.id}.mp3" type="audio/mpeg" id="mp3">
        <source src="${WAVES_URL}ogg/${data.id}.ogg" type="audio/ogg" id="ogg">
        </audio>
        <audio id="EnArabicLexiconSound">
        <source src="${ENWAVES_URL}mp3/${
    data.senseId
  }.mp3" type="audio/mpeg" id="ENmp3">
        <source src="${ENWAVES_URL}ogg/${
    data.senseId
  }.ogg" type="audio/ogg" id="ENogg">
        </audio>
        <div>
        <a href="${
          WORD_URL + encodeURI(data.name)
        }"  id="siteLink" target="_blank"><span id="title" >${
    data.name
  }</span></a>
        <a href="#" id="playAudio"><i class="fa fa-volume-up GraySpeaker" aria-hidden="true"></i></a>
        <span id="mInfo">`;
  if (data.pos != null)
    popup += '<span id="ArabicPos" class="txtGray">' + data.pos + "</span>";
  if (data.pos != null && data.theme != null)
    popup +=
      '<span class="txtGray"> / </span><span id="ArabicClass" class="txtGray">' +
      data.theme +
      "</span>";
  popup += `</span></div>
          <div  id="sense" style="text-align:right;">${data.sense}</div>
          <div style="direction: ltr;text-align: left;">
          <span  id="englishTranslation" ><img class="flag" src="${chrome.runtime.getURL(
            "res\\img\\ukFlag.png"
          )}"/>${data.englishName}</span>
          <a href="#" id="EnPlayAudio"><i class="fa fa-volume-up BlueSpeaker" aria-hidden="true"></i></a></div>
          </div></div>`;

  return popup;
}

function constructLoadingMessage() {
  popupMsg = "";
  popupMsg += '<div id="ArabicLexiconDiv">';
  popupMsg += '<div class="tip">';
  popupMsg +=
    '<img class="load" src="' +
    chrome.runtime.getURL("res/img/load.gif") +
    '" />';
  popupMsg += "</div>";
  popupMsg += "</div>";

  return popupMsg;
}

function constructPopupWithMessage(message) {
  popup = `<span id="ArabicLexiconCLoseBtn">
          <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon id="close_mini-[#1522]" fill="gray" points="10.6627949 7.74611893 14.8388756 11.9221996 12.0548218 14.7062534 7.87874116 10.5301727 3.7026605 14.7062534 0.918606734 11.9221996 5.09468739 7.74611893 0.918606734 3.57003828 3.7026605 0.785984509 7.87874116 4.96206516 12.0548218 0.785984509 14.8388756 3.57003828"></polygon>
              </g>
            </svg>
          </span>	
          <div id="ArabicLexiconDiv">
          <div class="tip" style="font-weight:bold;">${message}</div></div>`;

  return popup;
}

function constructRequest(word) {
  return {
    method: "GET",
    url: API_URL + encodeURIComponent(word),
    async: false,
    contentType: "application/json",
  };
}
function CallApi(selectedText) {
  //var postRequest = constructRequest(selectedText);
  var dataResponse;
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var content = "";
      if (this.responseText == "" || this.responseText == null)
        content = constructPopupWithMessage(noDataMsg);
      else {
        dataResponse = JSON.parse(this.responseText);
        if (dataResponse.id != 0)
          content = constructPopupWithData(dataResponse);
        else content = constructPopupWithMessage(noDataMsg);
      }
      var dialog = document.querySelector("#DictionaryDialog");
      document.getElementById("DictionaryDialog").innerHTML = content;
      document
        .getElementById("ArabicLexiconCLoseBtn")
        .addEventListener("click", function () {
          dialog.close();
        });
      dialog.showModal();
    }
  });
  xhr.open("GET", API_URL + encodeURIComponent(selectedText), true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
}

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
  if (message.SendToDictionaryExt != "") {
    var dataResponse = CallApi(message.SendToDictionaryExt);
    setTimeout(function () {
      $("#playAudio").on("click", function () {
        var audio = $("#ArabicLexiconSound")[0];
        audio.play();
        return false;
      });
      $("#EnPlayAudio").on("click", function () {
        var audio = $("#EnArabicLexiconSound")[0];
        audio.play();
        return false;
      });
    }, 2500);
  }
});
