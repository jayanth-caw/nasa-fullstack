const endpoint='http://localhost:8000'

async function httpGetPlanets() {
  const response=fetch(`${endpoint}/planets`)
  return (await response).json();
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response=await fetch(`${endpoint}/launches`);
   const fetchedLaunches=await response.json();
   return fetchedLaunches.sort((a,b)=>{
    return a.flightNumber-b.flightNumber;
   })
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${endpoint}/launches`,{
      method:"post",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(launch),

    })
  }catch(err){
    return {
      ok:false
    }
  }
    
}

async function httpAbortLaunch(id) {
  try{
    return await fetch (`${endpoint}/launches/${id}`,{
      method:'delete',
  
    })
  }
   catch(err){
    console.log(err);
    return{
      ok:false,
    }
   }
  
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};