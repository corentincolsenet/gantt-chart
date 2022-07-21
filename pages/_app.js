import { SWRConfig } from 'swr';
import '../public/styles/global.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <SWRConfig
            value={{
                fetcher: fetch,
                onError: (err) => {
                    console.error(err)
                },
            }}
        >
            <Component {...pageProps} />
        </SWRConfig>
    )
}

export default MyApp
