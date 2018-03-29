var vm = new Vue({
    el: '#app',
    created() {
        // this.getData('./data.json');
        // 从本地存储中获取
        this.toDoLists = JSON.parse(localStorage.getItem('todolists')) || this.toDoLists;
        //获取当前的哈希值 如果为空就用all
        this.preCheck();
        this.hash = window.location.hash.slice(2) || 'all';
        // 监控当前的hash变化
        window.addEventListener('hashchange',()=>{
            this.hash = window.location.hash.slice(2);
        },false);

    },
    methods: {
        //获取接口数据
        getData(url) {
            //使用axios执行ajax请求
            axios.get(
                url
            )
                .then((res) => {
                    this.toDoLists = res.data.toDoLists;
                    // 检查是否是全选
                    this.preCheck();
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        //添加数据
        add() {
            this.toDoLists.push({
                'title': this.title,
                'isSelect': false,
                'time': this.getDateTime()
            })
            this.title = ''
        },
        //获取当前的时间
        getDateTime() {
            // 获取当前日期
            var date = new Date();

            // 获取当前月份
            var nowMonth = date.getMonth() + 1;

            // 获取当前是几号
            var strDate = date.getDate();

            // 获取当前小时数
            var strHour = date.getHours();

            //获取当前分钟数(0-59)
            var strMin = date.getMinutes();

            //获取当前秒数(0-59)
            var strSec = date.getSeconds();

            // 添加分隔符“-”
            var seperator = "-";

            // 添加分隔符“ ”
            var seperator1 = ' ';

            // 添加分隔符“:”
            var seperator2 = ':';

            // 对月份进行处理，1-9月在前面添加一个“0”
            if (nowMonth >= 1 && nowMonth <= 9) {
                nowMonth = "0" + nowMonth;
            }

            // 对日期进行处理，1-9号在前面添加一个“0”
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }

            // 对小时进行处理，1-9月在前面添加一个“0”
            if (strHour >= 1 && strHour <= 9) {
                strHour = "0" + strHour;
            }

            // 对分钟进行处理，1-9号在前面添加一个“0”
            if (strMin >= 0 && strMin <= 9) {
                strMin = "0" + strMin;
            }

            // 对秒钟进行处理，1-9号在前面添加一个“0”
            if (strSec >= 0 && strSec <= 9) {
                strSec = "0" + strSec;
            }

            // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
            var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate + seperator1 + strHour + seperator2 + strMin + seperator2 + strSec;

            return nowDate;

        },
        // 删除功能
        del(obj){
            this.toDoLists = this.toDoLists.filter((item)=>{
                return item !== obj;
            })
        },
        changeAll(){
            this.toDoLists.forEach(item=>{
                return item.isSelect = this.checkAll;
            })
        },
        // 检查是否是全选
        preCheck(){
            this.checkAll = this.toDoLists.every((item)=>{
                return item.isSelect;
            })
        },
        edit(todo){
            this.cur = todo;
            console.log(todo);
        },
        doEdit(){
            this.cur='';
        },

    },
    data: {
        toDoLists: [
                        {
                            "isSelect": true,
                            "title": "Iq18*s",
                            "time": "1977-05-12 22:08:16"
                        },
                        {
                            "isSelect": true,
                            "title": "rEiT",
                            "time": "2005-07-22 07:20:57"
                        },
                        {
                            "isSelect": true,
                            "title": "Hkw1U",
                            "time": "1990-04-30 18:22:21"
                        },
                        {
                            "isSelect": false,
                            "title": "!2V9",
                            "time": "1987-11-28 20:37:29"
                        },
                        {
                            "isSelect": true,
                            "title": "hfi7W9",
                            "time": "2017-04-20 04:43:28"
                        },
                        {
                            "isSelect": false,
                            "title": "ZX3l2WB",
                            "time": "2009-02-19 07:31:03"
                        },
                        {
                            "isSelect": false,
                            "title": "zX$cV",
                            "time": "2006-01-07 03:19:46"
                        }
                    ],
        title: '',
        checkAll:'',
        cur:'',
        hash:''
    },
    computed:{
        // 计算出需要输出的信息
        filterToDos(){
            if(this.hash ==='all') return this.toDoLists;
            if(this.hash ==='finish') return this.toDoLists.filter(todo=>{
                return todo.isSelect;
            });
            if(this.hash ==='unfinish') return this.toDoLists.filter(todo=>{
                return !todo.isSelect;
            });
            return this.toDoLists;
        },
        // 计算未完成的量
        count(){
            return  this.toDoLists.filter(item=>{
                return !item.isSelect;
            }).length;
        },

    },
    directives:{
        focus(el,binding){
            // 如果当前被选中 就获取焦点
            if(binding.value){
                el.focus();
            }
        }
    },
    watch:{
        toDoLists:{
            handler(){
                localStorage.setItem('todolists',JSON.stringify(this.toDoLists))
            },deep:true
        }
    }
})