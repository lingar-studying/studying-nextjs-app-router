import Image from "next/image";

import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
    return (
        <div className={styles.page}>


            <div style={{
                border: "2px solid black", width: "400px", height: "700px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between"


            }}>

                <h1>Basic Client Explanation</h1>

                <h2>This Home page</h2>
                <p>In Next App Router - everything is working by the folder structure.
                 See the "DOCS" Explanation for further</p>



                <a href={"/pages/draft"} target="_blank">Draft</a>
                <a href={"/pages/memory-game"} target="_blank">

                    Memory Game
                </a>
                <Link href={"/pages/draft"} target="_blank">Draft</Link>
                <Link href={"/pages/memory-game"} target="_blank">

                    Memory Game
                </Link>

                <a href={"/pages/draft"} target="_blank">Draft</a>
                <a href={"/pages/memory-game"} target="_blank">

                    Memory Game
                </a>
                <Link href={"/pages/draft"} target="_blank">Draft</Link>
                <Link href={"/pages/memory-game"} target="_blank">

                    Memory Game
                </Link>


            </div>

        </div>
    );
}
