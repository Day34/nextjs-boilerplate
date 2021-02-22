import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { SeparatorProps } from './Separator.type';
import * as S from './Separator.style';

const Separator = ({ items }: SeparatorProps) => {
  return (
    <S.Container>
      {items.map((item, index) => (
        <div>
          <Link href={item.url || '#'}>
            <Typography style={{ fontWeight: 'bold' }} component="span">
              {item.title}
            </Typography>
          </Link>
        </div>
      ))}
    </S.Container>
  );
};

export default Separator;
