let darkBtn = document.querySelector('#darkBtn');
let currModes = 'dark';
let header = document.querySelector('.header-content');
let sidebar = document.querySelector('.sidebar');

darkBtn.addEventListener('click', ()=>{
    if(currModes === 'dark'){
        currModes = 'light';
        header.classList.add('light');
        header.classList.remove('dark');
        sidebar.classList.add('light');
        sidebar.classList.remove('dark');
    }
    else{
        currModes = 'dark';
        header.classList.add('dark');
        header.classList.remove('light');
        sidebar.classList.add('dark');
        sidebar.classList.remove('light');
    }
    console.log(currModes)
})




let menu = document.querySelector('.select-menu');
let imgBtn = document.querySelector('.image-content');

imgBtn.addEventListener('click', ()=>{
    menu.classList.toggle('open');
});