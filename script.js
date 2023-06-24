
const section = document.querySelector('.section')
function show(content) {
    if (content == 'home') {
        section.classList.remove('guide', 'contact', 'info')
        section.classList.add('home')
        section.innerHTML = "This is Home Page"
    }
    else if (content == 'contact') {
        section.classList.remove('guide', 'home', 'info')
        section.classList.add('contact')
        section.innerHTML = 'Contact Us Email:abc@xyz.com Phone no: 111-222-3333'
    }
    else if (content == 'guide') {
        section.classList.remove('home', 'contact', 'info')
        section.classList.add('guide')
        section.innerHTML = "This is guide: Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
    else if (content == 'info') {
        section.classList.remove('home', 'contact', 'guide')
        section.classList.add('info')
        section.innerHTML = 'Information: Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
}
