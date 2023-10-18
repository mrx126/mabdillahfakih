// header (atas sendiri)
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

//Filter (memilih kategori)
// $(document).ready(function () {
//   $(".filter-item").click(function () {
//     const value = $(this).attr("data-filter");
//     if (value == "all") {
//       $(".post-box").show("1000");
//     } else {
//       $(".post-box")
//         .not("." + value)
//         .hide(1000);
//       $(".post-box")
//         .filter("." + value)
//         .show("1000");
//     }
//   });
//   $(".filter-item").click(function () {
//     $(this).addClass("active-filter").siblings().removeClass("active-filter");
//   });
// });

// home (efek parallax
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

// sembunyi

const btn = document.querySelector(".btnMuncul");
btn.addEventListener("click", function () {
  // document.querySelectorAll(".sembunyi").forEach((element) => {
  //   element.toggle.style.display = "none";
  // });
  var sembunyi = document.querySelectorAll(".sembunyi");
  sembunyi.forEach((n) => n.classList.toggle("ba"));
  var tengah = document.querySelectorAll(".tengah");

  // belum selesai sampai bawah
  // tengah.forEach((n) => {
  //   n.classList.toggle("extraHeight");
  // });
  tengah.forEach((n) => n.classList.toggle("extraHeight"));
  // if (tengah.src === "images/post6.jpg") {
  //   tengah.src === "images/post4.jpg";
  // } else {
  //   tengah.src === "images/post6.jpg";
  // }
  console.log(tengah);
  // tengah.forEach((n) => n.classList.toggle("extraHeight"));

  // let gambar1 = document.querySelector(".gambar1");
  // let gambar2 = document.querySelector(".gambar2");

  // console.log(value1);
  // console.log(value2);

  // [value1, value2] = [value2, value1];

  // console.log(value1);
  // console.log(value2);
  // if ((gambar1.src = "images/post6.jpg")) {
  //   gambar1.src = "images/post4.jpg";
  // } else {
  //   gambar1.src = "images/post6.jpg";
  // }
  // if ((gambar2.src = "images/post4.jpg")) {
  //   gambar2.src = "images/post6.jpg";
  // } else {
  //   gambar2.src = "images/post4.jpg";
  // }
  // value1.src = "images/post6.jpg";
  // value2.src = "images/post6.jpg";

  if (btn.value === "lebih banyak") {
    btn.value = "Sembunyikan";
  } else {
    btn.value = "lebih banyak";
  }
  // console.log(btn);
});
