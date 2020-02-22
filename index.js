var ourMessage = $("#theH");
if('webkitSpeechRecognition' in window)
{
	ourMessage.text("Yes");
	console.log("speechAvaibalbe?: Yes");
	var recognition = new webkitSpeechRecognition();
	  recognition.continuous = true;
	  recognition.interimResults = false;
	  recognition.lang = "en-US";
	  recognition.start();
	 
	
	recognition.onresult = function(e) {
    var interim_transcript = '';

    for (var i = e.resultIndex; i < e.results.length; ++i) {
      if (e.results[i].isFinal) {
        final_transcript += e.results[i][0].transcript;
      } else {
        interim_transcript += e.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
    $("#theInput").val(linebreak(final_transcript));
    $("#theOtherInput").val(linebreak(interim_transcript));
  };
}
else
{
	ourMessage.text("No");
}