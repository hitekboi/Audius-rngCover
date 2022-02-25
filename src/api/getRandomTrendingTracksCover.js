const appName = 'my-app-l3';

const selectHost = async () => {
  const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
  console.log('getting Audius host');
  const host = await fetch('https://api.audius.co')
    .then((r) => r.json())
    .then((j) => j.data)
    .then((d) => sample(d))
    .catch((err) => console.log(err));
  return host;
};

export const getTrendingTracksCover = async () => {
  

  console.log('getting trending tracks:');
  const host = await selectHost();
  console.log('host: ', host);
  console.log(
    `url: ${host}/v1/tracks/trending?$&app_name=${appName}`
  );

  const res = await fetch(
    `${host}/v1/tracks/trending?&app_name=${appName}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }
  ).catch((err) => console.log(err));

  const json = await res.json();
  console.log('json', json.data);
  return json.data[Math.floor(Math.random()*10)].artwork['480x480'];
};

