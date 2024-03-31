import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  createStation,
  getAllStations,
  getStationById,
  updateStation,
  deleteStation
} from "../services/station.service";

export const createStationHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      console.log("Body", req.body) ;
      let station = await createStation(req.body);
      res.status(201).json(station);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getAllStationsHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      let stations = await getAllStations();
      res.status(200).json(stations);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getStationByNumHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let station = await getStationById(num);
      res.status(200).json(station);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const updateStationHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let station = await updateStation(num, req.body);
      res.status(200).json(station);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deleteStationHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let station = await deleteStation(num);
      res.status(200).json(station);
    } catch (error) {
      throw new Error(error);
    }
  }
);