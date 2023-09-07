import React from 'react';

import Layout from '@/components/Layout';

import Card from '@/components/Card/Card';
import Modal from '@/components/Modal/Modal';

const Dashboard = () => {
  return (
    <Layout>
      <section>
        <Modal />
        <Card />
      </section>
    </Layout>
  );
};

export default Dashboard;
