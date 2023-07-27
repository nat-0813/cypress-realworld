describe("User Journey", () => {
  it("a user can find a course on the home page and complete the courses lessons", () => {
    cy.visit("http://localhost:3000")
    cy.getByData("course-0").find("a").contains("Get started").click() //need to get the “Get started” button of one of our courses
    cy.location("pathname").should("equal", "/testing-your-first-application") //write an assertion that the “Get started” button has navigated the user to the correct course page.
    cy.getByData("next-lesson-button").click() //write another assertion to verify that the “Start Course” button has navigated our user to the correct lesson page.
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )
    cy.getByData("challenge-answer-0").click() //need to complete the quiz at the bottom of the page.
    cy.getByData("next-lesson-button").should("exist").click() //final assertion that verifies that the “Next Lesson” takes the user to the correct lesson page.
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()

    cy.location("pathname").should("equal", "/")
  })
})
