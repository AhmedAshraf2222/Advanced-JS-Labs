function saveData(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var color = document.getElementById("color").value;
    var gender = document.querySelector("input[name='gender']:checked").value;

    var exp = new Date("2026-12-31");

    CookiesLib.setCookie("name", name, exp);
    CookiesLib.setCookie("age", age, exp);
    CookiesLib.setCookie("gender", gender, exp);
    CookiesLib.setCookie("color", color, exp);

    var visits = CookiesLib.getCookie("visits");
    visits = visits ? Number(visits) + 1 : 1;
    CookiesLib.setCookie("visits", visits, exp);

    showProfile();
}

function showProfile() {
    document.getElementById("register").style.display = "none";
    document.getElementById("profile").style.display = "block";

    var name = CookiesLib.getCookie("name");
    var visits = CookiesLib.getCookie("visits");
    var gender = CookiesLib.getCookie("gender");
    var color = CookiesLib.getCookie("color");

    var imgSrc = gender === "male" ? "boy.jpg" : "girl.png";

    document.getElementById("box").innerHTML = `
        <div style="display:flex; justify-content:center; align-items:center; gap:20px">
            <img src="${imgSrc}" width="120">
            <h2>
                Welcome 
                <span style="font-weight:bold; color:${color}">
                    ${name}
                </span>
                you have visited this site 
                <span style="font-weight:bold; color:${color}">
                    ${visits}
                </span>
                times
            </h2>
        </div>
    `;
}


if (CookiesLib.hasCookie("name")) {
    var visits = Number(CookiesLib.getCookie("visits")) + 1;
    CookiesLib.setCookie("visits", visits, new Date("2026-12-31"));
    showProfile();
}
