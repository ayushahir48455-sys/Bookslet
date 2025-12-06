const questions={
  maths:[
    {q:"5 + 3 = ?",o:["6","7","8","10"],a:2},
    {q:"9 - 4 = ?",o:["5","7","3","6"],a:0}
  ],
  gk:[
    {q:"National Animal?",o:["Tiger","Lion","Cat","Dog"],a:0},
    {q:"Capital of India?",o:["Mumbai","Delhi","Kolkata","Pune"],a:1}
  ],
  cricket:[
    {q:"God of Cricket?",o:["Dhoni","Kohli","Sachin","Rohit"],a:2},
    {q:"Players in team?",o:["9","10","11","12"],a:2}
  ]
};

let current=[],index=0,score=0;

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.add("hide"));
  document.getElementById(id).classList.remove("hide");
}

function login(){
  let name=document.getElementById("usernameInput").value.trim();
  if(!name) return alert("Enter name first!");
  document.getElementById("usernameDisplay").innerText=name;
  show("homeScreen");
}

function startQuiz(cat){
  current=questions[cat]; index=0; score=0;
  document.getElementById("quizTitle").innerText=cat.toUpperCase()+" Quiz";
  show("quizScreen"); loadQ();
}

function loadQ(){
  let q=current[index];
  document.getElementById("questionText").innerText=q.q;

  let box=document.getElementById("optionsBox");
  box.innerHTML="";
  q.o.forEach((op,i)=>{
    let btn=document.createElement("button");
    btn.innerText=op;
    btn.onclick=()=>check(i,btn,q.a);
    box.appendChild(btn);
  });
}

function check(i,btn,correct){
  document.querySelectorAll("#optionsBox button").forEach(b=>b.disabled=true);
  if(i==correct){btn.classList.add("correct");score++;}
  else{
    btn.classList.add("wrong");
    document.querySelectorAll("#optionsBox button")[correct].classList.add("correct");
  }
}

function nextQuestion(){
  index++;
  if(index<current.length) loadQ(); else finish();
}

function finish(){
  document.getElementById("finalScore").innerText=`${score}/${current.length}`;
  show("resultScreen");
}

function goHome(){show("homeScreen");}
