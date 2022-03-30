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

Project.create(image_url: 'https://i.ibb.co/WKVQZsB/coffeetycoon.png', 
    github: 'https://github.com/jpena925/coffee-tycoon-frontend',
    title: 'Coffee Tycoon', 
    description: 'A coffee/tea shop simulator web based game. Check it out here:',
    user_id: 3
)

Project.create(image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wordle_196_example.svg/1200px-Wordle_196_example.svg.png', 
    github: 'https://github.com/DavidMSands/codle-frontend',
    title: 'Codle', 
    description: 'Codle is a web based game built in Javascript React with a Ruby Sinatra SQLite3 database backend. Gameplay is just like other Word (Wordle) type games. Guess the letters, get hints from the colors, guess in 6 tries and share your results.',
    user_id: 2
)

Project.create(image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wordle_196_example.svg/1200px-Wordle_196_example.svg.png', 
    github: 'https://github.com/DavidMSands/codle-frontend',
    title: 'Codle', 
    description: 'Codle is a web based game built in Javascript React with a Ruby Sinatra SQLite3 database backend. Gameplay is just like other Word (Wordle) type games. Guess the letters, get hints from the colors, guess in 6 tries and share your results.',
    user_id: 4
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

Post.create(text: 'The T has been spilt.', user_id: 1)
Post.create(text: 'https://dev.to/adelinealmanzar/react-context-vs-containment-319g', user_id: 2)
Post.create(text: 'Ummmmmmm, does this work?', user_id: 1)
Post.create(text: 'Ummmmmmm, does this work?', user_id: 3)
Post.create(text: 'Ummmmmmm, does this work?!!!', user_id: 3)
Post.create(text: 'Ummmmmmm, does this work?', user_id: 4)

Relationship.create(follower_id: 2, followee_id: 1)
Relationship.create(follower_id: 1, followee_id: 2)
# Relationship.create(follower_id: 2, followee_id: 3)
# Relationship.create(follower_id: 2, followee_id: 4)

Comment.create(text: "This is my first post, y'all.", :commentable => Post.first, user_id: 1)
Comment.create(text: 'Wow, thanks for the info!', :commentable => Post.second, user_id: 1)
Comment.create(text: 'Thanks for reading. :)', :commentable => Post.second, user_id: 2)
Comment.create(text: 'Yes, it seems to be working.', :commentable => Post.third, user_id: 2)
Comment.create(text: "Awesome Project!", :commentable => Project.first, user_id: 2)
Comment.create(text: "WOW KING!!!!", :commentable => Project.first, user_id: 3)
Comment.create(text: "This is so inspiring!", :commentable => Project.first, user_id: 3)
Comment.create(text: "Why is this so tacky?", :commentable => Project.first, user_id: 4)
Comment.create(text: "We talkin Boba?", :commentable => Post.first, user_id: 4)
Comment.create(text: "Yesssssss TW Fam", :commentable => Post.first, user_id: 3)
Comment.create(text: "Thanks for adding me!!!", :commentable => Post.third, user_id: 2)

puts 'done seeding! 🌱🌱🌱'