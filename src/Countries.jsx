import { useEffect, useState } from "react";
import { fetchData } from "./api";
import styles from "./Countries.module.css"

export const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {

        const fetchFlags = async () => {
            try {
                const countryFlags = await fetchData();
                setCountries(countryFlags);
            } catch (error) {
                console.error(`Error fetching data: ${error.message}`)
            }


        }
        fetchFlags();
    }, [])


    return (
        <div className={styles.root}>
            {countries.map((country) => {
                return (

                    <div className={styles.countryFlags}>
                        <div><img src={country.flag} alt={country.name}
                            className={styles.image} /></div>
                        <div><h5>{country.name}</h5></div>
                    </div>
                )
            })}
        </div>
    )
}