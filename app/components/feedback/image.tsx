'use client'
'as'
import Image from 'next/image';
import React, {useState} from 'react'
import axios from 'axios';
import { useSession } from 'next-auth/react';

 
//Image_upload component = remember to use url params
const Image_Upload = () => {
    const {data: session} = useSession();
    const [selectedImages, setSelectedImages] :any = useState()
    // const [personName, setPersonName] = useState()
    console.log(session?.user.id)
    console.log("session ID")
    const handleApi = (e:any) => {
        e.preventDefault(); 
        alert("image_url");      
        const formData = new FormData(e.currentTarget);
        const image = formData.get('image');
        const data = Object.fromEntries(formData)
        console.log(data)
        console.log(session?.user.id)
        formData.append('image', selectedImages)
        // console.log("session id") 
        const Image_RL = `http://localhost:3300/yearbook/api/${session?.user.id}/upload/userthumbnail`;        
        //  console.log(image)     
        axios.post(Image_RL, formData).then((res) => {
            console.log(res)
        })
    }

    const uploadImage = (e:any) => {
        const selectedFiles = e.target.files;
        const selectedFileArray = Array.from(selectedFiles)
        const imageArray: any = selectedFileArray.map((file:any) => {
            return URL.createObjectURL(file)
        })
        setSelectedImages(imageArray)
                
    }

const content = (
    <section>
            <form onSubmit={handleApi}>
                <input
                    name="image"
                    type="file"
                    multiple
                    accept="image/png, image/jpeg, image/jpg"                
                    onChange= {uploadImage}
                    className= "year-book-form_input"
                    
                />
                <div className="year-book-images">
                    {selectedImages && selectedImages.map((image:any, index:any) => {
                        return (
                            <div key={index} className="year-book-images_container">                      
                                    <Image 
                                    src={image} 
                                    alt='uploaded image' 
                                    height={100} 
                                    width={100} 
                                    />         
                            </div>
                        )
                    })

                    }
                </div>
                                                   
                <button type="submit" className="year-book-form_btn">submit</button>               
            </form>
        </section>
)


    return content;
}

export default Image_Upload;