// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";

let inp_arr=document.getElementById('arr_size');
let inp_speed=document.getElementById('algo_speed');
let arr_gen=document.getElementById('arr_gen');
let arr_section=document.getElementById('array_section');
let algos=document.querySelectorAll('.sorting_algo button');
// console.log(algos);

let size_of_array=inp_arr.value;
let arr=[];
let divs=[];

arr_section.style='flex-direction:row';

arr_gen.addEventListener('click',generate_new_array);
inp_arr.addEventListener('input',update_size);

// if(size_of_array===50)
//     generate_new_array();


function generate_new_array(){
    arr_section.innerHTML="";

    for(let i=0;i<size_of_array;i++)
    {
        arr[i]=Math.floor(Math.random()*0.5*(inp_arr.max-inp_arr.min));
        // console.log(arr[i]);
        divs[i]=document.createElement("div");
        arr_section.appendChild(divs[i]);
        divs[i].style="border-radius:0px 0px 10px 10px;margin:0.1%;background-color:blue;width:"+(90/size_of_array-(0.2))+"%;height:"+(arr[i]+30)+"%;";
    }
}
function update_size(){
    size_of_array=inp_arr.value;
    generate_new_array();
}
window.onload=update_size();

for(let i=0;i<algos.length;i++)
{
    algos[i].addEventListener('click',execute);

}
function execute(){
    // console.log(this.innerHTML);
    lock();
    let algo=this.innerHTML;
    this.classList.add('selected');
    if(algo==='Merge Sort')
    {
        merge_s();
    }
    else if(algo==='Selection Sort')
        selection_s();
    else if(algo==='Insertion Sort')
        insertion_s();
    else if(algo==='Quick Sort')
        quick_s();
    else
        bubble_s();

}
function lock(){
    for(let i=0;i<algos.length;i++)
    {
        algos[i].classList=[];
        algos[i].classList.add('block');
        // console.log(algos.classList);
        
        algos[i].disabled=true;
        inp_arr.disabled=true;
        inp_speed.disabled=true;
        arr_gen.disabled=true;
        arr_gen.style="background-color:gray";
        
    }
}



