import React from 'react';

const Steeds = React.lazy(() => import('./views/Steeds/Steeds'));
const SteedForm = React.lazy(() => import('./views/Steeds/SteedsForm'));
const Mails = React.lazy(() => import('./views/Mails/Mails'));
const MailsForm = React.lazy(() => import('./views/Mails/MailsForm'));
const Home = React.lazy(() => import('./views/Home/Home'));
const MailsTracker = React.lazy(() => import('./views/MailsTracker/MailsTracker'));
const Archives = React.lazy(() => import('./views/Archives/Archives'));
const Profile = React.lazy(() => import('./views/Settings/Profile/Profile'));
const ProfileForm = React.lazy(() => import('./views/Settings/Profile/ProfileForm'));
const Department = React.lazy(() => import('./views/Settings/Department/Department'));
const DepartmentForm = React.lazy(() => import('./views/Settings/Department/DepartmentForm'));
const Users = React.lazy(() => import('./views/Users/Users'));
const UserForm = React.lazy(() => import('./views/Users/UserForm'));

const routes = [
  { path: '/', exact: true, name: 'Tableau de bord' },
  { path: '/accueil', name: 'Accueil', component: Home },      
  { path: '/coursiers', exact: true, name: 'Coursiers', component: Steeds },  
  { path: '/enregistrerCoursier', exact: true, name: "Enregistrement d'un coursier", component: SteedForm },
  { path: '/suividescourriers', exact: true, name: 'Suivi des courriers', component: MailsTracker },  
  { path: '/archives', exact: true, name: 'Archives', component: Archives },
  { path: '/courriers', name: 'Courriers', component: Mails },
  { path: '/enregistrerCourrier', exact: true, name: "Enregistrement d'un courrier", component: MailsForm },
  { path: '/utilisateurs', exact: true,  name: 'Utilisateurs', component: Users },  
  { path: '/enregistrerUtilisateur', exact: true, name: 'Enregistrement d\'un utilisateur', component: UserForm },
  { path: '/parametres', exact: true, name: 'Parametres', component: Profile },
  { path: '/parametres/profil', name: 'Profil', component: Profile },
  { path: '/enregistrerProfil', exact: true, name: "Enregistrement d'un profil", component: ProfileForm },
  { path: '/parametres/departement', name: 'Departement', component: Department },
  { path: '/enregistrerDepartement', exact: true, name: "Enregistrement d'un département", component: DepartmentForm }
];

export default routes;
