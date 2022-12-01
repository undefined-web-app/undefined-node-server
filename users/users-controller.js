import * as dao from "./users-dao.js";
import { findByCredentials, findByUsername } from "./users-dao.js";

let currentUser = null;

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
    currentUser = await dao.findUserById(uid);
    console.log(currentUser);
    res.json(currentUser);
  };

  const register = async (req, res) => {
    const user = req.body;
    const existingUser = await dao.findByUsername(user.username);
    if (existingUser) {
      res.sendStatus(403);
      return;
    }
    const currentUser = await dao.createUser(user);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const login = async (req, res) => {
    const credentials = req.body;
    const existingUser = await dao.findByCredentials(
      credentials.username,
      credentials.password
    );
    if (!existingUser) {
      res.sendStatus(403);
      return;
    }
    req.session["currentUser"] = existingUser;
    currentUser = existingUser;
    res.json(existingUser);
  };

  const profile = async (req, res) => {
    if (currentUser) {
      res.json(currentUser);
      return;
    }
    res.sendStatus(403);
  };

  const logout = (req, res) => {
    currentUser = null;
    res.sendStatus(200);
  };

  app.post("/users", createUser);

  app.get("/users", findAllUsers);

  app.delete("/users/:uid", deleteUser);

  app.put("/users/:uid", updateUser);

  app.post("/register", register);

  app.post("/login", login);

  app.post("/profile", profile);

  app.post("/logout", logout);
};

export default UsersController;
