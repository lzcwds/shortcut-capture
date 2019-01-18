<template>
    <div>
        <button @click="open()">新建截图</button>
        <h2>Hello from {{text}}</h2>
    </div>
</template>

<script>
    import {remote,ipcRenderer} from 'electron'
    const {BrowserWindow} = remote
	export default {
		name: 'index',
		mounted() {
            console.log('mounted')
		},
		data() {
			return {
				text: '',
			}
		},
		methods:{
			open(){
				ipcRenderer.send('start-capture',{cmd:'start'})
            }
        }
	}
</script>
