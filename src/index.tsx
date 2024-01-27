import React from "react";

export interface GalleryImage {
  url: string;
  width: number;
  height: number;
  suffix?: string;
}

export interface GalleryProps {
  leftImagesArray: GalleryImage[];
  rightImagesArray: GalleryImage[];
}

const styles: Record<string, React.CSSProperties> = {
  galleryWrapper: {
    display: "flex",
    gap: "3px",
    width: "100%",
  },
  galleryFigure: {
    margin: "0",
    width: "100%",
    height: "100%",
  },
  galleryImage: {
    verticalAlign: "bottom",
    height: "100%",
  },
};

const TileGallery: React.FunctionComponent<GalleryProps> = ({
  leftImagesArray,
  rightImagesArray,
}) => {
  // 最大幅の取得
  const leftColImageMaxWidth = Math.max(
    ...leftImagesArray.map((image) => image.width),
  );
  const rightColImageMaxWidth = Math.max(
    ...rightImagesArray.map((image) => image.width),
  );

  // 各画像の情報を各列の最大幅画像の幅に合わせたときの高さに書き換え
  const adjustedLeftImages: GalleryImage[] = [];
  for (const img of leftImagesArray) {
    adjustedLeftImages.push({
      url: img.url,
      width: leftColImageMaxWidth,
      height: (img.height * leftColImageMaxWidth) / img.width,
    });
  }
  const adjustedRightImages: GalleryImage[] = [];
  for (const img of rightImagesArray) {
    adjustedRightImages.push({
      url: img.url,
      width: rightColImageMaxWidth,
      height: (img.height * rightColImageMaxWidth) / img.width,
    });
  }

  // 各列の調整後の画像高さを足し合わせる
  let aggregatedLeftImagesHeight: number = 0;
  for (const img of adjustedLeftImages) {
    aggregatedLeftImagesHeight += img.height;
  }
  let aggregatedRightImagesHeight: number = 0;
  for (const img of adjustedRightImages) {
    aggregatedRightImagesHeight += img.height;
  }

  // 各列の幅に対する高さの倍率を算出
  const leftColHeightToWidthRatio =
    aggregatedLeftImagesHeight / leftColImageMaxWidth;
  const righColHeightToWidthRatio =
    aggregatedRightImagesHeight / rightColImageMaxWidth;

  const leftColWidthRatio =
    righColHeightToWidthRatio /
    (righColHeightToWidthRatio + leftColHeightToWidthRatio);
  const righColWidthRatio = 1 - leftColWidthRatio;

  const leftColWidthPercent = leftColWidthRatio * 100 + "%";
  const rightColWidthPercent = righColWidthRatio * 100 + "%";

  // 左列・右列のスタイル定義
  const dynamicStyles: Record<string, React.CSSProperties> = {
    galleryLeftCol: {
      display: "flex",
      gap: "3px",
      flexDirection: "column",
      flexBasis: leftColWidthPercent,
    },
    galleryRightCol: {
      display: "flex",
      gap: "3px",
      flexDirection: "column",
      flexBasis: rightColWidthPercent,
    },
  };

  return (
    <div style={styles.galleryWrapper}>
      <div style={dynamicStyles.galleryLeftCol}>
        {leftImagesArray.map((image) => (
          <figure key={image.url} style={styles.galleryFigure}>
            <a
              href={image.url}
              className="galleryImageLink"
              data-lightbox={image.url}
              data-title={image.url}
            >
              <img
                src={
                  image.suffix !== null && image.suffix !== undefined
                    ? image.url + image.suffix
                    : image.url
                }
                width={image.width}
                height={image.height}
                style={styles.galleryImage}
              />
            </a>
          </figure>
        ))}
      </div>
      <div style={dynamicStyles.galleryRightCol}>
        {rightImagesArray.map((image) => (
          <figure key={image.url} style={styles.galleryFigure}>
            <a
              href={image.url}
              className="galleryImageLink"
              data-lightbox={image.url}
              data-title={image.url}
            >
              <img
                src={
                  image.suffix !== null && image.suffix !== undefined
                    ? image.url + image.suffix
                    : image.url
                }
                width={image.width}
                height={image.height}
                style={styles.galleryImage}
              />
            </a>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default TileGallery;
