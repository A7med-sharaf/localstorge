let blanceshow=document.querySelector("span")
let inputval=document.querySelector("#inputval")
let table=document.querySelector("table tbody")
let blance =+localStorage.getItem("blance");
console.log(typeof blance);

function show(blance){
    return blanceshow.innerHTML=JSON.parse(blance);
 }
 
 show(blance)
    

let data=localStorage.setItem("data" ,JSON.stringify(objdata))






 


function renderobjet(){
    let rendervalue=localStorage.getItem("data")
    table.innerHTML=""
    JSON.parse(rendervalue).forEach((el,index)=>{
     
        table.innerHTML +=`
            <tr>
            <td>${index + 1}</td>
            <td>${el.Beforblance}</td>
            <td>${el.Lottype}</td>
            <td>${el.Lotvalue}</td>
            <td>${el.Afterblance}</td>
            <td><button class="btn btn-danger" onclick="deleteRow(${index},${el.beforblance})">del</button></td>
        </tr>
        
       ` 
        
        console.log(el);
    })
}

renderobjet();





function depost(){
let Fblance=JSON.parse(blance);
blance = blance + +inputval.value
blance=+localStorage.setItem("blance", blance)

show(blance)


let obj={
        Beforblance: Fblance,
        Lottype:"depost",
        Lotvalue: inputval.value,
        Afterblance: blance,
   
}
data.push(obj)
localStorage.setItem("data" , data)

renderobjet()   
inputval.value=""
}

// function deleteRow(del,beforblance){
//     blance = beforblance 
//     objdata.splice(del , 1)
//     renderobjet()
//     show(blance)
// }

// function withdrow(){
//     let Fblance=blance;
//     let keybortinput=inputval.value;
//     if(keybortinput > blance ){
//         alert(`the number  ${keybortinput} is higher : than blance : ${blance}`)
//     }else{
//         blance = blance - +inputval.value
//         let obj={
//             beforblance:Fblance,
//             LogType:"withdraw",
//             Logvalue: inputval.value,
//             afterblance: blance
       
//     }
//     objdata.push(obj)
    
    
//         show(blance)
//     }
//     renderobjet() 
//     inputval.value=""
//     }

