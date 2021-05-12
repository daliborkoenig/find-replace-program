function search() {
  document.getElementById('alert').innerHTML = ""
  document.getElementById('paragraph').innerHTML = document.getElementById('paragraph').innerHTML.replaceAll("<mark>", "");

  let paragraph = document.getElementsByTagName('p')[0].innerHTML
  let search = document.getElementById('inputSearch').value
  let searchNumber = paragraph.split(search).length-1

  document.getElementById("alert").style.display = "block";

  if(search.length == 0){
    document.getElementById('alert').innerHTML += `The search field is empty`
  }
  else if (searchNumber == 0){
    document.getElementById('alert').innerHTML += `The word was not found`
  }
  else{
     document.getElementById('paragraph').innerHTML = document.getElementById('paragraph').innerHTML.replaceAll(search, "<mark>"+search+"</mark>")
    document.getElementById('alert').innerHTML += `We have found ${searchNumber} instances of the word ${search}`
  }

  window.setTimeout(function () {
    window.location.reload();
  }, 20000);
}

function replace() {
  document.getElementById('alert').innerHTML = ""
  document.getElementById('paragraph').innerHTML = document.getElementById('paragraph').innerHTML.replaceAll("<mark>", "");

  let paragraph = document.getElementsByTagName('p')[0].innerHTML
  let search = document.getElementById('inputSearch').value
  let replace = document.getElementById('inputReplace').value
  let searchNumber = paragraph.split(search).length-1

  document.getElementById("alert").style.display = "block";

  if (search.length == 0){
    document.getElementById('alert').innerHTML += `The search field is empty`
  }
  else if(searchNumber == 0){
    document.getElementById('alert').innerHTML += `The word was not found`
  }
  else{
    document.getElementById('paragraph').innerHTML = document.getElementById('paragraph').innerHTML.replaceAll(search, "<mark>"+search+"</mark>")
    document.getElementById('paragraph').innerHTML = document.getElementById('paragraph').innerHTML.replaceAll(search, replace);
    document.getElementById('alert').innerHTML += `We have found and replaced ${searchNumber} instances of the word ${search} with the word ${replace}`
  }

  window.setTimeout(function () {
    window.location.reload();
  }, 10000);
}

