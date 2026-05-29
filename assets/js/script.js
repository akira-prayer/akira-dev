document.addEventListener("DOMContentLoaded", function () {

  // 第1階層（大アコーディオン）
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      item.classList.toggle("active");

      // 親が閉じたら子階層をすべて閉じる
      if (!item.classList.contains("active")) {
        item.querySelectorAll(".sub-accordion-item").forEach(sub => {
          sub.classList.remove("active");
        });
      }
    });
  });

  // 第2階層以降（小アコーディオン）→ イベント委譲に変更
  document.addEventListener("click", function (e) {
    const header = e.target.closest(".sub-accordion-header");
    if (!header) return;

    const item = header.parentElement;
    item.classList.toggle("active");

    // 親が閉じたら子階層をすべて閉じる
    if (!item.classList.contains("active")) {
      item.querySelectorAll(".sub-accordion-item").forEach(sub => {
        sub.classList.remove("active");
      });
    }
  });

});
