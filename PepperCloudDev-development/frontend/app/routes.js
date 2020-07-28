// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import {getAsyncInjectors} from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const {injectReducer, injectSagas} = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          //  import('containers/Base/sagas'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          // injectSagas(baseSagas.default);
          injectSagas('home', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/login',
      name: 'Login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/reducer'),
          import('containers/Login/sagas'),
          import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas('login', sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/page/:pageId',
      name: 'Pages',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/GenericCore/reducer'),
          import('containers/GenericCore/sagas'),
          import('containers/GenericCore'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('pages', reducer.default);
          injectSagas('pages', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/leadDetail',
      name: 'LeadDetail',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Leads/LeadDetail/reducer'),
          import('containers/Leads/LeadDetail/sagas'),
          import('containers/Leads/LeadDetail'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          // console.log(injectSagas);
          injectReducer('leadDetail', reducer.default);
          injectSagas('leadDetail', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/task',
      name: 'task',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Task/reducer'),
          import('containers/Task/sagas'),
          //  import('containers/Base/sagas'),
          import('containers/Task'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('task', reducer.default);
          // injectSagas(baseSagas.default);
          injectSagas('task', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/calendar',
      name: 'calendar',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Calendar/reducer'),
          import('containers/Calendar/sagas'),
          //  import('containers/Base/sagas'),
          import('containers/Calendar'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('calendar', reducer.default);
          // injectSagas(baseSagas.default);
          injectSagas('calendar', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/company',
      name: 'company',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Company/reducer'),
          import('containers/Company/sagas'),
          import('containers/Company'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('company', reducer.default);
          injectSagas('company',sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
