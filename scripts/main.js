async function apiCall(url) {

    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log("err",err);
    }

    //add api call logic here


}

let dataArr=[]||JSON.parse(localStorage.getItem("clicked_images"));

function appendArticles(articles, main) {


    articles.forEach(function(ele){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.urlToImage;
        image.setAttribute("id","images");
        let p = document.createElement("p");
        p.innerText = ele.title;

        div.append(image,p);

        div.onclick = () => {
            let data =  dataArr.push(ele);
            localStorage.setItem("clicked_images",JSON.stringify(data));
        };

        main.append(div);
    });

    //add append logic here

}

export { apiCall, appendArticles }