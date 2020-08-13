var startCount = false;
var baby = "girl";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function reveal()
{
	var revealDiv=document.getElementById("reveal");
	var revealText=document.getElementById("revText");
	
	startCount = true;
	
	for(var countDown=10; countDown>0; countDown--)
	{
		if(countDown%2==1)
		{
			//pink
			revealDiv.style.backgroundColor="#ffccff";
		}
		else
		{
			//blue
			revealDiv.style.backgroundColor="#99ffff";
		}
		
		revealText.innerHTML=countDown;
		await sleep(1000);
	}
	
	if (baby == "boy")
	{
		//blue
		revealDiv.style.backgroundColor="#99ffff";
	}
	else if (baby == "girl")
	{
		//pink
		revealDiv.style.backgroundColor="#ffccff";
	}
	else
	{
		revealDiv.style.backgroundColor="#aaaaaa";
	}
	
	revealText.innerHTML="It's a " + baby + "!";
}

async function waitToStart()
{
	var revealDiv=document.getElementById("reveal");
	var counter=0;
	
	revealDiv.backgroundColor="#ffff22";
	
	while(!startCount)
	{
		if(counter%2==1)
		{
			//pink
			revealDiv.style.backgroundColor="#ffccff";
		}
		else
		{
			//blue
			revealDiv.style.backgroundColor="#99ffff";
		}
		
		if(counter > 1000)
		{
			startCount=true;
		}
		
		await sleep(1000);
		counter++;
	}
}
		