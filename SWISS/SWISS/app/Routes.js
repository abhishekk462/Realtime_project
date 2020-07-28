import React from 'react';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AssortList from './containers/AssortList';
import Trashlist from './containers/Trashlist';
import Mixlist from './containers/Mixlist';
import Datapreparation from './containers/Datapreparation';
import MenuBar from './containers/MenuBar';
import ShimamuraData from './containers/ShimamuraData';
import Screen3Page from './containers/Screen3Page';
import SettingsPage from './containers/SettingsPage';
import DownloadTable from './containers/DownloadPage';
import SolidList from './containers/SolidList';
import SolidListScan from './containers/SolidListScan';
import { Switch, Route, withRouter,BrowserRouter as Router } from 'react-router-dom';




export default () => (
  <App>
    <Route exact path={routes.HOME} component={HomePage}/>
    <Route path={routes.MixList} component={Mixlist}/>
    <Route path={routes.SOLID} component={SolidList}/>
    <Route path={routes.SOLID_SCAN} component={SolidListScan}/>
    <Route path={routes.ASSORT} component={AssortList}/>
    <Route path={routes.SETTINGS} component={SettingsPage}/>
    <Route path={routes.TrashList} component={Trashlist}/>

      {/* */}
      {/* <Route path={routes.TrashList} component={Trashlist}/> */}

       {/* <Route path={routes.DataPreparation} component={Datapreparation}/>  */}
       {/* <Route exact path={routes.Screen3} component={Screen3Page} /> */}
       {/* <Route exact path={routes.DownloadData} component={DownloadTable} /> */}
       {/* <Route path={routes.SOLID} component={SolidList}/>  */}

      {/* {/* <Route path={routes.Menubar} component={MenuBar}/>
      <Route path={routes.Shimamuradata} component={ShimamuraData}/>
      <Route path={routes.Screen3} component={Screen3Page} />  */}
  </App>
);
