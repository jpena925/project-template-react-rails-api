# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'seeding! 🌱🌱🌱'

User.create(email: "rebekah@twiddlewakka.com", password: '0', bio: 'The coolest boba addict ever.', 
    name: "Rebekah", github: 'https://github.com/rebekah-zhou', linkedin: 'https://www.linkedin.com/in/rebekahzhou/',
    blog: 'https://medium.com/@rebekahzhou')

User.create(email: 'adeline@twiddlewakka.com', password: '0', bio: 'insert bio here', 
    name: 'Adeline', github: 'https://github.com/adelinealmanzar', linkedin: 'https://www.linkedin.com/in/adeline-almanzar/',
    blog: 'https://dev.to/adelinealmanzar')

User.create(email: 'david@twiddlewakka.com', password: '0', bio: "Can play guitar, but only when not sick, not out of town, or fingers aren't broken.", 
    name: 'David', github: 'https://github.com/DavidMSands', linkedin: 'https://www.linkedin.com/in/david-max-sands/',
    blog: 'https://medium.com/@davidmaxsands')

User.create(email: 'jack@twiddlewakka.com', password: '0', bio: 'Pro tennis player. Dabbles in bassoon.', 
    name: 'Jack', github: 'https://github.com/jpena925', linkedin: 'https://www.linkedin.com/in/jackpena/',
    blog: 'https://medium.com/@jack_pena')




Project.create(image_url: 'https://i.ibb.co/RhdspQd/Screen-Shot-2022-03-29-at-3-22-17-PM.png', 
    github: 'https://github.com/rebekah-zhou/animalcrossinghub',
    title: 'ACHub', 
    description: 'A web app featuring villagers, fossils, and critters from Animal Crossing New Horizons.',
    user_id: 1
)

Project.create(image_url: 'https://i.ibb.co/RhdspQd/Screen-Shot-2022-03-29-at-3-22-17-PM.png', 
    github: 'https://github.com/rebekah-zhou/animalcrossinghub',
    title: 'ACHub', 
    description: 'A web app featuring villagers, fossils, and critters from Animal Crossing New Horizons.',
    user_id: 2
)

Project.create(image_url: 'https://i.ibb.co/WKVQZsB/coffeetycoon.png', 
    github: 'https://github.com/jpena925/coffee-tycoon-frontend',
    title: 'Coffee Tycoon', 
    description: 'A coffee/tea shop simulator web based game. ',
    user_id: 1
)

Project.create(image_url: "https://i.ibb.co/vdqRc3n/Screen-Shot-2022-03-31-at-9-36-33-AM.png", 
    github: 'https://github.com/jpena925/coffee-tycoon-frontend',
    title: 'Coffee Tycoon', 
    description: 'A coffee/tea shop simulator web based game. Check it out here:',
    user_id: 4
)

Project.create(image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wordle_196_example.svg/1200px-Wordle_196_example.svg.png', 
    github: 'https://github.com/DavidMSands/codle-frontend',
    title: 'Codle', 
    description: 'Codle is a web based game built in Javascript React with a Ruby Sinatra SQLite3 database backend. Gameplay is just like other Word (Wordle) type games. Guess the letters, get hints from the colors, guess in 6 tries and share your results.',
    user_id: 2
)

Project.create(image_url: 'https://i.ibb.co/SJP8PSq/Screen-Shot-2022-03-31-at-9-40-19-AM.png', 
    github: 'https://github.com/DavidMSands/codle-frontend',
    title: 'Codle', 
    description: 'Codle is a web based game built in Javascript React with a Ruby Sinatra SQLite3 database backend. Gameplay is just like other Word (Wordle) type games. Guess the letters, get hints from the colors, guess in 6 tries and share your results.',
    user_id: 3
)

Technology.create(name: 'javascript', project_id: 1)
Technology.create(name: 'javascript', project_id: 2)
Technology.create(name: 'reactjs', project_id: 3)
Technology.create(name: 'reactjs', project_id: 4)
Technology.create(name: 'reactjs', project_id: 5)
Technology.create(name: 'reactjs', project_id: 6)
Technology.create(name: 'sinatra', project_id: 3)
Technology.create(name: 'sinatra', project_id: 4)
Technology.create(name: 'ruby', project_id: 3)
Technology.create(name: 'ruby', project_id: 4)
Technology.create(name: 'ruby-on-rails', project_id: 5)
Technology.create(name: 'ruby-on-rails', project_id: 6)


# UserProject.create(user_id: 1, project_id: 1)
# UserProject.create(user_id: 2, project_id: 1)

Post.create(text: 'Trying to get my local cafe to make a TwiddleWakka Boba shape. Thoughts?', user_id: 1)
Post.create(text: 'https://dev.to/adelinealmanzar/react-context-vs-containment-319g', user_id: 2)
Post.create(text: 'Ruby on Rails or Node.js?', user_id: 1)
Post.create(text: 'Petition to rename software engineers to google superstars', user_id: 3)
Post.create(text: 'Trying to figure out what TwiddleWakka means but afraid to google it.', user_id: 3)
Post.create(text: 'When are they going to create a social media platform that uses ñ in usernames?!', user_id: 4)
Post.create(text: 'Social Media is garbage but I think I love TW. Officially a Twiddler.', user_id: 1)
Post.create(text: 'Any advice on how to make a tennis game with vanilla JS?', user_id: 4)
Post.create(text: 'Why do linked lists trigger me?', user_id: 2)
Post.create(text: 'I just got a job! Making 10,000,000 a month!!!!!', user_id: 2)
Post.create(text: 'SQL is the friend you wish you never met.', user_id: 3)
Post.create(text: 'THREE MORE WEEKS UNTIL I AM DONE!!', user_id: 4)
Post.create(text: 'How am I supposed to choose between all these job offers? Advice???', user_id: 1)
Post.create(text: 'My first post as a twakker!', user_id: 3)
Post.create(text: 'Check my page. F4F.', user_id: 2)

Relationship.create(follower_id: 2, followee_id: 1)
Relationship.create(follower_id: 1, followee_id: 2)
# Relationship.create(follower_id: 2, followee_id: 3)
# Relationship.create(follower_id: 2, followee_id: 4)

Comment.create(text: "Like really stop with the sphere boba shape right?", :commentable => Post.first, user_id: 1)
Comment.create(text: 'Wow, thanks for the info!', :commentable => Post.second, user_id: 1)
Comment.create(text: 'Thanks for reading. :)', :commentable => Post.second, user_id: 2)
Comment.create(text: 'Rails Fam. Purrrrr.', :commentable => Post.third, user_id: 2)
Comment.create(text: "Rebekah, this has gone too far.", :commentable => Post.first, user_id: 2)
Comment.create(text: "KING STUFF.", :commentable => Post.first, user_id: 3)
Comment.create(text: "But fr boba kinda sick...", :commentable => Post.first, user_id: 3)
Comment.create(text: "I want to say support but going switzerland here. soz.", :commentable => Post.first, user_id: 4)
Comment.create(text: "Agree, but call me a google supernova please.", :commentable => Post.find(4), user_id: 4)
Comment.create(text: "Yeah... can't help you there David.", :commentable => Post.find(5), user_id: 1)
Comment.create(text: "Retweet", :commentable => Post.find(6), user_id: 2)
Comment.create(text: "Not a fan of that word you just used.", :commentable => Post.find(7), user_id: 3)
Comment.create(text: "Learn a different language. VJS is garbage :)", :commentable => Post.find(8), user_id: 3)
Comment.create(text: "Its really giving Red Rover vibes for me.", :commentable => Post.find(9), user_id: 1)
Comment.create(text: "STOP. But fr Venmo meeeeee", :commentable => Post.find(10), user_id: 4)
Comment.create(text: "SQL truly does not need a sequel 🤮", :commentable => Post.find(11), user_id: 4)
Comment.create(text: "Lets gooooooooo", :commentable => Post.find(12), user_id: 1)
Comment.create(text: "Girlie lets talk, I have the best choose an offer workflow.", :commentable => Post.find(13), user_id: 2)
Comment.create(text: "Stop making this app cheugy already", :commentable => Post.find(14), user_id: 4)
Comment.create(text: "Got you!!!", :commentable => Post.find(15), user_id: 1)
Comment.create(text: "PC4PC?", :commentable => Post.find(15), user_id: 3)
Comment.create(text: "I can see the money nowwww", :commentable => Post.find(12), user_id: 3)
Comment.create(text: "Stop trying to make Linked Lists happen", :commentable => Post.find(9), user_id: 4)
Comment.create(text: "Learn PHP, it is bae.", :commentable => Post.find(8), user_id: 3)
Comment.create(text: "I don't think you can say that...", :commentable => Post.find(7), user_id: 4)
Comment.create(text: "Thanks for adding me!!!", :commentable => Post.third, user_id: 2)
Comment.create(text: "I had so much fun with this!", :commentable => Project.find(1), user_id: 2)
Comment.create(text: "The background is amazing! Teach me.", :commentable => Project.find(1), user_id: 4)
Comment.create(text: "Awesome job, this is great.", :commentable => Project.find(2), user_id: 3)
Comment.create(text: "Thank you!!!!", :commentable => Project.find(2), user_id: 2)
Comment.create(text: "We did so great! Congrats!", :commentable => Project.find(3), user_id: 4)
Comment.create(text: "I want to play this all day.", :commentable => Project.find(3), user_id: 2)
Comment.create(text: "Cool Project, but why have tea if its called Coffee Tycoon?", :commentable => Project.find(4), user_id: 3)
Comment.create(text: "😩 This is cyber bullying!", :commentable => Project.find(4), user_id: 4)
Comment.create(text: "This was so fun, but I dont think I'll ever play Wordle again.", :commentable => Project.find(5), user_id: 3)
Comment.create(text: "OK this game is hard!", :commentable => Project.find(5), user_id: 4)
Comment.create(text: "Maybe I need to brush up my technical lexicon...", :commentable => Project.find(6), user_id: 1)
Comment.create(text: "Thanks for picking an accessible color palette!", :commentable => Project.find(6), user_id: 4)

puts 'done seeding! 🌱🌱🌱'