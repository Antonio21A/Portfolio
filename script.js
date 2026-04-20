function scrollToProjects(){
  document.getElementById("projects")
  .scrollIntoView({behavior:"smooth"});
}

function toggleAbout(){
  document.getElementById("moreAbout")
  .classList.toggle("open");
}