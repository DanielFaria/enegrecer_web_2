import React from 'react';
import Logo from './../Logo';
import Nav from './../Nav';
import Topbar from './../Topbar';
import Botao from './../Botao';
import Footer from './../Footer';
import Social from './../Social';
import { withHistoryPropTypes } from './../sharedPropTypes';


const networks = [
  { title: 'Facebook', href: '#', icon: 'facebook-square' },
  { title: 'Twitter', href: '#', icon: 'twitter' },
  { title: 'Instagram', href: '#', icon: 'instagram' },
];

const Home = props => (
  <div>
    <div id="banner">
      <div id="banner__blur" />
      <div className="container">
        <Topbar
          leftComponent={<Logo />}
          rightComponent={
            <Nav history={
              props.history // eslint-disable-line react/prop-types
            }
            />}
        />

        <div className="row">
          <div className="col-md-4">
            <div className="en-subtitle--primary">LOREM IPSUM SIT</div>
            <div className="en-title en-title--light en-title--marker">LOREM IPSUM CONSECTETUR</div>
            <p id="en-banner__description" className="en-text--light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Botao
              name="denuncia"
              onClick={
                () => props.history.push('/painel/denuncias/nova') // eslint-disable-line react/prop-types
              }
              colored
            >Denunciar Racismo</Botao>
          </div>
        </div>
      </div>
    </div>

    <Footer>
      <Social networks={networks} />
    </Footer>
  </div>
);

Home.propTypes = withHistoryPropTypes();

export default Home;
