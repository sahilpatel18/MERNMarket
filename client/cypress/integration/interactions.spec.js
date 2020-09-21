describe("A non registered user interacting with the site", () => {
  beforeEach(() => {
    cy.server()
      .route("GET", "/api/products", "fixture:products")
      .as("getProducts");
    cy.visit("http://localhost:3000");
  });
  it("displays the Desk Lamp details card when 'view' button is clicked under the product picture", () => {
    cy.get(
      "#root > div > div.row.justify-content-center > div:nth-child(1) > div > div > div > a"
    ).click();
    cy.get("h1").contains("Desk Lamp").should("be.visible");
  });
  it("displays a toast error notification if the not logged in user clicks 'Add to Cart' ", () => {
    cy.visit("http://localhost:3000/products/5f31cf4384cfa5581b82da54");
    cy.get("button").contains("Add To Cart").click();
    cy.get("#onetime").should("be.visible");
  });
  it("Redirects the logged out user to the Login page when they click 'Cart' in the navbar ", () => {
    cy.get(".navbar-nav").contains("Cart").click();
    cy.get("h1").contains("Login").should("be.visible");
  });
  it("redirects the user to the login page when they click 'Login' on the navbar ", () => {
    cy.get(".navbar-nav").contains("Login").click();
    cy.get("h1").contains("Login").should("be.visible");
  });
  it("redirects the user to the login page when they click 'Register' on the navbar ", () => {
    cy.get(".navbar-nav").contains("Register").click();
    cy.get("h1").contains("Register").should("be.visible");
  });
  it("redirects the user to the login page after they register", () => {
    cy.get(".navbar-nav").contains("Register").click();
    cy.get("input").eq(0).type("cypress");
    cy.get("input").eq(1).type("cypress");
    cy.get("button").contains("Register").click();
    cy.get("h1").contains("Login").should("be.visible");
  });
  it("displays a successful toast message indicated the user has logged in upon logging in", () => {
    cy.get(".navbar-nav").contains("Login").click();
    cy.get("input").eq(0).type("tomtom");
    cy.get("input").eq(1).type("tomtom");
    cy.get("button").contains("Login").click();
    cy.get(".navbar-nav").contains("Logout").should("be.visible");
  });
  it("displays a toast notification indicating that the user has logged out", () => {
    cy.get(".navbar-nav").contains("Login").click();
    cy.get("input").eq(0).type("tomtom");
    cy.get("input").eq(1).type("tomtom");
    cy.get("button").contains("Login").click();
    cy.get(".navbar-nav").contains("Logout").click();
    cy.get("#root > div > div.Toastify > div").should("be.visible");
  });
  it("ensures that the back button on the product details page take the user back to the home page", () => {
    cy.visit("http://localhost:3000/products/5f31cf4384cfa5581b82da54");
    cy.get("button").contains("Back").click();
    cy.get("div.row.justify-content-center > div:nth-child(1)").should(
      "be.visible"
    );
  });
});
