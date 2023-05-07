 let title = document.createElement("div");
 title.className="title";
 title.innerHTML="<h1>Game Store</h1>"

 document.body.append(title)

 var container = document.createElement("div")
 container.className= "container"

 var row = document.createElement("div")
 row.className="row"

 container.append(row)
 document.body.append(container)


 async function getdata(){
    var res = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
    var data = await res.json();
    console.log(data)
    try{
        for(var i=0;i<data.length;i++){
            row.innerHTML+=
            `<div class="col-lg-4 mb-4">
            <div class="card text-center" style="width: 18rem;">
            <img class="card-img-top" src="${data[i].thumb}"   alt="${data[i].title}">
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
               <p class="card-text" style="font-size:15px"><i></i></p>
               <p class="card-text"><b> Game ID: </b>${data[i].gameID} </p>
               <p class="card-text"><b>Price: $ </b>${data[i].normalPrice} </p>
               <p class="card-text"><b> Rating: </b>${data[i].dealRating}</p>
               <a href="${data[i].metacriticaLink}" target="_blank" class="btn btn-secondary">Game</a>
             
          </div>
       </div>`
      }
    }
    catch(error){
        console.log(error);
    }
 }
 getdata();


 