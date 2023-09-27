const book1 = {
    title: "Война и Мир",
    description: "Роман-эпопея, описывающий события войн против Наполеона: 1805 года и отечественной 1812 года. Признан критикой всего мира величайшим эпическим произведением литературы нового времени.",
    author: "Лев Толстой",
  };
  const book2 = {
    title: "Мастер и Маргарита",
    description: "Итоговое произведение выдающегося отечественного прозаика и драматурга Михаила Афанасьевича Булгакова",
    author: "Михаил Булгаков",
  };
  const book3 = {
    title: "Собачье сердце",
    description: "Одно из самых любимых читателями произведений Михаила Булгакова. Вас ждёт полный рассказ о необыкновенном эксперименте гениального доктора.",
    author: "Михаил Булгаков",
  };
  const book4 = {
    title: "Мёртвые души",
    description: "«…Говоря о „Мертвых душах“, можно вдоволь наговориться о России», – это суждение поэта и критика П. А. Вяземского объясняет особое место поэмы Гоголя в истории русской литературы: и огромный успех у читателей, и необычайную остроту полемики вокруг главной гоголевской книги, и многообразие высказанных мнений, каждое из которых так или иначе вовлекает в размышления о природе национального мышления и культурного сознания, о настоящем и будущем России.",
    author: "Николай Гоголь",
  };
  
  beforeEach(() => {
    
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });
  
  describe("Favorite books testing", () => {
    it("Should add book to favorite through function 'add new'", () => {
      cy.addBook(book1);
      cy.visit("/favorites");
      cy.get(".card-title").should("contain.text", book1.title);
    });
  
    it("Should delete book from favorite", () => {
      cy.visit("/favorites");
      cy.contains(book1.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.contains(book1.title).should("not.exist");
    });
  
    it("Should add book to favorite through 'Book list' page", () => {
      cy.addBookNoFavorite(book2);
      cy.contains(book2.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.visit("/favorites");
      cy.contains(book2.title).should("be.visible");
    });
  
    it("Should remove all favorite books", () => {
      cy.addBook(book3);
      cy.addBook(book4);
      cy.removeAllFavorite();
      cy.contains("Please add some book to favorit on home page!").should(
        "exist"
      );
    });
  });