import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  createCandidate,
  getAllCandidates,
  getCandidateById,
  updateCandidate,
  deleteCandidate,
} from "../services/candidate.service";
import { Storage } from '@google-cloud/storage';
const storage = new Storage({
  credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON)
});
const bucketName = process.env.GCS_BUCKET_NAME;
async function uploadToGoogleCloudStorage(filePath: string, fileName: string): Promise<string> {
  console.log("Uploading to google cloud storage") ;
  const bucket = storage.bucket(bucketName);
  const destination = `images/${fileName}`;
  const options = {
      destination,
      public: true, // This will make the file publicly accessible
  };

  // Uploads a local file to the bucket
  await bucket.upload(filePath, options);

  // Assuming the file is made public and you want to generate a public URL:
  const publicUrl = `https://storage.googleapis.com/${bucketName}/${destination}`;
  console.log({publicUrl});
  return publicUrl;
}

export const createCandidateHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      let imageUrl = null;
      if (req.file) {
        // Upload to Google Cloud Storage and get the public URL
        imageUrl = await uploadToGoogleCloudStorage(req.file.path, req.file.filename);
      }
      console.log("Body", req.body);
      let data = { ...req.body, imageUrl };
      console.log({ data });
      let candidate = await createCandidate(data);
      res.status(201).json(candidate);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getAllCandidatesHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      let candidates = await getAllCandidates();
      res.status(200).json(candidates);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getCandidateByNumHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let candidate = await getCandidateById(num);
      res.status(200).json(candidate);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const updateCandidateHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      let imageUrl = null;
      if (req.file) {
        // Upload to Google Cloud Storage and get the public URL
        imageUrl = await uploadToGoogleCloudStorage(req.file.path, req.file.filename);
      }
      console.log("Body", req.body);
      let data = { ...req.body };
      if (imageUrl) {
        data = { ...data, imageUrl };
      }
      console.log({ data });
      const { num } = req.params;
      let candidate = await updateCandidate(num, data);
      res.status(200).json(candidate);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deleteCandidateHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let candidate = await deleteCandidate(num);
      res.status(200).json(candidate);
    } catch (error) {
      throw new Error(error);
    }
  }
);
