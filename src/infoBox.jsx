import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./infoBox.css";
import Typography from '@mui/material/Typography';  

export default function InfoBox({ info }) {
   
  const INIT_URL = "https://d2h8hramu3xqoh.cloudfront.net/blog/wp-content/uploads/2022/08/Hazy-Skies-scaled.webp";
  let COLD_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kY0CHzszn-C7dydM5f8LgTgvYsBNsGjRAg&s";
  let HOT_URL="https://img.freepik.com/premium-photo/orange-sky-with-sun-clouds-hot-summer-weather_144356-92319.jpg?semt=ais_hybrid";
  let RAIN_URL="https://centralca.cdn-anvilcms.net/media/images/2019/01/02/images/Rainy_Weather_pix.max-1200x675.jpg";
    
    return (
        <div className="info-box">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL :COLD_URL}
                    title={info.weather}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
                        <p>Temperature: {info.temp}°C</p>
                        <p>Humidity: {info.humidity}%</p> 
                        <p>Min-temperature: {info.tempMin}°C</p>
                        <p>The weather is described as {info.weather} and feels like {info.feelsLike}°C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
