function dateSample(sampleActivity) {
    if(sampleActivity<=0 || sampleActivity>15) return false;  
    return isNaN(sampleActivity)?    false : 
     Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));
  
  };

  const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
console.log (dateSample(9.8888));  