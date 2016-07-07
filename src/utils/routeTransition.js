import $ from 'jquery';

const route = {
  activate: (transition) => {
    setTimeout(() => {
      transition.next();
      $('#content').fadeIn(250);
    }, 100);
  },
  deactivate: (transition) => {
    $('#content').fadeOut(250);
    console.log('fade out');
    setTimeout(() => {
      transition.next();
    }, 300);
  },
};

export default route;
