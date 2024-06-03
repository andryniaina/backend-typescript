import { NextFunction, Request, Response } from "express";

// Middleware de gestion d'erreur qui permet de standardiser le format de retour lors d'une erreur
export const errorHandler = (err, req: Request, res: Response, next: NextFunction) => {

  console.log("Error") ;
  console.log(err) ;

  const statusCode = 400;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

