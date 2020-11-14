// app user
db.createUser({
    user: "guybrush",
    pwd: "melee",
    roles: [{ role: 'readWrite', db: "topics" }]
})

// add standard user
db.appusers.insert({
    login: "admin",
    name: "Administrator",
    salt: "$2b$10$nX2hFriNII/drKX2CAtqNe",
    password: "$2b$10$nX2hFriNII/drKX2CAtqNek2iOP78cQEPTaaovcRdU6sGEz.Jb71C"
})