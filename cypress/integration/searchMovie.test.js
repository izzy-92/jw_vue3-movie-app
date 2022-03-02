/*
* Search page - 테스트용 사용자 시나리오 *

1) OMDb API 영화 검색 사이트 메인 페이지 접근, 검색(메인) 부분에서 영화 제목 frozen 입력 후 
    영화 검색 갯수 30개 입력하고 Apply 버튼 클릭하여 영화 목록 검색.

2) 관련 영화 목록 30개 정상출력 확인 -> 영화 목록에서 Frozen II 영화 클릭, 영화정보 상세보기 화면으로 이동.
    -> 상세보기 화면 이동 시 Movie 메뉴 활성화 되었는지 확인 ,주소창에 해당 영화 id값이 잘 명시되었는지 확인, 
       영화제목표시 잘되는지 확인.
*/

describe('영화 검색(겨울왕국2', () => {
  it('검색 페이지로 접근합니다.', () => {
    // 메인페이지 접근
    cy.visit('/')
    
    cy.get('header .nav-link.active')
      .contains('Search')
  })
  it('영화를 검색합니다', () => {
    cy.get('input.form-control')
      .type('frozen') // 검색하고자하는 내용 명시
    // 영화 목록 최대갯수 확인
    cy.get('select.form-select:nth-child(2)') // 두번째 select Menu 선택
      .select('30')
    cy.get('button.btn')
      .contains('Apply')
      .click()
    cy.wait(2000) // 영화목록 응답이 잘 와서 출력될때까지 2초 기다린 후 다음 테스트 진행.
    cy.get('.movie')
      .should('have.length', 30)
  })
  it('겨울왕국2 영화 아이템을 선택합니다', () => {
    cy.get('.movie .title')
      .contains('Frozen II')
      .click()
  })
  it('영화 상세 정보를 확인합니다.',() => {
    cy.url()
      .should('include', '/movie/tt4520988')
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('Movie')
    cy.get('.title')
      .contains('Frozen II')
  })
})