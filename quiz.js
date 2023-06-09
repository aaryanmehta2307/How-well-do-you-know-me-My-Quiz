var readline=require('readline-sync');
var name=readline.question("What is your name? ");
console.log("Welcome",name);
var score=0;
var result=0;
function play(question,answer){
  var useranswer=readline.question(question);
  if(useranswer==answer){
  console.log("YOU ARE RIGHT");
    score++;
    result++;
  }
  else{
  console.log("Sorry You are Wrong");
    score--;
  }
  console.log("Score is:",score);
}
console.log("Quiz Starts")


var questions =[{
  question:"Who is my crush? a) Mouni Roy    b) Disha Patani \n c) Kriti    d) Rashmika\n",
  answer:"a",
},{
  question:"Who is my biggest inspiration? a) Virat Kohli    b) My Mother \n c)MS Dhoni    d) My Father\n ",
  answer:"b",
},
 {
  question:"Name of my College \n a)Chandigarh University    b) Manipal University\n c) Chandigarh group of colleges    d) National College sirsa\n",
  answer:"a",
},              
 {
  question:"Name of my best Friend \n a)Anuj Kumar    b) Tushar Arora\n c) Mehak Taneja    d) Aman Sharma\n",
  answer:"c",
},              
 {
  question:"What i like most out of \n a)Mountains    b) Religious Places\n c) Plane Area    d) Beach\n",
  answer:"b",
}              
           ,              
 {
  question:"My Birth-place \n a)Sirsa    b) Kharian\n c) Beas    d) Hisar\n",
  answer:"a",
} ,              
 {
  question:"My fav IPL Team \n a) CSK    b) RCB\n c) MI    d) GT\n",
  answer:"b",
}   
,              
 {
  question:"I Failed in which class \n a) 8th    b) 9th\n c) 12th    d) 11th\n",
  answer:"a",
}   
    ,              
 {
  question:"When i received my first award \n a) 12th    b) 9th\n c) 1st year(clg)    d) 11th\n",
  answer:"c",
}               
   
                 ,              
 {
  question:"I am committed or single? \n a) yes    b) no\n",
  answer:"a",
}  
               ];
  
for(var i=0;i<questions.length;i++){
  var currentQue=questions[i];
  play(currentQue.question,currentQue.answer);
}
  console.log("You have answered correct:",result," out of 10");