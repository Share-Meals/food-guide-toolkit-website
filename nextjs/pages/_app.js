import '../styles/globals.css'
import Header from '../components/Header';

function MyApp({ Component, pageProps, pages}) {
    return(
	<>
	    <Header />
	    <Component {...pageProps} />
	</>
    );
}

export default MyApp


export async function getStaticProps() {
    const {data} = await client.query({
	query: gql`
            query Pages {
		pages
		{
		    data{
			id
			attributes{
			    title
			    }
			}
		}
	    }
	`,
    });

    return {
	props: {
            pages: data.pages.data
	},
    };
}
