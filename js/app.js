
async function fetchData(){
    let loading = false;
    try{
        loading = true;
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        if(response.ok){
            let data = await response.json();
            displayResult(data);
           
        }
    }catch(error){
        console.error(error);
    }finally{
        loading = false;
    }
  
}

function displayResult(data){
    data.categories.forEach((m) => {
        let mealsContainer = document.getElementById("mealsContainer");
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.innerHTML = m.strCategory;
        let img = document.createElement("img");
        img.src = m.strCategoryThumb;

        div.appendChild(img);
        div.appendChild(h2);

        mealsContainer.appendChild(div);
    });
}

fetchData();
