
# COMP 3012 Final Project

## Stewart Anderson
## A01356573

First of all, I had a lot of fun with this it was a great project. I will definitely be expanding on this afterwards.

### Comments

I completed everything from the pass category except the optional comment details page. Comments are deletable but not
editable. Also, I only added one additional comment route, so I left most routes in `postRouters`. I was also able to 
avoid using some of the `get` routes by using some scripts to show / hide forms. I thought it looked better than
redirecting to pages with forms, hope that works.

#### Code organization

I only added one additional comment route, so I left most routes in `postRouters`. I believe I did a good job naming
variables, but I have a few alternations between camel and snake case. (learning too many languages at once)
and there that are mixed camel and snake case so sorry about that. My CSS file is also a mess, but it was just kind of
thrown together as a bonus. I spent A LOT of time getting the edit and delete buttons/forms looking good. I took maybe
a strange approach using forms for everything, but I found it was an easy way to send post requests... I also will
probably have some console.log's left behind from testing. I am also bad at commenting so good luck :S

### Ordering

I did not get much accomplished in the way of ordering. I have the subs ordered alphabetically. My strategy to order the
posts by timestamp would be to alter the `fake-db` `getPosts` function to just do it automatically before returning it
to the router. To give users the option to order by either votes or timestamp I would expand the `getPosts` function in 
`fake-db` to take another parameter passed from the ejs pages to return the posts sorted one way or the other.

#### Header

Boring header but a header none-the-less. I thought it made more sense to have the login/logout replace each other
and have create post its own button. It's on the home, subs, and sub pages.

### Voting

I got voting working great but its only on the `individual post` page. I spend a very long time on the buttons
and i'm quite proud of it. I should be easy enough for me to apply it to the other post listings. All I would need to
do is give the routes requiring it access to the posts object then the list of votes for each post. I could then .send 
an array of each posts votes to eh ejs page and use that in my forEach loop displaying the posts. I'm sure if I spent
some time I would get it. I did not feel I had the time to tackle ajax.

### Sign Up

Sign up works perfectly. I even added a message and a redirect if you try to create a username that already exists.
The sign up routes are in the auth router.

Sorry for the lengthy write up! Just thought I would give you some context just in case.

