// db.books.find({"pages":{$lte:209}})

// db.books.aggregate([
//     {$match: {"pages":{$lte:201},"language":"English"}}
//     ])

// db.books.find({},{author:1,country:1,pages:1,title:1,_id:0})
// db.books.find({}).projection({author:1,country:1,pages:1,title:1,_id:0})

// db.books.aggregate([
//     {$match: {"pages":{$lte:209},"language":"English"}},
//     ])

// db.books.find().limit(50)

// db.books.aggregate([
//     {$match: {"pages":{$lte:209}}},
//     {$project: {author:1,pages:1}},
//     {$limit: 15}
//     ])

// db.books.find().select({author:1,country:1,pages:1,}).skip(50).limit(10)

// db.books.aggregate([
//     {$skip: 5}
//     ])
    