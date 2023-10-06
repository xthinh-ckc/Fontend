
import Header from '../components/header';
import Footer from '../components/footer';
import ContentCart from '../components/contentcart';
import Buy from '../components/buy';
export default function Cart(props)
{
    
    const list_pd=[
        {
            'pic':'a7.png',
            'name':'gojo',
            'price': 5000
        },
        {
            'pic':'a5.png',
            'name':'gojo2',
            'price': 35000
        },
        {
            'pic':'a6.png',
            'name':'gojo3',
            'price': 15000
        }
    ]
    const PDlist = list_pd.map(function(item)
    {
        return(
            <ContentCart data={item}/>
        );
    });

    return(
        <>
        <Header/>
        {PDlist}
        <Buy/>
        <Footer/>
        </>
    );
}