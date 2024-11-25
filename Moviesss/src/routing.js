import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from './App';

import Upcoming from './components/Upcoming';
import TopRated from './components/TopRated';
import Popular from './components/Popular';

const router = createBrowserRouter([
  {
    path: "/",
        element: <App />,
    
        childer: [
            {
                path: '/popular',
                element: <Popular />
            }
,
              {
                path: '/upcoming',
                element: <Upcoming />
            }
              ,
                {
                path: '/top',
                element: <TopRated />
            }
            
                
                
        ]
  },
]);
export default router;