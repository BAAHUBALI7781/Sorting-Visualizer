// console.log(1);
function insertion_s(){
    div_delay=0;
    // console.log(arr);
    var n=size_of_array;
    
    for(let j=1;j<n;j++)
    {
        swap(divs[j],arr[j],'yellow');
        var i=j-1;
        let x=arr[j];
        while(arr[i]>x && i>=0)
        {
            swap(divs[i],arr[i],'red');
            swap(divs[i+1],arr[i+1],'red');
            arr[i+1]=arr[i];
            swap(divs[i],arr[i],'orange');
            swap(divs[i+1],arr[i+1],'orange');
            swap(divs[i],arr[i],'blue');
            if(i == j-1)
                swap(divs[i+1],arr[i+1],'yellow');
            else
            swap(divs[i+1],arr[i+1],'blue');

            i--;

        }
        arr[i+1]=x;
        for(let x=0;x<=j;x++)
            swap(divs[x],arr[x],'green');
    }
    // console.log(arr);
    unlock();
}
