<template>
    <div>
        <button @click="test()">新建截图</button>
        <h2>Hello from {{text}}</h2>
    </div>
</template>

<script>
    import {remote} from 'electron'
    const {BrowserWindow} = remote
	export default {
		name: 'index',
		mounted() {
            console.log('mounted')
		},
		data() {
			return {
				text: '',
                win:null
			}
		},
		methods:{
			test(){
				this.win = new BrowserWindow({
					width: 800,
					height: 600,
                })
				this.win.loadURL(`file://${__dirname}/shortcut/shortcut.html`);
            }
        }
	}
</script>
