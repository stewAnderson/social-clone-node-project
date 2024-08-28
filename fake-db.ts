// @ts-nocheck
const users = {
  1: {
    id: 1,
    uname: "alice",
    password: "alpha",
  },
  2: {
    id: 2,
    uname: "theo",
    password: "123",
  },
  3: {
    id: 3,
    uname: "prime",
    password: "123",
  },
  4: {
    id: 4,
    uname: "leerob",
    password: "123",
  },
  5: {
    id: 5,
    uname: "stew",
    password: "123",
  },
};

const posts = {
  101: {
    id: 101,
    title: "Mochido opens its new location in Coquitlam this week",
    link: "https://dailyhive.com/vancouver/mochido-coquitlam-open",
    description:
        "New mochi donut shop, Mochido, is set to open later this week.",
    creator: 1,
    subgroup: "food",
    timestamp: 1643648446955,
  },
  102: {
    id: 102,
    title: "2023 State of Databases for Serverless & Edge",
    link: "https://leerob.io/blog/backend",
    description:
        "An overview of databases that pair well with modern application and compute providers.",
    creator: 4,
    subgroup: "coding",
    timestamp: 1642611742010,
  },
  103: {
    id: 103,
    title: "10 Best Hikes in British Columbia",
    link: "https://www.explore-mag.com/10_Best_Hikes_in_BC",
    description: "Discover the most breathtaking hikes in British Columbia.",
    creator: 5,
    subgroup: "outdoors",
    timestamp: 1643985328320,
  },
  104: {
    id: 104,
    title: "Introduction to Machine Learning",
    link: "https://www.coursera.org/learn/machine-learning",
    description: "Learn the basics of machine learning with this comprehensive online course.",
    creator: 3,
    subgroup: "education",
    timestamp: 1644077829412,
  },
  105: {
    id: 105,
    title: "New Album Release: 'Dreamland' by Glass Animals",
    link: "\"https://www.glassanimals.com/\"",
    description: "Check out the latest album 'Dreamland' from Glass Animals.",
    creator: 2,
    subgroup: "music",
    timestamp: 1644077829434,
  },
  106: {
    id: 106,
    title: "The Future of Web Development in 2024",
    link: "https://webdevfuture.com/2024-trends",
    description: "Explore the upcoming trends and technologies in web development for 2024.",
    creator: 4,
    subgroup: "coding",
    timestamp: 1645152833000,
  },
  107: {
    id: 107,
    title: "The Ultimate Guide to Camping in the Rockies",
    link: "https://outdooradventure.com/camping-rockies-guide",
    description: "Everything you need to know for a successful camping trip in the Rocky Mountains.",
    creator: 5,
    subgroup: "outdoors",
    timestamp: 1645239433000,
  },
  108: {
    id: 108,
    title: "Mastering Data Structures in Python",
    link: "https://datastructurespython.com/master-guide",
    description: "A comprehensive guide to understanding and using data structures in Python.",
    creator: 3,
    subgroup: "education",
    timestamp: 1645326033000,
  },
  109: {
    id: 109,
    title: "Best Coffee Shops in Vancouver",
    link: "https://vancouvercoffee.com/best-shops-2024",
    description: "A list of the top coffee shops to visit in Vancouver this year.",
    creator: 1,
    subgroup: "food",
    timestamp: 1645412633000,
  },
  110: {
    id: 110,
    title: "Exploring the Sounds of Indie Pop in 2024",
    link: "https://indiepop2024.com/exploring-sounds",
    description: "An in-depth look at the evolution of indie pop music in 2024.",
    creator: 2,
    subgroup: "music",
    timestamp: 1645499233000,
  },
};

const subs = {
  food: {
    name: "Food",
    description: "Discussion about food-related topics.",
  },
  coding: {
    name: "Coding",
    description: "Discussion about coding and programming.",
  },
  outdoors: {
    name: "Outdoors",
    description: "Discussion about outdoor activities and adventures.",
  },
  education: {
    name: "Education",
    description: "Discussion about educational topics and resources.",
  },
  music: {
    name: "Music",
    description: "Discussion about music and artists.",
  },
};

const comments = {
  9001: {
    id: 9001,
    post_id: 102,
    creator: 1,
    description: "Actually I learned a lot :pepega:",
    timestamp: 1642691742010,
  },
  9002: {
    id: 9002,
    post_id: 102,
    creator: 2,
    description: "Great insights! Thanks for sharing.",
    timestamp: 1642691742020,
  },
  9003: {
    id: 9003,
    post_id: 102,
    creator: 3,
    description: "I found this article very helpful.",
    timestamp: 1642691742030,
  },
  9004: {
    id: 9004,
    post_id: 102,
    creator: 4,
    description: "I have a question regarding one of the topics discussed.",
    timestamp: 1642691742040,
  },
  9005: {
    id: 9005,
    post_id: 103,
    creator: 1,
    description: "These hikes look amazing! Can't wait to try them.",
    timestamp: 1642691742050,
  },
  9006: {
    id: 9006,
    post_id: 103,
    creator: 3,
    description: "I've done a few of these hikes. They're breathtaking!",
    timestamp: 1642691742060,
  },
};

const votes = [
  { user_id: 2, post_id: 101, value: +1 },
  { user_id: 3, post_id: 101, value: +1 },
  { user_id: 4, post_id: 101, value: +1 },
  { user_id: 3, post_id: 102, value: -1 },
];

function debug() {
  console.log("==== DB DEBUGING ====");
  console.log("users", users);
  console.log("posts", posts);
  console.log("comments", comments);
  console.log("votes", votes);
  console.log("==== DB DEBUGING ====");
}

function getUser(id) {
  return users[id];
}

function addUser(username, password) {
  const id = Object.keys(users).length + 1;

  users[id] = {
    id,
    uname: username,
    password: password
  };

  return users[id];
}

function getUserByUsername(uname: any) {
  return getUser(
      Object.values(users).filter((user) => user.uname === uname)[0].id
  );
}

function getVotesForPost(post_id) {
  return votes.filter((vote) => vote.post_id === parseInt(post_id));
}

function getUserVote(userId, postId) {
  return votes.find(vote => vote.user_id === userId && vote.post_id ===  parseInt(postId));
}

function updateVotes(user_id, post_id, new_value) {

  const vote = votes.find(vote => vote.post_id === post_id && vote.user_id == user_id);

  if (vote) {

    if (vote.value == new_value) {
      const index = votes.indexOf(vote);
      votes.splice(index, 1);

    } else {
      vote.value = new_value;
    }

  } else {
    votes.push({ user_id, post_id, value: new_value });
  }
  console.log(votes);
}

function decoratePost(post) {
  console.log("Decorate post:  ", post);
  post = {
    ...post,

    creator: users[post.creator],
    votes: getVotesForPost(post.id),
    comments: Object.values(comments)
        .filter((comment) => comment.post_id === post.id)
        .map((comment) => ({ ...comment, creator: users[comment.creator] })),
  };
  return post;
}

/**
 * @param {*} n how many posts to get, defaults to 5
 * @param {*} sub which sub to fetch, defaults to all subs
 */
function getPosts(n: any = 5, sub?: any  = undefined) {
  let allPosts = Object.values(posts);
  if (sub) {
    allPosts = allPosts.filter((post) => post.subgroup === sub);
  }
  allPosts.sort((a, b) => b.timestamp - a.timestamp);
  return allPosts.slice(0, n);
}

function getUsers(){
  return Object.values(users);
}

function getPost(id) {
  return decoratePost(posts[id]);
}

function addPost(title, link, creator, description, subgroup) {
  let id = Math.max(...Object.keys(posts).map(Number)) + 1;
  let post = {
    id,
    title,
    link,
    description,
    creator: Number(creator),
    subgroup,
    timestamp: Date.now(),
  };
  posts[id] = post;
  return post;
}

function editPost(post_id, changes = {}) {
  let post = posts[post_id];
  if (changes.title) {
    post.title = changes.title;
  }
  if (changes.link) {
    post.link = changes.link;
  }
  if (changes.description) {
    post.description = changes.description;
  }
  if (changes.subgroup) {
    post.subgroup = changes.subgroup;
  }
}

function deletePost(post_id) {
  delete posts[post_id];
}

async function getSubs() {
  return Object.values(subs).sort((a, b) => {
    // Convert subgroup names to lowercase for case-insensitive sorting
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    // Compare subgroup names alphabetically
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

async function addSub(newSub, subDescription) {
  try {
    if(subs[newSub]) {
      console.log(`Subgroup "${newSub}" already exists.`);
      return;
    }
    subs[newSub] = { name: newSub, description: subDescription };
    console.log(`Subgroup "${newSub}" added successfully.`);
  } catch (error) {
    console.error('Error adding sub:', error);
    throw error;
  }
}


function addComment(post_id, creator, description) {
  let id = Math.max(...Object.keys(comments).map(Number)) + 1;
  let comment = {
    id,
    post_id: Number(post_id),
    creator: Number(creator),
    description,
    timestamp: Date.now(),
  };
  comments[id] = comment;
  return comment;
}

function deleteComment(comment_id) {
  delete comments[comment_id];
}

export {
  addComment,
  addSub,
  addUser,
  debug,
  deleteComment,
  getUser,
  getUserByUsername,
  getPosts,
  getPost,
  addPost,
  editPost,
  deletePost,
  getSubs,
  decoratePost,
  getUsers,
  getUserVote,
  getVotesForPost,
  updateVotes
};
