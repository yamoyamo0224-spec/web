// ゲーム共通：全画面化 + 矢印キーでページがスクロールしないようにする
(function () {
  // 矢印・スペース・PageUp/Down のデフォルト動作を抑制
  window.addEventListener('keydown', function (e) {
    const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'PageUp', 'PageDown', 'Home', 'End'];
    if (keys.includes(e.key)) {
      e.preventDefault();
    }
  }, { passive: false });

  // 全画面ボタンを自動挿入
  function addFullscreenBtn() {
    const existing = document.getElementById('fs-btn');
    if (existing) return;
    const btn = document.createElement('button');
    btn.id = 'fs-btn';
    btn.className = 'btn';
    btn.textContent = '全画面';
    btn.style.margin = '0.5rem';
    btn.onclick = function () {
      const el = document.documentElement;
      if (!document.fullscreenElement) {
        (el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen).call(el);
        btn.textContent = '全画面解除';
      } else {
        (document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen).call(document);
        btn.textContent = '全画面';
      }
    };
    document.addEventListener('fullscreenchange', function () {
      btn.textContent = document.fullscreenElement ? '全画面解除' : '全画面';
    });
    // ヘッダーかメインの最初に入れる
    const header = document.querySelector('header') || document.querySelector('main') || document.body;
    header.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addFullscreenBtn);
  } else {
    addFullscreenBtn();
  }
})();
