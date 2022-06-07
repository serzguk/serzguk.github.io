const SvgWrapper = document.querySelector('.svg-wrapper');
const SubMenu = document.querySelector('.sub-menu-wrapper');

console.log(SvgWrapper);
console.log(SubMenu);

SvgWrapper.addEventListener('click', function(){
    SubMenu.classList.toggle('none');
})