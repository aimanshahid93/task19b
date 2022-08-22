document.body.innerHTML=`<div class="heading-container">
<h1>Bob Burgers</h1>
</div>
<div class="maincontainer" id="main">
</div>;
`
let getdata=async()=>{
    try{ 
      let data=await fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=268")
      newdata=await data.json();
      console.log(newdata);
      newdata.forEach((element)=>{
        displaydata(element);
    })
  }catch(error){
      console.log("oops!there was an error",error)
    }
  }
  getdata();
  const displaydata=(obj)=>{
    main.innerHTML +=
    `<div class="container">
      <h3>Name:${obj.name}</h3>
      <img  id="image" src="${obj.image}" alt="image"</img>
      <p>Occupation:${obj.occupation}</p>
      <p>Gender:${obj.gender}</p>
      <p>First Episode:${obj.FirstEpisode}</p>
     </div>`
  }