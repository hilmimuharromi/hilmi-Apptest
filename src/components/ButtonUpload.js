import React, { useRef,  } from 'react'
import photoDummy from '../assets/photoDummy.png'

const ButtonUpload = ({ photo, setPhoto, setTempImage }) => {
  const hiddenFileInput = useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const data = event.target.files[0];
    setPhoto(URL.createObjectURL(data))
    setTempImage(data)
  };
  return (
    <div>
      <button 
      type='button'
      style={{ position: 'relative', height: '100%', backgroundColor: 'transparent' }}
        onClick={handleClick}>
        <img
          className='w-100px h-100px rounded-full mr-10 shadow'
          width={100}
          alt={photo}
          src={photo && photo !== 'N/A' ? photo : photoDummy} />
        <div style={{
          position: 'absolute',
          textAlign: 'center',
          top: 50,
          bottom: 0,
          right: 0,
          left: 0,
          height: 'fit-content',
          color: '#fff'
        }}>Edit</div>
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default ButtonUpload