import React from 'react';

const Steeds = React.lazy(() => import('./views/Steeds/Steeds'));
const Mails = React.lazy(() => import('./views/Mails/Mails'));
const Home = React.lazy(() => import('./views/Home/Home'));
const MailsTracker = React.lazy(() => import('./views/MailsTracker/MailsTracker'));
const Archives = React.lazy(() => import('./views/Archives/Archives'));
const Profile = React.lazy(() => import('./views/Settings/Profile/Profile'));
const Department = React.lazy(() => import('./views/Settings/Department/Department'));
const Users = React.lazy(() => import('./views/Users/Users'));

const routes = [
  { path: '/', exact: true, name: 'Tableau de bord' },
  { path: '/accueil', name: 'Accueil', component: Home },      
  { path: '/coursiers', exact: true, name: 'Coursiers', component: Steeds },  
  { path: '/suividescourriers', exact: true, name: 'Suivi des courriers', component: MailsTracker },  
  { path: '/archives', exact: true, name: 'Archives', component: Archives },
  { path: '/courriers', name: 'Courriers', component: Mails },
  { path: '/utilisateurs', exact: true,  name: 'Utilisateurs', component: Users },  
  { path: '/parametres', exact: true, name: 'Parametres', component: Profile },
  { path: '/parametres/profil', name: 'Profil', component: Profile },
  { path: '/parametres/departement', name: 'Departement', component: Department }
];

export default routes;
