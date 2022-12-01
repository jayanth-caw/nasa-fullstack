const launches=new Map();
let latestFlightNmuber=100;
const launch ={
    flightNumber:100,
    mission:'kepler',
    rocket:'exploreee',
    launchDate:new Date('April 15'),
    target:'vijay',
    customer:['NASA','ZTM'],
    upcoming:true,
    success:true,
};


launches.set(launch.flightNumber,launch);
function existsLaunchWithId(launchId){
    return launches.has(launchId)
}
function getAllLaunches(){
    return Array.from(launches.values())
}
function addNewLaunch(launch){
    latestFlightNmuber++;
    launches.set(latestFlightNmuber,Object.assign(launch,{
        flightNumber:latestFlightNmuber,
        customers:['zero','caw'],
        upcoming:true,
        success:true,
    }));
}

function abortLaunchById(launchId){
      const aborted=launches.get(launchId);
      aborted.upcoming=false;
      aborted.success=false;
      return aborted;
}
module.exports={
    launches,
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    
    abortLaunchById,
}