// スクロール時にふわっとさせる
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // is-in-viewをつける
      entry.target.classList.add("is-in-view");
    } else {
      entry.target.classList.remove("is-in-view");

    }
  })
})

const inViewItems = document.querySelectorAll(".is-in-view");
inViewItems.forEach((inViewItem) => {
  intersectionObserver.observe(inViewItem);
})
