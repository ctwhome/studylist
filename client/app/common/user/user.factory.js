let UserFactory = function () {
  const user = {
    name: 'Jesus Garcia',
    mail: 'ctw@ctwhome.com',
    picture: '//icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png',
    lists: [
      {
        id:0,
        name: "Study",
        timers: [
          {name: "task 1", desc: "A kind of a long desctription", time: 600},
          {name: "task 2", desc: "A kind of a long desctription", time: 200},
          {name: "task 3", desc: "A kind of a long desctription", time: 300},
          {name: "task 4", desc: "A kind of a long desctription", time: 300},
          {name: "task 5", desc: "A kind of a long desctription", time: 400}
        ]
      },

      {
        id:1,
        name: "Piano",
        timers: [
          {name: "Scales", desc: "A kind of a long desctription", time: 200},
          {name: "Technique", desc: "A kind of a long desctription", time: 300},
          {name: "Song", desc: "A kind of a long desctription", time: 300},
        ]
      },
      {
        id:2,
        name: "Language",
        timers: [
          {name: "Vocabulary", desc: "A kind of a long desctription", time: 600},
          {name: "Grammatica", desc: "A kind of a long desctription", time: 300},
          {name: "Reading", desc: "A kind of a long desctription", time: 300},
          {name: "Listening", desc: "A kind of a long desctription", time: 300}
        ]
      }

    ],
    jsonlist: {
      0: [
        {name: "task 1", desc: "A kind of a long desctription", time: 600},
        {name: "task 2", desc: "A kind of a long desctription", time: 200},
        {name: "task 3", desc: "A kind of a long desctription", time: 300},
        {name: "task 4", desc: "A kind of a long desctription", time: 300},
        {name: "task 5", desc: "A kind of a long desctription", time: 400}
      ],
      1: [
        {name: "task 1", desc: "A kind of a long desctription", time: 600},
        {name: "task 2", desc: "A kind of a long desctription", time: 200},
        {name: "task 3", desc: "A kind of a long desctription", time: 300},
        {name: "task 4", desc: "A kind of a long desctription", time: 300},
        {name: "task 5", desc: "A kind of a long desctription", time: 400}
      ]

    }
  };

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  return { getUser, isSignedIn };
};

export default UserFactory;
