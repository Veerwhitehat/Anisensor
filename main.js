function startClassification (){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rtF6w3FRe/model.json",modelready)
}
function modelready(){
    classifier.classify(gotResults);
}