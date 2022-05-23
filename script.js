
// function quote(){
    // console.log("Started get data");
    // data = {"content": "dta", "author" : "nam"};
    // params = {
    //     // method : 'GET /random',
    //     headers: {
    //         'content-Type':'application/json'
    //     },
    //     body: data
    // }
    url = "https://api.quotable.io/random/?tags=inspirational";
    // fetch(url,params).then((response)=>{
    //     console.log("Inside First Then");
    //     return  response.json;
    // }).then((data)=>{
    //     console.log(data);
    // }) }

    async function getquote(){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const {content,author} = data;
        cont = document.getElementById("quote-content");
        auth = document.getElementById("quote-author");
        cont.innerHTML = content;
        auth.innerHTML = '- '+author+'';
        console.log(author);
    }
getquote();

 function loadQuote(a){
     htm = '<div class="spinner-border" role="status">\
     <span class="visually-hidden">Loading...</span>\
   </div>';
   a.innerHTML.remove;
   a.innerHTML = htm;
   console.log(a);
   setTimeout(getquote,1000);
   setTimeout(load,1000);
 }
 function load(){
    document.getElementById("jack").innerHTML = '<i class="bi bi-arrow-clockwise "></i>';
 }
var a = 1;
function save() {
    var urg = false, imp = false;
    if (document.getElementById("imp-checkbox").checked)
        imp = true;
    if (document.getElementById("urg-checkbox").checked)
        urg = true;
        // console.log(urg+" "+imp);
    var txt = document.getElementById("Ta1").value;
    // console.log(txt);
    a++;
    html = '<li id="task' + a + '">\
         <div class="card-text d-flex container">\
        <font class="col-11"> '+txt+' </font>\
        <a href="#" onclick="remove(this)" id='+ a + ' class="remove-parent nav-link ms-auto">\
            <i class="bi bi-trash3"></i></a>\
        </div>\
        </li>';
        // console.log(html);
        var form;
        if(imp && urg)
        form = document.getElementById("urg-imp-task");
        else if(imp && !urg)
        form = document.getElementById("imp-task");
        else if(!imp && urg)
        form = document.getElementById("urg-task");
        else
        form = document.getElementById("task");

        form.innerHTML += html;
}

function remove(icon) {
    let t = icon.id;
    let row = document.getElementById('task' + t);
    row.remove();
}