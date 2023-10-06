import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';
import Information from '../components/information';

export default function PDDetail()
{
   const list_pd=[
        {
            'pic':'a5.png',
            'name':'gojo',
            'price': 5000
        },
        {
            'pic':'a5.png',
            'name':'gojo2',
            'price': 35000
        },
        {
            'pic':'a5.png',
            'name':'gojo3',
            'price': 15000
        },
        {
            'pic':'a5.png',
            'name':'gojo4',
            'price': 7000
        },
        {
            'pic':'a5.png',
            'name':'gojo5',
            'price': 9000
        },
        {
            'pic':'a5.png',
            'name':'gojo6',
            'price': 23000
        },
        {
            'pic':'a5.png',
            'name':'gojo7',
            'price': 25000
        },
        {
            'pic':'a5.png',
            'name':'gojo8',
            'price': 1000
        }
    ]
   const PDlist = list_pd.map(function(item)
   {
       return(
           <Card data={item}/>
       );
   })

   return(
    <>
    <Header/>
   <Information/>
   <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"> {PDlist}</div>
    <Footer/>
    </>
   );
}