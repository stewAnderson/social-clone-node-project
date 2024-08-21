import * as db from "../fake-db";


// Make calls to your db from this file!
async function getPosts(n = 5, sub: string) {
  return db.getPosts(n, sub);
}

async function getPostById(postId: string) {
  return db.getPost(postId);
}

async function addPost(title: any, link: any, creator: any, description: any, subgroup: any) {
  return db.addPost(title, link, creator, description, subgroup);
}

async function editPost(postId: any, changes = {}){
  return db.editPost(postId, changes)
}

async function deletePost(postId: any) {
  return db.deletePost(postId);
}
async function getUsers(){
  return db.getUsers();
}

async function addUser(username: string, password: string) {
  return db.addUser(username, password);
}

async function getSubs() {
  return db.getSubs();
}

async function addSub(newSub: any, subDescription: any) {
  return db.addSub(newSub, subDescription);
}
async function addComment(post_id: number, creator: number, description: string) {
  return db.addComment(post_id, creator, description);
}

async function deleteComment(comment_id: number) {
  return db.deleteComment(comment_id);
}

async function getVotesForPost(postId: any) {
  return db.getVotesForPost(postId);
}

async function getUserVote(userId:number, postId: number) {
  return db.getUserVote(userId, postId);
}

async function updateVotes(user_id: number, post_id: number, new_value: number) {
  return db.updateVotes(user_id, post_id, new_value);
}

export { getPosts, getPostById, getUsers, addUser, getSubs, addComment, deleteComment, addPost, deletePost, addSub, editPost, getVotesForPost,
  updateVotes, getUserVote};

