import Banner from './components/Banner';
import PrincipalBanner from './components/PrincipalBanner';
import SectionBanner from './components/SectionBanner';
import { Suspense } from 'react';
import getDataBanner from './utils/getDataBanner';
import Loading from './components/UI/Loading';

const Home = async () => {

  const big1 = await getDataBanner('big-1')
  const big2 = await getDataBanner('big-2')
  const small1 = await getDataBanner('small-1')
  const small2 = await getDataBanner('small-2')

  if (!big1 || !big2 || !small1 || !small2) {
    return null;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <PrincipalBanner />

      <main style={{
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem', // Consistent spacing between sections
        marginBottom: '6rem',
        flex: 1
      }}>
        <Suspense fallback={<Loading />}>
          <SectionBanner products={small1} />
          <Banner products={big1} />
          <SectionBanner products={small2} />
          <Banner products={big2} />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
