// db.books.find({"pages":{$eq: 176}})
// db.books.find({"pages":{$ne: 224}})

// db.books.find({"pages":{$gt: 176}})
// db.books.find({"pages":{$gte: 328}})

// db.books.find({"pages":{$it: 328}})
// db.books.find({"pages":{$ite: 76}})

// db.books.find({"pages":{$in:[176,328,340]}})
// db.books.find({"pages":{$nin:[176,328,340]}})

// db.books.find({ $and: [{"pages" : {$eq: 224}}, {"year" : 1965}]})

// db.books.find()

// db.books.find({ $or: [{"pages" : {$eq: 384}}, {"year" : {$in: [1315, 1836,1958]}}]})

db.books.find({ $nor: [{"pages" : {$eq: 384}}, {"year" : {$in: [1315, 1836,1958]}}]})
// db.books.find({ "pages": {$not: {$lte: 384}} })

  