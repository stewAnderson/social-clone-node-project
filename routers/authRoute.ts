import express from "express";
import passport from "../middleware/passport";
import * as database from "../controller/postController";
import * as crypto from "crypto";
const router = express.Router();

router.get("/login", async (req, res) => {
    const user = await req.user;
    res.render("login", { user });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/posts",
    failureRedirect: "/auth/login",
  })
);

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect("/");
});

router.get("/signUp", async (req, res, next) => {
    try {
        const user = await req.user;
        res.render("signUp", { user });
    } catch (error) {
        console.error("Error GETTING sign up: ", error);
        res.status(500).send("Error GETTING sign up")
    }
});

router.post("/signUp",async (req, res, next) => {
    try {
        const user = req.user;
        const users = await database.getUsers();
        const unameExists = Object.values(users).some(user => user.uname === req.body.uname);

        if (!unameExists) {
            const newUser = await database.addUser(req.body.uname, req.body.password);
            req.login(newUser, (error) => {
                if (error) { return next(error); }
                res.redirect("/");
            });
        } else {
            console.log("uname exists");
            const unameErrorMsg = "Username already exists";
            res.render("signUp", { user, unameErrorMsg });
        }
    }catch (error) {
        console.log("Error signing up", error);
        res.status(500).send("Error signing up");
    }
});

export default router;
