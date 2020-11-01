import React, { useMemo } from 'react';
import { Icon } from 'antd-mobile';

import { appName } from '@/constants';
import Container from '@/layout/container';

import styles from './index.m.scss';

const RightIcon = ({ onClick }) => (
  <div onClick={onClick}>
    <Icon type="ellipsis" size="md" color="#fff" />
  </div>
);

const Shelf = () => {
  const right = useMemo(() => <RightIcon onClick={() => null} />, []);

  return (
    <Container showBar title={appName} className={styles.container} topRight={right}></Container>
  );
};

export default Shelf;
