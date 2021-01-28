
function merge_s(){
    div_delay=0;
    var n=size_of_array;
    mergeSort(0,n-1);
    unlock();
}
function mergeSort(start,end){
    if(start>=end)
        return;
    let mid=Math.floor((start+end)/2);
    swap(divs[mid],arr[mid],'yellow');
    mergeSort(start,mid);
    mergeSort(mid+1,end);
    merger(start,mid,end);
}

function merger(start,mid,end){
    let arr1=[];
    let i=start,j=mid+1;
    while(i<=mid && j<=end)
    {
        if(arr[i]<arr[j])
        {
            arr1.push(arr[i]);
            swap(divs[i],arr[i],'red');
            i++;
        }
        else
        {
            arr1.push(arr[j]);
            swap(divs[j],arr[j],'red');
            j++;
        }
    }
    while(i<=mid)
    {
        arr1.push(arr[i]);
        swap(divs[i],arr[i],'red');
        i++;   
    }
    while(j<=end)
    {
        arr1.push(arr[j]);
        swap(divs[j],arr[j],'red');
        j++;
    }
    let x=0;
    for(let i=start;i<=end;i++)
    {
        arr[i]=arr1[x];
        swap(divs[i],arr[i],'green');
        x++;
    }

}

