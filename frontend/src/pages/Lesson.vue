<template>
	<div v-if="loading == 1" class="loadingdiv"><div class="lds-dual-ring"></div></div>
	<div class="h-screen bg-[url('/files/bg%20frappe%20Vagon%204-1.png')]">
  
	  <div class="h-[10vh] bg-color backdrop-blur-2xl pr-3 pl-3">
		
		<div class=" inline-block w-1/4 pt-6 pl-6 h-full">
			<div class=" w-full text-4xl overflow-hidden max-h-[2rem] flex ">
				<router-link v-bind:to="{name: 'Home', params:{} }" class="inline-block underline">
					Capacitacion
				</router-link>
				<div class=" inline-block">&nbsp;> {{lesson.capacitacion}}</div>
			</div>
		</div>
		<div class="inline-block w-3/4 pt-6 pl-6 h-full text-5xl ">
			{{lesson.title}}
		</div>
	  </div>
	  <div class="h-[90vh] flex bg-color backdrop-blur-2xl pl-3">
		<div class="flex-initial w-1/4 pt-6 pl-6 h-full h-min-screen overflow-y-scroll max-h-screen pr-4">
		  <div class="grid grid-cols-1 gap-1">
			<div  v-for="leccion in $store.state.lecciones" >

				<router-link v-if="leccion.leccion == lesson.name" v-bind:to="{name: 'Lesson', params:{lesson:leccion.leccion} }" class="block bg-primary rounded-md drop-shadow-lg p-4 shadow-sm text-sm">
					{{leccion.title}}
				</router-link>
				<router-link v-if="leccion.leccion != lesson.name" v-bind:to="{name: 'Lesson', params:{lesson:leccion.leccion} }" class="block bg-card rounded-md drop-shadow-lg p-4 shadow-sm text-sm">
					{{leccion.title}}
				</router-link>
			</div>
		  </div>
		</div>
		<div class="flex-initial w-3/4 pt-6 pl-6 h-full h-min-screen pr-3 bg-[#191919] shadow-lg rounded-tl-md">
			<div class="grid grid-cols-1 gap-1">
				<iframe class="h-[70vh] w-full rounded-lg shadow-md" :src="lesson.youtube"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				<div class="text-brand-100 text-base mt-5">
					{{ lesson.desc }}
				</div>
			</div>
	    <!--<div class="grid grid-cols-2 gap-1 mt-3">
				<div class="text-left">
					<button class="bg-primary p-1 pl-2 pr-2 text-sm rounded-md hover:bg-primary-dark">Anterior</button>
				</div>
				<div class="text-right">
					<button class="bg-primary p-1 pl-2 pr-2 text-sm rounded-md hover:bg-primary-dark">Siguiente</button>
				</div>
			</div>-->
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'Home',
	data() {	
	  return {
		lesson:{title:""},
		lessons:[],
		showDialog: false,
		loading:1
	  }
	},
  created() {
    this.get_leccion();
  },
  updated() {
	if(this.$route.params.lesson !==this.lesson.name){
		this.get_leccion();
	}
  },
	methods:{
    getCapacitaciones(name){
		let prt = this;
		
		if(this.$store.state.lecciones[0].parent !== this.lesson.capacitacion){
			frappe.call({
				method: "frappe.client.get",
				args: {
					"doctype": "Capacitaciones",
					"name":name
				},
				async:false,
				callback(res) {
					prt.loading = 0;
					prt.$store.commit("setLecciones", res.message.lecciones)
					return prt.lessons = res.message.lecciones;
				}
			});
		}else{
				prt.loading = 0;
		}
    },
	get_leccion(){
		let less={}
		this.loading = 1;
		let prt = this 
		frappe.call({
			method: "frappe.client.get",
			args: {
				"doctype": "Lecciones de Capacitaciones",
				"name":this.$route.params.lesson
			},
			async:false,
			callback(res) {
				less=res.message;
				less.youtube = less.youtube.replace("https://youtube.com/watch?v=","")
				less.youtube = less.youtube.replace("https://www.youtube.com/watch?v=","")
				less.youtube = less.youtube.replace("https://youtu.be/","")
				less.youtube = less.youtube.split("&")[0];
				less.youtube = less.youtube.split("?")[0];
				less.youtube = "https://www.youtube.com/embed/"+less.youtube+"?modestbranding=1&rel=0&showinfo=0&cc_load_policy=1&autoplay=1"
				
				prt.getCapacitaciones(res.message.capacitacion);
				return prt.lesson = less
			}
		});
	}
		
	}
  }
  </script>
  