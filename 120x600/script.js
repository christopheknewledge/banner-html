document.addEventListener("DOMContentLoaded", function(event) {
	class reboot {
		constructor(nbLoop, loopTime) {
			this.animeClass = document.querySelectorAll(".anime");
			this.animeTab = [];
			this.loopTime = loopTime;
			this.nbLoop = nbLoop;
			this.actualLoop = 0;
		}
		toggleClassLaunch(){
			for (let index = 0; index < this.animeTab.length; index++) {
				let indexTabClasses = this.animeTab[index].classList;
				if (indexTabClasses.contains("launch")) {
					indexTabClasses.remove("launch");
					setTimeout(() => {
						indexTabClasses.add("launch");
					}, 20);
				} else {
					indexTabClasses.add("launch");
				}
			}
		}
		launch() {
			this.animeClass.forEach(element => {
				this.animeTab.push(element);
			})
			this.toggleClassLaunch();
			var myInterval = setInterval(() => {
				this.toggleClassLaunch()
				this.actualLoop++;
				if (this.actualLoop === this.nbLoop) {
					clearInterval(myInterval);
				}
			}, this.loopTime);
		}
	}
	var addReboot = new reboot(2, 10000);
	addReboot.launch();

});


