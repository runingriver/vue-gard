var _ = require('lodash');

// var arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr)); // console: ['0', '1', '2']

const state = {
  user: {},
  activeProject: {
    plugins: {
      resource_preheat: {
        status: false,
        support_locations: [],
        image_data_path: '',
        video_data_path: '',
        ttl: 30,
      },
      tpl: {
        batch_cnt: 0,// 赋个初始值才能构成响应式
      },
    },
    managers: {
      receiver: '',
      pusher: '',
      auditor: '',
      pm: '',
    },
  },
};

function get_keys(json_obj) {
  for (k in json_obj) {
    // console.log('type:', typeof(json_obj[k]));
    if (typeof(json_obj[k]) === 'object') {
      get_keys(json_obj[k]);
    } else {
      console.log('key:', k);
    }
  }
}

console.log('Object.keys:', Object.keys(state));

Object.keys(state.activeProject).map((key) => {
  console.log('state.activeProject key:', key, typeof key);
});

get_keys(state);

_.forEach({'a': 1, 'b': 2}, function (value, key) {
  console.log('value key', value, key);
});


let array = ['a', 'b', 'v', 'd'];
let evens = _.remove(array, function (n) {
  return n === 'v';
});
console.log(array);
console.log(evens);

