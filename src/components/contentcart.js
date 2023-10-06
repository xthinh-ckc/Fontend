
export default function ContentCart(props)
{
    return (
        <>
            <div className="maincart">
                <table className="table table-dark ">
                <thead>
                    <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                    <th scope="row"><img src={props.data.pic}/> </th>
                    <td>{props.data.name}</td>
                    <td>{props.data.price}</td>
                    <td>1</td>
                    <td><button className="btn btn-danger" >Remove</button><button class="btn btn-warning">Update</button></td>
                    </tr>
                  
                </tbody>
                </table>
            
            </div>
            
        </>
    );

}