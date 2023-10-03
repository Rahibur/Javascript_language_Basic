//============USE STRICT MODE=============================

// "use strict";
// MyName();
// function MyName(){
//     name="Rahib";
// }



//======================================Spread Operator(...)===========================
// let poorCountry =['bangladesh' ,'Srilanka']
// let richCountry =['USA' ,'Canada']
// let richCountries =[...poorCountry,'USA' ,'Canada']
// console.log(richCountries)



//======================================Using push===========================

// let poorCountry =['bangladesh' ,'Srilanka']
// let richCountry =['USA' ,'Canada']
// richCountry.push(poorCountry)
// console.log(richCountry)






//======================================Rest parameter===========================

// function Calculation(a,b,...numbers){
//     let sum = 0;
//     for(let i of numbers){
//         sum=sum+i;
//     }

//     console.log(sum);
// }

// Calculation(10,20,1,2,3,4)







//==========================================Dynamic Function============================

// var name=function(nameValue){
//     return nameValue;
// }
// console.log(name("Rahib"))




//==================================Local scope==========================

// function myFun(){
//     var name="a variable";
//     console.log(name);
// }

// myFun()






//==================================global scope==========================


// var name="a variable";

// function myFun(){
   
//     console.log(name);
// }

// myFun()


//-----------or----------------------


// var name="a variable";

// function myFun(){
       
// }
// console.log(name);
// myFun()







//==================================Simple for loop==========================

// var i;
// for(i=0;i<=10;i++){
//     console.log("Allah")
// }



//==================================Simple for of loop==========================

// var MyCountry=['Dhaka','Sylhet','Rangpur']
// for(let MyCity of MyCountry){
//     console.log(MyCity);
// }



//==================================object==========================
//simple
// var billGates={shirt:true,shirtColor:"offWhite",smile:true}

// console.log(billGates["shirt"])

// for(let props in billGates){
//     console.log(props+":"+billGates[props])
   
// }

//nested
// var billGatesPro={
//     Shirt:{
//         color:"offWhite",
//         Quality:"Good",
//         price:"230usd"
//     },
//     swatter:{
//         color:"Gary",
//         Quality:"Good"
//     }
// }


// console.log(billGatesPro['Shirt']['price']);

//===============================Rest parameter function===================

// function something(...x)
// {
//     console.log(x)
//     console.log(x[4])
// }
// something(1,2,3,4,"a","b")



//===========Function return===========
// function FunOne(){
//     return 20;
// }

// function FunTwo(){
//     return FunOne();
// }
// console.log(FunTwo())




//=================================Anonymous Function======================

// var myFun=function(x){
//     return x;
// }

// console .log(myFun("Hello"))

//=======using rest parameters======
// var myFun=function(...x){
//     return x;
// }
// console .log(myFun("Hello",1,2,3,4,5,6))





//===========Arrow function=========================

// var myArrow=(...X)=>{
//     console.log(X)
// }
// myArrow(1,2,3,4,5,6)


// var myArrow=()=>{
//     return "Hlwwwww"
// }
// console.log(myArrow())


//=======================simple Arrays=====================

// var myArray=["A","B"]

// var myArrayPro=new Array("A","B")

// for(let item of myArray){
//     console.log(item)
// }





//=============================Multidimensional Arrays===================


// var myArray=["A","B"]
// var toArray=["C","D"]
// var threeArray=["E","F"]
// var Word =[myArray,toArray,threeArray]
// console.log(Word[1][0])



//=============================Array destructuring===================

// var  Words=["A","B","C","D"]
// var[, , a]=Words
// console.log(a)





//=============================ES6-MAP(key)===================


// var map = new Map()


// map.set('key','Bangladesh');
// map.set('key2','India')


// console.log(map.values())
// console.log(map.keys())

// for(let mykey of map.keys()){
//     console.log(mykey)
// }





//=================================ES6 map delete(key)=====================
// var map = new Map()


// map.set('key','Bangladesh');
// map.set('key2','India')

// map.delete("key")
// for(let mykey of map.keys()){
//     console.log(mykey)
// }






//=================================ES6 map clear(key)=====================
// var map = new Map()


// map.set('key','Bangladesh');
// map.set('key2','India')

// map.clear()
// for(let mykey of map.keys()){
//     console.log(mykey)
// }






//=================================ES6 map get(key),has(key)=====================
// var map = new Map()


// map.set('key','Bangladesh');
// map.set('key2','India')

// console.log(map.get("key2"))

// if(map.has("key")){
//     console.log("Yes")
// }else{
//     console.log("No")
// }




//=================================ES6 set=====================


// var mySet=new Set()

// mySet.add('Bangladesh');
// mySet.add('India')
// mySet.add('nepal')
// mySet.add('Srilanka')

// console.log(mySet)



// //===or===

// var mySet = new Set (['A','B','C'])
// console.log(mySet);



//======delete,size,values,has
// var mySet=new Set()

// mySet.add('Bangladesh');
// mySet.add('India')
// mySet.add('nepal')
// mySet.add('Srilanka')

// mySet.delete('India')

// console.log(mySet)
// console.log(mySet.size)
// console.log(mySet.values())


// if(map.has("maldiv")){
//     console.log("Yes")
// }else{
//     console.log("No")
// }




//========================OOP part Class and object===================

// class myClass{
//     myfunction(name){
//        // console.log("Bangladesh")
//        console.log(name)
//     }
//     myfunction1(name){
//        // console.log("Nepal")
//        console.log(name)
//     }
// }

// var obj = new myClass()

// obj.myfunction("Bangladesh")
// obj.myfunction1("Nepal")


//========================OOP Constructor===================


// class MyClass{
//     constructor(){
//         console.log('Hello i am condtructor')
//     }
    
// }
// new MyClass()



//========================OOP Constructor part2===================


// class myClass{
//     constructor(a,b){
//         console.log(a+b)
//     }
// }

// new myClass(1,2)



//========================OOP Constructor part3===================


// class MyClass{
//     constructor(a,b){
//         this.firstNum=a;
//         this.secondNum=b;
//     }
//     add(){
//         let result = this.firstNum+this.secondNum;
//         console.log(result);
//     }
// }
// var obj = new MyClass(10,20)
// obj.add()



//========================Static keyword===================

// class MyClass{
    
//   static hello(){
        
//         console.log('This function is static');
//     }
// }

// MyClass.hello()




//========================Inheritance===================

// class parent{
//     hello(a){
//         console.log("hii")
//     }
//     hello1(a){
//         console.log("hlw")
//     }
// }

// class child extends parent{

// }

// var obj = new child()
// obj.hello()
// obj.hello1()



//========================Inheritance(Method overriding)===================



// class parent{
//     hello(a){
//         console.log("hii")
//     }
//     hello1(a){
//         console.log("hlw")
//     }
// }

// class child extends parent{
//     hello1(a){
//         console.log("hlw i am child class")
//     }
// }

// var obj = new child()
// obj.hello()
// obj.hello1()









//===========================Super Keyword=========================

// class parent{
//     hello(a){
//         console.log("hii")
//     }
//     hello1(a){
//         console.log("hlw")
//     }
// }

// class child extends parent{
//     hello2(){
//         super.hello()
//         super.hello1()
//     }
// }

// var obj = new child()
// obj.hello2()








 






























