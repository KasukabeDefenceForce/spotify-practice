import { useState, useEffect } from 'react';
import { Slider, Song } from './components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Credentials } from './Credentials';

function App() {
  const spotify = Credentials();
  const [token, setToken] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);
  // const token = "BQC4-YzzWudQqdhx7lFcHEyX6Bn1fYtoEMqUV9Cpy64HODiEaAd2kgWtgGsYdpTZtezWsRKNhT-nRttU_HuMNJs6LPtgTldtSLcBiFfESUJNeegehozWsrbB0JJoc7ejmHEpWvPqmw3VKLzhOcCpYBTT-A5R8IlFJLjg7jkRw5wLpiBiGOPPF3cqSOmdP2N_P2wB9tEp2mgCqYosAD3b_HbEgoPm2NCvvqS1D-qtLB6pZ_X42YlEmFhEEeevXst0ny67TxrRqmaXJEy0doM4bbW5YaHW_Z5cLNtWvBvH8486OmOuGhWHU_iopbL0myQcer1sldO-zc4Ego6bnktWHSCozQSPmSDPp7Jb4jEK8CY";
  const url = "https://api.spotify.com/v1/tracks?market=ES&ids=7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B";
  // const url = "https://api.spotify.com/v1/me/top/tracks"
  useEffect(() => {

    fetch('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },
      body: 'grant_type=client_credentials',
      method: 'POST'
    })
      .then(tokenResponse => tokenResponse.json())
      .then(data1 => {
        setToken(data1.access_token);
        fetch(url, {
          headers: { Authorization: `Bearer ${data1.access_token}` }
        })
        .then(response => response.json())
          .then(data => {
            const { tracks } = data;
            setSongs(tracks);
          });
      })
    }, [spotify.ClientId ,spotify.ClientSecret]);

  return (
    <div>
      <Slider items={songs} />
    </div>
  );
}

export default App;