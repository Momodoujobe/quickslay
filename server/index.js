const express = require("express");
const app = express;
const mongoose = require("mongoose");
const routesUrls = require("./routes/index");
const cors = require("cors");

// Middleware in our application
app.use(cors());

// Activated body passer in our application
app.use(express.json({ extended: false }));

// Setting up url routes, all urls from ./routes/routes will be appended to /api.
app.use("/api", routesUrls);

// If there is not part, default to 4000.
const port = process.env.PORT || 4000;

// Port 4000 because our react app runs on port 3000 by default.
app.listen(port, () => console.log(`Server is up and running on port ${port}`));