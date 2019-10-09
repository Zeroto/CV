import React from 'react';
import styles from './Spinner.module.css';

// spinner graphic from https://loading.io/css/

const Spinner: React.FC = () => (
  <div className={styles['lds-ring']}><div></div><div></div><div></div><div></div></div>
)

export default Spinner;