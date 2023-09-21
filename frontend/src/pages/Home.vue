<template>
  <div v-if="loading == 1" class="loadingdiv"><div class="lds-dual-ring"></div></div>
	
  <div class="h-screen bg-[url('/files/bg%20frappe%20Vagon%204-1.png')]">

    <div class="h-screen flex bg-color backdrop-blur-2xl pr-3 pl-3">
      
      <div class="flex-none text-base w-48 ">
        <div class="title w-auto m-4 text-center">LMS COURSES</div>
        <ul>
          <li class="m-1">
            Mis Capacitaciones
          </li>
          <li class="m-1">
            Historial
          </li>
        </ul>
      </div>
      <div class="flex-initial w-full pt-6 pl-6 h-full h-min-screen" v-if="lessons.length===0">
        <div class="grid grid-cols-4 gap-4" >
          <div v-for="item in capacitaciones" class="bg-card rounded-md drop-shadow-lg p-4 shadow-sm text-center" @click="getLesson(item.name, $event)">
            <div class="text-2xl"> {{item.title}} </div>
              <p class="text-xs mb-3 mt-3">{{item.desc}}</p>
          </div>
        </div>
      </div>
      <div class="flex-initial w-1/3 pt-6 pl-6 h-full h-min-screen" v-if="lessons.length>0">
        <div class="grid grid-cols-1 gap-4" >
          <div v-for="item in capacitaciones" class="bg-card rounded-md drop-shadow-lg p-4 shadow-sm text-center" @click="getLesson(item.name, $event)">
            <div class="text-2xl"> {{item.title}} </div>
              <p class="text-xs mb-3 mt-3">{{item.desc}}</p>
          </div>
        </div>
      </div>
      <div class="flex-initial w-2/3 pt-6 pl-6 h-full h-min-screen" v-if="lessons.length>0">
        <div class="grid grid-cols-1 gap-1">
              <router-link   v-for="lesson in $store.state.lecciones" v-bind:to="{name: 'Lesson', params:{lesson:lesson.leccion} }" class="bg-card rounded-md drop-shadow-lg p-4 shadow-sm text-sm">
                {{lesson.title}}
            </router-link>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Home',
  
  data() {
    return {
      showDialog: false,
      capacitaciones:[],
      lessons:[],
      band:0,
      band2:0,
		  loading:1
    }
  },
  created() {
    this.getCapacitaciones();
  },
  methods:{
    getCapacitaciones(){
      
      if(this.band===0){
        let prt = this 
        frappe.call({
          method: "frappe.client.get_list",
          args: {
                    "doctype": "Capacitaciones",
                    "fields":["*"]
          },
          async:false,
          callback(res) {
            prt.loading = 0;
            return prt.capacitaciones = res.message;
          }
          });
          this.band=1
        }
    },
    getLesson(lesson, event){
		  let prt = this 
      if(this.band2 == 0){
        this.band2=1
        frappe.call({
          method: "frappe.client.get",
          args: {
                    "doctype": "Capacitaciones",
				            "name":lesson
          },
        async:false,
          callback(res) {
            prt.band2=0;
              prt.$store.commit("setLecciones", res.message.lecciones)
            return prt.lessons = res.message.lecciones;
          }
        });
      }
    }
  },
  resources: {
    ping: {
      url: 'ping',
    },
  }

}
</script>
