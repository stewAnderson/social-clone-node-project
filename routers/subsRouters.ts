// const { ensureAuthenticated } = require("../middleware/checkAuth");
import express from "express";
import * as database from "../controller/postController";
const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const user = await req.user;
    const subgroups = await database.getSubs();
    res.render("subs", { user, subgroups });
  } catch (error) {
    console.error("Error GETTING subgroups: ", error);
    res.status(500).send("Error GETTING subgroups");
  }

});

router.get("/show/:subname", async (req, res) => {
  try {
    const user = await req.user;
    const users = await database.getUsers();
    const subgroup = req.params.subname.toLowerCase();
    const posts = await database.getPosts(20, subgroup);
    res.render("sub", { user, users, posts, subgroup });
  } catch (error) {
    console.error("Error GETTING subgroup: ", error);
    res.status(500).send("Error GETTING subgroup");
  }
});

export default router;
