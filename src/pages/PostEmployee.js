import { CLIENT_PUBLIC_FILES_PATH } from "next/dist/shared/lib/constants";

export default function PostEmployee() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            id: event.target.id.value,
            name: event.target.name.value, 
        }

        const JSONdata = JSON.stringify(data);

        const endpoint = "http://localhost:5288/api/Employees/";

        console.log(JSONdata);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);

        const result = await response.json();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">id:</label>
                <input type="number" id="id" name="id" required minLength="1"/>

                <label htmlFor="name">name:</label>
                <input type="name" id="name" name="name" required minLength="2" />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}