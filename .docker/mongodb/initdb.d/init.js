// app user
db.createUser({
    user: "guybrush",
    pwd: "melee",
    roles: [{ role: 'readWrite', db: "topics" }]
})