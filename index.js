let blanceshow=document.querySelector("span")
let inputval=document.querySelector("#inputval")
let table=document.querySelector("table tbody")
let blance =2000;



function show(blance){
    return blanceshow.innerHTML= blance;
 }
 
 show(blance)
    

 


function renderobjet(){
    
   
    table.innerHTML=""
    
    objdata.forEach((el,index)=>{
        table.innerHTML +=`
            <tr>
            <td>${index + 1}</td>
            <td>${el.Beforblance}</td>
            <td>${el.Lottype}</td>
            <td>${el.Lotvalue}</td>
            <td>${el.Afterblance}</td>
            <td><button class="btn btn-danger" onclick="deleteRow(${index},${el.Beforblance})">del</button></td>
        </tr>
        
       ` 
        localStorage.setItem("objdata" , JSON.stringify(objdata))
       
    })
}

renderobjet();





function depost(){
let Fblance=blance;

blance = blance + +inputval.value

show(blance)
localStorage.setItem("blance" ,JSON.stringify(blance))

let obj={
        Beforblance: Fblance,
        Lottype:"depost",
        Lotvalue: inputval.value,
        Afterblance: blance,
   
}
objdata.push(obj)


renderobjet()   
localStorage.getItem(JSON.parse("objdata"))
inputval.value=""
}

function deleteRow(del,beforblance){
    blance = beforblance 
    objdata.splice(del , 1)
    renderobjet()
    show(blance)
}

function withdrow(){
    let Fblance=blance;
    let keybortinput=inputval.value;
    if(keybortinput > blance ){
        alert(`the number  ${keybortinput} is higher : than blance : ${blance}`)
    }else{
        blance = blance - +inputval.value
        let obj={
            Beforblance:Fblance,
            Lottype: "withdraw",
            Lotvalue: inputval.value,
            Afterblance: blance,
       
    }

    objdata.push(obj)
    

    show(blance)
    localStorage.setItem("blance" ,JSON.stringify(blance))
    }
    renderobjet() 
   

    inputval.value=""
    }

