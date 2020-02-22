var ourMessage = $("#theH");
if('webkitSpeechRecognition' in window)
{
	var final_transcript = "";
	var interim_transcript = "";
	ourMessage.text("Yes");
	console.log("speechAvaibalbe?: Yes");
	var recognition = new webkitSpeechRecognition();
	  recognition.continuous = true;
	  recognition.interimResults = false;
	  recognition.lang = "en-US";
	  recognition.start();
	 
	 recognition.onstart = function()
	 {
		console.log("Yes, it started");
		
		recognition.onresult = function(e) {
		console.log("You should have a result right now...");
    var interim_transcript = '';

    for (var i = e.resultIndex; i < e.results.length; ++i) {
      if (e.results[i].isFinal) {
        final_transcript += e.results[i][0].transcript;
      } else {
        interim_transcript += e.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
	console.log(final_transcript);
    $("#theInput").val(linebreak(final_transcript));
    $("#theOtherInput").val(linebreak(interim_transcript));
  };
  
  recognition.onerror = function(event) {
    console.log(event.error);
	};
	 };
}
else
{
	ourMessage.text("No");
}