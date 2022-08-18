import {useEffect, useState} from "react";
import CrudPays from "../services/CrudPays";
import {useParams} from "react-router-dom";


const PaysDetail = () => {

    const [pays, setPays,] = useState<any>(null);
    const {cca2}  = useParams();
    // get cca2 from url

    useEffect(
        () => {
            if(cca2)
            CrudPays.getPaysByCca2(cca2).then((data) => {
                console.log(data);
                    setPays(data);
            });
        }, []
    );



    return (
        <>
            { pays &&
            <> { pays.cca2 }  {pays.population}  {pays.name.common} </>
            }
        </>
        )
}

export default PaysDetail;