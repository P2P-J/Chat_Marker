// content/contentScript.js
(() => {
  console.log('⭐ Bookmark script loaded');

  // 스타일 추가
  const style = document.createElement('style');
  style.textContent = `
    .bookmark-btn {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 18px;
      color: #aaa;
      margin-left: 6px;
      vertical-align: middle;
    }
    .bookmark-btn:hover { color: gold; }
  `;
  document.head.appendChild(style);

  // 버튼 추가 및 토글 로직
  function addBookmarkButtons() {
    chrome.storage.local.get({ bookmarks: [] }, ({ bookmarks }) => {
      document.querySelectorAll('main article').forEach((articleEl, idx) => {
        if (articleEl.querySelector('.bookmark-btn')) return;
        const container = articleEl.querySelector('div');
        if (!container) return;

        const btn = document.createElement('button');
        btn.className = 'bookmark-btn';
        // 저장 여부 확인
        const isSaved = bookmarks.some(b => b.idx === idx && b.url === location.href);
        btn.innerText = isSaved ? '✔️' : '⭐';

        btn.onclick = e => {
          e.stopPropagation();
          chrome.storage.local.get({ bookmarks: [] }, ({ bookmarks }) => {
            const matchIndex = bookmarks.findIndex(b => b.idx === idx && b.url === location.href);
            if (matchIndex !== -1) {
              // Unbookmark
              bookmarks.splice(matchIndex, 1);
              btn.innerText = '⭐';
            } else {
              // Add bookmark
              const snippet = container.innerText.trim().split('\n')[0];
              const id = `${Date.now()}-${Math.random().toString(36).substr(2,5)}`;
              bookmarks.push({ id, idx, url: location.href, snippet });
              btn.innerText = '✔️';
            }
            chrome.storage.local.set({ bookmarks });
          });
        };

        container.appendChild(btn);
      });
    });
  }

  // 스크롤 이동 리스너
  chrome.runtime.onMessage.addListener(message => {
    if (message.type === 'jump' && typeof message.idx === 'number') {
      const msgs = document.querySelectorAll('main article');
      const target = msgs[message.idx];
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // 초기 및 동적 감지
  addBookmarkButtons();
  new MutationObserver(addBookmarkButtons)
    .observe(document.body, { childList: true, subtree: true });
})();