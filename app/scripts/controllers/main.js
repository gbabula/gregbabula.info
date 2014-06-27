'use strict';

angular
  .module('gregbabula.infoApp')

    .controller('MainCtrl', function ($scope) {

      // individual
      $scope.individual = {
        name: 'Greg Babula',
        position: {
          title: 'User Interface Engineer',
          company: 'Major League Baseball',
          url: 'http://www.mlb.com'
        },
        description: 'Client side developer wth over a decade of experience.',
        header: {
          title: 'GregBabula',
          subtitle: 'User Interface Engineer',
          url: 'http://gregbabula.info'
        },
        expertise: [
          'UX & UI',
          'Hand-coded HTML and CSS',
          'Semantic, modular, accessible, cross-browser/device code',
          'JavaScript (HTML5 APIs, AngularJS, NodeJS, UnderscoreJS, jQuery, Bower, Grunt)',
          'Working experience with Django, CodeIgniter, Drupal, MODX, WordPress, Tumblr, etc...',
          'Version Control (GIT, SVN)'
        ]
      };

      // elsewhere
      $scope.socialMedia = [
        {
          title: '@gregbabula',
          url: 'http://twitter.com/gregbabula'
        },
        // {
        //   title: 'Google+',
        //   url: 'https://plus.google.com/+GregBabula'
        // },
        // {
        //   title: 'Forrst',
        //   url: 'http://forrst.me/G/posts'
        // },
        // {
        //   title: 'Github',
        //   url: 'https://github.com/gbabula'
        // },
        {
          title: 'LinkedIn',
          url: 'http://www.linkedin.com/in/gbabula'
        }
        // {
        //   title: 'OurGroup',
        //   url: 'https://ourgroup.org/accounts/profile/greg-babula/'
        // },
        // {
        //   title: 'Behance',
        //   url: 'http://www.behance.net/gregbabula'
        // }
      ];

      // projects
      // $scope.personalProjects = [
      //   {
      //     title: 'CloudSquare',
      //     url: 'http://cloudsq.com'
      //   },
      //   {
      //     title: 'G5Framework',
      //     url: 'http://g5framework.com'
      //   },
      //   {
      //     title: 'Front End Dev Blog',
      //     url: 'http://frontenddevblog.com'
      //   },
      //   {
      //     title: 'SparkBubbles',
      //     url: 'http://babu.la/sparkbubbles'
      //   }
      // ];

    });
