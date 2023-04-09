let form1 = document.querySelector(".login");
let form2 = document.querySelector(".login2");
let usernameInput = document.querySelector(".username");
let usernameInput2 = document.querySelector(".username2");
let passwordInput = document.querySelector(".password");
let passwordInput2 = document.querySelector(".password2");
let showPasswordButton = document.querySelector(".password-button");
let showPasswordButton2 = document.querySelector(".password-button2");
let face = document.querySelector(".face");
let fname = document.querySelector(".name");
let fname2 = document.querySelector(".name2");
let email = document.querySelector(".email");

passwordInput.addEventListener("focus", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.add("hide");
  });
  document.querySelector(".tongue").classList.remove("breath");
});

passwordInput.addEventListener("blur", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });
  document.querySelector(".tongue").classList.add("breath");
});

usernameInput.addEventListener("focus", (event) => {
  let length = Math.min(usernameInput.value.length - 16, 19);
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });

  face.style.setProperty("--rotate-head", `${-length}deg`);
});

usernameInput.addEventListener("blur", (event) => {
  face.style.setProperty("--rotate-head", "0deg");
});

usernameInput.addEventListener(
  "input",
  _.throttle((event) => {
    let length = Math.min(event.target.value.length - 16, 19);

    face.style.setProperty("--rotate-head", `${-length}deg`);
  }, 100)
);

showPasswordButton.addEventListener("click", (event) => {
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("peek");
      hand.classList.add("hide");
    });
  } else {
    passwordInput.type = "text";
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("hide");
      hand.classList.add("peek");
    });
  }
});
passwordInput2.addEventListener("focus", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.add("hide");
  });
  document.querySelector(".tongue").classList.remove("breath");
});

passwordInput2.addEventListener("blur", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });
  document.querySelector(".tongue").classList.add("breath");
});

usernameInput2.addEventListener("focus", (event) => {
  let length = Math.min(usernameInput.value.length - 16, 19);
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });

  face.style.setProperty("--rotate-head", `${-length}deg`);
});

usernameInput2.addEventListener("blur", (event) => {
  face.style.setProperty("--rotate-head", "0deg");
});

usernameInput2.addEventListener(
  "input",
  _.throttle((event) => {
    let length = Math.min(event.target.value.length - 16, 19);

    face.style.setProperty("--rotate-head", `${-length}deg`);
  }, 100)
);

showPasswordButton2.addEventListener("click", (event) => {
  if (passwordInput2.type === "text") {
    passwordInput2.type = "password";
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("peek");
      hand.classList.add("hide");
    });
  } else {
    passwordInput2.type = "text";
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("hide");
      hand.classList.add("peek");
    });
  }
});

let newOBj = {};
form1.addEventListener("submit", (evt) => {
  evt.preventDefault();
  newOBj = {
    name: fname.value,
    email: email.value,
    password: passwordInput2.value,
  };
  console.log(newOBj);
  localStorage.setItem("user", JSON.stringify(newOBj));
});
form2.addEventListener("submit", (evt) => {
  evt.preventDefault();
  newOBj = {
    name: fname2.value,
    password: passwordInput.value,
  };
  console.log(newOBj);
  localStorage.setItem("user", JSON.stringify(newOBj));
});

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let check = document.querySelector(".input");
let submit = document.querySelector(".submit");
check.addEventListener("click", () => {
  if (check.checked) {
    submit.disabled = false;
  }
});

submit.addEventListener("click",()=>{
  location.replace("index.html")
})
