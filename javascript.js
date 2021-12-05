let toggle=0;
function Changebg1(){document.getElementById("cbg").className = "overimg";}
function Changebg2(){document.getElementById("cbg").className = "netherimg";}
function Changebg3(){document.getElementById("cbg").className = "endimg";}
function Changetitle(){
  if(toggle){
    document.getElementById("ti").className = "titlestyle";
    toggle=0;
  }
  else{
    document.getElementById("ti").className = "normaltitle";
    toggle=1;
  }
}
function Changelist1(){
  document.getElementById("faq1").className = "hrepstyle1";
  document.getElementById("faq2").className = "hrepstyle1";
  document.getElementById("faq3").className = "hrepstyle1";
  document.getElementById("faq4").className = "hrepstyle1";
  document.getElementById("faq5").className = "hrepstyle1";
  document.getElementById("faq6").className = "hrepstyle1";
  document.getElementById("faq7").className = "hrepstyle1";
}
function Changelist2(){
  document.getElementById("faq1").className = "hrepstyle2";
  document.getElementById("faq2").className = "hrepstyle2";
  document.getElementById("faq3").className = "hrepstyle2";
  document.getElementById("faq4").className = "hrepstyle2";
  document.getElementById("faq5").className = "hrepstyle2";
  document.getElementById("faq6").className = "hrepstyle2";
  document.getElementById("faq7").className = "hrepstyle2";
}
  const URL = "https://teachablemachine.withgoogle.com/models/r8X8UCIeo/";
  let model, webcam, maxPredictions;
  async function init() {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";
      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();
      const flip = true;
      webcam = new tmImage.Webcam(200, 200, flip);
      await webcam.setup();
      await webcam.play();
      window.requestAnimationFrame(loop);
      document.getElementById("webcam-container").appendChild(webcam.canvas);
  }
  async function noinit() {
      const modelURL =0;
      const metadataURL =0;
      model = 0;
      maxPredictions = 0;
      const flip = false;
      await webcam.stop();
  }


  async function loop() {
      webcam.update();
      await predict();
      window.requestAnimationFrame(loop);
  }

  async function predict() {
      const prediction = await model.predict(webcam.canvas);
      if (prediction[0].probability > 0.5) {
          document.getElementById("cbg").className = "overimg";
          document.getElementById("faq1").className = "hrepstyle1";
          document.getElementById("faq2").className = "hrepstyle1";
          document.getElementById("faq3").className = "hrepstyle1";
          document.getElementById("faq4").className = "hrepstyle1";
          document.getElementById("faq5").className = "hrepstyle1";
          document.getElementById("faq6").className = "hrepstyle1";
          document.getElementById("faq7").className = "hrepstyle1";
      }
      else {
          document.getElementById("cbg").className = "nightimg";
          document.getElementById("faq1").className = "hrepstyle2";
          document.getElementById("faq2").className = "hrepstyle2";
          document.getElementById("faq3").className = "hrepstyle2";
          document.getElementById("faq4").className = "hrepstyle2";
          document.getElementById("faq5").className = "hrepstyle2";
          document.getElementById("faq6").className = "hrepstyle2";
          document.getElementById("faq7").className = "hrepstyle2";
      }
  }
