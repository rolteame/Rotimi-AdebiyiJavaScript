let data = [
    {
        Principal : 2500,
        time : 1.8,
    },
    {
        Principal : 1000,
        time : 5,
    },
    {
        Principal : 3000,
        time : 1,
    },
    {
        Principal : 2000,
        time : 3,
    }
];

function intrestCalculator(data){
    if(Principal >= 2500 && (time > 1 && time < 3)){
        rate = 3;
    }else if (Principal >= 2500 && time >= 3){
        rate = 4;
    }else if(Principal < 2500 || time <= 1){
        rate = 2;
    }else {
        rate = 1;
    }

    interest = Principal * rate * time / 100;
}