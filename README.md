
# 영화 검색 사이트 (OMDbAPI.COM)

### ▶ **Vue.js 를 활용한 영화 검색 사이트 만들어보기!**
---
[![OMDB.COM](/src/assets/MovieSearch_MainPage.JPG)](https://frosty-sinoussi-5aadc8.netlify.app/#/)

1) Vue Router 구성 연결 & Bootstrap 구성 적용  

2) MainPage / Header - Nav & Site Logo 작업  
   2-1) Navigation 바 작업 - Search, Movie, About
      - Search : 영화 검색 페이지
      - Movie  : 영화 상세정보 표시 페이지 (기본값으로 frozen 표시)
      - About  : 사이트 만든사람 개인정보 페이지<br/>

   2-2) Site Logo - CSS 스타일 적용하여 OMDbAPI.COM 로고 출력  

   2-3) Headlline 영역 ~ Search 검색 필터, Button 구조 만들기 (Bootstrap UI 적용)  

3) 영화 검색 기능  
   : 검색창에 영화제목 (frozen,lion..등) 검색 시 관련된 영화 리스트가 나온다.  
      3-1) Vuex.next 패키지 설치 & 기본 구성 만들기  
      3-2) 영화검색 - 영화 목록 ID 중복제거, 예외처리   

4) 검색된 영화 선택 시 자세한 영화정보 확인 가능<br/>
      4-1) OMDBAPI 실제 사이트에서 영화정보 데이터를 제공받기 위해 API 키 발급  
      4-2) 영화정보 - axios 패키지 설치, 실제 http 요청 날리기.  
      4-3) 영화 포스터 이미지 로드 이벤트 (플러그인 생성)  
      4-4) 영화 포스터가 없는 경우 로딩 애니메이션 종료 (예외처리) & Nav 경로 일치 및 활성화  

5) Vuex(Store 생성)  
   - Vuex 패키지 설치, 모듈 구성하기<br/><br/>

6) 404 page 만들기  
   - 사용자가 다른주소 입력 시 404 Page Not Found 에러 페이지 발생시키기.<br/><br/>

7) 부트스트랩 제공 기능을 이용한 반응형 레이아웃 만들기<br/>
      7-1) Home 페이지의 Header 영역<br/>
      - 뷰포트 너비가 줄어들었을때 Navigation 메뉴가 사라지도록 작업.<br/>
      - 메인페이지의 우측 Logo 이미지를 클릭했을때 About 페이지로 이동.<br/><br/>

      7-2) Home 페이지의 Search 컴포넌트 영역 & Movie 페이지 반응형 작업.<br/><br/>

8) Vuex Helpers 적용 & 배포<br/>
      8-1) 검색 정보 초기화 및 페이지 전환 스크롤 위치 복구<br/>
      8-2) Netlify 배포 (Site)<br/>
      - Netlify CLI 구성 & Serverless Function 생성<br/>
      : 보안을 위해 영화 API KEY가 노출되지않도록 <br/> 
        Netlify에서 제공하는 Serverless Function 기능을 사용하여 숨김처리.  
      - 영화 정보 반환 API 만들기<br/>
      - 로컬 및 서버 환경 변수 구성 & 배포<br/><br/>

9) 단위 테스트 (Jest, Vue test Utils 활용)  
      9-1) 테스트 환경 구성 & 첫 테스트 진행
      - JEST 설치 후 비동기 테스트 진행, 모의(Mock)함수 활용 테스트 진행<br/>
      - Vue Test Utils(VTU) 패키지 설치 후 컴포넌트 테스트 진행<br/><br/>
      
      9-2) 각 컴포넌트 테스트 진행  
      - Header,Search,Movie 컴포넌트와 movie Store 테스트 진행.  
   <br/>
10) Cypress E2E 테스트 진행 & 배포 <br/>
      10-1) Cypress 설치 및 환경구성, Cypress API 적용<br/>
      10-2) Movie Search, About 페이지 사용자 시나리오 테스트 진행 & Headless 테스트  
      10-3) 단위 테스트 충돌 방지 및 Github 배포
