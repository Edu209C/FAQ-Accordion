

 const hero_texts = document.querySelectorAll('.hero__texts');
 

	for(let i=0; i<hero_texts.length;i++){
		
		hero_texts[i].addEventListener('click', function(){
			
			const iconMinus = this.querySelector('.icon__minus');
            const iconPlus = this.querySelector('.icon__plus');
            const answer = this.querySelector('.hero__answer');
			
			if (answer.style.display == 'block' ) {
                iconPlus.style.display = 'block';
                iconMinus.style.display = 'none';
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
                iconMinus.style.display = 'block';
                iconPlus.style.display = 'none';
            }
		})
		
	}





