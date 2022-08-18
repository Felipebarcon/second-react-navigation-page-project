import  axios  from "axios";


class CrudPays {

    static readonly URL = "https://restcountries.com/v3.1";

    static getAll() :Promise<any> {
        return axios
            .get(`${CrudPays.URL}/all?fields=cca2,name,capital,population,region`)
            .then(response => response.data)
            .catch((e) => console.log(e));
    }

    static getPaysByCca2(cca2:string) :Promise<any> {
        return axios
            .get(`${CrudPays.URL}/alpha/${cca2}?fields=cca2,name,capital,population,region`)
            .then(response => response.data)
    }
}


export default CrudPays;