

const scriptsInEvents = {

	async FolhaDeEventos3_Event19_Act2(runtime, localVars)
	{
		//criar variavel para pegar o valor da global
		let vidas = runtime.globalVars.Vidas;
		vidas --;
		runtime.globalVars.Vidas = vidas;
		
		if(vidas <= 0){
			runtime.goToLayout("Layout 3")
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
