// popup/popup.js
function renderList() {
  chrome.storage.local.get({ bookmarks: [] }, ({ bookmarks }) => {
    // 메시지 순서(idx) 오름차순으로 정렬 (채팅창 작성 순으로)
    bookmarks.sort((a, b) => a.idx - b.idx);

    const listEl = document.getElementById('bookmarkList');
    listEl.innerHTML = '';

    bookmarks.forEach(bm => {
      const li = document.createElement('li');
      li.className = 'bookmark-item';

      // 저장된 스니펫 표시
      const span = document.createElement('span');
      span.textContent = bm.snippet;
      span.className = 'bookmark-text';
      span.onclick = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          chrome.tabs.sendMessage(tabs[0].id, { type: 'jump', idx: bm.idx });
        });
      };

      // 삭제 버튼
      const delBtn = document.createElement('button');
      delBtn.textContent = '🗑️';
      delBtn.className = 'delete-btn';
      delBtn.onclick = e => {
        e.stopPropagation();
        chrome.storage.local.get({ bookmarks: [] }, ({ bookmarks }) => {
          const filtered = bookmarks.filter(b => b.id !== bm.id);
          chrome.storage.local.set({ bookmarks: filtered }, renderList);
        });
      };

      li.appendChild(span);
      li.appendChild(delBtn);
      listEl.appendChild(li);
    });
  });
}

document.addEventListener('DOMContentLoaded', renderList);