import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchResults, removeSearchResults } from "../../store/search";

export default function RestaurantSearch() {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const setSearchResults = async () => {
            if (term !== "") {
                await dispatch(getSearchResults(term));
            } else {
                dispatch(removeSearchResults());
            }
        };

        setSearchResults();
    }, [term]);

    const handleChange = (e) => {
        console.log("this happened");
        setTerm(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={term}
                onChange={handleChange}
                placeholder="search..."
            ></input>
        </div>
    );
}
