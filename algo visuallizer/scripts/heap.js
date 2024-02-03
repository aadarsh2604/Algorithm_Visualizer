async function heap()
{
    await heapshowloop(bar_sizes,totalBars);
	await heapdeletedemo(bar_sizes,totalBars);
    for(let i=0 ; i<totalBars ; i++)
    {
        selected(one_bar[i], bar_sizes[i], "green");
    }
}

 async function heapsort(x, i, n)
	{
		let l=2*i+1;
		let r=2*i+2;
		let max=i;
		let t;
		if(r<n)
		{
			if(x[l]>x[r]) max=l;
			else max=r;
		}
		else if(l<n)
		{
			max=l;
		}
		if(x[max]>x[i])
			{
				selected(one_bar[i], bar_sizes[i], "yellow");
                await delay(currentSpeed*4);
                selected(one_bar[max], bar_sizes[max], "yellow");
                await delay(currentSpeed*4);
                t=x[i];
				x[i]=x[max];
				x[max]=t;
                selected(one_bar[i], bar_sizes[i], "yellow");
                await delay(currentSpeed*4);
                selected(one_bar[max], bar_sizes[max], "yellow");
                await delay(currentSpeed*4);
				heapsort(x,max,n);
			}
	}
async function heapshowloop(x, n)
	{
		for(let i=n/2-1 ; i>=0 ; i--)
		{
			heapsort(x,i,n);
		}
	}
async function heapdeletedemo(x, n)
	{
		let i, t;
		for( i=n-1 ; i>0 ; i--)
		{
			t=x[i];
			x[i]=x[0];
			x[0]=t;
            selected(one_bar[i], bar_sizes[i], "red");
            await delay(currentSpeed*4);
			heapsort(x,0,i);
		}
	}