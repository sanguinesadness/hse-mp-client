import { cx } from '@emotion/css';
import { useEffect, useState } from 'react';
import { photoViewerStyle as style } from './photo-viewer.style';

type TPhotoViewerProps = {
  primaryImage: string;
  secondaryImages: Array<string>;
};

export const PhotoViewer = ({
  primaryImage,
  secondaryImages
}: TPhotoViewerProps): JSX.Element => {
  const [imageList, setImageList] = useState<Array<string>>([
    primaryImage,
    ...secondaryImages
  ]);
  const [selectedImage, setSelectedImage] = useState<string>(primaryImage);

  const handleImageClick = (image: string) => () => {
    setSelectedImage(image);
  };

  useEffect(() => {
    setImageList([primaryImage, ...secondaryImages]);
  }, [secondaryImages]);

  return (
    <div className={style.wrapper}>
      <div className={style.list.wrapper}>
        {imageList.map((image: string, index: number) => (
          <div
            key={index}
            onClick={handleImageClick(image)}
            className={cx(style.list.item.wrapper.default, {
              [style.list.item.wrapper.selected]: selectedImage === image
            })}>
            <img alt="" src={image} className={style.list.item.image} />
          </div>
        ))}
      </div>
      <div className={style.primary.wrapper}>
        <img alt="" src={selectedImage} className={style.primary.image} />
      </div>
    </div>
  );
};
