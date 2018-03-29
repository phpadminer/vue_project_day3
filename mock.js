var Mock = require('mockjs');
var data = Mock.mock({
    'toDoLists|5-10':[{
        'isSelect':'@boolean',
        'title':'@string',
        'time':'@datetime'
    }]
})
console.log(JSON.stringify(data,null,4));
