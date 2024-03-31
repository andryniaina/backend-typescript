const dotenv = require("dotenv").config();

import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorMiddleware";
import axios from "axios";
import asyncHandler from "express-async-handler";
import userRoutes from "./routes/userRoutes" ;
import voteRoutes from "./routes/voteRoutes" ;
import candidateRoutes from "./routes/candidate.routes" ;
import voterRoutes from "./routes/voter.routes" ;

const connectDB = require('./config/db');

connectDB();
// Creation de l'application Express
const app = express();
const port = process.env.PORT || 5005;

//Middleware CORS
app.use(cors());

// Utilisation des middlewares permettant de recevoir du json et des données en form
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', userRoutes);
app.use('/api/vote',voteRoutes);
app.use('/api/admin/candidate',candidateRoutes) ;
app.use('/api/admin/voter',voterRoutes) ;

app.get("/", (_, res) => {
  res.status(200).json({ message: "Evote API" });
});

app.get(
  "/gateway",
  asyncHandler(async(_, res) => {
    try {
      const SAMPLE_APIKEY = "97834158-3224-4CE7-95F9-A148C886653E";
      const response = await axios.get(
        "http://fabric-rest-sample.localho.st/api/assets",
        {
          headers: {
            "X-Api-Key": SAMPLE_APIKEY,
          },
        }
      );
      // Handle response data
      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error) {
      throw error;
    }
  })
);

// Utilisation du middleware de gestion d'erreur
app.use(errorHandler);

// Lancement de l'application
app.listen(port, () => {
  console.log(`API Server actif sur le port ${port}`);
});
