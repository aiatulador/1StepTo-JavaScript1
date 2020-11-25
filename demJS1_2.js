var input = prompt("Takar Poriman Bolen: ")
var temp;

if(input>=0){
console.log("1000 Taka's note not available")
//for 500 taka
if(input>499){
if(input%500 >=0 && input%500<=249 ){
   console.log("500 takar note : " + (input/500).toFixed(0) )
  temp=(input%500)
}

else {  
var t500=(input/500).toFixed(0)
t500=(((t500*.5)*2)-1)
console.log("500 takar note : " + t500 )
  temp=(input%500)
}
}

//for 100 taka

if(temp>99){
  
if(temp%100 >=0 && temp%100<=49 ){
   console.log("100 takar note : " + (temp/100).toFixed(0) )
  temp=(temp%100)
}

else {  
var t100=(temp/100).toFixed(0)
 t100=(((t100*.5)*2)-1)
console.log("100 takar note : " + t100 )
  temp=(temp%100)
}
}

//for 50 taka

if(temp>49 && temp<100){
  
if(temp%50 >=0 && temp%50<=24 ){
   console.log("50 takar note : " + (temp/50).toFixed(0) )
  temp=(temp%50)
}

else {  
var t50=(temp/50).toFixed(0)
 t50=(((t50*.5)*2)-1)
console.log("50 takar note : " + t50 )
  temp=(temp%50)
}
}

//for 20 taka

if(temp>19 && temp<50){
  
if(temp%20 >=0 && temp%20<=9 ){
   console.log("20 takar note : " + (temp/20).toFixed(0) )
  temp=(temp%20)
}

else {  
var t20=(temp/20).toFixed(0)
 t20=(((t20*.5)*2)-1)
console.log("20 takar note : " + t20 )
  temp=(temp%20)
}
}

//for 10 taka

if(temp>9 && temp<20){
  
if(temp%10 >=0 && temp%10<=4 ){
   console.log("10 takar note : " + (temp/10).toFixed(0) )
  temp=(temp%10)
}

else {  
var t10=(temp/10).toFixed(0)
 t10=(((t10*.5)*2)-1)
console.log("10 takar note : " + t10 )
  temp=(temp%10)
}
}

//for 5 taka

if(temp>4 && temp<10){
  
if(temp%5 >=0 && temp%5<=2.4 ){
   console.log("5 takar note : " + (temp/5).toFixed(0) )
  temp=(temp%5)
}

else {  
var t5=(temp/5).toFixed(0)
 t5=(((t5*.5)*2)-1)
console.log("5 takar note : " + t5 )
  temp=(temp%5)
}
}

//for 2 taka

if(temp>1 && temp<5){
  
if(temp%2 >=0 && temp%2<=0.9 ){
   console.log("2 takar note : " + (temp/2).toFixed(0) )
  temp=(temp%2)
}

else {  
var t2=(temp/2).toFixed(0)
 t2=(((t2*.5)*2)-1)
console.log("2 takar note : " + t2 )
  temp=(temp%2)
}
}
  if(temp==1){
    console.log("1 takar Bangabandhu Coin")
  }
}
else console.log("Sorry Bro! You are too poor to calculate");
