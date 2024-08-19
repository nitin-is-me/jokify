async function getData(){
    let data=await axios.get("https://official-joke-api.appspot.com/random_joke");
    console.log(data);
    document.getElementById("joke").innerText=data.data.setup;
    document.getElementById("punch").innerText=data.data.punchline;    
}

getData();
document.getElementById("reload").addEventListener("click", getData)

//learn to use javascript inbuilt fetch() method first, then move to axios
