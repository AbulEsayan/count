let txt = document.querySelector(".text");
let pl = document.querySelector("#plus");
let mn = document.querySelector("#minus");
let h1 = 0;
txt.innerHTML = h1;

pl.addEventListener("click", function() {
    txt.innerHTML = h1++;
});

mn.addEventListener("click", function() {
    txt.innerHTML = h1--;
});
