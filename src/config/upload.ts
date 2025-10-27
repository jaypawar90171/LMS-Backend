import { v2 as cloudinary } from "cloudinary";
import multer from 'multer'

cloudinary.config({
  cloud_name: "dorgm2sje",
  api_key: "968116822669483",
  api_secret: "Z6P0u2ovIGMEzrzOPkZapfj252g",
});

export const uploadFile = async (filePath: any) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    console.log(result);
    return result;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const upload = multer({ 
  storage: multer.diskStorage({}),
  limits: {fileSize: 500000}
});


