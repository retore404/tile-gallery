import React from "react";
import TileGalleryRow from "./component/TileGalleryRow";

export interface GalleryImage {
  url: string;
  width: number;
  height: number;
  suffix?: string;
}

export interface GalleryRow {
  leftImagesArray: GalleryImage[];
  rightImagesArray: GalleryImage[];
}

export interface GalleryProps {
  galleryRows: GalleryRow[];
  caption?: string;
}

const styles: Record<string, React.CSSProperties> = {
  galleryCaption: {
    fontSize: "75%",
    margin: 0,
    textAlign: "right",
  },
};

const TileGallery: React.FunctionComponent<GalleryProps> = ({
  galleryRows,
  caption,
}) => {
  return (
    <figure>
      {galleryRows.map((row, i) => {
        return (
          <TileGalleryRow
            key={i}
            leftImagesArray={row.leftImagesArray}
            rightImagesArray={row.rightImagesArray}
          />
        );
      })}
      {caption !== undefined ? (
        <figcaption style={styles.galleryCaption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
};

export default TileGallery;
