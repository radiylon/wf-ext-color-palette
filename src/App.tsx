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
    webflow.setExtensionSize('large');
    getSiteInfo().then((info) => setSiteInfo(info));
  }, []);

  return (
    <div className='text-white flex flex-col items-center w-full p-4'>
      <h1 className='text-4xl font-bold mb-6'>{siteInfo?.siteName}</h1>
      <div className='max-w-2xl w-full text-left'>
        <pre className="whitespace-pre-wrap">{JSON.stringify(siteInfo, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
