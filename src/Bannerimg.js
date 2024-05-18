import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bannerimg = () => {
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    fetchBannerList();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const uploadImage = async () => {
    try {
      const response = await axios.post('https://tulirmatrimony.com/controlapi/addbanner.php', {
        image: image,
      });
      setImageUrl(response.data.imageUrl);
      fetchBannerList(); // Refresh banner list after successful upload
    } catch (error) {
      setErrorMessage('Error uploading image');
      console.error('Error uploading image', error);
    }
  };

  const fetchBannerList = async () => {
    try {
      const response = await axios.get('https://tulirmatrimony.com/controlapi/bannerlist.php');
      setBannerList(response.data.body); // Set bannerList to response.data.body
    } catch (error) {
      console.error('Error fetching banner list', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={uploadImage}>Upload Image</button>
      {imageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt="Uploaded" />
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}
      <h2>Banner List:</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {bannerList.map((banner) => (
              <tr key={banner.id}>
                <td>
                  <img src={banner.image} alt={`Banner ${banner.id}`} style={{ width: '100px', height: 'auto' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bannerimg;
