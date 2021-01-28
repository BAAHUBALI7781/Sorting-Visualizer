
function bubble_s(){
    // console.log('I am in bubble sort');
var n=size_of_array;
div_delay=0;
let i,j,k=n-1;
for(i=0;i<n-1;i++)
{
    for(j=0;j<n-i-1;j++)
    {
        swap(divs[j],arr[j],"yellow");
        if(arr[j]>arr[j+1])
        {
            swap(divs[j],arr[j],"red");
            swap(divs[j+1],arr[j+1],"red");
            
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;

            swap(divs[j],arr[j],"orange");
            swap(divs[j+1],arr[j+1],"orange");

        }
        
        swap(divs[j],arr[j],"blue");

    }
    swap(divs[k],arr[k],'green');
    k--;
    
}
swap(divs[0],arr[0],'green');
unlock();

}
// console.log(arr);