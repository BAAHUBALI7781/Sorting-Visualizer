
function quick_s(){
    div_delay=0;
    var n=size_of_array;
    // console.log(n);

    sort_quick(0,n-1);
    // for(let i=0;i<size_of_array;i++)
    //     swap(divs[i],arr[i],'green');
    unlock();
}

function sort_quick(start,end){
    if(start>=end)
        return;
    let pivot=quicker(start,end);
    sort_quick(start,pivot-1);
    sort_quick(pivot+1,end);
    for(let i=start;i<=end;i++)
        swap(divs[i],arr[i],'green');
    
} 
function quicker(start,end){
    let i=start-1;
    let pivot=arr[end];
    swap(divs[end],arr[end],'yellow');
    for(let k=start;k<end;k++)
    {
        swap(divs[k],arr[k],'yellow');
        if(arr[k]<pivot)
        {
            i++;
            swap(divs[i],arr[i],'red');
            swap(divs[k],arr[k],'red');
            
            let x=arr[i];
            arr[i]=arr[k];
            arr[k]=x;
            swap(divs[i],arr[i],'orange');
            swap(divs[k],arr[k],'orange');
            swap(divs[i],arr[i],'blue');
            swap(divs[k],arr[k],'blue');
            
        }
        else swap(divs[k],arr[k],'blue');
        
    }
        swap(divs[i+1],arr[i+1],'red');
        swap(divs[end],arr[end],'red');
        let y=arr[i+1];
        arr[i+1]=arr[end];
        arr[end]=y;
        swap(divs[i+1],arr[i+1],'blue');
        swap(divs[end],arr[end],'blue');
        
        swap(divs[i+1],arr[i+1],'green');

        return (i+1);

}
