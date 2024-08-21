// @ts-nocheck
import express from "express";
import * as database from "../controller/postController";
const router = express.Router();
import { ensureAuthenticated } from "../middleware/checkAuth";


router.get("/", async (req, res) => {
  try {
    const posts = await database.getPosts(20);
    const user = await req.user;
    const users = await database.getUsers();

    res.render("posts", { posts, user, users });

  } catch (error) {
    console.error("Error GETTING posts");
    res.status(500).send("Error GETTING posts");
  }
});

router.get("/create", ensureAuthenticated, (req, res) => {
  try {
    const user = req.user;
    res.render("createPosts", { user });

  } catch (error) {
    console.error("Error GETTING post creation");
    res.status(500).send("Error GETTING post creation");
  }
});

router.post("/create", ensureAuthenticated, async (req, res) => {
  console.log("create post called");
  try {
    const { title, link, description, sub } = req.body;
    const user = await req.user;
    const creator = await user.id;

    await database.addSub(sub, description);
    const post = await database.addPost(title, link, creator, description, sub);

    res.redirect(`/posts/show/${String(post.id)}`);

  } catch (error) {
    console.error("Error posting created post");
    res.status(500).send("Error POSTING created post")
  }
});

router.get("/show/:postid", async (req, res) => {
  try {
    const user = await req.user;
    const postId = req.params.postid;
    const post = await database.getPostById(postId);

    const votes = await database.getVotesForPost(postId);
    const voteCount = post.votes.reduce((total, vote) => total + vote.value, 0);

    let userVote;
    if (user) {
      const userId = user.id;
      userVote = await database.getUserVote(userId, postId);
      }
    res.render("individualPost", { user, post, userVote, voteCount });
  } catch (error) {
    console.error("Error GETTING post  ");
    res.status(500).send("Error POSTING created post")
  }
});

router.get("/edit/:postid", ensureAuthenticated, async (req, res) => {
  // I used a form on the individual post page so this route is not needed.
});

router.post("/edit/:postid", ensureAuthenticated, async (req, res) => {
  try {
    const postId = Number(req.params.postid);

    const changes = {
      title: req.body.title,
      link: req.body.link,
      description: req.body.description,
      subgroup: req.body.subgroup
    };

    await database.editPost(postId, changes);

    res.redirect(`/posts/show/${postId}`);
  } catch (error) {
    console.error("Error POSTING edit changes");
    res.status(500).send("Error POSTING edit changes");
  }
});

router.get("/deleteconfirm/:postid", ensureAuthenticated, async (req, res) => {
  // I used a form within the post page to do this
});

router.post("/delete/:postid", ensureAuthenticated, async (req, res) => {
  try {
    const postId = req.params.postid;
    const post = await database.getPostById(postId);
    const action = req.body.action;

    if (action === "delete") {
      console.log("Deleting post", postId);
      await database.deletePost(postId);
      return res.redirect(`/subs/show/${post.subgroup}`);
    } else {
      console.log("Cancelled deleting");
    }
    return res.redirect(`/posts/show/${postId}`);
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).send("Error deleting post");
  }
});

router.post("/comment-create/:postid", ensureAuthenticated, async (req, res) => {
  try {
    const user = await req.user;
    const userId = user.id;
    const postId = Number(req.params.postid);

    const commentText = req.body.commentText;
    const comment = await database.addComment(postId, userId, commentText);

    res.redirect(`/posts/show/${postId}`);
  } catch (error) {
    console.error("Error POSTING comment");
    res.status(500).send("Error POSTING comment", error);
  }
});

router.post("/comments/delete/:commentid", ensureAuthenticated, async (req, res) => {
  console.log("DELETE COMMENT ROUTE REACHED");
  try {
    const postId = req.body.postId;
    const commentId = req.params.commentid
    const action = req.body.action;

    if (action == "delete") {
      console.log("Deleting");
      await database.deleteComment(commentId);
      console.log("DELETED");

    } else {
      console.log("Canceled deleting");
    }

    return res.redirect(`/posts/show/${postId}`);
  } catch (error) {
    console.error("Error deleting comment", error);
    res.status(500).send("Error deleting comment: " + error);
  }
});

router.post("/vote/:postId", ensureAuthenticated, async (req, res) => {
  try {
    const user = await req.user;
    const userId = user.id;
    const postId = Number(req.params.postId);
    const value = parseInt(req.body.value);

    await database.updateVotes(userId, postId, value);

    res.redirect(`/posts/show/${postId}`);
  } catch (error) {
    console.error("Error POSTING vote", error);
    res.status(500).send("Error POSTING vote");
  }
});

export default router;
