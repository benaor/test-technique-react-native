import React, { useEffect } from "react";
import { router } from "expo-router";
import { useGalleryStore } from "../hooks/useGalleryStore";
import Loader from "../components/Loader";
import { useDelay } from "../hooks/useDelay";

const IndexPage: React.FC = () => {
  const { wait } = useDelay(3000);
  const getPhotos = useGalleryStore((state) => state.viewAllPhotoInGallery);

  useEffect(() => {
    (async function () {
      await wait();
      await getPhotos();
      router.push("/gallery");
    })();
  }, []);

  return <Loader />;
};

export default IndexPage;
