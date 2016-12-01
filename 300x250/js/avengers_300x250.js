function Replay(){
  var container = document.getElementById("banner");
  var content = container.innerHTML;
  container.innerHTML = content;
}

document.getElementById("replay_button").addEventListener('click',function()
    {
    var container = document.getElementById("banner");
    var content = container.innerHTML;
    container.innerHTML = content;  
    }  
    ); 