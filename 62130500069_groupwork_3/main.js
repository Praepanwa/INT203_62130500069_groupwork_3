    const app = {
        data() {
            return {
              members:[
                {img: 'images/winter.jpg',
                ae: 'images/aewinter.jpg',
                mbname: 'Winter',
                position: 'Lead Vocalist, Lead Dancer, Visual',
                like : false,
                imgdefault:'images/winter.jpg'},
            
                {img:'images/karina.jpg' ,
                ae:'images/aekarina.jpg',
                mbname: 'Karina',
                position:'Leader, Main Dancer, Lead Rapper, Sub Vocalist, Face Of The Group',
                like : false,
                imgdefault:'images/karina.jpg'},

                {img:'images/giselle.jpg' ,
                ae:'images/aegiselle.jpg',
                mbname: 'Giselle',
                position:'Main Rapper, Sub Vocalist',
                like : false,
                imgdefault:'images/giselle.jpg' },

                {img:'images/ningning.jpg' ,
                ae:'images/aeningning.jpg',
                mbname: 'Ningning',
                position:'Main Vocalist, Youngest member',
                like : false,
                imgdefault:'images/ningning.jpg' }
            ]  
            }
        },
        methods: {
            toggleLike(index){
                this.members[index].like = !this.members[index].like
                // console.log(this.members[index].like)
            },
            hoverimg(index){
                this.members[index].imgdefault=this.members[index].ae
            //  console.log(this.members[index])
              
            },
            unhover(index){
                this.members[index].imgdefault=this.members[index].img
             
            }


        },
        computed: {
            countliked(){
                return this.members.filter( t => t.like ).length
            }
        }
        
    }
    Vue.createApp(app).mount('#app')


