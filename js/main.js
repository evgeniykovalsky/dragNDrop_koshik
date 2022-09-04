'use strict';

const dragAndDrop=()=>{
    const cards=document.querySelectorAll('.js-card');
    const cell=document.querySelector('.js-sell');
    const num=document.querySelector('#num');
    const fruct=document.querySelectorAll('.fruct');
    const smallpict=document.querySelector('.smallPictures1');
    let card;
    let count=0;
    
    const dragStart=function(elem){
       card=elem.target;

        setTimeout(()=>{
            this.classList.add('hide');
        },0)
  
    }
    const dragEnd=function(){
        
       this.classList.remove('hide');
      
    }
    const dragOver=function(evt){
        evt.preventDefault();
     
       
     }
     const dragEnter=function(evt){
        evt.preventDefault();
        this.classList.add('hovered');
        
      }
      const dragLeave=function(){
        
      this.classList.remove('hovered');
        
      }
      const dragDrop=function(){
        
      this.append(card);
      this.classList.remove('hovered');
      count++;
      num.innerText=count;
        
      }
      const dragDrop1=function(){
        
        this.append(card);
        this.classList.remove('hovered');
        count--;
        num.innerText=count;
          
        }

    cell.addEventListener('dragover',dragOver );
    cell.addEventListener('dragenter',dragEnter );
    cell.addEventListener('dragleave',dragLeave );
    cell.addEventListener('drop',dragDrop );




    cards.forEach(element => {
        
        element.addEventListener('dragstart',dragStart);
       
    });
    cards.forEach(element => {
        
        element.addEventListener('dragend',dragEnd);
    });
    ////////////////////////
    fruct.forEach(element => {
        
        element.addEventListener('dragstart',dragStart);
       
    });
    fruct.forEach(element => {
        
        element.addEventListener('dragend',dragEnd);
    });
    smallpict.addEventListener('dragover',dragOver );
    smallpict.addEventListener('dragenter',dragEnter );
    smallpict.addEventListener('dragleave',dragLeave );
    smallpict.addEventListener('drop',dragDrop1 );


}

dragAndDrop();
