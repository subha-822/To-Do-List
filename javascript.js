
function myFunction() 
{
  var list = document.createElement('li');
  var points = document.getElementById('inputget').value; 
  list.innerHTML= points;
  document.body.appendChild(list);
  //To Empty The Input Field
  document.getElementById('inputget').value = ''; 
  if (points === '') {
    alert("You must write something!");
  } 
  list.addEventListener("click",onclick,false)
  function onclick(){
    list.style.cssText='text-decoration:line-through';
  }

  list.addEventListener("dblclick",ondblclick,false)
  function ondblclick(){

    this.remove();
  }

}