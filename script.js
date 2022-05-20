var logo = document.getElementById('logo-div');
logo.addEventListener("click", top());
var name = document.getElementById('home-name')
name.addEventListener("click", about())
function top(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function about(){
    document.body.scroll = document.getElementById('about-main')
}