import { useState, useEffect } from 'react'

const getSiteInfo = async () => {
  const siteInfo = await webflow.getSiteInfo();
  console.log(siteInfo);
  return siteInfo;
}

type SiteInfo = Awaited<ReturnType<typeof getSiteInfo>>;

function App() {
  const [siteInfo, setSiteInfo] = useState<SiteInfo>();

  useEffect(() => {
    getSiteInfo().then((info) => setSiteInfo(info));
  }, []);

  return (
    <div>
      <h1 className='text-4xl font-bold'>Hello World</h1>
      <p>{siteInfo?.siteName}</p>
      <p>{siteInfo?.siteId}</p>
      <p>{siteInfo?.domains[0].url}</p>
    </div>
  )
}

export default App
