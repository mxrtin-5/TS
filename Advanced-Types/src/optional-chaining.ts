const fetchUserData = {
    id: 'u1',
    name: 'Penelope',
    job:{title:'CEO', description:'my own company'}
}

console.log(fetchUserData?.job?.title);//? el ? es un if de que si fetchUserData existe, entonces que entre a job.title
