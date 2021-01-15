import React from 'react';
import * as T from './LinkList.type';
import * as S from './LinkList.style';
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

const LinkListView = ({ isLoading, rows, onStatus, onLink, onEdit, onPublic, onReport }: T.LinkRecommandProps) => {
  const columns = [
    {
      field: 'url',
      headerName: '링크',
      flex: 1,
    },
    {
      field: 'level',
      headerName: '레벨',
      width: 150,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'createdAt',
      headerName: '생성일',
      width: 150,
      type: 'dateTime',
      valueFormatter: (params: ValueFormatterParams) => moment(params.value as number).format('YYYY-mm-DD'),
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'hit',
      headerName: '조회수',
      width: 100,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'status',
      headerName: '상태',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: ValueFormatterParams) => (
        <div>
          {(params.value as string) === '사용중' ? (
            '사용중'
          ) : (
            <Button type="button" variant="contained" color="primary" onClick={() => onStatus(params.value as string)}>
              {params.value}
            </Button>
          )}
        </div>
      ),
    },
    {
      field: 'options',
      headerName: '기능',
      width: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: ValueFormatterParams) => (
        <>
          <IconButton onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onLink}>
            <LinkIcon />
          </IconButton>
          <IconButton onClick={onPublic}>
            <VisibilityIcon />
          </IconButton>
          <IconButton onClick={onReport}>
            <AssessmentIcon />
          </IconButton>
        </>
      ),
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

export default LinkListView;
