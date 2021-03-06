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
          'OOP, MV*',
          'JavaScript (KnockoutJS, AngularJS, NodeJS, jQuery, Bower, Grunt)',
          'Semantic, modular, accessible, cross-browser/device code',
          'Hand-coded HTML and CSS',
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
        {
          title: 'Google+',
          url: 'https://plus.google.com/+GregBabula'
        },
        {
          title: 'Github',
          url: 'https://github.com/gbabula'
        },
        {
          title: 'LinkedIn',
          url: 'http://www.linkedin.com/in/gbabula'
        }
      ];

      // thoughts
      $scope.thoughts = [
        {
          title: 'The Making of - CloudSquare',
          url: 'https://medium.com/@gregbabula/the-making-of-cloudsquare-3d976d00ed30'
        },
        {
          title: 'Web Components with KnockoutJS',
          url: 'https://medium.com/@gregbabula/web-components-with-knockout-js-567be782148'
        },
        {
          title: 'Thoughts on VIM',
          url: 'https://medium.com/@gregbabula/if-bce52ea02f68'
        }
      ];

    });
