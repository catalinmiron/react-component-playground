module.exports = {
  components: {
    FirstComponent: {
      class: 'FirstComponent',
      fixtures: {
        'default': {
          myProp: false,
          nested: {
            foo: 'bar',
            shouldBeCloned: {}
          },
          state: {
            somethingHappened: false
          }
        },
        'error': {}
      }
    },
    SecondComponent: {
      class: 'SecondComponent',
      fixtures: {
        'index': {}
      }
    }
  },
  router: {
    routeLink: function() {},
    goTo: function() {}
  }
};
