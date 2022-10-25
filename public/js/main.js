const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');
const submitBtn = document.getElementById('submitBtn');
const datahide = document.querySelector(`.middle_layer`);

const getInfo = async(event) => {
    event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal === "") {
     
        city_name.innerHTML =  `Please Write the Name before you search`;
        temp_real.innerHTML =  `0`;
        temp_status.innerHTML =  `Not Found`;

        datahide.classList.add('data_hide');
    
    } else {
         
        try {
            
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=26e236c61e9cd1e07b0a1ac73d0d321b`;
        const response = await fetch(url);
        const data = await response.json();
            const arrData = [data];

            city_name.innerHTML = ` ${arrData[0].name}, ${arrData[0].sys.country}`;
           let k  = arrData[0].main.temp;
              let    c = k - 273.15;
           temp_real.innerHTML = Math.round(parseFloat(c));
           
            temp_status.innerHTML = arrData[0].weather[0].main;
      

            datahide.classList.remove('data_hide');

 
        } catch {

        city_name.innerHTML =  `Please enter name properly`;
        temp_real.innerHTML =  `0`;
        temp_status.innerHTML =  `Not Found`;

        datahide.classList.add('data_hide');
        }
    
    }
   
    
}









submitBtn.addEventListener('click',getInfo);