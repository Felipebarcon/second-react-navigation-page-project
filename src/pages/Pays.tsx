import CrudPays from "../services/CrudPays";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Pays = () => {

    const [pays, setPays,] = useState<any[]>([]);

    useEffect(
        () => {
            CrudPays.getAll().then((data) => {
                if (data)
                    setPays(data);
            });
        }, []);


    return (
        <>
                <ul>
                    {pays.map(p => <li key={p.cca2}>{p.name.common} <Link to={'/pays/' + p.cca2}>Details</Link></li>)}
                </ul>
            </>
        )
}

export default Pays;