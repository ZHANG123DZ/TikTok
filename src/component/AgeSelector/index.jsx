import styles from './styles.module.scss';

import Selector from '../Selector';
function AgeSelector() {
  return (
    <div className={styles.DivAgeSelector}>
      <Selector
        placeholder={'Tháng'}
        list={Array(12).fill('1')}
        label={'Tháng'}
        isNum={true}
        dataName={'month'}
      />
      <Selector
        placeholder={'Ngày'}
        list={Array(31).fill('1')}
        label={'Ngày'}
        isNum={true}
        dataName={'day'}
      />
      <Selector
        placeholder={'Năm'}
        list={Array(100).fill('1')}
        label={'Năm'}
        isNum={true}
        dataName={'year'}
      />
    </div>
  );
}

export default AgeSelector;
