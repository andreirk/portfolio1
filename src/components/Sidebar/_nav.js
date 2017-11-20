export default {
  items: [
    // {
    //   name: 'Dashboard',
    //   url: '/dashboard',
    //   icon: 'icon-speedometer',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW'
    //   }
    // },
    {
      title: true,
      name: 'UI elements',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Components',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        // {
        //   name: 'Buttons',
        //   url: '/components/buttons',
        //   icon: 'icon-puzzle'
        // },
        {
          name: 'AdminPage',
          url: '/admin',
          icon: 'icon-puzzle'
        },
        {
          name: 'Auth',
          url: '/auth',
          icon: 'icon-puzzle'
        },
        // {
        //   name: 'Social Buttons',
        //   url: '/components/social-buttons',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'Cards',
        //   url: '/components/cards',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'Forms',
        //   url: '/components/forms',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'Modals',
        //   url: '/components/modals',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'Switches',
        //   url: '/components/switches',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'Tables',
        //   url: '/components/tables',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'Tabs',
        //   url: '/components/tabs',
        //   icon: 'icon-puzzle'
        // }
      ]
    },
    // {
    //   name: 'Icons',
    //   url: '/icons',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Font Awesome',
    //       url: '/icons/font-awesome',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'secondary',
    //         text: '4.7'
    //       }
    //     },
    //     {
    //       name: 'Simple Line Icons',
    //       url: '/icons/simple-line-icons',
    //       icon: 'icon-star'
    //     }
    //   ]
    // },
    {
      name: 'Apps',
      // url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Events and People',
          // url: '/admin/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          },
          children: [
            {
              name: 'Events',
              url: '/admin/events',
              icon: 'icon-star',
            },
            {
              name: 'People',
              url: '/admin/people',
              icon: 'icon-star',
            }
          ]
        },
        {
          name: 'Indecision',
          url: '/admin/indecision',
          icon: 'icon-star'
        },
        {
          name: 'Clonestagram',
          url: '/admin/reduxstagram',
          icon: 'icon-star'
        },
        {
          name: 'Expensify',
          url: '/admin/expensify',
          icon: 'icon-star'
        },
        {
          name: 'PhoneShop',
          url: '/admin/phoneshop',
          icon: 'icon-star'
        },
        // {
        //   name: 'Simple Line Icons',
        //   url: '/icons/simple-line-icons',
        //   icon: 'icon-star'
        // }
      ]
    },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   icon: 'icon-calculator',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW'
    //   }
    // },
    // {
    //   name: 'Charts',
    //   url: '/charts',
    //   icon: 'icon-pie-chart'
    // },
    // {
    //   divider: true
    // },
    // {
    //   title: true,
    //   name: 'Extras'
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/login',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'SignUp',
    //       url: '/register',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/404',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/500',
    //       icon: 'icon-star'
    //     }
    //   ]
    // },
    {
      name: 'Download Android Apps',
      url: 'http://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
  ]
};
