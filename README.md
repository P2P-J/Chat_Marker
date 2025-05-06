# ChatGPT Bookmark Extension / ChatGPT 북마크 확장 프로그램

A lightweight Chrome/Firefox extension to bookmark individual ChatGPT messages and quickly navigate back to them.
가벼운 Chrome/Firefox 확장 기능으로 ChatGPT 메시지에 북마크를 추가하고 빠르게 이동할 수 있습니다.

## Features / 기능

- ⭐ Add a bookmark button next to each ChatGPT message bubble.
- ⭐ 각 ChatGPT 메시지 말풍선 옆에 북마크 버튼 추가

- 🔄 Toggle bookmark on/off by clicking the ⭐/✔️ button.
- 🔄 ⭐/✔️ 클릭으로 북마크 추가/해제 토글

- 📜 Store and display a snippet (first line) of each bookmarked message.
- 📜 북마크된 메시지의 첫 줄 스니펫 저장

- 📑 View all bookmarks in the extension popup, sorted by message order.
- 📑 확장 팝업에서 전체 북마크 확인 (메시지 순 오름차순 정렬)

- 🔍 Click a bookmark in the popup to scroll to that message in ChatGPT.
- 🔍 팝업 내 항목 클릭 시 해당 메시지로 스크롤

- 🗑️ Remove bookmarks individually from the popup.
- 🗑️ 팝업에서 개별 북마크 삭제

## Installation / 설치

### Chrome
1. Go to `chrome://extensions` in your browser.
1. Enable **Developer mode** (toggle in the top right).
1. Click **Load unpacked** and select the `chatgpt-bookmark-extension` folder.

Chrome에서 `chrome://extensions` 열기
1. 우측 상단에서 **개발자 모드** 활성화
1. **압축해제된 확장 프로그램 로드** 클릭 후 `chatgpt-bookmark-extension` 폴더 선택

### Firefox
1. Go to `about:debugging#/runtime/this-firefox`.
1. Click **Load Temporary Add-on**.
1. Choose the `manifest.json` file in the `chatgpt-bookmark-extension` folder.

Firefox에서 `about:debugging#/runtime/this-firefox` 열기
1. **임시 애드온 로드(Load Temporary Add-on)** 클릭
1. `chatgpt-bookmark-extension/manifest.json` 파일 선택

## Usage / 사용법

1. Open ChatGPT (https://chatgpt.com/).
1. Next to each message bubble, click the ⭐ button to bookmark it (it turns ✔️).
1. Click the extension icon in the toolbar to open the popup and view your bookmarks.
1. Click a bookmark in the list to jump to that message.
1. Click the 🗑️ button next to a bookmark in the popup to delete it.

1. ChatGPT(https://chatgpt.com/) 페이지 열기
1. 각 메시지 말풍선 옆 ⭐ 버튼 클릭 → ✔️로 변경되며 북마크 저장
1. 브라우저 도구 모음에서 확장 아이콘 클릭 → 팝업에서 북마크 목록 확인
1. 목록 항목 클릭 → 해당 메시지로 스크롤
1. 🗑️ 버튼 클릭 → 개별 북마크 삭제

## Development / 개발

1. Clone this repo and open in VSCode.
1. Modify files under `content/` or `popup/`.
1. Reload the extension in your browser to test.
1. Create a pull request for any bugs or improvements.

1. 레포지토리 클론 후 VSCode로 열기
1. `content/`, `popup/` 폴더 내 파일 수정
1. 확장 프로그램 리로드 후 기능 테스트
1. 풀 리퀘스트(PR)로 개선사항 제출

## License / 라이선스

MIT © GITHUB - P2P-J (Aen)
