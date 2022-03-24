// Your code here
let div = document.getElementById("films")
let div1 = document.createElement('ul')

const request = async()=>{
    let req = await fetch ('http://localhost:3000/films')
    let res = await req.json()
    console.log(res)
    
    res.forEach(element => {
        console.log(element.title)
        let films = document.querySelectorAll("#films li")
        films.innerText=element.title
        console.log(films)
        
        
        let movieDes = document.getElementById("film-info")
        movieDes.innerHTML = element.description
        let movieTitle = document.getElementById("title")
        movieTitle.innerHTML= element.title
        let runtime= document.getElementById("runtime")
        runtime.innerHTML=`${element.runtime} minutes`
        let showtime = document.getElementById("showtime")
        showtime.innerHTML=element.showtime
        let poster =document.getElementById("poster")
        poster.setAttribute('src',element.poster)
        let ticketNum = document.getElementById("ticket-num")
        ticketNum.innerHTML=element.tickets_sold
        document.getElementById("buy-ticket").addEventListener('click',()=>{
            let updatedTicket = --element.tickets_sold
            if(updatedTicket<=0) return ticketNum.innerText = "sold out"
            ticketNum.innerHTML=`${updatedTicket}`
        })

    });


}

request()