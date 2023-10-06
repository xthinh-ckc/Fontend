import CardNews from '../components/cardnews';

export default function DataCardNews(props){
    const Newslist = props.data.map(function(item)
    {
        return(
            <CardNews data={item}/>
        );
    })
    return(
        <>
        <h1 className=" ">{props.data.name}</h1>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"> {Newslist}</div>
        </>
    );
}