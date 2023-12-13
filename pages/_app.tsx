import type {AppProps} from "next/app";
import Index from "./index";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
        <Index /> 
        </>
    )
}
// yarn add @mui/material @emotion/react @emotion/styled
// yarn add axios