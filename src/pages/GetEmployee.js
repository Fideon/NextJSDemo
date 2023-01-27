import Link from "next/link";

export default function GetEmployee({Employee}) {
    return (
        <>
            <h1>Page 1</h1>
            <div>
                <ul>
                    {Employee.map(({ id, name }) => (
                        <li key={id}>
                            {id}
                            <br/>
                            {name}
                            <br/>
                        </li>
                    ))}
                </ul>
            </div>
            
        <br />
        <Link href="/">Back to Home</Link>
        </>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:5288/api/Employees');
    const Employee = await res.json();
    return {
        props: { Employee }
    }
}