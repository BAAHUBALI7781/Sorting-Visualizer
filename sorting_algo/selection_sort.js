
function selection_s()
{
    div_delay=0;
    var n=size_of_array,k=0;
    for(let i=0;i<n;i++)
    {
        let mini=1e4,ans=-1;
        swap(divs[i],arr[i],'yellow');
        for(let j=i;j<n;j++)
        {
            swap(divs[j],arr[j],'red');
            if(arr[j]<mini)
            {
                if(ans!=-1)
                swap(divs[ans],arr[ans],'blue');
                mini=arr[j];
                ans=j;
                swap(divs[ans],arr[ans],'orange');
                // swap(divs[j],arr[j],'blue');
                
            }
            else
            swap(divs[j],arr[j],'blue');
        }
        let x=arr[i];
        arr[i]=arr[ans];
        arr[ans]=x;
        swap(divs[ans],arr[ans],'blue');
        swap(divs[k],arr[k],'green');
        k++;
    }
    unlock();
}