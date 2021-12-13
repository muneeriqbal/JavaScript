// var value1;
// var value2;
// var Operation;
// var Calculation = ['A : Addition','B : Substraction','C : Multiplication','D : Division'];


// alert("Start Your Calculation")
// value1 = +prompt("Enter First Value")
// value2 = +prompt("Enter Second Value")
// Operation =  prompt(Calculation)
// Operation =  Operation.toUpperCase()


// function Cal(V1,V2,Opt){
// var Result
//     if (Opt == "A" ) {
//         Result =  value1 + value2
//     } 
//     else if (Opt == "B" ) {
//         Result =  value1 - value2
//     }
//     else if (Opt == "C" ) {
//         Result =  value1 * value2    
//     }
//     else if (Opt == "D" ) {
//         Result =  value1 / value2
//     }
//     else {
//         alert("Something Wrong : Do It Again.")
//     }

// document.write("Ans is = "+ Result)
// }

// Cal(value1,value2,Operation)


var Subject = [['Eng'],['Urd'],['Sci'],['Math'],['Phy']];



// function Percentage(v1,v2,v3,v4,v5){
//     var TotalObt = v1 + v2+ v3+ v4+ v5
//     var Per =  (TotalObt / 500) * 100

//    return Per;
// }

for (let i = 0; i < 5; i++) {
    Subject[i].push(+prompt(Subject[i] + " Marks Taken is ")) ;
}


Percentage(Subject[0].indexOf[1],ObtMarks[1],ObtMarks[2],ObtMarks[3],ObtMarks[4])


//document.write("Percentage is : " + Ans)  





document.write( "Obtained Marks : ")   

for (let index = 0; index < Subject.length; index++) {     
    document.write(Subject[index].join(':',',') + "<br/>") 


}

document.write("Total Marks : 500" +"<br/>")

Percentage(ObtMarks[0],ObtMarks[1],ObtMarks[2],ObtMarks[3],ObtMarks[4])


//document.write("Percentage is : " + Ans)  
