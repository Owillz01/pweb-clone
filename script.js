let home = document.querySelector("#home");
let bio = document.querySelector("#bio");
let experince = document.querySelector("#experince");
let header = document.querySelector("header");
let prev_ele_id = 'home_btn'

header.addEventListener("click", (event) => {
    prev_ele_id ? null : (prev_ele_id = event.target.id);
    event.target.classList.add("active");
    if(prev_ele_id != event.target.id){
      document.querySelector("#" + prev_ele_id).classList.remove('active');
      //           .target?.classList.remove();

      // prev_ele_id?.target?.classList.remove()
      console.log(prev_ele_id, event.target.id, "prev_ele_id?.target?.hash ");
      prev_ele_id = event.target.id;
    }
    
    console.log(event.target.hash, "event.target.hash");
    
});


// bio.toggleAttribute('aria-current="page"', false);