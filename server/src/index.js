const { setupServer } = require("./server");
const app = setupServer();
const PORT = 4000;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
