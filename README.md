# 영화 검색 사이트 (OMDbAPI.COM)

- Vue.js 를 활용한 영화 검색 사이트 만들어보기!

0) Vue Router 구성 연결 & Bootstrap 구성 적용

1) MainPage / Header - Nav & Site Logo 작업
   1-1) Navigation바 작업 - Search, Movie, About
      - Search : 영화 검색, 정렬방식
      - Movie  : 영화 상세정보 표시 페이지 (기본값으로 frozen 표시)
      - About  : 사이트 만든사람 개인정보

   1-2) Site Logo - CSS 스타일 적용하여 OMDbAPI.COM 로고 출력

   1-3) Headlline 영역 ~ Search 검색 필터, Button 구조 만들기 (Bootstrap UI 적용)

2) 영화 검색 기능 
  : 검색창에 영화제목 (frozen,lion..) 검색 시 관련된 영화 리스트가 나온다.

   2-1) Vuex.next 패키지 설치 & 기본 구성 만들기
   2-2) 영화검색 - 영화 목록 ID 중복제거, 예외처리

3) 검색된 영화 선택 시 자세한 영화정보 확인 가능
   3-1) omdbapi 실제 사이트에서 영화정보 데이터를 제공받기 위해 API 키 발급
   3-2) 영화정보 - axios 패키지 설치, 실제 http 요청 날리기.

4) Vuex(Store)
  4-1) Vuex 패키지 설치, 모듈 구성하기

5) 다른주소 입력 시 404 Page Not Found 에러 페이지 발생시키기.