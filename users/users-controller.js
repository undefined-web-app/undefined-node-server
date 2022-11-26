import * as dao from "./users-dao.js";

const UsersController = (app) => {
  const createUser = async (req, res) => {
    const user = req.body;
    const actualUser = await dao.createUser(user);
    res.json(actualUser);
  };

  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };

  const deleteUser = async (req, res) => {
    const uid = req.param.uid;
    const status = await dao.deleteUser(uid);
    res.json(status);
  };

  const updateUser = async (req, res) => {
    const uid = req.params.uid;
    const updates = req.body;
    const status = await dao.updateUser(uid, updates);
    res.json(status);
  };

  app.post("/user", createUser);

  app.get("/user", findAllUsers);

  app.delete("/user/:uid", deleteUser);

  app.put("/user/:uid", updateUser);

  app.post("/register", () => {});

  app.post("/login", () => {});

  app.post("/logout", () => {});
};

export default UsersController;
