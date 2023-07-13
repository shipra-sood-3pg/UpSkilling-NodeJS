const myHeaders = new Headers();

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
}

try {
    const result = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=e22c89ebd4b386efb75660d1819e9c82&symbols=INR,USD,CAD,JPY", requestOptions);
    const resultObj = await result.json();
    console.log(JSON.stringify(resultObj, null, 2));

} catch(err) {
    console.error("Could not fetch currency data");
    throw err;
}