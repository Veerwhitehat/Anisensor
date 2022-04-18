function startClassification (){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rtF6w3FRe/model.json",modelready)
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {

    if (error) {

        console.error(error);

        
    } else {
     console.log(results);
     r=Math.floor(Math.random()* 255)+ 1;  
     g=Math.floor(Math.random()* 255)+ 1;  
     b=Math.floor(Math.random()* 255)+ 1;
     document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;  
     document.getElementById("result_confidence").innerHTML="Accuracy - "+results[0].confidence.toFixed(1)+"%";
     document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
     document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
     img1=document.getElementById("lion.webp");
     img2=document.getElementById("sheep.jpg");
     img3=document.getElementById("goat.jpg");
     img4=document.getElementById("dog.jpg");
     img4=document.getElementById("wolf.jpg");
    if (results[0].label=="Roar") {
        img1.src="simba roar.gif";  
        img2.src="goat.jpg";  
        img3.src="wolf.jpg";  
        img4.src="dog.jpg";
        img5.src="sheep.jpg";  
          
        }
        if (results[0].label=="goat") {
            img1.src="lion.webp";  
            img2.src="baa goat.gif";  
            img3.src="wolf.jpg";  
            img4.src="dog.jpg";
            img5.src="sheep.jpg";  
              
            }
            if (results[0].label=="wolf") {
                img1.src="lion.webp";  
                img2.src="goat.jpg";  
                img3.src="howl-wolf.gif";  
                img4.src="dog.jpg";
                img5.src="sheep.jpg";  
                  
                }
                if (results[0].label=="dog") {
                    img1.src="lion.webp";  
                    img2.src="goat.jpg";  
                    img3.src="wolf.jpg";  
                    img4.src="dog bark.gif";
                    img5.src="sheep.jpg";  
                      
                    }
                    if (results[0].label=="sheep") {
                        img1.src="lion.webp";  
                        img2.src="goat.jpg";  
                        img3.src="wolf.jpg";  
                        img4.src="dog.jpg";
                        img5.src="sheep baa.gif";  
                          
                        }
          }
}