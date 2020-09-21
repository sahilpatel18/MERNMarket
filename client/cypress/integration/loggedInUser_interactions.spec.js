describe("A logged in user interacting with the site", () => {
  beforeEach(() => {
    cy.server()
      .route("GET", "/api/products", "fixture:products")
      .as("getProducts");
    cy.server().route("GET", "/api/order", "fixture:orders").as("getOrders");
    cy.server().route("POST", "/api/login").as("postUser");
    cy.server().route("POST", "/api/order").as("postOrder");
    cy.visit("http://localhost:3000");
    cy.get(".navbar-nav").contains("Login").click();
    cy.get("input").eq(0).type("tomtom");
    cy.get("input").eq(1).type("tomtom");
    cy.get("button").contains("Login").click();
    cy.wait("@postUser");
  });
  it("displays toast notif when user adds item to cart", () => {
    cy.visit("http://localhost:3000/products/5f31cf4384cfa5581b82da54");
    cy.get("button").contains("Add To Cart").click();
    cy.get("#onetime > div.Toastify__toast-body").should("be.visible");
  });
  it("item that is added to cart should be displayed in the users cart", () => {
    cy.visit("http://localhost:3000/products/5f31cf4384cfa5581b82da54");
    cy.get("button").contains("Add To Cart").click();
    cy.get(".navbar-nav").contains("Cart").click();
    cy.get("div > div.container > table > tbody > tr > td:nth-child(1)")
      .contains("Desk Lamp")
      .should("be.visible");
  });
  it("drops the total down to $0.00 when the user clicks remove button next to the added item in the cart", () => {
    cy.visit("http://localhost:3000/products/5f31cf4384cfa5581b82da54");
    cy.get("button").contains("Add To Cart").click();
    cy.get(".navbar-nav").contains("Cart").click();
    cy.get("#root > div > div.container > table > tbody > tr > button").click();
    cy.get("#root > div > div.container > strong")
      .contains("$0.00")
      .should("be.visible");
  });
  it("ensures that he total cost increases as the quanity chosen increases. Purchasing 2 $8.99 products should give the user a total of $17.98", () => {
    cy.visit("http://localhost:3000/products/5f31cf4384cfa5581b82da55");
    cy.get(
      "#root > div > main > div > div:nth-child(2) > div:nth-child(2) > div > form > div > input"
    ).type("{backspace}2");
    cy.get("button").contains("Add To Cart").click();
    cy.get(".navbar-nav").contains("Cart").click();
    cy.get("#root > div > div.container > strong")
      .contains("$17.98")
      .should("be.visible");
  });
  it("ensures that the user can see their order history when 'Orders' is clicked in the navbar", () => {
    cy.get(".navbar-nav").contains("Orders").click();
    cy.get("#root > div > div.container > table > tbody > tr > td:nth-child(3)")
      .contains("Total")
      .should("be.visible");
  });
  it("esures that the quantity of the item is updated rather than added mutlitple times in the cart if the user clicks the 'Add To Cart' button multple times", () => {
    cy.visit("http://localhost:3000/products/5f31cf4384cfa5581b82da54");
    cy.get("button").contains("Add To Cart").click().click();
    cy.get(".navbar-nav").contains("Cart").click();
    cy.get("#root > div > div.container > table > tbody > tr > td:nth-child(3)")
      .contains("2")
      .should("be.visible");
  });
  it("ensures that the user is brought to the paynow screen where they can pay after they click 'next' on the checkout page", () => {
    cy.visit("http://localhost:3000/products/5f31cf4384cfa5581b82da54");
    cy.get("button").contains("Add To Cart").click();
    cy.get(".navbar-nav").contains("Cart").click();
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Pay").should("be.visible");
  });

  it("allows the user to checkout with their item and see their order on the order page", () => {
    cy.visit("http://localhost:3000/products/5f31cf4384cfa5581b82da55");
    cy.get(
      "#root > div > main > div > div:nth-child(2) > div:nth-child(2) > div > form > div > input"
    ).type("{backspace} 3");
    cy.get("button").contains("Add To Cart").click();
    cy.get(".navbar-nav").contains("Cart").click();
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Pay").click();
    cy.get("#collapseOne > div > ul > li").contains(
      "Mousepad Quantity: 3 Price: $8.99"
    );
  });
});
