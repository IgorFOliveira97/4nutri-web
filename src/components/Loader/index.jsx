import { TailSpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#00FFBA"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      wrapperClass=""
      visible={true}
    />
  );
}
