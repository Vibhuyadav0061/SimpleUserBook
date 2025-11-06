

let form = document.querySelector('form');
const container = document.getElementById('container');
let UserManager = {
    users:[],
    init:function(){
      form.addEventListener("submit",this.submitform.bind(this));
    },
    submitform:function(e){
      e.preventDefault();
      this.addUser();
    },
    renderUI:function(){
      container.innerHTML = "";
      this.users.forEach((e , idx)=>{
        let div = document.createElement("div");
        div.className = "hero";
        div.textContent = e.username;
        let img = document.createElement("img");
        img.src = e.photo;
        div.appendChild(img);
        let button = document.createElement("button");
        button.className = "delbtn"
        button.textContent = "delete";
        div.appendChild(button);

        container.appendChild(div);
        button.addEventListener('click',()=>{
            this.removeUser(idx);
        })
      })
    },
    addUser:function(){
      let formdata = {
        username:document.getElementById("name").value,
        role:document.getElementById("role").value,
        bio:document.getElementById("bio").value,
        photo:document.getElementById("photo").value
      }
      this.users.push(formdata)
      form.reset();
      this.renderUI();
    },
    removeUser:function(index){
      this.users.splice(index , 1);
      this.renderUI();
    }
}

UserManager.init();
