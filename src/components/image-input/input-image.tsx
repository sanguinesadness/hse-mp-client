import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg';
import { ChangeEvent, useRef, useState } from 'react';
import { imageInputStyle as style } from './image-input.style';

type TInputImageProps = {
  defaultValue?: string;
  label?: string;
  onChange: (src: string) => void;
};

export const DEFAULT_IMG_SRC =
  'https://static.thenounproject.com/png/586769-200.png';

export const InputImage = ({
  defaultValue,
  label,
  onChange
}: TInputImageProps): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    defaultValue
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result as string);
        onChange(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDeleteClick = () => {
    setSelectedImage('');
    onChange('');
  };

  return (
    <div className={style.wrapper}>
      {label && <div className={style.label}>{label}</div>}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        className={style.input}
      />
      <div className={style.image.wrapper}>
        <img
          className={style.image.self}
          src={selectedImage || DEFAULT_IMG_SRC}
          alt="Preview Image"
          onClick={handleImageClick}
        />
        {selectedImage && (
          <div
            className={style.image.deleteButton.wrapper}
            onClick={handleDeleteClick}>
            <CrossIcon className={style.image.deleteButton.icon} />
          </div>
        )}
      </div>
    </div>
  );
};
