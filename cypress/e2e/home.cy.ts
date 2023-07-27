// describe("home page", () => {
//   //describe block:The first is a string which is a description of the tests contained within it. The second is a callback function.
//   //Since this file is going to contain tests for our home page, let's update this to say “home page.”
//   it("the h1 contains the correct text", () => {
//     //it() within a given spec file that is a single test. It takes the exact same arguments as the describe() function: first a string and then a callback function.
//     cy.visit("http://localhost:3000") //visit application's home page
//     cy.get("[data-test= 'hero-heading']").contains(
//       "Testing Next.js Applications with Cypress"
//     ) //to get h1 on the home page
//   }) //we are chaining another command called contains onto the cy.get() which accepts a string.
//   it.only("the features on the homepage are correct", () => {
//     //.only() after the it we are telling Cypress to only run this specific test.
//     cy.visit("http://localhost:3000")
//     cy.get("dt")
//       .eq(0)
//       .contains(/4 courses/i)
//     //we want to get the first one and make sure that the text says “4 Courses”.
//     //This command will allow us to access a specific index within an array of elements, which is exactly what we want.
//     //arrays start their indexes at 0, so the first element we want is 0 not 1.
//     //We are passing into the contains command a string of text which we expect to be inside of the h1 element.
//   }) // using classes and IDs change over time meanining that if you use them in your tests, yout tests will break
// })

// describe("home page", () => {
//   beforeEach(() => {
//     //This is a function that will get called “before each” test is run, which is exactly what we want.
//     cy.visit("http://localhost:3000")
//   })

//   it("the h1 contains the correct text", () => {
//     cy.get("[data-test='hero-heading']").contains(
//       "Testing Next.js Applications with Cypress"
//     )
//   })

//   it("the features on the homepage are correct", () => {
//     cy.get("dt").eq(0).contains("4 Courses")
//     cy.get("dt").eq(1).contains("25+ Lessons")
//     cy.get("dt").eq(2).contains("Free and Open Source")
//   })
// })

// // home.cy.ts

// it("the h1 contains the correct text", () => {
//   cy.getByData("hero-heading").contains(
//     "Testing Next.js Applications with Cypress"
//   )
// })

// when we use context
describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })
})

//Courses section
describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click() //look for the text 'Getting started', which will select the <a> tag we want all that is left to do is to click on it.
      cy.location("pathname").should("equal", "/testing-your-first-application") //writing an assertion that verifies that the URL of our course page is correct
    })
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })
    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})
//We are using the location API to get the “pathname” which is the URL of our application. Then we write our assertion to make sure that it equals the correct URL or path.
