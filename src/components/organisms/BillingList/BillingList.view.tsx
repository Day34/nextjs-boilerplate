import React from 'react';
import * as T from './BillingList.type';
import * as S from './BillingList.style';
import { DataGrid, ValueFormatterParams } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import moment from 'moment-timezone';
import IconButton from '@material-ui/core/IconButton';
import AssessmentIcon from '@material-ui/icons/Assessment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import { ExpansionPanel, FormControl, FormLabel, Grid, Input, MenuItem, Select } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const BillingListView = ({ isLoading, rows, onExtend }: T.BillingListProps) => {
  const currencyFormatter = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });

  const columns = [
    {
      field: 'level',
      headerName: '요금제',
      flex: 1,
      renderCell: (params: ValueFormatterParams) => (
        <>
          {params.value}
          <Button type="button" variant="contained" color="primary" onClick={onExtend}>
            자동결제 해지
          </Button>
        </>
      ),
    },
    {
      field: 'createdAt',
      headerName: '결제일',
      width: 150,
      valueFormatter: (params: ValueFormatterParams) => moment(params.value as number).format('YYYY-mm-DD'),
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'price',
      headerName: '결제금액',
      width: 150,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
      valueFormatter: ({ value }: ValueFormatterParams) => currencyFormatter.format(Number(value)),
    },
    {
      field: 'expireAt',
      headerName: '만료일',
      width: 150,
      valueFormatter: (params: ValueFormatterParams) => moment(params.value as number).format('YYYY-mm-DD'),
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'paymentType',
      headerName: '결제방법',
      width: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'serviceStatus',
      headerName: '상태',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  return (
    <div>
      <S.TableStyles style={{ width: '100%', height: 1000 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowCount={100}
          disableColumnMenu
          // rowsPerPageOptions={[5, 10, 20]}
          // paginationMode="server"
          loading={isLoading}
          // onPageChange={handlePageChange}
          disableClickEventBubbling
        />
      </S.TableStyles>
    </div>
  );
};

export default BillingListView;
