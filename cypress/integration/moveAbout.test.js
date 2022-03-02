/*
* About Page - 테스트용 사용자 시나리오

 1) 메인 페이지로 접근한 후 Header About 네비게이션 버튼을 클릭하면 About 페이지에서
    개발자 정보를 확인 할 수 있다.
 2) 잠시 Movie 페이지로 이동한 후, Header 사용자 로고(우측) 클릭 
    -> 다시 About 페이지에서 개발자 정보를 확인할 수 있다.
*/

describe('About 페이지로 이동', () => {
  it('메인 페이지로 접근합니다.', () => {
    cy.visit('/')
    cy.get('header .nav-link.active')
      .contains('Search')
  })
  it('About 페이지로 이동합니다', () => {
    cy.get('header .nav-link')
      .contains('About')
      .click()
    cy.url()
      .should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('JIWONY')
  })
  it('영화 상세 페이지로 이동합니다.', () => {
    cy.get('header .nav-link')
      .contains('Movie')
      .click()
    cy.url()
      .should('include', '/movie')
    cy.wait(1000)
  })
  it('다시 About 페이지로 이동합니다!', () => {
    cy.get('header .user')
      .click()
    cy.url()
      .should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('JIWONY')
  })
})