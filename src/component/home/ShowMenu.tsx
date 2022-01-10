import React from 'react';
import { menusType } from '../../types';
import {
  Tag
} from 'antd'

interface menus {
  menusTypes: Array<menusType>
}

const ShowMenu = (props: menus) => {
  const { menusTypes } = props;
  return (
    <div>
      {
        menusTypes.map(item => {
            return <Tag key={item.key}>{item.name}</Tag>
        })
      }
    </div>
  );
}

export default ShowMenu