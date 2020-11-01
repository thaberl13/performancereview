const { setupServer } = require("./server");
const app = setupServer();
const PORT = 4000;

//Test server is listening on PORT
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
