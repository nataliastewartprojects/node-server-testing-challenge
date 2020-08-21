const db = require("../data/dbConfig.js");
const Users = require("./users-model.js");

describe("usersModel", () => {
  beforeEach(async () => {
    // empty table and reset primary key back to 1
    await db("user").truncate();
  });

  describe("insert()", () => {
    it("should add users", async () => {
      // truncate the table to make sure it's empty
      // happens in the beforeEach() global

      // make request, send data
      await Users.insert({
        username: "userOne",
        password: "secret",
      });

      // check the hobbit is in the database (without using the GET / route)
      const users = await db("user");

      expect(users).toHaveLength(1);
    });
  });
});
