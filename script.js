document.getElementById('userForm').addEventListener('submit',function(event) {
	event.preventDefault();
	const name=document.getElementById('name').value;
	const age=document.getElementById('age').value;
	if(!name||!age){
		alert('Please enter valid details.');
		return;
	}
	const checkElegibility=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>=18){
				resolve(`Welcome, ${name}. You can vote.`);
			}else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		},4000);
	});
	checkElegibility
		.then(message=>alert(message)).catch(message=>alert(message));
});

