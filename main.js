Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
   });
   camera = document.getElementById("webcam_camera");
   Webcam.attach(camera);

   function capture_img()
   {
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result_camera").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
       
       });
   }
   function predict_img()
   {
    img_captured = document.getElementById("captured_img");
    Classifier.classify(img_captured , result_img);
   }
   console.log("ml5 version:" , ml5.version );
   Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/C2MJYpJwi/model.json" , modelLoaded);
  function modelLoaded()
  {
      console.log("modelLoaded");
  } 

  
function result_img(error , results)
{
    if (error)
    {
        console.error(error);
    }
    else 
    {
        console.log(results);
        gestures = results[0].label;
        toSpeak = " ";

        if (gestures == "Super")
        {
            toSpeak = "This is looking amazing";
            document.getElementById("emoji_update").innerHTML = "&#128076;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Thumbs Up")
        {
            toSpeak = "All The best";
            document.getElementById("emoji_update").innerHTML = "&#128077;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Victory")
        {
            toSpeak = "That was a marvellous victory";
            document.getElementById("emoji_update").innerHTML = "&#9996;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Thumbs Down")
        {
            toSpeak = "Do you dislike it ?";
            document.getElementById("emoji_update").innerHTML = "&#128078;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Thumbs Down")
        {
            toSpeak = "Do you dislike it ?";
            document.getElementById("emoji_update").innerHTML = "&#128078;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
        if (gestures == "Raised Hand")
        {
            toSpeak = "Raising hand";
            document.getElementById("emoji_update").innerHTML = "&#9995;";
            document.getElementById("result_emotion_name").innerHTML = results [0].label;
        }
    
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = toSpeak;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}