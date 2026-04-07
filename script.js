// 页面加载动画
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "1";
  }, 200);
});


// 滚动出现动画
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});


// 鼠标移动光效（黑金高级感🔥）
document.addEventListener("mousemove", e => {
  const glow = document.querySelector(".glow");
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});


// 打字机效果（标题用）
const text = "PROFESSIONAL CONSULTANT";
let i = 0;

function typing() {
  const el = document.querySelector(".hero p");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();
