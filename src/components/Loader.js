import { ThreeDots } from 'react-loader-spinner';
import css from './Styles//Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#1976d2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
