import React, {useState, useEffect} from 'react';
import '../App.css'

const apiKey = process.env.REACT_APP_NASA_KEY;

function Photos(props) {
    const [photoData, setPhotoData] = useState(null)
    useEffect(() => {
        const fetchPhoto = async () => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await response.json();
            setPhotoData(data);
            console.log(data);
        }
        fetchPhoto().then(r => console.log(r));

    }, []);
    if (!photoData) return <div/>
    return (
        <div className="Photos">
            <h2>ASTRONOMY PICTURE OF THE DAY</h2>
            {photoData.media_type === "image"
                ? (
                    <img src={photoData.url} alt={photoData.title}/>)
                : (
                    <iframe title="space-video" src={photoData.url} frameBorder="0" gesture="media"
                            allow="encrypted-media" allowFullScreen className="photo"
                    />)
            }
            <div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>
        </div>
    );
}

export default Photos;