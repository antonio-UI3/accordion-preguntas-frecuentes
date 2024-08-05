const faqHeaders = document.querySelectorAll('.faq-dropdown-header');


faqHeaders.forEach((header) =>{
    const boton = header.querySelector('.faq-icon');
    const body = header.nextElementSibling;

    boton.addEventListener('click', () =>{
        body.classList.toggle('open');
        boton.classList.toggle('faq-close-icon');
    })
})


