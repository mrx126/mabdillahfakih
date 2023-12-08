// header (atas sendiri)
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

//Filter (memilih kategori)
// $(document).ready(function () {
var filter = document.querySelectorAll(".filter");
filter.forEach((n) =>
  n.addEventListener("click", function () {
    // console.log(filter);
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".postBox").show("1000");
      var title = document.querySelector(".title.fx");
      title.style.display = "flex";
      var sembunyi = document.querySelectorAll(".sembunyi");
      // sembunyi.forEach((n) => (n.style.backgroundColor = "red"));
      sembunyi.forEach((n) => (n.style.display = "block"));
      // sembunyi.forEach((n) => (n.style.display = "flex"));
      const btn = document.querySelector(".btnMuncul");
      btn.value = "Sembunyikan";
    } else {
      $(".postBox")
        .not("." + value)
        .hide(1000);
      $(".postBox")
        .filter("." + value)
        .show("1000");
      var title = document.querySelector(".title.fx");
      title.style.display = "none";
    }
  })
);
// });
// sembunyi
const btn = document.querySelector(".btnMuncul");
btn.value = "Sembunyikan";
btn.addEventListener("click", function () {
  if (btn.value === "Sembunyikan") {
    var sembunyi = document.querySelectorAll(".sembunyi");
    // sembunyi.forEach((n) => (n.style.backgroundColor = "blue"));
    sembunyi.forEach((n) => (n.style.display = "none"));
    // sembunyi.forEach((n) => (n.style.display = "none"));
    const btn = document.querySelector(".btnMuncul");
    btn.value = "lebih banyak";
  } else {
    var sembunyi = document.querySelectorAll(".sembunyi");
    // sembunyi.forEach((n) => (n.style.backgroundColor = "red"));
    sembunyi.forEach((n) => (n.style.display = "block"));
    // sembunyi.forEach((n) => (n.style.display = "flex"));
    const btn = document.querySelector(".btnMuncul");
    btn.value = "Sembunyikan";
  }
});

// home (efek parallax)
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".home .home-text").css({
    transform: "translate(0px, " + wScroll / 1.5 + "%)",
  });

  // post container
  if (wScroll > $(".post").offset().top - 10) {
    $(".post .post-box").each(function (i) {
      setTimeout(function () {
        $(".post .post-box").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});

// // sembunyi
// const btn = document.querySelector(".btnMuncul");
// btn.addEventListener("click", function () {
//   var sembunyi = document.querySelectorAll(".sembunyi");
//   sembunyi.forEach((n) => n.classList.toggle("ba"));
//   // var tengah = document.querySelectorAll(".tengah");
//   // tengah.forEach((n) => n.classList.toggle("extraHeight"));
//   // console.log(tengah);

//   if (btn.value === "lebih banyak") {
//     btn.value = "Sembunyikan";
//   } else {
//     btn.value = "lebih banyak";
//   }
// });

// sembunyi
// const btn = document.querySelector(".btnMuncul");
// btn.value = "Sembunyikan";
// btn.addEventListener("click", function () {
//   var sembunyi = document.querySelectorAll(".sembunyi");
//   sembunyi.forEach((n) => n.classList.toggle("ba"));
//   // var tengah = document.querySelectorAll(".tengah");
//   // tengah.forEach((n) => n.classList.toggle("extraHeight"));
//   // console.log(tengah);

//   if (btn.value === "lebih banyak") {
//     btn.value = "Sembunyikan";
//   } else {
//     btn.value = "lebih banyak";
//   }
// });
