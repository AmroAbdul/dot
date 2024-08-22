$(document).ready(function () {
  $("#txtSearch").attr("placeholder", "كلمة البحث");
  $("i").hide();
  $("img").hide();
  $(".sense-wrap").hide();

  $("#txtSearch").on("keypress", function (e) {
    if (e.keyCode == 13) {
      $("#btnSearch").click();
    }
  });

  $("#playAudio").on("click", function () {
    var myAudio = new Audio();
    myAudio.src = $("source").attr("src");

    if (myAudio.canPlayType("audio/mpeg;")) {
      myAudio.src = $("#mp3").attr("src");
    } else {
      myAudio.src = $("#ogg").attr("src");
    }
    myAudio.play();
  });
  $("#EnPlayAudio").on("click", function () {
    var myAudio = new Audio();
    myAudio.src = $("source").attr("src");

    if (myAudio.canPlayType("audio/mpeg;")) {
      myAudio.src = $("#ENmp3").attr("src");
    } else {
      myAudio.src = $("#ENogg").attr("src");
    }
    myAudio.play();
  });
  $("#btnSearch").click(function () {
    var inputText = $("#txtSearch").val().trim();
    if (inputText == "") return;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.responseText == "" || this.responseText == null)
          bindMessageToPopUp(noDataMsg);
        else {
          dataResponse = JSON.parse(this.responseText);
          if (dataResponse.id != 0) bindDataToPopUp(dataResponse);
          else bindMessageToPopUp(noDataMsg);
        }
      }
    });
    xhr.open("GET", API_URL + encodeURIComponent(inputText), true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
  });
});

function bindMessageToPopUp(message) {
  $("i").hide();
  $("img").hide();
  $("#title").empty();
  $("#englishTranslation").empty();

  $("#sense").html('<div style="text-align:center">' + message + "</div>");
  $("#sense").addClass("NoWordSearchPopUp");
}
function bindDataToPopUp(data) {
  $("i").show();
  $("img").show();
  $(".sense-wrap").show();

  $("#title").html(data.name);
  $("#sense").html(data.sense);
  if (data.englishName)
    $("#englishTranslation").html(
      ' <img class="flag" src="res/img/icon-en.svg" >' + data.englishName
    );

  $("#siteLink").attr("href", WORD_URL + encodeURI(data.name));
  $("#ArabicLexiconSound #mp3").attr(
    "src",
    WAVES_URL + "mp3/" + data.id + ".mp3"
  );
  $("#ArabicLexiconSound #ogg").attr(
    "src",
    WAVES_URL + "ogg/" + data.id + ".ogg"
  );
  $("#EnArabicLexiconSound #ENmp3").attr(
    "src",
    ENWAVES_URL + "mp3/" + data.senseId + ".mp3"
  );
  $("#EnArabicLexiconSound #ENogg").attr(
    "src",
    ENWAVES_URL + "ogg/" + data.senseId + ".ogg"
  );
  $("#sense").removeClass("NoWordSearchPopUp");
  if (data.pos != null && data.theme != null)
    $("#mInfo").html(
      '<img src="res/img/tags.png"  aria-hidden="true" alt="..."  style="vertical-align: middle;">' +
        '<span id="ArabicPos" class="txtGray">' +
        data.pos +
        '</span><span class="txtGray">/</span><span id="ArabicClass" class="txtGray">' +
        data.theme +
        "</span>"
    );
  else if (data.pos != null && data.theme == null)
    $("#mInfo").html(
      '<span id="ArabicPos" class="txtGray">' + data.pos + "</span>"
    );
}
