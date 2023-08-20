import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="100"
      width="100"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{ marginRight: 'auto', marginLeft: 'auto' }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};
