import './App.css';
import React, {useState, useEffect} from 'react';
import { getTrendingTracksCover  } from './api/getRandomTrendingTracksCover'

const appName = 'my-app-l3';
const host = 'https://discovery-d.mainnet.audius.radar.tech/v1/tracks/trending?app_name=123test';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch(host)
    // .then((res) => {
    //   return res.json()
    // })
    // .then(data => {
    //   setData(data.data)
    //   console.log('res', data);
    // })
    // const updataData = async () => {
    //   const newData = await getTrendingTracks()
    //   setData(newData)
    // }
    // updataData()
    getTrendingTracksCover().then(setData)
  }, [])

  return (
    <div className="App">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        {
         // data.map((dataItem) => {
            // {console.log(dataItem);}
            // <img src={dataItem.artwork['480x480']} />
              <div>
                 <img src={data} />
                 {/* <p>{dataItem?.genre}</p> */}
              </div>
            
          }
        
      </div>
    </div>
  );
}

export default App;
