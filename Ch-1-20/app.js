// Chapter 1
// alert("Welcome To This Website")
// alert("Error! Please Enter a valid Password")
// alert("Welcome to JS Land" + "\n" + "Happy Coding!")
// alert("Welcome to JS Land" )
// alert("Happy Coding!" )
// alert("Hello... I can run JS through my web browser's console" )


// Chapter 2

// var username = 'Muneer'

// var myname='Muneer Iqbal'

// var message ='Hello World'

// alert( message)

// var studentname=prompt("Enter your Name")
// var studentage =+prompt("Enter your age")
// var studentskill =prompt("Enter your Skills")

// alert(studentname)
// alert(studentage)
// alert(studentskill)


// var food ="pizza"
// var array=[]
// for(var i=food.length;i>0;i--){    
//     a=food.slice(0,i)
//     array+=a + "\n"
// }

// alert(array)



// var email="MuneerIqbal@gmail.com"

// alert("My Email is " + email)

// var quote="A smarter way to learn JavaScript"

// alert("I am trying to learn from the Book " + quote)



// Chapter 3

// var age=18

// alert("i am " + age + " years old")



// var visits=+prompt("how many times you visit our store")

// alert("i have visted this store " + visits + " times")

// var birthyear=+prompt("what is your Birth Year")

// alert("My BirtyYear is  " + birthyear )


// var Store="chase"
// var customer=prompt("Name of Customer")
// var product=prompt("Name of Product")
// var qty=+prompt("Name of qty")


// alert(customer +  " ordered " + qty + product + " from " + Store)


// // Chapter 4

// var  store="pakistan"
// var garrage="store"
// var country="Australia"
// var 123Country
// var %country
// var -country



// Chapter 5


// var a= +prompt("Enter First Num")
// var b= +prompt("Enter second Num")

// var c = a+b

// alert ("Sum of " + a + " and " + b + " is " + c)
// var a= +prompt("Enter First Num")
// var b= +prompt("Enter second Num")

// var c = a-b

// alert ("Sum of " + a + " and " + b + " is " + c)
// var a= +prompt("Enter First Num")
// var b= +prompt("Enter second Num")

// var c = a+b

// alert ("Subtraction of " + a + " and " + b + " is " + c)
// var a= +prompt("Enter First Num")
// var b= +prompt("Enter second Num")

// var c = a*b

// alert ("Multiplication of " + a + " and " + b + " is " + c)




// var TicketPrice=700
// var TicketQty=prompt("How many ticket you want ")
// var total

// total=TicketPrice*TicketQty
// alert("Total Cost to buy "+TicketQty+" ticket is "+ total)



// var table=+prompt("enter no")
// var range=+prompt("enter your range")

// for(i=0;i<=range;i++)
// {
// var total= table* i
//     console.log( table +" * "+ i + " = " +  total)
// }


// var Celsiustemp=+prompt("Enter your Celsius Temperature")
// var FerTemp=+prompt("Enter your Ferhinite Temperature")

// var ferconversion=(Celsiustemp * 9/5) +32
// var celconversion=(FerTemp - 32 ) *5/9

// alert(Celsiustemp +"*C " + " is " + ferconversion +"*F " + " \n "+ FerTemp +"*F " + " is "+ celconversion +"*C "  )

// var item1=150
// var item2=250
// var item3=50


// var OrderQty1=+prompt("enter the qty")
// var OrderQty2=+prompt("enter the qty")
// var OrderQty3=+prompt("enter the qty")
// totalqty1=item1*OrderQty1
// totalqty2=item2*OrderQty2
// totalqty3=item3*OrderQty3
// sum=totalqty1+totalqty2+totalqty3
// alert("Price of Item 1 is " + item1 +"\n"
// +" qty of item 1 is " + OrderQty1  +"\n"
//         + "Price of Item 2 is " + item2 + "\n"
//         +" qty of item 2 is " + OrderQty2  +"\n"
//         +"Price of Item 3 is " + item3  +"\n"
//         +" qty of item 3 is " + OrderQty3  +"\n"
//         + " Your Total Value is " + sum)

// var physics=+prompt("Enter Physics Marks")
// var English=+prompt("Enter English Marks")
// var Urdu=+prompt("Enter Urdu Marks")
// var Maths=+prompt("Enter Maths Marks")
// var Islamiat=+prompt("Enter Islamiat Marks")
// var MarksObtained=physics+English+Urdu+Maths+Islamiat
// var TotalMarks=500
// var Per=(MarksObtained/TotalMarks)*100
// alert("Your Percentage is " + Per)



// var saudConv=28
// var dollarConv=110
// var dollar=+prompt("Enter your dollar currency")
// var Suadi=+prompt("Enter your Saudi currency")

// sumSaudi=Suadi*saudConv
// sumdollar=dollar*dollarConv

// totalsum=sumSaudi+sumdollar

// alert("our total currency in PKR RS is " + totalsum)



// Chapter 6-9

// var a =10 
// console.log("The value of a is " + a)
// a=++a
// console.log("The value of ++a is " + a)
// console.log("Now The value of a is " + a)
// a=a++
// console.log("The value of a++ is " + a)
// a=++a
// console.log("Now The value of a is " + a)
// a=--a
// console.log("The value of a-- is " + a)
// console.log("Now The value of a is " + a)
// console.log("The value of a is " + a)
// a=--a
// console.log("The value of a-- is " + a  )


// var userBirthYear=prompt("Enter Your Birth Year")
// var userminutes= userBirthYear * 525600
// var usermilisecond=userminutes * 60000

// console.log("this "+ userBirthYear+     " Birthyear is = " + usermilisecond + " miliseconds")


// var userday=userBirthYear * 365
// var userminutes = userBirthYear *   525600

// console.log(userday)
// console.log(userminutes)


// console.log(usermonths)



// var currentyear=new Date()
// var currentMilisecond=currentyear.getTime()
// console.log(currentMilisecond)


// finalmilisecond = currentMilisecond - usermilisecond

// console.log(finalmilisecond + " final mili second")




// var finalminutes=finalmilisecond/ 60000
// var finaldays=finalminutes/ 1440
// var finalyear = finaldays/365

// console.log(finalminutes)
// console.log(finaldays)
// console.log(finalyear)




// var currentDay= currentyear.getDay()
// var currentDate= currentyear.getDate()
// var currentMonth= currentyear.getMonth()
// var currentYear= currentyear.getFullYear()


// console.log(currentDay)
// console.log(currentMonth)
// console.log(currentYear)
// console.log(currentDate)

// for current date
// var currdate = new Date()
// var currtime = currdate.getTime()
// var currYear = currdate.getFullYear()

// console.log("currtime in miliseconds " + currtime )
// console.log("Curryear in Year " + currYear )

// for user date
// var userBirthYear=prompt("Enter Your Birth Year")
// var userminutes= userBirthYear * 525600
// var usermilisecond=userminutes * 60000
// console.log("this "+ userBirthYear+     " Birthyear is = " + usermilisecond + " miliseconds")


// for final calculation years 
// finalcalculation=currtime-usermilisecond
// console.log(finalcalculation)

// var finalminutes=finalcalculation/ 60000
// var finaldays=finalminutes/ 1440
// var finalyear = finaldays/365

// console.log(finalyear)


// var year= currYear-userBirthYear
// console.log(year)


// var udate = new Date(year)
// var uyear= udate.getFullYear()
// console.log(uyear)




// var userday=userBirthYear * 365
// var userminutes = userBirthYear *   525600
// console.log(userday)
// console.log(userminutes)
// console.log(usermonths)



// var userNAme=prompt("enter your name")
// console.log("welcome " + userNAme)


// var num =+prompt("Enter the number")

// if (num==''){
// num=5
//     for(i=0;i<=12;i++){
//             total=num*i
//             console.log(num+ " * " + i +" = " + total )
//     }

// }else{
    
//     for(i=0;i<=12;i++){
//         total=num*i
//         console.log(num+ " * " + i +" = " + total )
// }
// }


// var sub1=prompt("enter subject1 name")
// var sub2=prompt("enter subject2 name")
// var sub3=prompt("enter subject3 name")
// var marks1=+prompt("enter your marks for " + sub1)
// var marks2=+prompt("enter your marks for " + sub2)
// var marks3=+prompt("enter your marks for " + sub3)
// var totalmark= 100
// var obtainedmarks=marks1+marks2+marks3
// var per=(obtainedmarks/totalmark)*100

// console.log(per)

// Chapter 9-11

// var city=prompt("enter city name")
// city=city.toLowerCase()
// if(city=='karachi'){
//     console.log("welcome to city of lights")
// }
// var gender=prompt("enter your gender")
// gender=gender.toLowerCase()
// if(gender=='male'){
//     console.log("Good Morning Sir")
// }else{
//     console.log("Good Morning Miss  ")
// }

// var signalcolor=prompt("enter Color")
// signalcolor=signalcolor.toLowerCase()
// if(signalcolor=='red'){
//     console.log("Must Stop")
// }else if(signalcolor=='yellow'){
//     console.log("Ready to Move  ")
// }else{
//     console.log("Move now ")
// }


// var fuel=+prompt("enter your fuel ")
// if (fuel<=0.25){
//     console.log("please refill your tank")

// }else{
//     console.log(" your tank is ok")
// }


// var randmnum=Math.floor ((Math.random() * 10));      

// var usernum=+prompt("Enter Your Number");

// if(usernum==randmnum){
//     console.log("Bingo you guess The right number "+ usernum);
    
// }else if (usernum+1==randmnum){
//     console.log("Close Enough to the Correct No number "+ usernum);
    
// }else{
    
//     console.log("Wrong guess "+ usernum);
// }

// var usernum=+prompt("enter the num")
// if (usernum%3==0){
    
//         console.log("divisible by 3 ")
//     }else{
        
//             console.log("not divisible by 3 ")
//         }
// }
        
        
        
        

// var usernum=+prompt("enter the num")
//  if(usernum%2==0){
//  console.log("even no ")
// }else{
    
//     console.log("odd no ")
// }
// var usernum=+prompt("enter the num")
//  if(usernum<=10){
//  console.log("Its to cold outside ")
// }else if ( usernum>10 && usernum<=20){
    
//     console.log("Today’s Weather is cool.")
// }else if ( usernum>20 && usernum<=30){
    
//     console.log("The Weather today is Normal")
// }else{
//     console.log("It is too hot outside.")

// }

// var num1=+prompt("enter Number1")
// var num2=+prompt("enter Number2")
// var opr=prompt("enter operator")

// if(opr=='+'){
//     console.log(num1+num2)
// }else if (opr=='-'){
//     console.log(num1-num2)
    
// }else if (opr=='*'){
//     console.log(num1*num2)
    
// }else if (opr=='/'){
//     console.log(num1/num2)
    
// }else{
    
//     console.log("undefined operator")
// }

// var num1=+prompt("enter first no")
// var num2=+prompt("enter second no")

// if(num1>num2){
//     console.log(num1 +  " num1 is greator than num 2 "+ num2)
// }else if(num1==num2){
//     console.log(num1 +  " num1 is is equals to num 2 "+ num2)
    
// }else{
//     console.log(num2 +  " num2 greator than num 1 "+ num1)

// }

// var para=prompt("")
// if(para.charAt(0)=='a' || para.charAt(0)=='e' ||  para.charAt(0)=='i' || para.charAt(0)=='o' || para.charAt(0)=='u'  ){
//     console.log("the first character of the para is vowel")
// }else{
//     console.log("the first character of the para is not a vowel")

// }
// var pass="ahmed shabbir"
// var upass=prompt("enter the pass")
// if (pass==upass){
//     console.log("Correct! The password you entered matches the original password " + upass)
// }else if(upass==0){
    
//     console.log("Please enter the  Paswword ")

// }else if (pass!=upass){
//     console.log("Incorrect Paswword " + upass)
// }



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



// var Colors = ['Red','Green','Blue']
// var AddColor;
// var Addindex ;

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

// AddColor = prompt("Add Color")
// Addindex = prompt("Add Index")

// Colors.splice(Addindex,0,AddColor)
// console.log("List Of Colors \n" + Colors)

// var removeColor = prompt(" Color Index")
// var removeIndex = prompt(" Color Index")

// Colors.splice(removeColor,removeIndex)
// console.log("List Of Colors \n" + Colors)

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


// Q 9

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




//  Q 10

//  var StdNo = []

// for (let i = 0; i < 5; i++) {
//     StdNo.push(+prompt("Enter Student Marks"))
// }
// console.log(StdNo.sort((function(a,b){return a-b})));
// console.log(StdNo.sort().toString())



//  Q 11

//  var Citys = ['karachi','Islamabad','Quetta','peshawar','lahore']
//  console.log(Citys.slice(1,3))

//  Q 12
//  var Citys = ['This','Is','My','Cat']
//  console.log(Citys.join(' ',','))


//  Q 13
//  var Citys = ['karachi','Islamabad','Quetta','peshawar','lahore']
// for (let i = 0; i < Citys.length; i++) {
//     console.log(i+1 + ' ' + Citys[i])
//  }

// Q 14
//   var Citys = ['karachi','Islamabad','Quetta','peshawar','lahore']
//  for (let i = Citys.length -1 ; i >= 0 ; i--) {
//     console.log(i+1 + ' ' + Citys[i])
//  }


//  Chapter 17-20   ARRAYS AND LOOP

// question1
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var miltiArray=[[1,"one"],[2,"two"],[3,"three"],[4,"four"]]; 


// question2
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// var size =matrix.length;
// for(var i=0;i<3;i++)
// {
//     for(var j=0;j<4;j++)
//     { 
//         document.write(matrix[i][j]);
//     }
//     document.write("<br>");
// }


// question3
// 3. Write a program to print numeric counting from 1 to 10.
// for(var i=0;i<10;i++)
// {
//     document.write((i+1)+"<br>");
// }


// question4
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var number = prompt("Enter a number to show its multiplication table");
// number=parseInt(number);
// var mul;
// var length=prompt("Enter the length of multiplication table");
// length=parseInt(length);
// while(length===-1||length===0)
// {
//     alert("Please! Enter a positive number for length");
//     length=prompt("Enter the length of multiplication table");
//     length=parseInt(length);
//     if(length>0)
//     {
//         break;
//         alert("Correct Now see the table");
//     }
// }
// document.write("Multiplication table of &nbsp;"+number+"<br>");
// document.write("Length &nbsp;"+length+"<br>");
// for(var i=1;i<=length;i++)
// {
//     mul=number*i;
//     document.write("<br>"+number+" x "+i+" = "+mul);
// }


// question5
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]
// var fruits = ["apple","banana","mango","orange","strawberry"];
// var size=fruits.length;
// for(var i=0;i<size;i++)
// {
//     document.write(fruits[i]+"<br>");
// }
// for(var i=0;i<size;i++)
// {
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }



// question6
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<b>Counting:</b><br>");
// for(var i=1;i<=15;i++)
// {
//     document.write(i+" , ");
// }
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<br><br><b>Reverse Counting:</b><br>");
// for(var i=15;i>=1;i--)
// {
//     document.write(i+" , ");
// }
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<br><br><b>Even:</b><br>");
// for(var i=0;i<=20;i=i+2)
// {
//     document.write(i+" , ");
// }
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<br><br><b>Odd:</b><br>");
// for(var i=1;i<=20;i=i+2)
// {
//     document.write(i+" , ");
// }
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<br><br><b>Series:</b><br>");
// for(var i=0;i<=20;i=i+2)
// {
//     document.write(i+"k, ");
// }



// question7
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var A = ["cake","apple pie","cookie","chips","patties"];
// var search=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
// var size=A.length;
// var check=false;
// for(var i=0;i<=size;i++)
// {
//     if(search===A[i])
//     {
//         alert(search+" is available at index "+(i+1)+" of our bakery");
//         check=true;
//         break;
//     }
// }
// if(check==false)
// {
//     alert("We are sorry "+search  +" is not available in our bakery");
// }


// question8
// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
// var  A = [24, 53, 78, 91, 12];
// var size=A.length;
// var larger=A[0];
// document.write("Array items: "+A.join(" , "));
// for(var i=0;i<size;i++)
// {
//     if(A[i]>larger)
//     {
//         larger=A[i];
//     }
// }
// document.write("<br>The largest number is "+larger+"<br><br>");



// question9
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// var  A = [24, 53, 78, 91, 12];
// var size=A.length;
// var small=A[0];
// document.write("Array items: "+A.join(" , "));
// for(var i=0;i<size;i++)
// {
//     if(A[i]<small)
//     {
//         small=A[i];
//     }
// }
// document.write("<br>The smallest number is "+small+"<br><br>");



// question10
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
// for(var i=1;i<=100;++i)
// {
//     if(i%5==0)
//     {
//         document.write(i+" , ");
//     }
// }