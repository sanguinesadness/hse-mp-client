import { InputImage } from 'components/image-input';
import { useEffect, useState } from 'react';
import { multipleImagesInputStyle as style } from './multiple-images-input.style';

type TMultipleImagesInputProps = {
  images: Array<string>;
  label?: string;
  onChange: (images: Array<string>) => void;
};

export const MultipleImagesInput = ({
  images: defaultImages,
  onChange,
  label
}: TMultipleImagesInputProps): JSX.Element => {
  const [images, setImages] = useState([...defaultImages, '']);

  const handleImageChange =
    (index: number) =>
    (image: string): void => {
      const result = images.map((_: string, i: number) => {
        if (i === index) {
          return image;
        }
        return _;
      });
      setImages(result);
    };

  useEffect(() => {
    onChange(images.filter((img: string) => !!img));

    const noEmptyImg = images[images.length - 1] !== '';
    if (noEmptyImg) {
      setImages([...images, '']);
    }
  }, [images]);

  return (
    <div className={style.wrapper}>
      {label && <div className={style.label}>{label}</div>}
      <div className={style.imagesGrid}>
        {images.map((image: string, index: number) => {
          if (image === '' && index !== images.length - 1) {
            return null;
          }
          return (
            <InputImage
              key={index}
              onChange={handleImageChange(index)}
              defaultValue={image}
            />
          );
        })}
      </div>
    </div>
  );
};
