inp_speed.addEventListener('input',speed_algo);


let speed=100,delay_time;
function speed_algo()
{
    var al_speed=inp_speed.value;
    console.log(al_speed);
    if(al_speed==1)
        delay_time=1000;
    else if(al_speed==3)
        delay_time=500;
    else if(al_speed==5)
        delay_time=170;
    else if(al_speed==7)
        delay_time=70;
    else
        delay_time=30;
    
}
console.log(speed*size_of_array);
delay_time=170;
console.log(delay_time);
let div_delay = 0;
function swap(arr_section, new_height, color) {
        setTimeout(function () {
                arr_section.style = "border-radius:0px 0px 10px 10px;margin:0.1%; width:" + (90 / size_of_array - 0.2) + "%; height:" + (new_height + 30) + "%; background-color:" + color + ";";
        }, div_delay += delay_time);
}

function unlock() {
        setTimeout(function () {
                for (let i = 0; i < algos.length; i++) {
                        algos[i].classList=[];
                        algos[i].classList.add('unblock');
                        algos[i].disabled = false;
                        inp_arr.disabled = false;
                        inp_speed.disabled = false;
                        arr_gen.disabled = false;
                        arr_gen.style = "background-color:blue";


                }
        }, div_delay+=delay_time);
}

