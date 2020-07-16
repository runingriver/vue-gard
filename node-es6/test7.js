var _ = require('lodash');


console.log('------------------------------------');
// Object.keys()使用,递归获取state对象的key,map方法使用
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
            receiver: '3',
            pusher: '2',
            auditor: '1',
            pm: '4',
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

console.log('------------------------------------');
//lodash使用,forEach,remove
_.forEach({'a': 1, 'b': 2}, function (value, key) {
    console.log('value key', value, key);
});


let array = ['a', 'b', 'v', 'd'];
let evens = _.remove(array, function (n) {
    return n === 'v';
});
console.log(array);
console.log(evens);

console.log('------------------------------------');
//数组拼接,去重
//数组push和concat都是将当前参数作为对象保存到数组一个slot上
const project = {
    owners: ['aaa', 'bbb'],
    managers: {
        receiver: '',
        pusher: '',
        auditor: '1111,qqq,2222',
        pm: '2222,eee',
    },
};
let users = [];
if (!_.isEmpty(project.owners)) {
    users.push(project.owners.join(','));
    console.log('owners:', project.owners.join(','), users);
}
if (!_.isEmpty(project.managers)) {
    console.log('managers:', project.managers);
    if (!_.isEmpty(project.managers.auditor)) {
        users = Array.prototype.concat.apply(users, project.managers.auditor.split(','));
        console.log('auditor:', project.managers.auditor, users);
    }
    if (!_.isEmpty(project.managers.pm)) {
        users = Array.prototype.concat.apply(users, project.managers.pm.split(','));
        console.log('pm:', project.managers.pm, users);
    }
    if (!_.isEmpty(project.managers.receiver)) {
        users = Array.prototype.concat.apply(users, project.managers.receiver.split(','));
        console.log('receiver:', project.managers.receiver, users);
    }
    if (!_.isEmpty(project.managers.pusher)) {
        users = Array.prototype.concat.apply(users, project.managers.pusher.split(','));
        console.log('pusher:', project.managers.pusher, users);
    }

    let user_set = new Set(users);
    let array = Array.from(user_set);
    let user_str = array.join(',');
    let users_str2 = Array.from(new Set(users)).join(',');
    console.log('user str:', user_str, user_set, array,users_str2)
}