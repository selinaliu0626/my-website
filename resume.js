const app = Vue.createApp({
    data(){
        return {
            firstName: 'Selina',
            lastName: 'Liu',
            show:false,
            city:'Seattle',
            phoneNumber:'617-949-9853',
            github:'selinaliu0626@gmail.com',
            schools:[
                { id:1,name:'Boston University',  major:'MS of Software engineering', attendTime:"05/2022-01/2024"},
                { id:2,name:'University of Washington', major:'Graduate Certificate in Software Design & Development', attendTime:"09/2021-06/2022"},
                { id:3,name:'University of Massachusetts,Lowell', major:'BS of Information Technology', attendTime:"05/2020-06/2021"},
            ],
        }
    },
    computed:{
        fullName(){
            return `${this.firstName} ${this.lastName}`
        }
    },
    methods:{
        toggle(){
           if(!this.show){
               this.show =true;
           }else{
               this.show=false;
           }
        }
    }
})