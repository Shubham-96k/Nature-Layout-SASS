
const navigation = document.getElementById("navigation");


const onToggle = (eve) => {
    eve.target.closest('.navigation').classList.toggle('active')
}



navigation.addEventListener('click', onToggle)