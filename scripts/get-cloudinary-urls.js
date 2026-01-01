import { v2 as cloudinary } from "cloudinary";

// Config is loaded from .env.local via node --env-file=.env.local
// or we can manually load if needed, but the command flag is easier.

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function searchCprVideoFolder() {
  try {
    console.log("Searching in folder 'CprVideo'...");
    const result = await cloudinary.search
      .expression("folder:CprVideo")
      .max_results(500)
      .execute();

    console.log("\n--- Search Results in CprVideo ---");
    if (result.resources.length === 0) {
      console.log("No resources found in CprVideo folder.");
    } else {
      result.resources.forEach((res) => {
        console.log(`[${res.public_id}] \n${res.secure_url}`);
      });
    }
  } catch (error) {
    console.error("Error searching resources:", error);
  }
}

searchCprVideoFolder();

async function listRootFolders() {
  try {
    console.log("Listing root folders...");
    const result = await cloudinary.api.root_folders();

    console.log("\n--- Root Folders ---");
    result.folders.forEach((folder) => {
      console.log(`[${folder.name}] - ${folder.path}`);
    });
  } catch (error) {
    console.error("Error listing folders:", error);
    // Fallback: list some root resources which might show folder prefixes
    try {
      console.log("Listing root resources as fallback...");
      const root = await cloudinary.api.resources({
        type: "upload",
        max_results: 20,
      });
      root.resources.forEach((res) => {
        console.log(`[${res.public_id}]`);
      });
    } catch (e) {
      console.error(e);
    }
  }
}

listRootFolders();
