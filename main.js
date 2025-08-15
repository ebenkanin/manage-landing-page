const mobileMenuBtn = document.getElementById('mobilemenuBtn');
const modalBtn = document.getElementById('modalBtn');
const modal = document.querySelector('.modal');
const mobileLinks = document.getElementById('mobile-links')
const ctaMobile =document.getElementById('cta-mobile')

const modalLnk = document.querySelectorAll('.modal-lnk')

// adding event listener to the mobile btn

mobileMenuBtn.addEventListener('click', function openMobileMenu(){
    if(mobileMenuBtn.classList.contains('open')){
        mobileMenuBtn.classList.remove('open')
        modal.classList.add('hidden')
        mobileLinks.classList.add('hidden')

    }else{

        mobileMenuBtn.classList.add('open')
        mobileMenuBtn.classList.add('hidden')
        modal.classList.remove('hidden')
        modalBtn.classList.remove('hidden')
        mobileLinks.classList.remove('hidden')
        mobileLinks.classList.add('flex')

    }
})


//adding event listener to the modal btn


modalBtn.addEventListener('click', function closeModal(){
    modalBtn.classList.toggle('hidden')
    modal.classList.add('hidden')
    mobileMenuBtn.classList.remove('hidden','open')
    mobileLinks.classList.add('hidden')
})

// adding event listeners to the mobile menu links

for(let i=0; i<modalLnk.length; i++){
    // adding event listeners to each link

    modalLnk[i].addEventListener('click', function GoToMobileLink(){

        

    modalBtn.classList.toggle('hidden')
    modal.classList.add('hidden')
    mobileMenuBtn.classList.remove('hidden','open')
    mobileLinks.classList.add('hidden')

    })
}

ctaMobile.addEventListener('click',function(){
    
    modalBtn.classList.toggle('hidden')
    modal.classList.add('hidden')
    mobileMenuBtn.classList.remove('hidden','open')
    mobileLinks.classList.add('hidden')

})



const images =[]

images[0] = 'image1.jpg'
images[1] = 'image2.jpg'
images[2] = 'image3.jpg'

console.log(images)