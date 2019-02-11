var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var redis = require("redis");

server.listen(3001);

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/lara.html");
});

app.get("/lara", function (request, response) {
    response.sendFile(__dirname + "/lara.html");
});

io.on("connection", function (socket) {
    var id = "assetreq";
    console.log("connection has stablished");
    socket.on("connect", function (message) {
        console.log(message);
    });
    //var temdata ='{"asset":[{"id":4,"type":"laptop","brandName":"Apple","modelName":"macBook pro","price":"150000","expireDate":null,"availability":1,"eid":null,"created_at":null,"updated_at":"2018-11-05 15:30:34"},{"id":2,"type":"laptop","brandName":"dell","modelName":"xps","price":"300000","expireDate":null,"availability":1,"eid":1,"created_at":null,"updated_at":"2018-09-11 20:39:14"},{"id":1,"type":"laptop","brandName":"hp","modelName":"spectre","price":"250000","expireDate":null,"availability":1,"eid":null,"created_at":null,"updated_at":"2018-09-12 20:47:57"}],"user":{"id":1,"firstName":"kasun","lastName":"kalhara","email":"kasun@gmail.com","email_verified_at":null,"activeness":1,"notificationStatus":0,"status":0,"department":"vr","sex":1,"created_at":"2018-09-10 17:35:02","updated_at":"2018-09-10 17:35:02"}}'
    var redisClient = redis.createClient();
    // var redisRes = redis.createClient();
    redisClient.subscribe(id);
    redisClient.on("message", function (channel, message) {
        // redisRes.subscribe(message);
        socket.emit(channel, message);
        //socket.emit(channel, temdata);
        // redisRes.on('50',function(message){
        //     socket.emit(message);
        // })
        console.log("new message in queue", channel, message);
        //socket.emit(channel,message);
        // socket.on('chat.message',function(message){
        //     io.emit('chat.message',message);
        // })
    });

    // var redis = require("redis");
    // var client = redis.createClient({ detect_buffers: true });

    // client.set("messages", "OK");

    // // This will return a JavaScript String
    // client.get("messages", function (err, message) {
    //     console.log(message); // Will print `OK`
    // });
});
