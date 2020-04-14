export default {
  items: [
    {
      title: true,
      name: 'Tableau de bord',      
      wrapper: {           // optional wrapper object
        element: '',      // required valid HTML5 element tag
        attributes: {},   // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
    },
    {
      name: 'Accueil',
      url: '/accueil',
      icon: 'icon-home'      
    },     
    {
      name: 'Utilisateurs',
      url: '/utilisateurs',
      icon: 'icon-people',
      // children: [                
      // ],
    },    
    {
      name: 'Coursiers',
      url: '/coursiers',
      icon: 'icon-people'      
    },
    {
      name: 'Courriers',
      url: '/courriers',
      icon: 'icon-envelope',
    },
    {
      name: 'Suivi des courriers',
      url: '/suividescourriers',
      icon: 'icon-chart'      
    },            
    {
      name: 'Archives',
      url: '/archives',
      icon: 'icon-folder-alt'      
    },            
    {
      name: 'Paramètres',
      url: '/parametres',
      icon: 'icon-settings',
      children: [
        {
          name: 'Profil',
          url: '/parametres/profil',
          icon: 'icon-user',
        },
        {
          name: 'Departement',
          url: '/parametres/departement',
          icon: 'icon-layers',
        }
      ],
    }    
  ]
};
