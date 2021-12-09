// // Q 8

// var StdName = []
// var StdNo = []
// var Score;


// StdName.push(prompt("Enter Student Name"))
// StdNo.push(prompt("Enter Student Marks"))
// StdName.push(prompt("Enter Student Name"))
// StdNo.push(prompt("Enter Student Marks"))
// StdName.push(prompt("Enter Student Name"))
// StdNo.push(prompt("Enter Student Marks"))



// for (let i = 0; i < StdNo.length; i++) {
//     Score = StdNo[i] / 500 * 100;
//     console.log(StdName[i] +"Score Is "+ StdNo[i] +" & Percentage is " + Score +".")
// }


// // Q 9

//  var Colors = ['Red','Green','Blue']
//  var AddColor;
//  var Addindex ;

//  console.log("List Of Colors \n" + Colors)
//  console.log("What Color You Want To Add in Start ?")
//  Colors.unshift(prompt("Add Color"))
//  console.log("List Of Colors \n" + Colors)

//  console.log("What Color You Want To Add in End ?")
//  Colors.push(prompt("Add Color"))
//  console.log("List Of Colors \n" + Colors)

//  console.log("What Color You Want To Add in Start ?")
//  Colors.unshift(prompt("Add Color"))
//  Colors.unshift(prompt("Add Color"))
//  console.log("List Of Colors \n" + Colors)

//  Colors.pop()
//  console.log("List Of Colors \n" + Colors)

//  AddColor = prompt("Add Color")
//  Addindex = prompt("Add Index")

//  Colors.splice(Addindex,0,AddColor)
//  console.log("List Of Colors \n" + Colors)

//  var removeColor = prompt(" Color Index")
//  var removeIndex = prompt(" Color Index")

//  Colors.splice(removeColor,removeIndex)
//  console.log("List Of Colors \n" + Colors)




//  // Q 10

//  var StdNo = []

// for (let i = 0; i < 5; i++) {
//     StdNo.push(+prompt("Enter Student Marks"))
// }
// console.log(StdNo.sort((function(a,b){return a-b})));
// console.log(StdNo.sort().toString())



//  // Q 11

//  var Citys = ['karachi','Islamabad','Quetta','peshawar','lahore']
//  console.log(Citys.slice(1,3))

//  // Q 12
//  var Citys = ['This','Is','My','Cat']
//  console.log(Citys.join(' ',','))


//  // Q 13
 var Citys = ['karachi','Islamabad','Quetta','peshawar','lahore']
for (let i = 0; i < Citys.length; i++) {
    console.log(i+1 + ' ' + Citys[i])
 }

// // Q 14
//   var Citys = ['karachi','Islamabad','Quetta','peshawar','lahore']
//  for (let i = Citys.length -1 ; i >= 0 ; i--) {
//     console.log(i+1 + ' ' + Citys[i])
//  }





 var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
var size =matrix.length;
document.write(size);

for(var i=0;i<3;i++)
{
    for(var j=0;j<4;j++)
    { 
        document.write(matrix[i][j]);
    }
    document.write("<br>");
}