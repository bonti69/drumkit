
for(var i=0; i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    animation(this.innerHTML);
  });
  document.querySelectorAll("button")[i].addEventListener("keydown",function(event){
    console.log(event.key);
    makeSound(event.key);
    animation(event.key);
  });
}
  function makeSound(key){
    switch (key) {
      case "w":
        var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        break;
      case "s":
          var audio= new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
      case "d":
          var audio= new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
      case "j":
          var audio= new Audio("sounds/snare.mp3");
          audio.play();
          break;
      case "k":
          var audio= new Audio("sounds/crash.mp3");
          audio.play();
          break;
      case "l":
          var audio= new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        default:
          console.log(key);
    }

  }

  function animation (key){
    var button = document.querySelector("." + key);
    button.classList.add("pressed");

    setTimeout(function(){
      button.classList.remove("pressed");
    }, 100);
  }
