import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'О НАС'} />
    <Header title="О НАС">АДРЕС, КОНТАКТЫ, ИНФОРМАЦИЯ</Header>
    <Container center={center}>
      <h3>
        На этой странице появится контактная информация и форма заявки с сайта{' '}
      </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
