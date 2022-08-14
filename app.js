'use strict';
var apiurl="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[1,2,3]&pretty=true"
var allNames=[]
var container= $(".rendersection");
function displayData(api){

return fetch(api)
.then(response=>response.json())
.then(function (data){
    renderData(data)
    console.log(allNames)})
.catch(err=>console.log('ERROR'))}

function renderData(data){
    
    for(let i=0; i<data.length ;i++){
    let div = `<div class="content">
            <p class="flname">${data[i].fname[1].toUpperCase()}${data[i].lname[1].toUpperCase()}</p>
            <p class="firstlast"> ${data[i].fname} ${data[i].lname} </p>
            <p class="categnum"> Categ ${data[i].category} </p>
            </div>
    `
    container.append(div)
    }
    
}

$(".categaction").click(function(){
    container.empty()
    var btnClass = this.className.split(" ")[0]
    let categ = btnClass.slice(-1)
    // console.log(cat)
    let newApi = `http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[${categ}]&pretty=true`
    // console.log(btnClass)
    console.log(newApi)
    displayData(newApi)
})

displayData(apiurl)