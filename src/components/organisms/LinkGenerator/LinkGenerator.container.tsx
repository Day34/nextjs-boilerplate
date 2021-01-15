import React, { useState } from 'react';
import LinkGeneratorView from './LinkGenerator.view';

import * as T from './LinkGenerator.type';
import { RootState } from '@stores/index';
import { useSelector, useDispatch } from 'react-redux';

import LinkGeneratorStep1 from '@organisms/LinkGeneratorStep1';
import LinkGeneratorStep2 from '@organisms/LinkGeneratorStep2';
import LinkGeneratorStep3 from '@organisms/LinkGeneratorStep3';
import LinkGeneratorStep4 from '@organisms/LinkGeneratorStep4';
import { LinkStepPrev, LinkStepNext } from '@stores/link';

const LinkGeneratorContainer = () => {
  const { step, nidaLink, targetLink } = useSelector((state: RootState) => state.link);
  const dispatch = useDispatch();

  const onPrev = () => {
    dispatch(LinkStepPrev());
  };

  const onNext = () => {
    dispatch(LinkStepNext());
  };

  const onMoveStep2 = () => {
    onNext();
  };

  const onMoveStep3 = () => {
    onNext();
  };

  const onLogin = () => {};

  return (
    <LinkGeneratorView
      step={step}
      steps={['링크 만들기', '링크 선택하기', '링크 연결하기', '링크 완료']}
      onPrev={onPrev}
      onNext={onNext}
    >
      {step === 1 && <LinkGeneratorStep1 onPropNext={onMoveStep2} />}
      {step === 2 && <LinkGeneratorStep2 sourceLink={nidaLink} onPropPrev={onPrev} onPropNext={onMoveStep2} />}
      {step === 3 && (
        <LinkGeneratorStep3
          sourceLink={nidaLink}
          targetLink={targetLink}
          onPropPrev={onPrev}
          onPropNext={onMoveStep3}
        />
      )}
      {step === 4 && <LinkGeneratorStep4 sourceLink={nidaLink} onPropLogin={onLogin} />}
    </LinkGeneratorView>
  );
};

export default LinkGeneratorContainer;
