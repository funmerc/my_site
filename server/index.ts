import express from "express";
import cors from "cors";
import path from "path";
import Logger from "./modules/logger";
import APIRoutes from "./api/routes";

const logger = Logger("index.ts");

const app = express();
const port = process.env.PORT || 3000;

if (process.env?.LOCAL) {
  app.use(cors());
}

app.use(express.static("public"));
app.use(
  "/topics",
  express.static(path.join(__dirname, "../dist/angular-topics-app"))
);
app.use(
  "/home",
  express.static(path.join(__dirname, "../dist/vue-landing-app"))
);
app.use(
  "/references",
  express.static(path.join(__dirname, "../dist/react-references-app"))
);

app.use("/api", APIRoutes);

// Angular Page
app.get("/topics", (_req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../dist/angular-topics-app/index.html"));
});

// React Page
app.get("/references", (_req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../dist/react-references-app/index.html"));
});

// Vue Page
app.get("/home", (_req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../dist/vue-landing-app/index.html"));
});

app.get("*", (req, res) => {
  res.redirect("/home");
});

app.listen(port, () => {
  logger.log(`Server running on ${port}.`);
});
