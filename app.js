const EventEmitter = require("events");
const customeEvent = new EventEmitter();

customeEvent.on("response", () => {
  console.log("response recieved!");
});
customeEvent.on("response", () => {
  console.log("response is processing...");
});

customeEvent.emit("response");
