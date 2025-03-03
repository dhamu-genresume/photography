import { useEffect, useState } from "react";


const FOLDER_ID = "1cvJMpMS48zN6_5L6BoPWgNxuaj1bZVzS"; // Replace with your actual folder ID
const API_KEY = "AIzaSyDyRDCDHBkvu-trIPdBF9bbNAiuio4nVws"; // Replace with your Google API key

function GoogleDriveImages({ folderId }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink,thumbnailLink)`
        );
        const data = await response.json();
        console.log(data,"img data")
        if (data.files) {
          const imageLinks = data.files
            .filter((file) => file.mimeType.startsWith("image/"))
            .map((file) => ({
              id: file.id,
              url: `https://lh3.googleusercontent.com/d/${file.id}`,
              name: file.name,
            }));

          console.log(imageLinks,"imagelinks")
          setImages(imageLinks);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [folderId]);

  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,max-content))] gap-4 justify-center">
        {images.length > 0 && images[0].url !== undefined &&images.map((img) => (
          <img
            className="rounded-md w-full h-[200px] object-cover"
            key={img.id}
            src={img.url}
            alt={img.name}
          />
        ))}
      </div>
    </div>
  );
}

export default GoogleDriveImages;
