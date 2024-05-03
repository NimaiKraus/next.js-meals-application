'use client';

import { useRef, useState } from 'react'

import classes from './image-picker.module.css'
import Image from 'next/image';

interface ImagePickerProps {
    label: string
    name: string
}

const ImagePicker = ({ label, name }: ImagePickerProps) => {
    const [pickedImage, setPickedImage] = useState<string>();

    const imageInputRef = useRef<HTMLInputElement>(null)

    const handlePickClick = () => {
        imageInputRef.current?.click()
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (!file) {
            return
        }

        const reader = new FileReader()

        reader.onload = () => {
            setPickedImage(reader.result as string)
        }

        reader.readAsDataURL(file)
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input
                    className={classes.input}
                    ref={imageInputRef}
                    type="file"
                    id={name}
                    name={name}
                    accept=".jpg,.jpeg,.png"
                    required
                    onChange={handleImageChange}
                />
                <div className={classes.preview}>
                    {pickedImage && <Image
                        src={pickedImage}
                        alt='Picked Image'
                        fill
                        sizes='100%'
                    />
                    }
                    {!pickedImage && <span>No image picked.</span>}
                </div>
                <button className={classes.button} type='button' onClick={handlePickClick}>
                    Choose an Image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker