var targetNumber = 0;
  var numberOptions = [1, 1, 1, 1];
  var buttonNumbers=[0,1,2,3];
  var counter = 0;
  var wins=0;
  var losses=0 ;
  var imageCrystal = $("<img>");
  var crystalValue = 0;
  var images = ["Assets/images/GemBlue.png","Assets/images/GemGreen.png","Assets/images/GemRed.png","Assets/images/GemYellow.png","Assets/images/GemPurple.png","Assets/images/GemWhite.png"]
  
  var tempArray =[0,0,0,0];

  $(document).ready(function() {

    
    
    numbersLoop();
    onGUI();

    
  function numbersLoop()
  {
    targetNumber =Math.ceil(Math.random()*102)+18;
    for (var i = 0; i < numberOptions.length; i++) {
      assignCrystalValues(i)
    }
    // console.log(numberOptions);
  };//end of numbersloop
    
    
  function assignCrystalValues(i)
  {
      imageCrystal = $("<img>");

      imageCrystal.addClass("crystal-image");
    
      
      setImage();
      function setImage()
      {
        var tempX=Math.floor(Math.random()*images.length)//pick random image
        if(tempArray.indexOf(tempX)===-1)//check for duplicates
        {
          tempArray[i]=tempX;
          imageCrystal.attr("src", images[tempX]);
        }
        else setImage();
        
      }
      // console.log(tempArray[i]);
      var tempVal = 2;
      randomize();
      function randomize()
      {
        tempVal = Math.ceil(Math.random()*11)+1; //random 1-12
        if(numberOptions.indexOf(tempVal)===-1)//check for duplicates
        {
          imageCrystal.attr("data-crystalvalue",  buttonNumbers[i]);//assign button numbers... can probably just use 'i' but just being sure
          numberOptions[i]=tempVal;
        }
        else randomize();
      }
      
      $("#crystals").append(imageCrystal);
  };//end assignCrystalValues


  $(".crystal-image").on("click", function() {
      
      imgID= ($(this).attr("data-crystalvalue"));
      crystalValue = numberOptions[imgID]
      crystalValue = parseInt(crystalValue);
      // console.log(numberOptions);
      // console.log(numberOptions[imgID]);
      // console.log(imgID);
    
      counter += crystalValue;
    
      if (counter === targetNumber) {
        wins++;
        restart();
        $("#win-lose").text("Winner! Winner! Chicken Dinner!");
      }

      else if (counter >= targetNumber) {
        losses++
        restart();
        $("#win-lose").text("You lost.");
      }
      onGUI();
    }); //end click function

  function onGUI()
  {
    $("#number-to-guess").text(targetNumber);
    $("#number-guessed").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);
    
  };//end onGUI
  function restart()
  {
  //$( "#crystals" ).empty();
    //numberOptions=[1,1,1,1];
    targetNumber = Math.ceil(Math.random()*102)+18;
    counter = 0;
  // numbersLoop();
    onGUI();
  for(var i=0;i<numberOptions.length;i++)
      {
        var tempVal = 2;
          randomize();
          function randomize()
          {
            tempVal = Math.ceil(Math.random()*11)+1;
            if(numberOptions.indexOf(tempVal)===-1)//check for duplicates again
            {
              numberOptions[i]=tempVal;
              // console.log(numberOptions[i]);
            }
            else randomize();
          }
      }
  
  //  $("#crystals").append(imageCrystal);
    
    //numbersLoop();

  };//end restart


});

