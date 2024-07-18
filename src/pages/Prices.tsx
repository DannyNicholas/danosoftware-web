import { Link } from "react-router-dom"
import { Container, Divider, Header, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"

const Prices = () => {

    type TableItem = {
        readonly size: string,
        readonly unmouted: string,
        readonly mounted: string,
        readonly postage: string,
    }

    const tableItems: TableItem[] = [
        {
            size: '6" x 6"',
            unmouted: '10" x 10" £150',
            mounted: '10" x 10" £160',
            postage: '£12',
        },
        {
            size: '9" x 6"',
            unmouted: '12" x 10" £180',
            mounted: '14" x 11" £190',
            postage: '£12',
        },
        {
            size: '10" x 7"',
            unmouted: '14" x 11" £220',
            mounted: '16" x 12" £230',
            postage: '£12',
        },
        {
            size: '12" x 8"',
            unmouted: '16" x 12" £260',
            mounted: '20" x 16" £270',
            postage: '£12',
        },
    ]

    return (
        <Container text>
            <Header as='h2'>Prices and Commissioning</Header>
            <Divider />
            <p>
                I work from photos of your beloved pet, so the photo is key to the quality of the drawing.
                The better the photo, the better the portrait will be.
                Ideally I work from one photo but I can use a selection of photos if you do not have one clear one.
                See <Link to={'/examples/mollie'}>Mollie</Link> and <Link to={'/examples/maud'}>Maud</Link> as
                examples of where I have used more than one photo to complete a drawing.
            </p>
            <Header as='h3'>How to take the best photograph</Header>
            <ul>
                <li>
                    Take the photo outside or in natural light.
                    Avoid using the flash or taking a photo on a very bright day.
                    Taking your photo on a cloudy day or near a window is ideal.
                </li>
                <li>
                    Get down to the same level as your pet.
                </li>
                <li>
                    Take a close up, well focussed photo.
                </li>
                <li>
                    Don't reduce the size of the image when emailing.
                </li>
                <li>
                    If you don't have any digital photos to email, please send photos by registered delivery,
                    special delivery or signed for delivery. I will return them with your drawing.
                </li>
            </ul>
            <p>
                Each drawing takes between 2 and 4 weeks.
                Please let me know the date for which you would like the drawing completed
                in your initial contact with me.
                It is always best to give me as much notice as possible,
                particularly in the run up to Christmas.
                Please <a target='_blank' rel='noopener noreferrer' href='mailto:melnicholas72%40gmail.com?Subject=Portrait%20Enquiry'>contact me</a> if you have any questions.
            </p>
            <Header as='h3'>Prices</Header>
            <p>
                Here is a list of the sizes and prices of my drawings.
                If you would like a different size than listed below
                I am happy to oblige so please let me know.
            </p>
            <Table striped>
                <TableHeader>
                    <TableRow textAlign='center'>
                        <TableHeaderCell>SIZE OF DRAWING</TableHeaderCell>
                        <TableHeaderCell>UNMOUNTED SIZE AND PRICE</TableHeaderCell>
                        <TableHeaderCell>MOUNTED SIZE AND PRICE</TableHeaderCell>
                        <TableHeaderCell>POSTAGE AND PACKAGING COSTS</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        tableItems.map((row, index) =>
                            <TableRow key={index} textAlign='center'>
                                <TableCell>{row.size}</TableCell>
                                <TableCell>{row.unmouted}</TableCell>
                                <TableCell>{row.mounted}</TableCell>
                                <TableCell>{row.postage}</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </Container>
    )
}

export default Prices
