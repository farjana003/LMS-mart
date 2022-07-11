const faq_body = document.querySelectorAll(".faq_details");
const icon = document.querySelectorAll('.faq_icon i');

faq_body.forEach(faq_details =>{
   faq_details.addEventListener('click' , (e) =>{
      const child_icon = faq_details.querySelector('.faq_icon i');

      
      if(!faq_details.classList.contains('open')){
        faq_body.forEach(el => el.classList.remove('open'))
        icon.forEach(el => el.classList.add('fa-plus'));
        faq_details.classList.add('open');

        if(child_icon.classList.contains('fa-plus')){

          child_icon.classList.remove('fa-plus')
          child_icon.classList.add('fa-minus')
        }

      }

      else{
        faq_details.classList.remove('open')
        
        if(child_icon.classList.contains('fa-minus')){

          child_icon.classList.remove('fa-minus')
          child_icon.classList.add('fa-plus')
        }

      }
     
   })
})

