//Fetch Currency Data
export const getCurrencyConversionDetails = async () => {
    const headers = new Headers();

    const requestOptions = {
        method: 'GET',
        headers,
        redirect: 'follow'
    }

    const response = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=e22c89ebd4b386efb75660d1819e9c82&symbols=INR,USD,CAD,JPY", requestOptions);

    if (!response.ok){
        throw new Error("Cannot fetch currency data conversion rates.");
    }
    return await response.json();
}

export const getSalary = (amountGBP, currency, currencyConversionData) => {
    let amount = (currency === "GBP") ? amountGBP : amountGBP * currencyConversionData.rates[currency];

    const formatter = Intl.NumberFormat('en-GB', {
                        style: 'currency', 
                        currency:'INR'
                    });
    return formatter.format(amount);
}
