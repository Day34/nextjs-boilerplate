import React, { useEffect } from 'react';
import LinkGeneratorView from './LinkGenerator.view';

import * as T from './Home.type';
import Header from '@organisms/Header';
import LinkGenerator from '@organisms/LinkGenerator';
import Footer from '@organisms/Footer';

import { FooterNavigation as dummyNavigation } from '@dummies/Navigation';
import LinkRank from '@organisms/LinkRank';
import LinkRecommand from '@organisms/LinkRecommand';
import { useSelector } from 'react-redux';
import { RootState } from '@src/stores';

const HomeContainer = ({ rank, recommand }: T.HomeProps) => {
  const { step } = useSelector((state: RootState) => state.link);

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <div>
      <Header />
      <LinkGenerator />
      {step === 1 && <LinkRank rows={rank} />}
      {(step === 2 || step === 3) && <LinkRecommand rows={recommand} />}
      {/*<Footer menus={dummyNavigation} />*/}
    </div>
  );
};

export default HomeContainer;
