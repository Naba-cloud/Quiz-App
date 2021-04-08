// function getdata()
// {
//     let datacur=document.querySelector('.form');
//     fetch('https://opentdb.com/api.php?amount=5')
//     .then(response => response.json())
//     .then(data =>{ console.log(data)
//         datacur.innerHTML=data.value;})
//       .catch(err =>console.error())

//     }
    //https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple
    let questions=['What is the CPU stand for','What is html stand for','What Css stand for ','Where to put Javascript Tag','React is a library of'];
    let ans=['Central Pocessing Unit','Hyper Text Markup Language','Cascading Style Sheet','Both a and b','Javascript'];
    let a=document.querySelector('#q1');
    // console.log(a);
    a.textContent=questions[0];
    console.log(a);
    let b=document.querySelector('#q2');
    b.textContent=questions[1];
    let c=document.getElementById('q3');
    c.textContent=questions[2];
    let d=document.getElementById('q4');
    d.textContent=questions[3];
    let e=document.getElementById('q5');
    e.textContent=questions[4];
    
   function score()
   {
       let scr=0;
       let wans=0;
       let f=document.getElementById('q1op1');
       
       if(f.checked==true)
       {
          scr++;
        //   console.log(scr);
       }
       else{
          
            //    scr=0;
               wans++;
           }
           
       
       let g=document.getElementById('q2op1');
       if(g.checked==true)
       {
        scr++;
        // console.log(scr);
       }
       else{
           wans++;
           }
       let h=document.getElementById('q3op2');
       if(h.checked==true)
       {
           scr++;
        //    console.log(scr);
       }
       else{
       wans++;
        }
    let i=document.getElementById('q4op3');
    if(i.checked==true)
    {
        scr++;
        //    console.log(scr);
    }
    else{
       wans++;
    }
    let j=document.getElementById('q5op2');
    if(j.checked==true)
    {
        
        scr++;}
    //     console.log('your score from 5 questions is');
    //        console.log(scr);
    // }
    else{
        wans++;
       
    }
document.getElementById('rightans').textContent=scr;

document.getElementById('wrongans').textContent=wans;
    // console.log('your score from 5 questions is');
        //    console.log(scr);
        //    console.log('your wrong ans from 5 questions is');
        //    console.log(wans);

}