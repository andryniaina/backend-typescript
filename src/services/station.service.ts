import Station from '../models/stationModel';

// Create a new Station
export const createStation = async (stationData) => {
  try {
    const newStation = new Station(stationData);
    const savedStation = await newStation.save();
    return savedStation;
  } catch (error) {
    throw error;
  }
};

// Convert station id to station name
export const getStationNameById = async (numStation) => {
  try {
    const station = await Station.findById(numStation);
    return station.name;
  } catch (error) {
    throw error;
  }
};

// Get all Stations
export const getAllStations = async () => {
  try {
    const stations = await Station.find();
    return stations;
  } catch (error) {
    throw error;
  }
};

// Get Station by numStation
export const getStationById = async (numStation) => {
  try {
    const station = await Station.findById(numStation);
    return station;
  } catch (error) {
    throw error;
  }
};

// Update Station by numStation
export const updateStation = async (numStation, updatedData) => {
  try {
    const updatedStation = await Station.findByIdAndUpdate(
      numStation,
      updatedData,
      { new: true }
    );
    return updatedStation;
  } catch (error) {
    throw error;
  }
};

// Delete Station by numStation
export const deleteStation = async (numStation) => {
  try {
    const deletedStation = await Station.findByIdAndDelete(numStation);
    return deletedStation;
  } catch (error) {
    throw error;
  }
};

