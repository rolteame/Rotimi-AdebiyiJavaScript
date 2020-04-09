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

let interestData = [];

function interestCalculator(data){
    for(let i = 0; i < data.length; i++){
        let obj = "";
        if(data.Principal >= 2500 && (data.time > 1 && data.time < 3)){
            obj = {}
            rate = 3
            let interest = (data[i].Principal * rate * data[i].time)/100
            obj.Principal = data[i].Principal
            obj.rate = rate
            obj.time = data[i].time
            obj.interest = interest
        }else if (data.Principal >= 2500 && data.time >= 3){
            obj = {}
            rate = 4
            let interest = (data[i].Principal * rate * data[i].time)/100
            obj.Principal = data[i].Principal
            obj.rate = rate
            obj.time = data[i].time
            obj.interest = interest
        }else if(data.Principal < 2500 || data.time <= 1){
            obj = {}
            rate = 2
            let interest = (data[i].Principal * rate * data[i].time)/100
            obj.Principal = data[i].Principal
            obj.rate = rate
            obj.time = data[i].time
            obj.interest = interest
        }else {
            obj = {}
            rate = 1
            let interest = (data[i].Principal * rate * data[i].time)/100
            obj.Principal = data[i].Principal
            obj.rate = rate
            obj.time = data[i].time
            obj.interest = interest
        }
        interestData.push(obj);
    }
    console.log(interestData);
    return;
}
interestCalculator(data);
