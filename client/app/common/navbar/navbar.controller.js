import moment from 'moment';
class NavbarController {
  constructor() {
    this.name = 'navbar';
  }

  $onInit(){
    this.moment = moment().format('dddd HH:mm');

    this.updateDate();

    this.user =
      {
        name: 'Jesus Garcia',
        mail: 'ctw@ctwhome.com',
        picture: '//icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png',
        lists: [
          {
            name: 'Study',
            timers: [
              {
                name: 'Timer 1',
                time: '1500'
              },
              {
                name: 'Timer 2',
                time: '1500'
              },
              {
                name: 'Timer 3',
                time: '1500'
              }
            ]
          },
          {
            name: 'Piano',
            timers: [
              {
                name: 'Timer 4',
                time: '1500'
              },
              {
                name: 'Timer 5',
                time: '1500'
              }
            ]
          }
        ]
      };
  }

  updateDate () {
    setTimeout(() => {
      this.moment = moment().format('dddd HH:mm');
      this.updateDate();
    }, 1000);
  }

}

export default NavbarController;
