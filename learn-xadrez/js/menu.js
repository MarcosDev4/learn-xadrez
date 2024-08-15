var menuitem = document.querySelectorAll('.item-menu')
function selectlink(){
    menuitem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuitem.forEach((item)=>
item.addEventListener('click',selectlink)
)
var body = document.querySelector('body');

function refresh() {
  location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
    const aula1Button = document.getElementById("aula1Button");
    aula1Button.addEventListener("click", () => {
      window.location.href = "../text.html"; // Certifique-se do caminho correto
    });
  });
