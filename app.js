const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const mountains = ["denali", "olympus", "kilimanjaro", "matterhorn"];
const mountainRanges = ["alps", "andes", "himalayas", "rockies"];

// Your code here
//mountainsRouter
const mountainsRouter = express.Router();

app.use("/mountains", mountainsRouter);

mountainsRouter.get("/", (req, res) => {
  res.send(mountains);
});

//mountainRangesRouter
const mountainRangesRouter = express.Router();
app.use("/mountainRanges", mountainRangesRouter);

mountainRangesRouter.get("/", (req, res) => {
  res.send(mountainRanges);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
