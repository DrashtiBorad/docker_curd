const { EntitySchema } = require("typeorm");

const User = new EntitySchema({
  name: "User",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    name: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});

module.exports = { User };
