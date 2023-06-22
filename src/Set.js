import Skeleton from '@mui/material/Skeleton';
import Fooddata from './container/Fooddata';
// import Stack from '@mui/material/Stack';

function Set() {
    return (<>
        {Fooddata.map((it) =>
        <div>
            <div class="product-container" style={{ backgroundColor: 'white' }}>
                <Skeleton variant="rectangular" width={400} height="6.2cm" />
                <div > <Skeleton variant="text" width="1.8cm" animation="wave" sx={{ fontSize: '3rem' }} /> </div>
                <div class="info">
                    <h4> <Skeleton variant="text" animation="wave" height='1.3cm' sx={{ fontSize: '1rem' }} /></h4>
                    <p> <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' }} /></p>
                    <p> <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' }} /></p>

                    <hr></hr>
                    <p> <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' }} /></p>
                </div>
            </div>
            <br></br>
            </div>
        )}
    </>
    )
}
export default Set;


