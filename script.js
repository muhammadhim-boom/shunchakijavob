const hashu = document.getElementById('hashu');
const yoqshu = document.getElementById('yoqshu');
const messege = document.getElementById('messege');

setTimeout(() => { 
    yoqshu.click();
}, 5000); 

hashu.addEventListener('click', () => {
    messege.style.display = 'block';
    const x = Math.random() * (window.innerWidth - hashu.offsetWidth);
    const y = Math.random() * (window.innerHeight - hashu.offsetHeight);
    hashu.style.position = 'absolute';
    hashu.style.left = `${x}px`;
    hashu.style.top = `${y}px`;
});

hashu.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - hashu.offsetWidth);
    const y = Math.random() * (window.innerHeight - hashu.offsetHeight);
    hashu.style.position = 'absolute';
    hashu.style.left = `${x}px`;
    hashu.style.top = `${y}px`;
});

yoqshu.addEventListener('click', () => {
    messege.style.display = 'block';
});

yoqshu.addEventListener('mouseover', () => {
});
