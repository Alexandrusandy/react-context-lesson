import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Routes>
      <Route exact path={``} element={<CollectionsOverview />} />
      <Route path={`/:collectionId`} element={<CollectionPage />} />
    </Routes>
  </div>
);

export default ShopPage;
