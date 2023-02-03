import { IonImg } from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ImageConverter = () => {

  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    var file=e.target.files;
    if(file!=null){
      reader.readAsDataURL(file[0]);
      reader.onload = () => {
        setImagePreview(reader.result as string);

        var formData = new FormData();
        formData.append('lien', reader.result as string);

       // useEffect(()=>{
          axios.post("https://projetencherefinal-production.up.railway.app/photo?idEnchere=1",formData).then((res)=>{             
            }).catch((error)=>{
            alert("error"+error);
          })
        //},[])

        
      };
    }
  };

  return (
    <>
      <input type="file" onChange={handleImageChange} />
    </>
  );
};

export default ImageConverter;
