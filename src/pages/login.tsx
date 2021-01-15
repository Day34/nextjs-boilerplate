import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, logoutSuccess } from '@stores/auth';
import { AuthStateType } from '@stores/auth/type';
import { RootState } from '@stores/index';

const Apitest = () => {
  const dispatch = useDispatch();
  const { authState, info } = useSelector((state: RootState) => state.auth);

  const onLogin = async () => {
    dispatch(loginRequest('email', '', 'admin@crocus.ai', 'Test123!@#'));
  };

  const onLogout = async () => {
    dispatch(logoutSuccess());
  };

  return (
    <>
      <h1>Welcome login</h1>
      <p>상태 {authState}</p>
      {authState === AuthStateType.LOGGED_IN ? (
        <>
          {info && <p>사용자 {`${info.lastName} ${info.firstName}`}</p>}
          <button type="button" onClick={onLogout}>
            로그아웃
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={onLogin}>
            로그인
          </button>
        </>
      )}
    </>
  );
};

export default Apitest;
